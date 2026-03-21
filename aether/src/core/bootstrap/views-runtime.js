import { icon, withIcon, replaceEmojiIcons, stripHtml, escapeAttr, tooltipAttr, tooltipIcon } from '../../shared/ui/runtime/ui-helpers.js';

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
          <div class="mt-1 flex items-center gap-2"><div class="section-title font-display leading-tight">${title}</div>${tooltipIcon(desc || title)}</div>
          ${desc ? `<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/76">${replaceEmojiIcons(desc)}</p>` : ''}
        </div>
        ${action ? `<div class="shrink-0">${replaceEmojiIcons(action)}</div>` : ''}
      </div>
    `;
}

function infoCard(title, body, tone = '', tooltip = '') {
  return `
      <div class="surface-strong rounded-2xl p-4 ${tone}" ${tooltipAttr(tooltip || body)}>
        <div class="mb-2 flex items-center gap-2 font-bold font-display text-white leading-tight">${replaceEmojiIcons(title)}${tooltipIcon(tooltip || body)}</div>
        <p class="text-sm text-slate-300/78 leading-relaxed">${replaceEmojiIcons(body)}</p>
      </div>
    `;
}

function actionButton(label, className, onClick, tooltip = '') {
  const cleanLabel = escapeAttr(stripHtml(label));
  return `<button type="button" class="btn ${className}" onclick="${onClick}" aria-label="${cleanLabel}" ${tooltipAttr(tooltip || stripHtml(label))}>${replaceEmojiIcons(label)}</button>`;
}

function actionBar(actions) {
  return `
      <div class="mobile-cta-bar md:hidden">
        <div class="glass-strong rounded-[1.6rem] p-3 grid grid-cols-2 gap-2 shadow-rail" role="group" aria-label="Acciones rápidas móviles">
          ${actions.join('')}
        </div>
      </div>
    `;
}

function pageLead(view, badge = '', actions = '') {
  const meta = VIEW_META[view] || activeMeta();
  const group = VIEW_GROUPS.find((groupItem) => groupItem.views.includes(view));
  const siblings = group ? group.views : [view];
  return `
      <div class="glass rounded-3xl p-5 sm:p-6 animate-rise-in">
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
          ${badge ? `<div class="glass rounded-2xl px-4 py-3 text-sm text-slate-200/90 shrink-0 border border-cyan-300/14">${replaceEmojiIcons(badge)}</div>` : ''}
        </div>
        ${siblings.length > 1 ? `
          <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-3">Navegación relacionada</div>
            <div class="view-links">
              ${siblings.map(sibling => `
                <button type="button" class="view-chip ${state.currentView === sibling ? 'active' : ''}" onclick="game.setView('${sibling}')" ${state.currentView === sibling ? 'aria-current="page"' : ''}>
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

export const viewRuntime = {
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
