import { createMainViews } from '../../shared/ui/views/main-views.js';
import { createSecondaryViews } from '../../shared/ui/views/secondary-views.js';
import { viewRuntime as runtime } from './views-runtime.js';

const {
  SLOT_ORDER,
  SLOT_NAMES,
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
  state,
  maxInventory,
  getPetData,
  getDerivedStats,
  scaleItemStats,
  guildTotal,
  currentRank,
  zoneForPlayer,
  isZoneUnlocked,
  threatBandForScore,
  previewEncounter,
  previewDungeonRoute,
  summarizeReward,
  achievementProgress,
  previewSalvage,
  previewCraftItem,
  previewEnhanceItem,
  previewReforgeItem,
  previewTranscendItem,
  previewStabilizeItem,
  resourceOffer,
  getPityStatus,
  getForgePityStatus,
  getForgeState,
  icon,
  replaceEmojiIcons,
  rarityName,
  rarityBadge,
  translateFilter,
  statLabel,
  statTooltip,
  tooltipAttr,
  statusChip,
  sectionHeader,
  infoCard,
  actionButton,
  actionBar,
  pageLead,
} = runtime;

function equippedSlotCard(slot) {
  const item = state.player.equipment[slot];
  return `
    <div class="rounded-2xl ring p-3 bg-white/[.04]">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${SLOT_NAMES[slot]}</div>
          ${item
             ? `<div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-bold leading-snug break-words rarity-${item.rarity}">${item.name}</div>${rarityBadge(item.rarity)}</div>
               <div class="text-xs text-slate-300/70 mt-1">Nivel ${item.level} · Mejora +${item.upgrade || 0}</div>`
            : '<div class="font-bold mt-1 text-slate-400/80">Vacío</div>'
          }
        </div>
        ${item ? `<button type="button" class="btn !px-3 !py-2 text-xs" onclick="game.unequipItem('${slot}')">Quitar</button>` : ''}
      </div>
    </div>
  `;
}

function questCard(quest) {
  return `
    <div class="glass rounded-2xl p-4">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div class="min-w-0">
          <div class="font-black text-lg">${quest.title}</div>
          <div class="text-sm text-slate-300/75 mt-1">${quest.desc}</div>
          <div class="text-xs text-slate-300/60 mt-3">${summarizeReward(quest.reward)}</div>
        </div>
        <button type="button" class="btn ${quest.completed ? 'btn-success' : ''}" ${quest.completed && !quest.claimed ? `onclick="game.claimQuest('${quest.id}')"` : 'disabled'}>
          ${quest.claimed ? 'Cobrada' : quest.completed ? 'Cobrar' : `${fmt(quest.progress)}/${fmt(quest.target)}`}
        </button>
      </div>
      <div class="mt-3">${progressBar(quest.progress, quest.target, 'bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-300 shadow-[0_0_18px_rgba(192,132,252,.32)]', 'Progreso', 'Avance actual del contrato seleccionado.')}</div>
    </div>
  `;
}

function expeditionTimerText() {
  return state.timers.expedition ? timeLeft(state.timers.expedition.endAt) : '0s';
}

function jobTimerText() {
  return state.timers.job ? timeLeft(state.timers.job.endAt) : '0s';
}

function pager(currentPage, totalPages, fnName) {
  if (totalPages <= 1) return '';
  return `
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
      <div class="text-sm text-slate-300/72">Página <b>${currentPage}</b> de <b>${totalPages}</b></div>
      <div class="flex gap-2">
        <button type="button" class="btn !py-2 !px-3" ${currentPage <= 1 ? 'disabled' : `onclick="game.${fnName}(${currentPage - 1})"`}>← Anterior</button>
        <button type="button" class="btn !py-2 !px-3" ${currentPage >= totalPages ? 'disabled' : `onclick="game.${fnName}(${currentPage + 1})"`}>Siguiente →</button>
      </div>
    </div>
  `;
}

function zoneSelector() {
  return `
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
      ${ZONES.map((zone) => `
        <button
          type="button"
          class="text-left glass rounded-2xl p-4 transition ${state.player.zoneId === zone.id ? 'ring ring-cyan-300/35 bg-cyan-400/8' : ''} ${!isZoneUnlocked(zone) ? 'opacity-45' : ''}"
          ${isZoneUnlocked(zone) ? `onclick="game.setZone(${zone.id})"` : 'disabled'}
          ${tooltipAttr(`Zona ${zone.name}. Requiere nivel ${zone.unlockLevel} y consume ${zone.energyCost} de energía y ${zone.staminaCost} de aguante.`)}
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="font-black text-lg">${zone.name}</div>
              <div class="text-xs text-slate-300/60 mt-1">Nivel ${zone.unlockLevel}+ · ${zone.theme}</div>
            </div>
            <div class="text-xs rounded-full px-2.5 py-1 bg-white/[.06]">${isZoneUnlocked(zone) ? 'Activa' : 'Bloqueada'}</div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${icon('bolt', 'h-4 w-4 text-cyan-300')}<span>${zone.energyCost} energía</span></div>
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${icon('dumbbell', 'h-4 w-4 text-emerald-300')}<span>${zone.staminaCost} aguante</span></div>
          </div>
        </button>
      `).join('')}
    </div>
  `;
}

function formatStatValue(key, value) {
  return key === 'crit' || key === 'dodge' || key === 'block' || key === 'lifesteal' ? pct(value) : fmt(value);
}

const UPGRADE_CAP_BY_RARITY = {
  common: 5,
  uncommon: 7,
  rare: 9,
  epic: 11,
  legendary: 12,
  mythic: 14,
  ascendant: 16,
};

function upgradeHeadroom(item) {
  const cap = UPGRADE_CAP_BY_RARITY[item.rarity] || 10;
  const current = item.upgrade || 0;
  return {
    current,
    cap,
    remaining: Math.max(0, cap - current),
  };
}

function qualityLabel(item) {
  const quality = Math.round((item.qualityRoll || 1) * 100);
  if (quality >= 114) return `${quality}% · excepcional`;
  if (quality >= 104) return `${quality}% · alta`;
  if (quality >= 96) return `${quality}% · estable`;
  return `${quality}% · baja`;
}

function summarizeSalvage(yieldData) {
  if (!yieldData) return 'Sin datos';
  const ordered = ['iron', 'wood', 'essence', 'sigils', 'catalysts', 'echoShards'];
  const chunks = ordered
    .map((key) => ({ key, value: yieldData[key] || 0 }))
    .filter((entry) => entry.value > 0)
    .slice(0, 3)
    .map((entry) => `+${entry.value} ${entry.key}`);
  return chunks.length ? chunks.join(' · ') : 'Sin valor de reciclaje';
}

function compareAgainstEquipped(item) {
  const equipped = state.player.equipment[item.slot];
  if (!equipped) {
    return { label: 'Mejora limpia', tone: 'success', detail: 'No tienes una pieza equipada en este espacio.' };
  }
  const delta = (item.score || 0) - (equipped.score || 0);
  if (delta > 0) return { label: `+${fmt(delta)} puntuación`, tone: 'success', detail: `Mejora respecto a ${equipped.name}.` };
  if (delta < 0) return { label: `${fmt(delta)} puntuación`, tone: 'danger', detail: `Rinde peor que ${equipped.name}.` };
  return { label: 'Puntuación similar', tone: '', detail: `Rinde de forma parecida a ${equipped.name}.` };
}

function itemStatGrid(item, limit = 4) {
  return Object.entries(scaleItemStats(item)).slice(0, limit).map(([key, value]) =>
    `<div class="rounded-xl bg-white/[.04] p-2.5" ${tooltipAttr(statTooltip(key))}>${statLabel(key)}: <b>${formatStatValue(key, value)}</b></div>`
  ).join('');
}

function inventorySummaryCards(items) {
  const legendary = items.filter((item) => item.rarity === 'legendary' || item.rarity === 'mythic' || item.rarity === 'ascendant').length;
  const upgrades = items.filter((item) => compareAgainstEquipped(item).tone === 'success').length;
  return `
    <div class="grid sm:grid-cols-3 gap-3 mb-4">
      ${htmlStat('Objetos filtrados', items.length)}
      ${htmlStat('Mejoras posibles', upgrades)}
      ${htmlStat('Legendarios', legendary, '', 'Cantidad de objetos legendarios visibles en este filtro.')}
    </div>
  `;
}

function durationChoiceCard(seconds, tone, summary) {
  return `
    <div class="surface-strong rounded-2xl p-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Expedición</div>
          <div class="text-2xl font-black mt-1">${seconds}s</div>
          <p class="text-sm text-slate-300/74 mt-2">${summary}</p>
        </div>
        ${statusChip(seconds <= 45 ? 'Corta' : seconds < 240 ? 'Media' : 'Larga', tone)}
      </div>
      <button type="button" class="btn ${tone === 'success' ? 'btn-primary' : tone === 'warning' ? 'btn-gold' : 'btn-violet'} mt-4 w-full" onclick="game.startExpedition(${state.player.zoneId}, ${seconds})">Enviar ${seconds}s</button>
    </div>
  `;
}

function inventoryCards() {
  let items = [...state.player.inventory];
  const filter = state.ui.inventoryFilter;
  if (filter !== 'all') items = items.filter((item) => item.slot === filter || item.rarity === filter);
  if (!items.length) {
    return '<div class="glass rounded-2xl p-5 text-slate-300/75">Tu inventario está vacío o el filtro no devuelve resultados.</div>';
  }

  const pageSize = Math.max(6, state.ui.inventoryPageSize || 18);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(Math.max(1, state.ui.inventoryPage || 1), totalPages);
  const start = (currentPage - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);

  return `
    ${inventorySummaryCards(items)}
    <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${start + 1}</b>–<b>${Math.min(start + pageSize, items.length)}</b> de <b>${items.length}</b> objetos filtrados.</div>
    <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
      ${pageItems.map((item) => {
        const compare = compareAgainstEquipped(item);
        const headroom = upgradeHeadroom(item);
        const salvage = previewSalvage(item.id);
        const reforgePreview = previewReforgeItem(item.id);
        const transcendPreview = previewTranscendItem(item.id);
        const stabilizePreview = previewStabilizeItem(item.id);
        return `
          <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro" ${tooltipAttr(`Objeto de rareza ${rarityName(item.rarity)}. Puntuación ${fmt(item.score)}. ${compare.detail}`)}>
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${item.rarity} leading-snug break-words">${item.name}</div>${rarityBadge(item.rarity)}</div>
                <div class="text-xs text-slate-300/60 mt-1">${SLOT_NAMES[item.slot]} · Nivel ${item.level || item.itemLevel} · Mejora +${item.upgrade || 0}/${headroom.cap} · Afinidad ${item.affinityLevel || 0}</div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]" ${tooltipAttr('Puntuación total estimada del objeto según sus estadísticas y mejora actual.')}>Punt. ${fmt(item.score)}</div>
                <div class="mt-2">${statusChip(compare.label, compare.tone)}</div>
              </div>
            </div>
            <p class="text-xs text-slate-300/62 mt-3">${compare.detail}</p>
              <div class="grid sm:grid-cols-2 gap-2 mt-3 text-xs text-slate-300/72">
                <div class="rounded-xl bg-white/[.04] p-2.5">Calidad: <b>${qualityLabel(item)}</b></div>
                <div class="rounded-xl bg-white/[.04] p-2.5">Potencial: <b>+${headroom.remaining}</b> niveles</div>
                <div class="rounded-xl bg-white/[.04] p-2.5">Estabilizado: <b>${item.stabilize || 0}</b></div>
                <div class="rounded-xl bg-white/[.04] p-2.5 sm:col-span-2">Reciclaje: <b>${summarizeSalvage(salvage)}</b></div>
              </div>
            <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
              ${itemStatGrid(item, 4)}
            </div>
            <div class="grid gap-2 mt-4">
              <button type="button" class="btn btn-success !py-2.5 w-full" onclick="game.equipItem('${item.id}')">Equipar</button>
              <div class="grid grid-cols-2 gap-2">
                <button type="button" class="btn !py-2 text-xs" onclick="game.sellItem('${item.id}')">Vender</button>
                <button type="button" class="btn !py-2 text-xs" onclick="game.salvageItem('${item.id}')">Reciclar</button>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <button type="button" class="btn btn-violet !py-2 text-xs" onclick="game.reforgeItem('${item.id}')" ${reforgePreview ? tooltipAttr(`Coste reforge: ${Object.entries(reforgePreview.cost).filter(([, value]) => value > 0).map(([key, value]) => `${value} ${key}`).join(', ')}`) : 'disabled'}>Retemplar</button>
                <button type="button" class="btn btn-gold !py-2 text-xs" onclick="game.transcendItem('${item.id}')" ${transcendPreview ? tooltipAttr(`Trascender ${transcendPreview.from} -> ${transcendPreview.to}. Probabilidad ${Math.round(transcendPreview.successChance * 100)}%`) : 'disabled'}>Trascender</button>
              </div>
              <button type="button" class="btn !py-2 text-xs mt-2" onclick="game.stabilizeItem('${item.id}')" ${stabilizePreview ? tooltipAttr(`Stabilize ${Math.round(stabilizePreview.successChance * 100)}%. Coste ${Object.entries(stabilizePreview.cost).filter(([, value]) => value > 0).map(([key, value]) => `${value} ${key}`).join(', ')}`) : 'disabled'}>Stabilize</button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
    ${pager(currentPage, totalPages, 'setInventoryPage')}
  `;
}

const mainViews = createMainViews({
  SLOT_ORDER,
  SLOT_NAMES,
  ZONES,
  SKILLS,
  state,
  maxInventory,
  getPetData,
  getDerivedStats,
  currentRank,
  zoneForPlayer,
  isZoneUnlocked,
  threatBandForScore,
  previewEncounter,
  summarizeReward,
  fmt,
  pct,
  htmlStat,
  progressBar,
  timeLeft,
  icon,
  rarityName,
  rarityBadge,
  translateFilter,
  statLabel,
  statTooltip,
  tooltipAttr,
  statusChip,
  sectionHeader,
  infoCard,
  actionButton,
  actionBar,
  pageLead,
  questCard,
  equippedSlotCard,
  inventoryCards,
  zoneSelector,
});

const secondaryViews = createSecondaryViews({
  SLOT_ORDER,
  SLOT_NAMES,
  ZONES,
  JOBS,
  PETS,
  SKILLS,
  ACHIEVEMENTS,
  state,
  getPetData,
  guildTotal,
  achievementProgress,
  fmt,
  htmlStat,
  progressBar,
  icon,
  tooltipAttr,
  replaceEmojiIcons,
  rarityName,
  rarityBadge,
  zoneSelector,
  threatBandForScore,
  previewEncounter,
  previewDungeonRoute,
  compareAgainstEquipped,
  itemStatGrid,
  durationChoiceCard,
  previewCraftItem,
  previewEnhanceItem,
  previewReforgeItem,
  previewTranscendItem,
  previewStabilizeItem,
  resourceOffer,
  getPityStatus,
  getForgePityStatus,
  getForgeState,
  pager,
  expeditionTimerText,
  jobTimerText,
  pageLead,
  sectionHeader,
  infoCard,
  actionButton,
  actionBar,
  statusChip,
});

export function renderContent() {
  const views = {
    resumen: mainViews.renderResumen,
    perfil: mainViews.renderPerfil,
    inventario: mainViews.renderInventario,
    arena: mainViews.renderArena,
    expedicion: secondaryViews.renderExpedicion,
    mazmorra: secondaryViews.renderMazmorra,
    mercado: secondaryViews.renderMercado,
    forja: secondaryViews.renderForja,
    gremio: secondaryViews.renderGremio,
    entrenamiento: secondaryViews.renderEntrenamiento,
    trabajo: secondaryViews.renderTrabajo,
    mascota: secondaryViews.renderMascota,
    logros: secondaryViews.renderLogros,
    diario: secondaryViews.renderDiario,
  };
  const fn = views[state.currentView] || mainViews.renderResumen;
  return fn();
}

export function renderModal() {
  const modal = state.ui.modal;
  if (!modal) return '';
  return `
    <div class="fixed inset-0 bg-slate-950/72 backdrop-blur-sm z-50 p-4 overflow-y-auto">
      <div class="min-h-full flex items-start justify-center py-8">
        <div class="glass-strong rounded-[2rem] p-5 sm:p-6 w-full max-w-5xl">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div>
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Detalle</div>
              <div class="text-2xl font-black">${modal.title}</div>
            </div>
            <button type="button" class="btn" onclick="game.closeModal()">Cerrar</button>
          </div>
          ${modal.content}
        </div>
      </div>
    </div>
  `;
}

export const AetherViewContent = {
  renderContent,
  renderModal,
};
