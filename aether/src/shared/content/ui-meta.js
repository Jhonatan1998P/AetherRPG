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
];

export const VIEW_META = {
  resumen: { label: 'Resumen', short: 'Bucle principal', desc: 'Vista rápida del ciclo principal, contratos y accesos clave.', icon: 'home' },
  perfil: { label: 'Perfil', short: 'Gladiador', desc: 'Identidad, equipo, rango, zona y estadísticas del héroe.', icon: 'user' },
  inventario: { label: 'Inventario', short: 'Bolsa y equipo', desc: 'Gestiona la mochila, filtra piezas y equipa mejoras.', icon: 'backpack' },
  arena: { label: 'Arena', short: 'Combate rápido', desc: 'Duelo instantáneo, élites y rachas de farmeo.', icon: 'swords' },
  expedicion: { label: 'Expediciones', short: 'Temporizadores', desc: 'Rutas en segundo plano con botín y materiales.', icon: 'compass' },
  mazmorra: { label: 'Mazmorras', short: 'Pisos y jefes', desc: 'Runs por pisos con jefe y cofre.', icon: 'castle' },
  mercado: { label: 'Mercado', short: 'Compra y venta', desc: 'Rotación de equipo y consumibles.', icon: 'cart' },
  forja: { label: 'Forja', short: 'Creación y mejora', desc: 'Creación de piezas y mejoras directas.', icon: 'hammer' },
  gremio: { label: 'Gremio', short: 'Bonos pasivos', desc: 'Mejoras permanentes de la partida.', icon: 'shield' },
  entrenamiento: { label: 'Entrenamiento', short: 'Atributos y habilidades', desc: 'Atributos, habilidades y especialización.', icon: 'book' },
  trabajo: { label: 'Trabajo', short: 'Ingresos seguros', desc: 'Ocupaciones temporizadas con retorno estable.', icon: 'briefcase' },
  mascota: { label: 'Mascota', short: 'Compañero', desc: 'Bonos únicos y progresión auxiliar.', icon: 'paw' },
  logros: { label: 'Logros', short: 'Metaprogresión', desc: 'Hitos, reliquias y ascensión.', icon: 'trophy' },
  diario: { label: 'Diario', short: 'Registro', desc: 'Historial de eventos y actividad reciente.', icon: 'scroll' },
};

export const VIEW_GROUPS = [
  { title: 'Principal', views: ['resumen', 'perfil', 'inventario', 'arena'] },
  { title: 'Aventura', views: ['expedicion', 'mazmorra'] },
  { title: 'Economía', views: ['mercado', 'forja', 'trabajo'] },
  { title: 'Progreso', views: ['gremio', 'entrenamiento', 'mascota', 'logros'] },
  { title: 'Registro', views: ['diario'] },
];

export const MOBILE_PRIMARY_VIEWS = ['resumen', 'perfil', 'inventario', 'arena'];

export const MOBILE_OVERFLOW_VIEWS = VIEWS
  .map(([key]) => key)
  .filter((key) => !MOBILE_PRIMARY_VIEWS.includes(key));
