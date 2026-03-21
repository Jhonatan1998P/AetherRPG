# Plan Maestro de Refactorizacion del Sistema de Items

## Objetivo

Disenar e implementar una refactorizacion exhaustiva, precisa y moderna del sistema de items para cubrir:

- obtencion
- elaboracion (craft)
- mejora (upgrade)
- venta/compra
- rareza
- nivel
- atributos/estadisticas
- valor
- categoria y tipos

El objetivo final es un sistema balanceado, profundo y rejugable que sostenga muchas horas de progresion con picos de dopamina controlados, sin caer en RNG injusto ni en economia rota.

## Diagnostico del Estado Actual

- Hay una base solida en `items.js`, `economy.js`, `systems.js`, `stats.js` y `game-data.js`.
- La progresion de items es en gran parte lineal: rareza -> stats -> valor.
- Las reglas de drop estan dispersas por actividad (combate, expedicion, mercado, forja).
- El valor economico, el poder de combate y el prestigio estan mezclados.
- Falta una capa de hitos explicitos de obtencion para crear momentos memorables.

## Vision de Arquitectura Objetivo

Crear un pipeline unico de items con control centralizado de balance:

- `ItemPipeline`: generacion, escalado, identidad, valor, economia y trazabilidad.
- Separar el item en 4 dimensiones:
  - `power`: fuerza real en combate.
  - `economyValue`: valor para compra/venta.
  - `craftValue`: valor de reciclaje/materiales.
  - `prestige`: rareza y peso de coleccion.
- Unificar todas las fuentes de obtencion en tablas de loot declarativas.
- Instrumentar telemetria para ajustar balance con datos reales.

## Escalera de Rarezas (minimo 6, propuesta 7)

Se proponen 7 rarezas para mejorar la progresion y el espacio de tuning:

1. `common`
2. `uncommon`
3. `rare`
4. `epic`  <- Hito de progreso I
5. `legendary`
6. `mythic` <- Hito de progreso II
7. `ascendant` (chase ultra tardio)

### Hitos obligatorios

- Hito I (`epic`): primer salto fuerte de satisfaccion, desbloquea rutas de forja avanzada.
- Hito II (`mythic`): cambia la meta, habilita rutas aspiracionales y sistemas premium de mejora.

## Fases de Refactorizacion

## Fase 1 - Contratos de Datos y Modelo Canonico

### Objetivo

Normalizar el schema de item y mover reglas duras a datos declarativos.

### Cambios

- Expandir `RARITIES` en `aether/src/shared/content/game-data.js` con:
  - `key`, `name`, `order`
  - `mult`, `affixes`, `valueBase`
  - `dropWeightBySource`
  - `salvageProfile`
  - `upgradeCaps`
  - `milestone` (bool)
- Definir `ITEM_ARCHETYPES` por slot y rol (ofensivo/defensivo/hibrido).
- Definir `STAT_BUDGETS` por `itemLevel`, slot y rareza.
- Ampliar schema del item:
  - `tier`, `itemLevel`, `powerBudget`, `qualityRoll`, `provenance`, `lockFlags`

### Resultado esperado

Sistema de datos extensible y facil de tunear sin editar logica en multiples sitios.

## Fase 2 - Motor Unificado de Obtencion (Loot)

### Objetivo

Consolidar toda la generacion de items bajo una sola API.

### Cambios

- Refactorizar `aether/src/features/gameplay/domain/items.js` para exponer:
  - `rollLoot(context)`
  - `makeItemFromBudget(context)`
  - `applyAffixesWithBudget(item, context)`
- Introducir `context` comun:
  - `source` (arena, dungeon, expedition, market, forge)
  - `zoneId`, `enemyKind`, `playerLevel`, `ascension`, `lootLuck`
  - `streakData` (pity)
- Implementar `smart loot` ligero:
  - sesgo moderado a slots rezagados
  - sin eliminar variedad ni sorpresa
- Implementar pity por hitos:
  - pity `epic`
  - pity `mythic`

### Resultado esperado

Obtencion coherente, menos frustracion, mayor control de progresion.

## Fase 3 - Forja y Mejora Moderna (Craft Layer)

### Objetivo

Transformar la forja en sistema de decisiones, no solo RNG.

### Cambios

- Reorganizar `aether/src/features/gameplay/domain/economy.js` en rutas claras:
  - `craftItem`
  - `enhanceItem`
  - `reforgeItem`
  - `transcendItem`
- Definir materiales por etapa:
  - base: `iron`, `wood`
  - avanzada: `essence`
  - endgame: `sigils`, `echoShards`
- Protecciones anti-frustracion:
  - sin destruccion total por fallo
  - perdida parcial controlada
  - preview de coste y resultado probable

### Resultado esperado

Sistema profundo, legible y con progresion de largo plazo.

## Fase 4 - Economia Integral (Compra/Venta/Reciclaje)

### Objetivo

Evitar inflacion, exploits y loops de dinero infinito.

### Cambios

- Redefinir formula de compra:
  - `buyPrice = economyValue * scarcity * rotationBias * levelMod`
- Redefinir formula de venta:
  - `sellPrice = economyValue * condition * antiExploitFactor`
- Rehacer reciclaje (`salvage`) basado en:
  - rareza
  - nivel del item
  - cantidad/calidad de afijos
  - estado de upgrade
- Blindar arbitraje mercado <-> forja:
  - controlar margen medio de recompra
  - impuestos suaves por reroll en cadena

### Resultado esperado

Economia sana y sostenible a mediano/largo plazo.

## Fase 5 - Balance de Atributos y Curvas

### Objetivo

Controlar power creep y mantener builds viables.

### Cambios

- Actualizar `computeItemScore` para separar:
  - `combatScore`
  - `marketScore`
  - `buildScore`
- Introducir caps suaves en `aether/src/features/gameplay/domain/stats.js` para:
  - `crit`, `dodge`, `block`, `lifesteal`
- Aplicar curvas de retornos decrecientes en stats sensibles.
- Garantizar presupuesto de poder por item segun `slot + tier + itemLevel`.

### Resultado esperado

Mas diversidad de builds y menos estrategias dominantes.

## Fase 6 - UX de Inventario, Forja y Mercado

### Objetivo

Aumentar claridad, decision y sensacion de progreso.

### Cambios

- Inventario:
  - mostrar delta contra equipado
  - mostrar potencial de mejora
  - mostrar rol del item
- Forja:
  - preview detallado de coste
  - probabilidad de outcomes
  - indicador de progreso de hito
- Mercado:
  - etiquetar ofertas por oportunidad real
  - comparador rapido con set actual
- Hitos:
  - celebracion visual al obtener primer `epic`
  - celebracion visual al obtener primer `mythic`

### Resultado esperado

Mayor comprension del sistema y mejor satisfaccion por sesion.

## Fase 7 - Telemetria y Ajuste Continuo

### Objetivo

Balance basado en datos y no en intuicion.

### Cambios

- Registrar metricas clave:
  - tiempo a primer `epic`
  - tiempo a primer `mythic`
  - oro neto por hora
  - materiales netos por hora
  - ratio craft/upgrade/reforge
  - distribucion de rarezas por fuente
- Definir umbrales objetivo:
  - primer `epic`: 25 a 45 minutos
  - primer `mythic`: 4 a 8 horas
- Iterar tuning cada ciclo de pruebas.

### Resultado esperado

Sistema estable, entretenido y ajustable en el tiempo.

## Mapa de Archivos a Intervenir

- `aether/src/shared/content/game-data.js`
- `aether/src/features/gameplay/domain/items.js`
- `aether/src/features/gameplay/domain/economy.js`
- `aether/src/core/bootstrap/systems.js`
- `aether/src/features/gameplay/domain/activities.js`
- `aether/src/features/gameplay/domain/stats.js`
- `aether/src/shared/ui/views/main-views.js`
- `aether/src/shared/ui/views/secondary-views.js`

## Riesgos y Mitigaciones

- Riesgo: romper compatibilidad de saves.
  - Mitigacion: versionado de estado y migraciones por `state.version`.
- Riesgo: inflacion de recursos.
  - Mitigacion: monitoreo de fuentes/sumideros y caps de ganancia.
- Riesgo: frustracion por RNG.
  - Mitigacion: pity por hitos y smart loot moderado.
- Riesgo: sobrecomplejidad UX.
  - Mitigacion: capas progresivas de informacion (basico -> avanzado).

## Definicion de Exito

- Progresion percibida cada 5-12 minutos de juego activo.
- Economia sin exploits evidentes de arbitraje.
- Al menos 3 rutas de build viables en etapa media.
- Hitos (`epic` y `mythic`) alcanzables y memorables.
- Sistema de tuning estable con datos reales.

---

# Checklist de Implementacion Exhaustivo

Usa esta checklist como guia de ejecucion. No avanzar a la siguiente fase sin cerrar la validacion minima de la fase actual.

## 0) Preparacion

- [ ] Crear rama de trabajo para el refactor de items.
- [ ] Congelar baseline de balance actual (export de parametros y curvas).
- [ ] Documentar metricas actuales de drop, economia y progreso.
- [ ] Crear plan de migracion de save (`state.version` + migrador).
- [ ] Definir criterios de rollback por fase.

## 1) Modelo de datos y rarezas

- [ ] Ampliar `RARITIES` a 7 niveles (`ascendant` incluido).
- [ ] Marcar `epic` y `mythic` como hitos (`milestone: true`).
- [ ] Definir pesos base por fuente (`dropWeightBySource`).
- [ ] Definir `salvageProfile` por rareza.
- [ ] Definir `upgradeCaps` por rareza.
- [ ] Definir `ITEM_ARCHETYPES` por slot.
- [ ] Definir `STAT_BUDGETS` por slot + nivel + rareza.
- [ ] Actualizar etiquetas de rareza en utilidades/UI (`rarityName`, `rarityBadge`).
- [ ] Extender sanitizacion para nuevas clases de rareza.

## 2) Schema de item y compatibilidad

- [ ] Extender item con `tier`, `itemLevel`, `powerBudget`, `qualityRoll`, `provenance`.
- [ ] Garantizar defaults para items antiguos.
- [ ] Agregar migrador de items legacy en carga de estado.
- [ ] Verificar que inventario/equipo legacy no se rompa.
- [ ] Mantener `id`, `slot`, `name`, `rarity`, `stats`, `upgrade` compatibles.

## 3) Motor de loot unificado

- [ ] Implementar `rollLoot(context)` en dominio de items.
- [ ] Migrar drops de combate a `rollLoot`.
- [ ] Migrar drops de expedicion a `rollLoot`.
- [ ] Migrar generacion de mercado a `rollLoot` con perfil de mercado.
- [ ] Integrar luck (`getLootLuck`) de forma consistente.
- [ ] Implementar smart loot con sesgo configurable.
- [ ] Implementar pity para `epic`.
- [ ] Implementar pity para `mythic`.
- [ ] Persistir estado de pity por fuente o global (segun decision de diseño).

## 4) Craft / Enhance / Reforge / Transcend

- [ ] Separar funciones en `economy.js` por responsabilidad.
- [ ] Definir costes base y escalado por `itemLevel` y rareza.
- [ ] Implementar `craftItem` (determinista + roll de calidad).
- [ ] Implementar `enhanceItem` (mejora incremental estable).
- [ ] Implementar `reforgeItem` (redistribucion controlada de stats).
- [ ] Implementar `transcendItem` (evolucion de rareza con requisitos).
- [ ] Agregar protecciones anti-frustracion (sin destruccion total).
- [ ] Agregar preview de coste y resultado esperado.

## 5) Economia y anti-exploit

- [ ] Recalcular `economyValue` separado de `combatScore`.
- [ ] Actualizar compra de mercado con formula dinamica.
- [ ] Actualizar venta con factor anti-exploit.
- [ ] Rehacer `salvage` segun rareza + afijos + upgrade.
- [ ] Evitar loops rentables de craft->sell masivos.
- [ ] Evitar loops rentables de buy->salvage sin riesgo.
- [ ] Ajustar `refreshMarket` para evitar abuso de reroll barato.

## 6) Stats y balance matematico

- [ ] Separar `combatScore`, `marketScore`, `buildScore`.
- [ ] Revisar pesos por slot en scoring.
- [ ] Implementar soft caps para `crit`, `dodge`, `block`, `lifesteal`.
- [ ] Implementar retornos decrecientes en stats sensibles.
- [ ] Verificar que DPS y TTK no se disparen en late game.
- [ ] Verificar que builds defensivas y ofensivas sigan siendo viables.

## 7) UI/UX del sistema de items

- [ ] Mostrar comparacion clara contra item equipado.
- [ ] Mostrar potencial de mejora (`upgrade headroom`).
- [ ] Mostrar valor de reciclaje estimado.
- [ ] Mostrar calidad del roll del item.
- [ ] Mostrar estado de pity para hitos (si aplica a UX).
- [ ] Mostrar celebracion de primer `epic`.
- [ ] Mostrar celebracion de primer `mythic`.
- [ ] Verificar responsive en mobile/desktop.

## 8) Logs, telemetria y observabilidad

- [ ] Registrar origen del item (`provenance.source`).
- [ ] Registrar tiempo a hitos (`epic` y `mythic`).
- [ ] Registrar oro/materiales netos por hora.
- [ ] Registrar tasa de uso de craft/enhance/reforge/transcend.
- [ ] Registrar distribucion de rarezas por actividad.
- [ ] Registrar ratio de satisfaccion indirecta (frecuencia de upgrades equipados).

## 9) QA funcional

- [ ] Test de obtencion en arena normal, elite y boss.
- [ ] Test de obtencion en expediciones por todas las zonas.
- [ ] Test de mercado: compra, refresco, rotacion, agotado.
- [ ] Test de forja: craft/enhance/reforge/transcend.
- [ ] Test de inventario lleno (fallback correcto).
- [ ] Test de venta y reciclaje con todas las rarezas.
- [ ] Test de re-roll de item equipado e inventario.
- [ ] Test de achievements dependientes de rareza.
- [ ] Test de misiones relacionadas con craft/salvage/gold.

## 10) QA de balance

- [ ] Simular 1h, 4h, 8h y 20h de progreso.
- [ ] Confirmar ventana de primer `epic` (25-45 min objetivo).
- [ ] Confirmar ventana de primer `mythic` (4-8 h objetivo).
- [ ] Confirmar que `ascendant` no aparece demasiado pronto.
- [ ] Confirmar ausencia de inflacion severa de oro.
- [ ] Confirmar que upgrades no anulan valor de drops nuevos.
- [ ] Confirmar que el mercado sigue siendo relevante en todo el ciclo.

## 11) Migracion y despliegue

- [ ] Incrementar `state.version`.
- [ ] Implementar migraciones idempotentes.
- [ ] Validar carga de saves antiguos en local.
- [ ] Preparar notas de cambio para jugadores.
- [ ] Activar feature flags para rollout gradual (si aplica).
- [ ] Monitorear metricas post-despliegue y ajustar rapidamente.

## 12) Cierre de fase y aceptacion

- [ ] Revisar que no haya regressions criticas.
- [ ] Confirmar targets de progresion y economia.
- [ ] Confirmar estabilidad de performance (sin lag en inventario/market).
- [ ] Confirmar consistencia visual y textual de nuevas rarezas.
- [ ] Congelar parametros finales y documentar rationale de balance.
- [ ] Marcar version del sistema de items como estable.

## Checklist de calidad final (Go/No-Go)

- [ ] No hay exploits de oro/materiales reproducibles.
- [ ] Los 2 hitos (`epic`, `mythic`) son visibles y memorables.
- [ ] La dificultad y recompensas escalan de forma consistente.
- [ ] El jugador siempre tiene al menos una decision significativa por sesion.
- [ ] El sistema mantiene diversion en corto, medio y largo plazo.
