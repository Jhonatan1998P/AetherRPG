export function createDefaultsModule(deps) {
  const { pick, uid, makeStarterItem, starterInventory, generateMarket } = deps;

  function xpNeeded(level) {
    return Math.round(95 + Math.pow(level, 1.46) * 48);
  }

  function defaultQuests(level = 1) {
    const pool = [
      { type: 'kills', title: 'Barrido de rivales', desc: 'Derrota enemigos en la arena.', target: 7 + Math.floor(level * 1.6), reward: { gold: 120 + level * 20, xp: 60 + level * 14, essence: 1 } },
      { type: 'wins', title: 'Clamor del publico', desc: 'Gana combates de arena.', target: 4 + Math.floor(level * 0.6), reward: { gold: 140 + level * 24, xp: 65 + level * 15, potions: 1 } },
      { type: 'earnGold', title: 'Bolsillos pesados', desc: 'Obten oro por cualquier medio.', target: 320 + level * 90, reward: { gold: 150 + level * 22, xp: 70 + level * 12, shards: 1 } },
      { type: 'crafts', title: 'Acero fresco', desc: 'Forja o mejora equipo.', target: 2 + Math.floor(level / 7), reward: { gold: 180 + level * 18, xp: 60 + level * 16, iron: 3 } },
      { type: 'expeditions', title: 'Rutas peligrosas', desc: 'Completa expediciones.', target: 2 + Math.floor(level / 8), reward: { gold: 160 + level * 18, xp: 72 + level * 14, wood: 3 } },
      { type: 'dungeons', title: 'Hedor profundo', desc: 'Supera incursiones en mazmorra.', target: 1 + Math.floor(level / 10), reward: { gold: 220 + level * 18, xp: 95 + level * 18, keys: 1 } },
      { type: 'salvaged', title: 'Chatarra util', desc: 'Recicla equipo sobrante.', target: 3 + Math.floor(level / 7), reward: { gold: 130 + level * 18, xp: 55 + level * 13, essence: 2 } },
      { type: 'elites', title: 'Sangre de elite', desc: 'Derrota enemigos elite.', target: 1 + Math.floor(level / 9), reward: { gold: 240 + level * 20, xp: 90 + level * 17, shards: 1 } },
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

  function makeDefaultState() {
    const startedAt = Date.now();
    return {
      version: 7,
      currentView: 'resumen',
      currentTab: 'resumen',
      featureFlags: {
        itemPipelineV2: true,
        itemTelemetryV2: true,
        enemyPipelineV1: true,
        forgeDepthV1: true,
      },
      ui: {
        inventoryFilter: 'all',
        inventoryPage: 1,
        inventoryPageSize: 18,
        journalPage: 1,
        journalPageSize: 16,
        autoSave: true,
        pendingPlayerName: '',
        pendingRenameName: '',
        modal: null,
        forgePreview: null,
        forgeReforgeMode: 'total',
        moreMenuOpen: false,
        collapsedCardsByView: {},
      },
      player: {
        name: 'Aurelio',
        title: 'Novato del Coliseo',
        onboardingCompleted: false,
        level: 1,
        xp: 0,
        gold: 260,
        shards: 0,
        iron: 16,
        wood: 12,
        essence: 5,
        sigils: 0,
        echoShards: 0,
        catalysts: 1,
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
        itemPity: {
          bySource: {},
          epic: 0,
          mythic: 0,
          ascendant: 0,
          total: 0,
        },
        forge: {
          school: 'arsenal',
          masteryPoints: 0,
          masteryNodes: {},
          actionPity: {
            enhance: 0,
            reforge: 0,
            transcend: 0,
            stabilize: 0,
          },
          actionCounters: {
            craft: 0,
            enhance: 0,
            reforge: 0,
            transcend: 0,
            stabilize: 0,
            convert: 0,
          },
          itemRerollChains: {},
          firstTranscendAt: null,
          firstStabilizeAt: null,
        },
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
        mythicFound: 0,
        ascendantFound: 0,
        goldSpent: 0,
        materialsSpent: 0,
        equippedUpgrades: 0,
        craftUsage: {
          craft: 0,
          enhance: 0,
          reforge: 0,
          transcend: 0,
          stabilize: 0,
          convert: 0,
        },
        telemetry: {
          startedAt,
          firstEpicAt: null,
          firstMythicAt: null,
          firstAscendantAt: null,
          rarityBySource: {
            arena: {},
            dungeon: {},
            expedition: {},
            market: {},
            forge: {},
            legacy: {},
          },
          netGoldByHour: {},
          netMaterialsByHour: {},
          milestonesShown: {
            epic: false,
            mythic: false,
            firstTranscend: false,
          },
          forge: {
            samples: {
              craft: 0,
              enhance: 0,
              reforge: 0,
              transcend: 0,
              stabilize: 0,
              convert: 0,
            },
            usefulOutcomes: {
              enhance: 0,
              reforge: 0,
              transcend: 0,
              stabilize: 0,
            },
            favorableOutcomes: 0,
            neutralOutcomes: 0,
            unfavorableOutcomes: 0,
            actionPityState: {
              enhance: 0,
              reforge: 0,
              transcend: 0,
              stabilize: 0,
            },
            costPerUsefulOutcome: {
              gold: 0,
              materials: 0,
              samples: 0,
            },
            firstMeaningfulUpgradeAt: null,
            firstSpecializationDecisionAt: null,
            schoolSwaps: 0,
            loops: {
              craftToSellRoi: [],
              buyToSalvageRoi: [],
            },
            threatToAffinity: [],
            governance: {
              shortCycleRetunes: 0,
              mediumCycleRetunes: 0,
              longCycleRetunes: 0,
              lastRetuneAt: null,
            },
          },
          combat: {
            samples: {
              total: 0,
              victories: 0,
              defeats: 0,
              turnsTotal: 0,
              hpRatioTotal: 0,
              potionsUsed: 0,
            },
            bySegment: {},
            failStreakByZone: {},
            threatToReward: [],
            alerts: {
              winrateDeviation: {},
              overtunedBosses: {},
              economyOutlier: null,
            },
          },
        },
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
        refreshChainCount: 0,
        cooldownUntil: 0,
        totalRefreshes: 0,
      },
      journal: [
        { id: uid(), ts: Date.now(), icon: '⚔️', text: 'Has entrado en Aether Arena. El coliseo huele a hierro, oro y gloria.' }
      ],
      streak: {
        lastClaimDay: null,
        days: 0,
      },
      combatDifficulty: {
        adaptiveOffset: 0,
        recentResults: [],
        failStreak: 0,
        successStreak: 0,
        combatsSinceAdjust: 0,
        lastAdjustmentAt: null,
      },
      combatHistory: [],
      lastTick: Date.now(),
      lastSave: 0,
    };
  }

  return {
    xpNeeded,
    defaultQuests,
    makeDefaultState,
  };
}
