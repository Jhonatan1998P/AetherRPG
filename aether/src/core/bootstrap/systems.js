import { createCombatDomain } from '../../features/gameplay/domain/combat.js';
import { createEconomyDomain } from '../../features/gameplay/domain/economy.js';
import { createActivitiesDomain } from '../../features/gameplay/domain/activities.js';
import { createProgressionDomain } from '../../features/gameplay/domain/progression.js';

(() => {
  const {
    SLOT_ORDER,
    SLOT_NAMES,
    ITEM_ARCHETYPES,
    RANKS,
    ZONES,
    JOBS,
    PETS,
    SKILLS,
    ACHIEVEMENTS,
    FORGE_SCHOOLS,
    FORGE_MASTERY_NODES,
    FORGE_ACTION_PITY,
    FORGE_ECONOMY_TARGETS,
    ENEMY_ARCHETYPES,
    ENEMY_FAMILIES_BY_ZONE,
    ENEMY_AFFIXES,
    ENCOUNTER_TEMPLATES,
    ENEMY_BUDGETS,
    REWARD_CURVES,
    THREAT_BANDS,
  } = window.AetherConfig;
  const {
    $,
    clone,
    rand,
    randf,
    pick,
    clamp,
    sum,
    uid,
    fmt,
    pct,
    softRound,
    localDayKey,
    timeLeft,
    rarityDef,
    rarityOrder,
    nextRarityKey,
    sanitizeInlineHtml,
  } = window.AetherUtils;
  const {
    state,
    replaceState,
    makeDefaultState,
    normalizeState,
    makeItem,
    rollLoot,
    scaleItemStats,
    computeItemScores,
    computeItemScore,
    estimateSalvage,
    normalizeItem,
    xpNeeded,
    defaultQuests,
    generateMarket,
    maxInventory,
    guildTotal,
    getPetData,
    getDerivedStats,
    getLootLuck,
    getSetResonanceBonus,
    ensureUnlockedSkills,
    saveGame,
  } = window.AetherModel;

  const combatDomain = createCombatDomain({
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
  });

  const economyDomain = createEconomyDomain({
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
  });

  const activitiesDomain = createActivitiesDomain({
    JOBS,
    ZONES,
    ENEMY_FAMILIES_BY_ZONE,
    clone,
    rand,
    rollLoot,
    clamp,
  });

  const progressionDomain = createProgressionDomain({
    RANKS,
    ACHIEVEMENTS,
    clamp,
    clone,
    defaultQuests,
    makeDefaultState,
  });

  function addJournal(icon, text) {
    state.journal.unshift({ id: uid(), ts: Date.now(), icon, text: sanitizeInlineHtml(text) });
    state.journal = state.journal.slice(0, 80);
  }

  function toast(text, tone = 'cyan') {
    const root = $('toast-root');
    if (!root) return;
    const map = {
      cyan: 'from-sky-500/25 to-cyan-300/10 border-cyan-300/25',
      gold: 'from-amber-500/25 to-yellow-300/10 border-amber-300/30',
      danger: 'from-rose-500/25 to-pink-300/10 border-rose-300/25',
      success: 'from-emerald-500/25 to-green-300/10 border-emerald-300/25',
      violet: 'from-violet-500/25 to-fuchsia-300/10 border-violet-300/25',
    };
    const el = document.createElement('div');
    el.className = `glass-strong pointer-events-none rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-br ${map[tone] || map.cyan} animate-[fadeIn_.2s_ease]`;
    el.innerHTML = sanitizeInlineHtml(text);
    root.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(-6px)';
      setTimeout(() => el.remove(), 260);
    }, 2800);
  }

  function ensureTelemetryShape() {
    if (!state.stats.telemetry || typeof state.stats.telemetry !== 'object') {
      state.stats.telemetry = {};
    }
    const telemetry = state.stats.telemetry;
    telemetry.startedAt = telemetry.startedAt || Date.now();
    telemetry.firstEpicAt = telemetry.firstEpicAt || null;
    telemetry.firstMythicAt = telemetry.firstMythicAt || null;
    telemetry.firstAscendantAt = telemetry.firstAscendantAt || null;
    if (!telemetry.rarityBySource || typeof telemetry.rarityBySource !== 'object') {
      telemetry.rarityBySource = {};
    }
    if (!telemetry.netGoldByHour || typeof telemetry.netGoldByHour !== 'object') {
      telemetry.netGoldByHour = {};
    }
    if (!telemetry.netMaterialsByHour || typeof telemetry.netMaterialsByHour !== 'object') {
      telemetry.netMaterialsByHour = {};
    }
    if (!telemetry.milestonesShown || typeof telemetry.milestonesShown !== 'object') {
      telemetry.milestonesShown = { epic: false, mythic: false };
    }
    telemetry.milestonesShown.firstTranscend = !!telemetry.milestonesShown.firstTranscend;

    if (!telemetry.forge || typeof telemetry.forge !== 'object') {
      telemetry.forge = {
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
      };
    }
    const forgeTelemetry = telemetry.forge;
    forgeTelemetry.samples = forgeTelemetry.samples && typeof forgeTelemetry.samples === 'object'
      ? forgeTelemetry.samples
      : { craft: 0, enhance: 0, reforge: 0, transcend: 0, stabilize: 0, convert: 0 };
    forgeTelemetry.usefulOutcomes = forgeTelemetry.usefulOutcomes && typeof forgeTelemetry.usefulOutcomes === 'object'
      ? forgeTelemetry.usefulOutcomes
      : { enhance: 0, reforge: 0, transcend: 0, stabilize: 0 };
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
    if (!telemetry.combat || typeof telemetry.combat !== 'object') {
      telemetry.combat = {};
    }
    if (!telemetry.combat.samples || typeof telemetry.combat.samples !== 'object') {
      telemetry.combat.samples = {
        total: 0,
        victories: 0,
        defeats: 0,
        turnsTotal: 0,
        hpRatioTotal: 0,
        potionsUsed: 0,
      };
    }
    if (!telemetry.combat.bySegment || typeof telemetry.combat.bySegment !== 'object') {
      telemetry.combat.bySegment = {};
    }
    if (!telemetry.combat.failStreakByZone || typeof telemetry.combat.failStreakByZone !== 'object') {
      telemetry.combat.failStreakByZone = {};
    }
    if (!Array.isArray(telemetry.combat.threatToReward)) {
      telemetry.combat.threatToReward = [];
    }
    if (!telemetry.combat.alerts || typeof telemetry.combat.alerts !== 'object') {
      telemetry.combat.alerts = {
        winrateDeviation: {},
        overtunedBosses: {},
        economyOutlier: null,
      };
    }
    return telemetry;
  }

  function telemetryHourKey(ts = Date.now()) {
    const d = new Date(ts);
    const yy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    return `${yy}-${mm}-${dd}T${hh}`;
  }

  function telemetryMaterialSum(player = state.player) {
    return (player.iron || 0)
      + (player.wood || 0)
      + (player.essence || 0)
      + (player.sigils || 0)
      + (player.echoShards || 0)
      + (player.catalysts || 0);
  }

  function recordEconomyDelta(goldDelta = 0, materialDelta = 0, ts = Date.now()) {
    const telemetry = ensureTelemetryShape();
    const hour = telemetryHourKey(ts);
    telemetry.netGoldByHour[hour] = (telemetry.netGoldByHour[hour] || 0) + goldDelta;
    telemetry.netMaterialsByHour[hour] = (telemetry.netMaterialsByHour[hour] || 0) + materialDelta;
  }

  function currentHourNetGold() {
    const telemetry = ensureTelemetryShape();
    const hour = telemetryHourKey(Date.now());
    return Number(telemetry.netGoldByHour[hour] || 0);
  }

  function economyTargetGoldPerHour() {
    return Math.max(900, Math.round(1600 + state.player.level * 170 + (state.player.ascension || 0) * 280));
  }

  function threatLabelFromScore(score = 0) {
    if (combatDomain.threatBandForScore) {
      const band = combatDomain.threatBandForScore(score);
      return band && band.label ? band.label : 'Media';
    }
    const fallback = (THREAT_BANDS || []).find((entry) => score >= entry.min && score < entry.max);
    return fallback ? fallback.label : 'Media';
  }

  function combatSegmentKey(entry) {
    return [
      `z${entry.zoneId}`,
      entry.kind || 'normal',
      entry.archetype || 'unknown',
      entry.family || 'unknown',
    ].join('|');
  }

  function recordCombatTelemetry(payload = {}) {
    const telemetry = ensureTelemetryShape();
    const combat = telemetry.combat;
    const summary = payload.summary || {};
    const victory = !!payload.victory;
    const zoneId = Number(payload.zoneId ?? 0);
    const kind = payload.kind || 'normal';
    const archetype = payload.archetype || 'unknown';
    const family = payload.family || 'unknown';
    const threatScore = Number(payload.threatScore || 0);
    const rewards = payload.rewards || {};
    const drop = payload.drop || null;
    const rewardValue = Number(rewards.gold || 0)
      + Number(rewards.xp || 0) * 0.6
      + Number(rewards.essence || 0) * 20
      + Number(rewards.sigils || 0) * 42
      + Number(rewards.echoShards || 0) * 120
      + Number(rewards.catalysts || 0) * 65;

    combat.samples.total += 1;
    if (victory) combat.samples.victories += 1;
    else combat.samples.defeats += 1;
    combat.samples.turnsTotal += Number(summary.turnsPlayed || 0);
    if (typeof payload.playerHpRatio === 'number') combat.samples.hpRatioTotal += payload.playerHpRatio;
    combat.samples.potionsUsed += Number(payload.potionsUsed || 0);

    const segmentKey = combatSegmentKey({ zoneId, kind, archetype, family });
    if (!combat.bySegment[segmentKey]) {
      combat.bySegment[segmentKey] = {
        zoneId,
        kind,
        archetype,
        family,
        fights: 0,
        wins: 0,
        losses: 0,
        turnsTotal: 0,
        hpRatioTotal: 0,
        potionUsage: 0,
        threatTotal: 0,
        rewardGoldTotal: 0,
        rewardValueTotal: 0,
        dropRarity: {},
      };
    }

    const segment = combat.bySegment[segmentKey];
    segment.fights += 1;
    if (victory) segment.wins += 1;
    else segment.losses += 1;
    segment.turnsTotal += Number(summary.turnsPlayed || 0);
    segment.hpRatioTotal += Number(payload.playerHpRatio || 0);
    segment.potionUsage += Number(payload.potionsUsed || 0);
    segment.threatTotal += threatScore;
    segment.rewardGoldTotal += Number(rewards.gold || 0);
    segment.rewardValueTotal += rewardValue;

    if (drop && drop.rarity) {
      segment.dropRarity[drop.rarity] = (segment.dropRarity[drop.rarity] || 0) + 1;
    }

    const zoneKey = `z${zoneId}`;
    const zoneFail = combat.failStreakByZone[zoneKey] || 0;
    combat.failStreakByZone[zoneKey] = victory ? 0 : zoneFail + 1;

    combat.threatToReward.push({
      ts: Date.now(),
      zoneId,
      kind,
      archetype,
      family,
      threatScore,
      rewardGold: Number(rewards.gold || 0),
      rewardValue,
      dropRarity: drop && drop.rarity ? drop.rarity : null,
    });
    combat.threatToReward = combat.threatToReward.slice(-240);

    const fights = segment.fights;
    const winrate = fights > 0 ? segment.wins / fights : 0;
    const target = kind === 'boss' ? 0.44 : kind === 'elite' ? 0.52 : 0.66;
    if (fights >= 12 && Math.abs(winrate - target) > 0.08) {
      combat.alerts.winrateDeviation[segmentKey] = {
        winrate: softRound(winrate, 3),
        target,
        fights,
      };
    }

    if (kind === 'boss' && fights >= 8 && (segment.losses / Math.max(1, fights)) > 0.7) {
      combat.alerts.overtunedBosses[segmentKey] = {
        lossRate: softRound(segment.losses / fights, 3),
        fights,
      };
    }

    const hourGold = currentHourNetGold();
    const targetHour = economyTargetGoldPerHour();
    if (hourGold > targetHour * 1.35) {
      combat.alerts.economyOutlier = {
        hour: telemetryHourKey(Date.now()),
        gold: hourGold,
        target: targetHour,
      };
    }
  }

  function recordItemTelemetry(item) {
    if (!item) return;
    const telemetry = ensureTelemetryShape();
    const source = (item.provenance && item.provenance.source) || 'legacy';
    if (!telemetry.rarityBySource[source]) telemetry.rarityBySource[source] = {};
    telemetry.rarityBySource[source][item.rarity] = (telemetry.rarityBySource[source][item.rarity] || 0) + 1;

    const elapsed = Date.now() - (telemetry.startedAt || Date.now());
    if (item.rarity === 'epic' && !telemetry.firstEpicAt) telemetry.firstEpicAt = elapsed;
    if (item.rarity === 'mythic' && !telemetry.firstMythicAt) telemetry.firstMythicAt = elapsed;
    if (item.rarity === 'ascendant' && !telemetry.firstAscendantAt) telemetry.firstAscendantAt = elapsed;

    if (item.rarity === 'epic' && !telemetry.milestonesShown.epic) {
      telemetry.milestonesShown.epic = true;
      addJournal('🎉', '¡Hito desbloqueado! Has obtenido tu primer objeto <b>epico</b>.');
      toast('Primer Epic obtenido', 'gold');
    }
    if (item.rarity === 'mythic' && !telemetry.milestonesShown.mythic) {
      telemetry.milestonesShown.mythic = true;
      addJournal('🌠', '¡Hito mayor! Has obtenido tu primer objeto <b>mitico</b>.');
      toast('Primer Mythic obtenido', 'violet');
    }
  }

  function grantRewards(reward, sourceLabel = 'Recompensa') {
    if (!reward) return;
    const goldDelta = Number(reward.gold || 0);
    const materialDelta = Number(reward.iron || 0)
      + Number(reward.wood || 0)
      + Number(reward.essence || 0)
      + Number(reward.sigils || 0)
      + Number(reward.echoShards || 0)
      + Number(reward.catalysts || 0);
    Object.entries(reward).forEach(([key, value]) => {
      if (key === 'xp') {
        gainXp(value);
      } else if (key in state.player) {
        state.player[key] += value;
      } else if (key in state.stats) {
        state.stats[key] += value;
      } else if (key === 'relicDust') {
        state.player.relicDust += value;
      }
    });
    if (reward.gold) {
      state.stats.earnedGold += reward.gold;
      trackQuest('earnGold', reward.gold);
    }
    if (goldDelta || materialDelta) {
      recordEconomyDelta(goldDelta, materialDelta);
    }
    addJournal('🎁', `${sourceLabel}: ${summarizeReward(reward)}`);
  }

  function summarizeReward(reward) {
    if (!reward || typeof reward !== 'object') return 'Sin recompensas';
    const entries = Object.entries(reward).filter(([, v]) => Number(v) > 0);
    if (!entries.length) return 'Sin recompensas';
    return entries.map(([k, v]) => {
      const label = {
        xp: 'XP', gold: 'oro', shards: 'fragmentos', iron: 'hierro', wood: 'madera',
        essence: 'esencia', sigils: 'sigilos', echoShards: 'eco fragmentos', catalysts: 'catalizadores', food: 'comida', potions: 'pociones', keys: 'llaves', relicDust: 'polvo reliquia'
      }[k] || k;
      return `+${fmt(v)} ${label}`;
    }).join(' · ');
  }

  function combatEndReasonLabel(endReason) {
    if (endReason === 'enemy_defeated') return 'Enemigo derrotado';
    if (endReason === 'player_defeated') return 'Caída del jugador';
    if (endReason === 'turn_limit') return 'Límite de turnos';
    return 'Resolución normal';
  }

  function gainXp(amount) {
    return progressionDomain.gainXp(state, amount, {
      xpNeeded,
      ensureUnlockedSkills,
      getDerivedStats,
      currentRank,
      addJournal,
      toast,
    });
  }

  function currentRank() {
    return progressionDomain.currentRank(state, guildTotal);
  }

  function withResourceTelemetry(action) {
    const beforeGold = state.player.gold || 0;
    const beforeMaterials = telemetryMaterialSum(state.player);
    const result = action();
    const afterGold = state.player.gold || 0;
    const afterMaterials = telemetryMaterialSum(state.player);
    const goldDelta = afterGold - beforeGold;
    const materialDelta = afterMaterials - beforeMaterials;
    if (goldDelta || materialDelta) {
      recordEconomyDelta(goldDelta, materialDelta);
    }
    return result;
  }

  function ensureCombatDifficultyState() {
    if (!state.combatDifficulty || typeof state.combatDifficulty !== 'object') {
      state.combatDifficulty = {
        adaptiveOffset: 0,
        recentResults: [],
        failStreak: 0,
        successStreak: 0,
        combatsSinceAdjust: 0,
        lastAdjustmentAt: null,
      };
    }
    const difficulty = state.combatDifficulty;
    difficulty.adaptiveOffset = clamp(Number(difficulty.adaptiveOffset || 0), -0.1, 0.1);
    difficulty.recentResults = Array.isArray(difficulty.recentResults) ? difficulty.recentResults.slice(-12) : [];
    difficulty.failStreak = Math.max(0, Number(difficulty.failStreak || 0));
    difficulty.successStreak = Math.max(0, Number(difficulty.successStreak || 0));
    difficulty.combatsSinceAdjust = Math.max(0, Number(difficulty.combatsSinceAdjust || 0));
    difficulty.lastAdjustmentAt = difficulty.lastAdjustmentAt || null;
    return difficulty;
  }

  function updateAdaptiveDifficulty(result = {}) {
    const difficulty = ensureCombatDifficultyState();
    const entry = {
      victory: !!result.victory,
      hpRatio: clamp(Number(result.playerHpRatio || 0), 0, 1),
      threatScore: Number(result.threatScore || 100),
      ts: Date.now(),
    };
    difficulty.recentResults.push(entry);
    difficulty.recentResults = difficulty.recentResults.slice(-12);
    difficulty.combatsSinceAdjust += 1;

    if (entry.victory) {
      difficulty.successStreak += 1;
      difficulty.failStreak = 0;
    } else {
      difficulty.failStreak += 1;
      difficulty.successStreak = 0;
    }

    if (difficulty.recentResults.length < 8 || difficulty.combatsSinceAdjust < 3) {
      return difficulty.adaptiveOffset;
    }

    const total = difficulty.recentResults.length;
    const wins = difficulty.recentResults.filter((sample) => sample.victory).length;
    const winrate = wins / Math.max(1, total);
    const avgHp = difficulty.recentResults.reduce((sumValue, sample) => sumValue + sample.hpRatio, 0) / Math.max(1, total);

    let delta = 0;
    if (winrate > 0.78 && avgHp > 0.62) {
      delta = clamp((winrate - 0.78) * 0.12 + (avgHp - 0.62) * 0.08, 0.02, 0.06);
    } else if (winrate < 0.42 || difficulty.failStreak >= 2) {
      const lowWinPressure = Math.max(0, 0.42 - winrate);
      const failPressure = difficulty.failStreak >= 2 ? 0.03 + Math.min(0.02, (difficulty.failStreak - 2) * 0.01) : 0;
      delta = -clamp(lowWinPressure * 0.14 + failPressure, 0.03, 0.08);
    }

    if (Math.abs(delta) >= 0.012) {
      difficulty.adaptiveOffset = clamp(difficulty.adaptiveOffset + delta, -0.1, 0.1);
      difficulty.combatsSinceAdjust = 0;
      difficulty.lastAdjustmentAt = Date.now();
    }
    return difficulty.adaptiveOffset;
  }

  function offlineCatchup() {
    const now = Date.now();
    const elapsed = clamp((now - (state.lastTick || now)) / 1000, 0, 60 * 60 * 12);
    if (elapsed <= 0) return;
    passiveRegen(elapsed);
    resolveFinishedTimers(now, true);
    state.lastTick = now;
  }

  function passiveRegen(seconds) {
    return activitiesDomain.passiveRegen(state, seconds, getDerivedStats);
  }


  function zoneForPlayer() {
    return ZONES.find(z => z.id === state.player.zoneId) || ZONES[0];
  }

  function isZoneUnlocked(zone) {
    return state.player.level >= zone.unlockLevel || state.player.ascension > 0 && zone.id <= 2;
  }

  function setZone(id) {
    const zone = ZONES.find(z => z.id === id);
    if (!zone || !isZoneUnlocked(zone)) return;
    state.player.zoneId = zone.id;
  }

  function enemyArchetypeMods(archetype) {
    return combatDomain.enemyArchetypeMods(archetype);
  }

  function difficultyMultiplier(zone, kind = 'normal', mode = 'arena') {
    const difficulty = ensureCombatDifficultyState();
    return combatDomain.difficultyMultiplier({
      zone,
      kind,
      mode,
      playerLevel: state.player.level || 1,
      playerAscension: state.player.ascension || 0,
      wins: state.stats && state.stats.wins ? state.stats.wins : 0,
      adaptiveOffset: difficulty.adaptiveOffset,
    });
  }

  function makeEnemy(zone, kind = 'normal', extraScale = 0, mode = 'arena') {
    const difficulty = ensureCombatDifficultyState();
    return combatDomain.makeEnemy({
      zone,
      kind,
      mode,
      extraScale,
      playerLevel: state.player.level || 1,
      playerAscension: state.player.ascension || 0,
      wins: state.stats && state.stats.wins ? state.stats.wins : 0,
      derivedStats: getDerivedStats(),
      combatDifficulty: difficulty,
      economyState: {
        netGoldThisHour: currentHourNetGold(),
        targetGoldPerHour: economyTargetGoldPerHour(),
      },
    });
  }

  function previewEncounter(kind = 'normal', mode = 'arena', options = {}) {
    const zone = options.zone || zoneForPlayer();
    const difficulty = ensureCombatDifficultyState();
    const enemy = combatDomain.rollEncounter({
      mode,
      zone,
      zoneId: zone.id,
      kind,
      extraScale: options.extraScale || 0,
      playerLevel: state.player.level || 1,
      playerAscension: state.player.ascension || 0,
      wins: state.stats && state.stats.wins ? state.stats.wins : 0,
      derivedStats: getDerivedStats(),
      adaptiveOffset: difficulty.adaptiveOffset,
      economyState: {
        netGoldThisHour: currentHourNetGold(),
        targetGoldPerHour: economyTargetGoldPerHour(),
      },
      preview: true,
      enemyFamily: options.enemyFamily,
      enemyArchetype: options.enemyArchetype,
    });
    const rewardProfile = combatDomain.computeEnemyRewardProfile({
      mode,
      kind,
      zoneId: zone.id,
      playerLevel: state.player.level,
      ascension: state.player.ascension || 0,
      enemy,
      threatScore: enemy.threatScore,
      threatRatio: (enemy.threatScore || 100) / 100,
      economyState: {
        netGoldThisHour: currentHourNetGold(),
        targetGoldPerHour: economyTargetGoldPerHour(),
      },
      preview: true,
    }, { victory: true });

    return {
      kind,
      mode,
      enemy,
      threatScore: enemy.threatScore,
      threatLabel: enemy.threatBand || threatLabelFromScore(enemy.threatScore),
      rewardProfile,
      rewardText: summarizeReward(rewardProfile.reward),
    };
  }

  function previewDungeonRoute(floor = state.player.highestDungeonFloor || 1) {
    const zone = ZONES[Math.min(ZONES.length - 1, Math.floor((Math.max(1, floor) - 1) / 2))] || zoneForPlayer();
    return [
      previewEncounter('normal', 'dungeon', { zone, extraScale: floor * 0.78 }),
      previewEncounter('normal', 'dungeon', { zone, extraScale: floor * 0.84 }),
      previewEncounter('elite', 'dungeon', { zone, extraScale: floor * 0.92 }),
      previewEncounter('boss', 'dungeon', { zone, extraScale: floor * 1.02 }),
    ];
  }

  function threatBandForScore(score = 0) {
    const band = combatDomain.threatBandForScore ? combatDomain.threatBandForScore(score) : null;
    if (band && band.label) return band.label;
    return threatLabelFromScore(score);
  }

  function buildPlayerCombatant() {
    return combatDomain.buildPlayerCombatant(state.player, getDerivedStats());
  }

  function activeBuffValue(actor, key) {
    return combatDomain.activeBuffValue(actor, key);
  }

  function effectiveStat(actor, key) {
    return combatDomain.effectiveStat(actor, key);
  }

  function skillLevelMult(skillId) {
    return combatDomain.skillLevelMult(state.player.skillLevels, skillId);
  }

  function choosePlayerSkill(player, enemy) {
    return combatDomain.choosePlayerSkill(player, enemy, {
      equipment: state.player.equipment,
      skillLevels: state.player.skillLevels,
    });
  }

  function chooseEnemySkill(enemy) {
    return combatDomain.chooseEnemySkill(enemy);
  }

  function decayStatuses(actor, log) {
    return combatDomain.decayStatuses(actor, log);
  }

  function performHit(attacker, defender, label, mult = 1, extra = {}, log = []) {
    return combatDomain.performHit(attacker, defender, label, mult, extra, log);
  }

  function applySkillEffects(attacker, defender, skill, hitResult, log) {
    return combatDomain.applySkillEffects(attacker, defender, skill, hitResult, log);
  }

  function actorTurn(attacker, defender, isPlayer, log) {
    const statsDelta = {
      damageDone: 0,
      damageTaken: 0,
      crits: 0,
      playerSkillCasts: 0,
      playerBasicAttacks: 0,
    };
    return combatDomain.actorTurn(attacker, defender, isPlayer, {
      equipment: state.player.equipment,
      skillLevels: state.player.skillLevels,
    }, statsDelta, log);
  }

  function tickCooldowns(actor) {
    return combatDomain.tickCooldowns(actor);
  }

  function onItemAcquired(item) {
    recordItemTelemetry(item);
  }

  function runCombat(enemy, context = { mode: 'arena' }) {
    const mode = context.mode || 'arena';
    const zone = ZONES[enemy.zoneId] || zoneForPlayer();
    const derivedStats = getDerivedStats();
    const playerPower = combatDomain.expectedPlayerPower({
      level: state.player.level || 1,
      ascension: state.player.ascension || 0,
      zoneId: zone.id,
      derivedStats,
    });

    if (!enemy.threatScore || enemy.threatScore <= 0) {
      enemy.threatScore = combatDomain.computeThreatScore(enemy, {
        level: state.player.level || 1,
        ascension: state.player.ascension || 0,
        attack: derivedStats.attack,
        defense: derivedStats.defense,
        speed: derivedStats.speed,
        maxHp: derivedStats.maxHp,
        crit: derivedStats.crit,
        dodge: derivedStats.dodge,
        block: derivedStats.block,
        lifesteal: derivedStats.lifesteal,
      });
    }
    enemy.threatBand = enemy.threatBand || threatLabelFromScore(enemy.threatScore);
    enemy.playerPower = enemy.playerPower || playerPower;

    const potionsBefore = state.player.potions || 0;
    const simulation = combatDomain.runCombat({
      enemy,
      playerState: state.player,
      derivedStats,
      zoneName: zone.name || 'Zona desconocida',
      maxTurns: 28,
    });

    const { player, foe, log, victory, statsDelta, summary } = simulation;
    state.stats.damageDone += statsDelta.damageDone;
    state.stats.damageTaken += statsDelta.damageTaken;
    state.stats.crits += statsDelta.crits;
    state.player.hp = clamp(player.hp, 1, getDerivedStats().maxHp);

    const rewards = { gold: 0, xp: 0, iron: 0, wood: 0, essence: 0, sigils: 0, echoShards: 0, catalysts: 0, keys: 0, potions: 0 };
    let rewardProfile = combatDomain.computeEnemyRewardProfile({
      mode,
      kind: foe.kind,
      zoneId: zone.id,
      playerLevel: state.player.level,
      ascension: state.player.ascension || 0,
      enemy: foe,
      threatScore: foe.threatScore,
      threatRatio: (foe.threatScore || 100) / 100,
      economyState: {
        netGoldThisHour: currentHourNetGold(),
        targetGoldPerHour: economyTargetGoldPerHour(),
      },
    }, { victory });
    let drop = null;

    if (victory) {
      rewardProfile = combatDomain.computeEnemyRewardProfile({
        mode,
        kind: foe.kind,
        zoneId: zone.id,
        playerLevel: state.player.level,
        ascension: state.player.ascension || 0,
        enemy: foe,
        threatScore: foe.threatScore,
        threatRatio: (foe.threatScore || 100) / 100,
        economyState: {
          netGoldThisHour: currentHourNetGold(),
          targetGoldPerHour: economyTargetGoldPerHour(),
        },
      }, { victory: true });

      Object.assign(rewards, rewardProfile.reward || {});
      rewards.gold = Math.round((rewards.gold || 0) * (1 + derivedStats.goldPct));

      const source = mode === 'dungeon' ? 'dungeon' : mode === 'event' ? 'expedition' : 'arena';
      const dropChance = clamp(
        clamp((rewardProfile.dropProfile && rewardProfile.dropProfile.chance) || 0, 0.1, 0.92)
        + getLootLuck() * 0.5,
        0.08,
        0.96,
      );
      if (Math.random() < dropChance) {
        const rolled = rollLoot({
          source,
          zoneId: zone.id,
          enemyKind: foe.kind,
          enemyArchetype: foe.archetype || foe.enemyArchetype,
          enemyFamily: foe.family || foe.enemyFamily,
          threatScore: foe.threatScore,
          rarityBias: rewardProfile.dropProfile && rewardProfile.dropProfile.rarityBias,
          minRarity: rewardProfile.dropProfile && rewardProfile.dropProfile.minRarity,
          pityUnits: rewardProfile.dropProfile && rewardProfile.dropProfile.pityUnits,
          playerLevel: state.player.level,
          ascension: state.player.ascension || 0,
          itemLevel: foe.level + Number((rewardProfile.dropProfile && rewardProfile.dropProfile.itemLevelBonus) || 0) + rand(0, 2),
          mode,
          lootLuck: getLootLuck(),
          smartLoot: true,
          equipment: state.player.equipment,
          streakData: state.player.itemPity,
        });
        state.player.itemPity = rolled.streakData;
        drop = rolled.item;
        acquireItem(drop);
      }

      grantRewards(rewards, `Botin de ${foe.name}`);
      state.stats.kills += 1;
      if (mode === 'arena') state.stats.wins += 1;
      if (mode === 'dungeon') state.stats.dungeons += 1;
      if (foe.kind === 'elite') state.stats.elites += 1;
      if (foe.kind === 'boss') state.player.highestDungeonFloor = Math.max(state.player.highestDungeonFloor, context.floor || state.player.highestDungeonFloor);
      trackQuest('kills', 1);
      if (mode === 'arena') trackQuest('wins', 1);
      if (mode === 'dungeon') trackQuest('dungeons', 1);
      if (foe.kind === 'elite') trackQuest('elites', 1);
      addJournal('⚔️', `Victoria contra <b>${foe.name}</b> (${foe.threatBand} ${Math.round(foe.threatScore)}). ${summarizeReward(rewards)}${drop ? ` · Botin: <span class="rarity-${drop.rarity}">${drop.name}</span>` : ''}`);
      toast(`Victoria sobre ${foe.name} · amenaza ${foe.threatBand}`, 'success');
    } else {
      if (mode === 'arena') state.stats.losses += 1;
      const beforeGold = state.player.gold;
      const goldLoss = Math.round(rand(10, 25) * clamp((foe.threatScore || 100) / 110, 0.85, 1.35));
      state.player.gold = Math.max(0, state.player.gold - goldLoss);
      recordEconomyDelta((state.player.gold || 0) - (beforeGold || 0), 0);
      const causeLabel = {
        desgaste_dot: 'derrota por dano persistente',
        burst_inicial: 'derrota por burst inicial',
        falta_de_dano: 'tu dano no alcanzo el umbral del encuentro',
        muro_defensivo: 'el enemigo aguanto demasiado',
        presion_sostenida: 'presion sostenida del rival',
      }[summary.defeatCause] || 'la presion enemiga te supero';
      addJournal('💀', `Has sido derrotado por <b>${foe.name}</b>. Causa: ${causeLabel}.`);
      toast(`Derrota contra ${foe.name}`, 'danger');
    }

    const playerHpRatio = derivedStats.maxHp > 0 ? clamp(state.player.hp / derivedStats.maxHp, 0, 1) : 0;
    updateAdaptiveDifficulty({
      victory,
      playerHpRatio,
      threatScore: foe.threatScore,
    });

    economyDomain.awardCombatAffinity(state, {
      threatScore: foe.threatScore,
      turnsPlayed: summary.turnsPlayed,
      victory,
    }, {
      addJournal,
    });

    state.player.title = currentRank().title;
    checkAchievements();

    const potionsUsed = Math.max(0, (potionsBefore || 0) - (state.player.potions || 0));
    recordCombatTelemetry({
      victory,
      summary,
      zoneId: foe.zoneId,
      kind: foe.kind,
      archetype: foe.archetype || foe.enemyArchetype,
      family: foe.family || foe.enemyFamily,
      threatScore: foe.threatScore,
      rewards,
      drop,
      playerHpRatio,
      potionsUsed,
    });

    const enemyThreatPower = Math.round((foe.threatBudget || foe.playerPower || playerPower) * ((foe.threatScore || 100) / 100));
    const powerRatio = playerPower > 0 ? enemyThreatPower / playerPower : 1;

    state.combatHistory.unshift({
      id: uid(),
      ts: Date.now(),
      title: `${victory ? 'Victoria' : 'Derrota'} vs ${foe.name}`,
      result: victory ? 'victory' : 'defeat',
      enemy: foe.name,
      zone: ZONES[foe.zoneId].name,
      log,
      summary,
      stats: {
        damageDone: statsDelta.damageDone,
        damageTaken: statsDelta.damageTaken,
        crits: statsDelta.crits,
        playerSkillCasts: statsDelta.playerSkillCasts,
        playerBasicAttacks: statsDelta.playerBasicAttacks,
      },
      enemyMeta: {
        kind: foe.kind,
        archetype: foe.archetype || foe.enemyArchetype,
        family: foe.family || foe.enemyFamily,
        aiProfile: foe.aiProfile || null,
        affixes: foe.affixes || [],
      },
      threat: {
        score: foe.threatScore,
        label: foe.threatBand,
        playerPower,
        enemyThreatPower,
        ratio: softRound(powerRatio, 3),
      },
      rewardProfile: {
        riskFactor: rewardProfile.riskFactor,
        challengeFactor: rewardProfile.challengeFactor,
        economyGuard: rewardProfile.economyGuard,
      },
      rewards,
      drop,
    });
    state.combatHistory = state.combatHistory.slice(0, 15);

    const affixText = Array.isArray(foe.affixes) && foe.affixes.length ? foe.affixes.join(', ') : 'Sin modificadores';
    const defeatReasonText = summary.defeatCause
      ? ({
        desgaste_dot: 'Derrota por dano persistente.',
        burst_inicial: 'Derrota por burst inicial.',
        falta_de_dano: 'No alcanzaste el umbral de dano requerido.',
        muro_defensivo: 'El enemigo supero tu presion ofensiva.',
        presion_sostenida: 'La presion enemiga fue constante.',
      }[summary.defeatCause] || 'Sin causa precisa.')
      : 'Sin derrota.';

    state.ui.modal = {
      type: 'combat',
      title: `${victory ? 'Victoria' : 'Derrota'} — ${foe.name}`,
      content: `
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Resultado</div>
              <div class="text-xl font-black ${victory ? 'text-emerald-300' : 'text-rose-300'}">${victory ? 'Has ganado' : 'Has perdido'}</div>
              <div class="text-sm text-slate-300/75 mt-1">${summarizeReward(rewards)}${drop ? ` · Botin: <span class="rarity-${drop.rarity}">${drop.name}</span>` : ''}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado final</div>
              <div class="text-lg font-black text-white">${fmt(state.player.hp)} HP restantes</div>
              <div class="text-sm text-slate-300/75 mt-1">${foe.name} ${victory ? 'cayo derrotado' : 'sobrevivio al duelo'}.</div>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ritmo</div>
              <div class="text-lg font-black text-white">${summary.turnsPlayed} turnos</div>
              <div class="text-xs text-slate-300/70 mt-1">${combatEndReasonLabel(summary.endReason)}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Daño</div>
              <div class="text-sm text-slate-100/90">Infligido: <b>${fmt(statsDelta.damageDone)}</b></div>
              <div class="text-sm text-slate-100/90">Recibido: <b>${fmt(statsDelta.damageTaken)}</b></div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Acciones</div>
              <div class="text-sm text-slate-100/90">Habilidades: <b>${fmt(statsDelta.playerSkillCasts)}</b></div>
              <div class="text-sm text-slate-100/90">Golpes básicos: <b>${fmt(statsDelta.playerBasicAttacks)}</b></div>
              <div class="text-sm text-slate-100/90">Críticos: <b>${fmt(statsDelta.crits)}</b></div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Amenaza</div>
              <div class="text-sm text-slate-100/90">${foe.threatBand} · <b>${fmt(foe.threatScore, 1)}</b></div>
              <div class="text-xs text-slate-300/70 mt-1">Poder: jugador <b>${fmt(playerPower)}</b> vs enemigo <b>${fmt(enemyThreatPower)}</b> (${fmt(powerRatio * 100, 1)}%).</div>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Modificadores activos</div>
              <div>${affixText}</div>
            </div>
            <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Causa de derrota</div>
              <div>${victory ? 'No aplica (combate ganado).' : defeatReasonText}</div>
            </div>
          </div>
          <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro turno a turno</div>
            <div class="space-y-2 text-sm text-slate-100/90">${log.map(line => `<div class="leading-relaxed">${line}</div>`).join('')}</div>
          </div>
        </div>
      `
    };
  }


  function acquireItem(item) {
    return economyDomain.acquireItem(state, item, {
      maxInventory: maxInventory(),
      addJournal,
      trackQuest,
      checkAchievements,
      onItemAcquired,
    });
  }

  function removeInventoryItem(itemId) {
    return economyDomain.removeInventoryItem(state, itemId);
  }

  function getInventoryItem(itemId) {
    return economyDomain.getInventoryItem(state, itemId);
  }

  function equipItem(itemId) {
    return economyDomain.equipItem(state, itemId, { addJournal });
  }

  function unequipItem(slot) {
    return economyDomain.unequipItem(state, slot, {
      maxInventory: maxInventory(),
      addJournal,
      toast,
    });
  }

  function sellItem(itemId) {
    return withResourceTelemetry(() => economyDomain.sellItem(state, itemId, { addJournal, trackQuest }));
  }

  function salvageItem(itemId) {
    return withResourceTelemetry(() => economyDomain.salvageItem(state, itemId, { addJournal, trackQuest }));
  }

  function previewSalvage(itemId) {
    const item = economyDomain.getInventoryItem(state, itemId);
    if (!item) return null;
    return economyDomain.salvageYieldFor(item, state);
  }

  function usePotion() {
    const ds = getDerivedStats();
    if (state.player.potions <= 0) {
      toast('No te quedan pociones', 'danger');
      return;
    }
    if (state.player.hp >= ds.maxHp) {
      toast('Ya estás con toda la vida', 'cyan');
      return;
    }
    state.player.potions -= 1;
    const heal = Math.round(ds.maxHp * 0.42);
    state.player.hp = clamp(state.player.hp + heal, 0, ds.maxHp);
    addJournal('🧪', `Bebes una poción y recuperas ${heal} HP.`);
    toast(`+${heal} HP`, 'success');
  }

  function claimDaily() {
    const today = localDayKey();
    if (state.streak.lastClaimDay === today) {
      toast('La recompensa diaria ya fue reclamada hoy', 'cyan');
      return;
    }
    const yesterday = localDayKey(Date.now() - 86400000);
    state.streak.days = state.streak.lastClaimDay === yesterday ? Math.min(7, state.streak.days + 1) : 1;
    state.streak.lastClaimDay = today;
    const day = state.streak.days;
    const reward = {
      gold: 180 + day * 70,
      xp: 60 + day * 30,
      potions: day >= 3 ? 1 : 0,
      keys: day >= 5 ? 1 : 0,
      shards: day === 7 ? 3 : 1,
      essence: 1 + Math.floor(day / 2),
    };
    grantRewards(reward, `Recompensa diaria (día ${day})`);
    toast(`Recompensa diaria reclamada — racha ${day}`, 'gold');
  }

  function trainAttribute(attr) {
    const names = {
      strength: ['Fuerza', 1],
      agility: ['Agilidad', 1],
      endurance: ['Resistencia', 1],
      discipline: ['Disciplina', 1],
    };
    if (!names[attr]) return;
    if (state.player.attributePoints <= 0) {
      toast('No tienes puntos de atributo', 'danger');
      return;
    }
    state.player.attributePoints -= 1;
    state.player.training[attr] += 1;
    const ds = getDerivedStats();
    state.player.hp = Math.min(state.player.hp, ds.maxHp);
    addJournal('🏋️', `Aumentas ${names[attr][0]}.`);
  }

  function upgradeSkill(skillId) {
    const skill = SKILLS[skillId];
    if (!skill || !state.player.unlockedSkills.includes(skillId)) return;
    if (state.player.skillPoints <= 0) {
      toast('No tienes puntos de habilidad', 'danger');
      return;
    }
    if ((state.player.skillLevels[skillId] || 1) >= 5) {
      toast('Esa habilidad ya está al máximo', 'cyan');
      return;
    }
    state.player.skillLevels[skillId] += 1;
    state.player.skillPoints -= 1;
    addJournal('📘', `Mejoras ${skill.name} a nivel ${state.player.skillLevels[skillId]}.`);
  }

  function toggleActiveSkill(skillId) {
    if (!state.player.unlockedSkills.includes(skillId)) return;
    const arr = state.player.activeSkills;
    const index = arr.indexOf(skillId);
    if (index >= 0) {
      if (arr.length <= 1) {
        toast('Debes dejar al menos una habilidad activa', 'danger');
        return;
      }
      arr.splice(index, 1);
    } else {
      if (arr.length >= 4) {
        toast('Máximo de 4 habilidades activas', 'cyan');
        return;
      }
      arr.push(skillId);
    }
  }

  function refreshMarket(forcePaid = true) {
    return withResourceTelemetry(() => economyDomain.refreshMarket(state, forcePaid, {
      toast,
      addJournal,
      getLootLuck,
    }));
  }

  function buyMarketItem(itemId) {
    return withResourceTelemetry(() => economyDomain.buyMarketItem(state, itemId, {
      maxInventory: maxInventory(),
      toast,
      addJournal,
      trackQuest,
      checkAchievements,
      onItemAcquired,
    }));
  }

  function buyResource(kind) {
    const beforeGold = state.player.gold;
    const result = economyDomain.buyResource(state, kind, {
      toast,
      grantRewards,
    });
    const goldDelta = (state.player.gold || 0) - (beforeGold || 0);
    if (goldDelta) recordEconomyDelta(goldDelta, 0);
    return result;
  }

  function previewCraftItem(slot, tier = 'basic') {
    return economyDomain.previewCraftItem(state, slot, tier);
  }

  function forgeSnapshot() {
    return economyDomain.getForgeState(state);
  }

  function maybeShowForgeMilestones() {
    const telemetry = ensureTelemetryShape();
    const forge = forgeSnapshot();
    if (forge.firstTranscendAt && !telemetry.milestonesShown.firstTranscend) {
      telemetry.milestonesShown.firstTranscend = true;
      addJournal('🌌', '¡Hito de forja! Has completado tu primera trascendencia exitosa.');
      toast('Primera trascendencia completada', 'violet');
    }
  }

  function craftItem(slot, tier = 'basic') {
    const result = withResourceTelemetry(() => economyDomain.craftItem(state, { slot, tier }, {
      maxInventory: maxInventory(),
      toast,
      addJournal,
      trackQuest,
      checkAchievements,
      getLootLuck,
      onItemAcquired,
    }));
    maybeShowForgeMilestones();
    return result;
  }

  function enhanceItem(slot) {
    const result = withResourceTelemetry(() => economyDomain.enhanceItem(state, slot, {
      toast,
      trackQuest,
      addJournal,
    }));
    maybeShowForgeMilestones();
    return result;
  }

  function previewEnhanceItem(slot) {
    return economyDomain.previewEnhanceItem(state, slot);
  }

  function reforgeItem(payload) {
    const result = withResourceTelemetry(() => economyDomain.reforgeItem(state, payload, {
      toast,
      addJournal,
    }));
    maybeShowForgeMilestones();
    return result;
  }

  function previewReforgeItem(itemId) {
    return economyDomain.previewReforgeItem(state, itemId);
  }

  function transcendItem(itemId) {
    const result = withResourceTelemetry(() => economyDomain.transcendItem(state, itemId, {
      toast,
      addJournal,
    }));
    maybeShowForgeMilestones();
    return result;
  }

  function previewTranscendItem(itemId) {
    return economyDomain.previewTranscendItem(state, itemId);
  }

  function previewStabilizeItem(itemId) {
    return economyDomain.previewStabilizeItem(state, itemId);
  }

  function stabilizeItem(itemId) {
    const result = withResourceTelemetry(() => economyDomain.stabilizeItem(state, itemId, {
      toast,
      addJournal,
    }));
    maybeShowForgeMilestones();
    return result;
  }

  function convertMaterials(recipeId) {
    return withResourceTelemetry(() => economyDomain.convertMaterials(state, recipeId, {
      toast,
      addJournal,
      trackQuest,
    }));
  }

  function setForgeSchool(schoolId) {
    return withResourceTelemetry(() => economyDomain.setForgeSchool(state, schoolId, {
      toast,
      addJournal,
    }));
  }

  function unlockForgeMastery(nodeId) {
    return withResourceTelemetry(() => economyDomain.unlockForgeMastery(state, nodeId, {
      toast,
      addJournal,
    }));
  }

  function getForgeState() {
    const forge = forgeSnapshot();
    const resonance = getSetResonanceBonus();
    return {
      ...forge,
      resonance,
    };
  }

  function forgeItem(slot, tier = 'normal') {
    return craftItem(slot, tier === 'premium' ? 'advanced' : 'basic');
  }

  function upgradeEquipped(slot) {
    return enhanceItem(slot);
  }

  function rerollItem(itemId) {
    return reforgeItem(itemId);
  }


  function startJob(id) {
    return activitiesDomain.startJob(state, id, {
      toast,
      addJournal,
    });
  }

  function completeJob(silent = false) {
    return activitiesDomain.completeJob(state, silent, {
      grantRewards,
      toast,
    });
  }

  function startExpedition(zoneId, durationSec) {
    return activitiesDomain.startExpedition(state, zoneId, durationSec, {
      isZoneUnlocked,
      toast,
      addJournal,
    });
  }

  function completeExpedition(silent = false) {
    return activitiesDomain.completeExpedition(state, silent, {
      grantRewards,
      getDerivedStats,
      getLootLuck,
      trackQuest,
      acquireItem,
      addJournal,
      toast,
    });
  }

  function resolveFinishedTimers(now = Date.now(), silent = false) {
    return activitiesDomain.resolveFinishedTimers(state, now, silent, {
      completeJob,
      completeExpedition,
    });
  }

  function fightArena(kind = 'normal') {
    const zone = zoneForPlayer();
    const staminaCost = zone.staminaCost + (kind === 'elite' ? 1 : 0);
    if (state.player.stamina < staminaCost || state.player.energy < zone.energyCost) {
      toast('No tienes energía o aguante suficiente', 'danger');
      return;
    }
    state.player.stamina -= staminaCost;
    state.player.energy -= zone.energyCost;
    const enemy = makeEnemy(zone, kind, 0, 'arena');
    runCombat(enemy, { mode: 'arena' });
  }

  function arenaBlitz(count = 3) {
    const summaries = [];
    for (let i = 0; i < count; i++) {
      const zone = zoneForPlayer();
      if (state.player.stamina < zone.staminaCost || state.player.energy < zone.energyCost || state.player.hp < getDerivedStats().maxHp * 0.2) break;
      state.player.stamina -= zone.staminaCost;
      state.player.energy -= zone.energyCost;
      const enemy = makeEnemy(zone, 'normal', i, 'arena');
      runCombat(enemy, { mode: 'arena' });
      const entry = state.combatHistory[0];
      summaries.push(`${entry.result === 'victory' ? '✅' : '❌'} ${entry.title}`);
      if (entry.result !== 'victory') break;
    }
    if (summaries.length) {
      state.ui.modal = {
        type: 'summary',
        title: `Racha de arena x${summaries.length}`,
        content: `<div class="glass rounded-2xl p-4 text-sm text-slate-100/90 space-y-2">${summaries.map(s => `<div>${s}</div>`).join('')}</div>`
      };
    }
  }

  function runDungeon() {
    if (state.player.keys < 1) {
      toast('Necesitas una llave de mazmorra', 'danger');
      return;
    }
    if (state.player.stamina < 2) {
      toast('Necesitas al menos 2 de aguante', 'danger');
      return;
    }
    state.player.keys -= 1;
    state.player.stamina -= 2;

    const floor = state.player.highestDungeonFloor;
    const zone = ZONES[Math.min(ZONES.length - 1, Math.floor((floor - 1) / 2))];
    const logLines = [];
    let success = true;
    const enemies = [
      makeEnemy(zone, 'normal', floor * 0.8, 'dungeon'),
      makeEnemy(zone, 'normal', floor * 0.85, 'dungeon'),
      makeEnemy(zone, 'elite', floor * 0.9, 'dungeon'),
      makeEnemy(zone, 'boss', floor, 'dungeon'),
    ];

    enemies.forEach((enemy, index) => {
      if (!success) return;
      runCombat(enemy, { mode: 'dungeon', floor });
      const last = state.combatHistory[0];
      logLines.push(`${last.result === 'victory' ? '✅' : '❌'} ${index < 3 ? 'Encuentro' : 'Jefe'}: ${enemy.name}`);
      if (last.result !== 'victory') success = false;
    });

    if (success) {
      state.player.highestDungeonFloor += 1;
      const bonus = {
        gold: 120 + floor * 55,
        xp: 90 + floor * 42,
        essence: 2 + Math.floor(floor / 3),
        shards: floor % 3 === 0 ? 2 : 1,
      };
      grantRewards(bonus, `Cofre del piso ${floor}`);
      addJournal('🏰', `Limpias el piso ${floor} y avanzas al piso ${floor + 1}.`);
      toast(`Piso ${floor} superado`, 'gold');
    } else {
      addJournal('🕸️', `No logras superar el piso ${floor}.`);
    }

    state.ui.modal = {
      type: 'summary',
      title: `Mazmorra — Piso ${floor}`,
      content: `
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado</div>
              <div class="text-xl font-black ${success ? 'text-emerald-300' : 'text-rose-300'}">${success ? 'Incursión limpia' : 'Incursión fallida'}</div>
              <div class="text-sm text-slate-300/75 mt-1">${success ? 'El botín del jefe ha sido asegurado.' : 'Tu grupo de uno no pudo seguir avanzando.'}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ruta</div>
              <div class="space-y-2 text-sm">${logLines.map(l => `<div>${l}</div>`).join('')}</div>
            </div>
          </div>
        </div>
      `
    };

  }

  function hatchPet() {
    const beforeGold = state.player.gold || 0;
    const beforeMaterials = telemetryMaterialSum(state.player);
    if (state.player.pet) {
      toast('Ya tienes una mascota activa', 'cyan');
      return;
    }
    if (state.player.shards < 5 || state.player.essence < 8) {
      toast('Necesitas 5 fragmentos y 8 de esencia', 'danger');
      return;
    }
    state.player.shards -= 5;
    state.player.essence -= 8;
    const pet = pick(PETS);
    state.player.pet = pet.id;
    state.player.petLevel = 1;
    state.player.petXp = 0;
    addJournal('🐾', `Incubas a <b>${pet.name}</b>. ${pet.desc}`);
    recordEconomyDelta((state.player.gold || 0) - beforeGold, telemetryMaterialSum(state.player) - beforeMaterials);
    toast(`Mascota obtenida: ${pet.name}`, 'violet');
  }

  function feedPet() {
    const beforeGold = state.player.gold || 0;
    const beforeMaterials = telemetryMaterialSum(state.player);
    if (!state.player.pet) {
      toast('Aún no tienes mascota', 'danger');
      return;
    }
    if (state.player.food < 2 || state.player.essence < 1) {
      toast('Necesitas 2 de comida y 1 de esencia', 'danger');
      return;
    }
    state.player.food -= 2;
    state.player.essence -= 1;
    state.player.petXp += 1;
    if (state.player.petXp >= 3 + state.player.petLevel) {
      state.player.petXp = 0;
      state.player.petLevel += 1;
      addJournal('🐾', `Tu mascota alcanza nivel ${state.player.petLevel}.`);
      toast(`Mascota nivel ${state.player.petLevel}`, 'success');
    }
    recordEconomyDelta((state.player.gold || 0) - beforeGold, telemetryMaterialSum(state.player) - beforeMaterials);
  }

  function releasePet() {
    if (!state.player.pet) return;
    const pet = getPetData();
    state.player.pet = null;
    state.player.petLevel = 0;
    state.player.petXp = 0;
    addJournal('🪽', `Liberas a ${pet ? pet.name : 'tu mascota'} y recuperas tu calma.`);
  }

  function spendRelic(point) {
    return progressionDomain.spendRelic(state, point, {
      toast,
      addJournal,
    });
  }

  function ascend() {
    return progressionDomain.ascend(state, {
      toast,
      confirmAscend: () => window.confirm('Ascender reinicia nivel, equipo, inventario y recursos comunes, pero te da Polvo de Reliquia. ¿Continuar?'),
      replaceState,
      normalizeState,
      currentRank,
      addJournal,
      checkAchievements,
    });
  }

  function trackQuest(type, amount) {
    return progressionDomain.trackQuest(state, type, amount, checkAchievements);
  }

  function claimQuest(questId) {
    return progressionDomain.claimQuest(state, questId, {
      grantRewards,
      addJournal,
      checkAchievements,
    });
  }

  function rerollQuests() {
    return progressionDomain.rerollQuests(state, {
      toast,
      addJournal,
    });
  }

  function achievementProgress(achievement) {
    return progressionDomain.achievementProgress(state, achievement, guildTotal);
  }

  function checkAchievements() {
    return progressionDomain.checkAchievements(state, {
      grantRewards,
      addJournal,
      toast,
      guildTotal,
    });
  }

  function upgradeGuild(building) {
    const beforeGold = state.player.gold || 0;
    const beforeMaterials = telemetryMaterialSum(state.player);
    const levels = state.player.guild;
    if (!(building in levels)) return;
    const next = levels[building] + 1;
    const gold = 180 + next * 110 + guildTotal() * 35;
    const essence = Math.max(1, Math.floor(next / 2));
    if (state.player.gold < gold || state.player.essence < essence) {
      toast('No tienes recursos suficientes', 'danger');
      return;
    }
    state.player.gold -= gold;
    state.player.essence -= essence;
    levels[building] += 1;
    recordEconomyDelta((state.player.gold || 0) - beforeGold, telemetryMaterialSum(state.player) - beforeMaterials);
    addJournal('🏛️', `Mejoras ${building} del gremio al nivel ${levels[building]}.`);
    checkAchievements();
  }

  function autoManage() {
    return withResourceTelemetry(() => economyDomain.autoManage(state, {
      toast,
      trackQuest,
      addJournal,
    }));
  }

  function autoHeal() {
    const ds = getDerivedStats();
    const missing = ds.maxHp - state.player.hp;
    if (missing <= 0) {
      toast('Ya tienes la vida al máximo', 'cyan');
      return;
    }
    let used = 0;
    while (state.player.hp < ds.maxHp && state.player.potions > 0 && used < 10) {
      state.player.potions -= 1;
      state.player.hp = clamp(state.player.hp + ds.maxHp * 0.42, 0, ds.maxHp);
      used++;
    }
    addJournal('🩹', `Usas ${used} poción(es) para recuperarte.`);
  }

  function getPityStatus(source = 'arena') {
    const pity = state.player.itemPity || {};
    const bySource = pity.bySource || {};
    const value = bySource[source] || pity;
    return {
      source,
      epic: softRound(value.epic || 0, 1),
      mythic: softRound(value.mythic || 0, 1),
      ascendant: softRound(value.ascendant || 0, 1),
      total: softRound(value.total || 0, 1),
    };
  }

  function getForgePityStatus() {
    const forge = economyDomain.getForgeState(state);
    const pity = forge.actionPity || {};
    return {
      enhance: softRound(pity.enhance || 0, 1),
      reforge: softRound(pity.reforge || 0, 1),
      transcend: softRound(pity.transcend || 0, 1),
      stabilize: softRound(pity.stabilize || 0, 1),
    };
  }

  window.AetherSystems = {
    addJournal,
    toast,
    grantRewards,
    summarizeReward,
    gainXp,
    currentRank,
    offlineCatchup,
    passiveRegen,
    zoneForPlayer,
    isZoneUnlocked,
    setZone,
    enemyArchetypeMods,
    difficultyMultiplier,
    makeEnemy,
    previewEncounter,
    previewDungeonRoute,
    threatBandForScore,
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
    acquireItem,
    removeInventoryItem,
    getInventoryItem,
    equipItem,
    unequipItem,
    sellItem,
    salvageItem,
    previewSalvage,
    usePotion,
    claimDaily,
    trainAttribute,
    upgradeSkill,
    toggleActiveSkill,
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
    previewStabilizeItem,
    stabilizeItem,
    convertMaterials,
    setForgeSchool,
    unlockForgeMastery,
    getForgeState,
    forgeItem,
    upgradeEquipped,
    rerollItem,
    startJob,
    completeJob,
    startExpedition,
    completeExpedition,
    resolveFinishedTimers,
    fightArena,
    arenaBlitz,
    runDungeon,
    hatchPet,
    feedPet,
    releasePet,
    spendRelic,
    ascend,
    trackQuest,
    claimQuest,
    rerollQuests,
    achievementProgress,
    checkAchievements,
    upgradeGuild,
    autoManage,
    autoHeal,
    getPityStatus,
    getForgePityStatus,
  };
})();
