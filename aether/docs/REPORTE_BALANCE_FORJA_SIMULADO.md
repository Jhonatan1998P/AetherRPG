# Reporte de Balance de Forja (Simulado)

- Fecha: 2026-03-22T19:46:03.498Z
- Corridas por escenario: 18
- Escenarios: early/mid/late x (1h, 4h, 8h, 20h)
- Objetivos usados: tiempos de hitos Fase 5 + FORGE_ECONOMY_TARGETS

## Resultado por escenario

| Stage | Ventana | 1ra mejora (min) | 1ra especializacion (min) | Favorable | Neutral | Unfavorable | Frustracion (rachas>=4) | Oro/h neto | Materiales/h neto | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| early | 1h | 0.0 | 0.0 | 39.0% | 59.6% | 1.4% | 0.0% | -520 | -91.9 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| early | 4h | 0.0 | 0.0 | 56.6% | 41.2% | 2.2% | 0.0% | 44 | -17.8 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| early | 8h | 0.0 | 0.0 | 57.2% | 39.9% | 2.9% | 0.0% | 282 | -6.4 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| early | 20h | 0.0 | 0.0 | 50.8% | 47.6% | 1.5% | 0.0% | 560 | -0.4 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| mid | 1h | 0.0 | 0.0 | 44.4% | 53.6% | 2.0% | 0.0% | -1684 | -86.8 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| mid | 4h | 0.0 | 0.0 | 38.5% | 60.0% | 1.5% | 0.0% | -348 | -15.3 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| mid | 8h | 0.0 | 0.0 | 34.6% | 63.7% | 1.8% | 0.0% | 56 | -0.5 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| mid | 20h | 0.0 | 0.0 | 26.2% | 72.6% | 1.2% | 0.0% | 688 | 6.5 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| late | 1h | 0.0 | 0.0 | 36.2% | 61.3% | 2.5% | 0.0% | -4282 | -83.1 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| late | 4h | 0.0 | 0.0 | 28.4% | 69.7% | 1.8% | 0.0% | -1110 | 1.9 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| late | 8h | 0.0 | 0.0 | 25.7% | 72.8% | 1.5% | 0.0% | -550 | 16.4 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| late | 20h | 0.0 | 0.0 | 23.0% | 76.0% | 1.0% | 0.1% | -207 | 22.4 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |

## Mezcla de acciones observada

- early/1h -> craft:24.3% | enhance:25.2% | reforge:5.0% | transcend:0.0% | stabilize:0.0% | convert:45.5%
- early/4h -> craft:27.3% | enhance:26.0% | reforge:14.6% | transcend:0.0% | stabilize:5.2% | convert:26.8%
- early/8h -> craft:36.3% | enhance:22.7% | reforge:13.4% | transcend:0.0% | stabilize:4.8% | convert:22.8%
- early/20h -> craft:46.0% | enhance:15.5% | reforge:10.5% | transcend:0.0% | stabilize:3.9% | convert:24.0%
- mid/1h -> craft:23.9% | enhance:13.3% | reforge:14.8% | transcend:0.0% | stabilize:5.7% | convert:42.4%
- mid/4h -> craft:18.7% | enhance:14.3% | reforge:13.7% | transcend:0.0% | stabilize:3.4% | convert:49.9%
- mid/8h -> craft:18.2% | enhance:14.8% | reforge:10.5% | transcend:0.0% | stabilize:3.7% | convert:52.8%
- mid/20h -> craft:22.4% | enhance:8.9% | reforge:4.8% | transcend:0.2% | stabilize:3.5% | convert:60.2%
- late/1h -> craft:8.4% | enhance:11.8% | reforge:15.3% | transcend:0.0% | stabilize:9.7% | convert:54.7%
- late/4h -> craft:6.1% | enhance:11.7% | reforge:11.7% | transcend:0.0% | stabilize:6.7% | convert:63.9%
- late/8h -> craft:7.2% | enhance:9.9% | reforge:7.8% | transcend:0.0% | stabilize:8.7% | convert:66.4%
- late/20h -> craft:8.0% | enhance:6.2% | reforge:4.4% | transcend:0.0% | stabilize:12.9% | convert:68.5%

## Criterios de lectura

- first-upgrade OK: entre 10 y 20 minutos.
- specialization OK: entre 40 y 80 minutos.
- frustration OK: <= 10% de intentos de riesgo caen en rachas largas.
- gold/h y mats/h OK: dentro de banda FORGE_ECONOMY_TARGETS por etapa.
