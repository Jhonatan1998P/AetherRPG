# Reporte de Ejecucion - Plan Refactorizacion Sistema de Items

## Estado general

Implementacion tecnica completada de la arquitectura objetivo del sistema de items (modelo de datos, loot unificado, craft moderno, economia anti-exploit, balance estadistico, migracion de estado, telemetria y UX principal).

Quedan pendientes solo tareas de QA/simulacion prolongada y validacion de tuning final en sesiones de juego extensas.

## Avances por fase

### Fase 1 - Modelo canonico

- `RARITIES` ampliado a 7 niveles con `ascendant`.
- `epic` y `mythic` marcados como `milestone: true`.
- Agregados `dropWeightBySource`, `salvageProfile`, `upgradeCaps`, `valueBase`.
- Definidos `ITEM_ARCHETYPES` por slot/rol.
- Definido `STAT_BUDGETS` por slot + nivel + rareza.
- UI/utilidades actualizadas para nueva rareza (`ascendant`).

### Fase 2 - Loot unificado

- Nuevo pipeline en `items.js`:
  - `rollLoot(context)`
  - `makeItemFromBudget(context)`
  - `applyAffixesWithBudget(item, context)`
- Contexto comun implementado: source, zone, enemy, player level, ascension, loot luck, pity.
- Smart loot con sesgo moderado a slots rezagados.
- Pity por fuente para `epic`/`mythic` (y contador `ascendant`).
- Integrado en combate, expedicion y mercado.

### Fase 3 - Craft moderno

- Economia refactorizada con rutas separadas:
  - `craftItem`
  - `enhanceItem`
  - `reforgeItem`
  - `transcendItem`
- Recetas con preview de coste/outcomes.
- Protecciones anti-frustracion:
  - sin destruccion total
  - downgrade parcial controlado en fallos
- Nuevos materiales soportados: `sigils`, `echoShards`.

### Fase 4 - Economia integral

- Separacion de dimensiones de valor del item:
  - `economyValue`
  - `craftValue`
  - `prestige`
  - `combatScore`/`marketScore`/`buildScore`
- Formula de compra dinamica de mercado.
- Formula de venta con `antiExploitFactor`.
- Salvage por rareza + nivel + afijos + upgrade.
- Impuesto por cadena de refresh de mercado (`refreshChainCount`).

### Fase 5 - Balance matematico

- Scoring separado en `items.js` (`computeItemScores`).
- Soft caps y retornos decrecientes en `stats.js` para:
  - crit
  - dodge
  - block
  - lifesteal
- Curvas de retorno decreciente para attack/defense/speed/maxHp en late game.

### Fase 6 - UX inventario/forja/mercado

- Inventario:
  - delta vs equipado
  - calidad de roll
  - headroom de upgrade
  - estimacion de salvage
  - acciones directas (equip/sell/salvage/reforge/transcend)
- Forja:
  - preview por slot de costes y outcomes
  - panel enhance/reforge/transcend con probabilidad/coste
  - estado pity de forge/market visible
- Mercado:
  - comparador con equipado
  - oportunidades resaltadas

### Fase 7 - Telemetria

- Telemetria agregada al estado:
  - tiempo a primer epic/mythic/ascendant
  - distribucion de rarezas por fuente
  - oro neto por hora
  - materiales netos por hora
  - uso de craft/enhance/reforge/transcend
  - upgrades equipados
- Hitos visuales de primer `epic` y primer `mythic` implementados (journal + toast).

### Migracion y compatibilidad

- `state.version` subido a `5`.
- Migracion legacy implementada en `normalizeState()`:
  - normalizacion de items de inventario/equipo/mercado
  - defaults para nuevos campos (`tier`, `itemLevel`, `powerBudget`, `qualityRoll`, `provenance`, `lockFlags`)
  - inicializacion de `itemPity` y telemetria.

## Estado checklist (resumen)

- Implementacion tecnica core: **completa**.
- Integracion UI principal: **completa**.
- Compilacion/build: **ok** (`npm run build`).
- QA funcional manual exhaustiva (escenarios 1h/4h/8h/20h): **pendiente**.
- Ajuste fino de balance con datos reales: **pendiente**.

## Archivos principales intervenidos

- `aether/src/shared/content/game-data.js`
- `aether/src/core/bootstrap/config.js`
- `aether/src/core/bootstrap/utils.js`
- `aether/src/features/gameplay/domain/items.js`
- `aether/src/features/gameplay/domain/economy.js`
- `aether/src/features/gameplay/domain/activities.js`
- `aether/src/features/gameplay/domain/stats.js`
- `aether/src/features/gameplay/domain/progression.js`
- `aether/src/core/state/defaults.js`
- `aether/src/core/bootstrap/model.js`
- `aether/src/core/bootstrap/systems.js`
- `aether/src/core/actions/system-actions.js`
- `aether/src/core/bootstrap/views-runtime.js`
- `aether/src/core/bootstrap/views-content.js`
- `aether/src/shared/ui/views/main-views.js`
- `aether/src/shared/ui/views/secondary-views.js`
- `aether/styles.css`
