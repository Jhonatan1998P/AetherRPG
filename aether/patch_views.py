from pathlib import Path
p = Path('/mnt/data/work2/views-content.js')
text = p.read_text()
anchor = "  function inventoryCards() {\n"
insert = r'''
  function statLabel(key) {
    const labels = {
      attack: 'Ataque',
      defense: 'Defensa',
      speed: 'Velocidad',
      maxHp: 'Vida',
      crit: 'Crítico',
      dodge: 'Esquiva',
      block: 'Bloqueo',
      lifesteal: 'Robo vida',
    };
    return labels[key] || key;
  }

  function formatStatValue(key, value) {
    return key === 'crit' || key === 'dodge' || key === 'block' || key === 'lifesteal' ? pct(value) : fmt(value);
  }

  function compareAgainstEquipped(item) {
    const equipped = state.player.equipment[item.slot];
    if (!equipped) {
      return { label: 'Sin reemplazo directo', tone: 'success', detail: 'No tienes una pieza equipada en este hueco.' };
    }
    const delta = (item.score || 0) - (equipped.score || 0);
    if (delta > 0) return { label: `+${fmt(delta)} score`, tone: 'success', detail: `Mejora sobre ${equipped.name}.` };
    if (delta < 0) return { label: `${fmt(delta)} score`, tone: 'danger', detail: `Peor que ${equipped.name}.` };
    return { label: 'Score similar', tone: '', detail: `Rinde parecido a ${equipped.name}.` };
  }

  function itemStatGrid(item, limit = 4) {
    return Object.entries(scaleItemStats(item)).slice(0, limit).map(([k, v]) =>
      `<div class="rounded-xl bg-white/[.04] p-2.5">${statLabel(k)}: <b>${formatStatValue(k, v)}</b></div>`
    ).join('');
  }

  function inventorySummaryCards(items) {
    const legendary = items.filter(i => i.rarity === 'legendary').length;
    const upgrades = items.filter(i => compareAgainstEquipped(i).tone === 'success').length;
    return `
      <div class="grid sm:grid-cols-3 gap-3 mb-4">
        ${htmlStat('Objetos filtrados', items.length)}
        ${htmlStat('Mejoras posibles', upgrades)}
        ${htmlStat('Legendarios', legendary)}
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

'''
if anchor not in text:
    raise SystemExit('anchor not found')
text = text.replace(anchor, insert + anchor, 1)

start = text.index("  function inventoryCards() {")
end = text.index("\n  function renderResumen() {", start)
text = text[:start] + r'''  function inventoryCards() {
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
            <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro">
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <div class="font-black rarity-${item.rarity} leading-snug">${item.name}</div>
                  <div class="text-xs text-slate-300/60 mt-1">${SLOT_NAMES[item.slot]} · Nivel ${item.level} · +${item.upgrade || 0}</div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]">${fmt(item.score)}</div>
                  <div class="mt-2">${statusChip(compare.label, compare.tone)}</div>
                </div>
              </div>
              <p class="text-xs text-slate-300/62 mt-3">${compare.detail}</p>
              <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                ${itemStatGrid(item, 4)}
              </div>
              <div class="inventory-actions mt-4">
                <button class="btn btn-success !py-2" onclick="game.equipItem('${item.id}')">Equipar</button>
                <button class="btn !py-2" onclick="game.sellItem('${item.id}')">Vender</button>
                <button class="btn !py-2" onclick="game.salvageItem('${item.id}')">Reciclar</button>
                <button class="btn btn-violet !py-2" onclick="game.rerollItem('${item.id}')">Retemplar</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      ${pager(currentPage, totalPages, 'setInventoryPage')}
    `;
  }
'''+ text[end:]

repls = {}
repls['renderArena'] = r'''  function renderArena() {
    const zone = zoneForPlayer();
    const readySkills = state.player.activeSkills.map(id => SKILLS[id]).filter(Boolean);
    const recent = state.combatHistory.slice(0, 5);
    return `
      <div class="space-y-5">
        ${pageLead('arena', `Zona: <b>${zone.name}</b> · Coste <b>${zone.energyCost}⚡ / ${zone.staminaCost}💪</b>`, [
          actionButton('⚔️ Pelea normal', 'btn-primary', "game.fightArena('normal')"),
          actionButton('👑 Desafío élite', 'btn-violet', "game.fightArena('elite')"),
          actionButton('🔥 Racha x3', 'btn-gold', 'game.arenaBlitz(3)'),
          actionButton('🌪️ Racha x5', '', 'game.arenaBlitz(5)')
        ].join(''))}
        ${actionBar([
          actionButton('⚔️ Normal', 'btn-primary !py-3', "game.fightArena('normal')"),
          actionButton('👑 Élite', 'btn-violet !py-3', "game.fightArena('elite')")
        ])}

        <div class="grid xl:grid-cols-[1.1fr,.9fr] gap-5 arena-shell">
          <div class="space-y-5">
            <div class="glass rounded-3xl p-5 arena-hero">
              ${sectionHeader('Preparación', 'Panel táctico', 'Dejamos la decisión principal arriba y el contexto de build, coste y racha al mismo nivel visual.', `<div class="flex flex-wrap gap-2">${statusChip(`Coste ${zone.energyCost}⚡`, 'warning')}${statusChip(`Zona ${zone.theme}`)}${statusChip(`Skills ${readySkills.length}/3`, readySkills.length ? 'success' : 'danger')}</div>`)}
              <div class="grid md:grid-cols-3 gap-3">
                ${infoCard('Combate normal', 'La opción rápida para mantener oro, XP y materiales entrando sin mucha preparación.')} 
                ${infoCard('Combate élite', 'Más exigente, pero con mejor techo de botín y sensación de avance.', 'elite-card')} 
                ${infoCard('Rachas', 'Úsalas cuando tengas recursos estables y quieras acelerar el farmeo.', 'reward-card')} 
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Selección de zona', 'Elige dónde pelear', 'La zona activa comunica coste, tema y desbloqueo con claridad antes del combate.')}
              ${zoneSelector()}
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Build activa', 'Habilidades equipadas', 'Mantenemos el bloque compacto para que el foco siga estando en combatir.')}
              <div class="grid sm:grid-cols-2 gap-3">
                ${readySkills.map(skill => `
                  <div class="surface-strong rounded-2xl p-4">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black">${skill.name}</div>
                        <div class="text-sm text-slate-300/75 mt-1">${skill.desc}</div>
                      </div>
                      ${statusChip(`Nv ${state.player.skillLevels[skill.id] || 1}`, 'success')}
                    </div>
                    <div class="text-xs text-slate-300/55 mt-3">CD ${skill.cooldown} · lista para la arena</div>
                  </div>
                `).join('') || '<div class="empty-state">No hay habilidades activas equipadas.</div>'}
              </div>
            </div>
          </div>

          <div class="space-y-5">
            <div class="glass rounded-3xl p-5 sticky-panel">
              ${sectionHeader('Estado del run', 'Resumen corto')}
              <div class="kpi-rail">
                ${htmlStat('Victorias', state.stats.wins)}
                ${htmlStat('Derrotas', state.stats.losses)}
                ${htmlStat('Kills', state.stats.kills)}
                ${htmlStat('Daño', fmt(state.stats.damageDone))}
              </div>
              <div class="grid gap-3 mt-4">
                ${infoCard('Siguiente acción', 'Empieza con normal si estás volviendo a ritmo; cambia a élite cuando el equipo ya te esté sobrando.', 'surface-muted')}
                ${infoCard('Botín esperado', 'La arena es tu mejor bucle corto para llenar mochila, probar builds y abrir espacio a mejoras.', 'reward-card')}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Seguimiento', 'Historial reciente', 'Revisa resultados sin perder el contexto de la arena.')}
              <div class="space-y-3">
                ${recent.length ? recent.map(entry => `
                  <button class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${entry.id}')">
                    <div class="flex items-center justify-between gap-3">
                      <div>
                        <div class="font-black ${entry.result === 'victory' ? 'text-emerald-300' : 'text-rose-300'}">${entry.title}</div>
                        <div class="text-sm text-slate-300/70 mt-1">${entry.zone}</div>
                      </div>
                      <div class="text-xs text-slate-300/60">${new Date(entry.ts).toLocaleTimeString('es-ES')}</div>
                    </div>
                  </button>
                `).join('') : '<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
'''
repls['renderExpedicion'] = r'''  function renderExpedicion() {
    return `
      <div class="space-y-5">
        ${pageLead('expedicion', state.timers.expedition ? `En curso: <b>${ZONES[state.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${expeditionTimerText()}</span>` : 'Sin expedición activa', [
          actionButton('30s', 'btn-primary', `game.startExpedition(${state.player.zoneId}, 30)`),
          actionButton('60s', 'btn-violet', `game.startExpedition(${state.player.zoneId}, 60)`),
          actionButton('120s', 'btn-gold', `game.startExpedition(${state.player.zoneId}, 120)`)
        ].join(''))}
        ${actionBar([
          actionButton('30s', 'btn-primary !py-3', `game.startExpedition(${state.player.zoneId}, 30)`),
          actionButton('120s', 'btn-gold !py-3', `game.startExpedition(${state.player.zoneId}, 120)`)
        ])}
        <div class="glass rounded-3xl p-5">
          ${sectionHeader('Destino', 'Selecciona la zona de expedición', 'La decisión principal va arriba y el contexto de riesgo/recompensa debajo.')}
          ${zoneSelector()}
        </div>
        <div class="grid lg:grid-cols-3 gap-5">
          ${durationChoiceCard(30, 'success', 'Salida rápida para sostener recursos sin comprometer mucho tiempo.')}
          ${durationChoiceCard(60, '', 'Buen punto medio si quieres progresar mientras sigues jugando otras vistas.')}
          ${durationChoiceCard(120, 'warning', 'Más retorno potencial y más opción de botín al completar la ruta larga.')}
        </div>
        <div class="grid lg:grid-cols-3 gap-5">
          ${infoCard('Riesgo / Recompensa', 'Cuanto más tiempo fuera, mayor paquete de oro, XP y materiales. Las salidas largas tienen más opción de botín.')}
          ${infoCard('Recurso usado', 'Consumes energía y algo de aguante al partir. La regeneración pasiva te deja sostener el ciclo.')}
          ${infoCard('Sincronía', 'Mientras la expedición corre, puedes seguir en el resto del juego y recogerla cuando termine.')}
        </div>
      </div>
    `;
  }
'''
repls['renderMercado'] = r'''  function renderMercado() {
    const affordable = state.market.items.filter(item => (item.price || 0) <= state.player.gold).length;
    const bestVisible = [...state.market.items].sort((a, b) => (b.score || 0) - (a.score || 0))[0];
    return `
      <div class="space-y-5">
        ${pageLead('mercado', `Oro disponible: <b>${fmt(state.player.gold)}</b>`, [
          actionButton('🔄 Refrescar', '', 'game.refreshMarket(true)'),
          actionButton('🎒 Inventario', 'btn-primary', "game.setView('inventario')"),
          actionButton('⚒️ Forja', 'btn-violet', "game.setView('forja')")
        ].join(''))}
        ${actionBar([
          actionButton('🔄 Refrescar', '!py-3', 'game.refreshMarket(true)'),
          actionButton('🎒 Inventario', 'btn-primary !py-3', "game.setView('inventario')")
        ])}
        <div class="grid lg:grid-cols-[1fr,.92fr] gap-5">
          <div class="glass rounded-3xl p-5">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Mercado</div>
                <h3 class="text-2xl font-black">Rotación de equipo y consumibles</h3>
                <p class="text-sm text-slate-300/72 mt-2">Ahora la lectura de compra prioriza qué puedes pagar, qué mejora equipo y qué se resuelve mejor en la forja.</p>
              </div>
              <div class="flex flex-wrap gap-2">
                ${statusChip(`${affordable} compras posibles`, affordable ? 'success' : 'warning')}
                ${bestVisible ? statusChip(`Top score ${fmt(bestVisible.score || 0)}`) : ''}
              </div>
            </div>
            <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
              ${state.market.items.map(item => {
                const compare = compareAgainstEquipped(item);
                const canBuy = (item.price || 0) <= state.player.gold;
                return `
                  <div class="glass rounded-2xl p-4 market-card ${canBuy ? '' : 'opacity-80'}">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black rarity-${item.rarity} leading-snug">${item.name}</div>
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
          </div>

          <div class="space-y-5">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Lectura rápida', 'Decide mejor qué comprar')}
              <div class="grid gap-3 mt-4">
                ${infoCard('Compra de impacto', bestVisible ? `${bestVisible.name} lidera la rotación actual por score bruto.` : 'No hay oferta destacada ahora mismo.', 'reward-card')}
                ${infoCard('Si te falta oro', 'Prioriza consumibles baratos o vuelve a arena antes de forzar una compra media.', 'surface-muted')}
                ${infoCard('Si te falta equipo', 'Si ninguna pieza mejora de verdad, usa la forja para buscar el hueco exacto que te falta.', 'elite-card')}
              </div>
            </div>
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Apoyo', 'Consumibles', 'Compras repetibles y fáciles de leer.')}
              <div class="grid gap-3 mt-4">
                <button class="btn btn-success" onclick="game.buyResource('potion')">🧪 Poción · 120 oro</button>
                <button class="btn btn-violet" onclick="game.buyResource('key')">🗝️ Llave · 180 oro</button>
                <button class="btn btn-primary" onclick="game.buyResource('essence')">✨ Esencia · 140 oro</button>
                <button class="btn" onclick="game.buyResource('food')">🍖 Comida x2 · 65 oro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
'''
repls['renderForja'] = r'''  function renderForja() {
    return `
      <div class="space-y-5">
        ${pageLead('forja', `Hierro: <b>${fmt(state.player.iron)}</b> · Esencia: <b>${fmt(state.player.essence)}</b>`, [
          actionButton('⚒️ Forja normal', 'btn-primary', "game.forgeItem('weapon', 'normal')"),
          actionButton('✨ Premium arma', 'btn-violet', "game.forgeItem('weapon', 'premium')")
        ].join(''))}
        ${actionBar([
          actionButton('⚒️ Normal', 'btn-primary !py-3', "game.forgeItem('weapon', 'normal')"),
          actionButton('✨ Premium', 'btn-violet !py-3', "game.forgeItem('weapon', 'premium')")
        ])}
        <div class="grid xl:grid-cols-[1fr,.95fr] gap-5">
          <div class="glass rounded-3xl p-5">
            ${sectionHeader('Creación', 'Elegir receta por hueco', 'Cada tarjeta prioriza el slot, el tipo de tirada y el coste visible.')}
            <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
              ${SLOT_ORDER.map(slot => `
                <div class="glass rounded-2xl p-4 forge-recipe-card">
                  <div class="flex items-start justify-between gap-3">
                    <div>
                      <div class="font-bold">${SLOT_NAMES[slot]}</div>
                      <div class="text-sm text-slate-300/70 mt-1">Genera una pieza aleatoria del hueco.</div>
                    </div>
                    ${statusChip(slot === 'weapon' ? 'Prioridad' : 'Slot')}
                  </div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Normal <b>hierro</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Premium <b>esencia</b></div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button class="btn btn-primary !py-2" onclick="game.forgeItem('${slot}', 'normal')">Forjar</button>
                    <button class="btn btn-violet !py-2" onclick="game.forgeItem('${slot}', 'premium')">Premium</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="space-y-5">
            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Lectura rápida', 'Antes de gastar recursos')}
              <div class="grid gap-3 mt-4">
                ${infoCard('Craft normal', 'Úsalo para llenar huecos vacíos, reciclar mala suerte y seguir moviendo el inventario.', 'surface-muted')}
                ${infoCard('Craft premium', 'Guárdalo para slots críticos o cuando ya tengas una base sólida y quieras buscar picos más altos.', 'reward-card')}
                ${infoCard('Mejoras', 'Sube piezas ya buenas; no gastes upgrade en equipo que todavía vas a reemplazar en breve.', 'elite-card')}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${sectionHeader('Progreso', 'Mejorar equipo equipado', 'Separado del craft para que la vista sea más entendible en móvil.')}
              <div class="space-y-3 mt-4">
                ${SLOT_ORDER.map(slot => {
                  const item = state.player.equipment[slot];
                  return `
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${SLOT_NAMES[slot]}</div>
                          <div class="font-black ${item ? `rarity-${item.rarity}` : 'text-slate-400/80'}">${item ? item.name : 'Vacío'}</div>
                          <div class="text-sm text-slate-300/70 mt-1">${item ? `Nivel ${item.level} · Mejora +${item.upgrade || 0}` : 'Equipa algo para mejorarlo.'}</div>
                        </div>
                        <div class="flex flex-col items-start sm:items-end gap-2">
                          ${item ? statusChip(`Score ${fmt(item.score || 0)}`, 'success') : statusChip('Sin pieza', 'danger')}
                          <button class="btn btn-gold" ${item ? `onclick="game.upgradeEquipped('${slot}')"` : 'disabled'}>⚒️ Mejorar</button>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
'''
for name, repl in repls.items():
    import re
    pattern = re.compile(rf"  function {name}\(\) \{{.*?\n  \}}\n", re.S)
    if not pattern.search(text):
      raise SystemExit(f'{name} not found')
    text = pattern.sub(repl + "\n", text, count=1)

p.write_text(text)
