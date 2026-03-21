export function createItemsDomain(deps) {
  const {
    ITEM_BASES,
    AFFIXES,
    SLOT_ORDER,
    pick,
    rand,
    uid,
    softRound,
    rarityDef,
    pickRarity,
    findBaseItem,
    scaledStatValue,
    getLootLuck,
  } = deps;

  function scaleItemStats(item) {
    const factor = 1 + ((item.upgrade || 0) * 0.12);
    const out = {};
    Object.entries(item.stats || {}).forEach(([key, value]) => {
      if (key === 'crit' || key === 'dodge' || key === 'block' || key === 'lifesteal') {
        out[key] = softRound(value + (item.upgrade || 0) * 0.002, 4);
      } else {
        out[key] = softRound(value * factor, 2);
      }
    });
    return out;
  }

  function computeItemScore(item) {
    const s = scaleItemStats(item);
    return softRound(
      (s.attack || 0) * 2.1 +
      (s.defense || 0) * 1.85 +
      (s.speed || 0) * 1.45 +
      (s.hp || 0) * 0.18 +
      (s.crit || 0) * 120 +
      (s.dodge || 0) * 90 +
      (s.block || 0) * 70 +
      (s.lifesteal || 0) * 140,
      1
    );
  }

  function makeItem(slot, level, forcedRarity = null, forcedBase = null, guaranteedAffixes = 0) {
    const base = forcedBase ? findBaseItem(slot, forcedBase) : pick(ITEM_BASES[slot]);
    const rarity = forcedRarity ? rarityDef(forcedRarity) : pickRarity(level, getLootLuck());
    const stats = {};

    Object.entries(base.stats).forEach(([key, value]) => {
      const scaled = typeof value === 'number'
        ? (key === 'crit' || key === 'dodge' || key === 'block' || key === 'lifesteal'
          ? value + Math.max(0, level - 1) * 0.0005
          : scaledStatValue(value, level))
        : value;
      stats[key] = softRound(scaled * rarity.mult, 3);
    });

    const affixCount = Math.min(5, rarity.affixes + guaranteedAffixes);
    const used = new Set();
    const applied = [];

    for (let i = 0; i < affixCount; i++) {
      let affix = pick(AFFIXES);
      let guard = 0;
      while (used.has(affix.prefix || affix.suffix) && guard < 20) {
        affix = pick(AFFIXES);
        guard += 1;
      }
      used.add(affix.prefix || affix.suffix);
      applied.push(affix);
      Object.entries(affix.stats).forEach(([key, value]) => {
        const scaled = (key === 'crit' || key === 'dodge' || key === 'block' || key === 'lifesteal')
          ? value + Math.max(0, level - 1) * 0.0005
          : scaledStatValue(value, level);
        stats[key] = softRound((stats[key] || 0) + scaled, 3);
      });
    }

    const nameParts = [];
    const firstPrefix = applied.find((a) => a.prefix);
    const firstSuffix = applied.find((a) => a.suffix);
    if (firstPrefix) nameParts.push(firstPrefix.prefix);
    nameParts.push(base.name);
    if (firstSuffix) nameParts.push(firstSuffix.suffix);

    const item = {
      id: uid(),
      slot,
      name: nameParts.join(' '),
      rarity: rarity.key,
      level,
      baseName: base.name,
      stats,
      affixes: applied.map((a) => a.prefix || a.suffix),
      value: Math.max(12, Math.round((rarity.value + level * 8) * (1 + affixCount * 0.18))),
      upgrade: 0,
      createdAt: Date.now(),
    };
    item.score = computeItemScore(item);
    return item;
  }

  function makeStarterItem(slot, baseName) {
    const item = makeItem(slot, 1, 'common', baseName, 0);
    item.affixes = [];
    item.name = baseName;
    item.score = computeItemScore(item);
    return item;
  }

  function rollMarketRarity(level = 1) {
    const roll = Math.random();
    if (level >= 32 && roll < 0.0015) return 'mythic';
    if (level >= 24 && roll < 0.012) return 'legendary';
    if (level >= 16 && roll < 0.055) return 'epic';
    if (level >= 8 && roll < 0.22) return 'rare';
    if (roll < 0.58) return 'uncommon';
    return 'common';
  }

  function generateMarket(level = 1) {
    const items = [];
    const count = 6 + Math.min(2, Math.floor(level / 12));
    const scarcityMult = {
      common: 1.05,
      uncommon: 1.16,
      rare: 1.48,
      epic: 2.05,
      legendary: 3.1,
      mythic: 4.8,
    };

    for (let i = 0; i < count; i++) {
      const slot = pick(SLOT_ORDER);
      const rarityKey = rollMarketRarity(level);
      const item = makeItem(slot, Math.max(1, level + rand(-1, 3)), rarityKey);
      item.price = Math.round(item.value * scarcityMult[item.rarity] * (1 + Math.max(0, level - 1) * 0.015));
      items.push(item);
    }
    return items.sort((a, b) => (b.price || 0) - (a.price || 0));
  }

  function starterInventory() {
    return [
      makeStarterItem('helm', 'Yelmo de Bronce'),
      makeStarterItem('boots', 'Sandalias de Arena'),
      makeItem('ring', 1, 'uncommon'),
    ];
  }

  return {
    scaleItemStats,
    computeItemScore,
    makeItem,
    makeStarterItem,
    generateMarket,
    starterInventory,
  };
}
