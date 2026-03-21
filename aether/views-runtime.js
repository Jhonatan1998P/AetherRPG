(() => {
  const {
    SLOT_ORDER,
    SLOT_NAMES,
    VIEWS,
    VIEW_META,
    VIEW_GROUPS,
    MOBILE_PRIMARY_VIEWS,
    MOBILE_OVERFLOW_VIEWS,
    ZONES,
    JOBS,
    PETS,
    SKILLS,
    ACHIEVEMENTS,
  } = window.AetherConfig;

  const { fmt, pct, htmlStat, progressBar, timeLeft, rarityName, rarityBadge, translateFilter, statLabel, statTooltip } = window.AetherUtils;
  const {
    state,
    maxInventory,
    getPetData,
    getDerivedStats,
    scaleItemStats,
    xpNeeded,
    guildTotal,
    getStoreMeta,
  } = window.AetherModel;

  const {
    currentRank,
    zoneForPlayer,
    isZoneUnlocked,
    summarizeReward,
    achievementProgress,
  } = window.AetherSystems;

  const ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5.25 9.75V21h13.5V9.75"/>',
    user: '<path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M4.5 20.25a7.5 7.5 0 0 1 15 0"/>',
    backpack: '<path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M6.75 7.5h10.5A2.25 2.25 0 0 1 19.5 9.75v9A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75v-9A2.25 2.25 0 0 1 6.75 7.5Z"/><path d="M9 12.75h6"/>',
    swords: '<path d="m4 20 7-7"/><path d="m13 11 7-7"/><path d="M14.5 4.5 19.5 9.5"/><path d="m4.5 14.5 5 5"/><path d="m9 9 6 6"/>',
    compass: '<circle cx="12" cy="12" r="8.25"/><path d="m14.75 9.25-1.65 4.85-4.85 1.65 1.65-4.85 4.85-1.65Z"/>',
    castle: '<path d="M5.25 21V9l3 1.5V6l3 1.5L15 6v4.5L18 9v12"/><path d="M3.75 21h16.5"/><path d="M9.75 21v-4.5h4.5V21"/>',
    cart: '<path d="M3.75 4.5h1.5l1.8 8.1a1.5 1.5 0 0 0 1.47 1.17h7.98a1.5 1.5 0 0 0 1.47-1.17L19.5 7.5H6.3"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17.25" cy="19.5" r="1.5"/>',
    hammer: '<path d="m14.25 5.25 4.5 4.5"/><path d="m6.75 12.75 7.5-7.5 3 3-7.5 7.5"/><path d="M5.25 14.25 3.75 20.25 9.75 18.75"/>',
    shield: '<path d="M12 3.75 5.25 6v5.25c0 4.29 2.7 8.11 6.75 9.5 4.05-1.39 6.75-5.21 6.75-9.5V6L12 3.75Z"/>',
    book: '<path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5v16.5H6.75A2.25 2.25 0 0 0 4.5 21V5.25Z"/><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 1 6.75 16.5h10.5"/>',
    briefcase: '<path d="M9 6V4.875A1.875 1.875 0 0 1 10.875 3h2.25A1.875 1.875 0 0 1 15 4.875V6"/><rect x="3.75" y="6" width="16.5" height="12.75" rx="2.25"/><path d="M3.75 11.25h16.5"/>',
    paw: '<circle cx="7" cy="9" r="1.25"/><circle cx="11" cy="6.5" r="1.25"/><circle cx="15" cy="6.5" r="1.25"/><circle cx="17" cy="10" r="1.25"/><path d="M12 18c-2.7 0-4.5-1.44-4.5-3.4 0-1.75 1.2-3.35 3.06-3.35.96 0 1.62.36 1.94.72.32-.36.98-.72 1.94-.72 1.86 0 3.06 1.6 3.06 3.35C16.5 16.56 14.7 18 12 18Z"/>',
    trophy: '<path d="M8.25 4.5h7.5v2.25A3.75 3.75 0 0 1 12 10.5 3.75 3.75 0 0 1 8.25 6.75V4.5Z"/><path d="M6 4.5h2.25v2.25A3 3 0 0 1 5.25 9.75H4.5A1.5 1.5 0 0 1 3 8.25v-.75A3 3 0 0 1 6 4.5Zm12 0h-2.25v2.25A3 3 0 0 0 18.75 9.75h.75A1.5 1.5 0 0 0 21 8.25v-.75A3 3 0 0 0 18 4.5Z"/><path d="M12 10.5v4.5"/><path d="M9 21h6"/><path d="M10.5 15h3v6h-3Z"/>',
    scroll: '<path d="M8.25 4.5h8.25A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5H8.25A3.75 3.75 0 0 1 4.5 15.75V8.25A3.75 3.75 0 0 1 8.25 4.5Z"/><path d="M8.25 4.5A2.25 2.25 0 0 0 6 6.75v9A2.25 2.25 0 0 1 3.75 18H6"/><path d="M9.75 9h4.5"/><path d="M9.75 12.75h4.5"/>',
    menu: '<path d="M4.5 7.5h15"/><path d="M4.5 12h15"/><path d="M4.5 16.5h15"/>',
    flask: '<path d="M10.5 3.75h3"/><path d="M10.5 3.75v5.1l-4.95 7.74A2.25 2.25 0 0 0 7.44 20.25h9.12a2.25 2.25 0 0 0 1.89-3.66L13.5 8.85v-5.1"/><path d="M8.25 14.25h7.5"/>',
    bandage: '<path d="m8.25 8.25 7.5 7.5"/><path d="m15.75 8.25-7.5 7.5"/><rect x="4.5" y="7.5" width="15" height="9" rx="2.25" transform="rotate(-45 12 12)"/>',
    gift: '<path d="M12 21V9"/><path d="M4.5 12h15"/><rect x="4.5" y="7.5" width="15" height="12.75" rx="2.25"/><path d="M12 7.5H8.25A2.25 2.25 0 1 1 10.5 5.25c0 .83-.43 1.56-1.08 1.97"/><path d="M12 7.5h3.75A2.25 2.25 0 1 0 13.5 5.25c0 .83.43 1.56 1.08 1.97"/>',
    broom: '<path d="M14.25 4.5 19.5 9.75"/><path d="M11.25 7.5 4.5 14.25"/><path d="M4.5 14.25 9.75 19.5"/><path d="m9.75 19.5 2.25-2.25"/>',
    crown: '<path d="M4.5 18 6.75 7.5 12 12l5.25-4.5L19.5 18Z"/><path d="M4.5 18h15"/>',
    flame: '<path d="M12 21c3.31 0 6-2.46 6-5.5 0-2.17-1.13-3.7-2.8-5.25-.9-.84-1.62-1.77-2.02-2.9-.38 1.3-1.25 2.45-2.42 3.55-1.75 1.64-4.76 3.45-4.76 6.6C6 18.54 8.69 21 12 21Z"/>',
    key: '<circle cx="8.25" cy="12" r="3.75"/><path d="M12 12h8.25"/><path d="M16.5 12v2.25"/><path d="M18.75 12v1.5"/>',
    spark: '<path d="M12 3.75 13.94 9.06 19.25 11 13.94 12.94 12 18.25 10.06 12.94 4.75 11 10.06 9.06 12 3.75Z"/>',
    bolt: '<path d="M13.5 3.75 7.5 13.5h4.5l-1.5 6.75 6-9.75h-4.5L13.5 3.75Z"/>',
    dumbbell: '<path d="M4.5 9v6"/><path d="M7.5 7.5v9"/><path d="M16.5 7.5v9"/><path d="M19.5 9v6"/><path d="M7.5 12h9"/>',
    check: '<circle cx="12" cy="12" r="8.25"/><path d="m8.75 12.25 2.25 2.25 4.25-4.5"/>',
    xcircle: '<circle cx="12" cy="12" r="8.25"/><path d="m9.75 9.75 4.5 4.5"/><path d="m14.25 9.75-4.5 4.5"/>',
    skull: '<path d="M12 3.75c-4.14 0-7.5 2.86-7.5 6.75 0 2.63 1.54 4.92 3.82 6.15V19.5h1.93v-1.5h3.5v1.5h1.93v-2.85c2.28-1.23 3.82-3.52 3.82-6.15 0-3.89-3.36-6.75-7.5-6.75Z"/><circle cx="9" cy="11.25" r="1"/><circle cx="15" cy="11.25" r="1"/><path d="M10.5 14.5h3"/>',
    info: '<circle cx="12" cy="12" r="8.25"/><path d="M12 10.5v5.25"/><path d="M12 7.5h.01"/>',
    wind: '<path d="M4.5 10.5h8.25a2.25 2.25 0 1 0-2.25-2.25"/><path d="M3.75 15h12a2.25 2.25 0 1 1-2.25 2.25"/><path d="M4.5 7.5h4.5"/>',
    droplet: '<path d="M12 3.75s5.25 5.79 5.25 9A5.25 5.25 0 1 1 6.75 12.75c0-3.21 5.25-9 5.25-9Z"/>',
    box: '<path d="m4.5 7.5 7.5-3 7.5 3-7.5 3-7.5-3Z"/><path d="M4.5 7.5v9l7.5 3 7.5-3v-9"/><path d="M12 10.5v9"/>',
    coins: '<circle cx="9" cy="12" r="3.75"/><path d="M12.75 9.75A3.75 3.75 0 1 1 16.5 16.5"/>',
    recycle: '<path d="m9 4.5 2.25 2.25L9 9"/><path d="M11.25 6.75H8.1A2.85 2.85 0 0 0 5.25 9.6v.15"/><path d="m15 19.5-2.25-2.25L15 15"/><path d="M12.75 17.25h3.15a2.85 2.85 0 0 0 2.85-2.85v-.15"/><path d="m18 9-3 0"/><path d="M18 9a2.85 2.85 0 0 0-2.85-2.85H15"/>' ,
    bag: '<path d="M7.5 9V7.5a4.5 4.5 0 0 1 9 0V9"/><path d="M5.25 9h13.5l-.9 9.45A2.25 2.25 0 0 1 15.61 20.5H8.39a2.25 2.25 0 0 1-2.24-2.05L5.25 9Z"/>',
    rotate: '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4.5H15"/>',
    feather: '<path d="M19.5 4.5c-6 0-10.5 4.5-10.5 10.5v4.5"/><path d="M13.5 10.5 9 15"/><path d="M15.75 8.25 9 15"/>',
    gem: '<path d="m7.5 4.5-3 4.5 7.5 10.5L19.5 9l-3-4.5Z"/><path d="M9 4.5 12 9l3-4.5"/><path d="M4.5 9h15"/>',
    pin: '<path d="M9 4.5h6l-1.5 4.5 2.25 2.25v.75H8.25v-.75L10.5 9 9 4.5Z"/><path d="M12 12v7.5"/>'
  };

  const EMOJI_ICON_MAP = {
    '⚔️': 'swords', '⚔': 'swords', '👑': 'crown', '🔥': 'flame', '🌪️': 'spark', '🧭': 'compass', '🎒': 'backpack',
    '🏋️': 'dumbbell', '🧪': 'flask', '🩹': 'bandage', '🎁': 'gift', '🧹': 'broom', '🛒': 'cart', '⚒️': 'hammer',
    '⚒': 'hammer', '🗝️': 'key', '🗝': 'key', '✨': 'spark', '🐾': 'paw', '📋': 'scroll', '📚': 'book',
    '💼': 'briefcase', '🏆': 'trophy', '📜': 'scroll', '🛡️': 'shield', '🛡': 'shield', '👤': 'user', '◈': 'home',
    '☰': 'menu', '⚡': 'bolt', '💪': 'dumbbell', '✅': 'check', '❌': 'xcircle', '☠️': 'skull', '💨': 'wind',
    '🩸': 'droplet', '🌟': 'spark', '💀': 'skull', '📦': 'box', '💰': 'coins', '♻️': 'recycle', '♻': 'recycle',
    '📘': 'book', '🛍️': 'bag', '🛍': 'bag', '🔨': 'hammer', '🌀': 'rotate', '🧰': 'briefcase', '🏰': 'castle',
    '🪽': 'feather', '🪶': 'feather', '🗿': 'gem', '🔱': 'spark', '📌': 'pin', '🏛️': 'castle', '🏛': 'castle',
    '🏟️': 'castle', '🏟': 'castle', '🍖': 'box'
  };

  function icon(name, className = 'h-5 w-5') {
    const markup = ICONS[name] || ICONS.spark;
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="${className}" aria-hidden="true">${markup}</svg>`;
  }

  function withIcon(name, label, options = {}) {
    const {
      iconClass = 'h-4 w-4',
      wrapClass = 'inline-flex items-center gap-2',
      textClass = '',
    } = options;
    return `<span class="${wrapClass}">${icon(name, iconClass)}<span class="${textClass}">${label}</span></span>`;
  }

  function replaceEmojiIcons(input = '') {
    let output = String(input);
    Object.entries(EMOJI_ICON_MAP).forEach(([emoji, name]) => {
      output = output.split(emoji).join(icon(name, 'h-4 w-4 inline-block align-[-0.2em]'));
    });
    return output;
  }

  function stripHtml(text = '') {
    return String(text).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function escapeAttr(text = '') {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function tooltipAttr(text = '') {
    const clean = stripHtml(text);
    return clean ? `data-tooltip="${escapeAttr(clean)}"` : '';
  }

  function tooltipIcon(text = '') {
    const attrs = tooltipAttr(text);
    return attrs ? `<span tabindex="0" class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-200/80 cursor-help" ${attrs}>${icon('info', 'h-3.5 w-3.5')}</span>` : '';
  }

  function activeMeta() {
    return VIEW_META[state.currentView] || VIEW_META.resumen;
  }

  function statusChip(text, tone = '') {
    return `<span class="status-chip ${tone}">${replaceEmojiIcons(text)}</span>`;
  }

  function sectionHeader(eyebrow, title, desc = '', action = '') {
    return `
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div class="section-eyebrow">${eyebrow}</div>
          <div class="mt-1 flex items-center gap-2"><div class="section-title font-display">${title}</div>${tooltipIcon(desc || title)}</div>
          ${desc ? `<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/76">${replaceEmojiIcons(desc)}</p>` : ''}
        </div>
        ${action ? `<div class="shrink-0">${replaceEmojiIcons(action)}</div>` : ''}
      </div>
    `;
  }

  function infoCard(title, body, tone = '', tooltip = '') {
    return `
      <div class="surface-strong rounded-2xl p-4 ${tone}" ${tooltipAttr(tooltip || body)}>
        <div class="mb-2 flex items-center gap-2 font-bold font-display text-white">${replaceEmojiIcons(title)}${tooltipIcon(tooltip || body)}</div>
        <p class="text-sm text-slate-300/78 leading-relaxed">${replaceEmojiIcons(body)}</p>
      </div>
    `;
  }

  function actionButton(label, className, onClick, tooltip = '') {
    return `<button class="btn ${className}" onclick="${onClick}" ${tooltipAttr(tooltip || stripHtml(label))}>${replaceEmojiIcons(label)}</button>`;
  }

  function actionBar(actions) {
    return `
      <div class="mobile-cta-bar md:hidden">
        <div class="glass-strong rounded-[1.6rem] p-3 grid grid-cols-2 gap-2">
          ${actions.join('')}
        </div>
      </div>
    `;
  }

  function pageLead(view, badge = '', actions = '') {
    const meta = VIEW_META[view] || activeMeta();
    const group = VIEW_GROUPS.find(group => group.views.includes(view));
    const siblings = group ? group.views : [view];
    return `
      <div class="glass rounded-3xl p-5 sm:p-6">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/[.08] ring text-cyan-200">${icon(meta.icon, 'h-4 w-4')}</span>
              ${group ? group.title : 'Vista individual'}
            </div>
            <div class="flex items-center gap-2"><h2 class="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">${meta.label}</h2>${tooltipIcon(meta.desc)}</div>
            <p class="text-sm sm:text-base text-slate-300/78 mt-2 max-w-3xl">${replaceEmojiIcons(meta.desc)}</p>
            ${actions ? `<div class="hero-actions mt-4 max-w-2xl">${actions}</div>` : ''}
          </div>
          ${badge ? `<div class="glass rounded-2xl px-4 py-3 text-sm text-slate-200/90 shrink-0">${replaceEmojiIcons(badge)}</div>` : ''}
        </div>
        ${siblings.length > 1 ? `
          <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-3">Navegación relacionada</div>
            <div class="view-links">
              ${siblings.map(sibling => `
                <button class="view-chip ${state.currentView === sibling ? 'active' : ''}" onclick="game.setView('${sibling}')">
                  ${icon(VIEW_META[sibling].icon, 'h-4 w-4')}
                  <span>${VIEW_META[sibling].label}</span>
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  window.AetherViewRuntime = {
    SLOT_ORDER,
    SLOT_NAMES,
    VIEWS,
    VIEW_META,
    VIEW_GROUPS,
    MOBILE_PRIMARY_VIEWS,
    MOBILE_OVERFLOW_VIEWS,
    ZONES,
    JOBS,
    PETS,
    SKILLS,
    ACHIEVEMENTS,
    fmt,
    pct,
    htmlStat,
    progressBar,
    timeLeft,
    rarityName,
    rarityBadge,
    translateFilter,
    statLabel,
    statTooltip,
    state,
    maxInventory,
    getPetData,
    getDerivedStats,
    scaleItemStats,
    xpNeeded,
    guildTotal,
    getStoreMeta,
    currentRank,
    zoneForPlayer,
    isZoneUnlocked,
    summarizeReward,
    achievementProgress,
    icon,
    withIcon,
    replaceEmojiIcons,
    stripHtml,
    escapeAttr,
    tooltipAttr,
    tooltipIcon,
    activeMeta,
    statusChip,
    sectionHeader,
    infoCard,
    actionButton,
    actionBar,
    pageLead,
  };
})();
