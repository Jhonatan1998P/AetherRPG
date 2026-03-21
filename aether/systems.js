(() => {
  const { SLOT_ORDER, SLOT_NAMES, RANKS, ZONES, JOBS, PETS, SKILLS, ACHIEVEMENTS } = window.AetherConfig;
  const { $, clone, rand, randf, pick, clamp, sum, uid, fmt, pct, softRound, localDayKey, timeLeft, rarityDef, sanitizeInlineHtml } = window.AetherUtils;
  const { state, replaceState, makeDefaultState, normalizeState, makeItem, scaleItemStats, computeItemScore, xpNeeded, defaultQuests, generateMarket, maxInventory, guildTotal, getPetData, getDerivedStats, getLootLuck, ensureUnlockedSkills, saveGame } = window.AetherModel;

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

  function grantRewards(reward, sourceLabel = 'Recompensa') {
    if (!reward) return;
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
    addJournal('🎁', `${sourceLabel}: ${summarizeReward(reward)}`);
  }

  function summarizeReward(reward) {
    return Object.entries(reward).map(([k, v]) => {
      const label = {
        xp: 'XP', gold: 'oro', shards: 'fragmentos', iron: 'hierro', wood: 'madera',
        essence: 'esencia', food: 'comida', potions: 'pociones', keys: 'llaves', relicDust: 'polvo reliquia'
      }[k] || k;
      return `+${fmt(v)} ${label}`;
    }).join(' · ');
  }

  function gainXp(amount) {
    if (!amount) return;
    state.player.xp += amount;
    let ding = 0;
    while (state.player.xp >= xpNeeded(state.player.level)) {
      state.player.xp -= xpNeeded(state.player.level);
      state.player.level += 1;
      state.player.attributePoints += 4;
      state.player.skillPoints += 1;
      ding++;
      ensureUnlockedSkills();
    }
    const ds = getDerivedStats();
    if (ding > 0) {
      state.player.hp = ds.maxHp;
      state.player.energy = ds.maxEnergy;
      state.player.stamina = clamp(state.player.stamina + ding, 0, ds.maxStamina);
      state.player.title = currentRank().title;
      addJournal('🌟', `Subes al nivel <b>${state.player.level}</b>. Recibes puntos de atributo y habilidad.`);
      toast(`Nivel ${state.player.level} alcanzado`, 'gold');
    }
  }

  function currentRank() {
    const score = state.player.level * 14
      + state.stats.wins * 4
      + state.player.highestDungeonFloor * 10
      + guildTotal() * 8
      + state.player.ascension * 60;
    let rank = RANKS[0];
    RANKS.forEach(r => { if (score >= r.min) rank = r; });
    return rank;
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
    const ds = getDerivedStats();
    const hpRegen = ds.maxHp * (0.0033 + ds.regenPct * 0.01) * seconds;
    const energyRegen = (0.48 + state.player.training.discipline * 0.02 + state.player.relics.momentum * 0.04) * seconds;
    const staminaRegen = (0.028 + state.player.relics.momentum * 0.005) * seconds;
    state.player.hp = clamp(state.player.hp + hpRegen, 1, ds.maxHp);
    state.player.energy = clamp(state.player.energy + energyRegen, 0, ds.maxEnergy);
    state.player.stamina = clamp(state.player.stamina + staminaRegen, 0, ds.maxStamina);
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
    return {
      berserker: { attack: 1.12, defense: 0.92, speed: 1.03, crit: 0.04, dodge: 0.01, block: 0.0, lifesteal: 0.02 },
      guardian: { attack: 0.9, defense: 1.18, speed: 0.92, crit: 0.01, dodge: 0.02, block: 0.05, lifesteal: 0.0 },
      assassin: { attack: 1.0, defense: 0.86, speed: 1.22, crit: 0.06, dodge: 0.05, block: 0.01, lifesteal: 0.0 },
      beast: { attack: 1.08, defense: 0.95, speed: 1.09, crit: 0.03, dodge: 0.03, block: 0.0, lifesteal: 0.03 },
      occult: { attack: 1.03, defense: 0.94, speed: 1.05, crit: 0.05, dodge: 0.02, block: 0.02, lifesteal: 0.0 },
    }[archetype] || { attack: 1, defense: 1, speed: 1, crit: 0, dodge: 0, block: 0, lifesteal: 0 };
  }

  /**
   * Compute a difficulty multiplier based on player progression and zone. The goal is to
   * provide a steadily increasing challenge as the player levels up, progresses through
   * zones, wins battles and ascends. The multiplier grows with:
   *  - Player level (sublinear scaling so early levels ramp gently)
   *  - Zone index (later zones are tougher by default)
   *  - Player ascensions (each ascension adds a notable bump)
   *  - Total arena wins (capped to prevent runaway difficulty)
   *  - Enemy kind (elite/boss boost slightly)
   */
  function difficultyMultiplier(zone, kind = 'normal') {
    const lvl = state.player.level || 1;
    const asc = state.player.ascension || 0;
    const wins = state.stats && state.stats.wins ? state.stats.wins : 0;
    // Level contributes via a power function: early levels add less, higher levels more
    const levelPart = Math.pow(lvl, 0.88) * 0.04;
    // Zone id scales linearly: each zone adds ~0.25
    const zonePart = (zone && typeof zone.id === 'number' ? zone.id * 0.25 : 0);
    // Ascensions have significant impact
    const ascPart = asc * 0.25;
    // Wins ramp up difficulty gradually, capped at +3
    const winPart = Math.min(wins / 60, 3);
    // Enemy kind further bumps difficulty
    const kindPart = kind === 'elite' ? 0.3 : kind === 'boss' ? 0.6 : 0;
    return 1 + levelPart + zonePart + ascPart + winPart + kindPart;
  }

  function makeEnemy(zone, kind = 'normal', extraScale = 0) {
    const archetypes = ['berserker', 'guardian', 'assassin', 'beast', 'occult'];
    const archetype = pick(archetypes);
    const mods = enemyArchetypeMods(archetype);
    // Compute enemy level: increased baseline and higher weight on player level for added challenge
    const level = Math.max(1, Math.round(zone.unlockLevel + state.player.level * 0.95 + zone.id * 1.8 + extraScale + rand(-1, 2)));
    const eliteMult = kind === 'elite' ? 1.3 : kind === 'boss' ? 1.6 : 1;
    // Difficulty multiplier based on player progression and other factors
    const diffMult = difficultyMultiplier(zone, kind);
    // Increase base stats for a more demanding encounter. Base values and slopes raised.
    const baseAttack = (12 + level * 3.4) * mods.attack * eliteMult * diffMult;
    const baseDefense = (8 + level * 2.8) * mods.defense * eliteMult * diffMult;
    const baseHp = (120 + level * 34) * (kind === 'boss' ? 2.1 : kind === 'elite' ? 1.5 : 1) * diffMult;
    const baseSpeed = (7 + level * 1.08) * mods.speed * diffMult;
    const naming = kind === 'boss' ? zone.boss : pick(zone.enemies);
    const skillPack = {
      berserker: { name: 'Furia salvaje', mult: 1.45, cooldown: 3 },
      guardian: { name: 'Muro de carne', mult: 0.9, cooldown: 4, selfBuff: { defensePct: 0.2, turns: 2 } },
      assassin: { name: 'Degüello', mult: 1.2, cooldown: 3, critBonus: 0.18 },
      beast: { name: 'Desgarro', mult: 1.08, cooldown: 3, dot: { turns: 2, ratio: 0.12, label: 'Sangrado' } },
      occult: { name: 'Maldición', mult: 1.15, cooldown: 4, armorBreak: { pct: 0.14, turns: 2 } },
    }[archetype];

    const enemy = {
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
      // Slightly higher base crit/dodge/block/lifesteal to make enemies feel more dynamic
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
    return enemy;
  }

  function buildPlayerCombatant() {
    const ds = getDerivedStats();
    return {
      id: 'player',
      name: state.player.name,
      maxHp: ds.maxHp,
      hp: Math.round(state.player.hp),
      attack: ds.attack,
      defense: ds.defense,
      speed: ds.speed,
      crit: ds.crit,
      dodge: ds.dodge,
      block: ds.block,
      lifesteal: ds.lifesteal,
      cooldowns: {},
      buffs: [],
      dots: [],
      armorBreak: null,
      shield: 0,
      activeSkills: state.player.activeSkills.filter(id => state.player.unlockedSkills.includes(id)),
    };
  }

  function activeBuffValue(actor, key) {
    return actor.buffs
      .filter(b => b.turns > 0 && key in (b.values || {}))
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

  function skillLevelMult(skillId) {
    return 1 + Math.max(0, (state.player.skillLevels[skillId] || 1) - 1) * 0.08;
  }

  function choosePlayerSkill(player, enemy) {
    const order = player.activeSkills || [];
    for (const skillId of order) {
      const skill = SKILLS[skillId];
      if (!skill) continue;
      if (skill.requireOffhand && !state.player.equipment.offhand) continue;
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

    actor.buffs.forEach((buff) => buff.turns--);
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

  function actorTurn(attacker, defender, isPlayer, log) {
    if (attacker.hp <= 0 || defender.hp <= 0) return;
    let skill = null;
    if (isPlayer) {
      skill = choosePlayerSkill(attacker, defender);
    } else {
      skill = chooseEnemySkill(attacker);
    }

    if (!skill) {
      const hit = performHit(attacker, defender, 'Golpe básico', 1, {}, log);
      return hit;
    }

    const mult = (skill.mult || 1) * (isPlayer ? skillLevelMult(skill.id) : 1);
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
      if (lastHit.crit && isPlayer) state.stats.crits += 1;
      if (defender.hp <= 0) break;
    }

    applySkillEffects(attacker, defender, skill, lastHit, log);
    if (isPlayer) {
      attacker.cooldowns[skill.id] = skill.cooldown;
    } else {
      attacker.cooldowns.special = skill.cooldown;
    }
    return lastHit;
  }

  function tickCooldowns(actor) {
    Object.keys(actor.cooldowns).forEach((key) => {
      actor.cooldowns[key] = Math.max(0, (actor.cooldowns[key] || 0) - 1);
    });
  }

  function runCombat(enemy, context = { mode: 'arena' }) {
    const player = buildPlayerCombatant();
    const foe = clone(enemy);
    const log = [
      `🏟️ <b>${player.name}</b> se enfrenta a <b>${foe.name}</b> en <b>${ZONES[foe.zoneId].name}</b>.`
    ];

    let turn = 1;
    while (player.hp > 0 && foe.hp > 0 && turn <= 28) {
      decayStatuses(player, log);
      decayStatuses(foe, log);
      if (player.hp <= 0 || foe.hp <= 0) break;

      const order = (effectiveStat(player, 'speed') + randf(0, 3)) >= (effectiveStat(foe, 'speed') + randf(0, 3))
        ? [[player, foe, true], [foe, player, false]]
        : [[foe, player, false], [player, foe, true]];

      for (const [attacker, defender, isPlayer] of order) {
        if (attacker.hp <= 0 || defender.hp <= 0) continue;
        const result = actorTurn(attacker, defender, isPlayer, log);
        if (result && result.damage > 0) {
          if (isPlayer) {
            state.stats.damageDone += result.damage;
          } else {
            state.stats.damageTaken += result.damage;
          }
        }
        if (defender.hp <= 0) break;
      }

      tickCooldowns(player);
      tickCooldowns(foe);
      turn++;
    }

    const victory = player.hp > 0 && foe.hp <= 0;
    state.player.hp = clamp(player.hp, 1, getDerivedStats().maxHp);

    const rewards = { gold: 0, xp: 0, iron: 0, wood: 0, essence: 0, keys: 0, potions: 0 };
    let drop = null;

    if (victory) {
      const zone = ZONES[foe.zoneId];
      const goldBase = rand(30, 54) + foe.level * 12 + (foe.kind === 'elite' ? 45 : foe.kind === 'boss' ? 70 : 0);
      const xpBase = rand(22, 38) + foe.level * 10 + (foe.kind === 'boss' ? 55 : 0);
      rewards.gold = Math.round(goldBase * (1 + getDerivedStats().goldPct));
      rewards.xp = Math.round(xpBase);
      rewards.iron = rand(0, 2 + zone.id);
      rewards.wood = rand(0, 1 + Math.floor(zone.id / 2));
      rewards.essence = Math.random() < 0.32 + zone.id * 0.02 ? rand(1, 2 + Math.floor(zone.id / 2)) : 0;
      rewards.keys = context.mode === 'dungeon' && Math.random() < 0.13 ? 1 : 0;
      rewards.potions = Math.random() < 0.08 ? 1 : 0;

      const dropChance = 0.26 + getLootLuck() * 0.7 + (foe.kind === 'elite' ? 0.10 : 0) + (foe.kind === 'boss' ? 0.16 : 0) + (context.mode === 'dungeon' ? 0.10 : 0);
      if (Math.random() < dropChance) {
        const rarityRoll = Math.random() - getLootLuck() * 0.32 - zone.id * 0.01 - (foe.kind === 'elite' ? 0.015 : 0) - (foe.kind === 'boss' ? 0.04 : 0);
        let forcedRarity = null;
        if ((foe.kind === 'boss' || zone.id >= 5) && rarityRoll < 0.0025) forcedRarity = 'mythic';
        else if ((foe.kind === 'elite' || foe.kind === 'boss' || zone.id >= 4) && rarityRoll < 0.013) forcedRarity = 'legendary';
        else if (rarityRoll < 0.06) forcedRarity = 'epic';
        else if (rarityRoll < 0.19) forcedRarity = 'rare';
        drop = makeItem(pick(SLOT_ORDER), foe.level, forcedRarity);
        acquireItem(drop);
      }

      grantRewards(rewards, `Botín de ${foe.name}`);
      state.stats.kills += 1;
      if (context.mode === 'arena') state.stats.wins += 1;
      if (context.mode === 'dungeon') state.stats.dungeons += 1;
      if (foe.kind === 'elite') state.stats.elites += 1;
      if (foe.kind === 'boss') state.player.highestDungeonFloor = Math.max(state.player.highestDungeonFloor, context.floor || state.player.highestDungeonFloor);
      trackQuest('kills', 1);
      if (context.mode === 'arena') trackQuest('wins', 1);
      if (context.mode === 'dungeon') trackQuest('dungeons', 1);
      if (foe.kind === 'elite') trackQuest('elites', 1);
      addJournal('⚔️', `Victoria contra <b>${foe.name}</b>. ${summarizeReward(rewards)}${drop ? ` · Botín: <span class="rarity-${drop.rarity}">${drop.name}</span>` : ''}`);
      toast(`Victoria sobre ${foe.name}`, 'success');
    } else {
      if (context.mode === 'arena') state.stats.losses += 1;
      state.player.gold = Math.max(0, state.player.gold - rand(10, 25));
      addJournal('💀', `Has sido derrotado por <b>${foe.name}</b>. La multitud te abuchea.`);
      toast(`Derrota contra ${foe.name}`, 'danger');
    }

    state.player.title = currentRank().title;
    checkAchievements();

    state.combatHistory.unshift({
      id: uid(),
      ts: Date.now(),
      title: `${victory ? 'Victoria' : 'Derrota'} vs ${foe.name}`,
      result: victory ? 'victory' : 'defeat',
      enemy: foe.name,
      zone: ZONES[foe.zoneId].name,
      log,
      rewards,
      drop,
    });
    state.combatHistory = state.combatHistory.slice(0, 15);

    state.ui.modal = {
      type: 'combat',
      title: `${victory ? 'Victoria' : 'Derrota'} — ${foe.name}`,
      content: `
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Resultado</div>
              <div class="text-xl font-black ${victory ? 'text-emerald-300' : 'text-rose-300'}">${victory ? 'Has ganado' : 'Has perdido'}</div>
              <div class="text-sm text-slate-300/75 mt-1">${summarizeReward(rewards)}${drop ? ` · Botín: <span class="rarity-${drop.rarity}">${drop.name}</span>` : ''}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado final</div>
              <div class="text-lg font-black text-white">${fmt(state.player.hp)} HP restantes</div>
              <div class="text-sm text-slate-300/75 mt-1">${foe.name} ${victory ? 'cayó derrotado' : 'sobrevivió al duelo'}.</div>
            </div>
          </div>
          <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro de combate</div>
            <div class="space-y-2 text-sm text-slate-100/90">${log.map(line => `<div class="leading-relaxed">${line}</div>`).join('')}</div>
          </div>
        </div>
      `
    };
  }


  function acquireItem(item) {
    if (!item) return;
    if (state.player.inventory.length >= maxInventory()) {
      const fallbackGold = Math.round(item.value * 0.45);
      state.player.gold += fallbackGold;
      state.stats.earnedGold += fallbackGold;
      addJournal('📦', `Inventario lleno. <span class="rarity-${item.rarity}">${item.name}</span> se convierte en ${fallbackGold} de oro.`);
      trackQuest('earnGold', fallbackGold);
      return;
    }
    state.player.inventory.push(item);
    state.player.inventory.sort((a, b) => (rarityDef(b.rarity).value + b.score) - (rarityDef(a.rarity).value + a.score));
    if (item.rarity === 'legendary' || item.rarity === 'mythic') state.stats.legendaryFound += 1;
    checkAchievements();
  }

  function removeInventoryItem(itemId) {
    state.player.inventory = state.player.inventory.filter(i => i.id !== itemId);
  }

  function getInventoryItem(itemId) {
    return state.player.inventory.find(i => i.id === itemId);
  }

  function equipItem(itemId) {
    const item = getInventoryItem(itemId);
    if (!item) return;
    const slot = item.slot;
    const equipped = state.player.equipment[slot];
    state.player.equipment[slot] = item;
    removeInventoryItem(itemId);
    if (equipped) state.player.inventory.push(equipped);
    addJournal('🧷', `Equipas <span class="rarity-${item.rarity}">${item.name}</span>.`);
  }

  function unequipItem(slot) {
    const item = state.player.equipment[slot];
    if (!item || state.player.inventory.length >= maxInventory()) {
      toast('No hay espacio en el inventario', 'danger');
      return;
    }
    state.player.inventory.push(item);
    state.player.equipment[slot] = null;
    addJournal('🎒', `Guardas ${item.name} en el inventario.`);
  }

  function sellItem(itemId) {
    const item = getInventoryItem(itemId);
    if (!item) return;
    const gain = Math.round(item.value * 0.65);
    state.player.gold += gain;
    state.stats.earnedGold += gain;
    trackQuest('earnGold', gain);
    removeInventoryItem(itemId);
    addJournal('💰', `Vendes ${item.name} por ${gain} de oro.`);
  }

  function salvageItem(itemId) {
    const item = getInventoryItem(itemId);
    if (!item) return;
    const rarity = rarityDef(item.rarity);
    const iron = Math.max(1, Math.round(item.level / 3 + rarity.affixes));
    const wood = Math.max(0, Math.round(rarity.affixes / 2));
    const essence = item.rarity === 'rare' ? 1 : item.rarity === 'epic' ? 2 : item.rarity === 'legendary' ? 4 : item.rarity === 'mythic' ? 6 : 0;
    state.player.iron += iron;
    state.player.wood += wood;
    state.player.essence += essence;
    state.stats.salvaged += 1;
    trackQuest('salvaged', 1);
    removeInventoryItem(itemId);
    addJournal('♻️', `Reciclas ${item.name}: +${iron} hierro, +${wood} madera${essence ? `, +${essence} esencia` : ''}.`);
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
    const cost = 90 + state.player.level * 12;
    if (forcePaid) {
      if (state.player.gold < cost) {
        toast('No tienes oro suficiente para refrescar', 'danger');
        return;
      }
      state.player.gold -= cost;
    }
    state.market.items = generateMarket(state.player.level);
    state.market.lastRefresh = Date.now();
    addJournal('🛒', `El mercado renueva su inventario${forcePaid ? ` por ${cost} de oro` : ''}.`);
  }

  function buyMarketItem(itemId) {
    const item = state.market.items.find(i => i.id === itemId);
    if (!item) return;
    if (state.player.gold < item.price) {
      toast('Oro insuficiente', 'danger');
      return;
    }
    if (state.player.inventory.length >= maxInventory()) {
      toast('Inventario lleno', 'danger');
      return;
    }
    state.player.gold -= item.price;
    const bought = clone(item);
    bought.id = uid();
    acquireItem(bought);
    state.market.items = state.market.items.filter(i => i.id !== itemId);
    addJournal('🛍️', `Compras ${item.name} por ${item.price} de oro.`);
  }

  function buyResource(kind) {
    const catalog = {
      potion: { price: 120, reward: { potions: 1 }, label: 'Poción' },
      key: { price: 180, reward: { keys: 1 }, label: 'Llave de mazmorra' },
      essence: { price: 140, reward: { essence: 1 }, label: 'Esencia' },
      food: { price: 65, reward: { food: 2 }, label: 'Comida' },
    };
    const entry = catalog[kind];
    if (!entry) return;
    if (state.player.gold < entry.price) {
      toast('Oro insuficiente', 'danger');
      return;
    }
    state.player.gold -= entry.price;
    grantRewards(entry.reward, entry.label);
  }

  function forgeItem(slot, tier = 'normal') {
    const costs = tier === 'premium'
      ? { gold: 260, iron: 12, wood: 7, essence: 3 }
      : { gold: 140, iron: 8, wood: 4, essence: 1 };
    if (state.player.gold < costs.gold || state.player.iron < costs.iron || state.player.wood < costs.wood || state.player.essence < costs.essence) {
      toast('Te faltan materiales', 'danger');
      return;
    }
    if (state.player.inventory.length >= maxInventory()) {
      toast('Inventario lleno', 'danger');
      return;
    }
    state.player.gold -= costs.gold;
    state.player.iron -= costs.iron;
    state.player.wood -= costs.wood;
    state.player.essence -= costs.essence;
    let forcedRarity = null;
    if (tier === 'premium') {
      const premiumRoll = Math.random() - Math.min(0.06, state.player.level * 0.0015);
      if (state.player.level >= 22 && premiumRoll < 0.025) forcedRarity = 'legendary';
      else if (premiumRoll < 0.26) forcedRarity = 'epic';
      else forcedRarity = 'rare';
    }
    const item = makeItem(slot, state.player.level + rand(0, 2), forcedRarity, null, tier === 'premium' ? 1 : 0);
    acquireItem(item);
    state.stats.crafted += 1;
    trackQuest('crafts', 1);
    addJournal('🔨', `Forjas ${item.name}.`);
    toast(`Nuevo objeto: ${item.name}`, 'gold');
  }

  function upgradeEquipped(slot) {
    const item = state.player.equipment[slot];
    if (!item) {
      toast('No tienes ese hueco equipado', 'danger');
      return;
    }
    if ((item.upgrade || 0) >= 10) {
      toast('Ese objeto ya está al máximo', 'cyan');
      return;
    }
    const rarity = rarityDef(item.rarity);
    const goldCost = Math.round(90 + item.level * 18 + item.upgrade * 65 + rarity.value * 0.4);
    const ironCost = Math.max(2, Math.round(3 + item.upgrade * 1.4 + rarity.affixes));
    const essenceCost = item.upgrade >= 6 ? 1 + Math.floor(item.upgrade / 3) : 0;
    if (state.player.gold < goldCost || state.player.iron < ironCost || state.player.essence < essenceCost) {
      toast('No tienes materiales suficientes', 'danger');
      return;
    }
    state.player.gold -= goldCost;
    state.player.iron -= ironCost;
    state.player.essence -= essenceCost;
    item.upgrade += 1;
    item.score = computeItemScore(item);
    state.stats.crafted += 1;
    trackQuest('crafts', 1);
    addJournal('⚒️', `Mejoras ${item.name} a +${item.upgrade}.`);
  }

  function rerollItem(itemId) {
    const item = getInventoryItem(itemId) || Object.values(state.player.equipment).find(i => i && i.id === itemId);
    if (!item) return;
    const cost = { gold: 180, essence: 2 };
    if (state.player.gold < cost.gold || state.player.essence < cost.essence) {
      toast('Te faltan recursos para retemplar', 'danger');
      return;
    }
    state.player.gold -= cost.gold;
    state.player.essence -= cost.essence;
    const rerolled = makeItem(item.slot, Math.max(item.level, state.player.level), item.rarity, item.baseName);
    item.stats = rerolled.stats;
    item.affixes = rerolled.affixes;
    item.name = rerolled.name;
    item.score = computeItemScore(item);
    addJournal('🌀', `Retemplas ${item.baseName} y nace ${item.name}.`);
  }


  function startJob(id) {
    const job = JOBS.find(j => j.id === id);
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

  function completeJob(silent = false) {
    if (!state.timers.job) return;
    const job = state.timers.job;
    state.timers.job = null;
    grantRewards(job.reward, `Trabajo terminado — ${job.name}`);
    if (!silent) toast(`Trabajo completado: ${job.name}`, 'success');
  }

  function startExpedition(zoneId, durationSec) {
    const zone = ZONES.find(z => z.id === zoneId);
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

  function completeExpedition(silent = false) {
    if (!state.timers.expedition) return;
    const exp = state.timers.expedition;
    state.timers.expedition = null;
    const zone = ZONES.find(z => z.id === exp.zoneId) || ZONES[0];
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

    if (Math.random() < 0.55 + zone.id * 0.03) {
      const drop = makeItem(pick(SLOT_ORDER), state.player.level + zone.id, Math.random() < 0.12 ? 'epic' : null);
      acquireItem(drop);
      addJournal('🎒', `Encuentras <span class="rarity-${drop.rarity}">${drop.name}</span> en la expedición.`);
    }
    if (!silent) toast(`Expedición completada: ${zone.name}`, 'success');
  }

  function resolveFinishedTimers(now = Date.now(), silent = false) {
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

  function fightArena(kind = 'normal') {
    const zone = zoneForPlayer();
    const staminaCost = zone.staminaCost + (kind === 'elite' ? 1 : 0);
    if (state.player.stamina < staminaCost || state.player.energy < zone.energyCost) {
      toast('No tienes energía o aguante suficiente', 'danger');
      return;
    }
    state.player.stamina -= staminaCost;
    state.player.energy -= zone.energyCost;
    const enemy = makeEnemy(zone, kind);
    runCombat(enemy, { mode: 'arena' });
  }

  function arenaBlitz(count = 3) {
    const summaries = [];
    for (let i = 0; i < count; i++) {
      const zone = zoneForPlayer();
      if (state.player.stamina < zone.staminaCost || state.player.energy < zone.energyCost || state.player.hp < getDerivedStats().maxHp * 0.2) break;
      state.player.stamina -= zone.staminaCost;
      state.player.energy -= zone.energyCost;
      const enemy = makeEnemy(zone, 'normal', i);
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
      makeEnemy(zone, 'normal', floor * 0.8),
      makeEnemy(zone, 'normal', floor * 0.85),
      makeEnemy(zone, 'elite', floor * 0.9),
      makeEnemy(zone, 'boss', floor),
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
    toast(`Mascota obtenida: ${pet.name}`, 'violet');
  }

  function feedPet() {
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
    if (state.player.relicDust <= 0) {
      toast('No tienes polvo de reliquia', 'danger');
      return;
    }
    if (!(point in state.player.relics)) return;
    state.player.relicDust -= 1;
    state.player.relics[point] += 1;
    addJournal('🗿', `Inviertes una reliquia en ${point}.`);
  }

  function ascend() {
    if (state.player.level < 20 && state.player.highestDungeonFloor < 8) {
      toast('Necesitas nivel 20 o piso 8 de mazmorra', 'danger');
      return;
    }
    if (!window.confirm('Ascender reinicia nivel, equipo, inventario y recursos comunes, pero te da Polvo de Reliquia. ¿Continuar?')) return;

    const rewardDust = 3 + Math.floor(state.player.level / 8) + Math.floor(state.player.highestDungeonFloor / 4);
    const keepRelics = clone(state.player.relics);
    const keepDust = state.player.relicDust + rewardDust;
    const ascensions = state.player.ascension + 1;

    const next = makeDefaultState();
    next.player.relics = keepRelics;
    next.player.relicDust = keepDust;
    next.player.ascension = ascensions;
    next.player.shards = 2;
    next.player.gold = 320;

    replaceState(next);
    normalizeState();
    state.player.title = currentRank().title;
    addJournal('🔱', `Has ascendido. Obtienes ${rewardDust} de Polvo de Reliquia.`);
    checkAchievements();
    toast(`Ascensión completada (+${rewardDust} reliquias)`, 'gold');
  }

  function trackQuest(type, amount) {
    state.quests.forEach((quest) => {
      if (quest.claimed || quest.type !== type) return;
      quest.progress += amount;
      if (quest.progress >= quest.target) {
        quest.progress = quest.target;
        quest.completed = true;
      }
    });
    if (type === 'crafts') state.stats.crafted += 0;
    checkAchievements();
  }

  function claimQuest(questId) {
    const quest = state.quests.find(q => q.id === questId);
    if (!quest || !quest.completed || quest.claimed) return;
    quest.claimed = true;
    grantRewards(quest.reward, `Misión: ${quest.title}`);
    state.stats.questsCompleted += 1;
    addJournal('📜', `Misión completada: <b>${quest.title}</b>.`);
    if (state.quests.every(q => q.claimed)) {
      state.quests = defaultQuests(state.player.level);
      addJournal('🪄', 'Se generan nuevos contratos en el tablón.');
    }
    checkAchievements();
  }

  function rerollQuests() {
    const cost = 140 + state.player.level * 12;
    if (state.player.gold < cost) {
      toast('Oro insuficiente para renovar misiones', 'danger');
      return;
    }
    state.player.gold -= cost;
    state.quests = defaultQuests(state.player.level);
    addJournal('📌', `Renuevas el tablón de contratos por ${cost} de oro.`);
  }

  function achievementProgress(achievement) {
    const lookup = {
      kills: state.stats.kills,
      wins: state.stats.wins,
      questsCompleted: state.stats.questsCompleted,
      highestDungeonFloor: state.player.highestDungeonFloor,
      level: state.player.level,
      legendaryFound: state.stats.legendaryFound,
      guildTotal: guildTotal(),
      ascension: state.player.ascension,
    };
    return Math.min(achievement.target, lookup[achievement.type] || 0);
  }

  function checkAchievements() {
    ACHIEVEMENTS.forEach((achievement) => {
      if (state.claimedAchievements.includes(achievement.id)) return;
      const progress = achievementProgress(achievement);
      if (progress >= achievement.target) {
        state.claimedAchievements.push(achievement.id);
        grantRewards(achievement.reward, `Logro: ${achievement.title}`);
        addJournal('🏆', `Logro desbloqueado: <b>${achievement.title}</b>.`);
        toast(`Logro desbloqueado: ${achievement.title}`, 'gold');
      }
    });
  }

  function upgradeGuild(building) {
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
    addJournal('🏛️', `Mejoras ${building} del gremio al nivel ${levels[building]}.`);
    checkAchievements();
  }

  function autoManage() {
    const junk = state.player.inventory.filter(i => i.rarity === 'common');
    if (!junk.length) {
      toast('No hay chatarra común que vender', 'cyan');
      return;
    }
    let total = 0;
    junk.forEach((item) => {
      total += Math.round(item.value * 0.55);
    });
    state.player.inventory = state.player.inventory.filter(i => i.rarity !== 'common');
    state.player.gold += total;
    state.stats.earnedGold += total;
    trackQuest('earnGold', total);
    addJournal('🧹', `Vendes automáticamente ${junk.length} objetos comunes por ${total} de oro.`);
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
    acquireItem,
    removeInventoryItem,
    getInventoryItem,
    equipItem,
    unequipItem,
    sellItem,
    salvageItem,
    usePotion,
    claimDaily,
    trainAttribute,
    upgradeSkill,
    toggleActiveSkill,
    refreshMarket,
    buyMarketItem,
    buyResource,
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
  };
})();
