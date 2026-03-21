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
                    <button class="btn btn-gold mt-3 w-full" onclick="game.buyMarketItem('${item.id}')" ${canBuy ? '' : 'disabled'}>Comprar</button>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
          <aside class="stack-compact">
            <details class="glass rounded-3xl p-5" open>
              <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">Decisión</div>
                <div class="mt-1 font-display font-extrabold text-lg leading-tight">Qué mirar antes de comprar</div>
              </summary>
              <div class="grid gap-3 mt-4">
                ${infoCard('Oferta destacada', bestVisible ? `${bestVisible.name} lidera la rotación actual.` : 'No hay oferta destacada ahora mismo.', 'reward-card', 'El mercado castiga mucho más las rarezas altas: verás menos piezas legendarias y míticas.')}
                ${infoCard('No fuerces compra', 'Si nada mejora de verdad, ahorra oro o ve a Forja.', 'surface-subtle')}
              </div>
            </details>
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
              ${SLOT_ORDER.map((slot) => `
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
                ${['weapon', 'chest', 'ring', 'amulet'].map((slot) => {
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
              ${Object.values(SKILLS).map((skill) => `
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
              ${JOBS.map((job) => `
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
              ${PETS.map((p) => `
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
