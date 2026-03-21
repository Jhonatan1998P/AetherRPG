export function createCombatDomain(deps) {
  const {
    SKILLS,
    pick,
    rand,
    randf,
    clamp,
    softRound,
    uid,
  } = deps;

  function enemyArchetypeMods(archetype) {
    return {
      berserker: { attack: 1.12, defense: 0.92, speed: 1.03, crit: 0.04, dodge: 0.01, block: 0.0, lifesteal: 0.02 },
      guardian: { attack: 0.9, defense: 1.18, speed: 0.92, crit: 0.01, dodge: 0.02, block: 0.05, lifesteal: 0.0 },
      assassin: { attack: 1.0, defense: 0.86, speed: 1.22, crit: 0.06, dodge: 0.05, block: 0.01, lifesteal: 0.0 },
      beast: { attack: 1.08, defense: 0.95, speed: 1.09, crit: 0.03, dodge: 0.03, block: 0.0, lifesteal: 0.03 },
      occult: { attack: 1.03, defense: 0.94, speed: 1.05, crit: 0.05, dodge: 0.02, block: 0.02, lifesteal: 0.0 },
    }[archetype] || { attack: 1, defense: 1, speed: 1, crit: 0, dodge: 0, block: 0, lifesteal: 0 };
  }

  function difficultyMultiplier({ zone, kind = 'normal', playerLevel = 1, playerAscension = 0, wins = 0 }) {
    const levelPart = Math.pow(playerLevel, 0.88) * 0.04;
    const zonePart = (zone && typeof zone.id === 'number' ? zone.id * 0.25 : 0);
    const ascPart = playerAscension * 0.25;
    const winPart = Math.min(wins / 60, 3);
    const kindPart = kind === 'elite' ? 0.3 : kind === 'boss' ? 0.6 : 0;
    return 1 + levelPart + zonePart + ascPart + winPart + kindPart;
  }

  function makeEnemy({ zone, kind = 'normal', extraScale = 0, playerLevel = 1, playerAscension = 0, wins = 0 }) {
    const archetypes = ['berserker', 'guardian', 'assassin', 'beast', 'occult'];
    const archetype = pick(archetypes);
    const mods = enemyArchetypeMods(archetype);
    const level = Math.max(1, Math.round(zone.unlockLevel + playerLevel * 0.95 + zone.id * 1.8 + extraScale + rand(-1, 2)));
    const eliteMult = kind === 'elite' ? 1.3 : kind === 'boss' ? 1.6 : 1;
    const diffMult = difficultyMultiplier({ zone, kind, playerLevel, playerAscension, wins });
    const baseAttack = (12 + level * 3.4) * mods.attack * eliteMult * diffMult;
    const baseDefense = (8 + level * 2.8) * mods.defense * eliteMult * diffMult;
    const baseHp = (120 + level * 34) * (kind === 'boss' ? 2.1 : kind === 'elite' ? 1.5 : 1) * diffMult;
    const baseSpeed = (7 + level * 1.08) * mods.speed * diffMult;
    const naming = kind === 'boss' ? zone.boss : pick(zone.enemies);
    const skillPack = {
      berserker: { name: 'Furia salvaje', mult: 1.45, cooldown: 3 },
      guardian: { name: 'Muro de carne', mult: 0.9, cooldown: 4, selfBuff: { defensePct: 0.2, turns: 2 } },
      assassin: { name: 'Deguello', mult: 1.2, cooldown: 3, critBonus: 0.18 },
      beast: { name: 'Desgarro', mult: 1.08, cooldown: 3, dot: { turns: 2, ratio: 0.12, label: 'Sangrado' } },
      occult: { name: 'Maldicion', mult: 1.15, cooldown: 4, armorBreak: { pct: 0.14, turns: 2 } },
    }[archetype];

    return {
      id: uid(),
      name: naming,
      zoneId: zone.id,
      kind,
      archetype,
      level,
      maxHp: Math.round(baseHp),
      hp: Math.round(baseHp),
      attack: softRound(baseAttack, 2),
      defense: softRound(baseDefense, 2),
      speed: softRound(baseSpeed, 2),
      crit: clamp(0.06 + mods.crit + (kind === 'boss' ? 0.03 : kind === 'elite' ? 0.015 : 0) + (diffMult - 1) * 0.015, 0, 0.55),
      dodge: clamp(0.025 + mods.dodge + (kind === 'boss' ? 0.02 : kind === 'elite' ? 0.01 : 0) + (diffMult - 1) * 0.012, 0, 0.45),
      block: clamp(0.015 + mods.block + (kind === 'boss' ? 0.04 : kind === 'elite' ? 0.02 : 0) + (diffMult - 1) * 0.012, 0, 0.4),
      lifesteal: clamp(mods.lifesteal + (kind === 'boss' ? 0.01 : kind === 'elite' ? 0.005 : 0) + (diffMult - 1) * 0.008, 0, 0.25),
      skill: skillPack,
      cooldowns: {},
      buffs: [],
      dots: [],
      armorBreak: null,
      shield: 0,
    };
  }

  function buildPlayerCombatant(playerState, derivedStats) {
    return {
      id: 'player',
      name: playerState.name,
      maxHp: derivedStats.maxHp,
      hp: Math.round(playerState.hp),
      attack: derivedStats.attack,
      defense: derivedStats.defense,
      speed: derivedStats.speed,
      crit: derivedStats.crit,
      dodge: derivedStats.dodge,
      block: derivedStats.block,
      lifesteal: derivedStats.lifesteal,
      cooldowns: {},
      buffs: [],
      dots: [],
      armorBreak: null,
      shield: 0,
      activeSkills: (playerState.activeSkills || []).filter((id) => (playerState.unlockedSkills || []).includes(id)),
    };
  }

  function activeBuffValue(actor, key) {
    return actor.buffs
      .filter((b) => b.turns > 0 && key in (b.values || {}))
      .reduce((total, buff) => total + buff.values[key], 0);
  }

  function effectiveStat(actor, key) {
    const buffPctKey = `${key}Pct`;
    let value = actor[key];
    if (key === 'defense' && actor.armorBreak && actor.armorBreak.turns > 0) {
      value *= (1 - actor.armorBreak.pct);
    }
    if (key === 'attack' || key === 'defense' || key === 'speed') {
      value *= (1 + activeBuffValue(actor, buffPctKey));
      value += activeBuffValue(actor, key);
    } else {
      value += activeBuffValue(actor, key);
    }
    return value;
  }

  function skillLevelMult(skillLevels, skillId) {
    return 1 + Math.max(0, ((skillLevels && skillLevels[skillId]) || 1) - 1) * 0.08;
  }

  function choosePlayerSkill(player, enemy, playerContext) {
    const order = player.activeSkills || [];
    for (const skillId of order) {
      const skill = SKILLS[skillId];
      if (!skill) continue;
      if (skill.requireOffhand && !playerContext.equipment.offhand) continue;
      if ((player.cooldowns[skillId] || 0) > 0) continue;
      if (skill.executeThreshold && enemy.hp / enemy.maxHp > skill.executeThreshold) continue;
      return skill;
    }
    return null;
  }

  function chooseEnemySkill(enemy) {
    if (!enemy.skill) return null;
    if ((enemy.cooldowns.special || 0) > 0) return null;
    return enemy.skill;
  }

  function decayStatuses(actor, log) {
    actor.dots = actor.dots.filter((dot) => {
      if (dot.turns <= 0) return false;
      const amount = Math.round(dot.damage);
      actor.hp -= amount;
      log.push(`☠️ ${actor.name} sufre ${amount} por ${dot.label}.`);
      dot.turns -= 1;
      return dot.turns > 0;
    });

    actor.buffs.forEach((buff) => {
      buff.turns -= 1;
    });
    actor.buffs = actor.buffs.filter((b) => b.turns > 0);
    if (actor.armorBreak) {
      actor.armorBreak.turns -= 1;
      if (actor.armorBreak.turns <= 0) actor.armorBreak = null;
    }
  }

  function performHit(attacker, defender, label, mult = 1, extra = {}, log = []) {
    const attackStat = effectiveStat(attacker, 'attack');
    const defenseStat = effectiveStat(defender, 'defense');
    const critChance = clamp((attacker.crit || 0) + (extra.critBonus || 0), 0, 0.85);
    const dodgeChance = clamp(defender.dodge || 0, 0, 0.7);

    if (Math.random() < dodgeChance) {
      log.push(`💨 ${defender.name} esquiva ${label}.`);
      return { damage: 0, crit: false, dodged: true, blocked: false };
    }

    let damage = attackStat * mult - defenseStat * 0.55;
    damage = Math.max(attackStat * 0.26, damage);
    damage *= randf(0.9, 1.08);

    let crit = false;
    if (Math.random() < critChance) {
      damage *= 1.68;
      crit = true;
    }

    let blocked = false;
    if (Math.random() < (defender.block || 0)) {
      damage *= 0.66;
      blocked = true;
    }

    damage = Math.max(1, Math.round(damage));

    if (defender.shield > 0) {
      const absorbed = Math.min(defender.shield, damage);
      defender.shield -= absorbed;
      damage -= absorbed;
      if (absorbed > 0) log.push(`🛡️ ${defender.name} absorbe ${absorbed} con un escudo.`);
    }

    if (damage > 0) {
      defender.hp -= damage;
      const steal = damage * clamp((attacker.lifesteal || 0) + (extra.lifestealBonus || 0), 0, 0.9);
      if (steal > 0) {
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + Math.round(steal));
      }
    }

    const critText = crit ? ' crítico' : '';
    const blockText = blocked ? ' (bloqueado parcialmente)' : '';
    log.push(`⚔️ ${attacker.name} usa ${label} y causa ${damage}${critText}${blockText}.`);
    return { damage, crit, dodged: false, blocked };
  }

  function applySkillEffects(attacker, defender, skill, hitResult, log) {
    if (!skill || hitResult.dodged) return;
    if (skill.armorBreak) {
      defender.armorBreak = { pct: skill.armorBreak.pct, turns: skill.armorBreak.turns + 1 };
      log.push(`🧩 La armadura de ${defender.name} queda expuesta.`);
    }
    if (skill.dot && hitResult.damage > 0) {
      defender.dots.push({
        damage: Math.max(3, attacker.attack * skill.dot.ratio),
        turns: skill.dot.turns,
        label: skill.dot.label,
      });
      log.push(`🩸 ${defender.name} queda afectado por ${skill.dot.label}.`);
    }
    if (skill.selfBuff) {
      attacker.buffs.push({
        turns: skill.selfBuff.turns + 1,
        values: {
          attackPct: skill.selfBuff.attackPct || 0,
          defensePct: skill.selfBuff.defensePct || 0,
          speedPct: skill.selfBuff.speedPct || 0,
        }
      });
      if (skill.selfBuff.shieldPct) {
        const amount = Math.round(attacker.maxHp * skill.selfBuff.shieldPct);
        attacker.shield += amount;
        log.push(`🛡️ ${attacker.name} obtiene un escudo de ${amount}.`);
      }
      log.push(`✨ ${attacker.name} activa un refuerzo temporal.`);
    }
  }

  function actorTurn(attacker, defender, isPlayer, playerContext, statsDelta, log) {
    if (attacker.hp <= 0 || defender.hp <= 0) return null;
    const skill = isPlayer
      ? choosePlayerSkill(attacker, defender, playerContext)
      : chooseEnemySkill(attacker);

    if (!skill) {
      const hit = performHit(attacker, defender, 'Golpe básico', 1, {}, log);
      if (hit.damage > 0) {
        if (isPlayer) statsDelta.damageDone += hit.damage;
        else statsDelta.damageTaken += hit.damage;
      }
      return hit;
    }

    const mult = (skill.mult || 1) * (isPlayer ? skillLevelMult(playerContext.skillLevels, skill.id) : 1);
    const hits = skill.hits || 1;
    let lastHit = null;

    for (let i = 0; i < hits; i++) {
      const bonus = {};
      if (skill.critBonus) bonus.critBonus = skill.critBonus;
      if (skill.lifestealBonus) bonus.lifestealBonus = skill.lifestealBonus;

      let appliedMult = mult;
      if (skill.executeThreshold && defender.hp / defender.maxHp <= skill.executeThreshold) {
        appliedMult *= skill.executeMult || 1.6;
      }

      lastHit = performHit(attacker, defender, skill.name, appliedMult, bonus, log);
      if (lastHit && lastHit.damage > 0) {
        if (isPlayer) statsDelta.damageDone += lastHit.damage;
        else statsDelta.damageTaken += lastHit.damage;
      }
      if (lastHit && lastHit.crit && isPlayer) statsDelta.crits += 1;
      if (defender.hp <= 0) break;
    }

    applySkillEffects(attacker, defender, skill, lastHit || { dodged: false, damage: 0 }, log);
    if (isPlayer) attacker.cooldowns[skill.id] = skill.cooldown;
    else attacker.cooldowns.special = skill.cooldown;
    return lastHit;
  }

  function tickCooldowns(actor) {
    Object.keys(actor.cooldowns).forEach((key) => {
      actor.cooldowns[key] = Math.max(0, (actor.cooldowns[key] || 0) - 1);
    });
  }

  function runCombat({ enemy, playerState, derivedStats, zoneName, maxTurns = 28 }) {
    const player = buildPlayerCombatant(playerState, derivedStats);
    const foe = JSON.parse(JSON.stringify(enemy));
    const log = [
      `🏟️ <b>${player.name}</b> se enfrenta a <b>${foe.name}</b> en <b>${zoneName}</b>.`
    ];
    const statsDelta = { damageDone: 0, damageTaken: 0, crits: 0 };
    const playerContext = {
      equipment: playerState.equipment,
      skillLevels: playerState.skillLevels,
    };

    let turn = 1;
    while (player.hp > 0 && foe.hp > 0 && turn <= maxTurns) {
      decayStatuses(player, log);
      decayStatuses(foe, log);
      if (player.hp <= 0 || foe.hp <= 0) break;

      const order = (effectiveStat(player, 'speed') + randf(0, 3)) >= (effectiveStat(foe, 'speed') + randf(0, 3))
        ? [[player, foe, true], [foe, player, false]]
        : [[foe, player, false], [player, foe, true]];

      for (const [attacker, defender, isPlayer] of order) {
        if (attacker.hp <= 0 || defender.hp <= 0) continue;
        actorTurn(attacker, defender, isPlayer, playerContext, statsDelta, log);
        if (defender.hp <= 0) break;
      }

      tickCooldowns(player);
      tickCooldowns(foe);
      turn += 1;
    }

    return {
      player,
      foe,
      log,
      statsDelta,
      victory: player.hp > 0 && foe.hp <= 0,
    };
  }

  return {
    enemyArchetypeMods,
    difficultyMultiplier,
    makeEnemy,
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
  };
}
