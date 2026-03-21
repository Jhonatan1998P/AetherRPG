export function createStateCore(deps) {
  const {
    clone,
    statsDomain,
    makeDefaultState,
    zustandVanilla,
    subscribeWithSelector,
  } = deps;

  const STATE_INTERNAL_KEYS = new Set(['_meta', 'actions']);
  const state = {};

  function createStoreMeta(patch = {}) {
    return {
      hydrated: false,
      isDirty: false,
      isSaving: false,
      lastMutationAt: 0,
      lastMutationLabel: 'bootstrap',
      mutationCount: 0,
      lastSaveAt: 0,
      saveCount: 0,
      lastSource: 'bootstrap',
      syncRevision: 0,
      ...patch,
    };
  }

  function snapshotGameData(source = null) {
    const base = source || state;
    const out = {};
    Object.keys(base || {}).forEach((key) => {
      if (!STATE_INTERNAL_KEYS.has(key)) out[key] = clone(base[key]);
    });
    return out;
  }

  function serializableState(source = null) {
    const data = snapshotGameData(source);
    if (data.ui) {
      data.ui.modal = null;
      data.ui.moreMenuOpen = false;
      data.ui.forgePreview = null;
    }
    return data;
  }

  function replaceState(next) {
    Object.keys(state).forEach((key) => delete state[key]);
    Object.assign(state, next);
    statsDomain.invalidateDerivedCache();
  }

  const gameStore = zustandVanilla.createStore(subscribeWithSelector(() => ({
    ...clone(makeDefaultState()),
    _meta: createStoreMeta(),
    actions: {},
  })));

  function syncStateFromStore() {
    replaceState(snapshotGameData(gameStore.getState()));
    return state;
  }

  function setStoreSnapshot(nextGame, metaPatch = {}, replace = true) {
    const current = gameStore.getState();
    const nextMeta = createStoreMeta({ ...(current._meta || {}), ...metaPatch });
    const nextRoot = {
      ...clone(nextGame),
      _meta: nextMeta,
      actions: current.actions || {},
    };
    gameStore.setState(nextRoot, replace);
    return syncStateFromStore();
  }

  return {
    state,
    gameStore,
    createStoreMeta,
    snapshotGameData,
    serializableState,
    replaceState,
    syncStateFromStore,
    setStoreSnapshot,
  };
}
