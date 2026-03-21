# Plan de modularizacion (SRP + escalabilidad)

Este plan propone una refactorizacion incremental para separar responsabilidades, reducir acoplamiento y permitir crecer el proyecto sin convertir `systems.js` y `views-content.js` en cuellos de botella.

## Objetivos

- Asegurar responsabilidad unica por modulo.
- Definir direccion de dependencias clara: `content -> domain -> app -> ui`.
- Mantener compatibilidad temporal con la API global actual (`window.Aether*`).
- Reducir riesgo: migrar por fases sin reescritura total.

## Problemas actuales (resumen)

- `systems.js` concentra demasiadas responsabilidades (combate, economia, progresion, timers, UI feedback).
- `model.js` mezcla dominio, estado, persistencia y wiring del store.
- Existe acoplamiento inverso (`model` llamando `AetherSystems` para toasts/journal).
- `views-content.js` sigue siendo una mega-vista con muchas pantallas juntas.

## Reglas de arquitectura

- `content`: solo datos estaticos (sin logica de negocio).
- `domain`: logica pura (sin `window`, DOM, HTML, `localStorage`).
- `app`: orquestacion, store, persistencia, side effects.
- `ui`: render + eventos de usuario, sin reglas de negocio profundas.
- Las capas superiores pueden depender de inferiores, nunca al reves.

## Estructura objetivo

```text
src/
  content/
    game/
      items.js
      zones.js
      jobs.js
      pets.js
      skills.js
      achievements.js
    ui/
      views.js
      navigation.js

  domain/
    items/
      item-factory.js
      item-scaling.js
      item-score.js
      market-generation.js
    stats/
      bonus-sources.js
      derived-stats.js
    combat/
      enemy-factory.js
      combat-engine.js
      skill-resolution.js
    progression/
      xp.js
      quests.js
      achievements.js
      rank.js
      ascension.js
    economy/
      inventory.js
      equipment.js
      forge.js
      market.js
      resources.js
    activities/
      regen.js
      jobs.js
      expeditions.js
      timers.js

  app/
    store/
      state.js
      defaults.js
      persistence.js
      selectors.js
      mutations.js
    actions/
      combat-actions.js
      inventory-actions.js
      progression-actions.js
      activity-actions.js

  ui/
    runtime/
      icons.js
      tooltips.js
      formatters.js
    layout/
      hud.js
      desktop-nav.js
      mobile-nav.js
      mobile-sheet.js
    views/
      resumen.js
      perfil.js
      inventario.js
      arena.js
      expedicion.js
      mercado.js
      forja.js
      gremio.js
      entrenamiento.js
      trabajo.js
      mascota.js
      logros.js
      diario.js
    presenters/
      toasts.js
      journal.js
      modals.js
```

## Checklist de implementacion

### Fase 0 - Baseline y seguridad

- [ ] Confirmar build y dev estables antes de mover modulos.
- [ ] Definir convenciones de import/export y nomenclatura de archivos.
- [ ] Crear documento de contratos publicos actuales (`window.AetherConfig`, `window.AetherModel`, `window.AetherSystems`, `window.AetherViews`).

### Fase 1 - Separar `config.js` por responsabilidad

- [x] Extraer datos de juego (`ITEM_BASES`, `ZONES`, `JOBS`, `PETS`, `SKILLS`, `ACHIEVEMENTS`) a `src/content/game/*`.
- [x] Extraer metadatos de vistas/navegacion a `src/content/ui/*`.
- [x] Mantener un agregador temporal que siga exponiendo `window.AetherConfig` sin romper llamadas existentes.

### Fase 2 - Extraer dominio puro desde `model.js`

- [x] Mover logica de items (factory/scaling/scoring/market) a `src/domain/items/*`.
- [x] Mover calculo de stats derivadas y bonuses a `src/domain/stats/*`.
- [x] Mantener `model.js` como fachada de estado + persistencia durante la transicion.
- [x] Eliminar dependencias de `model` hacia UI/systems (sin toasts/journal directos).

### Fase 3 - Modularizar combate de `systems.js`

- [x] Extraer `enemyArchetypeMods`, `makeEnemy`, `performHit`, `runCombat` y funciones relacionadas a `src/domain/combat/*`.
- [x] Dejar wrappers en `AetherSystems` para mantener compatibilidad de API.
- [x] Hacer que el motor de combate devuelva resultados/eventos, no efectos UI directos.

### Fase 4 - Modularizar economia e inventario

- [x] Extraer acciones de inventario/equipo (`acquireItem`, `equipItem`, `sellItem`, `salvageItem`) a `src/domain/economy/*`.
- [x] Extraer forja/mercado/recursos (`forgeItem`, `refreshMarket`, `buyMarketItem`, `buyResource`) a modulos separados.
- [x] Centralizar validaciones de capacidad de inventario y costes.

### Fase 5 - Modularizar actividades y timers

- [x] Extraer regeneracion pasiva (`passiveRegen`) a `src/domain/activities/*`.
- [x] Extraer trabajos y expediciones a `src/domain/activities/*`.
- [x] Extraer resolucion de temporizadores a `src/domain/activities/*`.

### Fase 6 - Modularizar progresion

- [x] Extraer XP/rango (`gainXp`, `currentRank`) a `src/domain/progression/*`.
- [x] Extraer quests (`trackQuest`, `claimQuest`, `rerollQuests`) a `src/domain/progression/*`.
- [x] Extraer logros (`achievementProgress`, `checkAchievements`) a `src/domain/progression/*`.
- [x] Extraer ascension y reliquias (`ascend`, `spendRelic`) a `src/domain/progression/*`.

### Fase 7 - Reorganizar capa `app`

- [x] Dividir store en: `state/defaults/persistence/selectors/mutations`.
- [x] Crear `app/actions/*` para orquestar casos de uso por dominio.
- [x] Convertir `controller.js` en coordinador de routing/render/scheduler (sin logica de negocio).

### Fase 8 - Partir UI por vistas

- [x] Dividir `views-content.js` en archivos por pantalla en `src/ui/views/*`.
- [x] Mover helpers de `views-runtime.js` a `src/ui/runtime/*`.
- [x] Mantener compatibilidad temporal durante la migracion de vistas y retirar agregadores al finalizar.

Avance actual:
- Se extrajeron vistas principales a `src/ui/views/main-views.js` (`resumen`, `perfil`, `inventario`, `arena`).
- Se extrajeron vistas secundarias a `src/ui/views/secondary-views.js` (`expedicion`, `mazmorra`, `mercado`, `forja`, `gremio`, `entrenamiento`, `trabajo`, `mascota`, `logros`, `diario`).
- `views-content.js` ahora usa ambos modulos como fuente principal de `renderContent()`.
- Se movieron helpers de UI reutilizables (`icon`, `withIcon`, `replaceEmojiIcons`, tooltips) a `src/ui/runtime/ui-helpers.js` y `views-runtime.js` consume ese modulo.

### Fase 9 - Contratos y limpieza final

- [x] Reemplazar llamadas directas via `window` por imports internos donde aplique.
- [ ] Eliminar wrappers temporales cuando toda la migracion este completa.
- [x] Documentar API interna final (modulos, eventos, limites de capa).

Avance actual:
- Se eliminó el wrapper `views.js`; el controller ahora compone vistas desde `window.AetherViewLayout` y `window.AetherViewContent`.
- El controller ahora importa `views-layout.js` y `views-content.js` como modulos ESM directos.
- Se eliminó la dependencia global de `window.AetherViewRuntime`/`window.AetherViewLayout`/`window.AetherViewContent` dentro del flujo principal de render.

## Riesgos y mitigaciones

- Riesgo: romper integraciones por cambios de nombres/exportes.
  - Mitigacion: mantener fachadas temporales y wrappers de compatibilidad.
- Riesgo: ciclos de dependencia al extraer logica.
  - Mitigacion: respetar direccion de capas y mover side effects al nivel `app`.
- Riesgo: regresiones funcionales durante el movimiento de funciones.
  - Mitigacion: migrar por bloques pequenos y validar flujo clave tras cada fase.

## Criterios de aceptacion

- Cada modulo tiene una razon de cambio clara.
- Dominio sin dependencias de UI/DOM/localStorage.
- Las nuevas funcionalidades se agregan tocando menos archivos y con menor impacto transversal.
- `npm run dev` y `npm run build` siguen estables durante todo el proceso.
