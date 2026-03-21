export function createEconomyDomain(deps) {
  const { rarityDef, rand, uid, clone, generateMarket, makeItem, computeItemScore } = deps;

  function hasInventorySpace(state, maxInventory) {
    return state.player.inventory.length < maxInventory;
  }

  function removeInventoryItem(state, itemId) {
    state.player.inventory = state.player.inventory.filter((i) => i.id !== itemId);
  }

  function getInventoryItem(state, itemId) {
    return state.player.inventory.find((i) => i.id === itemId);
  }

  function acquireItem(state, item, ctx) {
    if (!item) return;
    const { maxInventory, addJournal, trackQuest, checkAchievements } = ctx;
    if (!hasInventorySpace(state, maxInventory)) {
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

  function equipItem(state, itemId, ctx) {
    const { addJournal } = ctx;
    const item = getInventoryItem(state, itemId);
    if (!item) return;
    const slot = item.slot;
    const equipped = state.player.equipment[slot];
    state.player.equipment[slot] = item;
    removeInventoryItem(state, itemId);
    if (equipped) state.player.inventory.push(equipped);
    addJournal('🧷', `Equipas <span class="rarity-${item.rarity}">${item.name}</span>.`);
  }

  function unequipItem(state, slot, ctx) {
    const { maxInventory, addJournal, toast } = ctx;
    const item = state.player.equipment[slot];
    if (!item || !hasInventorySpace(state, maxInventory)) {
      toast('No hay espacio en el inventario', 'danger');
      return;
    }
    state.player.inventory.push(item);
    state.player.equipment[slot] = null;
    addJournal('🎒', `Guardas ${item.name} en el inventario.`);
  }

  function sellItem(state, itemId, ctx) {
    const { trackQuest, addJournal } = ctx;
    const item = getInventoryItem(state, itemId);
    if (!item) return;
    const gain = Math.round(item.value * 0.65);
    state.player.gold += gain;
    state.stats.earnedGold += gain;
    trackQuest('earnGold', gain);
    removeInventoryItem(state, itemId);
    addJournal('💰', `Vendes ${item.name} por ${gain} de oro.`);
  }

  function salvageItem(state, itemId, ctx) {
    const { trackQuest, addJournal } = ctx;
    const item = getInventoryItem(state, itemId);
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
    removeInventoryItem(state, itemId);
    addJournal('♻️', `Reciclas ${item.name}: +${iron} hierro, +${wood} madera${essence ? `, +${essence} esencia` : ''}.`);
  }

  function refreshMarket(state, forcePaid, ctx) {
    const { toast, addJournal } = ctx;
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

  function buyMarketItem(state, itemId, ctx) {
    const { maxInventory, toast, addJournal, trackQuest, checkAchievements } = ctx;
    const item = state.market.items.find((i) => i.id === itemId);
    if (!item) return;
    if (state.player.gold < item.price) {
      toast('Oro insuficiente', 'danger');
      return;
    }
    if (!hasInventorySpace(state, maxInventory)) {
      toast('Inventario lleno', 'danger');
      return;
    }
    state.player.gold -= item.price;
    const bought = clone(item);
    bought.id = uid();
    acquireItem(state, bought, { maxInventory, addJournal, trackQuest, checkAchievements });
    state.market.items = state.market.items.filter((i) => i.id !== itemId);
    addJournal('🛍️', `Compras ${item.name} por ${item.price} de oro.`);
  }

  function buyResource(state, kind, ctx) {
    const { toast, grantRewards } = ctx;
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

  function forgeItem(state, slot, tier, ctx) {
    const { maxInventory, toast, addJournal, trackQuest, checkAchievements } = ctx;
    const costs = tier === 'premium'
      ? { gold: 260, iron: 12, wood: 7, essence: 3 }
      : { gold: 140, iron: 8, wood: 4, essence: 1 };
    if (state.player.gold < costs.gold || state.player.iron < costs.iron || state.player.wood < costs.wood || state.player.essence < costs.essence) {
      toast('Te faltan materiales', 'danger');
      return;
    }
    if (!hasInventorySpace(state, maxInventory)) {
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
    acquireItem(state, item, { maxInventory, addJournal, trackQuest, checkAchievements });
    state.stats.crafted += 1;
    trackQuest('crafts', 1);
    addJournal('🔨', `Forjas ${item.name}.`);
    ctx.toast(`Nuevo objeto: ${item.name}`, 'gold');
  }

  function upgradeEquipped(state, slot, ctx) {
    const { toast, trackQuest, addJournal } = ctx;
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

  function rerollItem(state, itemId, ctx) {
    const { toast, addJournal } = ctx;
    const item = getInventoryItem(state, itemId) || Object.values(state.player.equipment).find((i) => i && i.id === itemId);
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

  function autoManage(state, ctx) {
    const { toast, trackQuest, addJournal } = ctx;
    const junk = state.player.inventory.filter((i) => i.rarity === 'common');
    if (!junk.length) {
      toast('No hay chatarra común que vender', 'cyan');
      return;
    }
    let total = 0;
    junk.forEach((item) => {
      total += Math.round(item.value * 0.55);
    });
    state.player.inventory = state.player.inventory.filter((i) => i.rarity !== 'common');
    state.player.gold += total;
    state.stats.earnedGold += total;
    trackQuest('earnGold', total);
    addJournal('🧹', `Vendes automáticamente ${junk.length} objetos comunes por ${total} de oro.`);
  }

  return {
    acquireItem,
    removeInventoryItem,
    getInventoryItem,
    equipItem,
    unequipItem,
    sellItem,
    salvageItem,
    refreshMarket,
    buyMarketItem,
    buyResource,
    forgeItem,
    upgradeEquipped,
    rerollItem,
    autoManage,
  };
}
