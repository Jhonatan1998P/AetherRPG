import { attachSystemActions } from '../actions/system-actions.js';
import { AetherViewLayout } from './views-layout.js';
import { AetherViewContent } from './views-content.js';

(() => {
  const { STORAGE_KEY, VIEWS, VIEW_META } = window.AetherConfig;
  const { $, clamp, timeLeft, sanitizeInlineHtml } = window.AetherUtils;
  const {
    state,
    loadGame,
    saveGame,
    getDerivedStats,
    hardReset,
    mutate,
    subscribeStore,
    getStoreMeta,
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
  };
  let rafId = 0;
  let loopId = 0;
  let saveTimer = 0;

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

  function cardLabelFrom(card, index) {
    const explicit = (card.getAttribute('data-card-title') || '').trim();
    if (explicit) return explicit;

    const heading = card.querySelector('.section-title, .font-display.font-extrabold, .font-black, .font-bold, h2, h3, h4');
    const headingText = heading ? (heading.textContent || '').trim().replace(/\s+/g, ' ') : '';
    if (headingText) return headingText;

    return `Tarjeta ${index + 1}`;
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

    let mainOpened = false;
    candidates.forEach((card, index) => {
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
      label.textContent = cardLabelFrom(card, index);

      const chevron = document.createElement('span');
      chevron.className = 'card-collapsible-chevron';
      chevron.setAttribute('aria-hidden', 'true');
      chevron.textContent = '▾';

      summary.append(label, chevron);

      const body = document.createElement('div');
      body.className = 'card-collapsible-body';
      while (card.firstChild) body.appendChild(card.firstChild);

      details.append(summary, body);

      const isPrimaryCard = !mainOpened && (card.classList.contains('rounded-3xl') || index === 0);
      if (isPrimaryCard) {
        details.open = true;
        mainOpened = true;
      }

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

  function toggleMoreMenu(force) {
    mutate('ui/toggleMoreMenu', () => {
      state.ui.moreMenuOpen = typeof force === 'boolean' ? force : !state.ui.moreMenuOpen;
    }, { source: 'ui', markDirty: false });
    queueRender(['mobileNav', 'mobileSheet']);
  }

  function closeModal() {
    mutate('ui/closeModal', () => {
      state.ui.modal = null;
    }, { source: 'ui', markDirty: false });
    queueRender('modal');
  }

  function showCombat(id) {
    const entry = state.combatHistory.find((combat) => combat.id === id);
    if (!entry) return;
    mutate('ui/showCombat', () => {
      state.ui.modal = {
        type: 'combat',
        title: sanitizeInlineHtml(entry.title),
        content: `
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4">
              <div class="text-sm text-slate-300/75">${sanitizeInlineHtml(entry.zone)}</div>
              <div class="text-sm text-slate-200/90 mt-2">${sanitizeInlineHtml(Systems.summarizeReward(entry.rewards))}${entry.drop ? ` · Botin: <span class="rarity-${entry.drop.rarity}">${sanitizeInlineHtml(entry.drop.name)}</span>` : ''}</div>
            </div>
            <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
              <div class="space-y-2 text-sm">${entry.log.map(line => `<div>${sanitizeInlineHtml(line)}</div>`).join('')}</div>
            </div>
          </div>
        `,
      };
    }, { source: 'ui', markDirty: false });
    queueRender('modal');
  }

  function resetGame() {
    if (typeof confirm === 'function') {
      const ok = confirm('¿Seguro que quieres reiniciar la partida? Se perdera el progreso local.');
      if (!ok) return;
    }
    hardReset();
    setView('resumen', { keepScroll: false });
    Systems.toast('Nueva partida iniciada', 'danger');
    queueRender(Object.keys(REGION_IDS));
    scheduleSave(true);
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
      const target = event.target.closest('[data-tooltip]');
      if (target) showTooltip(target);
    });
    document.addEventListener('mouseout', (event) => {
      const target = event.target.closest('[data-tooltip]');
      if (target) hideTooltip(target);
    });
    document.addEventListener('focusin', (event) => {
      const target = event.target.closest('[data-tooltip]');
      if (target) showTooltip(target);
    });
    document.addEventListener('focusout', (event) => {
      const target = event.target.closest('[data-tooltip]');
      if (target) hideTooltip(target);
    });
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
        root._meta.lastMutationLabel,
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
    setJournalPage,
    toggleMoreMenu,
    showCombat,
    closeModal,
    hardReset: resetGame,
  };

  attachSystemActions(game, {
    systems: Systems,
    mutate,
    afterAction,
  });

  function tick() {
    const now = Date.now();
    let timersChanged = false;

    mutate('system/tick', () => {
      const elapsed = clamp((now - state.lastTick) / 1000, 0, document.hidden ? 30 : 5);
      state.lastTick = now;

      Systems.passiveRegen(elapsed);
      timersChanged = Systems.resolveFinishedTimers(now, document.hidden);

      const ds = getDerivedStats();
      state.player.hp = clamp(state.player.hp, 1, ds.maxHp);
      state.player.energy = clamp(state.player.energy, 0, ds.maxEnergy);
      state.player.stamina = clamp(state.player.stamina, 0, ds.maxStamina);
    }, { source: 'tick' });

    if (!state.lastSave || now - state.lastSave > 12000) scheduleSave();

    if (document.hidden) return;

    queueRender('hud');
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
