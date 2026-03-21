import { viewRuntime as runtime } from './views-runtime.js';
const {
  VIEW_GROUPS,
  MOBILE_PRIMARY_VIEWS,
  VIEW_META,
  state,
  fmt,
  htmlStat,
  progressBar,
  getDerivedStats,
  currentRank,
  activeMeta,
  getStoreMeta,
  maxInventory,
  icon,
  withIcon,
  tooltipAttr,
} = runtime;

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
  const survivabilityChip = hpRatio <= 0.35
    ? '<span class="status-chip danger">Vida crítica</span>'
    : hpRatio <= 0.65
      ? '<span class="status-chip warning">Vida media</span>'
      : '<span class="status-chip success">Vida estable</span>';

  return `
    <div class="glass-strong rounded-[2rem] p-4 sm:p-6 animate-rise-in">
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
                ${survivabilityChip}
              </div>
            </div>
            <div class="stat-pill rounded-2xl px-3.5 py-3 shrink-0 min-w-[168px]">
              <div class="text-xs text-slate-300/65 uppercase tracking-[.14em]">Recursos listos</div>
              <div class="text-base font-black text-emerald-300 leading-tight mt-1">${fmt(state.player.energy)}⚡ · ${fmt(state.player.stamina)}💪</div>
              <div class="text-[11px] text-slate-300/68 mt-1">Para combatir, forjar y explorar</div>
            </div>
          </div>

          <div class="space-y-3">
            ${progressBar(state.player.hp, ds.maxHp, 'bg-gradient-to-r from-rose-500 via-pink-400 to-orange-300 shadow-[0_0_16px_rgba(244,63,94,.3)]', 'Vida', 'Salud actual sobre tu vida máxima.')}
            ${progressBar(state.player.energy, ds.maxEnergy, 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_16px_rgba(34,211,238,.3)]', 'Energía', 'Recurso principal para varias acciones activas.')}
            ${progressBar(state.player.stamina, ds.maxStamina, 'bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_16px_rgba(74,222,128,.28)]', 'Aguante', 'Marca cuántas actividades físicas puedes sostener.')}
          </div>
        </section>

        <aside class="space-y-3">
          <div class="kpi-rail">
            ${htmlStat('Oro', fmt(state.player.gold), '', 'Moneda principal para comprar, forjar y mejorar.')}
            ${htmlStat('Pociones', fmt(state.player.potions), '', 'Curación rápida para sostener el ciclo activo.')}
            ${htmlStat('Ataque', fmt(ds.attack), '', 'Daño base de tus golpes y habilidades ofensivas.')}
            ${htmlStat('Mochila', `${state.player.inventory.length}/${maxInventory()}`, '', 'Capacidad usada frente al máximo disponible.')}
          </div>

          <div class="glass rounded-2xl p-4">
            <div class="text-[11px] uppercase tracking-[.2em] text-cyan-200/62 mb-2">Acciones inmediatas</div>
            <div class="grid grid-cols-2 gap-2">
              <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${tooltipAttr('Consume una poción para recuperar salud y sostener el ritmo de juego.')}>${withIcon('flask', 'Poción')}</button>
              <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${tooltipAttr('Limpia inventario vendiendo y reciclando excedentes.')}>${withIcon('broom', 'Limpiar')}</button>
              <button class="btn !py-2.5" onclick="game.setView('arena')" ${tooltipAttr('Abre la arena para continuar progreso activo.')}>${withIcon('swords', 'Arena')}</button>
              <button class="btn !py-2.5" onclick="game.setView('inventario')" ${tooltipAttr('Abre inventario para comparar y equipar mejoras.')}>${withIcon('backpack', 'Inventario')}</button>
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
          <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${tooltipAttr('Consume una poción para recuperar salud y seguir combatiendo.')}>${withIcon('flask', 'Poción')}</button>
          <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${tooltipAttr('Vende o recicla excedentes para despejar la mochila.')}>${withIcon('broom', 'Limpiar')}</button>
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
