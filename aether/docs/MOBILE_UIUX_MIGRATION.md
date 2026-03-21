# Migracion Arquitectura Visual

## Objetivo

Eliminar el mapeo dinamico de clases en runtime y consolidar una fuente estable de estilos para reducir fragilidad y costo de render.

## Cambios aplicados

- Retirado el bloque `TAILWIND_CLASS_MAP` de `index.html`.
- Retirado `MutationObserver` de mapeo visual en runtime.
- `styles.css` vuelve a ser la capa canonica de componentes semanticos (`glass`, `btn`, `status-chip`, etc.).
- `index.html` ahora carga `styles.css` de forma explicita.
- El sistema de tooltips se movio a `controller.js` para mantener funcionalidad sin depender del script inline de mapeo.

## Resultado

- Menos trabajo en cliente por mutacion del DOM.
- Menos deuda tecnica por doble mantenimiento visual.
- Flujo de render mas estable en actualizaciones de vista y timers.
