export function createProgressionDomain(deps) {
  const {
    RANKS,
    ACHIEVEMENTS,
    clamp,
    clone,
    defaultQuests,
    makeDefaultState,
  } = deps;

  function currentRank(state, guildTotal) {
    const score = state.player.level * 14
      + state.stats.wins * 4
      + state.player.highestDungeonFloor * 10
      + guildTotal() * 8
      + state.player.ascension * 60;
    let rank = RANKS[0];
    RANKS.forEach((r) => {
      if (score >= r.min) rank = r;
    });
    return rank;
  }

  function gainXp(state, amount, ctx) {
    const {
      xpNeeded,
      ensureUnlockedSkills,
      getDerivedStats,
      currentRank,
      addJournal,
      toast,
    } = ctx;
    if (!amount) return;
    state.player.xp += amount;
    let ding = 0;
    while (state.player.xp >= xpNeeded(state.player.level)) {
      state.player.xp -= xpNeeded(state.player.level);
      state.player.level += 1;
      state.player.attributePoints += 4;
      state.player.skillPoints += 1;
      ding += 1;
      ensureUnlockedSkills((skill) => {
        addJournal('✨', `Has desbloqueado la habilidad <b>${skill.name}</b>.`);
        toast(`Habilidad desbloqueada: ${skill.name}`, 'violet');
      });
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

  function trackQuest(state, type, amount, checkAchievements) {
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

  function claimQuest(state, questId, ctx) {
    const { grantRewards, addJournal, checkAchievements } = ctx;
    const quest = state.quests.find((q) => q.id === questId);
    if (!quest || !quest.completed || quest.claimed) return;
    quest.claimed = true;
    grantRewards(quest.reward, `Misión: ${quest.title}`);
    state.stats.questsCompleted += 1;
    addJournal('📜', `Misión completada: <b>${quest.title}</b>.`);
    if (state.quests.every((q) => q.claimed)) {
      state.quests = defaultQuests(state.player.level);
      addJournal('🪄', 'Se generan nuevos contratos en el tablón.');
    }
    checkAchievements();
  }

  function rerollQuests(state, ctx) {
    const { toast, addJournal } = ctx;
    const cost = 140 + state.player.level * 12;
    if (state.player.gold < cost) {
      toast('Oro insuficiente para renovar misiones', 'danger');
      return;
    }
    state.player.gold -= cost;
    state.quests = defaultQuests(state.player.level);
    addJournal('📌', `Renuevas el tablón de contratos por ${cost} de oro.`);
  }

  function achievementProgress(state, achievement, guildTotal) {
    const lookup = {
      kills: state.stats.kills,
      wins: state.stats.wins,
      questsCompleted: state.stats.questsCompleted,
      highestDungeonFloor: state.player.highestDungeonFloor,
      level: state.player.level,
      legendaryFound: state.stats.legendaryFound,
      mythicFound: state.stats.mythicFound,
      ascendantFound: state.stats.ascendantFound,
      guildTotal: guildTotal(),
      ascension: state.player.ascension,
    };
    return Math.min(achievement.target, lookup[achievement.type] || 0);
  }

  function checkAchievements(state, ctx) {
    const { grantRewards, addJournal, toast, guildTotal } = ctx;
    ACHIEVEMENTS.forEach((achievement) => {
      if (state.claimedAchievements.includes(achievement.id)) return;
      const progress = achievementProgress(state, achievement, guildTotal);
      if (progress >= achievement.target) {
        state.claimedAchievements.push(achievement.id);
        grantRewards(achievement.reward, `Logro: ${achievement.title}`);
        addJournal('🏆', `Logro desbloqueado: <b>${achievement.title}</b>.`);
        toast(`Logro desbloqueado: ${achievement.title}`, 'gold');
      }
    });
  }

  function spendRelic(state, point, ctx) {
    const { toast, addJournal } = ctx;
    if (state.player.relicDust <= 0) {
      toast('No tienes polvo de reliquia', 'danger');
      return;
    }
    if (!(point in state.player.relics)) return;
    state.player.relicDust -= 1;
    state.player.relics[point] += 1;
    addJournal('🗿', `Inviertes una reliquia en ${point}.`);
  }

  function ascend(state, ctx) {
    const {
      toast,
      confirmAscend,
      replaceState,
      normalizeState,
      currentRank,
      addJournal,
      checkAchievements,
    } = ctx;

    if (state.player.level < 20 && state.player.highestDungeonFloor < 8) {
      toast('Necesitas nivel 20 o piso 8 de mazmorra', 'danger');
      return;
    }
    if (!confirmAscend()) return;

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

  return {
    currentRank,
    gainXp,
    trackQuest,
    claimQuest,
    rerollQuests,
    achievementProgress,
    checkAchievements,
    spendRelic,
    ascend,
  };
}
