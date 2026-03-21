export function createSecondaryViews(deps) {
  const {
    SLOT_ORDER,
    SLOT_NAMES,
    ZONES,
    JOBS,
    PETS,
    SKILLS,
    ACHIEVEMENTS,
    state,
    getPetData,
    guildTotal,
    achievementProgress,
    fmt,
    htmlStat,
    progressBar,
    icon,
    tooltipAttr,
    replaceEmojiIcons,
    rarityName,
    rarityBadge,
    zoneSelector,
    compareAgainstEquipped,
    itemStatGrid,
    durationChoiceCard,
    previewCraftItem,
    previewEnhanceItem,
    previewReforgeItem,
    previewTranscendItem,
    getPityStatus,
    pager,
    expeditionTimerText,
    jobTimerText,
    pageLead,
    sectionHeader,
    infoCard,
    actionButton,
    actionBar,
    statusChip,
  } = deps;

  function renderExpedicion() {
    const isRunning = Boolean(state.timers.expedition);
    return `
      <div class="space-y-5">
        ${pageLead('expedicion', isRunning
          ? `En curso: <b>${ZONES[state.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${expeditionTimerText()}</span>`
          : 'Sin expedición activa', [
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
            ${sectionHeader('Contexto', 'Elige destino', 'Primero define una zona segura para tu estado actual de recursos.')}
            ${zoneSelector()}

            <div class="mt-5">
              ${sectionHeader('Decisión', 'Elige duración', 'Duraciones cortas para control activo, largas para progreso pasivo.')}
              <div class="grid lg:grid-cols-3 gap-3">
                ${durationChoiceCard(30, 'success', 'Salida corta para mantener flujo y reaccionar rápido.')}
                ${durationChoiceCard(60, '', 'Balance para sesiones mixtas entre combate y gestión.')}
                ${durationChoiceCard(120, 'warning', 'Más retorno si vas a dejar la partida corriendo.')}
              </div>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Soporte', 'Regla rápida')}
              <div class="grid gap-3">
                ${infoCard('Estado actual', isRunning ? 'Ya tienes una expedición activa: espera el temporizador o cambia de foco.' : 'No hay expedición activa: puedes lanzar una ruta ahora.', 'surface-subtle')}
                ${infoCard('Destino', 'Usa zonas cómodas cuando solo quieres materiales estables.', 'surface-subtle')}
                ${infoCard('Después', 'Cuando termine, vuelve a Arena o Inventario para cerrar el ciclo.', 'surface-subtle')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function renderMazmorra() {
    const hasKey = state.player.keys > 0;
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
            ${sectionHeader('Contexto', 'Ruta de incursión', 'La mazmorra tiene un recorrido fijo por intento: entra solo cuando estés listo.')}
            <div class="grid gap-2 text-sm">
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>1. Enemigo base</span>${statusChip('Entrada')}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>2. Enemigo base</span>${statusChip('Presión')}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>3. Enemigo élite</span>${statusChip('Riesgo', 'warning')}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>4. Jefe del piso</span>${statusChip('Pico', 'danger')}</div>
            </div>

            <div class="mt-4 grid sm:grid-cols-3 gap-3">
              ${htmlStat('Llaves', state.player.keys, hasKey ? 'Listo para entrar' : 'Necesitas conseguir llaves')}
              ${htmlStat('Piso récord', state.player.highestDungeonFloor, 'Tu tope actual')}
              ${htmlStat('Estado', hasKey ? 'Disponible' : 'Bloqueado', hasKey ? 'Tienes acceso inmediato' : 'Visita mercado o recompensas')}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Decisión', '¿Entrar ahora?')}
              <div class="grid gap-3">
                ${infoCard('Recompensa', 'Oro, XP, esencia, fragmentos, llaves extra y botín de mayor calidad.', 'reward-card', 'Las mazmorras elevan el techo de recompensa frente al farmeo básico.')}
                ${infoCard('Checklist', 'Entra cuando tengas llaves, pociones y una build ya ordenada.', 'surface-subtle')}
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
                <button type="button" class="btn btn-success" onclick="game.buyResource('potion')" ${tooltipAttr('Compra una poción para curarte más tarde por 120 de oro.')}>🧪 Poción · 120 oro</button>
                <button type="button" class="btn btn-violet" onclick="game.buyResource('key')" ${tooltipAttr('Compra una llave para acceder a mazmorras por 180 de oro.')}>🗝️ Llave · 180 oro</button>
                <button type="button" class="btn btn-primary" onclick="game.buyResource('essence')" ${tooltipAttr('Compra esencia para forja y progresión premium por 140 de oro.')}>✨ Esencia · 140 oro</button>
                <button type="button" class="btn" onclick="game.buyResource('sigil')" ${tooltipAttr('Compra un sigilo para rutas de trascendencia por 260 de oro.')}>🔷 Sigilo · 260 oro</button>
                <button type="button" class="btn" onclick="game.buyResource('food')" ${tooltipAttr('Compra comida para apoyar trabajos y mascotas por 65 de oro.')}>🍖 Comida x2 · 65 oro</button>
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

    const formatCost = (cost = {}) => Object.entries(cost)
      .filter(([, value]) => value > 0)
      .map(([key, value]) => `${fmt(value)} ${key}`)
      .join(' · ');

    const formatOutcomes = (outcomes = []) => outcomes
      .map((entry) => `${Math.round((entry.chance || 0) * 100)}% ${rarityName(entry.rarity)}`)
      .join(' · ');

    return `
      <div class="space-y-5">
        ${pageLead('forja', `Hierro: <b>${fmt(state.player.iron)}</b> · Esencia: <b>${fmt(state.player.essence)}</b> · Sigilos: <b>${fmt(state.player.sigils || 0)}</b>`, [
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
            ${sectionHeader('Contexto', 'Creación por espacio', 'Cada receta muestra coste y outcomes esperados antes de gastar materiales.')}
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
                    <div class="rounded-xl bg-white/[.04] p-2.5" ${tooltipAttr('Coste y tabla de outcomes de la receta básica.')}>Básica: <b>${formatCost(basic.cost)}</b><br><span class="text-slate-300/62">${formatOutcomes(basic.outcomes)}</span></div>
                    <div class="rounded-xl bg-white/[.04] p-2.5" ${tooltipAttr('Coste y tabla de outcomes de la receta avanzada.')}>Avanzada: <b>${formatCost(advanced.cost)}</b><br><span class="text-slate-300/62">${formatOutcomes(advanced.outcomes)}</span></div>
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
              ${sectionHeader('Decisión', 'Mejorar equipado', 'Enhance para subir poder, reforge para redistribuir, transcend para evolucionar rareza.')}
              <div class="space-y-3 mt-4">
                ${['weapon', 'chest', 'ring', 'amulet'].map((slot) => {
                  const item = state.player.equipment[slot];
                  const enhance = item ? previewEnhanceItem(slot) : null;
                  const reforge = item ? previewReforgeItem(item.id) : null;
                  const transcend = item ? previewTranscendItem(item.id) : null;
                  return `
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${SLOT_NAMES[slot]}</div>
                       <div class="font-black break-words ${item ? `rarity-${item.rarity}` : 'text-slate-400/80'}">${item ? item.name : 'Vacío'}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${item ? `Nivel ${item.level} · Mejora +${item.upgrade || 0}` : 'Equipa algo para mejorarlo.'}</div>
                      ${item && enhance ? `<div class="text-xs text-slate-300/62 mt-2">Enhance: ${Math.round(enhance.successChance * 100)}% · coste ${formatCost(enhance.cost)}</div>` : ''}
                      ${item && reforge ? `<div class="text-xs text-slate-300/62 mt-1">Reforge: ${Math.round(reforge.successChance * 100)}% · coste ${formatCost(reforge.cost)}</div>` : ''}
                      ${item && transcend ? `<div class="text-xs text-slate-300/62 mt-1">Transcend: ${Math.round(transcend.successChance * 100)}% · ${transcend.from} → ${transcend.to}</div>` : ''}
                      <div class="grid grid-cols-3 gap-2 mt-3">
                        <button type="button" class="btn btn-gold !py-2" ${item ? `onclick="game.enhanceItem('${slot}')"` : 'disabled'} ${tooltipAttr('Mejora incremental estable de la pieza equipada.')}>Enhance</button>
                        <button type="button" class="btn btn-violet !py-2" ${item ? `onclick="game.reforgeItem('${item.id}')"` : 'disabled'} ${tooltipAttr('Redistribuye stats de forma controlada sin destruir el objeto.')}>Reforge</button>
                        <button type="button" class="btn !py-2" ${item && transcend ? `onclick="game.transcendItem('${item.id}')"` : 'disabled'} ${tooltipAttr('Evoluciona la rareza si cumples requisitos y coste de transcend.')}>Transcend</button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Soporte', 'Pity y regla de gasto')}
              <div class="grid gap-3">
                ${infoCard('Pity forja', `Epic en ${forgePity.epic} intentos sin hito · Mythic en ${forgePity.mythic}.`, 'surface-subtle')}
                ${infoCard('Pity mercado', `Epic en ${marketPity.epic} rotaciones sin hito · Mythic en ${marketPity.mythic}.`, 'surface-subtle')}
                ${infoCard('Estrategia', 'Hierro para volumen, esencia para upgrades, sigilos/echo para evolución tardía.', 'surface-subtle')}
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
    return `
      <div class="space-y-5">
        ${pageLead('entrenamiento', `Puntos de atributo: <b>${state.player.attributePoints}</b> · habilidades: <b>${state.player.skillPoints}</b>`, [
          actionButton('👤 Perfil', '', "game.setView('perfil')"),
          actionButton('⚔️ Arena', 'btn-primary', "game.setView('arena')")
        ].join(''))}

        <div class="grid xl:grid-cols-[.95fr,1.05fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Contexto', 'Atributos base', 'Primero ajusta base estadística; después pule habilidades activas.')}
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

          <aside class="glass rounded-3xl p-5">
            ${sectionHeader('Decisión', 'Habilidades activas')}
            <div class="space-y-3">
              ${Object.values(SKILLS).map((skill) => `
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${skill.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${skill.desc}</div>
                  <div class="text-xs text-slate-300/60 mt-2">Recarga ${skill.cooldown} · Desbloqueo Nv ${skill.unlockLevel}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button type="button" class="btn !py-2" onclick="game.toggleActiveSkill('${skill.id}')">${state.player.activeSkills.includes(skill.id) ? 'Quitar' : 'Equipar'}</button>
                    <button type="button" class="btn btn-violet !py-2" ${state.player.unlockedSkills.includes(skill.id) ? `onclick="game.upgradeSkill('${skill.id}')"` : 'disabled'}>Mejorar</button>
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
    const running = Boolean(state.timers.job);
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
              ${JOBS.map((job) => `
                <div class="glass rounded-2xl p-4">
                  <div class="font-black text-lg">${job.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${job.desc}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Duración <b>${job.duration}s</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${fmt(job.reward.gold)} oro</b></div>
                  </div>
                  <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.startJob('${job.id}')" ${tooltipAttr('Inicia este trabajo y bloquea el temporizador hasta su finalización.')}>Aceptar</button>
                </div>
              `).join('')}
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
    return `
      <div class="space-y-5">
        ${pageLead('mascota', pet ? `Activa: <b>${pet.name}</b>` : 'Aún no tienes mascota', [
          actionButton('👤 Perfil', '', "game.setView('perfil')"),
          actionButton('🥚 Incubar', 'btn-violet', 'game.hatchPet()', 'Consume recursos para obtener una mascota aleatoria.')
        ].join(''))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${sectionHeader('Contexto', 'Mascota activa', 'Gestiona alimentación y progreso solo del compañero que llevas activo.')}
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
                  <button type="button" class="btn btn-success" onclick="game.feedPet()">${icon('box', 'h-4 w-4')}<span>Alimentar</span></button>
                  <button type="button" class="btn btn-danger" onclick="game.releasePet()" ${tooltipAttr('Libera la mascota actual y pierdes sus bonos activos.')}>Liberar</button>
                </div>
              </div>
            ` : `
              <div class="glass rounded-2xl p-5">
                <p class="text-sm text-slate-300/75">Incuba un huevo con 5 fragmentos y 8 de esencia para recibir un compañero aleatorio.</p>
                <button type="button" class="btn btn-violet mt-4" onclick="game.hatchPet()">${icon('spark', 'h-4 w-4')}<span>Incubar huevo</span></button>
              </div>
            `}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${sectionHeader('Soporte', 'Catálogo rápido')}
            <div class="grid gap-3">
              ${PETS.map((entry) => `
                <div class="glass rounded-2xl p-4">
                  <div class="font-bold font-display inline-flex items-center gap-2">${icon(entry.icon || 'paw', 'h-4 w-4')}<span>${entry.name}</span></div>
                  <div class="text-sm text-slate-300/75 mt-1">${entry.desc}</div>
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
              <button type="button" class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${tooltipAttr('Reinicia gran parte de la partida a cambio de progreso meta permanente.')}>🔱 Ascender</button>
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
                  <button type="button" class="btn btn-violet justify-between" onclick="game.spendRelic('${key}')" ${tooltipAttr(`Invierte polvo de reliquia en ${title.toLowerCase()} para obtener bonificaciones permanentes.`)}><span>${title}</span><span>Nv ${state.player.relics[key]}</span></button>
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

  return {
    renderExpedicion,
    renderMazmorra,
    renderMercado,
    renderForja,
    renderGremio,
    renderEntrenamiento,
    renderTrabajo,
    renderMascota,
    renderLogros,
    renderDiario,
  };
}
