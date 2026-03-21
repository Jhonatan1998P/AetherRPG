export function createSelectorsModule(deps) {
  const {
    state,
    PETS,
    sum,
    statsDomain,
    scaleItemStats,
  } = deps;

  function maxInventory() {
    return 28 + state.player.guild.arsenal * 8 + state.player.ascension * 2;
  }

  function guildTotal() {
    return sum(Object.values(state.player.guild || {}));
  }

  function getPetData() {
    return PETS.find((p) => p.id === state.player.pet) || null;
  }

  function petBonus() {
    return statsDomain.petBonus(state, getPetData);
  }

  function getGuildBonus() {
    return statsDomain.getGuildBonus(state);
  }

  function getRelicBonus() {
    return statsDomain.getRelicBonus(state);
  }

  function getEquipmentBonus() {
    return statsDomain.getEquipmentBonus(state, scaleItemStats);
  }

  function getTrainingBonus() {
    return statsDomain.getTrainingBonus(state);
  }

  function getSetResonanceBonus() {
    return statsDomain.getSetResonanceBonus(state);
  }

  function getDerivedStats() {
    return statsDomain.getDerivedStats(state, {
      getPetData,
      scaleItemStats,
    });
  }

  function getLootLuck() {
    return statsDomain.getLootLuck(state, {
      getPetData,
      scaleItemStats,
    });
  }

  return {
    maxInventory,
    guildTotal,
    getPetData,
    petBonus,
    getGuildBonus,
    getRelicBonus,
    getEquipmentBonus,
    getTrainingBonus,
    getSetResonanceBonus,
    getDerivedStats,
    getLootLuck,
  };
}
