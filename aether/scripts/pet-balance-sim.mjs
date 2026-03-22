import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  PET_RITUALS,
  PETS,
  FORGE_ECONOMY_TARGETS,
} from '../src/shared/content/game-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..');

const STAGE_PROFILES = {
  early: {
    playerLevel: 8,
    ascension: 0,
    petBudgetShare: 0.45,
    start: { shards: 0, essence: 5, food: 6, sigils: 0, catalysts: 0, echoShards: 0 },
    materialMix: { essence: 0.14, sigils: 0.03, catalysts: 0.01, echoShards: 0.0 },
    extraPerHour: { shards: 8.0, food: 24.0, essence: 6.0, sigils: 1.1, catalysts: 0, echoShards: 0 },
  },
  mid: {
    playerLevel: 18,
    ascension: 1,
    petBudgetShare: 0.4,
    start: { shards: 8, essence: 24, food: 18, sigils: 3, catalysts: 1, echoShards: 0 },
    materialMix: { essence: 0.24, sigils: 0.14, catalysts: 0.04, echoShards: 0.05 },
    extraPerHour: { shards: 12.0, food: 30.0, essence: 6.0, sigils: 0, catalysts: 0.2, echoShards: 0 },
  },
  late: {
    playerLevel: 32,
    ascension: 2,
    petBudgetShare: 0.34,
    start: { shards: 18, essence: 58, food: 30, sigils: 12, catalysts: 4, echoShards: 2 },
    materialMix: { essence: 0.26, sigils: 0.19, catalysts: 0.09, echoShards: 0.12 },
    extraPerHour: { shards: 16.0, food: 36.0, essence: 4.0, sigils: 0, catalysts: 0, echoShards: 0 },
  },
};

const RITUAL_TARGETS_MIN = {
  early: {
    wild: [20, 65],
    bonded: [55, 150],
    astral: [120, 240],
  },
  mid: {
    wild: [12, 45],
    bonded: [40, 100],
    astral: [75, 150],
  },
  late: {
    wild: [10, 35],
    bonded: [35, 90],
    astral: [70, 140],
  },
};

const LEVEL_TARGETS_MIN = {
  common10: [90, 220],
  rare20: [420, 760],
  epic30: [1100, 1700],
  mythic30: [1300, 1900],
};

const LEVEL_CASES_BY_STAGE = {
  early: ['common10'],
  mid: ['common10', 'rare20'],
  late: ['rare20', 'epic30', 'mythic30'],
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function softRound(value, decimals = 2) {
  return Number(value.toFixed(decimals));
}

function mean(range) {
  return (Number(range[0] || 0) + Number(range[1] || 0)) / 2;
}

function compactCost(cost) {
  return Object.fromEntries(Object.entries(cost || {}).filter(([, value]) => Number(value || 0) > 0));
}

function stageIncomePerHour(stageId) {
  const profile = STAGE_PROFILES[stageId];
  const target = FORGE_ECONOMY_TARGETS[stageId];
  const materialsPerHour = mean(target.materialsPerHour || [0, 0]);
  return {
    shards: Number(profile.extraPerHour.shards || 0),
    food: Number(profile.extraPerHour.food || 0),
    essence: materialsPerHour * Number(profile.materialMix.essence || 0) + Number(profile.extraPerHour.essence || 0),
    sigils: materialsPerHour * Number(profile.materialMix.sigils || 0) + Number(profile.extraPerHour.sigils || 0),
    catalysts: materialsPerHour * Number(profile.materialMix.catalysts || 0) + Number(profile.extraPerHour.catalysts || 0),
    echoShards: materialsPerHour * Number(profile.materialMix.echoShards || 0) + Number(profile.extraPerHour.echoShards || 0),
  };
}

function resourceLabel(key) {
  return {
    shards: 'fragmentos',
    essence: 'esencia',
    food: 'comida',
    sigils: 'sigilos',
    catalysts: 'catalizadores',
    echoShards: 'eco-fragmentos',
  }[key] || key;
}

function formatCost(cost) {
  const parts = Object.entries(compactCost(cost)).map(([key, value]) => `${softRound(value, 2)} ${resourceLabel(key)}`);
  return parts.length ? parts.join(' · ') : 'sin coste';
}

function scaleCost(cost, mult = 1) {
  const out = {};
  Object.entries(cost || {}).forEach(([key, value]) => {
    const base = Number(value || 0);
    if (base <= 0) {
      out[key] = 0;
      return;
    }
    out[key] = Math.max(1, Math.round(base * mult));
  });
  return compactCost(out);
}

function ritualCost(ritual, playerLevel, ascension) {
  const out = {};
  Object.keys(ritual.baseCost || {}).forEach((key) => {
    const base = Number(ritual.baseCost[key] || 0);
    const levelScale = Number((ritual.levelScaling && ritual.levelScaling[key]) || 0);
    const ascScale = Number((ritual.ascensionScaling && ritual.ascensionScaling[key]) || 0);
    out[key] = Math.max(0, Math.round(base + playerLevel * levelScale + ascension * ascScale));
  });
  return compactCost(out);
}

function petXpForNextLevel(petLevel, power, playerLevel, ascension) {
  const base = 1.8 + petLevel * 0.25;
  const growth = Math.pow(petLevel, 1.03) * 0.12;
  const powerTax = (power - 1) * 1.05;
  const accountTax = Math.min(1.6, playerLevel * 0.011 + ascension * 0.13);
  return Math.max(3, Math.round(base + growth + powerTax + accountTax));
}

function petFeedCostForLevel(petLevel, power, playerLevel) {
  const costs = {
    food: 1 + Math.floor((petLevel - 1) / 30) + (power >= 2.2 && petLevel >= 30 ? 1 : 0) + Math.floor(playerLevel / 80),
    essence: 0,
    sigils: 0,
    catalysts: 0,
    echoShards: 0,
  };
  if (petLevel >= 28) {
    costs.essence = 1 + Math.floor((petLevel - 28) / 24) + (power >= 2.1 ? 1 : 0);
  }
  if (petLevel >= 38) {
    costs.sigils = Math.floor((petLevel - 38) / 24) + (power >= 1.8 ? 1 : 0);
  }
  if (petLevel >= 50 && power >= 2.1) {
    costs.catalysts = 1 + Math.floor((petLevel - 50) / 28);
  }
  if (petLevel >= 66 && power >= 2.2) {
    costs.echoShards = 1 + Math.floor((petLevel - 66) / 34);
  }
  return compactCost(costs);
}

function minutesToAfford(cost, incomePerHour, startStock, budgetShare = 1) {
  const perHour = {};
  Object.keys({ ...incomePerHour, ...cost }).forEach((key) => {
    perHour[key] = Math.max(0, Number(incomePerHour[key] || 0) * budgetShare);
  });
  let maxHours = 0;
  const breakdown = {};
  Object.entries(compactCost(cost)).forEach(([key, need]) => {
    const start = Number(startStock[key] || 0);
    const missing = Math.max(0, Number(need) - start);
    if (missing <= 0) {
      breakdown[key] = 0;
      return;
    }
    if ((perHour[key] || 0) <= 0) {
      maxHours = Infinity;
      breakdown[key] = Infinity;
      return;
    }
    const hours = missing / perHour[key];
    breakdown[key] = hours * 60;
    maxHours = Math.max(maxHours, hours);
  });
  return {
    minutes: Number.isFinite(maxHours) ? maxHours * 60 : Infinity,
    breakdown,
  };
}

function minutesToReachLevel({
  targetLevel,
  power,
  playerLevel,
  ascension,
  incomePerHour,
  budgetShare,
  costMult = 1,
}) {
  let minutes = 0;
  let bottleneckMinutes = 0;
  let totalFeeds = 0;
  const totalCost = {
    food: 0,
    essence: 0,
    sigils: 0,
    catalysts: 0,
    echoShards: 0,
  };

  for (let level = 1; level < targetLevel; level += 1) {
    const xpNeed = petXpForNextLevel(level, power, playerLevel, ascension);
    const feedCost = scaleCost(petFeedCostForLevel(level, power, playerLevel), costMult);
    const feedTimeHours = Math.max(
      ...Object.entries(compactCost(feedCost)).map(([key, value]) => {
        const income = Math.max(0, Number(incomePerHour[key] || 0) * budgetShare);
        if (income <= 0) return Infinity;
        return Number(value || 0) / income;
      }),
      0,
    );
    if (!Number.isFinite(feedTimeHours)) {
      return {
        minutes: Infinity,
        feeds: totalFeeds,
        bottleneckPct: Infinity,
        totalCost: compactCost(totalCost),
      };
    }
    const levelMinutes = feedTimeHours * xpNeed * 60;
    minutes += levelMinutes;
    totalFeeds += xpNeed;

    const feedBottleneckMinutes = feedTimeHours * 60;
    bottleneckMinutes += feedBottleneckMinutes * xpNeed;

    Object.entries(feedCost).forEach(([key, value]) => {
      totalCost[key] += Number(value || 0) * xpNeed;
    });
  }

  return {
    minutes,
    feeds: totalFeeds,
    bottleneckPct: minutes > 0 ? (bottleneckMinutes / minutes) * 100 : 0,
    totalCost: compactCost(totalCost),
  };
}

function inRange(value, minMax) {
  if (!Number.isFinite(value)) return false;
  return value >= minMax[0] && value <= minMax[1];
}

function deviationPct(value, minMax) {
  if (!Number.isFinite(value)) return Infinity;
  const min = Number(minMax[0] || 0);
  const max = Number(minMax[1] || Infinity);
  if (value >= min && value <= max) return 0;
  if (value < min) return min > 0 ? ((min - value) / min) * 100 : 0;
  return max > 0 ? ((value - max) / max) * 100 : 0;
}

function evaluate({ incomeMult = 1, costMult = 1 }) {
  const rowsRitual = [];
  const rowsLevels = [];

  Object.entries(STAGE_PROFILES).forEach(([stageId, stage]) => {
    const baseIncome = stageIncomePerHour(stageId);
    const income = Object.fromEntries(
      Object.entries(baseIncome).map(([key, value]) => [key, Number(value || 0) * incomeMult])
    );

    PET_RITUALS.forEach((ritual) => {
      const baseCost = ritualCost(ritual, stage.playerLevel, stage.ascension);
      const cost = scaleCost(baseCost, costMult);
      const affordability = minutesToAfford(cost, income, {
        shards: 0,
        essence: 0,
        food: 0,
        sigils: 0,
        catalysts: 0,
        echoShards: 0,
      }, 1);
      const target = (RITUAL_TARGETS_MIN[stageId] && RITUAL_TARGETS_MIN[stageId][ritual.id]) || [0, Infinity];
      rowsRitual.push({
        stage: stageId,
        ritual: ritual.id,
        level: stage.playerLevel,
        cost,
        minutes: affordability.minutes,
        target,
        ok: inRange(affordability.minutes, target),
        deviation: deviationPct(affordability.minutes, target),
      });
    });

    const common = PETS.find((pet) => pet.tier === 'common');
    const rare = PETS.find((pet) => pet.tier === 'rare');
    const epic = PETS.find((pet) => pet.tier === 'epic');
    const mythic = PETS.find((pet) => pet.tier === 'mythic');
    const checks = [
      ['common10', common, 10],
      ['rare20', rare, 20],
      ['epic30', epic, 30],
      ['mythic30', mythic, 30],
    ].filter(([id]) => (LEVEL_CASES_BY_STAGE[stageId] || []).includes(id));

    checks.forEach(([id, pet, targetLevel]) => {
      const result = minutesToReachLevel({
        targetLevel,
        power: Number(pet.power || 1),
        playerLevel: stage.playerLevel,
        ascension: stage.ascension,
        incomePerHour: income,
        budgetShare: stage.petBudgetShare,
        costMult,
      });
      const target = LEVEL_TARGETS_MIN[id] || [0, Infinity];
      rowsLevels.push({
        stage: stageId,
        id,
        pet: pet.name,
        targetLevel,
        minutes: result.minutes,
        feeds: result.feeds,
        totalCost: result.totalCost,
        target,
        ok: inRange(result.minutes, target),
        deviation: deviationPct(result.minutes, target),
      });
    });
  });

  return { rowsRitual, rowsLevels };
}

function summarizeSensitivity(label, evalResult) {
  const rituals = evalResult.rowsRitual;
  const levels = evalResult.rowsLevels;
  const totalChecks = rituals.length + levels.length;
  const totalOk = rituals.filter((row) => row.ok).length + levels.filter((row) => row.ok).length;
  const deviations = [...rituals, ...levels]
    .map((row) => Number(row.deviation || 0))
    .filter((value) => Number.isFinite(value));
  const maxDeviation = deviations.length ? Math.max(...deviations) : 0;
  const avgDeviation = deviations.length ? deviations.reduce((acc, value) => acc + value, 0) / deviations.length : 0;
  const ritualOk = rituals.filter((row) => row.ok).length;
  const levelOk = levels.filter((row) => row.ok).length;
  return {
    label,
    passRate: totalChecks > 0 ? (totalOk / totalChecks) * 100 : 0,
    ritualPassRate: rituals.length > 0 ? (ritualOk / rituals.length) * 100 : 0,
    levelPassRate: levels.length > 0 ? (levelOk / levels.length) * 100 : 0,
    maxDeviation,
    avgDeviation,
    totalOk,
    totalChecks,
  };
}

function run() {
  const baseline = evaluate({ incomeMult: 1, costMult: 1 });
  const rowsRitual = baseline.rowsRitual;
  const rowsLevels = baseline.rowsLevels;

  const sensitivityRuns = [
    { label: 'base', incomeMult: 1, costMult: 1 },
    { label: 'income -10%', incomeMult: 0.9, costMult: 1 },
    { label: 'income +10%', incomeMult: 1.1, costMult: 1 },
    { label: 'cost -10%', incomeMult: 1, costMult: 0.9 },
    { label: 'cost +10%', incomeMult: 1, costMult: 1.1 },
    { label: 'stress (income -10%, cost +10%)', incomeMult: 0.9, costMult: 1.1 },
    { label: 'best (income +10%, cost -10%)', incomeMult: 1.1, costMult: 0.9 },
  ];

  const sensitivitySummary = sensitivityRuns.map((cfg) => summarizeSensitivity(cfg.label, evaluate(cfg)));

  const markdown = [
    '# Reporte de Balance de Mascotas (Simulado)',
    '',
    `- Fecha: ${new Date().toISOString()}`,
    '- Metodo: estimacion determinista por coste/hora y curvas de XP.',
    '- Nota: los resultados miden viabilidad economica relativa contra objetivos de progresion.',
    '',
    '## Supuestos de ingreso por etapa',
    '',
    '| Etapa | Nivel jugador | Ascension | Presupuesto para mascota | Ingreso/h relevante |',
    '| --- | --- | --- | --- | --- |',
    ...Object.entries(STAGE_PROFILES).map(([stageId, stage]) => {
      const income = stageIncomePerHour(stageId);
      return `| ${stageId} | ${stage.playerLevel} | ${stage.ascension} | ${(stage.petBudgetShare * 100).toFixed(0)}% | ${formatCost(income)} |`;
    }),
    '',
    '## Tiempo de invocacion por ritual',
    '',
    '| Etapa | Ritual | Coste actual | Tiempo estimado (min) | Objetivo (min) | Estado |',
    '| --- | --- | --- | --- | --- | --- |',
    ...rowsRitual.map((row) => `| ${row.stage} | ${row.ritual} | ${formatCost(row.cost)} | ${Number.isFinite(row.minutes) ? row.minutes.toFixed(1) : 'INF'} | ${row.target[0]}-${row.target[1]} | ${row.ok ? 'OK' : 'OUT'} |`),
    '',
    '## Tiempo de progreso por nivel de mascota',
    '',
    '| Etapa | Caso | Mascota | Objetivo | Tiempo estimado (min) | Feeds totales | Coste agregado | Rango objetivo | Estado |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- |',
    ...rowsLevels.map((row) => `| ${row.stage} | ${row.id} | ${row.pet} | Lv ${row.targetLevel} | ${Number.isFinite(row.minutes) ? row.minutes.toFixed(1) : 'INF'} | ${row.feeds} | ${formatCost(row.totalCost)} | ${row.target[0]}-${row.target[1]} | ${row.ok ? 'OK' : 'OUT'} |`),
    '',
    '## Sensibilidad (+/-10%)',
    '',
    '| Escenario | Checks OK | Pass rate global | Pass ritual | Pass progreso | Desvio promedio | Desvio maximo |',
    '| --- | --- | --- | --- | --- | --- | --- |',
    ...sensitivitySummary.map((row) => `| ${row.label} | ${row.totalOk}/${row.totalChecks} | ${row.passRate.toFixed(1)}% | ${row.ritualPassRate.toFixed(1)}% | ${row.levelPassRate.toFixed(1)}% | ${row.avgDeviation.toFixed(2)}% | ${row.maxDeviation.toFixed(2)}% |`),
    '',
  ].join('\n');

  const outPath = path.resolve(workspaceRoot, 'docs/REPORTE_BALANCE_MASCOTAS_SIMULADO.md');
  fs.writeFileSync(outPath, markdown, 'utf8');
  process.stdout.write(`${markdown}\n`);
  process.stdout.write(`Reporte guardado en: ${outPath}\n`);
}

run();
