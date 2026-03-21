import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  SKILLS,
  ZONES,
  ENEMY_ARCHETYPES,
  ENEMY_FAMILIES_BY_ZONE,
  ENEMY_AFFIXES,
  ENCOUNTER_TEMPLATES,
  ENEMY_BUDGETS,
  REWARD_CURVES,
  THREAT_BANDS,
} from '../src/shared/content/game-data.js';
import { createCombatDomain } from '../src/features/gameplay/domain/combat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..');

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function softRound(value, decimals = 2) {
  return Number(value.toFixed(decimals));
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randf(min, max) {
  return Math.random() * (max - min) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function uid() {
  return `${Date.now().toString(36)}_${Math.floor(Math.random() * 1e6).toString(36)}`;
}

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

const TARGETS = {
  normal: { winrateMin: 0.6, winrateMax: 0.65, turnsMin: 6, turnsMax: Infinity },
  elite: { winrateMin: 0.4, winrateMax: 0.55, turnsMin: 8, turnsMax: Infinity },
  boss: { winrateMin: 0.3, winrateMax: 0.4, turnsMin: 10, turnsMax: Infinity },
};

const MODE_BY_KIND = {
  normal: 'arena',
  elite: 'arena',
  boss: 'dungeon',
};

function skillLevels() {
  const out = {};
  Object.keys(SKILLS).forEach((id) => {
    out[id] = 1;
  });
  return out;
}

function unlockedSkillsForLevel(level) {
  return Object.values(SKILLS)
    .filter((skill) => level >= skill.unlockLevel)
    .map((skill) => skill.id);
}

function activeSkillsForLevel(level) {
  const ordered = Object.values(SKILLS)
    .filter((skill) => level >= skill.unlockLevel)
    .sort((a, b) => a.unlockLevel - b.unlockLevel)
    .map((skill) => skill.id);
  return ordered.slice(0, 4);
}

function playerDerived(level, zoneId, kind) {
  const baseAttack = 14 + level * 3.2;
  const baseDefense = 10 + level * 2.45;
  const baseSpeed = 8 + level * 1.2;
  const baseHp = 120 + level * 34;
  const gearScale = 1 + zoneId * 0.08 + (kind === 'boss' ? 0.05 : kind === 'elite' ? 0.02 : 0);
  return {
    attack: softRound(baseAttack * gearScale, 2),
    defense: softRound(baseDefense * gearScale, 2),
    speed: softRound(baseSpeed * (1 + zoneId * 0.05), 2),
    maxHp: Math.round(baseHp * (1 + zoneId * 0.09)),
    crit: clamp(0.06 + level * 0.0012, 0.06, 0.28),
    dodge: clamp(0.04 + level * 0.0008, 0.04, 0.2),
    block: clamp(0.03 + level * 0.0006, 0.03, 0.17),
    lifesteal: clamp(level * 0.00035, 0, 0.08),
  };
}

function playerLevelForZone(zone) {
  return Math.max(1, zone.unlockLevel + 1);
}

function runScenario(zone, kind, fights) {
  const mode = MODE_BY_KIND[kind] || 'arena';
  const level = playerLevelForZone(zone);
  const derivedStats = playerDerived(level, zone.id, kind);
  const unlocked = unlockedSkillsForLevel(level);
  const active = activeSkillsForLevel(level);
  const skills = skillLevels();

  let wins = 0;
  let turnsTotal = 0;
  let hpEndRatioTotal = 0;
  let threatTotal = 0;

  for (let i = 0; i < fights; i += 1) {
    const enemy = combatDomain.rollEncounter({
      mode,
      zone,
      zoneId: zone.id,
      kind,
      playerLevel: level,
      playerAscension: 0,
      wins: Math.round((i / Math.max(1, fights)) * 60),
      derivedStats,
      adaptiveOffset: 0,
      economyState: { netGoldThisHour: 0, targetGoldPerHour: 2000 },
    });

    const playerState = {
      name: 'SimRunner',
      hp: derivedStats.maxHp,
      activeSkills: active,
      unlockedSkills: unlocked,
      skillLevels: skills,
      equipment: { offhand: {} },
    };

    const simulation = combatDomain.runCombat({
      enemy,
      playerState,
      derivedStats,
      zoneName: zone.name,
      maxTurns: 28,
    });

    if (simulation.victory) wins += 1;
    turnsTotal += Number(simulation.summary.turnsPlayed || 0);
    hpEndRatioTotal += Number(simulation.summary.playerEndHp || 0) / Math.max(1, Number(simulation.summary.playerStartHp || 1));
    threatTotal += Number(enemy.threatScore || 0);
  }

  return {
    zoneId: zone.id,
    zone: zone.name,
    mode,
    kind,
    fights,
    winrate: wins / fights,
    avgTurns: turnsTotal / fights,
    avgHpEndRatio: hpEndRatioTotal / fights,
    avgThreatScore: threatTotal / fights,
  };
}

function statusForResult(result) {
  const target = TARGETS[result.kind];
  if (!target) return { ok: true, notes: [] };
  const notes = [];
  if (result.winrate < target.winrateMin) notes.push('winrate bajo');
  if (result.winrate > target.winrateMax) notes.push('winrate alto');
  if (result.avgTurns < target.turnsMin) notes.push('combate corto');
  if (Number.isFinite(target.turnsMax) && result.avgTurns > target.turnsMax) notes.push('combate largo');
  return {
    ok: notes.length === 0,
    notes,
  };
}

function fmtPct(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function toMarkdown(results, fights) {
  const now = new Date().toISOString();
  const rows = results.map((result) => {
    const status = statusForResult(result);
    return `| ${result.zoneId} | ${result.zone} | ${result.mode} | ${result.kind} | ${fmtPct(result.winrate)} | ${result.avgTurns.toFixed(2)} | ${fmtPct(result.avgHpEndRatio)} | ${result.avgThreatScore.toFixed(1)} | ${status.ok ? 'OK' : status.notes.join(', ')} |`;
  });

  const grouped = ['normal', 'elite', 'boss'].map((kind) => {
    const set = results.filter((entry) => entry.kind === kind);
    const avgWin = set.reduce((sumValue, entry) => sumValue + entry.winrate, 0) / Math.max(1, set.length);
    const avgTurns = set.reduce((sumValue, entry) => sumValue + entry.avgTurns, 0) / Math.max(1, set.length);
    const status = statusForResult({ kind, winrate: avgWin, avgTurns });
    return `| ${kind} | ${fmtPct(avgWin)} | ${avgTurns.toFixed(2)} | ${status.ok ? 'OK' : status.notes.join(', ')} |`;
  });

  return [
    '# Reporte de Balance de Combate (Simulado)',
    '',
    `- Fecha: ${now}`,
    `- Iteraciones por escenario: ${fights}`,
    '- Escenarios: 7 zonas x (normal/elite/boss)',
    '- Modos: normal+elite en arena, boss en dungeon',
    '',
    '## Resultado por escenario',
    '',
    '| ZonaId | Zona | Modo | Tipo | Winrate | Turnos medios | HP final medio | Threat medio | Estado |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- |',
    ...rows,
    '',
    '## Resumen por tipo',
    '',
    '| Tipo | Winrate medio | Turnos medios | Estado vs banda objetivo |',
    '| --- | --- | --- | --- |',
    ...grouped,
    '',
    '## Bandas objetivo usadas',
    '',
    '- normal: winrate 60%-65%, turnos >= 6',
    '- elite: winrate 40%-55%, turnos >= 8',
    '- boss: winrate 30%-40%, turnos >= 10',
    '',
  ].join('\n');
}

function main() {
  const fights = Math.max(20, Number(process.argv[2] || 140));
  const results = [];

  ZONES.forEach((zone) => {
    ['normal', 'elite', 'boss'].forEach((kind) => {
      results.push(runScenario(zone, kind, fights));
    });
  });

  const markdown = toMarkdown(results, fights);
  const outputPath = path.resolve(workspaceRoot, 'docs/REPORTE_BALANCE_COMBATE_SIMULADO.md');
  fs.writeFileSync(outputPath, markdown, 'utf8');

  process.stdout.write(`${markdown}\n`);
  process.stdout.write(`\nReporte guardado en: ${outputPath}\n`);
}

main();
