# Reporte de Balance de Combate (Simulado)

- Fecha: 2026-03-21T21:17:54.506Z
- Iteraciones por escenario: 120
- Escenarios: 7 zonas x (normal/elite/boss)
- Modos: normal+elite en arena, boss en dungeon

## Resultado por escenario

| ZonaId | Zona | Modo | Tipo | Winrate | Turnos medios | HP final medio | Threat medio | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | Distrito de Arena | arena | normal | 87.5% | 7.62 | 43.2% | 85.7 | winrate alto |
| 0 | Distrito de Arena | arena | elite | 77.5% | 8.93 | 40.2% | 97.4 | winrate alto |
| 0 | Distrito de Arena | dungeon | boss | 39.2% | 11.50 | 13.7% | 129.3 | OK |
| 1 | Bosque Sangriento | arena | normal | 57.5% | 7.44 | 18.5% | 98.0 | winrate bajo |
| 1 | Bosque Sangriento | arena | elite | 43.3% | 9.51 | 10.9% | 114.7 | OK |
| 1 | Bosque Sangriento | dungeon | boss | 28.3% | 11.13 | 7.3% | 136.0 | winrate bajo |
| 2 | Catacumbas Rotas | arena | normal | 41.7% | 8.97 | 9.8% | 102.1 | winrate bajo |
| 2 | Catacumbas Rotas | arena | elite | 33.3% | 10.89 | 5.2% | 114.1 | winrate bajo |
| 2 | Catacumbas Rotas | dungeon | boss | 9.2% | 12.32 | 1.6% | 138.6 | winrate bajo |
| 3 | Dunas de Onice | arena | normal | 51.7% | 8.62 | 11.8% | 101.2 | winrate bajo |
| 3 | Dunas de Onice | arena | elite | 31.7% | 9.87 | 7.4% | 116.3 | winrate bajo |
| 3 | Dunas de Onice | dungeon | boss | 20.0% | 11.67 | 4.2% | 136.5 | winrate bajo |
| 4 | Fortaleza del Eclipse | arena | normal | 57.5% | 9.13 | 13.4% | 100.5 | winrate bajo |
| 4 | Fortaleza del Eclipse | arena | elite | 47.5% | 10.68 | 12.4% | 111.0 | OK |
| 4 | Fortaleza del Eclipse | dungeon | boss | 28.3% | 13.61 | 6.0% | 132.0 | winrate bajo |
| 5 | Necropolis del Hierro | arena | normal | 64.2% | 8.42 | 19.2% | 96.2 | OK |
| 5 | Necropolis del Hierro | arena | elite | 63.3% | 10.43 | 16.1% | 107.7 | winrate alto |
| 5 | Necropolis del Hierro | dungeon | boss | 45.0% | 13.69 | 12.8% | 127.5 | winrate alto |
| 6 | Fisura Astral | arena | normal | 84.2% | 8.07 | 30.5% | 91.9 | winrate alto |
| 6 | Fisura Astral | arena | elite | 74.2% | 10.22 | 24.2% | 103.2 | winrate alto |
| 6 | Fisura Astral | dungeon | boss | 61.7% | 13.36 | 20.8% | 121.3 | winrate alto |

## Resumen por tipo

| Tipo | Winrate medio | Turnos medios | Estado vs banda objetivo |
| --- | --- | --- | --- |
| normal | 63.5% | 8.32 | OK |
| elite | 53.0% | 10.08 | OK |
| boss | 33.1% | 12.47 | OK |

## Bandas objetivo usadas

- normal: winrate 60%-65%, turnos >= 6
- elite: winrate 40%-55%, turnos >= 8
- boss: winrate 30%-40%, turnos >= 10
