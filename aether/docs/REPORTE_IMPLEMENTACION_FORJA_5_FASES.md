# Reporte de Implementacion - Plan 5 Fases Forja y Mejoras

Estado: completado en codigo (Fases 1-5) con verificacion de build.

## 1) Cobertura por fase

## Fase 1 - Fundacion del sistema

- [x] Contratos y capas de progreso de forja (`FORGE_PROGRESS_STAGES`).
- [x] Taxonomia ampliada con `stabilizeItem`.
- [x] Presupuesto unificado de forja con `provenanceRisk` en `items.js`.
- [x] Caps de poder y envelope de presupuesto reforzados en pipeline de items.
- [x] Normalizacion de costes por familia de recursos con `catalysts`.
- [x] Protecciones anti-frustracion (sin destruccion total, degradacion parcial controlada).

## Fase 2 - Profundidad de decisiones

- [x] Escuelas de forja (`FORGE_SCHOOLS`): `arsenal`, `bastion`, `arcanum`.
- [x] Arbol de maestria (`FORGE_MASTERY_NODES`) con ramas eficiencia/control/potencia.
- [x] Sistema de afinidad por objeto (`affinityXp`, `affinityLevel`) y progreso por combate.
- [x] Reforge con decisiones excluyentes: total, parcial y bloqueo de stat.
- [x] Resonancias suaves de set (`FORGE_SET_RESONANCE`) integradas en stats.
- [x] Integracion de esfuerzo/riesgo via `threatScore` en fuentes de materiales.

## Fase 3 - Recompensa y friccion justa

- [x] Pity por accion de forja (`enhance`, `reforge`, `transcend`, `stabilize`).
- [x] Costes dinamicos anti-exploit por cadena de re-roll del mismo item.
- [x] Enfriamiento de mercado por refrescos encadenados.
- [x] Telemetria ROI de loops `craft->sell` y `buy->salvage`.
- [x] Conversion de materiales con perdida controlada (`convertMaterials`).
- [x] Umbrales economicos por etapa (`FORGE_ECONOMY_TARGETS`) y snapshot de estado.

## Fase 4 - UX y claridad operativa

- [x] Vista de forja expandida con capas: escuela, maestria, recetas y upgrades.
- [x] Preview avanzado: costes, outcomes, escenarios favorable/neutral/desfavorable.
- [x] Visualizacion de pity de loot y pity por accion de forja.
- [x] Exposicion de afinidad y estado de estabilizacion por item.
- [x] Acciones explicitas: `Reforge total/parcial/bloqueo`, `Stabilize`, `Transcend`.
- [x] Flujo de conversion de materiales desde UI.

## Fase 5 - Telemetria y cierre de balance

- [x] Telemetria integral de forja (uso, outcomes, coste por mejora util).
- [x] Correlacion amenaza->progreso de forja (`threatToAffinity`).
- [x] Integracion con telemetria de combate/economia existente.
- [x] Hitos de forja con celebracion de primera trascendencia.
- [x] Estado consolidado de forja consultable via `getForgeState`.

## 2) Archivos clave intervenidos

- `aether/src/shared/content/game-data.js`
- `aether/src/core/bootstrap/config.js`
- `aether/src/core/state/defaults.js`
- `aether/src/core/bootstrap/model.js`
- `aether/src/features/gameplay/domain/items.js`
- `aether/src/features/gameplay/domain/economy.js`
- `aether/src/features/gameplay/domain/stats.js`
- `aether/src/features/gameplay/domain/combat.js`
- `aether/src/features/gameplay/domain/activities.js`
- `aether/src/core/bootstrap/systems.js`
- `aether/src/core/actions/system-actions.js`
- `aether/src/core/bootstrap/views-runtime.js`
- `aether/src/core/bootstrap/views-content.js`
- `aether/src/shared/ui/views/secondary-views.js`

## 3) Verificacion tecnica

- [x] Build de proyecto ejecutado correctamente:
  - comando: `npm run build`
  - resultado: success

## 4) Nota de equilibrio cruzado

Se mantuvo consistencia con planes de items y enemigos mediante:

- uso de `threatScore`/`provenanceRisk` para valor real de forja,
- refuerzo de guardas anti-exploit economia-forja-mercado,
- caps suaves y resonancias no obligatorias para evitar meta unica,
- extension de recompensas de combate con `catalysts` sin romper loop principal.

## 5) QA de balance forja (simulado)

- [x] Se agrego simulador dedicado: `aether/scripts/forge-balance-sim.mjs`.
- [x] Se agregaron scripts npm para ejecutar simuladores:
  - `npm run sim:combat`
  - `npm run sim:forge`
- [x] Se ejecuto `npm run sim:forge` y se genero:
  - `aether/docs/REPORTE_BALANCE_FORJA_SIMULADO.md`

Hallazgos iniciales del simulador (pendientes de retuning):

- `firstMeaningfulUpgradeAt` y `firstSpecializationDecisionAt` aparecen en 0.0 min (demasiado tempranos vs objetivo 10-20 y 40-80 min).
- economia neta de forja (oro/materiales por hora) queda fuera de bandas objetivo en varios escenarios.
- frustracion por rachas largas se mantiene baja (<= 10% en escenarios simulados).
