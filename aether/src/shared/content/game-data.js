export const SLOT_ORDER = ['weapon', 'offhand', 'helm', 'chest', 'gloves', 'boots', 'ring', 'amulet'];

export const SLOT_NAMES = {
  weapon: 'Arma',
  offhand: 'Mano izquierda',
  helm: 'Casco',
  chest: 'Armadura',
  gloves: 'Guantes',
  boots: 'Botas',
  ring: 'Anillo',
  amulet: 'Amuleto'
};

export const RANKS = [
  { title: 'Novato del Bronce', min: 0 },
  { title: 'Aspirante de Arena', min: 90 },
  { title: 'Centurion de Cristal', min: 220 },
  { title: 'Campeon del Foro', min: 420 },
  { title: 'Idolo de la Ciudad', min: 720 },
  { title: 'Verdugo Solar', min: 1100 },
  { title: 'Coloso Astral', min: 1600 },
  { title: 'Inmortal del Panteon', min: 2300 },
];

export const RARITIES = [
  {
    key: 'common',
    name: 'Comun',
    order: 0,
    mult: 1,
    affixes: 0,
    valueBase: 20,
    value: 20,
    dropWeightBySource: { arena: 52, dungeon: 37, expedition: 44, market: 39, forge: 24 },
    salvageProfile: { iron: 1, wood: 1, essence: 0, sigils: 0, echoShards: 0, affixWeight: 0.06, upgradeWeight: 0.05 },
    upgradeCaps: { enhance: 5, reforge: 2, transcend: false },
    milestone: false,
  },
  {
    key: 'uncommon',
    name: 'Infrecuente',
    order: 1,
    mult: 1.16,
    affixes: 1,
    valueBase: 48,
    value: 48,
    dropWeightBySource: { arena: 28, dungeon: 26, expedition: 29, market: 30, forge: 32 },
    salvageProfile: { iron: 2, wood: 1, essence: 0, sigils: 0, echoShards: 0, affixWeight: 0.08, upgradeWeight: 0.07 },
    upgradeCaps: { enhance: 7, reforge: 3, transcend: true },
    milestone: false,
  },
  {
    key: 'rare',
    name: 'Raro',
    order: 2,
    mult: 1.44,
    affixes: 2,
    valueBase: 124,
    value: 124,
    dropWeightBySource: { arena: 12, dungeon: 18, expedition: 15, market: 18, forge: 27 },
    salvageProfile: { iron: 3, wood: 2, essence: 1, sigils: 0, echoShards: 0, affixWeight: 0.11, upgradeWeight: 0.09 },
    upgradeCaps: { enhance: 9, reforge: 4, transcend: true },
    milestone: false,
  },
  {
    key: 'epic',
    name: 'Epico',
    order: 3,
    mult: 1.82,
    affixes: 3,
    valueBase: 332,
    value: 332,
    dropWeightBySource: { arena: 5, dungeon: 10, expedition: 7, market: 9, forge: 12 },
    salvageProfile: { iron: 5, wood: 3, essence: 2, sigils: 1, echoShards: 0, affixWeight: 0.13, upgradeWeight: 0.1 },
    upgradeCaps: { enhance: 11, reforge: 5, transcend: true },
    milestone: true,
  },
  {
    key: 'legendary',
    name: 'Legendario',
    order: 4,
    mult: 2.3,
    affixes: 4,
    valueBase: 890,
    value: 890,
    dropWeightBySource: { arena: 2.4, dungeon: 5.1, expedition: 3.1, market: 3.5, forge: 4.4 },
    salvageProfile: { iron: 7, wood: 4, essence: 4, sigils: 2, echoShards: 1, affixWeight: 0.15, upgradeWeight: 0.11 },
    upgradeCaps: { enhance: 12, reforge: 6, transcend: true },
    milestone: false,
  },
  {
    key: 'mythic',
    name: 'Mitico',
    order: 5,
    mult: 2.98,
    affixes: 5,
    valueBase: 2320,
    value: 2320,
    dropWeightBySource: { arena: 0.55, dungeon: 2.1, expedition: 1.05, market: 0.9, forge: 1.2 },
    salvageProfile: { iron: 9, wood: 5, essence: 6, sigils: 4, echoShards: 2, affixWeight: 0.17, upgradeWeight: 0.12 },
    upgradeCaps: { enhance: 14, reforge: 7, transcend: true },
    milestone: true,
  },
  {
    key: 'ascendant',
    name: 'Ascendente',
    order: 6,
    mult: 3.62,
    affixes: 6,
    valueBase: 5480,
    value: 5480,
    dropWeightBySource: { arena: 0.08, dungeon: 0.35, expedition: 0.18, market: 0.06, forge: 0.15 },
    salvageProfile: { iron: 12, wood: 6, essence: 9, sigils: 7, echoShards: 4, affixWeight: 0.2, upgradeWeight: 0.14 },
    upgradeCaps: { enhance: 16, reforge: 8, transcend: false },
    milestone: false,
  },
];

export const LOOT_SOURCES = ['arena', 'dungeon', 'expedition', 'market', 'forge'];

export const ITEM_ARCHETYPES = {
  weapon: {
    slot: 'weapon',
    role: 'offensive',
    primaryStats: ['attack', 'crit', 'speed'],
    secondaryStats: ['lifesteal', 'hp'],
    statWeights: { attack: 1.35, crit: 0.78, speed: 0.7, lifesteal: 0.48, hp: 0.36, defense: 0.25 },
    qualityBias: 1.12,
  },
  offhand: {
    slot: 'offhand',
    role: 'hybrid',
    primaryStats: ['defense', 'hp', 'block'],
    secondaryStats: ['attack', 'crit'],
    statWeights: { defense: 1.22, hp: 0.92, block: 0.68, attack: 0.62, crit: 0.3, speed: 0.38 },
    qualityBias: 1,
  },
  helm: {
    slot: 'helm',
    role: 'defensive',
    primaryStats: ['defense', 'hp'],
    secondaryStats: ['crit', 'speed'],
    statWeights: { defense: 1.08, hp: 0.88, crit: 0.34, speed: 0.3, block: 0.46 },
    qualityBias: 0.98,
  },
  chest: {
    slot: 'chest',
    role: 'defensive',
    primaryStats: ['hp', 'defense'],
    secondaryStats: ['attack', 'block'],
    statWeights: { hp: 1.26, defense: 1.14, attack: 0.42, block: 0.55, lifesteal: 0.21 },
    qualityBias: 1.03,
  },
  gloves: {
    slot: 'gloves',
    role: 'offensive',
    primaryStats: ['attack', 'crit', 'lifesteal'],
    secondaryStats: ['speed', 'hp'],
    statWeights: { attack: 1.04, crit: 0.74, lifesteal: 0.56, speed: 0.58, hp: 0.32, defense: 0.26 },
    qualityBias: 1.05,
  },
  boots: {
    slot: 'boots',
    role: 'hybrid',
    primaryStats: ['speed', 'dodge'],
    secondaryStats: ['defense', 'hp'],
    statWeights: { speed: 1.1, dodge: 0.76, defense: 0.46, hp: 0.42, crit: 0.33, attack: 0.36 },
    qualityBias: 1,
  },
  ring: {
    slot: 'ring',
    role: 'offensive',
    primaryStats: ['crit', 'attack'],
    secondaryStats: ['speed', 'dodge'],
    statWeights: { crit: 0.95, attack: 0.78, speed: 0.56, dodge: 0.5, hp: 0.35, defense: 0.28 },
    qualityBias: 1.08,
  },
  amulet: {
    slot: 'amulet',
    role: 'hybrid',
    primaryStats: ['hp', 'attack', 'defense'],
    secondaryStats: ['block', 'lifesteal'],
    statWeights: { hp: 1.02, attack: 0.82, defense: 0.7, block: 0.56, lifesteal: 0.44, crit: 0.34 },
    qualityBias: 1.04,
  },
};

const SLOT_BUDGET_FACTOR = {
  weapon: 1.24,
  offhand: 1.08,
  helm: 0.98,
  chest: 1.16,
  gloves: 0.94,
  boots: 0.96,
  ring: 0.92,
  amulet: 1,
};

const RARITY_BUDGET_FACTOR = {
  common: 0.92,
  uncommon: 1.04,
  rare: 1.22,
  epic: 1.46,
  legendary: 1.76,
  mythic: 2.15,
  ascendant: 2.62,
};

export const STAT_BUDGETS = Object.fromEntries(
  SLOT_ORDER.map((slot) => {
    const slotMap = {};
    const slotFactor = SLOT_BUDGET_FACTOR[slot] || 1;
    for (let level = 1; level <= 90; level += 1) {
      const levelBase = (12 + Math.pow(level, 1.2) * 4.8) * slotFactor;
      slotMap[level] = Object.fromEntries(
        Object.entries(RARITY_BUDGET_FACTOR).map(([rarityKey, rarityFactor]) => [
          rarityKey,
          Math.round(levelBase * rarityFactor),
        ])
      );
    }
    return [slot, slotMap];
  })
);

export const ITEM_BASES = {
  weapon: [
    { name: 'Gladius', stats: { attack: 7, speed: 1 } },
    { name: 'Hacha de Coliseo', stats: { attack: 9, defense: 1 } },
    { name: 'Tridente del Foro', stats: { attack: 8, crit: 0.02 } },
    { name: 'Espada Curva', stats: { attack: 8, speed: 2 } },
    { name: 'Lanza Escarlata', stats: { attack: 10, crit: 0.01 } },
  ],
  offhand: [
    { name: 'Escudo de Torre', stats: { defense: 7, hp: 18, block: 0.03 } },
    { name: 'Parma Ligera', stats: { defense: 5, speed: 2, block: 0.02 } },
    { name: 'Daga de Mano', stats: { attack: 5, crit: 0.03 } },
    { name: 'Brazal Solar', stats: { defense: 4, hp: 10, crit: 0.01 } },
  ],
  helm: [
    { name: 'Yelmo de Bronce', stats: { defense: 5, hp: 14 } },
    { name: 'Mascara del Duelo', stats: { defense: 4, crit: 0.02 } },
    { name: 'Casco de Placas', stats: { defense: 6, hp: 10 } },
    { name: 'Corona de Hierro', stats: { hp: 18, speed: 1 } },
  ],
  chest: [
    { name: 'Coraza Segmentada', stats: { defense: 9, hp: 28 } },
    { name: 'Pectoral de Guerra', stats: { defense: 11, hp: 22 } },
    { name: 'Tunica Blindada', stats: { defense: 7, speed: 2, hp: 20 } },
    { name: 'Arnes del Leon', stats: { attack: 4, defense: 8, hp: 18 } },
  ],
  gloves: [
    { name: 'Guanteletes de Malla', stats: { defense: 4, attack: 2 } },
    { name: 'Guantes de Cazador', stats: { crit: 0.02, speed: 1 } },
    { name: 'Mitones de Arena', stats: { attack: 3, hp: 8 } },
    { name: 'Brazales de Sangre', stats: { attack: 4, lifesteal: 0.01 } },
  ],
  boots: [
    { name: 'Grebas Reforzadas', stats: { defense: 4, speed: 1 } },
    { name: 'Sandalias de Arena', stats: { speed: 3, dodge: 0.02 } },
    { name: 'Botas de Marcha', stats: { hp: 10, speed: 2 } },
    { name: 'Botas de Acecho', stats: { speed: 2, crit: 0.01 } },
  ],
  ring: [
    { name: 'Anillo de Plata', stats: { crit: 0.02, attack: 2 } },
    { name: 'Sello del Foro', stats: { defense: 3, hp: 8 } },
    { name: 'Aro Solar', stats: { attack: 3, speed: 1 } },
    { name: 'Sortija Vital', stats: { hp: 16 } },
  ],
  amulet: [
    { name: 'Amuleto del Leon', stats: { attack: 3, hp: 10 } },
    { name: 'Talisman de Marmol', stats: { defense: 3, block: 0.01 } },
    { name: 'Colgante del Alba', stats: { crit: 0.02, hp: 8 } },
    { name: 'Medallon del Eco', stats: { speed: 2, dodge: 0.01 } },
  ],
};

export const AFFIXES = [
  { prefix: 'Furioso', stats: { attack: 2 } },
  { prefix: 'Certero', stats: { crit: 0.02 } },
  { prefix: 'Agil', stats: { speed: 2 } },
  { prefix: 'Imponente', stats: { hp: 18 } },
  { prefix: 'Bastion', stats: { defense: 3 } },
  { prefix: 'Sanguineo', stats: { lifesteal: 0.015 } },
  { suffix: 'del Coloso', stats: { hp: 24, defense: 2 } },
  { suffix: 'de la Tempestad', stats: { speed: 2, crit: 0.01 } },
  { suffix: 'de la Caza', stats: { attack: 3, crit: 0.01 } },
  { suffix: 'del Vigia', stats: { defense: 4, block: 0.015 } },
  { suffix: 'de los Antiguos', stats: { hp: 16, attack: 2 } },
  { suffix: 'del Eclipse', stats: { attack: 3, speed: 1, crit: 0.01 } },
];

export const ZONES = [
  {
    id: 0,
    name: 'Distrito de Arena',
    unlockLevel: 1,
    energyCost: 7,
    staminaCost: 1,
    theme: 'Callejones y plazas del coliseo',
    enemies: ['Rufian del Foro', 'Apostador Violento', 'Mercenario de Bronce', 'Ladron de Tuneles'],
    boss: 'Campeon de Grava'
  },
  {
    id: 1,
    name: 'Bosque Sangriento',
    unlockLevel: 4,
    energyCost: 9,
    staminaCost: 1,
    theme: 'Bestias y cazadores en la niebla',
    enemies: ['Jabali Enloquecido', 'Cazador Sombrio', 'Tigre de Jaula', 'Bandido del Roble'],
    boss: 'Gran Acechador Berkan'
  },
  {
    id: 2,
    name: 'Catacumbas Rotas',
    unlockLevel: 8,
    energyCost: 11,
    staminaCost: 2,
    theme: 'No muertos, guardianes y reliquias',
    enemies: ['Esqueleto Vetusto', 'Fanatico de Cripta', 'Necrofago Roto', 'Guardia del Osario'],
    boss: 'Pontifice de Hueso'
  },
  {
    id: 3,
    name: 'Dunas de Onice',
    unlockLevel: 12,
    energyCost: 13,
    staminaCost: 2,
    theme: 'Bestias solares y caravanas saqueadas',
    enemies: ['Saqueador de Caravana', 'Escorpion de Brasa', 'Jinete del Viento', 'Chaman del Datil Negro'],
    boss: 'Anhur, el Sol Partido'
  },
  {
    id: 4,
    name: 'Fortaleza del Eclipse',
    unlockLevel: 16,
    energyCost: 16,
    staminaCost: 2,
    theme: 'Caballeros caidos y maquinas de guerra',
    enemies: ['Guardia Obsidiana', 'Verdugo del Eclipse', 'Ballestero Negro', 'Ingeniero del Asedio'],
    boss: 'General Varzok'
  },
  {
    id: 5,
    name: 'Necropolis del Hierro',
    unlockLevel: 21,
    energyCost: 18,
    staminaCost: 3,
    theme: 'Automatas, espectros y altares profanos',
    enemies: ['Arconte Ferrum', 'Espectro de Cadena', 'Mecanico Sacrilego', 'Profanador del Trono'],
    boss: 'Maquina-Rey Nax'
  },
  {
    id: 6,
    name: 'Fisura Astral',
    unlockLevel: 27,
    energyCost: 21,
    staminaCost: 3,
    theme: 'Entidades del vacio y gloria absoluta',
    enemies: ['Segador del Vacio', 'Centinela Astral', 'Bestia Prismatica', 'Oraculo Corrupto'],
    boss: 'Aion, Devorador de Ecos'
  },
];

export const JOBS = [
  { id: 'guardia', name: 'Guardia del Foro', duration: 45, reward: { gold: 120, xp: 25, food: 1 }, desc: 'Patrulla, disciplina y monedas seguras.' },
  { id: 'mercante', name: 'Estiba de Mercaderes', duration: 75, reward: { gold: 190, xp: 40, wood: 2, iron: 1 }, desc: 'Carga mercancias y quedate con una comision.' },
  { id: 'arena', name: 'Espectaculo Menor', duration: 120, reward: { gold: 320, xp: 70, essence: 1, potions: 1 }, desc: 'Show de arena, apuestas y fama barata.' },
];

export const PETS = [
  { id: 'wolf', name: 'Lobo de Guerra', icon: 'paw', desc: 'Aumenta el dano y el critico.', bonus: { attackPct: 0.08, crit: 0.03 } },
  { id: 'phoenix', name: 'Fenix de Ceniza', icon: 'flame', desc: 'Mas vida, regeneracion y esencia.', bonus: { hpPct: 0.1, regenPct: 0.15 } },
  { id: 'golem', name: 'Golem de Basalto', icon: 'shield', desc: 'Defensa bruta y bloqueo.', bonus: { defensePct: 0.1, block: 0.03 } },
  { id: 'panther', name: 'Pantera Crepuscular', icon: 'spark', desc: 'Velocidad, esquiva y golpes finos.', bonus: { speedPct: 0.08, dodge: 0.03 } },
  { id: 'raven', name: 'Cuervo del Oraculo', icon: 'feather', desc: 'Mas oro, mejor botin y vision.', bonus: { goldPct: 0.08, lootLuck: 0.06 } },
];

export const SKILLS = {
  powerStrike: {
    id: 'powerStrike',
    name: 'Golpe devastador',
    desc: 'Ataque de gran multiplicador.',
    unlockLevel: 1,
    cooldown: 3,
    mult: 1.75,
  },
  quickLunge: {
    id: 'quickLunge',
    name: 'Estocada veloz',
    desc: 'Golpe rapido con extra de critico.',
    unlockLevel: 1,
    cooldown: 2,
    mult: 1.15,
    critBonus: 0.14,
  },
  fortify: {
    id: 'fortify',
    name: 'Guardia de acero',
    desc: 'Golpeas y elevas tu defensa temporalmente.',
    unlockLevel: 1,
    cooldown: 5,
    mult: 0.82,
    selfBuff: { defensePct: 0.24, turns: 2, shieldPct: 0.08 },
  },
  shieldBash: {
    id: 'shieldBash',
    name: 'Embestida de escudo',
    desc: 'Rompe la defensa rival. Requiere mano izquierda.',
    unlockLevel: 5,
    cooldown: 4,
    mult: 1.32,
    requireOffhand: true,
    armorBreak: { pct: 0.18, turns: 2 },
  },
  bloodRage: {
    id: 'bloodRage',
    name: 'Rabia sanguinea',
    desc: 'Gran drenaje de vida en el impacto.',
    unlockLevel: 7,
    cooldown: 5,
    mult: 1.38,
    lifestealBonus: 0.35,
  },
  whirlwind: {
    id: 'whirlwind',
    name: 'Torbellino',
    desc: 'Dos impactos consecutivos.',
    unlockLevel: 9,
    cooldown: 5,
    mult: 0.88,
    hits: 2,
  },
  execution: {
    id: 'execution',
    name: 'Ejecucion',
    desc: 'Hace muchisimo mas dano a enemigos debilitados.',
    unlockLevel: 12,
    cooldown: 4,
    mult: 1.2,
    executeThreshold: 0.35,
    executeMult: 1.85,
  },
  venomCut: {
    id: 'venomCut',
    name: 'Corte toxico',
    desc: 'Aplica dano persistente.',
    unlockLevel: 14,
    cooldown: 4,
    mult: 1.08,
    dot: { turns: 3, ratio: 0.18, label: 'Veneno' },
  },
  berserk: {
    id: 'berserk',
    name: 'Berserk',
    desc: 'Te buffas y golpeas con furia.',
    unlockLevel: 17,
    cooldown: 6,
    mult: 1.25,
    selfBuff: { attackPct: 0.22, defensePct: -0.1, turns: 3 },
  },
  celestialEdge: {
    id: 'celestialEdge',
    name: 'Filo celestial',
    desc: 'Golpe definitivo con alto critico.',
    unlockLevel: 22,
    cooldown: 7,
    mult: 2.25,
    critBonus: 0.28,
  },
};

export const ACHIEVEMENTS = [
  { id: 'kills50', title: 'Carne de Arena', desc: 'Derrota 50 enemigos.', type: 'kills', target: 50, reward: { gold: 250, shards: 2 } },
  { id: 'wins25', title: 'Favor del Publico', desc: 'Gana 25 combates de arena.', type: 'wins', target: 25, reward: { gold: 300, essence: 3 } },
  { id: 'quest10', title: 'Contratista', desc: 'Completa 10 misiones.', type: 'questsCompleted', target: 10, reward: { gold: 400, shards: 3 } },
  { id: 'floor5', title: 'Delvador', desc: 'Alcanza el piso 5 de las mazmorras.', type: 'highestDungeonFloor', target: 5, reward: { gold: 450, keys: 2 } },
  { id: 'level10', title: 'Veterano', desc: 'Llega al nivel 10.', type: 'level', target: 10, reward: { gold: 500, potions: 2, essence: 4 } },
  { id: 'legendary1', title: 'Resplandor Dorado', desc: 'Consigue 1 objeto legendario.', type: 'legendaryFound', target: 1, reward: { shards: 4, gold: 500 } },
  { id: 'mythic1', title: 'Sello de la Noche', desc: 'Consigue 1 objeto mitico.', type: 'mythicFound', target: 1, reward: { sigils: 2, shards: 6, gold: 800 } },
  { id: 'ascendant1', title: 'Llama Ascendente', desc: 'Consigue 1 objeto ascendente.', type: 'ascendantFound', target: 1, reward: { echoShards: 2, sigils: 4, gold: 1400 } },
  { id: 'guild8', title: 'Constructor', desc: 'Invierte 8 niveles de gremio en total.', type: 'guildTotal', target: 8, reward: { gold: 700, essence: 5 } },
  { id: 'ascend1', title: 'Mas alla del polvo', desc: 'Asciende una vez.', type: 'ascension', target: 1, reward: { relicDust: 3, shards: 5 } },
];
