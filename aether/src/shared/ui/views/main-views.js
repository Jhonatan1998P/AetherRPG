export function createMainViews(deps) {
  const {
    SLOT_ORDER,
    SLOT_NAMES,
    ZONES,
    SKILLS,
    state,
    maxInventory,
    getPetData,
    getDerivedStats,
    currentRank,
    zoneForPlayer,
    isZoneUnlocked,
    summarizeReward,
    fmt,
    pct,
    htmlStat,
    progressBar,
    timeLeft,
    icon,
    rarityName,
    rarityBadge,
    translateFilter,
    statLabel,
    statTooltip,
    tooltipAttr,
    statusChip,
    sectionHeader,
    infoCard,
    actionButton,
    actionBar,
    pageLead,
    questCard,
    equippedSlotCard,
    inventoryCards,
    zoneSelector,
  } = deps;

  function expeditionTimerText() {
    return state.timers.expedition ? timeLeft(state.timers.expedition.endAt) : '0s';
  }

  function jobTimerText() {
    return state.timers.job ? timeLeft(state.timers.job.endAt) : '0s';
  }

  function renderResumen() {
    const zone = zoneForPlayer();
    const mainQuest = state.quests.find((q) => !q.claimed) || state.quests[0];
    return `
      <div class="space-y-5">
        ${pageLead('resumen', `Zona activa: <b>${zone.name}</b>`, [
          actionButton('⚔️ Continuar en arena', 'btn-primary', "game.setView('arena')", 'Abre la arena para seguir con combates activos y botín.'),
          actionButton('🧭 Lanzar expedición', '', "game.setView('expedicion')", 'Accede a expediciones para progreso pasivo y materiales.'),
          actionButton('🎒 Revisar mochila', 'btn-violet', "game.setView('inventario')", 'Abre el inventario para equipar, vender o reciclar piezas.')
        ].join(''))}
        ${actionBar([
          actionButton('⚔️ Arena', 'btn-primary !py-3', "game.setView('arena')"),
          actionButton('🎒 Mochila', '!py-3', "game.setView('inventario')")
        ])}
        <div class="grid xl:grid-cols-[1.15fr,.85fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Tu ciclo', 'Haz solo una de estas cosas ahora', 'El resumen deja de intentar mostrar todo. Aquí solo eliges el siguiente paso.')}
            <div class="grid md:grid-cols-3 gap-3">
              <button class="surface-strong rounded-2xl p-4 text-left" onclick="game.setView('arena')">
                <div class="font-black text-lg">Pelear</div>
                <p class="text-sm text-slate-300/76 mt-2">Ve a Arena si quieres progreso activo, oro y botín.</p>
              </button>
              <button class="surface-strong rounded-2xl p-4 text-left" onclick="game.setView('inventario')">
                <div class="font-black text-lg">Ordenar</div>
                <p class="text-sm text-slate-300/76 mt-2">Abre Inventario si la mochila está llena o tienes mejoras nuevas.</p>
              </button>
              <button class="surface-strong rounded-2xl p-4 text-left" onclick="game.setView('expedicion')">
                <div class="font-black text-lg">Progreso pasivo</div>
                <p class="text-sm text-slate-300/76 mt-2">Usa Expedición o Trabajo si quieres seguir generando recursos.</p>
              </button>
            </div>

            <div class="mt-5 grid sm:grid-cols-2 gap-3">
              ${infoCard('Expedición', state.timers.expedition ? `${ZONES[state.timers.expedition.zoneId].name} · <span data-live-timer="expedition">${expeditionTimerText()}</span>` : 'No hay expedición activa.', 'surface-subtle')}
              ${infoCard('Trabajo', state.timers.job ? `${state.timers.job.name} · <span data-live-timer="job">${jobTimerText()}</span>` : 'No hay trabajo activo.', 'surface-subtle')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Prioridad', 'Un solo objetivo visible')}
              ${mainQuest ? questCard(mainQuest) : '<div class="empty-state">No hay contratos disponibles.</div>'}
              <div class="mt-4 grid grid-cols-2 gap-2">
                <button class="btn" onclick="game.setView('diario')">Diario</button>
                <button class="btn" onclick="game.setView('logros')">Logros</button>
              </div>
            </div>
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Estado rápido', 'Solo lo que condiciona decisiones')}
              <div class="grid grid-cols-2 gap-3">
                ${htmlStat('Mochila', `${state.player.inventory.length}/${maxInventory()}`, '', 'Capacidad usada del inventario frente al máximo disponible.')}
                ${htmlStat('Llaves', state.player.keys)}
                ${htmlStat('Pociones', state.player.potions)}
                ${htmlStat('Racha', `${state.streak.days || 0}/7`)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderPerfil() {
    const ds = getDerivedStats();
    const rank = currentRank();
    const pet = getPetData();
    return `
      <div class="space-y-5">
        ${pageLead('perfil', `${rank.title}`, [
          actionButton('🎒 Ver equipo', 'btn-primary', "game.setView('inventario')"),
          actionButton('🏋️ Entrenar', '', "game.setView('entrenamiento')")
        ].join(''))}
        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Identidad', 'Tu estado actual', 'Esta pantalla se centra en quién eres y cómo rindes, no en todas las decisiones de la partida.')}
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Gladiador</div>
                <div class="text-3xl font-black mt-1">${state.player.name}</div>
                <div class="text-sm text-cyan-200/85 mt-1">${state.player.title}</div>
              </div>
              <div class="grid grid-cols-2 gap-3 min-w-[250px]">
                ${htmlStat('Ascensiones', state.player.ascension, '', 'Cantidad de reinicios meta completados para progresión permanente.')}
                ${htmlStat('Piso más alto', state.player.highestDungeonFloor, '', 'Mayor piso de mazmorra superado hasta ahora.')}
                ${htmlStat('Inventario', `${state.player.inventory.length}/${maxInventory()}`, '', 'Capacidad actual de la mochila frente a su límite máximo.')}
                ${htmlStat('Polvo', state.player.relicDust, '', 'Moneda meta usada en reliquias y mejoras permanentes.')}
              </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              ${htmlStat('Ataque', fmt(ds.attack))}
              ${htmlStat('Defensa', fmt(ds.defense))}
              ${htmlStat('Velocidad', fmt(ds.speed))}
              ${htmlStat('Vida máxima', fmt(ds.maxHp), '', 'Total de salud disponible antes de caer derrotado.')}
              ${htmlStat('Golpe crítico', pct(ds.crit), '', 'Probabilidad de infligir daño aumentado en combate.')}
              ${htmlStat('Esquiva', pct(ds.dodge))}
              ${htmlStat('Bloqueo', pct(ds.block))}
              ${htmlStat('Robo de vida', pct(ds.lifesteal), '', 'Porcentaje del daño que regresa como curación.')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Equipo', 'Lectura rápida')}
              <div class="space-y-2">${SLOT_ORDER.slice(0, 4).map(equippedSlotCard).join('')}</div>
              <button class="btn mt-4 w-full" onclick="game.setView('inventario')">Abrir inventario completo</button>
            </div>
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Apoyos', 'Compañero y utilidades')}
              <div class="grid gap-3">
                ${pet ? infoCard(`${icon(pet.icon || 'paw', 'h-4 w-4 inline-block mr-2 align-[-0.15em]')}${pet.name}`, `Nivel ${state.player.petLevel} · XP ${state.player.petXp}/${3 + state.player.petLevel}<br>${pet.desc}`, 'surface-subtle') : infoCard('Sin mascota activa', 'Incuba una en la vista de Mascota.', 'surface-subtle')}
              </div>
              <div class="grid grid-cols-2 gap-2 mt-4">
                <button class="btn btn-success" onclick="game.usePotion()" ${tooltipAttr('Consume una poción para recuperar salud fuera de combate.')}>🧪 Poción</button>
                <button class="btn btn-primary" onclick="game.autoHeal()" ${tooltipAttr('Aplica una curación automática si tienes recursos disponibles.')}>🩹 Curar</button>
                <button class="btn btn-gold" onclick="game.claimDaily()" ${tooltipAttr('Reclama tu recompensa diaria cuando esté lista.')}>🎁 Diario</button>
                <button class="btn" onclick="game.setView('mascota')" ${tooltipAttr('Abre la gestión de tu mascota activa y sus bonificaciones.')}>🐾 Mascota</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderInventario() {
    const equippedPreview = ['weapon', 'chest', 'ring', 'amulet'].map(equippedSlotCard).join('');
    return `
      <div class="space-y-5">
        ${pageLead('inventario', `Capacidad: <b>${state.player.inventory.length}/${maxInventory()}</b>`, [
          actionButton('🧹 Gestión automática', 'btn-primary', 'game.autoManage()', 'Vende y recicla excedentes de forma automática.'),
          actionButton('⚒️ Forja', '', "game.setView('forja')"),
          actionButton('🛒 Mercado', 'btn-violet', "game.setView('mercado')")
        ].join(''))}
        ${actionBar([
          actionButton('🧹 Limpiar', 'btn-primary !py-3', 'game.autoManage()'),
          actionButton('⚒️ Forja', '!py-3', "game.setView('forja')")
        ])}
        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Mochila', 'Decide pieza por pieza', 'La vista principal se centra en filtrar, comparar y actuar. El contexto extra queda a un lado y solo cuando lo necesites.')}
            <div class="space-y-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Filtro por tipo</div>
                <div class="filters-row mt-2">
                  ${['all', ...SLOT_ORDER].map((filter) => `
                    <button class="btn filter-pill ${state.ui.inventoryFilter === filter ? 'active tab-btn' : ''}" onclick="game.setInventoryFilter('${filter}')" ${tooltipAttr(`Filtrar inventario por ${translateFilter(filter).toLowerCase()}.`)}>${translateFilter(filter)}</button>
                  `).join('')}
                </div>
              </div>
              <details class="surface-subtle rounded-2xl p-4">
                <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <div class="text-sm font-bold">Filtros avanzados</div>
                      <div class="text-xs text-slate-300/62 mt-1">Rareza y limpieza, solo cuando vayas a optimizar.</div>
                    </div>
                    <span class="inline-flex items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Rareza</span>
                  </div>
                </summary>
                <div class="filters-row mt-3">
                  ${['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic'].map((filter) => `
                    <button class="btn filter-pill ${state.ui.inventoryFilter === filter ? 'active tab-btn' : ''}" onclick="game.setInventoryFilter('${filter}')" ${tooltipAttr(`Filtrar inventario por ${translateFilter(filter).toLowerCase()}.`)}>${translateFilter(filter)}</button>
                  `).join('')}
                </div>
              </details>
            </div>
            ${inventoryCards()}
          </section>

          <aside class="stack-compact">
            <details class="glass rounded-3xl p-5" open>
              <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div class="flex items-center justify-between gap-3">
                  <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">Referencia</div>
                  <span class="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Referencia</span>
                </div>
                <div class="mt-1 font-display font-extrabold text-lg leading-tight">Equipo equipado ahora</div>
              </summary>
              <div class="mt-4 space-y-2">${equippedPreview}</div>
            </details>
          </aside>
        </div>
      </div>
    `;
  }

  function renderArena() {
    const zone = zoneForPlayer();
    const readySkills = state.player.activeSkills.map((id) => SKILLS[id]).filter(Boolean);
    const recent = state.combatHistory.slice(0, 2);
    return `
      <div class="space-y-5">
        ${pageLead('arena', `Zona: <b>${zone.name}</b> · Coste <b>${zone.energyCost}⚡ / ${zone.staminaCost}💪</b>`, [
          actionButton('⚔️ Normal', 'btn-primary', "game.fightArena('normal')"),
          actionButton('👑 Élite', 'btn-violet', "game.fightArena('elite')"),
          actionButton('🔥 x3', 'btn-gold', 'game.arenaBlitz(3)')
        ].join(''))}
        ${actionBar([
          actionButton('⚔️ Normal', 'btn-primary !py-3', "game.fightArena('normal')"),
          actionButton('👑 Élite', 'btn-violet !py-3', "game.fightArena('elite')")
        ])}
        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Combate', 'Elige y entra', 'La arena deja visible solo la decisión principal. Zona, build e historial quedan como módulos secundarios.')}
            <div class="grid md:grid-cols-3 gap-3">
              <button class="surface-strong rounded-2xl p-4 text-left" onclick="game.fightArena('normal')">
                <div class="flex items-center justify-between gap-2"><div class="font-black text-lg">Normal</div>${statusChip('Flujo', 'success')}</div>
                <p class="text-sm text-slate-300/76 mt-2">Progreso estable y bajo riesgo para seguir farmeando.</p>
              </button>
              <button class="surface-strong elite-card rounded-2xl p-4 text-left" onclick="game.fightArena('elite')">
                <div class="flex items-center justify-between gap-2"><div class="font-black text-lg">Élite</div>${statusChip('Riesgo', 'warning')}</div>
                <p class="text-sm text-slate-300/76 mt-2">Más exigente, mejor recompensa si tu build ya está firme.</p>
              </button>
              <button class="surface-strong reward-card rounded-2xl p-4 text-left" onclick="game.arenaBlitz(3)">
                <div class="flex items-center justify-between gap-2"><div class="font-black text-lg">Racha x3</div>${statusChip('Acelerar')}</div>
                <p class="text-sm text-slate-300/76 mt-2">Acelera progreso cuando ya dominas la zona actual.</p>
              </button>
            </div>
            <div class="grid sm:grid-cols-3 gap-3 mt-4">
              ${htmlStat('Zona activa', zone.name, zone.theme)}
              ${htmlStat('Coste', `${zone.energyCost}⚡ / ${zone.staminaCost}💪`, 'Por combate')}
              ${htmlStat('Registro', `${state.stats.wins}V / ${state.stats.losses}D`, 'Historial global')}
            </div>
            <details class="surface-subtle rounded-2xl p-4 mt-4">
              <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div class="flex items-center justify-between gap-3">
                  <div><div class="text-sm font-bold">Cambiar zona</div><div class="text-xs text-slate-300/62 mt-1">Solo ábrelo cuando quieras mover el foco de la partida.</div></div>
                  <span class="inline-flex items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Destino</span>
                </div>
              </summary>
              <div class="mt-4">${zoneSelector()}</div>
            </details>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Preparación', 'Build activa para esta zona')}
              <div class="grid gap-3">
                ${infoCard('Habilidades activas', readySkills.length ? readySkills.map((skill) => `${skill.name} · Nv ${state.player.skillLevels[skill.id] || 1}`).join('<br>') : 'No hay habilidades activas equipadas.', 'surface-subtle')}
                ${infoCard('Lectura rápida', `Victorias ${state.stats.wins} · Derrotas ${state.stats.losses} · Bajas ${state.stats.kills}`, 'surface-subtle')}
              </div>
            </div>
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Historial', 'Últimos resultados')}
              <div class="space-y-3">
                ${recent.length ? recent.map((entry) => `
                  <button class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${entry.id}')">
                    <div class="font-black ${entry.result === 'victory' ? 'text-emerald-300' : 'text-rose-300'}">${entry.title}</div>
                    <div class="text-sm text-slate-300/70 mt-1">${entry.zone}</div>
                  </button>
                `).join('') : '<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  return {
    renderResumen,
    renderPerfil,
    renderInventario,
    renderArena,
  };
}
