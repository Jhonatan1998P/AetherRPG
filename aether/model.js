(() => {
  const { STORAGE_KEY, SLOT_ORDER, ITEM_BASES, AFFIXES, PETS, SKILLS } = window.AetherConfig;
  const { clone, rand, pick, clamp, sum, uid, softRound, rarityDef, deepMerge, emptyStats, addStats, localDayKey, pickRarity, findBaseItem, scaledStatValue } = window.AetherUtils;

  function makeItem(slot, level, forcedRarity = null, forcedBase = null, guaranteedAffixes = 0) {
    const base = forcedBase ? findBaseItem(slot, forcedBase) : pick(ITEM_BASES[slot]);
    const rarity = forcedRarity ? rarityDef(forcedRarity) : pickRarity(level, getLootLuck());
    const stats = {};
    Object.entries(base.stats).forEach(([key, value]) => {
      const scaled = typeof value === 'number'
        ? (key === 'crit' || key === 'dodge' || key === 'block' || key === 'lifesteal' ? value + Math.max(0, level - 1) * 0.0005 : scaledStatValue(value, level))
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
        guard++;
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
    const firstPrefix = applied.find(a => a.prefix);
    const firstSuffix = applied.find(a => a.suffix);
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
      affixes: applied.map(a => a.prefix || a.suffix),
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
      (s.lifesteal || 0) * 140, 1
    );
  }

  function xpNeeded(level) {
    return Math.round(95 + Math.pow(level, 1.46) * 48);
  }

  function defaultQuests(level = 1) {
    const pool = [
      {
        type: 'kills',
        title: 'Barrido de rivales',
        desc: 'Derrota enemigos en la arena.',
        target: 7 + Math.floor(level * 1.6),
        reward: { gold: 120 + level * 20, xp: 60 + level * 14, essence: 1 }
      },
      {
        type: 'wins',
        title: 'Clamor del público',
        desc: 'Gana combates de arena.',
        target: 4 + Math.floor(level * 0.6),
        reward: { gold: 140 + level * 24, xp: 65 + level * 15, potions: 1 }
      },
      {
        type: 'earnGold',
        title: 'Bolsillos pesados',
        desc: 'Obtén oro por cualquier medio.',
        target: 320 + level * 90,
        reward: { gold: 150 + level * 22, xp: 70 + level * 12, shards: 1 }
      },
      {
        type: 'crafts',
        title: 'Acero fresco',
        desc: 'Forja o mejora equipo.',
        target: 2 + Math.floor(level / 7),
        reward: { gold: 180 + level * 18, xp: 60 + level * 16, iron: 3 }
      },
      {
        type: 'expeditions',
        title: 'Rutas peligrosas',
        desc: 'Completa expediciones.',
        target: 2 + Math.floor(level / 8),
        reward: { gold: 160 + level * 18, xp: 72 + level * 14, wood: 3 }
      },
      {
        type: 'dungeons',
        title: 'Hedor profundo',
        desc: 'Supera incursiones en mazmorra.',
        target: 1 + Math.floor(level / 10),
        reward: { gold: 220 + level * 18, xp: 95 + level * 18, keys: 1 }
      },
      {
        type: 'salvaged',
        title: 'Chatarra útil',
        desc: 'Recicla equipo sobrante.',
        target: 3 + Math.floor(level / 7),
        reward: { gold: 130 + level * 18, xp: 55 + level * 13, essence: 2 }
      },
      {
        type: 'elites',
        title: 'Sangre de élite',
        desc: 'Derrota enemigos élite.',
        target: 1 + Math.floor(level / 9),
        reward: { gold: 240 + level * 20, xp: 90 + level * 17, shards: 1 }
      },
    ];
    const quests = [];
    const selected = [];
    while (quests.length < 4 && selected.length < pool.length) {
      const q = pick(pool);
      if (!selected.includes(q.type)) {
        selected.push(q.type);
        quests.push({
          id: uid(),
          type: q.type,
          title: q.title,
          desc: q.desc,
          progress: 0,
          target: q.target,
          reward: q.reward,
          completed: false,
          claimed: false,
        });
      }
    }
    return quests;
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

  function makeDefaultState() {
    return {
      version: 4,
      currentView: 'resumen',
      currentTab: 'resumen',
      ui: {
        inventoryFilter: 'all',
        inventoryPage: 1,
        inventoryPageSize: 18,
        journalPage: 1,
        journalPageSize: 16,
        modal: null,
        forgePreview: null,
        moreMenuOpen: false,
      },
      player: {
        name: 'Aurelio',
        title: 'Novato del Coliseo',
        level: 1,
        xp: 0,
        gold: 260,
        shards: 0,
        iron: 16,
        wood: 12,
        essence: 5,
        food: 6,
        potions: 3,
        keys: 2,
        hp: 140,
        energy: 100,
        stamina: 12,
        baseStats: { attack: 14, defense: 10, speed: 8, crit: 0.06, dodge: 0.04, block: 0.03, lifesteal: 0 },
        training: { strength: 0, agility: 0, endurance: 0, discipline: 0 },
        guild: { barracks: 0, treasury: 0, sanctuary: 0, hunters: 0, arsenal: 0 },
        relics: { wrath: 0, fortune: 0, vitality: 0, momentum: 0 },
        pet: null,
        petLevel: 0,
        petXp: 0,
        activeSkills: ['powerStrike', 'quickLunge', 'fortify'],
        unlockedSkills: ['powerStrike', 'quickLunge', 'fortify'],
        skillLevels: {
          powerStrike: 1,
          quickLunge: 1,
          fortify: 1,
          shieldBash: 1,
          bloodRage: 1,
          whirlwind: 1,
          execution: 1,
          venomCut: 1,
          berserk: 1,
          celestialEdge: 1,
        },
        skillPoints: 0,
        attributePoints: 0,
        zoneId: 0,
        highestDungeonFloor: 1,
        ascension: 0,
        relicDust: 0,
        equipment: {
          weapon: makeStarterItem('weapon', 'Gladius'),
          offhand: makeStarterItem('offhand', 'Escudo de Torre'),
          helm: null,
          chest: makeStarterItem('chest', 'Coraza Segmentada'),
          gloves: null,
          boots: null,
          ring: null,
          amulet: null,
        },
        inventory: starterInventory(),
      },
      stats: {
        wins: 0,
        losses: 0,
        kills: 0,
        damageDone: 0,
        damageTaken: 0,
        crits: 0,
        questsCompleted: 0,
        crafted: 0,
        salvaged: 0,
        earnedGold: 0,
        expeditions: 0,
        dungeons: 0,
        elites: 0,
        legendaryFound: 0,
      },
      quests: defaultQuests(1),
      claimedAchievements: [],
      timers: {
        job: null,
        expedition: null,
      },
      market: {
        items: generateMarket(1),
        lastRefresh: Date.now(),
      },
      journal: [
        { id: uid(), ts: Date.now(), icon: '⚔️', text: 'Has entrado en Aether Arena. El coliseo huele a hierro, oro y gloria.' }
      ],
      streak: {
        lastClaimDay: null,
        days: 0,
      },
      combatHistory: [],
      lastTick: Date.now(),
      lastSave: 0,
    };
  }

  const STATE_INTERNAL_KEYS = new Set(['_meta', 'actions']);
  const state = {};
  const derivedCache = { sig: '', value: null };
  const rankCache = { sig: '', value: null };

  const zustandVanilla = window.zustandVanilla || window.zustand;
  const zustandMiddleware = window.zustandMiddleware || {};
  const subscribeWithSelector = typeof zustandMiddleware.subscribeWithSelector === 'function'
    ? zustandMiddleware.subscribeWithSelector
    : (creator) => creator;

  if (!zustandVanilla || typeof zustandVanilla.createStore !== 'function') {
    throw new Error('Zustand vanilla no esta disponible. Verifica la carga de la libreria antes de model.js');
  }

  function createStoreMeta(patch = {}) {
    return {
      hydrated: false,
      isDirty: false,
      isSaving: false,
      lastMutationAt: 0,
      lastMutationLabel: 'bootstrap',
      mutationCount: 0,
      lastSaveAt: 0,
      saveCount: 0,
      lastSource: 'bootstrap',
      syncRevision: 0,
      ...patch,
    };
  }

  function snapshotGameData(source = null) {
    const base = source || state;
    const out = {};
    Object.keys(base || {}).forEach((key) => {
      if (!STATE_INTERNAL_KEYS.has(key)) out[key] = clone(base[key]);
    });
    return out;
  }

  function serializableState(source = null) {
    const data = snapshotGameData(source);
    if (data.ui) {
      data.ui.modal = null;
      data.ui.moreMenuOpen = false;
      data.ui.forgePreview = null;
    }
    return data;
  }

  function replaceState(next) {
    Object.keys(state).forEach((key) => delete state[key]);
    Object.assign(state, next);
    derivedCache.sig = '';
    rankCache.sig = '';
  }

  const gameStore = zustandVanilla.createStore(subscribeWithSelector(() => ({
    ...clone(makeDefaultState()),
    _meta: createStoreMeta(),
    actions: {},
  })));

  function syncStateFromStore() {
    replaceState(snapshotGameData(gameStore.getState()));
    return state;
  }

  function setStoreSnapshot(nextGame, metaPatch = {}, replace = true) {
    const current = gameStore.getState();
    const nextMeta = createStoreMeta({ ...(current._meta || {}), ...metaPatch });
    const nextRoot = {
      ...clone(nextGame),
      _meta: nextMeta,
      actions: current.actions || {},
    };
    gameStore.setState(nextRoot, replace);
    return syncStateFromStore();
  }

  syncStateFromStore();


  function maxInventory() {
    return 28 + state.player.guild.arsenal * 8 + state.player.ascension * 2;
  }

  function guildTotal() {
    return sum(Object.values(state.player.guild || {}));
  }

  function getPetData() {
    return PETS.find(p => p.id === state.player.pet) || null;
  }

  function petBonus() {
    const pet = getPetData();
    const bonus = emptyStats();
    if (!pet || !state.player.petLevel) return bonus;
    const mult = 1 + state.player.petLevel * 0.16;
    Object.entries(pet.bonus).forEach(([key, value]) => {
      bonus[key] = softRound((bonus[key] || 0) + value * mult, 4);
    });
    return bonus;
  }

  function getGuildBonus() {
    const g = state.player.guild;
    const bonus = emptyStats();
    bonus.attackPct += g.barracks * 0.03;
    bonus.defensePct += g.barracks * 0.02;
    bonus.goldPct += g.treasury * 0.08;
    bonus.hpPct += g.sanctuary * 0.05;
    bonus.regenPct += g.sanctuary * 0.08;
    bonus.lootLuck += g.hunters * 0.05;
    return bonus;
  }

  function getRelicBonus() {
    const r = state.player.relics;
    const bonus = emptyStats();
    bonus.attackPct += r.wrath * 0.04;
    bonus.goldPct += r.fortune * 0.05;
    bonus.lootLuck += r.fortune * 0.03;
    bonus.hpPct += r.vitality * 0.06;
    bonus.regenPct += r.vitality * 0.06;
    bonus.speedPct += r.momentum * 0.03;
    return bonus;
  }

  function getEquipmentBonus() {
    const total = emptyStats();
    SLOT_ORDER.forEach((slot) => {
      const item = state.player.equipment[slot];
      if (item) addStats(total, scaleItemStats(item));
    });
    return total;
  }

  function getTrainingBonus() {
    const t = state.player.training;
    return {
      attack: t.strength * 2.2,
      defense: t.endurance * 1.3,
      speed: t.agility * 1.5,
      hp: t.endurance * 16,
      crit: t.agility * 0.002,
      dodge: t.agility * 0.002,
      block: t.endurance * 0.0015,
      lifesteal: t.strength * 0.0008,
    };
  }

  function getDerivedStats() {
    if (!state.player) {
      return {
        attack: 14,
        defense: 10,
        speed: 8,
        maxHp: 140,
        crit: 0.06,
        dodge: 0.04,
        block: 0.03,
        lifesteal: 0,
        maxEnergy: 100,
        maxStamina: 12,
        goldPct: 0,
        lootLuck: 0,
        regenPct: 0,
      };
    }
    const p = state.player;
    const sig = [
      p.level,
      p.baseStats.attack, p.baseStats.defense, p.baseStats.speed, p.baseStats.crit, p.baseStats.dodge, p.baseStats.block, p.baseStats.lifesteal,
      p.training.strength, p.training.agility, p.training.endurance, p.training.discipline,
      p.guild.barracks, p.guild.treasury, p.guild.sanctuary, p.guild.hunters, p.guild.arsenal,
      p.relics.wrath, p.relics.fortune, p.relics.vitality, p.relics.momentum,
      p.pet || '', p.petLevel || 0,
      ...SLOT_ORDER.map((slot) => {
        const item = p.equipment[slot];
        return item ? `${item.id}:${item.level}:${item.upgrade || 0}:${item.rarity}:${item.reforge || 0}` : '-';
      }),
    ].join('|');
    if (derivedCache.sig === sig && derivedCache.value) return derivedCache.value;

    const level = p.level;
    const base = {
      attack: p.baseStats.attack + level * 3.2,
      defense: p.baseStats.defense + level * 2.45,
      speed: p.baseStats.speed + level * 1.2,
      hp: 120 + level * 34,
      crit: p.baseStats.crit,
      dodge: p.baseStats.dodge,
      block: p.baseStats.block,
      lifesteal: p.baseStats.lifesteal,
      maxEnergy: 100 + p.training.discipline * 5 + p.relics.momentum * 10,
      maxStamina: 12 + Math.floor(p.training.discipline / 4) + p.relics.momentum,
    };

    const gear = getEquipmentBonus();
    const training = getTrainingBonus();
    const guild = getGuildBonus();
    const relic = getRelicBonus();
    const pet = petBonus();

    let attack = base.attack + (gear.attack || 0) + (training.attack || 0);
    let defense = base.defense + (gear.defense || 0) + (training.defense || 0);
    let speed = base.speed + (gear.speed || 0) + (training.speed || 0);
    let maxHp = base.hp + (gear.hp || 0) + (training.hp || 0);

    const attackPct = (guild.attackPct || 0) + (relic.attackPct || 0) + (pet.attackPct || 0);
    const defensePct = (guild.defensePct || 0) + (pet.defensePct || 0);
    const hpPct = (guild.hpPct || 0) + (relic.hpPct || 0) + (pet.hpPct || 0);
    const speedPct = (relic.speedPct || 0) + (pet.speedPct || 0);

    attack *= (1 + attackPct);
    defense *= (1 + defensePct);
    maxHp *= (1 + hpPct);
    speed *= (1 + speedPct);

    derivedCache.sig = sig;
    derivedCache.value = {
      attack: softRound(attack, 2),
      defense: softRound(defense, 2),
      speed: softRound(speed, 2),
      maxHp: Math.round(maxHp),
      crit: clamp(base.crit + (gear.crit || 0) + (training.crit || 0) + (pet.crit || 0), 0, 0.7),
      dodge: clamp(base.dodge + (gear.dodge || 0) + (training.dodge || 0) + (pet.dodge || 0), 0, 0.55),
      block: clamp(base.block + (gear.block || 0) + (training.block || 0) + (pet.block || 0), 0, 0.5),
      lifesteal: clamp(base.lifesteal + (gear.lifesteal || 0) + (training.lifesteal || 0), 0, 0.45),
      maxEnergy: base.maxEnergy,
      maxStamina: base.maxStamina,
      goldPct: (guild.goldPct || 0) + (pet.goldPct || 0) + (relic.goldPct || 0),
      lootLuck: (guild.lootLuck || 0) + (pet.lootLuck || 0) + (relic.lootLuck || 0),
      regenPct: (guild.regenPct || 0) + (pet.regenPct || 0) + (relic.regenPct || 0),
    };
    return derivedCache.value;
  }

  function getLootLuck() {
    if (!state.player) return 0;
    return getDerivedStats().lootLuck || 0;
  }

  function ensureUnlockedSkills() {
    const p = state.player;
    Object.values(SKILLS).forEach((skill) => {
      if (p.level >= skill.unlockLevel && !p.unlockedSkills.includes(skill.id)) {
        p.unlockedSkills.push(skill.id);
        window.AetherSystems?.addJournal('✨', `Has desbloqueado la habilidad <b>${skill.name}</b>.`);
        window.AetherSystems?.toast(`Habilidad desbloqueada: ${skill.name}`, 'violet');
      }
    });
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
    if (!state.journal) state.journal = defaults.journal;
    if (!state.streak) state.streak = defaults.streak;
    if (!state.timers) state.timers = defaults.timers;
    if (!state.ui) state.ui = defaults.ui;
    state.ui.inventoryFilter = state.ui.inventoryFilter || 'all';
    state.ui.inventoryPage = Math.max(1, Number(state.ui.inventoryPage) || 1);
    state.ui.inventoryPageSize = Math.max(6, Number(state.ui.inventoryPageSize) || defaults.ui.inventoryPageSize);
    state.ui.journalPage = Math.max(1, Number(state.ui.journalPage) || 1);
    state.ui.journalPageSize = Math.max(8, Number(state.ui.journalPageSize) || defaults.ui.journalPageSize);
    ensureUnlockedSkills();
    const ds = getDerivedStats();
    state.player.hp = clamp(state.player.hp || ds.maxHp, 1, ds.maxHp);
    state.player.energy = clamp(state.player.energy ?? ds.maxEnergy, 0, ds.maxEnergy);
    state.player.stamina = clamp(state.player.stamina ?? ds.maxStamina, 0, ds.maxStamina);
    state.player.title = state.player.title || 'Novato del Coliseo';
    state.lastTick = state.lastTick || Date.now();
    state.lastSave = state.lastSave || 0;
  }

  function getStoreMeta() {
    return gameStore.getState()._meta || createStoreMeta();
  }

  function setStoreMeta(patch = {}) {
    const current = gameStore.getState();
    gameStore.setState({
      ...current,
      _meta: createStoreMeta({ ...(current._meta || {}), ...patch }),
    });
    return getStoreMeta();
  }

  function commitWorkingState(metaPatch = {}, replace = true) {
    return setStoreSnapshot(state, metaPatch, replace);
  }

  function loadFromParsedState(nextState, source = 'storage') {
    replaceState(clone(nextState || makeDefaultState()));
    normalizeState();
    const now = Date.now();
    return commitWorkingState({
      hydrated: true,
      isDirty: false,
      isSaving: false,
      lastSaveAt: state.lastSave || now,
      lastSource: source,
      syncRevision: source === 'external-sync' ? getStoreMeta().syncRevision + 1 : getStoreMeta().syncRevision,
    });
  }

  function mutate(label, updater, options = {}) {
    const prev = snapshotGameData(gameStore.getState());
    try {
      replaceState(clone(prev));
      if (typeof updater === 'function') updater(state);
      if (options.normalize) normalizeState();
      const meta = getStoreMeta();
      return commitWorkingState({
        hydrated: true,
        isDirty: options.markDirty === false ? meta.isDirty : true,
        isSaving: false,
        lastMutationAt: Date.now(),
        lastMutationLabel: label || 'mutation',
        mutationCount: (meta.mutationCount || 0) + 1,
        lastSource: options.source || 'local',
      });
    } catch (err) {
      replaceState(prev);
      throw err;
    }
  }

  function saveGame() {
    try {
      const now = Date.now();
      setStoreMeta({ isSaving: true });
      const persistable = serializableState(gameStore.getState());
      persistable.lastSave = now;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
      replaceState(snapshotGameData(gameStore.getState()));
      state.lastSave = now;
      commitWorkingState({
        hydrated: true,
        isDirty: false,
        isSaving: false,
        lastSaveAt: now,
        saveCount: (getStoreMeta().saveCount || 0) + 1,
        lastSource: 'save',
      });
      return true;
    } catch (err) {
      console.warn('No se pudo guardar la partida.', err);
      setStoreMeta({ isSaving: false });
      return false;
    }
  }

  function loadGame() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return loadFromParsedState(makeDefaultState(), 'new-game');
      }
      return loadFromParsedState(JSON.parse(raw), 'storage');
    } catch (err) {
      console.warn('Guardado corrupto, creando uno nuevo.', err);
      return loadFromParsedState(makeDefaultState(), 'recovered');
    }
  }

  function syncExternalState(raw) {
    try {
      if (!raw) {
        return loadFromParsedState(makeDefaultState(), 'external-sync');
      }
      return loadFromParsedState(JSON.parse(raw), 'external-sync');
    } catch (err) {
      console.warn('No se pudo sincronizar el estado externo.', err);
      return false;
    }
  }

  function hardReset() {
    localStorage.removeItem(STORAGE_KEY);
    return loadFromParsedState(makeDefaultState(), 'reset');
  }

  function subscribeStore(selector, listener, options) {
    if (typeof selector === 'function' && typeof listener === 'function') {
      return gameStore.subscribe(selector, listener, options);
    }
    return gameStore.subscribe(selector);
  }

  function selectStore(selector) {
    return typeof selector === 'function' ? selector(gameStore.getState()) : gameStore.getState();
  }

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
    computeItemScore,
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
