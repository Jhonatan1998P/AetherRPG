function weightedPick(entries = [], fallback = null) {
  const clean = (entries || []).filter((entry) => entry && Number(entry.weight || 0) > 0);
  if (!clean.length) return fallback;
  const total = clean.reduce((sumValue, entry) => sumValue + Number(entry.weight || 0), 0);
  let roll = Math.random() * total;
  for (let i = 0; i < clean.length; i += 1) {
    roll -= Number(clean[i].weight || 0);
    if (roll <= 0) return clean[i].value;
  }
  return clean[clean.length - 1].value;
}

function cloneSkill(skill, index = 0) {
  if (!skill || typeof skill !== 'object') return null;
  const id = skill.id || `enemy_skill_${index}`;
  return {
    ...skill,
    id,
  };
}

function pickByWeightOrMax(entries = [], preview = false, fallback = null) {
  if (!entries.length) return fallback;
  if (preview) {
    return [...entries].sort((a, b) => (Number(b.weight || 0) - Number(a.weight || 0)))[0].value;
  }
  return weightedPick(entries, fallback);
}

const DEFAULT_ARCHETYPE_MODS = {
  berserker: { attack: 1.12, defense: 0.92, speed: 1.03, crit: 0.04, dodge: 0.01, block: 0.0, lifesteal: 0.02 },
  guardian: { attack: 0.9, defense: 1.18, speed: 0.92, crit: 0.01, dodge: 0.02, block: 0.05, lifesteal: 0.0 },
  assassin: { attack: 1.0, defense: 0.86, speed: 1.22, crit: 0.06, dodge: 0.05, block: 0.01, lifesteal: 0.0 },
  beast: { attack: 1.08, defense: 0.95, speed: 1.09, crit: 0.03, dodge: 0.03, block: 0.0, lifesteal: 0.03 },
  occult: { attack: 1.03, defense: 0.94, speed: 1.05, crit: 0.05, dodge: 0.02, block: 0.02, lifesteal: 0.0 },
};

const DEFAULT_ARCHETYPE_SKILLS = {
  berserker: [
    { id: 'frenesi', name: 'Frenesi de arena', mult: 1.42, cooldown: 3, critBonus: 0.09 },
    { id: 'corte_sangriento', name: 'Corte sangriento', mult: 1.12, cooldown: 4, dot: { turns: 2, ratio: 0.13, label: 'Hemorragia' } },
  ],
  guardian: [
    { id: 'muro_carne', name: 'Muro de carne', mult: 0.9, cooldown: 4, selfBuff: { defensePct: 0.2, turns: 2, shieldPct: 0.1 } },
    { id: 'martillo_escudo', name: 'Martillo de escudo', mult: 1.05, cooldown: 4, armorBreak: { pct: 0.15, turns: 2 } },
  ],
  assassin: [
    { id: 'deguello', name: 'Deguello', mult: 1.2, cooldown: 3, critBonus: 0.18 },
    { id: 'veredicto_final', name: 'Veredicto final', mult: 1.2, cooldown: 4, executeThreshold: 0.38, executeMult: 1.9 },
  ],
  beast: [
    { id: 'desgarro', name: 'Desgarro', mult: 1.08, cooldown: 3, dot: { turns: 2, ratio: 0.12, label: 'Sangrado' } },
    { id: 'zarpazo_doble', name: 'Zarpazo doble', mult: 0.88, cooldown: 4, hits: 2 },
  ],
  occult: [
    { id: 'maldicion', name: 'Maldicion', mult: 1.15, cooldown: 4, armorBreak: { pct: 0.14, turns: 2 } },
    { id: 'pulso_sombrio', name: 'Pulso sombrio', mult: 1.04, cooldown: 4, dot: { turns: 3, ratio: 0.1, label: 'Corrupcion' } },
  ],
};

const DEFAULT_ENCOUNTER_TEMPLATES = {
  arena: {
    modeFactor: 1,
    varianceRange: [0.94, 1.08],
    kindWeights: { normal: 0.76, elite: 0.2, boss: 0.04 },
    rewardFactor: 1,
  },
  dungeon: {
    modeFactor: 1.08,
    varianceRange: [0.96, 1.1],
    kindWeights: { normal: 0.58, elite: 0.27, boss: 0.15 },
    rewardFactor: 1.12,
  },
  event: {
    modeFactor: 1.12,
    varianceRange: [0.98, 1.12],
    kindWeights: { normal: 0.5, elite: 0.32, boss: 0.18 },
    rewardFactor: 1.2,
  },
};

const DEFAULT_REWARD_CURVES = {
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

const DEFAULT_THREAT_BANDS = [
  { id: 'low', label: 'Baja', min: 0, max: 90 },
  { id: 'medium', label: 'Media', min: 90, max: 118 },
  { id: 'high', label: 'Alta', min: 118, max: 146 },
  { id: 'extreme', label: 'Extrema', min: 146, max: Infinity },
];

const KIND_FACTORS = {
  normal: 0.9,
  elite: 0.88,
  boss: 0.86,
};

const TOXIC_AFFIX_COMBOS = [
  ['acechante', 'muro_de_escudos', 'vampirico'],
  ['acechante', 'muro_de_escudos', 'baluarte'],
  ['entropico', 'muro_de_escudos', 'vampirico'],
];

export function createCombatDomain(deps) {
  const {
    SKILLS,
    ZONES,
    ENEMY_ARCHETYPES,
    ENEMY_FAMILIES_BY_ZONE,
    ENEMY_AFFIXES,
    ENCOUNTER_TEMPLATES,
    ENEMY_BUDGETS,
    REWARD_CURVES,
    THREAT_BANDS,
    pick,
    rand,
    randf,
    clamp,
    softRound,
    uid,
  } = deps;

  const archetypes = Object.keys(ENEMY_ARCHETYPES || {}).length
    ? ENEMY_ARCHETYPES
    : Object.fromEntries(
      Object.entries(DEFAULT_ARCHETYPE_MODS).map(([id, mods]) => [
        id,
        {
          id,
          name: id,
          aiProfile: id === 'guardian' ? 'sustain' : id === 'assassin' ? 'execution' : id === 'occult' ? 'control' : 'aggressive',
          statWeights: { attack: 1, defense: 1, speed: 1, hp: 1, crit: 0.7, dodge: 0.7, block: 0.7, lifesteal: 0.7 },
          baseModifiers: mods,
          skills: DEFAULT_ARCHETYPE_SKILLS[id] || [],
        },
      ])
    );

  const encounterTemplates = {
    ...DEFAULT_ENCOUNTER_TEMPLATES,
    ...(ENCOUNTER_TEMPLATES || {}),
  };

  const rewardCurves = {
    ...DEFAULT_REWARD_CURVES,
    ...(REWARD_CURVES || {}),
  };

  const threatBands = (THREAT_BANDS && THREAT_BANDS.length) ? THREAT_BANDS : DEFAULT_THREAT_BANDS;

  function resolveZone(zone, zoneId = 0) {
    if (zone && typeof zone.id === 'number') return zone;
    const found = (ZONES || []).find((entry) => entry.id === zoneId);
    if (found) return found;
    return {
      id: 0,
      name: 'Distrito de Arena',
      unlockLevel: 1,
      enemies: ['Rival de Arena'],
      boss: 'Campeon de Arena',
    };
  }

  function enemyArchetypeMods(archetype) {
    const fallback = DEFAULT_ARCHETYPE_MODS[archetype] || {
      attack: 1,
      defense: 1,
      speed: 1,
      crit: 0,
      dodge: 0,
      block: 0,
      lifesteal: 0,
    };
    const def = archetypes[archetype] || {};
    return {
      ...fallback,
      ...(def.baseModifiers || {}),
    };
  }

  function resolveModeTemplate(mode = 'arena') {
    return encounterTemplates[mode] || encounterTemplates.arena || DEFAULT_ENCOUNTER_TEMPLATES.arena;
  }

  function resolveBudgetBand(zoneId, playerLevel) {
    const byZone = ENEMY_BUDGETS && ENEMY_BUDGETS[zoneId];
    if (!Array.isArray(byZone) || !byZone.length) {
      return {
        id: 'fallback',
        minLevel: 1,
        maxLevel: 90,
        baseBudget: 140 + zoneId * 18,
        kindFactors: KIND_FACTORS,
      };
    }
    return byZone.find((band) => playerLevel >= band.minLevel && playerLevel <= band.maxLevel) || byZone[byZone.length - 1];
  }

  function kindFactorFor(kind = 'normal', band = {}) {
    if (band.kindFactors && typeof band.kindFactors[kind] === 'number') return band.kindFactors[kind];
    return KIND_FACTORS[kind] || KIND_FACTORS.normal;
  }

  function expectedGearQualityByStage({ level = 1, zoneId = 0, ascension = 0 } = {}) {
    const stage = clamp((level + zoneId * 2 + ascension * 4) / 84, 0, 1.3);
    return softRound(1 + stage * 0.34, 3);
  }

  function expectedPlayerPower({ level = 1, ascension = 0, derivedStats = {}, zoneId = 0 } = {}) {
    const attack = Number(derivedStats.attack || (14 + level * 3.2));
    const defense = Number(derivedStats.defense || (10 + level * 2.45));
    const speed = Number(derivedStats.speed || (8 + level * 1.2));
    const maxHp = Number(derivedStats.maxHp || (120 + level * 34));
    const crit = Number(derivedStats.crit || 0.06);
    const dodge = Number(derivedStats.dodge || 0.04);
    const block = Number(derivedStats.block || 0.03);
    const lifesteal = Number(derivedStats.lifesteal || 0);

    const baseline = attack * 1.92
      + defense * 1.7
      + speed * 1.28
      + maxHp * 0.14
      + crit * 108
      + dodge * 86
      + block * 74
      + lifesteal * 124;

    const quality = expectedGearQualityByStage({ level, zoneId, ascension });
    const levelScale = 1 + Math.pow(level, 1.06) * 0.013;
    const ascensionScale = 1 + ascension * 0.11;
    return softRound(Math.max(40, baseline * quality * levelScale * ascensionScale), 2);
  }

  function buildPlayerSnapshot(context = {}) {
    const level = Math.max(1, Math.round(context.playerLevel || 1));
    const ascension = Math.max(0, Math.round(context.playerAscension || context.ascension || 0));
    const ds = context.derivedStats || {};
    return {
      level,
      ascension,
      attack: Math.max(1, Number(ds.attack || (14 + level * 3.2))),
      defense: Math.max(1, Number(ds.defense || (10 + level * 2.45))),
      speed: Math.max(1, Number(ds.speed || (8 + level * 1.2))),
      maxHp: Math.max(40, Number(ds.maxHp || (120 + level * 34))),
      crit: clamp(Number(ds.crit || 0.06), 0, 0.9),
      dodge: clamp(Number(ds.dodge || 0.04), 0, 0.9),
      block: clamp(Number(ds.block || 0.03), 0, 0.9),
      lifesteal: clamp(Number(ds.lifesteal || 0), 0, 0.9),
    };
  }

  function difficultyMultiplier({
    zone,
    kind = 'normal',
    mode = 'arena',
    playerLevel = 1,
    playerAscension = 0,
    wins = 0,
    adaptiveOffset = 0,
  }) {
    const resolvedZone = resolveZone(zone, zone && typeof zone.id === 'number' ? zone.id : 0);
    const template = resolveModeTemplate(mode);
    const band = resolveBudgetBand(resolvedZone.id, playerLevel);
    const zoneFactor = 1 + resolvedZone.id * 0.08;
    const kindFactor = kindFactorFor(kind, band);
    const winFactor = 1 + Math.min(0.12, wins * 0.0025);
    const ascensionFactor = 1 + playerAscension * 0.045;
    const adaptiveFactor = 1 + clamp(adaptiveOffset || 0, -0.1, 0.1);
    return softRound((template.modeFactor || 1) * zoneFactor * kindFactor * winFactor * ascensionFactor * adaptiveFactor, 3);
  }

  function computeEnemyBudget(context = {}) {
    const mode = context.mode || 'arena';
    const kind = context.kind || 'normal';
    const zone = resolveZone(context.zone, context.zoneId ?? 0);
    const playerSnapshot = context.playerSnapshot || buildPlayerSnapshot({
      playerLevel: context.playerLevel,
      playerAscension: context.playerAscension,
      ascension: context.ascension,
      derivedStats: context.derivedStats,
    });
    const template = resolveModeTemplate(mode);
    const budgetBand = resolveBudgetBand(zone.id, playerSnapshot.level);

    const range = template.varianceRange || [0.94, 1.08];
    const variance = typeof context.variance === 'number'
      ? clamp(context.variance, range[0], range[1])
      : context.preview
        ? softRound((range[0] + range[1]) / 2, 3)
        : softRound(randf(range[0], range[1]), 3);

    const playerPower = typeof context.playerPower === 'number'
      ? context.playerPower
      : expectedPlayerPower({
        level: playerSnapshot.level,
        ascension: playerSnapshot.ascension,
        zoneId: zone.id,
        derivedStats: playerSnapshot,
      });

    const kindFactor = kindFactorFor(kind, budgetBand);
    const zoneFactor = 1 + zone.id * 0.015;
    const adaptiveFactor = 1 + clamp(context.adaptiveOffset || 0, -0.1, 0.1);
    const extraScaleFactor = 1 + clamp((context.extraScale || 0) * 0.01, -0.12, 0.24);
    const bandFactor = clamp((budgetBand.baseBudget || playerPower) / Math.max(1, playerPower), 0.92, 1.06);
    const bossRelief = kind === 'boss' ? 0.8 : 1;

    const budget = Math.max(
      18,
      playerPower
      * (template.modeFactor || 1)
      * kindFactor
      * zoneFactor
      * variance
      * adaptiveFactor
      * extraScaleFactor
      * bandFactor
      * bossRelief,
    );

    return {
      zone,
      mode,
      kind,
      playerSnapshot,
      playerPower: softRound(playerPower, 2),
      variance: softRound(variance, 3),
      modeFactor: template.modeFactor || 1,
      kindFactor,
      zoneFactor,
      adaptiveFactor,
      budgetBand,
      budget: softRound(budget, 2),
    };
  }

  function fallbackFamily(zone) {
    return {
      id: `zone_${zone.id}`,
      name: zone.name || `Zona ${zone.id}`,
      weight: 1,
      archetypeWeights: {},
      enemies: Array.isArray(zone.enemies) && zone.enemies.length ? zone.enemies : ['Rival de Arena'],
      boss: zone.boss || 'Campeon local',
      mechanicTags: [],
    };
  }

  function pickFamily(zone, context = {}) {
    const families = ENEMY_FAMILIES_BY_ZONE && ENEMY_FAMILIES_BY_ZONE[zone.id];
    if (!Array.isArray(families) || !families.length) return fallbackFamily(zone);
    if (context.enemyFamily) {
      const byId = families.find((entry) => entry.id === context.enemyFamily || entry.name === context.enemyFamily);
      if (byId) return byId;
    }
    const weightedFamilies = families.map((entry) => ({ value: entry, weight: Number(entry.weight || 1) }));
    return pickByWeightOrMax(weightedFamilies, !!context.preview, families[0]);
  }

  function pickArchetype(family, context = {}) {
    if (context.enemyArchetype && archetypes[context.enemyArchetype]) return context.enemyArchetype;
    const keys = Object.keys(archetypes);
    if (!keys.length) return 'berserker';
    const weights = keys.map((key) => ({
      value: key,
      weight: Number((family.archetypeWeights && family.archetypeWeights[key]) || 1),
    }));
    return pickByWeightOrMax(weights, !!context.preview, keys[0]);
  }

  function pickEncounterKind(context = {}) {
    if (context.kind) return context.kind;
    const template = resolveModeTemplate(context.mode || 'arena');
    const entries = Object.entries(template.kindWeights || KIND_FACTORS).map(([value, weight]) => ({
      value,
      weight: Number(weight || 0),
    }));
    return pickByWeightOrMax(entries, !!context.preview, 'normal');
  }

  function pickEnemyName(zone, family, kind, context = {}) {
    if (context.enemyName) return context.enemyName;
    if (kind === 'boss') {
      return family.boss || zone.boss || 'Campeon invicto';
    }
    const names = Array.isArray(family.enemies) && family.enemies.length
      ? family.enemies
      : (Array.isArray(zone.enemies) && zone.enemies.length ? zone.enemies : ['Rival de Arena']);
    if (context.preview) return names[0];
    return pick(names);
  }

  function skillCountByKind(kind, preview = false) {
    const range = kind === 'boss'
      ? [1, 2]
      : kind === 'elite'
        ? [1, 1]
        : [1, 1];
    return preview ? range[0] : rand(range[0], range[1]);
  }

  function selectEnemySkills(archetypeDef, kind, preview = false) {
    const pool = (archetypeDef && Array.isArray(archetypeDef.skills) && archetypeDef.skills.length)
      ? archetypeDef.skills
      : DEFAULT_ARCHETYPE_SKILLS[archetypeDef.id] || [];
    if (!pool.length) return [];
    const target = Math.max(1, Math.min(pool.length, skillCountByKind(kind, preview)));
    if (preview) {
      return pool.slice(0, target).map((skill, index) => cloneSkill(skill, index)).filter(Boolean);
    }
    const selected = [];
    const used = new Set();
    let guard = 0;
    while (selected.length < target && guard < 64) {
      const skill = pick(pool);
      const id = skill.id || skill.name || `skill_${guard}`;
      if (!used.has(id)) {
        used.add(id);
        selected.push(cloneSkill(skill, selected.length));
      }
      guard += 1;
    }
    if (!selected.length) return [cloneSkill(pool[0], 0)].filter(Boolean);
    return selected;
  }

  function makeEnemyFromBudget(context = {}) {
    const kind = context.kind || 'normal';
    const mode = context.mode || 'arena';
    const zone = resolveZone(context.zone, context.zoneId ?? 0);
    const playerSnapshot = context.playerSnapshot || buildPlayerSnapshot({
      playerLevel: context.playerLevel,
      playerAscension: context.playerAscension,
      ascension: context.ascension,
      derivedStats: context.derivedStats,
    });

    const budgetMeta = context.budgetMeta || computeEnemyBudget({
      ...context,
      zone,
      kind,
      mode,
      playerSnapshot,
    });

    const family = context.family || pickFamily(zone, context);
    const archetype = context.archetype || pickArchetype(family, context);
    const archetypeDef = archetypes[archetype] || archetypes.berserker || {
      id: archetype,
      aiProfile: 'aggressive',
      statWeights: { attack: 1, defense: 1, speed: 1, hp: 1, crit: 0.7, dodge: 0.7, block: 0.7, lifesteal: 0.7 },
      baseModifiers: enemyArchetypeMods(archetype),
      skills: DEFAULT_ARCHETYPE_SKILLS.berserker,
    };

    const threatBudget = Math.max(8, Number(context.threatBudget || budgetMeta.budget));
    const playerPower = Math.max(1, Number(budgetMeta.playerPower || 1));
    const budgetPressure = clamp(threatBudget / playerPower, 0.58, 1.56);

    const enemyLevel = Math.max(
      1,
      Math.round(
        zone.unlockLevel
        + playerSnapshot.level * 0.96
        + zone.id * 1.65
        + (kind === 'elite' ? 0.3 : kind === 'boss' ? 1.0 : 0)
        + (context.extraScale || 0)
        + (context.preview ? 0 : rand(-1, 2)),
      ),
    );

    const weights = archetypeDef.statWeights || {};
    const mods = enemyArchetypeMods(archetype);
    const kindProfile = kind === 'boss'
      ? { attack: 0.81, defense: 0.98, speed: 0.9, hp: 1.08 }
      : kind === 'elite'
        ? { attack: 0.94, defense: 0.9, speed: 0.95, hp: 0.86 }
        : { attack: 1.12, defense: 0.87, speed: 0.96, hp: 0.78 };

    const attack = (10 + enemyLevel * 2.5)
      * (0.72 + budgetPressure * 0.38)
      * (weights.attack || 1)
      * kindProfile.attack
      * (mods.attack || 1);

    const defense = (7 + enemyLevel * 2.1)
      * (0.68 + budgetPressure * 0.32)
      * (weights.defense || 1)
      * kindProfile.defense
      * (mods.defense || 1);

    const maxHp = (104 + enemyLevel * 20.5)
      * (0.68 + budgetPressure * 0.34)
      * (weights.hp || 1)
      * kindProfile.hp;

    const speed = (7 + enemyLevel * 0.88)
      * (0.8 + budgetPressure * 0.2)
      * (weights.speed || 1)
      * kindProfile.speed
      * (mods.speed || 1);

    const baseCrit = 0.048
      + (mods.crit || 0)
      + Math.max(0, ((weights.crit || 0.72) - 0.7) * 0.05)
      + (kind === 'boss' ? 0.02 : kind === 'elite' ? 0.008 : 0)
      + (budgetPressure - 1) * 0.015;

    const baseDodge = 0.022
      + (mods.dodge || 0)
      + Math.max(0, ((weights.dodge || 0.7) - 0.66) * 0.045)
      + (kind === 'boss' ? 0.014 : kind === 'elite' ? 0.006 : 0)
      + (budgetPressure - 1) * 0.01;

    const baseBlock = 0.014
      + (mods.block || 0)
      + Math.max(0, ((weights.block || 0.68) - 0.62) * 0.04)
      + (kind === 'boss' ? 0.022 : kind === 'elite' ? 0.008 : 0)
      + (budgetPressure - 1) * 0.008;

    const baseLifesteal = (mods.lifesteal || 0)
      + Math.max(0, ((weights.lifesteal || 0.55) - 0.5) * 0.03)
      + (kind === 'boss' ? 0.006 : kind === 'elite' ? 0.002 : 0)
      + (budgetPressure - 1) * 0.006;

    const skills = selectEnemySkills(archetypeDef, kind, !!context.preview);
    const name = pickEnemyName(zone, family, kind, context);

    return {
      id: uid(),
      name,
      zoneId: zone.id,
      kind,
      tier: kind,
      archetype,
      enemyArchetype: archetype,
      family: family.id,
      enemyFamily: family.id,
      familyLabel: family.name,
      level: enemyLevel,
      enemyLevel,
      threatBudget: softRound(threatBudget, 2),
      threatScore: 0,
      threatBand: null,
      threatVariance: budgetMeta.variance,
      playerPower: budgetMeta.playerPower,
      rewardValue: 0,
      mechanicComplexity: Math.max(0, skills.length - 1),
      prestige: kind === 'boss' ? 3 : kind === 'elite' ? 2 : 1,
      affixes: [],
      affixIds: [],
      provenance: {
        source: context.source || mode,
        mode,
        zoneId: zone.id,
        enemyKind: kind,
        enemyArchetype: archetype,
        enemyFamily: family.id,
        createdAt: Date.now(),
      },
      aiProfile: archetypeDef.aiProfile || 'aggressive',
      maxHp: Math.round(maxHp),
      hp: Math.round(maxHp),
      attack: softRound(attack, 2),
      defense: softRound(defense, 2),
      speed: softRound(speed, 2),
      crit: clamp(baseCrit, 0, 0.58),
      dodge: clamp(baseDodge, 0, 0.46),
      block: clamp(baseBlock, 0, 0.42),
      lifesteal: clamp(baseLifesteal, 0, 0.28),
      skills,
      skill: skills[0] || null,
      cooldowns: {},
      buffs: [],
      dots: [],
      armorBreak: null,
      shield: 0,
    };
  }

  function isToxicAffixCombo(selectedIds = [], candidateId = '') {
    const merged = new Set([...selectedIds, candidateId]);
    return TOXIC_AFFIX_COMBOS.some((combo) => combo.every((id) => merged.has(id)));
  }

  function applyAffixMods(enemy, affix) {
    const mods = affix.mods || {};
    if (mods.attackMult) enemy.attack = softRound(enemy.attack * mods.attackMult, 2);
    if (mods.defenseMult) enemy.defense = softRound(enemy.defense * mods.defenseMult, 2);
    if (mods.speedMult) enemy.speed = softRound(enemy.speed * mods.speedMult, 2);
    if (mods.hpMult) {
      enemy.maxHp = Math.max(8, Math.round(enemy.maxHp * mods.hpMult));
      enemy.hp = Math.min(enemy.maxHp, Math.round(enemy.hp * mods.hpMult));
    }
    if (mods.critAdd) enemy.crit = clamp((enemy.crit || 0) + mods.critAdd, 0, 0.7);
    if (mods.dodgeAdd) enemy.dodge = clamp((enemy.dodge || 0) + mods.dodgeAdd, 0, 0.64);
    if (mods.blockAdd) enemy.block = clamp((enemy.block || 0) + mods.blockAdd, 0, 0.58);
    if (mods.lifestealAdd) enemy.lifesteal = clamp((enemy.lifesteal || 0) + mods.lifestealAdd, 0, 0.42);
    if (mods.shieldPct) {
      enemy.shield += Math.round(enemy.maxHp * mods.shieldPct);
    }

    if (mods.forceArmorBreak && Array.isArray(enemy.skills) && enemy.skills.length) {
      const target = enemy.skills.find((skill) => !skill.armorBreak) || enemy.skills[0];
      target.armorBreak = {
        pct: clamp(((target.armorBreak && target.armorBreak.pct) || 0) + mods.forceArmorBreak.pct, 0.04, 0.28),
        turns: Math.max((target.armorBreak && target.armorBreak.turns) || 0, mods.forceArmorBreak.turns || 2),
      };
    }

    if (mods.forceDot && Array.isArray(enemy.skills) && enemy.skills.length) {
      const target = enemy.skills.find((skill) => !skill.dot) || enemy.skills[0];
      target.dot = {
        turns: Math.max((target.dot && target.dot.turns) || 0, mods.forceDot.turns || 2),
        ratio: Math.max((target.dot && target.dot.ratio) || 0, mods.forceDot.ratio || 0.08),
        label: mods.forceDot.label || 'Sangrado',
      };
    }

    if ((mods.executeThresholdAdd || mods.executeMultAdd) && Array.isArray(enemy.skills) && enemy.skills.length) {
      const target = enemy.skills.find((skill) => typeof skill.executeThreshold === 'number') || enemy.skills[0];
      target.executeThreshold = clamp((target.executeThreshold || 0.34) + (mods.executeThresholdAdd || 0), 0.1, 0.65);
      target.executeMult = softRound((target.executeMult || 1.6) + (mods.executeMultAdd || 0), 2);
    }

    enemy.skill = enemy.skills[0] || enemy.skill || null;
    return enemy;
  }

  function applyEnemyAffixesWithBudget(enemy, context = {}) {
    if (!enemy || !Array.isArray(ENEMY_AFFIXES) || !ENEMY_AFFIXES.length) return enemy;

    const kind = enemy.kind || 'normal';
    const range = kind === 'boss'
      ? [1, 1]
      : kind === 'elite'
        ? [0, 1]
        : [0, 0];
    const targetCount = typeof context.forcedAffixCount === 'number'
      ? clamp(Math.round(context.forcedAffixCount), range[0], range[1])
      : context.preview
        ? range[0]
        : rand(range[0], range[1]);

    if (targetCount <= 0) return enemy;

    const mechanicLimit = kind === 'boss' ? 1 : kind === 'elite' ? 1 : 0;
    const budgetCap = enemy.threatBudget * (kind === 'boss' ? 0.08 : kind === 'elite' ? 0.08 : 0.02);

    const selected = [];
    let spentBudget = 0;
    let mechanicCost = 0;
    let guard = 0;

    while (selected.length < targetCount && guard < 160) {
      const pool = ENEMY_AFFIXES.filter((entry) => {
        if (!entry || !entry.id) return false;
        if (selected.some((value) => value.id === entry.id)) return false;
        if (isToxicAffixCombo(selected.map((value) => value.id), entry.id)) return false;
        if (entry.incompatibleWith && entry.incompatibleWith.some((id) => selected.some((value) => value.id === id))) return false;
        if (mechanicCost + Number(entry.mechanicCost || 1) > mechanicLimit) return false;
        const projected = spentBudget + Number(entry.threatCost || 0) * enemy.threatBudget;
        if (projected > budgetCap && selected.length > 0) return false;
        return true;
      });

      if (!pool.length) break;
      const candidate = context.preview
        ? [...pool].sort((a, b) => Number(b.threatCost || 0) - Number(a.threatCost || 0))[0]
        : pick(pool);
      if (!candidate) break;

      selected.push(candidate);
      mechanicCost += Number(candidate.mechanicCost || 1);
      spentBudget += Number(candidate.threatCost || 0) * enemy.threatBudget;
      applyAffixMods(enemy, candidate);
      guard += 1;
    }

    enemy.affixIds = selected.map((entry) => entry.id);
    enemy.affixes = selected.map((entry) => entry.name || entry.id);
    enemy.mechanicComplexity = (enemy.mechanicComplexity || 0) + selected.length;
    enemy.threatBudget = softRound(enemy.threatBudget + spentBudget * 0.36, 2);
    enemy.crit = clamp(enemy.crit || 0, 0, 0.7);
    enemy.dodge = clamp(enemy.dodge || 0, 0, 0.64);
    enemy.block = clamp(enemy.block || 0, 0, 0.58);
    enemy.lifesteal = clamp(enemy.lifesteal || 0, 0, 0.42);
    enemy.speed = Math.max(1, enemy.speed || 1);
    enemy.defense = Math.max(1, enemy.defense || 1);
    enemy.attack = Math.max(1, enemy.attack || 1);
    enemy.maxHp = Math.max(8, Math.round(enemy.maxHp || 8));
    enemy.hp = Math.min(enemy.maxHp, Math.max(1, Math.round(enemy.hp || enemy.maxHp)));
    return enemy;
  }

  function computeThreatScore(enemy, playerSnapshotInput) {
    if (!enemy) return 0;
    const playerSnapshot = playerSnapshotInput || {
      attack: 14,
      defense: 10,
      speed: 8,
      maxHp: 140,
      crit: 0.06,
      dodge: 0.04,
      block: 0.03,
      lifesteal: 0,
    };

    const attackRatio = (enemy.attack || 1) / Math.max(1, playerSnapshot.attack || 1);
    const defenseRatio = (enemy.defense || 1) / Math.max(1, playerSnapshot.defense || 1);
    const hpRatio = (enemy.maxHp || 1) / Math.max(1, playerSnapshot.maxHp || 1);
    const speedRatio = (enemy.speed || 1) / Math.max(1, playerSnapshot.speed || 1);

    const critRatio = clamp((enemy.crit || 0.04) / Math.max(0.04, playerSnapshot.crit || 0.04), 0.55, 2.4);
    const dodgeRatio = clamp((enemy.dodge || 0.02) / Math.max(0.03, playerSnapshot.dodge || 0.03), 0.45, 2.35);
    const blockRatio = clamp((enemy.block || 0.02) / Math.max(0.02, playerSnapshot.block || 0.02), 0.45, 2.35);
    const sustainRatio = clamp((enemy.lifesteal || 0.01) / Math.max(0.01, playerSnapshot.lifesteal || 0.01), 0.3, 2.5);

    const skillComplexity = Array.isArray(enemy.skills)
      ? enemy.skills.reduce((sumValue, skill) => {
        let gain = 0.02;
        if (skill.dot) gain += 0.03;
        if (skill.armorBreak) gain += 0.035;
        if (skill.selfBuff) gain += 0.028;
        if (skill.executeThreshold) gain += 0.03;
        if (skill.hits && skill.hits > 1) gain += 0.015;
        return sumValue + gain;
      }, 0)
      : 0;

    const affixPressure = (enemy.affixIds || []).length * 0.06;
    const profileBias = {
      aggressive: 1.04,
      control: 1.02,
      sustain: 0.99,
      execution: 1.07,
    }[enemy.aiProfile] || 1;

    const kindBias = enemy.kind === 'boss' ? 1.18 : enemy.kind === 'elite' ? 1.08 : 1;

    const composite = attackRatio * 0.34
      + defenseRatio * 0.16
      + hpRatio * 0.23
      + speedRatio * 0.11
      + critRatio * 0.07
      + dodgeRatio * 0.04
      + blockRatio * 0.03
      + sustainRatio * 0.03
      + skillComplexity
      + affixPressure;

    return softRound(clamp(composite * 76 * kindBias * profileBias, 48, 240), 2);
  }

  function threatBandForScore(threatScore = 0) {
    const score = Number(threatScore || 0);
    const matched = threatBands.find((entry) => score >= entry.min && score < entry.max);
    return matched || threatBands[threatBands.length - 1] || DEFAULT_THREAT_BANDS[1];
  }

  function computeEnemyRewardProfile(context = {}, outcome = {}) {
    const enemy = context.enemy || {};
    const preview = !!context.preview;
    const mode = context.mode || enemy.provenance && enemy.provenance.mode || 'arena';
    const score = Number(context.threatScore || enemy.threatScore || 100);
    const curveList = rewardCurves[mode] || rewardCurves.arena || DEFAULT_REWARD_CURVES.arena;
    let curve = curveList[0];
    curveList.forEach((entry) => {
      if (score >= entry.minThreat) curve = entry;
    });

    const kind = context.kind || enemy.kind || 'normal';
    const threatRatio = clamp(Number(context.threatRatio || score / 100), 0.58, 2.1);
    const kindFactor = kind === 'boss' ? 1.28 : kind === 'elite' ? 1.14 : 1;
    const challengeFactor = clamp(0.82 + (threatRatio - 1) * 0.62, 0.62, 1.6);
    const riskFactor = kindFactor * challengeFactor;

    const zoneId = Number(context.zoneId ?? enemy.zoneId ?? 0);
    const enemyLevel = Number(enemy.enemyLevel || enemy.level || context.playerLevel || 1);
    const baseGold = 24 + enemyLevel * 10.5 + zoneId * 16;
    const baseXp = 20 + enemyLevel * 8.8 + zoneId * 12;

    const economyState = context.economyState || {};
    const targetGoldPerHour = Math.max(
      700,
      Number(economyState.targetGoldPerHour || (1600 + (context.playerLevel || 1) * 160 + (context.ascension || 0) * 260)),
    );
    const netGoldThisHour = Math.max(0, Number(economyState.netGoldThisHour || 0));
    let economyGuard = 1;
    if (netGoldThisHour > targetGoldPerHour * 1.25) {
      economyGuard = clamp(1 - ((netGoldThisHour - targetGoldPerHour * 1.25) / Math.max(1, targetGoldPerHour * 1.8)), 0.72, 1);
    } else if (netGoldThisHour < targetGoldPerHour * 0.68) {
      economyGuard = 1.04;
    }

    const reward = {
      gold: Math.max(8, Math.round(baseGold * (curve.goldFactor || 1) * riskFactor * economyGuard)),
      xp: Math.max(8, Math.round(baseXp * (curve.xpFactor || 1) * challengeFactor)),
      iron: 0,
      wood: 0,
      essence: 0,
      sigils: 0,
      echoShards: 0,
      catalysts: 0,
      keys: 0,
      potions: 0,
    };

    const materialIntensity = (curve.materialFactor || 1) * (0.76 + threatRatio * 0.32);
    const ironMax = Math.max(1, Math.round(2 + zoneId * 0.9 + materialIntensity * 2.1));
    const woodMax = Math.max(1, Math.round(1 + zoneId * 0.55 + materialIntensity * 1.4));
    reward.iron = preview ? Math.round(ironMax * 0.5) : rand(0, ironMax);
    reward.wood = preview ? Math.round(woodMax * 0.5) : rand(0, woodMax);
    const essenceChance = clamp(0.22 + zoneId * 0.03 + Math.max(0, score - 90) * 0.0022, 0.12, 0.78);
    const essenceMax = Math.max(1, Math.round(1 + materialIntensity * 1.2));
    reward.essence = preview
      ? Math.round(essenceChance * essenceMax)
      : (Math.random() < essenceChance ? rand(1, essenceMax) : 0);

    if (score >= 132 && (kind === 'elite' || kind === 'boss')) {
      const sigilChance = clamp(0.08 + zoneId * 0.015 + (score - 120) * 0.0014, 0.08, 0.55);
      const sigilCount = Math.max(1, Math.round(1 + zoneId / 3));
      reward.sigils = preview
        ? Math.round(sigilChance * sigilCount)
        : (Math.random() < sigilChance ? sigilCount : 0);
    }
    if (score >= 164 && kind === 'boss') {
      const echoChance = clamp(0.06 + zoneId * 0.012 + (score - 154) * 0.0016, 0.06, 0.42);
      reward.echoShards = preview ? Math.round(echoChance) : (Math.random() < echoChance ? 1 : 0);
    }
    if (score >= 150 && (kind === 'elite' || kind === 'boss')) {
      const catalystChance = clamp(0.05 + zoneId * 0.01 + (score - 140) * 0.0018, 0.05, 0.48);
      const catalystCount = Math.max(1, Math.round(1 + zoneId / 4));
      reward.catalysts = preview
        ? Math.round(catalystChance * catalystCount)
        : (Math.random() < catalystChance ? catalystCount : 0);
    }
    const keyChance = 0.11 + (kind === 'boss' ? 0.06 : kind === 'elite' ? 0.03 : 0);
    if (mode === 'dungeon') {
      reward.keys = preview ? Math.round(keyChance) : (Math.random() < keyChance ? 1 : 0);
    }
    const potionChance = clamp(0.05 + zoneId * 0.01 + (score - 90) * 0.0012, 0.04, 0.26);
    reward.potions = preview ? Math.round(potionChance) : (Math.random() < potionChance ? 1 : 0);

    const dropProfile = {
      chance: clamp(
        Number(curve.dropChance || 0.26)
        + (kind === 'elite' ? 0.08 : kind === 'boss' ? 0.16 : 0)
        + (mode === 'dungeon' ? 0.08 : 0)
        + Math.max(0, threatRatio - 1) * 0.09,
        0.1,
        0.88,
      ),
      itemLevelBonus: Math.max(0, Math.round((score - 88) / 20)),
      rarityBias: softRound((curve.rarityBias || 0) + Math.max(0, threatRatio - 1) * 0.03, 3),
      pityUnits: softRound(clamp(score / 100, 0.82, 1.38), 3),
      minRarity: score >= 168
        ? 'epic'
        : score >= 138
          ? 'rare'
          : score >= 112 && kind !== 'normal'
            ? 'uncommon'
            : null,
    };

    if (outcome && outcome.victory === false) {
      reward.gold = Math.round(reward.gold * 0.12);
      reward.xp = Math.round(reward.xp * 0.18);
      reward.iron = 0;
      reward.wood = 0;
      reward.essence = 0;
      reward.sigils = 0;
      reward.echoShards = 0;
      reward.catalysts = 0;
      reward.keys = 0;
      reward.potions = 0;
      dropProfile.chance = 0;
    }

    return {
      threatScore: score,
      threatBand: threatBandForScore(score),
      riskFactor: softRound(riskFactor, 3),
      challengeFactor: softRound(challengeFactor, 3),
      economyGuard: softRound(economyGuard, 3),
      reward,
      dropProfile,
    };
  }

  function rollEncounter(context = {}) {
    const mode = context.mode || 'arena';
    const zone = resolveZone(context.zone, context.zoneId ?? 0);
    const kind = pickEncounterKind({ ...context, mode });
    const playerSnapshot = context.playerSnapshot || buildPlayerSnapshot({
      playerLevel: context.playerLevel,
      playerAscension: context.playerAscension,
      ascension: context.ascension,
      derivedStats: context.derivedStats,
    });

    const budgetMeta = computeEnemyBudget({
      ...context,
      mode,
      kind,
      zone,
      playerSnapshot,
    });

    const family = context.family || pickFamily(zone, context);
    const archetype = context.archetype || pickArchetype(family, context);

    const enemy = makeEnemyFromBudget({
      ...context,
      mode,
      kind,
      zone,
      playerSnapshot,
      family,
      archetype,
      budgetMeta,
      threatBudget: budgetMeta.budget,
    });

    applyEnemyAffixesWithBudget(enemy, context);
    enemy.threatScore = computeThreatScore(enemy, playerSnapshot);
    enemy.threatBand = threatBandForScore(enemy.threatScore).label;

    const rewardProfile = computeEnemyRewardProfile({
      mode,
      kind,
      zoneId: zone.id,
      playerLevel: playerSnapshot.level,
      ascension: playerSnapshot.ascension,
      enemy,
      threatScore: enemy.threatScore,
      threatRatio: enemy.threatScore / 100,
      economyState: context.economyState || {},
      preview: !!context.preview,
    }, { victory: true });

    enemy.rewardValue = Math.max(
      1,
      Math.round((rewardProfile.reward.gold || 0) + (rewardProfile.reward.xp || 0) * 0.6 + (rewardProfile.reward.essence || 0) * 20 + (rewardProfile.reward.sigils || 0) * 40 + (rewardProfile.reward.echoShards || 0) * 120 + (rewardProfile.reward.catalysts || 0) * 65),
    );
    enemy.rewardProfile = rewardProfile;
    return enemy;
  }

  function makeEnemy({
    zone,
    kind = 'normal',
    extraScale = 0,
    playerLevel = 1,
    playerAscension = 0,
    wins = 0,
    mode = 'arena',
    derivedStats = null,
    combatDifficulty = null,
  }) {
    return rollEncounter({
      zone,
      zoneId: zone && typeof zone.id === 'number' ? zone.id : 0,
      kind,
      mode,
      extraScale,
      playerLevel,
      playerAscension,
      wins,
      derivedStats,
      adaptiveOffset: combatDifficulty && typeof combatDifficulty.adaptiveOffset === 'number'
        ? combatDifficulty.adaptiveOffset
        : 0,
    });
  }

  function buildPlayerCombatant(playerState, derivedStats) {
    return {
      id: 'player',
      name: playerState.name,
      maxHp: derivedStats.maxHp,
      hp: Math.round(playerState.hp),
      attack: derivedStats.attack,
      defense: derivedStats.defense,
      speed: derivedStats.speed,
      crit: derivedStats.crit,
      dodge: derivedStats.dodge,
      block: derivedStats.block,
      lifesteal: derivedStats.lifesteal,
      cooldowns: {},
      buffs: [],
      dots: [],
      armorBreak: null,
      shield: 0,
      activeSkills: (playerState.activeSkills || []).filter((id) => (playerState.unlockedSkills || []).includes(id)),
    };
  }

  function activeBuffValue(actor, key) {
    return actor.buffs
      .filter((buff) => buff.turns > 0 && key in (buff.values || {}))
      .reduce((total, buff) => total + buff.values[key], 0);
  }

  function effectiveStat(actor, key) {
    const buffPctKey = `${key}Pct`;
    let value = actor[key];
    if (key === 'defense' && actor.armorBreak && actor.armorBreak.turns > 0) {
      value *= (1 - actor.armorBreak.pct);
    }
    if (key === 'attack' || key === 'defense' || key === 'speed') {
      value *= (1 + activeBuffValue(actor, buffPctKey));
      value += activeBuffValue(actor, key);
    } else {
      value += activeBuffValue(actor, key);
    }
    return value;
  }

  function skillLevelMult(skillLevels, skillId) {
    return 1 + Math.max(0, ((skillLevels && skillLevels[skillId]) || 1) - 1) * 0.08;
  }

  function choosePlayerSkill(player, enemy, playerContext) {
    const order = player.activeSkills || [];
    for (const skillId of order) {
      const skill = SKILLS[skillId];
      if (!skill) continue;
      if (skill.requireOffhand && !playerContext.equipment.offhand) continue;
      if ((player.cooldowns[skillId] || 0) > 0) continue;
      if (skill.executeThreshold && enemy.hp / enemy.maxHp > skill.executeThreshold) continue;
      return skill;
    }
    return null;
  }

  function chooseEnemySkill(enemy, defender = null) {
    const skillPool = Array.isArray(enemy.skills) && enemy.skills.length
      ? enemy.skills
      : (enemy.skill ? [enemy.skill] : []);
    if (!skillPool.length) return null;

    const available = skillPool.filter((skill) => (enemy.cooldowns[skill.id || 'special'] || 0) <= 0);
    if (!available.length) return null;

    const targetHpRatio = defender && defender.maxHp
      ? defender.hp / defender.maxHp
      : 1;

    const aiProfile = enemy.aiProfile || 'aggressive';
    if (aiProfile === 'execution') {
      const execute = available.find((skill) => skill.executeThreshold && targetHpRatio <= skill.executeThreshold);
      if (execute) return execute;
    }
    if (aiProfile === 'sustain') {
      const sustain = available.find((skill) => skill.selfBuff || skill.lifestealBonus || skill.shieldPct);
      if (sustain) return sustain;
    }
    if (aiProfile === 'control') {
      const control = available.find((skill) => skill.dot || skill.armorBreak);
      if (control) return control;
    }
    if (aiProfile === 'aggressive') {
      const burst = [...available].sort((a, b) => Number(b.mult || 1) - Number(a.mult || 1))[0];
      if (burst) return burst;
    }

    return pick(available);
  }

  function decayStatuses(actor, log) {
    actor.dots = actor.dots.filter((dot) => {
      if (dot.turns <= 0) return false;
      const amount = Math.round(dot.damage);
      actor.hp -= amount;
      log.push(`☠️ ${actor.name} sufre ${amount} por ${dot.label}.`);
      dot.turns -= 1;
      return dot.turns > 0;
    });

    actor.buffs.forEach((buff) => {
      buff.turns -= 1;
    });
    actor.buffs = actor.buffs.filter((buff) => buff.turns > 0);
    if (actor.armorBreak) {
      actor.armorBreak.turns -= 1;
      if (actor.armorBreak.turns <= 0) actor.armorBreak = null;
    }
  }

  function performHit(attacker, defender, label, mult = 1, extra = {}, log = []) {
    const attackStat = effectiveStat(attacker, 'attack');
    const defenseStat = effectiveStat(defender, 'defense');
    const critChance = clamp((attacker.crit || 0) + (extra.critBonus || 0), 0, 0.85);
    const dodgeChance = clamp(defender.dodge || 0, 0, 0.7);

    if (Math.random() < dodgeChance) {
      log.push(`💨 ${defender.name} esquiva ${label}.`);
      return { damage: 0, crit: false, dodged: true, blocked: false };
    }

    let damage = attackStat * mult - defenseStat * 0.46;
    damage = Math.max(attackStat * 0.3, damage);
    damage *= randf(0.9, 1.08);

    let crit = false;
    if (Math.random() < critChance) {
      damage *= 1.68;
      crit = true;
    }

    let blocked = false;
    if (Math.random() < (defender.block || 0)) {
      damage *= 0.66;
      blocked = true;
    }

    damage = Math.max(1, Math.round(damage));

    if (defender.shield > 0) {
      const absorbed = Math.min(defender.shield, damage);
      defender.shield -= absorbed;
      damage -= absorbed;
      if (absorbed > 0) log.push(`🛡️ ${defender.name} absorbe ${absorbed} con un escudo.`);
    }

    if (damage > 0) {
      defender.hp -= damage;
      const steal = damage * clamp((attacker.lifesteal || 0) + (extra.lifestealBonus || 0), 0, 0.9);
      if (steal > 0) {
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + Math.round(steal));
      }
    }

    const critText = crit ? ' critico' : '';
    const blockText = blocked ? ' (bloqueado parcialmente)' : '';
    log.push(`⚔️ ${attacker.name} usa ${label} y causa ${damage}${critText}${blockText}.`);
    return { damage, crit, dodged: false, blocked };
  }

  function applySkillEffects(attacker, defender, skill, hitResult, log) {
    if (!skill || hitResult.dodged) return;
    if (skill.armorBreak) {
      defender.armorBreak = { pct: skill.armorBreak.pct, turns: skill.armorBreak.turns + 1 };
      log.push(`🧩 La armadura de ${defender.name} queda expuesta.`);
    }
    if (skill.dot && hitResult.damage > 0) {
      defender.dots.push({
        damage: Math.max(3, attacker.attack * skill.dot.ratio),
        turns: skill.dot.turns,
        label: skill.dot.label,
      });
      log.push(`🩸 ${defender.name} queda afectado por ${skill.dot.label}.`);
    }
    if (skill.selfBuff) {
      const values = {};
      Object.entries(skill.selfBuff).forEach(([key, value]) => {
        if (key === 'turns' || key === 'shieldPct') return;
        values[key] = value;
      });
      attacker.buffs.push({
        turns: (skill.selfBuff.turns || 1) + 1,
        values,
      });
      if (skill.selfBuff.shieldPct) {
        const amount = Math.round(attacker.maxHp * skill.selfBuff.shieldPct);
        attacker.shield += amount;
        log.push(`🛡️ ${attacker.name} obtiene un escudo de ${amount}.`);
      }
      log.push(`✨ ${attacker.name} activa un refuerzo temporal.`);
    }
  }

  function actorTurn(attacker, defender, isPlayer, playerContext, statsDelta, log) {
    if (attacker.hp <= 0 || defender.hp <= 0) return null;
    const skill = isPlayer
      ? choosePlayerSkill(attacker, defender, playerContext)
      : chooseEnemySkill(attacker, defender);

    if (!skill) {
      if (isPlayer) statsDelta.playerBasicAttacks += 1;
      const hit = performHit(attacker, defender, 'Golpe basico', 1, {}, log);
      if (hit.damage > 0) {
        if (isPlayer) statsDelta.damageDone += hit.damage;
        else statsDelta.damageTaken += hit.damage;
      }
      return hit;
    }

    const mult = (skill.mult || 1) * (isPlayer ? skillLevelMult(playerContext.skillLevels, skill.id) : 1);
    if (isPlayer) statsDelta.playerSkillCasts += 1;
    const hits = skill.hits || 1;
    let lastHit = null;

    for (let i = 0; i < hits; i += 1) {
      const bonus = {};
      if (skill.critBonus) bonus.critBonus = skill.critBonus;
      if (skill.lifestealBonus) bonus.lifestealBonus = skill.lifestealBonus;

      let appliedMult = mult;
      if (skill.executeThreshold && defender.hp / defender.maxHp <= skill.executeThreshold) {
        appliedMult *= skill.executeMult || 1.6;
      }

      lastHit = performHit(attacker, defender, skill.name, appliedMult, bonus, log);
      if (lastHit && lastHit.damage > 0) {
        if (isPlayer) statsDelta.damageDone += lastHit.damage;
        else statsDelta.damageTaken += lastHit.damage;
      }
      if (lastHit && lastHit.crit && isPlayer) statsDelta.crits += 1;
      if (defender.hp <= 0) break;
    }

    applySkillEffects(attacker, defender, skill, lastHit || { dodged: false, damage: 0 }, log);
    const cdKey = skill.id || (isPlayer ? 'player_skill' : 'special');
    attacker.cooldowns[cdKey] = skill.cooldown;
    return lastHit;
  }

  function tickCooldowns(actor) {
    Object.keys(actor.cooldowns).forEach((key) => {
      actor.cooldowns[key] = Math.max(0, (actor.cooldowns[key] || 0) - 1);
    });
  }

  function deriveDefeatCause(summary, statsDelta, player, foe) {
    if (!summary || summary.endReason !== 'player_defeated') return null;
    if (Array.isArray(player.dots) && player.dots.length && player.hp <= 0) return 'desgaste_dot';
    if (summary.turnsPlayed <= 4 && statsDelta.damageTaken >= summary.playerStartHp * 0.72) return 'burst_inicial';
    if (statsDelta.damageDone <= summary.foeStartHp * 0.34) return 'falta_de_dano';
    if (foe.hp > foe.maxHp * 0.45) return 'muro_defensivo';
    return 'presion_sostenida';
  }

  function runCombat({ enemy, playerState, derivedStats, zoneName, maxTurns = 28 }) {
    const player = buildPlayerCombatant(playerState, derivedStats);
    const foe = JSON.parse(JSON.stringify(enemy));
    const playerStartHp = player.hp;
    const foeStartHp = foe.hp;
    const log = [
      `🏟️ Duelo en ${zoneName}: ${player.name} vs ${foe.name}.`,
    ];
    if (foe.kind === 'boss' && Array.isArray(foe.skills) && foe.skills.length >= 2) {
      log.push('⚠️ El jefe muestra varias mecanicas; observa su patron antes de forzar ofensiva.');
    }
    const statsDelta = {
      damageDone: 0,
      damageTaken: 0,
      crits: 0,
      playerSkillCasts: 0,
      playerBasicAttacks: 0,
    };
    const playerContext = {
      equipment: playerState.equipment,
      skillLevels: playerState.skillLevels,
    };

    let turn = 1;
    while (player.hp > 0 && foe.hp > 0 && turn <= maxTurns) {
      log.push(`— Turno ${turn} —`);
      decayStatuses(player, log);
      decayStatuses(foe, log);
      if (player.hp <= 0 || foe.hp <= 0) break;

      const order = (effectiveStat(player, 'speed') + randf(0, 3)) >= (effectiveStat(foe, 'speed') + randf(0, 3))
        ? [[player, foe, true], [foe, player, false]]
        : [[foe, player, false], [player, foe, true]];

      for (const [attacker, defender, isPlayer] of order) {
        if (attacker.hp <= 0 || defender.hp <= 0) continue;
        actorTurn(attacker, defender, isPlayer, playerContext, statsDelta, log);
        if (defender.hp <= 0) break;
      }

      log.push(`📊 Fin turno ${turn}: ${player.name} ${Math.max(0, player.hp)}/${player.maxHp} HP · ${foe.name} ${Math.max(0, foe.hp)}/${foe.maxHp} HP`);

      tickCooldowns(player);
      tickCooldowns(foe);
      turn += 1;
    }

    const turnsPlayed = Math.max(0, turn - 1);
    const victory = player.hp > 0 && foe.hp <= 0;
    const endReason = victory
      ? 'enemy_defeated'
      : player.hp <= 0
        ? 'player_defeated'
        : 'turn_limit';

    if (endReason === 'turn_limit') {
      log.push('⏱️ El combate termino por limite de turnos.');
    }

    const summary = {
      turnsPlayed,
      endReason,
      playerStartHp,
      playerEndHp: Math.max(0, player.hp),
      foeStartHp,
      foeEndHp: Math.max(0, foe.hp),
      threatScore: Number(foe.threatScore || 0),
      threatBand: foe.threatBand || threatBandForScore(foe.threatScore || 0).label,
      playerPower: Number(foe.playerPower || 0),
      defeatCause: null,
    };
    summary.defeatCause = deriveDefeatCause(summary, statsDelta, player, foe);

    return {
      player,
      foe,
      log,
      statsDelta,
      summary,
      victory,
    };
  }

  return {
    enemyArchetypeMods,
    difficultyMultiplier,
    expectedGearQualityByStage,
    expectedPlayerPower,
    computeEnemyBudget,
    makeEnemyFromBudget,
    applyEnemyAffixesWithBudget,
    computeThreatScore,
    threatBandForScore,
    computeEnemyRewardProfile,
    rollEncounter,
    makeEnemy,
    buildPlayerCombatant,
    activeBuffValue,
    effectiveStat,
    skillLevelMult,
    choosePlayerSkill,
    chooseEnemySkill,
    decayStatuses,
    performHit,
    applySkillEffects,
    actorTurn,
    tickCooldowns,
    runCombat,
  };
}
