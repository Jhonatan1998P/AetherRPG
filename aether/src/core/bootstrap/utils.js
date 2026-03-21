(() => {
  const { RARITIES, ITEM_BASES } = window.AetherConfig;
  let uidCounter = 1;
  const $ = (id) => document.getElementById(id);

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
      /<span class="rarity-(common|uncommon|rare|epic|legendary|mythic)">/gi,
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
    return RARITIES.find(r => r.key === key) || RARITIES[0];
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

  function pickRarity(level = 1, bonusLuck = 0) {
    const adjusted = Math.random() - Math.min(0.16, bonusLuck * 0.035) - Math.min(0.06, level * 0.0007);
    if (adjusted < 0.0012) return rarityDef('mythic');
    if (adjusted < 0.010) return rarityDef('legendary');
    if (adjusted < 0.052) return rarityDef('epic');
    if (adjusted < 0.19) return rarityDef('rare');
    if (adjusted < 0.48) return rarityDef('uncommon');
    return rarityDef('common');
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
