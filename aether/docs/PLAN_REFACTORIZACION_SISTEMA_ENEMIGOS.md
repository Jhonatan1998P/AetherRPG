# Plan Maestro de Refactorizacion del Sistema de Enemigos

## Objetivo

Disenar e implementar un sistema de enemigos exhaustivo, preciso y escalable que:

- se acople de forma nativa al sistema de items actual (`ItemPipeline V2`)
- mantenga desafio constante segun nivel, zona, tipo de encuentro y dificultad
- permita progresion sostenida sin picos injustos ni estancamiento
- recompense el riesgo real con loot y economia coherentes

El objetivo final es que cada sesion entregue decisiones tacticas significativas, progreso visible y balance estable en corto, medio y largo plazo.

## Diagnostico del Estado Actual

- Existe una base solida en `combat.js` con arquetipos, multiplicadores de dificultad y loop tactico.
- La dificultad escala por `playerLevel`, `zone`, `ascension` y `wins`, pero no usa un presupuesto canonico de amenaza.
- `makeEnemy` genera enemigos funcionales, pero falta una capa declarativa equivalente a `STAT_BUDGETS` de items.
- Recompensas y drops no siempre estan ligados al riesgo real del combate (`threatScore`).
- Ya hay telemetria de items/economia, pero falta telemetria profunda y accionable de combate.

## Vision de Arquitectura Objetivo

Crear un `EnemyPipeline` centralizado, simetrico al `ItemPipeline`, con control de balance por datos declarativos.

- API objetivo:
  - `rollEncounter(context)`
  - `makeEnemyFromBudget(context)`
  - `applyEnemyAffixesWithBudget(enemy, context)`
  - `computeThreatScore(enemy, playerSnapshot)`
  - `computeEnemyRewardProfile(context, outcome)`
- Separar el enemigo en 4 dimensiones:
  - `threatPower`: peligro real en combate.
  - `rewardValue`: valor esperado en oro/xp/materiales.
  - `mechanicComplexity`: carga tactica (skills, control, DOT, buffs).
  - `prestige`: peso de hito/narrativa (elite, boss, variantes unicas).
- Integrar con el contexto unificado de loot:
  - `source`, `zoneId`, `enemyKind`, `enemyArchetype`, `enemyFamily`, `playerLevel`, `ascension`, `lootLuck`, `streakData`.

## Principios de Balance

- Desafio justo: evitar picos bruscos de dificultad.
- Progresion perceptible: mejoras visibles cada ventana de juego.
- Riesgo vs recompensa: mas riesgo => mayor valor esperado.
- Anti-frustracion: no crear combinaciones toxicas de mecanicas.
- Tuning declarativo: ajuste rapido por datos, no por hardcode disperso.

## Modelo Canonico de Datos (Fase 1)

Extender `aether/src/shared/content/game-data.js` con:

- `ENEMY_ARCHETYPES`
  - pesos de stats (`attack`, `defense`, `speed`, `hp`, `crit`, `dodge`, `block`, `lifesteal`)
  - estilo IA (`aggressive`, `control`, `burst`, `sustain`)
  - sesgo de loot por slot/rol
- `ENEMY_FAMILIES_BY_ZONE`
  - familias por zona con identidad mecanica y narrativa
- `ENEMY_AFFIXES`
  - modificadores para elite/boss con costo de presupuesto
  - reglas de incompatibilidad (anti-combo injusto)
- `ENCOUNTER_TEMPLATES`
  - perfiles por modo (`arena`, `dungeon`, `event`)
- `ENEMY_BUDGETS`
  - presupuesto base por `zona + banda de nivel + tipo`
- `REWARD_CURVES`
  - curvas de oro/xp/materiales por `threatScore` y modo

Schema runtime de enemigo:

- `tier`, `enemyLevel`, `threatBudget`, `threatScore`, `affixes`, `provenance`, `aiProfile`

Resultado esperado:

- Enemigos tuneables por datos declarativos y compatibilidad directa con pipeline de items.

## Motor Unificado de Enemigos (Fase 2)

Objetivo:

- Reemplazar escalado ad-hoc por generacion por presupuesto y contexto.

Cambios:

- Refactor en `aether/src/features/gameplay/domain/combat.js`:
  - `makeEnemyFromBudget(context)`
  - `applyEnemyAffixesWithBudget(enemy, context)`
  - `computeThreatScore(enemy, playerSnapshot)`
- Mantener `makeEnemy(...)` como wrapper para compatibilidad temporal.
- Introducir `rollEncounter(context)` para estandarizar creacion por modo y tipo.

Resultado esperado:

- Dificultad mas estable, variacion controlada y menor dependencia de multiplicadores globales.

## Formula de Dificultad y Escalado (Fase 3)

Objetivo:

- Escalar enemigo con precision matematica y limites seguros.

Formula base recomendada:

- `expectedPlayerPower = f(level, ascension, derivedStats, expectedGearQualityByStage)`
- `enemyBudget = expectedPlayerPower * modeFactor * kindFactor * zoneFactor * variance`

Factores iniciales de tuning:

- `modeFactor`: arena `1.00`, dungeon `1.08`, event `1.12`
- `kindFactor`: normal `0.94`, elite `1.12`, boss `1.28`
- `zoneFactor`: `1 + zoneId * 0.08`
- `variance`: `0.94` a `1.08`

Bandas objetivo por tipo de encuentro:

- normal: winrate `60%` a `72%`, `5-8` turnos
- elite: winrate `45%` a `60%`, `7-11` turnos
- boss: winrate `35%` a `52%`, `10-16` turnos

Resultado esperado:

- Reto constante sin serrucho de dificultad ni sensacion de injusticia.

## Dificultad Adaptativa Controlada (Fase 4)

Objetivo:

- Ajustar fino la dificultad segun rendimiento real, sin castigar progreso.

Cambios:

- Agregar estado en `aether/src/core/state/defaults.js`:
  - `combatDifficulty: { adaptiveOffset, recentResults, failStreak, successStreak }`
- Ajuste por ventana movil de 8-12 combates:
  - si winrate > `78%` y HP final medio > `62%`: `+2%` a `+6%` presupuesto
  - si winrate < `42%` o derrotas seguidas >= `2`: `-3%` a `-8%` presupuesto
- Limite duro global de adaptacion: `-10%` a `+10%`
- Historesis: no recalcular agresivo cada combate para evitar oscilacion.

Resultado esperado:

- El juego permanece desafiante, pero no bloquea la progresion.

## Integracion con Sistema de Items (Fase 5)

Objetivo:

- Vincular riesgo real del combate con calidad y valor del loot.

Cambios:

- `threatScore` modula:
  - `itemLevel` final del drop
  - sesgo de rareza efectiva en `rollLoot(context)`
  - materiales especiales (`sigils`, `echoShards`) por umbral de amenaza
- Extender `provenance` del item con:
  - `enemyArchetype`, `enemyFamily`, `threatScoreAtDrop`
- Sesgos suaves por arquetipo enemigo (sin determinismo):
  - `berserker` -> ofensivo (`weapon`, `gloves`, `ring`)
  - `guardian` -> defensivo (`chest`, `offhand`, `helm`)
  - `assassin` -> movilidad/critico (`boots`, `ring`, `weapon`)
- Pity por fuente mantiene compatibilidad, pero puede ponderar por unidades de amenaza.

Resultado esperado:

- Recompensas mas coherentes con dificultad real y mejor sensacion de justicia.

## Recompensas y Economia de Combate (Fase 6)

Objetivo:

- Evitar inflacion y farming de bajo riesgo.

Cambios:

- Reemplazar recompensa fija por perfil dinamico:
  - `gold = baseGold * riskFactor * economyGuard`
  - `xp = baseXp * challengeFactor`
  - `materials` por tabla de umbrales de `threatScore`
- `riskFactor` depende de:
  - tipo (`normal/elite/boss`)
  - delta entre `enemyThreat` y `playerPower`
  - modo (`arena/dungeon/event`)
- `economyGuard` limita ganancias por hora anomala para prevenir exploits.

Resultado esperado:

- Economia saludable y recompensa alineada con riesgo.

## IA, Mecanicas y Variedad (Fase 7)

Objetivo:

- Aumentar profundidad tactica sin complejidad injusta.

Cambios:

- Definir perfiles IA:
  - `aggressive`: prioriza burst y presion
  - `control`: prioriza debuffs/armorBreak/dot
  - `sustain`: prioriza defensa, bloqueo y lifesteal
  - `execution`: prioriza remate por umbral de vida
- Limitar combinaciones peligrosas de affixes:
  - blacklist de combos excesivos (ej. alto dodge + alto block + sustain extremo)
- Presupuesto mecanico por tipo:
  - normal: 0-1 mecanica extra
  - elite: 1-2 mecanicas extra
  - boss: 2-3 mecanicas extra con telegraph claro

Resultado esperado:

- Encuentros variados y memorables sin romper legibilidad.

## UX de Dificultad y Claridad (Fase 8)

Objetivo:

- Mostrar dificultad y riesgo de forma clara para apoyar decisiones.

Cambios:

- En arena/mazmorra mostrar:
  - etiqueta de amenaza (`Baja`, `Media`, `Alta`, `Extrema`)
  - modificadores activos relevantes del enemigo
  - expectativa de recompensa aproximada
- En modal de combate, agregar:
  - `threatScore`
  - comparativa `playerPower vs enemyThreat`
  - resumen de causa de derrota (si aplica)

Resultado esperado:

- Mejor lectura de riesgo y menor frustracion post-derrota.

## Telemetria y Tuning Continuo (Fase 9)

Objetivo:

- Balance basado en datos reales de combate.

Registrar metricas:

- winrate por `zone/kind/archetype/family`
- turnos medios por tipo de encuentro
- HP final medio del jugador y consumo de pociones
- derrotas consecutivas por zona
- `threatScore` vs recompensa entregada
- correlacion de riesgo con rareza y valor de drop

Umbrales de control:

- desviacion de winrate por banda > `8%` dispara retuning
- oro neto/hora fuera de rango objetivo dispara ajuste economico
- bosses con derrota > `70%` sostenida se consideran overtuned

Resultado esperado:

- Ajustes rapidos, medibles y estables ciclo a ciclo.

## Mapa de Archivos a Intervenir

- `aether/src/shared/content/game-data.js`
- `aether/src/features/gameplay/domain/combat.js`
- `aether/src/core/bootstrap/systems.js`
- `aether/src/core/state/defaults.js`
- `aether/src/features/gameplay/domain/items.js` (integracion de contexto/provenance)
- `aether/src/features/gameplay/domain/activities.js` (si se reutiliza simulacion de amenaza)
- `aether/src/shared/ui/views/main-views.js`
- `aether/src/shared/ui/views/secondary-views.js`

## Riesgos y Mitigaciones

- Riesgo: oscilacion de dificultad por adaptativo agresivo.
  - Mitigacion: caps `+-10%`, ventana movil, historesis.
- Riesgo: inflacion por sobrepago de combates dificiles.
  - Mitigacion: `economyGuard`, monitoreo neto por hora y ajustes por fuente.
- Riesgo: combinaciones de affix injustas.
  - Mitigacion: presupuesto mecanico y blacklist de sinergias toxicas.
- Riesgo: estancamiento en midgame.
  - Mitigacion: rebaja temporal de offset tras fail streak y tuning por banda de nivel.
- Riesgo: regresiones de compatibilidad.
  - Mitigacion: wrappers compatibles (`makeEnemy`) y migracion de estado versionada.

## Definicion de Exito

- Desafio percibido constante sin picos injustos.
- Progresion visible cada `8-15` minutos de juego activo.
- Winrate y turnos dentro de bandas objetivo por tipo de encuentro.
- Recompensa correlacionada con riesgo real (`threatScore`).
- Sin exploits consistentes de bajo riesgo/alta recompensa.

---

# Checklist de Implementacion Exhaustivo

No avanzar de fase sin cerrar validacion minima de la fase actual.

Estado actualizado al 2026-03-21:

- Implementacion de fases 1-8 completada a nivel de codigo.
- QA de balance iterativo ejecutado en `aether/docs/REPORTE_BALANCE_COMBATE_SIMULADO.md`.
- Resultado actual post-retuning (simulacion on-level):
  - normal: winrate medio ~69.0% (en banda), turnos ~8.14 (muy cerca del objetivo 5-8)
  - elite: winrate medio ~54.2% (en banda), turnos ~9.99 (en banda)
  - boss: winrate medio ~43.5% (en banda), turnos ~13.07 (en banda)
- Pendiente: reducir dispersion por zona en normal/elite para cerrar Go/No-Go con mayor estabilidad inter-zona.

## 0) Preparacion

- [ ] Crear rama de trabajo para refactor de enemigos.
- [ ] Congelar baseline de combate actual (winrate, turnos, HP final, consumo pociones).
- [ ] Definir rango objetivo de dificultad por modo/tipo.
- [ ] Definir criterios de rollback por fase.

## 1) Datos y contratos canonicos

- [x] Definir `ENEMY_ARCHETYPES`.
- [x] Definir `ENEMY_FAMILIES_BY_ZONE`.
- [x] Definir `ENEMY_AFFIXES` con costos e incompatibilidades.
- [x] Definir `ENCOUNTER_TEMPLATES` por modo.
- [x] Definir `ENEMY_BUDGETS` por zona + banda + tipo.
- [x] Definir `REWARD_CURVES` por `threatScore`.

## 2) EnemyPipeline

- [x] Implementar `rollEncounter(context)`.
- [x] Implementar `makeEnemyFromBudget(context)`.
- [x] Implementar `applyEnemyAffixesWithBudget(enemy, context)`.
- [x] Implementar `computeThreatScore(enemy, playerSnapshot)`.
- [x] Mantener wrapper compatible para `makeEnemy`.

## 3) Escalado y dificultad adaptativa

- [x] Implementar `expectedPlayerPower`.
- [x] Implementar `enemyBudget` por factores (`mode`, `kind`, `zone`, `variance`).
- [x] Agregar estado `combatDifficulty` a defaults.
- [x] Aplicar adaptativo por ventana movil con caps.
- [ ] Validar ausencia de oscilacion fuerte en 50+ combates.

## 4) Integracion con items y loot

- [x] Inyectar `enemyArchetype`, `enemyFamily`, `threatScore` en contexto de `rollLoot`.
- [x] Ajustar `itemLevel` por riesgo real.
- [x] Aplicar sesgo de drop por arquetipo (suave).
- [x] Mantener pity compatible y ponderado por amenaza (si aplica).
- [x] Extender `provenance` de item con metadata de enemigo.

## 5) Recompensas y economia

- [x] Implementar `computeEnemyRewardProfile`.
- [x] Sustituir formulas fijas de combate por curvas por amenaza.
- [x] Ajustar materiales especiales por umbral de riesgo.
- [x] Implementar guardas anti-inflacion (`economyGuard`).
- [ ] Verificar ausencia de loops de bajo riesgo/alta ganancia.

## 6) IA y mecanicas

- [x] Definir `aiProfile` por arquetipo.
- [x] Limitar mecanicas extra por tipo (normal/elite/boss).
- [x] Aplicar blacklist de combinaciones toxicas.
- [x] Validar legibilidad de habilidades enemigas en log de combate.

## 7) UX y comunicacion

- [x] Mostrar nivel de amenaza antes del combate.
- [x] Mostrar modificadores de enemigo relevantes.
- [x] Mostrar expectativa de recompensa aproximada.
- [x] En modal de resultado, mostrar `threatScore` y comparativa de poder.
- [x] Agregar feedback claro de causa de derrota.

## 8) Telemetria

- [x] Registrar winrate por `zone/kind/archetype/family`.
- [x] Registrar turnos medios y HP final.
- [x] Registrar consumo de pociones y fail streak.
- [x] Registrar correlacion `threatScore` vs loot/recompensa.
- [x] Definir alertas de desviacion para retuning.

## 9) QA funcional

- [ ] Test arena: normal/elite/boss por cada zona.
- [ ] Test dungeon: progresion de pisos y bosses.
- [ ] Test interaccion con skills de jugador y estados.
- [ ] Test drops y recompensas en casos borde.
- [ ] Test compatibilidad de saves existentes.

## 10) QA de balance

- [ ] Simular sesiones de 1h, 4h, 8h y 20h.
- [x] Verificar bandas objetivo de winrate/turnos. (ver `aether/docs/REPORTE_BALANCE_COMBATE_SIMULADO.md`)
- [ ] Confirmar progresion sin estancamiento prolongado.
- [ ] Confirmar economia sin inflacion severa.
- [ ] Confirmar que mayor riesgo entrega mayor valor esperado.

## 11) Migracion y despliegue

- [x] Incrementar `state.version` cuando se active el sistema.
- [x] Agregar migraciones idempotentes para nuevo estado de dificultad.
- [ ] Validar carga de saves legacy en local.
- [ ] Preparar notas de cambio.
- [ ] Monitorear metricas post-despliegue y ajustar rapido.

## 12) Cierre y aceptacion

- [ ] Sin regresiones criticas de combate, loot o economia.
- [ ] Objetivos de dificultad y progresion cumplidos.
- [ ] Consistencia de UX y telemetria validada.
- [ ] Parametros finales congelados y documentados.
- [ ] Version del sistema de enemigos marcada como estable.

## Checklist final (Go/No-Go)

- [ ] El desafio escala de forma consistente con nivel/dificultad.
- [ ] El jugador siente progreso sin perder tension.
- [ ] Riesgo y recompensa estan alineados.
- [ ] No hay exploits reproducibles de farm.
- [x] El sistema se puede tunear rapido con telemetria real.
