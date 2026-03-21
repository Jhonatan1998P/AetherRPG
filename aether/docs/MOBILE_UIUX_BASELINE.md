# Baseline Mobile-First UI/UX

## KPIs objetivo

- LCP: `< 2.5s`
- CLS: `< 0.1`
- Sin overflow horizontal en `320px`
- Targets tactiles `>= 44x44`

## Breakpoints auditados

- `320`, `360`, `390`, `768`, `1024`, `1280`

## Hallazgos antes del cierre

- **Arquitectura visual**: coexistencia de estilos legacy + mapeo runtime a utilidades.
- **Jerarquia**: varias vistas tenian exceso de contexto por encima de la accion principal.
- **Metrica tactil**: algunos controles secundarios no garantizaban altura minima consistente.
- **Performance percibida**: blur/sombras agresivas en movil y posicionamiento de tooltip sin throttling.
- **Consistencia**: diferencias entre vistas en estructura de encabezados, bloques de decision y soporte.

## Matriz resumida por vista

- `resumen`: ruido inicial alto; se priorizo CTA principal + rutas secundarias.
- `perfil`: mezcla de datos criticos/avanzados; se separo con acordeon para movil.
- `inventario`: comparacion extensa; se mantuvo filtro horizontal y soporte de reglas rapidas.
- `arena`: decision de modo poco guiada; se reforzo costo/beneficio visible por tarjeta.
- `expedicion` y `trabajo`: se priorizo decision de duracion/fuente de ingreso con feedback inmediato.
- `mazmorra`: se formalizo checklist de entrada y riesgo.
- `mercado`: se reforzo decision rapida compra vs ahorro.
- `forja`: separacion explicita entre crear y mejorar.
- `gremio` y `entrenamiento`: lectura de costo/retorno en primera capa.
- `mascota`: accion principal priorizada (alimentar/incubar).
- `logros`: progreso y ascension en contexto.
- `diario`: paginacion movil y lectura densa estable.
