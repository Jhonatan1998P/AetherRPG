# Reporte de Balance de Combate (Simulado)

- Fecha: 2026-03-21T22:56:59.672Z
- Iteraciones por escenario: 1200
- Escenarios: 7 zonas x (normal/elite/boss)
- Modos: normal+elite en arena, boss en dungeon

## Resultado por escenario

| ZonaId | Zona | Modo | Tipo | Winrate | Turnos medios | HP final medio | Threat medio | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | Distrito de Arena | arena | normal | 55.1% | 8.15 | 21.1% | 96.5 | OK |
| 0 | Distrito de Arena | arena | elite | 55.0% | 9.64 | 21.0% | 109.0 | winrate alto |
| 0 | Distrito de Arena | dungeon | boss | 33.7% | 12.20 | 12.3% | 132.6 | OK |
| 1 | Bosque Sangriento | arena | normal | 52.7% | 7.88 | 15.3% | 100.1 | OK |
| 1 | Bosque Sangriento | arena | elite | 46.6% | 9.29 | 12.4% | 112.9 | OK |
| 1 | Bosque Sangriento | dungeon | boss | 35.0% | 11.40 | 9.6% | 132.5 | OK |
| 2 | Catacumbas Rotas | arena | normal | 54.3% | 9.01 | 12.8% | 99.7 | OK |
| 2 | Catacumbas Rotas | arena | elite | 43.4% | 10.57 | 9.5% | 112.6 | OK |
| 2 | Catacumbas Rotas | dungeon | boss | 33.5% | 13.60 | 7.7% | 130.7 | OK |
| 3 | Dunas de Onice | arena | normal | 56.3% | 8.68 | 15.1% | 99.7 | OK |
| 3 | Dunas de Onice | arena | elite | 44.1% | 9.94 | 10.5% | 113.6 | OK |
| 3 | Dunas de Onice | dungeon | boss | 35.9% | 12.39 | 8.3% | 131.5 | OK |
| 4 | Fortaleza del Eclipse | arena | normal | 56.4% | 9.05 | 13.7% | 99.8 | OK |
| 4 | Fortaleza del Eclipse | arena | elite | 39.6% | 10.77 | 8.1% | 114.0 | winrate bajo |
| 4 | Fortaleza del Eclipse | dungeon | boss | 39.2% | 13.56 | 8.6% | 130.3 | OK |
| 5 | Necropolis del Hierro | arena | normal | 58.3% | 8.99 | 14.3% | 98.3 | OK |
| 5 | Necropolis del Hierro | arena | elite | 43.5% | 10.88 | 9.1% | 112.1 | OK |
| 5 | Necropolis del Hierro | dungeon | boss | 33.7% | 13.39 | 7.4% | 130.4 | OK |
| 6 | Fisura Astral | arena | normal | 54.4% | 8.97 | 11.3% | 99.7 | OK |
| 6 | Fisura Astral | arena | elite | 48.0% | 10.54 | 9.5% | 112.3 | OK |
| 6 | Fisura Astral | dungeon | boss | 36.8% | 13.13 | 7.7% | 129.8 | OK |

## Resumen por tipo

| Tipo | Winrate medio | Turnos medios | Estado vs banda objetivo |
| --- | --- | --- | --- |
| normal | 55.4% | 8.67 | OK |
| elite | 45.7% | 10.23 | OK |
| boss | 35.4% | 12.81 | OK |

## Bandas objetivo usadas

- normal: winrate 50%-60%, turnos >= 6
- elite: winrate 40%-50%, turnos >= 8
- boss: winrate 30%-40%, turnos >= 10
