import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  SLOT_ORDER,
  RARITIES,
  FORGE_SCHOOLS,
  FORGE_MASTERY_NODES,
  FORGE_ACTION_PITY,
  FORGE_ECONOMY_TARGETS,
  ITEM_BASES,
  ITEM_ARCHETYPES,
  STAT_BUDGETS,
  AFFIXES,
  ENEMY_ARCHETYPES,
} from '../src/shared/content/game-data.js';
import { createItemsDomain } from '../src/features/gameplay/domain/items.js';
import { createEconomyDomain } from '../src/features/gameplay/domain/economy.js';
import { createDefaultsModule } from '../src/core/state/defaults.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..');

const STAGES = {
  early: {
    level: 8,
    incomeMix: { iron: 0.46, wood: 0.36, essence: 0.14, sigils: 0.03, echoShards: 0, catalysts: 0.01 },
    actionMix: [
      ['craft', 0.34],
      ['enhance', 0.42],
      ['convert', 0.16],
      ['reforge', 0.06],
      ['stabilize', 0.02],
    ],
    school: 'arsenal',
  },
  mid: {
    level: 18,
    incomeMix: { iron: 0.3, wood: 0.23, essence: 0.24, sigils: 0.14, echoShards: 0.05, catalysts: 0.04 },
    actionMix: [
      ['craft', 0.26],
      ['enhance', 0.28],
      ['reforge', 0.2],
      ['stabilize', 0.11],
      ['convert', 0.09],
      ['transcend', 0.06],
    ],
    school: 'bastion',
  },
  late: {
    level: 32,
    incomeMix: { iron: 0.2, wood: 0.14, essence: 0.26, sigils: 0.19, echoShards: 0.12, catalysts: 0.09 },
    actionMix: [
      ['craft', 0.2],
      ['enhance', 0.2],
      ['reforge', 0.24],
      ['stabilize', 0.15],
      ['transcend', 0.14],
      ['convert', 0.07],
    ],
    school: 'arcanum',
  },
};

const DURATIONS_H = [1, 4, 8, 20];
const SIM_RUNS = Math.max(8, Number(process.argv[2] || 18));

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function softRound(value, decimals = 2) {
  return Number(value.toFixed(decimals));
}

function uid() {
  return `${Date.now().toString(36)}_${Math.floor(Math.random() * 1e7).toString(36)}`;
}

const raritySorted = [...RARITIES].sort((a, b) => a.order - b.order);
const rarityIndex = Object.fromEntries(raritySorted.map((rarity, index) => [rarity.key, index]));

function rarityDef(key) {
  return raritySorted.find((rarity) => rarity.key === key) || raritySorted[0];
}

function rarityOrder(key) {
  return rarityIndex[key] ?? 0;
}

function nextRarityKey(key, step = 1) {
  const index = clamp(rarityOrder(key) + step, 0, raritySorted.length - 1);
  return raritySorted[index].key;
}

function weightedPick(entries, fallback = null) {
  const clean = (entries || []).filter((entry) => entry && entry.weight > 0);
  if (!clean.length) return fallback;
  const total = clean.reduce((sumValue, entry) => sumValue + entry.weight, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < clean.length; i += 1) {
    roll -= clean[i].weight;
    if (roll <= 0) return clean[i].value;
  }
  return clean[clean.length - 1].value;
}

function pickRarity(level = 1, bonusLuckOrOptions = 0) {
  const options = typeof bonusLuckOrOptions === 'number'
    ? { bonusLuck: bonusLuckOrOptions }
    : (bonusLuckOrOptions || {});
  const source = options.source || 'arena';
  const bonusLuck = Math.max(0, options.bonusLuck || options.lootLuck || 0);
  const pity = options.pity || {};

  const weights = raritySorted.map((rarity) => {
    const sourceWeight = rarity.dropWeightBySource && typeof rarity.dropWeightBySource[source] === 'number'
      ? rarity.dropWeightBySource[source]
      : rarity.dropWeightBySource && typeof rarity.dropWeightBySource.arena === 'number'
        ? rarity.dropWeightBySource.arena
        : 1;
    const order = rarity.order || 0;
    const levelFactor = 1 + Math.min(0.72, Math.max(0, level - 1) * 0.011 * Math.max(0, order - 1));
    const luckFactor = 1 + (order <= 1 ? bonusLuck * 0.28 : bonusLuck * (0.72 + order * 0.28));
    const pityEpic = rarity.key === 'epic' ? Math.min(3.4, (pity.epic || 0) * 0.065) : 0;
    const pityMythic = rarity.key === 'mythic' ? Math.min(4.2, (pity.mythic || 0) * 0.052) : 0;
    const pityAscendant = rarity.key === 'ascendant' ? Math.min(1.2, (pity.ascendant || 0) * 0.02) : 0;

    let gateFactor = 1;
    if (level < 10 && order >= 3) gateFactor *= 0.4;
    if (level < 18 && order >= 4) gateFactor *= 0.35;
    if (level < 26 && order >= 5) gateFactor *= 0.22;
    if (level < 38 && order >= 6) gateFactor *= 0.08;
    if ((options.ascension || 0) <= 0 && order >= 6) gateFactor *= 0.52;

    return {
      value: rarity,
      weight: Math.max(0.0001, sourceWeight * levelFactor * (1 + pityEpic + pityMythic + pityAscendant) * gateFactor * Math.max(0.2, luckFactor)),
    };
  });

  return weightedPick(weights, rarityDef('common')) || rarityDef('common');
}

function findBaseItem(slot, name) {
  return (ITEM_BASES[slot] || []).find((base) => base.name === name) || pick(ITEM_BASES[slot] || []);
}

function scaledStatValue(base, level) {
  return base + Math.max(0, Math.floor(level / 4)) * 0.85;
}

const itemsDomain = createItemsDomain({
  ITEM_BASES,
  ITEM_ARCHETYPES,
  ENEMY_ARCHETYPES,
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
  getLootLuck: () => 0,
});

const defaultsModule = createDefaultsModule({
  pick,
  uid,
  makeStarterItem: itemsDomain.makeStarterItem,
  starterInventory: itemsDomain.starterInventory,
  generateMarket: itemsDomain.generateMarket,
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
  generateMarket: itemsDomain.generateMarket,
  makeItem: itemsDomain.makeItem,
  rollLoot: itemsDomain.rollLoot,
  estimateSalvage: itemsDomain.estimateSalvage,
  computeItemScore: itemsDomain.computeItemScore,
  computeItemScores: itemsDomain.computeItemScores,
  normalizeItem: itemsDomain.normalizeItem,
});

const noopCtx = {
  maxInventory: 120,
  toast: () => {},
  addJournal: () => {},
  trackQuest: () => {},
  checkAchievements: () => {},
  getLootLuck: () => 0,
  onItemAcquired: () => {},
};

function preferredMasteryNodeIds(schoolId) {
  return [
    'efficiency_foundry',
    'control_temper',
    schoolId === 'arsenal' ? 'potency_resonator' : schoolId === 'bastion' ? 'potency_aegis' : 'potency_flux',
    'efficiency_recycler',
    'control_transcendence',
  ];
}

function actionPick(mix) {
  return weightedPick(mix.map(([name, weight]) => ({ value: name, weight })), 'enhance');
}

function addIncome(state, stageId, minute, carry) {
  const targets = FORGE_ECONOMY_TARGETS[stageId];
  const profile = STAGES[stageId];
  const goldHour = (targets.goldPerHour[0] + targets.goldPerHour[1]) / 2;
  const materialsHour = (targets.materialsPerHour[0] + targets.materialsPerHour[1]) / 2;
  const wave = 1 + Math.sin(minute / 17) * 0.08;
  carry.gold += (goldHour / 60) * wave;
  const wholeGold = Math.floor(carry.gold);
  carry.gold -= wholeGold;
  state.player.gold += wholeGold;

  Object.entries(profile.incomeMix).forEach(([key, ratio]) => {
    carry[key] += (materialsHour / 60) * ratio * wave;
    const whole = Math.floor(carry[key]);
    carry[key] -= whole;
    state.player[key] += whole;
  });
}

function totalMaterials(player) {
  return Number(player.iron || 0)
    + Number(player.wood || 0)
    + Number(player.essence || 0)
    + Number(player.sigils || 0)
    + Number(player.echoShards || 0)
    + Number(player.catalysts || 0);
}

function bestOwnedItem(state, filterPreview = null) {
  const equipped = Object.values(state.player.equipment).filter(Boolean);
  const all = [...equipped, ...(state.player.inventory || [])]
    .filter((item) => item && typeof item.score === 'number')
    .sort((a, b) => (b.score || 0) - (a.score || 0));
  if (!filterPreview) return all[0] || null;
  return all.find((item) => filterPreview(item)) || null;
}

function autoEquipBest(state) {
  const inventory = [...(state.player.inventory || [])].sort((a, b) => (b.score || 0) - (a.score || 0));
  inventory.forEach((item) => {
    const slot = item.slot;
    const equipped = state.player.equipment[slot];
    const equippedScore = equipped ? Number(equipped.score || 0) : 0;
    const candidateScore = Number(item.score || 0);
    if (!equipped || candidateScore > equippedScore * 1.06) {
      economyDomain.equipItem(state, item.id, noopCtx);
    }
  });
}

function tryAction(state, stageId, actionName) {
  const beforeSamples = clone((state.stats.telemetry && state.stats.telemetry.forge && state.stats.telemetry.forge.samples) || {});
  const beforeUseful = clone((state.stats.telemetry && state.stats.telemetry.forge && state.stats.telemetry.forge.usefulOutcomes) || {});
  const beforeTone = {
    favorable: Number(state.stats.telemetry.forge.favorableOutcomes || 0),
    neutral: Number(state.stats.telemetry.forge.neutralOutcomes || 0),
    unfavorable: Number(state.stats.telemetry.forge.unfavorableOutcomes || 0),
  };

  if (actionName === 'craft') {
    const tier = stageId === 'early' ? 'basic' : (stageId === 'mid' ? (Math.random() < 0.7 ? 'advanced' : 'basic') : (Math.random() < 0.62 ? 'apex' : 'advanced'));
    economyDomain.craftItem(state, { slot: pick(SLOT_ORDER), tier }, noopCtx);
  } else if (actionName === 'enhance') {
    const slots = [...SLOT_ORDER].sort((a, b) => {
      const av = state.player.equipment[a] ? Number(state.player.equipment[a].score || 0) : -1;
      const bv = state.player.equipment[b] ? Number(state.player.equipment[b].score || 0) : -1;
      return bv - av;
    });
    const targetSlot = slots.find((slot) => economyDomain.previewEnhanceItem(state, slot));
    if (targetSlot) economyDomain.enhanceItem(state, targetSlot, noopCtx);
  } else if (actionName === 'reforge') {
    const target = bestOwnedItem(state, (item) => !!economyDomain.previewReforgeItem(state, item.id));
    if (target) {
      const mode = stageId === 'late' ? (Math.random() < 0.35 ? 'lock' : (Math.random() < 0.55 ? 'partial' : 'total')) : (Math.random() < 0.72 ? 'total' : 'partial');
      economyDomain.reforgeItem(state, { itemId: target.id, mode }, noopCtx);
    }
  } else if (actionName === 'stabilize') {
    const target = bestOwnedItem(state, (item) => !!economyDomain.previewStabilizeItem(state, item.id));
    if (target) economyDomain.stabilizeItem(state, target.id, noopCtx);
  } else if (actionName === 'transcend') {
    const target = bestOwnedItem(state, (item) => !!economyDomain.previewTranscendItem(state, item.id));
    if (target) economyDomain.transcendItem(state, target.id, noopCtx);
  } else if (actionName === 'convert') {
    const priority = ['sigils_to_echo', 'essence_to_sigils', 'iron_wood_to_essence'];
    priority.forEach((recipeId) => economyDomain.convertMaterials(state, recipeId, noopCtx));
  }

  autoEquipBest(state);

  const afterSamples = state.stats.telemetry.forge.samples || {};
  const afterUseful = state.stats.telemetry.forge.usefulOutcomes || {};
  const executed = Object.keys(afterSamples).some((key) => Number(afterSamples[key] || 0) > Number(beforeSamples[key] || 0));
  const usefulDelta = Object.keys(afterUseful).reduce(
    (sumValue, key) => sumValue + (Number(afterUseful[key] || 0) - Number(beforeUseful[key] || 0)),
    0,
  );
  const toneAfter = {
    favorable: Number(state.stats.telemetry.forge.favorableOutcomes || 0),
    neutral: Number(state.stats.telemetry.forge.neutralOutcomes || 0),
    unfavorable: Number(state.stats.telemetry.forge.unfavorableOutcomes || 0),
  };
  return {
    executed,
    useful: usefulDelta > 0,
    unfavorable: toneAfter.unfavorable > beforeTone.unfavorable,
    neutral: toneAfter.neutral > beforeTone.neutral,
  };
}

function maybeSpendMastery(state, schoolId) {
  const sequence = preferredMasteryNodeIds(schoolId);
  for (let i = 0; i < sequence.length; i += 1) {
    const nodeId = sequence[i];
    const before = Number(state.player.forge.masteryPoints || 0);
    economyDomain.unlockForgeMastery(state, nodeId, noopCtx);
    if (Number(state.player.forge.masteryPoints || 0) < before) return true;
  }
  return false;
}

function simulateScenario(stageId, hours) {
  const profile = STAGES[stageId];
  const state = defaultsModule.makeDefaultState();
  state.player.level = profile.level;
  state.player.zoneId = stageId === 'early' ? 1 : (stageId === 'mid' ? 3 : 6);
  state.player.gold += stageId === 'early' ? 500 : stageId === 'mid' ? 1800 : 4800;
  state.player.iron += 40;
  state.player.wood += 40;
  state.player.essence += stageId === 'early' ? 10 : 35;
  state.player.sigils += stageId === 'late' ? 20 : 8;
  state.player.echoShards += stageId === 'late' ? 6 : 1;
  state.player.catalysts += stageId === 'late' ? 8 : 3;

  economyDomain.setForgeSchool(state, profile.school, noopCtx);

  const initialGold = Number(state.player.gold || 0);
  const initialMaterials = totalMaterials(state.player);
  const minutes = Math.max(1, Math.round(hours * 60));
  const carry = { gold: 0, iron: 0, wood: 0, essence: 0, sigils: 0, echoShards: 0, catalysts: 0 };

  let riskyAttempts = 0;
  let longNegativeStreaks = 0;
  let currentNegativeStreak = 0;

  for (let minute = 0; minute < minutes; minute += 1) {
    addIncome(state, stageId, minute, carry);

    if (minute % 11 === 0) maybeSpendMastery(state, profile.school);
    if (minute % 29 === 0) {
      const schools = Object.keys(FORGE_SCHOOLS);
      const targetSchool = minute % 58 === 0 ? schools[(schools.indexOf(profile.school) + 1) % schools.length] : profile.school;
      economyDomain.setForgeSchool(state, targetSchool, noopCtx);
    }

    const pulses = stageId === 'late' ? 2 : 1;
    for (let pulse = 0; pulse < pulses; pulse += 1) {
      const action = actionPick(profile.actionMix);
      const result = tryAction(state, stageId, action);
      if (!result.executed) continue;

      if (['enhance', 'reforge', 'transcend', 'stabilize'].includes(action)) {
        riskyAttempts += 1;
        if (result.useful) {
          currentNegativeStreak = 0;
        } else if (result.unfavorable || result.neutral) {
          currentNegativeStreak += 1;
          if (currentNegativeStreak >= 4) {
            longNegativeStreaks += 1;
            currentNegativeStreak = 0;
          }
        }
      }
    }
  }

  const forge = economyDomain.getForgeState(state);
  const telemetry = forge.telemetry;
  const finalGold = Number(state.player.gold || 0);
  const finalMaterials = totalMaterials(state.player);
  const goldPerHour = (finalGold - initialGold) / Math.max(0.5, hours);
  const matsPerHour = (finalMaterials - initialMaterials) / Math.max(0.5, hours);

  const totalOutcomes = Number(telemetry.favorableOutcomes || 0)
    + Number(telemetry.neutralOutcomes || 0)
    + Number(telemetry.unfavorableOutcomes || 0);

  return {
    stageId,
    hours,
    firstMeaningfulMin: telemetry.firstMeaningfulUpgradeAt != null ? Number(telemetry.firstMeaningfulUpgradeAt) / 60000 : null,
    firstSpecializationMin: telemetry.firstSpecializationDecisionAt != null ? Number(telemetry.firstSpecializationDecisionAt) / 60000 : null,
    favorableRatio: totalOutcomes > 0 ? Number(telemetry.favorableOutcomes || 0) / totalOutcomes : 0,
    neutralRatio: totalOutcomes > 0 ? Number(telemetry.neutralOutcomes || 0) / totalOutcomes : 0,
    unfavorableRatio: totalOutcomes > 0 ? Number(telemetry.unfavorableOutcomes || 0) / totalOutcomes : 0,
    frustrationRate: riskyAttempts > 0 ? longNegativeStreaks / riskyAttempts : 0,
    goldPerHour,
    matsPerHour,
    pity: forge.actionPity,
    usage: telemetry.samples,
  };
}

function aggregate(list) {
  const sum = (pickKey) => list.reduce((sumValue, entry) => sumValue + Number(pickKey(entry) || 0), 0);
  const avg = (pickKey) => sum(pickKey) / Math.max(1, list.length);
  return {
    firstMeaningfulMin: avg((entry) => entry.firstMeaningfulMin || 0),
    firstSpecializationMin: avg((entry) => entry.firstSpecializationMin || 0),
    favorableRatio: avg((entry) => entry.favorableRatio),
    neutralRatio: avg((entry) => entry.neutralRatio),
    unfavorableRatio: avg((entry) => entry.unfavorableRatio),
    frustrationRate: avg((entry) => entry.frustrationRate),
    goldPerHour: avg((entry) => entry.goldPerHour),
    matsPerHour: avg((entry) => entry.matsPerHour),
    usage: {
      craft: avg((entry) => (entry.usage && entry.usage.craft) || 0),
      enhance: avg((entry) => (entry.usage && entry.usage.enhance) || 0),
      reforge: avg((entry) => (entry.usage && entry.usage.reforge) || 0),
      transcend: avg((entry) => (entry.usage && entry.usage.transcend) || 0),
      stabilize: avg((entry) => (entry.usage && entry.usage.stabilize) || 0),
      convert: avg((entry) => (entry.usage && entry.usage.convert) || 0),
    },
  };
}

function fmt(value, digits = 1) {
  return Number(value || 0).toFixed(digits);
}

function fmtPct(value) {
  return `${(Number(value || 0) * 100).toFixed(1)}%`;
}

function inRange(value, min, max) {
  return value >= min && value <= max;
}

function statusLine(stageId, metrics) {
  const targets = FORGE_ECONOMY_TARGETS[stageId];
  const firstMeaningfulOk = inRange(metrics.firstMeaningfulMin, 10, 20);
  const firstSpecOk = inRange(metrics.firstSpecializationMin, 40, 80);
  const frustrationOk = metrics.frustrationRate <= 0.1;
  const goldOk = inRange(metrics.goldPerHour, targets.goldPerHour[0], targets.goldPerHour[1]);
  const matsOk = inRange(metrics.matsPerHour, targets.materialsPerHour[0], targets.materialsPerHour[1]);
  const checks = [
    firstMeaningfulOk ? 'first-upgrade OK' : 'first-upgrade OUT',
    firstSpecOk ? 'specialization OK' : 'specialization OUT',
    frustrationOk ? 'frustration OK' : 'frustration OUT',
    goldOk ? 'gold/h OK' : 'gold/h OUT',
    matsOk ? 'mats/h OK' : 'mats/h OUT',
  ];
  return checks.join(', ');
}

function usageSummary(usage) {
  const total = Object.values(usage).reduce((sumValue, value) => sumValue + Number(value || 0), 0) || 1;
  return ['craft', 'enhance', 'reforge', 'transcend', 'stabilize', 'convert']
    .map((key) => `${key}:${fmtPct((usage[key] || 0) / total)}`)
    .join(' | ');
}

function reportMarkdown(resultsByKey) {
  const now = new Date().toISOString();
  const rows = [];
  Object.keys(STAGES).forEach((stageId) => {
    DURATIONS_H.forEach((hours) => {
      const key = `${stageId}_${hours}`;
      const metrics = resultsByKey[key];
      rows.push(`| ${stageId} | ${hours}h | ${fmt(metrics.firstMeaningfulMin, 1)} | ${fmt(metrics.firstSpecializationMin, 1)} | ${fmtPct(metrics.favorableRatio)} | ${fmtPct(metrics.neutralRatio)} | ${fmtPct(metrics.unfavorableRatio)} | ${fmtPct(metrics.frustrationRate)} | ${fmt(metrics.goldPerHour, 0)} | ${fmt(metrics.matsPerHour, 1)} | ${statusLine(stageId, metrics)} |`);
    });
  });

  const usageRows = [];
  Object.keys(STAGES).forEach((stageId) => {
    DURATIONS_H.forEach((hours) => {
      const key = `${stageId}_${hours}`;
      usageRows.push(`- ${stageId}/${hours}h -> ${usageSummary(resultsByKey[key].usage)}`);
    });
  });

  return [
    '# Reporte de Balance de Forja (Simulado)',
    '',
    `- Fecha: ${now}`,
    `- Corridas por escenario: ${SIM_RUNS}`,
    '- Escenarios: early/mid/late x (1h, 4h, 8h, 20h)',
    '- Objetivos usados: tiempos de hitos Fase 5 + FORGE_ECONOMY_TARGETS',
    '',
    '## Resultado por escenario',
    '',
    '| Stage | Ventana | 1ra mejora (min) | 1ra especializacion (min) | Favorable | Neutral | Unfavorable | Frustracion (rachas>=4) | Oro/h neto | Materiales/h neto | Estado |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
    ...rows,
    '',
    '## Mezcla de acciones observada',
    '',
    ...usageRows,
    '',
    '## Criterios de lectura',
    '',
    '- first-upgrade OK: entre 10 y 20 minutos.',
    '- specialization OK: entre 40 y 80 minutos.',
    '- frustration OK: <= 10% de intentos de riesgo caen en rachas largas.',
    '- gold/h y mats/h OK: dentro de banda FORGE_ECONOMY_TARGETS por etapa.',
    '',
  ].join('\n');
}

function main() {
  const resultsByKey = {};

  Object.keys(STAGES).forEach((stageId) => {
    DURATIONS_H.forEach((hours) => {
      const bucket = [];
      for (let i = 0; i < SIM_RUNS; i += 1) {
        bucket.push(simulateScenario(stageId, hours));
      }
      resultsByKey[`${stageId}_${hours}`] = aggregate(bucket);
    });
  });

  const markdown = reportMarkdown(resultsByKey);
  const outputPath = path.resolve(workspaceRoot, 'docs/REPORTE_BALANCE_FORJA_SIMULADO.md');
  fs.writeFileSync(outputPath, markdown, 'utf8');

  process.stdout.write(`${markdown}\n`);
  process.stdout.write(`\nReporte guardado en: ${outputPath}\n`);
}

main();
