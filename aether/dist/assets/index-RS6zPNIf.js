(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))M(u);new MutationObserver(u=>{for(const T of u)if(T.type==="childList")for(const F of T.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&M(F)}).observe(document,{childList:!0,subtree:!0});function v(u){const T={};return u.integrity&&(T.integrity=u.integrity),u.referrerPolicy&&(T.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?T.credentials="include":u.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function M(u){if(u.ep)return;u.ep=!0;const T=v(u);fetch(u.href,T)}})();const jt=["weapon","offhand","helm","chest","gloves","boots","ring","amulet"],_a={weapon:"Arma",offhand:"Mano izquierda",helm:"Casco",chest:"Armadura",gloves:"Guantes",boots:"Botas",ring:"Anillo",amulet:"Amuleto"},Ga=[{title:"Novato del Bronce",min:0},{title:"Aspirante de Arena",min:90},{title:"Centurion de Cristal",min:220},{title:"Campeon del Foro",min:420},{title:"Idolo de la Ciudad",min:720},{title:"Verdugo Solar",min:1100},{title:"Coloso Astral",min:1600},{title:"Inmortal del Panteon",min:2300}],Wa=[{key:"common",name:"Comun",order:0,mult:1,affixes:0,valueBase:20,value:20,dropWeightBySource:{arena:52,dungeon:37,expedition:44,market:39,forge:24},salvageProfile:{iron:1,wood:1,essence:0,sigils:0,echoShards:0,affixWeight:.06,upgradeWeight:.05},upgradeCaps:{enhance:5,reforge:2,transcend:!1},milestone:!1},{key:"uncommon",name:"Infrecuente",order:1,mult:1.16,affixes:1,valueBase:48,value:48,dropWeightBySource:{arena:28,dungeon:26,expedition:29,market:30,forge:32},salvageProfile:{iron:2,wood:1,essence:0,sigils:0,echoShards:0,affixWeight:.08,upgradeWeight:.07},upgradeCaps:{enhance:7,reforge:3,transcend:!0},milestone:!1},{key:"rare",name:"Raro",order:2,mult:1.44,affixes:2,valueBase:124,value:124,dropWeightBySource:{arena:12,dungeon:18,expedition:15,market:18,forge:27},salvageProfile:{iron:3,wood:2,essence:1,sigils:0,echoShards:0,affixWeight:.11,upgradeWeight:.09},upgradeCaps:{enhance:9,reforge:4,transcend:!0},milestone:!1},{key:"epic",name:"Epico",order:3,mult:1.82,affixes:3,valueBase:332,value:332,dropWeightBySource:{arena:5,dungeon:10,expedition:7,market:9,forge:12},salvageProfile:{iron:5,wood:3,essence:2,sigils:1,echoShards:0,affixWeight:.13,upgradeWeight:.1},upgradeCaps:{enhance:11,reforge:5,transcend:!0},milestone:!0},{key:"legendary",name:"Legendario",order:4,mult:2.3,affixes:4,valueBase:890,value:890,dropWeightBySource:{arena:2.4,dungeon:5.1,expedition:3.1,market:3.5,forge:4.4},salvageProfile:{iron:7,wood:4,essence:4,sigils:2,echoShards:1,affixWeight:.15,upgradeWeight:.11},upgradeCaps:{enhance:12,reforge:6,transcend:!0},milestone:!1},{key:"mythic",name:"Mitico",order:5,mult:2.98,affixes:5,valueBase:2320,value:2320,dropWeightBySource:{arena:.55,dungeon:2.1,expedition:1.05,market:.9,forge:1.2},salvageProfile:{iron:9,wood:5,essence:6,sigils:4,echoShards:2,affixWeight:.17,upgradeWeight:.12},upgradeCaps:{enhance:14,reforge:7,transcend:!0},milestone:!0},{key:"ascendant",name:"Ascendente",order:6,mult:3.62,affixes:6,valueBase:5480,value:5480,dropWeightBySource:{arena:.08,dungeon:.35,expedition:.18,market:.06,forge:.15},salvageProfile:{iron:12,wood:6,essence:9,sigils:7,echoShards:4,affixWeight:.2,upgradeWeight:.14},upgradeCaps:{enhance:16,reforge:8,transcend:!1},milestone:!1}],Ja=["arena","dungeon","expedition","market","forge"],Za={weapon:{slot:"weapon",role:"offensive",primaryStats:["attack","crit","speed"],secondaryStats:["lifesteal","hp"],statWeights:{attack:1.35,crit:.78,speed:.7,lifesteal:.48,hp:.36,defense:.25},qualityBias:1.12},offhand:{slot:"offhand",role:"hybrid",primaryStats:["defense","hp","block"],secondaryStats:["attack","crit"],statWeights:{defense:1.22,hp:.92,block:.68,attack:.62,crit:.3,speed:.38},qualityBias:1},helm:{slot:"helm",role:"defensive",primaryStats:["defense","hp"],secondaryStats:["crit","speed"],statWeights:{defense:1.08,hp:.88,crit:.34,speed:.3,block:.46},qualityBias:.98},chest:{slot:"chest",role:"defensive",primaryStats:["hp","defense"],secondaryStats:["attack","block"],statWeights:{hp:1.26,defense:1.14,attack:.42,block:.55,lifesteal:.21},qualityBias:1.03},gloves:{slot:"gloves",role:"offensive",primaryStats:["attack","crit","lifesteal"],secondaryStats:["speed","hp"],statWeights:{attack:1.04,crit:.74,lifesteal:.56,speed:.58,hp:.32,defense:.26},qualityBias:1.05},boots:{slot:"boots",role:"hybrid",primaryStats:["speed","dodge"],secondaryStats:["defense","hp"],statWeights:{speed:1.1,dodge:.76,defense:.46,hp:.42,crit:.33,attack:.36},qualityBias:1},ring:{slot:"ring",role:"offensive",primaryStats:["crit","attack"],secondaryStats:["speed","dodge"],statWeights:{crit:.95,attack:.78,speed:.56,dodge:.5,hp:.35,defense:.28},qualityBias:1.08},amulet:{slot:"amulet",role:"hybrid",primaryStats:["hp","attack","defense"],secondaryStats:["block","lifesteal"],statWeights:{hp:1.02,attack:.82,defense:.7,block:.56,lifesteal:.44,crit:.34},qualityBias:1.04}},Ua={weapon:1.24,offhand:1.08,helm:.98,chest:1.16,gloves:.94,boots:.96,ring:.92,amulet:1},Ka={common:.92,uncommon:1.04,rare:1.22,epic:1.46,legendary:1.76,mythic:2.15,ascendant:2.62},Ya=Object.fromEntries(jt.map(r=>{const o={},v=Ua[r]||1;for(let M=1;M<=90;M+=1){const u=(12+Math.pow(M,1.2)*4.8)*v;o[M]=Object.fromEntries(Object.entries(Ka).map(([T,F])=>[T,Math.round(u*F)]))}return[r,o]})),Qa={weapon:[{name:"Gladius",stats:{attack:7,speed:1}},{name:"Hacha de Coliseo",stats:{attack:9,defense:1}},{name:"Tridente del Foro",stats:{attack:8,crit:.02}},{name:"Espada Curva",stats:{attack:8,speed:2}},{name:"Lanza Escarlata",stats:{attack:10,crit:.01}}],offhand:[{name:"Escudo de Torre",stats:{defense:7,hp:18,block:.03}},{name:"Parma Ligera",stats:{defense:5,speed:2,block:.02}},{name:"Daga de Mano",stats:{attack:5,crit:.03}},{name:"Brazal Solar",stats:{defense:4,hp:10,crit:.01}}],helm:[{name:"Yelmo de Bronce",stats:{defense:5,hp:14}},{name:"Mascara del Duelo",stats:{defense:4,crit:.02}},{name:"Casco de Placas",stats:{defense:6,hp:10}},{name:"Corona de Hierro",stats:{hp:18,speed:1}}],chest:[{name:"Coraza Segmentada",stats:{defense:9,hp:28}},{name:"Pectoral de Guerra",stats:{defense:11,hp:22}},{name:"Tunica Blindada",stats:{defense:7,speed:2,hp:20}},{name:"Arnes del Leon",stats:{attack:4,defense:8,hp:18}}],gloves:[{name:"Guanteletes de Malla",stats:{defense:4,attack:2}},{name:"Guantes de Cazador",stats:{crit:.02,speed:1}},{name:"Mitones de Arena",stats:{attack:3,hp:8}},{name:"Brazales de Sangre",stats:{attack:4,lifesteal:.01}}],boots:[{name:"Grebas Reforzadas",stats:{defense:4,speed:1}},{name:"Sandalias de Arena",stats:{speed:3,dodge:.02}},{name:"Botas de Marcha",stats:{hp:10,speed:2}},{name:"Botas de Acecho",stats:{speed:2,crit:.01}}],ring:[{name:"Anillo de Plata",stats:{crit:.02,attack:2}},{name:"Sello del Foro",stats:{defense:3,hp:8}},{name:"Aro Solar",stats:{attack:3,speed:1}},{name:"Sortija Vital",stats:{hp:16}}],amulet:[{name:"Amuleto del Leon",stats:{attack:3,hp:10}},{name:"Talisman de Marmol",stats:{defense:3,block:.01}},{name:"Colgante del Alba",stats:{crit:.02,hp:8}},{name:"Medallon del Eco",stats:{speed:2,dodge:.01}}]},Xa=[{prefix:"Furioso",stats:{attack:2}},{prefix:"Certero",stats:{crit:.02}},{prefix:"Agil",stats:{speed:2}},{prefix:"Imponente",stats:{hp:18}},{prefix:"Bastion",stats:{defense:3}},{prefix:"Sanguineo",stats:{lifesteal:.015}},{suffix:"del Coloso",stats:{hp:24,defense:2}},{suffix:"de la Tempestad",stats:{speed:2,crit:.01}},{suffix:"de la Caza",stats:{attack:3,crit:.01}},{suffix:"del Vigia",stats:{defense:4,block:.015}},{suffix:"de los Antiguos",stats:{hp:16,attack:2}},{suffix:"del Eclipse",stats:{attack:3,speed:1,crit:.01}}],en=[{id:0,name:"Distrito de Arena",unlockLevel:1,energyCost:7,staminaCost:1,theme:"Callejones y plazas del coliseo",enemies:["Rufian del Foro","Apostador Violento","Mercenario de Bronce","Ladron de Tuneles"],boss:"Campeon de Grava"},{id:1,name:"Bosque Sangriento",unlockLevel:4,energyCost:9,staminaCost:1,theme:"Bestias y cazadores en la niebla",enemies:["Jabali Enloquecido","Cazador Sombrio","Tigre de Jaula","Bandido del Roble"],boss:"Gran Acechador Berkan"},{id:2,name:"Catacumbas Rotas",unlockLevel:8,energyCost:11,staminaCost:2,theme:"No muertos, guardianes y reliquias",enemies:["Esqueleto Vetusto","Fanatico de Cripta","Necrofago Roto","Guardia del Osario"],boss:"Pontifice de Hueso"},{id:3,name:"Dunas de Onice",unlockLevel:12,energyCost:13,staminaCost:2,theme:"Bestias solares y caravanas saqueadas",enemies:["Saqueador de Caravana","Escorpion de Brasa","Jinete del Viento","Chaman del Datil Negro"],boss:"Anhur, el Sol Partido"},{id:4,name:"Fortaleza del Eclipse",unlockLevel:16,energyCost:16,staminaCost:2,theme:"Caballeros caidos y maquinas de guerra",enemies:["Guardia Obsidiana","Verdugo del Eclipse","Ballestero Negro","Ingeniero del Asedio"],boss:"General Varzok"},{id:5,name:"Necropolis del Hierro",unlockLevel:21,energyCost:18,staminaCost:3,theme:"Automatas, espectros y altares profanos",enemies:["Arconte Ferrum","Espectro de Cadena","Mecanico Sacrilego","Profanador del Trono"],boss:"Maquina-Rey Nax"},{id:6,name:"Fisura Astral",unlockLevel:27,energyCost:21,staminaCost:3,theme:"Entidades del vacio y gloria absoluta",enemies:["Segador del Vacio","Centinela Astral","Bestia Prismatica","Oraculo Corrupto"],boss:"Aion, Devorador de Ecos"}],tn=[{id:"guardia",name:"Guardia del Foro",duration:45,reward:{gold:120,xp:25,food:1},desc:"Patrulla, disciplina y monedas seguras."},{id:"mercante",name:"Estiba de Mercaderes",duration:75,reward:{gold:190,xp:40,wood:2,iron:1},desc:"Carga mercancias y quedate con una comision."},{id:"arena",name:"Espectaculo Menor",duration:120,reward:{gold:320,xp:70,essence:1,potions:1},desc:"Show de arena, apuestas y fama barata."}],an=[{id:"wolf",name:"Lobo de Guerra",icon:"paw",desc:"Aumenta el dano y el critico.",bonus:{attackPct:.08,crit:.03}},{id:"phoenix",name:"Fenix de Ceniza",icon:"flame",desc:"Mas vida, regeneracion y esencia.",bonus:{hpPct:.1,regenPct:.15}},{id:"golem",name:"Golem de Basalto",icon:"shield",desc:"Defensa bruta y bloqueo.",bonus:{defensePct:.1,block:.03}},{id:"panther",name:"Pantera Crepuscular",icon:"spark",desc:"Velocidad, esquiva y golpes finos.",bonus:{speedPct:.08,dodge:.03}},{id:"raven",name:"Cuervo del Oraculo",icon:"feather",desc:"Mas oro, mejor botin y vision.",bonus:{goldPct:.08,lootLuck:.06}}],nn={powerStrike:{id:"powerStrike",name:"Golpe devastador",desc:"Ataque de gran multiplicador.",unlockLevel:1,cooldown:3,mult:1.75},quickLunge:{id:"quickLunge",name:"Estocada veloz",desc:"Golpe rapido con extra de critico.",unlockLevel:1,cooldown:2,mult:1.15,critBonus:.14},fortify:{id:"fortify",name:"Guardia de acero",desc:"Golpeas y elevas tu defensa temporalmente.",unlockLevel:1,cooldown:5,mult:.82,selfBuff:{defensePct:.24,turns:2,shieldPct:.08}},shieldBash:{id:"shieldBash",name:"Embestida de escudo",desc:"Rompe la defensa rival. Requiere mano izquierda.",unlockLevel:5,cooldown:4,mult:1.32,requireOffhand:!0,armorBreak:{pct:.18,turns:2}},bloodRage:{id:"bloodRage",name:"Rabia sanguinea",desc:"Gran drenaje de vida en el impacto.",unlockLevel:7,cooldown:5,mult:1.38,lifestealBonus:.35},whirlwind:{id:"whirlwind",name:"Torbellino",desc:"Dos impactos consecutivos.",unlockLevel:9,cooldown:5,mult:.88,hits:2},execution:{id:"execution",name:"Ejecucion",desc:"Hace muchisimo mas dano a enemigos debilitados.",unlockLevel:12,cooldown:4,mult:1.2,executeThreshold:.35,executeMult:1.85},venomCut:{id:"venomCut",name:"Corte toxico",desc:"Aplica dano persistente.",unlockLevel:14,cooldown:4,mult:1.08,dot:{turns:3,ratio:.18,label:"Veneno"}},berserk:{id:"berserk",name:"Berserk",desc:"Te buffas y golpeas con furia.",unlockLevel:17,cooldown:6,mult:1.25,selfBuff:{attackPct:.22,defensePct:-.1,turns:3}},celestialEdge:{id:"celestialEdge",name:"Filo celestial",desc:"Golpe definitivo con alto critico.",unlockLevel:22,cooldown:7,mult:2.25,critBonus:.28}},sn=[{id:"kills50",title:"Carne de Arena",desc:"Derrota 50 enemigos.",type:"kills",target:50,reward:{gold:250,shards:2}},{id:"wins25",title:"Favor del Publico",desc:"Gana 25 combates de arena.",type:"wins",target:25,reward:{gold:300,essence:3}},{id:"quest10",title:"Contratista",desc:"Completa 10 misiones.",type:"questsCompleted",target:10,reward:{gold:400,shards:3}},{id:"floor5",title:"Delvador",desc:"Alcanza el piso 5 de las mazmorras.",type:"highestDungeonFloor",target:5,reward:{gold:450,keys:2}},{id:"level10",title:"Veterano",desc:"Llega al nivel 10.",type:"level",target:10,reward:{gold:500,potions:2,essence:4}},{id:"legendary1",title:"Resplandor Dorado",desc:"Consigue 1 objeto legendario.",type:"legendaryFound",target:1,reward:{shards:4,gold:500}},{id:"mythic1",title:"Sello de la Noche",desc:"Consigue 1 objeto mitico.",type:"mythicFound",target:1,reward:{sigils:2,shards:6,gold:800}},{id:"ascendant1",title:"Llama Ascendente",desc:"Consigue 1 objeto ascendente.",type:"ascendantFound",target:1,reward:{echoShards:2,sigils:4,gold:1400}},{id:"guild8",title:"Constructor",desc:"Invierte 8 niveles de gremio en total.",type:"guildTotal",target:8,reward:{gold:700,essence:5}},{id:"ascend1",title:"Mas alla del polvo",desc:"Asciende una vez.",type:"ascension",target:1,reward:{relicDust:3,shards:5}}],rn=[["resumen","Resumen"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],Lt=[["resumen","Resumen"],["perfil","Perfil"],["inventario","Inventario"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],on={resumen:{label:"Resumen",short:"Bucle principal",desc:"Vista rápida del ciclo principal, contratos y accesos clave.",icon:"home"},perfil:{label:"Perfil",short:"Gladiador",desc:"Identidad, equipo, rango, zona y estadísticas del héroe.",icon:"user"},inventario:{label:"Inventario",short:"Bolsa y equipo",desc:"Gestiona la mochila, filtra piezas y equipa mejoras.",icon:"backpack"},arena:{label:"Arena",short:"Combate rápido",desc:"Duelo instantáneo, élites y rachas de farmeo.",icon:"swords"},expedicion:{label:"Expediciones",short:"Temporizadores",desc:"Rutas en segundo plano con botín y materiales.",icon:"compass"},mazmorra:{label:"Mazmorras",short:"Pisos y jefes",desc:"Runs por pisos con jefe y cofre.",icon:"castle"},mercado:{label:"Mercado",short:"Compra y venta",desc:"Rotación de equipo y consumibles.",icon:"cart"},forja:{label:"Forja",short:"Creación y mejora",desc:"Creación de piezas y mejoras directas.",icon:"hammer"},gremio:{label:"Gremio",short:"Bonos pasivos",desc:"Mejoras permanentes de la partida.",icon:"shield"},entrenamiento:{label:"Entrenamiento",short:"Atributos y habilidades",desc:"Atributos, habilidades y especialización.",icon:"book"},trabajo:{label:"Trabajo",short:"Ingresos seguros",desc:"Ocupaciones temporizadas con retorno estable.",icon:"briefcase"},mascota:{label:"Mascota",short:"Compañero",desc:"Bonos únicos y progresión auxiliar.",icon:"paw"},logros:{label:"Logros",short:"Metaprogresión",desc:"Hitos, reliquias y ascensión.",icon:"trophy"},diario:{label:"Diario",short:"Registro",desc:"Historial de eventos y actividad reciente.",icon:"scroll"}},ln=[{title:"Principal",views:["resumen","perfil","inventario","arena"]},{title:"Aventura",views:["expedicion","mazmorra"]},{title:"Economía",views:["mercado","forja","trabajo"]},{title:"Progreso",views:["gremio","entrenamiento","mascota","logros"]},{title:"Registro",views:["diario"]}],Pt=["resumen","perfil","inventario","arena"],cn=Lt.map(([r])=>r).filter(r=>!Pt.includes(r)),dn="aether_arena_pbbg_v3";window.AetherConfig={STORAGE_KEY:dn,SLOT_ORDER:jt,SLOT_NAMES:_a,TABS:rn,VIEWS:Lt,VIEW_META:on,VIEW_GROUPS:ln,MOBILE_PRIMARY_VIEWS:Pt,MOBILE_OVERFLOW_VIEWS:cn,RANKS:Ga,RARITIES:Wa,LOOT_SOURCES:Ja,ITEM_BASES:Qa,ITEM_ARCHETYPES:Za,STAT_BUDGETS:Ya,AFFIXES:Xa,ZONES:en,JOBS:tn,PETS:an,SKILLS:nn,ACHIEVEMENTS:sn};(()=>{const{RARITIES:r,ITEM_BASES:o}=window.AetherConfig;let v=1;const M=C=>document.getElementById(C),u=[...r].sort((C,i)=>C.order-i.order),T=Object.fromEntries(u.map((C,i)=>[C.key,i])),F=C=>JSON.parse(JSON.stringify(C)),B=(C,i)=>Math.floor(Math.random()*(i-C+1))+C,l=(C,i)=>Math.random()*(i-C)+C,R=C=>C[Math.floor(Math.random()*C.length)],X=(C,i,ee)=>Math.min(ee,Math.max(i,C)),Z=C=>C.reduce((i,ee)=>i+ee,0),N=()=>`${Date.now().toString(36)}_${(v++).toString(36)}_${B(100,999)}`,g={attack:{label:"Ataque",tip:"Aumenta el daño base que infliges en combate."},defense:{label:"Defensa",tip:"Reduce parte del daño recibido en cada impacto."},speed:{label:"Velocidad",tip:"Mejora la iniciativa y el ritmo de tus acciones."},hp:{label:"Vida máxima",tip:"Determina la cantidad total de salud disponible."},crit:{label:"Golpe crítico",tip:"Probabilidad de infligir daño crítico aumentado."},dodge:{label:"Esquiva",tip:"Probabilidad de evitar por completo un golpe enemigo."},block:{label:"Bloqueo",tip:"Probabilidad de mitigar una parte importante del daño."},lifesteal:{label:"Robo de vida",tip:"Porcentaje del daño convertido en curación propia."},attackPct:{label:"Ataque %",tip:"Multiplicador porcentual al ataque base."},defensePct:{label:"Defensa %",tip:"Multiplicador porcentual a la defensa base."},hpPct:{label:"Vida %",tip:"Multiplicador porcentual a la vida máxima."},speedPct:{label:"Velocidad %",tip:"Multiplicador porcentual a la velocidad base."},goldPct:{label:"Oro %",tip:"Incrementa el oro obtenido en actividades."},lootLuck:{label:"Suerte de botín",tip:"Mejora ligeramente la calidad y la frecuencia del botín."},regenPct:{label:"Regeneración %",tip:"Incrementa la recuperación pasiva de recursos."}},U={common:{name:"Común",tone:"text-slate-200 border-white/10 bg-white/[0.04]"},uncommon:{name:"Infrecuente",tone:"text-emerald-200 border-emerald-300/20 bg-emerald-400/10"},rare:{name:"Raro",tone:"text-sky-200 border-sky-300/24 bg-sky-400/10"},epic:{name:"Épico",tone:"text-violet-200 border-violet-300/24 bg-violet-400/10"},legendary:{name:"Legendario",tone:"text-amber-200 border-amber-300/24 bg-amber-400/10"},mythic:{name:"Mítico",tone:"text-fuchsia-200 border-fuchsia-300/24 bg-fuchsia-400/10"},ascendant:{name:"Ascendente",tone:"text-orange-100 border-orange-300/26 bg-gradient-to-r from-orange-500/20 to-rose-400/20 shadow-[0_0_18px_rgba(251,146,60,.28)]"}},z={all:"Todo",weapon:"Armas",offhand:"Mano izquierda",helm:"Cascos",chest:"Armaduras",gloves:"Guantes",boots:"Botas",ring:"Anillos",amulet:"Amuletos",common:"Común",uncommon:"Infrecuente",rare:"Raro",epic:"Épico",legendary:"Legendario",mythic:"Mítico",ascendant:"Ascendente"};function c(C,i=0){return Number(C||0).toLocaleString("es-ES",{maximumFractionDigits:i})}function S(C){return`${c((C||0)*100,1)}%`}function f(C=""){return String(C).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function E(C=""){const i=String(C),ee=[];let Q=i;return[/<\/?b>/gi,/<br\s*\/?>/gi,/<span class="rarity-(common|uncommon|rare|epic|legendary|mythic|ascendant)">/gi,/<\/span>/gi].forEach(be=>{Q=Q.replace(be,$e=>{const k=`__SAFE_HTML_${ee.length}__`;return ee.push({token:k,match:$e}),k})}),Q=f(Q),ee.forEach(({token:be,match:$e})=>{Q=Q.replace(be,$e)}),Q}function V(C,i=2){return Number(C.toFixed(i))}function I(C){return(g[C]||{}).label||C}function Y(C){return(g[C]||{}).tip||""}function x(C){return(U[C]||U.common).name}function y(C){const i=U[C]||U.common;return`<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.14em] ${i.tone}">${i.name}</span>`}function t(C){return z[C]||C}function L(C,i,ee="",Q=""){return`
      <div class="stat-pill rounded-2xl px-3 py-3"${Q?` data-tooltip="${String(Q).replace(/"/g,"&quot;")}"`:""}>
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/70">${C}</div>
        <div class="text-lg font-display font-extrabold tracking-[0.01em] text-white">${i}</div>
        ${ee?`<div class="mt-1 text-xs leading-relaxed text-slate-300/65">${ee}</div>`:""}
      </div>
    `}function oe(C,i,ee,Q,ce=""){const be=i<=0?0:X(C/i*100,0,100);return`
      <div${ce?` data-tooltip="${String(ce).replace(/"/g,"&quot;")}"`:""}>
        <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
          <span class="font-medium tracking-[0.01em]">${Q}</span>
          <span class="font-semibold text-slate-100">${c(C,C%1?1:0)} / ${c(i,i%1?1:0)}</span>
        </div>
        <div class="bar">
          <span class="relative flex h-full rounded-full ${ee}" style="width:${be}%">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
          </span>
        </div>
      </div>
    `}function H(C){return u.find(i=>i.key===C)||u[0]}function D(C){return T[C]??0}function he(C=0){const i=X(Math.round(C),0,u.length-1);return u[i].key}function xe(C,i=1){return he(D(C)+i)}function se(C,i=null){const ee=(C||[]).filter(be=>be&&be.weight>0);if(!ee.length)return i;const Q=ee.reduce((be,$e)=>be+$e.weight,0);let ce=Math.random()*Q;for(let be=0;be<ee.length;be+=1)if(ce-=ee[be].weight,ce<=0)return ee[be].value;return ee[ee.length-1].value}function P(C,i){return!i||typeof i!="object"||Object.keys(i).forEach(ee=>{const Q=i[ee];Array.isArray(Q)?C[ee]=Q:Q&&typeof Q=="object"?((!C[ee]||typeof C[ee]!="object"||Array.isArray(C[ee]))&&(C[ee]={}),P(C[ee],Q)):C[ee]=Q}),C}function _(){return{attack:0,defense:0,speed:0,hp:0,crit:0,dodge:0,block:0,lifesteal:0,attackPct:0,defensePct:0,hpPct:0,speedPct:0,goldPct:0,lootLuck:0,regenPct:0}}function W(C,i){return Object.keys(i||{}).forEach(ee=>{C[ee]=(C[ee]||0)+i[ee]}),C}function ve(C=Date.now()){const i=new Date(C),ee=i.getFullYear(),Q=String(i.getMonth()+1).padStart(2,"0"),ce=String(i.getDate()).padStart(2,"0");return`${ee}-${Q}-${ce}`}function ue(C){const i=Math.max(0,C-Date.now()),ee=Math.ceil(i/1e3),Q=Math.floor(ee/60),ce=ee%60;return Q?`${Q}m ${String(ce).padStart(2,"0")}s`:`${ce}s`}function ge(C=1,i=0){const ee=typeof i=="number"?{bonusLuck:i}:i||{},Q=ee.source||"arena",ce=Math.max(0,ee.bonusLuck||ee.lootLuck||0),be=ee.pity||{},$e=u.map(k=>{const e=k.dropWeightBySource&&typeof k.dropWeightBySource[Q]=="number"?k.dropWeightBySource[Q]:k.dropWeightBySource&&typeof k.dropWeightBySource.arena=="number"?k.dropWeightBySource.arena:1,m=k.order||0,h=1+Math.min(.72,Math.max(0,C-1)*.011*Math.max(0,m-1)),j=1+(m<=1?ce*.28:ce*(.72+m*.28)),w=k.key==="epic"?Math.min(3.4,(be.epic||0)*.065):0,ne=k.key==="mythic"?Math.min(4.2,(be.mythic||0)*.052):0,de=k.key==="ascendant"?Math.min(1.2,(be.ascendant||0)*.02):0;let me=1;return C<10&&m>=3&&(me*=.4),C<18&&m>=4&&(me*=.35),C<26&&m>=5&&(me*=.22),C<38&&m>=6&&(me*=.08),(ee.ascension||0)<=0&&m>=6&&(me*=.52),{value:k,weight:Math.max(1e-4,e*h*(1+w+ne+de)*me*Math.max(.2,j))}});return se($e,H("common"))||H("common")}function pe(C,i){return(o[C]||[]).find(ee=>ee.name===i)||R(o[C]||[])}function le(C,i){return C+Math.max(0,Math.floor(i/4))*.85}window.AetherUtils={$:M,clone:F,rand:B,randf:l,pick:R,clamp:X,sum:Z,uid:N,fmt:c,pct:S,escapeHtml:f,sanitizeInlineHtml:E,softRound:V,statLabel:I,statTooltip:Y,rarityName:x,rarityBadge:y,translateFilter:t,htmlStat:L,progressBar:oe,rarityDef:H,rarityOrder:D,rarityKeyByOrder:he,nextRarityKey:xe,weightedPick:se,deepMerge:P,emptyStats:_,addStats:W,localDayKey:ve,timeLeft:ue,pickRarity:ge,findBaseItem:pe,scaledStatValue:le}})();const Ct=r=>{let o;const v=new Set,M=(R,X)=>{const Z=typeof R=="function"?R(o):R;if(!Object.is(Z,o)){const N=o;o=X??(typeof Z!="object"||Z===null)?Z:Object.assign({},o,Z),v.forEach(g=>g(o,N))}},u=()=>o,B={setState:M,getState:u,getInitialState:()=>l,subscribe:R=>(v.add(R),()=>v.delete(R))},l=o=r(M,u,B);return B},un=r=>r?Ct(r):Ct,pn=r=>(o,v,M)=>{const u=M.subscribe;return M.subscribe=(F,B,l)=>{let R=F;if(B){const X=(l==null?void 0:l.equalityFn)||Object.is;let Z=F(M.getState());R=N=>{const g=F(N);if(!X(Z,g)){const U=Z;B(Z=g,U)}},l!=null&&l.fireImmediately&&B(Z,Z)}return u(R)},r(o,v,M)},mn=pn,Ke=new Set(["crit","dodge","block","lifesteal"]);function gn(r){const{ITEM_BASES:o,ITEM_ARCHETYPES:v,STAT_BUDGETS:M,SLOT_ORDER:u,AFFIXES:T,pick:F,rand:B,uid:l,softRound:R,clamp:X,rarityDef:Z,rarityOrder:N,pickRarity:g,findBaseItem:U,scaledStatValue:z,getLootLuck:c,getNow:S}=r,f=typeof S=="function"?S:()=>Date.now(),E={attack:2.25,defense:1.92,speed:1.38,hp:.16,crit:132,dodge:94,block:84,lifesteal:146},V={arena:{epic:14,mythic:110},dungeon:{epic:9,mythic:72},expedition:{epic:11,mythic:86},market:{epic:8,mythic:64},forge:{epic:5,mythic:34}};function I(e,m,h=0){return R(e+Math.max(0,m-1)*52e-5+h*.0014,4)}function Y(e,m,h){if(Ke.has(e)){const j=1+(h-1)*.44;return R(m*j,4)}return R(m*h,2)}function x(e){return R(Object.entries(e||{}).reduce((m,[h,j])=>m+(E[h]||.8)*j,0),2)}function y(e,m){return((v[e]||{}).statWeights||{})[m]||.32}function t(e,m,h){const j=X(Math.round(m||1),1,90),w=M[e]||{},ne=w[j]||w[1]||{};return ne[h]||ne.common||12}function L(e={}){if(typeof e.qualityRoll=="number")return X(e.qualityRoll,.82,1.24);const m=e.source==="forge"?.1:e.source==="dungeon"?.06:e.source==="market"?.03:0,h=Math.min(.14,(e.lootLuck||0)*.28);return R(X(.9+m+h+Math.random()*.2,.82,1.24),3)}function oe(e={}){if(e.itemLevel)return Math.max(1,Math.round(e.itemLevel));const m=Math.max(1,Math.round(e.playerLevel||1)),h=Math.max(0,Math.round(e.zoneId||0)),j=e.source==="dungeon"?2:e.source==="forge"||e.source==="market"?1:0,w=e.enemyKind==="boss"?3:e.enemyKind==="elite"?2:0;return Math.max(1,m+h+j+w+B(-1,2))}function H(e={}){if(e.slot&&u.includes(e.slot))return e.slot;if(!e.smartLoot||!e.equipment)return F(u);const m=u.map(w=>{const ne=e.equipment[w],de=1;if(!ne)return{slot:w,weight:de+1.9};const me=ne.score||_(ne),a=(e.playerLevel||1)*56,p=Math.max(0,a-me);return{slot:w,weight:de+Math.min(2.6,p/Math.max(120,a))}}),h=m.reduce((w,ne)=>w+ne.weight,0);let j=Math.random()*h;for(let w=0;w<m.length;w+=1)if(j-=m[w].weight,j<=0)return m[w].slot;return m[m.length-1].slot}function D(e,m){return m&&N(e)<N(m)?m:e}function he(e,m={}){const h=m.bySource&&m.bySource[e]||{};return{epic:h.epic||m.epic||0,mythic:h.mythic||m.mythic||0,ascendant:h.ascendant||m.ascendant||0,total:h.total||m.total||0}}function xe(e,m={},h){const j={...m||{},bySource:{...m&&m.bySource||{}}},w=j.bySource[e]||{epic:0,mythic:0,ascendant:0,total:0},ne=N(h)>=N("epic"),de=N(h)>=N("mythic"),me=h==="ascendant",a={epic:ne?0:(w.epic||0)+1,mythic:de?0:(w.mythic||0)+1,ascendant:me?0:(w.ascendant||0)+1,total:(w.total||0)+1,lastDropAt:f(),lastRarity:h};return j.bySource[e]=a,j.epic=a.epic,j.mythic=a.mythic,j.ascendant=a.ascendant,j.total=a.total,j}function se(e={},m,h){const j={};return Object.entries(e).forEach(([w,ne])=>{const de=Ke.has(w)?I(ne,m):z(ne,m);j[w]=Y(w,de,h.mult)}),j}function P(e){const m=be(e),h=R((m.attack||0)*E.attack+(m.defense||0)*E.defense+(m.speed||0)*E.speed+(m.hp||0)*E.hp+(m.crit||0)*E.crit+(m.dodge||0)*E.dodge+(m.block||0)*E.block+(m.lifesteal||0)*E.lifesteal,2),j=R(h*.55+(e.economyValue||0)*.24+(e.prestige||0)*.21,2),w=R(h*(.72+Math.min(.26,(e.qualityRoll||1)*.18))+Math.max(0,(e.powerBudget||0)-x(m))*.12,2);return{combatScore:h,marketScore:j,buildScore:w}}function _(e){return P(e).combatScore}function W(e){const m=Z(e.rarity),h=P(e),j=e.qualityRoll||1,w=(e.affixes||[]).length,ne=Math.max(12,Math.round((m.valueBase+e.itemLevel*12+h.combatScore*4.3)*(.82+j*.4)*(1+w*.055))),de=Math.max(8,Math.round(ne*(.34+Math.min(.28,w*.03+(e.upgrade||0)*.016)))),me=Math.max(1,Math.round((m.order+1)**2*48+e.itemLevel*3.2+w*36+Math.max(0,j-1)*180));return{economyValue:ne,craftValue:de,prestige:me,value:ne,combatScore:h.combatScore,marketScore:h.marketScore,buildScore:h.buildScore}}function ve(e){const m=W(e);return e.economyValue=m.economyValue,e.craftValue=m.craftValue,e.prestige=m.prestige,e.value=m.value,e.combatScore=m.combatScore,e.marketScore=m.marketScore,e.buildScore=m.buildScore,e.score=m.combatScore,e}function ue(e){const m=x(e.stats),h=e.powerBudget||m;if(m<=h*1.1)return e;const j=Math.max(.84,h*1.08/Math.max(1,m));return Object.keys(e.stats||{}).forEach(w=>{e.stats[w]=Y(w,e.stats[w],j)}),e}function ge(e={}){const m=e.source||"arena",h=H(e),j=oe(e),w=typeof e.lootLuck=="number"?e.lootLuck:c(),ne=he(m,e.streakData||{}),de=V[m]||V.arena,me=ne.mythic>=de.mythic?"mythic":ne.epic>=de.epic?"epic":null;let a=e.forcedRarity?Z(e.forcedRarity):g(j,{source:m,lootLuck:w,pity:ne,ascension:e.ascension||0});const p=D(a.key,e.minRarity||me);a=Z(p);const $=e.forcedBase?U(h,e.forcedBase):F(o[h]||[]),A=L(e),O=v[h]||{},s=t(h,j,a.key),d=Math.round(s*A*(O.qualityBias||1)),q=se($.stats,j,a),K=x(q),ae=X(d/Math.max(1,K),.74,2.35);Object.keys(q).forEach(ie=>{const ke=.88+ae*.12+y(h,ie)*.34;q[ie]=Y(ie,q[ie],ke)});const J={id:l(),slot:h,name:$.name,rarity:a.key,tier:a.order,level:j,itemLevel:j,baseName:$.name,stats:q,affixes:[],upgrade:0,powerBudget:d,qualityRoll:A,provenance:{source:m,zoneId:e.zoneId??null,enemyKind:e.enemyKind||null,playerLevel:e.playerLevel||j,ascension:e.ascension||0,createdAt:f()},lockFlags:{bound:!1,crafted:m==="forge",transcended:!1},createdAt:f(),reforge:0,transcend:0};return pe(J,{...e,guaranteedAffixes:e.guaranteedAffixes||0}),ue(J),ve(J)}function pe(e,m={}){const h=Z(e.rarity),j=Math.max(0,Math.round(m.guaranteedAffixes||0)),w=e.qualityRoll>=1.16?1:0,ne=Math.min(7,h.affixes+j+w),de=Math.max(0,h.affixes-(e.qualityRoll<.94?1:0)),me=X(B(de,ne),0,7),a=new Set,p=[];for(let O=0;O<me;O+=1){let s=0,d=F(T);for(;s<40&&a.has(d.prefix||d.suffix);)d=F(T),s+=1;a.add(d.prefix||d.suffix),p.push(d),Object.entries(d.stats||{}).forEach(([q,K])=>{const ae=Ke.has(q)?I(K,e.itemLevel):z(K,e.itemLevel),J=Math.max(.16,(e.powerBudget-x(e.stats))/Math.max(1,e.powerBudget)),ie=Ke.has(q)?.64+J*.42+(e.qualityRoll-1)*.2:.72+J*.56+(e.qualityRoll-1)*.34,ke=Y(q,ae,Math.max(.18,ie));e.stats[q]=R((e.stats[q]||0)+ke,Ke.has(q)?4:2)})}e.affixes=p.map(O=>O.prefix||O.suffix);const $=p.find(O=>O.prefix),A=p.find(O=>O.suffix);return e.name=[$?$.prefix:null,e.baseName,A?A.suffix:null].filter(Boolean).join(" "),ve(e)}function le(e,m,h=null,j=null,w=0){return ge({source:"forge",slot:e,playerLevel:m,itemLevel:m,forcedRarity:h,forcedBase:j,guaranteedAffixes:w,qualityRoll:h==="common"?.9:void 0})}function C(e,m){const h=le(e,1,"common",m,0);return h.affixes=[],h.name=m,h.qualityRoll=.88,h.lockFlags={...h.lockFlags||{},starter:!0,crafted:!1},h.provenance={...h.provenance||{},source:"starter"},ve(h)}function i(e={}){const m=e.source||"arena",h=ge(e),j=xe(m,e.streakData||{},h.rarity),w=he(m,j);return{item:h,streakData:j,pityState:{source:m,epic:w.epic,mythic:w.mythic,ascendant:w.ascendant},milestone:{epic:h.rarity==="epic",mythic:h.rarity==="mythic"}}}function ee(e){return{common:1,uncommon:1.14,rare:1.42,epic:1.92,legendary:2.76,mythic:4.1,ascendant:7.4}[e]||1}function Q(e=1,m={}){const h=6+Math.min(3,Math.floor(e/10)),j=[];let w=m.streakData||{};for(let de=0;de<h;de+=1){const me=X(1+de*.04,1,1.28),a=i({source:"market",playerLevel:e,itemLevel:Math.max(1,e+B(-1,3)),lootLuck:m.lootLuck||0,smartLoot:!1,streakData:w,ascension:m.ascension||0});w=a.streakData;const p=a.item,$=1+Math.max(0,e-1)*.012,A=Math.round(p.economyValue*ee(p.rarity)*me*$);p.price=A,p.marketMeta={scarcity:ee(p.rarity),rotationBias:me,levelMod:$},j.push(p)}const ne=j.sort((de,me)=>(me.marketScore||0)-(de.marketScore||0));return m.returnMeta?{items:ne,streakData:w}:ne}function ce(){return[C("helm","Yelmo de Bronce"),C("boots","Sandalias de Arena"),le("ring",1,"uncommon")]}function be(e){const m=e.itemLevel||e.level||1,h=Math.max(0,e.upgrade||0),j=Math.max(0,e.transcend||0),w=e.qualityRoll||1,ne=1+h*.085+j*.035+Math.max(0,w-1)*.16,de={};return Object.entries(e.stats||{}).forEach(([me,a])=>{Ke.has(me)?de[me]=I(a,m,h+j):de[me]=R(a*ne,2)}),de}function $e(e){const h=Z(e.rarity).salvageProfile||{},j=(e.affixes||[]).length,w=e.itemLevel||e.level||1,ne=e.upgrade||0;return{iron:Math.max(1,Math.round((h.iron||1)+w*.07+j*(h.affixWeight||.05)*4+ne*(h.upgradeWeight||.05))),wood:Math.max(0,Math.round((h.wood||0)+w*.035+j*(h.affixWeight||.05)*2.2)),essence:Math.max(0,Math.round((h.essence||0)+j*(h.affixWeight||.05)*1.8+ne*.1)),sigils:Math.max(0,Math.round((h.sigils||0)+Math.max(0,w-18)*.02+ne*.08)),echoShards:Math.max(0,Math.round((h.echoShards||0)+Math.max(0,w-28)*.012+ne*.06))}}function k(e,m={}){if(!e||typeof e!="object")return null;const h=u.includes(e.slot)?e.slot:m.slot||u[0],j=Z(e.rarity||m.rarity||"common"),w=Math.max(1,Math.round(e.itemLevel||e.level||m.itemLevel||1)),ne=X(typeof e.qualityRoll=="number"?e.qualityRoll:1,.82,1.24),de=Math.max(1,Math.round(e.powerBudget||t(h,w,j.key)*ne)),me={...e,id:e.id||l(),slot:h,rarity:j.key,tier:typeof e.tier=="number"?e.tier:j.order,level:w,itemLevel:w,name:e.name||e.baseName||"Objeto sin nombre",baseName:e.baseName||e.name||"Base desconocida",stats:{...e.stats||{}},affixes:Array.isArray(e.affixes)?e.affixes:[],upgrade:Math.max(0,Math.round(e.upgrade||0)),reforge:Math.max(0,Math.round(e.reforge||0)),transcend:Math.max(0,Math.round(e.transcend||0)),qualityRoll:ne,powerBudget:de,provenance:{source:e.provenance&&e.provenance.source?e.provenance.source:m.source||"legacy",zoneId:e.provenance&&e.provenance.zoneId!==void 0?e.provenance.zoneId:null,enemyKind:e.provenance&&e.provenance.enemyKind?e.provenance.enemyKind:null,playerLevel:e.provenance&&e.provenance.playerLevel?e.provenance.playerLevel:w,ascension:e.provenance&&e.provenance.ascension?e.provenance.ascension:0,createdAt:e.provenance&&e.provenance.createdAt?e.provenance.createdAt:e.createdAt||f()},lockFlags:{bound:!!(e.lockFlags&&e.lockFlags.bound),crafted:!!(e.lockFlags&&e.lockFlags.crafted),transcended:!!(e.lockFlags&&e.lockFlags.transcended),starter:!!(e.lockFlags&&e.lockFlags.starter)},createdAt:e.createdAt||f()};return ue(me),ve(me)}return{scaleItemStats:be,computeItemScores:P,computeItemScore:_,estimateSalvage:$e,makeItem:le,makeStarterItem:C,rollLoot:i,makeItemFromBudget:ge,applyAffixesWithBudget:pe,generateMarket:Q,starterInventory:ce,normalizeItem:k}}function fn(r){const{SLOT_ORDER:o,emptyStats:v,addStats:M,softRound:u,clamp:T}=r,F={sig:"",value:null};function B(S,f,E){if(S<=f)return S;const V=S-f;return f+V/(1+V*E)}function l(S,f,E=f*.66,V=6.5){const I=Math.max(0,S||0),Y=B(I,E,V);return T(Y,0,f)}function R(){F.sig="",F.value=null}function X(S,f){const E=f(),V=v();if(!E||!S.player.petLevel)return V;const I=1+S.player.petLevel*.16;return Object.entries(E.bonus).forEach(([Y,x])=>{V[Y]=u((V[Y]||0)+x*I,4)}),V}function Z(S){const f=S.player.guild,E=v();return E.attackPct+=f.barracks*.03,E.defensePct+=f.barracks*.02,E.goldPct+=f.treasury*.08,E.hpPct+=f.sanctuary*.05,E.regenPct+=f.sanctuary*.08,E.lootLuck+=f.hunters*.05,E}function N(S){const f=S.player.relics,E=v();return E.attackPct+=f.wrath*.04,E.goldPct+=f.fortune*.05,E.lootLuck+=f.fortune*.03,E.hpPct+=f.vitality*.06,E.regenPct+=f.vitality*.06,E.speedPct+=f.momentum*.03,E}function g(S,f){const E=v();return o.forEach(V=>{const I=S.player.equipment[V];I&&M(E,f(I))}),E}function U(S){const f=S.player.training;return{attack:f.strength*2.2,defense:f.endurance*1.3,speed:f.agility*1.5,hp:f.endurance*16,crit:f.agility*.002,dodge:f.agility*.002,block:f.endurance*.0015,lifesteal:f.strength*8e-4}}function z(S,f){if(!S.player)return{attack:14,defense:10,speed:8,maxHp:140,crit:.06,dodge:.04,block:.03,lifesteal:0,maxEnergy:100,maxStamina:12,goldPct:0,lootLuck:0,regenPct:0};const{getPetData:E,scaleItemStats:V}=f,I=S.player,Y=[I.level,I.baseStats.attack,I.baseStats.defense,I.baseStats.speed,I.baseStats.crit,I.baseStats.dodge,I.baseStats.block,I.baseStats.lifesteal,I.training.strength,I.training.agility,I.training.endurance,I.training.discipline,I.guild.barracks,I.guild.treasury,I.guild.sanctuary,I.guild.hunters,I.guild.arsenal,I.relics.wrath,I.relics.fortune,I.relics.vitality,I.relics.momentum,I.pet||"",I.petLevel||0,...o.map(ee=>{const Q=I.equipment[ee];return Q?`${Q.id}:${Q.level}:${Q.upgrade||0}:${Q.rarity}:${Q.reforge||0}`:"-"})].join("|");if(F.sig===Y&&F.value)return F.value;const x=I.level,y={attack:I.baseStats.attack+x*3.2,defense:I.baseStats.defense+x*2.45,speed:I.baseStats.speed+x*1.2,hp:120+x*34,crit:I.baseStats.crit,dodge:I.baseStats.dodge,block:I.baseStats.block,lifesteal:I.baseStats.lifesteal,maxEnergy:100+I.training.discipline*5+I.relics.momentum*10,maxStamina:12+Math.floor(I.training.discipline/4)+I.relics.momentum},t=g(S,V),L=U(S),oe=Z(S),H=N(S),D=X(S,E);let he=y.attack+(t.attack||0)+(L.attack||0),xe=y.defense+(t.defense||0)+(L.defense||0),se=y.speed+(t.speed||0)+(L.speed||0),P=y.hp+(t.hp||0)+(L.hp||0);const _=(oe.attackPct||0)+(H.attackPct||0)+(D.attackPct||0),W=(oe.defensePct||0)+(D.defensePct||0),ve=(oe.hpPct||0)+(H.hpPct||0)+(D.hpPct||0),ue=(H.speedPct||0)+(D.speedPct||0);he*=1+_,xe*=1+W,P*=1+ve,se*=1+ue;const ge=Math.max(1,I.level+(I.ascension||0)*2);he=B(he,55+ge*9.5,.0024),xe=B(xe,44+ge*8.1,.0029),se=B(se,26+ge*4.2,.0046),P=B(P,520+ge*120,52e-5);const pe=y.crit+(t.crit||0)+(L.crit||0)+(D.crit||0),le=y.dodge+(t.dodge||0)+(L.dodge||0)+(D.dodge||0),C=y.block+(t.block||0)+(L.block||0)+(D.block||0),i=y.lifesteal+(t.lifesteal||0)+(L.lifesteal||0);return F.sig=Y,F.value={attack:u(he,2),defense:u(xe,2),speed:u(se,2),maxHp:Math.round(P),crit:u(l(pe,.62,.36,8.2),4),dodge:u(l(le,.5,.31,9.8),4),block:u(l(C,.46,.29,10.2),4),lifesteal:u(l(i,.34,.18,11.4),4),maxEnergy:y.maxEnergy,maxStamina:y.maxStamina,goldPct:(oe.goldPct||0)+(D.goldPct||0)+(H.goldPct||0),lootLuck:(oe.lootLuck||0)+(D.lootLuck||0)+(H.lootLuck||0),regenPct:(oe.regenPct||0)+(D.regenPct||0)+(H.regenPct||0)},F.value}function c(S,f){return S.player&&z(S,f).lootLuck||0}return{invalidateDerivedCache:R,petBonus:X,getGuildBonus:Z,getRelicBonus:N,getEquipmentBonus:g,getTrainingBonus:U,getDerivedStats:z,getLootLuck:c}}function vn(r){const{pick:o,uid:v,makeStarterItem:M,starterInventory:u,generateMarket:T}=r;function F(R){return Math.round(95+Math.pow(R,1.46)*48)}function B(R=1){const X=[{type:"kills",title:"Barrido de rivales",desc:"Derrota enemigos en la arena.",target:7+Math.floor(R*1.6),reward:{gold:120+R*20,xp:60+R*14,essence:1}},{type:"wins",title:"Clamor del publico",desc:"Gana combates de arena.",target:4+Math.floor(R*.6),reward:{gold:140+R*24,xp:65+R*15,potions:1}},{type:"earnGold",title:"Bolsillos pesados",desc:"Obten oro por cualquier medio.",target:320+R*90,reward:{gold:150+R*22,xp:70+R*12,shards:1}},{type:"crafts",title:"Acero fresco",desc:"Forja o mejora equipo.",target:2+Math.floor(R/7),reward:{gold:180+R*18,xp:60+R*16,iron:3}},{type:"expeditions",title:"Rutas peligrosas",desc:"Completa expediciones.",target:2+Math.floor(R/8),reward:{gold:160+R*18,xp:72+R*14,wood:3}},{type:"dungeons",title:"Hedor profundo",desc:"Supera incursiones en mazmorra.",target:1+Math.floor(R/10),reward:{gold:220+R*18,xp:95+R*18,keys:1}},{type:"salvaged",title:"Chatarra util",desc:"Recicla equipo sobrante.",target:3+Math.floor(R/7),reward:{gold:130+R*18,xp:55+R*13,essence:2}},{type:"elites",title:"Sangre de elite",desc:"Derrota enemigos elite.",target:1+Math.floor(R/9),reward:{gold:240+R*20,xp:90+R*17,shards:1}}],Z=[],N=[];for(;Z.length<4&&N.length<X.length;){const g=o(X);N.includes(g.type)||(N.push(g.type),Z.push({id:v(),type:g.type,title:g.title,desc:g.desc,progress:0,target:g.target,reward:g.reward,completed:!1,claimed:!1}))}return Z}function l(){const R=Date.now();return{version:5,currentView:"resumen",currentTab:"resumen",featureFlags:{itemPipelineV2:!0,itemTelemetryV2:!0},ui:{inventoryFilter:"all",inventoryPage:1,inventoryPageSize:18,journalPage:1,journalPageSize:16,modal:null,forgePreview:null,moreMenuOpen:!1,collapsedCardsByView:{}},player:{name:"Aurelio",title:"Novato del Coliseo",level:1,xp:0,gold:260,shards:0,iron:16,wood:12,essence:5,sigils:0,echoShards:0,food:6,potions:3,keys:2,hp:140,energy:100,stamina:12,baseStats:{attack:14,defense:10,speed:8,crit:.06,dodge:.04,block:.03,lifesteal:0},training:{strength:0,agility:0,endurance:0,discipline:0},guild:{barracks:0,treasury:0,sanctuary:0,hunters:0,arsenal:0},relics:{wrath:0,fortune:0,vitality:0,momentum:0},pet:null,petLevel:0,petXp:0,activeSkills:["powerStrike","quickLunge","fortify"],unlockedSkills:["powerStrike","quickLunge","fortify"],skillLevels:{powerStrike:1,quickLunge:1,fortify:1,shieldBash:1,bloodRage:1,whirlwind:1,execution:1,venomCut:1,berserk:1,celestialEdge:1},skillPoints:0,attributePoints:0,zoneId:0,highestDungeonFloor:1,ascension:0,relicDust:0,itemPity:{bySource:{},epic:0,mythic:0,ascendant:0,total:0},equipment:{weapon:M("weapon","Gladius"),offhand:M("offhand","Escudo de Torre"),helm:null,chest:M("chest","Coraza Segmentada"),gloves:null,boots:null,ring:null,amulet:null},inventory:u()},stats:{wins:0,losses:0,kills:0,damageDone:0,damageTaken:0,crits:0,questsCompleted:0,crafted:0,salvaged:0,earnedGold:0,expeditions:0,dungeons:0,elites:0,legendaryFound:0,mythicFound:0,ascendantFound:0,goldSpent:0,materialsSpent:0,equippedUpgrades:0,craftUsage:{craft:0,enhance:0,reforge:0,transcend:0},telemetry:{startedAt:R,firstEpicAt:null,firstMythicAt:null,firstAscendantAt:null,rarityBySource:{arena:{},dungeon:{},expedition:{},market:{},forge:{},legacy:{}},netGoldByHour:{},netMaterialsByHour:{},milestonesShown:{epic:!1,mythic:!1}}},quests:B(1),claimedAchievements:[],timers:{job:null,expedition:null},market:{items:T(1),lastRefresh:Date.now(),refreshChainCount:0,totalRefreshes:0},journal:[{id:v(),ts:Date.now(),icon:"⚔️",text:"Has entrado en Aether Arena. El coliseo huele a hierro, oro y gloria."}],streak:{lastClaimDay:null,days:0},combatHistory:[],lastTick:Date.now(),lastSave:0}}return{xpNeeded:F,defaultQuests:B,makeDefaultState:l}}function yn(r){const{state:o,PETS:v,sum:M,statsDomain:u,scaleItemStats:T}=r;function F(){return 28+o.player.guild.arsenal*8+o.player.ascension*2}function B(){return M(Object.values(o.player.guild||{}))}function l(){return v.find(c=>c.id===o.player.pet)||null}function R(){return u.petBonus(o,l)}function X(){return u.getGuildBonus(o)}function Z(){return u.getRelicBonus(o)}function N(){return u.getEquipmentBonus(o,T)}function g(){return u.getTrainingBonus(o)}function U(){return u.getDerivedStats(o,{getPetData:l,scaleItemStats:T})}function z(){return u.getLootLuck(o,{getPetData:l,scaleItemStats:T})}return{maxInventory:F,guildTotal:B,getPetData:l,petBonus:R,getGuildBonus:X,getRelicBonus:Z,getEquipmentBonus:N,getTrainingBonus:g,getDerivedStats:U,getLootLuck:z}}function hn(r){const{clone:o,statsDomain:v,makeDefaultState:M,createStore:u,subscribeWithSelector:T}=r,F=new Set(["_meta","actions"]),B={};function l(z={}){return{hydrated:!1,isDirty:!1,isSaving:!1,lastMutationAt:0,lastMutationLabel:"bootstrap",mutationCount:0,lastSaveAt:0,saveCount:0,lastSource:"bootstrap",syncRevision:0,...z}}function R(z=null){const c=z||B,S={};return Object.keys(c||{}).forEach(f=>{F.has(f)||(S[f]=o(c[f]))}),S}function X(z=null){const c=R(z);return c.ui&&(c.ui.modal=null,c.ui.moreMenuOpen=!1,c.ui.forgePreview=null),c}function Z(z){Object.keys(B).forEach(c=>delete B[c]),Object.assign(B,z),v.invalidateDerivedCache()}const N=u(T(()=>({...o(M()),_meta:l(),actions:{}})));function g(){return Z(R(N.getState())),B}function U(z,c={},S=!0){const f=N.getState(),E=l({...f._meta||{},...c}),V={...o(z),_meta:E,actions:f.actions||{}};return N.setState(V,S),g()}return{state:B,gameStore:N,createStoreMeta:l,snapshotGameData:R,serializableState:X,replaceState:Z,syncStateFromStore:g,setStoreSnapshot:U}}function bn(r){const{state:o,gameStore:v,clone:M,snapshotGameData:u,replaceState:T,normalizeState:F,createStoreMeta:B,setStoreSnapshot:l}=r;function R(){return v.getState()._meta||B()}function X(z={}){const c=v.getState();return v.setState({...c,_meta:B({...c._meta||{},...z})}),R()}function Z(z={},c=!0){return l(o,z,c)}function N(z,c,S={}){const f=u(v.getState());try{T(M(f)),typeof c=="function"&&c(o),S.normalize&&F();const E=R();return Z({hydrated:!0,isDirty:S.markDirty===!1?E.isDirty:!0,isSaving:!1,lastMutationAt:Date.now(),lastMutationLabel:z||"mutation",mutationCount:(E.mutationCount||0)+1,lastSource:S.source||"local"})}catch(E){throw T(f),E}}function g(z,c,S){return typeof z=="function"&&typeof c=="function"?v.subscribe(z,c,S):v.subscribe(z)}function U(z){return typeof z=="function"?z(v.getState()):v.getState()}return{getStoreMeta:R,setStoreMeta:X,commitWorkingState:Z,mutate:N,subscribeStore:g,selectStore:U}}function xn(r){const{STORAGE_KEY:o,state:v,makeDefaultState:M,clone:u,snapshotGameData:T,serializableState:F,replaceState:B,normalizeState:l,commitWorkingState:R,setStoreMeta:X,getStoreMeta:Z}=r;function N(S,f="storage"){B(u(S||M())),l();const E=Date.now();return R({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:v.lastSave||E,lastSource:f,syncRevision:f==="external-sync"?Z().syncRevision+1:Z().syncRevision})}function g(){try{const S=Date.now();X({isSaving:!0});const f=F();return f.lastSave=S,localStorage.setItem(o,JSON.stringify(f)),B(T()),v.lastSave=S,R({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:S,saveCount:(Z().saveCount||0)+1,lastSource:"save"}),!0}catch(S){return console.warn("No se pudo guardar la partida.",S),X({isSaving:!1}),!1}}function U(){try{const S=localStorage.getItem(o);return S?N(JSON.parse(S),"storage"):N(M(),"new-game")}catch(S){return console.warn("Guardado corrupto, creando uno nuevo.",S),N(M(),"recovered")}}function z(S){try{return N(S?JSON.parse(S):M(),"external-sync")}catch(f){return console.warn("No se pudo sincronizar el estado externo.",f),!1}}function c(){return localStorage.removeItem(o),N(M(),"reset")}return{loadFromParsedState:N,saveGame:g,loadGame:U,syncExternalState:z,hardReset:c}}(()=>{const{STORAGE_KEY:r,SLOT_ORDER:o,ITEM_BASES:v,ITEM_ARCHETYPES:M,STAT_BUDGETS:u,AFFIXES:T,PETS:F,SKILLS:B}=window.AetherConfig,{clone:l,rand:R,pick:X,clamp:Z,sum:N,uid:g,softRound:U,rarityDef:z,rarityOrder:c,deepMerge:S,emptyStats:f,addStats:E,localDayKey:V,pickRarity:I,findBaseItem:Y,scaledStatValue:x}=window.AetherUtils,y=fn({SLOT_ORDER:o,emptyStats:f,addStats:E,softRound:U,clamp:Z});let t=()=>0;const{scaleItemStats:L,computeItemScores:oe,computeItemScore:H,estimateSalvage:D,makeItem:he,makeStarterItem:xe,rollLoot:se,makeItemFromBudget:P,applyAffixesWithBudget:_,generateMarket:W,starterInventory:ve,normalizeItem:ue}=gn({ITEM_BASES:v,ITEM_ARCHETYPES:M,STAT_BUDGETS:u,AFFIXES:T,SLOT_ORDER:o,pick:X,rand:R,uid:g,softRound:U,clamp:Z,rarityDef:z,rarityOrder:c,pickRarity:I,findBaseItem:Y,scaledStatValue:x,getLootLuck:()=>t()}),{xpNeeded:ge,defaultQuests:pe,makeDefaultState:le}=vn({pick:X,uid:g,makeStarterItem:xe,starterInventory:ve,generateMarket:W}),C=hn({clone:l,statsDomain:y,makeDefaultState:le,createStore:un,subscribeWithSelector:mn}),{state:i,gameStore:ee,createStoreMeta:Q,snapshotGameData:ce,serializableState:be,replaceState:$e,syncStateFromStore:k,setStoreSnapshot:e}=C,m=yn({state:i,PETS:F,sum:N,statsDomain:y,scaleItemStats:L}),{maxInventory:h,guildTotal:j,getPetData:w,petBonus:ne,getGuildBonus:de,getRelicBonus:me,getEquipmentBonus:a,getTrainingBonus:p,getDerivedStats:$,getLootLuck:A}=m;t=A,k();function O(ye=null){const Me=i.player,Ie=[];return Object.values(B).forEach(je=>{Me.level>=je.unlockLevel&&!Me.unlockedSkills.includes(je.id)&&(Me.unlockedSkills.push(je.id),Ie.push(je))}),typeof ye=="function"&&Ie.forEach(je=>ye(je)),Ie}function s(ye,Me="legacy"){return(Array.isArray(ye)?ye:[]).map(Ie=>ue(Ie,{source:Me})).filter(Boolean)}function d(ye,Me){const Ie={...Me||{}};return o.forEach(je=>{ye&&ye[je]?Ie[je]=ue(ye[je],{slot:je,source:ye[je].provenance&&ye[je].provenance.source||"legacy"}):Ie[je]=null}),Ie}function q(ye){const Me=Number(i.version||0);i.player.inventory=s(i.player.inventory,"legacy"),i.player.equipment=d(i.player.equipment,ye.player.equipment),i.market.items=s(i.market.items,"market"),i.player.inventory.sort((Ie,je)=>{const nt=c(je.rarity)-c(Ie.rarity);return nt!==0?nt:(je.score||0)-(Ie.score||0)}),(!i.player.itemPity||typeof i.player.itemPity!="object")&&(i.player.itemPity=l(ye.player.itemPity)),Me<ye.version&&(i.version=ye.version)}function K(){const ye=le();$e(S(ye,l(i))),i.currentView=i.currentView||i.currentTab||"resumen",i.currentTab=i.currentView,i.ui.moreMenuOpen=!!i.ui.moreMenuOpen,i.player.inventory||(i.player.inventory=[]),i.player.equipment||(i.player.equipment=ye.player.equipment),i.player.guild||(i.player.guild=ye.player.guild),i.player.training||(i.player.training=ye.player.training),i.player.relics||(i.player.relics=ye.player.relics),i.player.skillLevels||(i.player.skillLevels=ye.player.skillLevels),i.player.activeSkills||(i.player.activeSkills=ye.player.activeSkills),i.player.unlockedSkills||(i.player.unlockedSkills=ye.player.unlockedSkills),i.quests||(i.quests=ye.quests),(!i.market||!i.market.items)&&(i.market=ye.market),i.stats||(i.stats=ye.stats),i.claimedAchievements||(i.claimedAchievements=[]),i.combatHistory||(i.combatHistory=[]),i.journal||(i.journal=ye.journal),i.streak||(i.streak=ye.streak),i.timers||(i.timers=ye.timers),i.ui||(i.ui=ye.ui),q(ye),i.ui.inventoryFilter=i.ui.inventoryFilter||"all",i.ui.inventoryPage=Math.max(1,Number(i.ui.inventoryPage)||1),i.ui.inventoryPageSize=Math.max(6,Number(i.ui.inventoryPageSize)||ye.ui.inventoryPageSize),i.ui.journalPage=Math.max(1,Number(i.ui.journalPage)||1),i.ui.journalPageSize=Math.max(8,Number(i.ui.journalPageSize)||ye.ui.journalPageSize),(!i.ui.collapsedCardsByView||typeof i.ui.collapsedCardsByView!="object")&&(i.ui.collapsedCardsByView={}),O();const Me=$();i.player.hp=Z(i.player.hp||Me.maxHp,1,Me.maxHp),i.player.energy=Z(i.player.energy??Me.maxEnergy,0,Me.maxEnergy),i.player.stamina=Z(i.player.stamina??Me.maxStamina,0,Me.maxStamina),i.player.title=i.player.title||"Novato del Coliseo",i.lastTick=i.lastTick||Date.now(),i.lastSave=i.lastSave||0}const ae=bn({state:i,gameStore:ee,clone:l,snapshotGameData:ce,replaceState:$e,normalizeState:K,createStoreMeta:Q,setStoreSnapshot:e}),{getStoreMeta:J,setStoreMeta:ie,commitWorkingState:ke,mutate:fe,subscribeStore:Se,selectStore:qe}=ae,Ee=xn({STORAGE_KEY:r,state:i,makeDefaultState:le,clone:l,snapshotGameData:ce,serializableState:be,replaceState:$e,normalizeState:K,commitWorkingState:ke,setStoreMeta:ie,getStoreMeta:J}),{saveGame:Ae,loadGame:Ve,syncExternalState:Ue,hardReset:ze}=Ee,Ze={mutate:fe,saveGame:Ae,loadGame:Ve,hardReset:ze,setMeta:ie,syncExternalState:Ue};ee.setState({...ee.getState(),actions:Ze}),k(),window.AetherModel={state:i,store:ee,replaceState:$e,snapshotGameData:ce,mutate:fe,subscribeStore:Se,selectStore:qe,getStoreMeta:J,setStoreMeta:ie,syncExternalState:Ue,makeItem:he,makeStarterItem:xe,scaleItemStats:L,computeItemScores:oe,computeItemScore:H,estimateSalvage:D,rollLoot:se,makeItemFromBudget:P,applyAffixesWithBudget:_,normalizeItem:ue,xpNeeded:ge,defaultQuests:pe,generateMarket:W,starterInventory:ve,makeDefaultState:le,maxInventory:h,guildTotal:j,getPetData:w,petBonus:ne,getGuildBonus:de,getRelicBonus:me,getEquipmentBonus:a,getTrainingBonus:p,getDerivedStats:$,getLootLuck:A,ensureUnlockedSkills:O,normalizeState:K,saveGame:Ae,loadGame:Ve,hardReset:ze}})();function $n(r){const{SKILLS:o,pick:v,rand:M,randf:u,clamp:T,softRound:F,uid:B}=r;function l(x){return{berserker:{attack:1.12,defense:.92,speed:1.03,crit:.04,dodge:.01,block:0,lifesteal:.02},guardian:{attack:.9,defense:1.18,speed:.92,crit:.01,dodge:.02,block:.05,lifesteal:0},assassin:{attack:1,defense:.86,speed:1.22,crit:.06,dodge:.05,block:.01,lifesteal:0},beast:{attack:1.08,defense:.95,speed:1.09,crit:.03,dodge:.03,block:0,lifesteal:.03},occult:{attack:1.03,defense:.94,speed:1.05,crit:.05,dodge:.02,block:.02,lifesteal:0}}[x]||{attack:1,defense:1,speed:1,crit:0,dodge:0,block:0,lifesteal:0}}function R({zone:x,kind:y="normal",playerLevel:t=1,playerAscension:L=0,wins:oe=0}){const H=Math.pow(t,.88)*.04,D=x&&typeof x.id=="number"?x.id*.25:0,he=L*.25,xe=Math.min(oe/60,3),se=y==="elite"?.3:y==="boss"?.6:0;return 1+H+D+he+xe+se}function X({zone:x,kind:y="normal",extraScale:t=0,playerLevel:L=1,playerAscension:oe=0,wins:H=0}){const he=v(["berserker","guardian","assassin","beast","occult"]),xe=l(he),se=Math.max(1,Math.round(x.unlockLevel+L*.95+x.id*1.8+t+M(-1,2))),P=y==="elite"?1.3:y==="boss"?1.6:1,_=R({zone:x,kind:y,playerLevel:L,playerAscension:oe,wins:H}),W=(12+se*3.4)*xe.attack*P*_,ve=(8+se*2.8)*xe.defense*P*_,ue=(120+se*34)*(y==="boss"?2.1:y==="elite"?1.5:1)*_,ge=(7+se*1.08)*xe.speed*_,pe=y==="boss"?x.boss:v(x.enemies),le={berserker:{name:"Furia salvaje",mult:1.45,cooldown:3},guardian:{name:"Muro de carne",mult:.9,cooldown:4,selfBuff:{defensePct:.2,turns:2}},assassin:{name:"Deguello",mult:1.2,cooldown:3,critBonus:.18},beast:{name:"Desgarro",mult:1.08,cooldown:3,dot:{turns:2,ratio:.12,label:"Sangrado"}},occult:{name:"Maldicion",mult:1.15,cooldown:4,armorBreak:{pct:.14,turns:2}}}[he];return{id:B(),name:pe,zoneId:x.id,kind:y,archetype:he,level:se,maxHp:Math.round(ue),hp:Math.round(ue),attack:F(W,2),defense:F(ve,2),speed:F(ge,2),crit:T(.06+xe.crit+(y==="boss"?.03:y==="elite"?.015:0)+(_-1)*.015,0,.55),dodge:T(.025+xe.dodge+(y==="boss"?.02:y==="elite"?.01:0)+(_-1)*.012,0,.45),block:T(.015+xe.block+(y==="boss"?.04:y==="elite"?.02:0)+(_-1)*.012,0,.4),lifesteal:T(xe.lifesteal+(y==="boss"?.01:y==="elite"?.005:0)+(_-1)*.008,0,.25),skill:le,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0}}function Z(x,y){return{id:"player",name:x.name,maxHp:y.maxHp,hp:Math.round(x.hp),attack:y.attack,defense:y.defense,speed:y.speed,crit:y.crit,dodge:y.dodge,block:y.block,lifesteal:y.lifesteal,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0,activeSkills:(x.activeSkills||[]).filter(t=>(x.unlockedSkills||[]).includes(t))}}function N(x,y){return x.buffs.filter(t=>t.turns>0&&y in(t.values||{})).reduce((t,L)=>t+L.values[y],0)}function g(x,y){const t=`${y}Pct`;let L=x[y];return y==="defense"&&x.armorBreak&&x.armorBreak.turns>0&&(L*=1-x.armorBreak.pct),(y==="attack"||y==="defense"||y==="speed")&&(L*=1+N(x,t)),L+=N(x,y),L}function U(x,y){return 1+Math.max(0,(x&&x[y]||1)-1)*.08}function z(x,y,t){const L=x.activeSkills||[];for(const oe of L){const H=o[oe];if(H&&!(H.requireOffhand&&!t.equipment.offhand)&&!((x.cooldowns[oe]||0)>0)&&!(H.executeThreshold&&y.hp/y.maxHp>H.executeThreshold))return H}return null}function c(x){return!x.skill||(x.cooldowns.special||0)>0?null:x.skill}function S(x,y){x.dots=x.dots.filter(t=>{if(t.turns<=0)return!1;const L=Math.round(t.damage);return x.hp-=L,y.push(`☠️ ${x.name} sufre ${L} por ${t.label}.`),t.turns-=1,t.turns>0}),x.buffs.forEach(t=>{t.turns-=1}),x.buffs=x.buffs.filter(t=>t.turns>0),x.armorBreak&&(x.armorBreak.turns-=1,x.armorBreak.turns<=0&&(x.armorBreak=null))}function f(x,y,t,L=1,oe={},H=[]){const D=g(x,"attack"),he=g(y,"defense"),xe=T((x.crit||0)+(oe.critBonus||0),0,.85),se=T(y.dodge||0,0,.7);if(Math.random()<se)return H.push(`💨 ${y.name} esquiva ${t}.`),{damage:0,crit:!1,dodged:!0,blocked:!1};let P=D*L-he*.55;P=Math.max(D*.26,P),P*=u(.9,1.08);let _=!1;Math.random()<xe&&(P*=1.68,_=!0);let W=!1;if(Math.random()<(y.block||0)&&(P*=.66,W=!0),P=Math.max(1,Math.round(P)),y.shield>0){const ge=Math.min(y.shield,P);y.shield-=ge,P-=ge,ge>0&&H.push(`🛡️ ${y.name} absorbe ${ge} con un escudo.`)}if(P>0){y.hp-=P;const ge=P*T((x.lifesteal||0)+(oe.lifestealBonus||0),0,.9);ge>0&&(x.hp=Math.min(x.maxHp,x.hp+Math.round(ge)))}const ve=_?" crítico":"",ue=W?" (bloqueado parcialmente)":"";return H.push(`⚔️ ${x.name} usa ${t} y causa ${P}${ve}${ue}.`),{damage:P,crit:_,dodged:!1,blocked:W}}function E(x,y,t,L,oe){if(!(!t||L.dodged)&&(t.armorBreak&&(y.armorBreak={pct:t.armorBreak.pct,turns:t.armorBreak.turns+1},oe.push(`🧩 La armadura de ${y.name} queda expuesta.`)),t.dot&&L.damage>0&&(y.dots.push({damage:Math.max(3,x.attack*t.dot.ratio),turns:t.dot.turns,label:t.dot.label}),oe.push(`🩸 ${y.name} queda afectado por ${t.dot.label}.`)),t.selfBuff)){if(x.buffs.push({turns:t.selfBuff.turns+1,values:{attackPct:t.selfBuff.attackPct||0,defensePct:t.selfBuff.defensePct||0,speedPct:t.selfBuff.speedPct||0}}),t.selfBuff.shieldPct){const H=Math.round(x.maxHp*t.selfBuff.shieldPct);x.shield+=H,oe.push(`🛡️ ${x.name} obtiene un escudo de ${H}.`)}oe.push(`✨ ${x.name} activa un refuerzo temporal.`)}}function V(x,y,t,L,oe,H){if(x.hp<=0||y.hp<=0)return null;const D=t?z(x,y,L):c(x);if(!D){t&&(oe.playerBasicAttacks+=1);const P=f(x,y,"Golpe básico",1,{},H);return P.damage>0&&(t?oe.damageDone+=P.damage:oe.damageTaken+=P.damage),P}const he=(D.mult||1)*(t?U(L.skillLevels,D.id):1);t&&(oe.playerSkillCasts+=1);const xe=D.hits||1;let se=null;for(let P=0;P<xe;P++){const _={};D.critBonus&&(_.critBonus=D.critBonus),D.lifestealBonus&&(_.lifestealBonus=D.lifestealBonus);let W=he;if(D.executeThreshold&&y.hp/y.maxHp<=D.executeThreshold&&(W*=D.executeMult||1.6),se=f(x,y,D.name,W,_,H),se&&se.damage>0&&(t?oe.damageDone+=se.damage:oe.damageTaken+=se.damage),se&&se.crit&&t&&(oe.crits+=1),y.hp<=0)break}return E(x,y,D,se||{dodged:!1,damage:0},H),t?x.cooldowns[D.id]=D.cooldown:x.cooldowns.special=D.cooldown,se}function I(x){Object.keys(x.cooldowns).forEach(y=>{x.cooldowns[y]=Math.max(0,(x.cooldowns[y]||0)-1)})}function Y({enemy:x,playerState:y,derivedStats:t,zoneName:L,maxTurns:oe=28}){const H=Z(y,t),D=JSON.parse(JSON.stringify(x)),he=H.hp,xe=D.hp,se=[`🏟️ Duelo en ${L}: ${H.name} vs ${D.name}.`],P={damageDone:0,damageTaken:0,crits:0,playerSkillCasts:0,playerBasicAttacks:0},_={equipment:y.equipment,skillLevels:y.skillLevels};let W=1;for(;H.hp>0&&D.hp>0&&W<=oe&&(se.push(`— Turno ${W} —`),S(H,se),S(D,se),!(H.hp<=0||D.hp<=0));){const pe=g(H,"speed")+u(0,3)>=g(D,"speed")+u(0,3)?[[H,D,!0],[D,H,!1]]:[[D,H,!1],[H,D,!0]];for(const[le,C,i]of pe)if(!(le.hp<=0||C.hp<=0)&&(V(le,C,i,_,P,se),C.hp<=0))break;se.push(`📊 Fin turno ${W}: ${H.name} ${Math.max(0,H.hp)}/${H.maxHp} HP · ${D.name} ${Math.max(0,D.hp)}/${D.maxHp} HP`),I(H),I(D),W+=1}const ve=Math.max(0,W-1),ue=H.hp>0&&D.hp<=0,ge=ue?"enemy_defeated":H.hp<=0?"player_defeated":"turn_limit";return ge==="turn_limit"&&se.push("⏱️ El combate terminó por límite de turnos."),{player:H,foe:D,log:se,statsDelta:P,summary:{turnsPlayed:ve,endReason:ge,playerStartHp:he,playerEndHp:Math.max(0,H.hp),foeStartHp:xe,foeEndHp:Math.max(0,D.hp)},victory:ue}}return{enemyArchetypeMods:l,difficultyMultiplier:R,makeEnemy:X,buildPlayerCombatant:Z,activeBuffValue:N,effectiveStat:g,skillLevelMult:U,choosePlayerSkill:z,chooseEnemySkill:c,decayStatuses:S,performHit:f,applySkillEffects:E,actorTurn:V,tickCooldowns:I,runCombat:Y}}const et={basic:{label:"forja basica",minRarity:"common",guaranteedAffixes:0,qualityMin:.9,qualityMax:1.08,cost:{gold:150,iron:10,wood:6}},advanced:{label:"forja avanzada",minRarity:"rare",guaranteedAffixes:1,qualityMin:.96,qualityMax:1.15,cost:{gold:310,iron:14,wood:8,essence:2}},apex:{label:"forja apex",minRarity:"epic",guaranteedAffixes:2,qualityMin:1.02,qualityMax:1.22,cost:{gold:660,iron:24,wood:12,essence:5,sigils:2,echoShards:1}}},kn={common:1,uncommon:1.16,rare:1.48,epic:2.04,legendary:3.2,mythic:5,ascendant:8.4};function Sn(r){const{rarityDef:o,rarityOrder:v,nextRarityKey:M,clamp:u,rand:T,uid:F,clone:B,generateMarket:l,makeItem:R,rollLoot:X,estimateSalvage:Z,computeItemScore:N}=r;function g(a,p){return a.player.inventory.length<p}function U(a,p){a.player.inventory=a.player.inventory.filter($=>$.id!==p)}function z(a,p){return a.player.inventory.find($=>$.id===p)}function c(a,p){return z(a,p)||Object.values(a.player.equipment).find($=>$&&$.id===p)}function S(a){a.player.inventory.sort((p,$)=>{const A=v($.rarity)-v(p.rarity);return A!==0?A:($.score||0)-(p.score||0)})}function f(a="basic"){return a==="normal"?et.basic:a==="premium"?et.advanced:a==="mythic"||a==="endgame"?et.apex:et[a]||et.basic}function E(a={}){return Object.entries(a).filter(([p])=>p!=="gold").reduce((p,[,$])=>p+(Number($)||0),0)}function V(a,p={}){a.stats.goldSpent=(a.stats.goldSpent||0)+(p.gold||0),a.stats.materialsSpent=(a.stats.materialsSpent||0)+E(p)}function I(a,p={}){return Object.entries(p).every(([$,A])=>(a.player[$]||0)>=A)}function Y(a,p={}){Object.entries(p).forEach(([$,A])=>{a.player[$]=Math.max(0,(a.player[$]||0)-A)}),V(a,p)}function x(a,p={}){Object.entries(p).forEach(([$,A])=>{$ in a.player&&(a.player[$]=(a.player[$]||0)+A)})}function y(a,p="sell"){const $=Math.max(0,(Date.now()-(a.createdAt||Date.now()))/6e4),A=a.provenance&&a.provenance.source||"legacy";let O=1;return p==="sell"&&(A==="forge"&&$<30&&(O*=.62),A==="market"&&$<12&&(O*=.76),A==="legacy"&&$<2&&(O*=.9),O*=1-Math.min(.28,(a.reforge||0)*.04)),p==="salvage"&&(A==="market"&&$<15&&(O*=.58),A==="forge"&&$<10&&(O*=.76),a.lockFlags&&a.lockFlags.starter&&(O*=.5),O*=1-Math.min(.24,(a.reforge||0)*.03)),u(O,.22,1.05)}function t(a,p=1,$=1){const A=a.economyValue||a.value||0,O=kn[a.rarity]||1,s=1+Math.max(0,p-1)*.012;return Math.round(A*O*$*s)}function L(a){const p=a.economyValue||a.value||0,$=u(.78+(a.upgrade||0)*.015+(a.transcend||0)*.03,.6,.97),A=y(a,"sell");return Math.max(6,Math.round(p*$*A))}function oe(a){const p=Z(a),$=y(a,"salvage"),A={};return Object.entries(p).forEach(([O,s])=>{A[O]=Math.max(0,Math.round(s*$))}),A}function H(a,p){a.stats.craftUsage||(a.stats.craftUsage={craft:0,enhance:0,reforge:0,transcend:0}),a.stats.craftUsage[p]=(a.stats.craftUsage[p]||0)+1}function D(a,p,$){if(!p)return;const{maxInventory:A,addJournal:O,trackQuest:s,checkAchievements:d,onItemAcquired:q}=$;if(!g(a,A)){const K=Math.round(L(p)*.72);a.player.gold+=K,a.stats.earnedGold+=K,O("📦",`Inventario lleno. <span class="rarity-${p.rarity}">${p.name}</span> se convierte en ${K} de oro.`),s("earnGold",K);return}a.player.inventory.push(p),S(a),v(p.rarity)>=v("legendary")&&(a.stats.legendaryFound+=1),v(p.rarity)>=v("mythic")&&(a.stats.mythicFound=(a.stats.mythicFound||0)+1),p.rarity==="ascendant"&&(a.stats.ascendantFound=(a.stats.ascendantFound||0)+1),typeof q=="function"&&q(p),d()}function he(a,p,$){const{addJournal:A}=$,O=z(a,p);if(!O)return;const s=O.slot,d=a.player.equipment[s];a.player.equipment[s]=O,U(a,p),d&&a.player.inventory.push(d),S(a),a.stats.equippedUpgrades=(a.stats.equippedUpgrades||0)+1,A("🧷",`Equipas <span class="rarity-${O.rarity}">${O.name}</span>.`)}function xe(a,p,$){const{maxInventory:A,addJournal:O,toast:s}=$,d=a.player.equipment[p];if(!d||!g(a,A)){s("No hay espacio en el inventario","danger");return}a.player.inventory.push(d),a.player.equipment[p]=null,S(a),O("🎒",`Guardas ${d.name} en el inventario.`)}function se(a,p,$){const{trackQuest:A,addJournal:O}=$,s=z(a,p);if(!s)return;const d=L(s);a.player.gold+=d,a.stats.earnedGold+=d,A("earnGold",d),U(a,p),O("💰",`Vendes ${s.name} por ${d} de oro.`)}function P(a,p,$){const{trackQuest:A,addJournal:O}=$,s=z(a,p);if(!s)return;const d=oe(s);x(a,d),a.stats.salvaged+=1,A("salvaged",1),U(a,p);const q=Object.entries(d).filter(([,K])=>K>0).map(([K,ae])=>`+${ae} ${K}`).join(", ");O("♻️",`Reciclas ${s.name}: ${q||"sin materiales recuperables"}.`)}function _(a){const p=110+a.player.level*14,$=a.market.refreshChainCount||0,A=1+Math.min(1.4,$*.24);return Math.round(p*A)}function W(a,p,$){const{toast:A,addJournal:O,getLootLuck:s}=$,d=_(a);if(p){if(a.player.gold<d){A("No tienes oro suficiente para refrescar","danger");return}a.player.gold-=d,V(a,{gold:d}),a.market.refreshChainCount=(a.market.refreshChainCount||0)+1}else a.market.refreshChainCount=0;const q=l(a.player.level,{lootLuck:typeof s=="function"?s():0,ascension:a.player.ascension||0,streakData:a.player.itemPity,returnMeta:!0});a.player.itemPity=q.streakData||a.player.itemPity,a.market.items=(q.items||[]).map((K,ae)=>{const J=u(1+ae*.04,1,1.28),ie=B(K);return ie.price=t(ie,a.player.level,J),ie.marketMeta={...ie.marketMeta||{},rotationBias:J},ie}),a.market.lastRefresh=Date.now(),a.market.totalRefreshes=(a.market.totalRefreshes||0)+1,O("🛒",`El mercado renueva su inventario${p?` por ${d} de oro`:""}.`)}function ve(a,p,$){const{maxInventory:A,toast:O,addJournal:s,trackQuest:d,checkAchievements:q,onItemAcquired:K}=$,ae=a.market.items.find(ie=>ie.id===p);if(!ae)return;if(a.player.gold<ae.price){O("Oro insuficiente","danger");return}if(!g(a,A)){O("Inventario lleno","danger");return}a.player.gold-=ae.price,V(a,{gold:ae.price});const J=B(ae);J.id=F(),J.provenance={...J.provenance||{},source:"market",createdAt:Date.now()},D(a,J,{maxInventory:A,addJournal:s,trackQuest:d,checkAchievements:q,onItemAcquired:K}),a.market.items=a.market.items.filter(ie=>ie.id!==p),s("🛍️",`Compras ${ae.name} por ${ae.price} de oro.`)}function ue(a,p,$){const{toast:A,grantRewards:O}=$,d={potion:{price:120,reward:{potions:1},label:"Poción"},key:{price:180,reward:{keys:1},label:"Llave de mazmorra"},essence:{price:140,reward:{essence:1},label:"Esencia"},food:{price:65,reward:{food:2},label:"Comida"},sigil:{price:260,reward:{sigils:1},label:"Sigilo"}}[p];if(d){if(a.player.gold<d.price){A("Oro insuficiente","danger");return}a.player.gold-=d.price,V(a,{gold:d.price}),O(d.reward,d.label)}}function ge(a="basic"){return a==="normal"?"basic":a==="premium"?"advanced":a}function pe(a,p,$){const A=f($),O=p==="weapon"||p==="chest"?1.12:1,s=1+Math.max(0,a.player.level-1)*.018,d={};return Object.entries(A.cost).forEach(([q,K])=>{const ae=q==="gold"?K*O*s:K*O*(1+Math.max(0,a.player.level-1)*.006);d[q]=Math.max(1,Math.round(ae))}),d}function le(a){return a==="advanced"?[{rarity:"rare",chance:.52},{rarity:"epic",chance:.32},{rarity:"legendary",chance:.14},{rarity:"mythic",chance:.02}]:a==="apex"?[{rarity:"epic",chance:.53},{rarity:"legendary",chance:.31},{rarity:"mythic",chance:.14},{rarity:"ascendant",chance:.02}]:[{rarity:"common",chance:.5},{rarity:"uncommon",chance:.31},{rarity:"rare",chance:.16},{rarity:"epic",chance:.03}]}function C(a,p,$="basic"){const A=ge($),O=f(A);return{slot:p,tier:A,cost:pe(a,p,A),qualityRange:[O.qualityMin,O.qualityMax],outcomes:le(A),minRarity:O.minRarity}}function i(a,p,$){const{maxInventory:A,toast:O,addJournal:s,trackQuest:d,checkAchievements:q,getLootLuck:K,onItemAcquired:ae}=$,J=typeof p=="string"?p:p.slot,ie=typeof p=="string"?"basic":p.tier||"basic",ke=ge(ie),fe=f(ke),Se=pe(a,J,ke);if(!I(a,Se)){O("Te faltan materiales","danger");return}if(!g(a,A)){O("Inventario lleno","danger");return}Y(a,Se);const qe=fe.qualityMin+Math.random()*(fe.qualityMax-fe.qualityMin),Ee=X({source:"forge",slot:J,playerLevel:a.player.level,ascension:a.player.ascension||0,lootLuck:typeof K=="function"?K():0,streakData:a.player.itemPity,minRarity:fe.minRarity,guaranteedAffixes:fe.guaranteedAffixes,qualityRoll:qe,smartLoot:!1});a.player.itemPity=Ee.streakData;const Ae=Ee.item;D(a,Ae,{maxInventory:A,addJournal:s,trackQuest:d,checkAchievements:q,onItemAcquired:ae}),a.stats.crafted+=1,H(a,"craft"),d("crafts",1),s("🔨",`Completas ${fe.label} y obtienes ${Ae.name}.`),O(`Nuevo objeto: ${Ae.name}`,"gold")}function ee(a){const p=o(a.rarity),$=a.itemLevel||a.level||1,A=a.upgrade||0;return{gold:Math.round(90+$*18+A*72+p.order*120),iron:Math.max(2,Math.round(4+A*1.6+p.order*.9)),essence:Math.max(0,Math.round((A>=4?1:0)+p.order*.45)),sigils:p.order>=v("legendary")?Math.max(0,Math.round((A-5)*.4)):0}}function Q(a,p){const $=a.player.equipment[p];if(!$)return null;const A=o($.rarity),O=A.upgradeCaps&&A.upgradeCaps.enhance||10,s=u(.93-($.upgrade||0)*.04-A.order*.015,.52,.96);return{slot:p,cap:O,current:$.upgrade||0,successChance:s,failureRisk:$.upgrade>0?"perdida parcial controlada":"sin perdida de nivel",cost:ee($)}}function ce(a,p,$){const{toast:A,trackQuest:O,addJournal:s}=$,d=a.player.equipment[p];if(!d){A("No tienes ese hueco equipado","danger");return}const q=o(d.rarity),K=q.upgradeCaps&&q.upgradeCaps.enhance||10;if((d.upgrade||0)>=K){A("Ese objeto ya esta al maximo para su rareza","cyan");return}const ae=ee(d);if(!I(a,ae)){A("No tienes materiales suficientes","danger");return}Y(a,ae);const J=u(.93-(d.upgrade||0)*.04-q.order*.015,.52,.96);if(Math.random()<=J){d.upgrade=(d.upgrade||0)+1,d.score=N(d),a.stats.crafted+=1,H(a,"enhance"),O("crafts",1),s("⚒️",`Mejoras ${d.name} a +${d.upgrade}.`);return}const ie=(d.upgrade||0)>0&&Math.random()<.58;ie&&(d.upgrade=Math.max(0,d.upgrade-1)),d.score=N(d),a.stats.crafted+=1,H(a,"enhance"),O("crafts",1),s("🧯",`${d.name} resiste la mejora fallida${ie?" y pierde 1 nivel de mejora":" sin perder nivel"}.`)}function be(a){const p=o(a.rarity),$=a.itemLevel||a.level||1,A=a.reforge||0;return{gold:Math.round(180+$*16+A*92+p.order*84),essence:Math.max(1,Math.round(2+p.order*.8+A*.35)),sigils:p.order>=v("epic")?Math.max(0,Math.round(1+A*.25)):0}}function $e(a,p){const $=c(a,p);if(!$)return null;const A=o($.rarity),O=A.upgradeCaps&&A.upgradeCaps.reforge||4;return{itemId:p,current:$.reforge||0,cap:O,successChance:u(.86-($.reforge||0)*.08+A.order*.01,.35,.9),cost:be($)}}function k(a={},p={},$=.66){const A=new Set([...Object.keys(a),...Object.keys(p)]),O={};return A.forEach(s=>{const d=a[s]||0,q=p[s]||0;O[s]=Number((d*$+q*(1-$)).toFixed(s==="crit"||s==="dodge"||s==="block"||s==="lifesteal"?4:2))}),O}function e(a,p,$){const{toast:A,addJournal:O}=$,s=c(a,p);if(!s)return;const d=o(s.rarity),q=d.upgradeCaps&&d.upgradeCaps.reforge||4;if((s.reforge||0)>=q){A("Este objeto ya alcanzo su limite de reforge","cyan");return}const K=be(s);if(!I(a,K)){A("Te faltan recursos para retemplar","danger");return}Y(a,K);const ae=R(s.slot,s.itemLevel||s.level||a.player.level,s.rarity,s.baseName,1),J=u(.86-(s.reforge||0)*.08+d.order*.01,.35,.9);Math.random()<=J?(s.stats=ae.stats,s.affixes=ae.affixes,s.name=ae.name,s.qualityRoll=ae.qualityRoll,O("🌀",`Retemplas ${s.baseName} y nace ${s.name}.`)):(s.stats=k(s.stats,ae.stats,.7),s.affixes=Array.from(new Set([...s.affixes||[],...ae.affixes||[]])).slice(0,d.affixes+1),O("🧩",`${s.baseName} se reajusta parcialmente. Conservas parte de los stats previos.`)),s.reforge=(s.reforge||0)+1,s.score=N(s),H(a,"reforge")}function m(a){const p=o(a.rarity),$=a.itemLevel||a.level||1;return{gold:Math.round(900+$*42+p.order*640+(a.transcend||0)*280),essence:Math.max(3,Math.round(6+p.order*2.2)),sigils:Math.max(2,Math.round(4+p.order*1.6)),echoShards:Math.max(1,Math.round(1+p.order*.8))}}function h(a,p){const $=c(a,p);if(!$)return null;const A=o($.rarity);if(!(A.upgradeCaps&&A.upgradeCaps.transcend))return null;const s=M($.rarity,1);if(s===$.rarity)return null;const d=u(.42-A.order*.05-($.transcend||0)*.08,.1,.58);return{itemId:p,from:$.rarity,to:s,successChance:d,cost:m($),requirements:{minUpgrade:Math.max(5,(A.upgradeCaps&&A.upgradeCaps.enhance||10)-2)}}}function j(a,p,$){const{toast:A,addJournal:O}=$,s=c(a,p);if(!s)return;const d=o(s.rarity);if(!(d.upgradeCaps&&d.upgradeCaps.transcend)){A("Esta rareza no puede trascender mas","danger");return}const K=Math.max(5,(d.upgradeCaps&&d.upgradeCaps.enhance||10)-2);if((s.upgrade||0)<K){A(`Necesitas al menos mejora +${K} para trascender`,"danger");return}const ae=M(s.rarity,1);if(ae===s.rarity){A("No existe una rareza superior para este objeto","danger");return}const J=m(s);if(!I(a,J)){A("No tienes recursos para trascender","danger");return}Y(a,J);const ie=u(.42-d.order*.05-(s.transcend||0)*.08,.1,.58),ke=Math.random()<=ie;if(H(a,"transcend"),!ke){s.qualityRoll=u((s.qualityRoll||1)+.01,.82,1.24),s.score=N(s),O("🌫️",`El ritual de trascendencia de ${s.name} falla, pero la pieza retiene estabilidad.`);return}const fe=R(s.slot,(s.itemLevel||s.level||a.player.level)+2,ae,s.baseName,1);s.rarity=ae,s.tier=o(ae).order,s.stats=fe.stats,s.affixes=fe.affixes,s.name=fe.name,s.itemLevel=fe.itemLevel,s.level=fe.level,s.powerBudget=Math.round(Math.max(s.powerBudget||1,fe.powerBudget||1)*1.14),s.qualityRoll=u(Math.max(s.qualityRoll||1,fe.qualityRoll||1),.82,1.24),s.transcend=(s.transcend||0)+1,s.lockFlags={...s.lockFlags||{},transcended:!0},s.score=N(s),O("🌌",`${s.baseName} trasciende a calidad ${ae}.`)}function w(a,p){const{toast:$,trackQuest:A,addJournal:O}=p,s=a.player.inventory.filter(q=>{const K=v(q.rarity),ae=q.score||N(q);return K<=v("uncommon")&&ae<a.player.level*40});if(!s.length){$("No hay chatarra segura para limpiar","cyan");return}let d=0;s.forEach(q=>{d+=Math.round(L(q)*.92)}),a.player.inventory=a.player.inventory.filter(q=>!s.some(K=>K.id===q.id)),a.player.gold+=d,a.stats.earnedGold+=d,A("earnGold",d),O("🧹",`Limpieza automatica: ${s.length} objetos convertidos en ${d} de oro.`)}function ne(a,p,$,A){return i(a,{slot:p,tier:$==="premium"?"advanced":"basic"},A)}function de(a,p,$){return ce(a,p,$)}function me(a,p,$){return e(a,p,$)}return{acquireItem:D,removeInventoryItem:U,getInventoryItem:z,equipItem:he,unequipItem:xe,sellPriceFor:L,sellItem:se,salvageYieldFor:oe,salvageItem:P,marketRefreshCost:_,refreshMarket:W,buyMarketItem:ve,buyResource:ue,previewCraftItem:C,craftItem:i,previewEnhanceItem:Q,enhanceItem:ce,previewReforgeItem:$e,reforgeItem:e,previewTranscendItem:h,transcendItem:j,forgeItem:ne,upgradeEquipped:de,rerollItem:me,autoManage:w}}function wn(r){const{JOBS:o,ZONES:v,clone:M,rand:u,rollLoot:T,clamp:F}=r;function B(g,U,z){const c=z(),S=c.maxHp*(.0033+c.regenPct*.01)*U,f=(.48+g.player.training.discipline*.02+g.player.relics.momentum*.04)*U,E=(.028+g.player.relics.momentum*.005)*U;g.player.hp=F(g.player.hp+S,1,c.maxHp),g.player.energy=F(g.player.energy+f,0,c.maxEnergy),g.player.stamina=F(g.player.stamina+E,0,c.maxStamina)}function l(g,U,z){const{toast:c,addJournal:S}=z,f=o.find(E=>E.id===U);if(f){if(g.timers.job){c("Ya tienes un trabajo en curso","cyan");return}if(g.player.energy<12){c("Necesitas al menos 12 de energía","danger");return}g.player.energy-=12,g.timers.job={id:f.id,name:f.name,endAt:Date.now()+f.duration*1e3,reward:M(f.reward),startedAt:Date.now()},S("🧰",`Comienzas el trabajo: <b>${f.name}</b>.`)}}function R(g,U,z){const{grantRewards:c,toast:S}=z;if(!g.timers.job)return;const f=g.timers.job;g.timers.job=null,c(f.reward,`Trabajo terminado — ${f.name}`),U||S(`Trabajo completado: ${f.name}`,"success")}function X(g,U,z,c){const{isZoneUnlocked:S,toast:f,addJournal:E}=c,V=v.find(Y=>Y.id===U);if(!V||!S(V))return;if(g.timers.expedition){f("Ya estás en expedición","cyan");return}const I=V.energyCost+Math.floor(z/40);if(g.player.energy<I||g.player.stamina<V.staminaCost){f("No tienes recursos para partir","danger");return}g.player.energy-=I,g.player.stamina-=V.staminaCost,g.timers.expedition={zoneId:U,endAt:Date.now()+z*1e3,durationSec:z,startedAt:Date.now()},E("🧭",`Sales de expedición a <b>${V.name}</b> durante ${z}s.`)}function Z(g,U,z){const{grantRewards:c,getDerivedStats:S,trackQuest:f,acquireItem:E,addJournal:V,toast:I,getLootLuck:Y}=z;if(!g.timers.expedition)return;const x=g.timers.expedition;g.timers.expedition=null;const y=v.find(H=>H.id===x.zoneId)||v[0],t=1+x.durationSec/90,L={gold:Math.round((90+y.id*50+g.player.level*16)*t*(1+S().goldPct)),xp:Math.round((55+y.id*35+g.player.level*12)*t),iron:u(1,3+y.id),wood:u(1,2+Math.floor(y.id/2)),essence:Math.random()<.45?u(1,2+Math.floor(y.id/2)):0,food:Math.random()<.5?1+Math.floor(y.id/2):0};c(L,`Expedición — ${y.name}`),g.stats.expeditions+=1,f("expeditions",1);const oe=.48+y.id*.04+Math.min(.2,(Y?Y():0)*.5);if(Math.random()<oe){const H=T({source:"expedition",zoneId:y.id,playerLevel:g.player.level,itemLevel:g.player.level+y.id+u(0,2),ascension:g.player.ascension||0,lootLuck:Y?Y():0,smartLoot:!0,equipment:g.player.equipment,streakData:g.player.itemPity});g.player.itemPity=H.streakData;const D=H.item;E(D),V("🎒",`Encuentras <span class="rarity-${D.rarity}">${D.name}</span> en la expedición.`)}U||I(`Expedición completada: ${y.name}`,"success")}function N(g,U,z,c){const{completeJob:S,completeExpedition:f}=c;let E=!1;return g.timers.job&&g.timers.job.endAt<=U&&(S(z),E=!0),g.timers.expedition&&g.timers.expedition.endAt<=U&&(f(z),E=!0),E}return{passiveRegen:B,startJob:l,completeJob:R,startExpedition:X,completeExpedition:Z,resolveFinishedTimers:N}}function Mn(r){const{RANKS:o,ACHIEVEMENTS:v,clamp:M,clone:u,defaultQuests:T,makeDefaultState:F}=r;function B(c,S){const f=c.player.level*14+c.stats.wins*4+c.player.highestDungeonFloor*10+S()*8+c.player.ascension*60;let E=o[0];return o.forEach(V=>{f>=V.min&&(E=V)}),E}function l(c,S,f){const{xpNeeded:E,ensureUnlockedSkills:V,getDerivedStats:I,currentRank:Y,addJournal:x,toast:y}=f;if(!S)return;c.player.xp+=S;let t=0;for(;c.player.xp>=E(c.player.level);)c.player.xp-=E(c.player.level),c.player.level+=1,c.player.attributePoints+=4,c.player.skillPoints+=1,t+=1,V(oe=>{x("✨",`Has desbloqueado la habilidad <b>${oe.name}</b>.`),y(`Habilidad desbloqueada: ${oe.name}`,"violet")});const L=I();t>0&&(c.player.hp=L.maxHp,c.player.energy=L.maxEnergy,c.player.stamina=M(c.player.stamina+t,0,L.maxStamina),c.player.title=Y().title,x("🌟",`Subes al nivel <b>${c.player.level}</b>. Recibes puntos de atributo y habilidad.`),y(`Nivel ${c.player.level} alcanzado`,"gold"))}function R(c,S,f,E){c.quests.forEach(V=>{V.claimed||V.type!==S||(V.progress+=f,V.progress>=V.target&&(V.progress=V.target,V.completed=!0))}),S==="crafts"&&(c.stats.crafted+=0),E()}function X(c,S,f){const{grantRewards:E,addJournal:V,checkAchievements:I}=f,Y=c.quests.find(x=>x.id===S);!Y||!Y.completed||Y.claimed||(Y.claimed=!0,E(Y.reward,`Misión: ${Y.title}`),c.stats.questsCompleted+=1,V("📜",`Misión completada: <b>${Y.title}</b>.`),c.quests.every(x=>x.claimed)&&(c.quests=T(c.player.level),V("🪄","Se generan nuevos contratos en el tablón.")),I())}function Z(c,S){const{toast:f,addJournal:E}=S,V=140+c.player.level*12;if(c.player.gold<V){f("Oro insuficiente para renovar misiones","danger");return}c.player.gold-=V,c.quests=T(c.player.level),E("📌",`Renuevas el tablón de contratos por ${V} de oro.`)}function N(c,S,f){const E={kills:c.stats.kills,wins:c.stats.wins,questsCompleted:c.stats.questsCompleted,highestDungeonFloor:c.player.highestDungeonFloor,level:c.player.level,legendaryFound:c.stats.legendaryFound,mythicFound:c.stats.mythicFound,ascendantFound:c.stats.ascendantFound,guildTotal:f(),ascension:c.player.ascension};return Math.min(S.target,E[S.type]||0)}function g(c,S){const{grantRewards:f,addJournal:E,toast:V,guildTotal:I}=S;v.forEach(Y=>{if(c.claimedAchievements.includes(Y.id))return;N(c,Y,I)>=Y.target&&(c.claimedAchievements.push(Y.id),f(Y.reward,`Logro: ${Y.title}`),E("🏆",`Logro desbloqueado: <b>${Y.title}</b>.`),V(`Logro desbloqueado: ${Y.title}`,"gold"))})}function U(c,S,f){const{toast:E,addJournal:V}=f;if(c.player.relicDust<=0){E("No tienes polvo de reliquia","danger");return}S in c.player.relics&&(c.player.relicDust-=1,c.player.relics[S]+=1,V("🗿",`Inviertes una reliquia en ${S}.`))}function z(c,S){const{toast:f,confirmAscend:E,replaceState:V,normalizeState:I,currentRank:Y,addJournal:x,checkAchievements:y}=S;if(c.player.level<20&&c.player.highestDungeonFloor<8){f("Necesitas nivel 20 o piso 8 de mazmorra","danger");return}if(!E())return;const t=3+Math.floor(c.player.level/8)+Math.floor(c.player.highestDungeonFloor/4),L=u(c.player.relics),oe=c.player.relicDust+t,H=c.player.ascension+1,D=F();D.player.relics=L,D.player.relicDust=oe,D.player.ascension=H,D.player.shards=2,D.player.gold=320,V(D),I(),c.player.title=Y().title,x("🔱",`Has ascendido. Obtienes ${t} de Polvo de Reliquia.`),y(),f(`Ascensión completada (+${t} reliquias)`,"gold")}return{currentRank:B,gainXp:l,trackQuest:R,claimQuest:X,rerollQuests:Z,achievementProgress:N,checkAchievements:g,spendRelic:U,ascend:z}}(()=>{const{SLOT_ORDER:r,SLOT_NAMES:o,RANKS:v,ZONES:M,JOBS:u,PETS:T,SKILLS:F,ACHIEVEMENTS:B}=window.AetherConfig,{$:l,clone:R,rand:X,randf:Z,pick:N,clamp:g,sum:U,uid:z,fmt:c,pct:S,softRound:f,localDayKey:E,timeLeft:V,rarityDef:I,rarityOrder:Y,nextRarityKey:x,sanitizeInlineHtml:y}=window.AetherUtils,{state:t,replaceState:L,makeDefaultState:oe,normalizeState:H,makeItem:D,rollLoot:he,scaleItemStats:xe,computeItemScore:se,estimateSalvage:P,xpNeeded:_,defaultQuests:W,generateMarket:ve,maxInventory:ue,guildTotal:ge,getPetData:pe,getDerivedStats:le,getLootLuck:C,ensureUnlockedSkills:i,saveGame:ee}=window.AetherModel,Q=$n({SKILLS:F,pick:N,rand:X,randf:Z,clamp:g,softRound:f,uid:z}),ce=Sn({rarityDef:I,rarityOrder:Y,nextRarityKey:x,clamp:g,rand:X,uid:z,clone:R,generateMarket:ve,makeItem:D,rollLoot:he,estimateSalvage:P,computeItemScore:se}),be=wn({JOBS:u,ZONES:M,clone:R,rand:X,rollLoot:he,clamp:g}),$e=Mn({RANKS:v,ACHIEVEMENTS:B,clamp:g,clone:R,defaultQuests:W,makeDefaultState:oe});function k(n,b){t.journal.unshift({id:z(),ts:Date.now(),icon:n,text:y(b)}),t.journal=t.journal.slice(0,80)}function e(n,b="cyan"){const G=l("toast-root");if(!G)return;const re={cyan:"from-sky-500/25 to-cyan-300/10 border-cyan-300/25",gold:"from-amber-500/25 to-yellow-300/10 border-amber-300/30",danger:"from-rose-500/25 to-pink-300/10 border-rose-300/25",success:"from-emerald-500/25 to-green-300/10 border-emerald-300/25",violet:"from-violet-500/25 to-fuchsia-300/10 border-violet-300/25"},te=document.createElement("div");te.className=`glass-strong pointer-events-none rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-br ${re[b]||re.cyan} animate-[fadeIn_.2s_ease]`,te.innerHTML=y(n),G.appendChild(te),setTimeout(()=>{te.style.opacity="0",te.style.transform="translateY(-6px)",setTimeout(()=>te.remove(),260)},2800)}function m(){(!t.stats.telemetry||typeof t.stats.telemetry!="object")&&(t.stats.telemetry={});const n=t.stats.telemetry;return n.startedAt=n.startedAt||Date.now(),n.firstEpicAt=n.firstEpicAt||null,n.firstMythicAt=n.firstMythicAt||null,n.firstAscendantAt=n.firstAscendantAt||null,(!n.rarityBySource||typeof n.rarityBySource!="object")&&(n.rarityBySource={}),(!n.netGoldByHour||typeof n.netGoldByHour!="object")&&(n.netGoldByHour={}),(!n.netMaterialsByHour||typeof n.netMaterialsByHour!="object")&&(n.netMaterialsByHour={}),(!n.milestonesShown||typeof n.milestonesShown!="object")&&(n.milestonesShown={epic:!1,mythic:!1}),n}function h(n=Date.now()){const b=new Date(n),G=b.getFullYear(),re=String(b.getMonth()+1).padStart(2,"0"),te=String(b.getDate()).padStart(2,"0"),we=String(b.getHours()).padStart(2,"0");return`${G}-${re}-${te}T${we}`}function j(n=t.player){return(n.iron||0)+(n.wood||0)+(n.essence||0)+(n.sigils||0)+(n.echoShards||0)}function w(n=0,b=0,G=Date.now()){const re=m(),te=h(G);re.netGoldByHour[te]=(re.netGoldByHour[te]||0)+n,re.netMaterialsByHour[te]=(re.netMaterialsByHour[te]||0)+b}function ne(n){if(!n)return;const b=m(),G=n.provenance&&n.provenance.source||"legacy";b.rarityBySource[G]||(b.rarityBySource[G]={}),b.rarityBySource[G][n.rarity]=(b.rarityBySource[G][n.rarity]||0)+1;const re=Date.now()-(b.startedAt||Date.now());n.rarity==="epic"&&!b.firstEpicAt&&(b.firstEpicAt=re),n.rarity==="mythic"&&!b.firstMythicAt&&(b.firstMythicAt=re),n.rarity==="ascendant"&&!b.firstAscendantAt&&(b.firstAscendantAt=re),n.rarity==="epic"&&!b.milestonesShown.epic&&(b.milestonesShown.epic=!0,k("🎉","¡Hito desbloqueado! Has obtenido tu primer objeto <b>epico</b>."),e("Primer Epic obtenido","gold")),n.rarity==="mythic"&&!b.milestonesShown.mythic&&(b.milestonesShown.mythic=!0,k("🌠","¡Hito mayor! Has obtenido tu primer objeto <b>mitico</b>."),e("Primer Mythic obtenido","violet"))}function de(n,b="Recompensa"){if(!n)return;const G=Number(n.gold||0),re=Number(n.iron||0)+Number(n.wood||0)+Number(n.essence||0)+Number(n.sigils||0)+Number(n.echoShards||0);Object.entries(n).forEach(([te,we])=>{te==="xp"?p(we):te in t.player?t.player[te]+=we:te in t.stats?t.stats[te]+=we:te==="relicDust"&&(t.player.relicDust+=we)}),n.gold&&(t.stats.earnedGold+=n.gold,Be("earnGold",n.gold)),(G||re)&&w(G,re),k("🎁",`${b}: ${me(n)}`)}function me(n){if(!n||typeof n!="object")return"Sin recompensas";const b=Object.entries(n).filter(([,G])=>Number(G)>0);return b.length?b.map(([G,re])=>{const te={xp:"XP",gold:"oro",shards:"fragmentos",iron:"hierro",wood:"madera",essence:"esencia",sigils:"sigilos",echoShards:"eco fragmentos",food:"comida",potions:"pociones",keys:"llaves",relicDust:"polvo reliquia"}[G]||G;return`+${c(re)} ${te}`}).join(" · "):"Sin recompensas"}function a(n){return n==="enemy_defeated"?"Enemigo derrotado":n==="player_defeated"?"Caída del jugador":n==="turn_limit"?"Límite de turnos":"Resolución normal"}function p(n){return $e.gainXp(t,n,{xpNeeded:_,ensureUnlockedSkills:i,getDerivedStats:le,currentRank:$,addJournal:k,toast:e})}function $(){return $e.currentRank(t,ge)}function A(n){const b=t.player.gold||0,G=j(t.player),re=n(),te=t.player.gold||0,we=j(t.player),Re=te-b,Le=we-G;return(Re||Le)&&w(Re,Le),re}function O(){const n=Date.now(),b=g((n-(t.lastTick||n))/1e3,0,60*60*12);b<=0||(s(b),Et(n,!0),t.lastTick=n)}function s(n){return be.passiveRegen(t,n,le)}function d(){return M.find(n=>n.id===t.player.zoneId)||M[0]}function q(n){return t.player.level>=n.unlockLevel||t.player.ascension>0&&n.id<=2}function K(n){const b=M.find(G=>G.id===n);!b||!q(b)||(t.player.zoneId=b.id)}function ae(n){return Q.enemyArchetypeMods(n)}function J(n,b="normal",G=0){return Q.makeEnemy({zone:n,kind:b,extraScale:G,playerLevel:t.player.level||1,playerAscension:t.player.ascension||0,wins:t.stats&&t.stats.wins?t.stats.wins:0})}function ie(){return Q.buildPlayerCombatant(t.player,le())}function ke(n,b){return Q.activeBuffValue(n,b)}function fe(n,b){return Q.effectiveStat(n,b)}function Se(n){return Q.skillLevelMult(t.player.skillLevels,n)}function qe(n,b){return Q.choosePlayerSkill(n,b,{equipment:t.player.equipment,skillLevels:t.player.skillLevels})}function Ee(n){return Q.chooseEnemySkill(n)}function Ae(n,b){return Q.decayStatuses(n,b)}function Ve(n,b,G,re=1,te={},we=[]){return Q.performHit(n,b,G,re,te,we)}function Ue(n,b,G,re,te){return Q.applySkillEffects(n,b,G,re,te)}function ze(n,b,G,re){const te={damageDone:0,damageTaken:0,crits:0,playerSkillCasts:0,playerBasicAttacks:0};return Q.actorTurn(n,b,G,{equipment:t.player.equipment,skillLevels:t.player.skillLevels},te,re)}function Ze(n){return Q.tickCooldowns(n)}function ye(n){ne(n)}function Me(n,b={mode:"arena"}){const G=Q.runCombat({enemy:n,playerState:t.player,derivedStats:le(),zoneName:M[n.zoneId]&&M[n.zoneId].name||"Zona desconocida",maxTurns:28}),{player:re,foe:te,log:we,victory:Re,statsDelta:Le,summary:ut}=G;t.stats.damageDone+=Le.damageDone,t.stats.damageTaken+=Le.damageTaken,t.stats.crits+=Le.crits,t.player.hp=g(re.hp,1,le().maxHp);const De={gold:0,xp:0,iron:0,wood:0,essence:0,sigils:0,echoShards:0,keys:0,potions:0};let Fe=null;if(Re){const Te=M[te.zoneId],pt=X(30,54)+te.level*12+(te.kind==="elite"?45:te.kind==="boss"?70:0),za=X(22,38)+te.level*10+(te.kind==="boss"?55:0);De.gold=Math.round(pt*(1+le().goldPct)),De.xp=Math.round(za),De.iron=X(0,2+Te.id),De.wood=X(0,1+Math.floor(Te.id/2)),De.essence=Math.random()<.32+Te.id*.02?X(1,2+Math.floor(Te.id/2)):0,De.sigils=Te.id>=3&&Math.random()<.11+Te.id*.01?1+Math.floor(Te.id/3):0,De.echoShards=Te.id>=5&&(te.kind==="elite"||te.kind==="boss")&&Math.random()<.08+Te.id*.01?1:0,De.keys=b.mode==="dungeon"&&Math.random()<.13?1:0,De.potions=Math.random()<.08?1:0;const Ha=b.mode==="dungeon"?"dungeon":"arena",Fa=.26+C()*.68+(te.kind==="elite"?.1:0)+(te.kind==="boss"?.16:0)+(b.mode==="dungeon"?.1:0);if(Math.random()<Fa){const At=he({source:Ha,zoneId:Te.id,enemyKind:te.kind,playerLevel:t.player.level,ascension:t.player.ascension||0,itemLevel:te.level+X(0,2),lootLuck:C(),smartLoot:!0,equipment:t.player.equipment,streakData:t.player.itemPity});t.player.itemPity=At.streakData,Fe=At.item,Ie(Fe)}de(De,`Botín de ${te.name}`),t.stats.kills+=1,b.mode==="arena"&&(t.stats.wins+=1),b.mode==="dungeon"&&(t.stats.dungeons+=1),te.kind==="elite"&&(t.stats.elites+=1),te.kind==="boss"&&(t.player.highestDungeonFloor=Math.max(t.player.highestDungeonFloor,b.floor||t.player.highestDungeonFloor)),Be("kills",1),b.mode==="arena"&&Be("wins",1),b.mode==="dungeon"&&Be("dungeons",1),te.kind==="elite"&&Be("elites",1),k("⚔️",`Victoria contra <b>${te.name}</b>. ${me(De)}${Fe?` · Botín: <span class="rarity-${Fe.rarity}">${Fe.name}</span>`:""}`),e(`Victoria sobre ${te.name}`,"success")}else{b.mode==="arena"&&(t.stats.losses+=1);const Te=t.player.gold,pt=X(10,25);t.player.gold=Math.max(0,t.player.gold-pt),w((t.player.gold||0)-(Te||0),0),k("💀",`Has sido derrotado por <b>${te.name}</b>. La multitud te abuchea.`),e(`Derrota contra ${te.name}`,"danger")}t.player.title=$().title,He(),t.combatHistory.unshift({id:z(),ts:Date.now(),title:`${Re?"Victoria":"Derrota"} vs ${te.name}`,result:Re?"victory":"defeat",enemy:te.name,zone:M[te.zoneId].name,log:we,summary:ut,stats:{damageDone:Le.damageDone,damageTaken:Le.damageTaken,crits:Le.crits,playerSkillCasts:Le.playerSkillCasts,playerBasicAttacks:Le.playerBasicAttacks},rewards:De,drop:Fe}),t.combatHistory=t.combatHistory.slice(0,15),t.ui.modal={type:"combat",title:`${Re?"Victoria":"Derrota"} — ${te.name}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Resultado</div>
              <div class="text-xl font-black ${Re?"text-emerald-300":"text-rose-300"}">${Re?"Has ganado":"Has perdido"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${me(De)}${Fe?` · Botín: <span class="rarity-${Fe.rarity}">${Fe.name}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado final</div>
              <div class="text-lg font-black text-white">${c(t.player.hp)} HP restantes</div>
              <div class="text-sm text-slate-300/75 mt-1">${te.name} ${Re?"cayó derrotado":"sobrevivió al duelo"}.</div>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ritmo</div>
              <div class="text-lg font-black text-white">${ut.turnsPlayed} turnos</div>
              <div class="text-xs text-slate-300/70 mt-1">${a(ut.endReason)}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Daño</div>
              <div class="text-sm text-slate-100/90">Infligido: <b>${c(Le.damageDone)}</b></div>
              <div class="text-sm text-slate-100/90">Recibido: <b>${c(Le.damageTaken)}</b></div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Acciones</div>
              <div class="text-sm text-slate-100/90">Habilidades: <b>${c(Le.playerSkillCasts)}</b></div>
              <div class="text-sm text-slate-100/90">Golpes básicos: <b>${c(Le.playerBasicAttacks)}</b></div>
              <div class="text-sm text-slate-100/90">Críticos: <b>${c(Le.crits)}</b></div>
            </div>
          </div>
          <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro turno a turno</div>
            <div class="space-y-2 text-sm text-slate-100/90">${we.map(Te=>`<div class="leading-relaxed">${Te}</div>`).join("")}</div>
          </div>
        </div>
      `}}function Ie(n){return ce.acquireItem(t,n,{maxInventory:ue(),addJournal:k,trackQuest:Be,checkAchievements:He,onItemAcquired:ye})}function je(n){return ce.removeInventoryItem(t,n)}function nt(n){return ce.getInventoryItem(t,n)}function na(n){return ce.equipItem(t,n,{addJournal:k})}function sa(n){return ce.unequipItem(t,n,{maxInventory:ue(),addJournal:k,toast:e})}function ra(n){return A(()=>ce.sellItem(t,n,{addJournal:k,trackQuest:Be}))}function oa(n){return A(()=>ce.salvageItem(t,n,{addJournal:k,trackQuest:Be}))}function ia(n){const b=ce.getInventoryItem(t,n);return b?ce.salvageYieldFor(b):null}function la(){const n=le();if(t.player.potions<=0){e("No te quedan pociones","danger");return}if(t.player.hp>=n.maxHp){e("Ya estás con toda la vida","cyan");return}t.player.potions-=1;const b=Math.round(n.maxHp*.42);t.player.hp=g(t.player.hp+b,0,n.maxHp),k("🧪",`Bebes una poción y recuperas ${b} HP.`),e(`+${b} HP`,"success")}function ca(){const n=E();if(t.streak.lastClaimDay===n){e("La recompensa diaria ya fue reclamada hoy","cyan");return}const b=E(Date.now()-864e5);t.streak.days=t.streak.lastClaimDay===b?Math.min(7,t.streak.days+1):1,t.streak.lastClaimDay=n;const G=t.streak.days,re={gold:180+G*70,xp:60+G*30,potions:G>=3?1:0,keys:G>=5?1:0,shards:G===7?3:1,essence:1+Math.floor(G/2)};de(re,`Recompensa diaria (día ${G})`),e(`Recompensa diaria reclamada — racha ${G}`,"gold")}function da(n){const b={strength:["Fuerza",1],agility:["Agilidad",1],endurance:["Resistencia",1],discipline:["Disciplina",1]};if(!b[n])return;if(t.player.attributePoints<=0){e("No tienes puntos de atributo","danger");return}t.player.attributePoints-=1,t.player.training[n]+=1;const G=le();t.player.hp=Math.min(t.player.hp,G.maxHp),k("🏋️",`Aumentas ${b[n][0]}.`)}function ua(n){const b=F[n];if(!(!b||!t.player.unlockedSkills.includes(n))){if(t.player.skillPoints<=0){e("No tienes puntos de habilidad","danger");return}if((t.player.skillLevels[n]||1)>=5){e("Esa habilidad ya está al máximo","cyan");return}t.player.skillLevels[n]+=1,t.player.skillPoints-=1,k("📘",`Mejoras ${b.name} a nivel ${t.player.skillLevels[n]}.`)}}function pa(n){if(!t.player.unlockedSkills.includes(n))return;const b=t.player.activeSkills,G=b.indexOf(n);if(G>=0){if(b.length<=1){e("Debes dejar al menos una habilidad activa","danger");return}b.splice(G,1)}else{if(b.length>=4){e("Máximo de 4 habilidades activas","cyan");return}b.push(n)}}function ma(n=!0){return A(()=>ce.refreshMarket(t,n,{toast:e,addJournal:k,getLootLuck:C}))}function ga(n){return A(()=>ce.buyMarketItem(t,n,{maxInventory:ue(),toast:e,addJournal:k,trackQuest:Be,checkAchievements:He,onItemAcquired:ye}))}function fa(n){const b=t.player.gold,G=ce.buyResource(t,n,{toast:e,grantRewards:de}),re=(t.player.gold||0)-(b||0);return re&&w(re,0),G}function va(n,b="basic"){return ce.previewCraftItem(t,n,b)}function $t(n,b="basic"){return A(()=>ce.craftItem(t,{slot:n,tier:b},{maxInventory:ue(),toast:e,addJournal:k,trackQuest:Be,checkAchievements:He,getLootLuck:C,onItemAcquired:ye}))}function kt(n){return A(()=>ce.enhanceItem(t,n,{toast:e,trackQuest:Be,addJournal:k}))}function ya(n){return ce.previewEnhanceItem(t,n)}function St(n){return A(()=>ce.reforgeItem(t,n,{toast:e,addJournal:k}))}function ha(n){return ce.previewReforgeItem(t,n)}function ba(n){return A(()=>ce.transcendItem(t,n,{toast:e,addJournal:k}))}function xa(n){return ce.previewTranscendItem(t,n)}function $a(n,b="normal"){return $t(n,b==="premium"?"advanced":"basic")}function ka(n){return kt(n)}function Sa(n){return St(n)}function wa(n){return be.startJob(t,n,{toast:e,addJournal:k})}function wt(n=!1){return be.completeJob(t,n,{grantRewards:de,toast:e})}function Ma(n,b){return be.startExpedition(t,n,b,{isZoneUnlocked:q,toast:e,addJournal:k})}function Mt(n=!1){return be.completeExpedition(t,n,{grantRewards:de,getDerivedStats:le,getLootLuck:C,trackQuest:Be,acquireItem:Ie,addJournal:k,toast:e})}function Et(n=Date.now(),b=!1){return be.resolveFinishedTimers(t,n,b,{completeJob:wt,completeExpedition:Mt})}function Ea(n="normal"){const b=d(),G=b.staminaCost+(n==="elite"?1:0);if(t.player.stamina<G||t.player.energy<b.energyCost){e("No tienes energía o aguante suficiente","danger");return}t.player.stamina-=G,t.player.energy-=b.energyCost;const re=J(b,n);Me(re,{mode:"arena"})}function Aa(n=3){const b=[];for(let G=0;G<n;G++){const re=d();if(t.player.stamina<re.staminaCost||t.player.energy<re.energyCost||t.player.hp<le().maxHp*.2)break;t.player.stamina-=re.staminaCost,t.player.energy-=re.energyCost;const te=J(re,"normal",G);Me(te,{mode:"arena"});const we=t.combatHistory[0];if(b.push(`${we.result==="victory"?"✅":"❌"} ${we.title}`),we.result!=="victory")break}b.length&&(t.ui.modal={type:"summary",title:`Racha de arena x${b.length}`,content:`<div class="glass rounded-2xl p-4 text-sm text-slate-100/90 space-y-2">${b.map(G=>`<div>${G}</div>`).join("")}</div>`})}function Ca(){if(t.player.keys<1){e("Necesitas una llave de mazmorra","danger");return}if(t.player.stamina<2){e("Necesitas al menos 2 de aguante","danger");return}t.player.keys-=1,t.player.stamina-=2;const n=t.player.highestDungeonFloor,b=M[Math.min(M.length-1,Math.floor((n-1)/2))],G=[];let re=!0;if([J(b,"normal",n*.8),J(b,"normal",n*.85),J(b,"elite",n*.9),J(b,"boss",n)].forEach((we,Re)=>{if(!re)return;Me(we,{mode:"dungeon",floor:n});const Le=t.combatHistory[0];G.push(`${Le.result==="victory"?"✅":"❌"} ${Re<3?"Encuentro":"Jefe"}: ${we.name}`),Le.result!=="victory"&&(re=!1)}),re){t.player.highestDungeonFloor+=1;const we={gold:120+n*55,xp:90+n*42,essence:2+Math.floor(n/3),shards:n%3===0?2:1};de(we,`Cofre del piso ${n}`),k("🏰",`Limpias el piso ${n} y avanzas al piso ${n+1}.`),e(`Piso ${n} superado`,"gold")}else k("🕸️",`No logras superar el piso ${n}.`);t.ui.modal={type:"summary",title:`Mazmorra — Piso ${n}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado</div>
              <div class="text-xl font-black ${re?"text-emerald-300":"text-rose-300"}">${re?"Incursión limpia":"Incursión fallida"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${re?"El botín del jefe ha sido asegurado.":"Tu grupo de uno no pudo seguir avanzando."}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ruta</div>
              <div class="space-y-2 text-sm">${G.map(we=>`<div>${we}</div>`).join("")}</div>
            </div>
          </div>
        </div>
      `}}function Ia(){const n=t.player.gold||0,b=j(t.player);if(t.player.pet){e("Ya tienes una mascota activa","cyan");return}if(t.player.shards<5||t.player.essence<8){e("Necesitas 5 fragmentos y 8 de esencia","danger");return}t.player.shards-=5,t.player.essence-=8;const G=N(T);t.player.pet=G.id,t.player.petLevel=1,t.player.petXp=0,k("🐾",`Incubas a <b>${G.name}</b>. ${G.desc}`),w((t.player.gold||0)-n,j(t.player)-b),e(`Mascota obtenida: ${G.name}`,"violet")}function ja(){const n=t.player.gold||0,b=j(t.player);if(!t.player.pet){e("Aún no tienes mascota","danger");return}if(t.player.food<2||t.player.essence<1){e("Necesitas 2 de comida y 1 de esencia","danger");return}t.player.food-=2,t.player.essence-=1,t.player.petXp+=1,t.player.petXp>=3+t.player.petLevel&&(t.player.petXp=0,t.player.petLevel+=1,k("🐾",`Tu mascota alcanza nivel ${t.player.petLevel}.`),e(`Mascota nivel ${t.player.petLevel}`,"success")),w((t.player.gold||0)-n,j(t.player)-b)}function La(){if(!t.player.pet)return;const n=pe();t.player.pet=null,t.player.petLevel=0,t.player.petXp=0,k("🪽",`Liberas a ${n?n.name:"tu mascota"} y recuperas tu calma.`)}function Pa(n){return $e.spendRelic(t,n,{toast:e,addJournal:k})}function Ra(){return $e.ascend(t,{toast:e,confirmAscend:()=>window.confirm("Ascender reinicia nivel, equipo, inventario y recursos comunes, pero te da Polvo de Reliquia. ¿Continuar?"),replaceState:L,normalizeState:H,currentRank:$,addJournal:k,checkAchievements:He})}function Be(n,b){return $e.trackQuest(t,n,b,He)}function Ba(n){return $e.claimQuest(t,n,{grantRewards:de,addJournal:k,checkAchievements:He})}function Ta(){return $e.rerollQuests(t,{toast:e,addJournal:k})}function Da(n){return $e.achievementProgress(t,n,ge)}function He(){return $e.checkAchievements(t,{grantRewards:de,addJournal:k,toast:e,guildTotal:ge})}function qa(n){const b=t.player.gold||0,G=j(t.player),re=t.player.guild;if(!(n in re))return;const te=re[n]+1,we=180+te*110+ge()*35,Re=Math.max(1,Math.floor(te/2));if(t.player.gold<we||t.player.essence<Re){e("No tienes recursos suficientes","danger");return}t.player.gold-=we,t.player.essence-=Re,re[n]+=1,w((t.player.gold||0)-b,j(t.player)-G),k("🏛️",`Mejoras ${n} del gremio al nivel ${re[n]}.`),He()}function Va(){return A(()=>ce.autoManage(t,{toast:e,trackQuest:Be,addJournal:k}))}function Oa(){const n=le();if(n.maxHp-t.player.hp<=0){e("Ya tienes la vida al máximo","cyan");return}let G=0;for(;t.player.hp<n.maxHp&&t.player.potions>0&&G<10;)t.player.potions-=1,t.player.hp=g(t.player.hp+n.maxHp*.42,0,n.maxHp),G++;k("🩹",`Usas ${G} poción(es) para recuperarte.`)}function Na(n="arena"){const b=t.player.itemPity||{},re=(b.bySource||{})[n]||b;return{source:n,epic:re.epic||0,mythic:re.mythic||0,ascendant:re.ascendant||0,total:re.total||0}}window.AetherSystems={addJournal:k,toast:e,grantRewards:de,summarizeReward:me,gainXp:p,currentRank:$,offlineCatchup:O,passiveRegen:s,zoneForPlayer:d,isZoneUnlocked:q,setZone:K,enemyArchetypeMods:ae,makeEnemy:J,buildPlayerCombatant:ie,activeBuffValue:ke,effectiveStat:fe,skillLevelMult:Se,choosePlayerSkill:qe,chooseEnemySkill:Ee,decayStatuses:Ae,performHit:Ve,applySkillEffects:Ue,actorTurn:ze,tickCooldowns:Ze,runCombat:Me,acquireItem:Ie,removeInventoryItem:je,getInventoryItem:nt,equipItem:na,unequipItem:sa,sellItem:ra,salvageItem:oa,previewSalvage:ia,usePotion:la,claimDaily:ca,trainAttribute:da,upgradeSkill:ua,toggleActiveSkill:pa,refreshMarket:ma,buyMarketItem:ga,buyResource:fa,previewCraftItem:va,craftItem:$t,previewEnhanceItem:ya,enhanceItem:kt,previewReforgeItem:ha,reforgeItem:St,previewTranscendItem:xa,transcendItem:ba,forgeItem:$a,upgradeEquipped:ka,rerollItem:Sa,startJob:wa,completeJob:wt,startExpedition:Ma,completeExpedition:Mt,resolveFinishedTimers:Et,fightArena:Ea,arenaBlitz:Aa,runDungeon:Ca,hatchPet:Ia,feedPet:ja,releasePet:La,spendRelic:Pa,ascend:Ra,trackQuest:Be,claimQuest:Ba,rerollQuests:Ta,achievementProgress:Da,checkAchievements:He,upgradeGuild:qa,autoManage:Va,autoHeal:Oa,getPityStatus:Na}})();const En={setZone:["hud","content"],fightArena:["hud","content"],arenaBlitz:["hud","content","modal"],runDungeon:["hud","content","modal"],startExpedition:["hud","content"],startJob:["hud","content"],claimQuest:["hud","content"],rerollQuests:["hud","content"],usePotion:["hud","content"],autoHeal:["hud","content"],claimDaily:["hud","content"],buyMarketItem:["hud","content"],buyResource:["hud","content"],equipItem:["hud","content"],unequipItem:["hud","content"],sellItem:["hud","content"],salvageItem:["hud","content"],forgeItem:["hud","content"],craftItem:["hud","content"],upgradeEquipped:["hud","content"],enhanceItem:["hud","content"],rerollItem:["hud","content"],reforgeItem:["hud","content"],transcendItem:["hud","content"],upgradeGuild:["hud","content"],trainAttribute:["hud","content"],upgradeSkill:["hud","content"],toggleActiveSkill:["hud","content"],hatchPet:["hud","content"],feedPet:["hud","content"],releasePet:["hud","content"],spendRelic:["hud","content"],ascend:["hud","content"],refreshMarket:["hud","content"],autoManage:["hud","content"]};function An(r,o){const{systems:v,mutate:M,afterAction:u}=o;return Object.entries(En).forEach(([T,F])=>{r[T]=(...B)=>{let l;return M(`systems/${T}`,()=>{l=v[T](...B)},{source:"systems"}),u(F),l}}),r}const It={home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5.25 9.75V21h13.5V9.75"/>',user:'<path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M4.5 20.25a7.5 7.5 0 0 1 15 0"/>',backpack:'<path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M6.75 7.5h10.5A2.25 2.25 0 0 1 19.5 9.75v9A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75v-9A2.25 2.25 0 0 1 6.75 7.5Z"/><path d="M9 12.75h6"/>',swords:'<path d="m4 20 7-7"/><path d="m13 11 7-7"/><path d="M14.5 4.5 19.5 9.5"/><path d="m4.5 14.5 5 5"/><path d="m9 9 6 6"/>',compass:'<circle cx="12" cy="12" r="8.25"/><path d="m14.75 9.25-1.65 4.85-4.85 1.65 1.65-4.85 4.85-1.65Z"/>',castle:'<path d="M5.25 21V9l3 1.5V6l3 1.5L15 6v4.5L18 9v12"/><path d="M3.75 21h16.5"/><path d="M9.75 21v-4.5h4.5V21"/>',cart:'<path d="M3.75 4.5h1.5l1.8 8.1a1.5 1.5 0 0 0 1.47 1.17h7.98a1.5 1.5 0 0 0 1.47-1.17L19.5 7.5H6.3"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17.25" cy="19.5" r="1.5"/>',hammer:'<path d="m14.25 5.25 4.5 4.5"/><path d="m6.75 12.75 7.5-7.5 3 3-7.5 7.5"/><path d="M5.25 14.25 3.75 20.25 9.75 18.75"/>',shield:'<path d="M12 3.75 5.25 6v5.25c0 4.29 2.7 8.11 6.75 9.5 4.05-1.39 6.75-5.21 6.75-9.5V6L12 3.75Z"/>',book:'<path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5v16.5H6.75A2.25 2.25 0 0 0 4.5 21V5.25Z"/><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 1 6.75 16.5h10.5"/>',briefcase:'<path d="M9 6V4.875A1.875 1.875 0 0 1 10.875 3h2.25A1.875 1.875 0 0 1 15 4.875V6"/><rect x="3.75" y="6" width="16.5" height="12.75" rx="2.25"/><path d="M3.75 11.25h16.5"/>',paw:'<circle cx="7" cy="9" r="1.25"/><circle cx="11" cy="6.5" r="1.25"/><circle cx="15" cy="6.5" r="1.25"/><circle cx="17" cy="10" r="1.25"/><path d="M12 18c-2.7 0-4.5-1.44-4.5-3.4 0-1.75 1.2-3.35 3.06-3.35.96 0 1.62.36 1.94.72.32-.36.98-.72 1.94-.72 1.86 0 3.06 1.6 3.06 3.35C16.5 16.56 14.7 18 12 18Z"/>',trophy:'<path d="M8.25 4.5h7.5v2.25A3.75 3.75 0 0 1 12 10.5 3.75 3.75 0 0 1 8.25 6.75V4.5Z"/><path d="M6 4.5h2.25v2.25A3 3 0 0 1 5.25 9.75H4.5A1.5 1.5 0 0 1 3 8.25v-.75A3 3 0 0 1 6 4.5Zm12 0h-2.25v2.25A3 3 0 0 0 18.75 9.75h.75A1.5 1.5 0 0 0 21 8.25v-.75A3 3 0 0 0 18 4.5Z"/><path d="M12 10.5v4.5"/><path d="M9 21h6"/><path d="M10.5 15h3v6h-3Z"/>',scroll:'<path d="M8.25 4.5h8.25A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5H8.25A3.75 3.75 0 0 1 4.5 15.75V8.25A3.75 3.75 0 0 1 8.25 4.5Z"/><path d="M8.25 4.5A2.25 2.25 0 0 0 6 6.75v9A2.25 2.25 0 0 1 3.75 18H6"/><path d="M9.75 9h4.5"/><path d="M9.75 12.75h4.5"/>',menu:'<path d="M4.5 7.5h15"/><path d="M4.5 12h15"/><path d="M4.5 16.5h15"/>',flask:'<path d="M10.5 3.75h3"/><path d="M10.5 3.75v5.1l-4.95 7.74A2.25 2.25 0 0 0 7.44 20.25h9.12a2.25 2.25 0 0 0 1.89-3.66L13.5 8.85v-5.1"/><path d="M8.25 14.25h7.5"/>',bandage:'<path d="m8.25 8.25 7.5 7.5"/><path d="m15.75 8.25-7.5 7.5"/><rect x="4.5" y="7.5" width="15" height="9" rx="2.25" transform="rotate(-45 12 12)"/>',gift:'<path d="M12 21V9"/><path d="M4.5 12h15"/><rect x="4.5" y="7.5" width="15" height="12.75" rx="2.25"/><path d="M12 7.5H8.25A2.25 2.25 0 1 1 10.5 5.25c0 .83-.43 1.56-1.08 1.97"/><path d="M12 7.5h3.75A2.25 2.25 0 1 0 13.5 5.25c0 .83.43 1.56 1.08 1.97"/>',broom:'<path d="M14.25 4.5 19.5 9.75"/><path d="M11.25 7.5 4.5 14.25"/><path d="M4.5 14.25 9.75 19.5"/><path d="m9.75 19.5 2.25-2.25"/>',crown:'<path d="M4.5 18 6.75 7.5 12 12l5.25-4.5L19.5 18Z"/><path d="M4.5 18h15"/>',flame:'<path d="M12 21c3.31 0 6-2.46 6-5.5 0-2.17-1.13-3.7-2.8-5.25-.9-.84-1.62-1.77-2.02-2.9-.38 1.3-1.25 2.45-2.42 3.55-1.75 1.64-4.76 3.45-4.76 6.6C6 18.54 8.69 21 12 21Z"/>',key:'<circle cx="8.25" cy="12" r="3.75"/><path d="M12 12h8.25"/><path d="M16.5 12v2.25"/><path d="M18.75 12v1.5"/>',spark:'<path d="M12 3.75 13.94 9.06 19.25 11 13.94 12.94 12 18.25 10.06 12.94 4.75 11 10.06 9.06 12 3.75Z"/>',bolt:'<path d="M13.5 3.75 7.5 13.5h4.5l-1.5 6.75 6-9.75h-4.5L13.5 3.75Z"/>',dumbbell:'<path d="M4.5 9v6"/><path d="M7.5 7.5v9"/><path d="M16.5 7.5v9"/><path d="M19.5 9v6"/><path d="M7.5 12h9"/>',check:'<circle cx="12" cy="12" r="8.25"/><path d="m8.75 12.25 2.25 2.25 4.25-4.5"/>',xcircle:'<circle cx="12" cy="12" r="8.25"/><path d="m9.75 9.75 4.5 4.5"/><path d="m14.25 9.75-4.5 4.5"/>',skull:'<path d="M12 3.75c-4.14 0-7.5 2.86-7.5 6.75 0 2.63 1.54 4.92 3.82 6.15V19.5h1.93v-1.5h3.5v1.5h1.93v-2.85c2.28-1.23 3.82-3.52 3.82-6.15 0-3.89-3.36-6.75-7.5-6.75Z"/><circle cx="9" cy="11.25" r="1"/><circle cx="15" cy="11.25" r="1"/><path d="M10.5 14.5h3"/>',info:'<circle cx="12" cy="12" r="8.25"/><path d="M12 10.5v5.25"/><path d="M12 7.5h.01"/>',wind:'<path d="M4.5 10.5h8.25a2.25 2.25 0 1 0-2.25-2.25"/><path d="M3.75 15h12a2.25 2.25 0 1 1-2.25 2.25"/><path d="M4.5 7.5h4.5"/>',droplet:'<path d="M12 3.75s5.25 5.79 5.25 9A5.25 5.25 0 1 1 6.75 12.75c0-3.21 5.25-9 5.25-9Z"/>',box:'<path d="m4.5 7.5 7.5-3 7.5 3-7.5 3-7.5-3Z"/><path d="M4.5 7.5v9l7.5 3 7.5-3v-9"/><path d="M12 10.5v9"/>',coins:'<circle cx="9" cy="12" r="3.75"/><path d="M12.75 9.75A3.75 3.75 0 1 1 16.5 16.5"/>',recycle:'<path d="m9 4.5 2.25 2.25L9 9"/><path d="M11.25 6.75H8.1A2.85 2.85 0 0 0 5.25 9.6v.15"/><path d="m15 19.5-2.25-2.25L15 15"/><path d="M12.75 17.25h3.15a2.85 2.85 0 0 0 2.85-2.85v-.15"/><path d="m18 9-3 0"/><path d="M18 9a2.85 2.85 0 0 0-2.85-2.85H15"/>',bag:'<path d="M7.5 9V7.5a4.5 4.5 0 0 1 9 0V9"/><path d="M5.25 9h13.5l-.9 9.45A2.25 2.25 0 0 1 15.61 20.5H8.39a2.25 2.25 0 0 1-2.24-2.05L5.25 9Z"/>',rotate:'<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4.5H15"/>',feather:'<path d="M19.5 4.5c-6 0-10.5 4.5-10.5 10.5v4.5"/><path d="M13.5 10.5 9 15"/><path d="M15.75 8.25 9 15"/>',gem:'<path d="m7.5 4.5-3 4.5 7.5 10.5L19.5 9l-3-4.5Z"/><path d="M9 4.5 12 9l3-4.5"/><path d="M4.5 9h15"/>',pin:'<path d="M9 4.5h6l-1.5 4.5 2.25 2.25v.75H8.25v-.75L10.5 9 9 4.5Z"/><path d="M12 12v7.5"/>'},Cn={"⚔️":"swords","⚔":"swords","👑":"crown","🔥":"flame","🌪️":"spark","🧭":"compass","🎒":"backpack","🏋️":"dumbbell","🧪":"flask","🩹":"bandage","🎁":"gift","🧹":"broom","🛒":"cart","⚒️":"hammer","⚒":"hammer","🗝️":"key","🗝":"key","✨":"spark","🐾":"paw","📋":"scroll","📚":"book","💼":"briefcase","🏆":"trophy","📜":"scroll","🛡️":"shield","🛡":"shield","👤":"user","◈":"home","☰":"menu","⚡":"bolt","💪":"dumbbell","✅":"check","❌":"xcircle","☠️":"skull","💨":"wind","🩸":"droplet","🌟":"spark","💀":"skull","📦":"box","💰":"coins","♻️":"recycle","♻":"recycle","📘":"book","🛍️":"bag","🛍":"bag","🔨":"hammer","🌀":"rotate","🧰":"briefcase","🏰":"castle","🪽":"feather","🪶":"feather","🗿":"gem","🔱":"spark","📌":"pin","🏛️":"castle","🏛":"castle","🏟️":"castle","🏟":"castle","🍖":"box"};function Xe(r,o="h-5 w-5"){const v=It[r]||It.spark;return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="${o}" aria-hidden="true">${v}</svg>`}function In(r,o,v={}){const{iconClass:M="h-4 w-4",wrapClass:u="inline-flex items-center gap-2",textClass:T=""}=v;return`<span class="${u}">${Xe(r,M)}<span class="${T}">${o}</span></span>`}function _e(r=""){let o=String(r);return Object.entries(Cn).forEach(([v,M])=>{o=o.split(v).join(Xe(M,"h-4 w-4 inline-block align-[-0.2em]"))}),o}function gt(r=""){return String(r).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function Rt(r=""){return String(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ct(r=""){const o=gt(r);return o?`data-tooltip="${Rt(o)}"`:""}function ft(r=""){const o=ct(r);return o?`<span tabindex="0" role="button" aria-label="Más información" class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-200/80 cursor-help focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/65 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" ${o}>${Xe("info","h-3.5 w-3.5")}</span>`:""}const{SLOT_ORDER:jn,SLOT_NAMES:Ln,VIEWS:lr,VIEW_META:Qe,VIEW_GROUPS:Bt,MOBILE_PRIMARY_VIEWS:Pn,MOBILE_OVERFLOW_VIEWS:cr,ZONES:Rn,JOBS:Bn,PETS:Tn,SKILLS:Dn,ACHIEVEMENTS:qn}=window.AetherConfig,{fmt:Vn,pct:On,htmlStat:Nn,progressBar:zn,timeLeft:Hn,rarityName:Fn,rarityBadge:_n,translateFilter:Gn,statLabel:Wn,statTooltip:Jn}=window.AetherUtils,{state:ot,maxInventory:Zn,getPetData:Un,getDerivedStats:Kn,scaleItemStats:Yn,xpNeeded:dr,guildTotal:Qn,getStoreMeta:Xn}=window.AetherModel,{currentRank:es,zoneForPlayer:ts,isZoneUnlocked:as,summarizeReward:ns,achievementProgress:ss,previewSalvage:rs,previewCraftItem:os,previewEnhanceItem:is,previewReforgeItem:ls,previewTranscendItem:cs,getPityStatus:ds}=window.AetherSystems;function Tt(){return Qe[ot.currentView]||Qe.resumen}function us(r,o=""){return`<span class="status-chip ${o}">${_e(r)}</span>`}function ps(r,o,v="",M=""){return`
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div class="section-eyebrow">${r}</div>
          <div class="mt-1 flex items-center gap-2"><div class="section-title font-display leading-tight">${o}</div>${ft(v||o)}</div>
          ${v?`<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/76">${_e(v)}</p>`:""}
        </div>
        ${M?`<div class="shrink-0">${_e(M)}</div>`:""}
      </div>
    `}function ms(r,o,v="",M=""){return`
      <div class="surface-strong rounded-2xl p-4 ${v}" ${ct(M||o)}>
        <div class="mb-2 flex items-center gap-2 font-bold font-display text-white leading-tight">${_e(r)}${ft(M||o)}</div>
        <p class="text-sm text-slate-300/78 leading-relaxed">${_e(o)}</p>
      </div>
    `}function gs(r,o,v,M=""){const u=Rt(gt(r));return`<button type="button" class="btn ${o}" onclick="${v}" aria-label="${u}" ${ct(M||gt(r))}>${_e(r)}</button>`}function fs(r){return`
      <div class="mobile-cta-bar md:hidden">
        <div class="glass-strong rounded-[1.6rem] p-3 grid grid-cols-2 gap-2 shadow-rail" role="group" aria-label="Acciones rápidas móviles">
          ${r.join("")}
        </div>
      </div>
    `}function vs(r,o="",v=""){const M=Qe[r]||Tt(),u=Bt.find(F=>F.views.includes(r)),T=u?u.views:[r];return`
      <div class="glass rounded-3xl p-5 sm:p-6">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/[.08] ring text-cyan-200">${Xe(M.icon,"h-4 w-4")}</span>
              ${u?u.title:"Vista individual"}
            </div>
            <div class="flex items-center gap-2"><h2 class="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">${M.label}</h2>${ft(M.desc)}</div>
            <p class="text-sm sm:text-base text-slate-300/78 mt-2 max-w-3xl">${_e(M.desc)}</p>
            ${v?`<div class="hero-actions mt-4 max-w-2xl">${v}</div>`:""}
          </div>
          ${o?`<div class="glass rounded-2xl px-4 py-3 text-sm text-slate-200/90 shrink-0 border border-cyan-300/14">${_e(o)}</div>`:""}
        </div>
        ${T.length>1?`
          <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-3">Navegación relacionada</div>
            <div class="view-links">
              ${T.map(F=>`
                <button type="button" class="view-chip ${ot.currentView===F?"active":""}" onclick="game.setView('${F}')" ${ot.currentView===F?'aria-current="page"':""}>
                  ${Xe(Qe[F].icon,"h-4 w-4")}
                  <span>${Qe[F].label}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}const Dt={SLOT_ORDER:jn,SLOT_NAMES:Ln,VIEW_META:Qe,VIEW_GROUPS:Bt,MOBILE_PRIMARY_VIEWS:Pn,ZONES:Rn,JOBS:Bn,PETS:Tn,SKILLS:Dn,ACHIEVEMENTS:qn,fmt:Vn,pct:On,htmlStat:Nn,progressBar:zn,timeLeft:Hn,rarityName:Fn,rarityBadge:_n,translateFilter:Gn,statLabel:Wn,statTooltip:Jn,state:ot,maxInventory:Zn,getPetData:Un,getDerivedStats:Kn,scaleItemStats:Yn,guildTotal:Qn,getStoreMeta:Xn,currentRank:es,zoneForPlayer:ts,isZoneUnlocked:as,summarizeReward:ns,achievementProgress:ss,previewSalvage:rs,previewCraftItem:os,previewEnhanceItem:is,previewReforgeItem:ls,previewTranscendItem:cs,getPityStatus:ds,icon:Xe,withIcon:In,replaceEmojiIcons:_e,tooltipAttr:ct,activeMeta:Tt,statusChip:us,sectionHeader:ps,infoCard:ms,actionButton:gs,actionBar:fs,pageLead:vs},{VIEW_GROUPS:qt,MOBILE_PRIMARY_VIEWS:Vt,VIEW_META:rt,state:Ce,fmt:Oe,htmlStat:st,getDerivedStats:ys,currentRank:hs,activeMeta:bs,getStoreMeta:xs,maxInventory:$s,icon:it,withIcon:Ye,tooltipAttr:We}=Dt;function ks(){const r=ys(),o=hs(),v=bs(),M=xs(),u=M.isSaving?"Guardando...":M.isDirty?"Cambios pendientes":M.lastSaveAt?`Guardado ${new Date(M.lastSaveAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Sin guardado",T=M.isSaving?"warning":M.isDirty?"danger":"success",F=r.maxHp?Ce.player.hp/r.maxHp:1,B=F<=.35?{text:"Vida crítica",tone:"danger"}:F<=.65?{text:"Vida media",tone:"warning"}:{text:"Vida estable",tone:"success"},l=r.maxHp?Math.max(0,Math.min(100,Ce.player.hp/r.maxHp*100)):0,R=r.maxEnergy?Math.max(0,Math.min(100,Ce.player.energy/r.maxEnergy*100)):0,X=r.maxStamina?Math.max(0,Math.min(100,Ce.player.stamina/r.maxStamina*100)):0;return`
    <div class="glass-strong rounded-[2rem] p-4 sm:p-6">
      <div class="grid xl:grid-cols-[minmax(0,1.35fr),minmax(310px,.65fr)] gap-5 sm:gap-6">
        <section class="space-y-4 min-w-0">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
                <span class="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.65)]"></span>
                Aether Arena · ${v.label}
              </div>
              <h1 class="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.05]">${Ce.player.name}</h1>
              <p class="text-slate-300/82 mt-2 text-sm sm:text-base">${Ce.player.title} · <b>${o.title}</b></p>
              <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span class="status-chip ${T}">${u}</span>
                <span class="status-chip">Nivel ${Ce.player.level}</span>
                <span class="status-chip">Zona ${v.label}</span>
                <span class="status-chip ${B.tone}" data-hud-survivability>${B.text}</span>
              </div>
            </div>
            <div class="stat-pill rounded-2xl px-3.5 py-3 shrink-0 min-w-[168px]">
              <div class="text-xs text-slate-300/65 uppercase tracking-[.14em]">Recursos listos</div>
              <div class="text-base font-black text-emerald-300 leading-tight mt-1" data-hud-resources>${Oe(Ce.player.energy)}⚡ · ${Oe(Ce.player.stamina)}💪</div>
              <div class="text-[11px] text-slate-300/68 mt-1">Para combatir, forjar y explorar</div>
            </div>
          </div>

          <div class="space-y-3">
            <div data-tooltip="Salud actual sobre tu vida máxima.">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Vida</span>
                <span class="font-semibold text-slate-100" data-hud-current="hp">${Oe(Ce.player.hp)} / ${Oe(r.maxHp)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-300 shadow-[0_0_16px_rgba(244,63,94,.3)]" data-hud-bar="hp" style="width:${l}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
            <div data-tooltip="Recurso principal para varias acciones activas.">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Energía</span>
                <span class="font-semibold text-slate-100" data-hud-current="energy">${Oe(Ce.player.energy)} / ${Oe(r.maxEnergy)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_16px_rgba(34,211,238,.3)]" data-hud-bar="energy" style="width:${R}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
            <div data-tooltip="Marca cuántas actividades físicas puedes sostener.">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Aguante</span>
                <span class="font-semibold text-slate-100" data-hud-current="stamina">${Oe(Ce.player.stamina)} / ${Oe(r.maxStamina)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_16px_rgba(74,222,128,.28)]" data-hud-bar="stamina" style="width:${X}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <aside class="space-y-3">
          <div class="kpi-rail">
            ${st("Oro",`<span data-hud-stat="gold">${Oe(Ce.player.gold)}</span>`,"","Moneda principal para comprar, forjar y mejorar.")}
            ${st("Pociones",`<span data-hud-stat="potions">${Oe(Ce.player.potions)}</span>`,"","Curación rápida para sostener el ciclo activo.")}
            ${st("Ataque",`<span data-hud-stat="attack">${Oe(r.attack)}</span>`,"","Daño base de tus golpes y habilidades ofensivas.")}
            ${st("Mochila",`<span data-hud-stat="inventory">${Ce.player.inventory.length}/${$s()}</span>`,"","Capacidad usada frente al máximo disponible.")}
          </div>

          <div class="glass rounded-2xl p-4">
            <div class="text-[11px] uppercase tracking-[.2em] text-cyan-200/62 mb-2">Acciones inmediatas</div>
            <div class="grid grid-cols-2 gap-2">
              <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${We("Consume una poción para recuperar salud y sostener el ritmo de juego.")}>${Ye("flask","Poción")}</button>
              <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${We("Limpia inventario vendiendo y reciclando excedentes.")}>${Ye("broom","Limpiar")}</button>
              <button class="btn !py-2.5" onclick="game.setView('arena')" ${We("Abre la arena para continuar progreso activo.")}>${Ye("swords","Arena")}</button>
              <button class="btn !py-2.5" onclick="game.setView('inventario')" ${We("Abre inventario para comparar y equipar mejoras.")}>${Ye("backpack","Inventario")}</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `}function Ot(r,o=!1){const v=rt[r],M=Ce.currentView===r,u=M?'aria-current="page"':"";return o?`
      <button type="button" class="mobile-nav-btn ${M?"active":""}" onclick="game.setView('${r}')" aria-label="Ir a ${v.label}" ${u} ${We(v.desc)}>
        <span class="nav-icon">${it(v.icon)}</span>
        <span class="nav-label">${v.label}</span>
      </button>
    `:`
    <button type="button" class="nav-link ${M?"active":""}" onclick="game.setView('${r}')" ${u} ${We(v.desc)}>
      <span class="nav-icon">${it(v.icon)}</span>
      <span class="min-w-0">
        <span class="block font-bold leading-tight">${v.label}</span>
        <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${v.short}</span>
      </span>
    </button>
  `}function Ss(){return`
    <div class="glass rounded-3xl p-4 lg:p-5 sticky top-4 space-y-5">
      <div>
        <div class="text-xs uppercase tracking-[.2em] text-slate-300/55 mb-1">Navegación</div>
        <div class="text-2xl font-display font-extrabold">Vistas</div>
        <p class="text-sm text-slate-300/74 mt-2">Cada pantalla mantiene una acción principal y módulos de apoyo.</p>
      </div>

      <div class="space-y-4">
        ${qt.map(r=>`
          <div>
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45 mb-2">${r.title}</div>
            <div class="grid gap-2">
              ${r.views.map(o=>Ot(o)).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <div class="space-y-2">
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45">Acciones rápidas</div>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${We("Consume una poción para recuperar salud y seguir combatiendo.")}>${Ye("flask","Poción")}</button>
          <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${We("Vende o recicla excedentes para despejar la mochila.")}>${Ye("broom","Limpiar")}</button>
        </div>
      </div>
    </div>
  `}function ws(){return`
    <nav class="mobile-nav glass-strong md:hidden" style="--mobile-nav-h: 6.25rem;">
      <div class="mobile-nav-grid">
        ${Vt.map(r=>Ot(r,!0)).join("")}
        <button type="button" class="mobile-nav-btn ${Ce.ui.moreMenuOpen?"active":""}" onclick="game.toggleMoreMenu()" aria-label="Abrir más vistas">
          <span class="nav-icon">${it("menu")}</span>
          <span class="nav-label">Más</span>
        </button>
      </div>
    </nav>
  `}function Ms(){return Ce.ui.moreMenuOpen?`
    <div class="fixed inset-0 z-40 md:hidden">
      <button type="button" class="absolute inset-0 bg-slate-950/78 backdrop-blur-sm" onclick="game.toggleMoreMenu(false)" aria-label="Cerrar menú"></button>
      <div class="absolute left-3 right-3 bottom-[calc(var(--mobile-nav-h,0px)+env(safe-area-inset-bottom,0px)+.4rem)] glass-strong rounded-[1.9rem] p-4 animate-rise-in max-h-[72vh] overflow-y-auto">
        <div class="flex items-center justify-between gap-3 mb-4 sticky top-0 pb-3 bg-transparent">
          <div>
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Más vistas</div>
            <div class="text-xl font-display font-extrabold">Menú completo</div>
          </div>
          <button type="button" class="btn !px-3 !py-2" onclick="game.toggleMoreMenu(false)">Cerrar</button>
        </div>
        <div class="space-y-4">
          ${qt.map(r=>`
            <section class="mobile-sheet-group">
              <div class="mobile-sheet-title">${r.title}</div>
              <div class="grid grid-cols-1 gap-2">
                ${r.views.filter(o=>!Vt.includes(o)).map(o=>`
                  <button type="button" class="nav-link ${Ce.currentView===o?"active":""}" onclick="game.setView('${o}')" ${Ce.currentView===o?'aria-current="page"':""}>
                    <span class="nav-icon">${it(rt[o].icon)}</span>
                    <span class="min-w-0">
                      <span class="block font-bold leading-tight">${rt[o].label}</span>
                      <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${rt[o].short}</span>
                    </span>
                  </button>
                `).join("")||'<div class="text-sm text-slate-300/55 px-2 py-1">Ya visible en la barra inferior.</div>'}
              </div>
            </section>
          `).join("")}
        </div>
      </div>
    </div>
  `:""}const Es={renderHud:ks,renderDesktopNav:Ss,renderMobileNav:ws,renderMobileSheet:Ms};function As(r){const{SLOT_ORDER:o,ZONES:v,SKILLS:M,state:u,maxInventory:T,getPetData:F,getDerivedStats:B,currentRank:l,zoneForPlayer:R,summarizeReward:X,fmt:Z,pct:N,htmlStat:g,timeLeft:U,icon:z,translateFilter:c,tooltipAttr:S,statusChip:f,sectionHeader:E,infoCard:V,actionButton:I,actionBar:Y,pageLead:x,questCard:y,equippedSlotCard:t,inventoryCards:L,zoneSelector:oe}=r;function H(){return u.timers.expedition?U(u.timers.expedition.endAt):"0s"}function D(){return u.timers.job?U(u.timers.job.endAt):"0s"}function he(){const _=R(),W=u.quests.find(pe=>!pe.claimed)||u.quests[0],ve=u.quests.filter(pe=>!pe.claimed).length,ue=u.player.inventory.length/Math.max(1,T()),ge=ue>=.9?f("Mochila al límite","danger"):ue>=.7?f("Mochila alta","warning"):f("Mochila estable","success");return`
      <div class="space-y-5">
        ${x("resumen",`Zona activa: <b>${_.name}</b> · Contratos pendientes: <b>${ve}</b>`,[I("⚔️ Continuar en arena","btn-primary","game.setView('arena')","Entra directo a combate para progreso activo, oro y botín."),I("🎒 Ordenar inventario","","game.setView('inventario')","Optimiza mochila y equipo antes de seguir peleando."),I("🧭 Lanzar expedición","btn-violet","game.setView('expedicion')","Activa progreso pasivo cuando no quieras jugar en modo activo.")].join(""))}

        ${Y([I("⚔️ Arena","btn-primary !py-3","game.setView('arena')"),I("🎒 Inventario","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.15fr,.85fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${E("Ruta recomendada","Elige una sola acción y sigue","La vista resumen prioriza la siguiente decisión y deja el resto como contexto.")}
            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('arena')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Pelear ahora</div>
                  ${f("Principal","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Usa Arena para mantener ritmo de progreso y conseguir botín inmediato.</p>
              </button>

              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('inventario')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Ajustar build</div>
                  ${ge}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Abre Inventario si tienes mejoras pendientes o la mochila está cargada.</p>
              </button>

              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('expedicion')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Progreso pasivo</div>
                  ${f(u.timers.expedition?"Activo":"Disponible",u.timers.expedition?"success":"")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Expedición y Trabajo sostienen recursos cuando dejas la sesión en segundo plano.</p>
              </button>
            </div>

            <div class="mt-5 grid sm:grid-cols-2 gap-3">
              ${V("Expedición",u.timers.expedition?`${v[u.timers.expedition.zoneId].name} · <span data-live-timer="expedition">${H()}</span>`:"No hay expedición activa.","surface-subtle")}
              ${V("Trabajo",u.timers.job?`${u.timers.job.name} · <span data-live-timer="job">${D()}</span>`:"No hay trabajo activo.","surface-subtle")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${E("Objetivo en foco","Un contrato visible")}
              ${W?y(W):'<div class="empty-state">No hay contratos disponibles.</div>'}
              <div class="mt-4 grid grid-cols-2 gap-2">
                <button type="button" class="btn" onclick="game.setView('diario')">Diario</button>
                <button type="button" class="btn" onclick="game.setView('logros')">Logros</button>
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${E("Estado rápido","Solo señales de decisión")}
              <div class="grid grid-cols-2 gap-3">
                ${g("Mochila",`${u.player.inventory.length}/${T()}`,"","Capacidad usada frente al máximo disponible.")}
                ${g("Llaves",u.player.keys)}
                ${g("Pociones",u.player.potions)}
                ${g("Racha",`${u.streak.days||0}/7`)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function xe(){const _=B(),W=l(),ve=F(),ue=_.maxHp?Math.round(u.player.hp/_.maxHp*100):100;return`
      <div class="space-y-5">
        ${x("perfil",`Rango activo: <b>${W.title}</b> · Salud: <b>${ue}%</b>`,[I("🎒 Ver equipo","btn-primary","game.setView('inventario')"),I("🏋️ Entrenar","","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${E("Identidad y rendimiento","Quién eres y cómo rindes","Esta pantalla separa tu perfil, estado de combate y progreso meta.")}

            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Gladiador</div>
                <div class="text-3xl font-black mt-1 leading-tight">${u.player.name}</div>
                <div class="text-sm text-cyan-200/85 mt-1">${u.player.title}</div>
              </div>
              <div class="grid grid-cols-2 gap-3 sm:min-w-[250px]">
                ${g("Ascensiones",u.player.ascension,"","Cantidad de reinicios meta completados para progresión permanente.")}
                ${g("Piso más alto",u.player.highestDungeonFloor,"","Mayor piso de mazmorra superado hasta ahora.")}
                ${g("Inventario",`${u.player.inventory.length}/${T()}`,"","Capacidad actual de la mochila frente a su límite máximo.")}
                ${g("Polvo",u.player.relicDust,"","Moneda meta usada en reliquias y mejoras permanentes.")}
              </div>
            </div>

            <div class="mt-5 space-y-3">
              <div>
                <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-2">Stats críticas</div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  ${g("Ataque",Z(_.attack))}
                  ${g("Defensa",Z(_.defense))}
                  ${g("Velocidad",Z(_.speed))}
                  ${g("Vida máxima",Z(_.maxHp),"","Total de salud disponible antes de caer derrotado.")}
                </div>
              </div>

              <details class="surface-subtle rounded-2xl p-4">
                <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <div class="text-sm font-bold">Stats avanzadas</div>
                      <div class="text-xs text-slate-300/62 mt-1">Probabilidades y sustain para ajustar build fina.</div>
                    </div>
                    <span class="inline-flex items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Opcional</span>
                  </div>
                </summary>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  ${g("Golpe crítico",N(_.crit),"","Probabilidad de infligir daño aumentado en combate.")}
                  ${g("Esquiva",N(_.dodge))}
                  ${g("Bloqueo",N(_.block))}
                  ${g("Robo de vida",N(_.lifesteal),"","Porcentaje del daño que regresa como curación.")}
                </div>
              </details>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${E("Equipo equipado","Lectura rápida de build")}
              <div class="space-y-2">${o.slice(0,4).map(t).join("")}</div>
              <button type="button" class="btn mt-4 w-full" onclick="game.setView('inventario')">Abrir inventario completo</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${E("Apoyos","Mascota y utilidades de sesión")}
              <div class="grid gap-3">
                ${ve?V(`${z(ve.icon||"paw","h-4 w-4 inline-block mr-2 align-[-0.15em]")}${ve.name}`,`Nivel ${u.player.petLevel} · XP ${u.player.petXp}/${3+u.player.petLevel}<br>${ve.desc}`,"surface-subtle"):V("Sin mascota activa","Incuba una en la vista de Mascota.","surface-subtle")}
              </div>
              <div class="grid grid-cols-2 gap-2 mt-4">
                <button type="button" class="btn btn-success" onclick="game.usePotion()" ${S("Consume una poción para recuperar salud fuera de combate.")}>🧪 Poción</button>
                <button type="button" class="btn btn-primary" onclick="game.autoHeal()" ${S("Aplica una curación automática si tienes recursos disponibles.")}>🩹 Curar</button>
                <button type="button" class="btn btn-gold" onclick="game.claimDaily()" ${S("Reclama tu recompensa diaria cuando esté lista.")}>🎁 Diario</button>
                <button type="button" class="btn" onclick="game.setView('mascota')" ${S("Abre la gestión de tu mascota activa y sus bonificaciones.")}>🐾 Mascota</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function se(){const _=["weapon","chest","ring","amulet"].map(t).join(""),W=u.ui.inventoryFilter,ve=u.player.inventory.length,ue=u.player.inventory.filter(pe=>{const le=u.player.equipment[pe.slot];return!le||(pe.score||0)>(le.score||0)}).length,ge=u.player.inventory.filter(pe=>pe.rarity==="legendary"||pe.rarity==="mythic"||pe.rarity==="ascendant").length;return`
      <div class="space-y-5">
        ${x("inventario",`Capacidad: <b>${u.player.inventory.length}/${T()}</b> · Mejoras potenciales: <b>${ue}</b>`,[I("🧹 Gestión automática","btn-primary","game.autoManage()","Vende y recicla excedentes de forma automática."),I("⚒️ Forja","","game.setView('forja')"),I("🛒 Mercado","btn-violet","game.setView('mercado')")].join(""))}

        ${Y([I("🧹 Limpiar","btn-primary !py-3","game.autoManage()"),I("⚒️ Forja","!py-3","game.setView('forja')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${E("Mochila","Filtra, compara y actúa","El inventario prioriza lectura rápida de mejoras y acciones de alto impacto.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${g("Objetos",ve,"Total en mochila")}
              ${g("Mejoras",ue,"Comparadas contra equipado")}
              ${g("Raros+",ge,"Legendarios y míticos")}
            </div>

            <div class="space-y-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Filtro por tipo</div>
                <div class="filters-row mt-2">
                  ${["all",...o].map(pe=>`
                    <button type="button" class="btn filter-pill ${W===pe?"active tab-btn":""}" onclick="game.setInventoryFilter('${pe}')" ${S(`Filtrar inventario por ${c(pe).toLowerCase()}.`)}>${c(pe)}</button>
                  `).join("")}
                </div>
              </div>

              <details class="surface-subtle rounded-2xl p-4">
                <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <div class="text-sm font-bold">Filtro avanzado por rareza</div>
                      <div class="text-xs text-slate-300/62 mt-1">Úsalo solo cuando estés optimizando inventario fino.</div>
                    </div>
                    <span class="inline-flex items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Rareza</span>
                  </div>
                </summary>
                <div class="filters-row mt-3">
                  ${["common","uncommon","rare","epic","legendary","mythic","ascendant"].map(pe=>`
                    <button type="button" class="btn filter-pill ${W===pe?"active tab-btn":""}" onclick="game.setInventoryFilter('${pe}')" ${S(`Filtrar inventario por ${c(pe).toLowerCase()}.`)}>${c(pe)}</button>
                  `).join("")}
                </div>
              </details>
            </div>

            ${L()}
          </section>

          <aside class="stack-compact">
            <details class="glass rounded-3xl p-5" open>
              <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div class="flex items-center justify-between gap-3">
                  <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">Referencia</div>
                  <span class="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Comparar</span>
                </div>
                <div class="mt-1 font-display font-extrabold text-lg leading-tight">Equipo equipado ahora</div>
              </summary>
              <div class="mt-4 space-y-2">${_}</div>
            </details>

            <div class="glass rounded-3xl p-5">
              ${E("Reglas rápidas","Qué vender o guardar")}
              <div class="grid gap-3">
                ${V("Prioridad","Equipa mejoras claras primero, luego limpia duplicados de bajo puntaje.","surface-subtle")}
                ${V("Si dudas","Si no mejora build ni economía, recicla o vende para liberar capacidad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function P(){const _=R(),W=u.player.activeSkills.map(le=>M[le]).filter(Boolean),ve=u.combatHistory.slice(0,2),ue=B(),pe=(ue.maxHp?u.player.hp/ue.maxHp:1)<.5?"normal":W.length>=2?"elite":"normal";return`
      <div class="space-y-5">
        ${x("arena",`Zona: <b>${_.name}</b> · Coste <b>${_.energyCost}⚡ / ${_.staminaCost}💪</b>`,[I("⚔️ Normal","btn-primary","game.fightArena('normal')"),I("👑 Élite","btn-violet","game.fightArena('elite')"),I("🔥 x3","btn-gold","game.arenaBlitz(3)")].join(""))}

        ${Y([I("⚔️ Normal","btn-primary !py-3","game.fightArena('normal')"),I("👑 Élite","btn-violet !py-3","game.fightArena('elite')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${E("Combate","Decide modo y entra","La arena muestra la decisión principal primero. Zona, build e historial quedan como soporte.")}

            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left" onclick="game.fightArena('normal')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Normal</div>
                  ${f(pe==="normal"?"Recomendado":"Estable","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Flujo seguro para mantener ritmo cuando estás ajustando build.</p>
              </button>

              <button type="button" class="surface-strong elite-card rounded-2xl p-4 text-left" onclick="game.fightArena('elite')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Élite</div>
                  ${f(pe==="elite"?"Recomendado":"Riesgo","warning")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Más exigente, mejor retorno cuando ya tienes vida y habilidades estables.</p>
              </button>

              <button type="button" class="surface-strong reward-card rounded-2xl p-4 text-left" onclick="game.arenaBlitz(3)">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Racha x3</div>
                  ${f("Acelerar")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Multiplica combates para subir ritmo cuando dominas la zona actual.</p>
              </button>
            </div>

            <div class="grid sm:grid-cols-3 gap-3 mt-4">
              ${g("Zona activa",_.name,_.theme)}
              ${g("Coste",`${_.energyCost}⚡ / ${_.staminaCost}💪`,"Por combate")}
              ${g("Registro",`${u.stats.wins}V / ${u.stats.losses}D`,"Historial global")}
            </div>

            <details class="surface-subtle rounded-2xl p-4 mt-4">
              <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <div class="text-sm font-bold">Cambiar zona</div>
                    <div class="text-xs text-slate-300/62 mt-1">Abre esto solo cuando quieras cambiar objetivo de farmeo.</div>
                  </div>
                  <span class="inline-flex items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Destino</span>
                </div>
              </summary>
              <div class="mt-4">${oe()}</div>
            </details>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${E("Preparación","Build activa para la zona")}
              <div class="grid gap-3">
                ${V("Habilidades activas",W.length?W.map(le=>`${le.name} · Nv ${u.player.skillLevels[le.id]||1}`).join("<br>"):"No hay habilidades activas equipadas.","surface-subtle")}
                ${V("Contexto",`Victorias ${u.stats.wins} · Derrotas ${u.stats.losses} · Bajas ${u.stats.kills}`,"surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${E("Historial","Últimos resultados")}
              <div class="space-y-3">
                ${ve.length?ve.map(le=>`
                    <button type="button" class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${le.id}')">
                      <div class="font-black ${le.result==="victory"?"text-emerald-300":"text-rose-300"}">${le.title}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${le.zone}</div>
                      <div class="text-xs text-slate-300/58 mt-2">${X(le.rewards)}</div>
                      <div class="text-xs text-slate-300/58 mt-1">${le.summary?`${le.summary.turnsPlayed} turnos · ${le.stats?`${le.stats.damageDone} daño`:"sin datos de daño"}`:"sin resumen de combate"}</div>
                    </button>
                  `).join(""):'<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}return{renderResumen:he,renderPerfil:xe,renderInventario:se,renderArena:P}}function Cs(r){const{SLOT_ORDER:o,SLOT_NAMES:v,ZONES:M,JOBS:u,PETS:T,SKILLS:F,ACHIEVEMENTS:B,state:l,getPetData:R,guildTotal:X,achievementProgress:Z,fmt:N,htmlStat:g,progressBar:U,icon:z,tooltipAttr:c,replaceEmojiIcons:S,rarityName:f,rarityBadge:E,zoneSelector:V,compareAgainstEquipped:I,itemStatGrid:Y,durationChoiceCard:x,previewCraftItem:y,previewEnhanceItem:t,previewReforgeItem:L,previewTranscendItem:oe,getPityStatus:H,pager:D,expeditionTimerText:he,jobTimerText:xe,pageLead:se,sectionHeader:P,infoCard:_,actionButton:W,actionBar:ve,statusChip:ue}=r;function ge(){const k=!!l.timers.expedition;return`
      <div class="space-y-5">
        ${se("expedicion",k?`En curso: <b>${M[l.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${he()}</span>`:"Sin expedición activa",[W("30s","btn-primary",`game.startExpedition(${l.player.zoneId}, 30)`),W("60s","",`game.startExpedition(${l.player.zoneId}, 60)`),W("120s","btn-gold",`game.startExpedition(${l.player.zoneId}, 120)`)].join(""))}

        ${ve([W("30s","btn-primary !py-3",`game.startExpedition(${l.player.zoneId}, 30)`),W("120s","btn-gold !py-3",`game.startExpedition(${l.player.zoneId}, 120)`)])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Elige destino","Primero define una zona segura para tu estado actual de recursos.")}
            ${V()}

            <div class="mt-5">
              ${P("Decisión","Elige duración","Duraciones cortas para control activo, largas para progreso pasivo.")}
              <div class="grid lg:grid-cols-3 gap-3">
                ${x(30,"success","Salida corta para mantener flujo y reaccionar rápido.")}
                ${x(60,"","Balance para sesiones mixtas entre combate y gestión.")}
                ${x(120,"warning","Más retorno si vas a dejar la partida corriendo.")}
              </div>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Regla rápida")}
              <div class="grid gap-3">
                ${_("Estado actual",k?"Ya tienes una expedición activa: espera el temporizador o cambia de foco.":"No hay expedición activa: puedes lanzar una ruta ahora.","surface-subtle")}
                ${_("Destino","Usa zonas cómodas cuando solo quieres materiales estables.","surface-subtle")}
                ${_("Después","Cuando termine, vuelve a Arena o Inventario para cerrar el ciclo.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function pe(){const k=l.player.keys>0;return`
      <div class="space-y-5">
        ${se("mazmorra",`Llaves: <b>${l.player.keys}</b> · Piso más alto: <b>${l.player.highestDungeonFloor}</b>`,[W("🗝️ Entrar","btn-gold","game.runDungeon()","Consume una llave y empieza una incursión de mazmorra."),W("🎒 Revisar equipo","","game.setView('inventario')")].join(""))}

        ${ve([W("🗝️ Entrar","btn-gold !py-3","game.runDungeon()"),W("🎒 Equipo","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Ruta de incursión","La mazmorra tiene un recorrido fijo por intento: entra solo cuando estés listo.")}
            <div class="grid gap-2 text-sm">
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>1. Enemigo base</span>${ue("Entrada")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>2. Enemigo base</span>${ue("Presión")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>3. Enemigo élite</span>${ue("Riesgo","warning")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>4. Jefe del piso</span>${ue("Pico","danger")}</div>
            </div>

            <div class="mt-4 grid sm:grid-cols-3 gap-3">
              ${g("Llaves",l.player.keys,k?"Listo para entrar":"Necesitas conseguir llaves")}
              ${g("Piso récord",l.player.highestDungeonFloor,"Tu tope actual")}
              ${g("Estado",k?"Disponible":"Bloqueado",k?"Tienes acceso inmediato":"Visita mercado o recompensas")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Decisión","¿Entrar ahora?")}
              <div class="grid gap-3">
                ${_("Recompensa","Oro, XP, esencia, fragmentos, llaves extra y botín de mayor calidad.","reward-card","Las mazmorras elevan el techo de recompensa frente al farmeo básico.")}
                ${_("Checklist","Entra cuando tengas llaves, pociones y una build ya ordenada.","surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Siguiente paso")}
              <div class="grid gap-2">
                <button type="button" class="btn" onclick="game.setView('inventario')">Ajustar equipo</button>
                <button type="button" class="btn" onclick="game.setView('arena')">Subir recursos en Arena</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function le(){const k=[...l.market.items].sort((h,j)=>(j.score||0)-(h.score||0))[0],e=l.market.items.filter(h=>(h.price||0)<=l.player.gold).length,m=l.market.items.filter(h=>I(h).tone==="success").length;return`
      <div class="space-y-5">
        ${se("mercado",`Oro disponible: <b>${N(l.player.gold)}</b>`,[W("🔄 Refrescar","btn-primary","game.refreshMarket()","Renueva la rotación del mercado con nuevas ofertas."),W("🎒 Comparar con mochila","","game.setView('inventario')","Abre el inventario para comparar las ofertas con tu equipo actual.")].join(""))}

        ${ve([W("🔄 Refrescar","btn-primary !py-3","game.refreshMarket()"),W("🎒 Mochila","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Rotación actual","Compra solo mejoras reales: evita gastar oro en cambios de impacto bajo.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${g("Comprables",e,"Con tu oro actual")}
              ${g("Mejoras",m,"Frente al equipo equipado")}
              ${g("Oferta top",k?v[k.slot]:"—",k?k.name:"Sin oferta destacada")}
            </div>

            ${k?`
              <div class="surface-strong reward-card rounded-2xl p-4 mb-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Oferta destacada</div>
                    <div class="mt-1 flex flex-wrap items-center gap-2">
                      <div class="font-black rarity-${k.rarity} text-lg leading-snug">${k.name}</div>
                      ${E(k.rarity)}
                    </div>
                    <p class="text-sm text-slate-300/74 mt-2">${I(k).detail}</p>
                  </div>
                  <div class="shrink-0 text-right">
                    <div class="text-sm font-bold text-amber-200">${N(k.price)} oro</div>
                    <div class="mt-2">${ue(I(k).label,I(k).tone)}</div>
                  </div>
                </div>
              </div>
            `:""}

            <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              ${l.market.items.map(h=>{const j=I(h),w=(h.price||0)<=l.player.gold;return`
                  <div class="glass rounded-2xl p-4 market-card ${w?"":"opacity-80"}" ${c(`Oferta de rareza ${f(h.rarity)}. Precio ${N(h.price)} de oro. ${j.detail}`)}>
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${h.rarity} leading-snug">${h.name}</div>${E(h.rarity)}</div>
                        <div class="text-xs text-slate-300/60 mt-1">${v[h.slot]} · Nivel ${h.level}</div>
                      </div>
                      ${ue(j.label,j.tone)}
                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      ${Y(h,4)}
                    </div>

                    <div class="market-meta mt-3">
                      <span class="text-sm text-slate-300/72">${j.detail}</span>
                      <span class="text-sm font-bold ${w?"text-amber-200":"text-rose-200"}">${N(h.price)} oro</span>
                    </div>

                    <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.buyMarketItem('${h.id}')" ${w?"":"disabled"}>Comprar</button>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Decisión","Qué mirar antes de comprar")}
              <div class="grid gap-3">
                ${_("Oferta destacada",k?`${k.name} lidera la rotación actual.`:"No hay oferta destacada ahora mismo.","reward-card")}
                ${_("No fuerces compra","Si nada mejora de verdad, conserva oro para una mejor rotación o para forja.","surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Consumibles útiles")}
              <div class="grid gap-2">
                <button type="button" class="btn btn-success" onclick="game.buyResource('potion')" ${c("Compra una poción para curarte más tarde por 120 de oro.")}>🧪 Poción · 120 oro</button>
                <button type="button" class="btn btn-violet" onclick="game.buyResource('key')" ${c("Compra una llave para acceder a mazmorras por 180 de oro.")}>🗝️ Llave · 180 oro</button>
                <button type="button" class="btn btn-primary" onclick="game.buyResource('essence')" ${c("Compra esencia para forja y progresión premium por 140 de oro.")}>✨ Esencia · 140 oro</button>
                <button type="button" class="btn" onclick="game.buyResource('sigil')" ${c("Compra un sigilo para rutas de trascendencia por 260 de oro.")}>🔷 Sigilo · 260 oro</button>
                <button type="button" class="btn" onclick="game.buyResource('food')" ${c("Compra comida para apoyar trabajos y mascotas por 65 de oro.")}>🍖 Comida x2 · 65 oro</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function C(){const k=H("forge"),e=H("market"),m=(j={})=>Object.entries(j).filter(([,w])=>w>0).map(([w,ne])=>`${N(ne)} ${w}`).join(" · "),h=(j=[])=>j.map(w=>`${Math.round((w.chance||0)*100)}% ${f(w.rarity)}`).join(" · ");return`
      <div class="space-y-5">
        ${se("forja",`Hierro: <b>${N(l.player.iron)}</b> · Esencia: <b>${N(l.player.essence)}</b> · Sigilos: <b>${N(l.player.sigils||0)}</b>`,[W("⚒️ Forjar arma","btn-primary","game.craftItem('weapon', 'basic')","Forja determinista con calidad variable."),W("✨ Avanzada arma","btn-violet","game.craftItem('weapon', 'advanced')","Mayor coste, mejor piso de rareza y más afijos."),W("🎒 Revisar inventario","","game.setView('inventario')")].join(""))}

        ${ve([W("⚒️ Básica","btn-primary !py-3","game.craftItem('weapon', 'basic')"),W("✨ Avanzada","btn-violet !py-3","game.craftItem('weapon', 'advanced')")])}

        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Creación por espacio","Cada receta muestra coste y outcomes esperados antes de gastar materiales.")}
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${o.map(j=>`
                ${(()=>{const w=y(j,"basic"),ne=y(j,"advanced");return`
                <div class="glass rounded-2xl p-4 forge-recipe-card">
                  <div class="font-bold">${v[j]}</div>
                  <div class="text-sm text-slate-300/70 mt-1">Pieza aleatoria del hueco con presupuesto por nivel y rareza.</div>
                  <div class="grid gap-2 mt-3 text-xs text-slate-300/74">
                    <div class="rounded-xl bg-white/[.04] p-2.5" ${c("Coste y tabla de outcomes de la receta básica.")}>Básica: <b>${m(w.cost)}</b><br><span class="text-slate-300/62">${h(w.outcomes)}</span></div>
                    <div class="rounded-xl bg-white/[.04] p-2.5" ${c("Coste y tabla de outcomes de la receta avanzada.")}>Avanzada: <b>${m(ne.cost)}</b><br><span class="text-slate-300/62">${h(ne.outcomes)}</span></div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button type="button" class="btn btn-primary !py-2" onclick="game.craftItem('${j}', 'basic')">Básica</button>
                    <button type="button" class="btn btn-violet !py-2" onclick="game.craftItem('${j}', 'advanced')">Avanzada</button>
                  </div>
                </div>
                  `})()}
              `).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Decisión","Mejorar equipado","Enhance para subir poder, reforge para redistribuir, transcend para evolucionar rareza.")}
              <div class="space-y-3 mt-4">
                ${["weapon","chest","ring","amulet"].map(j=>{const w=l.player.equipment[j],ne=w?t(j):null,de=w?L(w.id):null,me=w?oe(w.id):null;return`
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${v[j]}</div>
                       <div class="font-black break-words ${w?`rarity-${w.rarity}`:"text-slate-400/80"}">${w?w.name:"Vacío"}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${w?`Nivel ${w.level} · Mejora +${w.upgrade||0}`:"Equipa algo para mejorarlo."}</div>
                      ${w&&ne?`<div class="text-xs text-slate-300/62 mt-2">Enhance: ${Math.round(ne.successChance*100)}% · coste ${m(ne.cost)}</div>`:""}
                      ${w&&de?`<div class="text-xs text-slate-300/62 mt-1">Reforge: ${Math.round(de.successChance*100)}% · coste ${m(de.cost)}</div>`:""}
                      ${w&&me?`<div class="text-xs text-slate-300/62 mt-1">Transcend: ${Math.round(me.successChance*100)}% · ${me.from} → ${me.to}</div>`:""}
                      <div class="grid grid-cols-3 gap-2 mt-3">
                        <button type="button" class="btn btn-gold !py-2" ${w?`onclick="game.enhanceItem('${j}')"`:"disabled"} ${c("Mejora incremental estable de la pieza equipada.")}>Enhance</button>
                        <button type="button" class="btn btn-violet !py-2" ${w?`onclick="game.reforgeItem('${w.id}')"`:"disabled"} ${c("Redistribuye stats de forma controlada sin destruir el objeto.")}>Reforge</button>
                        <button type="button" class="btn !py-2" ${w&&me?`onclick="game.transcendItem('${w.id}')"`:"disabled"} ${c("Evoluciona la rareza si cumples requisitos y coste de transcend.")}>Transcend</button>
                      </div>
                    </div>
                  `}).join("")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Pity y regla de gasto")}
              <div class="grid gap-3">
                ${_("Pity forja",`Epic en ${k.epic} intentos sin hito · Mythic en ${k.mythic}.`,"surface-subtle")}
                ${_("Pity mercado",`Epic en ${e.epic} rotaciones sin hito · Mythic en ${e.mythic}.`,"surface-subtle")}
                ${_("Estrategia","Hierro para volumen, esencia para upgrades, sigilos/echo para evolución tardía.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function i(){const k={barracks:"Más ataque y defensa global.",treasury:"Más oro en todas las actividades.",sanctuary:"Más vida máxima y regeneración.",hunters:"Mejor botín y hallazgos más finos.",arsenal:"Más capacidad de inventario."};return`
      <div class="space-y-5">
        ${se("gremio",`Nivel total invertido: <b>${X()}</b>`,[W("🪙 Ver mercado","","game.setView('mercado')"),W("🏋️ Entrenar","btn-primary","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Mejoras del gremio","Cada edificio empuja un estilo de progreso distinto.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${Object.entries(l.player.guild).map(([e,m])=>{const h=m+1,j=180+h*110+X()*35,w=Math.max(1,Math.floor(h/2));return`
                  <div class="glass rounded-2xl p-4">
                    <div class="font-black text-lg capitalize" ${c(k[e])}>${e}</div>
                    <div class="text-sm text-slate-300/75 mt-1">${k[e]}</div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div class="rounded-xl bg-white/[.04] p-2">Nivel <b>${m}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Siguiente <b>${h}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Oro <b>${N(j)}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Esencia <b>${N(w)}</b></div>
                    </div>
                    <button type="button" class="btn btn-violet mt-3 w-full" onclick="game.upgradeGuild('${e}')">Mejorar</button>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Decisión","Cómo repartir inversión")}
              <div class="grid gap-3">
                ${_("Especialízate","Sube uno o dos edificios primero para sentir impacto temprano.","surface-subtle")}
                ${_("Prioridad típica","Tesorería y Barracas suelen notarse antes en la partida.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function ee(){return`
      <div class="space-y-5">
        ${se("entrenamiento",`Puntos de atributo: <b>${l.player.attributePoints}</b> · habilidades: <b>${l.player.skillPoints}</b>`,[W("👤 Perfil","","game.setView('perfil')"),W("⚔️ Arena","btn-primary","game.setView('arena')")].join(""))}

        <div class="grid xl:grid-cols-[.95fr,1.05fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Atributos base","Primero ajusta base estadística; después pule habilidades activas.")}
            <div class="grid sm:grid-cols-2 gap-3">
              ${[["strength","Fuerza","Ataque y robo de vida."],["agility","Agilidad","Velocidad, crítico y esquiva."],["endurance","Resistencia","Vida, defensa y bloqueo."],["discipline","Disciplina","Energía y aguante máximo."]].map(([k,e,m])=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${e}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${m}</div>
                  <div class="text-sm mt-3">Nivel actual: <b>${l.player.training[k]}</b></div>
                  <button type="button" class="btn btn-primary mt-3 w-full" onclick="game.trainAttribute('${k}')">Subir</button>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="glass rounded-3xl p-5">
            ${P("Decisión","Habilidades activas")}
            <div class="space-y-3">
              ${Object.values(F).map(k=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${k.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${k.desc}</div>
                  <div class="text-xs text-slate-300/60 mt-2">Recarga ${k.cooldown} · Desbloqueo Nv ${k.unlockLevel}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button type="button" class="btn !py-2" onclick="game.toggleActiveSkill('${k.id}')">${l.player.activeSkills.includes(k.id)?"Quitar":"Equipar"}</button>
                    <button type="button" class="btn btn-violet !py-2" ${l.player.unlockedSkills.includes(k.id)?`onclick="game.upgradeSkill('${k.id}')"`:"disabled"}>Mejorar</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function Q(){const k=!!l.timers.job;return`
      <div class="space-y-5">
        ${se("trabajo",k?`En curso: <b>${l.timers.job.name}</b> · <span data-live-timer="job">${xe()}</span>`:"Sin trabajo activo",[W("🧭 Expedición","","game.setView('expedicion')"),W("💰 Mercado","btn-gold","game.setView('mercado')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Trabajos disponibles","Elige una fuente de oro estable cuando no quieras combate activo.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${u.map(e=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black text-lg">${e.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${e.desc}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Duración <b>${e.duration}s</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${N(e.reward.gold)} oro</b></div>
                  </div>
                  <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.startJob('${e.id}')" ${c("Inicia este trabajo y bloquea el temporizador hasta su finalización.")}>Aceptar</button>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Regla rápida")}
              <div class="grid gap-3">
                ${_("Estado",k?"Ya tienes un trabajo activo: espera el temporizador.":"No hay trabajo activo: puedes aceptar uno ahora.","surface-subtle")}
                ${_("Alternativa","Si también quieres botín, Expedición suele aportar más variedad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function ce(){const k=R();return`
      <div class="space-y-5">
        ${se("mascota",k?`Activa: <b>${k.name}</b>`:"Aún no tienes mascota",[W("👤 Perfil","","game.setView('perfil')"),W("🥚 Incubar","btn-violet","game.hatchPet()","Consume recursos para obtener una mascota aleatoria.")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Mascota activa","Gestiona alimentación y progreso solo del compañero que llevas activo.")}
            ${k?`
              <div class="glass rounded-2xl p-5">
                <div class="text-cyan-200">${z(k.icon||"paw","h-9 w-9")}</div>
                <div class="font-display font-extrabold text-2xl mt-2">${k.name}</div>
                <div class="text-sm text-slate-300/75 mt-1">${k.desc}</div>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  ${g("Nivel",l.player.petLevel)}
                  ${g("XP",`${l.player.petXp}/${3+l.player.petLevel}`)}
                </div>
                <div class="grid sm:grid-cols-2 gap-3 mt-4">
                  <button type="button" class="btn btn-success" onclick="game.feedPet()">${z("box","h-4 w-4")}<span>Alimentar</span></button>
                  <button type="button" class="btn btn-danger" onclick="game.releasePet()" ${c("Libera la mascota actual y pierdes sus bonos activos.")}>Liberar</button>
                </div>
              </div>
            `:`
              <div class="glass rounded-2xl p-5">
                <p class="text-sm text-slate-300/75">Incuba un huevo con 5 fragmentos y 8 de esencia para recibir un compañero aleatorio.</p>
                <button type="button" class="btn btn-violet mt-4" onclick="game.hatchPet()">${z("spark","h-4 w-4")}<span>Incubar huevo</span></button>
              </div>
            `}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${P("Soporte","Catálogo rápido")}
            <div class="grid gap-3">
              ${T.map(e=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-bold font-display inline-flex items-center gap-2">${z(e.icon||"paw","h-4 w-4")}<span>${e.name}</span></div>
                  <div class="text-sm text-slate-300/75 mt-1">${e.desc}</div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function be(){const k=B.slice(0,6);return`
      <div class="space-y-5">
        ${se("logros",`Polvo de reliquia: <b>${l.player.relicDust}</b>`,[W("🔱 Ascender","btn-gold","game.ascend()","Reinicia gran parte del progreso para ganar mejoras meta permanentes."),W("📘 Diario","","game.setView('diario')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Hitos activos","Se muestra una selección corta para mantener foco de progresión.")}
            <div class="space-y-3">
              ${k.map(e=>{const m=Z(e),h=l.claimedAchievements.includes(e.id);return`
                  <div class="glass rounded-2xl p-4">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black text-lg">${e.title}</div>
                        <div class="text-sm text-slate-300/75 mt-1">${e.desc}</div>
                      </div>
                      <div class="text-sm rounded-full px-3 py-1 ${h?"bg-emerald-400/15 text-emerald-300 border border-emerald-300/20":"bg-white/[.05]"}">${h?"Listo":`${m}/${e.target}`}</div>
                    </div>
                    <div class="mt-3">${U(m,e.target,"bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-300 shadow-[0_0_18px_rgba(34,211,238,.30)]","Progreso","Avance total hacia este logro y sus recompensas meta.")}</div>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Decisión","Ascensión")}
              <p class="text-sm text-slate-300/75 mt-2">Actívala cuando quieras convertir una partida avanzada en progreso permanente.</p>
              <button type="button" class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${c("Reinicia gran parte de la partida a cambio de progreso meta permanente.")}>🔱 Ascender</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Altar de reliquias")}
              <div class="grid gap-3 mt-4">
                ${[["wrath","Ira"],["fortune","Fortuna"],["vitality","Vitalidad"],["momentum","Impulso"]].map(([e,m])=>`
                  <button type="button" class="btn btn-violet justify-between" onclick="game.spendRelic('${e}')" ${c(`Invierte polvo de reliquia en ${m.toLowerCase()} para obtener bonificaciones permanentes.`)}><span>${m}</span><span>Nv ${l.player.relics[e]}</span></button>
                `).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function $e(){const k=Math.max(8,l.ui.journalPageSize||16),e=l.journal||[],m=Math.max(1,Math.ceil(e.length/k)),h=Math.min(Math.max(1,l.ui.journalPage||1),m),j=(h-1)*k,w=e.slice(j,j+k);return`
      <div class="space-y-5">
        ${se("diario",`Entradas guardadas: <b>${e.length}</b>`,[W("🏆 Ver logros","","game.setView('logros')"),W("📋 Resumen","btn-primary","game.setView('resumen')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,300px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Registro reciente","El diario es histórico: úsalo para revisar, no para decidir acciones inmediatas.")}
            <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${e.length?j+1:0}</b>–<b>${Math.min(j+k,e.length)}</b> de <b>${e.length}</b>.</div>
            <div class="space-y-3">
              ${w.map(ne=>`
                <div class="glass rounded-2xl p-4 cv-auto">
                  <div class="font-black">${S(ne.icon)} <span class="font-semibold">${new Date(ne.ts).toLocaleTimeString("es-ES")}</span></div>
                  <div class="text-sm text-slate-200/90 leading-relaxed mt-2">${ne.text}</div>
                </div>
              `).join("")||'<div class="text-sm text-slate-300/75">Todavía no hay entradas en el diario.</div>'}
            </div>
            ${D(h,m,"setJournalPage")}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${P("Soporte","Uso recomendado")}
            <div class="grid gap-3">
              ${_("Consulta","Revisa aquí eventos y recompensas pasadas.","surface-subtle")}
              ${_("Acción","Para progresar, vuelve a Resumen, Arena o Inventario.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}return{renderExpedicion:ge,renderMazmorra:pe,renderMercado:le,renderForja:C,renderGremio:i,renderEntrenamiento:ee,renderTrabajo:Q,renderMascota:ce,renderLogros:be,renderDiario:$e}}const{SLOT_ORDER:Nt,SLOT_NAMES:vt,ZONES:yt,JOBS:Is,PETS:js,SKILLS:zt,ACHIEVEMENTS:Ls,fmt:Ge,pct:Ht,htmlStat:at,progressBar:Ft,timeLeft:ht,state:Pe,maxInventory:Ps,getPetData:_t,getDerivedStats:Rs,scaleItemStats:Bs,guildTotal:Ts,currentRank:Ds,zoneForPlayer:qs,isZoneUnlocked:mt,summarizeReward:Gt,achievementProgress:Vs,previewSalvage:Os,previewCraftItem:Ns,previewEnhanceItem:zs,previewReforgeItem:Wt,previewTranscendItem:Jt,getPityStatus:Hs,icon:lt,replaceEmojiIcons:Fs,rarityName:Zt,rarityBadge:bt,translateFilter:_s,statLabel:Gs,statTooltip:Ws,tooltipAttr:Je,statusChip:dt,sectionHeader:Ut,infoCard:Kt,actionButton:Yt,actionBar:Qt,pageLead:Xt}=Dt;function Js(r){const o=Pe.player.equipment[r];return`
    <div class="rounded-2xl ring p-3 bg-white/[.04]">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${vt[r]}</div>
          ${o?`<div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-bold leading-snug break-words rarity-${o.rarity}">${o.name}</div>${bt(o.rarity)}</div>
               <div class="text-xs text-slate-300/70 mt-1">Nivel ${o.level} · Mejora +${o.upgrade||0}</div>`:'<div class="font-bold mt-1 text-slate-400/80">Vacío</div>'}
        </div>
        ${o?`<button type="button" class="btn !px-3 !py-2 text-xs" onclick="game.unequipItem('${r}')">Quitar</button>`:""}
      </div>
    </div>
  `}function Zs(r){return`
    <div class="glass rounded-2xl p-4">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div class="min-w-0">
          <div class="font-black text-lg">${r.title}</div>
          <div class="text-sm text-slate-300/75 mt-1">${r.desc}</div>
          <div class="text-xs text-slate-300/60 mt-3">${Gt(r.reward)}</div>
        </div>
        <button type="button" class="btn ${r.completed?"btn-success":""}" ${r.completed&&!r.claimed?`onclick="game.claimQuest('${r.id}')"`:"disabled"}>
          ${r.claimed?"Cobrada":r.completed?"Cobrar":`${Ge(r.progress)}/${Ge(r.target)}`}
        </button>
      </div>
      <div class="mt-3">${Ft(r.progress,r.target,"bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-300 shadow-[0_0_18px_rgba(192,132,252,.32)]","Progreso","Avance actual del contrato seleccionado.")}</div>
    </div>
  `}function Us(){return Pe.timers.expedition?ht(Pe.timers.expedition.endAt):"0s"}function Ks(){return Pe.timers.job?ht(Pe.timers.job.endAt):"0s"}function ea(r,o,v){return o<=1?"":`
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
      <div class="text-sm text-slate-300/72">Página <b>${r}</b> de <b>${o}</b></div>
      <div class="flex gap-2">
        <button type="button" class="btn !py-2 !px-3" ${r<=1?"disabled":`onclick="game.${v}(${r-1})"`}>← Anterior</button>
        <button type="button" class="btn !py-2 !px-3" ${r>=o?"disabled":`onclick="game.${v}(${r+1})"`}>Siguiente →</button>
      </div>
    </div>
  `}function ta(){return`
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
      ${yt.map(r=>`
        <button
          type="button"
          class="text-left glass rounded-2xl p-4 transition ${Pe.player.zoneId===r.id?"ring ring-cyan-300/35 bg-cyan-400/8":""} ${mt(r)?"":"opacity-45"}"
          ${mt(r)?`onclick="game.setZone(${r.id})"`:"disabled"}
          ${Je(`Zona ${r.name}. Requiere nivel ${r.unlockLevel} y consume ${r.energyCost} de energía y ${r.staminaCost} de aguante.`)}
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="font-black text-lg">${r.name}</div>
              <div class="text-xs text-slate-300/60 mt-1">Nivel ${r.unlockLevel}+ · ${r.theme}</div>
            </div>
            <div class="text-xs rounded-full px-2.5 py-1 bg-white/[.06]">${mt(r)?"Activa":"Bloqueada"}</div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${lt("bolt","h-4 w-4 text-cyan-300")}<span>${r.energyCost} energía</span></div>
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${lt("dumbbell","h-4 w-4 text-emerald-300")}<span>${r.staminaCost} aguante</span></div>
          </div>
        </button>
      `).join("")}
    </div>
  `}function Ys(r,o){return r==="crit"||r==="dodge"||r==="block"||r==="lifesteal"?Ht(o):Ge(o)}const Qs={common:5,uncommon:7,rare:9,epic:11,legendary:12,mythic:14,ascendant:16};function Xs(r){const o=Qs[r.rarity]||10,v=r.upgrade||0;return{current:v,cap:o,remaining:Math.max(0,o-v)}}function er(r){const o=Math.round((r.qualityRoll||1)*100);return o>=114?`${o}% · excepcional`:o>=104?`${o}% · alta`:o>=96?`${o}% · estable`:`${o}% · baja`}function tr(r){if(!r)return"Sin datos";const v=["iron","wood","essence","sigils","echoShards"].map(M=>({key:M,value:r[M]||0})).filter(M=>M.value>0).slice(0,3).map(M=>`+${M.value} ${M.key}`);return v.length?v.join(" · "):"Sin valor de reciclaje"}function xt(r){const o=Pe.player.equipment[r.slot];if(!o)return{label:"Mejora limpia",tone:"success",detail:"No tienes una pieza equipada en este espacio."};const v=(r.score||0)-(o.score||0);return v>0?{label:`+${Ge(v)} puntuación`,tone:"success",detail:`Mejora respecto a ${o.name}.`}:v<0?{label:`${Ge(v)} puntuación`,tone:"danger",detail:`Rinde peor que ${o.name}.`}:{label:"Puntuación similar",tone:"",detail:`Rinde de forma parecida a ${o.name}.`}}function aa(r,o=4){return Object.entries(Bs(r)).slice(0,o).map(([v,M])=>`<div class="rounded-xl bg-white/[.04] p-2.5" ${Je(Ws(v))}>${Gs(v)}: <b>${Ys(v,M)}</b></div>`).join("")}function ar(r){const o=r.filter(M=>M.rarity==="legendary"||M.rarity==="mythic"||M.rarity==="ascendant").length,v=r.filter(M=>xt(M).tone==="success").length;return`
    <div class="grid sm:grid-cols-3 gap-3 mb-4">
      ${at("Objetos filtrados",r.length)}
      ${at("Mejoras posibles",v)}
      ${at("Legendarios",o,"","Cantidad de objetos legendarios visibles en este filtro.")}
    </div>
  `}function nr(r,o,v){return`
    <div class="surface-strong rounded-2xl p-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Expedición</div>
          <div class="text-2xl font-black mt-1">${r}s</div>
          <p class="text-sm text-slate-300/74 mt-2">${v}</p>
        </div>
        ${dt(r<=30?"Corta":r<120?"Media":"Larga",o)}
      </div>
      <button type="button" class="btn ${o==="success"?"btn-primary":o==="warning"?"btn-gold":"btn-violet"} mt-4 w-full" onclick="game.startExpedition(${Pe.player.zoneId}, ${r})">Enviar ${r}s</button>
    </div>
  `}function sr(){let r=[...Pe.player.inventory];const o=Pe.ui.inventoryFilter;if(o!=="all"&&(r=r.filter(B=>B.slot===o||B.rarity===o)),!r.length)return'<div class="glass rounded-2xl p-5 text-slate-300/75">Tu inventario está vacío o el filtro no devuelve resultados.</div>';const v=Math.max(6,Pe.ui.inventoryPageSize||18),M=Math.max(1,Math.ceil(r.length/v)),u=Math.min(Math.max(1,Pe.ui.inventoryPage||1),M),T=(u-1)*v,F=r.slice(T,T+v);return`
    ${ar(r)}
    <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${T+1}</b>–<b>${Math.min(T+v,r.length)}</b> de <b>${r.length}</b> objetos filtrados.</div>
    <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
      ${F.map(B=>{const l=xt(B),R=Xs(B),X=Os(B.id),Z=Wt(B.id),N=Jt(B.id);return`
          <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro" ${Je(`Objeto de rareza ${Zt(B.rarity)}. Puntuación ${Ge(B.score)}. ${l.detail}`)}>
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${B.rarity} leading-snug break-words">${B.name}</div>${bt(B.rarity)}</div>
                <div class="text-xs text-slate-300/60 mt-1">${vt[B.slot]} · Nivel ${B.level||B.itemLevel} · Mejora +${B.upgrade||0}/${R.cap}</div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]" ${Je("Puntuación total estimada del objeto según sus estadísticas y mejora actual.")}>Punt. ${Ge(B.score)}</div>
                <div class="mt-2">${dt(l.label,l.tone)}</div>
              </div>
            </div>
            <p class="text-xs text-slate-300/62 mt-3">${l.detail}</p>
            <div class="grid sm:grid-cols-2 gap-2 mt-3 text-xs text-slate-300/72">
              <div class="rounded-xl bg-white/[.04] p-2.5">Calidad: <b>${er(B)}</b></div>
              <div class="rounded-xl bg-white/[.04] p-2.5">Potencial: <b>+${R.remaining}</b> niveles</div>
              <div class="rounded-xl bg-white/[.04] p-2.5 sm:col-span-2">Reciclaje: <b>${tr(X)}</b></div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
              ${aa(B,4)}
            </div>
            <div class="grid gap-2 mt-4">
              <button type="button" class="btn btn-success !py-2.5 w-full" onclick="game.equipItem('${B.id}')">Equipar</button>
              <div class="grid grid-cols-2 gap-2">
                <button type="button" class="btn !py-2 text-xs" onclick="game.sellItem('${B.id}')">Vender</button>
                <button type="button" class="btn !py-2 text-xs" onclick="game.salvageItem('${B.id}')">Reciclar</button>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <button type="button" class="btn btn-violet !py-2 text-xs" onclick="game.reforgeItem('${B.id}')" ${Z?Je(`Coste reforge: ${Object.entries(Z.cost).filter(([,g])=>g>0).map(([g,U])=>`${U} ${g}`).join(", ")}`):"disabled"}>Retemplar</button>
                <button type="button" class="btn btn-gold !py-2 text-xs" onclick="game.transcendItem('${B.id}')" ${N?Je(`Trascender ${N.from} -> ${N.to}. Probabilidad ${Math.round(N.successChance*100)}%`):"disabled"}>Trascender</button>
              </div>
            </div>
          </div>
        `}).join("")}
    </div>
    ${ea(u,M,"setInventoryPage")}
  `}const tt=As({SLOT_ORDER:Nt,ZONES:yt,SKILLS:zt,state:Pe,maxInventory:Ps,getPetData:_t,getDerivedStats:Rs,currentRank:Ds,zoneForPlayer:qs,summarizeReward:Gt,fmt:Ge,pct:Ht,htmlStat:at,timeLeft:ht,icon:lt,translateFilter:_s,tooltipAttr:Je,statusChip:dt,sectionHeader:Ut,infoCard:Kt,actionButton:Yt,actionBar:Qt,pageLead:Xt,questCard:Zs,equippedSlotCard:Js,inventoryCards:sr,zoneSelector:ta}),Ne=Cs({SLOT_ORDER:Nt,SLOT_NAMES:vt,ZONES:yt,JOBS:Is,PETS:js,SKILLS:zt,ACHIEVEMENTS:Ls,state:Pe,getPetData:_t,guildTotal:Ts,achievementProgress:Vs,fmt:Ge,htmlStat:at,progressBar:Ft,icon:lt,tooltipAttr:Je,replaceEmojiIcons:Fs,rarityName:Zt,rarityBadge:bt,zoneSelector:ta,compareAgainstEquipped:xt,itemStatGrid:aa,durationChoiceCard:nr,previewCraftItem:Ns,previewEnhanceItem:zs,previewReforgeItem:Wt,previewTranscendItem:Jt,getPityStatus:Hs,pager:ea,expeditionTimerText:Us,jobTimerText:Ks,pageLead:Xt,sectionHeader:Ut,infoCard:Kt,actionButton:Yt,actionBar:Qt,statusChip:dt});function rr(){return({resumen:tt.renderResumen,perfil:tt.renderPerfil,inventario:tt.renderInventario,arena:tt.renderArena,expedicion:Ne.renderExpedicion,mazmorra:Ne.renderMazmorra,mercado:Ne.renderMercado,forja:Ne.renderForja,gremio:Ne.renderGremio,entrenamiento:Ne.renderEntrenamiento,trabajo:Ne.renderTrabajo,mascota:Ne.renderMascota,logros:Ne.renderLogros,diario:Ne.renderDiario}[Pe.currentView]||tt.renderResumen)()}function or(){const r=Pe.ui.modal;return r?`
    <div class="fixed inset-0 bg-slate-950/72 backdrop-blur-sm z-50 p-4 overflow-y-auto">
      <div class="min-h-full flex items-start justify-center py-8">
        <div class="glass-strong rounded-[2rem] p-5 sm:p-6 w-full max-w-5xl">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div>
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Detalle</div>
              <div class="text-2xl font-black">${r.title}</div>
            </div>
            <button type="button" class="btn" onclick="game.closeModal()">Cerrar</button>
          </div>
          ${r.content}
        </div>
      </div>
    </div>
  `:""}const ir={renderContent:rr,renderModal:or};(()=>{const{STORAGE_KEY:r,VIEWS:o,VIEW_META:v}=window.AetherConfig,{$:M,clamp:u,fmt:T,timeLeft:F,sanitizeInlineHtml:B}=window.AetherUtils,{state:l,loadGame:R,saveGame:X,getDerivedStats:Z,maxInventory:N,hardReset:g,mutate:U,subscribeStore:z,getStoreMeta:c,setStoreMeta:S,syncExternalState:f}=window.AetherModel,E=window.AetherSystems,V={...Es,...ir},I=new Set(o.map(([s])=>s)),Y={hud:"hud",desktopNav:"desktop-nav",content:"page-view",modal:"modal-root",mobileNav:"mobile-nav-root",mobileSheet:"mobile-sheet-root"},x=Object.create(null),y=new Set(Object.keys(Y)),t=[],L={el:null,activeTarget:null,hideTimer:0,frame:0};let oe=0,H=0,D=0;function he(s){return M(Y[s])}function xe(s){switch(s){case"hud":return V.renderHud();case"desktopNav":return V.renderDesktopNav();case"content":return V.renderContent();case"modal":return V.renderModal();case"mobileNav":return V.renderMobileNav();case"mobileSheet":return V.renderMobileSheet();default:return""}}function se(s){return s?Array.isArray(s)?s:[s]:[]}function P(s=Object.keys(Y)){se(s).forEach(d=>y.add(d)),!oe&&(oe=window.requestAnimationFrame(()=>{oe=0,C()}))}function _(){const s=he("content");!s||!s.querySelectorAll||(s.querySelectorAll('[data-live-timer="expedition"]').forEach(d=>{d.textContent=l.timers.expedition?F(l.timers.expedition.endAt):"0s"}),s.querySelectorAll('[data-live-timer="job"]').forEach(d=>{d.textContent=l.timers.job?F(l.timers.job.endAt):"0s"}))}function W(){const s=he("hud");if(!s)return!1;const d=Z(),q=d.maxHp?l.player.hp/d.maxHp:1,K=d.maxHp?Math.max(0,Math.min(100,l.player.hp/d.maxHp*100)):0,ae=d.maxEnergy?Math.max(0,Math.min(100,l.player.energy/d.maxEnergy*100)):0,J=d.maxStamina?Math.max(0,Math.min(100,l.player.stamina/d.maxStamina*100)):0,ie=q<=.35?{text:"Vida crítica",tone:"danger"}:q<=.65?{text:"Vida media",tone:"warning"}:{text:"Vida estable",tone:"success"},ke=(qe,Ee)=>{const Ae=s.querySelector(qe);Ae&&Ae.textContent!==Ee&&(Ae.textContent=Ee)},fe=(qe,Ee)=>{const Ae=s.querySelector(`[data-hud-bar="${qe}"]`);if(!Ae)return;const Ve=`${Ee}%`;Ae.style.width!==Ve&&(Ae.style.width=Ve)};ke("[data-hud-resources]",`${T(l.player.energy)}⚡ · ${T(l.player.stamina)}💪`),ke('[data-hud-current="hp"]',`${T(l.player.hp)} / ${T(d.maxHp)}`),ke('[data-hud-current="energy"]',`${T(l.player.energy)} / ${T(d.maxEnergy)}`),ke('[data-hud-current="stamina"]',`${T(l.player.stamina)} / ${T(d.maxStamina)}`),fe("hp",K),fe("energy",ae),fe("stamina",J),ke('[data-hud-stat="gold"]',T(l.player.gold)),ke('[data-hud-stat="potions"]',T(l.player.potions)),ke('[data-hud-stat="attack"]',T(d.attack)),ke('[data-hud-stat="inventory"]',`${l.player.inventory.length}/${N()}`);const Se=s.querySelector("[data-hud-survivability]");return Se&&(Se.textContent=ie.text,Se.classList.remove("success","warning","danger"),Se.classList.add(ie.tone)),!0}function ve(s,d){const q=(s.getAttribute("data-card-title")||"").trim();if(q)return q;const K=s.querySelector(".section-title, .font-display.font-extrabold, .font-black, .font-bold, h2, h3, h4"),ae=K?(K.textContent||"").trim().replace(/\s+/g," "):"";return ae||`Tarjeta ${d+1}`}function ue(s){let d=0,q=s;for(;q&&q.parentElement;)d+=1,q=q.parentElement;return d}function ge(s,d){const q=[];let K=d;for(;K&&K!==s;){let ae=0,J=K.previousElementSibling;for(;J;)ae+=1,J=J.previousElementSibling;q.push(ae),K=K.parentElement}return q.reverse().join(".")}function pe(s,d,q){U("ui/setCardCollapsed",()=>{(!l.ui.collapsedCardsByView||typeof l.ui.collapsedCardsByView!="object")&&(l.ui.collapsedCardsByView={}),(!l.ui.collapsedCardsByView[s]||typeof l.ui.collapsedCardsByView[s]!="object")&&(l.ui.collapsedCardsByView[s]={}),l.ui.collapsedCardsByView[s][d]=!!q},{source:"ui"}),i()}function le(){const s=he("content");if(!s)return;const q=Array.from(s.querySelectorAll(".glass, .glass-strong, .surface-strong, .surface-subtle")).filter(fe=>!(!(fe instanceof HTMLElement)||fe.tagName.toLowerCase()==="details"||fe.closest(".mobile-cta-bar")||fe.closest("#mobile-nav-root")||fe.closest("#mobile-sheet-root"))),K=l.currentView||"resumen",ae=l.ui.collapsedCardsByView&&l.ui.collapsedCardsByView[K]||{},J=Object.keys(ae).length>0;[...q.map((fe,Se)=>({card:fe,order:Se,depth:ue(fe),domPath:ge(s,fe)}))].sort((fe,Se)=>Se.depth-fe.depth||fe.order-Se.order).forEach(fe=>{const{card:Se,order:qe}=fe,Ee=document.createElement("details");Array.from(Se.attributes).forEach(Ie=>{Ee.setAttribute(Ie.name,Ie.value)}),Ee.classList.add("card-collapsible");const Ae=document.createElement("summary");Ae.className="card-collapsible-summary",Ae.setAttribute("role","button");const Ve=document.createElement("span");Ve.className="card-collapsible-label";const Ue=ve(Se,qe);Ve.textContent=Ue;const ze=document.createElement("span");ze.className="card-collapsible-chevron",ze.setAttribute("aria-hidden","true"),ze.textContent="▾",Ae.append(Ve,ze);const Ze=document.createElement("div");for(Ze.className="card-collapsible-body";Se.firstChild;)Ze.appendChild(Se.firstChild);Ee.append(Ae,Ze);const Me=(Se.getAttribute("data-card-id")||"").trim()||`${K}:${fe.domPath}`;Ee.dataset.cardKey=Me,Object.prototype.hasOwnProperty.call(ae,Me)?Ee.open=ae[Me]!==!0:J?Ee.open=!0:Ee.open=qe===0,Ee.addEventListener("toggle",()=>{pe(K,Me,!Ee.open)}),Se.replaceWith(Ee)})}function C(){Object.keys(Y).forEach(d=>{if(!y.has(d))return;const q=he(d);if(!q)return;const K=xe(d);x[d]!==K&&(q.innerHTML=K,x[d]=K,d==="content"&&le()),y.delete(d)}),_();const s=v[l.currentView]||v.resumen;document.title=`Aether Arena — ${s.label}`}function i(s=!1){if(!s&&!c().isDirty)return;if(s){D&&(clearTimeout(D),D=0),X();return}if(D)return;const d=()=>{D=0,X()};if(typeof window.requestIdleCallback=="function"){D=window.setTimeout(()=>{D=0,window.requestIdleCallback(d,{timeout:1200})},900);return}D=window.setTimeout(d,900)}function ee(s){try{location.hash!==`#${s}`&&history.replaceState(null,"",`#${s}`)}catch{location.hash=s}}function Q(s,d={}){if(!I.has(s))return;const q=l.currentView;U("ui/setView",()=>{l.currentView=s,l.currentTab=s,l.ui.moreMenuOpen=!1},{source:"ui"}),d.skipHash||ee(s),P(["hud","desktopNav","content","mobileNav","mobileSheet"]),q!==s&&!d.keepScroll&&window.scrollTo(0,0),i()}function ce(s){U("ui/setInventoryFilter",()=>{l.ui.inventoryFilter=s,l.ui.inventoryPage=1},{source:"ui"}),P("content"),i()}function be(s){U("ui/setInventoryPage",()=>{l.ui.inventoryPage=Math.max(1,Number(s)||1)},{source:"ui",markDirty:!1}),P("content")}function $e(s){U("ui/setJournalPage",()=>{l.ui.journalPage=Math.max(1,Number(s)||1)},{source:"ui",markDirty:!1}),P("content")}function k(s){U("ui/toggleMoreMenu",()=>{l.ui.moreMenuOpen=typeof s=="boolean"?s:!l.ui.moreMenuOpen},{source:"ui",markDirty:!1}),P(["mobileNav","mobileSheet"])}function e(){U("ui/closeModal",()=>{l.ui.modal=null},{source:"ui",markDirty:!1}),P("modal")}function m(s){const d=l.combatHistory.find(J=>J.id===s);if(!d)return;const q=d.summary||{},K=d.stats||{},ae={enemy_defeated:"Enemigo derrotado",player_defeated:"Caída del jugador",turn_limit:"Límite de turnos"}[q.endReason]||"Sin dato";U("ui/showCombat",()=>{l.ui.modal={type:"combat",title:B(d.title),content:`
          <div class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="glass rounded-2xl p-4">
                <div class="text-sm text-slate-300/75">${B(d.zone)}</div>
                <div class="text-sm text-slate-200/90 mt-2">${B(E.summarizeReward(d.rewards))}${d.drop?` · Botín: <span class="rarity-${d.drop.rarity}">${B(d.drop.name)}</span>`:""}</div>
              </div>
              <div class="glass rounded-2xl p-4">
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ritmo</div>
                <div class="text-lg font-black text-white">${Number(q.turnsPlayed||0)} turnos</div>
                <div class="text-xs text-slate-300/70 mt-1">${B(ae)}</div>
              </div>
            </div>
            <div class="grid sm:grid-cols-3 gap-3">
              <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">Daño infligido: <b>${Number(K.damageDone||0)}</b></div>
              <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">Daño recibido: <b>${Number(K.damageTaken||0)}</b></div>
              <div class="glass rounded-2xl p-4 text-sm text-slate-100/90">Críticos: <b>${Number(K.crits||0)}</b></div>
            </div>
            <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro turno a turno</div>
              <div class="space-y-2 text-sm">${d.log.map(J=>`<div>${B(J)}</div>`).join("")}</div>
            </div>
          </div>
        `}},{source:"ui",markDirty:!1}),P("modal")}function h(){typeof confirm=="function"&&!confirm("¿Seguro que quieres reiniciar la partida? Se perdera el progreso local.")||(g(),Q("resumen",{keepScroll:!1}),E.toast("Nueva partida iniciada","danger"),P(Object.keys(Y)),i(!0))}function j(s){P(s||["hud","content","mobileSheet"]),i()}function w(){const s=document.createElement("div");s.id="ui-tooltip",s.className="pointer-events-none fixed z-[80] hidden max-w-[290px] rounded-2xl border border-cyan-300/24 bg-slate-950/92 px-3 py-2 text-xs leading-relaxed text-slate-100 backdrop-blur-xl shadow-[0_12px_40px_rgba(2,6,23,.55)] opacity-0 translate-y-1 transition duration-150 ease-out",document.body.appendChild(s),L.el=s;function d(J){if(!J||!L.el||L.el.classList.contains("hidden"))return;const ie=J.getBoundingClientRect(),ke=L.el.getBoundingClientRect(),fe=Math.max(12,ie.top-ke.height-10);let Se=ie.left+ie.width/2-ke.width/2;Se=Math.max(12,Math.min(Se,window.innerWidth-ke.width-12)),L.el.style.top=`${fe}px`,L.el.style.left=`${Se}px`}function q(J=L.activeTarget){!J||!L.el||L.frame||(L.frame=window.requestAnimationFrame(()=>{L.frame=0,d(J)}))}function K(J){const ie=J&&J.getAttribute("data-tooltip");!ie||!L.el||(L.hideTimer&&(clearTimeout(L.hideTimer),L.hideTimer=0),L.activeTarget=J,L.el.innerHTML=ie,L.el.classList.remove("hidden"),window.requestAnimationFrame(()=>{L.el&&L.el.classList.remove("opacity-0","translate-y-1")}),q(J))}function ae(J){!L.activeTarget||!L.el||J&&L.activeTarget!==J&&L.activeTarget.contains(J)||(L.activeTarget=null,L.el.classList.add("opacity-0","translate-y-1"),L.hideTimer=window.setTimeout(()=>{L.el&&(L.el.classList.add("hidden"),L.hideTimer=0)},140))}document.addEventListener("mouseover",J=>{const ie=J.target.closest("[data-tooltip]");ie&&K(ie)}),document.addEventListener("mouseout",J=>{const ie=J.target.closest("[data-tooltip]");ie&&ae(ie)}),document.addEventListener("focusin",J=>{const ie=J.target.closest("[data-tooltip]");ie&&K(ie)}),document.addEventListener("focusout",J=>{const ie=J.target.closest("[data-tooltip]");ie&&ae(ie)}),document.addEventListener("mousemove",()=>{L.activeTarget&&q(L.activeTarget)}),window.addEventListener("scroll",()=>{L.activeTarget&&q(L.activeTarget)},!0),window.addEventListener("resize",()=>{L.activeTarget&&q(L.activeTarget)})}function ne(){for(;t.length;){const s=t.pop();typeof s=="function"&&s()}t.push(z(s=>s._meta&&[s._meta.isSaving,s._meta.isDirty,s._meta.lastSaveAt].join("|"),()=>P("hud"))),t.push(z(s=>s._meta?s._meta.syncRevision:0,(s,d)=>{s!==d&&P(Object.keys(Y))})),t.push(z(s=>s.ui?s.ui.modal:null,()=>P("modal"))),t.push(z(s=>s.ui?s.ui.moreMenuOpen:!1,()=>P(["mobileNav","mobileSheet"])))}const de={setView:Q,setTab:Q,setInventoryFilter:ce,setInventoryPage:be,setJournalPage:$e,toggleMoreMenu:k,showCombat:m,closeModal:e,hardReset:h};An(de,{systems:E,mutate:U,afterAction:j});function me(){const s=Date.now();let d=!1,q=!1;const K=l.player.hp,ae=l.player.energy,J=l.player.stamina;U("system/tick",()=>{const ie=u((s-l.lastTick)/1e3,0,document.hidden?30:5);l.lastTick=s,E.passiveRegen(ie),d=E.resolveFinishedTimers(s,document.hidden);const ke=Z();l.player.hp=u(l.player.hp,1,ke.maxHp),l.player.energy=u(l.player.energy,0,ke.maxEnergy),l.player.stamina=u(l.player.stamina,0,ke.maxStamina),q=l.player.hp!==K||l.player.energy!==ae||l.player.stamina!==J},{source:"tick",markDirty:!1}),(q||d)&&!c().isDirty&&S({isDirty:!0,lastSource:"tick"}),(!l.lastSave||s-l.lastSave>12e3)&&i(),!document.hidden&&((q||d)&&(W()||P("hud")),_(),d?(P(["content","modal"]),i()):l.ui.modal&&P("modal"),l.ui.moreMenuOpen&&P(["mobileNav","mobileSheet"]))}function a(){H&&clearInterval(H),H=window.setInterval(me,document.hidden?4e3:1e3)}function p(){const s=(location.hash||"").replace("#","").trim(),d=I.has(s)?s:l.currentView||"resumen";Q(d,{skipHash:!1,keepScroll:!0})}function $(){const s=(location.hash||"").replace("#","").trim();I.has(s)&&s!==l.currentView&&Q(s,{skipHash:!0})}function A(s){if(s.key!==r||s.newValue===s.oldValue)return;f(s.newValue)&&(P(Object.keys(Y)),E.toast("Partida sincronizada desde otra pestana","cyan"))}function O(){w(),R(),U("system/offlineCatchup:init",()=>{E.offlineCatchup()},{source:"lifecycle"}),ne(),p(),P(Object.keys(Y)),i(),a(),window.addEventListener("hashchange",$),document.addEventListener("visibilitychange",()=>{a(),document.hidden||(U("system/offlineCatchup:resume",()=>{E.offlineCatchup()},{source:"lifecycle"}),P(["hud","content","modal"]))}),window.addEventListener("storage",A),window.addEventListener("pagehide",()=>i(!0)),window.addEventListener("beforeunload",()=>i(!0))}window.game=de,window.AetherController={queueRender:P,setView:Q,closeModal:e,showCombat:m,scheduleSave:i},O()})();
