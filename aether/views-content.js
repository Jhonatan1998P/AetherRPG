(() => {
  const runtime = window.AetherViewRuntime;
  const {
    SLOT_ORDER,
    SLOT_NAMES,
    VIEWS,
    VIEW_META,
    ZONES,
    JOBS,
    PETS,
    SKILLS,
    ACHIEVEMENTS,
    fmt,
    pct,
    htmlStat,
    progressBar,
    timeLeft,
    state,
    maxInventory,
    getPetData,
    getDerivedStats,
    scaleItemStats,
    xpNeeded,
    guildTotal,
    currentRank,
    zoneForPlayer,
    isZoneUnlocked,
    summarizeReward,
    achievementProgress,
    icon,
    replaceEmojiIcons,
    rarityName,
    rarityBadge,
    translateFilter,
    statLabel,
    statTooltip,
    tooltipAttr,
    activeMeta,
    statusChip,
    sectionHeader,
    infoCard,
    actionButton,
    actionBar,
    pageLead,
  } = runtime;

  function equippedSlotCard(slot) {
    const item = state.player.equipment[slot];
    return `
      <div class="rounded-2xl ring p-3 bg-white/[.04]">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${SLOT_NAMES[slot]}</div>
            ${item
              ? `<div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-bold leading-snug rarity-${item.rarity}">${item.name}</div>${rarityBadge(item.rarity)}</div>
                 <div class="text-xs text-slate-300/70 mt-1">Nivel ${item.level} · Mejora +${item.upgrade || 0}</div>`
              : `<div class="font-bold mt-1 text-slate-400/80">Vacío</div>`
            }
          </div>
          ${item ? `<button class="btn !px-3 !py-2 text-xs" onclick="game.unequipItem('${slot}')">Quitar</button>` : ''}
        </div>
      </div>
    `;
  }

  function questCard(quest) {
    return `
      <div class="glass rounded-2xl p-4">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div class="min-w-0">
            <div class="font-black text-lg">${quest.title}</div>
            <div class="text-sm text-slate-300/75 mt-1">${quest.desc}</div>
            <div class="text-xs text-slate-300/60 mt-3">${summarizeReward(quest.reward)}</div>
          </div>
          <button class="btn ${quest.completed ? 'btn-success' : ''}" ${quest.completed && !quest.claimed ? `onclick="game.claimQuest('${quest.id}')"` : 'disabled'}>
            ${quest.claimed ? 'Cobrada' : quest.completed ? 'Cobrar' : `${fmt(quest.progress)}/${fmt(quest.target)}`}
          </button>
        </div>
        <div class="mt-3">${progressBar(quest.progress, quest.target, 'bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-300 shadow-[0_0_18px_rgba(192,132,252,.32)]', 'Progreso', 'Avance actual del contrato seleccionado.')}</div>
      </div>
    `;
  }


  function expeditionTimerText() {
    return state.timers.expedition ? timeLeft(state.timers.expedition.endAt) : '0s';
  }

  function jobTimerText() {
    return state.timers.job ? timeLeft(state.timers.job.endAt) : '0s';
  }

  function pager(currentPage, totalPages, fnName) {
    if (totalPages <= 1) return '';
    return `
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
        <div class="text-sm text-slate-300/72">Página <b>${currentPage}</b> de <b>${totalPages}</b></div>
        <div class="flex gap-2">
          <button class="btn !py-2 !px-3" ${currentPage <= 1 ? 'disabled' : `onclick="game.${fnName}(${currentPage - 1})"`}>← Anterior</button>
          <button class="btn !py-2 !px-3" ${currentPage >= totalPages ? 'disabled' : `onclick="game.${fnName}(${currentPage + 1})"`}>Siguiente →</button>
        </div>
      </div>
    `;
  }

  function zoneSelector() {
    return `
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
        ${ZONES.map(zone => `
          <button
            class="text-left glass rounded-2xl p-4 transition ${state.player.zoneId === zone.id ? 'ring ring-cyan-300/35 bg-cyan-400/8' : ''} ${!isZoneUnlocked(zone) ? 'opacity-45' : ''}"
            ${isZoneUnlocked(zone) ? `onclick="game.setZone(${zone.id})"` : 'disabled'}
            ${tooltipAttr(`Zona ${zone.name}. Requiere nivel ${zone.unlockLevel} y consume ${zone.energyCost} de energía y ${zone.staminaCost} de aguante.`)}
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="font-black text-lg">${zone.name}</div>
                <div class="text-xs text-slate-300/60 mt-1">Nivel ${zone.unlockLevel}+ · ${zone.theme}</div>
              </div>
              <div class="text-xs rounded-full px-2.5 py-1 bg-white/[.06]">${isZoneUnlocked(zone) ? 'Activa' : 'Bloqueada'}</div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
              <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${icon('bolt', 'h-4 w-4 text-cyan-300')}<span>${zone.energyCost} energía</span></div>
              <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${icon('dumbbell', 'h-4 w-4 text-emerald-300')}<span>${zone.staminaCost} aguante</span></div>
            </div>
          </button>
        `).join('')}
      </div>
    `;
  }



  function formatStatValue(key, value) {
    return key === 'crit' || key === 'dodge' || key === 'block' || key === 'lifesteal' ? pct(value) : fmt(value);
  }

  function compareAgainstEquipped(item) {
    const equipped = state.player.equipment[item.slot];
    if (!equipped) {
      return { label: 'Mejora limpia', tone: 'success', detail: 'No tienes una pieza equipada en este espacio.' };
    }
    const delta = (item.score || 0) - (equipped.score || 0);
    if (delta > 0) return { label: `+${fmt(delta)} puntuación`, tone: 'success', detail: `Mejora respecto a ${equipped.name}.` };
    if (delta < 0) return { label: `${fmt(delta)} puntuación`, tone: 'danger', detail: `Rinde peor que ${equipped.name}.` };
    return { label: 'Puntuación similar', tone: '', detail: `Rinde de forma parecida a ${equipped.name}.` };
  }

  function itemStatGrid(item, limit = 4) {
    return Object.entries(scaleItemStats(item)).slice(0, limit).map(([k, v]) =>
      `<div class="rounded-xl bg-white/[.04] p-2.5" ${tooltipAttr(statTooltip(k))}>${statLabel(k)}: <b>${formatStatValue(k, v)}</b></div>`
    ).join('');
  }

  function inventorySummaryCards(items) {
    const legendary = items.filter(i => i.rarity === 'legendary').length;
    const upgrades = items.filter(i => compareAgainstEquipped(i).tone === 'success').length;
    return `
      <div class="grid sm:grid-cols-3 gap-3 mb-4">
        ${htmlStat('Objetos filtrados', items.length)}
        ${htmlStat('Mejoras posibles', upgrades)}
        ${htmlStat('Legendarios', legendary, '', 'Cantidad de objetos legendarios visibles en este filtro.')}
      </div>
    `;
  }

  function durationChoiceCard(seconds, tone, summary) {
    return `
      <div class="surface-strong rounded-2xl p-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Expedición</div>
            <div class="text-2xl font-black mt-1">${seconds}s</div>
            <p class="text-sm text-slate-300/74 mt-2">${summary}</p>
          </div>
          ${statusChip(seconds <= 30 ? 'Corta' : seconds < 120 ? 'Media' : 'Larga', tone)}
        </div>
        <button class="btn ${tone === 'success' ? 'btn-primary' : tone === 'warning' ? 'btn-gold' : 'btn-violet'} mt-4 w-full" onclick="game.startExpedition(${state.player.zoneId}, ${seconds})">Enviar ${seconds}s</button>
      </div>
    `;
  }

  function disclosureCard(label, title, content, options = {}) {
    const {
      open = false,
      badge = '',
      iconName = 'info',
      hint = 'Ver módulo',
    } = options;

    return `
      <details class="glass rounded-3xl p-5" ${open ? 'open' : ''}>
        <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
          <div class="flex items-center justify-between gap-3">
            <div class="min-w-0">
              <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${label}</div>
              <div class="mt-1 flex items-center gap-3 min-w-0">
                <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[.06] ring text-cyan-200">${icon(iconName, 'h-4 w-4')}</span>
                <div class="min-w-0">
                  <div class="font-display font-extrabold text-lg leading-tight">${title}</div>
                  ${badge ? `<div class="mt-1">${badge}</div>` : ''}
                </div>
              </div>
            </div>
            <span class="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">${hint}</span>
          </div>
        </summary>
        <div class="mt-4">${content}</div>
      </details>
    `;
  }


  function inventoryCards() {
    let items = [...state.player.inventory];
    const filter = state.ui.inventoryFilter;
    if (filter !== 'all') items = items.filter(i => i.slot === filter || i.rarity === filter);
    if (!items.length) {
      return `<div class="glass rounded-2xl p-5 text-slate-300/75">Tu inventario está vacío o el filtro no devuelve resultados.</div>`;
    }

    const pageSize = Math.max(6, state.ui.inventoryPageSize || 18);
    const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
    const currentPage = Math.min(Math.max(1, state.ui.inventoryPage || 1), totalPages);
    const start = (currentPage - 1) * pageSize;
    const pageItems = items.slice(start, start + pageSize);

    return `
      ${inventorySummaryCards(items)}
      <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${start + 1}</b>–<b>${Math.min(start + pageSize, items.length)}</b> de <b>${items.length}</b> objetos filtrados.</div>
      <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
        ${pageItems.map(item => {
          const compare = compareAgainstEquipped(item);
          return `
            <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro" ${tooltipAttr(`Objeto de rareza ${rarityName(item.rarity)}. Puntuación ${fmt(item.score)}. ${compare.detail}`)}>
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${item.rarity} leading-snug">${item.name}</div>${rarityBadge(item.rarity)}</div>
                  <div class="text-xs text-slate-300/60 mt-1">${SLOT_NAMES[item.slot]} · Nivel ${item.level} · Mejora +${item.upgrade || 0}</div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]" ${tooltipAttr('Puntuación total estimada del objeto según sus estadísticas y mejora actual.')}>Punt. ${fmt(item.score)}</div>
                  <div class="mt-2">${statusChip(compare.label, compare.tone)}</div>
                </div>
              </div>
              <p class="text-xs text-slate-300/62 mt-3">${compare.detail}</p>
              <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                ${itemStatGrid(item, 4)}
              </div>
              <div class="grid gap-2 mt-4">
                <button class="btn btn-success !py-2.5 w-full" onclick="game.equipItem('${item.id}')">Equipar</button>
                <div class="grid grid-cols-3 gap-2">
                  <button class="btn !py-2 text-xs" onclick="game.sellItem('${item.id}')">Vender</button>
                  <button class="btn !py-2 text-xs" onclick="game.salvageItem('${item.id}')">Reciclar</button>
                  <button class="btn btn-violet !py-2 text-xs" onclick="game.rerollItem('${item.id}')">Retemplar</button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      ${pager(currentPage, totalPages, 'setInventoryPage')}
    `;
  }


  function renderResumen() {
    const zone = zoneForPlayer();
    const mainQuest = state.quests.find(q => !q.claimed) || state.quests[0];
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
              <div class="space-y-2">${SLOT_ORDER.slice(0,4).map(equippedSlotCard).join('')}</div>
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
                  ${['all', ...SLOT_ORDER].map(filter => `
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
                  ${['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic'].map(filter => `
                    <button class="btn filter-pill ${state.ui.inventoryFilter === filter ? 'active tab-btn' : ''}" onclick="game.setInventoryFilter('${filter}')" ${tooltipAttr(`Filtrar inventario por ${translateFilter(filter).toLowerCase()}.`)}>${translateFilter(filter)}</button>
                  `).join('')}
                </div>
              </details>
            </div>
            ${inventoryCards()}
          </section>

          <aside class="stack-compact">
            ${disclosureCard('Referencia', 'Equipo equipado ahora', `<div class="space-y-2">${equippedPreview}</div>`, {
              open: true,
              iconName: 'shield',
              hint: 'Referencia'
            })}
            ${disclosureCard('Recursos', 'Límites de gestión', `
              <div class="grid grid-cols-2 gap-3">
                ${htmlStat('Hierro', fmt(state.player.iron))}
                ${htmlStat('Madera', fmt(state.player.wood))}
                ${htmlStat('Comida', fmt(state.player.food))}
                ${htmlStat('Oro', fmt(state.player.gold))}
              </div>
              <p class="text-sm text-slate-300/72 mt-4">Usa limpieza automática si la mochila ya está llena o si una ronda de decisiones manuales no aporta mejoras claras.</p>
            `, {
              iconName: 'coins',
              hint: 'Ver costes'
            })}
          </aside>
        </div>
      </div>
    `;
  }


  function renderArena() {
    const zone = zoneForPlayer();
    const readySkills = state.player.activeSkills.map(id => SKILLS[id]).filter(Boolean);
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
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Normal</div>
                  ${statusChip('Flujo', 'success')}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Progreso estable y bajo riesgo para seguir farmeando.</p>
              </button>
              <button class="surface-strong elite-card rounded-2xl p-4 text-left" onclick="game.fightArena('elite')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Élite</div>
                  ${statusChip('Riesgo', 'warning')}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Más exigente, mejor recompensa si tu build ya está firme.</p>
              </button>
              <button class="surface-strong reward-card rounded-2xl p-4 text-left" onclick="game.arenaBlitz(3)">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Racha x3</div>
                  ${statusChip('Acelerar')}
                </div>
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
                  <div>
                    <div class="text-sm font-bold">Cambiar zona</div>
                    <div class="text-xs text-slate-300/62 mt-1">Solo ábrelo cuando quieras mover el foco de la partida.</div>
                  </div>
                  <span class="inline-flex items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Destino</span>
                </div>
              </summary>
              <div class="mt-4">
                ${zoneSelector()}
              </div>
            </details>
          </section>

          <aside class="stack-compact">
            ${disclosureCard('Preparación', 'Build activa para esta zona', `
              <div class="grid gap-3">
                ${infoCard('Habilidades activas', readySkills.length ? readySkills.map(skill => `${skill.name} · Nv ${state.player.skillLevels[skill.id] || 1}`).join('<br>') : 'No hay habilidades activas equipadas.', 'surface-subtle', 'Lista de habilidades equipadas y su nivel actual.')}
                ${infoCard('Lectura rápida', `Victorias ${state.stats.wins} · Derrotas ${state.stats.losses} · Bajas ${state.stats.kills}`, 'surface-subtle', 'Resumen breve de tu desempeño reciente en combate.')}
              </div>
            `, {
              open: true,
              iconName: 'shield',
              hint: 'Build'
            })}
            ${disclosureCard('Historial', 'Últimos resultados', `
              <div class="space-y-3">
                ${recent.length ? recent.map(entry => `
                  <button class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${entry.id}')">
                    <div class="font-black ${entry.result === 'victory' ? 'text-emerald-300' : 'text-rose-300'}">${entry.title}</div>
                    <div class="text-sm text-slate-300/70 mt-1">${entry.zone}</div>
                  </button>
                `).join('') : '<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            `, {
              iconName: 'scroll',
              hint: 'Ver combates'
            })}
          </aside>
        </div>
      </div>
    `;
  }


  function renderExpedicion() {
    return `
      <div class="space-y-5">
        ${pageLead('expedicion', state.timers.expedition ? `En curso: <b>${ZONES[state.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${expeditionTimerText()}</span>` : 'Sin expedición activa', [
          actionButton('30s', 'btn-primary', `game.startExpedition(${state.player.zoneId}, 30)`),
          actionButton('60s', '', `game.startExpedition(${state.player.zoneId}, 60)`),
          actionButton('120s', 'btn-gold', `game.startExpedition(${state.player.zoneId}, 120)`)
        ].join(''))}
        ${actionBar([
          actionButton('30s', 'btn-primary !py-3', `game.startExpedition(${state.player.zoneId}, 30)`),
          actionButton('120s', 'btn-gold !py-3', `game.startExpedition(${state.player.zoneId}, 120)`)
        ])}
        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Paso 1', 'Elige destino', 'Primero eliges la zona. Después eliges cuánto tiempo comprometer.')}
            ${zoneSelector()}
            <div class="mt-5">
              ${sectionHeader('Paso 2', 'Elige duración')}
              <div class="grid lg:grid-cols-3 gap-3">
                ${durationChoiceCard(30, 'success', 'Salida corta para mantener el flujo.')}
                ${durationChoiceCard(60, '', 'Punto medio si sigues tocando otras vistas.')}
                ${durationChoiceCard(120, 'warning', 'Más retorno, más espera.')}
              </div>
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Qué mirar', 'Solo tres ideas')}
              <div class="grid gap-3">
                ${infoCard('Destino', 'Usa zonas ya cómodas si solo buscas recursos seguros.', 'surface-subtle')}
                ${infoCard('Duración', 'Cuanto más larga, más sentido tiene si vas a dejar el juego corriendo.', 'surface-subtle')}
                ${infoCard('Después', 'Cuando termine, decide entre Arena para seguir progresando o Inventario para ordenar.', 'surface-subtle')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }


  function renderMazmorra() {
    return `
      <div class="space-y-5">
        ${pageLead('mazmorra', `Llaves: <b>${state.player.keys}</b> · Piso más alto: <b>${state.player.highestDungeonFloor}</b>`, [
          actionButton('🗝️ Entrar', 'btn-gold', 'game.runDungeon()', 'Consume una llave y empieza una incursión de mazmorra.'),
          actionButton('🎒 Revisar equipo', '', "game.setView('inventario')")
        ].join(''))}
        ${actionBar([
          actionButton('🗝️ Entrar', 'btn-gold !py-3', 'game.runDungeon()'),
          actionButton('🎒 Equipo', '!py-3', "game.setView('inventario')")
        ])}
        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Recorrido', 'La mazmorra de este intento', 'Aquí solo ves la ruta y decides si entrar o prepararte mejor.')}
            <div class="grid gap-2 text-sm">
              <div class="rounded-xl bg-white/[.04] p-3">1. Enemigo base</div>
              <div class="rounded-xl bg-white/[.04] p-3">2. Enemigo base</div>
              <div class="rounded-xl bg-white/[.04] p-3">3. Enemigo élite</div>
              <div class="rounded-xl bg-white/[.04] p-3">4. Jefe del piso</div>
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Recompensa', 'Por qué vale la pena')}
              <div class="grid gap-3">
                ${infoCard('Cofre del piso', 'Oro, XP, esencia, fragmentos, llaves extra y botín de mejor calidad.', 'reward-card', 'Las mazmorras mejoran la calidad del botín y de los materiales.')}
                ${infoCard('Cuándo entrar', 'Hazlo cuando tengas llaves y una configuración ya ordenada.', 'surface-subtle', 'Entra cuando tu equipo y habilidades ya estén en un estado estable.')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderMercado() {
    const bestVisible = [...state.market.items].sort((a, b) => (b.score || 0) - (a.score || 0))[0];
    const affordableCount = state.market.items.filter(item => (item.price || 0) <= state.player.gold).length;
    const upgradeCount = state.market.items.filter(item => compareAgainstEquipped(item).tone === 'success').length;
    return `
      <div class="space-y-5">
        ${pageLead('mercado', `Oro disponible: <b>${fmt(state.player.gold)}</b>`, [
          actionButton('🔄 Refrescar', 'btn-primary', 'game.refreshMarket()', 'Renueva la rotación del mercado con nuevas ofertas.'),
          actionButton('🎒 Comparar con mochila', '', "game.setView('inventario')", 'Abre el inventario para comparar las ofertas con tu equipo actual.')
        ].join(''))}
        ${actionBar([
          actionButton('🔄 Refrescar', 'btn-primary !py-3', 'game.refreshMarket()'),
          actionButton('🎒 Mochila', '!py-3', "game.setView('inventario')")
        ])}
        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Rotación actual', 'Compra solo mejoras claras', 'El mercado prioriza piezas de equipo. Consumibles y ayuda contextual quedan en módulos secundarios.')}
            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${htmlStat('Comprables', affordableCount, 'Con tu oro actual')}
              ${htmlStat('Mejoras', upgradeCount, 'Frente a lo equipado')}
              ${htmlStat('Oferta top', bestVisible ? SLOT_NAMES[bestVisible.slot] : '—', bestVisible ? bestVisible.name : 'Sin oferta destacada')}
            </div>
            ${bestVisible ? `
              <div class="surface-strong reward-card rounded-2xl p-4 mb-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Oferta destacada</div>
                    <div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-black rarity-${bestVisible.rarity} text-lg leading-snug">${bestVisible.name}</div>${rarityBadge(bestVisible.rarity)}</div>
                    <p class="text-sm text-slate-300/74 mt-2">${compareAgainstEquipped(bestVisible).detail}</p>
                  </div>
                  <div class="shrink-0 text-right">
                    <div class="text-sm font-bold text-amber-200">${fmt(bestVisible.price)} oro</div>
                    <div class="mt-2">${statusChip(compareAgainstEquipped(bestVisible).label, compareAgainstEquipped(bestVisible).tone)}</div>
                  </div>
                </div>
              </div>
            ` : ''}
            <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              ${state.market.items.map(item => {
                const compare = compareAgainstEquipped(item);
                const canBuy = (item.price || 0) <= state.player.gold;
                return `
                  <div class="glass rounded-2xl p-4 market-card ${canBuy ? '' : 'opacity-80'}" ${tooltipAttr(`Oferta de rareza ${rarityName(item.rarity)}. Precio ${fmt(item.price)} de oro. ${compare.detail}`)}>
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${item.rarity} leading-snug">${item.name}</div>${rarityBadge(item.rarity)}</div>
                        <div class="text-xs text-slate-300/60 mt-1">${SLOT_NAMES[item.slot]} · Nivel ${item.level}</div>
                      </div>
                      ${statusChip(compare.label, compare.tone)}
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      ${itemStatGrid(item, 4)}
                    </div>
                    <div class="market-meta mt-3">
                      <span class="text-sm text-slate-300/72">${compare.detail}</span>
                      <span class="text-sm font-bold ${canBuy ? 'text-amber-200' : 'text-rose-200'}">${fmt(item.price)} oro</span>
                    </div>
                    <button class="btn btn-gold mt-3 w-full" onclick="game.buyMarketItem('${item.id}')" ${canBuy ? '' : 'disabled'}>Comprar</button>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
          <aside class="stack-compact">
            ${disclosureCard('Decisión', 'Qué mirar antes de comprar', `
              <div class="grid gap-3">
                ${infoCard('Oferta destacada', bestVisible ? `${bestVisible.name} lidera la rotación actual.` : 'No hay oferta destacada ahora mismo.', 'reward-card', 'El mercado castiga mucho más las rarezas altas: verás menos piezas legendarias y míticas.')}
                ${infoCard('No fuerces compra', 'Si nada mejora de verdad, ahorra oro o ve a Forja.', 'surface-subtle')}
              </div>
            `, {
              open: true,
              iconName: 'coins',
              hint: 'Guía rápida'
            })}
            ${disclosureCard('Consumibles', 'Apoyo opcional de la partida', `
              <div class="grid gap-3">
                <button class="btn btn-success" onclick="game.buyResource('potion')" ${tooltipAttr('Compra una poción para curarte más tarde por 120 de oro.')}>🧪 Poción · 120 oro</button>
                <button class="btn btn-violet" onclick="game.buyResource('key')" ${tooltipAttr('Compra una llave para acceder a mazmorras por 180 de oro.')}>🗝️ Llave · 180 oro</button>
                <button class="btn btn-primary" onclick="game.buyResource('essence')" ${tooltipAttr('Compra esencia para forja y progresión premium por 140 de oro.')}>✨ Esencia · 140 oro</button>
                <button class="btn" onclick="game.buyResource('food')" ${tooltipAttr('Compra comida para apoyar trabajos y mascotas por 65 de oro.')}>🍖 Comida x2 · 65 oro</button>
              </div>
            `, {
              iconName: 'bag',
              hint: 'Comprar apoyo'
            })}
          </aside>
        </div>
      </div>
    `;
  }


  function renderForja() {
    return `
      <div class="space-y-5">
        ${pageLead('forja', `Hierro: <b>${fmt(state.player.iron)}</b> · Esencia: <b>${fmt(state.player.essence)}</b>`, [
          actionButton('⚒️ Forjar arma', 'btn-primary', "game.forgeItem('weapon', 'normal')", 'Forja un arma estándar con coste moderado y rareza controlada.'),
          actionButton('✨ Premium arma', 'btn-violet', "game.forgeItem('weapon', 'premium')", 'Forja un arma premium con mayor acceso a rarezas altas.'),
          actionButton('🎒 Revisar inventario', '', "game.setView('inventario')")
        ].join(''))}
        ${actionBar([
          actionButton('⚒️ Normal', 'btn-primary !py-3', "game.forgeItem('weapon', 'normal')"),
          actionButton('✨ Premium', 'btn-violet !py-3', "game.forgeItem('weapon', 'premium')")
        ])}
        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Forja', 'Crea una pieza para un espacio', 'La forja común genera botín funcional. La forja premium empuja las rarezas altas, pero sigue siendo exigente.')}
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${SLOT_ORDER.map(slot => `
                <div class="glass rounded-2xl p-4 forge-recipe-card">
                  <div class="font-bold">${SLOT_NAMES[slot]}</div>
                  <div class="text-sm text-slate-300/70 mt-1">Pieza aleatoria del hueco.</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2" ${tooltipAttr('Forja normal: más común, barata y orientada a volumen.')}>Normal <b>hierro</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2" ${tooltipAttr('Forja premium: más costosa y con mejor acceso a rarezas altas.')}>Premium <b>esencia</b></div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button class="btn btn-primary !py-2" onclick="game.forgeItem('${slot}', 'normal')">Forjar</button>
                    <button class="btn btn-violet !py-2" onclick="game.forgeItem('${slot}', 'premium')">Premium</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Mejora', 'Solo piezas ya equipadas', 'Esta columna existe para reforzar lo que ya decidiste conservar.')}
              <div class="space-y-3 mt-4">
                ${['weapon','chest','ring','amulet'].map(slot => {
                  const item = state.player.equipment[slot];
                  return `
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${SLOT_NAMES[slot]}</div>
                      <div class="font-black ${item ? `rarity-${item.rarity}` : 'text-slate-400/80'}">${item ? item.name : 'Vacío'}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${item ? `Nivel ${item.level} · Mejora +${item.upgrade || 0}` : 'Equipa algo para mejorarlo.'}</div>
                      <button class="btn btn-gold mt-3 w-full" ${item ? `onclick="game.upgradeEquipped('${slot}')"` : 'disabled'} ${tooltipAttr('Sube el nivel de mejora de la pieza equipada y aumenta sus estadísticas.')}>⚒️ Mejorar</button>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }


  function renderGremio() {
    const descriptions = {
      barracks: 'Más ataque y defensa global.',
      treasury: 'Más oro en todas las actividades.',
      sanctuary: 'Más vida máxima y regeneración.',
      hunters: 'Mejor botín y hallazgos más finos.',
      arsenal: 'Más capacidad de inventario.',
    };
    return `
      <div class="space-y-5">
        ${pageLead('gremio', `Nivel total invertido: <b>${guildTotal()}</b>`, [
          actionButton('🪙 Ver mercado', '', "game.setView('mercado')"),
          actionButton('🏋️ Entrenar', 'btn-primary', "game.setView('entrenamiento')")
        ].join(''))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Mejoras del gremio', 'Invierte en un frente por vez', 'Cada edificio es una decisión de largo plazo.')} 
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${Object.entries(state.player.guild).map(([key, value]) => {
                const next = value + 1;
                const gold = 180 + next * 110 + guildTotal() * 35;
                const essence = Math.max(1, Math.floor(next / 2));
                return `
                  <div class="glass rounded-2xl p-4">
                    <div class="font-black text-lg capitalize" ${tooltipAttr(descriptions[key])}>${key}</div>
                    <div class="text-sm text-slate-300/75 mt-1">${descriptions[key]}</div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div class="rounded-xl bg-white/[.04] p-2">Nivel <b>${value}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Siguiente <b>${next}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Oro <b>${fmt(gold)}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Esencia <b>${fmt(essence)}</b></div>
                    </div>
                    <button class="btn btn-violet mt-3 w-full" onclick="game.upgradeGuild('${key}')">Mejorar</button>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
          <aside class="glass rounded-3xl p-5">
            ${sectionHeader('Consejo', 'Cómo usarlo')}
            <div class="grid gap-3">
              ${infoCard('Especialízate', 'Sube uno o dos edificios primero en lugar de repartir demasiado.', 'surface-subtle')}
              ${infoCard('Prioridad típica', 'Tesorería y Barracas suelen sentirse antes en la partida.', 'surface-subtle')}
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderEntrenamiento() {
    return `
      <div class="space-y-5">
        ${pageLead('entrenamiento', `Puntos de atributo: <b>${state.player.attributePoints}</b> · habilidades: <b>${state.player.skillPoints}</b>`, [
          actionButton('👤 Perfil', '', "game.setView('perfil')"),
          actionButton('⚔️ Arena', 'btn-primary', "game.setView('arena')")
        ].join(''))}
        <div class="grid xl:grid-cols-[.95fr,1.05fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Atributos', 'Sube tu base', 'Primero mejoras atributos. Las habilidades quedan en la columna de apoyo.')}
            <div class="grid sm:grid-cols-2 gap-3">
              ${[
                ['strength', 'Fuerza', 'Ataque y robo de vida.'],
                ['agility', 'Agilidad', 'Velocidad, crítico y esquiva.'],
                ['endurance', 'Resistencia', 'Vida, defensa y bloqueo.'],
                ['discipline', 'Disciplina', 'Energía y aguante máximo.']
              ].map(([key, label, desc]) => `
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${label}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${desc}</div>
                  <div class="text-sm mt-3">Nivel actual: <b>${state.player.training[key]}</b></div>
                  <button class="btn btn-primary mt-3 w-full" onclick="game.trainAttribute('${key}')">Subir</button>
                </div>
              `).join('')}
            </div>
          </section>
          <aside class="glass rounded-3xl p-5">
            ${sectionHeader('Habilidades', 'Activa o mejora solo las importantes')}
            <div class="space-y-3">
              ${Object.values(SKILLS).map(skill => `
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${skill.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${skill.desc}</div>
                  <div class="text-xs text-slate-300/60 mt-2">Recarga ${skill.cooldown} · Desbloqueo Nv ${skill.unlockLevel}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button class="btn !py-2" onclick="game.toggleSkill('${skill.id}')">${state.player.activeSkills.includes(skill.id) ? 'Quitar' : 'Equipar'}</button>
                    <button class="btn btn-violet !py-2" ${state.player.unlockedSkills.includes(skill.id) ? `onclick="game.upgradeSkill('${skill.id}')"` : 'disabled'}>Mejorar</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderTrabajo() {
    return `
      <div class="space-y-5">
        ${pageLead('trabajo', state.timers.job ? `En curso: <b>${state.timers.job.name}</b> · <span data-live-timer="job">${jobTimerText()}</span>` : 'Sin trabajo activo', [
          actionButton('🧭 Expedición', '', "game.setView('expedicion')"),
          actionButton('💰 Mercado', 'btn-gold', "game.setView('mercado')")
        ].join(''))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Trabajos', 'Elige una fuente de oro', 'Esta vista queda solo para elegir un encargo.')}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${JOBS.map(job => `
                <div class="glass rounded-2xl p-4">
                  <div class="font-black text-lg">${job.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${job.desc}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Duración <b>${job.duration}s</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${fmt(job.reward.gold)} oro</b></div>
                  </div>
                  <button class="btn btn-gold mt-3 w-full" onclick="game.startJob('${job.id}')" ${tooltipAttr('Inicia este trabajo y bloquea el temporizador hasta su finalización.')}>Aceptar</button>
                </div>
              `).join('')}
            </div>
          </section>
          <aside class="glass rounded-3xl p-5">
            ${sectionHeader('Cuándo usarlo', 'Regla rápida')}
            <div class="grid gap-3">
              ${infoCard('Trabajo', 'Úsalo cuando quieras oro estable sin pelear.', 'surface-subtle')}
              ${infoCard('Alternativa', 'Si también quieres botín, Expedición suele darte más variedad.', 'surface-subtle')}
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderMascota() {
    const pet = getPetData();
    return `
      <div class="space-y-5">
        ${pageLead('mascota', pet ? `Activa: <b>${pet.name}</b>` : 'Aún no tienes mascota', [
          actionButton('👤 Perfil', '', "game.setView('perfil')"),
          actionButton('🥚 Incubar', 'btn-violet', 'game.hatchPet()', 'Consume recursos para obtener una mascota aleatoria.')
        ].join(''))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Compañero', 'Gestiona solo tu mascota activa')}
            ${pet ? `
              <div class="glass rounded-2xl p-5">
                <div class="text-cyan-200">${icon(pet.icon || 'paw', 'h-9 w-9')}</div>
                <div class="font-display font-extrabold text-2xl mt-2">${pet.name}</div>
                <div class="text-sm text-slate-300/75 mt-1">${pet.desc}</div>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  ${htmlStat('Nivel', state.player.petLevel)}
                  ${htmlStat('XP', `${state.player.petXp}/${3 + state.player.petLevel}`)}
                </div>
                <div class="grid sm:grid-cols-2 gap-3 mt-4">
                  <button class="btn btn-success" onclick="game.feedPet()">${icon('box', 'h-4 w-4')}<span>Alimentar</span></button>
                  <button class="btn btn-danger" onclick="game.releasePet()" ${tooltipAttr('Libera la mascota actual y pierdes sus bonos activos.')}>Liberar</button>
                </div>
              </div>
            ` : `
              <div class="glass rounded-2xl p-5">
                <p class="text-sm text-slate-300/75">Incuba un huevo con 5 fragmentos y 8 de esencia para recibir un compañero aleatorio.</p>
                <button class="btn btn-violet mt-4" onclick="game.hatchPet()">${icon('spark', 'h-4 w-4')}<span>Incubar huevo</span></button>
              </div>
            `}
          </section>
          <aside class="glass rounded-3xl p-5">
            ${sectionHeader('Catálogo', 'Vista rápida')}
            <div class="grid gap-3">
              ${PETS.map(p => `
                <div class="glass rounded-2xl p-4">
                  <div class="font-bold font-display inline-flex items-center gap-2">${icon(p.icon || 'paw', 'h-4 w-4')}<span>${p.name}</span></div>
                  <div class="text-sm text-slate-300/75 mt-1">${p.desc}</div>
                </div>
              `).join('')}
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderLogros() {
    const highlighted = ACHIEVEMENTS.slice(0, 6);
    return `
      <div class="space-y-5">
        ${pageLead('logros', `Polvo de reliquia: <b>${state.player.relicDust}</b>`, [
          actionButton('🔱 Ascender', 'btn-gold', 'game.ascend()', 'Reinicia gran parte del progreso para ganar mejoras meta permanentes.'),
          actionButton('📘 Diario', '', "game.setView('diario')")
        ].join(''))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Hitos activos', 'Solo una selección visible', 'Los logros dejan de ser una pared de progreso. Aquí ves solo los más relevantes.')}
            <div class="space-y-3">
              ${highlighted.map(achievement => {
                const progress = achievementProgress(achievement);
                const claimed = state.claimedAchievements.includes(achievement.id);
                return `
                  <div class="glass rounded-2xl p-4">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black text-lg">${achievement.title}</div>
                        <div class="text-sm text-slate-300/75 mt-1">${achievement.desc}</div>
                      </div>
                      <div class="text-sm rounded-full px-3 py-1 ${claimed ? 'bg-emerald-400/15 text-emerald-300 border border-emerald-300/20' : 'bg-white/[.05]'}">${claimed ? 'Listo' : `${progress}/${achievement.target}`}</div>
                    </div>
                    <div class="mt-3">${progressBar(progress, achievement.target, 'bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-300 shadow-[0_0_18px_rgba(34,211,238,.30)]', 'Progreso', 'Avance total hacia este logro y sus recompensas meta.')}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Ascensión', 'Reinicio con progreso meta')}
              <p class="text-sm text-slate-300/75 mt-2">Hazla cuando quieras convertir una partida avanzada en progreso permanente.</p>
              <button class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${tooltipAttr('Reinicia gran parte de la partida a cambio de progreso meta permanente.')}>🔱 Ascender</button>
            </div>
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Altar', 'Inversión rápida')}
              <div class="grid gap-3 mt-4">
                ${[
                  ['wrath', 'Ira'],
                  ['fortune', 'Fortuna'],
                  ['vitality', 'Vitalidad'],
                  ['momentum', 'Impulso'],
                ].map(([key, title]) => `
                  <button class="btn btn-violet justify-between" onclick="game.spendRelic('${key}')" ${tooltipAttr(`Invierte polvo de reliquia en ${title.toLowerCase()} para obtener bonificaciones permanentes.`)}><span>${title}</span><span>Nv ${state.player.relics[key]}</span></button>
                `).join('')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderDiario() {
    const pageSize = Math.max(8, state.ui.journalPageSize || 16);
    const entries = state.journal || [];
    const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));
    const currentPage = Math.min(Math.max(1, state.ui.journalPage || 1), totalPages);
    const start = (currentPage - 1) * pageSize;
    const pageEntries = entries.slice(start, start + pageSize);

    return `
      <div class="space-y-5">
        ${pageLead('diario', `Entradas guardadas: <b>${entries.length}</b>`, [
          actionButton('🏆 Ver logros', '', "game.setView('logros')"),
          actionButton('📋 Resumen', 'btn-primary', "game.setView('resumen')")
        ].join(''))}
        <div class="grid xl:grid-cols-[1fr,300px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Registro', 'Solo eventos recientes', 'El diario queda como historial consultable, no como otra pantalla cargada de decisiones.')}
            <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${entries.length ? start + 1 : 0}</b>–<b>${Math.min(start + pageSize, entries.length)}</b> de <b>${entries.length}</b>.</div>
            <div class="space-y-3">
              ${pageEntries.map(entry => `
                <div class="glass rounded-2xl p-4 cv-auto">
                  <div class="font-black">${replaceEmojiIcons(entry.icon)} <span class="font-semibold">${new Date(entry.ts).toLocaleTimeString('es-ES')}</span></div>
                  <div class="text-sm text-slate-200/90 leading-relaxed mt-2">${entry.text}</div>
                </div>
              `).join('') || '<div class="text-sm text-slate-300/75">Todavía no hay entradas en el diario.</div>'}
            </div>
            ${pager(currentPage, totalPages, 'setJournalPage')}
          </section>
          <aside class="glass rounded-3xl p-5">
            ${sectionHeader('Uso', 'Cómo leerlo')}
            <div class="grid gap-3">
              ${infoCard('Consulta', 'Úsalo para revisar qué pasó, no para tomar decisiones inmediatas.', 'surface-subtle')}
              ${infoCard('Después', 'Si buscas progreso, vuelve a Resumen o Arena.', 'surface-subtle')}
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderContent() {
    const views = {
      resumen: renderResumen,
      perfil: renderPerfil,
      inventario: renderInventario,
      arena: renderArena,
      expedicion: renderExpedicion,
      mazmorra: renderMazmorra,
      mercado: renderMercado,
      forja: renderForja,
      gremio: renderGremio,
      entrenamiento: renderEntrenamiento,
      trabajo: renderTrabajo,
      mascota: renderMascota,
      logros: renderLogros,
      diario: renderDiario,
    };
    const fn = views[state.currentView] || renderResumen;
    return fn();
  }

  function renderModal() {
    const modal = state.ui.modal;
    if (!modal) return '';
    return `
      <div class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 p-4 overflow-y-auto">
        <div class="min-h-full flex items-start justify-center py-8">
          <div class="glass-strong rounded-[2rem] p-5 sm:p-6 w-full max-w-5xl">
            <div class="flex items-start justify-between gap-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Detalle</div>
                <div class="text-2xl font-black">${modal.title}</div>
              </div>
              <button class="btn" onclick="game.closeModal()">Cerrar</button>
            </div>
            ${modal.content}
          </div>
        </div>
      </div>
    `;
  }


  window.AetherViewContent = {
    renderContent,
    renderModal,
  };
})();
