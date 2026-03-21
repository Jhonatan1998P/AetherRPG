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
    const hpRegen = ds.maxHp * (0.0033 + ds.regenPct * 0.01) * seconds;
    const energyRegen = (0.48 + state.player.training.discipline * 0.02 + state.player.relics.momentum * 0.04) * seconds;
    const staminaRegen = (0.028 + state.player.relics.momentum * 0.005) * seconds;
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
    if (state.player.energy < 12) {
      toast('Necesitas al menos 12 de energía', 'danger');
      return;
    }
    state.player.energy -= 12;
    state.timers.job = {
      id: job.id,
      name: job.name,
      endAt: Date.now() + job.duration * 1000,
      reward: clone(job.reward),
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
    const energyCost = zone.energyCost + Math.floor(durationSec / 40);
    if (state.player.energy < energyCost || state.player.stamina < zone.staminaCost) {
      toast('No tienes recursos para partir', 'danger');
      return;
    }
    state.player.energy -= energyCost;
    state.player.stamina -= zone.staminaCost;
    state.timers.expedition = {
      zoneId,
      endAt: Date.now() + durationSec * 1000,
      durationSec,
      startedAt: Date.now(),
    };
    addJournal('🧭', `Sales de expedición a <b>${zone.name}</b> durante ${durationSec}s.`);
  }

  function completeExpedition(state, silent, ctx) {
    const { grantRewards, getDerivedStats, trackQuest, acquireItem, addJournal, toast, getLootLuck } = ctx;
    if (!state.timers.expedition) return;
    const exp = state.timers.expedition;
    state.timers.expedition = null;
    const zone = ZONES.find((z) => z.id === exp.zoneId) || ZONES[0];
    const scale = 1 + exp.durationSec / 90;
    const reward = {
      gold: Math.round((90 + zone.id * 50 + state.player.level * 16) * scale * (1 + getDerivedStats().goldPct)),
      xp: Math.round((55 + zone.id * 35 + state.player.level * 12) * scale),
      iron: rand(1, 3 + zone.id),
      wood: rand(1, 2 + Math.floor(zone.id / 2)),
      essence: Math.random() < 0.45 ? rand(1, 2 + Math.floor(zone.id / 2)) : 0,
      food: Math.random() < 0.5 ? 1 + Math.floor(zone.id / 2) : 0,
    };
    grantRewards(reward, `Expedición — ${zone.name}`);
    state.stats.expeditions += 1;
    trackQuest('expeditions', 1);

    const threatScore = Math.max(70, Math.round(94 + zone.id * 10 + exp.durationSec * 0.28 + rand(-6, 8)));
    const enemyContext = expeditionEnemyContext(zone.id);
    const enemyKind = exp.durationSec >= 120 ? 'elite' : 'normal';
    const dropChance = 0.48 + zone.id * 0.04 + Math.min(0.2, (getLootLuck ? getLootLuck() : 0) * 0.5);
    if (Math.random() < dropChance) {
      const rolled = rollLoot({
        source: 'expedition',
        zoneId: zone.id,
        enemyKind,
        enemyArchetype: enemyContext.enemyArchetype,
        enemyFamily: enemyContext.enemyFamily,
        threatScore,
        rarityBias: Math.max(0, (threatScore - 100) * 0.0012),
        pityUnits: clamp(threatScore / 100, 0.85, 1.3),
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
