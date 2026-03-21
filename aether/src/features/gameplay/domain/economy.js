const CRAFT_TIERS = {
  basic: {
    label: 'forja basica',
    minRarity: 'common',
    guaranteedAffixes: 0,
    qualityMin: 0.9,
    qualityMax: 1.08,
    cost: { gold: 150, iron: 10, wood: 6 },
  },
  advanced: {
    label: 'forja avanzada',
    minRarity: 'rare',
    guaranteedAffixes: 1,
    qualityMin: 0.96,
    qualityMax: 1.15,
    cost: { gold: 310, iron: 14, wood: 8, essence: 2 },
  },
  apex: {
    label: 'forja apex',
    minRarity: 'epic',
    guaranteedAffixes: 2,
    qualityMin: 1.02,
    qualityMax: 1.22,
    cost: { gold: 660, iron: 24, wood: 12, essence: 5, sigils: 2, echoShards: 1 },
  },
};

const SCARCITY_MULT = {
  common: 1,
  uncommon: 1.16,
  rare: 1.48,
  epic: 2.04,
  legendary: 3.2,
  mythic: 5,
  ascendant: 8.4,
};

export function createEconomyDomain(deps) {
  const {
    rarityDef,
    rarityOrder,
    nextRarityKey,
    clamp,
    rand,
    uid,
    clone,
    generateMarket,
    makeItem,
    rollLoot,
    estimateSalvage,
    computeItemScore,
  } = deps;

  function hasInventorySpace(state, maxInventory) {
    return state.player.inventory.length < maxInventory;
  }

  function removeInventoryItem(state, itemId) {
    state.player.inventory = state.player.inventory.filter((item) => item.id !== itemId);
  }

  function getInventoryItem(state, itemId) {
    return state.player.inventory.find((item) => item.id === itemId);
  }

  function getAnyOwnedItem(state, itemId) {
    return getInventoryItem(state, itemId) || Object.values(state.player.equipment).find((item) => item && item.id === itemId);
  }

  function sortInventory(state) {
    state.player.inventory.sort((a, b) => {
      const rarityGap = rarityOrder(b.rarity) - rarityOrder(a.rarity);
      if (rarityGap !== 0) return rarityGap;
      return (b.score || 0) - (a.score || 0);
    });
  }

  function profileForTier(tier = 'basic') {
    if (tier === 'normal') return CRAFT_TIERS.basic;
    if (tier === 'premium') return CRAFT_TIERS.advanced;
    if (tier === 'mythic' || tier === 'endgame') return CRAFT_TIERS.apex;
    return CRAFT_TIERS[tier] || CRAFT_TIERS.basic;
  }

  function totalMaterialSpend(cost = {}) {
    return Object.entries(cost)
      .filter(([key]) => key !== 'gold')
      .reduce((sumValue, [, value]) => sumValue + (Number(value) || 0), 0);
  }

  function applySpendTracking(state, cost = {}) {
    state.stats.goldSpent = (state.stats.goldSpent || 0) + (cost.gold || 0);
    state.stats.materialsSpent = (state.stats.materialsSpent || 0) + totalMaterialSpend(cost);
  }

  function hasCost(state, cost = {}) {
    return Object.entries(cost).every(([key, value]) => (state.player[key] || 0) >= value);
  }

  function spendCost(state, cost = {}) {
    Object.entries(cost).forEach(([key, value]) => {
      state.player[key] = Math.max(0, (state.player[key] || 0) - value);
    });
    applySpendTracking(state, cost);
  }

  function addResources(state, patch = {}) {
    Object.entries(patch).forEach(([key, value]) => {
      if (key in state.player) state.player[key] = (state.player[key] || 0) + value;
    });
  }

  function antiExploitFactor(item, mode = 'sell') {
    const ageMinutes = Math.max(0, (Date.now() - (item.createdAt || Date.now())) / 60000);
    const source = (item.provenance && item.provenance.source) || 'legacy';
    let factor = 1;

    if (mode === 'sell') {
      if (source === 'forge' && ageMinutes < 30) factor *= 0.62;
      if (source === 'market' && ageMinutes < 12) factor *= 0.76;
      if (source === 'legacy' && ageMinutes < 2) factor *= 0.9;
      factor *= 1 - Math.min(0.28, (item.reforge || 0) * 0.04);
    }

    if (mode === 'salvage') {
      if (source === 'market' && ageMinutes < 15) factor *= 0.58;
      if (source === 'forge' && ageMinutes < 10) factor *= 0.76;
      if (item.lockFlags && item.lockFlags.starter) factor *= 0.5;
      factor *= 1 - Math.min(0.24, (item.reforge || 0) * 0.03);
    }

    return clamp(factor, 0.22, 1.05);
  }

  function buyPriceFor(item, level = 1, rotationBias = 1) {
    const economyValue = item.economyValue || item.value || 0;
    const scarcity = SCARCITY_MULT[item.rarity] || 1;
    const levelMod = 1 + Math.max(0, level - 1) * 0.012;
    return Math.round(economyValue * scarcity * rotationBias * levelMod);
  }

  function sellPriceFor(item) {
    const economyValue = item.economyValue || item.value || 0;
    const condition = clamp(0.78 + (item.upgrade || 0) * 0.015 + (item.transcend || 0) * 0.03, 0.6, 0.97);
    const exploitGuard = antiExploitFactor(item, 'sell');
    return Math.max(6, Math.round(economyValue * condition * exploitGuard));
  }

  function salvageYieldFor(item) {
    const base = estimateSalvage(item);
    const factor = antiExploitFactor(item, 'salvage');
    const out = {};
    Object.entries(base).forEach(([key, value]) => {
      out[key] = Math.max(0, Math.round(value * factor));
    });
    return out;
  }

  function trackCraftUsage(state, kind) {
    if (!state.stats.craftUsage) {
      state.stats.craftUsage = {
        craft: 0,
        enhance: 0,
        reforge: 0,
        transcend: 0,
      };
    }
    state.stats.craftUsage[kind] = (state.stats.craftUsage[kind] || 0) + 1;
  }

  function acquireItem(state, item, ctx) {
    if (!item) return;
    const { maxInventory, addJournal, trackQuest, checkAchievements, onItemAcquired } = ctx;
    if (!hasInventorySpace(state, maxInventory)) {
      const fallbackGold = Math.round(sellPriceFor(item) * 0.72);
      state.player.gold += fallbackGold;
      state.stats.earnedGold += fallbackGold;
      addJournal('📦', `Inventario lleno. <span class="rarity-${item.rarity}">${item.name}</span> se convierte en ${fallbackGold} de oro.`);
      trackQuest('earnGold', fallbackGold);
      return;
    }
    state.player.inventory.push(item);
    sortInventory(state);
    if (rarityOrder(item.rarity) >= rarityOrder('legendary')) state.stats.legendaryFound += 1;
    if (rarityOrder(item.rarity) >= rarityOrder('mythic')) state.stats.mythicFound = (state.stats.mythicFound || 0) + 1;
    if (item.rarity === 'ascendant') state.stats.ascendantFound = (state.stats.ascendantFound || 0) + 1;
    if (typeof onItemAcquired === 'function') onItemAcquired(item);
    checkAchievements();
  }

  function equipItem(state, itemId, ctx) {
    const { addJournal } = ctx;
    const item = getInventoryItem(state, itemId);
    if (!item) return;
    const slot = item.slot;
    const equipped = state.player.equipment[slot];
    state.player.equipment[slot] = item;
    removeInventoryItem(state, itemId);
    if (equipped) state.player.inventory.push(equipped);
    sortInventory(state);
    state.stats.equippedUpgrades = (state.stats.equippedUpgrades || 0) + 1;
    addJournal('🧷', `Equipas <span class="rarity-${item.rarity}">${item.name}</span>.`);
  }

  function unequipItem(state, slot, ctx) {
    const { maxInventory, addJournal, toast } = ctx;
    const item = state.player.equipment[slot];
    if (!item || !hasInventorySpace(state, maxInventory)) {
      toast('No hay espacio en el inventario', 'danger');
      return;
    }
    state.player.inventory.push(item);
    state.player.equipment[slot] = null;
    sortInventory(state);
    addJournal('🎒', `Guardas ${item.name} en el inventario.`);
  }

  function sellItem(state, itemId, ctx) {
    const { trackQuest, addJournal } = ctx;
    const item = getInventoryItem(state, itemId);
    if (!item) return;
    const gain = sellPriceFor(item);
    state.player.gold += gain;
    state.stats.earnedGold += gain;
    trackQuest('earnGold', gain);
    removeInventoryItem(state, itemId);
    addJournal('💰', `Vendes ${item.name} por ${gain} de oro.`);
  }

  function salvageItem(state, itemId, ctx) {
    const { trackQuest, addJournal } = ctx;
    const item = getInventoryItem(state, itemId);
    if (!item) return;
    const yieldData = salvageYieldFor(item);
    addResources(state, yieldData);
    state.stats.salvaged += 1;
    trackQuest('salvaged', 1);
    removeInventoryItem(state, itemId);
    const details = Object.entries(yieldData)
      .filter(([, value]) => value > 0)
      .map(([key, value]) => `+${value} ${key}`)
      .join(', ');
    addJournal('♻️', `Reciclas ${item.name}: ${details || 'sin materiales recuperables'}.`);
  }

  function marketRefreshCost(state) {
    const base = 110 + state.player.level * 14;
    const chain = state.market.refreshChainCount || 0;
    const rerollTax = 1 + Math.min(1.4, chain * 0.24);
    return Math.round(base * rerollTax);
  }

  function refreshMarket(state, forcePaid, ctx) {
    const { toast, addJournal, getLootLuck } = ctx;
    const cost = marketRefreshCost(state);
    if (forcePaid) {
      if (state.player.gold < cost) {
        toast('No tienes oro suficiente para refrescar', 'danger');
        return;
      }
      state.player.gold -= cost;
      applySpendTracking(state, { gold: cost });
      state.market.refreshChainCount = (state.market.refreshChainCount || 0) + 1;
    } else {
      state.market.refreshChainCount = 0;
    }

    const marketRoll = generateMarket(state.player.level, {
      lootLuck: typeof getLootLuck === 'function' ? getLootLuck() : 0,
      ascension: state.player.ascension || 0,
      streakData: state.player.itemPity,
      returnMeta: true,
    });
    state.player.itemPity = marketRoll.streakData || state.player.itemPity;

    state.market.items = (marketRoll.items || []).map((item, index) => {
      const rotationBias = clamp(1 + index * 0.04, 1, 1.28);
      const priced = clone(item);
      priced.price = buyPriceFor(priced, state.player.level, rotationBias);
      priced.marketMeta = {
        ...(priced.marketMeta || {}),
        rotationBias,
      };
      return priced;
    });
    state.market.lastRefresh = Date.now();
    state.market.totalRefreshes = (state.market.totalRefreshes || 0) + 1;
    addJournal('🛒', `El mercado renueva su inventario${forcePaid ? ` por ${cost} de oro` : ''}.`);
  }

  function buyMarketItem(state, itemId, ctx) {
    const { maxInventory, toast, addJournal, trackQuest, checkAchievements, onItemAcquired } = ctx;
    const item = state.market.items.find((entry) => entry.id === itemId);
    if (!item) return;
    if (state.player.gold < item.price) {
      toast('Oro insuficiente', 'danger');
      return;
    }
    if (!hasInventorySpace(state, maxInventory)) {
      toast('Inventario lleno', 'danger');
      return;
    }
    state.player.gold -= item.price;
    applySpendTracking(state, { gold: item.price });
    const bought = clone(item);
    bought.id = uid();
    bought.provenance = {
      ...(bought.provenance || {}),
      source: 'market',
      createdAt: Date.now(),
    };
    acquireItem(state, bought, { maxInventory, addJournal, trackQuest, checkAchievements, onItemAcquired });
    state.market.items = state.market.items.filter((entry) => entry.id !== itemId);
    addJournal('🛍️', `Compras ${item.name} por ${item.price} de oro.`);
  }

  function buyResource(state, kind, ctx) {
    const { toast, grantRewards } = ctx;
    const catalog = {
      potion: { price: 120, reward: { potions: 1 }, label: 'Poción' },
      key: { price: 180, reward: { keys: 1 }, label: 'Llave de mazmorra' },
      essence: { price: 140, reward: { essence: 1 }, label: 'Esencia' },
      food: { price: 65, reward: { food: 2 }, label: 'Comida' },
      sigil: { price: 260, reward: { sigils: 1 }, label: 'Sigilo' },
    };
    const entry = catalog[kind];
    if (!entry) return;
    if (state.player.gold < entry.price) {
      toast('Oro insuficiente', 'danger');
      return;
    }
    state.player.gold -= entry.price;
    applySpendTracking(state, { gold: entry.price });
    grantRewards(entry.reward, entry.label);
  }

  function toTierKey(tier = 'basic') {
    if (tier === 'normal') return 'basic';
    if (tier === 'premium') return 'advanced';
    return tier;
  }

  function scaledTierCost(state, slot, tier) {
    const profile = profileForTier(tier);
    const slotMult = slot === 'weapon' || slot === 'chest' ? 1.12 : 1;
    const levelMult = 1 + Math.max(0, state.player.level - 1) * 0.018;
    const out = {};
    Object.entries(profile.cost).forEach(([key, value]) => {
      const scaled = key === 'gold'
        ? value * slotMult * levelMult
        : value * slotMult * (1 + Math.max(0, state.player.level - 1) * 0.006);
      out[key] = Math.max(1, Math.round(scaled));
    });
    return out;
  }

  function craftOutcomesForTier(tierKey) {
    if (tierKey === 'advanced') {
      return [
        { rarity: 'rare', chance: 0.52 },
        { rarity: 'epic', chance: 0.32 },
        { rarity: 'legendary', chance: 0.14 },
        { rarity: 'mythic', chance: 0.02 },
      ];
    }
    if (tierKey === 'apex') {
      return [
        { rarity: 'epic', chance: 0.53 },
        { rarity: 'legendary', chance: 0.31 },
        { rarity: 'mythic', chance: 0.14 },
        { rarity: 'ascendant', chance: 0.02 },
      ];
    }
    return [
      { rarity: 'common', chance: 0.5 },
      { rarity: 'uncommon', chance: 0.31 },
      { rarity: 'rare', chance: 0.16 },
      { rarity: 'epic', chance: 0.03 },
    ];
  }

  function previewCraftItem(state, slot, tier = 'basic') {
    const tierKey = toTierKey(tier);
    const profile = profileForTier(tierKey);
    return {
      slot,
      tier: tierKey,
      cost: scaledTierCost(state, slot, tierKey),
      qualityRange: [profile.qualityMin, profile.qualityMax],
      outcomes: craftOutcomesForTier(tierKey),
      minRarity: profile.minRarity,
    };
  }

  function craftItem(state, payload, ctx) {
    const { maxInventory, toast, addJournal, trackQuest, checkAchievements, getLootLuck, onItemAcquired } = ctx;
    const slot = typeof payload === 'string' ? payload : payload.slot;
    const tier = typeof payload === 'string' ? 'basic' : (payload.tier || 'basic');
    const tierKey = toTierKey(tier);
    const profile = profileForTier(tierKey);
    const cost = scaledTierCost(state, slot, tierKey);

    if (!hasCost(state, cost)) {
      toast('Te faltan materiales', 'danger');
      return;
    }
    if (!hasInventorySpace(state, maxInventory)) {
      toast('Inventario lleno', 'danger');
      return;
    }

    spendCost(state, cost);

    const qualityRoll = profile.qualityMin + Math.random() * (profile.qualityMax - profile.qualityMin);
    const rolled = rollLoot({
      source: 'forge',
      slot,
      playerLevel: state.player.level,
      ascension: state.player.ascension || 0,
      lootLuck: typeof getLootLuck === 'function' ? getLootLuck() : 0,
      streakData: state.player.itemPity,
      minRarity: profile.minRarity,
      guaranteedAffixes: profile.guaranteedAffixes,
      qualityRoll,
      smartLoot: false,
    });

    state.player.itemPity = rolled.streakData;
    const item = rolled.item;
    acquireItem(state, item, { maxInventory, addJournal, trackQuest, checkAchievements, onItemAcquired });
    state.stats.crafted += 1;
    trackCraftUsage(state, 'craft');
    trackQuest('crafts', 1);
    addJournal('🔨', `Completas ${profile.label} y obtienes ${item.name}.`);
    toast(`Nuevo objeto: ${item.name}`, 'gold');
  }

  function enhanceCost(item) {
    const rarity = rarityDef(item.rarity);
    const level = item.itemLevel || item.level || 1;
    const upgrade = item.upgrade || 0;
    return {
      gold: Math.round(90 + level * 18 + upgrade * 72 + rarity.order * 120),
      iron: Math.max(2, Math.round(4 + upgrade * 1.6 + rarity.order * 0.9)),
      essence: Math.max(0, Math.round((upgrade >= 4 ? 1 : 0) + rarity.order * 0.45)),
      sigils: rarity.order >= rarityOrder('legendary') ? Math.max(0, Math.round((upgrade - 5) * 0.4)) : 0,
    };
  }

  function previewEnhanceItem(state, slot) {
    const item = state.player.equipment[slot];
    if (!item) return null;
    const rarity = rarityDef(item.rarity);
    const cap = (rarity.upgradeCaps && rarity.upgradeCaps.enhance) || 10;
    const chance = clamp(0.93 - (item.upgrade || 0) * 0.04 - rarity.order * 0.015, 0.52, 0.96);
    return {
      slot,
      cap,
      current: item.upgrade || 0,
      successChance: chance,
      failureRisk: item.upgrade > 0 ? 'perdida parcial controlada' : 'sin perdida de nivel',
      cost: enhanceCost(item),
    };
  }

  function enhanceItem(state, slot, ctx) {
    const { toast, trackQuest, addJournal } = ctx;
    const item = state.player.equipment[slot];
    if (!item) {
      toast('No tienes ese hueco equipado', 'danger');
      return;
    }

    const rarity = rarityDef(item.rarity);
    const cap = (rarity.upgradeCaps && rarity.upgradeCaps.enhance) || 10;
    if ((item.upgrade || 0) >= cap) {
      toast('Ese objeto ya esta al maximo para su rareza', 'cyan');
      return;
    }

    const cost = enhanceCost(item);
    if (!hasCost(state, cost)) {
      toast('No tienes materiales suficientes', 'danger');
      return;
    }
    spendCost(state, cost);

    const successChance = clamp(0.93 - (item.upgrade || 0) * 0.04 - rarity.order * 0.015, 0.52, 0.96);
    if (Math.random() <= successChance) {
      item.upgrade = (item.upgrade || 0) + 1;
      item.score = computeItemScore(item);
      state.stats.crafted += 1;
      trackCraftUsage(state, 'enhance');
      trackQuest('crafts', 1);
      addJournal('⚒️', `Mejoras ${item.name} a +${item.upgrade}.`);
      return;
    }

    const canDrop = (item.upgrade || 0) > 0 && Math.random() < 0.58;
    if (canDrop) item.upgrade = Math.max(0, item.upgrade - 1);
    item.score = computeItemScore(item);
    state.stats.crafted += 1;
    trackCraftUsage(state, 'enhance');
    trackQuest('crafts', 1);
    addJournal('🧯', `${item.name} resiste la mejora fallida${canDrop ? ' y pierde 1 nivel de mejora' : ' sin perder nivel'}.`);
  }

  function reforgeCost(item) {
    const rarity = rarityDef(item.rarity);
    const level = item.itemLevel || item.level || 1;
    const rollCount = item.reforge || 0;
    return {
      gold: Math.round(180 + level * 16 + rollCount * 92 + rarity.order * 84),
      essence: Math.max(1, Math.round(2 + rarity.order * 0.8 + rollCount * 0.35)),
      sigils: rarity.order >= rarityOrder('epic') ? Math.max(0, Math.round(1 + rollCount * 0.25)) : 0,
    };
  }

  function previewReforgeItem(state, itemId) {
    const item = getAnyOwnedItem(state, itemId);
    if (!item) return null;
    const rarity = rarityDef(item.rarity);
    const cap = (rarity.upgradeCaps && rarity.upgradeCaps.reforge) || 4;
    return {
      itemId,
      current: item.reforge || 0,
      cap,
      successChance: clamp(0.86 - (item.reforge || 0) * 0.08 + rarity.order * 0.01, 0.35, 0.9),
      cost: reforgeCost(item),
    };
  }

  function mergeStats(oldStats = {}, newStats = {}, keepWeight = 0.66) {
    const keys = new Set([...Object.keys(oldStats), ...Object.keys(newStats)]);
    const out = {};
    keys.forEach((key) => {
      const oldValue = oldStats[key] || 0;
      const newValue = newStats[key] || 0;
      out[key] = Number((oldValue * keepWeight + newValue * (1 - keepWeight)).toFixed(key === 'crit' || key === 'dodge' || key === 'block' || key === 'lifesteal' ? 4 : 2));
    });
    return out;
  }

  function reforgeItem(state, itemId, ctx) {
    const { toast, addJournal } = ctx;
    const item = getAnyOwnedItem(state, itemId);
    if (!item) return;

    const rarity = rarityDef(item.rarity);
    const cap = (rarity.upgradeCaps && rarity.upgradeCaps.reforge) || 4;
    if ((item.reforge || 0) >= cap) {
      toast('Este objeto ya alcanzo su limite de reforge', 'cyan');
      return;
    }

    const cost = reforgeCost(item);
    if (!hasCost(state, cost)) {
      toast('Te faltan recursos para retemplar', 'danger');
      return;
    }

    spendCost(state, cost);

    const candidate = makeItem(item.slot, item.itemLevel || item.level || state.player.level, item.rarity, item.baseName, 1);
    const successChance = clamp(0.86 - (item.reforge || 0) * 0.08 + rarity.order * 0.01, 0.35, 0.9);
    const success = Math.random() <= successChance;

    if (success) {
      item.stats = candidate.stats;
      item.affixes = candidate.affixes;
      item.name = candidate.name;
      item.qualityRoll = candidate.qualityRoll;
      addJournal('🌀', `Retemplas ${item.baseName} y nace ${item.name}.`);
    } else {
      item.stats = mergeStats(item.stats, candidate.stats, 0.7);
      item.affixes = Array.from(new Set([...(item.affixes || []), ...(candidate.affixes || [])])).slice(0, rarity.affixes + 1);
      addJournal('🧩', `${item.baseName} se reajusta parcialmente. Conservas parte de los stats previos.`);
    }

    item.reforge = (item.reforge || 0) + 1;
    item.score = computeItemScore(item);
    trackCraftUsage(state, 'reforge');
  }

  function transcendCost(item) {
    const rarity = rarityDef(item.rarity);
    const level = item.itemLevel || item.level || 1;
    return {
      gold: Math.round(900 + level * 42 + rarity.order * 640 + (item.transcend || 0) * 280),
      essence: Math.max(3, Math.round(6 + rarity.order * 2.2)),
      sigils: Math.max(2, Math.round(4 + rarity.order * 1.6)),
      echoShards: Math.max(1, Math.round(1 + rarity.order * 0.8)),
    };
  }

  function previewTranscendItem(state, itemId) {
    const item = getAnyOwnedItem(state, itemId);
    if (!item) return null;
    const rarity = rarityDef(item.rarity);
    const canTranscend = rarity.upgradeCaps && rarity.upgradeCaps.transcend;
    if (!canTranscend) return null;
    const nextRarity = nextRarityKey(item.rarity, 1);
    if (nextRarity === item.rarity) return null;
    const successChance = clamp(0.42 - rarity.order * 0.05 - (item.transcend || 0) * 0.08, 0.1, 0.58);
    return {
      itemId,
      from: item.rarity,
      to: nextRarity,
      successChance,
      cost: transcendCost(item),
      requirements: {
        minUpgrade: Math.max(5, ((rarity.upgradeCaps && rarity.upgradeCaps.enhance) || 10) - 2),
      },
    };
  }

  function transcendItem(state, itemId, ctx) {
    const { toast, addJournal } = ctx;
    const item = getAnyOwnedItem(state, itemId);
    if (!item) return;
    const rarity = rarityDef(item.rarity);
    const canTranscend = rarity.upgradeCaps && rarity.upgradeCaps.transcend;
    if (!canTranscend) {
      toast('Esta rareza no puede trascender mas', 'danger');
      return;
    }

    const minUpgrade = Math.max(5, ((rarity.upgradeCaps && rarity.upgradeCaps.enhance) || 10) - 2);
    if ((item.upgrade || 0) < minUpgrade) {
      toast(`Necesitas al menos mejora +${minUpgrade} para trascender`, 'danger');
      return;
    }

    const targetRarity = nextRarityKey(item.rarity, 1);
    if (targetRarity === item.rarity) {
      toast('No existe una rareza superior para este objeto', 'danger');
      return;
    }

    const cost = transcendCost(item);
    if (!hasCost(state, cost)) {
      toast('No tienes recursos para trascender', 'danger');
      return;
    }
    spendCost(state, cost);

    const successChance = clamp(0.42 - rarity.order * 0.05 - (item.transcend || 0) * 0.08, 0.1, 0.58);
    const success = Math.random() <= successChance;
    trackCraftUsage(state, 'transcend');

    if (!success) {
      item.qualityRoll = clamp((item.qualityRoll || 1) + 0.01, 0.82, 1.24);
      item.score = computeItemScore(item);
      addJournal('🌫️', `El ritual de trascendencia de ${item.name} falla, pero la pieza retiene estabilidad.`);
      return;
    }

    const evolved = makeItem(item.slot, (item.itemLevel || item.level || state.player.level) + 2, targetRarity, item.baseName, 1);
    item.rarity = targetRarity;
    item.tier = rarityDef(targetRarity).order;
    item.stats = evolved.stats;
    item.affixes = evolved.affixes;
    item.name = evolved.name;
    item.itemLevel = evolved.itemLevel;
    item.level = evolved.level;
    item.powerBudget = Math.round(Math.max(item.powerBudget || 1, evolved.powerBudget || 1) * 1.14);
    item.qualityRoll = clamp(Math.max(item.qualityRoll || 1, evolved.qualityRoll || 1), 0.82, 1.24);
    item.transcend = (item.transcend || 0) + 1;
    item.lockFlags = {
      ...(item.lockFlags || {}),
      transcended: true,
    };
    item.score = computeItemScore(item);
    addJournal('🌌', `${item.baseName} trasciende a calidad ${targetRarity}.`);
  }

  function autoManage(state, ctx) {
    const { toast, trackQuest, addJournal } = ctx;
    const junk = state.player.inventory.filter((item) => {
      const rarity = rarityOrder(item.rarity);
      const score = item.score || computeItemScore(item);
      return rarity <= rarityOrder('uncommon') && score < state.player.level * 40;
    });

    if (!junk.length) {
      toast('No hay chatarra segura para limpiar', 'cyan');
      return;
    }

    let totalGold = 0;
    junk.forEach((item) => {
      totalGold += Math.round(sellPriceFor(item) * 0.92);
    });
    state.player.inventory = state.player.inventory.filter((item) => !junk.some((entry) => entry.id === item.id));
    state.player.gold += totalGold;
    state.stats.earnedGold += totalGold;
    trackQuest('earnGold', totalGold);
    addJournal('🧹', `Limpieza automatica: ${junk.length} objetos convertidos en ${totalGold} de oro.`);
  }

  function forgeItem(state, slot, tier, ctx) {
    return craftItem(state, { slot, tier: tier === 'premium' ? 'advanced' : 'basic' }, ctx);
  }

  function upgradeEquipped(state, slot, ctx) {
    return enhanceItem(state, slot, ctx);
  }

  function rerollItem(state, itemId, ctx) {
    return reforgeItem(state, itemId, ctx);
  }

  return {
    acquireItem,
    removeInventoryItem,
    getInventoryItem,
    equipItem,
    unequipItem,
    sellPriceFor,
    sellItem,
    salvageYieldFor,
    salvageItem,
    marketRefreshCost,
    refreshMarket,
    buyMarketItem,
    buyResource,
    previewCraftItem,
    craftItem,
    previewEnhanceItem,
    enhanceItem,
    previewReforgeItem,
    reforgeItem,
    previewTranscendItem,
    transcendItem,
    forgeItem,
    upgradeEquipped,
    rerollItem,
    autoManage,
  };
}
