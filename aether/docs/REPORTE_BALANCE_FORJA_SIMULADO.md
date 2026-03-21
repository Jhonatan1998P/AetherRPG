# Reporte de Balance de Forja (Simulado)

- Fecha: 2026-03-21T21:17:33.245Z
- Corridas por escenario: 18
- Escenarios: early/mid/late x (1h, 4h, 8h, 20h)
- Objetivos usados: tiempos de hitos Fase 5 + FORGE_ECONOMY_TARGETS

## Resultado por escenario

| Stage | Ventana | 1ra mejora (min) | 1ra especializacion (min) | Favorable | Neutral | Unfavorable | Frustracion (rachas>=4) | Oro/h neto | Materiales/h neto | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| early | 1h | 0.0 | 0.0 | 40.7% | 56.9% | 2.4% | 0.0% | -524 | -95.2 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| early | 4h | 0.0 | 0.0 | 57.1% | 40.8% | 2.1% | 0.0% | 41 | -17.6 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| early | 8h | 0.0 | 0.0 | 53.1% | 44.9% | 2.0% | 0.0% | 347 | -6.9 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| early | 20h | 0.0 | 0.0 | 52.5% | 46.1% | 1.5% | 0.0% | 581 | -0.3 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| mid | 1h | 0.0 | 0.0 | 37.5% | 61.1% | 1.4% | 0.0% | -1647 | -95.2 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| mid | 4h | 0.0 | 0.0 | 37.7% | 60.8% | 1.5% | 0.0% | -335 | -14.8 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| mid | 8h | 0.0 | 0.0 | 36.0% | 61.9% | 2.1% | 0.0% | 35 | -0.8 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| mid | 20h | 0.0 | 0.0 | 26.5% | 72.0% | 1.4% | 0.0% | 633 | 6.7 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| late | 1h | 0.0 | 0.0 | 35.1% | 64.3% | 0.7% | 0.0% | -4091 | -85.1 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| late | 4h | 0.0 | 0.0 | 31.3% | 67.2% | 1.5% | 0.0% | -1110 | 2.9 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| late | 8h | 0.0 | 0.0 | 24.6% | 73.8% | 1.6% | 0.0% | -507 | 16.5 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |
| late | 20h | 0.0 | 0.0 | 21.6% | 77.1% | 1.3% | 0.2% | -216 | 22.2 | first-upgrade OUT, specialization OUT, frustration OK, gold/h OUT, mats/h OUT |

## Mezcla de acciones observada

- early/1h -> craft:28.4% | enhance:20.4% | reforge:6.0% | transcend:0.0% | stabilize:0.0% | convert:45.3%
- early/4h -> craft:28.4% | enhance:26.5% | reforge:13.1% | transcend:0.0% | stabilize:6.6% | convert:25.4%
- early/8h -> craft:36.7% | enhance:21.5% | reforge:11.0% | transcend:0.0% | stabilize:6.1% | convert:24.6%
- early/20h -> craft:44.0% | enhance:16.1% | reforge:9.8% | transcend:0.0% | stabilize:3.9% | convert:26.1%
- mid/1h -> craft:22.1% | enhance:14.1% | reforge:10.7% | transcend:0.0% | stabilize:5.2% | convert:47.9%
- mid/4h -> craft:16.7% | enhance:16.1% | reforge:13.7% | transcend:0.0% | stabilize:3.9% | convert:49.6%
- mid/8h -> craft:19.1% | enhance:13.2% | reforge:11.6% | transcend:0.0% | stabilize:3.5% | convert:52.5%
- mid/20h -> craft:21.7% | enhance:9.6% | reforge:5.5% | transcend:0.3% | stabilize:3.2% | convert:59.7%
- late/1h -> craft:5.9% | enhance:15.2% | reforge:12.4% | transcend:0.0% | stabilize:9.0% | convert:57.5%
- late/4h -> craft:5.5% | enhance:13.6% | reforge:10.4% | transcend:0.0% | stabilize:8.6% | convert:61.9%
- late/8h -> craft:7.2% | enhance:9.0% | reforge:7.6% | transcend:0.0% | stabilize:8.3% | convert:67.9%
- late/20h -> craft:8.1% | enhance:6.0% | reforge:3.9% | transcend:0.0% | stabilize:13.5% | convert:68.5%

## Criterios de lectura

- first-upgrade OK: entre 10 y 20 minutos.
- specialization OK: entre 40 y 80 minutos.
- frustration OK: <= 10% de intentos de riesgo caen en rachas largas.
- gold/h y mats/h OK: dentro de banda FORGE_ECONOMY_TARGETS por etapa.
