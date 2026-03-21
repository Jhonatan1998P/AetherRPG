export function createStatsDomain(deps) {
  const {
    SLOT_ORDER,
    emptyStats,
    addStats,
    softRound,
    clamp,
  } = deps;

  const derivedCache = { sig: '', value: null };

  function invalidateDerivedCache() {
    derivedCache.sig = '';
    derivedCache.value = null;
  }

  function petBonus(state, getPetData) {
    const pet = getPetData();
    const bonus = emptyStats();
    if (!pet || !state.player.petLevel) return bonus;
    const mult = 1 + state.player.petLevel * 0.16;
    Object.entries(pet.bonus).forEach(([key, value]) => {
      bonus[key] = softRound((bonus[key] || 0) + value * mult, 4);
    });
    return bonus;
  }

  function getGuildBonus(state) {
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

  function getRelicBonus(state) {
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

  function getEquipmentBonus(state, scaleItemStats) {
    const total = emptyStats();
    SLOT_ORDER.forEach((slot) => {
      const item = state.player.equipment[slot];
      if (item) addStats(total, scaleItemStats(item));
    });
    return total;
  }

  function getTrainingBonus(state) {
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

  function getDerivedStats(state, ctx) {
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

    const { getPetData, scaleItemStats } = ctx;
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

    const gear = getEquipmentBonus(state, scaleItemStats);
    const training = getTrainingBonus(state);
    const guild = getGuildBonus(state);
    const relic = getRelicBonus(state);
    const pet = petBonus(state, getPetData);

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

  function getLootLuck(state, ctx) {
    if (!state.player) return 0;
    return getDerivedStats(state, ctx).lootLuck || 0;
  }

  return {
    invalidateDerivedCache,
    petBonus,
    getGuildBonus,
    getRelicBonus,
    getEquipmentBonus,
    getTrainingBonus,
    getDerivedStats,
    getLootLuck,
  };
}
