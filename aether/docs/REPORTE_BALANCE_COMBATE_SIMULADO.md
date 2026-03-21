# Reporte de Balance de Combate (Simulado)

- Fecha: 2026-03-21T15:24:39.522Z
- Iteraciones por escenario: 160
- Escenarios: 7 zonas x (normal/elite/boss)
- Modos: normal+elite en arena, boss en dungeon

## Resultado por escenario

| ZonaId | Zona | Modo | Tipo | Winrate | Turnos medios | HP final medio | Threat medio | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | Distrito de Arena | arena | normal | 83.8% | 7.19 | 47.7% | 85.0 | winrate alto |
| 0 | Distrito de Arena | arena | elite | 82.5% | 9.22 | 39.7% | 96.6 | winrate alto |
| 0 | Distrito de Arena | dungeon | boss | 59.4% | 12.95 | 25.9% | 123.4 | winrate alto |
| 1 | Bosque Sangriento | arena | normal | 66.9% | 7.61 | 22.7% | 95.9 | OK |
| 1 | Bosque Sangriento | arena | elite | 39.4% | 9.37 | 9.8% | 115.5 | winrate bajo |
| 1 | Bosque Sangriento | dungeon | boss | 36.3% | 12.10 | 9.7% | 132.3 | OK |
| 2 | Catacumbas Rotas | arena | normal | 53.1% | 8.71 | 12.2% | 100.4 | winrate bajo, combate largo |
| 2 | Catacumbas Rotas | arena | elite | 38.1% | 9.89 | 7.9% | 115.8 | winrate bajo |
| 2 | Catacumbas Rotas | dungeon | boss | 17.5% | 13.21 | 3.4% | 136.3 | winrate bajo |
| 3 | Dunas de Onice | arena | normal | 53.1% | 8.63 | 15.3% | 99.6 | winrate bajo, combate largo |
| 3 | Dunas de Onice | arena | elite | 33.1% | 9.84 | 7.2% | 118.3 | winrate bajo |
| 3 | Dunas de Onice | dungeon | boss | 29.4% | 12.69 | 7.7% | 133.4 | winrate bajo |
| 4 | Fortaleza del Eclipse | arena | normal | 68.8% | 8.97 | 19.6% | 97.0 | combate largo |
| 4 | Fortaleza del Eclipse | arena | elite | 52.5% | 11.09 | 11.9% | 109.7 | combate largo |
| 4 | Fortaleza del Eclipse | dungeon | boss | 37.5% | 13.79 | 8.3% | 130.3 | OK |
| 5 | Necropolis del Hierro | arena | normal | 73.8% | 8.32 | 25.2% | 93.7 | winrate alto, combate largo |
| 5 | Necropolis del Hierro | arena | elite | 57.5% | 10.66 | 15.6% | 108.8 | OK |
| 5 | Necropolis del Hierro | dungeon | boss | 57.5% | 13.83 | 16.3% | 125.3 | winrate alto |
| 6 | Fisura Astral | arena | normal | 83.8% | 7.58 | 32.7% | 91.1 | winrate alto |
| 6 | Fisura Astral | arena | elite | 76.3% | 9.84 | 26.2% | 104.0 | winrate alto |
| 6 | Fisura Astral | dungeon | boss | 66.9% | 12.94 | 24.0% | 120.5 | winrate alto |

## Resumen por tipo

| Tipo | Winrate medio | Turnos medios | Estado vs banda objetivo |
| --- | --- | --- | --- |
| normal | 69.0% | 8.14 | combate largo |
| elite | 54.2% | 9.99 | OK |
| boss | 43.5% | 13.07 | OK |

## Bandas objetivo usadas

- normal: winrate 60%-72%, 5-8 turnos
- elite: winrate 45%-60%, 7-11 turnos
- boss: winrate 35%-52%, 10-16 turnos
