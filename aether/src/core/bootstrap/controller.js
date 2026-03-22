import { attachSystemActions } from '../actions/system-actions.js';
import { AetherViewLayout } from './views-layout.js';
import { AetherViewContent } from './views-content.js';

(() => {
  const { STORAGE_KEY, VIEWS, VIEW_META } = window.AetherConfig;
  const { $, clamp, fmt, timeLeft, sanitizeInlineHtml } = window.AetherUtils;
  const {
    state,
    loadGame,
    saveGame,
    getDerivedStats,
    maxInventory,
    hardReset,
    mutate,
    subscribeStore,
    getStoreMeta,
    setStoreMeta,
    syncExternalState,
  } = window.AetherModel;
  const Systems = window.AetherSystems;
  const Views = {
    ...AetherViewLayout,
    ...AetherViewContent,
  };

  const VIEW_KEYS = new Set(VIEWS.map(([key]) => key));
  const REGION_IDS = {
    hud: 'hud',
    desktopNav: 'desktop-nav',
    content: 'page-view',
    modal: 'modal-root',
    mobileNav: 'mobile-nav-root',
    mobileSheet: 'mobile-sheet-root',
  };

  const htmlCache = Object.create(null);
  const dirtyRegions = new Set(Object.keys(REGION_IDS));
  const storeUnsubscribers = [];
  const tooltip = {
    el: null,
    activeTarget: null,
    hideTimer: 0,
    frame: 0,
    longPressTimer: 0,
    longPressTarget: null,
    longPressTriggered: false,
    suppressClickUntil: 0,
    suppressClickTarget: null,
  };
  let rafId = 0;
  let loopId = 0;
  let saveTimer = 0;
  const STARTER_NAME_SUGGESTIONS = [
    'Aren',
    'Lysandra',
    'Kael',
    'Nerea',
    'Darian',
    'Iria',
    'Ravian',
    'Selene',
  ];

  function regionEl(region) {
    return $(REGION_IDS[region]);
  }

  function renderRegion(region) {
    switch (region) {
      case 'hud': return Views.renderHud();
      case 'desktopNav': return Views.renderDesktopNav();
      case 'content': return Views.renderContent();
      case 'modal': return Views.renderModal();
      case 'mobileNav': return Views.renderMobileNav();
      case 'mobileSheet': return Views.renderMobileSheet();
      default: return '';
    }
  }

  function normalizeRegions(regions) {
    if (!regions) return [];
    return Array.isArray(regions) ? regions : [regions];
  }

  function queueRender(regions = Object.keys(REGION_IDS)) {
    normalizeRegions(regions).forEach((region) => dirtyRegions.add(region));
    if (rafId) return;
    rafId = window.requestAnimationFrame(() => {
      rafId = 0;
      flushRender();
    });
  }

  function updateLiveNodes() {
    const root = regionEl('content');
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('[data-live-timer="expedition"]').forEach((el) => {
      el.textContent = state.timers.expedition ? timeLeft(state.timers.expedition.endAt) : '0s';
    });
    root.querySelectorAll('[data-live-timer="job"]').forEach((el) => {
      el.textContent = state.timers.job ? timeLeft(state.timers.job.endAt) : '0s';
    });
  }

  function updateLiveHud() {
    const root = regionEl('hud');
    if (!root) return false;

    const ds = getDerivedStats();
    const hpRatio = ds.maxHp ? state.player.hp / ds.maxHp : 1;
    const hpPct = ds.maxHp ? Math.max(0, Math.min(100, (state.player.hp / ds.maxHp) * 100)) : 0;
    const energyPct = ds.maxEnergy ? Math.max(0, Math.min(100, (state.player.energy / ds.maxEnergy) * 100)) : 0;
    const staminaPct = ds.maxStamina ? Math.max(0, Math.min(100, (state.player.stamina / ds.maxStamina) * 100)) : 0;

    const survivability = hpRatio <= 0.35
      ? { text: 'Vida crítica', tone: 'danger' }
      : hpRatio <= 0.65
        ? { text: 'Vida media', tone: 'warning' }
        : { text: 'Vida estable', tone: 'success' };

    const applyText = (selector, text) => {
      const el = root.querySelector(selector);
      if (el && el.textContent !== text) el.textContent = text;
    };

    const applyBar = (key, pctValue) => {
      const el = root.querySelector(`[data-hud-bar="${key}"]`);
      if (!el) return;
      const width = `${pctValue}%`;
      if (el.style.width !== width) el.style.width = width;
    };

    applyText('[data-hud-resources]', `${fmt(state.player.energy)}⚡ · ${fmt(state.player.stamina)}💪`);
    applyText('[data-hud-current="hp"]', `${fmt(state.player.hp)} / ${fmt(ds.maxHp)}`);
    applyText('[data-hud-current="energy"]', `${fmt(state.player.energy)} / ${fmt(ds.maxEnergy)}`);
    applyText('[data-hud-current="stamina"]', `${fmt(state.player.stamina)} / ${fmt(ds.maxStamina)}`);

    applyBar('hp', hpPct);
    applyBar('energy', energyPct);
    applyBar('stamina', staminaPct);

    applyText('[data-hud-stat="gold"]', fmt(state.player.gold));
    applyText('[data-hud-stat="potions"]', fmt(state.player.potions));
    applyText('[data-hud-stat="attack"]', fmt(ds.attack));
    applyText('[data-hud-stat="inventory"]', `${state.player.inventory.length}/${maxInventory()}`);

    const survivabilityEl = root.querySelector('[data-hud-survivability]');
    if (survivabilityEl) {
      survivabilityEl.textContent = survivability.text;
      survivabilityEl.classList.remove('success', 'warning', 'danger');
      survivabilityEl.classList.add(survivability.tone);
    }

    return true;
  }

  function cardLabelFrom(card, index) {
    const explicit = (card.getAttribute('data-card-title') || '').trim();
    if (explicit) return explicit;

    const heading = card.querySelector('.section-title, .font-display.font-extrabold, .font-black, .font-bold, h2, h3, h4');
    const headingText = heading ? (heading.textContent || '').trim().replace(/\s+/g, ' ') : '';
    if (headingText) return headingText;

    return `Tarjeta ${index + 1}`;
  }

  function cardDepth(node) {
    let depth = 0;
    let current = node;
    while (current && current.parentElement) {
      depth += 1;
      current = current.parentElement;
    }
    return depth;
  }

  function cardDomPath(root, node) {
    const parts = [];
    let current = node;
    while (current && current !== root) {
      let index = 0;
      let prev = current.previousElementSibling;
      while (prev) {
        index += 1;
        prev = prev.previousElementSibling;
      }
      parts.push(index);
      current = current.parentElement;
    }
    return parts.reverse().join('.');
  }

  function setCardCollapsedPreference(view, cardKey, collapsed) {
    mutate('ui/setCardCollapsed', () => {
      if (!state.ui.collapsedCardsByView || typeof state.ui.collapsedCardsByView !== 'object') {
        state.ui.collapsedCardsByView = {};
      }
      if (!state.ui.collapsedCardsByView[view] || typeof state.ui.collapsedCardsByView[view] !== 'object') {
        state.ui.collapsedCardsByView[view] = {};
      }
      state.ui.collapsedCardsByView[view][cardKey] = !!collapsed;
    }, { source: 'ui' });
    scheduleSave();
  }

  function hydrateCollapsibleCards() {
    const root = regionEl('content');
    if (!root) return;

    const cardSelector = '.glass, .glass-strong, .surface-strong, .surface-subtle';
    const candidates = Array.from(root.querySelectorAll(cardSelector)).filter((el) => {
      if (!(el instanceof HTMLElement)) return false;
      if (el.tagName.toLowerCase() === 'details') return false;
      if (el.closest('.mobile-cta-bar')) return false;
      if (el.closest('#mobile-nav-root')) return false;
      if (el.closest('#mobile-sheet-root')) return false;

      return true;
    });

    const view = state.currentView || 'resumen';
    const collapsedByView = (state.ui.collapsedCardsByView && state.ui.collapsedCardsByView[view]) || {};
    const hasStoredPreferences = Object.keys(collapsedByView).length > 0;

    const cardEntries = candidates.map((card, order) => ({
      card,
      order,
      depth: cardDepth(card),
      domPath: cardDomPath(root, card),
    }));
    const processingEntries = [...cardEntries].sort((a, b) => b.depth - a.depth || a.order - b.order);

    processingEntries.forEach((entry) => {
      const { card, order } = entry;
      const details = document.createElement('details');

      Array.from(card.attributes).forEach((attr) => {
        details.setAttribute(attr.name, attr.value);
      });

      details.classList.add('card-collapsible');

      const summary = document.createElement('summary');
      summary.className = 'card-collapsible-summary';
      summary.setAttribute('role', 'button');

      const label = document.createElement('span');
      label.className = 'card-collapsible-label';
      const cardLabel = cardLabelFrom(card, order);
      label.textContent = cardLabel;

      const chevron = document.createElement('span');
      chevron.className = 'card-collapsible-chevron';
      chevron.setAttribute('aria-hidden', 'true');
      chevron.textContent = '▾';

      summary.append(label, chevron);

      const body = document.createElement('div');
      body.className = 'card-collapsible-body';
      while (card.firstChild) body.appendChild(card.firstChild);

      details.append(summary, body);

      const explicitCardId = (card.getAttribute('data-card-id') || '').trim();
      const cardKey = explicitCardId || `${view}:${entry.domPath}`;
      details.dataset.cardKey = cardKey;

      if (Object.prototype.hasOwnProperty.call(collapsedByView, cardKey)) {
        details.open = collapsedByView[cardKey] !== true;
      } else if (hasStoredPreferences) {
        details.open = true;
      } else {
        details.open = order === 0;
      }

      details.addEventListener('toggle', () => {
        setCardCollapsedPreference(view, cardKey, !details.open);
      });

      card.replaceWith(details);
    });
  }

  function flushRender() {
    Object.keys(REGION_IDS).forEach((region) => {
      if (!dirtyRegions.has(region)) return;
      const el = regionEl(region);
      if (!el) return;
      const html = renderRegion(region);
      if (htmlCache[region] !== html) {
        el.innerHTML = html;
        htmlCache[region] = html;
        if (region === 'content') hydrateCollapsibleCards();
      }
      dirtyRegions.delete(region);
    });

    updateLiveNodes();

    const meta = VIEW_META[state.currentView] || VIEW_META.resumen;
    document.title = `Aether Arena — ${meta.label}`;
  }

  function scheduleSave(force = false) {
    if (!force && !getStoreMeta().isDirty) return;
    if (!force && state.ui && state.ui.autoSave === false) return;
    if (force) {
      if (saveTimer) {
        clearTimeout(saveTimer);
        saveTimer = 0;
      }
      saveGame();
      return;
    }
    if (saveTimer) return;
    const run = () => {
      saveTimer = 0;
      saveGame();
    };
    if (typeof window.requestIdleCallback === 'function') {
      saveTimer = window.setTimeout(() => {
        saveTimer = 0;
        window.requestIdleCallback(run, { timeout: 1200 });
      }, 900);
      return;
    }
    saveTimer = window.setTimeout(run, 900);
  }

  function syncHash(view) {
    try {
      if (location.hash !== `#${view}`) history.replaceState(null, '', `#${view}`);
    } catch (err) {
      location.hash = view;
    }
  }

  function setView(view, options = {}) {
    if (!VIEW_KEYS.has(view)) return;
    const previous = state.currentView;
    mutate('ui/setView', () => {
      state.currentView = view;
      state.currentTab = view;
      state.ui.moreMenuOpen = false;
    }, { source: 'ui' });
    if (!options.skipHash) syncHash(view);
    queueRender(['hud', 'desktopNav', 'content', 'mobileNav', 'mobileSheet']);
    if (previous !== view && !options.keepScroll) window.scrollTo(0, 0);
    scheduleSave();
  }

  function setInventoryFilter(filter) {
    mutate('ui/setInventoryFilter', () => {
      state.ui.inventoryFilter = filter;
      state.ui.inventoryPage = 1;
    }, { source: 'ui' });
    queueRender('content');
    scheduleSave();
  }

  function setInventoryPage(page) {
    mutate('ui/setInventoryPage', () => {
      state.ui.inventoryPage = Math.max(1, Number(page) || 1);
    }, { source: 'ui', markDirty: false });
    queueRender('content');
  }

  function setJournalPage(page) {
    mutate('ui/setJournalPage', () => {
      state.ui.journalPage = Math.max(1, Number(page) || 1);
    }, { source: 'ui', markDirty: false });
    queueRender('content');
  }

  function setInventoryPageSize(size) {
    const next = clamp(Number(size) || 18, 6, 36);
    mutate('ui/setInventoryPageSize', () => {
      state.ui.inventoryPageSize = next;
      state.ui.inventoryPage = 1;
    }, { source: 'ui' });
    queueRender('content');
    scheduleSave();
  }

  function setJournalPageSize(size) {
    const next = clamp(Number(size) || 16, 8, 40);
    mutate('ui/setJournalPageSize', () => {
      state.ui.journalPageSize = next;
      state.ui.journalPage = 1;
    }, { source: 'ui' });
    queueRender('content');
    scheduleSave();
  }

  function setAutoSaveEnabled(enabled) {
    const next = !!enabled;
    mutate('ui/setAutoSaveEnabled', () => {
      state.ui.autoSave = next;
    }, { source: 'ui' });
    if (next) scheduleSave(true);
    Systems.toast(next ? 'Guardado automatico activado.' : 'Guardado automatico desactivado.', next ? 'success' : 'warning');
  }

  function requestDisableAutoSave() {
    if (state.ui.autoSave === false) return;
    mutate('ui/requestDisableAutoSave', () => {
      state.ui.modal = {
        type: 'confirm-disable-autosave',
        title: 'Desactivar guardado automático',
        content: `
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4 text-sm text-slate-200/90">
              Si lo desactivas, podrías perder progreso si cierras o recargas sin guardar manualmente.
            </div>
            <div class="glass rounded-2xl p-4 text-sm text-slate-300/82">
              Recomendación: mantenlo activo salvo que necesites control manual total.
            </div>
            <div class="grid sm:grid-cols-2 gap-3">
              <button type="button" class="btn" onclick="game.closeModal()">Cancelar</button>
              <button type="button" class="btn btn-danger" onclick="game.confirmDisableAutoSave()">Sí, desactivar</button>
            </div>
          </div>
        `,
      };
    }, { source: 'ui', markDirty: false });
    queueRender('modal');
  }

  function confirmDisableAutoSave() {
    setAutoSaveEnabled(false);
    closeModal();
  }

  function saveNow() {
    scheduleSave(true);
    Systems.toast('Partida guardada ahora.', 'success');
  }

  function toggleMoreMenu(force) {
    mutate('ui/toggleMoreMenu', () => {
      state.ui.moreMenuOpen = typeof force === 'boolean' ? force : !state.ui.moreMenuOpen;
    }, { source: 'ui', markDirty: false });
    queueRender(['mobileNav', 'mobileSheet']);
  }

  function closeModal() {
    mutate('ui/closeModal', () => {
      state.ui.modal = null;
      state.ui.pendingRenameName = '';
    }, { source: 'ui', markDirty: false });
    queueRender('modal');
  }

  function showCombat(id) {
    const entry = state.combatHistory.find((combat) => combat.id === id);
    if (!entry) return;
    const summary = entry.summary || {};
    const stats = entry.stats || {};
    const endReason = {
      enemy_defeated: 'Enemigo derrotado',
      player_defeated: 'Caída del jugador',
      turn_limit: 'Límite de turnos',
    }[summary.endReason] || 'Sin dato';
    const threat = entry.threat || {};
    const enemyMeta = entry.enemyMeta || {};
    const modifiers = Array.isArray(enemyMeta.affixes) && enemyMeta.affixes.length
      ? enemyMeta.affixes.join(', ')
      : 'Sin modificadores';
    const defeatCause = {
      desgaste_dot: 'Daño persistente acumulado.',
      burst_inicial: 'Burst inicial del enemigo.',
      falta_de_dano: 'No alcanzaste el umbral de daño necesario.',
      muro_defensivo: 'El enemigo sostuvo demasiada defensa.',
      presion_sostenida: 'Presión sostenida en varios turnos.',
    }[summary.defeatCause] || 'Sin causa registrada';
    mutate('ui/showCombat', () => {
      state.ui.modal = {
        type: 'combat',
        title: sanitizeInlineHtml(entry.title),
        content: `
          <div class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="glass rounded-2xl p-4">
                <div class="text-sm text-slate-300/75">${sanitizeInlineHtml(entry.zone)}</div>
                <div class="text-sm text-slate-200/90 mt-2">${sanitizeInlineHtml(Systems.summarizeReward(entry.rewards))}${entry.drop ? ` · Botín: <span class="rarity-${entry.drop.rarity}">${sanitizeInlineHtml(entry.drop.name)}</span>` : ''}</div>
              </div>
              <div class="glass rounded-2xl p-4">
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ritmo</div>
                <div class="text-lg font-black text-white">${Number(summary.turnsPlayed || 0)} turnos</div>
                <div class="text-xs text-slate-300/70 mt-1">${sanitizeInlineHtml(endReason)}</div>
              </div>
            </div>
            <div class="grid sm:grid-cols-4 gap-3">
              <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">Daño infligido: <b>${Number(stats.damageDone || 0)}</b></div>
              <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">Daño recibido: <b>${Number(stats.damageTaken || 0)}</b></div>
              <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">Críticos: <b>${Number(stats.crits || 0)}</b></div>
              <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">Amenaza: <b>${threat.score ? Math.round(threat.score) : 'N/D'}</b> ${threat.label ? `(${sanitizeInlineHtml(threat.label)})` : ''}</div>
            </div>
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Comparativa de poder</div>
                <div>Jugador: <b>${Math.round(Number(threat.playerPower || 0))}</b> · Enemigo: <b>${Math.round(Number(threat.enemyThreatPower || 0))}</b></div>
                <div class="text-xs text-slate-300/70 mt-1">Relación: ${threat.ratio ? `${Math.round(Number(threat.ratio) * 100)}%` : 'sin dato'}</div>
              </div>
              <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Modificadores y causa</div>
                <div class="text-slate-200/90">${sanitizeInlineHtml(modifiers)}</div>
                <div class="text-xs text-slate-300/70 mt-1">${entry.result === 'defeat' ? sanitizeInlineHtml(defeatCause) : 'No aplica (combate ganado).'}</div>
              </div>
            </div>
            <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro turno a turno</div>
              <div class="space-y-2 text-sm">${entry.log.map(line => `<div>${sanitizeInlineHtml(line)}</div>`).join('')}</div>
            </div>
          </div>
        `,
      };
    }, { source: 'ui', markDirty: false });
    queueRender('modal');
  }

  function resetGame() {
    requestNewGameReset();
  }

  function requestNewGameReset() {
    mutate('ui/requestNewGameReset', () => {
      state.ui.modal = {
        type: 'confirm-new-game',
        title: 'Iniciar nueva partida',
        content: `
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4 text-sm text-slate-200/90">
              Esta accion borra <b>todo el progreso local</b>: personaje, inventario, economia, logros y registro de partida.
            </div>
            <div class="glass rounded-2xl p-4 text-sm text-slate-300/80">
              Se abrira de inmediato el flujo de inicio para elegir nombre y arrancar desde cero.
            </div>
            <div class="grid sm:grid-cols-2 gap-3">
              <button type="button" class="btn" onclick="game.closeModal()">Cancelar</button>
              <button type="button" class="btn btn-danger" onclick="game.confirmNewGameReset()">Eliminar datos y continuar</button>
            </div>
          </div>
        `,
      };
    }, { source: 'ui', markDirty: false });
    queueRender('modal');
  }

  function confirmNewGameReset() {
    hardReset();
    setView('resumen', { keepScroll: false });
    Systems.toast('Datos eliminados. Configura tu nueva partida.', 'danger');
    queueRender(Object.keys(REGION_IDS));
  }

  function normalizePlayerName(value = '') {
    return String(value)
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 22);
  }

  function readPendingNameFromDom() {
    const input = document.getElementById('new-game-name');
    if (!input || typeof input.value !== 'string') return '';
    return normalizePlayerName(input.value);
  }

  function setPendingPlayerName(value = '') {
    const next = normalizePlayerName(value);
    mutate('ui/setPendingPlayerName', () => {
      state.ui.pendingPlayerName = next;
    }, { source: 'ui', markDirty: false });
    queueRender('modal');
  }

  function suggestPlayerName() {
    const suggestion = STARTER_NAME_SUGGESTIONS[Math.floor(Math.random() * STARTER_NAME_SUGGESTIONS.length)] || 'Aren';
    setPendingPlayerName(suggestion);
  }

  function readPendingRenameFromDom() {
    const input = document.getElementById('rename-player-name');
    if (!input || typeof input.value !== 'string') return '';
    return normalizePlayerName(input.value);
  }

  function setPendingRenameName(value = '') {
    const next = normalizePlayerName(value);
    mutate('ui/setPendingRenameName', () => {
      state.ui.pendingRenameName = next;
    }, { source: 'ui', markDirty: false });
  }

  function requestRenamePlayer() {
    const suggested = normalizePlayerName(state.player.name || '');
    mutate('ui/requestRenamePlayer', () => {
      state.ui.pendingRenameName = suggested;
      state.ui.modal = {
        type: 'rename-player',
        title: 'Renombrar gladiador',
        content: `
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4 text-sm text-slate-300/82">
              Cambiar nombre actual: <b>${sanitizeInlineHtml(state.player.name || 'Gladiador')}</b>
            </div>
            <div class="glass rounded-2xl p-4">
              <label for="rename-player-name" class="text-xs uppercase tracking-[.18em] text-slate-300/60">Nuevo nombre</label>
              <input
                id="rename-player-name"
                type="text"
                maxlength="22"
                autocomplete="nickname"
                spellcheck="false"
                value="${sanitizeInlineHtml(suggested)}"
                oninput="game.setPendingRenameName(this.value)"
                placeholder="Ej. Nerea"
                class="mt-2 w-full rounded-xl border border-white/12 bg-slate-950/55 px-4 py-3 text-base text-slate-100 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
              />
              <div class="mt-3 text-xs text-slate-300/62">Entre 2 y 22 caracteres. No afecta tu progreso ni tus estadisticas.</div>
            </div>
            <div class="grid sm:grid-cols-2 gap-3">
              <button type="button" class="btn" onclick="game.closeModal()">Cancelar</button>
              <button type="button" class="btn btn-primary" onclick="game.confirmRenamePlayer()">Guardar nombre</button>
            </div>
          </div>
        `,
      };
    }, { source: 'ui', markDirty: false });
    queueRender('modal');
  }

  function confirmRenamePlayer(name = '') {
    const direct = normalizePlayerName(name);
    const domValue = readPendingRenameFromDom();
    const pending = normalizePlayerName(state.ui.pendingRenameName || '');
    const finalName = direct || domValue || pending;
    const current = normalizePlayerName(state.player.name || '');

    if (finalName.length < 2) {
      Systems.toast('El nombre debe tener al menos 2 caracteres.', 'warning');
      return;
    }
    if (finalName === current) {
      closeModal();
      return;
    }

    mutate('ui/confirmRenamePlayer', () => {
      state.player.name = finalName;
      state.ui.pendingRenameName = '';
      state.ui.modal = null;
      state.journal.unshift({
        id: `${Date.now().toString(36)}_rename`,
        ts: Date.now(),
        icon: '📛',
        text: `El gladiador adopta un nuevo nombre: ${sanitizeInlineHtml(finalName)}.`,
      });
      state.journal = state.journal.slice(0, 120);
    }, { source: 'ui' });

    queueRender(['hud', 'content', 'modal']);
    scheduleSave(true);
    Systems.toast(`Nombre actualizado a ${finalName}.`, 'success');
  }

  function completeNewGameOnboarding(name = '') {
    const direct = normalizePlayerName(name);
    const pending = normalizePlayerName(state.ui.pendingPlayerName || '');
    const domValue = readPendingNameFromDom();
    const finalName = direct || domValue || pending;

    if (finalName.length < 2) {
      Systems.toast('Elige un nombre de al menos 2 caracteres.', 'warning');
      return;
    }

    mutate('ui/completeOnboarding', () => {
      state.player.name = finalName;
      state.player.onboardingCompleted = true;
      state.ui.pendingPlayerName = '';
      state.ui.modal = null;
      const introLine = `El gladiador ${sanitizeInlineHtml(finalName)} jura su entrada en la arena.`;
      state.journal.unshift({ id: `${Date.now().toString(36)}_intro`, ts: Date.now(), icon: '🏛️', text: introLine });
      state.journal = state.journal.slice(0, 120);
    }, { source: 'ui' });

    queueRender(Object.keys(REGION_IDS));
    scheduleSave(true);
    Systems.toast(`Bienvenido, ${finalName}.`, 'success');
  }

  function afterAction(regions) {
    queueRender(regions || ['hud', 'content', 'mobileSheet']);
    scheduleSave();
  }

  function initTooltips() {
    const el = document.createElement('div');
    el.id = 'ui-tooltip';
    el.className = 'pointer-events-none fixed z-[80] hidden max-w-[290px] rounded-2xl border border-cyan-300/24 bg-slate-950/92 px-3 py-2 text-xs leading-relaxed text-slate-100 backdrop-blur-xl shadow-[0_12px_40px_rgba(2,6,23,.55)] opacity-0 translate-y-1 transition duration-150 ease-out';
    document.body.appendChild(el);
    tooltip.el = el;

    function isCoarsePointer() {
      return window.matchMedia('(hover: none), (pointer: coarse)').matches;
    }

    function tooltipTargetFromEvent(event) {
      const raw = event.target;
      if (!(raw instanceof Element)) return null;
      return raw.closest('[data-tooltip]');
    }

    function isInteractiveTarget(target) {
      if (!target || !(target instanceof Element)) return false;
      return target.matches('button, a, input, select, textarea, [role="button"], [onclick], .btn, .nav-link, .mobile-nav-btn');
    }

    function isButtonLikeTarget(target) {
      if (!target || !(target instanceof Element)) return false;
      return target.matches('button, .btn, .nav-link, .mobile-nav-btn, [role="button"]');
    }

    function clearLongPressState() {
      if (tooltip.longPressTimer) {
        clearTimeout(tooltip.longPressTimer);
        tooltip.longPressTimer = 0;
      }
      if (tooltip.longPressTarget) tooltip.longPressTarget.classList.remove('tooltip-touch-armed');
      tooltip.longPressTarget = null;
      tooltip.longPressTriggered = false;
    }

    function positionNow(target) {
      if (!target || !tooltip.el || tooltip.el.classList.contains('hidden')) return;
      const rect = target.getBoundingClientRect();
      const tooltipRect = tooltip.el.getBoundingClientRect();
      const top = Math.max(12, rect.top - tooltipRect.height - 10);
      let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
      left = Math.max(12, Math.min(left, window.innerWidth - tooltipRect.width - 12));
      tooltip.el.style.top = `${top}px`;
      tooltip.el.style.left = `${left}px`;
    }

    function positionTooltip(target = tooltip.activeTarget) {
      if (!target || !tooltip.el) return;
      if (tooltip.frame) return;
      tooltip.frame = window.requestAnimationFrame(() => {
        tooltip.frame = 0;
        positionNow(target);
      });
    }

    function showTooltip(target) {
      const text = target && target.getAttribute('data-tooltip');
      if (!text || !tooltip.el) return;
      if (tooltip.hideTimer) {
        clearTimeout(tooltip.hideTimer);
        tooltip.hideTimer = 0;
      }
      tooltip.activeTarget = target;
      tooltip.el.innerHTML = text;
      tooltip.el.classList.remove('hidden');
      window.requestAnimationFrame(() => {
        if (!tooltip.el) return;
        tooltip.el.classList.remove('opacity-0', 'translate-y-1');
      });
      positionTooltip(target);
    }

    function hideTooltip(target) {
      if (!tooltip.activeTarget || !tooltip.el) return;
      if (target && tooltip.activeTarget !== target && tooltip.activeTarget.contains(target)) return;
      tooltip.activeTarget = null;
      tooltip.el.classList.add('opacity-0', 'translate-y-1');
      tooltip.hideTimer = window.setTimeout(() => {
        if (!tooltip.el) return;
        tooltip.el.classList.add('hidden');
        tooltip.hideTimer = 0;
      }, 140);
    }

    document.addEventListener('mouseover', (event) => {
      if (isCoarsePointer()) return;
      const target = tooltipTargetFromEvent(event);
      if (target) showTooltip(target);
    });
    document.addEventListener('mouseout', (event) => {
      if (isCoarsePointer()) return;
      const target = tooltipTargetFromEvent(event);
      if (target) hideTooltip(target);
    });
    document.addEventListener('focusin', (event) => {
      const target = tooltipTargetFromEvent(event);
      if (target) showTooltip(target);
    });
    document.addEventListener('focusout', (event) => {
      const target = tooltipTargetFromEvent(event);
      if (target) hideTooltip(target);
    });
    document.addEventListener('pointerdown', (event) => {
      if (!isCoarsePointer()) return;
      const target = tooltipTargetFromEvent(event);
      if (!target) {
        hideTooltip();
        clearLongPressState();
        return;
      }
      if (!isButtonLikeTarget(target)) return;
      clearLongPressState();
      tooltip.longPressTarget = target;
      tooltip.longPressTarget.classList.add('tooltip-touch-armed');
      tooltip.longPressTimer = window.setTimeout(() => {
        if (!tooltip.longPressTarget) return;
        tooltip.longPressTriggered = true;
        showTooltip(tooltip.longPressTarget);
      }, 450);
    }, true);
    document.addEventListener('pointerup', () => {
      if (!isCoarsePointer()) return;
      if (tooltip.longPressTriggered && tooltip.longPressTarget) {
        tooltip.suppressClickUntil = Date.now() + 750;
        tooltip.suppressClickTarget = tooltip.longPressTarget;
        window.setTimeout(() => {
          if (Date.now() >= tooltip.suppressClickUntil) hideTooltip();
        }, 1400);
      }
      clearLongPressState();
    }, true);
    document.addEventListener('pointercancel', () => {
      clearLongPressState();
    }, true);
    document.addEventListener('click', (event) => {
      if (!isCoarsePointer()) return;
      const target = tooltipTargetFromEvent(event);
      if (!target) return;
      if (isButtonLikeTarget(target)) {
        if (tooltip.suppressClickTarget === target && Date.now() <= tooltip.suppressClickUntil) {
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      }
      if (!isInteractiveTarget(target)) {
        event.preventDefault();
        event.stopPropagation();
        if (tooltip.activeTarget === target && tooltip.el && !tooltip.el.classList.contains('hidden')) {
          hideTooltip();
        } else {
          showTooltip(target);
        }
      }
    }, true);
    document.addEventListener('mousemove', () => {
      if (tooltip.activeTarget) positionTooltip(tooltip.activeTarget);
    });
    window.addEventListener('scroll', () => {
      if (tooltip.activeTarget) positionTooltip(tooltip.activeTarget);
    }, true);
    window.addEventListener('resize', () => {
      if (tooltip.activeTarget) positionTooltip(tooltip.activeTarget);
    });
  }

  function subscribeRenderBridges() {
    while (storeUnsubscribers.length) {
      const unsub = storeUnsubscribers.pop();
      if (typeof unsub === 'function') unsub();
    }

    storeUnsubscribers.push(
      subscribeStore((root) => root._meta && [
        root._meta.isSaving,
        root._meta.isDirty,
        root._meta.lastSaveAt,
      ].join('|'), () => queueRender('hud')),
    );

    storeUnsubscribers.push(
      subscribeStore((root) => root._meta ? root._meta.syncRevision : 0, (next, prev) => {
        if (next !== prev) queueRender(Object.keys(REGION_IDS));
      }),
    );

    storeUnsubscribers.push(
      subscribeStore((root) => root.ui ? root.ui.modal : null, () => queueRender('modal')),
    );

    storeUnsubscribers.push(
      subscribeStore((root) => root.ui ? root.ui.moreMenuOpen : false, () => queueRender(['mobileNav', 'mobileSheet'])),
    );
  }

  const game = {
    setView,
    setTab: setView,
    setInventoryFilter,
    setInventoryPage,
    setInventoryPageSize,
    setJournalPage,
    setJournalPageSize,
    setAutoSaveEnabled,
    requestDisableAutoSave,
    confirmDisableAutoSave,
    saveNow,
    toggleMoreMenu,
    showCombat,
    closeModal,
    hardReset: resetGame,
    requestNewGameReset,
    confirmNewGameReset,
    setPendingPlayerName,
    suggestPlayerName,
    completeNewGameOnboarding,
    requestRenamePlayer,
    setPendingRenameName,
    confirmRenamePlayer,
  };

  attachSystemActions(game, {
    systems: Systems,
    mutate,
    afterAction,
  });

  function tick() {
    const now = Date.now();
    let timersChanged = false;
    let resourcesChanged = false;
    const beforeHp = state.player.hp;
    const beforeEnergy = state.player.energy;
    const beforeStamina = state.player.stamina;

    mutate('system/tick', () => {
      const elapsed = clamp((now - state.lastTick) / 1000, 0, document.hidden ? 30 : 5);
      state.lastTick = now;

      Systems.passiveRegen(elapsed);
      timersChanged = Systems.resolveFinishedTimers(now, document.hidden);

      const ds = getDerivedStats();
      state.player.hp = clamp(state.player.hp, 1, ds.maxHp);
      state.player.energy = clamp(state.player.energy, 0, ds.maxEnergy);
      state.player.stamina = clamp(state.player.stamina, 0, ds.maxStamina);
      resourcesChanged = state.player.hp !== beforeHp
        || state.player.energy !== beforeEnergy
        || state.player.stamina !== beforeStamina;
    }, { source: 'tick', markDirty: false });

    if ((resourcesChanged || timersChanged) && !getStoreMeta().isDirty) {
      setStoreMeta({ isDirty: true, lastSource: 'tick' });
    }

    if (!state.lastSave || now - state.lastSave > 12000) scheduleSave();

    if (document.hidden) return;

    if (resourcesChanged || timersChanged) {
      if (!updateLiveHud()) queueRender('hud');
    }
    updateLiveNodes();
    if (timersChanged) {
      queueRender(['content', 'modal']);
      scheduleSave();
    } else if (state.ui.modal) {
      queueRender('modal');
    }
    if (state.ui.moreMenuOpen) queueRender(['mobileNav', 'mobileSheet']);
  }

  function restartLoop() {
    if (loopId) clearInterval(loopId);
    loopId = window.setInterval(tick, document.hidden ? 4000 : 1000);
  }

  function restoreRoute() {
    const hashView = (location.hash || '').replace('#', '').trim();
    const initialView = VIEW_KEYS.has(hashView) ? hashView : (state.currentView || 'resumen');
    setView(initialView, { skipHash: false, keepScroll: true });
  }

  function handleHashChange() {
    const hashView = (location.hash || '').replace('#', '').trim();
    if (VIEW_KEYS.has(hashView) && hashView !== state.currentView) {
      setView(hashView, { skipHash: true });
    }
  }

  function handleStorageSync(event) {
    if (event.key !== STORAGE_KEY) return;
    if (event.newValue === event.oldValue) return;
    const ok = syncExternalState(event.newValue);
    if (ok) {
      queueRender(Object.keys(REGION_IDS));
      Systems.toast('Partida sincronizada desde otra pestana', 'cyan');
    }
  }

  function init() {
    initTooltips();
    loadGame();
    mutate('system/offlineCatchup:init', () => {
      Systems.offlineCatchup();
    }, { source: 'lifecycle' });
    subscribeRenderBridges();
    restoreRoute();
    queueRender(Object.keys(REGION_IDS));
    scheduleSave();
    restartLoop();

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('visibilitychange', () => {
      restartLoop();
      if (!document.hidden) {
        mutate('system/offlineCatchup:resume', () => {
          Systems.offlineCatchup();
        }, { source: 'lifecycle' });
        queueRender(['hud', 'content', 'modal']);
      }
    });
    window.addEventListener('storage', handleStorageSync);
    window.addEventListener('pagehide', () => scheduleSave(true));
    window.addEventListener('beforeunload', () => scheduleSave(true));
  }

  window.game = game;
  window.AetherController = {
    queueRender,
    setView,
    closeModal,
    showCombat,
    scheduleSave,
  };

  init();
})();
