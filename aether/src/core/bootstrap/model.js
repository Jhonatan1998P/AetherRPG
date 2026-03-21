import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { createItemsDomain } from '../../features/gameplay/domain/items.js';
import { createStatsDomain } from '../../features/gameplay/domain/stats.js';
import { createDefaultsModule } from '../state/defaults.js';
import { createSelectorsModule } from '../state/selectors.js';
import { createStateCore } from '../state/state.js';
import { createMutationsModule } from '../state/mutations.js';
import { createPersistenceModule } from '../state/persistence.js';

(() => {
  const {
    STORAGE_KEY,
    SLOT_ORDER,
    ITEM_BASES,
    ITEM_ARCHETYPES,
    ENEMY_ARCHETYPES,
    STAT_BUDGETS,
    AFFIXES,
    PETS,
    SKILLS,
  } = window.AetherConfig;
  const {
    clone,
    rand,
    pick,
    clamp,
    sum,
    uid,
    softRound,
    rarityDef,
    rarityOrder,
    deepMerge,
    emptyStats,
    addStats,
    localDayKey,
    pickRarity,
    findBaseItem,
    scaledStatValue,
  } = window.AetherUtils;

  const statsDomain = createStatsDomain({
    SLOT_ORDER,
    emptyStats,
    addStats,
    softRound,
    clamp,
  });

  let runtimeGetLootLuck = () => 0;

  const {
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
  } = createItemsDomain({
    ITEM_BASES,
    ITEM_ARCHETYPES,
    ENEMY_ARCHETYPES,
    STAT_BUDGETS,
    AFFIXES,
    SLOT_ORDER,
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
    getLootLuck: () => runtimeGetLootLuck(),
  });

  const { xpNeeded, defaultQuests, makeDefaultState } = createDefaultsModule({
    pick,
    uid,
    makeStarterItem,
    starterInventory,
    generateMarket,
  });

  const stateCore = createStateCore({
    clone,
    statsDomain,
    makeDefaultState,
    createStore,
    subscribeWithSelector,
  });
  const {
    state,
    gameStore,
    createStoreMeta,
    snapshotGameData,
    serializableState,
    replaceState,
    syncStateFromStore,
    setStoreSnapshot,
  } = stateCore;

  const selectors = createSelectorsModule({
    state,
    PETS,
    sum,
    statsDomain,
    scaleItemStats,
  });
  const {
    maxInventory,
    guildTotal,
    getPetData,
    petBonus,
    getGuildBonus,
    getRelicBonus,
    getEquipmentBonus,
    getTrainingBonus,
    getDerivedStats,
    getLootLuck,
  } = selectors;
  runtimeGetLootLuck = getLootLuck;

  syncStateFromStore();

  function ensureUnlockedSkills(onUnlock = null) {
    const p = state.player;
    const unlocked = [];
    Object.values(SKILLS).forEach((skill) => {
      if (p.level >= skill.unlockLevel && !p.unlockedSkills.includes(skill.id)) {
        p.unlockedSkills.push(skill.id);
        unlocked.push(skill);
      }
    });
    if (typeof onUnlock === 'function') {
      unlocked.forEach((skill) => onUnlock(skill));
    }
    return unlocked;
  }

  function normalizeItemList(items, source = 'legacy') {
    return (Array.isArray(items) ? items : [])
      .map((item) => normalizeItem(item, { source }))
      .filter(Boolean);
  }

  function normalizeEquipmentMap(equipment, fallbackEquipment) {
    const next = { ...(fallbackEquipment || {}) };
    SLOT_ORDER.forEach((slot) => {
      if (equipment && equipment[slot]) {
        next[slot] = normalizeItem(equipment[slot], {
          slot,
          source: (equipment[slot].provenance && equipment[slot].provenance.source) || 'legacy',
        });
      } else {
        next[slot] = null;
      }
    });
    return next;
  }

  function migrateLegacyState(defaults) {
    const currentVersion = Number(state.version || 0);

    state.player.inventory = normalizeItemList(state.player.inventory, 'legacy');
    state.player.equipment = normalizeEquipmentMap(state.player.equipment, defaults.player.equipment);
    state.market.items = normalizeItemList(state.market.items, 'market');

    state.player.inventory.sort((a, b) => {
      const rarityGap = rarityOrder(b.rarity) - rarityOrder(a.rarity);
      if (rarityGap !== 0) return rarityGap;
      return (b.score || 0) - (a.score || 0);
    });

    if (!state.player.itemPity || typeof state.player.itemPity !== 'object') {
      state.player.itemPity = clone(defaults.player.itemPity);
    }

    if (!state.combatDifficulty || typeof state.combatDifficulty !== 'object') {
      state.combatDifficulty = clone(defaults.combatDifficulty);
    }

    if (currentVersion < defaults.version) {
      state.version = defaults.version;
    }
  }

  function normalizeState() {
    const defaults = makeDefaultState();
    replaceState(deepMerge(defaults, clone(state)));
    state.currentView = state.currentView || state.currentTab || 'resumen';
    state.currentTab = state.currentView;
    state.ui.moreMenuOpen = !!state.ui.moreMenuOpen;
    if (!state.player.inventory) state.player.inventory = [];
    if (!state.player.equipment) state.player.equipment = defaults.player.equipment;
    if (!state.player.guild) state.player.guild = defaults.player.guild;
    if (!state.player.training) state.player.training = defaults.player.training;
    if (!state.player.relics) state.player.relics = defaults.player.relics;
    if (!state.player.skillLevels) state.player.skillLevels = defaults.player.skillLevels;
    if (!state.player.activeSkills) state.player.activeSkills = defaults.player.activeSkills;
    if (!state.player.unlockedSkills) state.player.unlockedSkills = defaults.player.unlockedSkills;
    if (!state.quests) state.quests = defaults.quests;
    if (!state.market || !state.market.items) state.market = defaults.market;
    if (!state.stats) state.stats = defaults.stats;
    if (!state.claimedAchievements) state.claimedAchievements = [];
    if (!state.combatHistory) state.combatHistory = [];
    if (!state.combatDifficulty) state.combatDifficulty = defaults.combatDifficulty;
    if (!state.journal) state.journal = defaults.journal;
    if (!state.streak) state.streak = defaults.streak;
    if (!state.timers) state.timers = defaults.timers;
    if (!state.ui) state.ui = defaults.ui;
    migrateLegacyState(defaults);
    state.ui.inventoryFilter = state.ui.inventoryFilter || 'all';
    state.ui.inventoryPage = Math.max(1, Number(state.ui.inventoryPage) || 1);
    state.ui.inventoryPageSize = Math.max(6, Number(state.ui.inventoryPageSize) || defaults.ui.inventoryPageSize);
    state.ui.journalPage = Math.max(1, Number(state.ui.journalPage) || 1);
    state.ui.journalPageSize = Math.max(8, Number(state.ui.journalPageSize) || defaults.ui.journalPageSize);
    if (!state.ui.collapsedCardsByView || typeof state.ui.collapsedCardsByView !== 'object') {
      state.ui.collapsedCardsByView = {};
    }
    state.combatDifficulty.adaptiveOffset = clamp(Number(state.combatDifficulty.adaptiveOffset || 0), -0.1, 0.1);
    state.combatDifficulty.recentResults = Array.isArray(state.combatDifficulty.recentResults)
      ? state.combatDifficulty.recentResults.slice(-12)
      : [];
    state.combatDifficulty.failStreak = Math.max(0, Number(state.combatDifficulty.failStreak || 0));
    state.combatDifficulty.successStreak = Math.max(0, Number(state.combatDifficulty.successStreak || 0));
    state.combatDifficulty.combatsSinceAdjust = Math.max(0, Number(state.combatDifficulty.combatsSinceAdjust || 0));
    state.combatDifficulty.lastAdjustmentAt = state.combatDifficulty.lastAdjustmentAt || null;
    ensureUnlockedSkills();
    const ds = getDerivedStats();
    state.player.hp = clamp(state.player.hp || ds.maxHp, 1, ds.maxHp);
    state.player.energy = clamp(state.player.energy ?? ds.maxEnergy, 0, ds.maxEnergy);
    state.player.stamina = clamp(state.player.stamina ?? ds.maxStamina, 0, ds.maxStamina);
    state.player.title = state.player.title || 'Novato del Coliseo';
    state.lastTick = state.lastTick || Date.now();
    state.lastSave = state.lastSave || 0;
  }

  const mutationsModule = createMutationsModule({
    state,
    gameStore,
    clone,
    snapshotGameData,
    replaceState,
    normalizeState,
    createStoreMeta,
    setStoreSnapshot,
  });
  const {
    getStoreMeta,
    setStoreMeta,
    commitWorkingState,
    mutate,
    subscribeStore,
    selectStore,
  } = mutationsModule;

  const persistenceModule = createPersistenceModule({
    STORAGE_KEY,
    state,
    makeDefaultState,
    clone,
    snapshotGameData,
    serializableState,
    replaceState,
    normalizeState,
    commitWorkingState,
    setStoreMeta,
    getStoreMeta,
  });
  const {
    saveGame,
    loadGame,
    syncExternalState,
    hardReset,
  } = persistenceModule;

  const storeActions = {
    mutate,
    saveGame,
    loadGame,
    hardReset,
    setMeta: setStoreMeta,
    syncExternalState,
  };
  gameStore.setState({ ...gameStore.getState(), actions: storeActions });
  syncStateFromStore();

  window.AetherModel = {
    state,
    store: gameStore,
    replaceState,
    snapshotGameData,
    mutate,
    subscribeStore,
    selectStore,
    getStoreMeta,
    setStoreMeta,
    syncExternalState,
    makeItem,
    makeStarterItem,
    scaleItemStats,
    computeItemScores,
    computeItemScore,
    estimateSalvage,
    rollLoot,
    makeItemFromBudget,
    applyAffixesWithBudget,
    normalizeItem,
    xpNeeded,
    defaultQuests,
    generateMarket,
    starterInventory,
    makeDefaultState,
    maxInventory,
    guildTotal,
    getPetData,
    petBonus,
    getGuildBonus,
    getRelicBonus,
    getEquipmentBonus,
    getTrainingBonus,
    getDerivedStats,
    getLootLuck,
    ensureUnlockedSkills,
    normalizeState,
    saveGame,
    loadGame,
    hardReset,
  };
})();
