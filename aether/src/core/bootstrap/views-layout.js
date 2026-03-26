import { viewRuntime as runtime } from './views-runtime.js';
const {
  VIEW_GROUPS,
  MOBILE_PRIMARY_VIEWS,
  VIEW_META,
  state,
  fmt,
  htmlStat,
  getDerivedStats,
  currentRank,
  activeMeta,
  getStoreMeta,
  maxInventory,
  icon,
  withIcon,
  escapeAttr,
  tooltipAttr,
} = runtime;

function clampRange(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function int(value) {
  return Math.max(0, Math.round(Number(value || 0)));
}

function formatEta(seconds) {
  const total = int(seconds);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

function regenDetail(resourceKey, state, ds) {
  const level = Math.max(1, Number(state.player.level || 1));
  const strength = Math.max(0, Number((state.player.training && state.player.training.strength) || 0));
  const endurance = Math.max(0, Number((state.player.training && state.player.training.endurance) || 0));
  const weightedAttribute = strength * 0.3 + endurance * 0.7;
  const attributeFactor = 1 + Math.log1p(weightedAttribute) * 0.08;
  const stageFactor = level < 15
    ? 0.9
    : level < 35
      ? 1.03
      : 1.08;
  const regenPct = Number(ds.regenPct || 0);
  const momentum = Math.max(0, Number((state.player.relics && state.player.relics.momentum) || 0));

  const values = {
    hp: {
      current: Number(state.player.hp || 0),
      max: Number(ds.maxHp || 0),
      base: 0.1 + regenPct * 0.14,
      min: 0.06,
      maxClamp: 0.48,
      label: 'Vida',
      tone: 'text-rose-200 bg-rose-400/18 border-rose-300/28',
      fill: 'from-rose-400 via-pink-300 to-orange-300',
    },
    energy: {
      current: Number(state.player.energy || 0),
      max: Number(ds.maxEnergy || 0),
      base: 0.12 + momentum * 0.006,
      min: 0.07,
      maxClamp: 0.38,
      label: 'Energía',
      tone: 'text-cyan-200 bg-cyan-400/18 border-cyan-300/28',
      fill: 'from-cyan-300 via-sky-300 to-blue-400',
    },
    stamina: {
      current: Number(state.player.stamina || 0),
      max: Number(ds.maxStamina || 0),
      base: 0.14 + momentum * 0.007,
      min: 0.08,
      maxClamp: 0.5,
      label: 'Aguante',
      tone: 'text-emerald-200 bg-emerald-400/18 border-emerald-300/28',
      fill: 'from-emerald-300 via-lime-300 to-yellow-300',
    },
  };

  const meta = values[resourceKey];
  if (!meta || meta.max <= 0) return 'Recurso sin datos de regeneración.';

  const perHourPctRaw = meta.base * attributeFactor * stageFactor;
  const perHourPct = clampRange(perHourPctRaw, meta.min, meta.maxClamp);
  const perSecondFlat = (meta.max * perHourPct) / 3600;
  const missing = Math.max(0, meta.max - meta.current);
  const secondsToFull = perSecondFlat > 0 ? missing / perSecondFlat : 0;
  const pctCurrent = meta.max > 0 ? clampRange((meta.current / meta.max) * 100, 0, 100) : 0;
  const regenPerHour = perSecondFlat * 3600;
  const secondsPerPoint = perSecondFlat > 0 ? Math.max(1, Math.round(1 / perSecondFlat)) : 0;

  return `
    <div class="space-y-2.5">
      <div class="flex items-center justify-between gap-2">
        <span class="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[.14em] ${meta.tone}">${meta.label}</span>
        <span class="text-[10px] text-slate-300/72 uppercase tracking-[.12em]">Regeneración</span>
      </div>
      <div class="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
        <div class="flex items-center justify-between gap-2 text-[11px]">
          <span class="text-slate-300/75">Actual</span>
          <b class="text-white">${fmt(int(meta.current))} / ${fmt(int(meta.max))}</b>
        </div>
        <div class="mt-2 h-1.5 rounded-full bg-black/35 overflow-hidden">
          <span class="block h-full rounded-full bg-gradient-to-r ${meta.fill}" style="width:${Math.round(pctCurrent)}%"></span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-1.5 text-[11px]">
        <div class="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1.5"><span class="text-slate-300/72">+ / hora</span><div class="font-bold text-white">${fmt(int(regenPerHour))}</div></div>
        <div class="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1.5"><span class="text-slate-300/72">Cadencia</span><div class="font-bold text-white">${secondsPerPoint > 0 ? `+1 cada ${secondsPerPoint}s` : 'Sin regen'}</div></div>
      </div>
      <div class="flex items-center justify-between text-[11px]">
        <span class="text-slate-300/75">Carga completa</span>
        <span class="font-semibold text-cyan-200">${formatEta(secondsToFull)}</span>
      </div>
      <div class="text-[10px] text-slate-300/62">Mantén presionado en móvil para ver este detalle.</div>
    </div>
  `.trim();
}

export function renderHud() {
  const ds = getDerivedStats();
  const rank = currentRank();
  const meta = activeMeta();
  const storeMeta = getStoreMeta();
  const saveLabel = storeMeta.isSaving
    ? 'Guardando...'
    : storeMeta.isDirty
      ? 'Cambios pendientes'
      : storeMeta.lastSaveAt
        ? `Guardado ${new Date(storeMeta.lastSaveAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
        : 'Sin guardado';
  const saveTone = storeMeta.isSaving ? 'warning' : (storeMeta.isDirty ? 'danger' : 'success');
  const hpRatio = ds.maxHp ? state.player.hp / ds.maxHp : 1;
  const survivability = hpRatio <= 0.35
    ? { text: 'Vida crítica', tone: 'danger' }
    : hpRatio <= 0.65
      ? { text: 'Vida media', tone: 'warning' }
      : { text: 'Vida estable', tone: 'success' };
  const hpPct = ds.maxHp ? Math.max(0, Math.min(100, (state.player.hp / ds.maxHp) * 100)) : 0;
  const energyPct = ds.maxEnergy ? Math.max(0, Math.min(100, (state.player.energy / ds.maxEnergy) * 100)) : 0;
  const staminaPct = ds.maxStamina ? Math.max(0, Math.min(100, (state.player.stamina / ds.maxStamina) * 100)) : 0;
  const hpTooltip = regenDetail('hp', state, ds);
  const energyTooltip = regenDetail('energy', state, ds);
  const staminaTooltip = regenDetail('stamina', state, ds);

  return `
    <div class="glass-strong rounded-[2rem] p-4 sm:p-6">
      <div class="grid xl:grid-cols-[minmax(0,1.35fr),minmax(310px,.65fr)] gap-5 sm:gap-6">
        <section class="space-y-4 min-w-0">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
                <span class="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.65)]"></span>
                Aether Arena · ${meta.label}
              </div>
              <h1 class="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.05]">${state.player.name}</h1>
              <p class="text-slate-300/82 mt-2 text-sm sm:text-base">${state.player.title} · <b>${rank.title}</b></p>
              <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span class="status-chip ${saveTone}">${saveLabel}</span>
                <span class="status-chip">Nivel ${state.player.level}</span>
                <span class="status-chip">Zona ${meta.label}</span>
                <span class="status-chip ${survivability.tone}" data-hud-survivability>${survivability.text}</span>
              </div>
            </div>
            <div class="stat-pill rounded-2xl px-3.5 py-3 shrink-0 min-w-[168px]">
              <div class="text-xs text-slate-300/65 uppercase tracking-[.14em]">Recursos listos</div>
              <div class="text-base font-black text-emerald-300 leading-tight mt-1 inline-flex items-center gap-2" data-hud-resources>${fmt(state.player.energy)}${icon('bolt', 'h-4 w-4')} · ${fmt(state.player.stamina)}${icon('dumbbell', 'h-4 w-4')}</div>
              <div class="text-[11px] text-slate-300/68 mt-1">Para combatir, forjar y explorar</div>
            </div>
          </div>

          <div class="space-y-3">
            <div data-hud-resource="hp" data-tooltip-html="${escapeAttr(hpTooltip)}">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Vida</span>
                <span class="font-semibold text-slate-100" data-hud-current="hp">${fmt(state.player.hp)} / ${fmt(ds.maxHp)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-300 shadow-[0_0_16px_rgba(244,63,94,.3)]" data-hud-bar="hp" style="width:${hpPct}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
            <div data-hud-resource="energy" data-tooltip-html="${escapeAttr(energyTooltip)}">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Energía</span>
                <span class="font-semibold text-slate-100" data-hud-current="energy">${fmt(state.player.energy)} / ${fmt(ds.maxEnergy)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_16px_rgba(34,211,238,.3)]" data-hud-bar="energy" style="width:${energyPct}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
            <div data-hud-resource="stamina" data-tooltip-html="${escapeAttr(staminaTooltip)}">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Aguante</span>
                <span class="font-semibold text-slate-100" data-hud-current="stamina">${fmt(state.player.stamina)} / ${fmt(ds.maxStamina)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_16px_rgba(74,222,128,.28)]" data-hud-bar="stamina" style="width:${staminaPct}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <aside class="space-y-3">
          <div class="kpi-rail">
            ${htmlStat('Oro', `<span data-hud-stat="gold">${fmt(state.player.gold)}</span>`, '', 'Moneda principal para comprar, forjar y mejorar.')}
            ${htmlStat('Pociones', `<span data-hud-stat="potions">${fmt(state.player.potions)}</span>`, '', 'Curación rápida para sostener el ciclo activo.')}
            ${htmlStat('Ataque', `<span data-hud-stat="attack">${fmt(ds.attack)}</span>`, '', 'Daño base de tus golpes y habilidades ofensivas.')}
            ${htmlStat('Mochila', `<span data-hud-stat="inventory">${state.player.inventory.length}/${maxInventory()}</span>`, '', 'Capacidad usada frente al máximo disponible.')}
          </div>

          <div class="glass rounded-2xl p-4">
            <div class="text-[11px] uppercase tracking-[.2em] text-cyan-200/62 mb-2">Acciones inmediatas</div>
            <div class="grid grid-cols-2 gap-2">
              <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${tooltipAttr('Consume una poción para recuperar vida al instante. Úsala cuando la barra roja limite tu siguiente combate.')}>${withIcon('flask', 'Poción')}</button>
              <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${tooltipAttr('Gestiona excedentes de mochila vendiendo y reciclando automáticamente. Libera espacio sin revisar pieza por pieza.')}>${withIcon('broom', 'Limpiar')}</button>
              <button class="btn !py-2.5" onclick="game.setView('arena')" ${tooltipAttr('Abre Arena para progreso activo: oro, experiencia y botín inmediato según tu zona actual.')}>${withIcon('swords', 'Arena')}</button>
              <button class="btn !py-2.5" onclick="game.setView('inventario')" ${tooltipAttr('Abre Inventario para comparar equipo, aplicar filtros y equipar mejoras con impacto real.')}>${withIcon('backpack', 'Inventario')}</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function navButton(view, mobile = false) {
  const meta = VIEW_META[view];
  const active = state.currentView === view;
  const currentAttr = active ? 'aria-current="page"' : '';
  if (mobile) {
    return `
      <button type="button" class="mobile-nav-btn ${active ? 'active' : ''}" onclick="game.setView('${view}')" aria-label="Ir a ${meta.label}" ${currentAttr} ${tooltipAttr(meta.desc)}>
        <span class="nav-icon">${icon(meta.icon)}</span>
        <span class="nav-label">${meta.label}</span>
      </button>
    `;
  }
  return `
    <button type="button" class="nav-link ${active ? 'active' : ''}" onclick="game.setView('${view}')" ${currentAttr} ${tooltipAttr(meta.desc)}>
      <span class="nav-icon">${icon(meta.icon)}</span>
      <span class="min-w-0">
        <span class="block font-bold leading-tight">${meta.label}</span>
        <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${meta.short}</span>
      </span>
    </button>
  `;
}

export function renderDesktopNav() {
  return `
    <div class="glass rounded-3xl p-4 lg:p-5 sticky top-4 space-y-5">
      <div>
        <div class="text-xs uppercase tracking-[.2em] text-slate-300/55 mb-1">Navegación</div>
        <div class="text-2xl font-display font-extrabold">Vistas</div>
        <p class="text-sm text-slate-300/74 mt-2">Cada pantalla mantiene una acción principal y módulos de apoyo.</p>
      </div>

      <div class="space-y-4">
        ${VIEW_GROUPS.map(group => `
          <div>
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45 mb-2">${group.title}</div>
            <div class="grid gap-2">
              ${group.views.map(view => navButton(view)).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="space-y-2">
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45">Acciones rápidas</div>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${tooltipAttr('Recupera vida de forma inmediata para mantenerte en combate. Recomendado antes de entrar a élite o mazmorra.')}>${withIcon('flask', 'Poción')}</button>
          <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${tooltipAttr('Despeja mochila vendiendo y reciclando sobrantes. Mantener espacio evita perder mejoras por límite de capacidad.')}>${withIcon('broom', 'Limpiar')}</button>
        </div>
      </div>
    </div>
  `;
}

export function renderMobileNav() {
  return `
    <nav class="mobile-nav glass-strong md:hidden" style="--mobile-nav-h: 6.25rem;">
      <div class="mobile-nav-grid">
        ${MOBILE_PRIMARY_VIEWS.map((view) => navButton(view, true)).join('')}
        <button type="button" class="mobile-nav-btn ${state.ui.moreMenuOpen ? 'active' : ''}" onclick="game.toggleMoreMenu()" aria-label="Abrir más vistas">
          <span class="nav-icon">${icon('menu')}</span>
          <span class="nav-label">Más</span>
        </button>
      </div>
    </nav>
  `;
}

export function renderMobileSheet() {
  if (!state.ui.moreMenuOpen) return '';
  return `
    <div class="fixed inset-0 z-40 md:hidden">
      <button type="button" class="absolute inset-0 bg-slate-950/78 backdrop-blur-sm" onclick="game.toggleMoreMenu(false)" aria-label="Cerrar menú"></button>
      <div class="absolute left-3 right-3 bottom-[calc(var(--mobile-nav-h,0px)+env(safe-area-inset-bottom,0px)+.4rem)] glass-strong rounded-[1.9rem] p-4 animate-rise-in max-h-[72vh] overflow-y-auto">
        <div class="flex items-center justify-between gap-3 mb-4 sticky top-0 pb-3 bg-transparent">
          <div>
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Más vistas</div>
            <div class="text-xl font-display font-extrabold">Menú completo</div>
          </div>
          <button type="button" class="btn !px-3 !py-2" onclick="game.toggleMoreMenu(false)">Cerrar</button>
        </div>
        <div class="space-y-4">
          ${VIEW_GROUPS.map(group => `
            <section class="mobile-sheet-group">
              <div class="mobile-sheet-title">${group.title}</div>
              <div class="grid grid-cols-1 gap-2">
                ${group.views.filter(view => !MOBILE_PRIMARY_VIEWS.includes(view)).map((view) => `
                  <button type="button" class="nav-link ${state.currentView === view ? 'active' : ''}" onclick="game.setView('${view}')" ${state.currentView === view ? 'aria-current="page"' : ''}>
                    <span class="nav-icon">${icon(VIEW_META[view].icon)}</span>
                    <span class="min-w-0">
                      <span class="block font-bold leading-tight">${VIEW_META[view].label}</span>
                      <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${VIEW_META[view].short}</span>
                    </span>
                  </button>
                `).join('') || '<div class="text-sm text-slate-300/55 px-2 py-1">Ya visible en la barra inferior.</div>'}
              </div>
            </section>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
export const AetherViewLayout = {
  renderHud,
  renderDesktopNav,
  renderMobileNav,
  renderMobileSheet,
};
