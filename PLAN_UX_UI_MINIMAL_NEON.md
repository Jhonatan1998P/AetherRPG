# Plan profesional UX/UI (minimalista oscuro + acentos neon) - Aether Arena

Este plan define una mejora integral de UX/UI usando **solo TailwindCSS compilado con Vite + Node.js** (sin CDN y sin CSS puro), con enfoque profesional, legibilidad alta y estilo oscuro minimalista con toques neon controlados.

## Objetivo general

- Reducir fricción de uso y carga cognitiva.
- Clarificar la acción principal en cada vista.
- Unificar lenguaje visual y estados de interfaz.
- Mejorar consistencia desktop/mobile sin tocar la lógica del juego.

## Restricciones de implementación

- [x] Usar exclusivamente utilidades Tailwind en markup JS/HTML.
- [x] Prohibido `cdn.tailwindcss.com` en cualquier entorno.
- [x] Tailwind debe compilarse en build de Vite (pipeline local Node.js).
- [x] Permitir solo un archivo de entrada Tailwind (`aether/src/styles/tailwind.css`) sin reglas CSS custom.
- [x] Mantener paleta oscura como base y limitar neon a acentos funcionales.
- [x] Preservar funcionalidades existentes (combate, inventario, timers, mercado, etc.).

---

## Fase 0 - Setup Tailwind de producción (Vite + Node.js)

**Archivos principales:** `package.json`, `tailwind.config.js`, `postcss.config.js`, `aether/src/styles/tailwind.css`, `aether/index.html`, `aether/src/core/bootstrap/main.js`

### Checklist

- [x] Instalar dependencias de build: `tailwindcss`, `postcss`, `autoprefixer`.
- [x] Crear `tailwind.config.js` con `content` apuntando a `aether/index.html` y `aether/src/**/*`.
- [x] Crear `postcss.config.js` para integrar Tailwind en pipeline de Vite.
- [x] Crear entry CSS Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`).
- [x] Importar el entry CSS desde `aether/src/core/bootstrap/main.js`.
- [x] Eliminar script CDN de Tailwind en `aether/index.html`.
- [x] Mover toda personalización de tema a `tailwind.config.js`.
- [x] Verificar salida productiva con `npm run build`.

### Criterios de aceptación

- [x] Build genera CSS purgado/minificado en `dist/assets/*.css`.
- [x] No existe dependencia de Tailwind por CDN en runtime.
- [x] El juego renderiza igual o mejor que antes del cambio.

---

## Fase 1 - Sistema visual global (tokens + base)

**Archivos principales:** `tailwind.config.js`, `aether/index.html`

### Checklist

- [x] Normalizar `tailwind.config.js` con un set compacto de tokens (color, sombra, blur, tipografía).
- [x] Definir escala semántica de color:
  - [x] Fondo/base oscuro.
  - [x] Superficie/panel.
  - [x] Texto primario/secundario/muted.
  - [x] Estados: success/warning/danger/info.
  - [x] Acento neon principal (cyan) + acento secundario (fuchsia) + reward (amber).
- [x] Estandarizar sombras (`shadow-neon`, `shadow-pane`, etc.) sin sobrebrillo.
- [x] Revisar `TAILWIND_CLASS_MAP` para eliminar clases redundantes o inconsistentes.
- [x] Asegurar que todos los patrones de componentes (botones, paneles, pills, badges) usen clases coherentes.

### Criterios de aceptación

- [x] El look general se percibe más limpio y consistente en todas las vistas.
- [x] No aparecen estilos fuera de Tailwind.
- [x] El neon no domina visualmente el layout.

---

## Fase 2 - Jerarquía global y navegación

**Archivo principal:** `aether/src/core/bootstrap/views-layout.js`

### Checklist

- [x] Rediseñar HUD para priorizar: estado crítico -> progreso -> economía.
- [x] Reducir ruido visual en bloques secundarios del HUD.
- [x] Mejorar contraste de chips de estado (guardado, nivel, zona).
- [x] Unificar altura, padding y jerarquía en botones de nav desktop.
- [x] Refinar nav móvil (barra inferior + hoja "Más") con foco en escaneo rápido.
- [x] Mantener targets táctiles cómodos (mínimo ~44px de alto real).

### Criterios de aceptación

- [x] El usuario identifica estado actual y siguiente acción en menos de 3 segundos.
- [x] Navegación desktop y mobile comparten lenguaje visual.
- [x] No hay regresiones de usabilidad en pantallas pequeñas.

---

## Fase 3 - Vistas principales (flujo core)

**Archivo principal:** `aether/src/shared/ui/views/main-views.js`

### Checklist - Resumen

- [x] Convertir la vista en hub de decisión (1 CTA principal + 2 secundarios).
- [x] Priorizar "qué hacer ahora" sobre densidad de información.
- [x] Compactar módulos de soporte (quest, estado rápido, timers).

### Checklist - Arena

- [x] Hacer más evidente diferencia entre Normal / Elite / Blitz.
- [x] Mostrar costo/beneficio/riesgo en microcopys breves y consistentes.
- [x] Reforzar historial reciente sin competir con CTA de combate.

### Checklist - Inventario

- [x] Mejorar escaneabilidad de cards (título -> rareza -> delta -> stats -> acciones).
- [x] Hacer visible la comparación con equipado de forma inmediata.
- [x] Ordenar acciones por prioridad: Equipar > vender/reciclar/retemplar.
- [x] Revisar filtros para reducir fricción y evitar saturación de pills.

### Checklist - Perfil

- [x] Separar identidad del personaje de stats operativos.
- [x] Agrupar utilidades (poción/curar/diario/mascota) como bloque secundario claro.

### Criterios de aceptación

- [x] Cada vista principal comunica su acción dominante sin ambigüedad.
- [x] Menos competencia visual entre módulos primarios y secundarios.
- [x] Lectura más rápida del estado del jugador.

---

## Fase 4 - Vistas secundarias (consistencia de decisión)

**Archivo principal:** `aether/src/shared/ui/views/secondary-views.js`

### Checklist

- [x] Aplicar patrón fijo en todas las vistas: Contexto -> Decisión -> Soporte.
- [x] Expedición: simplificar elección zona/duración y feedback de timer activo.
- [x] Mazmorra: enfatizar riesgo/recompensa antes de entrar.
- [x] Mercado: destacar mejoras reales frente a compras de bajo impacto.
- [x] Forja: separar claramente creación vs mejora de equipado.
- [x] Gremio/Entrenamiento/Trabajo/Mascota/Logros/Diario: jerarquía uniforme de títulos y módulos.

### Criterios de aceptación

- [x] Todas las vistas secundarias se sienten parte del mismo sistema UI.
- [x] El usuario entiende rápidamente "qué gano" y "qué costo tiene" cada acción.

---

## Fase 5 - Microinteracciones y feedback

**Archivos:** `aether/index.html`, `aether/src/core/bootstrap/views-layout.js`, vistas UI

### Checklist

- [x] Homogeneizar estados `hover`, `active`, `focus-visible`, `disabled` en botones y cards.
- [x] Ajustar intensidades de glow por estado (normal/hover/active).
- [x] Mantener transiciones cortas y funcionales (sin animación decorativa excesiva).
- [x] Revisar tooltips para legibilidad, posicionamiento y tono visual consistente.
- [x] Mantener feedback de guardado visible pero no intrusivo.

### Criterios de aceptación

- [x] Interacciones se sienten fluidas y predecibles.
- [x] El feedback confirma acciones sin distraer.

---

## Fase 6 - Mobile-first y accesibilidad

**Archivos:** layout + todas las vistas

### Checklist

- [x] Verificar espaciado inferior por `safe-area` en barra móvil y overlays.
- [x] Reducir densidad de bloques simultáneos en móvil.
- [x] Mantener contraste legible (objetivo AA en texto funcional).
- [x] Garantizar enfoque visible para navegación por teclado (`focus-visible`).
- [x] Evitar depender solo del color para significado (usar icono + texto + tono).

### Criterios de aceptación

- [x] Uso cómodo en móvil con una mano.
- [x] Lectura correcta en condiciones de baja luz.
- [x] Navegación accesible sin pérdida de contexto.

---

## QA funcional y visual

### Checklist de validación final

- [x] `npm run dev` levanta sin errores.
- [x] `npm run build` compila correctamente.
- [x] Sin errores en consola relacionados a render UI.
- [x] No se rompen eventos (`onclick`) ni rutas de vista.
- [x] No hay regresiones en timers (`expedition/job`) ni modal de combate.
- [x] Desktop (>=1280), tablet (~768) y mobile (~390) con layout estable.
- [x] Las decisiones primarias por vista son visibles sin scroll excesivo.

Nota QA:
- `npm run dev` falló en puerto `5000` por ocupación del entorno, validado correctamente con `npx vite --config vite.config.mjs aether --host 0.0.0.0 --port 5174 --strictPort`.

---

## Priorización recomendada (implementación)

- [x] 1) Sistema visual global (Fase 1)
- [x] 2) HUD + navegación (Fase 2)
- [x] 3) Resumen/Arena/Inventario (Fase 3)
- [x] 4) Mercado/Forja/Expedición/Mazmorra (Fase 4)
- [x] 5) Resto de secundarias (Fase 4)
- [x] 6) Microinteracciones + accesibilidad + QA (Fase 5/6 + QA)

---

## Definición de éxito (DoD)

- [x] UI consistente en todas las vistas con identidad minimalista oscura.
- [x] Acentos neon usados solo para jerarquía y feedback importante.
- [x] Menos carga cognitiva y mejor conversión a acciones principales.
- [x] Implementación 100% Tailwind utility-first (sin CSS puro).
