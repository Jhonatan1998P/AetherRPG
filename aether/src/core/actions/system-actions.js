export const SYSTEM_ACTION_REGIONS = {
  setZone: ['hud', 'content'],
  fightArena: ['hud', 'content'],
  arenaBlitz: ['hud', 'content', 'modal'],
  runDungeon: ['hud', 'content', 'modal'],
  startExpedition: ['hud', 'content'],
  startJob: ['hud', 'content'],
  claimQuest: ['hud', 'content'],
  rerollQuests: ['hud', 'content'],
  usePotion: ['hud', 'content'],
  autoHeal: ['hud', 'content'],
  claimDaily: ['hud', 'content'],
  buyMarketItem: ['hud', 'content'],
  buyResource: ['hud', 'content'],
  equipItem: ['hud', 'content'],
  unequipItem: ['hud', 'content'],
  sellItem: ['hud', 'content'],
  salvageItem: ['hud', 'content'],
  forgeItem: ['hud', 'content'],
  upgradeEquipped: ['hud', 'content'],
  rerollItem: ['hud', 'content'],
  upgradeGuild: ['hud', 'content'],
  trainAttribute: ['hud', 'content'],
  upgradeSkill: ['hud', 'content'],
  toggleActiveSkill: ['hud', 'content'],
  hatchPet: ['hud', 'content'],
  feedPet: ['hud', 'content'],
  releasePet: ['hud', 'content'],
  spendRelic: ['hud', 'content'],
  ascend: ['hud', 'content'],
  refreshMarket: ['hud', 'content'],
  autoManage: ['hud', 'content'],
};

export function attachSystemActions(game, deps) {
  const {
    systems,
    mutate,
    afterAction,
  } = deps;

  Object.entries(SYSTEM_ACTION_REGIONS).forEach(([name, regions]) => {
    game[name] = (...args) => {
      let result;
      mutate(`systems/${name}`, () => {
        result = systems[name](...args);
      }, { source: 'systems' });
      afterAction(regions);
      return result;
    };
  });

  return game;
}
