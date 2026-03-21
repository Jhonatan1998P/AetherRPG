# Plan de 5 Fases para Profundizar el Sistema de Forja y Mejoras

## Objetivo General

Disenar un sistema de forja y mejoras de objetos que sea, al mismo tiempo:

- mas profundo (decisiones reales de build y rutas de progresion)
- mas gratificante (hitos claros, recompensas legibles, menos frustracion RNG)
- mas intuitivo (reglas visibles, feedback claro, UX consistente)
- mas exigente en esfuerzo (costes, especializacion y mastery a largo plazo)

Sin romper el equilibrio con:

- `aether/docs/PLAN_REFACTORIZACION_SISTEMA_ITEMS.md`
- `aether/docs/PLAN_REFACTORIZACION_SISTEMA_ENEMIGOS.md`

---

## Principios de Balance (aplican a las 5 fases)

1. Riesgo real debe mapear a recompensa real.
2. El esfuerzo debe sentirse valioso, nunca punitivo.
3. El sistema debe explicar sus reglas antes de pedir decisiones complejas.
4. La profundidad debe venir de elecciones, no de ruido RNG.
5. Ninguna ruta (combate, mercado, forja) debe invalidar por completo a las otras.

---

## Fase 1 - Fundacion del Sistema: contratos, capas de progreso y reglas canonicas

### Objetivo

Crear el esqueleto matematico y de datos para que la forja/mejora sea escalable, tuneable y compatible con `ItemPipeline V2` y `EnemyPipeline`.

### Que hacer (paso a paso)

1. Definir modelo canonico de progresion de forja por etapas:
   - `Early` (inicio): craft base y mejoras simples.
   - `Mid` (medio): reforge, especializacion y optimizacion.
   - `Late` (tardio): transcend, chase de excelencia y optimizacion fina.

2. Definir taxonomia de acciones de forja:
   - `craftItem`: crear item nuevo con presupuesto controlado.
   - `enhanceItem`: subir potencia incremental (lineal y legible).
   - `reforgeItem`: redistribuir stats dentro de presupuesto.
   - `transcendItem`: evolucionar rareza con requisitos estrictos.
   - `stabilizeItem` (nuevo): reducir varianza negativa en items clave.

3. Especificar un presupuesto unificado para forja:
   - `forgeBudget = f(itemLevel, rarity, tier, qualityRoll, provenanceRisk)`.
   - `provenanceRisk` usa datos de enemigo (`threatScoreAtDrop`) para premiar loot obtenido en mayor riesgo real.

4. Definir limites globales de poder por slot/rareza/nivel:
   - impedir que un objeto forjado supere el techo esperado de `STAT_BUDGETS`.
   - garantizar que un drop nuevo relevante pueda competir contra objetos mejorados.

5. Normalizar costes por familia de recursos:
   - base: `iron`, `wood`.
   - avanzada: `essence`.
   - endgame: `sigils`, `echoShards`.
   - agregar `catalysts` (nuevo) como cuello de botella de alto valor para rutas late.

6. Definir reglas anti-frustracion base:
   - sin destruccion total de item por fallo.
   - degradacion parcial acotada.
   - opcion de proteccion pagada (consumo de recurso premium no monetario).

### Entregables

- documento de formulas y caps de forja.
- tabla de costes por accion y etapa de progreso.
- matriz de compatibilidad con `power`, `economyValue`, `craftValue`, `prestige`.

### Criterios de salida

- ningun flujo de forja puede exceder caps de poder definidos.
- todos los costes y resultados pueden representarse en UI sin ambiguedad.
- compatibilidad declarada con contracts de items y enemigos.

---

## Fase 2 - Profundidad de decisiones: rutas de especializacion y mastery

### Objetivo

Transformar la forja de un sistema de "tirar dados" a un sistema de "planificar builds" con decisiones de corto, medio y largo plazo.

### Que hacer (paso a paso)

1. Introducir rutas de especializacion de forja (escuelas):
   - `Arsenal` (ofensivo), `Bastion` (defensivo), `Arcanum` (hibrido/utilidad).
   - cada escuela da ventajas, costes y riesgos distintos.

2. Implementar arbol de maestria de forja por cuenta/personaje:
   - nodos de eficiencia (`-coste`), control (`+precision de outcome`) y potencia (`+techo situacional`).
   - coste creciente con retornos decrecientes para evitar runaway scaling.

3. Crear sistema de "afinidad de objeto":
   - cada item acumula afinidad por uso en combate.
   - alta afinidad reduce coste de reforja y mejora estabilidad de mejoras.
   - objetivo: que jugar combates importe tanto como farmear materiales.

4. Implementar reforja con decisiones mutuamente excluyentes:
   - bloquear 1 stat al reforge (pagando recurso extra).
   - reroll parcial de subset de stats (mas caro, menos varianza).
   - reroll total (mas barato, mayor varianza).

5. Introducir "resonancias de set" suaves:
   - pequenos bonus por coherencia de arquetipo, nunca bonus obligatorios.
   - evitar meta unica; mantener al menos 3 rutas de build viables.

6. Integrar esfuerzo con riesgo de combate:
   - bosses/elite con `threatScore` alto otorgan materiales de alta calidad para rutas profundas.
   - encuentros de bajo riesgo no deben financiar eficientemente crafting endgame.

### Entregables

- diseno de escuelas de forja y arbol de maestria.
- especificacion tecnica de afinidad y resonancia.
- tabla de decisiones de reforja con coste/beneficio/varianza.

### Criterios de salida

- el jugador siempre tiene al menos 1 decision significativa por sesion.
- no existe una unica ruta dominante de optimizacion.
- progreso por maestria se siente en ventanas de 30-60 minutos.

---

## Fase 3 - Recompensa y friccion justa: loop gratificante sin economia rota

### Objetivo

Elevar la satisfaccion del sistema sin disparar inflacion ni crear exploits de buy/craft/sell.

### Que hacer (paso a paso)

1. Diseñar loop de recompensa por capas:
   - micro (cada intento): feedback inmediato de avance o aprendizaje.
   - meso (cada sesion): desbloqueo de mejoras relevantes.
   - macro (varias sesiones): hitos visibles (`epic`, `mythic`, transcend exitoso).

2. Implementar pity inteligente para forja/mejora:
   - contador por tipo de accion (enhance/reforge/transcend).
   - garantia progresiva de mejora cualitativa tras secuencia de outcomes pobres.
   - reinicio parcial, no total, para evitar abuso.

3. Definir costes dinamicos con guardas anti-exploit:
   - subir coste marginal ante re-roll encadenado del mismo item.
   - enfriamiento suave de mercados para impedir arbitraje inmediato.
   - monitor de ROI de loops `craft->sell` y `buy->salvage`.

4. Introducir materiales de conversion y reciclaje avanzado:
   - reciclar items en `craftValue` segun rareza, afijos y estado de upgrade.
   - convertir excedentes de bajo tier a recursos de valor medio con perdida controlada.

5. Configurar umbrales de economia sana:
   - oro neto/hora objetivo por etapa.
   - materiales netos/hora objetivo por etapa.
   - desviaciones gatillan retuning automatico de tablas y costes.

6. Sincronizar con plan de enemigos:
   - `riskFactor` y `threatScore` deben impactar calidad de insumos de forja.
   - mayor amenaza = mayor expectativa de progreso real de crafting.

### Entregables

- matriz de recompensas por accion de forja.
- sistema pity de forja documentado.
- tablero de guardas economicas y alertas de exploit.

### Criterios de salida

- no hay loops reproducibles de ganancia infinita.
- el esfuerzo alto entrega progreso visible sin castigar en exceso.
- la forja no reemplaza por completo ni al loot ni al mercado.

---

## Fase 4 - UX y claridad operativa: profundidad entendible en pantalla

### Objetivo

Hacer que un sistema complejo sea intuitivo: que el jugador entienda que puede hacer, cuanto cuesta, que riesgo asume y que gana.

### Que hacer (paso a paso)

1. Crear pantalla de forja por capas de informacion:
   - capa basica: accion, coste total, resultado probable.
   - capa avanzada: rango de outcomes, caps, pity, impacto en build score.

2. Implementar preview completo antes de confirmar:
   - delta de stats vs item equipado.
   - variacion esperada de `combatScore`, `marketScore`, `buildScore`.
   - probabilidad de escenarios (favorable/neutral/desfavorable).

3. Mostrar progreso de mastery y afinidad:
   - barra de progreso por escuela.
   - bonus activos por maestria.
   - beneficios por afinidad del item.

4. Incluir explicadores contextuales cortos:
   - tooltips de formulas simplificadas.
   - advertencias de caps suaves y retornos decrecientes.
   - mensajes de causa en outcomes negativos para reducir sensacion de injusticia.

5. Diseñar feedback de hitos:
   - celebraciones para primer `epic`, `mythic`, primera transcend exitosa.
   - registro historico de logros de forja para reforzar motivacion.

6. Validar usabilidad mobile/desktop:
   - jerarquia visual clara.
   - lectura de numeros grandes sin ruido.
   - flujo de confirmacion sin errores de toque/click.

### Entregables

- rediseño UX de forja/mejora con estados y mensajes.
- especificacion de componentes de preview y comparacion.
- checklist de accesibilidad y legibilidad.

### Criterios de salida

- un jugador nuevo entiende el flujo base en menos de 3 minutos.
- un jugador avanzado puede tomar decisiones optimizadas sin salir de la pantalla.
- disminuyen intentos "a ciegas" y errores de confirmacion.

---

## Fase 5 - Telemetria, tuning continuo y cierre de balance

### Objetivo

Convertir la forja/mejora en un sistema vivo, ajustable por datos reales y estable a largo plazo.

### Que hacer (paso a paso)

1. Instrumentar telemetria de forja de extremo a extremo:
   - tasa de uso por accion (`craft`, `enhance`, `reforge`, `transcend`, `stabilize`).
   - coste medio por mejora util lograda.
   - tiempo a hitos de forja por segmento de jugador.
   - ratio de outcomes favorables/neutros/desfavorables.

2. Conectar telemetria de combate + items + economia:
   - correlacion entre `threatScore` y progreso real de forja.
   - impacto de forja en winrate/turnos por tipo de encuentro.
   - deteccion de fuentes/sumideros desbalanceados.

3. Definir objetivos cuantitativos de calidad del sistema:
   - tiempo medio a primera mejora "sentida": 10-20 minutos.
   - tiempo medio a primera decision de especializacion relevante: 40-80 minutos.
   - tasa de frustracion (rachas negativas largas) por debajo de umbral acordado.

4. Ejecutar ciclos de retuning por ventanas:
   - ciclo corto (diario): hotfix de exploits o outliers severos.
   - ciclo medio (semanal): ajustes de costes/probabilidades por segmento.
   - ciclo largo (version): recalibracion de caps y curvas globales.

5. Cerrar con QA funcional + QA de balance:
   - pruebas de flujo completo en early/mid/late.
   - simulaciones 1h, 4h, 8h, 20h para economia y progresion.
   - validacion de compatibilidad de saves (`state.version`, migraciones idempotentes).

6. Congelar parametros y preparar gobernanza:
   - versionado de tablas de forja.
   - protocolo de cambios para evitar regresiones de balance.
   - dashboard de salud del sistema para seguimiento continuo.

### Entregables

- dashboard de metricas integrado (forja + items + enemigos + economia).
- reporte de tuning inicial con decisiones y rationale.
- paquete de QA y criterios Go/No-Go de despliegue.

### Criterios de salida

- sistema estable sin exploits dominantes.
- progresion profunda y comprensible en corto/medio/largo plazo.
- equilibrio sostenido con los planes de items y enemigos.

---

## Matriz de Equilibrio Cruzado (Forja vs Items vs Enemigos)

Usar esta matriz como control transversal en cada release:

1. Forja no invalida drops de combate.
2. Drops de alto riesgo aceleran forja, pero no rompen economia.
3. Mercado sigue siendo opcion tactica, no atajo absoluto.
4. Mejoras de item no trivializan bosses ni colapsan TTK objetivo.
5. Caps y retornos decrecientes frenan power creep extremo.

---

## Orden de Ejecucion Recomendado

1. Fase 1 y Fase 2 (base y decisiones).
2. Fase 3 (recompensa y economia).
3. Fase 4 (UX de claridad y adopcion).
4. Fase 5 (telemetria, retuning y cierre).

No avanzar de fase sin cumplir criterios de salida de la fase actual.
