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
    salvageProfile: { iron: 1, wood: 1, essence: 0, sigils: 0, echoShards: 0, catalysts: 0, affixWeight: 0.06, upgradeWeight: 0.05 },
    upgradeCaps: { enhance: 5, reforge: 2, transcend: false, stabilize: 1 },
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
    salvageProfile: { iron: 2, wood: 1, essence: 0, sigils: 0, echoShards: 0, catalysts: 0, affixWeight: 0.08, upgradeWeight: 0.07 },
    upgradeCaps: { enhance: 7, reforge: 3, transcend: true, stabilize: 2 },
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
    salvageProfile: { iron: 3, wood: 2, essence: 1, sigils: 0, echoShards: 0, catalysts: 0, affixWeight: 0.11, upgradeWeight: 0.09 },
    upgradeCaps: { enhance: 9, reforge: 4, transcend: true, stabilize: 3 },
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
    salvageProfile: { iron: 5, wood: 3, essence: 2, sigils: 1, echoShards: 0, catalysts: 1, affixWeight: 0.13, upgradeWeight: 0.1 },
    upgradeCaps: { enhance: 11, reforge: 5, transcend: true, stabilize: 4 },
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
    salvageProfile: { iron: 7, wood: 4, essence: 4, sigils: 2, echoShards: 1, catalysts: 1, affixWeight: 0.15, upgradeWeight: 0.11 },
    upgradeCaps: { enhance: 12, reforge: 6, transcend: true, stabilize: 5 },
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
    salvageProfile: { iron: 9, wood: 5, essence: 6, sigils: 4, echoShards: 2, catalysts: 2, affixWeight: 0.17, upgradeWeight: 0.12 },
    upgradeCaps: { enhance: 14, reforge: 7, transcend: true, stabilize: 6 },
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
    salvageProfile: { iron: 12, wood: 6, essence: 9, sigils: 7, echoShards: 4, catalysts: 3, affixWeight: 0.2, upgradeWeight: 0.14 },
    upgradeCaps: { enhance: 16, reforge: 8, transcend: false, stabilize: 7 },
    milestone: false,
  },
];

export const LOOT_SOURCES = ['arena', 'dungeon', 'expedition', 'market', 'forge'];

export const FORGE_PROGRESS_STAGES = [
  {
    id: 'early',
    label: 'Early',
    minLevel: 1,
    maxLevel: 12,
    actions: ['craftItem', 'enhanceItem'],
  },
  {
    id: 'mid',
    label: 'Mid',
    minLevel: 13,
    maxLevel: 25,
    actions: ['craftItem', 'enhanceItem', 'reforgeItem', 'stabilizeItem'],
  },
  {
    id: 'late',
    label: 'Late',
    minLevel: 26,
    maxLevel: 90,
    actions: ['craftItem', 'enhanceItem', 'reforgeItem', 'stabilizeItem', 'transcendItem'],
  },
];

export const FORGE_SCHOOLS = {
  arsenal: {
    id: 'arsenal',
    name: 'Arsenal',
    focus: 'offensive',
    description: 'Favorece potencia ofensiva y presión de daño.',
    costMult: { craft: 1, enhance: 1.06, reforge: 0.98, transcend: 1.04, stabilize: 1.04 },
    chanceBonus: { enhance: 0.02, reforge: 0.01, transcend: 0 },
    forgePowerBonus: 0.02,
  },
  bastion: {
    id: 'bastion',
    name: 'Bastion',
    focus: 'defensive',
    description: 'Favorece estabilidad, mitigación y consistencia.',
    costMult: { craft: 1.02, enhance: 0.98, reforge: 1, transcend: 1.04, stabilize: 0.92 },
    chanceBonus: { enhance: 0.01, reforge: 0.03, transcend: 0.01 },
    forgePowerBonus: 0.01,
  },
  arcanum: {
    id: 'arcanum',
    name: 'Arcanum',
    focus: 'hybrid',
    description: 'Favorece control de outcomes y eficiencia de recursos.',
    costMult: { craft: 0.98, enhance: 1, reforge: 1.04, transcend: 0.98, stabilize: 0.96 },
    chanceBonus: { enhance: 0.01, reforge: 0.02, transcend: 0.02 },
    forgePowerBonus: 0.015,
  },
};

export const FORGE_MASTERY_NODES = [
  {
    id: 'efficiency_foundry',
    school: 'shared',
    branch: 'efficiency',
    name: 'Fundicion Eficiente',
    maxRank: 5,
    pointCost: [1, 1, 2, 2, 3],
    effects: { costReduction: 0.14 },
  },
  {
    id: 'efficiency_recycler',
    school: 'shared',
    branch: 'efficiency',
    name: 'Reciclaje Avanzado',
    maxRank: 4,
    pointCost: [1, 1, 2, 3],
    effects: { salvageBoost: 0.18 },
  },
  {
    id: 'control_temper',
    school: 'shared',
    branch: 'control',
    name: 'Templado de Precision',
    maxRank: 5,
    pointCost: [1, 1, 2, 2, 3],
    effects: { enhanceChance: 0.14, reforgeChance: 0.1 },
  },
  {
    id: 'control_transcendence',
    school: 'shared',
    branch: 'control',
    name: 'Rito de Trascendencia',
    maxRank: 4,
    pointCost: [2, 2, 3, 4],
    effects: { transcendChance: 0.12, transcendFailureGuard: 0.2 },
  },
  {
    id: 'potency_resonator',
    school: 'arsenal',
    branch: 'potency',
    name: 'Resonador de Arsenal',
    maxRank: 4,
    pointCost: [2, 2, 3, 4],
    effects: { forgePowerBonus: 0.1, resonanceBonus: 0.06 },
  },
  {
    id: 'potency_aegis',
    school: 'bastion',
    branch: 'potency',
    name: 'Aegis de Bastion',
    maxRank: 4,
    pointCost: [2, 2, 3, 4],
    effects: { stabilizePower: 0.18, resonanceBonus: 0.06 },
  },
  {
    id: 'potency_flux',
    school: 'arcanum',
    branch: 'potency',
    name: 'Flujo de Arcanum',
    maxRank: 4,
    pointCost: [2, 2, 3, 4],
    effects: { qualityBias: 0.08, resonanceBonus: 0.06 },
  },
];

export const FORGE_ACTION_PITY = {
  enhance: { target: 4, maxBonus: 0.24 },
  reforge: { target: 4, maxBonus: 0.2 },
  transcend: { target: 5, maxBonus: 0.3 },
  stabilize: { target: 3, maxBonus: 0.15 },
};

export const FORGE_ECONOMY_TARGETS = {
  early: { minLevel: 1, maxLevel: 12, goldPerHour: [900, 1700], materialsPerHour: [18, 44] },
  mid: { minLevel: 13, maxLevel: 25, goldPerHour: [1700, 3200], materialsPerHour: [40, 92] },
  late: { minLevel: 26, maxLevel: 90, goldPerHour: [3000, 6200], materialsPerHour: [76, 170] },
};

export const FORGE_SET_RESONANCE = {
  offensive: {
    threshold: 3,
    bonus: { attackPct: 0.04, crit: 0.01 },
    fullSetThreshold: 5,
    fullSetBonus: { attackPct: 0.02, speedPct: 0.02 },
  },
  defensive: {
    threshold: 3,
    bonus: { defensePct: 0.04, block: 0.01 },
    fullSetThreshold: 5,
    fullSetBonus: { hpPct: 0.03, defensePct: 0.02 },
  },
  hybrid: {
    threshold: 3,
    bonus: { hpPct: 0.03, speedPct: 0.02 },
    fullSetThreshold: 5,
    fullSetBonus: { dodge: 0.01, attackPct: 0.015 },
  },
};

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

export const ENEMY_ARCHETYPES = {
  berserker: {
    id: 'berserker',
    name: 'Berserker',
    aiProfile: 'aggressive',
    statWeights: { attack: 1.34, defense: 0.86, speed: 1.02, hp: 1.02, crit: 0.94, dodge: 0.56, block: 0.2, lifesteal: 0.62 },
    baseModifiers: { attack: 1.12, defense: 0.92, speed: 1.03, crit: 0.04, dodge: 0.01, block: 0.0, lifesteal: 0.02 },
    lootSlotBias: { weapon: 1.32, gloves: 1.18, ring: 1.16, chest: 0.9, offhand: 0.86, helm: 0.9, boots: 0.96, amulet: 0.9 },
    skills: [
      { id: 'frenesi', name: 'Frenesi de arena', mult: 1.42, cooldown: 3, critBonus: 0.09 },
      { id: 'corte_sangriento', name: 'Corte sangriento', mult: 1.12, cooldown: 4, dot: { turns: 2, ratio: 0.13, label: 'Hemorragia' } },
      { id: 'embestida_brutal', name: 'Embestida brutal', mult: 1.24, cooldown: 5, armorBreak: { pct: 0.12, turns: 2 } },
    ],
  },
  guardian: {
    id: 'guardian',
    name: 'Guardian',
    aiProfile: 'sustain',
    statWeights: { attack: 0.9, defense: 1.26, speed: 0.9, hp: 1.24, crit: 0.32, dodge: 0.36, block: 0.96, lifesteal: 0.32 },
    baseModifiers: { attack: 0.9, defense: 1.18, speed: 0.92, crit: 0.01, dodge: 0.02, block: 0.05, lifesteal: 0.0 },
    lootSlotBias: { weapon: 0.86, gloves: 0.92, ring: 0.9, chest: 1.28, offhand: 1.3, helm: 1.18, boots: 0.9, amulet: 1.04 },
    skills: [
      { id: 'muro_carne', name: 'Muro de carne', mult: 0.9, cooldown: 4, selfBuff: { defensePct: 0.2, turns: 2, shieldPct: 0.1 } },
      { id: 'martillo_escudo', name: 'Martillo de escudo', mult: 1.05, cooldown: 4, armorBreak: { pct: 0.15, turns: 2 } },
      { id: 'juramento_hierro', name: 'Juramento de hierro', mult: 0.96, cooldown: 5, selfBuff: { defensePct: 0.14, speedPct: -0.04, turns: 3 } },
    ],
  },
  assassin: {
    id: 'assassin',
    name: 'Asesino',
    aiProfile: 'execution',
    statWeights: { attack: 1.02, defense: 0.78, speed: 1.28, hp: 0.86, crit: 1.08, dodge: 1.02, block: 0.3, lifesteal: 0.18 },
    baseModifiers: { attack: 1.0, defense: 0.86, speed: 1.22, crit: 0.06, dodge: 0.05, block: 0.01, lifesteal: 0.0 },
    lootSlotBias: { weapon: 1.2, gloves: 1.02, ring: 1.26, chest: 0.82, offhand: 0.86, helm: 0.86, boots: 1.2, amulet: 0.96 },
    skills: [
      { id: 'deguello', name: 'Deguello', mult: 1.18, cooldown: 3, critBonus: 0.2 },
      { id: 'marca_caza', name: 'Marca de caza', mult: 1.02, cooldown: 4, armorBreak: { pct: 0.12, turns: 2 } },
      { id: 'veredicto_final', name: 'Veredicto final', mult: 1.2, cooldown: 4, executeThreshold: 0.38, executeMult: 1.9 },
    ],
  },
  beast: {
    id: 'beast',
    name: 'Bestia',
    aiProfile: 'aggressive',
    statWeights: { attack: 1.08, defense: 0.92, speed: 1.08, hp: 1.14, crit: 0.58, dodge: 0.74, block: 0.22, lifesteal: 0.72 },
    baseModifiers: { attack: 1.08, defense: 0.95, speed: 1.09, crit: 0.03, dodge: 0.03, block: 0.0, lifesteal: 0.03 },
    lootSlotBias: { weapon: 1.16, gloves: 1.08, ring: 1.06, chest: 1.04, offhand: 0.9, helm: 0.94, boots: 1.12, amulet: 1.02 },
    skills: [
      { id: 'desgarro', name: 'Desgarro', mult: 1.08, cooldown: 3, dot: { turns: 2, ratio: 0.12, label: 'Sangrado' } },
      { id: 'zarpazo_doble', name: 'Zarpazo doble', mult: 0.86, cooldown: 4, hits: 2 },
      { id: 'aullido_predador', name: 'Aullido depredador', mult: 1.06, cooldown: 5, selfBuff: { attackPct: 0.16, speedPct: 0.08, turns: 2 } },
    ],
  },
  occult: {
    id: 'occult',
    name: 'Oculto',
    aiProfile: 'control',
    statWeights: { attack: 1.0, defense: 0.94, speed: 1.04, hp: 1.0, crit: 0.82, dodge: 0.64, block: 0.46, lifesteal: 0.26 },
    baseModifiers: { attack: 1.03, defense: 0.94, speed: 1.05, crit: 0.05, dodge: 0.02, block: 0.02, lifesteal: 0.0 },
    lootSlotBias: { weapon: 1.04, gloves: 0.96, ring: 1.08, chest: 0.96, offhand: 1.06, helm: 1.02, boots: 1.04, amulet: 1.16 },
    skills: [
      { id: 'maldicion', name: 'Maldicion', mult: 1.15, cooldown: 4, armorBreak: { pct: 0.14, turns: 2 } },
      { id: 'pulso_sombrio', name: 'Pulso sombrio', mult: 1.04, cooldown: 4, dot: { turns: 3, ratio: 0.1, label: 'Corrupcion' } },
      { id: 'sello_silente', name: 'Sello silente', mult: 0.98, cooldown: 5, selfBuff: { defensePct: 0.1, turns: 2 } },
    ],
  },
};

export const ENEMY_FAMILIES_BY_ZONE = {
  0: [
    {
      id: 'foro_ruffians',
      name: 'Maleantes del foro',
      weight: 0.44,
      archetypeWeights: { berserker: 0.34, assassin: 0.32, guardian: 0.16, beast: 0.12, occult: 0.06 },
      enemies: ['Rufian del Foro', 'Apostador Violento', 'Mercenario de Bronce', 'Ladron de Tuneles'],
      boss: 'Campeon de Grava',
      mechanicTags: ['burst', 'bleed'],
    },
    {
      id: 'pit_guards',
      name: 'Guardias del foso',
      weight: 0.34,
      archetypeWeights: { guardian: 0.42, berserker: 0.24, assassin: 0.14, occult: 0.12, beast: 0.08 },
      enemies: ['Centinela de Arena', 'Custodio del Foro', 'Escudero de Bronce'],
      boss: 'Prefecto de la Grava',
      mechanicTags: ['block', 'armor'],
    },
    {
      id: 'dust_cult',
      name: 'Culto del polvo',
      weight: 0.22,
      archetypeWeights: { occult: 0.46, assassin: 0.24, guardian: 0.14, berserker: 0.1, beast: 0.06 },
      enemies: ['Fanatico del Polvo', 'Tejedor de Apuestas', 'Acolito del Ruedo'],
      boss: 'Hierofante de Arena',
      mechanicTags: ['dot', 'control'],
    },
  ],
  1: [
    {
      id: 'blood_hunt',
      name: 'Caceria carmesi',
      weight: 0.48,
      archetypeWeights: { beast: 0.4, assassin: 0.22, berserker: 0.2, guardian: 0.1, occult: 0.08 },
      enemies: ['Jabali Enloquecido', 'Tigre de Jaula', 'Lobo de Niebla'],
      boss: 'Gran Acechador Berkan',
      mechanicTags: ['bleed', 'aggressive'],
    },
    {
      id: 'forest_raiders',
      name: 'Saqueadores del robledal',
      weight: 0.34,
      archetypeWeights: { assassin: 0.36, berserker: 0.3, guardian: 0.18, occult: 0.1, beast: 0.06 },
      enemies: ['Bandido del Roble', 'Cazador Sombrio', 'Hostigador de Bruma'],
      boss: 'Cacique de la Niebla',
      mechanicTags: ['execution', 'dodge'],
    },
    {
      id: 'thorn_circle',
      name: 'Circulo de espinas',
      weight: 0.18,
      archetypeWeights: { occult: 0.44, beast: 0.22, guardian: 0.18, assassin: 0.1, berserker: 0.06 },
      enemies: ['Druida Roto', 'Chamana de Zarzas', 'Acechador Umbra'],
      boss: 'Oraculo de Espinas',
      mechanicTags: ['dot', 'debuff'],
    },
  ],
  2: [
    {
      id: 'ossuary_watch',
      name: 'Custodios del osario',
      weight: 0.46,
      archetypeWeights: { guardian: 0.38, occult: 0.24, berserker: 0.16, beast: 0.14, assassin: 0.08 },
      enemies: ['Esqueleto Vetusto', 'Guardia del Osario', 'Custodio de Cripta'],
      boss: 'Pontifice de Hueso',
      mechanicTags: ['block', 'sustain'],
    },
    {
      id: 'grave_fanatics',
      name: 'Fanaticos de cripta',
      weight: 0.32,
      archetypeWeights: { occult: 0.42, berserker: 0.24, guardian: 0.16, assassin: 0.1, beast: 0.08 },
      enemies: ['Fanatico de Cripta', 'Necrofago Roto', 'Aspirante del Osario'],
      boss: 'Profeta de Cripta',
      mechanicTags: ['control', 'dot'],
    },
    {
      id: 'bone_stalkers',
      name: 'Acechadores oseos',
      weight: 0.22,
      archetypeWeights: { assassin: 0.34, beast: 0.26, occult: 0.18, berserker: 0.14, guardian: 0.08 },
      enemies: ['Acechador Oseo', 'Heraldo del Polvo', 'Garra de Catacumba'],
      boss: 'Desollador del Osario',
      mechanicTags: ['execution', 'bleed'],
    },
  ],
  3: [
    {
      id: 'sun_reavers',
      name: 'Saqueadores del sol',
      weight: 0.44,
      archetypeWeights: { berserker: 0.32, assassin: 0.24, beast: 0.2, guardian: 0.14, occult: 0.1 },
      enemies: ['Saqueador de Caravana', 'Escorpion de Brasa', 'Jinete del Viento'],
      boss: 'Anhur, el Sol Partido',
      mechanicTags: ['burst', 'speed'],
    },
    {
      id: 'black_date_clan',
      name: 'Clan del datil negro',
      weight: 0.31,
      archetypeWeights: { assassin: 0.34, occult: 0.28, berserker: 0.16, guardian: 0.12, beast: 0.1 },
      enemies: ['Chaman del Datil Negro', 'Lancero Solar', 'Filo de las Dunas'],
      boss: 'Anacoreta del Sol Roto',
      mechanicTags: ['dot', 'execution'],
    },
    {
      id: 'dune_sentinels',
      name: 'Centinelas de las dunas',
      weight: 0.25,
      archetypeWeights: { guardian: 0.36, beast: 0.22, berserker: 0.18, occult: 0.14, assassin: 0.1 },
      enemies: ['Mastin de Onice', 'Custodio de Caravana', 'Guardia del Obelisco'],
      boss: 'Centurion de Onice',
      mechanicTags: ['sustain', 'armor'],
    },
  ],
  4: [
    {
      id: 'eclipse_legion',
      name: 'Legion del eclipse',
      weight: 0.47,
      archetypeWeights: { guardian: 0.3, berserker: 0.24, occult: 0.2, assassin: 0.16, beast: 0.1 },
      enemies: ['Guardia Obsidiana', 'Verdugo del Eclipse', 'Ballestero Negro'],
      boss: 'General Varzok',
      mechanicTags: ['block', 'control'],
    },
    {
      id: 'siege_engineers',
      name: 'Ingenieros del asedio',
      weight: 0.29,
      archetypeWeights: { occult: 0.38, guardian: 0.24, assassin: 0.16, berserker: 0.14, beast: 0.08 },
      enemies: ['Ingeniero del Asedio', 'Artillero de Onice', 'Perito de Ruina'],
      boss: 'Maestro de Catapultas Vorh',
      mechanicTags: ['dot', 'armorBreak'],
    },
    {
      id: 'black_vanguard',
      name: 'Vanguardia negra',
      weight: 0.24,
      archetypeWeights: { berserker: 0.28, assassin: 0.28, guardian: 0.18, beast: 0.14, occult: 0.12 },
      enemies: ['Espada Negra', 'Duelista Umbral', 'Cazador de Murallas'],
      boss: 'Legado de Varzok',
      mechanicTags: ['burst', 'execution'],
    },
  ],
  5: [
    {
      id: 'iron_necropolis',
      name: 'Necropolis ferrica',
      weight: 0.42,
      archetypeWeights: { occult: 0.34, guardian: 0.26, berserker: 0.16, beast: 0.14, assassin: 0.1 },
      enemies: ['Arconte Ferrum', 'Espectro de Cadena', 'Mecanico Sacrilego'],
      boss: 'Maquina-Rey Nax',
      mechanicTags: ['control', 'sustain'],
    },
    {
      id: 'throne_profaners',
      name: 'Profanadores del trono',
      weight: 0.33,
      archetypeWeights: { berserker: 0.24, assassin: 0.22, occult: 0.22, guardian: 0.18, beast: 0.14 },
      enemies: ['Profanador del Trono', 'Aspirante Ferrum', 'Dogma de Cadena'],
      boss: 'Pontifice de Acero',
      mechanicTags: ['dot', 'burst'],
    },
    {
      id: 'clockwork_hounds',
      name: 'Jauria mecanica',
      weight: 0.25,
      archetypeWeights: { beast: 0.34, assassin: 0.24, guardian: 0.18, berserker: 0.14, occult: 0.1 },
      enemies: ['Sabueso Ferrico', 'Hiena de Chispa', 'Triturador de Chatarra'],
      boss: 'Karn, Motor de Caza',
      mechanicTags: ['speed', 'bleed'],
    },
  ],
  6: [
    {
      id: 'astral_sentinels',
      name: 'Centinelas astrales',
      weight: 0.41,
      archetypeWeights: { occult: 0.32, guardian: 0.22, assassin: 0.18, beast: 0.14, berserker: 0.14 },
      enemies: ['Centinela Astral', 'Bestia Prismatica', 'Oraculo Corrupto'],
      boss: 'Aion, Devorador de Ecos',
      mechanicTags: ['control', 'execution'],
    },
    {
      id: 'void_reapers',
      name: 'Segadores del vacio',
      weight: 0.35,
      archetypeWeights: { assassin: 0.3, berserker: 0.24, occult: 0.2, beast: 0.16, guardian: 0.1 },
      enemies: ['Segador del Vacio', 'Corte de Nebula', 'Aguja del Umbral'],
      boss: 'Kazr, Veredicto Vacuo',
      mechanicTags: ['burst', 'execution'],
    },
    {
      id: 'echo_conclave',
      name: 'Conclave de ecos',
      weight: 0.24,
      archetypeWeights: { occult: 0.4, guardian: 0.2, beast: 0.16, assassin: 0.14, berserker: 0.1 },
      enemies: ['Liturgista del Eco', 'Arconte Prismico', 'Sombra Resonante'],
      boss: 'Tetrarca del Eco',
      mechanicTags: ['dot', 'armorBreak'],
    },
  ],
};

export const ENEMY_AFFIXES = [
  {
    id: 'feroz',
    name: 'Feroz',
    threatCost: 0.11,
    mechanicCost: 1,
    mods: { attackMult: 1.16, critAdd: 0.025 },
    tags: ['burst'],
    incompatibleWith: ['baluarte'],
  },
  {
    id: 'baluarte',
    name: 'Baluarte',
    threatCost: 0.12,
    mechanicCost: 1,
    mods: { defenseMult: 1.2, hpMult: 1.12, speedMult: 0.95 },
    tags: ['sustain', 'armor'],
    incompatibleWith: ['feroz', 'depredador'],
  },
  {
    id: 'acechante',
    name: 'Acechante',
    threatCost: 0.1,
    mechanicCost: 1,
    mods: { speedMult: 1.16, dodgeAdd: 0.03 },
    tags: ['speed', 'execution'],
    incompatibleWith: ['muro_de_escudos'],
  },
  {
    id: 'vampirico',
    name: 'Vampirico',
    threatCost: 0.12,
    mechanicCost: 1,
    mods: { lifestealAdd: 0.055, hpMult: 1.06 },
    tags: ['sustain'],
    incompatibleWith: ['hemorragico'],
  },
  {
    id: 'muro_de_escudos',
    name: 'Muro de escudos',
    threatCost: 0.11,
    mechanicCost: 1,
    mods: { blockAdd: 0.055, shieldPct: 0.08 },
    tags: ['block', 'control'],
    incompatibleWith: ['acechante', 'embestida_de_muerte'],
  },
  {
    id: 'corrosivo',
    name: 'Corrosivo',
    threatCost: 0.09,
    mechanicCost: 1,
    mods: { forceArmorBreak: { pct: 0.08, turns: 2 } },
    tags: ['control', 'armorBreak'],
    incompatibleWith: [],
  },
  {
    id: 'hemorragico',
    name: 'Hemorragico',
    threatCost: 0.1,
    mechanicCost: 1,
    mods: { forceDot: { turns: 2, ratio: 0.08, label: 'Hemorragia intensa' } },
    tags: ['dot'],
    incompatibleWith: ['vampirico'],
  },
  {
    id: 'depredador',
    name: 'Depredador',
    threatCost: 0.13,
    mechanicCost: 1,
    mods: { attackMult: 1.1, executeThresholdAdd: 0.08, executeMultAdd: 0.24 },
    tags: ['execution', 'burst'],
    incompatibleWith: ['baluarte'],
  },
  {
    id: 'implacable',
    name: 'Implacable',
    threatCost: 0.11,
    mechanicCost: 1,
    mods: { attackMult: 1.08, speedMult: 1.08 },
    tags: ['aggressive'],
    incompatibleWith: ['muro_de_escudos'],
  },
  {
    id: 'entropico',
    name: 'Entropico',
    threatCost: 0.12,
    mechanicCost: 1,
    mods: { critAdd: 0.02, dodgeAdd: 0.02, blockAdd: 0.02 },
    tags: ['control', 'variance'],
    incompatibleWith: ['baluarte'],
  },
  {
    id: 'embestida_de_muerte',
    name: 'Embestida de muerte',
    threatCost: 0.14,
    mechanicCost: 1,
    mods: { attackMult: 1.14, speedMult: 1.05, defenseMult: 0.92 },
    tags: ['burst'],
    incompatibleWith: ['muro_de_escudos'],
  },
];

export const ENCOUNTER_TEMPLATES = {
  arena: {
    mode: 'arena',
    modeFactor: 1.0,
    varianceRange: [0.94, 1.08],
    kindWeights: { normal: 0.76, elite: 0.2, boss: 0.04 },
    rewardFactor: 1.0,
  },
  dungeon: {
    mode: 'dungeon',
    modeFactor: 1.08,
    varianceRange: [0.96, 1.1],
    kindWeights: { normal: 0.58, elite: 0.27, boss: 0.15 },
    rewardFactor: 1.12,
  },
  event: {
    mode: 'event',
    modeFactor: 1.12,
    varianceRange: [0.98, 1.12],
    kindWeights: { normal: 0.5, elite: 0.32, boss: 0.18 },
    rewardFactor: 1.2,
  },
};

export const THREAT_BANDS = [
  { id: 'low', label: 'Baja', min: 0, max: 90 },
  { id: 'medium', label: 'Media', min: 90, max: 118 },
  { id: 'high', label: 'Alta', min: 118, max: 146 },
  { id: 'extreme', label: 'Extrema', min: 146, max: Infinity },
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

const ENEMY_LEVEL_BANDS = [
  { id: 'novice', minLevel: 1, maxLevel: 8, baseBudget: 118 },
  { id: 'veteran', minLevel: 9, maxLevel: 17, baseBudget: 188 },
  { id: 'champion', minLevel: 18, maxLevel: 27, baseBudget: 274 },
  { id: 'mythic', minLevel: 28, maxLevel: 90, baseBudget: 372 },
];

export const ENEMY_BUDGETS = Object.fromEntries(
  ZONES.map((zone) => [
    zone.id,
    ENEMY_LEVEL_BANDS.map((band) => ({
      ...band,
      baseBudget: Math.round(band.baseBudget * (1 + zone.id * 0.12)),
      kindFactors: {
        normal: 0.94,
        elite: 1.12,
        boss: 1.28,
      },
    })),
  ])
);

export const REWARD_CURVES = {
  arena: [
    { minThreat: 0, goldFactor: 0.88, xpFactor: 0.9, materialFactor: 0.82, dropChance: 0.21, rarityBias: -0.02 },
    { minThreat: 90, goldFactor: 1.0, xpFactor: 1.0, materialFactor: 1.0, dropChance: 0.27, rarityBias: 0.0 },
    { minThreat: 118, goldFactor: 1.15, xpFactor: 1.14, materialFactor: 1.2, dropChance: 0.34, rarityBias: 0.02 },
    { minThreat: 146, goldFactor: 1.34, xpFactor: 1.3, materialFactor: 1.46, dropChance: 0.41, rarityBias: 0.04 },
  ],
  dungeon: [
    { minThreat: 0, goldFactor: 0.96, xpFactor: 1.0, materialFactor: 0.94, dropChance: 0.27, rarityBias: 0.0 },
    { minThreat: 90, goldFactor: 1.08, xpFactor: 1.1, materialFactor: 1.14, dropChance: 0.34, rarityBias: 0.02 },
    { minThreat: 118, goldFactor: 1.26, xpFactor: 1.22, materialFactor: 1.34, dropChance: 0.43, rarityBias: 0.04 },
    { minThreat: 146, goldFactor: 1.44, xpFactor: 1.38, materialFactor: 1.62, dropChance: 0.52, rarityBias: 0.06 },
  ],
  event: [
    { minThreat: 0, goldFactor: 1.0, xpFactor: 1.04, materialFactor: 1.0, dropChance: 0.32, rarityBias: 0.01 },
    { minThreat: 90, goldFactor: 1.14, xpFactor: 1.16, materialFactor: 1.22, dropChance: 0.4, rarityBias: 0.03 },
    { minThreat: 118, goldFactor: 1.32, xpFactor: 1.3, materialFactor: 1.42, dropChance: 0.48, rarityBias: 0.05 },
    { minThreat: 146, goldFactor: 1.54, xpFactor: 1.48, materialFactor: 1.72, dropChance: 0.57, rarityBias: 0.07 },
  ],
};

export const JOBS = [
  { id: 'guardia', name: 'Guardia del Foro', duration: 70, reward: { gold: 130, xp: 22, food: 1 }, desc: 'Trabajo seguro y lento: rendimiento estable sin riesgo de combate.' },
  { id: 'mercante', name: 'Estiba de Mercaderes', duration: 130, reward: { gold: 230, xp: 36, wood: 2, iron: 1 }, desc: 'Comision moderada con mejor retorno si sostienes el ciclo.' },
  { id: 'arena', name: 'Espectaculo Menor', duration: 210, reward: { gold: 390, xp: 58, essence: 1, potions: 1 }, desc: 'Ruta larga de oro: menos explosiva, mas util para progreso por etapas.' },
];

export const PET_RITUALS = [
  {
    id: 'wild',
    name: 'Incubacion silvestre',
    desc: 'Bajo coste y alta variedad. Ideal para early y rotaciones frecuentes.',
    unlockLevel: 1,
    tierWeights: { common: 76, rare: 21, epic: 3, mythic: 0 },
    baseCost: { shards: 2, essence: 4, food: 1, sigils: 0, catalysts: 0, echoShards: 0 },
    levelScaling: { shards: 0.05, essence: 0.08, food: 0.02, sigils: 0, catalysts: 0, echoShards: 0 },
    ascensionScaling: { shards: 0.3, essence: 0.5, food: 0.1, sigils: 0, catalysts: 0, echoShards: 0 },
  },
  {
    id: 'bonded',
    name: 'Incubacion vinculada',
    desc: 'Mejora la tasa de raras y epicas usando insumos de fase media.',
    unlockLevel: 12,
    tierWeights: { common: 34, rare: 46, epic: 17, mythic: 3 },
    baseCost: { shards: 7, essence: 11, food: 2, sigils: 1, catalysts: 0, echoShards: 0 },
    levelScaling: { shards: 0.11, essence: 0.15, food: 0.04, sigils: 0.04, catalysts: 0.01, echoShards: 0 },
    ascensionScaling: { shards: 0.8, essence: 1.2, food: 0.2, sigils: 0.35, catalysts: 0.1, echoShards: 0 },
  },
  {
    id: 'astral',
    name: 'Convergencia astral',
    desc: 'Ritual de alto riesgo y alto coste para perseguir companeros de techo tardio.',
    unlockLevel: 24,
    tierWeights: { common: 10, rare: 34, epic: 41, mythic: 15 },
    baseCost: { shards: 15, essence: 18, food: 3, sigils: 3, catalysts: 1, echoShards: 0 },
    levelScaling: { shards: 0.18, essence: 0.24, food: 0.06, sigils: 0.08, catalysts: 0.03, echoShards: 0.012 },
    ascensionScaling: { shards: 1.1, essence: 1.8, food: 0.35, sigils: 0.6, catalysts: 0.2, echoShards: 0.12 },
  },
];

export const PETS = [
  { id: 'wolf', name: 'Lobo de Guerra', icon: 'paw', tier: 'common', power: 1.08, unlockLevel: 1, desc: 'Presion ofensiva estable para arranque y farmeo activo.', bonus: { attackPct: 0.042, crit: 0.012 } },
  { id: 'golem', name: 'Golem de Basalto', icon: 'shield', tier: 'common', power: 1.12, unlockLevel: 1, desc: 'Mitigacion simple y consistente contra rutas de desgaste.', bonus: { defensePct: 0.052, block: 0.012 } },
  { id: 'panther', name: 'Pantera Crepuscular', icon: 'spark', tier: 'common', power: 1.1, unlockLevel: 1, desc: 'Movilidad tactica para evitar dano y sostener ritmo.', bonus: { speedPct: 0.05, dodge: 0.012 } },
  { id: 'raven', name: 'Cuervo del Oraculo', icon: 'feather', tier: 'common', power: 1.09, unlockLevel: 1, desc: 'Mejora economica gradual para sesiones largas.', bonus: { goldPct: 0.05, lootLuck: 0.028 } },
  { id: 'boar', name: 'Jabali de Guerra', icon: 'shield', tier: 'common', power: 1.11, unlockLevel: 4, desc: 'Sustain robusto para peleas largas de midgame temprano.', bonus: { hpPct: 0.06, regenPct: 0.055 } },
  { id: 'ibis', name: 'Ibis de Hierro', icon: 'feather', tier: 'common', power: 1.06, unlockLevel: 6, desc: 'Companero flexible para builds mixtas.', bonus: { attackPct: 0.028, lifesteal: 0.008 } },
  { id: 'phoenix', name: 'Fenix de Ceniza', icon: 'flame', tier: 'rare', power: 1.36, unlockLevel: 10, desc: 'Escala bien con rutas de supervivencia y regeneracion.', bonus: { hpPct: 0.078, regenPct: 0.105 } },
  { id: 'lynx', name: 'Lince del Velo', icon: 'bolt', tier: 'rare', power: 1.33, unlockLevel: 12, desc: 'Acelera ejecucion de encuentros con tempo alto.', bonus: { attackPct: 0.06, speedPct: 0.04 } },
  { id: 'turtle', name: 'Tortuga de Obsidiana', icon: 'shield', tier: 'rare', power: 1.38, unlockLevel: 14, desc: 'Defensa pesada para bosses y retos de amenaza alta.', bonus: { defensePct: 0.082, hpPct: 0.065 } },
  { id: 'viper', name: 'Vipera Carmesi', icon: 'bolt', tier: 'rare', power: 1.35, unlockLevel: 16, desc: 'Builds de critico sostenido con retorno de vida.', bonus: { crit: 0.018, lifesteal: 0.014 } },
  { id: 'gryphon', name: 'Grifo Solar', icon: 'spark', tier: 'epic', power: 1.84, unlockLevel: 22, desc: 'Companero ofensivo de alto techo para runs exigentes.', bonus: { attackPct: 0.082, crit: 0.02, speedPct: 0.048 } },
  { id: 'leviathan', name: 'Leviatan de Marea', icon: 'shield', tier: 'epic', power: 1.88, unlockLevel: 24, desc: 'Control defensivo premium para mazmorra y bosses.', bonus: { defensePct: 0.1, block: 0.02, regenPct: 0.08 } },
  { id: 'oracledrake', name: 'Draco del Oraculo', icon: 'feather', tier: 'mythic', power: 2.25, unlockLevel: 30, desc: 'Especialista en economia tardia y caceria de botin raro.', bonus: { goldPct: 0.098, lootLuck: 0.07, attackPct: 0.048 } },
  { id: 'voidstag', name: 'Ciervo del Vacio', icon: 'feather', tier: 'mythic', power: 2.18, unlockLevel: 32, desc: 'Movilidad extrema con supervivencia avanzada en late game.', bonus: { speedPct: 0.082, dodge: 0.024, lifesteal: 0.018 } },
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
