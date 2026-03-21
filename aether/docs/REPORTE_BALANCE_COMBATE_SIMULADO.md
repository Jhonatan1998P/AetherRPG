# Reporte de Balance de Combate (Simulado)

- Fecha: 2026-03-21T15:40:03.024Z
- Iteraciones por escenario: 220
- Escenarios: 7 zonas x (normal/elite/boss)
- Modos: normal+elite en arena, boss en dungeon

## Resultado por escenario

| ZonaId | Zona | Modo | Tipo | Winrate | Turnos medios | HP final medio | Threat medio | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | Distrito de Arena | arena | normal | 80.9% | 7.20 | 39.6% | 87.7 | winrate alto |
| 0 | Distrito de Arena | arena | elite | 79.1% | 9.26 | 40.0% | 97.6 | winrate alto |
| 0 | Distrito de Arena | dungeon | boss | 51.8% | 12.23 | 21.7% | 126.3 | winrate alto |
| 1 | Bosque Sangriento | arena | normal | 56.4% | 7.70 | 17.0% | 98.9 | winrate bajo |
| 1 | Bosque Sangriento | arena | elite | 39.5% | 9.45 | 10.5% | 115.7 | winrate bajo |
| 1 | Bosque Sangriento | dungeon | boss | 31.8% | 11.60 | 7.9% | 135.7 | OK |
| 2 | Catacumbas Rotas | arena | normal | 51.8% | 9.08 | 10.8% | 102.0 | winrate bajo |
| 2 | Catacumbas Rotas | arena | elite | 39.1% | 10.44 | 9.0% | 113.9 | winrate bajo |
| 2 | Catacumbas Rotas | dungeon | boss | 15.5% | 13.08 | 2.2% | 137.3 | winrate bajo |
| 3 | Dunas de Onice | arena | normal | 46.4% | 8.61 | 12.0% | 102.1 | winrate bajo |
| 3 | Dunas de Onice | arena | elite | 34.1% | 9.89 | 7.2% | 117.0 | winrate bajo |
| 3 | Dunas de Onice | dungeon | boss | 21.8% | 12.37 | 4.2% | 136.5 | winrate bajo |
| 4 | Fortaleza del Eclipse | arena | normal | 58.2% | 9.07 | 14.7% | 99.3 | winrate bajo |
| 4 | Fortaleza del Eclipse | arena | elite | 55.9% | 10.32 | 13.0% | 111.6 | winrate alto |
| 4 | Fortaleza del Eclipse | dungeon | boss | 36.8% | 13.90 | 6.8% | 132.0 | OK |
| 5 | Necropolis del Hierro | arena | normal | 68.2% | 8.69 | 21.3% | 95.2 | winrate alto |
| 5 | Necropolis del Hierro | arena | elite | 56.8% | 10.41 | 15.9% | 108.7 | winrate alto |
| 5 | Necropolis del Hierro | dungeon | boss | 37.7% | 12.86 | 10.1% | 128.1 | OK |
| 6 | Fisura Astral | arena | normal | 79.1% | 7.98 | 28.6% | 93.2 | winrate alto |
| 6 | Fisura Astral | arena | elite | 73.6% | 10.21 | 24.3% | 103.5 | winrate alto |
| 6 | Fisura Astral | dungeon | boss | 58.2% | 13.15 | 18.5% | 122.7 | winrate alto |

## Resumen por tipo

| Tipo | Winrate medio | Turnos medios | Estado vs banda objetivo |
| --- | --- | --- | --- |
| normal | 63.0% | 8.33 | OK |
| elite | 54.0% | 10.00 | OK |
| boss | 36.2% | 12.74 | OK |

## Bandas objetivo usadas

- normal: winrate 60%-65%, turnos >= 6
- elite: winrate 40%-55%, turnos >= 8
- boss: winrate 30%-40%, turnos >= 10
