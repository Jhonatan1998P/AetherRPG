# Reporte de Balance de Mascotas (Simulado)

- Fecha: 2026-03-22T21:28:02.840Z
- Metodo: estimacion determinista por coste/hora y curvas de XP.
- Nota: los resultados miden viabilidad economica relativa contra objetivos de progresion.

## Supuestos de ingreso por etapa

| Etapa | Nivel jugador | Ascension | Presupuesto para mascota | Ingreso/h relevante |
| --- | --- | --- | --- | --- |
| early | 8 | 0 | 45% | 8 fragmentos · 24 comida · 10.34 esencia · 2.03 sigilos · 0.31 catalizadores |
| mid | 18 | 1 | 40% | 12 fragmentos · 30 comida · 21.84 esencia · 9.24 sigilos · 2.84 catalizadores · 3.3 eco-fragmentos |
| late | 32 | 2 | 34% | 16 fragmentos · 36 comida · 35.98 esencia · 23.37 sigilos · 11.07 catalizadores · 14.76 eco-fragmentos |

## Tiempo de invocacion por ritual

| Etapa | Ritual | Coste actual | Tiempo estimado (min) | Objetivo (min) | Estado |
| --- | --- | --- | --- | --- | --- |
| early | wild | 2 fragmentos · 5 esencia · 1 comida | 29.0 | 20-65 | OK |
| early | bonded | 8 fragmentos · 12 esencia · 2 comida · 1 sigilos | 69.6 | 55-150 | OK |
| early | astral | 16 fragmentos · 20 esencia · 3 comida · 4 sigilos · 1 catalizadores | 193.5 | 120-240 | OK |
| mid | wild | 3 fragmentos · 6 esencia · 1 comida | 16.5 | 12-45 | OK |
| mid | bonded | 10 fragmentos · 15 esencia · 3 comida · 2 sigilos | 50.0 | 40-100 | OK |
| mid | astral | 19 fragmentos · 24 esencia · 4 comida · 5 sigilos · 2 catalizadores | 95.0 | 75-150 | OK |
| late | wild | 4 fragmentos · 8 esencia · 2 comida | 15.0 | 10-35 | OK |
| late | bonded | 12 fragmentos · 18 esencia · 4 comida · 3 sigilos · 1 catalizadores | 45.0 | 35-90 | OK |
| late | astral | 23 fragmentos · 29 esencia · 6 comida · 7 sigilos · 2 catalizadores · 1 eco-fragmentos | 86.3 | 70-140 | OK |

## Tiempo de progreso por nivel de mascota

| Etapa | Caso | Mascota | Objetivo | Tiempo estimado (min) | Feeds totales | Coste agregado | Rango objetivo | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| early | common10 | Lobo de Guerra | Lv 10 | 194.4 | 35 | 35 comida | 90-220 | OK |
| mid | common10 | Lobo de Guerra | Lv 10 | 185.0 | 37 | 37 comida | 90-220 | OK |
| mid | rare20 | Fenix de Ceniza | Lv 20 | 600.0 | 120 | 120 comida | 420-760 | OK |
| late | rare20 | Fenix de Ceniza | Lv 20 | 612.7 | 125 | 125 comida | 420-760 | OK |
| late | epic30 | Grifo Solar | Lv 30 | 1279.5 | 261 | 261 comida · 28 esencia | 1100-1700 | OK |
| late | mythic30 | Draco del Oraculo | Lv 30 | 1485.5 | 274 | 274 comida · 58 esencia | 1300-1900 | OK |

## Sensibilidad (+/-10%)

| Escenario | Checks OK | Pass rate global | Pass ritual | Pass progreso | Desvio promedio | Desvio maximo |
| --- | --- | --- | --- | --- | --- | --- |
| base | 15/15 | 100.0% | 100.0% | 100.0% | 0.00% | 0.00% |
| income -10% | 15/15 | 100.0% | 100.0% | 100.0% | 0.00% | 0.00% |
| income +10% | 15/15 | 100.0% | 100.0% | 100.0% | 0.00% | 0.00% |
| cost -10% | 15/15 | 100.0% | 100.0% | 100.0% | 0.00% | 0.00% |
| cost +10% | 15/15 | 100.0% | 100.0% | 100.0% | 0.00% | 0.00% |
| stress (income -10%, cost +10%) | 15/15 | 100.0% | 100.0% | 100.0% | 0.00% | 0.00% |
| best (income +10%, cost -10%) | 15/15 | 100.0% | 100.0% | 100.0% | 0.00% | 0.00% |
