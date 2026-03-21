const CHANCE_STATS = new Set(['crit', 'dodge', 'block', 'lifesteal']);

export function createItemsDomain(deps) {
  const {
    ITEM_BASES,
    ITEM_ARCHETYPES,
    STAT_BUDGETS,
    SLOT_ORDER,
    AFFIXES,
    pick,
    rand,
    uid,
    softRound,
    clamp,
    rarityDef,
    rarityOrder,
    pickRarity,
    findBaseItem,
    scaledStatValue,
    getLootLuck,
    getNow,
  } = deps;

  const now = typeof getNow === 'function' ? getNow : () => Date.now();

  const SCORE_WEIGHTS = {
    attack: 2.25,
    defense: 1.92,
    speed: 1.38,
    hp: 0.16,
    crit: 132,
    dodge: 94,
    block: 84,
    lifesteal: 146,
  };

  const SOURCE_PITY_TARGETS = {
    arena: { epic: 14, mythic: 110 },
    dungeon: { epic: 9, mythic: 72 },
    expedition: { epic: 11, mythic: 86 },
    market: { epic: 8, mythic: 64 },
    forge: { epic: 5, mythic: 34 },
  };

  function chanceScale(value, level, upgrade = 0) {
    return softRound(value + Math.max(0, level - 1) * 0.00052 + upgrade * 0.0014, 4);
  }

  function normalizeStatScale(key, value, factor) {
    if (CHANCE_STATS.has(key)) {
      const dampened = 1 + (factor - 1) * 0.44;
      return softRound(value * dampened, 4);
    }
    return softRound(value * factor, 2);
  }

  function statBudgetPoints(stats) {
    return softRound(
      Object.entries(stats || {}).reduce((sumValue, [key, value]) => sumValue + ((SCORE_WEIGHTS[key] || 0.8) * value), 0),
      2,
    );
  }

  function slotStatWeight(slot, key) {
    const archetype = ITEM_ARCHETYPES[slot] || {};
    const weights = archetype.statWeights || {};
    return weights[key] || 0.32;
  }

  function budgetFor(slot, itemLevel, rarityKey) {
    const level = clamp(Math.round(itemLevel || 1), 1, 90);
    const slotBudgets = STAT_BUDGETS[slot] || {};
    const levelBudget = slotBudgets[level] || slotBudgets[1] || {};
    return levelBudget[rarityKey] || levelBudget.common || 12;
  }

  function deriveQualityRoll(context = {}) {
    if (typeof context.qualityRoll === 'number') {
      return clamp(context.qualityRoll, 0.82, 1.24);
    }
    const sourceMod = context.source === 'forge'
      ? 0.1
      : context.source === 'dungeon'
        ? 0.06
        : context.source === 'market'
          ? 0.03
          : 0;
    const luckMod = Math.min(0.14, (context.lootLuck || 0) * 0.28);
    return softRound(clamp(0.9 + sourceMod + luckMod + (Math.random() * 0.2), 0.82, 1.24), 3);
  }

  function resolveItemLevel(context = {}) {
    if (context.itemLevel) return Math.max(1, Math.round(context.itemLevel));
    const playerLevel = Math.max(1, Math.round(context.playerLevel || 1));
    const zoneDepth = Math.max(0, Math.round(context.zoneId || 0));
    const sourceBonus = context.source === 'dungeon'
      ? 2
      : context.source === 'forge'
        ? 1
        : context.source === 'market'
          ? 1
          : 0;
    const enemyBonus = context.enemyKind === 'boss'
      ? 3
      : context.enemyKind === 'elite'
        ? 2
        : 0;
    return Math.max(1, playerLevel + zoneDepth + sourceBonus + enemyBonus + rand(-1, 2));
  }

  function chooseSmartSlot(context = {}) {
    if (context.slot && SLOT_ORDER.includes(context.slot)) return context.slot;
    if (!context.smartLoot || !context.equipment) return pick(SLOT_ORDER);

    const weights = SLOT_ORDER.map((slot) => {
      const equipped = context.equipment[slot];
      const baseWeight = 1;
      if (!equipped) return { slot, weight: baseWeight + 1.9 };
      const equippedScore = equipped.score || computeItemScore(equipped);
      const target = (context.playerLevel || 1) * 56;
      const missing = Math.max(0, target - equippedScore);
      return {
        slot,
        weight: baseWeight + Math.min(2.6, missing / Math.max(120, target)),
      };
    });

    const total = weights.reduce((acc, entry) => acc + entry.weight, 0);
    let roll = Math.random() * total;
    for (let i = 0; i < weights.length; i += 1) {
      roll -= weights[i].weight;
      if (roll <= 0) return weights[i].slot;
    }
    return weights[weights.length - 1].slot;
  }

  function rarityAtLeast(rarityKey, minRarity) {
    if (!minRarity) return rarityKey;
    return rarityOrder(rarityKey) < rarityOrder(minRarity) ? minRarity : rarityKey;
  }

  function pityFor(source, streakData = {}) {
    const sourcePity = (streakData.bySource && streakData.bySource[source]) || {};
    return {
      epic: sourcePity.epic || streakData.epic || 0,
      mythic: sourcePity.mythic || streakData.mythic || 0,
      ascendant: sourcePity.ascendant || streakData.ascendant || 0,
      total: sourcePity.total || streakData.total || 0,
    };
  }

  function nextPity(source, prevStreakData = {}, rarityKey) {
    const next = {
      ...(prevStreakData || {}),
      bySource: {
        ...((prevStreakData && prevStreakData.bySource) || {}),
      },
    };
    const previousBySource = next.bySource[source] || { epic: 0, mythic: 0, ascendant: 0, total: 0 };
    const hasEpic = rarityOrder(rarityKey) >= rarityOrder('epic');
    const hasMythic = rarityOrder(rarityKey) >= rarityOrder('mythic');
    const hasAscendant = rarityKey === 'ascendant';

    const updated = {
      epic: hasEpic ? 0 : (previousBySource.epic || 0) + 1,
      mythic: hasMythic ? 0 : (previousBySource.mythic || 0) + 1,
      ascendant: hasAscendant ? 0 : (previousBySource.ascendant || 0) + 1,
      total: (previousBySource.total || 0) + 1,
      lastDropAt: now(),
      lastRarity: rarityKey,
    };

    next.bySource[source] = updated;
    next.epic = updated.epic;
    next.mythic = updated.mythic;
    next.ascendant = updated.ascendant;
    next.total = updated.total;
    return next;
  }

  function scaleBaseStats(baseStats = {}, itemLevel, rarity) {
    const stats = {};
    Object.entries(baseStats).forEach(([key, value]) => {
      const scaled = CHANCE_STATS.has(key)
        ? chanceScale(value, itemLevel)
        : scaledStatValue(value, itemLevel);
      stats[key] = normalizeStatScale(key, scaled, rarity.mult);
    });
    return stats;
  }

  function computeItemScores(item) {
    const scaled = scaleItemStats(item);
    const combatScore = softRound(
      (scaled.attack || 0) * SCORE_WEIGHTS.attack
      + (scaled.defense || 0) * SCORE_WEIGHTS.defense
      + (scaled.speed || 0) * SCORE_WEIGHTS.speed
      + (scaled.hp || 0) * SCORE_WEIGHTS.hp
      + (scaled.crit || 0) * SCORE_WEIGHTS.crit
      + (scaled.dodge || 0) * SCORE_WEIGHTS.dodge
      + (scaled.block || 0) * SCORE_WEIGHTS.block
      + (scaled.lifesteal || 0) * SCORE_WEIGHTS.lifesteal,
      2,
    );
    const marketScore = softRound(
      combatScore * 0.55
      + (item.economyValue || 0) * 0.24
      + (item.prestige || 0) * 0.21,
      2,
    );
    const buildScore = softRound(
      combatScore * (0.72 + Math.min(0.26, (item.qualityRoll || 1) * 0.18))
      + Math.max(0, (item.powerBudget || 0) - statBudgetPoints(scaled)) * 0.12,
      2,
    );
    return {
      combatScore,
      marketScore,
      buildScore,
    };
  }

  function computeItemScore(item) {
    return computeItemScores(item).combatScore;
  }

  function valueDimensions(item) {
    const rarity = rarityDef(item.rarity);
    const scores = computeItemScores(item);
    const quality = item.qualityRoll || 1;
    const affixCount = (item.affixes || []).length;
    const economyValue = Math.max(
      12,
      Math.round(
        (rarity.valueBase + item.itemLevel * 12 + scores.combatScore * 4.3)
        * (0.82 + quality * 0.4)
        * (1 + affixCount * 0.055)
      ),
    );
    const craftValue = Math.max(
      8,
      Math.round(
        economyValue * (0.34 + Math.min(0.28, affixCount * 0.03 + (item.upgrade || 0) * 0.016)),
      ),
    );
    const prestige = Math.max(
      1,
      Math.round(
        ((rarity.order + 1) ** 2) * 48
        + item.itemLevel * 3.2
        + affixCount * 36
        + Math.max(0, quality - 1) * 180,
      ),
    );

    return {
      economyValue,
      craftValue,
      prestige,
      value: economyValue,
      combatScore: scores.combatScore,
      marketScore: scores.marketScore,
      buildScore: scores.buildScore,
    };
  }

  function finalizeItem(item) {
    const dimensions = valueDimensions(item);
    item.economyValue = dimensions.economyValue;
    item.craftValue = dimensions.craftValue;
    item.prestige = dimensions.prestige;
    item.value = dimensions.value;
    item.combatScore = dimensions.combatScore;
    item.marketScore = dimensions.marketScore;
    item.buildScore = dimensions.buildScore;
    item.score = dimensions.combatScore;
    return item;
  }

  function applyBudgetEnvelope(item) {
    const currentBudget = statBudgetPoints(item.stats);
    const targetBudget = item.powerBudget || currentBudget;
    if (currentBudget <= targetBudget * 1.1) return item;
    const factor = Math.max(0.84, (targetBudget * 1.08) / Math.max(1, currentBudget));
    Object.keys(item.stats || {}).forEach((key) => {
      item.stats[key] = normalizeStatScale(key, item.stats[key], factor);
    });
    return item;
  }

  function makeItemFromBudget(context = {}) {
    const source = context.source || 'arena';
    const slot = chooseSmartSlot(context);
    const itemLevel = resolveItemLevel(context);
    const luck = typeof context.lootLuck === 'number' ? context.lootLuck : getLootLuck();
    const sourcePity = pityFor(source, context.streakData || {});
    const pityTargets = SOURCE_PITY_TARGETS[source] || SOURCE_PITY_TARGETS.arena;
    const forcedFloor = sourcePity.mythic >= pityTargets.mythic
      ? 'mythic'
      : sourcePity.epic >= pityTargets.epic
        ? 'epic'
        : null;

    let rarity = context.forcedRarity
      ? rarityDef(context.forcedRarity)
      : pickRarity(itemLevel, {
        source,
        lootLuck: luck,
        pity: sourcePity,
        ascension: context.ascension || 0,
      });
    const rarityKey = rarityAtLeast(rarity.key, context.minRarity || forcedFloor);
    rarity = rarityDef(rarityKey);

    const base = context.forcedBase ? findBaseItem(slot, context.forcedBase) : pick(ITEM_BASES[slot] || []);
    const qualityRoll = deriveQualityRoll(context);
    const archetype = ITEM_ARCHETYPES[slot] || {};
    const rawBudget = budgetFor(slot, itemLevel, rarity.key);
    const powerBudget = Math.round(rawBudget * qualityRoll * (archetype.qualityBias || 1));

    const stats = scaleBaseStats(base.stats, itemLevel, rarity);
    const basePoints = statBudgetPoints(stats);
    const budgetFactor = clamp(powerBudget / Math.max(1, basePoints), 0.74, 2.35);
    Object.keys(stats).forEach((key) => {
      const statFactor = 0.88 + budgetFactor * 0.12 + slotStatWeight(slot, key) * 0.34;
      stats[key] = normalizeStatScale(key, stats[key], statFactor);
    });

    const item = {
      id: uid(),
      slot,
      name: base.name,
      rarity: rarity.key,
      tier: rarity.order,
      level: itemLevel,
      itemLevel,
      baseName: base.name,
      stats,
      affixes: [],
      upgrade: 0,
      powerBudget,
      qualityRoll,
      provenance: {
        source,
        zoneId: context.zoneId ?? null,
        enemyKind: context.enemyKind || null,
        playerLevel: context.playerLevel || itemLevel,
        ascension: context.ascension || 0,
        createdAt: now(),
      },
      lockFlags: {
        bound: false,
        crafted: source === 'forge',
        transcended: false,
      },
      createdAt: now(),
      reforge: 0,
      transcend: 0,
    };

    applyAffixesWithBudget(item, {
      ...context,
      guaranteedAffixes: context.guaranteedAffixes || 0,
    });
    applyBudgetEnvelope(item);
    return finalizeItem(item);
  }

  function applyAffixesWithBudget(item, context = {}) {
    const rarity = rarityDef(item.rarity);
    const guaranteed = Math.max(0, Math.round(context.guaranteedAffixes || 0));
    const bonusFromQuality = item.qualityRoll >= 1.16 ? 1 : 0;
    const maxAffixes = Math.min(7, rarity.affixes + guaranteed + bonusFromQuality);
    const minAffixes = Math.max(0, rarity.affixes - (item.qualityRoll < 0.94 ? 1 : 0));
    const affixCount = clamp(rand(minAffixes, maxAffixes), 0, 7);
    const used = new Set();
    const applied = [];

    for (let i = 0; i < affixCount; i += 1) {
      let guard = 0;
      let affix = pick(AFFIXES);
      while (guard < 40 && used.has(affix.prefix || affix.suffix)) {
        affix = pick(AFFIXES);
        guard += 1;
      }
      used.add(affix.prefix || affix.suffix);
      applied.push(affix);
      Object.entries(affix.stats || {}).forEach(([key, value]) => {
        const baseScaled = CHANCE_STATS.has(key)
          ? chanceScale(value, item.itemLevel)
          : scaledStatValue(value, item.itemLevel);
        const budgetHeadroom = Math.max(0.16, (item.powerBudget - statBudgetPoints(item.stats)) / Math.max(1, item.powerBudget));
        const affixFactor = CHANCE_STATS.has(key)
          ? 0.64 + budgetHeadroom * 0.42 + (item.qualityRoll - 1) * 0.2
          : 0.72 + budgetHeadroom * 0.56 + (item.qualityRoll - 1) * 0.34;
        const delta = normalizeStatScale(key, baseScaled, Math.max(0.18, affixFactor));
        item.stats[key] = softRound((item.stats[key] || 0) + delta, CHANCE_STATS.has(key) ? 4 : 2);
      });
    }

    item.affixes = applied.map((affix) => affix.prefix || affix.suffix);
    const firstPrefix = applied.find((affix) => affix.prefix);
    const firstSuffix = applied.find((affix) => affix.suffix);
    item.name = [firstPrefix ? firstPrefix.prefix : null, item.baseName, firstSuffix ? firstSuffix.suffix : null]
      .filter(Boolean)
      .join(' ');
    return finalizeItem(item);
  }

  function makeItem(slot, level, forcedRarity = null, forcedBase = null, guaranteedAffixes = 0) {
    return makeItemFromBudget({
      source: 'forge',
      slot,
      playerLevel: level,
      itemLevel: level,
      forcedRarity,
      forcedBase,
      guaranteedAffixes,
      qualityRoll: forcedRarity === 'common' ? 0.9 : undefined,
    });
  }

  function makeStarterItem(slot, baseName) {
    const item = makeItem(slot, 1, 'common', baseName, 0);
    item.affixes = [];
    item.name = baseName;
    item.qualityRoll = 0.88;
    item.lockFlags = {
      ...(item.lockFlags || {}),
      starter: true,
      crafted: false,
    };
    item.provenance = {
      ...(item.provenance || {}),
      source: 'starter',
    };
    return finalizeItem(item);
  }

  function rollLoot(context = {}) {
    const source = context.source || 'arena';
    const item = makeItemFromBudget(context);
    const nextStreakData = nextPity(source, context.streakData || {}, item.rarity);
    const sourcePity = pityFor(source, nextStreakData);

    return {
      item,
      streakData: nextStreakData,
      pityState: {
        source,
        epic: sourcePity.epic,
        mythic: sourcePity.mythic,
        ascendant: sourcePity.ascendant,
      },
      milestone: {
        epic: item.rarity === 'epic',
        mythic: item.rarity === 'mythic',
      },
    };
  }

  function marketScarcity(rarityKey) {
    return {
      common: 1,
      uncommon: 1.14,
      rare: 1.42,
      epic: 1.92,
      legendary: 2.76,
      mythic: 4.1,
      ascendant: 7.4,
    }[rarityKey] || 1;
  }

  function generateMarket(level = 1, options = {}) {
    const count = 6 + Math.min(3, Math.floor(level / 10));
    const items = [];
    let streakData = options.streakData || {};

    for (let i = 0; i < count; i += 1) {
      const rotationBias = clamp(1 + (i * 0.04), 1, 1.28);
      const rolled = rollLoot({
        source: 'market',
        playerLevel: level,
        itemLevel: Math.max(1, level + rand(-1, 3)),
        lootLuck: options.lootLuck || 0,
        smartLoot: false,
        streakData,
        ascension: options.ascension || 0,
      });
      streakData = rolled.streakData;
      const item = rolled.item;
      const levelMod = 1 + Math.max(0, level - 1) * 0.012;
      const buyPrice = Math.round(item.economyValue * marketScarcity(item.rarity) * rotationBias * levelMod);
      item.price = buyPrice;
      item.marketMeta = {
        scarcity: marketScarcity(item.rarity),
        rotationBias,
        levelMod,
      };
      items.push(item);
    }

    const sorted = items.sort((a, b) => (b.marketScore || 0) - (a.marketScore || 0));
    if (options.returnMeta) {
      return {
        items: sorted,
        streakData,
      };
    }
    return sorted;
  }

  function starterInventory() {
    return [
      makeStarterItem('helm', 'Yelmo de Bronce'),
      makeStarterItem('boots', 'Sandalias de Arena'),
      makeItem('ring', 1, 'uncommon'),
    ];
  }

  function scaleItemStats(item) {
    const level = item.itemLevel || item.level || 1;
    const upgrade = Math.max(0, item.upgrade || 0);
    const transcend = Math.max(0, item.transcend || 0);
    const quality = item.qualityRoll || 1;
    const enhanceFactor = 1 + upgrade * 0.085 + transcend * 0.035 + Math.max(0, quality - 1) * 0.16;
    const out = {};
    Object.entries(item.stats || {}).forEach(([key, value]) => {
      if (CHANCE_STATS.has(key)) {
        out[key] = chanceScale(value, level, upgrade + transcend);
      } else {
        out[key] = softRound(value * enhanceFactor, 2);
      }
    });
    return out;
  }

  function estimateSalvage(item) {
    const rarity = rarityDef(item.rarity);
    const profile = rarity.salvageProfile || {};
    const affixCount = (item.affixes || []).length;
    const itemLevel = item.itemLevel || item.level || 1;
    const upgrade = item.upgrade || 0;
    return {
      iron: Math.max(1, Math.round((profile.iron || 1) + itemLevel * 0.07 + affixCount * (profile.affixWeight || 0.05) * 4 + upgrade * (profile.upgradeWeight || 0.05))),
      wood: Math.max(0, Math.round((profile.wood || 0) + itemLevel * 0.035 + affixCount * (profile.affixWeight || 0.05) * 2.2)),
      essence: Math.max(0, Math.round((profile.essence || 0) + affixCount * (profile.affixWeight || 0.05) * 1.8 + upgrade * 0.1)),
      sigils: Math.max(0, Math.round((profile.sigils || 0) + Math.max(0, itemLevel - 18) * 0.02 + upgrade * 0.08)),
      echoShards: Math.max(0, Math.round((profile.echoShards || 0) + Math.max(0, itemLevel - 28) * 0.012 + upgrade * 0.06)),
    };
  }

  function normalizeItem(item, fallback = {}) {
    if (!item || typeof item !== 'object') return null;
    const slot = SLOT_ORDER.includes(item.slot) ? item.slot : (fallback.slot || SLOT_ORDER[0]);
    const rarity = rarityDef(item.rarity || fallback.rarity || 'common');
    const itemLevel = Math.max(1, Math.round(item.itemLevel || item.level || fallback.itemLevel || 1));
    const qualityRoll = clamp(typeof item.qualityRoll === 'number' ? item.qualityRoll : 1, 0.82, 1.24);
    const powerBudget = Math.max(1, Math.round(item.powerBudget || budgetFor(slot, itemLevel, rarity.key) * qualityRoll));

    const normalized = {
      ...item,
      id: item.id || uid(),
      slot,
      rarity: rarity.key,
      tier: typeof item.tier === 'number' ? item.tier : rarity.order,
      level: itemLevel,
      itemLevel,
      name: item.name || item.baseName || 'Objeto sin nombre',
      baseName: item.baseName || item.name || 'Base desconocida',
      stats: { ...(item.stats || {}) },
      affixes: Array.isArray(item.affixes) ? item.affixes : [],
      upgrade: Math.max(0, Math.round(item.upgrade || 0)),
      reforge: Math.max(0, Math.round(item.reforge || 0)),
      transcend: Math.max(0, Math.round(item.transcend || 0)),
      qualityRoll,
      powerBudget,
      provenance: {
        source: item.provenance && item.provenance.source ? item.provenance.source : (fallback.source || 'legacy'),
        zoneId: item.provenance && item.provenance.zoneId !== undefined ? item.provenance.zoneId : null,
        enemyKind: item.provenance && item.provenance.enemyKind ? item.provenance.enemyKind : null,
        playerLevel: item.provenance && item.provenance.playerLevel ? item.provenance.playerLevel : itemLevel,
        ascension: item.provenance && item.provenance.ascension ? item.provenance.ascension : 0,
        createdAt: item.provenance && item.provenance.createdAt ? item.provenance.createdAt : (item.createdAt || now()),
      },
      lockFlags: {
        bound: !!(item.lockFlags && item.lockFlags.bound),
        crafted: !!(item.lockFlags && item.lockFlags.crafted),
        transcended: !!(item.lockFlags && item.lockFlags.transcended),
        starter: !!(item.lockFlags && item.lockFlags.starter),
      },
      createdAt: item.createdAt || now(),
    };

    applyBudgetEnvelope(normalized);
    return finalizeItem(normalized);
  }

  return {
    scaleItemStats,
    computeItemScores,
    computeItemScore,
    estimateSalvage,
    makeItem,
    makeStarterItem,
    rollLoot,
    makeItemFromBudget,
    applyAffixesWithBudget,
    generateMarket,
    starterInventory,
    normalizeItem,
  };
}
