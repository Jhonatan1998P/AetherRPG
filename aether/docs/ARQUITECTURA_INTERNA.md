# Arquitectura interna (estado actual)

## Capas

- `src/content/*`: datos estaticos del juego y metadatos de navegacion/UI.
- `src/domain/*`: logica de negocio pura (combate, economia, actividades, progresion, items, stats).
- `src/app/*`: orquestacion de estado, store y acciones.
- `src/ui/*`: render y utilidades visuales.

## Modulos principales

- `src/content/game-data.js`: tablas de juego (items, zonas, jobs, pets, skills, achievements).
- `src/content/ui-meta.js`: tabs, vistas y metadatos de navegacion.
- `src/domain/items.js`: factory/escalado/score de items y mercado.
- `src/domain/stats.js`: stats derivadas y bonuses (guild/relic/pet/equipo).
- `src/domain/combat.js`: motor de combate y simulacion.
- `src/domain/economy.js`: inventario, mercado, forja y gestion economica.
- `src/domain/activities.js`: regeneracion, trabajos, expediciones y timers.
- `src/domain/progression.js`: xp/rango, quests, logros, ascension/reliquias.
- `src/app/store/*`: `defaults`, `selectors`, `state`, `mutations`, `persistence`.
- `src/app/actions/system-actions.js`: binding de acciones del dominio hacia controller.
- `src/ui/views/main-views.js`: vistas principales (`resumen`, `perfil`, `inventario`, `arena`).
- `src/ui/views/secondary-views.js`: vistas secundarias.
- `src/ui/runtime/ui-helpers.js`: iconos, reemplazo de emoji y helpers de tooltip.
- `controller.js` consume `views-layout.js` y `views-content.js` por import ESM directo.

## Fachadas globales (compatibilidad)

Se mantienen por compatibilidad incremental:

- `window.AetherConfig`
- `window.AetherModel`
- `window.AetherSystems`
- `window.game`

Estas fachadas son wrappers sobre modulos internos. El objetivo final es reducir dependencia de `window` dentro del codigo interno y dejar las fachadas solo como borde de integracion.

## Reglas de dependencia

- `content` no depende de ninguna otra capa.
- `domain` puede depender de `content` y utilidades puras inyectadas.
- `app` coordina `domain` y estado/persistencia.
- `ui` consume `app`/runtime para renderizar, sin mover reglas de negocio al render.

## Direccion recomendada para siguientes cambios

- Evitar agregar nueva logica de negocio en `systems.js` o `views-content.js`.
- Agregar nuevas mecanicas en `src/domain/*` y exponerlas via acciones del controller.
- Continuar reduciendo `window.Aether*` en capas internas y reservarlo para borde de integracion.
