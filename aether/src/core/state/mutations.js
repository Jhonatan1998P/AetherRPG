export function createMutationsModule(deps) {
  const {
    state,
    gameStore,
    clone,
    snapshotGameData,
    replaceState,
    normalizeState,
    createStoreMeta,
    setStoreSnapshot,
  } = deps;

  function getStoreMeta() {
    return gameStore.getState()._meta || createStoreMeta();
  }

  function setStoreMeta(patch = {}) {
    const current = gameStore.getState();
    gameStore.setState({
      ...current,
      _meta: createStoreMeta({ ...(current._meta || {}), ...patch }),
    });
    return getStoreMeta();
  }

  function commitWorkingState(metaPatch = {}, replace = true) {
    return setStoreSnapshot(state, metaPatch, replace);
  }

  function mutate(label, updater, options = {}) {
    const prev = snapshotGameData(gameStore.getState());
    try {
      replaceState(clone(prev));
      if (typeof updater === 'function') updater(state);
      if (options.normalize) normalizeState();
      const meta = getStoreMeta();
      return commitWorkingState({
        hydrated: true,
        isDirty: options.markDirty === false ? meta.isDirty : true,
        isSaving: false,
        lastMutationAt: Date.now(),
        lastMutationLabel: label || 'mutation',
        mutationCount: (meta.mutationCount || 0) + 1,
        lastSource: options.source || 'local',
      });
    } catch (err) {
      replaceState(prev);
      throw err;
    }
  }

  function subscribeStore(selector, listener, options) {
    if (typeof selector === 'function' && typeof listener === 'function') {
      return gameStore.subscribe(selector, listener, options);
    }
    return gameStore.subscribe(selector);
  }

  function selectStore(selector) {
    return typeof selector === 'function' ? selector(gameStore.getState()) : gameStore.getState();
  }

  return {
    getStoreMeta,
    setStoreMeta,
    commitWorkingState,
    mutate,
    subscribeStore,
    selectStore,
  };
}
