export function createSecondaryViews(deps) {
  const {
    SLOT_ORDER,
    SLOT_NAMES,
    ZONES,
    JOBS,
    PET_RITUALS,
    PETS,
    SKILLS,
    ACHIEVEMENTS,
    state,
    getPetData,
    guildTotal,
    achievementProgress,
    fmt,
    pct,
    htmlStat,
    progressBar,
    icon,
    tooltipAttr,
    replaceEmojiIcons,
    rarityName,
    rarityBadge,
    zoneSelector,
    threatBandForScore,
    previewEncounter,
    previewDungeonRoute,
    compareAgainstEquipped,
    itemStatGrid,
    durationChoiceCard,
    previewCraftItem,
    previewEnhanceItem,
    previewReforgeItem,
    previewTranscendItem,
    previewStabilizeItem,
    resourceOffer,
    petProgressMeta,
    previewPetFeed,
    previewPetHatch,
    petRituals,
    petXpForNextLevel,
    petGrowthMultiplier,
    getPityStatus,
    getForgePityStatus,
    getForgeState,
    pager,
    expeditionTimerText,
    jobTimerText,
    getStoreMeta,
    pageLead,
    sectionHeader,
    infoCard,
    actionButton,
    actionBar,
    statusChip,
    statLabel,
  } = deps;

  const RESOURCE_META = {
    gold: { label: 'Oro', tone: 'text-amber-100 border-amber-300/30 bg-amber-400/12' },
    iron: { label: 'Hierro', tone: 'text-slate-100 border-slate-300/25 bg-slate-400/10' },
    wood: { label: 'Madera', tone: 'text-lime-100 border-lime-300/25 bg-lime-400/10' },
    essence: { label: 'Esencia', tone: 'text-cyan-100 border-cyan-300/25 bg-cyan-400/10' },
    sigils: { label: 'Sigilos', tone: 'text-violet-100 border-violet-300/25 bg-violet-400/10' },
    catalysts: { label: 'Catalizadores', tone: 'text-fuchsia-100 border-fuchsia-300/25 bg-fuchsia-400/10' },
    echoShards: { label: 'Fragmentos de Eco', tone: 'text-rose-100 border-rose-300/25 bg-rose-400/10' },
    keys: { label: 'Llaves', tone: 'text-sky-100 border-sky-300/25 bg-sky-400/10' },
    potions: { label: 'Pociones', tone: 'text-emerald-100 border-emerald-300/25 bg-emerald-400/10' },
    shards: { label: 'Fragmentos', tone: 'text-cyan-100 border-cyan-300/25 bg-cyan-400/10' },
    food: { label: 'Comida', tone: 'text-orange-100 border-orange-300/25 bg-orange-400/10' },
  };

  function resourceLabel(key) {
    return (RESOURCE_META[key] && RESOURCE_META[key].label) || key;
  }

  function formatCost(cost = {}) {
    return Object.entries(cost)
      .filter(([, value]) => Number(value || 0) > 0)
      .map(([key, value]) => `${fmt(value)} ${resourceLabel(key)}`)
      .join(' · ');
  }

  function formatCostChips(cost = {}) {
    const chips = Object.entries(cost)
      .filter(([, value]) => Number(value || 0) > 0)
      .map(([key, value]) => {
        const meta = RESOURCE_META[key] || { label: key, tone: 'text-slate-100 border-white/15 bg-white/[0.08]' };
        return `<span class="inline-flex items-center rounded-full border px-2 py-1 text-[11px] font-semibold ${meta.tone}">${fmt(value)} ${meta.label}</span>`;
      });
    if (!chips.length) return '<span class="text-slate-300/62">Sin coste</span>';
    return `<span class="inline-flex flex-wrap gap-1.5 align-middle">${chips.join('')}</span>`;
  }

  function renderExpedicion() {
    const isRunning = Boolean(state.timers.expedition);
    return `
      <div class="space-y-5">
        ${pageLead('expedicion', isRunning
          ? `En curso: <b>${ZONES[state.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${expeditionTimerText()}</span>`
          : 'Sin expedición activa', [
          actionButton('135s', 'btn-primary', `game.startExpedition(${state.player.zoneId}, 135)`),
          actionButton('360s', '', `game.startExpedition(${state.player.zoneId}, 360)`),
          actionButton('720s', 'btn-gold', `game.startExpedition(${state.player.zoneId}, 720)`)
        ].join(''))}

        ${actionBar([
          actionButton('135s', 'btn-primary !py-3', `game.startExpedition(${state.player.zoneId}, 135)`),
          actionButton('720s', 'btn-gold !py-3', `game.startExpedition(${state.player.zoneId}, 720)`)
        ])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Contexto', 'Elige destino', 'Primero define una zona segura para tu estado actual de recursos.')}
            ${zoneSelector()}

            <div class="mt-5">
              ${sectionHeader('Decisión', 'Elige duración', 'Duraciones cortas para control activo, largas para progreso pasivo.')}
              <div class="grid lg:grid-cols-3 gap-3">
                ${durationChoiceCard(135, 'success', 'Salida corta: menor riesgo y coste moderado.')}
                ${durationChoiceCard(360, '', 'Ruta media: mejor retorno con gasto extra de recursos.')}
                ${durationChoiceCard(720, 'warning', 'Ruta larga: más botín, pero exige planificación.')}
              </div>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Soporte', 'Regla rápida')}
              <div class="grid gap-3">
                ${infoCard('Estado actual', isRunning ? 'Ya tienes una expedición activa: espera el temporizador o cambia de foco.' : 'No hay expedición activa: puedes lanzar una ruta ahora.', 'surface-subtle')}
                ${infoCard('Destino', 'Las rutas largas consumen más aguante: evita quedarte seco antes de mazmorra.', 'surface-subtle')}
                ${infoCard('Después', 'Cuando termine, vuelve a Arena o Inventario para cerrar el ciclo.', 'surface-subtle')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderMazmorra() {
    const floor = state.player.highestDungeonFloor || 1;
    const dungeonCost = {
      keys: 1 + Math.floor((Math.max(1, floor) - 1) / 4),
      stamina: 2 + Math.floor((Math.max(1, floor) - 1) / 3),
      energy: 9 + Math.max(1, floor) * 2,
    };
    const canEnter = state.player.keys >= dungeonCost.keys
      && state.player.stamina >= dungeonCost.stamina
      && state.player.energy >= dungeonCost.energy;
    const route = previewDungeonRoute(floor);
    const threatSummary = route.length
      ? `${route.map((entry) => `${entry.kind}: ${entry.threatLabel} ${Math.round(entry.threatScore)}`).join(' · ')}`
      : 'Sin datos de amenaza';
    const expectedReward = route.length
      ? route.map((entry) => entry.rewardProfile && entry.rewardProfile.reward ? entry.rewardProfile.reward : null)
        .filter(Boolean)
        .reduce((acc, reward) => {
          acc.gold += Number(reward.gold || 0);
          acc.xp += Number(reward.xp || 0);
          return acc;
        }, { gold: 0, xp: 0 })
      : { gold: 0, xp: 0 };
    return `
      <div class="space-y-5">
        ${pageLead('mazmorra', `Llaves: <b>${state.player.keys}</b> · Piso más alto: <b>${state.player.highestDungeonFloor}</b> · Costo: <b>${dungeonCost.keys}</b> llave(s), <b>${dungeonCost.stamina}</b> aguante, <b>${dungeonCost.energy}</b> energía`, [
          actionButton('🗝️ Entrar', 'btn-gold', 'game.runDungeon()', `Consume ${dungeonCost.keys} llave(s), ${dungeonCost.stamina} de aguante y ${dungeonCost.energy} de energía.`),
          actionButton('🎒 Revisar equipo', '', "game.setView('inventario')")
        ].join(''))}

        ${actionBar([
          actionButton('🗝️ Entrar', 'btn-gold !py-3', 'game.runDungeon()'),
          actionButton('🎒 Equipo', '!py-3', "game.setView('inventario')")
        ])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Contexto', 'Ruta de incursión', 'La mazmorra tiene un recorrido fijo por intento: entra solo cuando estés listo.')}
            <div class="grid gap-2 text-sm">
              ${route.map((entry, index) => `
                <div class="surface-subtle rounded-xl p-3 flex items-center justify-between gap-2">
                  <span>${index + 1}. ${entry.kind === 'boss' ? 'Jefe del piso' : entry.kind === 'elite' ? 'Enemigo elite' : 'Enemigo base'}</span>
                  ${statusChip(`${entry.threatLabel} · ${Math.round(entry.threatScore)}`, entry.kind === 'boss' ? 'danger' : entry.kind === 'elite' ? 'warning' : '')}
                </div>
              `).join('')}
            </div>

            <div class="mt-4 grid sm:grid-cols-3 gap-3">
              ${htmlStat('Llaves', state.player.keys, state.player.keys >= dungeonCost.keys ? 'Listo para entrar' : `Faltan ${dungeonCost.keys - state.player.keys} llave(s)`)}
              ${htmlStat('Piso récord', state.player.highestDungeonFloor, 'Tu tope actual')}
              ${htmlStat('Estado', canEnter ? 'Disponible' : 'Bloqueado', canEnter ? 'Cumples coste de entrada' : 'No cumples llaves, aguante o energía')}
            </div>

            <div class="mt-4 grid sm:grid-cols-2 gap-3">
              ${infoCard('Amenaza prevista', threatSummary, 'surface-subtle')}
              ${infoCard('Recompensa esperada', `~${fmt(expectedReward.gold)} oro · ~${fmt(expectedReward.xp)} XP por ruta completa`, 'surface-subtle')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Decisión', '¿Entrar ahora?')}
              <div class="grid gap-3">
                ${infoCard('Recompensa', 'Oro, XP, esencia, fragmentos, llaves extra y botín de mayor calidad.', 'reward-card', 'Las mazmorras elevan el techo de recompensa frente al farmeo básico.')}
                ${infoCard('Checklist', `Coste actual: ${dungeonCost.keys} llave(s), ${dungeonCost.stamina} aguante, ${dungeonCost.energy} energía.`, 'surface-subtle')}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Soporte', 'Siguiente paso')}
              <div class="grid gap-2">
                <button type="button" class="btn" onclick="game.setView('inventario')">Ajustar equipo</button>
                <button type="button" class="btn" onclick="game.setView('arena')">Subir recursos en Arena</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderMercado() {
    const bestVisible = [...state.market.items].sort((a, b) => (b.score || 0) - (a.score || 0))[0];
    const affordableCount = state.market.items.filter((item) => (item.price || 0) <= state.player.gold).length;
    const upgradeCount = state.market.items.filter((item) => compareAgainstEquipped(item).tone === 'success').length;
    const supportOffers = ['potion', 'key', 'essence', 'catalyst', 'sigil', 'food']
      .map((kind) => resourceOffer(kind))
      .filter(Boolean);
    const supportMeta = {
      potion: { iconName: 'flask', tone: 'btn-success', desc: 'Recuperación directa para mantenerte combatiendo sin pausas largas.' },
      key: { iconName: 'key', tone: 'btn-violet', desc: 'Permite entrar a mazmorras y empujar progresión de pisos.' },
      essence: { iconName: 'spark', tone: 'btn-primary', desc: 'Material base para forja, mejoras y conversiones.' },
      catalyst: { iconName: 'gem', tone: '', desc: 'Componente avanzado para acciones de forja profunda y trascendencia.' },
      sigil: { iconName: 'pin', tone: '', desc: 'Recurso especializado para mejoras de mayor impacto.' },
      food: { iconName: 'box', tone: '', desc: 'Apoyo de ciclo para trabajo, mascota y estabilidad de recursos.' },
    };

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
            ${sectionHeader('Contexto', 'Rotación actual', 'Compra solo mejoras reales: evita gastar oro en cambios de impacto bajo.')}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${htmlStat('Comprables', affordableCount, 'Con tu oro actual')}
              ${htmlStat('Mejoras', upgradeCount, 'Frente al equipo equipado')}
              ${htmlStat('Oferta top', bestVisible ? SLOT_NAMES[bestVisible.slot] : '—', bestVisible ? bestVisible.name : 'Sin oferta destacada')}
            </div>

            ${bestVisible ? `
              <div class="surface-strong reward-card rounded-2xl p-4 mb-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Oferta destacada</div>
                    <div class="mt-1 flex flex-wrap items-center gap-2">
                      <div class="font-black rarity-${bestVisible.rarity} text-lg leading-snug">${bestVisible.name}</div>
                      ${rarityBadge(bestVisible.rarity)}
                    </div>
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
              ${state.market.items.map((item) => {
                const compare = compareAgainstEquipped(item);
                const canBuy = (item.price || 0) <= state.player.gold;
                return `
                  <div class="glass rounded-2xl p-4 market-card ${canBuy ? '' : 'opacity-80'}" ${tooltipAttr(`Oferta ${rarityName(item.rarity)} por ${fmt(item.price)} de oro. ${compare.detail} Compara coste frente a forja antes de comprar.`)}>
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

                    <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.buyMarketItem('${item.id}')" ${canBuy ? '' : 'disabled'}>Comprar</button>
                  </div>
                `;
              }).join('')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Decisión', 'Qué mirar antes de comprar')}
              <div class="grid gap-3">
                ${infoCard('Oferta destacada', bestVisible ? `${bestVisible.name} lidera la rotación actual.` : 'No hay oferta destacada ahora mismo.', 'reward-card')}
                ${infoCard('No fuerces compra', 'Si nada mejora de verdad, conserva oro para una mejor rotación o para forja.', 'surface-subtle')}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Soporte', 'Consumibles útiles')}
              <div class="grid gap-2">
                ${supportOffers.map((entry) => {
                  const meta = supportMeta[entry.kind] || { iconName: 'box', tone: '', desc: 'Consumible de soporte para mantener el ciclo.' };
                  const qty = Object.values(entry.reward || {}).reduce((sumValue, value) => sumValue + Number(value || 0), 0);
                  const label = qty > 1 ? `${entry.label} x${qty}` : entry.label;
                  return `<button type="button" class="btn ${meta.tone}" onclick="game.buyResource('${entry.kind}')" ${tooltipAttr(`${meta.desc} Precio dinámico según nivel y poder actual: ${fmt(entry.price)} de oro. Compra solo si acelera tu siguiente objetivo.`)}>${icon(meta.iconName, 'h-4 w-4')} ${label} · ${fmt(entry.price)} Oro</button>`;
                }).join('')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderForja() {
    const forgePity = getPityStatus('forge');
    const marketPity = getPityStatus('market');
    const actionPity = getForgePityStatus();
    const forgeState = getForgeState();
    const selectedSchool = forgeState && forgeState.school ? forgeState.school.id : 'arsenal';
    const availableNodes = (forgeState && Array.isArray(forgeState.availableNodes))
      ? forgeState.availableNodes.filter((node) => node.school === 'shared' || node.school === selectedSchool)
      : [];

    const formatOutcomes = (outcomes = []) => outcomes
      .map((entry) => `${Math.round((entry.chance || 0) * 100)}% ${rarityName(entry.rarity)}`)
      .join(' · ');

    const nextNodeCost = (node) => {
      const current = Number(node.currentRank || 0);
      if (current >= Number(node.maxRank || 0)) return null;
      const costs = Array.isArray(node.pointCost) ? node.pointCost : [1];
      return Number(costs[Math.min(costs.length - 1, current)] || 1);
    };

    const resonance = forgeState && forgeState.resonance ? forgeState.resonance : { counts: {}, bonus: {} };

    return `
      <div class="space-y-5">
        ${pageLead('forja', `Hierro: <b>${fmt(state.player.iron)}</b> · Esencia: <b>${fmt(state.player.essence)}</b> · Sigilos: <b>${fmt(state.player.sigils || 0)}</b> · Catalizadores: <b>${fmt(state.player.catalysts || 0)}</b>`, [
          actionButton('⚒️ Forjar arma', 'btn-primary', "game.craftItem('weapon', 'basic')", 'Forja determinista con calidad variable.'),
          actionButton('✨ Avanzada arma', 'btn-violet', "game.craftItem('weapon', 'advanced')", 'Mayor coste, mejor piso de rareza y más afijos.'),
          actionButton('🎒 Revisar inventario', '', "game.setView('inventario')")
        ].join(''))}

        ${actionBar([
          actionButton('⚒️ Básica', 'btn-primary !py-3', "game.craftItem('weapon', 'basic')"),
          actionButton('✨ Avanzada', 'btn-violet !py-3', "game.craftItem('weapon', 'advanced')")
        ])}

        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Especializacion', 'Escuela de forja y maestria', 'Define tu escuela y gasta puntos de maestria para ajustar coste, control y potencia.')}
            <div class="grid sm:grid-cols-3 gap-3">
              ${[
                ['arsenal', 'Arsenal', 'Enfoque ofensivo y presion de dano.'],
                ['bastion', 'Bastion', 'Enfoque defensivo y estabilidad.'],
                ['arcanum', 'Arcanum', 'Enfoque hibrido y control de outcomes.'],
              ].map(([id, name, desc]) => `
                <button type="button" class="glass rounded-2xl p-4 text-left ${selectedSchool === id ? 'ring ring-cyan-300/35 bg-cyan-400/8' : ''}" onclick="game.setForgeSchool('${id}')">
                  <div class="font-black text-lg">${name}</div>
                  <div class="text-xs text-slate-300/62 mt-1">${desc}</div>
                </button>
              `).join('')}
            </div>

            <div class="mt-4 grid sm:grid-cols-2 gap-3">
              ${infoCard('Puntos de maestria', `<b>${fmt(forgeState.masteryPoints || 0)}</b> disponibles · etapa <b>${forgeState.stage || 'early'}</b>.`, 'surface-subtle')}
              ${infoCard('Resonancia activa', `Ofensivo ${resonance.counts.offensive || 0} · Defensivo ${resonance.counts.defensive || 0} · Hibrido ${resonance.counts.hybrid || 0}`, 'surface-subtle')}
            </div>

            <div class="mt-4 grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${availableNodes.map((node) => {
                const nextCost = nextNodeCost(node);
                const canBuy = nextCost !== null && (forgeState.masteryPoints || 0) >= nextCost;
                return `
                  <div class="glass rounded-2xl p-4">
                    <div class="text-xs uppercase tracking-[.16em] text-slate-300/55">${node.branch}</div>
                    <div class="font-black mt-1">${node.name}</div>
                    <div class="text-xs text-slate-300/62 mt-1">${node.currentRank || 0}/${node.maxRank}</div>
                    <button type="button" class="btn btn-violet !py-2 mt-3 w-full" onclick="game.unlockForgeMastery('${node.id}')" ${nextCost === null ? 'disabled' : ''}>${nextCost === null ? 'Maximo' : `Subir (${nextCost} pts)`}</button>
                    ${nextCost !== null ? `<div class="text-xs text-slate-300/62 mt-2">${canBuy ? 'Disponible ahora' : 'Sin puntos suficientes'}</div>` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </section>

          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Contexto', 'Creacion por espacio', 'Cada receta muestra coste, probabilidades y escenarios antes de gastar materiales.')}
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${SLOT_ORDER.map((slot) => `
                ${(() => {
                  const basic = previewCraftItem(slot, 'basic');
                  const advanced = previewCraftItem(slot, 'advanced');
                  return `
                <div class="glass rounded-2xl p-4 forge-recipe-card">
                  <div class="font-bold">${SLOT_NAMES[slot]}</div>
                  <div class="text-sm text-slate-300/70 mt-1">Pieza aleatoria del hueco con presupuesto por nivel y rareza.</div>
                    <div class="grid gap-2 mt-3 text-xs text-slate-300/74">
                      <div class="rounded-xl bg-white/[.04] p-2.5" ${tooltipAttr('Receta básica: coste reducido y resultado más estable. Útil para volumen y progreso temprano de equipo.')}>Básica: ${formatCostChips(basic.cost)}<br><span class="text-slate-300/62">${formatOutcomes(basic.outcomes)}</span></div>
                      <div class="rounded-xl bg-white/[.04] p-2.5" ${tooltipAttr('Receta avanzada: mayor coste, mejor piso de rareza y más techo de calidad.')}>Avanzada: ${formatCostChips(advanced.cost)}<br><span class="text-slate-300/62">${formatOutcomes(advanced.outcomes)}</span></div>
                      <div class="rounded-xl bg-white/[.04] p-2.5">Escenario: <b>${Math.round((advanced.scenarioChances.favorable || 0) * 100)}%</b> favorable · <b>${Math.round((advanced.scenarioChances.neutral || 0) * 100)}%</b> neutral · <b>${Math.round((advanced.scenarioChances.unfavorable || 0) * 100)}%</b> desfavorable</div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3">
                      <button type="button" class="btn btn-primary !py-2" onclick="game.craftItem('${slot}', 'basic')">Básica</button>
                      <button type="button" class="btn btn-violet !py-2" onclick="game.craftItem('${slot}', 'advanced')">Avanzada</button>
                    </div>
                </div>
                  `;
                })()}
              `).join('')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Decision', 'Mejorar equipado', 'Mejorar sube poder, retemplar ofrece modos excluyentes, estabilizar reduce varianza y trascender evoluciona rareza.')}
              <div class="space-y-3 mt-4">
                ${['weapon', 'chest', 'ring', 'amulet'].map((slot) => {
                  const item = state.player.equipment[slot];
                  const enhance = item ? previewEnhanceItem(slot) : null;
                  const reforge = item ? previewReforgeItem(item.id) : null;
                  const transcend = item ? previewTranscendItem(item.id) : null;
                  const stabilize = item ? previewStabilizeItem(item.id) : null;
                  return `
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${SLOT_NAMES[slot]}</div>
                       <div class="font-black break-words ${item ? `rarity-${item.rarity}` : 'text-slate-400/80'}">${item ? item.name : 'Vacío'}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${item ? `Nivel ${item.level} · Mejora +${item.upgrade || 0} · Afinidad ${item.affinityLevel || 0}` : 'Equipa algo para mejorarlo.'}</div>
                      ${item && enhance ? `<div class="text-xs text-slate-300/62 mt-2">Mejorar: ${Math.round(enhance.successChance * 100)}% · Coste ${formatCostChips(enhance.cost)}</div>` : ''}
                      ${item && reforge ? `<div class="text-xs text-slate-300/62 mt-1">Retemplado total: ${Math.round(reforge.successChance * 100)}% · Coste ${formatCostChips(reforge.cost)}</div>` : ''}
                      ${item && reforge && Array.isArray(reforge.modes) ? `<div class="text-xs text-slate-300/62 mt-1">Parcial ${Math.round((reforge.modes.find((m) => m.mode === 'partial')?.successChance || 0) * 100)}% · Bloqueo ${Math.round((reforge.modes.find((m) => m.mode === 'lock')?.successChance || 0) * 100)}%</div>` : ''}
                      ${item && stabilize ? `<div class="text-xs text-slate-300/62 mt-1">Estabilizar: ${Math.round(stabilize.successChance * 100)}% · Coste ${formatCostChips(stabilize.cost)}</div>` : ''}
                      ${item && transcend ? `<div class="text-xs text-slate-300/62 mt-1">Trascender: ${Math.round(transcend.successChance * 100)}% · ${transcend.from} → ${transcend.to}</div>` : ''}
                      <div class="grid grid-cols-2 gap-2 mt-3">
                        <button type="button" class="btn btn-gold !py-2" ${item ? `onclick="game.enhanceItem('${slot}')"` : 'disabled'} ${tooltipAttr('Mejora incremental y relativamente estable de la pieza equipada. Recomendado cuando ya estás conforme con sus afijos.')}>Mejorar</button>
                        <button type="button" class="btn btn-violet !py-2" ${item ? `onclick="game.reforgeItem({itemId:'${item.id}', mode:'total'})"` : 'disabled'} ${tooltipAttr('Retemplado total: vuelve a tirar la pieza completa. Menor coste, pero con mayor varianza en el resultado final.')}>Retemplado total</button>
                        <button type="button" class="btn !py-2" ${item ? `onclick="game.reforgeItem({itemId:'${item.id}', mode:'partial'})"` : 'disabled'} ${tooltipAttr('Retemplado parcial: conserva más estructura de la pieza. Cuesta más, pero reduce cambios extremos.')}>Retemplado parcial</button>
                        <button type="button" class="btn !py-2" ${item ? `onclick="game.reforgeItem({itemId:'${item.id}', mode:'lock'})"` : 'disabled'} ${tooltipAttr('Retemplado con bloqueo: protege tu estadística principal para minimizar pérdidas en la tirada.')}>Retemplado con bloqueo</button>
                        <button type="button" class="btn !py-2" ${item && stabilize ? `onclick="game.stabilizeItem('${item.id}')"` : 'disabled'} ${tooltipAttr('Estabiliza la pieza para mejorar consistencia y control de varianza sin destruirla.')}>Estabilizar</button>
                        <button type="button" class="btn !py-2 col-span-2" ${item && transcend ? `onclick="game.transcendItem('${item.id}')"` : 'disabled'} ${tooltipAttr('Trascender intenta elevar la rareza. Exige requisitos y coste alto, pero abre un techo de poder superior.')}>Trascender</button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Conversion', 'Materiales y reciclaje', 'Convierte excedentes de bajo nivel a recursos de valor medio y alto con pérdida controlada.')}
              <div class="grid gap-2">
                <button type="button" class="btn" onclick="game.convertMaterials('iron_wood_to_essence')">20 Hierro + 12 Madera + 80 Oro → 1 Esencia</button>
                <button type="button" class="btn" onclick="game.convertMaterials('essence_to_sigils')">8 Esencia + 120 Oro → 1 Sigilo</button>
                <button type="button" class="btn" onclick="game.convertMaterials('sigils_to_echo')">5 Sigilos + 1 Catalizador + 180 Oro → 1 Fragmento de Eco</button>
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Soporte', 'Racha y regla de gasto')}
              <div class="grid gap-3">
                ${infoCard('Racha forja', `Épica en ${forgePity.epic} intentos sin hito · Mítica en ${forgePity.mythic}.`, 'surface-subtle')}
                ${infoCard('Racha mercado', `Épica en ${marketPity.epic} rotaciones sin hito · Mítica en ${marketPity.mythic}.`, 'surface-subtle')}
                ${infoCard('Racha acciones', `Mejorar ${actionPity.enhance} · Retemplar ${actionPity.reforge} · Estabilizar ${actionPity.stabilize} · Trascender ${actionPity.transcend}`, 'surface-subtle')}
                ${infoCard('Estrategia', 'Hierro para volumen, esencia para mejoras, sigilos/catalizadores/echo para profundidad tardía.', 'surface-subtle')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderGremio() {
    const descriptions = {
      barracks: 'Aumenta ataque y defensa global para sostener mejor combate activo y mazmorras.',
      treasury: 'Incrementa el oro obtenido en todas las actividades para acelerar economía y compras.',
      sanctuary: 'Eleva vida máxima y regeneración para mejorar supervivencia en sesiones largas.',
      hunters: 'Mejora suerte y calidad de botín, útil para encontrar piezas de mayor techo.',
      arsenal: 'Amplía capacidad de inventario para reducir limpieza forzada y mantener opciones.',
    };

    return `
      <div class="space-y-5">
        ${pageLead('gremio', `Nivel total invertido: <b>${guildTotal()}</b>`, [
          actionButton('🪙 Ver mercado', '', "game.setView('mercado')"),
          actionButton('🏋️ Entrenar', 'btn-primary', "game.setView('entrenamiento')")
        ].join(''))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Contexto', 'Mejoras del gremio', 'Cada edificio empuja un estilo de progreso distinto.')}
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
                    <button type="button" class="btn btn-violet mt-3 w-full" onclick="game.upgradeGuild('${key}')">Mejorar</button>
                  </div>
                `;
              }).join('')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Decisión', 'Cómo repartir inversión')}
              <div class="grid gap-3">
                ${infoCard('Especialízate', 'Sube uno o dos edificios primero para sentir impacto temprano.', 'surface-subtle')}
                ${infoCard('Prioridad típica', 'Tesorería y Barracas suelen notarse antes en la partida.', 'surface-subtle')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderEntrenamiento() {
    const activeSkills = state.player.activeSkills
      .map((id) => SKILLS[id])
      .filter(Boolean);
    return `
      <div class="space-y-5">
        ${pageLead('entrenamiento', `Puntos de atributo: <b>${state.player.attributePoints}</b>`, [
          actionButton('⚡ Habilidades', 'btn-violet', "game.setView('habilidades')"),
          actionButton('👤 Perfil', '', "game.setView('perfil')"),
          actionButton('⚔️ Arena', 'btn-primary', "game.setView('arena')")
        ].join(''))}

        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Contexto', 'Atributos base', 'Ajusta tu base estadística para sostener mejor daño, ritmo y supervivencia.')}
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
                  <button type="button" class="btn btn-primary mt-3 w-full" onclick="game.trainAttribute('${key}')">Subir</button>
                </div>
              `).join('')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Habilidades', 'Gestión dedicada')}
              <div class="grid gap-3">
                ${infoCard('Puntos de habilidad', `${state.player.skillPoints} disponibles para mejorar habilidades desbloqueadas.`, 'surface-subtle')}
                ${infoCard('Activas', `${activeSkills.length}/4 equipadas para combate.`, 'surface-subtle')}
              </div>
              <button type="button" class="btn btn-violet mt-4 w-full" onclick="game.setView('habilidades')">Abrir vista de habilidades</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Soporte', 'Regla rápida')}
              <div class="grid gap-3">
                ${infoCard('Primero base', 'Sube atributos cuando te falte estabilidad general en combate.', 'surface-subtle')}
                ${infoCard('Después especializa', 'Mejora habilidades cuando ya tengas una rotación activa clara.', 'surface-subtle')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderHabilidades() {
    const allSkills = Object.values(SKILLS);
    const sortedSkills = [...allSkills].sort((a, b) => {
      const aUnlocked = state.player.unlockedSkills.includes(a.id) ? 1 : 0;
      const bUnlocked = state.player.unlockedSkills.includes(b.id) ? 1 : 0;
      const aActive = state.player.activeSkills.includes(a.id) ? 1 : 0;
      const bActive = state.player.activeSkills.includes(b.id) ? 1 : 0;
      if (bActive !== aActive) return bActive - aActive;
      if (bUnlocked !== aUnlocked) return bUnlocked - aUnlocked;
      return Number(a.unlockLevel || 1) - Number(b.unlockLevel || 1);
    });
    const activeCount = state.player.activeSkills.length;
    const unlockedCount = allSkills.filter((skill) => state.player.unlockedSkills.includes(skill.id)).length;
    const avgLevel = allSkills.length
      ? (allSkills.reduce((sumValue, skill) => sumValue + Number(state.player.skillLevels[skill.id] || 1), 0) / allSkills.length)
      : 1;

    const formatBuffList = (buff = {}) => {
      const entries = Object.entries(buff).filter(([key]) => key !== 'turns' && key !== 'shieldPct');
      const labels = entries.map(([key, value]) => {
        const sign = Number(value) >= 0 ? '+' : '';
        const isPct = ['crit', 'dodge', 'block', 'lifesteal', 'attackPct', 'defensePct', 'hpPct', 'speedPct', 'goldPct', 'lootLuck', 'regenPct'].includes(key);
        return `${statLabel(key)} ${sign}${isPct ? pct(value) : fmt(value)}`;
      });
      if (buff.shieldPct) labels.push(`Escudo inicial +${pct(buff.shieldPct)}`);
      if (buff.turns) labels.push(`Duración ${buff.turns} turnos`);
      return labels.join(' · ');
    };

    const formatUsage = (skill) => {
      const lines = [];
      lines.push(`Recarga: ${skill.cooldown} turnos`);
      lines.push(`Desbloqueo: nivel ${skill.unlockLevel}`);
      if (skill.requireOffhand) lines.push('Requiere escudo o mano izquierda equipada');
      if (skill.executeThreshold) lines.push(`Ejecuta mejor por debajo de ${Math.round(skill.executeThreshold * 100)}% de vida enemiga`);
      if (skill.hits) lines.push(`Realiza ${skill.hits} impactos en el mismo turno`);
      return lines.join(' · ');
    };

    const detailChips = (skill) => {
      const tags = [];
      if (skill.critBonus) tags.push(`Crítico +${pct(skill.critBonus)}`);
      if (skill.lifestealBonus) tags.push(`Robo de vida +${pct(skill.lifestealBonus)}`);
      if (skill.armorBreak) tags.push(`Rompe armadura ${pct(skill.armorBreak.pct)} por ${skill.armorBreak.turns} turnos`);
      if (skill.dot) tags.push(`${skill.dot.label}: ${pct(skill.dot.ratio)} por ${skill.dot.turns} turnos`);
      if (skill.selfBuff) tags.push(`Auto-mejora: ${formatBuffList(skill.selfBuff)}`);
      if (skill.executeThreshold && skill.executeMult) tags.push(`Daño de ejecución x${fmt(skill.executeMult)}`);
      return tags.length
        ? tags.map((tag) => `<span class="inline-flex items-center rounded-full border border-white/15 bg-white/[.04] px-2 py-1 text-[11px] text-slate-200/85">${tag}</span>`).join('')
        : '<span class="text-slate-300/62 text-xs">Sin efectos secundarios adicionales.</span>';
    };

    return `
      <div class="space-y-5">
        ${pageLead('habilidades', `Activas: <b>${activeCount}/4</b> · Desbloqueadas: <b>${unlockedCount}/${allSkills.length}</b> · Puntos: <b>${state.player.skillPoints}</b>`, [
          actionButton('🏋️ Entrenamiento', '', "game.setView('entrenamiento')"),
          actionButton('⚔️ Arena', 'btn-primary', "game.setView('arena')"),
          actionButton('🎒 Inventario', 'btn-violet', "game.setView('inventario')")
        ].join(''))}

        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Panel de habilidades', 'Detalle de uso y potencia', 'Aquí decides qué habilidad equipar, cuándo subirla y cómo encaja en tu rotación de combate.')}

            <div class="grid sm:grid-cols-4 gap-3 mb-4">
              ${htmlStat('Activas', `${activeCount}/4`, 'Ranuras en uso')}
              ${htmlStat('Desbloqueadas', `${unlockedCount}/${allSkills.length}`, 'Disponibles por nivel')}
              ${htmlStat('Puntos', state.player.skillPoints, 'Para mejoras directas')}
              ${htmlStat('Nivel medio', avgLevel.toFixed(1), 'Promedio de todas tus habilidades')}
            </div>

            <div class="grid md:grid-cols-2 gap-3">
              ${sortedSkills.map((skill) => {
                const unlocked = state.player.unlockedSkills.includes(skill.id);
                const active = state.player.activeSkills.includes(skill.id);
                const level = Number(state.player.skillLevels[skill.id] || 1);
                const maxed = level >= 5;
                const canUpgrade = unlocked && state.player.skillPoints > 0 && !maxed;
                const levelFactor = 1 + Math.max(0, level - 1) * 0.08;
                const nextLevelFactor = 1 + level * 0.08;
                const currentMult = (skill.mult || 1) * levelFactor;
                const nextMult = (skill.mult || 1) * nextLevelFactor;
                const lockText = unlocked
                  ? 'Disponible'
                  : `Se desbloquea en nivel ${skill.unlockLevel}`;
                return `
                  <div class="glass rounded-2xl p-4 ${active ? 'ring ring-cyan-300/30 bg-cyan-400/8' : ''}">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black leading-tight">${skill.name}</div>
                        <div class="text-xs text-slate-300/62 mt-1">${skill.desc}</div>
                      </div>
                      <div>${active ? statusChip('Activa', 'success') : unlocked ? statusChip('Lista') : statusChip('Bloqueada', 'warning')}</div>
                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div class="rounded-xl bg-white/[.04] p-2.5">Nivel actual <b>${level}/5</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2.5">Daño base <b>x${fmt(currentMult)}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2.5">Siguiente nivel <b>${maxed ? 'Máximo' : `x${fmt(nextMult)}`}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2.5">Estado <b>${lockText}</b></div>
                    </div>

                    <div class="text-xs text-slate-300/68 mt-3" ${tooltipAttr('Describe cuándo conviene usar la habilidad según recarga, requisitos y condición de ejecución.')}>${formatUsage(skill)}</div>

                    <div class="inline-flex flex-wrap gap-1.5 mt-3">
                      ${detailChips(skill)}
                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-4">
                      <button type="button" class="btn !py-2" ${unlocked ? `onclick="game.toggleActiveSkill('${skill.id}')"` : 'disabled'} ${tooltipAttr(active ? 'Quita esta habilidad de tu rotación activa actual.' : 'Equipa esta habilidad para usarla en combate automático y manual.')}>${active ? 'Quitar' : 'Equipar'}</button>
                      <button type="button" class="btn btn-violet !py-2" ${canUpgrade ? `onclick="game.upgradeSkill('${skill.id}')"` : 'disabled'} ${tooltipAttr(maxed ? 'Ya alcanzó el nivel máximo (5/5).' : unlocked ? 'Gasta 1 punto de habilidad para subir potencia y escalado.' : 'Debes alcanzar el nivel requerido para desbloquear esta habilidad.')}>${maxed ? 'Máximo' : 'Mejorar'}</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Uso recomendado', 'Orden de decisión intuitivo')}
              <div class="grid gap-3">
                ${infoCard('1) Asegura base', 'Mantén al menos una habilidad defensiva o de control para no colapsar en combates largos.', 'surface-subtle')}
                ${infoCard('2) Define tu rol', 'Después prioriza daño explosivo, daño sostenido o ejecución según tu estilo de juego.', 'surface-subtle')}
                ${infoCard('3) Invierte puntos', 'Sube primero habilidades activas que uses siempre; evita dispersar puntos sin plan.', 'surface-subtle')}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Lectura rápida', 'Qué mirar en cada habilidad')}
              <div class="grid gap-3">
                ${infoCard('Recarga', 'Menor recarga = mayor frecuencia de uso en la rotación.', 'surface-subtle')}
                ${infoCard('Condición', 'Ejecución, mano izquierda o estado del rival cambian su valor real.', 'surface-subtle')}
                ${infoCard('Escalado', 'Cada nivel aumenta el multiplicador final de daño de la habilidad.', 'surface-subtle')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderTrabajo() {
    const running = Boolean(state.timers.job);
    const playerLevel = Math.max(1, state.player.level || 1);
    const levelFactor = Math.floor(playerLevel / 10);
    return `
      <div class="space-y-5">
        ${pageLead('trabajo', running ? `En curso: <b>${state.timers.job.name}</b> · <span data-live-timer="job">${jobTimerText()}</span>` : 'Sin trabajo activo', [
          actionButton('🧭 Expedición', '', "game.setView('expedicion')"),
          actionButton('💰 Mercado', 'btn-gold', "game.setView('mercado')")
        ].join(''))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Contexto', 'Trabajos disponibles', 'Elige una fuente de oro estable cuando no quieras combate activo.')}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${JOBS.map((job) => {
                const energyCost = 10 + Math.round(job.duration / 30) + levelFactor;
                const staminaCost = Math.max(1, Math.floor(job.duration / 120));
                return `
                <div class="glass rounded-2xl p-4">
                  <div class="font-black text-lg">${job.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${job.desc}</div>
                  <div class="grid grid-cols-3 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Duración <b>${job.duration}s</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${fmt(job.reward.gold)} oro</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Coste <b>${energyCost}E / ${staminaCost}A</b></div>
                  </div>
                  <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.startJob('${job.id}')" ${tooltipAttr('Inicia este trabajo y activa un temporizador único hasta finalizar. Es una fuente estable de oro y recursos secundarios.')}>Aceptar</button>
                </div>
                `;
              }).join('')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Soporte', 'Regla rápida')}
              <div class="grid gap-3">
                ${infoCard('Estado', running ? 'Ya tienes un trabajo activo: espera el temporizador.' : 'No hay trabajo activo: puedes aceptar uno ahora.', 'surface-subtle')}
                ${infoCard('Alternativa', 'Si también quieres botín, Expedición suele aportar más variedad.', 'surface-subtle')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderMascota() {
    const pet = getPetData();
    const progress = petProgressMeta ? petProgressMeta() : null;
    const feedPreview = pet ? previewPetFeed(1) : null;
    const feedPreviewBulk = pet ? previewPetFeed(5) : null;
    const ritualCards = petRituals ? petRituals() : PET_RITUALS.map((ritual) => previewPetHatch(ritual.id));
    const tierClass = {
      common: 'surface-subtle',
      rare: 'ring ring-cyan-300/25 bg-cyan-400/10',
      epic: 'ring ring-violet-300/30 bg-violet-400/10',
      mythic: 'ring ring-amber-300/35 bg-amber-400/10',
    };
    const tierLabel = {
      common: 'Comun',
      rare: 'Rara',
      epic: 'Epica',
      mythic: 'Mitica',
    };
    const formatPetCost = (cost) => formatCost(cost || {});
    const bonusLabel = (key, value) => {
      const isPct = ['crit', 'dodge', 'block', 'lifesteal', 'attackPct', 'defensePct', 'hpPct', 'speedPct', 'goldPct', 'lootLuck', 'regenPct'].includes(key);
      const sign = value >= 0 ? '+' : '';
      return `${statLabel ? statLabel(key) : key}: <b>${sign}${isPct ? pct(value) : fmt(value)}</b>`;
    };

    return `
      <div class="space-y-5">
        ${pageLead('mascota', pet ? `Activa: <b>${pet.name}</b> · Tier <b>${tierLabel[pet.tier || 'common']}</b>` : 'Sin mascota activa', [
          actionButton('👤 Perfil', '', "game.setView('perfil')"),
          actionButton('🥚 Silvestre', 'btn-primary', "game.hatchPet('wild')", 'Ritual barato para obtener una mascota de entrada.'),
          actionButton('🌌 Astral', 'btn-violet', "game.hatchPet('astral')", 'Ritual tardio con mayor probabilidad de tiers altos.')
        ].join(''))}

        <div class="grid xl:grid-cols-[1.1fr,.9fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Companero activo', 'Progreso y curva', 'La curva de experiencia y costes escalan con tier de mascota, nivel de mascota y nivel de jugador.')}
            ${pet && progress ? `
              <div class="glass rounded-2xl p-5">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <div class="text-cyan-200">${icon(pet.icon || 'paw', 'h-9 w-9')}</div>
                    <div class="font-display font-extrabold text-2xl mt-2">${pet.name}</div>
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/58 mt-1">${tierLabel[pet.tier || 'common']} · Poder ${fmt(pet.power || 1)}</div>
                  </div>
                  ${statusChip(`x${fmt(progress.growthMultiplier)}`, pet.tier === 'mythic' ? 'warning' : pet.tier === 'epic' ? 'violet' : 'success')}
                </div>
                <div class="text-sm text-slate-300/75 mt-2">${pet.desc}</div>

                <div class="grid sm:grid-cols-3 gap-3 mt-4">
                  ${htmlStat('Nivel', progress.level)}
                  ${htmlStat('XP', `${progress.xp}/${progress.xpNeeded}`)}
                  ${htmlStat('Escalado', `x${fmt(progress.growthMultiplier)}`, 'Multiplicador aplicado a bonus base')}
                </div>

                <div class="mt-3">
                  ${progressBar(progress.xp, progress.xpNeeded, 'bg-gradient-to-r from-cyan-400 via-emerald-300 to-sky-300 shadow-[0_0_14px_rgba(56,189,248,.28)]', 'Progreso de nivel', 'Sube alimentando. Coste y curva escalan con el poder del companero.')}
                </div>

                <div class="grid sm:grid-cols-3 gap-3 mt-4">
                  <button type="button" class="btn btn-success" onclick="game.feedPet()" ${feedPreview && feedPreview.canFeed ? tooltipAttr(`Consume ${formatPetCost(feedPreview.costPerFeed)} para +1 XP.`) : 'disabled'}>${icon('box', 'h-4 w-4')}<span>Alimentar x1</span></button>
                  <button type="button" class="btn btn-primary" onclick="game.feedPet(5)" ${feedPreviewBulk && feedPreviewBulk.canFeed ? tooltipAttr(`Intenta 5 alimentaciones. Coste estimado: ${formatPetCost(feedPreviewBulk.totalCost)}.`) : 'disabled'}>${icon('spark', 'h-4 w-4')}<span>Alimentar x5</span></button>
                  <button type="button" class="btn btn-danger" onclick="game.releasePet()" ${tooltipAttr('Libera la mascota activa. Recuperas una fraccion de recursos segun nivel y tier.')}>Liberar</button>
                </div>

                <div class="grid sm:grid-cols-2 gap-3 mt-4 text-sm">
                  <div class="rounded-2xl bg-white/[.04] p-3">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Coste actual por comida</div>
                    <div class="mt-1">${feedPreview ? formatPetCost(feedPreview.costPerFeed) : 'No disponible'}</div>
                  </div>
                  <div class="rounded-2xl bg-white/[.04] p-3">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Meta del siguiente nivel</div>
                    <div class="mt-1">${petXpForNextLevel ? `${petXpForNextLevel(pet, progress.level)} XP` : `${progress.xpNeeded} XP`}</div>
                  </div>
                </div>
              </div>
            ` : `
              <div class="glass rounded-2xl p-5">
                <p class="text-sm text-slate-300/75">No hay mascota activa. Usa la incubadora de la derecha y elige un ritual acorde a tu etapa de progreso.</p>
                <div class="grid sm:grid-cols-2 gap-3 mt-4">
                  <button type="button" class="btn btn-primary" onclick="game.hatchPet('wild')">${icon('spark', 'h-4 w-4')}<span>Ritual silvestre</span></button>
                  <button type="button" class="btn btn-violet" onclick="game.hatchPet('bonded')">${icon('flame', 'h-4 w-4')}<span>Ritual vinculado</span></button>
                </div>
              </div>
            `}
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Incubadora', 'Rituales y costes', 'Cada ritual cambia probabilidades por tier y coste total. Incluye racha para tiers altos.')}
              <div class="grid gap-3">
                ${ritualCards.map((ritualData) => {
                  const ritual = ritualData.ritual;
                  const chance = ritualData.chanceByTier || {};
                  const unlock = state.player.level >= (ritual.unlockLevel || 1);
                  return `
                    <div class="rounded-2xl p-4 ${tierClass[ritual.id === 'astral' ? 'epic' : ritual.id === 'bonded' ? 'rare' : 'common']}">
                      <div class="flex items-start justify-between gap-2">
                        <div>
                          <div class="font-display font-extrabold">${ritual.name}</div>
                          <div class="text-xs text-slate-300/62 mt-1">Nivel ${ritual.unlockLevel}+ · ${ritual.desc}</div>
                        </div>
                        ${statusChip(unlock ? 'Listo' : `Nv ${ritual.unlockLevel}`, unlock ? 'success' : 'danger')}
                      </div>
                      <div class="grid grid-cols-2 gap-2 mt-3 text-xs">
                        <div class="rounded-xl bg-white/[.04] p-2">Comun <b>${chance.common || 0}%</b></div>
                        <div class="rounded-xl bg-white/[.04] p-2">Rara <b>${chance.rare || 0}%</b></div>
                        <div class="rounded-xl bg-white/[.04] p-2">Epica <b>${chance.epic || 0}%</b></div>
                        <div class="rounded-xl bg-white/[.04] p-2">Mitica <b>${chance.mythic || 0}%</b></div>
                      </div>
                      <div class="text-xs text-slate-300/68 mt-3">Coste: ${formatPetCost(ritualData.cost)}</div>
                      <button type="button" class="btn mt-3 w-full ${ritual.id === 'astral' ? 'btn-violet' : ritual.id === 'bonded' ? 'btn-primary' : ''}" onclick="game.hatchPet('${ritual.id}')" ${unlock && !pet ? '' : 'disabled'}>
                        ${pet ? 'Libera mascota actual' : `Invocar (${ritual.id})`}
                      </button>
                      ${ritualData.guaranteedTier ? `<div class="text-[11px] text-amber-200 mt-2">Garantia activa: ${tierLabel[ritualData.guaranteedTier] || ritualData.guaranteedTier}+</div>` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Catalogo', 'Diversidad de mascotas')}
              <div class="grid gap-3 max-h-[24rem] overflow-auto pr-1">
                ${PETS.map((entry) => {
                  const isUnlocked = state.player.level >= Number(entry.unlockLevel || 1);
                  return `
                    <div class="rounded-2xl p-4 ${tierClass[entry.tier || 'common']} ${isUnlocked ? '' : 'opacity-70'}">
                      <div class="flex items-center justify-between gap-2">
                        <div class="font-bold font-display inline-flex items-center gap-2">${icon(entry.icon || 'paw', 'h-4 w-4')}<span>${entry.name}</span></div>
                        <span class="text-xs uppercase tracking-[.16em] text-slate-300/60">${tierLabel[entry.tier || 'common']}</span>
                      </div>
                      <div class="text-xs text-slate-300/62 mt-1">Nivel ${entry.unlockLevel || 1}+ · Poder ${fmt(entry.power || 1)}</div>
                      <div class="text-sm text-slate-300/75 mt-2">${entry.desc}</div>
                      <div class="grid grid-cols-1 gap-1 mt-3 text-xs">
                        ${Object.entries(entry.bonus || {}).map(([key, value]) => `<div class="rounded-lg bg-white/[.05] px-2 py-1">${bonusLabel(key, value)}</div>`).join('')}
                      </div>
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
            ${sectionHeader('Contexto', 'Hitos activos', 'Se muestra una selección corta para mantener foco de progresión.')}
            <div class="space-y-3">
              ${highlighted.map((achievement) => {
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
              ${sectionHeader('Decisión', 'Ascensión')}
              <p class="text-sm text-slate-300/75 mt-2">Actívala cuando quieras convertir una partida avanzada en progreso permanente.</p>
              <button type="button" class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${tooltipAttr('Reinicia gran parte de la partida para obtener progreso meta permanente. Conviene hacerlo cuando el avance actual ya se ralentiza.')}>🔱 Ascender</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Soporte', 'Altar de reliquias')}
              <div class="grid gap-3 mt-4">
                ${[
                  ['wrath', 'Ira'],
                  ['fortune', 'Fortuna'],
                  ['vitality', 'Vitalidad'],
                  ['momentum', 'Impulso'],
                ].map(([key, title]) => `
                  <button type="button" class="btn btn-violet justify-between" onclick="game.spendRelic('${key}')" ${tooltipAttr(`Invierte polvo de reliquia en ${title.toLowerCase()} para fortalecer bonificaciones permanentes de cuenta. Prioriza el área que más use tu build.`)}><span>${title}</span><span>Nv ${state.player.relics[key]}</span></button>
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
            ${sectionHeader('Contexto', 'Registro reciente', 'El diario es histórico: úsalo para revisar, no para decidir acciones inmediatas.')}
            <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${entries.length ? start + 1 : 0}</b>–<b>${Math.min(start + pageSize, entries.length)}</b> de <b>${entries.length}</b>.</div>
            <div class="space-y-3">
              ${pageEntries.map((entry) => `
                <div class="glass rounded-2xl p-4 cv-auto">
                  <div class="font-black">${replaceEmojiIcons(entry.icon)} <span class="font-semibold">${new Date(entry.ts).toLocaleTimeString('es-ES')}</span></div>
                  <div class="text-sm text-slate-200/90 leading-relaxed mt-2">${entry.text}</div>
                </div>
              `).join('') || '<div class="text-sm text-slate-300/75">Todavía no hay entradas en el diario.</div>'}
            </div>
            ${pager(currentPage, totalPages, 'setJournalPage')}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${sectionHeader('Soporte', 'Uso recomendado')}
            <div class="grid gap-3">
              ${infoCard('Consulta', 'Revisa aquí eventos y recompensas pasadas.', 'surface-subtle')}
              ${infoCard('Acción', 'Para progresar, vuelve a Resumen, Arena o Inventario.', 'surface-subtle')}
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderConfiguracion() {
    const meta = getStoreMeta ? getStoreMeta() : { isSaving: false, isDirty: false, lastSaveAt: 0 };
    const saveLabel = meta.isSaving
      ? 'Guardando...'
      : meta.isDirty
        ? 'Cambios pendientes'
        : meta.lastSaveAt
          ? `Guardado ${new Date(meta.lastSaveAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
          : 'Sin guardado';
    const saveTone = meta.isSaving ? 'warning' : (meta.isDirty ? 'danger' : 'success');

    return `
      <div class="space-y-5">
        ${pageLead('configuracion', `Estado de guardado: <b>${saveLabel}</b>`, [
          actionButton('💾 Guardar ahora', 'btn-primary', 'game.saveNow()', 'Fuerza un guardado inmediato de la partida actual.'),
          actionButton('✏️ Renombrar personaje', '', 'game.requestRenamePlayer()', 'Cambia el nombre del gladiador sin perder progreso.'),
          actionButton('🗑️ Eliminar cuenta', 'btn-danger', 'game.requestNewGameReset()', 'Borra todos los datos locales y reinicia el juego desde cero.')
        ].join(''))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Preferencias', 'Guardado e interfaz', 'Ajustes de comodidad para adaptar el ritmo de juego sin tocar el balance.')}

            <div class="grid sm:grid-cols-2 gap-3">
              ${infoCard('Guardado automático', state.ui.autoSave ? 'Activo: el juego guarda cambios de forma periódica.' : 'Desactivado: deberías usar Guardar ahora antes de salir.', 'surface-subtle')}
              ${infoCard('Estado actual', `<span class="status-chip ${saveTone}">${saveLabel}</span>`, 'surface-subtle')}
            </div>

            <div class="mt-4 grid sm:grid-cols-2 gap-3">
              <button type="button" class="btn ${state.ui.autoSave ? 'btn-primary' : ''}" onclick="game.setAutoSaveEnabled(true)" ${tooltipAttr('Activa guardado automático para no perder progreso ante cierres inesperados.')}>Auto-guardado ON</button>
              <button type="button" class="btn ${!state.ui.autoSave ? 'btn-danger' : ''}" onclick="game.requestDisableAutoSave()" ${!state.ui.autoSave ? 'disabled' : ''} ${tooltipAttr('Desactiva guardado automático con confirmación previa. Recomendado solo si quieres control manual total del guardado.')}>Auto-guardado OFF</button>
            </div>

            <div class="mt-6 grid sm:grid-cols-2 gap-4">
              <div class="surface-subtle rounded-2xl p-4">
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Inventario</div>
                <div class="text-sm text-slate-300/76 mt-2">Objetos por página: <b>${state.ui.inventoryPageSize}</b></div>
                <div class="grid grid-cols-4 gap-2 mt-3">
                  ${[12, 18, 24, 30].map((size) => `<button type="button" class="btn !py-2 ${state.ui.inventoryPageSize === size ? 'btn-primary' : ''}" onclick="game.setInventoryPageSize(${size})">${size}</button>`).join('')}
                </div>
              </div>

              <div class="surface-subtle rounded-2xl p-4">
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Diario</div>
                <div class="text-sm text-slate-300/76 mt-2">Entradas por página: <b>${state.ui.journalPageSize}</b></div>
                <div class="grid grid-cols-4 gap-2 mt-3">
                  ${[12, 16, 24, 32].map((size) => `<button type="button" class="btn !py-2 ${state.ui.journalPageSize === size ? 'btn-primary' : ''}" onclick="game.setJournalPageSize(${size})">${size}</button>`).join('')}
                </div>
              </div>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Cuenta', 'Acciones críticas')}
              <div class="grid gap-3">
                ${infoCard('Renombrar', 'Actualiza la identidad visible del personaje sin tocar progreso, equipo ni recursos.', 'surface-subtle')}
                ${infoCard('Eliminar cuenta', 'Borra todo el guardado local y vuelve al flujo inicial de creación de partida.', 'surface-subtle')}
              </div>
              <div class="grid gap-2 mt-4">
                <button type="button" class="btn" onclick="game.requestRenamePlayer()">✏️ Renombrar gladiador</button>
                <button type="button" class="btn btn-danger" onclick="game.requestNewGameReset()">🗑️ Eliminar cuenta</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  return {
    renderExpedicion,
    renderMazmorra,
    renderMercado,
    renderForja,
    renderGremio,
    renderEntrenamiento,
    renderHabilidades,
    renderTrabajo,
    renderMascota,
    renderLogros,
    renderDiario,
    renderConfiguracion,
  };
}
