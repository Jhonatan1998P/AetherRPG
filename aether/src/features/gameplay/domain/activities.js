export function createActivitiesDomain(deps) {
  const {
    JOBS,
    ZONES,
    ENEMY_FAMILIES_BY_ZONE,
    clone,
    rand,
    rollLoot,
    clamp,
  } = deps;

  function weightedPick(entries = []) {
    const clean = entries.filter((entry) => entry && Number(entry.weight || 0) > 0);
    if (!clean.length) return null;
    const total = clean.reduce((sumValue, entry) => sumValue + Number(entry.weight || 0), 0);
    let roll = Math.random() * total;
    for (let i = 0; i < clean.length; i += 1) {
      roll -= Number(clean[i].weight || 0);
      if (roll <= 0) return clean[i].value;
    }
    return clean[clean.length - 1].value;
  }

  function expeditionEnemyContext(zoneId = 0) {
    const families = ENEMY_FAMILIES_BY_ZONE && ENEMY_FAMILIES_BY_ZONE[zoneId];
    if (!Array.isArray(families) || !families.length) {
      return {
        enemyFamily: null,
        enemyArchetype: null,
      };
    }
    const family = weightedPick(families.map((entry) => ({ value: entry, weight: entry.weight || 1 }))) || families[0];
    const archetypeEntries = Object.entries((family && family.archetypeWeights) || {}).map(([value, weight]) => ({ value, weight }));
    return {
      enemyFamily: family.id || null,
      enemyArchetype: archetypeEntries.length ? (weightedPick(archetypeEntries) || archetypeEntries[0].value) : null,
    };
  }

  function passiveRegen(state, seconds, getDerivedStats) {
    const ds = getDerivedStats();
    const hours = Math.max(0, Number(seconds || 0)) / 3600;
    const level = Math.max(1, Number(state.player.level || 1));
    const strength = Math.max(0, Number(state.player.training && state.player.training.strength || 0));
    const endurance = Math.max(0, Number(state.player.training && state.player.training.endurance || 0));
    const weightedAttribute = strength * 0.3 + endurance * 0.7;
    const attributeFactor = 1 + Math.log1p(weightedAttribute) * 0.08;
    const stageFactor = level < 15
      ? 0.9
      : level < 35
        ? 1.03
        : 1.08;

    const hpPerHourPct = clamp((0.1 + ds.regenPct * 0.14) * attributeFactor * stageFactor, 0.06, 0.48);
    const energyPerHourPct = clamp((0.12 + state.player.relics.momentum * 0.006) * attributeFactor * stageFactor, 0.07, 0.38);
    const staminaPerHourPct = clamp((0.14 + state.player.relics.momentum * 0.007) * attributeFactor * stageFactor, 0.08, 0.5);

    const hpRegen = ds.maxHp * hpPerHourPct * hours;
    const energyRegen = ds.maxEnergy * energyPerHourPct * hours;
    const staminaRegen = ds.maxStamina * staminaPerHourPct * hours;
    state.player.hp = clamp(state.player.hp + hpRegen, 1, ds.maxHp);
    state.player.energy = clamp(state.player.energy + energyRegen, 0, ds.maxEnergy);
    state.player.stamina = clamp(state.player.stamina + staminaRegen, 0, ds.maxStamina);
  }

  function startJob(state, id, ctx) {
    const { toast, addJournal } = ctx;
    const job = JOBS.find((j) => j.id === id);
    if (!job) return;
    if (state.timers.job) {
      toast('Ya tienes un trabajo en curso', 'cyan');
      return;
    }
    const level = Math.max(1, Math.round(state.player.level || 1));
    const energyCost = 10 + Math.round(job.duration / 30) + Math.floor(level / 10);
    const staminaCost = Math.max(1, Math.floor(job.duration / 120));
    if (state.player.energy < energyCost || state.player.stamina < staminaCost) {
      toast(`Necesitas ${energyCost} de energía y ${staminaCost} de aguante`, 'danger');
      return;
    }
    state.player.energy -= energyCost;
    state.player.stamina -= staminaCost;
    state.timers.job = {
      id: job.id,
      name: job.name,
      endAt: Date.now() + job.duration * 1000,
      reward: clone(job.reward),
      cost: { energy: energyCost, stamina: staminaCost },
      startedAt: Date.now(),
    };
    addJournal('🧰', `Comienzas el trabajo: <b>${job.name}</b>.`);
  }

  function completeJob(state, silent, ctx) {
    const { grantRewards, toast } = ctx;
    if (!state.timers.job) return;
    const job = state.timers.job;
    state.timers.job = null;
    grantRewards(job.reward, `Trabajo terminado — ${job.name}`);
    if (!silent) toast(`Trabajo completado: ${job.name}`, 'success');
  }

  function startExpedition(state, zoneId, durationSec, ctx) {
    const { isZoneUnlocked, toast, addJournal } = ctx;
    const zone = ZONES.find((z) => z.id === zoneId);
    if (!zone || !isZoneUnlocked(zone)) return;
    if (state.timers.expedition) {
      toast('Ya estás en expedición', 'cyan');
      return;
    }
    const normalizedDuration = clamp(Math.round(durationSec || 0), 135, 720);
    const energyCost = zone.energyCost + Math.floor(normalizedDuration / 28) + Math.ceil(zone.id / 2);
    const staminaCost = zone.staminaCost + (normalizedDuration >= 120 ? 1 : 0) + (normalizedDuration >= 240 ? 1 : 0);
    if (state.player.energy < energyCost || state.player.stamina < staminaCost) {
      toast('No tienes recursos para partir', 'danger');
      return;
    }
    state.player.energy -= energyCost;
    state.player.stamina -= staminaCost;
    state.timers.expedition = {
      zoneId,
      endAt: Date.now() + normalizedDuration * 1000,
      durationSec: normalizedDuration,
      cost: { energy: energyCost, stamina: staminaCost },
      startedAt: Date.now(),
    };
    addJournal('🧭', `Sales de expedición a <b>${zone.name}</b> durante ${normalizedDuration}s.`);
  }

  function completeExpedition(state, silent, ctx) {
    const { grantRewards, getDerivedStats, trackQuest, acquireItem, addJournal, toast, getLootLuck } = ctx;
    if (!state.timers.expedition) return;
    const exp = state.timers.expedition;
    state.timers.expedition = null;
    const zone = ZONES.find((z) => z.id === exp.zoneId) || ZONES[0];
    const scale = 1 + Math.sqrt(exp.durationSec / 90) * 0.78;
    const riskFactor = 1 + zone.id * 0.05 + (exp.durationSec >= 120 ? 0.08 : 0) + (exp.durationSec >= 240 ? 0.12 : 0);
    const essenceChance = clamp(0.32 + zone.id * 0.03 + (exp.durationSec >= 120 ? 0.08 : 0), 0.18, 0.72);
    const reward = {
      gold: Math.round((68 + zone.id * 36 + state.player.level * 11) * scale * riskFactor * (1 + getDerivedStats().goldPct)),
      xp: Math.round((42 + zone.id * 24 + state.player.level * 9) * scale * riskFactor),
      iron: rand(1, 2 + zone.id),
      wood: rand(1, 1 + Math.floor(zone.id / 2)),
      essence: Math.random() < essenceChance ? rand(1, 1 + Math.floor(zone.id / 2) + (exp.durationSec >= 120 ? 1 : 0)) : 0,
      sigils: exp.durationSec >= 120 && Math.random() < (0.08 + zone.id * 0.015) ? 1 : 0,
      catalysts: exp.durationSec >= 240 && Math.random() < (0.06 + zone.id * 0.012) ? 1 : 0,
      food: Math.random() < 0.38 ? 1 + Math.floor(zone.id / 3) : 0,
    };
    grantRewards(reward, `Expedición — ${zone.name}`);
    state.stats.expeditions += 1;
    trackQuest('expeditions', 1);

    const threatScore = Math.max(78, Math.round(92 + zone.id * 12 + exp.durationSec * 0.34 + rand(-8, 10)));
    const enemyContext = expeditionEnemyContext(zone.id);
    const enemyKind = exp.durationSec >= 240 ? 'boss' : exp.durationSec >= 120 ? 'elite' : 'normal';
    const dropChance = clamp(
      0.26
      + zone.id * 0.028
      + (exp.durationSec >= 120 ? 0.06 : 0)
      + (exp.durationSec >= 240 ? 0.05 : 0)
      + Math.min(0.18, (getLootLuck ? getLootLuck() : 0) * 0.4),
      0.14,
      0.76,
    );
    if (Math.random() < dropChance) {
      const rolled = rollLoot({
        source: 'expedition',
        zoneId: zone.id,
        enemyKind,
        enemyArchetype: enemyContext.enemyArchetype,
        enemyFamily: enemyContext.enemyFamily,
        threatScore,
        rarityBias: Math.max(0, (threatScore - 108) * 0.001),
        pityUnits: clamp(threatScore / 100, 0.78, 1.36),
        playerLevel: state.player.level,
        itemLevel: state.player.level + zone.id + rand(0, 2),
        ascension: state.player.ascension || 0,
        lootLuck: getLootLuck ? getLootLuck() : 0,
        mode: 'event',
        smartLoot: true,
        equipment: state.player.equipment,
        streakData: state.player.itemPity,
      });
      state.player.itemPity = rolled.streakData;
      const drop = rolled.item;
      acquireItem(drop);
      addJournal('🎒', `Encuentras <span class="rarity-${drop.rarity}">${drop.name}</span> en la expedición.`);
    }
    if (!silent) toast(`Expedición completada: ${zone.name}`, 'success');
  }

  function resolveFinishedTimers(state, now, silent, ctx) {
    const { completeJob, completeExpedition } = ctx;
    let changed = false;
    if (state.timers.job && state.timers.job.endAt <= now) {
      completeJob(silent);
      changed = true;
    }
    if (state.timers.expedition && state.timers.expedition.endAt <= now) {
      completeExpedition(silent);
      changed = true;
    }
    return changed;
  }

  return {
    passiveRegen,
    startJob,
    completeJob,
    startExpedition,
    completeExpedition,
    resolveFinishedTimers,
  };
}
