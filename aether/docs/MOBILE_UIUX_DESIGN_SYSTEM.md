# Mini Design System Operativo

## Tokens globales

Definidos en `styles.css`:

- Espaciado: `--space-1` a `--space-6`
- Radios: `--radius-sm` a `--radius-xl`
- Elevaciones: `--elevation-sm`, `--elevation-md`, `--elevation-lg`
- Colores semanticos: `--success`, `--warning`, `--danger`, `--info`
- Base de layout movil: `--mobile-nav-h`, `--safe-bottom`

## Componentes estandar

- `btn` + variantes: `btn-primary`, `btn-violet`, `btn-gold`, `btn-danger`, `btn-success`
- `card/surface`: `glass`, `glass-strong`, `surface-subtle`, `surface-strong`
- `chip`: `status-chip` + tonos `success|warning|danger`
- `section header`: helper `sectionHeader(...)`
- `stat block`: helper `htmlStat(...)`
- `mobile cta bar`: helper `actionBar(...)` + clase `mobile-cta-bar`
- `sheet/modal`: `renderMobileSheet()` y `renderModal()`

## Guía de uso rapido

- Mantener en cada vista: `pageLead` -> accion principal -> contexto -> soporte.
- Colocar CTA movil sticky solo para acciones recurrentes de alto impacto.
- Usar `statusChip` para estados de decision (no para decoracion).
- Reusar `infoCard` para explicaciones cortas y reglas tacticas.
- Evitar introducir nuevos patrones de card si `glass/surface` cubren el caso.
