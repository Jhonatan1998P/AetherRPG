(() => {
  const { RARITIES, ITEM_BASES } = window.AetherConfig;
  let uidCounter = 1;
  const $ = (id) => document.getElementById(id);
  const RARITY_SORTED = [...RARITIES].sort((a, b) => a.order - b.order);
  const RARITY_INDEX = Object.fromEntries(RARITY_SORTED.map((rarity, index) => [rarity.key, index]));

  const clone = (v) => JSON.parse(JSON.stringify(v));

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randf = (min, max) => Math.random() * (max - min) + min;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  const uid = () => `${Date.now().toString(36)}_${(uidCounter++).toString(36)}_${rand(100, 999)}`;

  const STAT_META = {
    attack: { label: 'Ataque', tip: 'Aumenta el daño base que infliges en combate.' },
    defense: { label: 'Defensa', tip: 'Reduce parte del daño recibido en cada impacto.' },
    speed: { label: 'Velocidad', tip: 'Mejora la iniciativa y el ritmo de tus acciones.' },
    hp: { label: 'Vida máxima', tip: 'Determina la cantidad total de salud disponible.' },
    crit: { label: 'Golpe crítico', tip: 'Probabilidad de infligir daño crítico aumentado.' },
    dodge: { label: 'Esquiva', tip: 'Probabilidad de evitar por completo un golpe enemigo.' },
    block: { label: 'Bloqueo', tip: 'Probabilidad de mitigar una parte importante del daño.' },
    lifesteal: { label: 'Robo de vida', tip: 'Porcentaje del daño convertido en curación propia.' },
    attackPct: { label: 'Ataque %', tip: 'Multiplicador porcentual al ataque base.' },
    defensePct: { label: 'Defensa %', tip: 'Multiplicador porcentual a la defensa base.' },
    hpPct: { label: 'Vida %', tip: 'Multiplicador porcentual a la vida máxima.' },
    speedPct: { label: 'Velocidad %', tip: 'Multiplicador porcentual a la velocidad base.' },
    goldPct: { label: 'Oro %', tip: 'Incrementa el oro obtenido en actividades.' },
    lootLuck: { label: 'Suerte de botín', tip: 'Mejora ligeramente la calidad y la frecuencia del botín.' },
    regenPct: { label: 'Regeneración %', tip: 'Incrementa la recuperación pasiva de recursos.' },
  };

  const RARITY_META = {
    common: { name: 'Común', tone: 'text-slate-200 border-white/10 bg-white/[0.04]' },
    uncommon: { name: 'Infrecuente', tone: 'text-emerald-200 border-emerald-300/20 bg-emerald-400/10' },
    rare: { name: 'Raro', tone: 'text-sky-200 border-sky-300/24 bg-sky-400/10' },
    epic: { name: 'Épico', tone: 'text-violet-200 border-violet-300/24 bg-violet-400/10' },
    legendary: { name: 'Legendario', tone: 'text-amber-200 border-amber-300/24 bg-amber-400/10' },
    mythic: { name: 'Mítico', tone: 'text-fuchsia-200 border-fuchsia-300/24 bg-fuchsia-400/10' },
    ascendant: { name: 'Ascendente', tone: 'text-orange-100 border-orange-300/26 bg-gradient-to-r from-orange-500/20 to-rose-400/20 shadow-[0_0_18px_rgba(251,146,60,.28)]' },
  };

  const FILTER_LABELS = {
    all: 'Todo',
    weapon: 'Armas',
    offhand: 'Mano izquierda',
    helm: 'Cascos',
    chest: 'Armaduras',
    gloves: 'Guantes',
    boots: 'Botas',
    ring: 'Anillos',
    amulet: 'Amuletos',
    common: 'Común',
    uncommon: 'Infrecuente',
    rare: 'Raro',
    epic: 'Épico',
    legendary: 'Legendario',
    mythic: 'Mítico',
    ascendant: 'Ascendente',
  };

  function fmt(num, digits = 0) {
    return Number(num || 0).toLocaleString('es-ES', { maximumFractionDigits: digits });
  }

  function pct(num) {
    return `${fmt((num || 0) * 100, 1)}%`;
  }

  function escapeHtml(text = '') {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function sanitizeInlineHtml(text = '') {
    const raw = String(text);
    const tokens = [];
    let next = raw;
    const patterns = [
      /<\/?b>/gi,
      /<br\s*\/?>/gi,
      /<span class="rarity-(common|uncommon|rare|epic|legendary|mythic|ascendant)">/gi,
      /<\/span>/gi,
    ];
    patterns.forEach((pattern) => {
      next = next.replace(pattern, (match) => {
        const token = `__SAFE_HTML_${tokens.length}__`;
        tokens.push({ token, match });
        return token;
      });
    });
    next = escapeHtml(next);
    tokens.forEach(({ token, match }) => {
      next = next.replace(token, match);
    });
    return next;
  }

  function softRound(n, d = 2) {
    return Number(n.toFixed(d));
  }

  function statLabel(key) {
    return (STAT_META[key] || {}).label || key;
  }

  function statTooltip(key) {
    return (STAT_META[key] || {}).tip || '';
  }

  function rarityName(key) {
    return (RARITY_META[key] || RARITY_META.common).name;
  }

  function rarityBadge(key) {
    const meta = RARITY_META[key] || RARITY_META.common;
    return `<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.14em] ${meta.tone}">${meta.name}</span>`;
  }

  function translateFilter(key) {
    return FILTER_LABELS[key] || key;
  }

  function htmlStat(label, value, sub = '', tooltip = '') {
    const tipAttr = tooltip ? ` data-tooltip="${String(tooltip).replace(/"/g, '&quot;')}"` : '';
    return `
      <div class="stat-pill rounded-2xl px-3 py-3"${tipAttr}>
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/70">${label}</div>
        <div class="text-lg font-display font-extrabold tracking-[0.01em] text-white">${value}</div>
        ${sub ? `<div class="mt-1 text-xs leading-relaxed text-slate-300/65">${sub}</div>` : ''}
      </div>
    `;
  }

  function progressBar(value, max, classes, label, tooltip = '') {
    const pctValue = max <= 0 ? 0 : clamp((value / max) * 100, 0, 100);
    const tipAttr = tooltip ? ` data-tooltip="${String(tooltip).replace(/"/g, '&quot;')}"` : '';
    return `
      <div${tipAttr}>
        <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
          <span class="font-medium tracking-[0.01em]">${label}</span>
          <span class="font-semibold text-slate-100">${fmt(value, value % 1 ? 1 : 0)} / ${fmt(max, max % 1 ? 1 : 0)}</span>
        </div>
        <div class="bar">
          <span class="relative flex h-full rounded-full ${classes}" style="width:${pctValue}%">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
          </span>
        </div>
      </div>
    `;
  }

  function rarityDef(key) {
    return RARITY_SORTED.find((rarity) => rarity.key === key) || RARITY_SORTED[0];
  }

  function rarityOrder(key) {
    return RARITY_INDEX[key] ?? 0;
  }

  function rarityKeyByOrder(order = 0) {
    const index = clamp(Math.round(order), 0, RARITY_SORTED.length - 1);
    return RARITY_SORTED[index].key;
  }

  function nextRarityKey(key, step = 1) {
    return rarityKeyByOrder(rarityOrder(key) + step);
  }

  function weightedPick(entries, fallback = null) {
    const clean = (entries || []).filter((entry) => entry && entry.weight > 0);
    if (!clean.length) return fallback;
    const total = clean.reduce((sumValue, entry) => sumValue + entry.weight, 0);
    let roll = Math.random() * total;
    for (let i = 0; i < clean.length; i += 1) {
      roll -= clean[i].weight;
      if (roll <= 0) return clean[i].value;
    }
    return clean[clean.length - 1].value;
  }

  function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    Object.keys(source).forEach((key) => {
      const value = source[key];
      if (Array.isArray(value)) {
        target[key] = value;
      } else if (value && typeof value === 'object') {
        if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
          target[key] = {};
        }
        deepMerge(target[key], value);
      } else {
        target[key] = value;
      }
    });
    return target;
  }

  function emptyStats() {
    return {
      attack: 0,
      defense: 0,
      speed: 0,
      hp: 0,
      crit: 0,
      dodge: 0,
      block: 0,
      lifesteal: 0,
      attackPct: 0,
      defensePct: 0,
      hpPct: 0,
      speedPct: 0,
      goldPct: 0,
      lootLuck: 0,
      regenPct: 0,
    };
  }

  function addStats(into, patch) {
    Object.keys(patch || {}).forEach((key) => {
      into[key] = (into[key] || 0) + patch[key];
    });
    return into;
  }

  function localDayKey(ts = Date.now()) {
    const d = new Date(ts);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${da}`;
  }

  function timeLeft(endAt) {
    const ms = Math.max(0, endAt - Date.now());
    const sec = Math.ceil(ms / 1000);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m ? `${m}m ${String(s).padStart(2, '0')}s` : `${s}s`;
  }

  function pickRarity(level = 1, bonusLuckOrOptions = 0) {
    const options = typeof bonusLuckOrOptions === 'number'
      ? { bonusLuck: bonusLuckOrOptions }
      : (bonusLuckOrOptions || {});
    const source = options.source || 'arena';
    const bonusLuck = Math.max(0, options.bonusLuck || options.lootLuck || 0);
    const pity = options.pity || {};

    const weights = RARITY_SORTED.map((rarity) => {
      const sourceWeight = rarity.dropWeightBySource && typeof rarity.dropWeightBySource[source] === 'number'
        ? rarity.dropWeightBySource[source]
        : rarity.dropWeightBySource && typeof rarity.dropWeightBySource.arena === 'number'
          ? rarity.dropWeightBySource.arena
          : 1;
      const order = rarity.order || 0;
      const levelFactor = 1 + Math.min(0.72, Math.max(0, level - 1) * 0.011 * Math.max(0, order - 1));
      const luckFactor = 1 + (order <= 1 ? bonusLuck * 0.28 : bonusLuck * (0.72 + order * 0.28));
      const pityEpic = rarity.key === 'epic' ? Math.min(3.4, (pity.epic || 0) * 0.065) : 0;
      const pityMythic = rarity.key === 'mythic' ? Math.min(4.2, (pity.mythic || 0) * 0.052) : 0;
      const pityAscendant = rarity.key === 'ascendant' ? Math.min(1.2, (pity.ascendant || 0) * 0.02) : 0;

      let gateFactor = 1;
      if (level < 10 && order >= 3) gateFactor *= 0.4;
      if (level < 18 && order >= 4) gateFactor *= 0.35;
      if (level < 26 && order >= 5) gateFactor *= 0.22;
      if (level < 38 && order >= 6) gateFactor *= 0.08;
      if ((options.ascension || 0) <= 0 && order >= 6) gateFactor *= 0.52;

      return {
        value: rarity,
        weight: Math.max(0.0001, sourceWeight * levelFactor * (1 + pityEpic + pityMythic + pityAscendant) * gateFactor * Math.max(0.2, luckFactor)),
      };
    });

    return weightedPick(weights, rarityDef('common')) || rarityDef('common');
  }

  function findBaseItem(slot, name) {
    return (ITEM_BASES[slot] || []).find(b => b.name === name) || pick(ITEM_BASES[slot] || []);
  }

  function scaledStatValue(base, level) {
    return base + Math.max(0, Math.floor(level / 4)) * 0.85;
  }

  window.AetherUtils = {
    $,
    clone,
    rand,
    randf,
    pick,
    clamp,
    sum,
    uid,
    fmt,
    pct,
    escapeHtml,
    sanitizeInlineHtml,
    softRound,
    statLabel,
    statTooltip,
    rarityName,
    rarityBadge,
    translateFilter,
    htmlStat,
    progressBar,
    rarityDef,
    rarityOrder,
    rarityKeyByOrder,
    nextRarityKey,
    weightedPick,
    deepMerge,
    emptyStats,
    addStats,
    localDayKey,
    timeLeft,
    pickRarity,
    findBaseItem,
    scaledStatValue,
  };
})();
