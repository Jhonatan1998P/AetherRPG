export const TABS = [
  ['resumen', 'Resumen'],
  ['arena', 'Arena'],
  ['expedicion', 'Expediciones'],
  ['mazmorra', 'Mazmorras'],
  ['mercado', 'Mercado'],
  ['forja', 'Forja'],
  ['gremio', 'Gremio'],
  ['entrenamiento', 'Entrenamiento'],
  ['trabajo', 'Trabajo'],
  ['mascota', 'Mascota'],
  ['logros', 'Logros'],
  ['diario', 'Diario'],
  ['configuracion', 'Configuración'],
];

export const VIEWS = [
  ['resumen', 'Resumen'],
  ['perfil', 'Perfil'],
  ['inventario', 'Inventario'],
  ['arena', 'Arena'],
  ['expedicion', 'Expediciones'],
  ['mazmorra', 'Mazmorras'],
  ['mercado', 'Mercado'],
  ['forja', 'Forja'],
  ['gremio', 'Gremio'],
  ['entrenamiento', 'Entrenamiento'],
  ['trabajo', 'Trabajo'],
  ['mascota', 'Mascota'],
  ['logros', 'Logros'],
  ['diario', 'Diario'],
  ['configuracion', 'Configuración'],
];

export const VIEW_META = {
  resumen: { label: 'Resumen', short: 'Bucle principal', desc: 'Panel central del ciclo: contratos activos, estado de recursos y accesos rápidos para decidir el siguiente paso.', icon: 'home' },
  perfil: { label: 'Perfil', short: 'Gladiador', desc: 'Detalle de identidad, rango, equipo y estadísticas clave para evaluar tu rendimiento actual en combate.', icon: 'user' },
  inventario: { label: 'Inventario', short: 'Bolsa y equipo', desc: 'Gestiona mochila y equipo: filtra piezas, compara puntuación y aplica mejoras con mayor impacto.', icon: 'backpack' },
  arena: { label: 'Arena', short: 'Combate rápido', desc: 'Combate activo para generar oro, experiencia y botín; incluye modos normal, élite y rachas de aceleración.', icon: 'swords' },
  expedicion: { label: 'Expediciones', short: 'Temporizadores', desc: 'Progreso pasivo por rutas temporizadas; conviertes tiempo y recursos en botín mientras haces otras tareas.', icon: 'compass' },
  mazmorra: { label: 'Mazmorras', short: 'Pisos y jefes', desc: 'Incursiones por pisos con coste de entrada, amenaza creciente y recompensas de mayor techo al final de ruta.', icon: 'castle' },
  mercado: { label: 'Mercado', short: 'Compra y venta', desc: 'Rotación de equipo y consumibles con precios dinámicos; útil para cubrir huecos de build sin esperar drops.', icon: 'cart' },
  forja: { label: 'Forja', short: 'Creación y mejora', desc: 'Creación de piezas, mejora de equipo y ajustes avanzados de varianza para optimizar tu build.', icon: 'hammer' },
  gremio: { label: 'Gremio', short: 'Bonos pasivos', desc: 'Inversión estructural en edificios que otorgan mejoras permanentes y empujan tu economía de largo plazo.', icon: 'shield' },
  entrenamiento: { label: 'Entrenamiento', short: 'Atributos y habilidades', desc: 'Distribuye puntos en atributos y habilidades para alinear daño, defensa y ritmo con tu estilo de juego.', icon: 'book' },
  trabajo: { label: 'Trabajo', short: 'Ingresos seguros', desc: 'Actividades temporizadas de retorno estable para sostener oro y materiales cuando no quieres combate activo.', icon: 'briefcase' },
  mascota: { label: 'Mascota', short: 'Compañero', desc: 'Gestiona tu compañero activo, su progreso y bonos pasivos que complementan build y economía.', icon: 'paw' },
  logros: { label: 'Logros', short: 'Metaprogresión', desc: 'Hitos de progreso, recompensas de reliquia y ascensión para fortalecer la cuenta entre reinicios.', icon: 'trophy' },
  diario: { label: 'Diario', short: 'Registro', desc: 'Historial de eventos y resultados recientes para revisar decisiones, ritmo de farmeo y recompensas obtenidas.', icon: 'scroll' },
  configuracion: { label: 'Configuración', short: 'Preferencias', desc: 'Ajusta guardado, paginación y utilidades de cuenta para adaptar la experiencia a tu ritmo de juego.', icon: 'menu' },
};

export const VIEW_GROUPS = [
  { title: 'Principal', views: ['resumen', 'perfil', 'inventario', 'arena'] },
  { title: 'Aventura', views: ['expedicion', 'mazmorra'] },
  { title: 'Economía', views: ['mercado', 'forja', 'trabajo'] },
  { title: 'Progreso', views: ['gremio', 'entrenamiento', 'mascota', 'logros'] },
  { title: 'Registro', views: ['diario'] },
  { title: 'Sistema', views: ['configuracion'] },
];

export const MOBILE_PRIMARY_VIEWS = ['resumen', 'perfil', 'inventario', 'arena'];

export const MOBILE_OVERFLOW_VIEWS = VIEWS
  .map(([key]) => key)
  .filter((key) => !MOBILE_PRIMARY_VIEWS.includes(key));
