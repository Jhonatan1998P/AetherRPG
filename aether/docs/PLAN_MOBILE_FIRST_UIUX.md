# Plan Maestro: Responsividad Mobile-First + Refactor UI/UX

## Objetivo

Mejorar de forma integral la responsividad del juego, adoptando un enfoque **mobile-first** y refactorizando la **UI/UX de todas las vistas** para reducir fricción, mejorar legibilidad, acelerar la toma de decisiones del jugador y mantener consistencia visual/funcional en todo el producto.

## Alcance

- Incluye todas las vistas actuales: `resumen`, `perfil`, `inventario`, `arena`, `expedicion`, `mazmorra`, `mercado`, `forja`, `gremio`, `entrenamiento`, `trabajo`, `mascota`, `logros`, `diario`.
- Incluye navegación, HUD, barras de acción móvil, modales, tooltips, densidad de información y accesibilidad.
- Incluye revisión de arquitectura de estilos para eliminar deuda técnica entre clases legacy y utilidades Tailwind.

## Principios de diseño y producto

1. **Mobile-first real**: diseñar primero para 320-390px y escalar hacia tablet/desktop.
2. **Una acción principal por vista**: CTA dominante visible sin scroll en móvil.
3. **Jerarquía clara**: objetivo -> acción -> contexto -> soporte.
4. **Consistencia sistémica**: componentes y patrones repetibles entre vistas.
5. **Accesibilidad por defecto**: contraste, foco visible, targets táctiles >= 44px.
6. **Performance percibida**: interacciones rápidas, menos jank, menor sobrecarga visual.

## Estado actual resumido (diagnóstico)

- Existe coexistencia de estilos legacy y mapeo dinámico a Tailwind en runtime.
- Hay dos fuentes de estilo en paralelo (`styles.css` + clases/estilos Tailwind), con riesgo de inconsistencias.
- La estructura de vistas ya está modularizada (facilita refactor progresivo por etapas).
- La navegación móvil existe, pero varias pantallas siguen con densidad y jerarquía más orientadas a desktop.

---

## Plan de ejecución por fases

## Fase 0 - Baseline y métricas (1 dia)

### Objetivo
Establecer línea base técnica y de UX para medir mejoras reales.

### Tareas
- Definir métricas objetivo:
  - `LCP < 2.5s`
  - `CLS < 0.1`
  - Sin overflow horizontal en 320px
  - Targets táctiles >= 44x44
- Tomar capturas y notas por breakpoint: 320, 360, 390, 768, 1024, 1280.
- Crear matriz de problemas por vista: layout, legibilidad, navegación, CTA, accesibilidad.

### Entregables
- Documento baseline (antes).
- Lista priorizada de issues por impacto/frecuencia.

---

## Fase 1 - Fundaciones de diseño (1-2 dias)

### Objetivo
Unificar sistema visual y reglas responsive para evitar desviaciones entre vistas.

### Tareas
- Definir tokens globales:
  - Espaciado
  - Radio de bordes
  - Elevaciones/sombras
  - Colores semánticos (success, warning, danger, info)
  - Tipografía y escalas
- Estandarizar componentes base:
  - `btn` y variantes
  - `card`/`surface`
  - `chip` de estado
  - `section header`
  - `stat block`
  - `mobile cta bar`
  - `sheet/modal`
- Consolidar reglas en capas de estilos (`@layer base/components/utilities`).

### Entregables
- Mini design-system operativo.
- Catálogo de componentes reutilizables.

---

## Fase 2 - Simplificación de arquitectura visual (1 dia)

### Objetivo
Reducir deuda técnica y costo de render en cliente.

### Tareas
- Migrar gradualmente clases legacy al sistema final de utilidades/componentes.
- Retirar mapeo de clases en runtime cuando cada bloque quede migrado.
- Evitar doble mantenimiento entre CSS legado y Tailwind.

### Entregables
- Pipeline visual con una sola fuente de verdad.
- Menor complejidad y menor fragilidad en futuros cambios.

---

## Fase 3 - Layout global mobile-first (2 dias)

### Objetivo
Reestructurar el esqueleto general para que móvil sea primera clase.

### Tareas
- Reorganizar shell global por capas:
  - HUD compacto
  - Contenido principal
  - CTA sticky contextual
  - Navegación inferior
- Definir reglas por breakpoint:
  - Base `<640`: 1 columna, foco en acción principal
  - `sm/md`: ampliar contexto progresivo
  - `lg/xl`: habilitar asides y bloques secundarios
- Revisar safe-areas, offsets y colisiones entre elementos sticky.

### Entregables
- Layout estable y consistente en todas las resoluciones objetivo.

---

## Fase 4 - Refactor UI/UX por vistas (4-6 dias)

### Objetivo
Aplicar un patrón común de interacción y legibilidad a todas las pantallas.

### Tareas por vista

### Nucleo (prioridad alta)
- **Resumen**: 1 CTA principal dominante + 2 secundarias; reducir ruido inicial.
- **Arena**: decisión de modo (normal/elite/racha) clara y táctil, con costo/beneficio visible.
- **Inventario**: filtros horizontales usables, comparación más corta, acciones rápidas sin saturación.
- **Perfil**: separar stats críticas vs avanzadas con acordeones en móvil.

### Secundarias (prioridad media)
- **Expedicion/Trabajo**: elección de duración/fuente de ingreso más clara con feedback inmediato.
- **Mazmorra**: checklist previo de entrada (llaves, recursos, riesgo).
- **Mercado**: cards con decisión de compra rápida (mejora real vs gasto).
- **Forja**: separar crear vs mejorar, simplificar flujo de decisión.
- **Gremio/Entrenamiento**: costos y retorno legibles a primera vista.
- **Mascota**: estado + acción principal (alimentar/incubar) sin pasos extra.
- **Logros**: progreso y ascensión con contexto de impacto.
- **Diario**: lectura eficiente, paginación usable en móvil.

### Entregables
- Todas las vistas alineadas al mismo patrón UX.
- Menor carga cognitiva y mejor escaneo en móvil.

---

## Fase 5 - Accesibilidad y microinteracciones (1-2 dias)

### Objetivo
Subir calidad de interacción y cumplir criterios mínimos de accesibilidad.

### Tareas
- Validar contraste de texto y componentes interactivos.
- Asegurar foco visible y orden de tab coherente.
- Revisar estados `hover`, `active`, `disabled`, `focus-visible`.
- Asegurar `aria-label`/roles cuando aplique.
- Limitar animaciones en `prefers-reduced-motion`.

### Entregables
- Checklist a11y aprobado.
- Interacciones más claras y confiables.

---

## Fase 6 - Performance y estabilidad visual (1 dia)

### Objetivo
Optimizar fluidez, especialmente en móvil y listas densas.

### Tareas
- Reducir efectos costosos (blur/sombras) donde afecten rendimiento.
- Revisar listas largas (inventario/mercado/diario) para evitar jank.
- Evitar recalculos/reflow innecesarios en tooltips y overlays.
- Validar estabilidad visual durante actualizaciones en tiempo real.

### Entregables
- Mejor rendimiento percibido y menor latencia de interacción.

---

## Fase 7 - QA responsive y cierre (1-2 dias)

### Objetivo
Cerrar el proyecto con validación funcional y visual completa.

### Tareas
- QA completo por vista y breakpoint.
- Pruebas de estados extremos:
  - Texto largo
  - Estados vacíos
  - Inventarios grandes
  - Timers activos
  - Modales + navegación abierta
- Corrección de regresiones.
- Build final y verificación manual final.

### Entregables
- Informe final antes/después.
- Release candidate listo.

---

## Criterios de aceptacion (Definition of Done)

- No hay scroll horizontal en ninguna vista móvil.
- Acción principal visible sin scroll en vistas clave.
- Todos los objetivos táctiles cumplen minimo 44x44.
- Navegación y flujos críticos operables con una mano en 360px.
- Patrón visual y de interacción consistente en todo el juego.
- Accesibilidad base validada (foco, contraste, labels).
- Sin regresiones funcionales en acciones del juego.

---

## Roadmap sugerido de implementación

1. Fase 0 -> Fase 1 -> Fase 2
2. Fase 3 (layout global)
3. Fase 4 (vistas núcleo)
4. Fase 4 (vistas secundarias)
5. Fase 5 + Fase 6
6. Fase 7 (QA + cierre)

---

## Checklist de avance (actualizable)

> Marcar cada item al completarlo para tener visibilidad real del progreso.

> Estado: completado en esta iteración (ver entregables en `docs/MOBILE_UIUX_BASELINE.md`, `docs/MOBILE_UIUX_DESIGN_SYSTEM.md`, `docs/MOBILE_UIUX_MIGRATION.md`, `docs/MOBILE_UIUX_FINAL_REPORT.md`).

### Fase 0 - Baseline
- [x] Definir KPIs finales (LCP, CLS, usabilidad táctil).
- [x] Auditar vistas en breakpoints objetivo.
- [x] Documentar problemas por vista con prioridad.

### Fase 1 - Fundaciones
- [x] Definir tokens de diseño globales.
- [x] Estandarizar componentes base reutilizables.
- [x] Publicar guía rápida de uso de componentes.

### Fase 2 - Arquitectura visual
- [x] Plan de migración de clases legacy.
- [x] Reducir/retirar mapeo runtime por bloques completados.
- [x] Consolidar una sola fuente de estilos.

### Fase 3 - Layout global
- [x] Reestructurar shell mobile-first.
- [x] Ajustar sticky CTA + bottom nav + safe areas.
- [x] Verificar comportamiento en 320/360/390.

### Fase 4 - Refactor de vistas
- [x] Refactor `resumen`.
- [x] Refactor `arena`.
- [x] Refactor `inventario`.
- [x] Refactor `perfil`.
- [x] Refactor `expedicion`.
- [x] Refactor `trabajo`.
- [x] Refactor `mazmorra`.
- [x] Refactor `mercado`.
- [x] Refactor `forja`.
- [x] Refactor `gremio`.
- [x] Refactor `entrenamiento`.
- [x] Refactor `mascota`.
- [x] Refactor `logros`.
- [x] Refactor `diario`.

### Fase 5 - Accesibilidad
- [x] Validar contraste mínimo en UI clave.
- [x] Verificar foco visible en toda navegación.
- [x] Confirmar targets táctiles >= 44px.
- [x] Revisar etiquetas y atributos accesibles.

### Fase 6 - Performance
- [x] Reducir efectos visuales costosos en móvil.
- [x] Optimizar listas densas (inventario/mercado/diario).
- [x] Medir mejora percibida y estabilidad visual.

### Fase 7 - QA y cierre
- [x] QA cross-breakpoint completado.
- [x] QA de estados extremos completado.
- [x] Corregir regresiones encontradas.
- [x] Validar build final.
- [x] Publicar reporte antes/después.
