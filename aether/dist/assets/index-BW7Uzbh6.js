(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))z(L);new MutationObserver(L=>{for(const E of L)if(E.type==="childList")for(const D of E.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&z(D)}).observe(document,{childList:!0,subtree:!0});function Y(L){const E={};return L.integrity&&(E.integrity=L.integrity),L.referrerPolicy&&(E.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?E.credentials="include":L.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function z(L){if(L.ep)return;L.ep=!0;const E=Y(L);fetch(L.href,E)}})();(()=>{const ne="aether_arena_pbbg_v3",_=["weapon","offhand","helm","chest","gloves","boots","ring","amulet"],Y={weapon:"Arma",offhand:"Mano izquierda",helm:"Casco",chest:"Armadura",gloves:"Guantes",boots:"Botas",ring:"Anillo",amulet:"Amuleto"},z=[["resumen","Resumen"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],L=[{title:"Novato del Bronce",min:0},{title:"Aspirante de Arena",min:90},{title:"Centurión de Cristal",min:220},{title:"Campeón del Foro",min:420},{title:"Ídolo de la Ciudad",min:720},{title:"Verdugo Solar",min:1100},{title:"Coloso Astral",min:1600},{title:"Inmortal del Panteón",min:2300}],E=[{key:"common",name:"Común",mult:1,affixes:0,value:14,order:0},{key:"uncommon",name:"Infrecuente",mult:1.14,affixes:1,value:34,order:1},{key:"rare",name:"Raro",mult:1.38,affixes:2,value:92,order:2},{key:"epic",name:"Épico",mult:1.74,affixes:3,value:240,order:3},{key:"legendary",name:"Legendario",mult:2.18,affixes:4,value:640,order:4},{key:"mythic",name:"Mítico",mult:2.82,affixes:5,value:1650,order:5}],D={weapon:[{name:"Gladius",stats:{attack:7,speed:1}},{name:"Hacha de Coliseo",stats:{attack:9,defense:1}},{name:"Tridente del Foro",stats:{attack:8,crit:.02}},{name:"Espada Curva",stats:{attack:8,speed:2}},{name:"Lanza Escarlata",stats:{attack:10,crit:.01}}],offhand:[{name:"Escudo de Torre",stats:{defense:7,hp:18,block:.03}},{name:"Parma Ligera",stats:{defense:5,speed:2,block:.02}},{name:"Daga de Mano",stats:{attack:5,crit:.03}},{name:"Brazal Solar",stats:{defense:4,hp:10,crit:.01}}],helm:[{name:"Yelmo de Bronce",stats:{defense:5,hp:14}},{name:"Máscara del Duelo",stats:{defense:4,crit:.02}},{name:"Casco de Placas",stats:{defense:6,hp:10}},{name:"Corona de Hierro",stats:{hp:18,speed:1}}],chest:[{name:"Coraza Segmentada",stats:{defense:9,hp:28}},{name:"Pectoral de Guerra",stats:{defense:11,hp:22}},{name:"Túnica Blindada",stats:{defense:7,speed:2,hp:20}},{name:"Arnés del León",stats:{attack:4,defense:8,hp:18}}],gloves:[{name:"Guanteletes de Malla",stats:{defense:4,attack:2}},{name:"Guantes de Cazador",stats:{crit:.02,speed:1}},{name:"Mitones de Arena",stats:{attack:3,hp:8}},{name:"Brazales de Sangre",stats:{attack:4,lifesteal:.01}}],boots:[{name:"Grebas Reforzadas",stats:{defense:4,speed:1}},{name:"Sandalias de Arena",stats:{speed:3,dodge:.02}},{name:"Botas de Marcha",stats:{hp:10,speed:2}},{name:"Botas de Acecho",stats:{speed:2,crit:.01}}],ring:[{name:"Anillo de Plata",stats:{crit:.02,attack:2}},{name:"Sello del Foro",stats:{defense:3,hp:8}},{name:"Aro Solar",stats:{attack:3,speed:1}},{name:"Sortija Vital",stats:{hp:16}}],amulet:[{name:"Amuleto del León",stats:{attack:3,hp:10}},{name:"Talismán de Mármol",stats:{defense:3,block:.01}},{name:"Colgante del Alba",stats:{crit:.02,hp:8}},{name:"Medallón del Eco",stats:{speed:2,dodge:.01}}]},M=[{prefix:"Furioso",stats:{attack:2}},{prefix:"Certero",stats:{crit:.02}},{prefix:"Ágil",stats:{speed:2}},{prefix:"Imponente",stats:{hp:18}},{prefix:"Bastión",stats:{defense:3}},{prefix:"Sanguíneo",stats:{lifesteal:.015}},{suffix:"del Coloso",stats:{hp:24,defense:2}},{suffix:"de la Tempestad",stats:{speed:2,crit:.01}},{suffix:"de la Caza",stats:{attack:3,crit:.01}},{suffix:"del Vigía",stats:{defense:4,block:.015}},{suffix:"de los Antiguos",stats:{hp:16,attack:2}},{suffix:"del Eclipse",stats:{attack:3,speed:1,crit:.01}}],ae=[{id:0,name:"Distrito de Arena",unlockLevel:1,energyCost:7,staminaCost:1,theme:"Callejones y plazas del coliseo",enemies:["Rufián del Foro","Apostador Violento","Mercenario de Bronce","Ladrón de Túneles"],boss:"Campeón de Grava"},{id:1,name:"Bosque Sangriento",unlockLevel:4,energyCost:9,staminaCost:1,theme:"Bestias y cazadores en la niebla",enemies:["Jabalí Enloquecido","Cazador Sombrío","Tigre de Jaula","Bandido del Roble"],boss:"Gran Acechador Berkan"},{id:2,name:"Catacumbas Rotas",unlockLevel:8,energyCost:11,staminaCost:2,theme:"No muertos, guardianes y reliquias",enemies:["Esqueleto Vetusto","Fanático de Cripta","Necrófago Roto","Guardia del Osario"],boss:"Pontífice de Hueso"},{id:3,name:"Dunas de Ónice",unlockLevel:12,energyCost:13,staminaCost:2,theme:"Bestias solares y caravanas saqueadas",enemies:["Saqueador de Caravana","Escorpión de Brasa","Jinete del Viento","Chamán del Dátil Negro"],boss:"Anhur, el Sol Partido"},{id:4,name:"Fortaleza del Eclipse",unlockLevel:16,energyCost:16,staminaCost:2,theme:"Caballeros caídos y máquinas de guerra",enemies:["Guardia Obsidiana","Verdugo del Eclipse","Ballestero Negro","Ingeniero del Asedio"],boss:"General Varzok"},{id:5,name:"Necrópolis del Hierro",unlockLevel:21,energyCost:18,staminaCost:3,theme:"Autómatas, espectros y altares profanos",enemies:["Arconte Ferrum","Espectro de Cadena","Mecánico Sacrílego","Profanador del Trono"],boss:"Máquina-Rey Nax"},{id:6,name:"Fisura Astral",unlockLevel:27,energyCost:21,staminaCost:3,theme:"Entidades del vacío y gloria absoluta",enemies:["Segador del Vacío","Centinela Astral","Bestia Prismática","Oráculo Corrupto"],boss:"Aion, Devorador de Ecos"}],K=[{id:"guardia",name:"Guardia del Foro",duration:45,reward:{gold:120,xp:25,food:1},desc:"Patrulla, disciplina y monedas seguras."},{id:"mercante",name:"Estiba de Mercaderes",duration:75,reward:{gold:190,xp:40,wood:2,iron:1},desc:"Carga mercancías y quédate con una comisión."},{id:"arena",name:"Espectáculo Menor",duration:120,reward:{gold:320,xp:70,essence:1,potions:1},desc:"Show de arena, apuestas y fama barata."}],S=[{id:"wolf",name:"Lobo de Guerra",icon:"paw",desc:"Aumenta el daño y el crítico.",bonus:{attackPct:.08,crit:.03}},{id:"phoenix",name:"Fénix de Ceniza",icon:"flame",desc:"Más vida, regeneración y esencia.",bonus:{hpPct:.1,regenPct:.15}},{id:"golem",name:"Gólem de Basalto",icon:"shield",desc:"Defensa bruta y bloqueo.",bonus:{defensePct:.1,block:.03}},{id:"panther",name:"Pantera Crepuscular",icon:"spark",desc:"Velocidad, esquiva y golpes finos.",bonus:{speedPct:.08,dodge:.03}},{id:"raven",name:"Cuervo del Oráculo",icon:"feather",desc:"Más oro, mejor botín y visión.",bonus:{goldPct:.08,lootLuck:.06}}],X={powerStrike:{id:"powerStrike",name:"Golpe devastador",desc:"Ataque de gran multiplicador.",unlockLevel:1,cooldown:3,mult:1.75},quickLunge:{id:"quickLunge",name:"Estocada veloz",desc:"Golpe rápido con extra de crítico.",unlockLevel:1,cooldown:2,mult:1.15,critBonus:.14},fortify:{id:"fortify",name:"Guardia de acero",desc:"Golpeas y elevas tu defensa temporalmente.",unlockLevel:1,cooldown:5,mult:.82,selfBuff:{defensePct:.24,turns:2,shieldPct:.08}},shieldBash:{id:"shieldBash",name:"Embestida de escudo",desc:"Rompe la defensa rival. Requiere mano izquierda.",unlockLevel:5,cooldown:4,mult:1.32,requireOffhand:!0,armorBreak:{pct:.18,turns:2}},bloodRage:{id:"bloodRage",name:"Rabia sanguínea",desc:"Gran drenaje de vida en el impacto.",unlockLevel:7,cooldown:5,mult:1.38,lifestealBonus:.35},whirlwind:{id:"whirlwind",name:"Torbellino",desc:"Dos impactos consecutivos.",unlockLevel:9,cooldown:5,mult:.88,hits:2},execution:{id:"execution",name:"Ejecución",desc:"Hace muchísimo más daño a enemigos debilitados.",unlockLevel:12,cooldown:4,mult:1.2,executeThreshold:.35,executeMult:1.85},venomCut:{id:"venomCut",name:"Corte tóxico",desc:"Aplica daño persistente.",unlockLevel:14,cooldown:4,mult:1.08,dot:{turns:3,ratio:.18,label:"Veneno"}},berserk:{id:"berserk",name:"Berserk",desc:"Te buffas y golpeas con furia.",unlockLevel:17,cooldown:6,mult:1.25,selfBuff:{attackPct:.22,defensePct:-.1,turns:3}},celestialEdge:{id:"celestialEdge",name:"Filo celestial",desc:"Golpe definitivo con alto crítico.",unlockLevel:22,cooldown:7,mult:2.25,critBonus:.28}},y=[{id:"kills50",title:"Carne de Arena",desc:"Derrota 50 enemigos.",type:"kills",target:50,reward:{gold:250,shards:2}},{id:"wins25",title:"Favor del Público",desc:"Gana 25 combates de arena.",type:"wins",target:25,reward:{gold:300,essence:3}},{id:"quest10",title:"Contratista",desc:"Completa 10 misiones.",type:"questsCompleted",target:10,reward:{gold:400,shards:3}},{id:"floor5",title:"Delvador",desc:"Alcanza el piso 5 de las mazmorras.",type:"highestDungeonFloor",target:5,reward:{gold:450,keys:2}},{id:"level10",title:"Veterano",desc:"Llega al nivel 10.",type:"level",target:10,reward:{gold:500,potions:2,essence:4}},{id:"legendary1",title:"Resplandor Dorado",desc:"Consigue 1 objeto legendario.",type:"legendaryFound",target:1,reward:{shards:4,gold:500}},{id:"guild8",title:"Constructor",desc:"Invierte 8 niveles de gremio en total.",type:"guildTotal",target:8,reward:{gold:700,essence:5}},{id:"ascend1",title:"Más allá del polvo",desc:"Asciende una vez.",type:"ascension",target:1,reward:{relicDust:3,shards:5}}],V=[["resumen","Resumen"],["perfil","Perfil"],["inventario","Inventario"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],ce={resumen:{label:"Resumen",short:"Bucle principal",desc:"Vista rápida del ciclo principal, contratos y accesos clave.",icon:"home"},perfil:{label:"Perfil",short:"Gladiador",desc:"Identidad, equipo, rango, zona y estadísticas del héroe.",icon:"user"},inventario:{label:"Inventario",short:"Bolsa y equipo",desc:"Gestiona la mochila, filtra piezas y equipa mejoras.",icon:"backpack"},arena:{label:"Arena",short:"Combate rápido",desc:"Duelo instantáneo, élites y rachas de farmeo.",icon:"swords"},expedicion:{label:"Expediciones",short:"Temporizadores",desc:"Rutas en segundo plano con botín y materiales.",icon:"compass"},mazmorra:{label:"Mazmorras",short:"Pisos y jefes",desc:"Runs por pisos con jefe y cofre.",icon:"castle"},mercado:{label:"Mercado",short:"Compra y venta",desc:"Rotación de equipo y consumibles.",icon:"cart"},forja:{label:"Forja",short:"Creación y mejora",desc:"Creación de piezas y mejoras directas.",icon:"hammer"},gremio:{label:"Gremio",short:"Bonos pasivos",desc:"Mejoras permanentes de la partida.",icon:"shield"},entrenamiento:{label:"Entrenamiento",short:"Atributos y habilidades",desc:"Atributos, habilidades y especialización.",icon:"book"},trabajo:{label:"Trabajo",short:"Ingresos seguros",desc:"Ocupaciones temporizadas con retorno estable.",icon:"briefcase"},mascota:{label:"Mascota",short:"Compañero",desc:"Bonos únicos y progresión auxiliar.",icon:"paw"},logros:{label:"Logros",short:"Metaprogresión",desc:"Hitos, reliquias y ascensión.",icon:"trophy"},diario:{label:"Diario",short:"Registro",desc:"Historial de eventos y actividad reciente.",icon:"scroll"}},u=[{title:"Principal",views:["resumen","perfil","inventario","arena"]},{title:"Aventura",views:["expedicion","mazmorra"]},{title:"Economía",views:["mercado","forja","trabajo"]},{title:"Progreso",views:["gremio","entrenamiento","mascota","logros"]},{title:"Registro",views:["diario"]}],G=["resumen","perfil","inventario","arena"],ie=V.map(([de])=>de).filter(de=>!G.includes(de));window.AetherConfig={STORAGE_KEY:ne,SLOT_ORDER:_,SLOT_NAMES:Y,TABS:z,VIEWS:V,VIEW_META:ce,VIEW_GROUPS:u,MOBILE_PRIMARY_VIEWS:G,MOBILE_OVERFLOW_VIEWS:ie,RANKS:L,RARITIES:E,ITEM_BASES:D,AFFIXES:M,ZONES:ae,JOBS:K,PETS:S,SKILLS:X,ACHIEVEMENTS:y}})();(()=>{const{RARITIES:ne,ITEM_BASES:_}=window.AetherConfig;let Y=1;const z=f=>document.getElementById(f),L=f=>JSON.parse(JSON.stringify(f)),E=(f,h)=>Math.floor(Math.random()*(h-f+1))+f,D=(f,h)=>Math.random()*(h-f)+f,M=f=>f[Math.floor(Math.random()*f.length)],ae=(f,h,m)=>Math.min(m,Math.max(h,f)),K=f=>f.reduce((h,m)=>h+m,0),S=()=>`${Date.now().toString(36)}_${(Y++).toString(36)}_${E(100,999)}`,X={attack:{label:"Ataque",tip:"Aumenta el daño base que infliges en combate."},defense:{label:"Defensa",tip:"Reduce parte del daño recibido en cada impacto."},speed:{label:"Velocidad",tip:"Mejora la iniciativa y el ritmo de tus acciones."},hp:{label:"Vida máxima",tip:"Determina la cantidad total de salud disponible."},crit:{label:"Golpe crítico",tip:"Probabilidad de infligir daño crítico aumentado."},dodge:{label:"Esquiva",tip:"Probabilidad de evitar por completo un golpe enemigo."},block:{label:"Bloqueo",tip:"Probabilidad de mitigar una parte importante del daño."},lifesteal:{label:"Robo de vida",tip:"Porcentaje del daño convertido en curación propia."},attackPct:{label:"Ataque %",tip:"Multiplicador porcentual al ataque base."},defensePct:{label:"Defensa %",tip:"Multiplicador porcentual a la defensa base."},hpPct:{label:"Vida %",tip:"Multiplicador porcentual a la vida máxima."},speedPct:{label:"Velocidad %",tip:"Multiplicador porcentual a la velocidad base."},goldPct:{label:"Oro %",tip:"Incrementa el oro obtenido en actividades."},lootLuck:{label:"Suerte de botín",tip:"Mejora ligeramente la calidad y la frecuencia del botín."},regenPct:{label:"Regeneración %",tip:"Incrementa la recuperación pasiva de recursos."}},y={common:{name:"Común",tone:"text-slate-200 border-white/10 bg-white/[0.04]"},uncommon:{name:"Infrecuente",tone:"text-emerald-200 border-emerald-300/20 bg-emerald-400/10"},rare:{name:"Raro",tone:"text-sky-200 border-sky-300/24 bg-sky-400/10"},epic:{name:"Épico",tone:"text-violet-200 border-violet-300/24 bg-violet-400/10"},legendary:{name:"Legendario",tone:"text-amber-200 border-amber-300/24 bg-amber-400/10"},mythic:{name:"Mítico",tone:"text-fuchsia-200 border-fuchsia-300/24 bg-fuchsia-400/10"}},V={all:"Todo",weapon:"Armas",offhand:"Mano izquierda",helm:"Cascos",chest:"Armaduras",gloves:"Guantes",boots:"Botas",ring:"Anillos",amulet:"Amuletos",common:"Común",uncommon:"Infrecuente",rare:"Raro",epic:"Épico",legendary:"Legendario",mythic:"Mítico"};function ce(f,h=0){return Number(f||0).toLocaleString("es-ES",{maximumFractionDigits:h})}function u(f){return`${ce((f||0)*100,1)}%`}function G(f=""){return String(f).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ie(f=""){const h=String(f),m=[];let k=h;return[/<\/?b>/gi,/<br\s*\/?>/gi,/<span class="rarity-(common|uncommon|rare|epic|legendary|mythic)">/gi,/<\/span>/gi].forEach(w=>{k=k.replace(w,p=>{const W=`__SAFE_HTML_${m.length}__`;return m.push({token:W,match:p}),W})}),k=G(k),m.forEach(({token:w,match:p})=>{k=k.replace(w,p)}),k}function de(f,h=2){return Number(f.toFixed(h))}function re(f){return(X[f]||{}).label||f}function we(f){return(X[f]||{}).tip||""}function oe(f){return(y[f]||y.common).name}function Z(f){const h=y[f]||y.common;return`<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.14em] ${h.tone}">${h.name}</span>`}function e(f){return V[f]||f}function N(f,h,m="",k=""){return`
      <div class="stat-pill rounded-2xl px-3 py-3"${k?` data-tooltip="${String(k).replace(/"/g,"&quot;")}"`:""}>
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/70">${f}</div>
        <div class="text-lg font-display font-extrabold tracking-[0.01em] text-white">${h}</div>
        ${m?`<div class="mt-1 text-xs leading-relaxed text-slate-300/65">${m}</div>`:""}
      </div>
    `}function O(f,h,m,k,v=""){const w=h<=0?0:ae(f/h*100,0,100);return`
      <div${v?` data-tooltip="${String(v).replace(/"/g,"&quot;")}"`:""}>
        <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
          <span class="font-medium tracking-[0.01em]">${k}</span>
          <span class="font-semibold text-slate-100">${ce(f,f%1?1:0)} / ${ce(h,h%1?1:0)}</span>
        </div>
        <div class="bar">
          <span class="relative flex h-full rounded-full ${m}" style="width:${w}%">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
          </span>
        </div>
      </div>
    `}function H(f){return ne.find(h=>h.key===f)||ne[0]}function Q(f,h){return!h||typeof h!="object"||Object.keys(h).forEach(m=>{const k=h[m];Array.isArray(k)?f[m]=k:k&&typeof k=="object"?((!f[m]||typeof f[m]!="object"||Array.isArray(f[m]))&&(f[m]={}),Q(f[m],k)):f[m]=k}),f}function ke(){return{attack:0,defense:0,speed:0,hp:0,crit:0,dodge:0,block:0,lifesteal:0,attackPct:0,defensePct:0,hpPct:0,speedPct:0,goldPct:0,lootLuck:0,regenPct:0}}function q(f,h){return Object.keys(h||{}).forEach(m=>{f[m]=(f[m]||0)+h[m]}),f}function te(f=Date.now()){const h=new Date(f),m=h.getFullYear(),k=String(h.getMonth()+1).padStart(2,"0"),v=String(h.getDate()).padStart(2,"0");return`${m}-${k}-${v}`}function be(f){const h=Math.max(0,f-Date.now()),m=Math.ceil(h/1e3),k=Math.floor(m/60),v=m%60;return k?`${k}m ${String(v).padStart(2,"0")}s`:`${v}s`}function c(f=1,h=0){const m=Math.random()-Math.min(.16,h*.035)-Math.min(.06,f*7e-4);return m<.0012?H("mythic"):m<.01?H("legendary"):m<.052?H("epic"):m<.19?H("rare"):m<.48?H("uncommon"):H("common")}function pe(f,h){return(_[f]||[]).find(m=>m.name===h)||M(_[f]||[])}function P(f,h){return f+Math.max(0,Math.floor(h/4))*.85}window.AetherUtils={$:z,clone:L,rand:E,randf:D,pick:M,clamp:ae,sum:K,uid:S,fmt:ce,pct:u,escapeHtml:G,sanitizeInlineHtml:ie,softRound:de,statLabel:re,statTooltip:we,rarityName:oe,rarityBadge:Z,translateFilter:e,htmlStat:N,progressBar:O,rarityDef:H,deepMerge:Q,emptyStats:ke,addStats:q,localDayKey:te,timeLeft:be,pickRarity:c,findBaseItem:pe,scaledStatValue:P}})();(()=>{const{STORAGE_KEY:ne,SLOT_ORDER:_,ITEM_BASES:Y,AFFIXES:z,PETS:L,SKILLS:E}=window.AetherConfig,{clone:D,rand:M,pick:ae,clamp:K,sum:S,uid:X,softRound:y,rarityDef:V,deepMerge:ce,emptyStats:u,addStats:G,localDayKey:ie,pickRarity:de,findBaseItem:re,scaledStatValue:we}=window.AetherUtils;function oe(i,d,j=null,n=null,r=0){const x=n?re(i,n):ae(Y[i]),$=j?V(j):de(d,b()),R={};Object.entries(x.stats).forEach(([me,ve])=>{const De=typeof ve=="number"?me==="crit"||me==="dodge"||me==="block"||me==="lifesteal"?ve+Math.max(0,d-1)*5e-4:we(ve,d):ve;R[me]=y(De*$.mult,3)});const B=Math.min(5,$.affixes+r),he=new Set,T=[];for(let me=0;me<B;me++){let ve=ae(z),De=0;for(;he.has(ve.prefix||ve.suffix)&&De<20;)ve=ae(z),De++;he.add(ve.prefix||ve.suffix),T.push(ve),Object.entries(ve.stats).forEach(([xe,Ke])=>{const Xe=xe==="crit"||xe==="dodge"||xe==="block"||xe==="lifesteal"?Ke+Math.max(0,d-1)*5e-4:we(Ke,d);R[xe]=y((R[xe]||0)+Xe,3)})}const $e=[],We=T.find(me=>me.prefix),Ye=T.find(me=>me.suffix);We&&$e.push(We.prefix),$e.push(x.name),Ye&&$e.push(Ye.suffix);const Je={id:X(),slot:i,name:$e.join(" "),rarity:$.key,level:d,baseName:x.name,stats:R,affixes:T.map(me=>me.prefix||me.suffix),value:Math.max(12,Math.round(($.value+d*8)*(1+B*.18))),upgrade:0,createdAt:Date.now()};return Je.score=N(Je),Je}function Z(i,d){const j=oe(i,1,"common",d,0);return j.affixes=[],j.name=d,j.score=N(j),j}function e(i){const d=1+(i.upgrade||0)*.12,j={};return Object.entries(i.stats||{}).forEach(([n,r])=>{n==="crit"||n==="dodge"||n==="block"||n==="lifesteal"?j[n]=y(r+(i.upgrade||0)*.002,4):j[n]=y(r*d,2)}),j}function N(i){const d=e(i);return y((d.attack||0)*2.1+(d.defense||0)*1.85+(d.speed||0)*1.45+(d.hp||0)*.18+(d.crit||0)*120+(d.dodge||0)*90+(d.block||0)*70+(d.lifesteal||0)*140,1)}function O(i){return Math.round(95+Math.pow(i,1.46)*48)}function H(i=1){const d=[{type:"kills",title:"Barrido de rivales",desc:"Derrota enemigos en la arena.",target:7+Math.floor(i*1.6),reward:{gold:120+i*20,xp:60+i*14,essence:1}},{type:"wins",title:"Clamor del público",desc:"Gana combates de arena.",target:4+Math.floor(i*.6),reward:{gold:140+i*24,xp:65+i*15,potions:1}},{type:"earnGold",title:"Bolsillos pesados",desc:"Obtén oro por cualquier medio.",target:320+i*90,reward:{gold:150+i*22,xp:70+i*12,shards:1}},{type:"crafts",title:"Acero fresco",desc:"Forja o mejora equipo.",target:2+Math.floor(i/7),reward:{gold:180+i*18,xp:60+i*16,iron:3}},{type:"expeditions",title:"Rutas peligrosas",desc:"Completa expediciones.",target:2+Math.floor(i/8),reward:{gold:160+i*18,xp:72+i*14,wood:3}},{type:"dungeons",title:"Hedor profundo",desc:"Supera incursiones en mazmorra.",target:1+Math.floor(i/10),reward:{gold:220+i*18,xp:95+i*18,keys:1}},{type:"salvaged",title:"Chatarra útil",desc:"Recicla equipo sobrante.",target:3+Math.floor(i/7),reward:{gold:130+i*18,xp:55+i*13,essence:2}},{type:"elites",title:"Sangre de élite",desc:"Derrota enemigos élite.",target:1+Math.floor(i/9),reward:{gold:240+i*20,xp:90+i*17,shards:1}}],j=[],n=[];for(;j.length<4&&n.length<d.length;){const r=ae(d);n.includes(r.type)||(n.push(r.type),j.push({id:X(),type:r.type,title:r.title,desc:r.desc,progress:0,target:r.target,reward:r.reward,completed:!1,claimed:!1}))}return j}function Q(i=1){const d=Math.random();return i>=32&&d<.0015?"mythic":i>=24&&d<.012?"legendary":i>=16&&d<.055?"epic":i>=8&&d<.22?"rare":d<.58?"uncommon":"common"}function ke(i=1){const d=[],j=6+Math.min(2,Math.floor(i/12)),n={common:1.05,uncommon:1.16,rare:1.48,epic:2.05,legendary:3.1,mythic:4.8};for(let r=0;r<j;r++){const x=ae(_),$=Q(i),R=oe(x,Math.max(1,i+M(-1,3)),$);R.price=Math.round(R.value*n[R.rarity]*(1+Math.max(0,i-1)*.015)),d.push(R)}return d.sort((r,x)=>(x.price||0)-(r.price||0))}function q(){return[Z("helm","Yelmo de Bronce"),Z("boots","Sandalias de Arena"),oe("ring",1,"uncommon")]}function te(){return{version:4,currentView:"resumen",currentTab:"resumen",ui:{inventoryFilter:"all",inventoryPage:1,inventoryPageSize:18,journalPage:1,journalPageSize:16,modal:null,forgePreview:null,moreMenuOpen:!1},player:{name:"Aurelio",title:"Novato del Coliseo",level:1,xp:0,gold:260,shards:0,iron:16,wood:12,essence:5,food:6,potions:3,keys:2,hp:140,energy:100,stamina:12,baseStats:{attack:14,defense:10,speed:8,crit:.06,dodge:.04,block:.03,lifesteal:0},training:{strength:0,agility:0,endurance:0,discipline:0},guild:{barracks:0,treasury:0,sanctuary:0,hunters:0,arsenal:0},relics:{wrath:0,fortune:0,vitality:0,momentum:0},pet:null,petLevel:0,petXp:0,activeSkills:["powerStrike","quickLunge","fortify"],unlockedSkills:["powerStrike","quickLunge","fortify"],skillLevels:{powerStrike:1,quickLunge:1,fortify:1,shieldBash:1,bloodRage:1,whirlwind:1,execution:1,venomCut:1,berserk:1,celestialEdge:1},skillPoints:0,attributePoints:0,zoneId:0,highestDungeonFloor:1,ascension:0,relicDust:0,equipment:{weapon:Z("weapon","Gladius"),offhand:Z("offhand","Escudo de Torre"),helm:null,chest:Z("chest","Coraza Segmentada"),gloves:null,boots:null,ring:null,amulet:null},inventory:q()},stats:{wins:0,losses:0,kills:0,damageDone:0,damageTaken:0,crits:0,questsCompleted:0,crafted:0,salvaged:0,earnedGold:0,expeditions:0,dungeons:0,elites:0,legendaryFound:0},quests:H(1),claimedAchievements:[],timers:{job:null,expedition:null},market:{items:ke(1),lastRefresh:Date.now()},journal:[{id:X(),ts:Date.now(),icon:"⚔️",text:"Has entrado en Aether Arena. El coliseo huele a hierro, oro y gloria."}],streak:{lastClaimDay:null,days:0},combatHistory:[],lastTick:Date.now(),lastSave:0}}const be=new Set(["_meta","actions"]),c={},pe={sig:"",value:null},P=window.zustandVanilla||window.zustand,f=window.zustandMiddleware||{},h=typeof f.subscribeWithSelector=="function"?f.subscribeWithSelector:i=>i;if(!P||typeof P.createStore!="function")throw new Error("Zustand vanilla no esta disponible. Verifica la carga de la libreria antes de model.js");function m(i={}){return{hydrated:!1,isDirty:!1,isSaving:!1,lastMutationAt:0,lastMutationLabel:"bootstrap",mutationCount:0,lastSaveAt:0,saveCount:0,lastSource:"bootstrap",syncRevision:0,...i}}function k(i=null){const d=i||c,j={};return Object.keys(d||{}).forEach(n=>{be.has(n)||(j[n]=D(d[n]))}),j}function v(i=null){const d=k(i);return d.ui&&(d.ui.modal=null,d.ui.moreMenuOpen=!1,d.ui.forgePreview=null),d}function w(i){Object.keys(c).forEach(d=>delete c[d]),Object.assign(c,i),pe.sig=""}const p=P.createStore(h(()=>({...D(te()),_meta:m(),actions:{}})));function W(){return w(k(p.getState())),c}function ye(i,d={},j=!0){const n=p.getState(),r=m({...n._meta||{},...d}),x={...D(i),_meta:r,actions:n.actions||{}};return p.setState(x,j),W()}W();function Me(){return 28+c.player.guild.arsenal*8+c.player.ascension*2}function Ee(){return S(Object.values(c.player.guild||{}))}function Le(){return L.find(i=>i.id===c.player.pet)||null}function Se(){const i=Le(),d=u();if(!i||!c.player.petLevel)return d;const j=1+c.player.petLevel*.16;return Object.entries(i.bonus).forEach(([n,r])=>{d[n]=y((d[n]||0)+r*j,4)}),d}function Pe(){const i=c.player.guild,d=u();return d.attackPct+=i.barracks*.03,d.defensePct+=i.barracks*.02,d.goldPct+=i.treasury*.08,d.hpPct+=i.sanctuary*.05,d.regenPct+=i.sanctuary*.08,d.lootLuck+=i.hunters*.05,d}function ge(){const i=c.player.relics,d=u();return d.attackPct+=i.wrath*.04,d.goldPct+=i.fortune*.05,d.lootLuck+=i.fortune*.03,d.hpPct+=i.vitality*.06,d.regenPct+=i.vitality*.06,d.speedPct+=i.momentum*.03,d}function Ie(){const i=u();return _.forEach(d=>{const j=c.player.equipment[d];j&&G(i,e(j))}),i}function C(){const i=c.player.training;return{attack:i.strength*2.2,defense:i.endurance*1.3,speed:i.agility*1.5,hp:i.endurance*16,crit:i.agility*.002,dodge:i.agility*.002,block:i.endurance*.0015,lifesteal:i.strength*8e-4}}function l(){if(!c.player)return{attack:14,defense:10,speed:8,maxHp:140,crit:.06,dodge:.04,block:.03,lifesteal:0,maxEnergy:100,maxStamina:12,goldPct:0,lootLuck:0,regenPct:0};const i=c.player,d=[i.level,i.baseStats.attack,i.baseStats.defense,i.baseStats.speed,i.baseStats.crit,i.baseStats.dodge,i.baseStats.block,i.baseStats.lifesteal,i.training.strength,i.training.agility,i.training.endurance,i.training.discipline,i.guild.barracks,i.guild.treasury,i.guild.sanctuary,i.guild.hunters,i.guild.arsenal,i.relics.wrath,i.relics.fortune,i.relics.vitality,i.relics.momentum,i.pet||"",i.petLevel||0,..._.map(De=>{const xe=i.equipment[De];return xe?`${xe.id}:${xe.level}:${xe.upgrade||0}:${xe.rarity}:${xe.reforge||0}`:"-"})].join("|");if(pe.sig===d&&pe.value)return pe.value;const j=i.level,n={attack:i.baseStats.attack+j*3.2,defense:i.baseStats.defense+j*2.45,speed:i.baseStats.speed+j*1.2,hp:120+j*34,crit:i.baseStats.crit,dodge:i.baseStats.dodge,block:i.baseStats.block,lifesteal:i.baseStats.lifesteal,maxEnergy:100+i.training.discipline*5+i.relics.momentum*10,maxStamina:12+Math.floor(i.training.discipline/4)+i.relics.momentum},r=Ie(),x=C(),$=Pe(),R=ge(),B=Se();let he=n.attack+(r.attack||0)+(x.attack||0),T=n.defense+(r.defense||0)+(x.defense||0),$e=n.speed+(r.speed||0)+(x.speed||0),We=n.hp+(r.hp||0)+(x.hp||0);const Ye=($.attackPct||0)+(R.attackPct||0)+(B.attackPct||0),Je=($.defensePct||0)+(B.defensePct||0),me=($.hpPct||0)+(R.hpPct||0)+(B.hpPct||0),ve=(R.speedPct||0)+(B.speedPct||0);return he*=1+Ye,T*=1+Je,We*=1+me,$e*=1+ve,pe.sig=d,pe.value={attack:y(he,2),defense:y(T,2),speed:y($e,2),maxHp:Math.round(We),crit:K(n.crit+(r.crit||0)+(x.crit||0)+(B.crit||0),0,.7),dodge:K(n.dodge+(r.dodge||0)+(x.dodge||0)+(B.dodge||0),0,.55),block:K(n.block+(r.block||0)+(x.block||0)+(B.block||0),0,.5),lifesteal:K(n.lifesteal+(r.lifesteal||0)+(x.lifesteal||0),0,.45),maxEnergy:n.maxEnergy,maxStamina:n.maxStamina,goldPct:($.goldPct||0)+(B.goldPct||0)+(R.goldPct||0),lootLuck:($.lootLuck||0)+(B.lootLuck||0)+(R.lootLuck||0),regenPct:($.regenPct||0)+(B.regenPct||0)+(R.regenPct||0)},pe.value}function b(){return c.player&&l().lootLuck||0}function I(){const i=c.player;Object.values(E).forEach(d=>{var j,n;i.level>=d.unlockLevel&&!i.unlockedSkills.includes(d.id)&&(i.unlockedSkills.push(d.id),(j=window.AetherSystems)==null||j.addJournal("✨",`Has desbloqueado la habilidad <b>${d.name}</b>.`),(n=window.AetherSystems)==null||n.toast(`Habilidad desbloqueada: ${d.name}`,"violet"))})}function F(){const i=te();w(ce(i,D(c))),c.currentView=c.currentView||c.currentTab||"resumen",c.currentTab=c.currentView,c.ui.moreMenuOpen=!!c.ui.moreMenuOpen,c.player.inventory||(c.player.inventory=[]),c.player.equipment||(c.player.equipment=i.player.equipment),c.player.guild||(c.player.guild=i.player.guild),c.player.training||(c.player.training=i.player.training),c.player.relics||(c.player.relics=i.player.relics),c.player.skillLevels||(c.player.skillLevels=i.player.skillLevels),c.player.activeSkills||(c.player.activeSkills=i.player.activeSkills),c.player.unlockedSkills||(c.player.unlockedSkills=i.player.unlockedSkills),c.quests||(c.quests=i.quests),(!c.market||!c.market.items)&&(c.market=i.market),c.stats||(c.stats=i.stats),c.claimedAchievements||(c.claimedAchievements=[]),c.combatHistory||(c.combatHistory=[]),c.journal||(c.journal=i.journal),c.streak||(c.streak=i.streak),c.timers||(c.timers=i.timers),c.ui||(c.ui=i.ui),c.ui.inventoryFilter=c.ui.inventoryFilter||"all",c.ui.inventoryPage=Math.max(1,Number(c.ui.inventoryPage)||1),c.ui.inventoryPageSize=Math.max(6,Number(c.ui.inventoryPageSize)||i.ui.inventoryPageSize),c.ui.journalPage=Math.max(1,Number(c.ui.journalPage)||1),c.ui.journalPageSize=Math.max(8,Number(c.ui.journalPageSize)||i.ui.journalPageSize),I();const d=l();c.player.hp=K(c.player.hp||d.maxHp,1,d.maxHp),c.player.energy=K(c.player.energy??d.maxEnergy,0,d.maxEnergy),c.player.stamina=K(c.player.stamina??d.maxStamina,0,d.maxStamina),c.player.title=c.player.title||"Novato del Coliseo",c.lastTick=c.lastTick||Date.now(),c.lastSave=c.lastSave||0}function se(){return p.getState()._meta||m()}function fe(i={}){const d=p.getState();return p.setState({...d,_meta:m({...d._meta||{},...i})}),se()}function Ne(i={},d=!0){return ye(c,i,d)}function Re(i,d="storage"){w(D(i||te())),F();const j=Date.now();return Ne({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:c.lastSave||j,lastSource:d,syncRevision:d==="external-sync"?se().syncRevision+1:se().syncRevision})}function Be(i,d,j={}){const n=k(p.getState());try{w(D(n)),typeof d=="function"&&d(c),j.normalize&&F();const r=se();return Ne({hydrated:!0,isDirty:j.markDirty===!1?r.isDirty:!0,isSaving:!1,lastMutationAt:Date.now(),lastMutationLabel:i||"mutation",mutationCount:(r.mutationCount||0)+1,lastSource:j.source||"local"})}catch(r){throw w(n),r}}function Te(){try{const i=Date.now();fe({isSaving:!0});const d=v(p.getState());return d.lastSave=i,localStorage.setItem(ne,JSON.stringify(d)),w(k(p.getState())),c.lastSave=i,Ne({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:i,saveCount:(se().saveCount||0)+1,lastSource:"save"}),!0}catch(i){return console.warn("No se pudo guardar la partida.",i),fe({isSaving:!1}),!1}}function Ge(){try{const i=localStorage.getItem(ne);return i?Re(JSON.parse(i),"storage"):Re(te(),"new-game")}catch(i){return console.warn("Guardado corrupto, creando uno nuevo.",i),Re(te(),"recovered")}}function Ze(i){try{return Re(i?JSON.parse(i):te(),"external-sync")}catch(d){return console.warn("No se pudo sincronizar el estado externo.",d),!1}}function Oe(){return localStorage.removeItem(ne),Re(te(),"reset")}function He(i,d,j){return typeof i=="function"&&typeof d=="function"?p.subscribe(i,d,j):p.subscribe(i)}function qe(i){return typeof i=="function"?i(p.getState()):p.getState()}const Fe={mutate:Be,saveGame:Te,loadGame:Ge,hardReset:Oe,setMeta:fe,syncExternalState:Ze};p.setState({...p.getState(),actions:Fe}),W(),window.AetherModel={state:c,store:p,replaceState:w,snapshotGameData:k,mutate:Be,subscribeStore:He,selectStore:qe,getStoreMeta:se,setStoreMeta:fe,syncExternalState:Ze,makeItem:oe,makeStarterItem:Z,scaleItemStats:e,computeItemScore:N,xpNeeded:O,defaultQuests:H,generateMarket:ke,starterInventory:q,makeDefaultState:te,maxInventory:Me,guildTotal:Ee,getPetData:Le,petBonus:Se,getGuildBonus:Pe,getRelicBonus:ge,getEquipmentBonus:Ie,getTrainingBonus:C,getDerivedStats:l,getLootLuck:b,ensureUnlockedSkills:I,normalizeState:F,saveGame:Te,loadGame:Ge,hardReset:Oe}})();(()=>{const{SLOT_ORDER:ne,SLOT_NAMES:_,RANKS:Y,ZONES:z,JOBS:L,PETS:E,SKILLS:D,ACHIEVEMENTS:M}=window.AetherConfig,{$:ae,clone:K,rand:S,randf:X,pick:y,clamp:V,sum:ce,uid:u,fmt:G,pct:ie,softRound:de,localDayKey:re,timeLeft:we,rarityDef:oe,sanitizeInlineHtml:Z}=window.AetherUtils,{state:e,replaceState:N,makeDefaultState:O,normalizeState:H,makeItem:Q,scaleItemStats:ke,computeItemScore:q,xpNeeded:te,defaultQuests:be,generateMarket:c,maxInventory:pe,guildTotal:P,getPetData:f,getDerivedStats:h,getLootLuck:m,ensureUnlockedSkills:k,saveGame:v}=window.AetherModel;function w(a,t){e.journal.unshift({id:u(),ts:Date.now(),icon:a,text:Z(t)}),e.journal=e.journal.slice(0,80)}function p(a,t="cyan"){const s=ae("toast-root");if(!s)return;const o={cyan:"from-sky-500/25 to-cyan-300/10 border-cyan-300/25",gold:"from-amber-500/25 to-yellow-300/10 border-amber-300/30",danger:"from-rose-500/25 to-pink-300/10 border-rose-300/25",success:"from-emerald-500/25 to-green-300/10 border-emerald-300/25",violet:"from-violet-500/25 to-fuchsia-300/10 border-violet-300/25"},g=document.createElement("div");g.className=`glass-strong pointer-events-none rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-br ${o[t]||o.cyan} animate-[fadeIn_.2s_ease]`,g.innerHTML=Z(a),s.appendChild(g),setTimeout(()=>{g.style.opacity="0",g.style.transform="translateY(-6px)",setTimeout(()=>g.remove(),260)},2800)}function W(a,t="Recompensa"){a&&(Object.entries(a).forEach(([s,o])=>{s==="xp"?Me(o):s in e.player?e.player[s]+=o:s in e.stats?e.stats[s]+=o:s==="relicDust"&&(e.player.relicDust+=o)}),a.gold&&(e.stats.earnedGold+=a.gold,je("earnGold",a.gold)),w("🎁",`${t}: ${ye(a)}`))}function ye(a){return Object.entries(a).map(([t,s])=>{const o={xp:"XP",gold:"oro",shards:"fragmentos",iron:"hierro",wood:"madera",essence:"esencia",food:"comida",potions:"pociones",keys:"llaves",relicDust:"polvo reliquia"}[t]||t;return`+${G(s)} ${o}`}).join(" · ")}function Me(a){if(!a)return;e.player.xp+=a;let t=0;for(;e.player.xp>=te(e.player.level);)e.player.xp-=te(e.player.level),e.player.level+=1,e.player.attributePoints+=4,e.player.skillPoints+=1,t++,k();const s=h();t>0&&(e.player.hp=s.maxHp,e.player.energy=s.maxEnergy,e.player.stamina=V(e.player.stamina+t,0,s.maxStamina),e.player.title=Ee().title,w("🌟",`Subes al nivel <b>${e.player.level}</b>. Recibes puntos de atributo y habilidad.`),p(`Nivel ${e.player.level} alcanzado`,"gold"))}function Ee(){const a=e.player.level*14+e.stats.wins*4+e.player.highestDungeonFloor*10+P()*8+e.player.ascension*60;let t=Y[0];return Y.forEach(s=>{a>=s.min&&(t=s)}),t}function Le(){const a=Date.now(),t=V((a-(e.lastTick||a))/1e3,0,60*60*12);t<=0||(Se(t),Xe(a,!0),e.lastTick=a)}function Se(a){const t=h(),s=t.maxHp*(.0033+t.regenPct*.01)*a,o=(.48+e.player.training.discipline*.02+e.player.relics.momentum*.04)*a,g=(.028+e.player.relics.momentum*.005)*a;e.player.hp=V(e.player.hp+s,1,t.maxHp),e.player.energy=V(e.player.energy+o,0,t.maxEnergy),e.player.stamina=V(e.player.stamina+g,0,t.maxStamina)}function Pe(){return z.find(a=>a.id===e.player.zoneId)||z[0]}function ge(a){return e.player.level>=a.unlockLevel||e.player.ascension>0&&a.id<=2}function Ie(a){const t=z.find(s=>s.id===a);!t||!ge(t)||(e.player.zoneId=t.id)}function C(a){return{berserker:{attack:1.12,defense:.92,speed:1.03,crit:.04,dodge:.01,block:0,lifesteal:.02},guardian:{attack:.9,defense:1.18,speed:.92,crit:.01,dodge:.02,block:.05,lifesteal:0},assassin:{attack:1,defense:.86,speed:1.22,crit:.06,dodge:.05,block:.01,lifesteal:0},beast:{attack:1.08,defense:.95,speed:1.09,crit:.03,dodge:.03,block:0,lifesteal:.03},occult:{attack:1.03,defense:.94,speed:1.05,crit:.05,dodge:.02,block:.02,lifesteal:0}}[a]||{attack:1,defense:1,speed:1,crit:0,dodge:0,block:0,lifesteal:0}}function l(a,t="normal"){const s=e.player.level||1,o=e.player.ascension||0,g=e.stats&&e.stats.wins?e.stats.wins:0,A=Math.pow(s,.88)*.04,le=a&&typeof a.id=="number"?a.id*.25:0,J=o*.25,U=Math.min(g/60,3),ue=t==="elite"?.3:t==="boss"?.6:0;return 1+A+le+J+U+ue}function b(a,t="normal",s=0){const g=y(["berserker","guardian","assassin","beast","occult"]),A=C(g),le=Math.max(1,Math.round(a.unlockLevel+e.player.level*.95+a.id*1.8+s+S(-1,2))),J=t==="elite"?1.3:t==="boss"?1.6:1,U=l(a,t),ue=(12+le*3.4)*A.attack*J*U,ee=(8+le*2.8)*A.defense*J*U,Ce=(120+le*34)*(t==="boss"?2.1:t==="elite"?1.5:1)*U,Ve=(7+le*1.08)*A.speed*U,Ae=t==="boss"?a.boss:y(a.enemies),ze={berserker:{name:"Furia salvaje",mult:1.45,cooldown:3},guardian:{name:"Muro de carne",mult:.9,cooldown:4,selfBuff:{defensePct:.2,turns:2}},assassin:{name:"Degüello",mult:1.2,cooldown:3,critBonus:.18},beast:{name:"Desgarro",mult:1.08,cooldown:3,dot:{turns:2,ratio:.12,label:"Sangrado"}},occult:{name:"Maldición",mult:1.15,cooldown:4,armorBreak:{pct:.14,turns:2}}}[g];return{id:u(),name:Ae,zoneId:a.id,kind:t,archetype:g,level:le,maxHp:Math.round(Ce),hp:Math.round(Ce),attack:de(ue,2),defense:de(ee,2),speed:de(Ve,2),crit:V(.06+A.crit+(t==="boss"?.03:t==="elite"?.015:0)+(U-1)*.015,0,.55),dodge:V(.025+A.dodge+(t==="boss"?.02:t==="elite"?.01:0)+(U-1)*.012,0,.45),block:V(.015+A.block+(t==="boss"?.04:t==="elite"?.02:0)+(U-1)*.012,0,.4),lifesteal:V(A.lifesteal+(t==="boss"?.01:t==="elite"?.005:0)+(U-1)*.008,0,.25),skill:ze,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0}}function I(){const a=h();return{id:"player",name:e.player.name,maxHp:a.maxHp,hp:Math.round(e.player.hp),attack:a.attack,defense:a.defense,speed:a.speed,crit:a.crit,dodge:a.dodge,block:a.block,lifesteal:a.lifesteal,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0,activeSkills:e.player.activeSkills.filter(t=>e.player.unlockedSkills.includes(t))}}function F(a,t){return a.buffs.filter(s=>s.turns>0&&t in(s.values||{})).reduce((s,o)=>s+o.values[t],0)}function se(a,t){const s=`${t}Pct`;let o=a[t];return t==="defense"&&a.armorBreak&&a.armorBreak.turns>0&&(o*=1-a.armorBreak.pct),(t==="attack"||t==="defense"||t==="speed")&&(o*=1+F(a,s)),o+=F(a,t),o}function fe(a){return 1+Math.max(0,(e.player.skillLevels[a]||1)-1)*.08}function Ne(a,t){const s=a.activeSkills||[];for(const o of s){const g=D[o];if(g&&!(g.requireOffhand&&!e.player.equipment.offhand)&&!((a.cooldowns[o]||0)>0)&&!(g.executeThreshold&&t.hp/t.maxHp>g.executeThreshold))return g}return null}function Re(a){return!a.skill||(a.cooldowns.special||0)>0?null:a.skill}function Be(a,t){a.dots=a.dots.filter(s=>{if(s.turns<=0)return!1;const o=Math.round(s.damage);return a.hp-=o,t.push(`☠️ ${a.name} sufre ${o} por ${s.label}.`),s.turns-=1,s.turns>0}),a.buffs.forEach(s=>s.turns--),a.buffs=a.buffs.filter(s=>s.turns>0),a.armorBreak&&(a.armorBreak.turns-=1,a.armorBreak.turns<=0&&(a.armorBreak=null))}function Te(a,t,s,o=1,g={},A=[]){const le=se(a,"attack"),J=se(t,"defense"),U=V((a.crit||0)+(g.critBonus||0),0,.85),ue=V(t.dodge||0,0,.7);if(Math.random()<ue)return A.push(`💨 ${t.name} esquiva ${s}.`),{damage:0,crit:!1,dodged:!0,blocked:!1};let ee=le*o-J*.55;ee=Math.max(le*.26,ee),ee*=X(.9,1.08);let Ce=!1;Math.random()<U&&(ee*=1.68,Ce=!0);let Ve=!1;if(Math.random()<(t.block||0)&&(ee*=.66,Ve=!0),ee=Math.max(1,Math.round(ee)),t.shield>0){const _e=Math.min(t.shield,ee);t.shield-=_e,ee-=_e,_e>0&&A.push(`🛡️ ${t.name} absorbe ${_e} con un escudo.`)}if(ee>0){t.hp-=ee;const _e=ee*V((a.lifesteal||0)+(g.lifestealBonus||0),0,.9);_e>0&&(a.hp=Math.min(a.maxHp,a.hp+Math.round(_e)))}const Ae=Ce?" crítico":"",ze=Ve?" (bloqueado parcialmente)":"";return A.push(`⚔️ ${a.name} usa ${s} y causa ${ee}${Ae}${ze}.`),{damage:ee,crit:Ce,dodged:!1,blocked:Ve}}function Ge(a,t,s,o,g){if(!(!s||o.dodged)&&(s.armorBreak&&(t.armorBreak={pct:s.armorBreak.pct,turns:s.armorBreak.turns+1},g.push(`🧩 La armadura de ${t.name} queda expuesta.`)),s.dot&&o.damage>0&&(t.dots.push({damage:Math.max(3,a.attack*s.dot.ratio),turns:s.dot.turns,label:s.dot.label}),g.push(`🩸 ${t.name} queda afectado por ${s.dot.label}.`)),s.selfBuff)){if(a.buffs.push({turns:s.selfBuff.turns+1,values:{attackPct:s.selfBuff.attackPct||0,defensePct:s.selfBuff.defensePct||0,speedPct:s.selfBuff.speedPct||0}}),s.selfBuff.shieldPct){const A=Math.round(a.maxHp*s.selfBuff.shieldPct);a.shield+=A,g.push(`🛡️ ${a.name} obtiene un escudo de ${A}.`)}g.push(`✨ ${a.name} activa un refuerzo temporal.`)}}function Ze(a,t,s,o){if(a.hp<=0||t.hp<=0)return;let g=null;if(s?g=Ne(a,t):g=Re(a),!g)return Te(a,t,"Golpe básico",1,{},o);const A=(g.mult||1)*(s?fe(g.id):1),le=g.hits||1;let J=null;for(let U=0;U<le;U++){const ue={};g.critBonus&&(ue.critBonus=g.critBonus),g.lifestealBonus&&(ue.lifestealBonus=g.lifestealBonus);let ee=A;if(g.executeThreshold&&t.hp/t.maxHp<=g.executeThreshold&&(ee*=g.executeMult||1.6),J=Te(a,t,g.name,ee,ue,o),J.crit&&s&&(e.stats.crits+=1),t.hp<=0)break}return Ge(a,t,g,J,o),s?a.cooldowns[g.id]=g.cooldown:a.cooldowns.special=g.cooldown,J}function Oe(a){Object.keys(a.cooldowns).forEach(t=>{a.cooldowns[t]=Math.max(0,(a.cooldowns[t]||0)-1)})}function He(a,t={mode:"arena"}){const s=I(),o=K(a),g=[`🏟️ <b>${s.name}</b> se enfrenta a <b>${o.name}</b> en <b>${z[o.zoneId].name}</b>.`];let A=1;for(;s.hp>0&&o.hp>0&&A<=28&&(Be(s,g),Be(o,g),!(s.hp<=0||o.hp<=0));){const ue=se(s,"speed")+X(0,3)>=se(o,"speed")+X(0,3)?[[s,o,!0],[o,s,!1]]:[[o,s,!1],[s,o,!0]];for(const[ee,Ce,Ve]of ue){if(ee.hp<=0||Ce.hp<=0)continue;const Ae=Ze(ee,Ce,Ve,g);if(Ae&&Ae.damage>0&&(Ve?e.stats.damageDone+=Ae.damage:e.stats.damageTaken+=Ae.damage),Ce.hp<=0)break}Oe(s),Oe(o),A++}const le=s.hp>0&&o.hp<=0;e.player.hp=V(s.hp,1,h().maxHp);const J={gold:0,xp:0,iron:0,wood:0,essence:0,keys:0,potions:0};let U=null;if(le){const ue=z[o.zoneId],ee=S(30,54)+o.level*12+(o.kind==="elite"?45:o.kind==="boss"?70:0),Ce=S(22,38)+o.level*10+(o.kind==="boss"?55:0);J.gold=Math.round(ee*(1+h().goldPct)),J.xp=Math.round(Ce),J.iron=S(0,2+ue.id),J.wood=S(0,1+Math.floor(ue.id/2)),J.essence=Math.random()<.32+ue.id*.02?S(1,2+Math.floor(ue.id/2)):0,J.keys=t.mode==="dungeon"&&Math.random()<.13?1:0,J.potions=Math.random()<.08?1:0;const Ve=.26+m()*.7+(o.kind==="elite"?.1:0)+(o.kind==="boss"?.16:0)+(t.mode==="dungeon"?.1:0);if(Math.random()<Ve){const Ae=Math.random()-m()*.32-ue.id*.01-(o.kind==="elite"?.015:0)-(o.kind==="boss"?.04:0);let ze=null;(o.kind==="boss"||ue.id>=5)&&Ae<.0025?ze="mythic":(o.kind==="elite"||o.kind==="boss"||ue.id>=4)&&Ae<.013?ze="legendary":Ae<.06?ze="epic":Ae<.19&&(ze="rare"),U=Q(y(ne),o.level,ze),qe(U)}W(J,`Botín de ${o.name}`),e.stats.kills+=1,t.mode==="arena"&&(e.stats.wins+=1),t.mode==="dungeon"&&(e.stats.dungeons+=1),o.kind==="elite"&&(e.stats.elites+=1),o.kind==="boss"&&(e.player.highestDungeonFloor=Math.max(e.player.highestDungeonFloor,t.floor||e.player.highestDungeonFloor)),je("kills",1),t.mode==="arena"&&je("wins",1),t.mode==="dungeon"&&je("dungeons",1),o.kind==="elite"&&je("elites",1),w("⚔️",`Victoria contra <b>${o.name}</b>. ${ye(J)}${U?` · Botín: <span class="rarity-${U.rarity}">${U.name}</span>`:""}`),p(`Victoria sobre ${o.name}`,"success")}else t.mode==="arena"&&(e.stats.losses+=1),e.player.gold=Math.max(0,e.player.gold-S(10,25)),w("💀",`Has sido derrotado por <b>${o.name}</b>. La multitud te abuchea.`),p(`Derrota contra ${o.name}`,"danger");e.player.title=Ee().title,Ue(),e.combatHistory.unshift({id:u(),ts:Date.now(),title:`${le?"Victoria":"Derrota"} vs ${o.name}`,result:le?"victory":"defeat",enemy:o.name,zone:z[o.zoneId].name,log:g,rewards:J,drop:U}),e.combatHistory=e.combatHistory.slice(0,15),e.ui.modal={type:"combat",title:`${le?"Victoria":"Derrota"} — ${o.name}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Resultado</div>
              <div class="text-xl font-black ${le?"text-emerald-300":"text-rose-300"}">${le?"Has ganado":"Has perdido"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${ye(J)}${U?` · Botín: <span class="rarity-${U.rarity}">${U.name}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado final</div>
              <div class="text-lg font-black text-white">${G(e.player.hp)} HP restantes</div>
              <div class="text-sm text-slate-300/75 mt-1">${o.name} ${le?"cayó derrotado":"sobrevivió al duelo"}.</div>
            </div>
          </div>
          <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro de combate</div>
            <div class="space-y-2 text-sm text-slate-100/90">${g.map(ue=>`<div class="leading-relaxed">${ue}</div>`).join("")}</div>
          </div>
        </div>
      `}}function qe(a){if(a){if(e.player.inventory.length>=pe()){const t=Math.round(a.value*.45);e.player.gold+=t,e.stats.earnedGold+=t,w("📦",`Inventario lleno. <span class="rarity-${a.rarity}">${a.name}</span> se convierte en ${t} de oro.`),je("earnGold",t);return}e.player.inventory.push(a),e.player.inventory.sort((t,s)=>oe(s.rarity).value+s.score-(oe(t.rarity).value+t.score)),(a.rarity==="legendary"||a.rarity==="mythic")&&(e.stats.legendaryFound+=1),Ue()}}function Fe(a){e.player.inventory=e.player.inventory.filter(t=>t.id!==a)}function i(a){return e.player.inventory.find(t=>t.id===a)}function d(a){const t=i(a);if(!t)return;const s=t.slot,o=e.player.equipment[s];e.player.equipment[s]=t,Fe(a),o&&e.player.inventory.push(o),w("🧷",`Equipas <span class="rarity-${t.rarity}">${t.name}</span>.`)}function j(a){const t=e.player.equipment[a];if(!t||e.player.inventory.length>=pe()){p("No hay espacio en el inventario","danger");return}e.player.inventory.push(t),e.player.equipment[a]=null,w("🎒",`Guardas ${t.name} en el inventario.`)}function n(a){const t=i(a);if(!t)return;const s=Math.round(t.value*.65);e.player.gold+=s,e.stats.earnedGold+=s,je("earnGold",s),Fe(a),w("💰",`Vendes ${t.name} por ${s} de oro.`)}function r(a){const t=i(a);if(!t)return;const s=oe(t.rarity),o=Math.max(1,Math.round(t.level/3+s.affixes)),g=Math.max(0,Math.round(s.affixes/2)),A=t.rarity==="rare"?1:t.rarity==="epic"?2:t.rarity==="legendary"?4:t.rarity==="mythic"?6:0;e.player.iron+=o,e.player.wood+=g,e.player.essence+=A,e.stats.salvaged+=1,je("salvaged",1),Fe(a),w("♻️",`Reciclas ${t.name}: +${o} hierro, +${g} madera${A?`, +${A} esencia`:""}.`)}function x(){const a=h();if(e.player.potions<=0){p("No te quedan pociones","danger");return}if(e.player.hp>=a.maxHp){p("Ya estás con toda la vida","cyan");return}e.player.potions-=1;const t=Math.round(a.maxHp*.42);e.player.hp=V(e.player.hp+t,0,a.maxHp),w("🧪",`Bebes una poción y recuperas ${t} HP.`),p(`+${t} HP`,"success")}function $(){const a=re();if(e.streak.lastClaimDay===a){p("La recompensa diaria ya fue reclamada hoy","cyan");return}const t=re(Date.now()-864e5);e.streak.days=e.streak.lastClaimDay===t?Math.min(7,e.streak.days+1):1,e.streak.lastClaimDay=a;const s=e.streak.days,o={gold:180+s*70,xp:60+s*30,potions:s>=3?1:0,keys:s>=5?1:0,shards:s===7?3:1,essence:1+Math.floor(s/2)};W(o,`Recompensa diaria (día ${s})`),p(`Recompensa diaria reclamada — racha ${s}`,"gold")}function R(a){const t={strength:["Fuerza",1],agility:["Agilidad",1],endurance:["Resistencia",1],discipline:["Disciplina",1]};if(!t[a])return;if(e.player.attributePoints<=0){p("No tienes puntos de atributo","danger");return}e.player.attributePoints-=1,e.player.training[a]+=1;const s=h();e.player.hp=Math.min(e.player.hp,s.maxHp),w("🏋️",`Aumentas ${t[a][0]}.`)}function B(a){const t=D[a];if(!(!t||!e.player.unlockedSkills.includes(a))){if(e.player.skillPoints<=0){p("No tienes puntos de habilidad","danger");return}if((e.player.skillLevels[a]||1)>=5){p("Esa habilidad ya está al máximo","cyan");return}e.player.skillLevels[a]+=1,e.player.skillPoints-=1,w("📘",`Mejoras ${t.name} a nivel ${e.player.skillLevels[a]}.`)}}function he(a){if(!e.player.unlockedSkills.includes(a))return;const t=e.player.activeSkills,s=t.indexOf(a);if(s>=0){if(t.length<=1){p("Debes dejar al menos una habilidad activa","danger");return}t.splice(s,1)}else{if(t.length>=4){p("Máximo de 4 habilidades activas","cyan");return}t.push(a)}}function T(a=!0){const t=90+e.player.level*12;if(a){if(e.player.gold<t){p("No tienes oro suficiente para refrescar","danger");return}e.player.gold-=t}e.market.items=c(e.player.level),e.market.lastRefresh=Date.now(),w("🛒",`El mercado renueva su inventario${a?` por ${t} de oro`:""}.`)}function $e(a){const t=e.market.items.find(o=>o.id===a);if(!t)return;if(e.player.gold<t.price){p("Oro insuficiente","danger");return}if(e.player.inventory.length>=pe()){p("Inventario lleno","danger");return}e.player.gold-=t.price;const s=K(t);s.id=u(),qe(s),e.market.items=e.market.items.filter(o=>o.id!==a),w("🛍️",`Compras ${t.name} por ${t.price} de oro.`)}function We(a){const s={potion:{price:120,reward:{potions:1},label:"Poción"},key:{price:180,reward:{keys:1},label:"Llave de mazmorra"},essence:{price:140,reward:{essence:1},label:"Esencia"},food:{price:65,reward:{food:2},label:"Comida"}}[a];if(s){if(e.player.gold<s.price){p("Oro insuficiente","danger");return}e.player.gold-=s.price,W(s.reward,s.label)}}function Ye(a,t="normal"){const s=t==="premium"?{gold:260,iron:12,wood:7,essence:3}:{gold:140,iron:8,wood:4,essence:1};if(e.player.gold<s.gold||e.player.iron<s.iron||e.player.wood<s.wood||e.player.essence<s.essence){p("Te faltan materiales","danger");return}if(e.player.inventory.length>=pe()){p("Inventario lleno","danger");return}e.player.gold-=s.gold,e.player.iron-=s.iron,e.player.wood-=s.wood,e.player.essence-=s.essence;let o=null;if(t==="premium"){const A=Math.random()-Math.min(.06,e.player.level*.0015);e.player.level>=22&&A<.025?o="legendary":A<.26?o="epic":o="rare"}const g=Q(a,e.player.level+S(0,2),o,null,t==="premium"?1:0);qe(g),e.stats.crafted+=1,je("crafts",1),w("🔨",`Forjas ${g.name}.`),p(`Nuevo objeto: ${g.name}`,"gold")}function Je(a){const t=e.player.equipment[a];if(!t){p("No tienes ese hueco equipado","danger");return}if((t.upgrade||0)>=10){p("Ese objeto ya está al máximo","cyan");return}const s=oe(t.rarity),o=Math.round(90+t.level*18+t.upgrade*65+s.value*.4),g=Math.max(2,Math.round(3+t.upgrade*1.4+s.affixes)),A=t.upgrade>=6?1+Math.floor(t.upgrade/3):0;if(e.player.gold<o||e.player.iron<g||e.player.essence<A){p("No tienes materiales suficientes","danger");return}e.player.gold-=o,e.player.iron-=g,e.player.essence-=A,t.upgrade+=1,t.score=q(t),e.stats.crafted+=1,je("crafts",1),w("⚒️",`Mejoras ${t.name} a +${t.upgrade}.`)}function me(a){const t=i(a)||Object.values(e.player.equipment).find(g=>g&&g.id===a);if(!t)return;const s={gold:180,essence:2};if(e.player.gold<s.gold||e.player.essence<s.essence){p("Te faltan recursos para retemplar","danger");return}e.player.gold-=s.gold,e.player.essence-=s.essence;const o=Q(t.slot,Math.max(t.level,e.player.level),t.rarity,t.baseName);t.stats=o.stats,t.affixes=o.affixes,t.name=o.name,t.score=q(t),w("🌀",`Retemplas ${t.baseName} y nace ${t.name}.`)}function ve(a){const t=L.find(s=>s.id===a);if(t){if(e.timers.job){p("Ya tienes un trabajo en curso","cyan");return}if(e.player.energy<12){p("Necesitas al menos 12 de energía","danger");return}e.player.energy-=12,e.timers.job={id:t.id,name:t.name,endAt:Date.now()+t.duration*1e3,reward:K(t.reward),startedAt:Date.now()},w("🧰",`Comienzas el trabajo: <b>${t.name}</b>.`)}}function De(a=!1){if(!e.timers.job)return;const t=e.timers.job;e.timers.job=null,W(t.reward,`Trabajo terminado — ${t.name}`),a||p(`Trabajo completado: ${t.name}`,"success")}function xe(a,t){const s=z.find(g=>g.id===a);if(!s||!ge(s))return;if(e.timers.expedition){p("Ya estás en expedición","cyan");return}const o=s.energyCost+Math.floor(t/40);if(e.player.energy<o||e.player.stamina<s.staminaCost){p("No tienes recursos para partir","danger");return}e.player.energy-=o,e.player.stamina-=s.staminaCost,e.timers.expedition={zoneId:a,endAt:Date.now()+t*1e3,durationSec:t,startedAt:Date.now()},w("🧭",`Sales de expedición a <b>${s.name}</b> durante ${t}s.`)}function Ke(a=!1){if(!e.timers.expedition)return;const t=e.timers.expedition;e.timers.expedition=null;const s=z.find(A=>A.id===t.zoneId)||z[0],o=1+t.durationSec/90,g={gold:Math.round((90+s.id*50+e.player.level*16)*o*(1+h().goldPct)),xp:Math.round((55+s.id*35+e.player.level*12)*o),iron:S(1,3+s.id),wood:S(1,2+Math.floor(s.id/2)),essence:Math.random()<.45?S(1,2+Math.floor(s.id/2)):0,food:Math.random()<.5?1+Math.floor(s.id/2):0};if(W(g,`Expedición — ${s.name}`),e.stats.expeditions+=1,je("expeditions",1),Math.random()<.55+s.id*.03){const A=Q(y(ne),e.player.level+s.id,Math.random()<.12?"epic":null);qe(A),w("🎒",`Encuentras <span class="rarity-${A.rarity}">${A.name}</span> en la expedición.`)}a||p(`Expedición completada: ${s.name}`,"success")}function Xe(a=Date.now(),t=!1){let s=!1;return e.timers.job&&e.timers.job.endAt<=a&&(De(t),s=!0),e.timers.expedition&&e.timers.expedition.endAt<=a&&(Ke(t),s=!0),s}function ea(a="normal"){const t=Pe(),s=t.staminaCost+(a==="elite"?1:0);if(e.player.stamina<s||e.player.energy<t.energyCost){p("No tienes energía o aguante suficiente","danger");return}e.player.stamina-=s,e.player.energy-=t.energyCost;const o=b(t,a);He(o,{mode:"arena"})}function aa(a=3){const t=[];for(let s=0;s<a;s++){const o=Pe();if(e.player.stamina<o.staminaCost||e.player.energy<o.energyCost||e.player.hp<h().maxHp*.2)break;e.player.stamina-=o.staminaCost,e.player.energy-=o.energyCost;const g=b(o,"normal",s);He(g,{mode:"arena"});const A=e.combatHistory[0];if(t.push(`${A.result==="victory"?"✅":"❌"} ${A.title}`),A.result!=="victory")break}t.length&&(e.ui.modal={type:"summary",title:`Racha de arena x${t.length}`,content:`<div class="glass rounded-2xl p-4 text-sm text-slate-100/90 space-y-2">${t.map(s=>`<div>${s}</div>`).join("")}</div>`})}function ta(){if(e.player.keys<1){p("Necesitas una llave de mazmorra","danger");return}if(e.player.stamina<2){p("Necesitas al menos 2 de aguante","danger");return}e.player.keys-=1,e.player.stamina-=2;const a=e.player.highestDungeonFloor,t=z[Math.min(z.length-1,Math.floor((a-1)/2))],s=[];let o=!0;if([b(t,"normal",a*.8),b(t,"normal",a*.85),b(t,"elite",a*.9),b(t,"boss",a)].forEach((A,le)=>{if(!o)return;He(A,{mode:"dungeon",floor:a});const J=e.combatHistory[0];s.push(`${J.result==="victory"?"✅":"❌"} ${le<3?"Encuentro":"Jefe"}: ${A.name}`),J.result!=="victory"&&(o=!1)}),o){e.player.highestDungeonFloor+=1;const A={gold:120+a*55,xp:90+a*42,essence:2+Math.floor(a/3),shards:a%3===0?2:1};W(A,`Cofre del piso ${a}`),w("🏰",`Limpias el piso ${a} y avanzas al piso ${a+1}.`),p(`Piso ${a} superado`,"gold")}else w("🕸️",`No logras superar el piso ${a}.`);e.ui.modal={type:"summary",title:`Mazmorra — Piso ${a}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado</div>
              <div class="text-xl font-black ${o?"text-emerald-300":"text-rose-300"}">${o?"Incursión limpia":"Incursión fallida"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${o?"El botín del jefe ha sido asegurado.":"Tu grupo de uno no pudo seguir avanzando."}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ruta</div>
              <div class="space-y-2 text-sm">${s.map(A=>`<div>${A}</div>`).join("")}</div>
            </div>
          </div>
        </div>
      `}}function sa(){if(e.player.pet){p("Ya tienes una mascota activa","cyan");return}if(e.player.shards<5||e.player.essence<8){p("Necesitas 5 fragmentos y 8 de esencia","danger");return}e.player.shards-=5,e.player.essence-=8;const a=y(E);e.player.pet=a.id,e.player.petLevel=1,e.player.petXp=0,w("🐾",`Incubas a <b>${a.name}</b>. ${a.desc}`),p(`Mascota obtenida: ${a.name}`,"violet")}function na(){if(!e.player.pet){p("Aún no tienes mascota","danger");return}if(e.player.food<2||e.player.essence<1){p("Necesitas 2 de comida y 1 de esencia","danger");return}e.player.food-=2,e.player.essence-=1,e.player.petXp+=1,e.player.petXp>=3+e.player.petLevel&&(e.player.petXp=0,e.player.petLevel+=1,w("🐾",`Tu mascota alcanza nivel ${e.player.petLevel}.`),p(`Mascota nivel ${e.player.petLevel}`,"success"))}function ia(){if(!e.player.pet)return;const a=f();e.player.pet=null,e.player.petLevel=0,e.player.petXp=0,w("🪽",`Liberas a ${a?a.name:"tu mascota"} y recuperas tu calma.`)}function ra(a){if(e.player.relicDust<=0){p("No tienes polvo de reliquia","danger");return}a in e.player.relics&&(e.player.relicDust-=1,e.player.relics[a]+=1,w("🗿",`Inviertes una reliquia en ${a}.`))}function oa(){if(e.player.level<20&&e.player.highestDungeonFloor<8){p("Necesitas nivel 20 o piso 8 de mazmorra","danger");return}if(!window.confirm("Ascender reinicia nivel, equipo, inventario y recursos comunes, pero te da Polvo de Reliquia. ¿Continuar?"))return;const a=3+Math.floor(e.player.level/8)+Math.floor(e.player.highestDungeonFloor/4),t=K(e.player.relics),s=e.player.relicDust+a,o=e.player.ascension+1,g=O();g.player.relics=t,g.player.relicDust=s,g.player.ascension=o,g.player.shards=2,g.player.gold=320,N(g),H(),e.player.title=Ee().title,w("🔱",`Has ascendido. Obtienes ${a} de Polvo de Reliquia.`),Ue(),p(`Ascensión completada (+${a} reliquias)`,"gold")}function je(a,t){e.quests.forEach(s=>{s.claimed||s.type!==a||(s.progress+=t,s.progress>=s.target&&(s.progress=s.target,s.completed=!0))}),a==="crafts"&&(e.stats.crafted+=0),Ue()}function la(a){const t=e.quests.find(s=>s.id===a);!t||!t.completed||t.claimed||(t.claimed=!0,W(t.reward,`Misión: ${t.title}`),e.stats.questsCompleted+=1,w("📜",`Misión completada: <b>${t.title}</b>.`),e.quests.every(s=>s.claimed)&&(e.quests=be(e.player.level),w("🪄","Se generan nuevos contratos en el tablón.")),Ue())}function ca(){const a=140+e.player.level*12;if(e.player.gold<a){p("Oro insuficiente para renovar misiones","danger");return}e.player.gold-=a,e.quests=be(e.player.level),w("📌",`Renuevas el tablón de contratos por ${a} de oro.`)}function Qe(a){const t={kills:e.stats.kills,wins:e.stats.wins,questsCompleted:e.stats.questsCompleted,highestDungeonFloor:e.player.highestDungeonFloor,level:e.player.level,legendaryFound:e.stats.legendaryFound,guildTotal:P(),ascension:e.player.ascension};return Math.min(a.target,t[a.type]||0)}function Ue(){M.forEach(a=>{if(e.claimedAchievements.includes(a.id))return;Qe(a)>=a.target&&(e.claimedAchievements.push(a.id),W(a.reward,`Logro: ${a.title}`),w("🏆",`Logro desbloqueado: <b>${a.title}</b>.`),p(`Logro desbloqueado: ${a.title}`,"gold"))})}function da(a){const t=e.player.guild;if(!(a in t))return;const s=t[a]+1,o=180+s*110+P()*35,g=Math.max(1,Math.floor(s/2));if(e.player.gold<o||e.player.essence<g){p("No tienes recursos suficientes","danger");return}e.player.gold-=o,e.player.essence-=g,t[a]+=1,w("🏛️",`Mejoras ${a} del gremio al nivel ${t[a]}.`),Ue()}function ua(){const a=e.player.inventory.filter(s=>s.rarity==="common");if(!a.length){p("No hay chatarra común que vender","cyan");return}let t=0;a.forEach(s=>{t+=Math.round(s.value*.55)}),e.player.inventory=e.player.inventory.filter(s=>s.rarity!=="common"),e.player.gold+=t,e.stats.earnedGold+=t,je("earnGold",t),w("🧹",`Vendes automáticamente ${a.length} objetos comunes por ${t} de oro.`)}function pa(){const a=h();if(a.maxHp-e.player.hp<=0){p("Ya tienes la vida al máximo","cyan");return}let s=0;for(;e.player.hp<a.maxHp&&e.player.potions>0&&s<10;)e.player.potions-=1,e.player.hp=V(e.player.hp+a.maxHp*.42,0,a.maxHp),s++;w("🩹",`Usas ${s} poción(es) para recuperarte.`)}window.AetherSystems={addJournal:w,toast:p,grantRewards:W,summarizeReward:ye,gainXp:Me,currentRank:Ee,offlineCatchup:Le,passiveRegen:Se,zoneForPlayer:Pe,isZoneUnlocked:ge,setZone:Ie,enemyArchetypeMods:C,makeEnemy:b,buildPlayerCombatant:I,activeBuffValue:F,effectiveStat:se,skillLevelMult:fe,choosePlayerSkill:Ne,chooseEnemySkill:Re,decayStatuses:Be,performHit:Te,applySkillEffects:Ge,actorTurn:Ze,tickCooldowns:Oe,runCombat:He,acquireItem:qe,removeInventoryItem:Fe,getInventoryItem:i,equipItem:d,unequipItem:j,sellItem:n,salvageItem:r,usePotion:x,claimDaily:$,trainAttribute:R,upgradeSkill:B,toggleActiveSkill:he,refreshMarket:T,buyMarketItem:$e,buyResource:We,forgeItem:Ye,upgradeEquipped:Je,rerollItem:me,startJob:ve,completeJob:De,startExpedition:xe,completeExpedition:Ke,resolveFinishedTimers:Xe,fightArena:ea,arenaBlitz:aa,runDungeon:ta,hatchPet:sa,feedPet:na,releasePet:ia,spendRelic:ra,ascend:oa,trackQuest:je,claimQuest:la,rerollQuests:ca,achievementProgress:Qe,checkAchievements:Ue,upgradeGuild:da,autoManage:ua,autoHeal:pa}})();(()=>{const{SLOT_ORDER:ne,SLOT_NAMES:_,VIEWS:Y,VIEW_META:z,VIEW_GROUPS:L,MOBILE_PRIMARY_VIEWS:E,MOBILE_OVERFLOW_VIEWS:D,ZONES:M,JOBS:ae,PETS:K,SKILLS:S,ACHIEVEMENTS:X}=window.AetherConfig,{fmt:y,pct:V,htmlStat:ce,progressBar:u,timeLeft:G,rarityName:ie,rarityBadge:de,translateFilter:re,statLabel:we,statTooltip:oe}=window.AetherUtils,{state:Z,maxInventory:e,getPetData:N,getDerivedStats:O,scaleItemStats:H,xpNeeded:Q,guildTotal:ke,getStoreMeta:q}=window.AetherModel,{currentRank:te,zoneForPlayer:be,isZoneUnlocked:c,summarizeReward:pe,achievementProgress:P}=window.AetherSystems,f={home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5.25 9.75V21h13.5V9.75"/>',user:'<path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M4.5 20.25a7.5 7.5 0 0 1 15 0"/>',backpack:'<path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M6.75 7.5h10.5A2.25 2.25 0 0 1 19.5 9.75v9A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75v-9A2.25 2.25 0 0 1 6.75 7.5Z"/><path d="M9 12.75h6"/>',swords:'<path d="m4 20 7-7"/><path d="m13 11 7-7"/><path d="M14.5 4.5 19.5 9.5"/><path d="m4.5 14.5 5 5"/><path d="m9 9 6 6"/>',compass:'<circle cx="12" cy="12" r="8.25"/><path d="m14.75 9.25-1.65 4.85-4.85 1.65 1.65-4.85 4.85-1.65Z"/>',castle:'<path d="M5.25 21V9l3 1.5V6l3 1.5L15 6v4.5L18 9v12"/><path d="M3.75 21h16.5"/><path d="M9.75 21v-4.5h4.5V21"/>',cart:'<path d="M3.75 4.5h1.5l1.8 8.1a1.5 1.5 0 0 0 1.47 1.17h7.98a1.5 1.5 0 0 0 1.47-1.17L19.5 7.5H6.3"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17.25" cy="19.5" r="1.5"/>',hammer:'<path d="m14.25 5.25 4.5 4.5"/><path d="m6.75 12.75 7.5-7.5 3 3-7.5 7.5"/><path d="M5.25 14.25 3.75 20.25 9.75 18.75"/>',shield:'<path d="M12 3.75 5.25 6v5.25c0 4.29 2.7 8.11 6.75 9.5 4.05-1.39 6.75-5.21 6.75-9.5V6L12 3.75Z"/>',book:'<path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5v16.5H6.75A2.25 2.25 0 0 0 4.5 21V5.25Z"/><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 1 6.75 16.5h10.5"/>',briefcase:'<path d="M9 6V4.875A1.875 1.875 0 0 1 10.875 3h2.25A1.875 1.875 0 0 1 15 4.875V6"/><rect x="3.75" y="6" width="16.5" height="12.75" rx="2.25"/><path d="M3.75 11.25h16.5"/>',paw:'<circle cx="7" cy="9" r="1.25"/><circle cx="11" cy="6.5" r="1.25"/><circle cx="15" cy="6.5" r="1.25"/><circle cx="17" cy="10" r="1.25"/><path d="M12 18c-2.7 0-4.5-1.44-4.5-3.4 0-1.75 1.2-3.35 3.06-3.35.96 0 1.62.36 1.94.72.32-.36.98-.72 1.94-.72 1.86 0 3.06 1.6 3.06 3.35C16.5 16.56 14.7 18 12 18Z"/>',trophy:'<path d="M8.25 4.5h7.5v2.25A3.75 3.75 0 0 1 12 10.5 3.75 3.75 0 0 1 8.25 6.75V4.5Z"/><path d="M6 4.5h2.25v2.25A3 3 0 0 1 5.25 9.75H4.5A1.5 1.5 0 0 1 3 8.25v-.75A3 3 0 0 1 6 4.5Zm12 0h-2.25v2.25A3 3 0 0 0 18.75 9.75h.75A1.5 1.5 0 0 0 21 8.25v-.75A3 3 0 0 0 18 4.5Z"/><path d="M12 10.5v4.5"/><path d="M9 21h6"/><path d="M10.5 15h3v6h-3Z"/>',scroll:'<path d="M8.25 4.5h8.25A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5H8.25A3.75 3.75 0 0 1 4.5 15.75V8.25A3.75 3.75 0 0 1 8.25 4.5Z"/><path d="M8.25 4.5A2.25 2.25 0 0 0 6 6.75v9A2.25 2.25 0 0 1 3.75 18H6"/><path d="M9.75 9h4.5"/><path d="M9.75 12.75h4.5"/>',menu:'<path d="M4.5 7.5h15"/><path d="M4.5 12h15"/><path d="M4.5 16.5h15"/>',flask:'<path d="M10.5 3.75h3"/><path d="M10.5 3.75v5.1l-4.95 7.74A2.25 2.25 0 0 0 7.44 20.25h9.12a2.25 2.25 0 0 0 1.89-3.66L13.5 8.85v-5.1"/><path d="M8.25 14.25h7.5"/>',bandage:'<path d="m8.25 8.25 7.5 7.5"/><path d="m15.75 8.25-7.5 7.5"/><rect x="4.5" y="7.5" width="15" height="9" rx="2.25" transform="rotate(-45 12 12)"/>',gift:'<path d="M12 21V9"/><path d="M4.5 12h15"/><rect x="4.5" y="7.5" width="15" height="12.75" rx="2.25"/><path d="M12 7.5H8.25A2.25 2.25 0 1 1 10.5 5.25c0 .83-.43 1.56-1.08 1.97"/><path d="M12 7.5h3.75A2.25 2.25 0 1 0 13.5 5.25c0 .83.43 1.56 1.08 1.97"/>',broom:'<path d="M14.25 4.5 19.5 9.75"/><path d="M11.25 7.5 4.5 14.25"/><path d="M4.5 14.25 9.75 19.5"/><path d="m9.75 19.5 2.25-2.25"/>',crown:'<path d="M4.5 18 6.75 7.5 12 12l5.25-4.5L19.5 18Z"/><path d="M4.5 18h15"/>',flame:'<path d="M12 21c3.31 0 6-2.46 6-5.5 0-2.17-1.13-3.7-2.8-5.25-.9-.84-1.62-1.77-2.02-2.9-.38 1.3-1.25 2.45-2.42 3.55-1.75 1.64-4.76 3.45-4.76 6.6C6 18.54 8.69 21 12 21Z"/>',key:'<circle cx="8.25" cy="12" r="3.75"/><path d="M12 12h8.25"/><path d="M16.5 12v2.25"/><path d="M18.75 12v1.5"/>',spark:'<path d="M12 3.75 13.94 9.06 19.25 11 13.94 12.94 12 18.25 10.06 12.94 4.75 11 10.06 9.06 12 3.75Z"/>',bolt:'<path d="M13.5 3.75 7.5 13.5h4.5l-1.5 6.75 6-9.75h-4.5L13.5 3.75Z"/>',dumbbell:'<path d="M4.5 9v6"/><path d="M7.5 7.5v9"/><path d="M16.5 7.5v9"/><path d="M19.5 9v6"/><path d="M7.5 12h9"/>',check:'<circle cx="12" cy="12" r="8.25"/><path d="m8.75 12.25 2.25 2.25 4.25-4.5"/>',xcircle:'<circle cx="12" cy="12" r="8.25"/><path d="m9.75 9.75 4.5 4.5"/><path d="m14.25 9.75-4.5 4.5"/>',skull:'<path d="M12 3.75c-4.14 0-7.5 2.86-7.5 6.75 0 2.63 1.54 4.92 3.82 6.15V19.5h1.93v-1.5h3.5v1.5h1.93v-2.85c2.28-1.23 3.82-3.52 3.82-6.15 0-3.89-3.36-6.75-7.5-6.75Z"/><circle cx="9" cy="11.25" r="1"/><circle cx="15" cy="11.25" r="1"/><path d="M10.5 14.5h3"/>',info:'<circle cx="12" cy="12" r="8.25"/><path d="M12 10.5v5.25"/><path d="M12 7.5h.01"/>',wind:'<path d="M4.5 10.5h8.25a2.25 2.25 0 1 0-2.25-2.25"/><path d="M3.75 15h12a2.25 2.25 0 1 1-2.25 2.25"/><path d="M4.5 7.5h4.5"/>',droplet:'<path d="M12 3.75s5.25 5.79 5.25 9A5.25 5.25 0 1 1 6.75 12.75c0-3.21 5.25-9 5.25-9Z"/>',box:'<path d="m4.5 7.5 7.5-3 7.5 3-7.5 3-7.5-3Z"/><path d="M4.5 7.5v9l7.5 3 7.5-3v-9"/><path d="M12 10.5v9"/>',coins:'<circle cx="9" cy="12" r="3.75"/><path d="M12.75 9.75A3.75 3.75 0 1 1 16.5 16.5"/>',recycle:'<path d="m9 4.5 2.25 2.25L9 9"/><path d="M11.25 6.75H8.1A2.85 2.85 0 0 0 5.25 9.6v.15"/><path d="m15 19.5-2.25-2.25L15 15"/><path d="M12.75 17.25h3.15a2.85 2.85 0 0 0 2.85-2.85v-.15"/><path d="m18 9-3 0"/><path d="M18 9a2.85 2.85 0 0 0-2.85-2.85H15"/>',bag:'<path d="M7.5 9V7.5a4.5 4.5 0 0 1 9 0V9"/><path d="M5.25 9h13.5l-.9 9.45A2.25 2.25 0 0 1 15.61 20.5H8.39a2.25 2.25 0 0 1-2.24-2.05L5.25 9Z"/>',rotate:'<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4.5H15"/>',feather:'<path d="M19.5 4.5c-6 0-10.5 4.5-10.5 10.5v4.5"/><path d="M13.5 10.5 9 15"/><path d="M15.75 8.25 9 15"/>',gem:'<path d="m7.5 4.5-3 4.5 7.5 10.5L19.5 9l-3-4.5Z"/><path d="M9 4.5 12 9l3-4.5"/><path d="M4.5 9h15"/>',pin:'<path d="M9 4.5h6l-1.5 4.5 2.25 2.25v.75H8.25v-.75L10.5 9 9 4.5Z"/><path d="M12 12v7.5"/>'},h={"⚔️":"swords","⚔":"swords","👑":"crown","🔥":"flame","🌪️":"spark","🧭":"compass","🎒":"backpack","🏋️":"dumbbell","🧪":"flask","🩹":"bandage","🎁":"gift","🧹":"broom","🛒":"cart","⚒️":"hammer","⚒":"hammer","🗝️":"key","🗝":"key","✨":"spark","🐾":"paw","📋":"scroll","📚":"book","💼":"briefcase","🏆":"trophy","📜":"scroll","🛡️":"shield","🛡":"shield","👤":"user","◈":"home","☰":"menu","⚡":"bolt","💪":"dumbbell","✅":"check","❌":"xcircle","☠️":"skull","💨":"wind","🩸":"droplet","🌟":"spark","💀":"skull","📦":"box","💰":"coins","♻️":"recycle","♻":"recycle","📘":"book","🛍️":"bag","🛍":"bag","🔨":"hammer","🌀":"rotate","🧰":"briefcase","🏰":"castle","🪽":"feather","🪶":"feather","🗿":"gem","🔱":"spark","📌":"pin","🏛️":"castle","🏛":"castle","🏟️":"castle","🏟":"castle","🍖":"box"};function m(C,l="h-5 w-5"){const b=f[C]||f.spark;return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="${l}" aria-hidden="true">${b}</svg>`}function k(C,l,b={}){const{iconClass:I="h-4 w-4",wrapClass:F="inline-flex items-center gap-2",textClass:se=""}=b;return`<span class="${F}">${m(C,I)}<span class="${se}">${l}</span></span>`}function v(C=""){let l=String(C);return Object.entries(h).forEach(([b,I])=>{l=l.split(b).join(m(I,"h-4 w-4 inline-block align-[-0.2em]"))}),l}function w(C=""){return String(C).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function p(C=""){return String(C).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function W(C=""){const l=w(C);return l?`data-tooltip="${p(l)}"`:""}function ye(C=""){const l=W(C);return l?`<span tabindex="0" class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-200/80 cursor-help" ${l}>${m("info","h-3.5 w-3.5")}</span>`:""}function Me(){return z[Z.currentView]||z.resumen}function Ee(C,l=""){return`<span class="status-chip ${l}">${v(C)}</span>`}function Le(C,l,b="",I=""){return`
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div class="section-eyebrow">${C}</div>
          <div class="mt-1 flex items-center gap-2"><div class="section-title font-display">${l}</div>${ye(b||l)}</div>
          ${b?`<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/76">${v(b)}</p>`:""}
        </div>
        ${I?`<div class="shrink-0">${v(I)}</div>`:""}
      </div>
    `}function Se(C,l,b="",I=""){return`
      <div class="surface-strong rounded-2xl p-4 ${b}" ${W(I||l)}>
        <div class="mb-2 flex items-center gap-2 font-bold font-display text-white">${v(C)}${ye(I||l)}</div>
        <p class="text-sm text-slate-300/78 leading-relaxed">${v(l)}</p>
      </div>
    `}function Pe(C,l,b,I=""){return`<button class="btn ${l}" onclick="${b}" ${W(I||w(C))}>${v(C)}</button>`}function ge(C){return`
      <div class="mobile-cta-bar md:hidden">
        <div class="glass-strong rounded-[1.6rem] p-3 grid grid-cols-2 gap-2">
          ${C.join("")}
        </div>
      </div>
    `}function Ie(C,l="",b=""){const I=z[C]||Me(),F=L.find(fe=>fe.views.includes(C)),se=F?F.views:[C];return`
      <div class="glass rounded-3xl p-5 sm:p-6">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/[.08] ring text-cyan-200">${m(I.icon,"h-4 w-4")}</span>
              ${F?F.title:"Vista individual"}
            </div>
            <div class="flex items-center gap-2"><h2 class="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">${I.label}</h2>${ye(I.desc)}</div>
            <p class="text-sm sm:text-base text-slate-300/78 mt-2 max-w-3xl">${v(I.desc)}</p>
            ${b?`<div class="hero-actions mt-4 max-w-2xl">${b}</div>`:""}
          </div>
          ${l?`<div class="glass rounded-2xl px-4 py-3 text-sm text-slate-200/90 shrink-0">${v(l)}</div>`:""}
        </div>
        ${se.length>1?`
          <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-3">Navegación relacionada</div>
            <div class="view-links">
              ${se.map(fe=>`
                <button class="view-chip ${Z.currentView===fe?"active":""}" onclick="game.setView('${fe}')">
                  ${m(z[fe].icon,"h-4 w-4")}
                  <span>${z[fe].label}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}window.AetherViewRuntime={SLOT_ORDER:ne,SLOT_NAMES:_,VIEWS:Y,VIEW_META:z,VIEW_GROUPS:L,MOBILE_PRIMARY_VIEWS:E,MOBILE_OVERFLOW_VIEWS:D,ZONES:M,JOBS:ae,PETS:K,SKILLS:S,ACHIEVEMENTS:X,fmt:y,pct:V,htmlStat:ce,progressBar:u,timeLeft:G,rarityName:ie,rarityBadge:de,translateFilter:re,statLabel:we,statTooltip:oe,state:Z,maxInventory:e,getPetData:N,getDerivedStats:O,scaleItemStats:H,xpNeeded:Q,guildTotal:ke,getStoreMeta:q,currentRank:te,zoneForPlayer:be,isZoneUnlocked:c,summarizeReward:pe,achievementProgress:P,icon:m,withIcon:k,replaceEmojiIcons:v,stripHtml:w,escapeAttr:p,tooltipAttr:W,tooltipIcon:ye,activeMeta:Me,statusChip:Ee,sectionHeader:Le,infoCard:Se,actionButton:Pe,actionBar:ge,pageLead:Ie}})();(()=>{const ne=window.AetherViewRuntime,{VIEW_GROUPS:_,MOBILE_PRIMARY_VIEWS:Y,MOBILE_OVERFLOW_VIEWS:z,VIEW_META:L,state:E,fmt:D,htmlStat:M,progressBar:ae,xpNeeded:K,getDerivedStats:S,currentRank:X,activeMeta:y,getStoreMeta:V,icon:ce,withIcon:u,replaceEmojiIcons:G,tooltipAttr:ie}=ne;function de(){const e=S(),N=X(),O=y(),H=V(),Q=H.isSaving?"Guardando...":H.isDirty?"Cambios pendientes":H.lastSaveAt?`Guardado ${new Date(H.lastSaveAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Sin guardado",ke=H.isSaving?"warning":H.isDirty?"danger":"success";return`
      <div class="glass-strong rounded-[2rem] p-4 sm:p-5">
        <div class="grid xl:grid-cols-[1.1fr,.9fr] gap-4 sm:gap-5">
          <div class="space-y-4 min-w-0">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div class="min-w-0">
                <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
                  <span class="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.7)]"></span>
                  Aether Arena · ${O.label}
                </div>
                <h1 class="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">${E.player.name}</h1>
                <p class="text-slate-300/82 mt-2 text-sm sm:text-base">${E.player.title} · <b>${N.title}</b></p>
                <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span class="status-chip ${ke}">${Q}</span>
                  <span class="status-chip">Nivel ${E.player.level}</span>
                  <span class="status-chip">Zona ${O.label}</span>
                </div>
              </div>
              <div class="stat-pill rounded-2xl px-3 py-3 shrink-0 min-w-[120px]">
                <div class="text-xs text-slate-300/65">Recursos listos</div>
                <div class="text-base font-black text-emerald-300 leading-tight">${D(E.player.energy)}⚡ · ${D(E.player.stamina)}💪</div>
              </div>
            </div>

            <div class="space-y-3">
              ${ae(E.player.hp,e.maxHp,"bg-gradient-to-r from-rose-500 via-pink-400 to-orange-300 shadow-[0_0_18px_rgba(244,63,94,.35)]","Vida","Salud actual sobre tu vida máxima.")}
              ${ae(E.player.energy,e.maxEnergy,"bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_18px_rgba(34,211,238,.35)]","Energía","Recurso principal para varias acciones activas.")}
              ${ae(E.player.stamina,e.maxStamina,"bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_18px_rgba(74,222,128,.32)]","Aguante","Marca cuántas actividades físicas puedes sostener.")}
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            ${M("Oro",D(E.player.gold),"","Moneda principal para comprar, forjar y mejorar.")}
            ${M("Pociones",D(E.player.potions),"","Curación rápida para sostener el ciclo activo.")}
            ${M("Ataque",D(e.attack),"","Daño base de tus golpes y habilidades ofensivas.")}
            ${M("Mochila",`${E.player.inventory.length}/${window.AetherModel.maxInventory()}`,"","Capacidad usada frente al máximo disponible.")}
          </div>
        </div>
      </div>
    `}function re(e,N=!1){const O=L[e],H=E.currentView===e;return N?`
        <button class="mobile-nav-btn ${H?"active":""}" onclick="game.setView('${e}')" aria-label="Ir a ${O.label}" ${ie(O.desc)}>
          <span class="nav-icon">${ce(O.icon)}</span>
          <span class="nav-label">${O.label}</span>
        </button>
      `:`
      <button class="nav-link ${H?"active":""}" onclick="game.setView('${e}')" ${ie(O.desc)}>
        <span class="nav-icon">${ce(O.icon)}</span>
        <span class="min-w-0">
          <span class="block font-bold leading-tight">${O.label}</span>
        </span>
      </button>
    `}function we(){return`
      <div class="glass rounded-3xl p-4 lg:p-5 sticky top-4 space-y-5">
        <div>
          <div class="text-xs uppercase tracking-[.2em] text-slate-300/55 mb-1">Navegación</div>
          <div class="text-2xl font-display font-extrabold">Vistas</div>
          <p class="text-sm text-slate-300/74 mt-2">Cada pantalla muestra una tarea principal y deja el resto como apoyo.</p>
        </div>

        <div class="space-y-4">
          ${_.map(e=>`
            <div>
              <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45 mb-2">${e.title}</div>
              <div class="grid gap-2">
                ${e.views.map(N=>re(N)).join("")}
              </div>
            </div>
          `).join("")}
        </div>

        <div class="space-y-2">
          <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45">Acciones rápidas</div>
          <div class="grid grid-cols-2 gap-2">
            <button class="btn btn-success !py-3" onclick="game.usePotion()" ${ie("Consume una poción para recuperar salud y seguir combatiendo.")}>${u("flask","Poción")}</button>
            <button class="btn btn-primary !py-3" onclick="game.autoManage()" ${ie("Vende o recicla excedentes para despejar la mochila.")}>${u("broom","Limpiar")}</button>
          </div>
        </div>
      </div>
    `}function oe(){return`
      <nav class="mobile-nav glass-strong md:hidden">
        <div class="mobile-nav-grid">
          ${Y.map(e=>re(e,!0)).join("")}
          <button class="mobile-nav-btn ${E.ui.moreMenuOpen?"active":""}" onclick="game.toggleMoreMenu()" aria-label="Abrir más vistas">
            <span class="nav-icon">${ce("menu")}</span>
            <span class="nav-label">Más</span>
          </button>
        </div>
      </nav>
    `}function Z(){return E.ui.moreMenuOpen?`
      <div class="fixed inset-0 z-40 md:hidden">
        <button class="absolute inset-0 bg-slate-950/72 backdrop-blur-sm" onclick="game.toggleMoreMenu(false)"></button>
        <div class="absolute left-3 right-3 bottom-[calc(var(--mobile-nav-h)+var(--safe-bottom)+.4rem)] glass-strong rounded-[2rem] p-4 animate-[slideUp_.18s_ease] max-h-[72vh] overflow-y-auto">
          <div class="flex items-center justify-between gap-3 mb-4 sticky top-0 pb-3 bg-transparent">
            <div>
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Más vistas</div>
              <div class="text-xl font-display font-extrabold">Menú completo</div>
            </div>
            <button class="btn !px-3 !py-2" onclick="game.toggleMoreMenu(false)">Cerrar</button>
          </div>
          <div class="space-y-4">
            ${_.map(e=>`
              <section class="mobile-sheet-group">
                <div class="mobile-sheet-title">${e.title}</div>
                <div class="grid grid-cols-1 gap-2">
                  ${e.views.filter(N=>!Y.includes(N)).map(N=>`
                    <button class="nav-link ${E.currentView===N?"active":""}" onclick="game.setView('${N}')">
                      <span class="nav-icon">${ce(L[N].icon)}</span>
                      <span class="min-w-0">
                        <span class="block font-bold leading-tight">${L[N].label}</span>
                        <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${L[N].short}</span>
                      </span>
                    </button>
                  `).join("")||'<div class="text-sm text-slate-300/55 px-2 py-1">Ya visible en la barra inferior.</div>'}
                </div>
              </section>
            `).join("")}
          </div>
        </div>
      </div>
    `:""}window.AetherViewLayout={renderHud:de,renderDesktopNav:we,renderMobileNav:oe,renderMobileSheet:Z}})();(()=>{const ne=window.AetherViewRuntime,{SLOT_ORDER:_,SLOT_NAMES:Y,VIEWS:z,VIEW_META:L,ZONES:E,JOBS:D,PETS:M,SKILLS:ae,ACHIEVEMENTS:K,fmt:S,pct:X,htmlStat:y,progressBar:V,timeLeft:ce,state:u,maxInventory:G,getPetData:ie,getDerivedStats:de,scaleItemStats:re,xpNeeded:we,guildTotal:oe,currentRank:Z,zoneForPlayer:e,isZoneUnlocked:N,summarizeReward:O,achievementProgress:H,icon:Q,replaceEmojiIcons:ke,rarityName:q,rarityBadge:te,translateFilter:be,statLabel:c,statTooltip:pe,tooltipAttr:P,activeMeta:f,statusChip:h,sectionHeader:m,infoCard:k,actionButton:v,actionBar:w,pageLead:p}=ne;function W(n){const r=u.player.equipment[n];return`
      <div class="rounded-2xl ring p-3 bg-white/[.04]">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${Y[n]}</div>
            ${r?`<div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-bold leading-snug rarity-${r.rarity}">${r.name}</div>${te(r.rarity)}</div>
                 <div class="text-xs text-slate-300/70 mt-1">Nivel ${r.level} · Mejora +${r.upgrade||0}</div>`:'<div class="font-bold mt-1 text-slate-400/80">Vacío</div>'}
          </div>
          ${r?`<button class="btn !px-3 !py-2 text-xs" onclick="game.unequipItem('${n}')">Quitar</button>`:""}
        </div>
      </div>
    `}function ye(n){return`
      <div class="glass rounded-2xl p-4">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div class="min-w-0">
            <div class="font-black text-lg">${n.title}</div>
            <div class="text-sm text-slate-300/75 mt-1">${n.desc}</div>
            <div class="text-xs text-slate-300/60 mt-3">${O(n.reward)}</div>
          </div>
          <button class="btn ${n.completed?"btn-success":""}" ${n.completed&&!n.claimed?`onclick="game.claimQuest('${n.id}')"`:"disabled"}>
            ${n.claimed?"Cobrada":n.completed?"Cobrar":`${S(n.progress)}/${S(n.target)}`}
          </button>
        </div>
        <div class="mt-3">${V(n.progress,n.target,"bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-300 shadow-[0_0_18px_rgba(192,132,252,.32)]","Progreso","Avance actual del contrato seleccionado.")}</div>
      </div>
    `}function Me(){return u.timers.expedition?ce(u.timers.expedition.endAt):"0s"}function Ee(){return u.timers.job?ce(u.timers.job.endAt):"0s"}function Le(n,r,x){return r<=1?"":`
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
        <div class="text-sm text-slate-300/72">Página <b>${n}</b> de <b>${r}</b></div>
        <div class="flex gap-2">
          <button class="btn !py-2 !px-3" ${n<=1?"disabled":`onclick="game.${x}(${n-1})"`}>← Anterior</button>
          <button class="btn !py-2 !px-3" ${n>=r?"disabled":`onclick="game.${x}(${n+1})"`}>Siguiente →</button>
        </div>
      </div>
    `}function Se(){return`
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
        ${E.map(n=>`
          <button
            class="text-left glass rounded-2xl p-4 transition ${u.player.zoneId===n.id?"ring ring-cyan-300/35 bg-cyan-400/8":""} ${N(n)?"":"opacity-45"}"
            ${N(n)?`onclick="game.setZone(${n.id})"`:"disabled"}
            ${P(`Zona ${n.name}. Requiere nivel ${n.unlockLevel} y consume ${n.energyCost} de energía y ${n.staminaCost} de aguante.`)}
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="font-black text-lg">${n.name}</div>
                <div class="text-xs text-slate-300/60 mt-1">Nivel ${n.unlockLevel}+ · ${n.theme}</div>
              </div>
              <div class="text-xs rounded-full px-2.5 py-1 bg-white/[.06]">${N(n)?"Activa":"Bloqueada"}</div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
              <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${Q("bolt","h-4 w-4 text-cyan-300")}<span>${n.energyCost} energía</span></div>
              <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${Q("dumbbell","h-4 w-4 text-emerald-300")}<span>${n.staminaCost} aguante</span></div>
            </div>
          </button>
        `).join("")}
      </div>
    `}function Pe(n,r){return n==="crit"||n==="dodge"||n==="block"||n==="lifesteal"?X(r):S(r)}function ge(n){const r=u.player.equipment[n.slot];if(!r)return{label:"Mejora limpia",tone:"success",detail:"No tienes una pieza equipada en este espacio."};const x=(n.score||0)-(r.score||0);return x>0?{label:`+${S(x)} puntuación`,tone:"success",detail:`Mejora respecto a ${r.name}.`}:x<0?{label:`${S(x)} puntuación`,tone:"danger",detail:`Rinde peor que ${r.name}.`}:{label:"Puntuación similar",tone:"",detail:`Rinde de forma parecida a ${r.name}.`}}function Ie(n,r=4){return Object.entries(re(n)).slice(0,r).map(([x,$])=>`<div class="rounded-xl bg-white/[.04] p-2.5" ${P(pe(x))}>${c(x)}: <b>${Pe(x,$)}</b></div>`).join("")}function C(n){const r=n.filter($=>$.rarity==="legendary").length,x=n.filter($=>ge($).tone==="success").length;return`
      <div class="grid sm:grid-cols-3 gap-3 mb-4">
        ${y("Objetos filtrados",n.length)}
        ${y("Mejoras posibles",x)}
        ${y("Legendarios",r,"","Cantidad de objetos legendarios visibles en este filtro.")}
      </div>
    `}function l(n,r,x){return`
      <div class="surface-strong rounded-2xl p-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Expedición</div>
            <div class="text-2xl font-black mt-1">${n}s</div>
            <p class="text-sm text-slate-300/74 mt-2">${x}</p>
          </div>
          ${h(n<=30?"Corta":n<120?"Media":"Larga",r)}
        </div>
        <button class="btn ${r==="success"?"btn-primary":r==="warning"?"btn-gold":"btn-violet"} mt-4 w-full" onclick="game.startExpedition(${u.player.zoneId}, ${n})">Enviar ${n}s</button>
      </div>
    `}function b(n,r,x,$={}){const{open:R=!1,badge:B="",iconName:he="info",hint:T="Ver módulo"}=$;return`
      <details class="glass rounded-3xl p-5" ${R?"open":""}>
        <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
          <div class="flex items-center justify-between gap-3">
            <div class="min-w-0">
              <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${n}</div>
              <div class="mt-1 flex items-center gap-3 min-w-0">
                <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[.06] ring text-cyan-200">${Q(he,"h-4 w-4")}</span>
                <div class="min-w-0">
                  <div class="font-display font-extrabold text-lg leading-tight">${r}</div>
                  ${B?`<div class="mt-1">${B}</div>`:""}
                </div>
              </div>
            </div>
            <span class="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">${T}</span>
          </div>
        </summary>
        <div class="mt-4">${x}</div>
      </details>
    `}function I(){let n=[...u.player.inventory];const r=u.ui.inventoryFilter;if(r!=="all"&&(n=n.filter(T=>T.slot===r||T.rarity===r)),!n.length)return'<div class="glass rounded-2xl p-5 text-slate-300/75">Tu inventario está vacío o el filtro no devuelve resultados.</div>';const x=Math.max(6,u.ui.inventoryPageSize||18),$=Math.max(1,Math.ceil(n.length/x)),R=Math.min(Math.max(1,u.ui.inventoryPage||1),$),B=(R-1)*x,he=n.slice(B,B+x);return`
      ${C(n)}
      <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${B+1}</b>–<b>${Math.min(B+x,n.length)}</b> de <b>${n.length}</b> objetos filtrados.</div>
      <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
        ${he.map(T=>{const $e=ge(T);return`
            <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro" ${P(`Objeto de rareza ${q(T.rarity)}. Puntuación ${S(T.score)}. ${$e.detail}`)}>
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${T.rarity} leading-snug">${T.name}</div>${te(T.rarity)}</div>
                  <div class="text-xs text-slate-300/60 mt-1">${Y[T.slot]} · Nivel ${T.level} · Mejora +${T.upgrade||0}</div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]" ${P("Puntuación total estimada del objeto según sus estadísticas y mejora actual.")}>Punt. ${S(T.score)}</div>
                  <div class="mt-2">${h($e.label,$e.tone)}</div>
                </div>
              </div>
              <p class="text-xs text-slate-300/62 mt-3">${$e.detail}</p>
              <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                ${Ie(T,4)}
              </div>
              <div class="grid gap-2 mt-4">
                <button class="btn btn-success !py-2.5 w-full" onclick="game.equipItem('${T.id}')">Equipar</button>
                <div class="grid grid-cols-3 gap-2">
                  <button class="btn !py-2 text-xs" onclick="game.sellItem('${T.id}')">Vender</button>
                  <button class="btn !py-2 text-xs" onclick="game.salvageItem('${T.id}')">Reciclar</button>
                  <button class="btn btn-violet !py-2 text-xs" onclick="game.rerollItem('${T.id}')">Retemplar</button>
                </div>
              </div>
            </div>
          `}).join("")}
      </div>
      ${Le(R,$,"setInventoryPage")}
    `}function F(){const n=e(),r=u.quests.find(x=>!x.claimed)||u.quests[0];return`
      <div class="space-y-5">
        ${p("resumen",`Zona activa: <b>${n.name}</b>`,[v("⚔️ Continuar en arena","btn-primary","game.setView('arena')","Abre la arena para seguir con combates activos y botín."),v("🧭 Lanzar expedición","","game.setView('expedicion')","Accede a expediciones para progreso pasivo y materiales."),v("🎒 Revisar mochila","btn-violet","game.setView('inventario')","Abre el inventario para equipar, vender o reciclar piezas.")].join(""))}
        ${w([v("⚔️ Arena","btn-primary !py-3","game.setView('arena')"),v("🎒 Mochila","!py-3","game.setView('inventario')")])}
        <div class="grid xl:grid-cols-[1.15fr,.85fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Tu ciclo","Haz solo una de estas cosas ahora","El resumen deja de intentar mostrar todo. Aquí solo eliges el siguiente paso.")}
            <div class="grid md:grid-cols-3 gap-3">
              <button class="surface-strong rounded-2xl p-4 text-left" onclick="game.setView('arena')">
                <div class="font-black text-lg">Pelear</div>
                <p class="text-sm text-slate-300/76 mt-2">Ve a Arena si quieres progreso activo, oro y botín.</p>
              </button>
              <button class="surface-strong rounded-2xl p-4 text-left" onclick="game.setView('inventario')">
                <div class="font-black text-lg">Ordenar</div>
                <p class="text-sm text-slate-300/76 mt-2">Abre Inventario si la mochila está llena o tienes mejoras nuevas.</p>
              </button>
              <button class="surface-strong rounded-2xl p-4 text-left" onclick="game.setView('expedicion')">
                <div class="font-black text-lg">Progreso pasivo</div>
                <p class="text-sm text-slate-300/76 mt-2">Usa Expedición o Trabajo si quieres seguir generando recursos.</p>
              </button>
            </div>

            <div class="mt-5 grid sm:grid-cols-2 gap-3">
              ${k("Expedición",u.timers.expedition?`${E[u.timers.expedition.zoneId].name} · <span data-live-timer="expedition">${Me()}</span>`:"No hay expedición activa.","surface-subtle")}
              ${k("Trabajo",u.timers.job?`${u.timers.job.name} · <span data-live-timer="job">${Ee()}</span>`:"No hay trabajo activo.","surface-subtle")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${m("Prioridad","Un solo objetivo visible")}
              ${r?ye(r):'<div class="empty-state">No hay contratos disponibles.</div>'}
              <div class="mt-4 grid grid-cols-2 gap-2">
                <button class="btn" onclick="game.setView('diario')">Diario</button>
                <button class="btn" onclick="game.setView('logros')">Logros</button>
              </div>
            </div>
            <div class="glass rounded-3xl p-5">
              ${m("Estado rápido","Solo lo que condiciona decisiones")}
              <div class="grid grid-cols-2 gap-3">
                ${y("Mochila",`${u.player.inventory.length}/${G()}`,"","Capacidad usada del inventario frente al máximo disponible.")}
                ${y("Llaves",u.player.keys)}
                ${y("Pociones",u.player.potions)}
                ${y("Racha",`${u.streak.days||0}/7`)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function se(){const n=de(),r=Z(),x=ie();return`
      <div class="space-y-5">
        ${p("perfil",`${r.title}`,[v("🎒 Ver equipo","btn-primary","game.setView('inventario')"),v("🏋️ Entrenar","","game.setView('entrenamiento')")].join(""))}
        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Identidad","Tu estado actual","Esta pantalla se centra en quién eres y cómo rindes, no en todas las decisiones de la partida.")}
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Gladiador</div>
                <div class="text-3xl font-black mt-1">${u.player.name}</div>
                <div class="text-sm text-cyan-200/85 mt-1">${u.player.title}</div>
              </div>
              <div class="grid grid-cols-2 gap-3 min-w-[250px]">
                ${y("Ascensiones",u.player.ascension,"","Cantidad de reinicios meta completados para progresión permanente.")}
                ${y("Piso más alto",u.player.highestDungeonFloor,"","Mayor piso de mazmorra superado hasta ahora.")}
                ${y("Inventario",`${u.player.inventory.length}/${G()}`,"","Capacidad actual de la mochila frente a su límite máximo.")}
                ${y("Polvo",u.player.relicDust,"","Moneda meta usada en reliquias y mejoras permanentes.")}
              </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              ${y("Ataque",S(n.attack))}
              ${y("Defensa",S(n.defense))}
              ${y("Velocidad",S(n.speed))}
              ${y("Vida máxima",S(n.maxHp),"","Total de salud disponible antes de caer derrotado.")}
              ${y("Golpe crítico",X(n.crit),"","Probabilidad de infligir daño aumentado en combate.")}
              ${y("Esquiva",X(n.dodge))}
              ${y("Bloqueo",X(n.block))}
              ${y("Robo de vida",X(n.lifesteal),"","Porcentaje del daño que regresa como curación.")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${m("Equipo","Lectura rápida")}
              <div class="space-y-2">${_.slice(0,4).map(W).join("")}</div>
              <button class="btn mt-4 w-full" onclick="game.setView('inventario')">Abrir inventario completo</button>
            </div>
            <div class="glass rounded-3xl p-5">
              ${m("Apoyos","Compañero y utilidades")}
              <div class="grid gap-3">
                ${x?k(`${Q(x.icon||"paw","h-4 w-4 inline-block mr-2 align-[-0.15em]")}${x.name}`,`Nivel ${u.player.petLevel} · XP ${u.player.petXp}/${3+u.player.petLevel}<br>${x.desc}`,"surface-subtle"):k("Sin mascota activa","Incuba una en la vista de Mascota.","surface-subtle")}
              </div>
              <div class="grid grid-cols-2 gap-2 mt-4">
                <button class="btn btn-success" onclick="game.usePotion()" ${P("Consume una poción para recuperar salud fuera de combate.")}>🧪 Poción</button>
                <button class="btn btn-primary" onclick="game.autoHeal()" ${P("Aplica una curación automática si tienes recursos disponibles.")}>🩹 Curar</button>
                <button class="btn btn-gold" onclick="game.claimDaily()" ${P("Reclama tu recompensa diaria cuando esté lista.")}>🎁 Diario</button>
                <button class="btn" onclick="game.setView('mascota')" ${P("Abre la gestión de tu mascota activa y sus bonificaciones.")}>🐾 Mascota</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function fe(){const n=["weapon","chest","ring","amulet"].map(W).join("");return`
      <div class="space-y-5">
        ${p("inventario",`Capacidad: <b>${u.player.inventory.length}/${G()}</b>`,[v("🧹 Gestión automática","btn-primary","game.autoManage()","Vende y recicla excedentes de forma automática."),v("⚒️ Forja","","game.setView('forja')"),v("🛒 Mercado","btn-violet","game.setView('mercado')")].join(""))}
        ${w([v("🧹 Limpiar","btn-primary !py-3","game.autoManage()"),v("⚒️ Forja","!py-3","game.setView('forja')")])}
        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Mochila","Decide pieza por pieza","La vista principal se centra en filtrar, comparar y actuar. El contexto extra queda a un lado y solo cuando lo necesites.")}
            <div class="space-y-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Filtro por tipo</div>
                <div class="filters-row mt-2">
                  ${["all",..._].map(r=>`
                    <button class="btn filter-pill ${u.ui.inventoryFilter===r?"active tab-btn":""}" onclick="game.setInventoryFilter('${r}')" ${P(`Filtrar inventario por ${be(r).toLowerCase()}.`)}>${be(r)}</button>
                  `).join("")}
                </div>
              </div>
              <details class="surface-subtle rounded-2xl p-4">
                <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <div class="text-sm font-bold">Filtros avanzados</div>
                      <div class="text-xs text-slate-300/62 mt-1">Rareza y limpieza, solo cuando vayas a optimizar.</div>
                    </div>
                    <span class="inline-flex items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Rareza</span>
                  </div>
                </summary>
                <div class="filters-row mt-3">
                  ${["common","uncommon","rare","epic","legendary","mythic"].map(r=>`
                    <button class="btn filter-pill ${u.ui.inventoryFilter===r?"active tab-btn":""}" onclick="game.setInventoryFilter('${r}')" ${P(`Filtrar inventario por ${be(r).toLowerCase()}.`)}>${be(r)}</button>
                  `).join("")}
                </div>
              </details>
            </div>
            ${I()}
          </section>

          <aside class="stack-compact">
            ${b("Referencia","Equipo equipado ahora",`<div class="space-y-2">${n}</div>`,{open:!0,iconName:"shield",hint:"Referencia"})}
            ${b("Recursos","Límites de gestión",`
              <div class="grid grid-cols-2 gap-3">
                ${y("Hierro",S(u.player.iron))}
                ${y("Madera",S(u.player.wood))}
                ${y("Comida",S(u.player.food))}
                ${y("Oro",S(u.player.gold))}
              </div>
              <p class="text-sm text-slate-300/72 mt-4">Usa limpieza automática si la mochila ya está llena o si una ronda de decisiones manuales no aporta mejoras claras.</p>
            `,{iconName:"coins",hint:"Ver costes"})}
          </aside>
        </div>
      </div>
    `}function Ne(){const n=e(),r=u.player.activeSkills.map($=>ae[$]).filter(Boolean),x=u.combatHistory.slice(0,2);return`
      <div class="space-y-5">
        ${p("arena",`Zona: <b>${n.name}</b> · Coste <b>${n.energyCost}⚡ / ${n.staminaCost}💪</b>`,[v("⚔️ Normal","btn-primary","game.fightArena('normal')"),v("👑 Élite","btn-violet","game.fightArena('elite')"),v("🔥 x3","btn-gold","game.arenaBlitz(3)")].join(""))}
        ${w([v("⚔️ Normal","btn-primary !py-3","game.fightArena('normal')"),v("👑 Élite","btn-violet !py-3","game.fightArena('elite')")])}
        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Combate","Elige y entra","La arena deja visible solo la decisión principal. Zona, build e historial quedan como módulos secundarios.")}
            <div class="grid md:grid-cols-3 gap-3">
              <button class="surface-strong rounded-2xl p-4 text-left" onclick="game.fightArena('normal')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Normal</div>
                  ${h("Flujo","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Progreso estable y bajo riesgo para seguir farmeando.</p>
              </button>
              <button class="surface-strong elite-card rounded-2xl p-4 text-left" onclick="game.fightArena('elite')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Élite</div>
                  ${h("Riesgo","warning")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Más exigente, mejor recompensa si tu build ya está firme.</p>
              </button>
              <button class="surface-strong reward-card rounded-2xl p-4 text-left" onclick="game.arenaBlitz(3)">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Racha x3</div>
                  ${h("Acelerar")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Acelera progreso cuando ya dominas la zona actual.</p>
              </button>
            </div>

            <div class="grid sm:grid-cols-3 gap-3 mt-4">
              ${y("Zona activa",n.name,n.theme)}
              ${y("Coste",`${n.energyCost}⚡ / ${n.staminaCost}💪`,"Por combate")}
              ${y("Registro",`${u.stats.wins}V / ${u.stats.losses}D`,"Historial global")}
            </div>

            <details class="surface-subtle rounded-2xl p-4 mt-4">
              <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <div class="text-sm font-bold">Cambiar zona</div>
                    <div class="text-xs text-slate-300/62 mt-1">Solo ábrelo cuando quieras mover el foco de la partida.</div>
                  </div>
                  <span class="inline-flex items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Destino</span>
                </div>
              </summary>
              <div class="mt-4">
                ${Se()}
              </div>
            </details>
          </section>

          <aside class="stack-compact">
            ${b("Preparación","Build activa para esta zona",`
              <div class="grid gap-3">
                ${k("Habilidades activas",r.length?r.map($=>`${$.name} · Nv ${u.player.skillLevels[$.id]||1}`).join("<br>"):"No hay habilidades activas equipadas.","surface-subtle","Lista de habilidades equipadas y su nivel actual.")}
                ${k("Lectura rápida",`Victorias ${u.stats.wins} · Derrotas ${u.stats.losses} · Bajas ${u.stats.kills}`,"surface-subtle","Resumen breve de tu desempeño reciente en combate.")}
              </div>
            `,{open:!0,iconName:"shield",hint:"Build"})}
            ${b("Historial","Últimos resultados",`
              <div class="space-y-3">
                ${x.length?x.map($=>`
                  <button class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${$.id}')">
                    <div class="font-black ${$.result==="victory"?"text-emerald-300":"text-rose-300"}">${$.title}</div>
                    <div class="text-sm text-slate-300/70 mt-1">${$.zone}</div>
                  </button>
                `).join(""):'<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            `,{iconName:"scroll",hint:"Ver combates"})}
          </aside>
        </div>
      </div>
    `}function Re(){return`
      <div class="space-y-5">
        ${p("expedicion",u.timers.expedition?`En curso: <b>${E[u.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${Me()}</span>`:"Sin expedición activa",[v("30s","btn-primary",`game.startExpedition(${u.player.zoneId}, 30)`),v("60s","",`game.startExpedition(${u.player.zoneId}, 60)`),v("120s","btn-gold",`game.startExpedition(${u.player.zoneId}, 120)`)].join(""))}
        ${w([v("30s","btn-primary !py-3",`game.startExpedition(${u.player.zoneId}, 30)`),v("120s","btn-gold !py-3",`game.startExpedition(${u.player.zoneId}, 120)`)])}
        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Paso 1","Elige destino","Primero eliges la zona. Después eliges cuánto tiempo comprometer.")}
            ${Se()}
            <div class="mt-5">
              ${m("Paso 2","Elige duración")}
              <div class="grid lg:grid-cols-3 gap-3">
                ${l(30,"success","Salida corta para mantener el flujo.")}
                ${l(60,"","Punto medio si sigues tocando otras vistas.")}
                ${l(120,"warning","Más retorno, más espera.")}
              </div>
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${m("Qué mirar","Solo tres ideas")}
              <div class="grid gap-3">
                ${k("Destino","Usa zonas ya cómodas si solo buscas recursos seguros.","surface-subtle")}
                ${k("Duración","Cuanto más larga, más sentido tiene si vas a dejar el juego corriendo.","surface-subtle")}
                ${k("Después","Cuando termine, decide entre Arena para seguir progresando o Inventario para ordenar.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function Be(){return`
      <div class="space-y-5">
        ${p("mazmorra",`Llaves: <b>${u.player.keys}</b> · Piso más alto: <b>${u.player.highestDungeonFloor}</b>`,[v("🗝️ Entrar","btn-gold","game.runDungeon()","Consume una llave y empieza una incursión de mazmorra."),v("🎒 Revisar equipo","","game.setView('inventario')")].join(""))}
        ${w([v("🗝️ Entrar","btn-gold !py-3","game.runDungeon()"),v("🎒 Equipo","!py-3","game.setView('inventario')")])}
        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Recorrido","La mazmorra de este intento","Aquí solo ves la ruta y decides si entrar o prepararte mejor.")}
            <div class="grid gap-2 text-sm">
              <div class="rounded-xl bg-white/[.04] p-3">1. Enemigo base</div>
              <div class="rounded-xl bg-white/[.04] p-3">2. Enemigo base</div>
              <div class="rounded-xl bg-white/[.04] p-3">3. Enemigo élite</div>
              <div class="rounded-xl bg-white/[.04] p-3">4. Jefe del piso</div>
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${m("Recompensa","Por qué vale la pena")}
              <div class="grid gap-3">
                ${k("Cofre del piso","Oro, XP, esencia, fragmentos, llaves extra y botín de mejor calidad.","reward-card","Las mazmorras mejoran la calidad del botín y de los materiales.")}
                ${k("Cuándo entrar","Hazlo cuando tengas llaves y una configuración ya ordenada.","surface-subtle","Entra cuando tu equipo y habilidades ya estén en un estado estable.")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function Te(){const n=[...u.market.items].sort(($,R)=>(R.score||0)-($.score||0))[0],r=u.market.items.filter($=>($.price||0)<=u.player.gold).length,x=u.market.items.filter($=>ge($).tone==="success").length;return`
      <div class="space-y-5">
        ${p("mercado",`Oro disponible: <b>${S(u.player.gold)}</b>`,[v("🔄 Refrescar","btn-primary","game.refreshMarket()","Renueva la rotación del mercado con nuevas ofertas."),v("🎒 Comparar con mochila","","game.setView('inventario')","Abre el inventario para comparar las ofertas con tu equipo actual.")].join(""))}
        ${w([v("🔄 Refrescar","btn-primary !py-3","game.refreshMarket()"),v("🎒 Mochila","!py-3","game.setView('inventario')")])}
        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Rotación actual","Compra solo mejoras claras","El mercado prioriza piezas de equipo. Consumibles y ayuda contextual quedan en módulos secundarios.")}
            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${y("Comprables",r,"Con tu oro actual")}
              ${y("Mejoras",x,"Frente a lo equipado")}
              ${y("Oferta top",n?Y[n.slot]:"—",n?n.name:"Sin oferta destacada")}
            </div>
            ${n?`
              <div class="surface-strong reward-card rounded-2xl p-4 mb-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Oferta destacada</div>
                    <div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-black rarity-${n.rarity} text-lg leading-snug">${n.name}</div>${te(n.rarity)}</div>
                    <p class="text-sm text-slate-300/74 mt-2">${ge(n).detail}</p>
                  </div>
                  <div class="shrink-0 text-right">
                    <div class="text-sm font-bold text-amber-200">${S(n.price)} oro</div>
                    <div class="mt-2">${h(ge(n).label,ge(n).tone)}</div>
                  </div>
                </div>
              </div>
            `:""}
            <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              ${u.market.items.map($=>{const R=ge($),B=($.price||0)<=u.player.gold;return`
                  <div class="glass rounded-2xl p-4 market-card ${B?"":"opacity-80"}" ${P(`Oferta de rareza ${q($.rarity)}. Precio ${S($.price)} de oro. ${R.detail}`)}>
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${$.rarity} leading-snug">${$.name}</div>${te($.rarity)}</div>
                        <div class="text-xs text-slate-300/60 mt-1">${Y[$.slot]} · Nivel ${$.level}</div>
                      </div>
                      ${h(R.label,R.tone)}
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      ${Ie($,4)}
                    </div>
                    <div class="market-meta mt-3">
                      <span class="text-sm text-slate-300/72">${R.detail}</span>
                      <span class="text-sm font-bold ${B?"text-amber-200":"text-rose-200"}">${S($.price)} oro</span>
                    </div>
                    <button class="btn btn-gold mt-3 w-full" onclick="game.buyMarketItem('${$.id}')" ${B?"":"disabled"}>Comprar</button>
                  </div>
                `}).join("")}
            </div>
          </section>
          <aside class="stack-compact">
            ${b("Decisión","Qué mirar antes de comprar",`
              <div class="grid gap-3">
                ${k("Oferta destacada",n?`${n.name} lidera la rotación actual.`:"No hay oferta destacada ahora mismo.","reward-card","El mercado castiga mucho más las rarezas altas: verás menos piezas legendarias y míticas.")}
                ${k("No fuerces compra","Si nada mejora de verdad, ahorra oro o ve a Forja.","surface-subtle")}
              </div>
            `,{open:!0,iconName:"coins",hint:"Guía rápida"})}
            ${b("Consumibles","Apoyo opcional de la partida",`
              <div class="grid gap-3">
                <button class="btn btn-success" onclick="game.buyResource('potion')" ${P("Compra una poción para curarte más tarde por 120 de oro.")}>🧪 Poción · 120 oro</button>
                <button class="btn btn-violet" onclick="game.buyResource('key')" ${P("Compra una llave para acceder a mazmorras por 180 de oro.")}>🗝️ Llave · 180 oro</button>
                <button class="btn btn-primary" onclick="game.buyResource('essence')" ${P("Compra esencia para forja y progresión premium por 140 de oro.")}>✨ Esencia · 140 oro</button>
                <button class="btn" onclick="game.buyResource('food')" ${P("Compra comida para apoyar trabajos y mascotas por 65 de oro.")}>🍖 Comida x2 · 65 oro</button>
              </div>
            `,{iconName:"bag",hint:"Comprar apoyo"})}
          </aside>
        </div>
      </div>
    `}function Ge(){return`
      <div class="space-y-5">
        ${p("forja",`Hierro: <b>${S(u.player.iron)}</b> · Esencia: <b>${S(u.player.essence)}</b>`,[v("⚒️ Forjar arma","btn-primary","game.forgeItem('weapon', 'normal')","Forja un arma estándar con coste moderado y rareza controlada."),v("✨ Premium arma","btn-violet","game.forgeItem('weapon', 'premium')","Forja un arma premium con mayor acceso a rarezas altas."),v("🎒 Revisar inventario","","game.setView('inventario')")].join(""))}
        ${w([v("⚒️ Normal","btn-primary !py-3","game.forgeItem('weapon', 'normal')"),v("✨ Premium","btn-violet !py-3","game.forgeItem('weapon', 'premium')")])}
        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Forja","Crea una pieza para un espacio","La forja común genera botín funcional. La forja premium empuja las rarezas altas, pero sigue siendo exigente.")}
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${_.map(n=>`
                <div class="glass rounded-2xl p-4 forge-recipe-card">
                  <div class="font-bold">${Y[n]}</div>
                  <div class="text-sm text-slate-300/70 mt-1">Pieza aleatoria del hueco.</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2" ${P("Forja normal: más común, barata y orientada a volumen.")}>Normal <b>hierro</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2" ${P("Forja premium: más costosa y con mejor acceso a rarezas altas.")}>Premium <b>esencia</b></div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button class="btn btn-primary !py-2" onclick="game.forgeItem('${n}', 'normal')">Forjar</button>
                    <button class="btn btn-violet !py-2" onclick="game.forgeItem('${n}', 'premium')">Premium</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${m("Mejora","Solo piezas ya equipadas","Esta columna existe para reforzar lo que ya decidiste conservar.")}
              <div class="space-y-3 mt-4">
                ${["weapon","chest","ring","amulet"].map(n=>{const r=u.player.equipment[n];return`
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${Y[n]}</div>
                      <div class="font-black ${r?`rarity-${r.rarity}`:"text-slate-400/80"}">${r?r.name:"Vacío"}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${r?`Nivel ${r.level} · Mejora +${r.upgrade||0}`:"Equipa algo para mejorarlo."}</div>
                      <button class="btn btn-gold mt-3 w-full" ${r?`onclick="game.upgradeEquipped('${n}')"`:"disabled"} ${P("Sube el nivel de mejora de la pieza equipada y aumenta sus estadísticas.")}>⚒️ Mejorar</button>
                    </div>
                  `}).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function Ze(){const n={barracks:"Más ataque y defensa global.",treasury:"Más oro en todas las actividades.",sanctuary:"Más vida máxima y regeneración.",hunters:"Mejor botín y hallazgos más finos.",arsenal:"Más capacidad de inventario."};return`
      <div class="space-y-5">
        ${p("gremio",`Nivel total invertido: <b>${oe()}</b>`,[v("🪙 Ver mercado","","game.setView('mercado')"),v("🏋️ Entrenar","btn-primary","game.setView('entrenamiento')")].join(""))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Mejoras del gremio","Invierte en un frente por vez","Cada edificio es una decisión de largo plazo.")} 
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${Object.entries(u.player.guild).map(([r,x])=>{const $=x+1,R=180+$*110+oe()*35,B=Math.max(1,Math.floor($/2));return`
                  <div class="glass rounded-2xl p-4">
                    <div class="font-black text-lg capitalize" ${P(n[r])}>${r}</div>
                    <div class="text-sm text-slate-300/75 mt-1">${n[r]}</div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div class="rounded-xl bg-white/[.04] p-2">Nivel <b>${x}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Siguiente <b>${$}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Oro <b>${S(R)}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Esencia <b>${S(B)}</b></div>
                    </div>
                    <button class="btn btn-violet mt-3 w-full" onclick="game.upgradeGuild('${r}')">Mejorar</button>
                  </div>
                `}).join("")}
            </div>
          </section>
          <aside class="glass rounded-3xl p-5">
            ${m("Consejo","Cómo usarlo")}
            <div class="grid gap-3">
              ${k("Especialízate","Sube uno o dos edificios primero en lugar de repartir demasiado.","surface-subtle")}
              ${k("Prioridad típica","Tesorería y Barracas suelen sentirse antes en la partida.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}function Oe(){return`
      <div class="space-y-5">
        ${p("entrenamiento",`Puntos de atributo: <b>${u.player.attributePoints}</b> · habilidades: <b>${u.player.skillPoints}</b>`,[v("👤 Perfil","","game.setView('perfil')"),v("⚔️ Arena","btn-primary","game.setView('arena')")].join(""))}
        <div class="grid xl:grid-cols-[.95fr,1.05fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Atributos","Sube tu base","Primero mejoras atributos. Las habilidades quedan en la columna de apoyo.")}
            <div class="grid sm:grid-cols-2 gap-3">
              ${[["strength","Fuerza","Ataque y robo de vida."],["agility","Agilidad","Velocidad, crítico y esquiva."],["endurance","Resistencia","Vida, defensa y bloqueo."],["discipline","Disciplina","Energía y aguante máximo."]].map(([n,r,x])=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${r}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${x}</div>
                  <div class="text-sm mt-3">Nivel actual: <b>${u.player.training[n]}</b></div>
                  <button class="btn btn-primary mt-3 w-full" onclick="game.trainAttribute('${n}')">Subir</button>
                </div>
              `).join("")}
            </div>
          </section>
          <aside class="glass rounded-3xl p-5">
            ${m("Habilidades","Activa o mejora solo las importantes")}
            <div class="space-y-3">
              ${Object.values(ae).map(n=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${n.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${n.desc}</div>
                  <div class="text-xs text-slate-300/60 mt-2">Recarga ${n.cooldown} · Desbloqueo Nv ${n.unlockLevel}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button class="btn !py-2" onclick="game.toggleSkill('${n.id}')">${u.player.activeSkills.includes(n.id)?"Quitar":"Equipar"}</button>
                    <button class="btn btn-violet !py-2" ${u.player.unlockedSkills.includes(n.id)?`onclick="game.upgradeSkill('${n.id}')"`:"disabled"}>Mejorar</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function He(){return`
      <div class="space-y-5">
        ${p("trabajo",u.timers.job?`En curso: <b>${u.timers.job.name}</b> · <span data-live-timer="job">${Ee()}</span>`:"Sin trabajo activo",[v("🧭 Expedición","","game.setView('expedicion')"),v("💰 Mercado","btn-gold","game.setView('mercado')")].join(""))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Trabajos","Elige una fuente de oro","Esta vista queda solo para elegir un encargo.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${D.map(n=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black text-lg">${n.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${n.desc}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Duración <b>${n.duration}s</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${S(n.reward.gold)} oro</b></div>
                  </div>
                  <button class="btn btn-gold mt-3 w-full" onclick="game.startJob('${n.id}')" ${P("Inicia este trabajo y bloquea el temporizador hasta su finalización.")}>Aceptar</button>
                </div>
              `).join("")}
            </div>
          </section>
          <aside class="glass rounded-3xl p-5">
            ${m("Cuándo usarlo","Regla rápida")}
            <div class="grid gap-3">
              ${k("Trabajo","Úsalo cuando quieras oro estable sin pelear.","surface-subtle")}
              ${k("Alternativa","Si también quieres botín, Expedición suele darte más variedad.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}function qe(){const n=ie();return`
      <div class="space-y-5">
        ${p("mascota",n?`Activa: <b>${n.name}</b>`:"Aún no tienes mascota",[v("👤 Perfil","","game.setView('perfil')"),v("🥚 Incubar","btn-violet","game.hatchPet()","Consume recursos para obtener una mascota aleatoria.")].join(""))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Compañero","Gestiona solo tu mascota activa")}
            ${n?`
              <div class="glass rounded-2xl p-5">
                <div class="text-cyan-200">${Q(n.icon||"paw","h-9 w-9")}</div>
                <div class="font-display font-extrabold text-2xl mt-2">${n.name}</div>
                <div class="text-sm text-slate-300/75 mt-1">${n.desc}</div>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  ${y("Nivel",u.player.petLevel)}
                  ${y("XP",`${u.player.petXp}/${3+u.player.petLevel}`)}
                </div>
                <div class="grid sm:grid-cols-2 gap-3 mt-4">
                  <button class="btn btn-success" onclick="game.feedPet()">${Q("box","h-4 w-4")}<span>Alimentar</span></button>
                  <button class="btn btn-danger" onclick="game.releasePet()" ${P("Libera la mascota actual y pierdes sus bonos activos.")}>Liberar</button>
                </div>
              </div>
            `:`
              <div class="glass rounded-2xl p-5">
                <p class="text-sm text-slate-300/75">Incuba un huevo con 5 fragmentos y 8 de esencia para recibir un compañero aleatorio.</p>
                <button class="btn btn-violet mt-4" onclick="game.hatchPet()">${Q("spark","h-4 w-4")}<span>Incubar huevo</span></button>
              </div>
            `}
          </section>
          <aside class="glass rounded-3xl p-5">
            ${m("Catálogo","Vista rápida")}
            <div class="grid gap-3">
              ${M.map(r=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-bold font-display inline-flex items-center gap-2">${Q(r.icon||"paw","h-4 w-4")}<span>${r.name}</span></div>
                  <div class="text-sm text-slate-300/75 mt-1">${r.desc}</div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function Fe(){const n=K.slice(0,6);return`
      <div class="space-y-5">
        ${p("logros",`Polvo de reliquia: <b>${u.player.relicDust}</b>`,[v("🔱 Ascender","btn-gold","game.ascend()","Reinicia gran parte del progreso para ganar mejoras meta permanentes."),v("📘 Diario","","game.setView('diario')")].join(""))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Hitos activos","Solo una selección visible","Los logros dejan de ser una pared de progreso. Aquí ves solo los más relevantes.")}
            <div class="space-y-3">
              ${n.map(r=>{const x=H(r),$=u.claimedAchievements.includes(r.id);return`
                  <div class="glass rounded-2xl p-4">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black text-lg">${r.title}</div>
                        <div class="text-sm text-slate-300/75 mt-1">${r.desc}</div>
                      </div>
                      <div class="text-sm rounded-full px-3 py-1 ${$?"bg-emerald-400/15 text-emerald-300 border border-emerald-300/20":"bg-white/[.05]"}">${$?"Listo":`${x}/${r.target}`}</div>
                    </div>
                    <div class="mt-3">${V(x,r.target,"bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-300 shadow-[0_0_18px_rgba(34,211,238,.30)]","Progreso","Avance total hacia este logro y sus recompensas meta.")}</div>
                  </div>
                `}).join("")}
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${m("Ascensión","Reinicio con progreso meta")}
              <p class="text-sm text-slate-300/75 mt-2">Hazla cuando quieras convertir una partida avanzada en progreso permanente.</p>
              <button class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${P("Reinicia gran parte de la partida a cambio de progreso meta permanente.")}>🔱 Ascender</button>
            </div>
            <div class="glass rounded-3xl p-5">
              ${m("Altar","Inversión rápida")}
              <div class="grid gap-3 mt-4">
                ${[["wrath","Ira"],["fortune","Fortuna"],["vitality","Vitalidad"],["momentum","Impulso"]].map(([r,x])=>`
                  <button class="btn btn-violet justify-between" onclick="game.spendRelic('${r}')" ${P(`Invierte polvo de reliquia en ${x.toLowerCase()} para obtener bonificaciones permanentes.`)}><span>${x}</span><span>Nv ${u.player.relics[r]}</span></button>
                `).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function i(){const n=Math.max(8,u.ui.journalPageSize||16),r=u.journal||[],x=Math.max(1,Math.ceil(r.length/n)),$=Math.min(Math.max(1,u.ui.journalPage||1),x),R=($-1)*n,B=r.slice(R,R+n);return`
      <div class="space-y-5">
        ${p("diario",`Entradas guardadas: <b>${r.length}</b>`,[v("🏆 Ver logros","","game.setView('logros')"),v("📋 Resumen","btn-primary","game.setView('resumen')")].join(""))}
        <div class="grid xl:grid-cols-[1fr,300px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${m("Registro","Solo eventos recientes","El diario queda como historial consultable, no como otra pantalla cargada de decisiones.")}
            <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${r.length?R+1:0}</b>–<b>${Math.min(R+n,r.length)}</b> de <b>${r.length}</b>.</div>
            <div class="space-y-3">
              ${B.map(he=>`
                <div class="glass rounded-2xl p-4 cv-auto">
                  <div class="font-black">${ke(he.icon)} <span class="font-semibold">${new Date(he.ts).toLocaleTimeString("es-ES")}</span></div>
                  <div class="text-sm text-slate-200/90 leading-relaxed mt-2">${he.text}</div>
                </div>
              `).join("")||'<div class="text-sm text-slate-300/75">Todavía no hay entradas en el diario.</div>'}
            </div>
            ${Le($,x,"setJournalPage")}
          </section>
          <aside class="glass rounded-3xl p-5">
            ${m("Uso","Cómo leerlo")}
            <div class="grid gap-3">
              ${k("Consulta","Úsalo para revisar qué pasó, no para tomar decisiones inmediatas.","surface-subtle")}
              ${k("Después","Si buscas progreso, vuelve a Resumen o Arena.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}function d(){return({resumen:F,perfil:se,inventario:fe,arena:Ne,expedicion:Re,mazmorra:Be,mercado:Te,forja:Ge,gremio:Ze,entrenamiento:Oe,trabajo:He,mascota:qe,logros:Fe,diario:i}[u.currentView]||F)()}function j(){const n=u.ui.modal;return n?`
      <div class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 p-4 overflow-y-auto">
        <div class="min-h-full flex items-start justify-center py-8">
          <div class="glass-strong rounded-[2rem] p-5 sm:p-6 w-full max-w-5xl">
            <div class="flex items-start justify-between gap-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Detalle</div>
                <div class="text-2xl font-black">${n.title}</div>
              </div>
              <button class="btn" onclick="game.closeModal()">Cerrar</button>
            </div>
            ${n.content}
          </div>
        </div>
      </div>
    `:""}window.AetherViewContent={renderContent:d,renderModal:j}})();(()=>{const ne=window.AetherViewLayout||{},_=window.AetherViewContent||{};window.AetherViews={...ne,..._}})();(()=>{const{STORAGE_KEY:ne,VIEWS:_,VIEW_META:Y}=window.AetherConfig,{$:z,clamp:L,timeLeft:E,sanitizeInlineHtml:D}=window.AetherUtils,{state:M,loadGame:ae,saveGame:K,getDerivedStats:S,hardReset:X,mutate:y,subscribeStore:V,getStoreMeta:ce,syncExternalState:u}=window.AetherModel,G=window.AetherSystems,ie=window.AetherViews,de=new Set(_.map(([l])=>l)),re={hud:"hud",desktopNav:"desktop-nav",content:"page-view",modal:"modal-root",mobileNav:"mobile-nav-root",mobileSheet:"mobile-sheet-root"},we=Object.create(null),oe=new Set(Object.keys(re)),Z=[];let e=0,N=0,O=0;function H(l){return z(re[l])}function Q(l){switch(l){case"hud":return ie.renderHud();case"desktopNav":return ie.renderDesktopNav();case"content":return ie.renderContent();case"modal":return ie.renderModal();case"mobileNav":return ie.renderMobileNav();case"mobileSheet":return ie.renderMobileSheet();default:return""}}function ke(l){return l?Array.isArray(l)?l:[l]:[]}function q(l=Object.keys(re)){ke(l).forEach(b=>oe.add(b)),!e&&(e=window.requestAnimationFrame(()=>{e=0,be()}))}function te(){const l=H("content");!l||!l.querySelectorAll||(l.querySelectorAll('[data-live-timer="expedition"]').forEach(b=>{b.textContent=M.timers.expedition?E(M.timers.expedition.endAt):"0s"}),l.querySelectorAll('[data-live-timer="job"]').forEach(b=>{b.textContent=M.timers.job?E(M.timers.job.endAt):"0s"}))}function be(){Object.keys(re).forEach(b=>{if(!oe.has(b))return;const I=H(b);if(!I)return;const F=Q(b),se=window.AetherViewRuntime&&typeof window.AetherViewRuntime.replaceEmojiIcons=="function"?window.AetherViewRuntime.replaceEmojiIcons(F):F;we[b]!==se&&(I.innerHTML=se,we[b]=se),oe.delete(b)}),te();const l=Y[M.currentView]||Y.resumen;document.title=`Aether Arena — ${l.label}`}function c(l=!1){if(!l&&!ce().isDirty)return;if(l){O&&(clearTimeout(O),O=0),K();return}if(O)return;const b=()=>{O=0,K()};if(typeof window.requestIdleCallback=="function"){O=window.setTimeout(()=>{O=0,window.requestIdleCallback(b,{timeout:1200})},900);return}O=window.setTimeout(b,900)}function pe(l){try{location.hash!==`#${l}`&&history.replaceState(null,"",`#${l}`)}catch{location.hash=l}}function P(l,b={}){if(!de.has(l))return;const I=M.currentView;y("ui/setView",()=>{M.currentView=l,M.currentTab=l,M.ui.moreMenuOpen=!1},{source:"ui"}),b.skipHash||pe(l),q(["hud","desktopNav","content","mobileNav","mobileSheet"]),I!==l&&!b.keepScroll&&window.scrollTo(0,0),c()}function f(l){y("ui/setInventoryFilter",()=>{M.ui.inventoryFilter=l,M.ui.inventoryPage=1},{source:"ui"}),q("content"),c()}function h(l){y("ui/setInventoryPage",()=>{M.ui.inventoryPage=Math.max(1,Number(l)||1)},{source:"ui",markDirty:!1}),q("content")}function m(l){y("ui/setJournalPage",()=>{M.ui.journalPage=Math.max(1,Number(l)||1)},{source:"ui",markDirty:!1}),q("content")}function k(l){y("ui/toggleMoreMenu",()=>{M.ui.moreMenuOpen=typeof l=="boolean"?l:!M.ui.moreMenuOpen},{source:"ui",markDirty:!1}),q(["mobileNav","mobileSheet"])}function v(){y("ui/closeModal",()=>{M.ui.modal=null},{source:"ui",markDirty:!1}),q("modal")}function w(l){const b=M.combatHistory.find(I=>I.id===l);b&&(y("ui/showCombat",()=>{M.ui.modal={type:"combat",title:D(b.title),content:`
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4">
              <div class="text-sm text-slate-300/75">${D(b.zone)}</div>
              <div class="text-sm text-slate-200/90 mt-2">${D(G.summarizeReward(b.rewards))}${b.drop?` · Botin: <span class="rarity-${b.drop.rarity}">${D(b.drop.name)}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
              <div class="space-y-2 text-sm">${b.log.map(I=>`<div>${D(I)}</div>`).join("")}</div>
            </div>
          </div>
        `}},{source:"ui",markDirty:!1}),q("modal"))}function p(){typeof confirm=="function"&&!confirm("¿Seguro que quieres reiniciar la partida? Se perdera el progreso local.")||(X(),P("resumen",{keepScroll:!1}),G.toast("Nueva partida iniciada","danger"),q(Object.keys(re)),c(!0))}function W(l){q(l||["hud","content","mobileSheet"]),c()}function ye(){for(;Z.length;){const l=Z.pop();typeof l=="function"&&l()}Z.push(V(l=>l._meta&&[l._meta.isSaving,l._meta.isDirty,l._meta.lastSaveAt,l._meta.lastMutationLabel].join("|"),()=>q("hud"))),Z.push(V(l=>l._meta?l._meta.syncRevision:0,(l,b)=>{l!==b&&q(Object.keys(re))})),Z.push(V(l=>l.ui?l.ui.modal:null,()=>q("modal"))),Z.push(V(l=>l.ui?l.ui.moreMenuOpen:!1,()=>q(["mobileNav","mobileSheet"])))}const Me={setView:P,setTab:P,setInventoryFilter:f,setInventoryPage:h,setJournalPage:m,toggleMoreMenu:k,showCombat:w,closeModal:v,hardReset:p};Object.entries({setZone:["hud","content"],fightArena:["hud","content"],arenaBlitz:["hud","content","modal"],runDungeon:["hud","content","modal"],startExpedition:["hud","content"],startJob:["hud","content"],claimQuest:["hud","content"],rerollQuests:["hud","content"],usePotion:["hud","content"],autoHeal:["hud","content"],claimDaily:["hud","content"],buyMarketItem:["hud","content"],buyResource:["hud","content"],equipItem:["hud","content"],unequipItem:["hud","content"],sellItem:["hud","content"],salvageItem:["hud","content"],forgeItem:["hud","content"],upgradeEquipped:["hud","content"],rerollItem:["hud","content"],upgradeGuild:["hud","content"],trainAttribute:["hud","content"],upgradeSkill:["hud","content"],toggleActiveSkill:["hud","content"],hatchPet:["hud","content"],feedPet:["hud","content"],releasePet:["hud","content"],spendRelic:["hud","content"],ascend:["hud","content"],refreshMarket:["hud","content"],autoManage:["hud","content"]}).forEach(([l,b])=>{Me[l]=(...I)=>{let F;return y(`systems/${l}`,()=>{F=G[l](...I)},{source:"systems"}),W(b),F}});function Le(){const l=Date.now();let b=!1;y("system/tick",()=>{const I=L((l-M.lastTick)/1e3,0,document.hidden?30:5);M.lastTick=l,G.passiveRegen(I),b=G.resolveFinishedTimers(l,document.hidden);const F=S();M.player.hp=L(M.player.hp,1,F.maxHp),M.player.energy=L(M.player.energy,0,F.maxEnergy),M.player.stamina=L(M.player.stamina,0,F.maxStamina)},{source:"tick"}),(!M.lastSave||l-M.lastSave>12e3)&&c(),!document.hidden&&(q("hud"),te(),b?(q(["content","modal"]),c()):M.ui.modal&&q("modal"),M.ui.moreMenuOpen&&q(["mobileNav","mobileSheet"]))}function Se(){N&&clearInterval(N),N=window.setInterval(Le,document.hidden?4e3:1e3)}function Pe(){const l=(location.hash||"").replace("#","").trim(),b=de.has(l)?l:M.currentView||"resumen";P(b,{skipHash:!1,keepScroll:!0})}function ge(){const l=(location.hash||"").replace("#","").trim();de.has(l)&&l!==M.currentView&&P(l,{skipHash:!0})}function Ie(l){if(l.key!==ne||l.newValue===l.oldValue)return;u(l.newValue)&&(q(Object.keys(re)),G.toast("Partida sincronizada desde otra pestana","cyan"))}function C(){ae(),y("system/offlineCatchup:init",()=>{G.offlineCatchup()},{source:"lifecycle"}),ye(),Pe(),q(Object.keys(re)),c(),Se(),window.addEventListener("hashchange",ge),document.addEventListener("visibilitychange",()=>{Se(),document.hidden||(y("system/offlineCatchup:resume",()=>{G.offlineCatchup()},{source:"lifecycle"}),q(["hud","content","modal"]))}),window.addEventListener("storage",Ie),window.addEventListener("pagehide",()=>c(!0)),window.addEventListener("beforeunload",()=>c(!0))}window.game=Me,window.AetherController={queueRender:q,setView:P,closeModal:v,showCombat:w,scheduleSave:c},C()})();
