import { createCombatDomain } from '../../features/gameplay/domain/combat.js';
import { createEconomyDomain } from '../../features/gameplay/domain/economy.js';
import { createActivitiesDomain } from '../../features/gameplay/domain/activities.js';
import { createProgressionDomain } from '../../features/gameplay/domain/progression.js';

(() => {
  const { SLOT_ORDER, SLOT_NAMES, RANKS, ZONES, JOBS, PETS, SKILLS, ACHIEVEMENTS } = window.AetherConfig;
  const { $, clone, rand, randf, pick, clamp, sum, uid, fmt, pct, softRound, localDayKey, timeLeft, rarityDef, sanitizeInlineHtml } = window.AetherUtils;
  const { state, replaceState, makeDefaultState, normalizeState, makeItem, scaleItemStats, computeItemScore, xpNeeded, defaultQuests, generateMarket, maxInventory, guildTotal, getPetData, getDerivedStats, getLootLuck, ensureUnlockedSkills, saveGame } = window.AetherModel;

  const combatDomain = createCombatDomain({
    SKILLS,
    SLOT_ORDER,
    pick,
    rand,
    randf,
    clamp,
    softRound,
    uid,
  });

  const economyDomain = createEconomyDomain({
    rarityDef,
    rand,
    uid,
    clone,
    generateMarket,
    makeItem,
    computeItemScore,
  });

  const activitiesDomain = createActivitiesDomain({
    JOBS,
    ZONES,
    clone,
    rand,
    pick,
    SLOT_ORDER,
    makeItem,
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

  function difficultyMultiplier(zone, kind = 'normal') {
    return combatDomain.difficultyMultiplier({
      zone,
      kind,
      playerLevel: state.player.level || 1,
      playerAscension: state.player.ascension || 0,
      wins: state.stats && state.stats.wins ? state.stats.wins : 0,
    });
  }

  function makeEnemy(zone, kind = 'normal', extraScale = 0) {
    return combatDomain.makeEnemy({
      zone,
      kind,
      extraScale,
      playerLevel: state.player.level || 1,
      playerAscension: state.player.ascension || 0,
      wins: state.stats && state.stats.wins ? state.stats.wins : 0,
    });
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
    const statsDelta = { damageDone: 0, damageTaken: 0, crits: 0 };
    return combatDomain.actorTurn(attacker, defender, isPlayer, {
      equipment: state.player.equipment,
      skillLevels: state.player.skillLevels,
    }, statsDelta, log);
  }

  function tickCooldowns(actor) {
    return combatDomain.tickCooldowns(actor);
  }

  function runCombat(enemy, context = { mode: 'arena' }) {
    const simulation = combatDomain.runCombat({
      enemy,
      playerState: state.player,
      derivedStats: getDerivedStats(),
      zoneName: (ZONES[enemy.zoneId] && ZONES[enemy.zoneId].name) || 'Zona desconocida',
      maxTurns: 28,
    });

    const { player, foe, log, victory, statsDelta } = simulation;
    state.stats.damageDone += statsDelta.damageDone;
    state.stats.damageTaken += statsDelta.damageTaken;
    state.stats.crits += statsDelta.crits;
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
    return economyDomain.acquireItem(state, item, {
      maxInventory: maxInventory(),
      addJournal,
      trackQuest,
      checkAchievements,
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
    return economyDomain.sellItem(state, itemId, { addJournal, trackQuest });
  }

  function salvageItem(itemId) {
    return economyDomain.salvageItem(state, itemId, { addJournal, trackQuest });
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
    return economyDomain.refreshMarket(state, forcePaid, {
      toast,
      addJournal,
    });
  }

  function buyMarketItem(itemId) {
    return economyDomain.buyMarketItem(state, itemId, {
      maxInventory: maxInventory(),
      toast,
      addJournal,
      trackQuest,
      checkAchievements,
    });
  }

  function buyResource(kind) {
    return economyDomain.buyResource(state, kind, {
      toast,
      grantRewards,
    });
  }

  function forgeItem(slot, tier = 'normal') {
    return economyDomain.forgeItem(state, slot, tier, {
      maxInventory: maxInventory(),
      toast,
      addJournal,
      trackQuest,
      checkAchievements,
    });
  }

  function upgradeEquipped(slot) {
    return economyDomain.upgradeEquipped(state, slot, {
      toast,
      trackQuest,
      addJournal,
    });
  }

  function rerollItem(itemId) {
    return economyDomain.rerollItem(state, itemId, {
      toast,
      addJournal,
    });
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
    return economyDomain.autoManage(state, {
      toast,
      trackQuest,
      addJournal,
    });
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
