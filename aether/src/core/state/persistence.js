export function createPersistenceModule(deps) {
  const {
    STORAGE_KEY,
    state,
    makeDefaultState,
    clone,
    snapshotGameData,
    serializableState,
    replaceState,
    normalizeState,
    commitWorkingState,
    setStoreMeta,
    getStoreMeta,
  } = deps;

  function loadFromParsedState(nextState, source = 'storage') {
    replaceState(clone(nextState || makeDefaultState()));
    normalizeState();
    const now = Date.now();
    return commitWorkingState({
      hydrated: true,
      isDirty: false,
      isSaving: false,
      lastSaveAt: state.lastSave || now,
      lastSource: source,
      syncRevision: source === 'external-sync' ? getStoreMeta().syncRevision + 1 : getStoreMeta().syncRevision,
    });
  }

  function saveGame() {
    try {
      const now = Date.now();
      setStoreMeta({ isSaving: true });
      const persistable = serializableState();
      persistable.lastSave = now;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
      replaceState(snapshotGameData());
      state.lastSave = now;
      commitWorkingState({
        hydrated: true,
        isDirty: false,
        isSaving: false,
        lastSaveAt: now,
        saveCount: (getStoreMeta().saveCount || 0) + 1,
        lastSource: 'save',
      });
      return true;
    } catch (err) {
      console.warn('No se pudo guardar la partida.', err);
      setStoreMeta({ isSaving: false });
      return false;
    }
  }

  function loadGame() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return loadFromParsedState(makeDefaultState(), 'new-game');
      }
      return loadFromParsedState(JSON.parse(raw), 'storage');
    } catch (err) {
      console.warn('Guardado corrupto, creando uno nuevo.', err);
      return loadFromParsedState(makeDefaultState(), 'recovered');
    }
  }

  function syncExternalState(raw) {
    try {
      if (!raw) {
        return loadFromParsedState(makeDefaultState(), 'external-sync');
      }
      return loadFromParsedState(JSON.parse(raw), 'external-sync');
    } catch (err) {
      console.warn('No se pudo sincronizar el estado externo.', err);
      return false;
    }
  }

  function hardReset() {
    localStorage.removeItem(STORAGE_KEY);
    return loadFromParsedState(makeDefaultState(), 'reset');
  }

  return {
    loadFromParsedState,
    saveGame,
    loadGame,
    syncExternalState,
    hardReset,
  };
}
