(() => {
  const runtime = window.AetherViewRuntime;
  const {
    VIEW_GROUPS,
    MOBILE_PRIMARY_VIEWS,
    MOBILE_OVERFLOW_VIEWS,
    VIEW_META,
    state,
    fmt,
    htmlStat,
    progressBar,
    xpNeeded,
    getDerivedStats,
    currentRank,
    activeMeta,
    getStoreMeta,
    icon,
    withIcon,
    replaceEmojiIcons,
    tooltipAttr,
  } = runtime;

  function renderHud() {
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
    return `
      <div class="glass-strong rounded-[2rem] p-4 sm:p-5">
        <div class="grid xl:grid-cols-[1.1fr,.9fr] gap-4 sm:gap-5">
          <div class="space-y-4 min-w-0">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div class="min-w-0">
                <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
                  <span class="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.7)]"></span>
                  Aether Arena · ${meta.label}
                </div>
                <h1 class="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">${state.player.name}</h1>
                <p class="text-slate-300/82 mt-2 text-sm sm:text-base">${state.player.title} · <b>${rank.title}</b></p>
                <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span class="status-chip ${saveTone}">${saveLabel}</span>
                  <span class="status-chip">Nivel ${state.player.level}</span>
                  <span class="status-chip">Zona ${meta.label}</span>
                </div>
              </div>
              <div class="stat-pill rounded-2xl px-3 py-3 shrink-0 min-w-[120px]">
                <div class="text-xs text-slate-300/65">Recursos listos</div>
                <div class="text-base font-black text-emerald-300 leading-tight">${fmt(state.player.energy)}⚡ · ${fmt(state.player.stamina)}💪</div>
              </div>
            </div>

            <div class="space-y-3">
              ${progressBar(state.player.hp, ds.maxHp, 'bg-gradient-to-r from-rose-500 via-pink-400 to-orange-300 shadow-[0_0_18px_rgba(244,63,94,.35)]', 'Vida', 'Salud actual sobre tu vida máxima.')}
              ${progressBar(state.player.energy, ds.maxEnergy, 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_18px_rgba(34,211,238,.35)]', 'Energía', 'Recurso principal para varias acciones activas.')}
              ${progressBar(state.player.stamina, ds.maxStamina, 'bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_18px_rgba(74,222,128,.32)]', 'Aguante', 'Marca cuántas actividades físicas puedes sostener.')}
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            ${htmlStat('Oro', fmt(state.player.gold), '', 'Moneda principal para comprar, forjar y mejorar.')}
            ${htmlStat('Pociones', fmt(state.player.potions), '', 'Curación rápida para sostener el ciclo activo.')}
            ${htmlStat('Ataque', fmt(ds.attack), '', 'Daño base de tus golpes y habilidades ofensivas.')}
            ${htmlStat('Mochila', `${state.player.inventory.length}/${window.AetherModel.maxInventory()}`, '', 'Capacidad usada frente al máximo disponible.')}
          </div>
        </div>
      </div>
    `;
  }

  function navButton(view, mobile = false) {
    const meta = VIEW_META[view];
    const active = state.currentView === view;
    if (mobile) {
      return `
        <button class="mobile-nav-btn ${active ? 'active' : ''}" onclick="game.setView('${view}')" aria-label="Ir a ${meta.label}" ${tooltipAttr(meta.desc)}>
          <span class="nav-icon">${icon(meta.icon)}</span>
          <span class="nav-label">${meta.label}</span>
        </button>
      `;
    }
    return `
      <button class="nav-link ${active ? 'active' : ''}" onclick="game.setView('${view}')" ${tooltipAttr(meta.desc)}>
        <span class="nav-icon">${icon(meta.icon)}</span>
        <span class="min-w-0">
          <span class="block font-bold leading-tight">${meta.label}</span>
        </span>
      </button>
    `;
  }

  function renderDesktopNav() {
    return `
      <div class="glass rounded-3xl p-4 lg:p-5 sticky top-4 space-y-5">
        <div>
          <div class="text-xs uppercase tracking-[.2em] text-slate-300/55 mb-1">Navegación</div>
          <div class="text-2xl font-display font-extrabold">Vistas</div>
          <p class="text-sm text-slate-300/74 mt-2">Cada pantalla muestra una tarea principal y deja el resto como apoyo.</p>
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
            <button class="btn btn-success !py-3" onclick="game.usePotion()" ${tooltipAttr('Consume una poción para recuperar salud y seguir combatiendo.')}>${withIcon('flask', 'Poción')}</button>
            <button class="btn btn-primary !py-3" onclick="game.autoManage()" ${tooltipAttr('Vende o recicla excedentes para despejar la mochila.')}>${withIcon('broom', 'Limpiar')}</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderMobileNav() {
    return `
      <nav class="mobile-nav glass-strong md:hidden">
        <div class="mobile-nav-grid">
          ${MOBILE_PRIMARY_VIEWS.map((view) => navButton(view, true)).join('')}
          <button class="mobile-nav-btn ${state.ui.moreMenuOpen ? 'active' : ''}" onclick="game.toggleMoreMenu()" aria-label="Abrir más vistas">
            <span class="nav-icon">${icon('menu')}</span>
            <span class="nav-label">Más</span>
          </button>
        </div>
      </nav>
    `;
  }

  function renderMobileSheet() {
    if (!state.ui.moreMenuOpen) return '';
    return `
      <div class="fixed inset-0 z-40 md:hidden">
        <button class="absolute inset-0 bg-slate-950/72 backdrop-blur-sm" onclick="game.toggleMoreMenu(false)"></button>
        <div class="absolute left-3 right-3 bottom-[calc(var(--mobile-nav-h)+var(--safe-bottom)+.4rem)] glass-strong rounded-[2rem] p-4 animate-[slideUp_.18s_ease] max-h-[72vh] overflow-y-auto">
          <div class="flex items-center justify-between gap-3 mb-4 sticky top-0 pb-3 bg-transparent">
            <div>
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Más vistas</div>
              <div class="text-xl font-display font-extrabold">Menú completo</div>
            </div>
            <button class="btn !px-3 !py-2" onclick="game.toggleMoreMenu(false)">Cerrar</button>
          </div>
          <div class="space-y-4">
            ${VIEW_GROUPS.map(group => `
              <section class="mobile-sheet-group">
                <div class="mobile-sheet-title">${group.title}</div>
                <div class="grid grid-cols-1 gap-2">
                  ${group.views.filter(view => !MOBILE_PRIMARY_VIEWS.includes(view)).map((view) => `
                    <button class="nav-link ${state.currentView === view ? 'active' : ''}" onclick="game.setView('${view}')">
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


  window.AetherViewLayout = {
    renderHud,
    renderDesktopNav,
    renderMobileNav,
    renderMobileSheet,
  };
})();
