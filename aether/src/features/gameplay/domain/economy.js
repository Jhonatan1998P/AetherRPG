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
    cost: { gold: 310, iron: 14, wood: 8, essence: 2, catalysts: 1 },
  },
  apex: {
    label: 'forja apex',
    minRarity: 'epic',
    guaranteedAffixes: 2,
    qualityMin: 1.02,
    qualityMax: 1.22,
    cost: { gold: 660, iron: 24, wood: 12, essence: 5, sigils: 2, echoShards: 1, catalysts: 2 },
  },
};

const REFORGE_MODE_DEFS = {
  total: {
    id: 'total',
    label: 'Reforge total',
    keepWeight: 0,
    costMult: 0.92,
    successBonus: 0,
    variance: 'alta',
  },
  partial: {
    id: 'partial',
    label: 'Reforge parcial',
    keepWeight: 0.42,
    costMult: 1.22,
    successBonus: 0.04,
    variance: 'media',
  },
  lock: {
    id: 'lock',
    label: 'Reforge con bloqueo',
    keepWeight: 0.56,
    costMult: 1.36,
    successBonus: 0.08,
    variance: 'baja',
  },
};

const CHANCE_STATS = new Set(['crit', 'dodge', 'block', 'lifesteal']);
const MATERIAL_KEYS = ['iron', 'wood', 'essence', 'sigils', 'echoShards', 'catalysts'];

const SCARCITY_MULT = {
  common: 1,
  uncommon: 1.16,
  rare: 1.48,
  epic: 2.04,
  legendary: 3.2,
  mythic: 5,
  ascendant: 8.4,
};

const RESOURCE_CATALOG_BASE = {
  potion: {
    basePrice: 120,
    reward: { potions: 1 },
    label: 'Poción',
    priceBias: 1.02,
    levelSlope: 0.018,
    powerPivot: 260,
    powerCap: 1.5,
    powerSlope: 0.24,
    stageMult: { early: 0.92, mid: 1.0, late: 1.08 },
    minMult: 0.84,
    maxMult: 3.2,
    spendBias: 0.5,
    spendBandMin: 0.09,
    spendBandMax: 0.11,
  },
  key: {
    basePrice: 180,
    reward: { keys: 1 },
    label: 'Llave de mazmorra',
    priceBias: 1.05,
    levelSlope: 0.024,
    powerPivot: 220,
    powerCap: 1.7,
    powerSlope: 0.28,
    stageMult: { early: 0.98, mid: 1.06, late: 1.16 },
    minMult: 0.92,
    maxMult: 4.4,
    spendBias: 0.85,
    spendBandMin: 0.15,
    spendBandMax: 0.2,
  },
  essence: {
    basePrice: 140,
    reward: { essence: 1 },
    label: 'Esencia',
    priceBias: 1.02,
    levelSlope: 0.02,
    powerPivot: 230,
    powerCap: 1.6,
    powerSlope: 0.26,
    stageMult: { early: 0.94, mid: 1.02, late: 1.1 },
    minMult: 0.88,
    maxMult: 3.8,
    spendBias: 0.55,
    spendBandMin: 0.1,
    spendBandMax: 0.14,
  },
  catalyst: {
    basePrice: 320,
    reward: { catalysts: 1 },
    label: 'Catalizador',
    priceBias: 1.1,
    levelSlope: 0.026,
    powerPivot: 210,
    powerCap: 1.8,
    powerSlope: 0.3,
    stageMult: { early: 1.0, mid: 1.1, late: 1.24 },
    minMult: 0.96,
    maxMult: 5.3,
    spendBias: 1,
    spendBandMin: 0.15,
    spendBandMax: 0.2,
  },
  food: {
    basePrice: 65,
    reward: { food: 2 },
    label: 'Comida',
    priceBias: 0.95,
    levelSlope: 0.014,
    powerPivot: 300,
    powerCap: 1.4,
    powerSlope: 0.2,
    stageMult: { early: 0.9, mid: 0.98, late: 1.05 },
    minMult: 0.78,
    maxMult: 2.6,
    spendBias: 0.2,
    spendBandMin: 0.08,
    spendBandMax: 0.12,
  },
  sigil: {
    basePrice: 260,
    reward: { sigils: 1 },
    label: 'Sigilo',
    priceBias: 1.08,
    levelSlope: 0.025,
    powerPivot: 215,
    powerCap: 1.75,
    powerSlope: 0.29,
    stageMult: { early: 0.98, mid: 1.08, late: 1.2 },
    minMult: 0.94,
    maxMult: 4.9,
    spendBias: 0.9,
    spendBandMin: 0.15,
    spendBandMax: 0.2,
  },
};

const CRAFT_GOLD_TARGET_RATIOS = {
  basic: { early: 0.095, mid: 0.105, late: 0.118 },
  advanced: { early: 0.165, mid: 0.175, late: 0.195 },
  apex: { early: 0.23, mid: 0.245, late: 0.27 },
};

export function createEconomyDomain(deps) {
  const {
    FORGE_SCHOOLS,
    FORGE_MASTERY_NODES,
    FORGE_ACTION_PITY,
    FORGE_ECONOMY_TARGETS,
    ITEM_ARCHETYPES,
    SLOT_ORDER,
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
    computeItemScores,
    normalizeItem,
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

  const masteryNodeMap = Object.fromEntries((FORGE_MASTERY_NODES || []).map((node) => [node.id, node]));

  function ensureForgeState(state) {
    if (!state.player.forge || typeof state.player.forge !== 'object') {
      state.player.forge = {
        school: 'arsenal',
        masteryPoints: 0,
        masteryNodes: {},
        actionPity: { enhance: 0, reforge: 0, transcend: 0, stabilize: 0 },
        actionCounters: { craft: 0, enhance: 0, reforge: 0, transcend: 0, stabilize: 0, convert: 0 },
        itemRerollChains: {},
        firstTranscendAt: null,
        firstStabilizeAt: null,
      };
    }
    const forge = state.player.forge;
    forge.school = forge.school || 'arsenal';
    forge.masteryPoints = Math.max(0, Number(forge.masteryPoints || 0));
    forge.masteryNodes = forge.masteryNodes && typeof forge.masteryNodes === 'object' ? forge.masteryNodes : {};
    forge.actionPity = forge.actionPity && typeof forge.actionPity === 'object'
      ? forge.actionPity
      : { enhance: 0, reforge: 0, transcend: 0, stabilize: 0 };
    forge.actionCounters = forge.actionCounters && typeof forge.actionCounters === 'object'
      ? forge.actionCounters
      : { craft: 0, enhance: 0, reforge: 0, transcend: 0, stabilize: 0, convert: 0 };
    forge.itemRerollChains = forge.itemRerollChains && typeof forge.itemRerollChains === 'object' ? forge.itemRerollChains : {};
    return forge;
  }

  function ensureForgeTelemetry(state) {
    if (!state.stats.telemetry || typeof state.stats.telemetry !== 'object') {
      state.stats.telemetry = {};
    }
    if (!state.stats.telemetry.forge || typeof state.stats.telemetry.forge !== 'object') {
      state.stats.telemetry.forge = {
        samples: { craft: 0, enhance: 0, reforge: 0, transcend: 0, stabilize: 0, convert: 0 },
        usefulOutcomes: { enhance: 0, reforge: 0, transcend: 0, stabilize: 0 },
        favorableOutcomes: 0,
        neutralOutcomes: 0,
        unfavorableOutcomes: 0,
        actionPityState: { enhance: 0, reforge: 0, transcend: 0, stabilize: 0 },
        costPerUsefulOutcome: { gold: 0, materials: 0, samples: 0 },
        firstMeaningfulUpgradeAt: null,
        firstSpecializationDecisionAt: null,
        schoolSwaps: 0,
        loops: { craftToSellRoi: [], buyToSalvageRoi: [] },
        threatToAffinity: [],
        governance: {
          shortCycleRetunes: 0,
          mediumCycleRetunes: 0,
          longCycleRetunes: 0,
          lastRetuneAt: null,
        },
      };
    }
    const forgeTelemetry = state.stats.telemetry.forge;
    if (!forgeTelemetry.samples || typeof forgeTelemetry.samples !== 'object') {
      forgeTelemetry.samples = { craft: 0, enhance: 0, reforge: 0, transcend: 0, stabilize: 0, convert: 0 };
    }
    if (!forgeTelemetry.usefulOutcomes || typeof forgeTelemetry.usefulOutcomes !== 'object') {
      forgeTelemetry.usefulOutcomes = { enhance: 0, reforge: 0, transcend: 0, stabilize: 0 };
    }
    if (!forgeTelemetry.actionPityState || typeof forgeTelemetry.actionPityState !== 'object') {
      forgeTelemetry.actionPityState = { enhance: 0, reforge: 0, transcend: 0, stabilize: 0 };
    }
    if (!forgeTelemetry.costPerUsefulOutcome || typeof forgeTelemetry.costPerUsefulOutcome !== 'object') {
      forgeTelemetry.costPerUsefulOutcome = { gold: 0, materials: 0, samples: 0 };
    }
    if (!forgeTelemetry.loops || typeof forgeTelemetry.loops !== 'object') {
      forgeTelemetry.loops = { craftToSellRoi: [], buyToSalvageRoi: [] };
    }
    if (!Array.isArray(forgeTelemetry.loops.craftToSellRoi)) forgeTelemetry.loops.craftToSellRoi = [];
    if (!Array.isArray(forgeTelemetry.loops.buyToSalvageRoi)) forgeTelemetry.loops.buyToSalvageRoi = [];
    if (!Array.isArray(forgeTelemetry.threatToAffinity)) forgeTelemetry.threatToAffinity = [];
    return forgeTelemetry;
  }

  function nowElapsedSinceStart(state) {
    const startedAt = state.stats && state.stats.telemetry && state.stats.telemetry.startedAt
      ? state.stats.telemetry.startedAt
      : Date.now();
    return Math.max(0, Date.now() - startedAt);
  }

  function currentForgeStage(state) {
    const level = Number(state.player.level || 1);
    const stages = Array.isArray(FORGE_ECONOMY_TARGETS) ? FORGE_ECONOMY_TARGETS : Object.values(FORGE_ECONOMY_TARGETS || {});
    if (!stages.length) return 'early';
    const match = stages.find((stage) => level >= stage.minLevel && level <= stage.maxLevel);
    if (match && match.minLevel <= 12) return 'early';
    if (match && match.minLevel <= 25) return 'mid';
    if (match) return 'late';
    return level <= 12 ? 'early' : level <= 25 ? 'mid' : 'late';
  }

  function selectedSchool(state) {
    const forge = ensureForgeState(state);
    return (FORGE_SCHOOLS && FORGE_SCHOOLS[forge.school]) || FORGE_SCHOOLS.arsenal;
  }

  function diminishingGain(rank, sharpness = 0.56) {
    return 1 - Math.exp(-Math.max(0, Number(rank || 0)) * sharpness);
  }

  function masteryBonuses(state) {
    const forge = ensureForgeState(state);
    const out = {
      costReduction: 0,
      salvageBoost: 0,
      enhanceChance: 0,
      reforgeChance: 0,
      transcendChance: 0,
      transcendFailureGuard: 0,
      forgePowerBonus: 0,
      resonanceBonus: 0,
      stabilizePower: 0,
      qualityBias: 0,
    };
    Object.entries(forge.masteryNodes || {}).forEach(([nodeId, rank]) => {
      const node = masteryNodeMap[nodeId];
      if (!node || !node.effects) return;
      if (node.school !== 'shared' && node.school !== forge.school) return;
      const gain = diminishingGain(rank, 0.54);
      Object.entries(node.effects).forEach(([key, value]) => {
        out[key] = (out[key] || 0) + Number(value || 0) * gain;
      });
    });
    return out;
  }

  function forgeProfile(state) {
    const school = selectedSchool(state);
    const mastery = masteryBonuses(state);
    return {
      school,
      mastery,
    };
  }

  function affinityThreshold(level = 0) {
    return 26 + Math.max(0, Math.round(level || 0)) * 16;
  }

  function ensureItemAffinity(item) {
    if (!item || typeof item !== 'object') return;
    item.affinityXp = Math.max(0, Number(item.affinityXp || 0));
    item.affinityLevel = Math.max(0, Number(item.affinityLevel || 0));
  }

  function grantAffinity(item, amount = 0) {
    if (!item || !amount) return { leveled: 0, gain: 0 };
    ensureItemAffinity(item);
    item.affinityXp += Math.max(0, Number(amount || 0));
    let leveled = 0;
    while (item.affinityLevel < 10 && item.affinityXp >= affinityThreshold(item.affinityLevel)) {
      item.affinityXp -= affinityThreshold(item.affinityLevel);
      item.affinityLevel += 1;
      leveled += 1;
    }
    return {
      leveled,
      gain: amount,
    };
  }

  function affinityCostReduction(item) {
    ensureItemAffinity(item);
    return Math.min(0.18, item.affinityLevel * 0.02);
  }

  function affinityControlBonus(item) {
    ensureItemAffinity(item);
    return Math.min(0.1, item.affinityLevel * 0.012);
  }

  function resetOrDecayActionPity(state, kind, success) {
    const forge = ensureForgeState(state);
    const pity = forge.actionPity;
    if (!(kind in pity)) return;
    if (success) {
      pity[kind] = 0;
      return;
    }
    pity[kind] = Math.max(0, Number(pity[kind] || 0) + 1);
  }

  function actionPityBonus(state, kind) {
    const forge = ensureForgeState(state);
    const current = Math.max(0, Number((forge.actionPity && forge.actionPity[kind]) || 0));
    const profile = (FORGE_ACTION_PITY && FORGE_ACTION_PITY[kind]) || { target: 4, maxBonus: 0.2 };
    const slope = profile.maxBonus / Math.max(1, profile.target);
    return clamp(current * slope, 0, profile.maxBonus);
  }

  function shouldForceActionSuccess(state, kind) {
    const forge = ensureForgeState(state);
    const current = Math.max(0, Number((forge.actionPity && forge.actionPity[kind]) || 0));
    const profile = (FORGE_ACTION_PITY && FORGE_ACTION_PITY[kind]) || { target: 4 };
    return current >= profile.target;
  }

  function registerForgeAction(state, kind) {
    const forge = ensureForgeState(state);
    forge.actionCounters[kind] = (forge.actionCounters[kind] || 0) + 1;
    const telemetry = ensureForgeTelemetry(state);
    telemetry.samples[kind] = (telemetry.samples[kind] || 0) + 1;
  }

  function registerForgeOutcome(state, kind, tone, useful, spentCost = null) {
    const telemetry = ensureForgeTelemetry(state);
    if (tone === 'favorable') telemetry.favorableOutcomes += 1;
    else if (tone === 'neutral') telemetry.neutralOutcomes += 1;
    else telemetry.unfavorableOutcomes += 1;
    if (useful && telemetry.usefulOutcomes[kind] !== undefined) {
      telemetry.usefulOutcomes[kind] += 1;
      if (!telemetry.firstMeaningfulUpgradeAt) {
        telemetry.firstMeaningfulUpgradeAt = nowElapsedSinceStart(state);
      }
    }
    if (spentCost) {
      telemetry.costPerUsefulOutcome.gold += Number(spentCost.gold || 0);
      telemetry.costPerUsefulOutcome.materials += totalMaterialSpend(spentCost);
      telemetry.costPerUsefulOutcome.samples += 1;
    }
    const forge = ensureForgeState(state);
    telemetry.actionPityState = {
      enhance: forge.actionPity.enhance || 0,
      reforge: forge.actionPity.reforge || 0,
      transcend: forge.actionPity.transcend || 0,
      stabilize: forge.actionPity.stabilize || 0,
    };
  }

  function rerollChainMultiplier(state, itemId) {
    const forge = ensureForgeState(state);
    const chain = Math.max(0, Number((forge.itemRerollChains && forge.itemRerollChains[itemId]) || 0));
    return 1 + Math.min(1.35, chain * 0.18);
  }

  function bumpRerollChain(state, itemId) {
    const forge = ensureForgeState(state);
    const map = forge.itemRerollChains;
    map[itemId] = Math.max(0, Number(map[itemId] || 0) + 1);
    const keys = Object.keys(map);
    if (keys.length > 100) {
      keys.slice(0, keys.length - 100).forEach((key) => delete map[key]);
    }
  }

  function softenRerollChain(state, itemId) {
    const forge = ensureForgeState(state);
    const map = forge.itemRerollChains;
    const current = Math.max(0, Number(map[itemId] || 0));
    map[itemId] = Math.max(0, current - 1.5);
  }

  function normalizeItemPower(item) {
    if (!item) return item;
    const normalized = typeof normalizeItem === 'function' ? normalizeItem(item, { source: item.provenance && item.provenance.source ? item.provenance.source : 'legacy' }) : item;
    const out = normalized || item;
    if (out !== item && item && typeof item === 'object') {
      Object.keys(item).forEach((key) => delete item[key]);
      Object.assign(item, out);
    }
    if (normalized && typeof computeItemScore === 'function') {
      out.score = computeItemScore(out);
    }
    return item || out;
  }

  function recordRoiSample(state, key, value) {
    const telemetry = ensureForgeTelemetry(state);
    if (!telemetry.loops || typeof telemetry.loops !== 'object') {
      telemetry.loops = { craftToSellRoi: [], buyToSalvageRoi: [] };
    }
    if (!Array.isArray(telemetry.loops[key])) telemetry.loops[key] = [];
    telemetry.loops[key].push(Number(value || 0));
    telemetry.loops[key] = telemetry.loops[key].slice(-60);
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
      if (source === 'forge') {
        if (ageMinutes < 20) factor *= 0.4;
        else if (ageMinutes < 60) factor *= 0.52;
        else if (ageMinutes < 180) factor *= 0.74;
      }
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

  function salvageYieldFor(item, state = null) {
    const base = estimateSalvage(item);
    const factor = antiExploitFactor(item, 'salvage');
    const mastery = state ? masteryBonuses(state) : { salvageBoost: 0 };
    const out = {};
    Object.entries(base).forEach(([key, value]) => {
      out[key] = Math.max(0, Math.round(value * factor * (1 + (mastery.salvageBoost || 0))));
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
        stabilize: 0,
        convert: 0,
      };
    }
    state.stats.craftUsage[kind] = (state.stats.craftUsage[kind] || 0) + 1;
  }

  function acquireItem(state, item, ctx) {
    if (!item) return;
    const { maxInventory, addJournal, trackQuest, checkAchievements, onItemAcquired } = ctx;
    const acquired = normalizeItemPower(item) || item;
    if (!hasInventorySpace(state, maxInventory)) {
      const fallbackGold = Math.round(sellPriceFor(acquired) * 0.72);
      state.player.gold += fallbackGold;
      state.stats.earnedGold += fallbackGold;
      addJournal('📦', `Inventario lleno. <span class="rarity-${acquired.rarity}">${acquired.name}</span> se convierte en ${fallbackGold} de oro.`);
      trackQuest('earnGold', fallbackGold);
      return;
    }
    state.player.inventory.push(acquired);
    sortInventory(state);
    if (rarityOrder(acquired.rarity) >= rarityOrder('legendary')) state.stats.legendaryFound += 1;
    if (rarityOrder(acquired.rarity) >= rarityOrder('mythic')) state.stats.mythicFound = (state.stats.mythicFound || 0) + 1;
    if (acquired.rarity === 'ascendant') state.stats.ascendantFound = (state.stats.ascendantFound || 0) + 1;
    if (typeof onItemAcquired === 'function') onItemAcquired(acquired);
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

    const source = item.provenance && item.provenance.source ? item.provenance.source : 'legacy';
    if (source === 'forge') {
      const estimatedCost = Number(item.marketScore || item.economyValue || gain);
      const roi = estimatedCost > 0 ? gain / estimatedCost : 0;
      recordRoiSample(state, 'craftToSellRoi', roi);
    }
  }

  function salvageItem(state, itemId, ctx) {
    const { trackQuest, addJournal } = ctx;
    const item = getInventoryItem(state, itemId);
    if (!item) return;
    const yieldData = salvageYieldFor(item, state);
    addResources(state, yieldData);
    state.stats.salvaged += 1;
    trackQuest('salvaged', 1);
    removeInventoryItem(state, itemId);
    const details = Object.entries(yieldData)
      .filter(([, value]) => value > 0)
      .map(([key, value]) => `+${value} ${key}`)
      .join(', ');
    addJournal('♻️', `Reciclas ${item.name}: ${details || 'sin materiales recuperables'}.`);

    const source = item.provenance && item.provenance.source ? item.provenance.source : 'legacy';
    if (source === 'market') {
      const marketCost = Number(item.price || item.economyValue || 1);
      const salvageValue = MATERIAL_KEYS.reduce((sumValue, key) => sumValue + (yieldData[key] || 0), 0);
      const roi = marketCost > 0 ? salvageValue / marketCost : 0;
      recordRoiSample(state, 'buyToSalvageRoi', roi);
    }
  }

  function marketRefreshCost(state) {
    const base = 110 + state.player.level * 14;
    const chain = state.market.refreshChainCount || 0;
    const rerollTax = 1 + Math.min(1.4, chain * 0.24);
    return Math.round(base * rerollTax);
  }

  function refreshMarket(state, forcePaid, ctx) {
    const { toast, addJournal, getLootLuck } = ctx;
    const nowTs = Date.now();
    if (forcePaid && state.market.cooldownUntil && nowTs < state.market.cooldownUntil) {
      const seconds = Math.ceil((state.market.cooldownUntil - nowTs) / 1000);
      toast(`Mercado en enfriamiento (${seconds}s)`, 'cyan');
      return;
    }
    const cost = marketRefreshCost(state);
    if (forcePaid) {
      if (state.player.gold < cost) {
        toast('No tienes oro suficiente para refrescar', 'danger');
        return;
      }
      state.player.gold -= cost;
      applySpendTracking(state, { gold: cost });
      state.market.refreshChainCount = (state.market.refreshChainCount || 0) + 1;
      if (state.market.refreshChainCount >= 3) {
        state.market.cooldownUntil = nowTs + Math.min(32000, 6000 + state.market.refreshChainCount * 2000);
      }
    } else {
      state.market.refreshChainCount = 0;
      state.market.cooldownUntil = 0;
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

  function playerPowerIndex(state) {
    const p = state && state.player ? state.player : {};
    const t = p.training || {};
    const level = Math.max(1, Number(p.level || 1));
    const ascension = Math.max(0, Number(p.ascension || 0));
    const floor = Math.max(1, Number(p.highestDungeonFloor || 1));
    const trainingPower = Number(t.strength || 0) * 1.2
      + Number(t.endurance || 0) * 1.5
      + Number(t.agility || 0) * 0.8
      + Number(t.discipline || 0) * 0.9;
    const progressionPower = level * 1.75 + ascension * 12 + floor * 1.35;
    return progressionPower + trainingPower;
  }

  function targetGoldPerHourForState(state) {
    const level = Math.max(1, Number(state.player.level || 1));
    const ascension = Math.max(0, Number(state.player.ascension || 0));
    return Math.max(900, Math.round(1600 + level * 170 + ascension * 280));
  }

  function resourceOffer(state, kind) {
    const base = RESOURCE_CATALOG_BASE[kind];
    if (!base) return null;
    const level = Math.max(1, Number(state.player.level || 1));
    const power = playerPowerIndex(state);
    const levelScale = 1 + Math.max(0, level - 1) * Number(base.levelSlope || 0.02);
    const powerScale = 1 + clamp(
      power / Math.max(1, Number(base.powerPivot || 220)),
      0,
      Number(base.powerCap || 1.6),
    ) * Number(base.powerSlope || 0.24);
    const stage = level < 15 ? 'early' : level < 35 ? 'mid' : 'late';
    const stageScale = Number(base.stageMult && base.stageMult[stage] ? base.stageMult[stage] : 1);
    const rawPrice = base.basePrice * levelScale * powerScale * stageScale * (base.priceBias || 1);
    const minPrice = base.basePrice * Number(base.minMult || 0.85);
    const maxPrice = base.basePrice * Number(base.maxMult || 4.5);
    const scaledPrice = clamp(rawPrice, minPrice, maxPrice);
    const targetGoldHour = targetGoldPerHourForState(state);
    const spendBias = clamp(Number(base.spendBias || 0), 0, 1);
    const bandMin = clamp(Number(base.spendBandMin || 0.15), 0.04, 0.5);
    const bandMax = clamp(Number(base.spendBandMax || 0.2), bandMin, 0.6);
    const targetSpendRatio = bandMin + spendBias * (bandMax - bandMin);
    const ratioFloor = targetGoldHour * bandMin;
    const ratioCeil = targetGoldHour * bandMax;
    const anchoredPrice = scaledPrice * 0.32 + (targetGoldHour * targetSpendRatio) * 0.68;
    const price = Math.max(1, Math.round(clamp(anchoredPrice, ratioFloor, ratioCeil)));
    return {
      kind,
      label: base.label,
      price,
      reward: clone(base.reward),
    };
  }

  function buyResource(state, kind, ctx) {
    const { toast, grantRewards } = ctx;
    const entry = resourceOffer(state, kind);
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
    const forge = forgeProfile(state);
    const slotMult = slot === 'weapon' || slot === 'chest' ? 1.12 : 1;
    const levelMult = 1 + Math.max(0, state.player.level - 1) * 0.018;
    const stage = currentForgeStage(state);
    const stageMult = stage === 'early' ? 0.97 : stage === 'late' ? 1.08 : 1;
    const targetGoldHour = targetGoldPerHourForState(state);
    const tierAnchors = CRAFT_GOLD_TARGET_RATIOS[tier] || CRAFT_GOLD_TARGET_RATIOS.basic;
    const stageAnchor = Number(tierAnchors[stage] || tierAnchors.mid || 0.1);
    const costReduction = clamp(forge.mastery.costReduction || 0, 0, 0.32);
    const schoolMult = clamp((forge.school.costMult && forge.school.costMult.craft) || 1, 0.78, 1.24);
    const out = {};
    Object.entries(profile.cost).forEach(([key, value]) => {
      const scaled = key === 'gold'
        ? value * slotMult * levelMult * stageMult * schoolMult * (1 - costReduction)
        : value * slotMult * (1 + Math.max(0, state.player.level - 1) * 0.006) * stageMult * schoolMult * (1 - costReduction * 0.8);
      out[key] = Math.max(key === 'gold' ? 1 : 0, Math.round(scaled));
    });
    const anchoredGoldFloor = Math.round(targetGoldHour * stageAnchor * slotMult);
    if (Number(out.gold || 0) < anchoredGoldFloor) {
      out.gold = anchoredGoldFloor;
    }
    return out;
  }

  function craftOutcomesForTier(tierKey, state = null, slot = null) {
    let base;
    if (tierKey === 'advanced') {
      base = [
        { rarity: 'rare', chance: 0.52 },
        { rarity: 'epic', chance: 0.32 },
        { rarity: 'legendary', chance: 0.14 },
        { rarity: 'mythic', chance: 0.02 },
      ];
    } else if (tierKey === 'apex') {
      base = [
        { rarity: 'epic', chance: 0.53 },
        { rarity: 'legendary', chance: 0.31 },
        { rarity: 'mythic', chance: 0.14 },
        { rarity: 'ascendant', chance: 0.02 },
      ];
    } else {
      base = [
        { rarity: 'common', chance: 0.5 },
        { rarity: 'uncommon', chance: 0.31 },
        { rarity: 'rare', chance: 0.16 },
        { rarity: 'epic', chance: 0.03 },
      ];
    }

    if (!state) return base;
    const forge = forgeProfile(state);
    const qualityBias = clamp(forge.mastery.qualityBias || 0, 0, 0.14);
    const slotRole = slot && ITEM_ARCHETYPES && ITEM_ARCHETYPES[slot] ? ITEM_ARCHETYPES[slot].role : null;
    const school = forge.school;
    const roleBoost = slotRole && slotRole === school.focus ? 0.02 : 0;
    const bonus = qualityBias * 0.24 + roleBoost;
    if (bonus <= 0) return base;

    const adjusted = base.map((entry) => ({ ...entry }));
    const topIndexes = adjusted
      .map((entry, index) => ({ index, order: rarityOrder(entry.rarity) }))
      .sort((a, b) => b.order - a.order)
      .slice(0, 2)
      .map((entry) => entry.index);
    const bottomIndexes = adjusted
      .map((entry, index) => ({ index, order: rarityOrder(entry.rarity) }))
      .sort((a, b) => a.order - b.order)
      .slice(0, 2)
      .map((entry) => entry.index);

    topIndexes.forEach((index) => {
      adjusted[index].chance += bonus / topIndexes.length;
    });
    bottomIndexes.forEach((index) => {
      adjusted[index].chance = Math.max(0.01, adjusted[index].chance - bonus / bottomIndexes.length);
    });

    const total = adjusted.reduce((sumValue, entry) => sumValue + entry.chance, 0);
    return adjusted.map((entry) => ({
      ...entry,
      chance: entry.chance / Math.max(0.0001, total),
    }));
  }

  function previewCraftItem(state, slot, tier = 'basic') {
    const tierKey = toTierKey(tier);
    const profile = profileForTier(tierKey);
    const forge = forgeProfile(state);
    const outcomes = craftOutcomesForTier(tierKey, state, slot);
    const favorable = outcomes
      .filter((entry) => rarityOrder(entry.rarity) >= rarityOrder(tierKey === 'basic' ? 'rare' : tierKey === 'advanced' ? 'epic' : 'legendary'))
      .reduce((sumValue, entry) => sumValue + entry.chance, 0);
    const unfavorable = outcomes
      .filter((entry) => rarityOrder(entry.rarity) <= rarityOrder(tierKey === 'basic' ? 'common' : tierKey === 'advanced' ? 'rare' : 'epic'))
      .reduce((sumValue, entry) => sumValue + entry.chance, 0);
    return {
      slot,
      tier: tierKey,
      cost: scaledTierCost(state, slot, tierKey),
      qualityRange: [profile.qualityMin, profile.qualityMax],
      outcomes,
      minRarity: profile.minRarity,
      school: forge.school.id,
      stage: currentForgeStage(state),
      mastery: {
        costReduction: forge.mastery.costReduction || 0,
        qualityBias: forge.mastery.qualityBias || 0,
      },
      scenarioChances: {
        favorable: clamp(favorable, 0, 1),
        neutral: clamp(1 - favorable - unfavorable, 0, 1),
        unfavorable: clamp(unfavorable, 0, 1),
      },
    };
  }

  function weightedOutcomePick(outcomes = []) {
    if (!Array.isArray(outcomes) || !outcomes.length) return null;
    const total = outcomes.reduce((sumValue, entry) => sumValue + Number(entry.chance || 0), 0);
    let roll = Math.random() * Math.max(0.0001, total);
    for (let i = 0; i < outcomes.length; i += 1) {
      roll -= Number(outcomes[i].chance || 0);
      if (roll <= 0) return outcomes[i];
    }
    return outcomes[outcomes.length - 1];
  }

  function recentThreatReference(state) {
    const top = Array.isArray(state.combatHistory) && state.combatHistory.length
      ? state.combatHistory[0]
      : null;
    const score = top && top.threat && typeof top.threat.score === 'number'
      ? top.threat.score
      : 100;
    return clamp((score - 100) / 130, -0.1, 0.24);
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

    const forge = ensureForgeState(state);
    const forgeProfileData = forgeProfile(state);
    const outcomes = craftOutcomesForTier(tierKey, state, slot);
    const rolledOutcome = weightedOutcomePick(outcomes);
    const forcedRarity = rolledOutcome ? rolledOutcome.rarity : null;

    spendCost(state, cost);

    const qualityBias = forgeProfileData.mastery.qualityBias || 0;
    const qualityRoll = profile.qualityMin
      + Math.random() * (profile.qualityMax - profile.qualityMin)
      + qualityBias * 0.2;
    const rolled = rollLoot({
      source: 'forge',
      slot,
      playerLevel: state.player.level,
      ascension: state.player.ascension || 0,
      lootLuck: typeof getLootLuck === 'function' ? getLootLuck() : 0,
      streakData: state.player.itemPity,
      minRarity: profile.minRarity,
      forcedRarity,
      guaranteedAffixes: profile.guaranteedAffixes,
      qualityRoll,
      provenanceRisk: recentThreatReference(state),
      forgePowerBonus: (forgeProfileData.school.forgePowerBonus || 0) + (forgeProfileData.mastery.forgePowerBonus || 0),
      smartLoot: false,
    });

    state.player.itemPity = rolled.streakData;
    const item = normalizeItemPower(rolled.item) || rolled.item;
    acquireItem(state, item, { maxInventory, addJournal, trackQuest, checkAchievements, onItemAcquired });
    state.stats.crafted += 1;
    trackCraftUsage(state, 'craft');
    registerForgeAction(state, 'craft');
    forge.masteryPoints += 1;
    if (!ensureForgeTelemetry(state).firstSpecializationDecisionAt && (forge.school || '') !== '') {
      ensureForgeTelemetry(state).firstSpecializationDecisionAt = nowElapsedSinceStart(state);
    }

    const expectedOrder = rarityOrder(profile.minRarity || 'common');
    const resultOrder = rarityOrder(item.rarity);
    const tone = resultOrder > expectedOrder ? 'favorable' : resultOrder === expectedOrder ? 'neutral' : 'unfavorable';
    registerForgeOutcome(state, 'craft', tone, resultOrder >= rarityOrder('rare'), cost);

    trackQuest('crafts', 1);
    addJournal('🔨', `Completas ${profile.label} y obtienes ${item.name}.`);
    toast(`Nuevo objeto: ${item.name}`, 'gold');
  }

  function enhanceCost(state, item) {
    const rarity = rarityDef(item.rarity);
    const level = item.itemLevel || item.level || 1;
    const upgrade = item.upgrade || 0;
    const forge = forgeProfile(state);
    const schoolMult = clamp((forge.school.costMult && forge.school.costMult.enhance) || 1, 0.8, 1.22);
    const reduction = clamp((forge.mastery.costReduction || 0) + affinityCostReduction(item) * 0.5, 0, 0.36);
    return {
      gold: Math.round((90 + level * 18 + upgrade * 72 + rarity.order * 120) * schoolMult * (1 - reduction)),
      iron: Math.max(2, Math.round((4 + upgrade * 1.6 + rarity.order * 0.9) * schoolMult * (1 - reduction * 0.9))),
      essence: Math.max(0, Math.round((upgrade >= 4 ? 1 : 0) + rarity.order * 0.45)),
      sigils: rarity.order >= rarityOrder('legendary') ? Math.max(0, Math.round((upgrade - 5) * 0.4)) : 0,
      catalysts: rarity.order >= rarityOrder('mythic') ? Math.max(0, Math.round((upgrade - 8) * 0.22)) : 0,
    };
  }

  function enhanceSuccessChance(state, item) {
    const rarity = rarityDef(item.rarity);
    const forge = forgeProfile(state);
    const schoolBonus = (forge.school.chanceBonus && forge.school.chanceBonus.enhance) || 0;
    const masteryBonus = forge.mastery.enhanceChance || 0;
    const pity = actionPityBonus(state, 'enhance');
    const affinity = affinityControlBonus(item);
    const base = 0.93 - (item.upgrade || 0) * 0.04 - rarity.order * 0.015;
    return clamp(base + schoolBonus + masteryBonus + pity + affinity, 0.52, 0.98);
  }

  function previewEnhanceItem(state, slot) {
    const item = state.player.equipment[slot];
    if (!item) return null;
    const rarity = rarityDef(item.rarity);
    const cap = (rarity.upgradeCaps && rarity.upgradeCaps.enhance) || 10;
    const chance = enhanceSuccessChance(state, item);
    return {
      slot,
      cap,
      current: item.upgrade || 0,
      successChance: chance,
      failureRisk: item.upgrade > 0 ? 'perdida parcial controlada' : 'sin perdida de nivel',
      pity: ensureForgeState(state).actionPity.enhance || 0,
      affinityLevel: item.affinityLevel || 0,
      cost: enhanceCost(state, item),
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

    const cost = enhanceCost(state, item);
    if (!hasCost(state, cost)) {
      toast('No tienes materiales suficientes', 'danger');
      return;
    }
    spendCost(state, cost);
    registerForgeAction(state, 'enhance');

    const successChance = enhanceSuccessChance(state, item);
    const forceSuccess = shouldForceActionSuccess(state, 'enhance');
    const success = forceSuccess || Math.random() <= successChance;
    if (success) {
      item.upgrade = (item.upgrade || 0) + 1;
      grantAffinity(item, 4 + Math.max(0, rarity.order - 1));
      normalizeItemPower(item);
      state.stats.crafted += 1;
      trackCraftUsage(state, 'enhance');
      resetOrDecayActionPity(state, 'enhance', true);
      ensureForgeState(state).masteryPoints += 1;
      registerForgeOutcome(state, 'enhance', 'favorable', true, cost);
      trackQuest('crafts', 1);
      addJournal('⚒️', `Mejoras ${item.name} a +${item.upgrade}.`);
      return;
    }

    const canDrop = (item.upgrade || 0) > 0 && Math.random() < 0.58;
    if (canDrop) item.upgrade = Math.max(0, item.upgrade - 1);
    normalizeItemPower(item);
    state.stats.crafted += 1;
    trackCraftUsage(state, 'enhance');
    resetOrDecayActionPity(state, 'enhance', false);
    registerForgeOutcome(state, 'enhance', canDrop ? 'unfavorable' : 'neutral', false, cost);
    trackQuest('crafts', 1);
    addJournal('🧯', `${item.name} resiste la mejora fallida${canDrop ? ' y pierde 1 nivel de mejora' : ' sin perder nivel'}.`);
  }

  function reforgeCost(state, item, mode = 'total') {
    const rarity = rarityDef(item.rarity);
    const level = item.itemLevel || item.level || 1;
    const rollCount = item.reforge || 0;
    const modeDef = REFORGE_MODE_DEFS[mode] || REFORGE_MODE_DEFS.total;
    const forge = forgeProfile(state);
    const schoolMult = clamp((forge.school.costMult && forge.school.costMult.reforge) || 1, 0.78, 1.26);
    const reduction = clamp((forge.mastery.costReduction || 0) + affinityCostReduction(item), 0, 0.4);
    const chainMult = rerollChainMultiplier(state, item.id);
    return {
      gold: Math.round((180 + level * 16 + rollCount * 92 + rarity.order * 84) * modeDef.costMult * schoolMult * chainMult * (1 - reduction)),
      essence: Math.max(1, Math.round((2 + rarity.order * 0.8 + rollCount * 0.35) * modeDef.costMult * (1 - reduction * 0.8))),
      sigils: rarity.order >= rarityOrder('epic') ? Math.max(0, Math.round((1 + rollCount * 0.25) * modeDef.costMult)) : 0,
      catalysts: rarity.order >= rarityOrder('legendary') ? Math.max(0, Math.round((0.6 + rollCount * 0.15) * (mode === 'lock' ? 1.15 : 1))) : 0,
    };
  }

  function reforgeSuccessChance(state, item, mode = 'total') {
    const rarity = rarityDef(item.rarity);
    const modeDef = REFORGE_MODE_DEFS[mode] || REFORGE_MODE_DEFS.total;
    const forge = forgeProfile(state);
    const school = (forge.school.chanceBonus && forge.school.chanceBonus.reforge) || 0;
    const mastery = forge.mastery.reforgeChance || 0;
    const pity = actionPityBonus(state, 'reforge');
    const affinity = affinityControlBonus(item);
    const base = 0.84 - (item.reforge || 0) * 0.08 + rarity.order * 0.01 + modeDef.successBonus;
    return clamp(base + school + mastery + pity + affinity, 0.35, 0.96);
  }

  function previewReforgeItem(state, itemId) {
    const item = getAnyOwnedItem(state, itemId);
    if (!item) return null;
    const rarity = rarityDef(item.rarity);
    const cap = (rarity.upgradeCaps && rarity.upgradeCaps.reforge) || 4;
    const modes = Object.keys(REFORGE_MODE_DEFS).map((modeKey) => ({
      mode: modeKey,
      label: REFORGE_MODE_DEFS[modeKey].label,
      variance: REFORGE_MODE_DEFS[modeKey].variance,
      successChance: reforgeSuccessChance(state, item, modeKey),
      cost: reforgeCost(state, item, modeKey),
    }));
    return {
      itemId,
      current: item.reforge || 0,
      cap,
      affinityLevel: item.affinityLevel || 0,
      pity: ensureForgeState(state).actionPity.reforge || 0,
      successChance: reforgeSuccessChance(state, item, 'total'),
      cost: reforgeCost(state, item, 'total'),
      modes,
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

  function pickLockedStat(item) {
    const stats = Object.entries(item.stats || {});
    if (!stats.length) return null;
    const primary = ITEM_ARCHETYPES && ITEM_ARCHETYPES[item.slot] && ITEM_ARCHETYPES[item.slot].primaryStats
      ? ITEM_ARCHETYPES[item.slot].primaryStats
      : [];
    const primaryEntry = stats
      .filter(([key]) => primary.includes(key))
      .sort((a, b) => Number(b[1] || 0) - Number(a[1] || 0))[0];
    if (primaryEntry) return primaryEntry[0];
    return stats.sort((a, b) => Number(b[1] || 0) - Number(a[1] || 0))[0][0];
  }

  function reforgeItem(state, payload, ctx) {
    const { toast, addJournal } = ctx;
    const itemId = typeof payload === 'string' ? payload : payload.itemId;
    const mode = typeof payload === 'string' ? 'total' : (payload.mode || 'total');
    const lockStat = typeof payload === 'string' ? null : (payload.lockStat || null);
    const modeDef = REFORGE_MODE_DEFS[mode] || REFORGE_MODE_DEFS.total;
    const item = getAnyOwnedItem(state, itemId);
    if (!item) return;

    const rarity = rarityDef(item.rarity);
    const cap = (rarity.upgradeCaps && rarity.upgradeCaps.reforge) || 4;
    if ((item.reforge || 0) >= cap) {
      toast('Este objeto ya alcanzo su limite de reforge', 'cyan');
      return;
    }

    const cost = reforgeCost(state, item, modeDef.id);
    if (!hasCost(state, cost)) {
      toast('Te faltan recursos para retemplar', 'danger');
      return;
    }

    spendCost(state, cost);
    registerForgeAction(state, 'reforge');
    bumpRerollChain(state, item.id);

    const forgeData = forgeProfile(state);
    const provenanceRisk = clamp(Number((item.provenance && item.provenance.threatScoreAtDrop) || 100) / 100 - 1, -0.1, 0.24);
    const candidate = makeItem(item.slot, item.itemLevel || item.level || state.player.level, item.rarity, item.baseName, 1);
    candidate.qualityRoll = clamp((candidate.qualityRoll || 1) + (forgeData.mastery.qualityBias || 0), 0.82, 1.24);
    const successChance = reforgeSuccessChance(state, item, modeDef.id);
    const forceSuccess = shouldForceActionSuccess(state, 'reforge');
    const success = forceSuccess || Math.random() <= successChance;
    const lockedStat = modeDef.id === 'lock' ? (lockStat || pickLockedStat(item)) : null;
    const previousLockedValue = lockedStat ? Number((item.stats && item.stats[lockedStat]) || 0) : null;

    if (success) {
      if (modeDef.id === 'total') {
        item.stats = candidate.stats;
      } else {
        item.stats = mergeStats(item.stats, candidate.stats, modeDef.keepWeight);
      }
      if (lockedStat && item.stats && previousLockedValue !== null) {
        item.stats[lockedStat] = previousLockedValue;
      }
      item.affixes = Array.from(new Set([...(candidate.affixes || []), ...(item.affixes || [])])).slice(0, rarity.affixes + 1);
      item.name = candidate.name;
      item.qualityRoll = clamp(Math.max(item.qualityRoll || 1, candidate.qualityRoll || 1) + 0.006 + (forgeData.mastery.stabilizePower || 0) * 0.04, 0.82, 1.24);
      grantAffinity(item, 6 + Math.max(0, Math.round(provenanceRisk * 10)));
      resetOrDecayActionPity(state, 'reforge', true);
      ensureForgeState(state).masteryPoints += 1;
      softenRerollChain(state, item.id);
      registerForgeOutcome(state, 'reforge', 'favorable', true, cost);
      addJournal('🌀', `Retemplas ${item.baseName} (${modeDef.label.toLowerCase()}) y nace ${item.name}.`);
    } else {
      item.stats = mergeStats(item.stats, candidate.stats, Math.max(0.62, modeDef.keepWeight + 0.2));
      item.affixes = Array.from(new Set([...(item.affixes || []), ...(candidate.affixes || [])])).slice(0, rarity.affixes + 1);
      if (lockedStat && item.stats && previousLockedValue !== null) {
        item.stats[lockedStat] = previousLockedValue;
      }
      item.qualityRoll = clamp((item.qualityRoll || 1) + 0.003, 0.82, 1.24);
      resetOrDecayActionPity(state, 'reforge', false);
      registerForgeOutcome(state, 'reforge', modeDef.id === 'total' ? 'unfavorable' : 'neutral', false, cost);
      addJournal('🧩', `${item.baseName} se reajusta parcialmente en ${modeDef.label.toLowerCase()}. Conservas parte de los stats previos.`);
    }

    item.reforge = (item.reforge || 0) + 1;
    normalizeItemPower(item);
    trackCraftUsage(state, 'reforge');
  }

  function transcendCost(state, item) {
    const rarity = rarityDef(item.rarity);
    const level = item.itemLevel || item.level || 1;
    const forge = forgeProfile(state);
    const schoolMult = clamp((forge.school.costMult && forge.school.costMult.transcend) || 1, 0.82, 1.28);
    const reduction = clamp((forge.mastery.costReduction || 0) * 0.6 + affinityCostReduction(item) * 0.4, 0, 0.26);
    return {
      gold: Math.round((900 + level * 42 + rarity.order * 640 + (item.transcend || 0) * 280) * schoolMult * (1 - reduction)),
      essence: Math.max(3, Math.round((6 + rarity.order * 2.2) * schoolMult * (1 - reduction * 0.8))),
      sigils: Math.max(2, Math.round((4 + rarity.order * 1.6) * schoolMult)),
      echoShards: Math.max(1, Math.round((1 + rarity.order * 0.8) * schoolMult)),
      catalysts: Math.max(1, Math.round(1 + rarity.order * 0.55)),
    };
  }

  function transcendSuccessChance(state, item) {
    const rarity = rarityDef(item.rarity);
    const forge = forgeProfile(state);
    const schoolBonus = (forge.school.chanceBonus && forge.school.chanceBonus.transcend) || 0;
    const mastery = forge.mastery.transcendChance || 0;
    const pity = actionPityBonus(state, 'transcend');
    const affinity = affinityControlBonus(item) * 0.8;
    return clamp(0.42 - rarity.order * 0.05 - (item.transcend || 0) * 0.08 + schoolBonus + mastery + pity + affinity, 0.1, 0.78);
  }

  function previewTranscendItem(state, itemId) {
    const item = getAnyOwnedItem(state, itemId);
    if (!item) return null;
    const rarity = rarityDef(item.rarity);
    const canTranscend = rarity.upgradeCaps && rarity.upgradeCaps.transcend;
    if (!canTranscend) return null;
    const nextRarity = nextRarityKey(item.rarity, 1);
    if (nextRarity === item.rarity) return null;
    const successChance = transcendSuccessChance(state, item);
    return {
      itemId,
      from: item.rarity,
      to: nextRarity,
      successChance,
      pity: ensureForgeState(state).actionPity.transcend || 0,
      affinityLevel: item.affinityLevel || 0,
      cost: transcendCost(state, item),
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

    const cost = transcendCost(state, item);
    if (!hasCost(state, cost)) {
      toast('No tienes recursos para trascender', 'danger');
      return;
    }
    spendCost(state, cost);
    registerForgeAction(state, 'transcend');

    const successChance = transcendSuccessChance(state, item);
    const forceSuccess = shouldForceActionSuccess(state, 'transcend');
    const success = forceSuccess || Math.random() <= successChance;
    trackCraftUsage(state, 'transcend');

    if (!success) {
      const forge = forgeProfile(state);
      const guard = clamp(forge.mastery.transcendFailureGuard || 0, 0, 0.3);
      const qualityGain = 0.01 + guard * 0.02;
      item.qualityRoll = clamp((item.qualityRoll || 1) + qualityGain, 0.82, 1.24);
      grantAffinity(item, 8 + Math.round(guard * 20));
      normalizeItemPower(item);
      resetOrDecayActionPity(state, 'transcend', false);
      registerForgeOutcome(state, 'transcend', 'neutral', false, cost);
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
    grantAffinity(item, 12 + rarity.order * 2);
    normalizeItemPower(item);
    const forgeState = ensureForgeState(state);
    if (!forgeState.firstTranscendAt) forgeState.firstTranscendAt = nowElapsedSinceStart(state);
    forgeState.masteryPoints += 2;
    resetOrDecayActionPity(state, 'transcend', true);
    registerForgeOutcome(state, 'transcend', 'favorable', true, cost);
    addJournal('🌌', `${item.baseName} trasciende a calidad ${targetRarity}.`);
  }

  function stabilizeCost(state, item) {
    const rarity = rarityDef(item.rarity);
    const level = item.itemLevel || item.level || 1;
    const stabilizeCount = Math.max(0, Number(item.stabilize || 0));
    const forge = forgeProfile(state);
    const schoolMult = clamp((forge.school.costMult && forge.school.costMult.stabilize) || 1, 0.75, 1.28);
    const reduction = clamp((forge.mastery.costReduction || 0) + affinityCostReduction(item) * 0.5, 0, 0.34);
    return {
      gold: Math.round((240 + level * 20 + rarity.order * 130 + stabilizeCount * 140) * schoolMult * (1 - reduction)),
      essence: Math.max(1, Math.round((2 + rarity.order * 0.8 + stabilizeCount * 0.2) * schoolMult * (1 - reduction * 0.75))),
      sigils: rarity.order >= rarityOrder('epic') ? Math.max(0, Math.round(1 + stabilizeCount * 0.25)) : 0,
      catalysts: Math.max(1, Math.round(1 + rarity.order * 0.35 + stabilizeCount * 0.2)),
    };
  }

  function stabilizeSuccessChance(state, item) {
    const rarity = rarityDef(item.rarity);
    const forge = forgeProfile(state);
    const pity = actionPityBonus(state, 'stabilize');
    const affinity = affinityControlBonus(item) * 0.7;
    const base = 0.88 - (item.stabilize || 0) * 0.09 - rarity.order * 0.012;
    return clamp(base + (forge.mastery.stabilizePower || 0) * 0.3 + pity + affinity, 0.35, 0.96);
  }

  function previewStabilizeItem(state, itemId) {
    const item = getAnyOwnedItem(state, itemId);
    if (!item) return null;
    const rarity = rarityDef(item.rarity);
    const cap = (rarity.upgradeCaps && rarity.upgradeCaps.stabilize) || 3;
    if ((item.stabilize || 0) >= cap) return null;
    return {
      itemId,
      current: item.stabilize || 0,
      cap,
      successChance: stabilizeSuccessChance(state, item),
      cost: stabilizeCost(state, item),
      pity: ensureForgeState(state).actionPity.stabilize || 0,
      affinityLevel: item.affinityLevel || 0,
      outcomes: {
        favorable: 'Sube calidad y fija consistencia de stats.',
        neutral: 'No destruye la pieza y conserva progresión.',
      },
    };
  }

  function stabilizeItem(state, itemId, ctx) {
    const { toast, addJournal } = ctx;
    const item = getAnyOwnedItem(state, itemId);
    if (!item) return;
    const rarity = rarityDef(item.rarity);
    const cap = (rarity.upgradeCaps && rarity.upgradeCaps.stabilize) || 3;
    if ((item.stabilize || 0) >= cap) {
      toast('Este objeto ya alcanzo su limite de estabilizacion', 'cyan');
      return;
    }

    const cost = stabilizeCost(state, item);
    if (!hasCost(state, cost)) {
      toast('No tienes recursos para estabilizar', 'danger');
      return;
    }
    spendCost(state, cost);
    registerForgeAction(state, 'stabilize');
    trackCraftUsage(state, 'stabilize');

    const successChance = stabilizeSuccessChance(state, item);
    const forceSuccess = shouldForceActionSuccess(state, 'stabilize');
    const success = forceSuccess || Math.random() <= successChance;
    const forge = forgeProfile(state);

    if (success) {
      const stats = { ...(item.stats || {}) };
      const keys = Object.keys(stats);
      if (keys.length) {
        const sorted = [...keys].sort((a, b) => Number(stats[a] || 0) - Number(stats[b] || 0));
        const lowestKey = sorted[0];
        const highestKey = sorted[sorted.length - 1];
        const lowestValue = Number(stats[lowestKey] || 0);
        const highestValue = Number(stats[highestKey] || 0);
        stats[lowestKey] = CHANCE_STATS.has(lowestKey)
          ? Number((lowestValue * 1.06).toFixed(4))
          : Number((lowestValue * 1.08).toFixed(2));
        if (highestKey !== lowestKey) {
          stats[highestKey] = CHANCE_STATS.has(highestKey)
            ? Number((highestValue * 0.995).toFixed(4))
            : Number((highestValue * 0.992).toFixed(2));
        }
      }
      item.stats = stats;
      item.qualityRoll = clamp((item.qualityRoll || 1) + 0.026 + (forge.mastery.stabilizePower || 0) * 0.07, 0.82, 1.24);
      item.lockFlags = {
        ...(item.lockFlags || {}),
        stabilized: true,
      };
      item.stabilize = (item.stabilize || 0) + 1;
      grantAffinity(item, 9 + rarity.order * 2);
      normalizeItemPower(item);
      resetOrDecayActionPity(state, 'stabilize', true);
      ensureForgeState(state).masteryPoints += 1;
      const forgeState = ensureForgeState(state);
      if (!forgeState.firstStabilizeAt) forgeState.firstStabilizeAt = nowElapsedSinceStart(state);
      registerForgeOutcome(state, 'stabilize', 'favorable', true, cost);
      addJournal('🧿', `${item.name} queda estabilizado: mejora consistencia y calidad.`);
      return;
    }

    item.qualityRoll = clamp((item.qualityRoll || 1) + 0.008 + (forge.mastery.stabilizePower || 0) * 0.03, 0.82, 1.24);
    item.stabilize = (item.stabilize || 0) + 1;
    normalizeItemPower(item);
    resetOrDecayActionPity(state, 'stabilize', false);
    registerForgeOutcome(state, 'stabilize', 'neutral', false, cost);
    addJournal('🛡️', `La estabilizacion de ${item.name} falla parcialmente, pero no pierde progreso.`);
  }

  function convertMaterials(state, recipeId, ctx) {
    const { toast, addJournal, trackQuest } = ctx;
    const recipes = {
      iron_wood_to_essence: {
        id: 'iron_wood_to_essence',
        consume: { iron: 20, wood: 12, gold: 80 },
        grant: { essence: 1 },
        label: '20 hierro + 12 madera -> 1 esencia',
      },
      essence_to_sigils: {
        id: 'essence_to_sigils',
        consume: { essence: 8, gold: 120 },
        grant: { sigils: 1 },
        label: '8 esencia -> 1 sigilo',
      },
      sigils_to_echo: {
        id: 'sigils_to_echo',
        consume: { sigils: 5, catalysts: 1, gold: 180 },
        grant: { echoShards: 1 },
        label: '5 sigilos + 1 catalizador -> 1 eco fragmento',
      },
    };
    const recipe = recipes[recipeId];
    if (!recipe) return;
    if (!hasCost(state, recipe.consume)) {
      toast('No tienes materiales para convertir', 'danger');
      return;
    }
    spendCost(state, recipe.consume);
    addResources(state, recipe.grant);
    trackCraftUsage(state, 'convert');
    registerForgeAction(state, 'convert');
    registerForgeOutcome(state, 'convert', 'neutral', false, recipe.consume);
    ensureForgeState(state).masteryPoints += 1;
    if (typeof trackQuest === 'function') trackQuest('crafts', 1);
    addJournal('🔁', `Conversión completada: ${recipe.label}.`);
  }

  function setForgeSchool(state, schoolId, ctx) {
    const { toast, addJournal } = ctx;
    if (!FORGE_SCHOOLS || !FORGE_SCHOOLS[schoolId]) {
      toast('Escuela de forja inválida', 'danger');
      return;
    }
    const forge = ensureForgeState(state);
    if (forge.school === schoolId) {
      toast('Esa escuela ya está activa', 'cyan');
      return;
    }
    forge.school = schoolId;
    const telemetry = ensureForgeTelemetry(state);
    telemetry.schoolSwaps += 1;
    if (!telemetry.firstSpecializationDecisionAt) {
      telemetry.firstSpecializationDecisionAt = nowElapsedSinceStart(state);
    }
    addJournal('🧭', `Cambias tu escuela de forja a ${FORGE_SCHOOLS[schoolId].name}.`);
  }

  function unlockForgeMastery(state, nodeId, ctx) {
    const { toast, addJournal } = ctx;
    const node = masteryNodeMap[nodeId];
    if (!node) {
      toast('Nodo de maestria inválido', 'danger');
      return;
    }
    const forge = ensureForgeState(state);
    if (node.school !== 'shared' && node.school !== forge.school) {
      toast('Ese nodo pertenece a otra escuela', 'danger');
      return;
    }
    const rank = Math.max(0, Number((forge.masteryNodes && forge.masteryNodes[nodeId]) || 0));
    if (rank >= Number(node.maxRank || 0)) {
      toast('Nodo ya al máximo', 'cyan');
      return;
    }
    const pointCost = Array.isArray(node.pointCost)
      ? Number(node.pointCost[Math.min(node.pointCost.length - 1, rank)] || 1)
      : 1;
    if (forge.masteryPoints < pointCost) {
      toast('No tienes puntos de maestria suficientes', 'danger');
      return;
    }
    forge.masteryPoints -= pointCost;
    forge.masteryNodes[nodeId] = rank + 1;
    const telemetry = ensureForgeTelemetry(state);
    if (!telemetry.firstSpecializationDecisionAt) {
      telemetry.firstSpecializationDecisionAt = nowElapsedSinceStart(state);
    }
    addJournal('📐', `Desbloqueas ${node.name} (rango ${rank + 1}/${node.maxRank}).`);
  }

  function getForgeState(state) {
    const forge = ensureForgeState(state);
    const profile = forgeProfile(state);
    const telemetry = ensureForgeTelemetry(state);
    const stage = currentForgeStage(state);
    const stageTargets = FORGE_ECONOMY_TARGETS && FORGE_ECONOMY_TARGETS[stage]
      ? FORGE_ECONOMY_TARGETS[stage]
      : null;
    return {
      stage,
      stageTargets,
      school: profile.school,
      masteryPoints: forge.masteryPoints,
      masteryNodes: { ...(forge.masteryNodes || {}) },
      mastery: profile.mastery,
      actionPity: { ...(forge.actionPity || {}) },
      actionCounters: { ...(forge.actionCounters || {}) },
      firstTranscendAt: forge.firstTranscendAt,
      firstStabilizeAt: forge.firstStabilizeAt,
      telemetry,
      availableNodes: (FORGE_MASTERY_NODES || []).map((node) => ({
        ...node,
        currentRank: Number((forge.masteryNodes && forge.masteryNodes[node.id]) || 0),
      })),
    };
  }

  function awardCombatAffinity(state, payload = {}, ctx = {}) {
    const { addJournal } = ctx;
    const threatScore = Number(payload.threatScore || 100);
    const turnsPlayed = Math.max(1, Number(payload.turnsPlayed || 1));
    const victory = !!payload.victory;
    const gainBase = 3 + Math.max(0, (threatScore - 90) * 0.06) + turnsPlayed * 0.28 + (victory ? 1.8 : 0.9);
    let levels = 0;
    (SLOT_ORDER || []).forEach((slot) => {
      const item = state.player.equipment[slot];
      if (!item) return;
      const result = grantAffinity(item, gainBase);
      if (result.leveled > 0) levels += result.leveled;
      normalizeItemPower(item);
    });
    if (levels > 0 && typeof addJournal === 'function') {
      addJournal('🧲', `Tus piezas equipadas fortalecen su afinidad en combate (+${levels} niveles de afinidad).`);
    }

    const telemetry = ensureForgeTelemetry(state);
    if (!Array.isArray(telemetry.threatToAffinity)) telemetry.threatToAffinity = [];
    telemetry.threatToAffinity.push({
      ts: Date.now(),
      threatScore,
      turnsPlayed,
      victory,
      gainBase: Number(gainBase.toFixed(2)),
      affinityLevelsGained: levels,
    });
    telemetry.threatToAffinity = telemetry.threatToAffinity.slice(-180);
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
    resourceOffer,
    buyResource,
    previewCraftItem,
    craftItem,
    previewEnhanceItem,
    enhanceItem,
    previewReforgeItem,
    reforgeItem,
    previewTranscendItem,
    transcendItem,
    previewStabilizeItem,
    stabilizeItem,
    convertMaterials,
    setForgeSchool,
    unlockForgeMastery,
    getForgeState,
    awardCombatAffinity,
    forgeItem,
    upgradeEquipped,
    rerollItem,
    autoManage,
  };
}
