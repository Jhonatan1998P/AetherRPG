(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))M(c);new MutationObserver(c=>{for(const T of c)if(T.type==="childList")for(const H of T.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&M(H)}).observe(document,{childList:!0,subtree:!0});function v(c){const T={};return c.integrity&&(T.integrity=c.integrity),c.referrerPolicy&&(T.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?T.credentials="include":c.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function M(c){if(c.ep)return;c.ep=!0;const T=v(c);fetch(c.href,T)}})();const It=["weapon","offhand","helm","chest","gloves","boots","ring","amulet"],Ha={weapon:"Arma",offhand:"Mano izquierda",helm:"Casco",chest:"Armadura",gloves:"Guantes",boots:"Botas",ring:"Anillo",amulet:"Amuleto"},Fa=[{title:"Novato del Bronce",min:0},{title:"Aspirante de Arena",min:90},{title:"Centurion de Cristal",min:220},{title:"Campeon del Foro",min:420},{title:"Idolo de la Ciudad",min:720},{title:"Verdugo Solar",min:1100},{title:"Coloso Astral",min:1600},{title:"Inmortal del Panteon",min:2300}],_a=[{key:"common",name:"Comun",order:0,mult:1,affixes:0,valueBase:20,value:20,dropWeightBySource:{arena:52,dungeon:37,expedition:44,market:39,forge:24},salvageProfile:{iron:1,wood:1,essence:0,sigils:0,echoShards:0,affixWeight:.06,upgradeWeight:.05},upgradeCaps:{enhance:5,reforge:2,transcend:!1},milestone:!1},{key:"uncommon",name:"Infrecuente",order:1,mult:1.16,affixes:1,valueBase:48,value:48,dropWeightBySource:{arena:28,dungeon:26,expedition:29,market:30,forge:32},salvageProfile:{iron:2,wood:1,essence:0,sigils:0,echoShards:0,affixWeight:.08,upgradeWeight:.07},upgradeCaps:{enhance:7,reforge:3,transcend:!0},milestone:!1},{key:"rare",name:"Raro",order:2,mult:1.44,affixes:2,valueBase:124,value:124,dropWeightBySource:{arena:12,dungeon:18,expedition:15,market:18,forge:27},salvageProfile:{iron:3,wood:2,essence:1,sigils:0,echoShards:0,affixWeight:.11,upgradeWeight:.09},upgradeCaps:{enhance:9,reforge:4,transcend:!0},milestone:!1},{key:"epic",name:"Epico",order:3,mult:1.82,affixes:3,valueBase:332,value:332,dropWeightBySource:{arena:5,dungeon:10,expedition:7,market:9,forge:12},salvageProfile:{iron:5,wood:3,essence:2,sigils:1,echoShards:0,affixWeight:.13,upgradeWeight:.1},upgradeCaps:{enhance:11,reforge:5,transcend:!0},milestone:!0},{key:"legendary",name:"Legendario",order:4,mult:2.3,affixes:4,valueBase:890,value:890,dropWeightBySource:{arena:2.4,dungeon:5.1,expedition:3.1,market:3.5,forge:4.4},salvageProfile:{iron:7,wood:4,essence:4,sigils:2,echoShards:1,affixWeight:.15,upgradeWeight:.11},upgradeCaps:{enhance:12,reforge:6,transcend:!0},milestone:!1},{key:"mythic",name:"Mitico",order:5,mult:2.98,affixes:5,valueBase:2320,value:2320,dropWeightBySource:{arena:.55,dungeon:2.1,expedition:1.05,market:.9,forge:1.2},salvageProfile:{iron:9,wood:5,essence:6,sigils:4,echoShards:2,affixWeight:.17,upgradeWeight:.12},upgradeCaps:{enhance:14,reforge:7,transcend:!0},milestone:!0},{key:"ascendant",name:"Ascendente",order:6,mult:3.62,affixes:6,valueBase:5480,value:5480,dropWeightBySource:{arena:.08,dungeon:.35,expedition:.18,market:.06,forge:.15},salvageProfile:{iron:12,wood:6,essence:9,sigils:7,echoShards:4,affixWeight:.2,upgradeWeight:.14},upgradeCaps:{enhance:16,reforge:8,transcend:!1},milestone:!1}],Ga=["arena","dungeon","expedition","market","forge"],Wa={weapon:{slot:"weapon",role:"offensive",primaryStats:["attack","crit","speed"],secondaryStats:["lifesteal","hp"],statWeights:{attack:1.35,crit:.78,speed:.7,lifesteal:.48,hp:.36,defense:.25},qualityBias:1.12},offhand:{slot:"offhand",role:"hybrid",primaryStats:["defense","hp","block"],secondaryStats:["attack","crit"],statWeights:{defense:1.22,hp:.92,block:.68,attack:.62,crit:.3,speed:.38},qualityBias:1},helm:{slot:"helm",role:"defensive",primaryStats:["defense","hp"],secondaryStats:["crit","speed"],statWeights:{defense:1.08,hp:.88,crit:.34,speed:.3,block:.46},qualityBias:.98},chest:{slot:"chest",role:"defensive",primaryStats:["hp","defense"],secondaryStats:["attack","block"],statWeights:{hp:1.26,defense:1.14,attack:.42,block:.55,lifesteal:.21},qualityBias:1.03},gloves:{slot:"gloves",role:"offensive",primaryStats:["attack","crit","lifesteal"],secondaryStats:["speed","hp"],statWeights:{attack:1.04,crit:.74,lifesteal:.56,speed:.58,hp:.32,defense:.26},qualityBias:1.05},boots:{slot:"boots",role:"hybrid",primaryStats:["speed","dodge"],secondaryStats:["defense","hp"],statWeights:{speed:1.1,dodge:.76,defense:.46,hp:.42,crit:.33,attack:.36},qualityBias:1},ring:{slot:"ring",role:"offensive",primaryStats:["crit","attack"],secondaryStats:["speed","dodge"],statWeights:{crit:.95,attack:.78,speed:.56,dodge:.5,hp:.35,defense:.28},qualityBias:1.08},amulet:{slot:"amulet",role:"hybrid",primaryStats:["hp","attack","defense"],secondaryStats:["block","lifesteal"],statWeights:{hp:1.02,attack:.82,defense:.7,block:.56,lifesteal:.44,crit:.34},qualityBias:1.04}},Ja={weapon:1.24,offhand:1.08,helm:.98,chest:1.16,gloves:.94,boots:.96,ring:.92,amulet:1},Za={common:.92,uncommon:1.04,rare:1.22,epic:1.46,legendary:1.76,mythic:2.15,ascendant:2.62},Ua=Object.fromEntries(It.map(s=>{const o={},v=Ja[s]||1;for(let M=1;M<=90;M+=1){const c=(12+Math.pow(M,1.2)*4.8)*v;o[M]=Object.fromEntries(Object.entries(Za).map(([T,H])=>[T,Math.round(c*H)]))}return[s,o]})),Ka={weapon:[{name:"Gladius",stats:{attack:7,speed:1}},{name:"Hacha de Coliseo",stats:{attack:9,defense:1}},{name:"Tridente del Foro",stats:{attack:8,crit:.02}},{name:"Espada Curva",stats:{attack:8,speed:2}},{name:"Lanza Escarlata",stats:{attack:10,crit:.01}}],offhand:[{name:"Escudo de Torre",stats:{defense:7,hp:18,block:.03}},{name:"Parma Ligera",stats:{defense:5,speed:2,block:.02}},{name:"Daga de Mano",stats:{attack:5,crit:.03}},{name:"Brazal Solar",stats:{defense:4,hp:10,crit:.01}}],helm:[{name:"Yelmo de Bronce",stats:{defense:5,hp:14}},{name:"Mascara del Duelo",stats:{defense:4,crit:.02}},{name:"Casco de Placas",stats:{defense:6,hp:10}},{name:"Corona de Hierro",stats:{hp:18,speed:1}}],chest:[{name:"Coraza Segmentada",stats:{defense:9,hp:28}},{name:"Pectoral de Guerra",stats:{defense:11,hp:22}},{name:"Tunica Blindada",stats:{defense:7,speed:2,hp:20}},{name:"Arnes del Leon",stats:{attack:4,defense:8,hp:18}}],gloves:[{name:"Guanteletes de Malla",stats:{defense:4,attack:2}},{name:"Guantes de Cazador",stats:{crit:.02,speed:1}},{name:"Mitones de Arena",stats:{attack:3,hp:8}},{name:"Brazales de Sangre",stats:{attack:4,lifesteal:.01}}],boots:[{name:"Grebas Reforzadas",stats:{defense:4,speed:1}},{name:"Sandalias de Arena",stats:{speed:3,dodge:.02}},{name:"Botas de Marcha",stats:{hp:10,speed:2}},{name:"Botas de Acecho",stats:{speed:2,crit:.01}}],ring:[{name:"Anillo de Plata",stats:{crit:.02,attack:2}},{name:"Sello del Foro",stats:{defense:3,hp:8}},{name:"Aro Solar",stats:{attack:3,speed:1}},{name:"Sortija Vital",stats:{hp:16}}],amulet:[{name:"Amuleto del Leon",stats:{attack:3,hp:10}},{name:"Talisman de Marmol",stats:{defense:3,block:.01}},{name:"Colgante del Alba",stats:{crit:.02,hp:8}},{name:"Medallon del Eco",stats:{speed:2,dodge:.01}}]},Ya=[{prefix:"Furioso",stats:{attack:2}},{prefix:"Certero",stats:{crit:.02}},{prefix:"Agil",stats:{speed:2}},{prefix:"Imponente",stats:{hp:18}},{prefix:"Bastion",stats:{defense:3}},{prefix:"Sanguineo",stats:{lifesteal:.015}},{suffix:"del Coloso",stats:{hp:24,defense:2}},{suffix:"de la Tempestad",stats:{speed:2,crit:.01}},{suffix:"de la Caza",stats:{attack:3,crit:.01}},{suffix:"del Vigia",stats:{defense:4,block:.015}},{suffix:"de los Antiguos",stats:{hp:16,attack:2}},{suffix:"del Eclipse",stats:{attack:3,speed:1,crit:.01}}],Qa=[{id:0,name:"Distrito de Arena",unlockLevel:1,energyCost:7,staminaCost:1,theme:"Callejones y plazas del coliseo",enemies:["Rufian del Foro","Apostador Violento","Mercenario de Bronce","Ladron de Tuneles"],boss:"Campeon de Grava"},{id:1,name:"Bosque Sangriento",unlockLevel:4,energyCost:9,staminaCost:1,theme:"Bestias y cazadores en la niebla",enemies:["Jabali Enloquecido","Cazador Sombrio","Tigre de Jaula","Bandido del Roble"],boss:"Gran Acechador Berkan"},{id:2,name:"Catacumbas Rotas",unlockLevel:8,energyCost:11,staminaCost:2,theme:"No muertos, guardianes y reliquias",enemies:["Esqueleto Vetusto","Fanatico de Cripta","Necrofago Roto","Guardia del Osario"],boss:"Pontifice de Hueso"},{id:3,name:"Dunas de Onice",unlockLevel:12,energyCost:13,staminaCost:2,theme:"Bestias solares y caravanas saqueadas",enemies:["Saqueador de Caravana","Escorpion de Brasa","Jinete del Viento","Chaman del Datil Negro"],boss:"Anhur, el Sol Partido"},{id:4,name:"Fortaleza del Eclipse",unlockLevel:16,energyCost:16,staminaCost:2,theme:"Caballeros caidos y maquinas de guerra",enemies:["Guardia Obsidiana","Verdugo del Eclipse","Ballestero Negro","Ingeniero del Asedio"],boss:"General Varzok"},{id:5,name:"Necropolis del Hierro",unlockLevel:21,energyCost:18,staminaCost:3,theme:"Automatas, espectros y altares profanos",enemies:["Arconte Ferrum","Espectro de Cadena","Mecanico Sacrilego","Profanador del Trono"],boss:"Maquina-Rey Nax"},{id:6,name:"Fisura Astral",unlockLevel:27,energyCost:21,staminaCost:3,theme:"Entidades del vacio y gloria absoluta",enemies:["Segador del Vacio","Centinela Astral","Bestia Prismatica","Oraculo Corrupto"],boss:"Aion, Devorador de Ecos"}],Xa=[{id:"guardia",name:"Guardia del Foro",duration:45,reward:{gold:120,xp:25,food:1},desc:"Patrulla, disciplina y monedas seguras."},{id:"mercante",name:"Estiba de Mercaderes",duration:75,reward:{gold:190,xp:40,wood:2,iron:1},desc:"Carga mercancias y quedate con una comision."},{id:"arena",name:"Espectaculo Menor",duration:120,reward:{gold:320,xp:70,essence:1,potions:1},desc:"Show de arena, apuestas y fama barata."}],en=[{id:"wolf",name:"Lobo de Guerra",icon:"paw",desc:"Aumenta el dano y el critico.",bonus:{attackPct:.08,crit:.03}},{id:"phoenix",name:"Fenix de Ceniza",icon:"flame",desc:"Mas vida, regeneracion y esencia.",bonus:{hpPct:.1,regenPct:.15}},{id:"golem",name:"Golem de Basalto",icon:"shield",desc:"Defensa bruta y bloqueo.",bonus:{defensePct:.1,block:.03}},{id:"panther",name:"Pantera Crepuscular",icon:"spark",desc:"Velocidad, esquiva y golpes finos.",bonus:{speedPct:.08,dodge:.03}},{id:"raven",name:"Cuervo del Oraculo",icon:"feather",desc:"Mas oro, mejor botin y vision.",bonus:{goldPct:.08,lootLuck:.06}}],tn={powerStrike:{id:"powerStrike",name:"Golpe devastador",desc:"Ataque de gran multiplicador.",unlockLevel:1,cooldown:3,mult:1.75},quickLunge:{id:"quickLunge",name:"Estocada veloz",desc:"Golpe rapido con extra de critico.",unlockLevel:1,cooldown:2,mult:1.15,critBonus:.14},fortify:{id:"fortify",name:"Guardia de acero",desc:"Golpeas y elevas tu defensa temporalmente.",unlockLevel:1,cooldown:5,mult:.82,selfBuff:{defensePct:.24,turns:2,shieldPct:.08}},shieldBash:{id:"shieldBash",name:"Embestida de escudo",desc:"Rompe la defensa rival. Requiere mano izquierda.",unlockLevel:5,cooldown:4,mult:1.32,requireOffhand:!0,armorBreak:{pct:.18,turns:2}},bloodRage:{id:"bloodRage",name:"Rabia sanguinea",desc:"Gran drenaje de vida en el impacto.",unlockLevel:7,cooldown:5,mult:1.38,lifestealBonus:.35},whirlwind:{id:"whirlwind",name:"Torbellino",desc:"Dos impactos consecutivos.",unlockLevel:9,cooldown:5,mult:.88,hits:2},execution:{id:"execution",name:"Ejecucion",desc:"Hace muchisimo mas dano a enemigos debilitados.",unlockLevel:12,cooldown:4,mult:1.2,executeThreshold:.35,executeMult:1.85},venomCut:{id:"venomCut",name:"Corte toxico",desc:"Aplica dano persistente.",unlockLevel:14,cooldown:4,mult:1.08,dot:{turns:3,ratio:.18,label:"Veneno"}},berserk:{id:"berserk",name:"Berserk",desc:"Te buffas y golpeas con furia.",unlockLevel:17,cooldown:6,mult:1.25,selfBuff:{attackPct:.22,defensePct:-.1,turns:3}},celestialEdge:{id:"celestialEdge",name:"Filo celestial",desc:"Golpe definitivo con alto critico.",unlockLevel:22,cooldown:7,mult:2.25,critBonus:.28}},an=[{id:"kills50",title:"Carne de Arena",desc:"Derrota 50 enemigos.",type:"kills",target:50,reward:{gold:250,shards:2}},{id:"wins25",title:"Favor del Publico",desc:"Gana 25 combates de arena.",type:"wins",target:25,reward:{gold:300,essence:3}},{id:"quest10",title:"Contratista",desc:"Completa 10 misiones.",type:"questsCompleted",target:10,reward:{gold:400,shards:3}},{id:"floor5",title:"Delvador",desc:"Alcanza el piso 5 de las mazmorras.",type:"highestDungeonFloor",target:5,reward:{gold:450,keys:2}},{id:"level10",title:"Veterano",desc:"Llega al nivel 10.",type:"level",target:10,reward:{gold:500,potions:2,essence:4}},{id:"legendary1",title:"Resplandor Dorado",desc:"Consigue 1 objeto legendario.",type:"legendaryFound",target:1,reward:{shards:4,gold:500}},{id:"mythic1",title:"Sello de la Noche",desc:"Consigue 1 objeto mitico.",type:"mythicFound",target:1,reward:{sigils:2,shards:6,gold:800}},{id:"ascendant1",title:"Llama Ascendente",desc:"Consigue 1 objeto ascendente.",type:"ascendantFound",target:1,reward:{echoShards:2,sigils:4,gold:1400}},{id:"guild8",title:"Constructor",desc:"Invierte 8 niveles de gremio en total.",type:"guildTotal",target:8,reward:{gold:700,essence:5}},{id:"ascend1",title:"Mas alla del polvo",desc:"Asciende una vez.",type:"ascension",target:1,reward:{relicDust:3,shards:5}}],nn=[["resumen","Resumen"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],jt=[["resumen","Resumen"],["perfil","Perfil"],["inventario","Inventario"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],rn={resumen:{label:"Resumen",short:"Bucle principal",desc:"Vista rápida del ciclo principal, contratos y accesos clave.",icon:"home"},perfil:{label:"Perfil",short:"Gladiador",desc:"Identidad, equipo, rango, zona y estadísticas del héroe.",icon:"user"},inventario:{label:"Inventario",short:"Bolsa y equipo",desc:"Gestiona la mochila, filtra piezas y equipa mejoras.",icon:"backpack"},arena:{label:"Arena",short:"Combate rápido",desc:"Duelo instantáneo, élites y rachas de farmeo.",icon:"swords"},expedicion:{label:"Expediciones",short:"Temporizadores",desc:"Rutas en segundo plano con botín y materiales.",icon:"compass"},mazmorra:{label:"Mazmorras",short:"Pisos y jefes",desc:"Runs por pisos con jefe y cofre.",icon:"castle"},mercado:{label:"Mercado",short:"Compra y venta",desc:"Rotación de equipo y consumibles.",icon:"cart"},forja:{label:"Forja",short:"Creación y mejora",desc:"Creación de piezas y mejoras directas.",icon:"hammer"},gremio:{label:"Gremio",short:"Bonos pasivos",desc:"Mejoras permanentes de la partida.",icon:"shield"},entrenamiento:{label:"Entrenamiento",short:"Atributos y habilidades",desc:"Atributos, habilidades y especialización.",icon:"book"},trabajo:{label:"Trabajo",short:"Ingresos seguros",desc:"Ocupaciones temporizadas con retorno estable.",icon:"briefcase"},mascota:{label:"Mascota",short:"Compañero",desc:"Bonos únicos y progresión auxiliar.",icon:"paw"},logros:{label:"Logros",short:"Metaprogresión",desc:"Hitos, reliquias y ascensión.",icon:"trophy"},diario:{label:"Diario",short:"Registro",desc:"Historial de eventos y actividad reciente.",icon:"scroll"}},sn=[{title:"Principal",views:["resumen","perfil","inventario","arena"]},{title:"Aventura",views:["expedicion","mazmorra"]},{title:"Economía",views:["mercado","forja","trabajo"]},{title:"Progreso",views:["gremio","entrenamiento","mascota","logros"]},{title:"Registro",views:["diario"]}],Lt=["resumen","perfil","inventario","arena"],on=jt.map(([s])=>s).filter(s=>!Lt.includes(s)),ln="aether_arena_pbbg_v3";window.AetherConfig={STORAGE_KEY:ln,SLOT_ORDER:It,SLOT_NAMES:Ha,TABS:nn,VIEWS:jt,VIEW_META:rn,VIEW_GROUPS:sn,MOBILE_PRIMARY_VIEWS:Lt,MOBILE_OVERFLOW_VIEWS:on,RANKS:Fa,RARITIES:_a,LOOT_SOURCES:Ga,ITEM_BASES:Ka,ITEM_ARCHETYPES:Wa,STAT_BUDGETS:Ua,AFFIXES:Ya,ZONES:Qa,JOBS:Xa,PETS:en,SKILLS:tn,ACHIEVEMENTS:an};(()=>{const{RARITIES:s,ITEM_BASES:o}=window.AetherConfig;let v=1;const M=A=>document.getElementById(A),c=[...s].sort((A,i)=>A.order-i.order),T=Object.fromEntries(c.map((A,i)=>[A.key,i])),H=A=>JSON.parse(JSON.stringify(A)),B=(A,i)=>Math.floor(Math.random()*(i-A+1))+A,l=(A,i)=>Math.random()*(i-A)+A,R=A=>A[Math.floor(Math.random()*A.length)],Y=(A,i,X)=>Math.min(X,Math.max(i,A)),W=A=>A.reduce((i,X)=>i+X,0),z=()=>`${Date.now().toString(36)}_${(v++).toString(36)}_${B(100,999)}`,f={attack:{label:"Ataque",tip:"Aumenta el daño base que infliges en combate."},defense:{label:"Defensa",tip:"Reduce parte del daño recibido en cada impacto."},speed:{label:"Velocidad",tip:"Mejora la iniciativa y el ritmo de tus acciones."},hp:{label:"Vida máxima",tip:"Determina la cantidad total de salud disponible."},crit:{label:"Golpe crítico",tip:"Probabilidad de infligir daño crítico aumentado."},dodge:{label:"Esquiva",tip:"Probabilidad de evitar por completo un golpe enemigo."},block:{label:"Bloqueo",tip:"Probabilidad de mitigar una parte importante del daño."},lifesteal:{label:"Robo de vida",tip:"Porcentaje del daño convertido en curación propia."},attackPct:{label:"Ataque %",tip:"Multiplicador porcentual al ataque base."},defensePct:{label:"Defensa %",tip:"Multiplicador porcentual a la defensa base."},hpPct:{label:"Vida %",tip:"Multiplicador porcentual a la vida máxima."},speedPct:{label:"Velocidad %",tip:"Multiplicador porcentual a la velocidad base."},goldPct:{label:"Oro %",tip:"Incrementa el oro obtenido en actividades."},lootLuck:{label:"Suerte de botín",tip:"Mejora ligeramente la calidad y la frecuencia del botín."},regenPct:{label:"Regeneración %",tip:"Incrementa la recuperación pasiva de recursos."}},J={common:{name:"Común",tone:"text-slate-200 border-white/10 bg-white/[0.04]"},uncommon:{name:"Infrecuente",tone:"text-emerald-200 border-emerald-300/20 bg-emerald-400/10"},rare:{name:"Raro",tone:"text-sky-200 border-sky-300/24 bg-sky-400/10"},epic:{name:"Épico",tone:"text-violet-200 border-violet-300/24 bg-violet-400/10"},legendary:{name:"Legendario",tone:"text-amber-200 border-amber-300/24 bg-amber-400/10"},mythic:{name:"Mítico",tone:"text-fuchsia-200 border-fuchsia-300/24 bg-fuchsia-400/10"},ascendant:{name:"Ascendente",tone:"text-orange-100 border-orange-300/26 bg-gradient-to-r from-orange-500/20 to-rose-400/20 shadow-[0_0_18px_rgba(251,146,60,.28)]"}},N={all:"Todo",weapon:"Armas",offhand:"Mano izquierda",helm:"Cascos",chest:"Armaduras",gloves:"Guantes",boots:"Botas",ring:"Anillos",amulet:"Amuletos",common:"Común",uncommon:"Infrecuente",rare:"Raro",epic:"Épico",legendary:"Legendario",mythic:"Mítico",ascendant:"Ascendente"};function d(A,i=0){return Number(A||0).toLocaleString("es-ES",{maximumFractionDigits:i})}function k(A){return`${d((A||0)*100,1)}%`}function g(A=""){return String(A).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function E(A=""){const i=String(A),X=[];let K=i;return[/<\/?b>/gi,/<br\s*\/?>/gi,/<span class="rarity-(common|uncommon|rare|epic|legendary|mythic|ascendant)">/gi,/<\/span>/gi].forEach(be=>{K=K.replace(be,$e=>{const S=`__SAFE_HTML_${X.length}__`;return X.push({token:S,match:$e}),S})}),K=g(K),X.forEach(({token:be,match:$e})=>{K=K.replace(be,$e)}),K}function D(A,i=2){return Number(A.toFixed(i))}function I(A){return(f[A]||{}).label||A}function U(A){return(f[A]||{}).tip||""}function $(A){return(J[A]||J.common).name}function y(A){const i=J[A]||J.common;return`<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.14em] ${i.tone}">${i.name}</span>`}function t(A){return N[A]||A}function L(A,i,X="",K=""){return`
      <div class="stat-pill rounded-2xl px-3 py-3"${K?` data-tooltip="${String(K).replace(/"/g,"&quot;")}"`:""}>
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/70">${A}</div>
        <div class="text-lg font-display font-extrabold tracking-[0.01em] text-white">${i}</div>
        ${X?`<div class="mt-1 text-xs leading-relaxed text-slate-300/65">${X}</div>`:""}
      </div>
    `}function se(A,i,X,K,le=""){const be=i<=0?0:Y(A/i*100,0,100);return`
      <div${le?` data-tooltip="${String(le).replace(/"/g,"&quot;")}"`:""}>
        <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
          <span class="font-medium tracking-[0.01em]">${K}</span>
          <span class="font-semibold text-slate-100">${d(A,A%1?1:0)} / ${d(i,i%1?1:0)}</span>
        </div>
        <div class="bar">
          <span class="relative flex h-full rounded-full ${X}" style="width:${be}%">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
          </span>
        </div>
      </div>
    `}function _(A){return c.find(i=>i.key===A)||c[0]}function O(A){return T[A]??0}function fe(A=0){const i=Y(Math.round(A),0,c.length-1);return c[i].key}function xe(A,i=1){return fe(O(A)+i)}function ie(A,i=null){const X=(A||[]).filter(be=>be&&be.weight>0);if(!X.length)return i;const K=X.reduce((be,$e)=>be+$e.weight,0);let le=Math.random()*K;for(let be=0;be<X.length;be+=1)if(le-=X[be].weight,le<=0)return X[be].value;return X[X.length-1].value}function P(A,i){return!i||typeof i!="object"||Object.keys(i).forEach(X=>{const K=i[X];Array.isArray(K)?A[X]=K:K&&typeof K=="object"?((!A[X]||typeof A[X]!="object"||Array.isArray(A[X]))&&(A[X]={}),P(A[X],K)):A[X]=K}),A}function F(){return{attack:0,defense:0,speed:0,hp:0,crit:0,dodge:0,block:0,lifesteal:0,attackPct:0,defensePct:0,hpPct:0,speedPct:0,goldPct:0,lootLuck:0,regenPct:0}}function Z(A,i){return Object.keys(i||{}).forEach(X=>{A[X]=(A[X]||0)+i[X]}),A}function ge(A=Date.now()){const i=new Date(A),X=i.getFullYear(),K=String(i.getMonth()+1).padStart(2,"0"),le=String(i.getDate()).padStart(2,"0");return`${X}-${K}-${le}`}function pe(A){const i=Math.max(0,A-Date.now()),X=Math.ceil(i/1e3),K=Math.floor(X/60),le=X%60;return K?`${K}m ${String(le).padStart(2,"0")}s`:`${le}s`}function he(A=1,i=0){const X=typeof i=="number"?{bonusLuck:i}:i||{},K=X.source||"arena",le=Math.max(0,X.bonusLuck||X.lootLuck||0),be=X.pity||{},$e=c.map(S=>{const e=S.dropWeightBySource&&typeof S.dropWeightBySource[K]=="number"?S.dropWeightBySource[K]:S.dropWeightBySource&&typeof S.dropWeightBySource.arena=="number"?S.dropWeightBySource.arena:1,m=S.order||0,h=1+Math.min(.72,Math.max(0,A-1)*.011*Math.max(0,m-1)),j=1+(m<=1?le*.28:le*(.72+m*.28)),w=S.key==="epic"?Math.min(3.4,(be.epic||0)*.065):0,ne=S.key==="mythic"?Math.min(4.2,(be.mythic||0)*.052):0,ce=S.key==="ascendant"?Math.min(1.2,(be.ascendant||0)*.02):0;let ue=1;return A<10&&m>=3&&(ue*=.4),A<18&&m>=4&&(ue*=.35),A<26&&m>=5&&(ue*=.22),A<38&&m>=6&&(ue*=.08),(X.ascension||0)<=0&&m>=6&&(ue*=.52),{value:S,weight:Math.max(1e-4,e*h*(1+w+ne+ce)*ue*Math.max(.2,j))}});return ie($e,_("common"))||_("common")}function me(A,i){return(o[A]||[]).find(X=>X.name===i)||R(o[A]||[])}function de(A,i){return A+Math.max(0,Math.floor(i/4))*.85}window.AetherUtils={$:M,clone:H,rand:B,randf:l,pick:R,clamp:Y,sum:W,uid:z,fmt:d,pct:k,escapeHtml:g,sanitizeInlineHtml:E,softRound:D,statLabel:I,statTooltip:U,rarityName:$,rarityBadge:y,translateFilter:t,htmlStat:L,progressBar:se,rarityDef:_,rarityOrder:O,rarityKeyByOrder:fe,nextRarityKey:xe,weightedPick:ie,deepMerge:P,emptyStats:F,addStats:Z,localDayKey:ge,timeLeft:pe,pickRarity:he,findBaseItem:me,scaledStatValue:de}})();const At=s=>{let o;const v=new Set,M=(R,Y)=>{const W=typeof R=="function"?R(o):R;if(!Object.is(W,o)){const z=o;o=Y??(typeof W!="object"||W===null)?W:Object.assign({},o,W),v.forEach(f=>f(o,z))}},c=()=>o,B={setState:M,getState:c,getInitialState:()=>l,subscribe:R=>(v.add(R),()=>v.delete(R))},l=o=s(M,c,B);return B},cn=s=>s?At(s):At,dn=s=>(o,v,M)=>{const c=M.subscribe;return M.subscribe=(H,B,l)=>{let R=H;if(B){const Y=(l==null?void 0:l.equalityFn)||Object.is;let W=H(M.getState());R=z=>{const f=H(z);if(!Y(W,f)){const J=W;B(W=f,J)}},l!=null&&l.fireImmediately&&B(W,W)}return c(R)},s(o,v,M)},un=dn,Ke=new Set(["crit","dodge","block","lifesteal"]);function pn(s){const{ITEM_BASES:o,ITEM_ARCHETYPES:v,STAT_BUDGETS:M,SLOT_ORDER:c,AFFIXES:T,pick:H,rand:B,uid:l,softRound:R,clamp:Y,rarityDef:W,rarityOrder:z,pickRarity:f,findBaseItem:J,scaledStatValue:N,getLootLuck:d,getNow:k}=s,g=typeof k=="function"?k:()=>Date.now(),E={attack:2.25,defense:1.92,speed:1.38,hp:.16,crit:132,dodge:94,block:84,lifesteal:146},D={arena:{epic:14,mythic:110},dungeon:{epic:9,mythic:72},expedition:{epic:11,mythic:86},market:{epic:8,mythic:64},forge:{epic:5,mythic:34}};function I(e,m,h=0){return R(e+Math.max(0,m-1)*52e-5+h*.0014,4)}function U(e,m,h){if(Ke.has(e)){const j=1+(h-1)*.44;return R(m*j,4)}return R(m*h,2)}function $(e){return R(Object.entries(e||{}).reduce((m,[h,j])=>m+(E[h]||.8)*j,0),2)}function y(e,m){return((v[e]||{}).statWeights||{})[m]||.32}function t(e,m,h){const j=Y(Math.round(m||1),1,90),w=M[e]||{},ne=w[j]||w[1]||{};return ne[h]||ne.common||12}function L(e={}){if(typeof e.qualityRoll=="number")return Y(e.qualityRoll,.82,1.24);const m=e.source==="forge"?.1:e.source==="dungeon"?.06:e.source==="market"?.03:0,h=Math.min(.14,(e.lootLuck||0)*.28);return R(Y(.9+m+h+Math.random()*.2,.82,1.24),3)}function se(e={}){if(e.itemLevel)return Math.max(1,Math.round(e.itemLevel));const m=Math.max(1,Math.round(e.playerLevel||1)),h=Math.max(0,Math.round(e.zoneId||0)),j=e.source==="dungeon"?2:e.source==="forge"||e.source==="market"?1:0,w=e.enemyKind==="boss"?3:e.enemyKind==="elite"?2:0;return Math.max(1,m+h+j+w+B(-1,2))}function _(e={}){if(e.slot&&c.includes(e.slot))return e.slot;if(!e.smartLoot||!e.equipment)return H(c);const m=c.map(w=>{const ne=e.equipment[w],ce=1;if(!ne)return{slot:w,weight:ce+1.9};const ue=ne.score||F(ne),a=(e.playerLevel||1)*56,p=Math.max(0,a-ue);return{slot:w,weight:ce+Math.min(2.6,p/Math.max(120,a))}}),h=m.reduce((w,ne)=>w+ne.weight,0);let j=Math.random()*h;for(let w=0;w<m.length;w+=1)if(j-=m[w].weight,j<=0)return m[w].slot;return m[m.length-1].slot}function O(e,m){return m&&z(e)<z(m)?m:e}function fe(e,m={}){const h=m.bySource&&m.bySource[e]||{};return{epic:h.epic||m.epic||0,mythic:h.mythic||m.mythic||0,ascendant:h.ascendant||m.ascendant||0,total:h.total||m.total||0}}function xe(e,m={},h){const j={...m||{},bySource:{...m&&m.bySource||{}}},w=j.bySource[e]||{epic:0,mythic:0,ascendant:0,total:0},ne=z(h)>=z("epic"),ce=z(h)>=z("mythic"),ue=h==="ascendant",a={epic:ne?0:(w.epic||0)+1,mythic:ce?0:(w.mythic||0)+1,ascendant:ue?0:(w.ascendant||0)+1,total:(w.total||0)+1,lastDropAt:g(),lastRarity:h};return j.bySource[e]=a,j.epic=a.epic,j.mythic=a.mythic,j.ascendant=a.ascendant,j.total=a.total,j}function ie(e={},m,h){const j={};return Object.entries(e).forEach(([w,ne])=>{const ce=Ke.has(w)?I(ne,m):N(ne,m);j[w]=U(w,ce,h.mult)}),j}function P(e){const m=be(e),h=R((m.attack||0)*E.attack+(m.defense||0)*E.defense+(m.speed||0)*E.speed+(m.hp||0)*E.hp+(m.crit||0)*E.crit+(m.dodge||0)*E.dodge+(m.block||0)*E.block+(m.lifesteal||0)*E.lifesteal,2),j=R(h*.55+(e.economyValue||0)*.24+(e.prestige||0)*.21,2),w=R(h*(.72+Math.min(.26,(e.qualityRoll||1)*.18))+Math.max(0,(e.powerBudget||0)-$(m))*.12,2);return{combatScore:h,marketScore:j,buildScore:w}}function F(e){return P(e).combatScore}function Z(e){const m=W(e.rarity),h=P(e),j=e.qualityRoll||1,w=(e.affixes||[]).length,ne=Math.max(12,Math.round((m.valueBase+e.itemLevel*12+h.combatScore*4.3)*(.82+j*.4)*(1+w*.055))),ce=Math.max(8,Math.round(ne*(.34+Math.min(.28,w*.03+(e.upgrade||0)*.016)))),ue=Math.max(1,Math.round((m.order+1)**2*48+e.itemLevel*3.2+w*36+Math.max(0,j-1)*180));return{economyValue:ne,craftValue:ce,prestige:ue,value:ne,combatScore:h.combatScore,marketScore:h.marketScore,buildScore:h.buildScore}}function ge(e){const m=Z(e);return e.economyValue=m.economyValue,e.craftValue=m.craftValue,e.prestige=m.prestige,e.value=m.value,e.combatScore=m.combatScore,e.marketScore=m.marketScore,e.buildScore=m.buildScore,e.score=m.combatScore,e}function pe(e){const m=$(e.stats),h=e.powerBudget||m;if(m<=h*1.1)return e;const j=Math.max(.84,h*1.08/Math.max(1,m));return Object.keys(e.stats||{}).forEach(w=>{e.stats[w]=U(w,e.stats[w],j)}),e}function he(e={}){const m=e.source||"arena",h=_(e),j=se(e),w=typeof e.lootLuck=="number"?e.lootLuck:d(),ne=fe(m,e.streakData||{}),ce=D[m]||D.arena,ue=ne.mythic>=ce.mythic?"mythic":ne.epic>=ce.epic?"epic":null;let a=e.forcedRarity?W(e.forcedRarity):f(j,{source:m,lootLuck:w,pity:ne,ascension:e.ascension||0});const p=O(a.key,e.minRarity||ue);a=W(p);const x=e.forcedBase?J(h,e.forcedBase):H(o[h]||[]),C=L(e),q=v[h]||{},r=t(h,j,a.key),u=Math.round(r*C*(q.qualityBias||1)),V=ie(x.stats,j,a),Q=$(V),ee=Y(u/Math.max(1,Q),.74,2.35);Object.keys(V).forEach(oe=>{const Se=.88+ee*.12+y(h,oe)*.34;V[oe]=U(oe,V[oe],Se)});const te={id:l(),slot:h,name:x.name,rarity:a.key,tier:a.order,level:j,itemLevel:j,baseName:x.name,stats:V,affixes:[],upgrade:0,powerBudget:u,qualityRoll:C,provenance:{source:m,zoneId:e.zoneId??null,enemyKind:e.enemyKind||null,playerLevel:e.playerLevel||j,ascension:e.ascension||0,createdAt:g()},lockFlags:{bound:!1,crafted:m==="forge",transcended:!1},createdAt:g(),reforge:0,transcend:0};return me(te,{...e,guaranteedAffixes:e.guaranteedAffixes||0}),pe(te),ge(te)}function me(e,m={}){const h=W(e.rarity),j=Math.max(0,Math.round(m.guaranteedAffixes||0)),w=e.qualityRoll>=1.16?1:0,ne=Math.min(7,h.affixes+j+w),ce=Math.max(0,h.affixes-(e.qualityRoll<.94?1:0)),ue=Y(B(ce,ne),0,7),a=new Set,p=[];for(let q=0;q<ue;q+=1){let r=0,u=H(T);for(;r<40&&a.has(u.prefix||u.suffix);)u=H(T),r+=1;a.add(u.prefix||u.suffix),p.push(u),Object.entries(u.stats||{}).forEach(([V,Q])=>{const ee=Ke.has(V)?I(Q,e.itemLevel):N(Q,e.itemLevel),te=Math.max(.16,(e.powerBudget-$(e.stats))/Math.max(1,e.powerBudget)),oe=Ke.has(V)?.64+te*.42+(e.qualityRoll-1)*.2:.72+te*.56+(e.qualityRoll-1)*.34,Se=U(V,ee,Math.max(.18,oe));e.stats[V]=R((e.stats[V]||0)+Se,Ke.has(V)?4:2)})}e.affixes=p.map(q=>q.prefix||q.suffix);const x=p.find(q=>q.prefix),C=p.find(q=>q.suffix);return e.name=[x?x.prefix:null,e.baseName,C?C.suffix:null].filter(Boolean).join(" "),ge(e)}function de(e,m,h=null,j=null,w=0){return he({source:"forge",slot:e,playerLevel:m,itemLevel:m,forcedRarity:h,forcedBase:j,guaranteedAffixes:w,qualityRoll:h==="common"?.9:void 0})}function A(e,m){const h=de(e,1,"common",m,0);return h.affixes=[],h.name=m,h.qualityRoll=.88,h.lockFlags={...h.lockFlags||{},starter:!0,crafted:!1},h.provenance={...h.provenance||{},source:"starter"},ge(h)}function i(e={}){const m=e.source||"arena",h=he(e),j=xe(m,e.streakData||{},h.rarity),w=fe(m,j);return{item:h,streakData:j,pityState:{source:m,epic:w.epic,mythic:w.mythic,ascendant:w.ascendant},milestone:{epic:h.rarity==="epic",mythic:h.rarity==="mythic"}}}function X(e){return{common:1,uncommon:1.14,rare:1.42,epic:1.92,legendary:2.76,mythic:4.1,ascendant:7.4}[e]||1}function K(e=1,m={}){const h=6+Math.min(3,Math.floor(e/10)),j=[];let w=m.streakData||{};for(let ce=0;ce<h;ce+=1){const ue=Y(1+ce*.04,1,1.28),a=i({source:"market",playerLevel:e,itemLevel:Math.max(1,e+B(-1,3)),lootLuck:m.lootLuck||0,smartLoot:!1,streakData:w,ascension:m.ascension||0});w=a.streakData;const p=a.item,x=1+Math.max(0,e-1)*.012,C=Math.round(p.economyValue*X(p.rarity)*ue*x);p.price=C,p.marketMeta={scarcity:X(p.rarity),rotationBias:ue,levelMod:x},j.push(p)}const ne=j.sort((ce,ue)=>(ue.marketScore||0)-(ce.marketScore||0));return m.returnMeta?{items:ne,streakData:w}:ne}function le(){return[A("helm","Yelmo de Bronce"),A("boots","Sandalias de Arena"),de("ring",1,"uncommon")]}function be(e){const m=e.itemLevel||e.level||1,h=Math.max(0,e.upgrade||0),j=Math.max(0,e.transcend||0),w=e.qualityRoll||1,ne=1+h*.085+j*.035+Math.max(0,w-1)*.16,ce={};return Object.entries(e.stats||{}).forEach(([ue,a])=>{Ke.has(ue)?ce[ue]=I(a,m,h+j):ce[ue]=R(a*ne,2)}),ce}function $e(e){const h=W(e.rarity).salvageProfile||{},j=(e.affixes||[]).length,w=e.itemLevel||e.level||1,ne=e.upgrade||0;return{iron:Math.max(1,Math.round((h.iron||1)+w*.07+j*(h.affixWeight||.05)*4+ne*(h.upgradeWeight||.05))),wood:Math.max(0,Math.round((h.wood||0)+w*.035+j*(h.affixWeight||.05)*2.2)),essence:Math.max(0,Math.round((h.essence||0)+j*(h.affixWeight||.05)*1.8+ne*.1)),sigils:Math.max(0,Math.round((h.sigils||0)+Math.max(0,w-18)*.02+ne*.08)),echoShards:Math.max(0,Math.round((h.echoShards||0)+Math.max(0,w-28)*.012+ne*.06))}}function S(e,m={}){if(!e||typeof e!="object")return null;const h=c.includes(e.slot)?e.slot:m.slot||c[0],j=W(e.rarity||m.rarity||"common"),w=Math.max(1,Math.round(e.itemLevel||e.level||m.itemLevel||1)),ne=Y(typeof e.qualityRoll=="number"?e.qualityRoll:1,.82,1.24),ce=Math.max(1,Math.round(e.powerBudget||t(h,w,j.key)*ne)),ue={...e,id:e.id||l(),slot:h,rarity:j.key,tier:typeof e.tier=="number"?e.tier:j.order,level:w,itemLevel:w,name:e.name||e.baseName||"Objeto sin nombre",baseName:e.baseName||e.name||"Base desconocida",stats:{...e.stats||{}},affixes:Array.isArray(e.affixes)?e.affixes:[],upgrade:Math.max(0,Math.round(e.upgrade||0)),reforge:Math.max(0,Math.round(e.reforge||0)),transcend:Math.max(0,Math.round(e.transcend||0)),qualityRoll:ne,powerBudget:ce,provenance:{source:e.provenance&&e.provenance.source?e.provenance.source:m.source||"legacy",zoneId:e.provenance&&e.provenance.zoneId!==void 0?e.provenance.zoneId:null,enemyKind:e.provenance&&e.provenance.enemyKind?e.provenance.enemyKind:null,playerLevel:e.provenance&&e.provenance.playerLevel?e.provenance.playerLevel:w,ascension:e.provenance&&e.provenance.ascension?e.provenance.ascension:0,createdAt:e.provenance&&e.provenance.createdAt?e.provenance.createdAt:e.createdAt||g()},lockFlags:{bound:!!(e.lockFlags&&e.lockFlags.bound),crafted:!!(e.lockFlags&&e.lockFlags.crafted),transcended:!!(e.lockFlags&&e.lockFlags.transcended),starter:!!(e.lockFlags&&e.lockFlags.starter)},createdAt:e.createdAt||g()};return pe(ue),ge(ue)}return{scaleItemStats:be,computeItemScores:P,computeItemScore:F,estimateSalvage:$e,makeItem:de,makeStarterItem:A,rollLoot:i,makeItemFromBudget:he,applyAffixesWithBudget:me,generateMarket:K,starterInventory:le,normalizeItem:S}}function mn(s){const{SLOT_ORDER:o,emptyStats:v,addStats:M,softRound:c,clamp:T}=s,H={sig:"",value:null};function B(k,g,E){if(k<=g)return k;const D=k-g;return g+D/(1+D*E)}function l(k,g,E=g*.66,D=6.5){const I=Math.max(0,k||0),U=B(I,E,D);return T(U,0,g)}function R(){H.sig="",H.value=null}function Y(k,g){const E=g(),D=v();if(!E||!k.player.petLevel)return D;const I=1+k.player.petLevel*.16;return Object.entries(E.bonus).forEach(([U,$])=>{D[U]=c((D[U]||0)+$*I,4)}),D}function W(k){const g=k.player.guild,E=v();return E.attackPct+=g.barracks*.03,E.defensePct+=g.barracks*.02,E.goldPct+=g.treasury*.08,E.hpPct+=g.sanctuary*.05,E.regenPct+=g.sanctuary*.08,E.lootLuck+=g.hunters*.05,E}function z(k){const g=k.player.relics,E=v();return E.attackPct+=g.wrath*.04,E.goldPct+=g.fortune*.05,E.lootLuck+=g.fortune*.03,E.hpPct+=g.vitality*.06,E.regenPct+=g.vitality*.06,E.speedPct+=g.momentum*.03,E}function f(k,g){const E=v();return o.forEach(D=>{const I=k.player.equipment[D];I&&M(E,g(I))}),E}function J(k){const g=k.player.training;return{attack:g.strength*2.2,defense:g.endurance*1.3,speed:g.agility*1.5,hp:g.endurance*16,crit:g.agility*.002,dodge:g.agility*.002,block:g.endurance*.0015,lifesteal:g.strength*8e-4}}function N(k,g){if(!k.player)return{attack:14,defense:10,speed:8,maxHp:140,crit:.06,dodge:.04,block:.03,lifesteal:0,maxEnergy:100,maxStamina:12,goldPct:0,lootLuck:0,regenPct:0};const{getPetData:E,scaleItemStats:D}=g,I=k.player,U=[I.level,I.baseStats.attack,I.baseStats.defense,I.baseStats.speed,I.baseStats.crit,I.baseStats.dodge,I.baseStats.block,I.baseStats.lifesteal,I.training.strength,I.training.agility,I.training.endurance,I.training.discipline,I.guild.barracks,I.guild.treasury,I.guild.sanctuary,I.guild.hunters,I.guild.arsenal,I.relics.wrath,I.relics.fortune,I.relics.vitality,I.relics.momentum,I.pet||"",I.petLevel||0,...o.map(X=>{const K=I.equipment[X];return K?`${K.id}:${K.level}:${K.upgrade||0}:${K.rarity}:${K.reforge||0}`:"-"})].join("|");if(H.sig===U&&H.value)return H.value;const $=I.level,y={attack:I.baseStats.attack+$*3.2,defense:I.baseStats.defense+$*2.45,speed:I.baseStats.speed+$*1.2,hp:120+$*34,crit:I.baseStats.crit,dodge:I.baseStats.dodge,block:I.baseStats.block,lifesteal:I.baseStats.lifesteal,maxEnergy:100+I.training.discipline*5+I.relics.momentum*10,maxStamina:12+Math.floor(I.training.discipline/4)+I.relics.momentum},t=f(k,D),L=J(k),se=W(k),_=z(k),O=Y(k,E);let fe=y.attack+(t.attack||0)+(L.attack||0),xe=y.defense+(t.defense||0)+(L.defense||0),ie=y.speed+(t.speed||0)+(L.speed||0),P=y.hp+(t.hp||0)+(L.hp||0);const F=(se.attackPct||0)+(_.attackPct||0)+(O.attackPct||0),Z=(se.defensePct||0)+(O.defensePct||0),ge=(se.hpPct||0)+(_.hpPct||0)+(O.hpPct||0),pe=(_.speedPct||0)+(O.speedPct||0);fe*=1+F,xe*=1+Z,P*=1+ge,ie*=1+pe;const he=Math.max(1,I.level+(I.ascension||0)*2);fe=B(fe,55+he*9.5,.0024),xe=B(xe,44+he*8.1,.0029),ie=B(ie,26+he*4.2,.0046),P=B(P,520+he*120,52e-5);const me=y.crit+(t.crit||0)+(L.crit||0)+(O.crit||0),de=y.dodge+(t.dodge||0)+(L.dodge||0)+(O.dodge||0),A=y.block+(t.block||0)+(L.block||0)+(O.block||0),i=y.lifesteal+(t.lifesteal||0)+(L.lifesteal||0);return H.sig=U,H.value={attack:c(fe,2),defense:c(xe,2),speed:c(ie,2),maxHp:Math.round(P),crit:c(l(me,.62,.36,8.2),4),dodge:c(l(de,.5,.31,9.8),4),block:c(l(A,.46,.29,10.2),4),lifesteal:c(l(i,.34,.18,11.4),4),maxEnergy:y.maxEnergy,maxStamina:y.maxStamina,goldPct:(se.goldPct||0)+(O.goldPct||0)+(_.goldPct||0),lootLuck:(se.lootLuck||0)+(O.lootLuck||0)+(_.lootLuck||0),regenPct:(se.regenPct||0)+(O.regenPct||0)+(_.regenPct||0)},H.value}function d(k,g){return k.player&&N(k,g).lootLuck||0}return{invalidateDerivedCache:R,petBonus:Y,getGuildBonus:W,getRelicBonus:z,getEquipmentBonus:f,getTrainingBonus:J,getDerivedStats:N,getLootLuck:d}}function fn(s){const{pick:o,uid:v,makeStarterItem:M,starterInventory:c,generateMarket:T}=s;function H(R){return Math.round(95+Math.pow(R,1.46)*48)}function B(R=1){const Y=[{type:"kills",title:"Barrido de rivales",desc:"Derrota enemigos en la arena.",target:7+Math.floor(R*1.6),reward:{gold:120+R*20,xp:60+R*14,essence:1}},{type:"wins",title:"Clamor del publico",desc:"Gana combates de arena.",target:4+Math.floor(R*.6),reward:{gold:140+R*24,xp:65+R*15,potions:1}},{type:"earnGold",title:"Bolsillos pesados",desc:"Obten oro por cualquier medio.",target:320+R*90,reward:{gold:150+R*22,xp:70+R*12,shards:1}},{type:"crafts",title:"Acero fresco",desc:"Forja o mejora equipo.",target:2+Math.floor(R/7),reward:{gold:180+R*18,xp:60+R*16,iron:3}},{type:"expeditions",title:"Rutas peligrosas",desc:"Completa expediciones.",target:2+Math.floor(R/8),reward:{gold:160+R*18,xp:72+R*14,wood:3}},{type:"dungeons",title:"Hedor profundo",desc:"Supera incursiones en mazmorra.",target:1+Math.floor(R/10),reward:{gold:220+R*18,xp:95+R*18,keys:1}},{type:"salvaged",title:"Chatarra util",desc:"Recicla equipo sobrante.",target:3+Math.floor(R/7),reward:{gold:130+R*18,xp:55+R*13,essence:2}},{type:"elites",title:"Sangre de elite",desc:"Derrota enemigos elite.",target:1+Math.floor(R/9),reward:{gold:240+R*20,xp:90+R*17,shards:1}}],W=[],z=[];for(;W.length<4&&z.length<Y.length;){const f=o(Y);z.includes(f.type)||(z.push(f.type),W.push({id:v(),type:f.type,title:f.title,desc:f.desc,progress:0,target:f.target,reward:f.reward,completed:!1,claimed:!1}))}return W}function l(){const R=Date.now();return{version:5,currentView:"resumen",currentTab:"resumen",featureFlags:{itemPipelineV2:!0,itemTelemetryV2:!0},ui:{inventoryFilter:"all",inventoryPage:1,inventoryPageSize:18,journalPage:1,journalPageSize:16,modal:null,forgePreview:null,moreMenuOpen:!1,collapsedCardsByView:{}},player:{name:"Aurelio",title:"Novato del Coliseo",level:1,xp:0,gold:260,shards:0,iron:16,wood:12,essence:5,sigils:0,echoShards:0,food:6,potions:3,keys:2,hp:140,energy:100,stamina:12,baseStats:{attack:14,defense:10,speed:8,crit:.06,dodge:.04,block:.03,lifesteal:0},training:{strength:0,agility:0,endurance:0,discipline:0},guild:{barracks:0,treasury:0,sanctuary:0,hunters:0,arsenal:0},relics:{wrath:0,fortune:0,vitality:0,momentum:0},pet:null,petLevel:0,petXp:0,activeSkills:["powerStrike","quickLunge","fortify"],unlockedSkills:["powerStrike","quickLunge","fortify"],skillLevels:{powerStrike:1,quickLunge:1,fortify:1,shieldBash:1,bloodRage:1,whirlwind:1,execution:1,venomCut:1,berserk:1,celestialEdge:1},skillPoints:0,attributePoints:0,zoneId:0,highestDungeonFloor:1,ascension:0,relicDust:0,itemPity:{bySource:{},epic:0,mythic:0,ascendant:0,total:0},equipment:{weapon:M("weapon","Gladius"),offhand:M("offhand","Escudo de Torre"),helm:null,chest:M("chest","Coraza Segmentada"),gloves:null,boots:null,ring:null,amulet:null},inventory:c()},stats:{wins:0,losses:0,kills:0,damageDone:0,damageTaken:0,crits:0,questsCompleted:0,crafted:0,salvaged:0,earnedGold:0,expeditions:0,dungeons:0,elites:0,legendaryFound:0,mythicFound:0,ascendantFound:0,goldSpent:0,materialsSpent:0,equippedUpgrades:0,craftUsage:{craft:0,enhance:0,reforge:0,transcend:0},telemetry:{startedAt:R,firstEpicAt:null,firstMythicAt:null,firstAscendantAt:null,rarityBySource:{arena:{},dungeon:{},expedition:{},market:{},forge:{},legacy:{}},netGoldByHour:{},netMaterialsByHour:{},milestonesShown:{epic:!1,mythic:!1}}},quests:B(1),claimedAchievements:[],timers:{job:null,expedition:null},market:{items:T(1),lastRefresh:Date.now(),refreshChainCount:0,totalRefreshes:0},journal:[{id:v(),ts:Date.now(),icon:"⚔️",text:"Has entrado en Aether Arena. El coliseo huele a hierro, oro y gloria."}],streak:{lastClaimDay:null,days:0},combatHistory:[],lastTick:Date.now(),lastSave:0}}return{xpNeeded:H,defaultQuests:B,makeDefaultState:l}}function gn(s){const{state:o,PETS:v,sum:M,statsDomain:c,scaleItemStats:T}=s;function H(){return 28+o.player.guild.arsenal*8+o.player.ascension*2}function B(){return M(Object.values(o.player.guild||{}))}function l(){return v.find(d=>d.id===o.player.pet)||null}function R(){return c.petBonus(o,l)}function Y(){return c.getGuildBonus(o)}function W(){return c.getRelicBonus(o)}function z(){return c.getEquipmentBonus(o,T)}function f(){return c.getTrainingBonus(o)}function J(){return c.getDerivedStats(o,{getPetData:l,scaleItemStats:T})}function N(){return c.getLootLuck(o,{getPetData:l,scaleItemStats:T})}return{maxInventory:H,guildTotal:B,getPetData:l,petBonus:R,getGuildBonus:Y,getRelicBonus:W,getEquipmentBonus:z,getTrainingBonus:f,getDerivedStats:J,getLootLuck:N}}function vn(s){const{clone:o,statsDomain:v,makeDefaultState:M,createStore:c,subscribeWithSelector:T}=s,H=new Set(["_meta","actions"]),B={};function l(N={}){return{hydrated:!1,isDirty:!1,isSaving:!1,lastMutationAt:0,lastMutationLabel:"bootstrap",mutationCount:0,lastSaveAt:0,saveCount:0,lastSource:"bootstrap",syncRevision:0,...N}}function R(N=null){const d=N||B,k={};return Object.keys(d||{}).forEach(g=>{H.has(g)||(k[g]=o(d[g]))}),k}function Y(N=null){const d=R(N);return d.ui&&(d.ui.modal=null,d.ui.moreMenuOpen=!1,d.ui.forgePreview=null),d}function W(N){Object.keys(B).forEach(d=>delete B[d]),Object.assign(B,N),v.invalidateDerivedCache()}const z=c(T(()=>({...o(M()),_meta:l(),actions:{}})));function f(){return W(R(z.getState())),B}function J(N,d={},k=!0){const g=z.getState(),E=l({...g._meta||{},...d}),D={...o(N),_meta:E,actions:g.actions||{}};return z.setState(D,k),f()}return{state:B,gameStore:z,createStoreMeta:l,snapshotGameData:R,serializableState:Y,replaceState:W,syncStateFromStore:f,setStoreSnapshot:J}}function yn(s){const{state:o,gameStore:v,clone:M,snapshotGameData:c,replaceState:T,normalizeState:H,createStoreMeta:B,setStoreSnapshot:l}=s;function R(){return v.getState()._meta||B()}function Y(N={}){const d=v.getState();return v.setState({...d,_meta:B({...d._meta||{},...N})}),R()}function W(N={},d=!0){return l(o,N,d)}function z(N,d,k={}){const g=c(v.getState());try{T(M(g)),typeof d=="function"&&d(o),k.normalize&&H();const E=R();return W({hydrated:!0,isDirty:k.markDirty===!1?E.isDirty:!0,isSaving:!1,lastMutationAt:Date.now(),lastMutationLabel:N||"mutation",mutationCount:(E.mutationCount||0)+1,lastSource:k.source||"local"})}catch(E){throw T(g),E}}function f(N,d,k){return typeof N=="function"&&typeof d=="function"?v.subscribe(N,d,k):v.subscribe(N)}function J(N){return typeof N=="function"?N(v.getState()):v.getState()}return{getStoreMeta:R,setStoreMeta:Y,commitWorkingState:W,mutate:z,subscribeStore:f,selectStore:J}}function hn(s){const{STORAGE_KEY:o,state:v,makeDefaultState:M,clone:c,snapshotGameData:T,serializableState:H,replaceState:B,normalizeState:l,commitWorkingState:R,setStoreMeta:Y,getStoreMeta:W}=s;function z(k,g="storage"){B(c(k||M())),l();const E=Date.now();return R({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:v.lastSave||E,lastSource:g,syncRevision:g==="external-sync"?W().syncRevision+1:W().syncRevision})}function f(){try{const k=Date.now();Y({isSaving:!0});const g=H();return g.lastSave=k,localStorage.setItem(o,JSON.stringify(g)),B(T()),v.lastSave=k,R({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:k,saveCount:(W().saveCount||0)+1,lastSource:"save"}),!0}catch(k){return console.warn("No se pudo guardar la partida.",k),Y({isSaving:!1}),!1}}function J(){try{const k=localStorage.getItem(o);return k?z(JSON.parse(k),"storage"):z(M(),"new-game")}catch(k){return console.warn("Guardado corrupto, creando uno nuevo.",k),z(M(),"recovered")}}function N(k){try{return z(k?JSON.parse(k):M(),"external-sync")}catch(g){return console.warn("No se pudo sincronizar el estado externo.",g),!1}}function d(){return localStorage.removeItem(o),z(M(),"reset")}return{loadFromParsedState:z,saveGame:f,loadGame:J,syncExternalState:N,hardReset:d}}(()=>{const{STORAGE_KEY:s,SLOT_ORDER:o,ITEM_BASES:v,ITEM_ARCHETYPES:M,STAT_BUDGETS:c,AFFIXES:T,PETS:H,SKILLS:B}=window.AetherConfig,{clone:l,rand:R,pick:Y,clamp:W,sum:z,uid:f,softRound:J,rarityDef:N,rarityOrder:d,deepMerge:k,emptyStats:g,addStats:E,localDayKey:D,pickRarity:I,findBaseItem:U,scaledStatValue:$}=window.AetherUtils,y=mn({SLOT_ORDER:o,emptyStats:g,addStats:E,softRound:J,clamp:W});let t=()=>0;const{scaleItemStats:L,computeItemScores:se,computeItemScore:_,estimateSalvage:O,makeItem:fe,makeStarterItem:xe,rollLoot:ie,makeItemFromBudget:P,applyAffixesWithBudget:F,generateMarket:Z,starterInventory:ge,normalizeItem:pe}=pn({ITEM_BASES:v,ITEM_ARCHETYPES:M,STAT_BUDGETS:c,AFFIXES:T,SLOT_ORDER:o,pick:Y,rand:R,uid:f,softRound:J,clamp:W,rarityDef:N,rarityOrder:d,pickRarity:I,findBaseItem:U,scaledStatValue:$,getLootLuck:()=>t()}),{xpNeeded:he,defaultQuests:me,makeDefaultState:de}=fn({pick:Y,uid:f,makeStarterItem:xe,starterInventory:ge,generateMarket:Z}),A=vn({clone:l,statsDomain:y,makeDefaultState:de,createStore:cn,subscribeWithSelector:un}),{state:i,gameStore:X,createStoreMeta:K,snapshotGameData:le,serializableState:be,replaceState:$e,syncStateFromStore:S,setStoreSnapshot:e}=A,m=gn({state:i,PETS:H,sum:z,statsDomain:y,scaleItemStats:L}),{maxInventory:h,guildTotal:j,getPetData:w,petBonus:ne,getGuildBonus:ce,getRelicBonus:ue,getEquipmentBonus:a,getTrainingBonus:p,getDerivedStats:x,getLootLuck:C}=m;t=C,S();function q(ye=null){const Me=i.player,je=[];return Object.values(B).forEach(Ie=>{Me.level>=Ie.unlockLevel&&!Me.unlockedSkills.includes(Ie.id)&&(Me.unlockedSkills.push(Ie.id),je.push(Ie))}),typeof ye=="function"&&je.forEach(Ie=>ye(Ie)),je}function r(ye,Me="legacy"){return(Array.isArray(ye)?ye:[]).map(je=>pe(je,{source:Me})).filter(Boolean)}function u(ye,Me){const je={...Me||{}};return o.forEach(Ie=>{ye&&ye[Ie]?je[Ie]=pe(ye[Ie],{slot:Ie,source:ye[Ie].provenance&&ye[Ie].provenance.source||"legacy"}):je[Ie]=null}),je}function V(ye){const Me=Number(i.version||0);i.player.inventory=r(i.player.inventory,"legacy"),i.player.equipment=u(i.player.equipment,ye.player.equipment),i.market.items=r(i.market.items,"market"),i.player.inventory.sort((je,Ie)=>{const nt=d(Ie.rarity)-d(je.rarity);return nt!==0?nt:(Ie.score||0)-(je.score||0)}),(!i.player.itemPity||typeof i.player.itemPity!="object")&&(i.player.itemPity=l(ye.player.itemPity)),Me<ye.version&&(i.version=ye.version)}function Q(){const ye=de();$e(k(ye,l(i))),i.currentView=i.currentView||i.currentTab||"resumen",i.currentTab=i.currentView,i.ui.moreMenuOpen=!!i.ui.moreMenuOpen,i.player.inventory||(i.player.inventory=[]),i.player.equipment||(i.player.equipment=ye.player.equipment),i.player.guild||(i.player.guild=ye.player.guild),i.player.training||(i.player.training=ye.player.training),i.player.relics||(i.player.relics=ye.player.relics),i.player.skillLevels||(i.player.skillLevels=ye.player.skillLevels),i.player.activeSkills||(i.player.activeSkills=ye.player.activeSkills),i.player.unlockedSkills||(i.player.unlockedSkills=ye.player.unlockedSkills),i.quests||(i.quests=ye.quests),(!i.market||!i.market.items)&&(i.market=ye.market),i.stats||(i.stats=ye.stats),i.claimedAchievements||(i.claimedAchievements=[]),i.combatHistory||(i.combatHistory=[]),i.journal||(i.journal=ye.journal),i.streak||(i.streak=ye.streak),i.timers||(i.timers=ye.timers),i.ui||(i.ui=ye.ui),V(ye),i.ui.inventoryFilter=i.ui.inventoryFilter||"all",i.ui.inventoryPage=Math.max(1,Number(i.ui.inventoryPage)||1),i.ui.inventoryPageSize=Math.max(6,Number(i.ui.inventoryPageSize)||ye.ui.inventoryPageSize),i.ui.journalPage=Math.max(1,Number(i.ui.journalPage)||1),i.ui.journalPageSize=Math.max(8,Number(i.ui.journalPageSize)||ye.ui.journalPageSize),(!i.ui.collapsedCardsByView||typeof i.ui.collapsedCardsByView!="object")&&(i.ui.collapsedCardsByView={}),q();const Me=x();i.player.hp=W(i.player.hp||Me.maxHp,1,Me.maxHp),i.player.energy=W(i.player.energy??Me.maxEnergy,0,Me.maxEnergy),i.player.stamina=W(i.player.stamina??Me.maxStamina,0,Me.maxStamina),i.player.title=i.player.title||"Novato del Coliseo",i.lastTick=i.lastTick||Date.now(),i.lastSave=i.lastSave||0}const ee=yn({state:i,gameStore:X,clone:l,snapshotGameData:le,replaceState:$e,normalizeState:Q,createStoreMeta:K,setStoreSnapshot:e}),{getStoreMeta:te,setStoreMeta:oe,commitWorkingState:Se,mutate:ve,subscribeStore:ke,selectStore:De}=ee,Ee=hn({STORAGE_KEY:s,state:i,makeDefaultState:de,clone:l,snapshotGameData:le,serializableState:be,replaceState:$e,normalizeState:Q,commitWorkingState:Se,setStoreMeta:oe,getStoreMeta:te}),{saveGame:Ae,loadGame:qe,syncExternalState:Ue,hardReset:ze}=Ee,Ne={mutate:ve,saveGame:Ae,loadGame:qe,hardReset:ze,setMeta:oe,syncExternalState:Ue};X.setState({...X.getState(),actions:Ne}),S(),window.AetherModel={state:i,store:X,replaceState:$e,snapshotGameData:le,mutate:ve,subscribeStore:ke,selectStore:De,getStoreMeta:te,setStoreMeta:oe,syncExternalState:Ue,makeItem:fe,makeStarterItem:xe,scaleItemStats:L,computeItemScores:se,computeItemScore:_,estimateSalvage:O,rollLoot:ie,makeItemFromBudget:P,applyAffixesWithBudget:F,normalizeItem:pe,xpNeeded:he,defaultQuests:me,generateMarket:Z,starterInventory:ge,makeDefaultState:de,maxInventory:h,guildTotal:j,getPetData:w,petBonus:ne,getGuildBonus:ce,getRelicBonus:ue,getEquipmentBonus:a,getTrainingBonus:p,getDerivedStats:x,getLootLuck:C,ensureUnlockedSkills:q,normalizeState:Q,saveGame:Ae,loadGame:qe,hardReset:ze}})();function bn(s){const{SKILLS:o,pick:v,rand:M,randf:c,clamp:T,softRound:H,uid:B}=s;function l($){return{berserker:{attack:1.12,defense:.92,speed:1.03,crit:.04,dodge:.01,block:0,lifesteal:.02},guardian:{attack:.9,defense:1.18,speed:.92,crit:.01,dodge:.02,block:.05,lifesteal:0},assassin:{attack:1,defense:.86,speed:1.22,crit:.06,dodge:.05,block:.01,lifesteal:0},beast:{attack:1.08,defense:.95,speed:1.09,crit:.03,dodge:.03,block:0,lifesteal:.03},occult:{attack:1.03,defense:.94,speed:1.05,crit:.05,dodge:.02,block:.02,lifesteal:0}}[$]||{attack:1,defense:1,speed:1,crit:0,dodge:0,block:0,lifesteal:0}}function R({zone:$,kind:y="normal",playerLevel:t=1,playerAscension:L=0,wins:se=0}){const _=Math.pow(t,.88)*.04,O=$&&typeof $.id=="number"?$.id*.25:0,fe=L*.25,xe=Math.min(se/60,3),ie=y==="elite"?.3:y==="boss"?.6:0;return 1+_+O+fe+xe+ie}function Y({zone:$,kind:y="normal",extraScale:t=0,playerLevel:L=1,playerAscension:se=0,wins:_=0}){const fe=v(["berserker","guardian","assassin","beast","occult"]),xe=l(fe),ie=Math.max(1,Math.round($.unlockLevel+L*.95+$.id*1.8+t+M(-1,2))),P=y==="elite"?1.3:y==="boss"?1.6:1,F=R({zone:$,kind:y,playerLevel:L,playerAscension:se,wins:_}),Z=(12+ie*3.4)*xe.attack*P*F,ge=(8+ie*2.8)*xe.defense*P*F,pe=(120+ie*34)*(y==="boss"?2.1:y==="elite"?1.5:1)*F,he=(7+ie*1.08)*xe.speed*F,me=y==="boss"?$.boss:v($.enemies),de={berserker:{name:"Furia salvaje",mult:1.45,cooldown:3},guardian:{name:"Muro de carne",mult:.9,cooldown:4,selfBuff:{defensePct:.2,turns:2}},assassin:{name:"Deguello",mult:1.2,cooldown:3,critBonus:.18},beast:{name:"Desgarro",mult:1.08,cooldown:3,dot:{turns:2,ratio:.12,label:"Sangrado"}},occult:{name:"Maldicion",mult:1.15,cooldown:4,armorBreak:{pct:.14,turns:2}}}[fe];return{id:B(),name:me,zoneId:$.id,kind:y,archetype:fe,level:ie,maxHp:Math.round(pe),hp:Math.round(pe),attack:H(Z,2),defense:H(ge,2),speed:H(he,2),crit:T(.06+xe.crit+(y==="boss"?.03:y==="elite"?.015:0)+(F-1)*.015,0,.55),dodge:T(.025+xe.dodge+(y==="boss"?.02:y==="elite"?.01:0)+(F-1)*.012,0,.45),block:T(.015+xe.block+(y==="boss"?.04:y==="elite"?.02:0)+(F-1)*.012,0,.4),lifesteal:T(xe.lifesteal+(y==="boss"?.01:y==="elite"?.005:0)+(F-1)*.008,0,.25),skill:de,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0}}function W($,y){return{id:"player",name:$.name,maxHp:y.maxHp,hp:Math.round($.hp),attack:y.attack,defense:y.defense,speed:y.speed,crit:y.crit,dodge:y.dodge,block:y.block,lifesteal:y.lifesteal,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0,activeSkills:($.activeSkills||[]).filter(t=>($.unlockedSkills||[]).includes(t))}}function z($,y){return $.buffs.filter(t=>t.turns>0&&y in(t.values||{})).reduce((t,L)=>t+L.values[y],0)}function f($,y){const t=`${y}Pct`;let L=$[y];return y==="defense"&&$.armorBreak&&$.armorBreak.turns>0&&(L*=1-$.armorBreak.pct),(y==="attack"||y==="defense"||y==="speed")&&(L*=1+z($,t)),L+=z($,y),L}function J($,y){return 1+Math.max(0,($&&$[y]||1)-1)*.08}function N($,y,t){const L=$.activeSkills||[];for(const se of L){const _=o[se];if(_&&!(_.requireOffhand&&!t.equipment.offhand)&&!(($.cooldowns[se]||0)>0)&&!(_.executeThreshold&&y.hp/y.maxHp>_.executeThreshold))return _}return null}function d($){return!$.skill||($.cooldowns.special||0)>0?null:$.skill}function k($,y){$.dots=$.dots.filter(t=>{if(t.turns<=0)return!1;const L=Math.round(t.damage);return $.hp-=L,y.push(`☠️ ${$.name} sufre ${L} por ${t.label}.`),t.turns-=1,t.turns>0}),$.buffs.forEach(t=>{t.turns-=1}),$.buffs=$.buffs.filter(t=>t.turns>0),$.armorBreak&&($.armorBreak.turns-=1,$.armorBreak.turns<=0&&($.armorBreak=null))}function g($,y,t,L=1,se={},_=[]){const O=f($,"attack"),fe=f(y,"defense"),xe=T(($.crit||0)+(se.critBonus||0),0,.85),ie=T(y.dodge||0,0,.7);if(Math.random()<ie)return _.push(`💨 ${y.name} esquiva ${t}.`),{damage:0,crit:!1,dodged:!0,blocked:!1};let P=O*L-fe*.55;P=Math.max(O*.26,P),P*=c(.9,1.08);let F=!1;Math.random()<xe&&(P*=1.68,F=!0);let Z=!1;if(Math.random()<(y.block||0)&&(P*=.66,Z=!0),P=Math.max(1,Math.round(P)),y.shield>0){const he=Math.min(y.shield,P);y.shield-=he,P-=he,he>0&&_.push(`🛡️ ${y.name} absorbe ${he} con un escudo.`)}if(P>0){y.hp-=P;const he=P*T(($.lifesteal||0)+(se.lifestealBonus||0),0,.9);he>0&&($.hp=Math.min($.maxHp,$.hp+Math.round(he)))}const ge=F?" crítico":"",pe=Z?" (bloqueado parcialmente)":"";return _.push(`⚔️ ${$.name} usa ${t} y causa ${P}${ge}${pe}.`),{damage:P,crit:F,dodged:!1,blocked:Z}}function E($,y,t,L,se){if(!(!t||L.dodged)&&(t.armorBreak&&(y.armorBreak={pct:t.armorBreak.pct,turns:t.armorBreak.turns+1},se.push(`🧩 La armadura de ${y.name} queda expuesta.`)),t.dot&&L.damage>0&&(y.dots.push({damage:Math.max(3,$.attack*t.dot.ratio),turns:t.dot.turns,label:t.dot.label}),se.push(`🩸 ${y.name} queda afectado por ${t.dot.label}.`)),t.selfBuff)){if($.buffs.push({turns:t.selfBuff.turns+1,values:{attackPct:t.selfBuff.attackPct||0,defensePct:t.selfBuff.defensePct||0,speedPct:t.selfBuff.speedPct||0}}),t.selfBuff.shieldPct){const _=Math.round($.maxHp*t.selfBuff.shieldPct);$.shield+=_,se.push(`🛡️ ${$.name} obtiene un escudo de ${_}.`)}se.push(`✨ ${$.name} activa un refuerzo temporal.`)}}function D($,y,t,L,se,_){if($.hp<=0||y.hp<=0)return null;const O=t?N($,y,L):d($);if(!O){const P=g($,y,"Golpe básico",1,{},_);return P.damage>0&&(t?se.damageDone+=P.damage:se.damageTaken+=P.damage),P}const fe=(O.mult||1)*(t?J(L.skillLevels,O.id):1),xe=O.hits||1;let ie=null;for(let P=0;P<xe;P++){const F={};O.critBonus&&(F.critBonus=O.critBonus),O.lifestealBonus&&(F.lifestealBonus=O.lifestealBonus);let Z=fe;if(O.executeThreshold&&y.hp/y.maxHp<=O.executeThreshold&&(Z*=O.executeMult||1.6),ie=g($,y,O.name,Z,F,_),ie&&ie.damage>0&&(t?se.damageDone+=ie.damage:se.damageTaken+=ie.damage),ie&&ie.crit&&t&&(se.crits+=1),y.hp<=0)break}return E($,y,O,ie||{dodged:!1,damage:0},_),t?$.cooldowns[O.id]=O.cooldown:$.cooldowns.special=O.cooldown,ie}function I($){Object.keys($.cooldowns).forEach(y=>{$.cooldowns[y]=Math.max(0,($.cooldowns[y]||0)-1)})}function U({enemy:$,playerState:y,derivedStats:t,zoneName:L,maxTurns:se=28}){const _=W(y,t),O=JSON.parse(JSON.stringify($)),fe=[`🏟️ <b>${_.name}</b> se enfrenta a <b>${O.name}</b> en <b>${L}</b>.`],xe={damageDone:0,damageTaken:0,crits:0},ie={equipment:y.equipment,skillLevels:y.skillLevels};let P=1;for(;_.hp>0&&O.hp>0&&P<=se&&(k(_,fe),k(O,fe),!(_.hp<=0||O.hp<=0));){const F=f(_,"speed")+c(0,3)>=f(O,"speed")+c(0,3)?[[_,O,!0],[O,_,!1]]:[[O,_,!1],[_,O,!0]];for(const[Z,ge,pe]of F)if(!(Z.hp<=0||ge.hp<=0)&&(D(Z,ge,pe,ie,xe,fe),ge.hp<=0))break;I(_),I(O),P+=1}return{player:_,foe:O,log:fe,statsDelta:xe,victory:_.hp>0&&O.hp<=0}}return{enemyArchetypeMods:l,difficultyMultiplier:R,makeEnemy:Y,buildPlayerCombatant:W,activeBuffValue:z,effectiveStat:f,skillLevelMult:J,choosePlayerSkill:N,chooseEnemySkill:d,decayStatuses:k,performHit:g,applySkillEffects:E,actorTurn:D,tickCooldowns:I,runCombat:U}}const et={basic:{label:"forja basica",minRarity:"common",guaranteedAffixes:0,qualityMin:.9,qualityMax:1.08,cost:{gold:150,iron:10,wood:6}},advanced:{label:"forja avanzada",minRarity:"rare",guaranteedAffixes:1,qualityMin:.96,qualityMax:1.15,cost:{gold:310,iron:14,wood:8,essence:2}},apex:{label:"forja apex",minRarity:"epic",guaranteedAffixes:2,qualityMin:1.02,qualityMax:1.22,cost:{gold:660,iron:24,wood:12,essence:5,sigils:2,echoShards:1}}},xn={common:1,uncommon:1.16,rare:1.48,epic:2.04,legendary:3.2,mythic:5,ascendant:8.4};function $n(s){const{rarityDef:o,rarityOrder:v,nextRarityKey:M,clamp:c,rand:T,uid:H,clone:B,generateMarket:l,makeItem:R,rollLoot:Y,estimateSalvage:W,computeItemScore:z}=s;function f(a,p){return a.player.inventory.length<p}function J(a,p){a.player.inventory=a.player.inventory.filter(x=>x.id!==p)}function N(a,p){return a.player.inventory.find(x=>x.id===p)}function d(a,p){return N(a,p)||Object.values(a.player.equipment).find(x=>x&&x.id===p)}function k(a){a.player.inventory.sort((p,x)=>{const C=v(x.rarity)-v(p.rarity);return C!==0?C:(x.score||0)-(p.score||0)})}function g(a="basic"){return a==="normal"?et.basic:a==="premium"?et.advanced:a==="mythic"||a==="endgame"?et.apex:et[a]||et.basic}function E(a={}){return Object.entries(a).filter(([p])=>p!=="gold").reduce((p,[,x])=>p+(Number(x)||0),0)}function D(a,p={}){a.stats.goldSpent=(a.stats.goldSpent||0)+(p.gold||0),a.stats.materialsSpent=(a.stats.materialsSpent||0)+E(p)}function I(a,p={}){return Object.entries(p).every(([x,C])=>(a.player[x]||0)>=C)}function U(a,p={}){Object.entries(p).forEach(([x,C])=>{a.player[x]=Math.max(0,(a.player[x]||0)-C)}),D(a,p)}function $(a,p={}){Object.entries(p).forEach(([x,C])=>{x in a.player&&(a.player[x]=(a.player[x]||0)+C)})}function y(a,p="sell"){const x=Math.max(0,(Date.now()-(a.createdAt||Date.now()))/6e4),C=a.provenance&&a.provenance.source||"legacy";let q=1;return p==="sell"&&(C==="forge"&&x<30&&(q*=.62),C==="market"&&x<12&&(q*=.76),C==="legacy"&&x<2&&(q*=.9),q*=1-Math.min(.28,(a.reforge||0)*.04)),p==="salvage"&&(C==="market"&&x<15&&(q*=.58),C==="forge"&&x<10&&(q*=.76),a.lockFlags&&a.lockFlags.starter&&(q*=.5),q*=1-Math.min(.24,(a.reforge||0)*.03)),c(q,.22,1.05)}function t(a,p=1,x=1){const C=a.economyValue||a.value||0,q=xn[a.rarity]||1,r=1+Math.max(0,p-1)*.012;return Math.round(C*q*x*r)}function L(a){const p=a.economyValue||a.value||0,x=c(.78+(a.upgrade||0)*.015+(a.transcend||0)*.03,.6,.97),C=y(a,"sell");return Math.max(6,Math.round(p*x*C))}function se(a){const p=W(a),x=y(a,"salvage"),C={};return Object.entries(p).forEach(([q,r])=>{C[q]=Math.max(0,Math.round(r*x))}),C}function _(a,p){a.stats.craftUsage||(a.stats.craftUsage={craft:0,enhance:0,reforge:0,transcend:0}),a.stats.craftUsage[p]=(a.stats.craftUsage[p]||0)+1}function O(a,p,x){if(!p)return;const{maxInventory:C,addJournal:q,trackQuest:r,checkAchievements:u,onItemAcquired:V}=x;if(!f(a,C)){const Q=Math.round(L(p)*.72);a.player.gold+=Q,a.stats.earnedGold+=Q,q("📦",`Inventario lleno. <span class="rarity-${p.rarity}">${p.name}</span> se convierte en ${Q} de oro.`),r("earnGold",Q);return}a.player.inventory.push(p),k(a),v(p.rarity)>=v("legendary")&&(a.stats.legendaryFound+=1),v(p.rarity)>=v("mythic")&&(a.stats.mythicFound=(a.stats.mythicFound||0)+1),p.rarity==="ascendant"&&(a.stats.ascendantFound=(a.stats.ascendantFound||0)+1),typeof V=="function"&&V(p),u()}function fe(a,p,x){const{addJournal:C}=x,q=N(a,p);if(!q)return;const r=q.slot,u=a.player.equipment[r];a.player.equipment[r]=q,J(a,p),u&&a.player.inventory.push(u),k(a),a.stats.equippedUpgrades=(a.stats.equippedUpgrades||0)+1,C("🧷",`Equipas <span class="rarity-${q.rarity}">${q.name}</span>.`)}function xe(a,p,x){const{maxInventory:C,addJournal:q,toast:r}=x,u=a.player.equipment[p];if(!u||!f(a,C)){r("No hay espacio en el inventario","danger");return}a.player.inventory.push(u),a.player.equipment[p]=null,k(a),q("🎒",`Guardas ${u.name} en el inventario.`)}function ie(a,p,x){const{trackQuest:C,addJournal:q}=x,r=N(a,p);if(!r)return;const u=L(r);a.player.gold+=u,a.stats.earnedGold+=u,C("earnGold",u),J(a,p),q("💰",`Vendes ${r.name} por ${u} de oro.`)}function P(a,p,x){const{trackQuest:C,addJournal:q}=x,r=N(a,p);if(!r)return;const u=se(r);$(a,u),a.stats.salvaged+=1,C("salvaged",1),J(a,p);const V=Object.entries(u).filter(([,Q])=>Q>0).map(([Q,ee])=>`+${ee} ${Q}`).join(", ");q("♻️",`Reciclas ${r.name}: ${V||"sin materiales recuperables"}.`)}function F(a){const p=110+a.player.level*14,x=a.market.refreshChainCount||0,C=1+Math.min(1.4,x*.24);return Math.round(p*C)}function Z(a,p,x){const{toast:C,addJournal:q,getLootLuck:r}=x,u=F(a);if(p){if(a.player.gold<u){C("No tienes oro suficiente para refrescar","danger");return}a.player.gold-=u,D(a,{gold:u}),a.market.refreshChainCount=(a.market.refreshChainCount||0)+1}else a.market.refreshChainCount=0;const V=l(a.player.level,{lootLuck:typeof r=="function"?r():0,ascension:a.player.ascension||0,streakData:a.player.itemPity,returnMeta:!0});a.player.itemPity=V.streakData||a.player.itemPity,a.market.items=(V.items||[]).map((Q,ee)=>{const te=c(1+ee*.04,1,1.28),oe=B(Q);return oe.price=t(oe,a.player.level,te),oe.marketMeta={...oe.marketMeta||{},rotationBias:te},oe}),a.market.lastRefresh=Date.now(),a.market.totalRefreshes=(a.market.totalRefreshes||0)+1,q("🛒",`El mercado renueva su inventario${p?` por ${u} de oro`:""}.`)}function ge(a,p,x){const{maxInventory:C,toast:q,addJournal:r,trackQuest:u,checkAchievements:V,onItemAcquired:Q}=x,ee=a.market.items.find(oe=>oe.id===p);if(!ee)return;if(a.player.gold<ee.price){q("Oro insuficiente","danger");return}if(!f(a,C)){q("Inventario lleno","danger");return}a.player.gold-=ee.price,D(a,{gold:ee.price});const te=B(ee);te.id=H(),te.provenance={...te.provenance||{},source:"market",createdAt:Date.now()},O(a,te,{maxInventory:C,addJournal:r,trackQuest:u,checkAchievements:V,onItemAcquired:Q}),a.market.items=a.market.items.filter(oe=>oe.id!==p),r("🛍️",`Compras ${ee.name} por ${ee.price} de oro.`)}function pe(a,p,x){const{toast:C,grantRewards:q}=x,u={potion:{price:120,reward:{potions:1},label:"Poción"},key:{price:180,reward:{keys:1},label:"Llave de mazmorra"},essence:{price:140,reward:{essence:1},label:"Esencia"},food:{price:65,reward:{food:2},label:"Comida"},sigil:{price:260,reward:{sigils:1},label:"Sigilo"}}[p];if(u){if(a.player.gold<u.price){C("Oro insuficiente","danger");return}a.player.gold-=u.price,D(a,{gold:u.price}),q(u.reward,u.label)}}function he(a="basic"){return a==="normal"?"basic":a==="premium"?"advanced":a}function me(a,p,x){const C=g(x),q=p==="weapon"||p==="chest"?1.12:1,r=1+Math.max(0,a.player.level-1)*.018,u={};return Object.entries(C.cost).forEach(([V,Q])=>{const ee=V==="gold"?Q*q*r:Q*q*(1+Math.max(0,a.player.level-1)*.006);u[V]=Math.max(1,Math.round(ee))}),u}function de(a){return a==="advanced"?[{rarity:"rare",chance:.52},{rarity:"epic",chance:.32},{rarity:"legendary",chance:.14},{rarity:"mythic",chance:.02}]:a==="apex"?[{rarity:"epic",chance:.53},{rarity:"legendary",chance:.31},{rarity:"mythic",chance:.14},{rarity:"ascendant",chance:.02}]:[{rarity:"common",chance:.5},{rarity:"uncommon",chance:.31},{rarity:"rare",chance:.16},{rarity:"epic",chance:.03}]}function A(a,p,x="basic"){const C=he(x),q=g(C);return{slot:p,tier:C,cost:me(a,p,C),qualityRange:[q.qualityMin,q.qualityMax],outcomes:de(C),minRarity:q.minRarity}}function i(a,p,x){const{maxInventory:C,toast:q,addJournal:r,trackQuest:u,checkAchievements:V,getLootLuck:Q,onItemAcquired:ee}=x,te=typeof p=="string"?p:p.slot,oe=typeof p=="string"?"basic":p.tier||"basic",Se=he(oe),ve=g(Se),ke=me(a,te,Se);if(!I(a,ke)){q("Te faltan materiales","danger");return}if(!f(a,C)){q("Inventario lleno","danger");return}U(a,ke);const De=ve.qualityMin+Math.random()*(ve.qualityMax-ve.qualityMin),Ee=Y({source:"forge",slot:te,playerLevel:a.player.level,ascension:a.player.ascension||0,lootLuck:typeof Q=="function"?Q():0,streakData:a.player.itemPity,minRarity:ve.minRarity,guaranteedAffixes:ve.guaranteedAffixes,qualityRoll:De,smartLoot:!1});a.player.itemPity=Ee.streakData;const Ae=Ee.item;O(a,Ae,{maxInventory:C,addJournal:r,trackQuest:u,checkAchievements:V,onItemAcquired:ee}),a.stats.crafted+=1,_(a,"craft"),u("crafts",1),r("🔨",`Completas ${ve.label} y obtienes ${Ae.name}.`),q(`Nuevo objeto: ${Ae.name}`,"gold")}function X(a){const p=o(a.rarity),x=a.itemLevel||a.level||1,C=a.upgrade||0;return{gold:Math.round(90+x*18+C*72+p.order*120),iron:Math.max(2,Math.round(4+C*1.6+p.order*.9)),essence:Math.max(0,Math.round((C>=4?1:0)+p.order*.45)),sigils:p.order>=v("legendary")?Math.max(0,Math.round((C-5)*.4)):0}}function K(a,p){const x=a.player.equipment[p];if(!x)return null;const C=o(x.rarity),q=C.upgradeCaps&&C.upgradeCaps.enhance||10,r=c(.93-(x.upgrade||0)*.04-C.order*.015,.52,.96);return{slot:p,cap:q,current:x.upgrade||0,successChance:r,failureRisk:x.upgrade>0?"perdida parcial controlada":"sin perdida de nivel",cost:X(x)}}function le(a,p,x){const{toast:C,trackQuest:q,addJournal:r}=x,u=a.player.equipment[p];if(!u){C("No tienes ese hueco equipado","danger");return}const V=o(u.rarity),Q=V.upgradeCaps&&V.upgradeCaps.enhance||10;if((u.upgrade||0)>=Q){C("Ese objeto ya esta al maximo para su rareza","cyan");return}const ee=X(u);if(!I(a,ee)){C("No tienes materiales suficientes","danger");return}U(a,ee);const te=c(.93-(u.upgrade||0)*.04-V.order*.015,.52,.96);if(Math.random()<=te){u.upgrade=(u.upgrade||0)+1,u.score=z(u),a.stats.crafted+=1,_(a,"enhance"),q("crafts",1),r("⚒️",`Mejoras ${u.name} a +${u.upgrade}.`);return}const oe=(u.upgrade||0)>0&&Math.random()<.58;oe&&(u.upgrade=Math.max(0,u.upgrade-1)),u.score=z(u),a.stats.crafted+=1,_(a,"enhance"),q("crafts",1),r("🧯",`${u.name} resiste la mejora fallida${oe?" y pierde 1 nivel de mejora":" sin perder nivel"}.`)}function be(a){const p=o(a.rarity),x=a.itemLevel||a.level||1,C=a.reforge||0;return{gold:Math.round(180+x*16+C*92+p.order*84),essence:Math.max(1,Math.round(2+p.order*.8+C*.35)),sigils:p.order>=v("epic")?Math.max(0,Math.round(1+C*.25)):0}}function $e(a,p){const x=d(a,p);if(!x)return null;const C=o(x.rarity),q=C.upgradeCaps&&C.upgradeCaps.reforge||4;return{itemId:p,current:x.reforge||0,cap:q,successChance:c(.86-(x.reforge||0)*.08+C.order*.01,.35,.9),cost:be(x)}}function S(a={},p={},x=.66){const C=new Set([...Object.keys(a),...Object.keys(p)]),q={};return C.forEach(r=>{const u=a[r]||0,V=p[r]||0;q[r]=Number((u*x+V*(1-x)).toFixed(r==="crit"||r==="dodge"||r==="block"||r==="lifesteal"?4:2))}),q}function e(a,p,x){const{toast:C,addJournal:q}=x,r=d(a,p);if(!r)return;const u=o(r.rarity),V=u.upgradeCaps&&u.upgradeCaps.reforge||4;if((r.reforge||0)>=V){C("Este objeto ya alcanzo su limite de reforge","cyan");return}const Q=be(r);if(!I(a,Q)){C("Te faltan recursos para retemplar","danger");return}U(a,Q);const ee=R(r.slot,r.itemLevel||r.level||a.player.level,r.rarity,r.baseName,1),te=c(.86-(r.reforge||0)*.08+u.order*.01,.35,.9);Math.random()<=te?(r.stats=ee.stats,r.affixes=ee.affixes,r.name=ee.name,r.qualityRoll=ee.qualityRoll,q("🌀",`Retemplas ${r.baseName} y nace ${r.name}.`)):(r.stats=S(r.stats,ee.stats,.7),r.affixes=Array.from(new Set([...r.affixes||[],...ee.affixes||[]])).slice(0,u.affixes+1),q("🧩",`${r.baseName} se reajusta parcialmente. Conservas parte de los stats previos.`)),r.reforge=(r.reforge||0)+1,r.score=z(r),_(a,"reforge")}function m(a){const p=o(a.rarity),x=a.itemLevel||a.level||1;return{gold:Math.round(900+x*42+p.order*640+(a.transcend||0)*280),essence:Math.max(3,Math.round(6+p.order*2.2)),sigils:Math.max(2,Math.round(4+p.order*1.6)),echoShards:Math.max(1,Math.round(1+p.order*.8))}}function h(a,p){const x=d(a,p);if(!x)return null;const C=o(x.rarity);if(!(C.upgradeCaps&&C.upgradeCaps.transcend))return null;const r=M(x.rarity,1);if(r===x.rarity)return null;const u=c(.42-C.order*.05-(x.transcend||0)*.08,.1,.58);return{itemId:p,from:x.rarity,to:r,successChance:u,cost:m(x),requirements:{minUpgrade:Math.max(5,(C.upgradeCaps&&C.upgradeCaps.enhance||10)-2)}}}function j(a,p,x){const{toast:C,addJournal:q}=x,r=d(a,p);if(!r)return;const u=o(r.rarity);if(!(u.upgradeCaps&&u.upgradeCaps.transcend)){C("Esta rareza no puede trascender mas","danger");return}const Q=Math.max(5,(u.upgradeCaps&&u.upgradeCaps.enhance||10)-2);if((r.upgrade||0)<Q){C(`Necesitas al menos mejora +${Q} para trascender`,"danger");return}const ee=M(r.rarity,1);if(ee===r.rarity){C("No existe una rareza superior para este objeto","danger");return}const te=m(r);if(!I(a,te)){C("No tienes recursos para trascender","danger");return}U(a,te);const oe=c(.42-u.order*.05-(r.transcend||0)*.08,.1,.58),Se=Math.random()<=oe;if(_(a,"transcend"),!Se){r.qualityRoll=c((r.qualityRoll||1)+.01,.82,1.24),r.score=z(r),q("🌫️",`El ritual de trascendencia de ${r.name} falla, pero la pieza retiene estabilidad.`);return}const ve=R(r.slot,(r.itemLevel||r.level||a.player.level)+2,ee,r.baseName,1);r.rarity=ee,r.tier=o(ee).order,r.stats=ve.stats,r.affixes=ve.affixes,r.name=ve.name,r.itemLevel=ve.itemLevel,r.level=ve.level,r.powerBudget=Math.round(Math.max(r.powerBudget||1,ve.powerBudget||1)*1.14),r.qualityRoll=c(Math.max(r.qualityRoll||1,ve.qualityRoll||1),.82,1.24),r.transcend=(r.transcend||0)+1,r.lockFlags={...r.lockFlags||{},transcended:!0},r.score=z(r),q("🌌",`${r.baseName} trasciende a calidad ${ee}.`)}function w(a,p){const{toast:x,trackQuest:C,addJournal:q}=p,r=a.player.inventory.filter(V=>{const Q=v(V.rarity),ee=V.score||z(V);return Q<=v("uncommon")&&ee<a.player.level*40});if(!r.length){x("No hay chatarra segura para limpiar","cyan");return}let u=0;r.forEach(V=>{u+=Math.round(L(V)*.92)}),a.player.inventory=a.player.inventory.filter(V=>!r.some(Q=>Q.id===V.id)),a.player.gold+=u,a.stats.earnedGold+=u,C("earnGold",u),q("🧹",`Limpieza automatica: ${r.length} objetos convertidos en ${u} de oro.`)}function ne(a,p,x,C){return i(a,{slot:p,tier:x==="premium"?"advanced":"basic"},C)}function ce(a,p,x){return le(a,p,x)}function ue(a,p,x){return e(a,p,x)}return{acquireItem:O,removeInventoryItem:J,getInventoryItem:N,equipItem:fe,unequipItem:xe,sellPriceFor:L,sellItem:ie,salvageYieldFor:se,salvageItem:P,marketRefreshCost:F,refreshMarket:Z,buyMarketItem:ge,buyResource:pe,previewCraftItem:A,craftItem:i,previewEnhanceItem:K,enhanceItem:le,previewReforgeItem:$e,reforgeItem:e,previewTranscendItem:h,transcendItem:j,forgeItem:ne,upgradeEquipped:ce,rerollItem:ue,autoManage:w}}function Sn(s){const{JOBS:o,ZONES:v,clone:M,rand:c,rollLoot:T,clamp:H}=s;function B(f,J,N){const d=N(),k=d.maxHp*(.0033+d.regenPct*.01)*J,g=(.48+f.player.training.discipline*.02+f.player.relics.momentum*.04)*J,E=(.028+f.player.relics.momentum*.005)*J;f.player.hp=H(f.player.hp+k,1,d.maxHp),f.player.energy=H(f.player.energy+g,0,d.maxEnergy),f.player.stamina=H(f.player.stamina+E,0,d.maxStamina)}function l(f,J,N){const{toast:d,addJournal:k}=N,g=o.find(E=>E.id===J);if(g){if(f.timers.job){d("Ya tienes un trabajo en curso","cyan");return}if(f.player.energy<12){d("Necesitas al menos 12 de energía","danger");return}f.player.energy-=12,f.timers.job={id:g.id,name:g.name,endAt:Date.now()+g.duration*1e3,reward:M(g.reward),startedAt:Date.now()},k("🧰",`Comienzas el trabajo: <b>${g.name}</b>.`)}}function R(f,J,N){const{grantRewards:d,toast:k}=N;if(!f.timers.job)return;const g=f.timers.job;f.timers.job=null,d(g.reward,`Trabajo terminado — ${g.name}`),J||k(`Trabajo completado: ${g.name}`,"success")}function Y(f,J,N,d){const{isZoneUnlocked:k,toast:g,addJournal:E}=d,D=v.find(U=>U.id===J);if(!D||!k(D))return;if(f.timers.expedition){g("Ya estás en expedición","cyan");return}const I=D.energyCost+Math.floor(N/40);if(f.player.energy<I||f.player.stamina<D.staminaCost){g("No tienes recursos para partir","danger");return}f.player.energy-=I,f.player.stamina-=D.staminaCost,f.timers.expedition={zoneId:J,endAt:Date.now()+N*1e3,durationSec:N,startedAt:Date.now()},E("🧭",`Sales de expedición a <b>${D.name}</b> durante ${N}s.`)}function W(f,J,N){const{grantRewards:d,getDerivedStats:k,trackQuest:g,acquireItem:E,addJournal:D,toast:I,getLootLuck:U}=N;if(!f.timers.expedition)return;const $=f.timers.expedition;f.timers.expedition=null;const y=v.find(_=>_.id===$.zoneId)||v[0],t=1+$.durationSec/90,L={gold:Math.round((90+y.id*50+f.player.level*16)*t*(1+k().goldPct)),xp:Math.round((55+y.id*35+f.player.level*12)*t),iron:c(1,3+y.id),wood:c(1,2+Math.floor(y.id/2)),essence:Math.random()<.45?c(1,2+Math.floor(y.id/2)):0,food:Math.random()<.5?1+Math.floor(y.id/2):0};d(L,`Expedición — ${y.name}`),f.stats.expeditions+=1,g("expeditions",1);const se=.48+y.id*.04+Math.min(.2,(U?U():0)*.5);if(Math.random()<se){const _=T({source:"expedition",zoneId:y.id,playerLevel:f.player.level,itemLevel:f.player.level+y.id+c(0,2),ascension:f.player.ascension||0,lootLuck:U?U():0,smartLoot:!0,equipment:f.player.equipment,streakData:f.player.itemPity});f.player.itemPity=_.streakData;const O=_.item;E(O),D("🎒",`Encuentras <span class="rarity-${O.rarity}">${O.name}</span> en la expedición.`)}J||I(`Expedición completada: ${y.name}`,"success")}function z(f,J,N,d){const{completeJob:k,completeExpedition:g}=d;let E=!1;return f.timers.job&&f.timers.job.endAt<=J&&(k(N),E=!0),f.timers.expedition&&f.timers.expedition.endAt<=J&&(g(N),E=!0),E}return{passiveRegen:B,startJob:l,completeJob:R,startExpedition:Y,completeExpedition:W,resolveFinishedTimers:z}}function kn(s){const{RANKS:o,ACHIEVEMENTS:v,clamp:M,clone:c,defaultQuests:T,makeDefaultState:H}=s;function B(d,k){const g=d.player.level*14+d.stats.wins*4+d.player.highestDungeonFloor*10+k()*8+d.player.ascension*60;let E=o[0];return o.forEach(D=>{g>=D.min&&(E=D)}),E}function l(d,k,g){const{xpNeeded:E,ensureUnlockedSkills:D,getDerivedStats:I,currentRank:U,addJournal:$,toast:y}=g;if(!k)return;d.player.xp+=k;let t=0;for(;d.player.xp>=E(d.player.level);)d.player.xp-=E(d.player.level),d.player.level+=1,d.player.attributePoints+=4,d.player.skillPoints+=1,t+=1,D(se=>{$("✨",`Has desbloqueado la habilidad <b>${se.name}</b>.`),y(`Habilidad desbloqueada: ${se.name}`,"violet")});const L=I();t>0&&(d.player.hp=L.maxHp,d.player.energy=L.maxEnergy,d.player.stamina=M(d.player.stamina+t,0,L.maxStamina),d.player.title=U().title,$("🌟",`Subes al nivel <b>${d.player.level}</b>. Recibes puntos de atributo y habilidad.`),y(`Nivel ${d.player.level} alcanzado`,"gold"))}function R(d,k,g,E){d.quests.forEach(D=>{D.claimed||D.type!==k||(D.progress+=g,D.progress>=D.target&&(D.progress=D.target,D.completed=!0))}),k==="crafts"&&(d.stats.crafted+=0),E()}function Y(d,k,g){const{grantRewards:E,addJournal:D,checkAchievements:I}=g,U=d.quests.find($=>$.id===k);!U||!U.completed||U.claimed||(U.claimed=!0,E(U.reward,`Misión: ${U.title}`),d.stats.questsCompleted+=1,D("📜",`Misión completada: <b>${U.title}</b>.`),d.quests.every($=>$.claimed)&&(d.quests=T(d.player.level),D("🪄","Se generan nuevos contratos en el tablón.")),I())}function W(d,k){const{toast:g,addJournal:E}=k,D=140+d.player.level*12;if(d.player.gold<D){g("Oro insuficiente para renovar misiones","danger");return}d.player.gold-=D,d.quests=T(d.player.level),E("📌",`Renuevas el tablón de contratos por ${D} de oro.`)}function z(d,k,g){const E={kills:d.stats.kills,wins:d.stats.wins,questsCompleted:d.stats.questsCompleted,highestDungeonFloor:d.player.highestDungeonFloor,level:d.player.level,legendaryFound:d.stats.legendaryFound,mythicFound:d.stats.mythicFound,ascendantFound:d.stats.ascendantFound,guildTotal:g(),ascension:d.player.ascension};return Math.min(k.target,E[k.type]||0)}function f(d,k){const{grantRewards:g,addJournal:E,toast:D,guildTotal:I}=k;v.forEach(U=>{if(d.claimedAchievements.includes(U.id))return;z(d,U,I)>=U.target&&(d.claimedAchievements.push(U.id),g(U.reward,`Logro: ${U.title}`),E("🏆",`Logro desbloqueado: <b>${U.title}</b>.`),D(`Logro desbloqueado: ${U.title}`,"gold"))})}function J(d,k,g){const{toast:E,addJournal:D}=g;if(d.player.relicDust<=0){E("No tienes polvo de reliquia","danger");return}k in d.player.relics&&(d.player.relicDust-=1,d.player.relics[k]+=1,D("🗿",`Inviertes una reliquia en ${k}.`))}function N(d,k){const{toast:g,confirmAscend:E,replaceState:D,normalizeState:I,currentRank:U,addJournal:$,checkAchievements:y}=k;if(d.player.level<20&&d.player.highestDungeonFloor<8){g("Necesitas nivel 20 o piso 8 de mazmorra","danger");return}if(!E())return;const t=3+Math.floor(d.player.level/8)+Math.floor(d.player.highestDungeonFloor/4),L=c(d.player.relics),se=d.player.relicDust+t,_=d.player.ascension+1,O=H();O.player.relics=L,O.player.relicDust=se,O.player.ascension=_,O.player.shards=2,O.player.gold=320,D(O),I(),d.player.title=U().title,$("🔱",`Has ascendido. Obtienes ${t} de Polvo de Reliquia.`),y(),g(`Ascensión completada (+${t} reliquias)`,"gold")}return{currentRank:B,gainXp:l,trackQuest:R,claimQuest:Y,rerollQuests:W,achievementProgress:z,checkAchievements:f,spendRelic:J,ascend:N}}(()=>{const{SLOT_ORDER:s,SLOT_NAMES:o,RANKS:v,ZONES:M,JOBS:c,PETS:T,SKILLS:H,ACHIEVEMENTS:B}=window.AetherConfig,{$:l,clone:R,rand:Y,randf:W,pick:z,clamp:f,sum:J,uid:N,fmt:d,pct:k,softRound:g,localDayKey:E,timeLeft:D,rarityDef:I,rarityOrder:U,nextRarityKey:$,sanitizeInlineHtml:y}=window.AetherUtils,{state:t,replaceState:L,makeDefaultState:se,normalizeState:_,makeItem:O,rollLoot:fe,scaleItemStats:xe,computeItemScore:ie,estimateSalvage:P,xpNeeded:F,defaultQuests:Z,generateMarket:ge,maxInventory:pe,guildTotal:he,getPetData:me,getDerivedStats:de,getLootLuck:A,ensureUnlockedSkills:i,saveGame:X}=window.AetherModel,K=bn({SKILLS:H,pick:z,rand:Y,randf:W,clamp:f,softRound:g,uid:N}),le=$n({rarityDef:I,rarityOrder:U,nextRarityKey:$,clamp:f,rand:Y,uid:N,clone:R,generateMarket:ge,makeItem:O,rollLoot:fe,estimateSalvage:P,computeItemScore:ie}),be=Sn({JOBS:c,ZONES:M,clone:R,rand:Y,rollLoot:fe,clamp:f}),$e=kn({RANKS:v,ACHIEVEMENTS:B,clamp:f,clone:R,defaultQuests:Z,makeDefaultState:se});function S(n,b){t.journal.unshift({id:N(),ts:Date.now(),icon:n,text:y(b)}),t.journal=t.journal.slice(0,80)}function e(n,b="cyan"){const G=l("toast-root");if(!G)return;const re={cyan:"from-sky-500/25 to-cyan-300/10 border-cyan-300/25",gold:"from-amber-500/25 to-yellow-300/10 border-amber-300/30",danger:"from-rose-500/25 to-pink-300/10 border-rose-300/25",success:"from-emerald-500/25 to-green-300/10 border-emerald-300/25",violet:"from-violet-500/25 to-fuchsia-300/10 border-violet-300/25"},ae=document.createElement("div");ae.className=`glass-strong pointer-events-none rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-br ${re[b]||re.cyan} animate-[fadeIn_.2s_ease]`,ae.innerHTML=y(n),G.appendChild(ae),setTimeout(()=>{ae.style.opacity="0",ae.style.transform="translateY(-6px)",setTimeout(()=>ae.remove(),260)},2800)}function m(){(!t.stats.telemetry||typeof t.stats.telemetry!="object")&&(t.stats.telemetry={});const n=t.stats.telemetry;return n.startedAt=n.startedAt||Date.now(),n.firstEpicAt=n.firstEpicAt||null,n.firstMythicAt=n.firstMythicAt||null,n.firstAscendantAt=n.firstAscendantAt||null,(!n.rarityBySource||typeof n.rarityBySource!="object")&&(n.rarityBySource={}),(!n.netGoldByHour||typeof n.netGoldByHour!="object")&&(n.netGoldByHour={}),(!n.netMaterialsByHour||typeof n.netMaterialsByHour!="object")&&(n.netMaterialsByHour={}),(!n.milestonesShown||typeof n.milestonesShown!="object")&&(n.milestonesShown={epic:!1,mythic:!1}),n}function h(n=Date.now()){const b=new Date(n),G=b.getFullYear(),re=String(b.getMonth()+1).padStart(2,"0"),ae=String(b.getDate()).padStart(2,"0"),we=String(b.getHours()).padStart(2,"0");return`${G}-${re}-${ae}T${we}`}function j(n=t.player){return(n.iron||0)+(n.wood||0)+(n.essence||0)+(n.sigils||0)+(n.echoShards||0)}function w(n=0,b=0,G=Date.now()){const re=m(),ae=h(G);re.netGoldByHour[ae]=(re.netGoldByHour[ae]||0)+n,re.netMaterialsByHour[ae]=(re.netMaterialsByHour[ae]||0)+b}function ne(n){if(!n)return;const b=m(),G=n.provenance&&n.provenance.source||"legacy";b.rarityBySource[G]||(b.rarityBySource[G]={}),b.rarityBySource[G][n.rarity]=(b.rarityBySource[G][n.rarity]||0)+1;const re=Date.now()-(b.startedAt||Date.now());n.rarity==="epic"&&!b.firstEpicAt&&(b.firstEpicAt=re),n.rarity==="mythic"&&!b.firstMythicAt&&(b.firstMythicAt=re),n.rarity==="ascendant"&&!b.firstAscendantAt&&(b.firstAscendantAt=re),n.rarity==="epic"&&!b.milestonesShown.epic&&(b.milestonesShown.epic=!0,S("🎉","¡Hito desbloqueado! Has obtenido tu primer objeto <b>epico</b>."),e("Primer Epic obtenido","gold")),n.rarity==="mythic"&&!b.milestonesShown.mythic&&(b.milestonesShown.mythic=!0,S("🌠","¡Hito mayor! Has obtenido tu primer objeto <b>mitico</b>."),e("Primer Mythic obtenido","violet"))}function ce(n,b="Recompensa"){if(!n)return;const G=Number(n.gold||0),re=Number(n.iron||0)+Number(n.wood||0)+Number(n.essence||0)+Number(n.sigils||0)+Number(n.echoShards||0);Object.entries(n).forEach(([ae,we])=>{ae==="xp"?a(we):ae in t.player?t.player[ae]+=we:ae in t.stats?t.stats[ae]+=we:ae==="relicDust"&&(t.player.relicDust+=we)}),n.gold&&(t.stats.earnedGold+=n.gold,Re("earnGold",n.gold)),(G||re)&&w(G,re),S("🎁",`${b}: ${ue(n)}`)}function ue(n){return Object.entries(n).map(([b,G])=>{const re={xp:"XP",gold:"oro",shards:"fragmentos",iron:"hierro",wood:"madera",essence:"esencia",sigils:"sigilos",echoShards:"eco fragmentos",food:"comida",potions:"pociones",keys:"llaves",relicDust:"polvo reliquia"}[b]||b;return`+${d(G)} ${re}`}).join(" · ")}function a(n){return $e.gainXp(t,n,{xpNeeded:F,ensureUnlockedSkills:i,getDerivedStats:de,currentRank:p,addJournal:S,toast:e})}function p(){return $e.currentRank(t,he)}function x(n){const b=t.player.gold||0,G=j(t.player),re=n(),ae=t.player.gold||0,we=j(t.player),Pe=ae-b,Fe=we-G;return(Pe||Fe)&&w(Pe,Fe),re}function C(){const n=Date.now(),b=f((n-(t.lastTick||n))/1e3,0,60*60*12);b<=0||(q(b),Mt(n,!0),t.lastTick=n)}function q(n){return be.passiveRegen(t,n,de)}function r(){return M.find(n=>n.id===t.player.zoneId)||M[0]}function u(n){return t.player.level>=n.unlockLevel||t.player.ascension>0&&n.id<=2}function V(n){const b=M.find(G=>G.id===n);!b||!u(b)||(t.player.zoneId=b.id)}function Q(n){return K.enemyArchetypeMods(n)}function ee(n,b="normal",G=0){return K.makeEnemy({zone:n,kind:b,extraScale:G,playerLevel:t.player.level||1,playerAscension:t.player.ascension||0,wins:t.stats&&t.stats.wins?t.stats.wins:0})}function te(){return K.buildPlayerCombatant(t.player,de())}function oe(n,b){return K.activeBuffValue(n,b)}function Se(n,b){return K.effectiveStat(n,b)}function ve(n){return K.skillLevelMult(t.player.skillLevels,n)}function ke(n,b){return K.choosePlayerSkill(n,b,{equipment:t.player.equipment,skillLevels:t.player.skillLevels})}function De(n){return K.chooseEnemySkill(n)}function Ee(n,b){return K.decayStatuses(n,b)}function Ae(n,b,G,re=1,ae={},we=[]){return K.performHit(n,b,G,re,ae,we)}function qe(n,b,G,re,ae){return K.applySkillEffects(n,b,G,re,ae)}function Ue(n,b,G,re){const ae={damageDone:0,damageTaken:0,crits:0};return K.actorTurn(n,b,G,{equipment:t.player.equipment,skillLevels:t.player.skillLevels},ae,re)}function ze(n){return K.tickCooldowns(n)}function Ne(n){ne(n)}function ye(n,b={mode:"arena"}){const G=K.runCombat({enemy:n,playerState:t.player,derivedStats:de(),zoneName:M[n.zoneId]&&M[n.zoneId].name||"Zona desconocida",maxTurns:28}),{player:re,foe:ae,log:we,victory:Pe,statsDelta:Fe}=G;t.stats.damageDone+=Fe.damageDone,t.stats.damageTaken+=Fe.damageTaken,t.stats.crits+=Fe.crits,t.player.hp=f(re.hp,1,de().maxHp);const Te={gold:0,xp:0,iron:0,wood:0,essence:0,sigils:0,echoShards:0,keys:0,potions:0};let _e=null;if(Pe){const Be=M[ae.zoneId],ut=Y(30,54)+ae.level*12+(ae.kind==="elite"?45:ae.kind==="boss"?70:0),Oa=Y(22,38)+ae.level*10+(ae.kind==="boss"?55:0);Te.gold=Math.round(ut*(1+de().goldPct)),Te.xp=Math.round(Oa),Te.iron=Y(0,2+Be.id),Te.wood=Y(0,1+Math.floor(Be.id/2)),Te.essence=Math.random()<.32+Be.id*.02?Y(1,2+Math.floor(Be.id/2)):0,Te.sigils=Be.id>=3&&Math.random()<.11+Be.id*.01?1+Math.floor(Be.id/3):0,Te.echoShards=Be.id>=5&&(ae.kind==="elite"||ae.kind==="boss")&&Math.random()<.08+Be.id*.01?1:0,Te.keys=b.mode==="dungeon"&&Math.random()<.13?1:0,Te.potions=Math.random()<.08?1:0;const za=b.mode==="dungeon"?"dungeon":"arena",Na=.26+A()*.68+(ae.kind==="elite"?.1:0)+(ae.kind==="boss"?.16:0)+(b.mode==="dungeon"?.1:0);if(Math.random()<Na){const Et=fe({source:za,zoneId:Be.id,enemyKind:ae.kind,playerLevel:t.player.level,ascension:t.player.ascension||0,itemLevel:ae.level+Y(0,2),lootLuck:A(),smartLoot:!0,equipment:t.player.equipment,streakData:t.player.itemPity});t.player.itemPity=Et.streakData,_e=Et.item,Me(_e)}ce(Te,`Botín de ${ae.name}`),t.stats.kills+=1,b.mode==="arena"&&(t.stats.wins+=1),b.mode==="dungeon"&&(t.stats.dungeons+=1),ae.kind==="elite"&&(t.stats.elites+=1),ae.kind==="boss"&&(t.player.highestDungeonFloor=Math.max(t.player.highestDungeonFloor,b.floor||t.player.highestDungeonFloor)),Re("kills",1),b.mode==="arena"&&Re("wins",1),b.mode==="dungeon"&&Re("dungeons",1),ae.kind==="elite"&&Re("elites",1),S("⚔️",`Victoria contra <b>${ae.name}</b>. ${ue(Te)}${_e?` · Botín: <span class="rarity-${_e.rarity}">${_e.name}</span>`:""}`),e(`Victoria sobre ${ae.name}`,"success")}else{b.mode==="arena"&&(t.stats.losses+=1);const Be=t.player.gold,ut=Y(10,25);t.player.gold=Math.max(0,t.player.gold-ut),w((t.player.gold||0)-(Be||0),0),S("💀",`Has sido derrotado por <b>${ae.name}</b>. La multitud te abuchea.`),e(`Derrota contra ${ae.name}`,"danger")}t.player.title=p().title,He(),t.combatHistory.unshift({id:N(),ts:Date.now(),title:`${Pe?"Victoria":"Derrota"} vs ${ae.name}`,result:Pe?"victory":"defeat",enemy:ae.name,zone:M[ae.zoneId].name,log:we,rewards:Te,drop:_e}),t.combatHistory=t.combatHistory.slice(0,15),t.ui.modal={type:"combat",title:`${Pe?"Victoria":"Derrota"} — ${ae.name}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Resultado</div>
              <div class="text-xl font-black ${Pe?"text-emerald-300":"text-rose-300"}">${Pe?"Has ganado":"Has perdido"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${ue(Te)}${_e?` · Botín: <span class="rarity-${_e.rarity}">${_e.name}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado final</div>
              <div class="text-lg font-black text-white">${d(t.player.hp)} HP restantes</div>
              <div class="text-sm text-slate-300/75 mt-1">${ae.name} ${Pe?"cayó derrotado":"sobrevivió al duelo"}.</div>
            </div>
          </div>
          <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro de combate</div>
            <div class="space-y-2 text-sm text-slate-100/90">${we.map(Be=>`<div class="leading-relaxed">${Be}</div>`).join("")}</div>
          </div>
        </div>
      `}}function Me(n){return le.acquireItem(t,n,{maxInventory:pe(),addJournal:S,trackQuest:Re,checkAchievements:He,onItemAcquired:Ne})}function je(n){return le.removeInventoryItem(t,n)}function Ie(n){return le.getInventoryItem(t,n)}function nt(n){return le.equipItem(t,n,{addJournal:S})}function aa(n){return le.unequipItem(t,n,{maxInventory:pe(),addJournal:S,toast:e})}function na(n){return x(()=>le.sellItem(t,n,{addJournal:S,trackQuest:Re}))}function ra(n){return x(()=>le.salvageItem(t,n,{addJournal:S,trackQuest:Re}))}function sa(n){const b=le.getInventoryItem(t,n);return b?le.salvageYieldFor(b):null}function oa(){const n=de();if(t.player.potions<=0){e("No te quedan pociones","danger");return}if(t.player.hp>=n.maxHp){e("Ya estás con toda la vida","cyan");return}t.player.potions-=1;const b=Math.round(n.maxHp*.42);t.player.hp=f(t.player.hp+b,0,n.maxHp),S("🧪",`Bebes una poción y recuperas ${b} HP.`),e(`+${b} HP`,"success")}function ia(){const n=E();if(t.streak.lastClaimDay===n){e("La recompensa diaria ya fue reclamada hoy","cyan");return}const b=E(Date.now()-864e5);t.streak.days=t.streak.lastClaimDay===b?Math.min(7,t.streak.days+1):1,t.streak.lastClaimDay=n;const G=t.streak.days,re={gold:180+G*70,xp:60+G*30,potions:G>=3?1:0,keys:G>=5?1:0,shards:G===7?3:1,essence:1+Math.floor(G/2)};ce(re,`Recompensa diaria (día ${G})`),e(`Recompensa diaria reclamada — racha ${G}`,"gold")}function la(n){const b={strength:["Fuerza",1],agility:["Agilidad",1],endurance:["Resistencia",1],discipline:["Disciplina",1]};if(!b[n])return;if(t.player.attributePoints<=0){e("No tienes puntos de atributo","danger");return}t.player.attributePoints-=1,t.player.training[n]+=1;const G=de();t.player.hp=Math.min(t.player.hp,G.maxHp),S("🏋️",`Aumentas ${b[n][0]}.`)}function ca(n){const b=H[n];if(!(!b||!t.player.unlockedSkills.includes(n))){if(t.player.skillPoints<=0){e("No tienes puntos de habilidad","danger");return}if((t.player.skillLevels[n]||1)>=5){e("Esa habilidad ya está al máximo","cyan");return}t.player.skillLevels[n]+=1,t.player.skillPoints-=1,S("📘",`Mejoras ${b.name} a nivel ${t.player.skillLevels[n]}.`)}}function da(n){if(!t.player.unlockedSkills.includes(n))return;const b=t.player.activeSkills,G=b.indexOf(n);if(G>=0){if(b.length<=1){e("Debes dejar al menos una habilidad activa","danger");return}b.splice(G,1)}else{if(b.length>=4){e("Máximo de 4 habilidades activas","cyan");return}b.push(n)}}function ua(n=!0){return x(()=>le.refreshMarket(t,n,{toast:e,addJournal:S,getLootLuck:A}))}function pa(n){return x(()=>le.buyMarketItem(t,n,{maxInventory:pe(),toast:e,addJournal:S,trackQuest:Re,checkAchievements:He,onItemAcquired:Ne}))}function ma(n){const b=t.player.gold,G=le.buyResource(t,n,{toast:e,grantRewards:ce}),re=(t.player.gold||0)-(b||0);return re&&w(re,0),G}function fa(n,b="basic"){return le.previewCraftItem(t,n,b)}function xt(n,b="basic"){return x(()=>le.craftItem(t,{slot:n,tier:b},{maxInventory:pe(),toast:e,addJournal:S,trackQuest:Re,checkAchievements:He,getLootLuck:A,onItemAcquired:Ne}))}function $t(n){return x(()=>le.enhanceItem(t,n,{toast:e,trackQuest:Re,addJournal:S}))}function ga(n){return le.previewEnhanceItem(t,n)}function St(n){return x(()=>le.reforgeItem(t,n,{toast:e,addJournal:S}))}function va(n){return le.previewReforgeItem(t,n)}function ya(n){return x(()=>le.transcendItem(t,n,{toast:e,addJournal:S}))}function ha(n){return le.previewTranscendItem(t,n)}function ba(n,b="normal"){return xt(n,b==="premium"?"advanced":"basic")}function xa(n){return $t(n)}function $a(n){return St(n)}function Sa(n){return be.startJob(t,n,{toast:e,addJournal:S})}function kt(n=!1){return be.completeJob(t,n,{grantRewards:ce,toast:e})}function ka(n,b){return be.startExpedition(t,n,b,{isZoneUnlocked:u,toast:e,addJournal:S})}function wt(n=!1){return be.completeExpedition(t,n,{grantRewards:ce,getDerivedStats:de,getLootLuck:A,trackQuest:Re,acquireItem:Me,addJournal:S,toast:e})}function Mt(n=Date.now(),b=!1){return be.resolveFinishedTimers(t,n,b,{completeJob:kt,completeExpedition:wt})}function wa(n="normal"){const b=r(),G=b.staminaCost+(n==="elite"?1:0);if(t.player.stamina<G||t.player.energy<b.energyCost){e("No tienes energía o aguante suficiente","danger");return}t.player.stamina-=G,t.player.energy-=b.energyCost;const re=ee(b,n);ye(re,{mode:"arena"})}function Ma(n=3){const b=[];for(let G=0;G<n;G++){const re=r();if(t.player.stamina<re.staminaCost||t.player.energy<re.energyCost||t.player.hp<de().maxHp*.2)break;t.player.stamina-=re.staminaCost,t.player.energy-=re.energyCost;const ae=ee(re,"normal",G);ye(ae,{mode:"arena"});const we=t.combatHistory[0];if(b.push(`${we.result==="victory"?"✅":"❌"} ${we.title}`),we.result!=="victory")break}b.length&&(t.ui.modal={type:"summary",title:`Racha de arena x${b.length}`,content:`<div class="glass rounded-2xl p-4 text-sm text-slate-100/90 space-y-2">${b.map(G=>`<div>${G}</div>`).join("")}</div>`})}function Ea(){if(t.player.keys<1){e("Necesitas una llave de mazmorra","danger");return}if(t.player.stamina<2){e("Necesitas al menos 2 de aguante","danger");return}t.player.keys-=1,t.player.stamina-=2;const n=t.player.highestDungeonFloor,b=M[Math.min(M.length-1,Math.floor((n-1)/2))],G=[];let re=!0;if([ee(b,"normal",n*.8),ee(b,"normal",n*.85),ee(b,"elite",n*.9),ee(b,"boss",n)].forEach((we,Pe)=>{if(!re)return;ye(we,{mode:"dungeon",floor:n});const Fe=t.combatHistory[0];G.push(`${Fe.result==="victory"?"✅":"❌"} ${Pe<3?"Encuentro":"Jefe"}: ${we.name}`),Fe.result!=="victory"&&(re=!1)}),re){t.player.highestDungeonFloor+=1;const we={gold:120+n*55,xp:90+n*42,essence:2+Math.floor(n/3),shards:n%3===0?2:1};ce(we,`Cofre del piso ${n}`),S("🏰",`Limpias el piso ${n} y avanzas al piso ${n+1}.`),e(`Piso ${n} superado`,"gold")}else S("🕸️",`No logras superar el piso ${n}.`);t.ui.modal={type:"summary",title:`Mazmorra — Piso ${n}`,content:`
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
      `}}function Aa(){const n=t.player.gold||0,b=j(t.player);if(t.player.pet){e("Ya tienes una mascota activa","cyan");return}if(t.player.shards<5||t.player.essence<8){e("Necesitas 5 fragmentos y 8 de esencia","danger");return}t.player.shards-=5,t.player.essence-=8;const G=z(T);t.player.pet=G.id,t.player.petLevel=1,t.player.petXp=0,S("🐾",`Incubas a <b>${G.name}</b>. ${G.desc}`),w((t.player.gold||0)-n,j(t.player)-b),e(`Mascota obtenida: ${G.name}`,"violet")}function Ca(){const n=t.player.gold||0,b=j(t.player);if(!t.player.pet){e("Aún no tienes mascota","danger");return}if(t.player.food<2||t.player.essence<1){e("Necesitas 2 de comida y 1 de esencia","danger");return}t.player.food-=2,t.player.essence-=1,t.player.petXp+=1,t.player.petXp>=3+t.player.petLevel&&(t.player.petXp=0,t.player.petLevel+=1,S("🐾",`Tu mascota alcanza nivel ${t.player.petLevel}.`),e(`Mascota nivel ${t.player.petLevel}`,"success")),w((t.player.gold||0)-n,j(t.player)-b)}function Ia(){if(!t.player.pet)return;const n=me();t.player.pet=null,t.player.petLevel=0,t.player.petXp=0,S("🪽",`Liberas a ${n?n.name:"tu mascota"} y recuperas tu calma.`)}function ja(n){return $e.spendRelic(t,n,{toast:e,addJournal:S})}function La(){return $e.ascend(t,{toast:e,confirmAscend:()=>window.confirm("Ascender reinicia nivel, equipo, inventario y recursos comunes, pero te da Polvo de Reliquia. ¿Continuar?"),replaceState:L,normalizeState:_,currentRank:p,addJournal:S,checkAchievements:He})}function Re(n,b){return $e.trackQuest(t,n,b,He)}function Pa(n){return $e.claimQuest(t,n,{grantRewards:ce,addJournal:S,checkAchievements:He})}function Ra(){return $e.rerollQuests(t,{toast:e,addJournal:S})}function Ba(n){return $e.achievementProgress(t,n,he)}function He(){return $e.checkAchievements(t,{grantRewards:ce,addJournal:S,toast:e,guildTotal:he})}function Ta(n){const b=t.player.gold||0,G=j(t.player),re=t.player.guild;if(!(n in re))return;const ae=re[n]+1,we=180+ae*110+he()*35,Pe=Math.max(1,Math.floor(ae/2));if(t.player.gold<we||t.player.essence<Pe){e("No tienes recursos suficientes","danger");return}t.player.gold-=we,t.player.essence-=Pe,re[n]+=1,w((t.player.gold||0)-b,j(t.player)-G),S("🏛️",`Mejoras ${n} del gremio al nivel ${re[n]}.`),He()}function Da(){return x(()=>le.autoManage(t,{toast:e,trackQuest:Re,addJournal:S}))}function qa(){const n=de();if(n.maxHp-t.player.hp<=0){e("Ya tienes la vida al máximo","cyan");return}let G=0;for(;t.player.hp<n.maxHp&&t.player.potions>0&&G<10;)t.player.potions-=1,t.player.hp=f(t.player.hp+n.maxHp*.42,0,n.maxHp),G++;S("🩹",`Usas ${G} poción(es) para recuperarte.`)}function Va(n="arena"){const b=t.player.itemPity||{},re=(b.bySource||{})[n]||b;return{source:n,epic:re.epic||0,mythic:re.mythic||0,ascendant:re.ascendant||0,total:re.total||0}}window.AetherSystems={addJournal:S,toast:e,grantRewards:ce,summarizeReward:ue,gainXp:a,currentRank:p,offlineCatchup:C,passiveRegen:q,zoneForPlayer:r,isZoneUnlocked:u,setZone:V,enemyArchetypeMods:Q,makeEnemy:ee,buildPlayerCombatant:te,activeBuffValue:oe,effectiveStat:Se,skillLevelMult:ve,choosePlayerSkill:ke,chooseEnemySkill:De,decayStatuses:Ee,performHit:Ae,applySkillEffects:qe,actorTurn:Ue,tickCooldowns:ze,runCombat:ye,acquireItem:Me,removeInventoryItem:je,getInventoryItem:Ie,equipItem:nt,unequipItem:aa,sellItem:na,salvageItem:ra,previewSalvage:sa,usePotion:oa,claimDaily:ia,trainAttribute:la,upgradeSkill:ca,toggleActiveSkill:da,refreshMarket:ua,buyMarketItem:pa,buyResource:ma,previewCraftItem:fa,craftItem:xt,previewEnhanceItem:ga,enhanceItem:$t,previewReforgeItem:va,reforgeItem:St,previewTranscendItem:ha,transcendItem:ya,forgeItem:ba,upgradeEquipped:xa,rerollItem:$a,startJob:Sa,completeJob:kt,startExpedition:ka,completeExpedition:wt,resolveFinishedTimers:Mt,fightArena:wa,arenaBlitz:Ma,runDungeon:Ea,hatchPet:Aa,feedPet:Ca,releasePet:Ia,spendRelic:ja,ascend:La,trackQuest:Re,claimQuest:Pa,rerollQuests:Ra,achievementProgress:Ba,checkAchievements:He,upgradeGuild:Ta,autoManage:Da,autoHeal:qa,getPityStatus:Va}})();const wn={setZone:["hud","content"],fightArena:["hud","content"],arenaBlitz:["hud","content","modal"],runDungeon:["hud","content","modal"],startExpedition:["hud","content"],startJob:["hud","content"],claimQuest:["hud","content"],rerollQuests:["hud","content"],usePotion:["hud","content"],autoHeal:["hud","content"],claimDaily:["hud","content"],buyMarketItem:["hud","content"],buyResource:["hud","content"],equipItem:["hud","content"],unequipItem:["hud","content"],sellItem:["hud","content"],salvageItem:["hud","content"],forgeItem:["hud","content"],craftItem:["hud","content"],upgradeEquipped:["hud","content"],enhanceItem:["hud","content"],rerollItem:["hud","content"],reforgeItem:["hud","content"],transcendItem:["hud","content"],upgradeGuild:["hud","content"],trainAttribute:["hud","content"],upgradeSkill:["hud","content"],toggleActiveSkill:["hud","content"],hatchPet:["hud","content"],feedPet:["hud","content"],releasePet:["hud","content"],spendRelic:["hud","content"],ascend:["hud","content"],refreshMarket:["hud","content"],autoManage:["hud","content"]};function Mn(s,o){const{systems:v,mutate:M,afterAction:c}=o;return Object.entries(wn).forEach(([T,H])=>{s[T]=(...B)=>{let l;return M(`systems/${T}`,()=>{l=v[T](...B)},{source:"systems"}),c(H),l}}),s}const Ct={home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5.25 9.75V21h13.5V9.75"/>',user:'<path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M4.5 20.25a7.5 7.5 0 0 1 15 0"/>',backpack:'<path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M6.75 7.5h10.5A2.25 2.25 0 0 1 19.5 9.75v9A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75v-9A2.25 2.25 0 0 1 6.75 7.5Z"/><path d="M9 12.75h6"/>',swords:'<path d="m4 20 7-7"/><path d="m13 11 7-7"/><path d="M14.5 4.5 19.5 9.5"/><path d="m4.5 14.5 5 5"/><path d="m9 9 6 6"/>',compass:'<circle cx="12" cy="12" r="8.25"/><path d="m14.75 9.25-1.65 4.85-4.85 1.65 1.65-4.85 4.85-1.65Z"/>',castle:'<path d="M5.25 21V9l3 1.5V6l3 1.5L15 6v4.5L18 9v12"/><path d="M3.75 21h16.5"/><path d="M9.75 21v-4.5h4.5V21"/>',cart:'<path d="M3.75 4.5h1.5l1.8 8.1a1.5 1.5 0 0 0 1.47 1.17h7.98a1.5 1.5 0 0 0 1.47-1.17L19.5 7.5H6.3"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17.25" cy="19.5" r="1.5"/>',hammer:'<path d="m14.25 5.25 4.5 4.5"/><path d="m6.75 12.75 7.5-7.5 3 3-7.5 7.5"/><path d="M5.25 14.25 3.75 20.25 9.75 18.75"/>',shield:'<path d="M12 3.75 5.25 6v5.25c0 4.29 2.7 8.11 6.75 9.5 4.05-1.39 6.75-5.21 6.75-9.5V6L12 3.75Z"/>',book:'<path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5v16.5H6.75A2.25 2.25 0 0 0 4.5 21V5.25Z"/><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 1 6.75 16.5h10.5"/>',briefcase:'<path d="M9 6V4.875A1.875 1.875 0 0 1 10.875 3h2.25A1.875 1.875 0 0 1 15 4.875V6"/><rect x="3.75" y="6" width="16.5" height="12.75" rx="2.25"/><path d="M3.75 11.25h16.5"/>',paw:'<circle cx="7" cy="9" r="1.25"/><circle cx="11" cy="6.5" r="1.25"/><circle cx="15" cy="6.5" r="1.25"/><circle cx="17" cy="10" r="1.25"/><path d="M12 18c-2.7 0-4.5-1.44-4.5-3.4 0-1.75 1.2-3.35 3.06-3.35.96 0 1.62.36 1.94.72.32-.36.98-.72 1.94-.72 1.86 0 3.06 1.6 3.06 3.35C16.5 16.56 14.7 18 12 18Z"/>',trophy:'<path d="M8.25 4.5h7.5v2.25A3.75 3.75 0 0 1 12 10.5 3.75 3.75 0 0 1 8.25 6.75V4.5Z"/><path d="M6 4.5h2.25v2.25A3 3 0 0 1 5.25 9.75H4.5A1.5 1.5 0 0 1 3 8.25v-.75A3 3 0 0 1 6 4.5Zm12 0h-2.25v2.25A3 3 0 0 0 18.75 9.75h.75A1.5 1.5 0 0 0 21 8.25v-.75A3 3 0 0 0 18 4.5Z"/><path d="M12 10.5v4.5"/><path d="M9 21h6"/><path d="M10.5 15h3v6h-3Z"/>',scroll:'<path d="M8.25 4.5h8.25A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5H8.25A3.75 3.75 0 0 1 4.5 15.75V8.25A3.75 3.75 0 0 1 8.25 4.5Z"/><path d="M8.25 4.5A2.25 2.25 0 0 0 6 6.75v9A2.25 2.25 0 0 1 3.75 18H6"/><path d="M9.75 9h4.5"/><path d="M9.75 12.75h4.5"/>',menu:'<path d="M4.5 7.5h15"/><path d="M4.5 12h15"/><path d="M4.5 16.5h15"/>',flask:'<path d="M10.5 3.75h3"/><path d="M10.5 3.75v5.1l-4.95 7.74A2.25 2.25 0 0 0 7.44 20.25h9.12a2.25 2.25 0 0 0 1.89-3.66L13.5 8.85v-5.1"/><path d="M8.25 14.25h7.5"/>',bandage:'<path d="m8.25 8.25 7.5 7.5"/><path d="m15.75 8.25-7.5 7.5"/><rect x="4.5" y="7.5" width="15" height="9" rx="2.25" transform="rotate(-45 12 12)"/>',gift:'<path d="M12 21V9"/><path d="M4.5 12h15"/><rect x="4.5" y="7.5" width="15" height="12.75" rx="2.25"/><path d="M12 7.5H8.25A2.25 2.25 0 1 1 10.5 5.25c0 .83-.43 1.56-1.08 1.97"/><path d="M12 7.5h3.75A2.25 2.25 0 1 0 13.5 5.25c0 .83.43 1.56 1.08 1.97"/>',broom:'<path d="M14.25 4.5 19.5 9.75"/><path d="M11.25 7.5 4.5 14.25"/><path d="M4.5 14.25 9.75 19.5"/><path d="m9.75 19.5 2.25-2.25"/>',crown:'<path d="M4.5 18 6.75 7.5 12 12l5.25-4.5L19.5 18Z"/><path d="M4.5 18h15"/>',flame:'<path d="M12 21c3.31 0 6-2.46 6-5.5 0-2.17-1.13-3.7-2.8-5.25-.9-.84-1.62-1.77-2.02-2.9-.38 1.3-1.25 2.45-2.42 3.55-1.75 1.64-4.76 3.45-4.76 6.6C6 18.54 8.69 21 12 21Z"/>',key:'<circle cx="8.25" cy="12" r="3.75"/><path d="M12 12h8.25"/><path d="M16.5 12v2.25"/><path d="M18.75 12v1.5"/>',spark:'<path d="M12 3.75 13.94 9.06 19.25 11 13.94 12.94 12 18.25 10.06 12.94 4.75 11 10.06 9.06 12 3.75Z"/>',bolt:'<path d="M13.5 3.75 7.5 13.5h4.5l-1.5 6.75 6-9.75h-4.5L13.5 3.75Z"/>',dumbbell:'<path d="M4.5 9v6"/><path d="M7.5 7.5v9"/><path d="M16.5 7.5v9"/><path d="M19.5 9v6"/><path d="M7.5 12h9"/>',check:'<circle cx="12" cy="12" r="8.25"/><path d="m8.75 12.25 2.25 2.25 4.25-4.5"/>',xcircle:'<circle cx="12" cy="12" r="8.25"/><path d="m9.75 9.75 4.5 4.5"/><path d="m14.25 9.75-4.5 4.5"/>',skull:'<path d="M12 3.75c-4.14 0-7.5 2.86-7.5 6.75 0 2.63 1.54 4.92 3.82 6.15V19.5h1.93v-1.5h3.5v1.5h1.93v-2.85c2.28-1.23 3.82-3.52 3.82-6.15 0-3.89-3.36-6.75-7.5-6.75Z"/><circle cx="9" cy="11.25" r="1"/><circle cx="15" cy="11.25" r="1"/><path d="M10.5 14.5h3"/>',info:'<circle cx="12" cy="12" r="8.25"/><path d="M12 10.5v5.25"/><path d="M12 7.5h.01"/>',wind:'<path d="M4.5 10.5h8.25a2.25 2.25 0 1 0-2.25-2.25"/><path d="M3.75 15h12a2.25 2.25 0 1 1-2.25 2.25"/><path d="M4.5 7.5h4.5"/>',droplet:'<path d="M12 3.75s5.25 5.79 5.25 9A5.25 5.25 0 1 1 6.75 12.75c0-3.21 5.25-9 5.25-9Z"/>',box:'<path d="m4.5 7.5 7.5-3 7.5 3-7.5 3-7.5-3Z"/><path d="M4.5 7.5v9l7.5 3 7.5-3v-9"/><path d="M12 10.5v9"/>',coins:'<circle cx="9" cy="12" r="3.75"/><path d="M12.75 9.75A3.75 3.75 0 1 1 16.5 16.5"/>',recycle:'<path d="m9 4.5 2.25 2.25L9 9"/><path d="M11.25 6.75H8.1A2.85 2.85 0 0 0 5.25 9.6v.15"/><path d="m15 19.5-2.25-2.25L15 15"/><path d="M12.75 17.25h3.15a2.85 2.85 0 0 0 2.85-2.85v-.15"/><path d="m18 9-3 0"/><path d="M18 9a2.85 2.85 0 0 0-2.85-2.85H15"/>',bag:'<path d="M7.5 9V7.5a4.5 4.5 0 0 1 9 0V9"/><path d="M5.25 9h13.5l-.9 9.45A2.25 2.25 0 0 1 15.61 20.5H8.39a2.25 2.25 0 0 1-2.24-2.05L5.25 9Z"/>',rotate:'<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4.5H15"/>',feather:'<path d="M19.5 4.5c-6 0-10.5 4.5-10.5 10.5v4.5"/><path d="M13.5 10.5 9 15"/><path d="M15.75 8.25 9 15"/>',gem:'<path d="m7.5 4.5-3 4.5 7.5 10.5L19.5 9l-3-4.5Z"/><path d="M9 4.5 12 9l3-4.5"/><path d="M4.5 9h15"/>',pin:'<path d="M9 4.5h6l-1.5 4.5 2.25 2.25v.75H8.25v-.75L10.5 9 9 4.5Z"/><path d="M12 12v7.5"/>'},En={"⚔️":"swords","⚔":"swords","👑":"crown","🔥":"flame","🌪️":"spark","🧭":"compass","🎒":"backpack","🏋️":"dumbbell","🧪":"flask","🩹":"bandage","🎁":"gift","🧹":"broom","🛒":"cart","⚒️":"hammer","⚒":"hammer","🗝️":"key","🗝":"key","✨":"spark","🐾":"paw","📋":"scroll","📚":"book","💼":"briefcase","🏆":"trophy","📜":"scroll","🛡️":"shield","🛡":"shield","👤":"user","◈":"home","☰":"menu","⚡":"bolt","💪":"dumbbell","✅":"check","❌":"xcircle","☠️":"skull","💨":"wind","🩸":"droplet","🌟":"spark","💀":"skull","📦":"box","💰":"coins","♻️":"recycle","♻":"recycle","📘":"book","🛍️":"bag","🛍":"bag","🔨":"hammer","🌀":"rotate","🧰":"briefcase","🏰":"castle","🪽":"feather","🪶":"feather","🗿":"gem","🔱":"spark","📌":"pin","🏛️":"castle","🏛":"castle","🏟️":"castle","🏟":"castle","🍖":"box"};function Xe(s,o="h-5 w-5"){const v=Ct[s]||Ct.spark;return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="${o}" aria-hidden="true">${v}</svg>`}function An(s,o,v={}){const{iconClass:M="h-4 w-4",wrapClass:c="inline-flex items-center gap-2",textClass:T=""}=v;return`<span class="${c}">${Xe(s,M)}<span class="${T}">${o}</span></span>`}function Ge(s=""){let o=String(s);return Object.entries(En).forEach(([v,M])=>{o=o.split(v).join(Xe(M,"h-4 w-4 inline-block align-[-0.2em]"))}),o}function mt(s=""){return String(s).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function Pt(s=""){return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ct(s=""){const o=mt(s);return o?`data-tooltip="${Pt(o)}"`:""}function ft(s=""){const o=ct(s);return o?`<span tabindex="0" role="button" aria-label="Más información" class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-200/80 cursor-help focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/65 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" ${o}>${Xe("info","h-3.5 w-3.5")}</span>`:""}const{SLOT_ORDER:Cn,SLOT_NAMES:In,VIEWS:os,VIEW_META:Qe,VIEW_GROUPS:Rt,MOBILE_PRIMARY_VIEWS:jn,MOBILE_OVERFLOW_VIEWS:is,ZONES:Ln,JOBS:Pn,PETS:Rn,SKILLS:Bn,ACHIEVEMENTS:Tn}=window.AetherConfig,{fmt:Dn,pct:qn,htmlStat:Vn,progressBar:On,timeLeft:zn,rarityName:Nn,rarityBadge:Hn,translateFilter:Fn,statLabel:_n,statTooltip:Gn}=window.AetherUtils,{state:ot,maxInventory:Wn,getPetData:Jn,getDerivedStats:Zn,scaleItemStats:Un,xpNeeded:ls,guildTotal:Kn,getStoreMeta:Yn}=window.AetherModel,{currentRank:Qn,zoneForPlayer:Xn,isZoneUnlocked:er,summarizeReward:tr,achievementProgress:ar,previewSalvage:nr,previewCraftItem:rr,previewEnhanceItem:sr,previewReforgeItem:or,previewTranscendItem:ir,getPityStatus:lr}=window.AetherSystems;function Bt(){return Qe[ot.currentView]||Qe.resumen}function cr(s,o=""){return`<span class="status-chip ${o}">${Ge(s)}</span>`}function dr(s,o,v="",M=""){return`
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div class="section-eyebrow">${s}</div>
          <div class="mt-1 flex items-center gap-2"><div class="section-title font-display leading-tight">${o}</div>${ft(v||o)}</div>
          ${v?`<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/76">${Ge(v)}</p>`:""}
        </div>
        ${M?`<div class="shrink-0">${Ge(M)}</div>`:""}
      </div>
    `}function ur(s,o,v="",M=""){return`
      <div class="surface-strong rounded-2xl p-4 ${v}" ${ct(M||o)}>
        <div class="mb-2 flex items-center gap-2 font-bold font-display text-white leading-tight">${Ge(s)}${ft(M||o)}</div>
        <p class="text-sm text-slate-300/78 leading-relaxed">${Ge(o)}</p>
      </div>
    `}function pr(s,o,v,M=""){const c=Pt(mt(s));return`<button type="button" class="btn ${o}" onclick="${v}" aria-label="${c}" ${ct(M||mt(s))}>${Ge(s)}</button>`}function mr(s){return`
      <div class="mobile-cta-bar md:hidden">
        <div class="glass-strong rounded-[1.6rem] p-3 grid grid-cols-2 gap-2 shadow-rail" role="group" aria-label="Acciones rápidas móviles">
          ${s.join("")}
        </div>
      </div>
    `}function fr(s,o="",v=""){const M=Qe[s]||Bt(),c=Rt.find(H=>H.views.includes(s)),T=c?c.views:[s];return`
      <div class="glass rounded-3xl p-5 sm:p-6">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/[.08] ring text-cyan-200">${Xe(M.icon,"h-4 w-4")}</span>
              ${c?c.title:"Vista individual"}
            </div>
            <div class="flex items-center gap-2"><h2 class="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">${M.label}</h2>${ft(M.desc)}</div>
            <p class="text-sm sm:text-base text-slate-300/78 mt-2 max-w-3xl">${Ge(M.desc)}</p>
            ${v?`<div class="hero-actions mt-4 max-w-2xl">${v}</div>`:""}
          </div>
          ${o?`<div class="glass rounded-2xl px-4 py-3 text-sm text-slate-200/90 shrink-0 border border-cyan-300/14">${Ge(o)}</div>`:""}
        </div>
        ${T.length>1?`
          <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-3">Navegación relacionada</div>
            <div class="view-links">
              ${T.map(H=>`
                <button type="button" class="view-chip ${ot.currentView===H?"active":""}" onclick="game.setView('${H}')" ${ot.currentView===H?'aria-current="page"':""}>
                  ${Xe(Qe[H].icon,"h-4 w-4")}
                  <span>${Qe[H].label}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}const Tt={SLOT_ORDER:Cn,SLOT_NAMES:In,VIEW_META:Qe,VIEW_GROUPS:Rt,MOBILE_PRIMARY_VIEWS:jn,ZONES:Ln,JOBS:Pn,PETS:Rn,SKILLS:Bn,ACHIEVEMENTS:Tn,fmt:Dn,pct:qn,htmlStat:Vn,progressBar:On,timeLeft:zn,rarityName:Nn,rarityBadge:Hn,translateFilter:Fn,statLabel:_n,statTooltip:Gn,state:ot,maxInventory:Wn,getPetData:Jn,getDerivedStats:Zn,scaleItemStats:Un,guildTotal:Kn,getStoreMeta:Yn,currentRank:Qn,zoneForPlayer:Xn,isZoneUnlocked:er,summarizeReward:tr,achievementProgress:ar,previewSalvage:nr,previewCraftItem:rr,previewEnhanceItem:sr,previewReforgeItem:or,previewTranscendItem:ir,getPityStatus:lr,icon:Xe,withIcon:An,replaceEmojiIcons:Ge,tooltipAttr:ct,activeMeta:Bt,statusChip:cr,sectionHeader:dr,infoCard:ur,actionButton:pr,actionBar:mr,pageLead:fr},{VIEW_GROUPS:Dt,MOBILE_PRIMARY_VIEWS:qt,VIEW_META:st,state:Ce,fmt:Ve,htmlStat:rt,getDerivedStats:gr,currentRank:vr,activeMeta:yr,getStoreMeta:hr,maxInventory:br,icon:it,withIcon:Ye,tooltipAttr:Je}=Tt;function xr(){const s=gr(),o=vr(),v=yr(),M=hr(),c=M.isSaving?"Guardando...":M.isDirty?"Cambios pendientes":M.lastSaveAt?`Guardado ${new Date(M.lastSaveAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Sin guardado",T=M.isSaving?"warning":M.isDirty?"danger":"success",H=s.maxHp?Ce.player.hp/s.maxHp:1,B=H<=.35?{text:"Vida crítica",tone:"danger"}:H<=.65?{text:"Vida media",tone:"warning"}:{text:"Vida estable",tone:"success"},l=s.maxHp?Math.max(0,Math.min(100,Ce.player.hp/s.maxHp*100)):0,R=s.maxEnergy?Math.max(0,Math.min(100,Ce.player.energy/s.maxEnergy*100)):0,Y=s.maxStamina?Math.max(0,Math.min(100,Ce.player.stamina/s.maxStamina*100)):0;return`
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
                <span class="status-chip ${T}">${c}</span>
                <span class="status-chip">Nivel ${Ce.player.level}</span>
                <span class="status-chip">Zona ${v.label}</span>
                <span class="status-chip ${B.tone}" data-hud-survivability>${B.text}</span>
              </div>
            </div>
            <div class="stat-pill rounded-2xl px-3.5 py-3 shrink-0 min-w-[168px]">
              <div class="text-xs text-slate-300/65 uppercase tracking-[.14em]">Recursos listos</div>
              <div class="text-base font-black text-emerald-300 leading-tight mt-1" data-hud-resources>${Ve(Ce.player.energy)}⚡ · ${Ve(Ce.player.stamina)}💪</div>
              <div class="text-[11px] text-slate-300/68 mt-1">Para combatir, forjar y explorar</div>
            </div>
          </div>

          <div class="space-y-3">
            <div data-tooltip="Salud actual sobre tu vida máxima.">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Vida</span>
                <span class="font-semibold text-slate-100" data-hud-current="hp">${Ve(Ce.player.hp)} / ${Ve(s.maxHp)}</span>
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
                <span class="font-semibold text-slate-100" data-hud-current="energy">${Ve(Ce.player.energy)} / ${Ve(s.maxEnergy)}</span>
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
                <span class="font-semibold text-slate-100" data-hud-current="stamina">${Ve(Ce.player.stamina)} / ${Ve(s.maxStamina)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_16px_rgba(74,222,128,.28)]" data-hud-bar="stamina" style="width:${Y}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <aside class="space-y-3">
          <div class="kpi-rail">
            ${rt("Oro",`<span data-hud-stat="gold">${Ve(Ce.player.gold)}</span>`,"","Moneda principal para comprar, forjar y mejorar.")}
            ${rt("Pociones",`<span data-hud-stat="potions">${Ve(Ce.player.potions)}</span>`,"","Curación rápida para sostener el ciclo activo.")}
            ${rt("Ataque",`<span data-hud-stat="attack">${Ve(s.attack)}</span>`,"","Daño base de tus golpes y habilidades ofensivas.")}
            ${rt("Mochila",`<span data-hud-stat="inventory">${Ce.player.inventory.length}/${br()}</span>`,"","Capacidad usada frente al máximo disponible.")}
          </div>

          <div class="glass rounded-2xl p-4">
            <div class="text-[11px] uppercase tracking-[.2em] text-cyan-200/62 mb-2">Acciones inmediatas</div>
            <div class="grid grid-cols-2 gap-2">
              <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${Je("Consume una poción para recuperar salud y sostener el ritmo de juego.")}>${Ye("flask","Poción")}</button>
              <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${Je("Limpia inventario vendiendo y reciclando excedentes.")}>${Ye("broom","Limpiar")}</button>
              <button class="btn !py-2.5" onclick="game.setView('arena')" ${Je("Abre la arena para continuar progreso activo.")}>${Ye("swords","Arena")}</button>
              <button class="btn !py-2.5" onclick="game.setView('inventario')" ${Je("Abre inventario para comparar y equipar mejoras.")}>${Ye("backpack","Inventario")}</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `}function Vt(s,o=!1){const v=st[s],M=Ce.currentView===s,c=M?'aria-current="page"':"";return o?`
      <button type="button" class="mobile-nav-btn ${M?"active":""}" onclick="game.setView('${s}')" aria-label="Ir a ${v.label}" ${c} ${Je(v.desc)}>
        <span class="nav-icon">${it(v.icon)}</span>
        <span class="nav-label">${v.label}</span>
      </button>
    `:`
    <button type="button" class="nav-link ${M?"active":""}" onclick="game.setView('${s}')" ${c} ${Je(v.desc)}>
      <span class="nav-icon">${it(v.icon)}</span>
      <span class="min-w-0">
        <span class="block font-bold leading-tight">${v.label}</span>
        <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${v.short}</span>
      </span>
    </button>
  `}function $r(){return`
    <div class="glass rounded-3xl p-4 lg:p-5 sticky top-4 space-y-5">
      <div>
        <div class="text-xs uppercase tracking-[.2em] text-slate-300/55 mb-1">Navegación</div>
        <div class="text-2xl font-display font-extrabold">Vistas</div>
        <p class="text-sm text-slate-300/74 mt-2">Cada pantalla mantiene una acción principal y módulos de apoyo.</p>
      </div>

      <div class="space-y-4">
        ${Dt.map(s=>`
          <div>
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45 mb-2">${s.title}</div>
            <div class="grid gap-2">
              ${s.views.map(o=>Vt(o)).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <div class="space-y-2">
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45">Acciones rápidas</div>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${Je("Consume una poción para recuperar salud y seguir combatiendo.")}>${Ye("flask","Poción")}</button>
          <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${Je("Vende o recicla excedentes para despejar la mochila.")}>${Ye("broom","Limpiar")}</button>
        </div>
      </div>
    </div>
  `}function Sr(){return`
    <nav class="mobile-nav glass-strong md:hidden" style="--mobile-nav-h: 6.25rem;">
      <div class="mobile-nav-grid">
        ${qt.map(s=>Vt(s,!0)).join("")}
        <button type="button" class="mobile-nav-btn ${Ce.ui.moreMenuOpen?"active":""}" onclick="game.toggleMoreMenu()" aria-label="Abrir más vistas">
          <span class="nav-icon">${it("menu")}</span>
          <span class="nav-label">Más</span>
        </button>
      </div>
    </nav>
  `}function kr(){return Ce.ui.moreMenuOpen?`
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
          ${Dt.map(s=>`
            <section class="mobile-sheet-group">
              <div class="mobile-sheet-title">${s.title}</div>
              <div class="grid grid-cols-1 gap-2">
                ${s.views.filter(o=>!qt.includes(o)).map(o=>`
                  <button type="button" class="nav-link ${Ce.currentView===o?"active":""}" onclick="game.setView('${o}')" ${Ce.currentView===o?'aria-current="page"':""}>
                    <span class="nav-icon">${it(st[o].icon)}</span>
                    <span class="min-w-0">
                      <span class="block font-bold leading-tight">${st[o].label}</span>
                      <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${st[o].short}</span>
                    </span>
                  </button>
                `).join("")||'<div class="text-sm text-slate-300/55 px-2 py-1">Ya visible en la barra inferior.</div>'}
              </div>
            </section>
          `).join("")}
        </div>
      </div>
    </div>
  `:""}const wr={renderHud:xr,renderDesktopNav:$r,renderMobileNav:Sr,renderMobileSheet:kr};function Mr(s){const{SLOT_ORDER:o,ZONES:v,SKILLS:M,state:c,maxInventory:T,getPetData:H,getDerivedStats:B,currentRank:l,zoneForPlayer:R,summarizeReward:Y,fmt:W,pct:z,htmlStat:f,timeLeft:J,icon:N,translateFilter:d,tooltipAttr:k,statusChip:g,sectionHeader:E,infoCard:D,actionButton:I,actionBar:U,pageLead:$,questCard:y,equippedSlotCard:t,inventoryCards:L,zoneSelector:se}=s;function _(){return c.timers.expedition?J(c.timers.expedition.endAt):"0s"}function O(){return c.timers.job?J(c.timers.job.endAt):"0s"}function fe(){const F=R(),Z=c.quests.find(me=>!me.claimed)||c.quests[0],ge=c.quests.filter(me=>!me.claimed).length,pe=c.player.inventory.length/Math.max(1,T()),he=pe>=.9?g("Mochila al límite","danger"):pe>=.7?g("Mochila alta","warning"):g("Mochila estable","success");return`
      <div class="space-y-5">
        ${$("resumen",`Zona activa: <b>${F.name}</b> · Contratos pendientes: <b>${ge}</b>`,[I("⚔️ Continuar en arena","btn-primary","game.setView('arena')","Entra directo a combate para progreso activo, oro y botín."),I("🎒 Ordenar inventario","","game.setView('inventario')","Optimiza mochila y equipo antes de seguir peleando."),I("🧭 Lanzar expedición","btn-violet","game.setView('expedicion')","Activa progreso pasivo cuando no quieras jugar en modo activo.")].join(""))}

        ${U([I("⚔️ Arena","btn-primary !py-3","game.setView('arena')"),I("🎒 Inventario","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.15fr,.85fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${E("Ruta recomendada","Elige una sola acción y sigue","La vista resumen prioriza la siguiente decisión y deja el resto como contexto.")}
            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('arena')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Pelear ahora</div>
                  ${g("Principal","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Usa Arena para mantener ritmo de progreso y conseguir botín inmediato.</p>
              </button>

              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('inventario')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Ajustar build</div>
                  ${he}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Abre Inventario si tienes mejoras pendientes o la mochila está cargada.</p>
              </button>

              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('expedicion')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Progreso pasivo</div>
                  ${g(c.timers.expedition?"Activo":"Disponible",c.timers.expedition?"success":"")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Expedición y Trabajo sostienen recursos cuando dejas la sesión en segundo plano.</p>
              </button>
            </div>

            <div class="mt-5 grid sm:grid-cols-2 gap-3">
              ${D("Expedición",c.timers.expedition?`${v[c.timers.expedition.zoneId].name} · <span data-live-timer="expedition">${_()}</span>`:"No hay expedición activa.","surface-subtle")}
              ${D("Trabajo",c.timers.job?`${c.timers.job.name} · <span data-live-timer="job">${O()}</span>`:"No hay trabajo activo.","surface-subtle")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${E("Objetivo en foco","Un contrato visible")}
              ${Z?y(Z):'<div class="empty-state">No hay contratos disponibles.</div>'}
              <div class="mt-4 grid grid-cols-2 gap-2">
                <button type="button" class="btn" onclick="game.setView('diario')">Diario</button>
                <button type="button" class="btn" onclick="game.setView('logros')">Logros</button>
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${E("Estado rápido","Solo señales de decisión")}
              <div class="grid grid-cols-2 gap-3">
                ${f("Mochila",`${c.player.inventory.length}/${T()}`,"","Capacidad usada frente al máximo disponible.")}
                ${f("Llaves",c.player.keys)}
                ${f("Pociones",c.player.potions)}
                ${f("Racha",`${c.streak.days||0}/7`)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function xe(){const F=B(),Z=l(),ge=H(),pe=F.maxHp?Math.round(c.player.hp/F.maxHp*100):100;return`
      <div class="space-y-5">
        ${$("perfil",`Rango activo: <b>${Z.title}</b> · Salud: <b>${pe}%</b>`,[I("🎒 Ver equipo","btn-primary","game.setView('inventario')"),I("🏋️ Entrenar","","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${E("Identidad y rendimiento","Quién eres y cómo rindes","Esta pantalla separa tu perfil, estado de combate y progreso meta.")}

            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Gladiador</div>
                <div class="text-3xl font-black mt-1 leading-tight">${c.player.name}</div>
                <div class="text-sm text-cyan-200/85 mt-1">${c.player.title}</div>
              </div>
              <div class="grid grid-cols-2 gap-3 sm:min-w-[250px]">
                ${f("Ascensiones",c.player.ascension,"","Cantidad de reinicios meta completados para progresión permanente.")}
                ${f("Piso más alto",c.player.highestDungeonFloor,"","Mayor piso de mazmorra superado hasta ahora.")}
                ${f("Inventario",`${c.player.inventory.length}/${T()}`,"","Capacidad actual de la mochila frente a su límite máximo.")}
                ${f("Polvo",c.player.relicDust,"","Moneda meta usada en reliquias y mejoras permanentes.")}
              </div>
            </div>

            <div class="mt-5 space-y-3">
              <div>
                <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-2">Stats críticas</div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  ${f("Ataque",W(F.attack))}
                  ${f("Defensa",W(F.defense))}
                  ${f("Velocidad",W(F.speed))}
                  ${f("Vida máxima",W(F.maxHp),"","Total de salud disponible antes de caer derrotado.")}
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
                  ${f("Golpe crítico",z(F.crit),"","Probabilidad de infligir daño aumentado en combate.")}
                  ${f("Esquiva",z(F.dodge))}
                  ${f("Bloqueo",z(F.block))}
                  ${f("Robo de vida",z(F.lifesteal),"","Porcentaje del daño que regresa como curación.")}
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
                ${ge?D(`${N(ge.icon||"paw","h-4 w-4 inline-block mr-2 align-[-0.15em]")}${ge.name}`,`Nivel ${c.player.petLevel} · XP ${c.player.petXp}/${3+c.player.petLevel}<br>${ge.desc}`,"surface-subtle"):D("Sin mascota activa","Incuba una en la vista de Mascota.","surface-subtle")}
              </div>
              <div class="grid grid-cols-2 gap-2 mt-4">
                <button type="button" class="btn btn-success" onclick="game.usePotion()" ${k("Consume una poción para recuperar salud fuera de combate.")}>🧪 Poción</button>
                <button type="button" class="btn btn-primary" onclick="game.autoHeal()" ${k("Aplica una curación automática si tienes recursos disponibles.")}>🩹 Curar</button>
                <button type="button" class="btn btn-gold" onclick="game.claimDaily()" ${k("Reclama tu recompensa diaria cuando esté lista.")}>🎁 Diario</button>
                <button type="button" class="btn" onclick="game.setView('mascota')" ${k("Abre la gestión de tu mascota activa y sus bonificaciones.")}>🐾 Mascota</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function ie(){const F=["weapon","chest","ring","amulet"].map(t).join(""),Z=c.ui.inventoryFilter,ge=c.player.inventory.length,pe=c.player.inventory.filter(me=>{const de=c.player.equipment[me.slot];return!de||(me.score||0)>(de.score||0)}).length,he=c.player.inventory.filter(me=>me.rarity==="legendary"||me.rarity==="mythic"||me.rarity==="ascendant").length;return`
      <div class="space-y-5">
        ${$("inventario",`Capacidad: <b>${c.player.inventory.length}/${T()}</b> · Mejoras potenciales: <b>${pe}</b>`,[I("🧹 Gestión automática","btn-primary","game.autoManage()","Vende y recicla excedentes de forma automática."),I("⚒️ Forja","","game.setView('forja')"),I("🛒 Mercado","btn-violet","game.setView('mercado')")].join(""))}

        ${U([I("🧹 Limpiar","btn-primary !py-3","game.autoManage()"),I("⚒️ Forja","!py-3","game.setView('forja')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${E("Mochila","Filtra, compara y actúa","El inventario prioriza lectura rápida de mejoras y acciones de alto impacto.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${f("Objetos",ge,"Total en mochila")}
              ${f("Mejoras",pe,"Comparadas contra equipado")}
              ${f("Raros+",he,"Legendarios y míticos")}
            </div>

            <div class="space-y-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Filtro por tipo</div>
                <div class="filters-row mt-2">
                  ${["all",...o].map(me=>`
                    <button type="button" class="btn filter-pill ${Z===me?"active tab-btn":""}" onclick="game.setInventoryFilter('${me}')" ${k(`Filtrar inventario por ${d(me).toLowerCase()}.`)}>${d(me)}</button>
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
                  ${["common","uncommon","rare","epic","legendary","mythic","ascendant"].map(me=>`
                    <button type="button" class="btn filter-pill ${Z===me?"active tab-btn":""}" onclick="game.setInventoryFilter('${me}')" ${k(`Filtrar inventario por ${d(me).toLowerCase()}.`)}>${d(me)}</button>
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
              <div class="mt-4 space-y-2">${F}</div>
            </details>

            <div class="glass rounded-3xl p-5">
              ${E("Reglas rápidas","Qué vender o guardar")}
              <div class="grid gap-3">
                ${D("Prioridad","Equipa mejoras claras primero, luego limpia duplicados de bajo puntaje.","surface-subtle")}
                ${D("Si dudas","Si no mejora build ni economía, recicla o vende para liberar capacidad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function P(){const F=R(),Z=c.player.activeSkills.map(de=>M[de]).filter(Boolean),ge=c.combatHistory.slice(0,2),pe=B(),me=(pe.maxHp?c.player.hp/pe.maxHp:1)<.5?"normal":Z.length>=2?"elite":"normal";return`
      <div class="space-y-5">
        ${$("arena",`Zona: <b>${F.name}</b> · Coste <b>${F.energyCost}⚡ / ${F.staminaCost}💪</b>`,[I("⚔️ Normal","btn-primary","game.fightArena('normal')"),I("👑 Élite","btn-violet","game.fightArena('elite')"),I("🔥 x3","btn-gold","game.arenaBlitz(3)")].join(""))}

        ${U([I("⚔️ Normal","btn-primary !py-3","game.fightArena('normal')"),I("👑 Élite","btn-violet !py-3","game.fightArena('elite')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${E("Combate","Decide modo y entra","La arena muestra la decisión principal primero. Zona, build e historial quedan como soporte.")}

            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left" onclick="game.fightArena('normal')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Normal</div>
                  ${g(me==="normal"?"Recomendado":"Estable","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Flujo seguro para mantener ritmo cuando estás ajustando build.</p>
              </button>

              <button type="button" class="surface-strong elite-card rounded-2xl p-4 text-left" onclick="game.fightArena('elite')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Élite</div>
                  ${g(me==="elite"?"Recomendado":"Riesgo","warning")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Más exigente, mejor retorno cuando ya tienes vida y habilidades estables.</p>
              </button>

              <button type="button" class="surface-strong reward-card rounded-2xl p-4 text-left" onclick="game.arenaBlitz(3)">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Racha x3</div>
                  ${g("Acelerar")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Multiplica combates para subir ritmo cuando dominas la zona actual.</p>
              </button>
            </div>

            <div class="grid sm:grid-cols-3 gap-3 mt-4">
              ${f("Zona activa",F.name,F.theme)}
              ${f("Coste",`${F.energyCost}⚡ / ${F.staminaCost}💪`,"Por combate")}
              ${f("Registro",`${c.stats.wins}V / ${c.stats.losses}D`,"Historial global")}
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
              <div class="mt-4">${se()}</div>
            </details>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${E("Preparación","Build activa para la zona")}
              <div class="grid gap-3">
                ${D("Habilidades activas",Z.length?Z.map(de=>`${de.name} · Nv ${c.player.skillLevels[de.id]||1}`).join("<br>"):"No hay habilidades activas equipadas.","surface-subtle")}
                ${D("Contexto",`Victorias ${c.stats.wins} · Derrotas ${c.stats.losses} · Bajas ${c.stats.kills}`,"surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${E("Historial","Últimos resultados")}
              <div class="space-y-3">
                ${ge.length?ge.map(de=>`
                    <button type="button" class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${de.id}')">
                      <div class="font-black ${de.result==="victory"?"text-emerald-300":"text-rose-300"}">${de.title}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${de.zone}</div>
                      <div class="text-xs text-slate-300/58 mt-2">${Y(de.rewards)}</div>
                    </button>
                  `).join(""):'<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}return{renderResumen:fe,renderPerfil:xe,renderInventario:ie,renderArena:P}}function Er(s){const{SLOT_ORDER:o,SLOT_NAMES:v,ZONES:M,JOBS:c,PETS:T,SKILLS:H,ACHIEVEMENTS:B,state:l,getPetData:R,guildTotal:Y,achievementProgress:W,fmt:z,htmlStat:f,progressBar:J,icon:N,tooltipAttr:d,replaceEmojiIcons:k,rarityName:g,rarityBadge:E,zoneSelector:D,compareAgainstEquipped:I,itemStatGrid:U,durationChoiceCard:$,previewCraftItem:y,previewEnhanceItem:t,previewReforgeItem:L,previewTranscendItem:se,getPityStatus:_,pager:O,expeditionTimerText:fe,jobTimerText:xe,pageLead:ie,sectionHeader:P,infoCard:F,actionButton:Z,actionBar:ge,statusChip:pe}=s;function he(){const S=!!l.timers.expedition;return`
      <div class="space-y-5">
        ${ie("expedicion",S?`En curso: <b>${M[l.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${fe()}</span>`:"Sin expedición activa",[Z("30s","btn-primary",`game.startExpedition(${l.player.zoneId}, 30)`),Z("60s","",`game.startExpedition(${l.player.zoneId}, 60)`),Z("120s","btn-gold",`game.startExpedition(${l.player.zoneId}, 120)`)].join(""))}

        ${ge([Z("30s","btn-primary !py-3",`game.startExpedition(${l.player.zoneId}, 30)`),Z("120s","btn-gold !py-3",`game.startExpedition(${l.player.zoneId}, 120)`)])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Elige destino","Primero define una zona segura para tu estado actual de recursos.")}
            ${D()}

            <div class="mt-5">
              ${P("Decisión","Elige duración","Duraciones cortas para control activo, largas para progreso pasivo.")}
              <div class="grid lg:grid-cols-3 gap-3">
                ${$(30,"success","Salida corta para mantener flujo y reaccionar rápido.")}
                ${$(60,"","Balance para sesiones mixtas entre combate y gestión.")}
                ${$(120,"warning","Más retorno si vas a dejar la partida corriendo.")}
              </div>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Regla rápida")}
              <div class="grid gap-3">
                ${F("Estado actual",S?"Ya tienes una expedición activa: espera el temporizador o cambia de foco.":"No hay expedición activa: puedes lanzar una ruta ahora.","surface-subtle")}
                ${F("Destino","Usa zonas cómodas cuando solo quieres materiales estables.","surface-subtle")}
                ${F("Después","Cuando termine, vuelve a Arena o Inventario para cerrar el ciclo.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function me(){const S=l.player.keys>0;return`
      <div class="space-y-5">
        ${ie("mazmorra",`Llaves: <b>${l.player.keys}</b> · Piso más alto: <b>${l.player.highestDungeonFloor}</b>`,[Z("🗝️ Entrar","btn-gold","game.runDungeon()","Consume una llave y empieza una incursión de mazmorra."),Z("🎒 Revisar equipo","","game.setView('inventario')")].join(""))}

        ${ge([Z("🗝️ Entrar","btn-gold !py-3","game.runDungeon()"),Z("🎒 Equipo","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Ruta de incursión","La mazmorra tiene un recorrido fijo por intento: entra solo cuando estés listo.")}
            <div class="grid gap-2 text-sm">
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>1. Enemigo base</span>${pe("Entrada")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>2. Enemigo base</span>${pe("Presión")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>3. Enemigo élite</span>${pe("Riesgo","warning")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>4. Jefe del piso</span>${pe("Pico","danger")}</div>
            </div>

            <div class="mt-4 grid sm:grid-cols-3 gap-3">
              ${f("Llaves",l.player.keys,S?"Listo para entrar":"Necesitas conseguir llaves")}
              ${f("Piso récord",l.player.highestDungeonFloor,"Tu tope actual")}
              ${f("Estado",S?"Disponible":"Bloqueado",S?"Tienes acceso inmediato":"Visita mercado o recompensas")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Decisión","¿Entrar ahora?")}
              <div class="grid gap-3">
                ${F("Recompensa","Oro, XP, esencia, fragmentos, llaves extra y botín de mayor calidad.","reward-card","Las mazmorras elevan el techo de recompensa frente al farmeo básico.")}
                ${F("Checklist","Entra cuando tengas llaves, pociones y una build ya ordenada.","surface-subtle")}
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
    `}function de(){const S=[...l.market.items].sort((h,j)=>(j.score||0)-(h.score||0))[0],e=l.market.items.filter(h=>(h.price||0)<=l.player.gold).length,m=l.market.items.filter(h=>I(h).tone==="success").length;return`
      <div class="space-y-5">
        ${ie("mercado",`Oro disponible: <b>${z(l.player.gold)}</b>`,[Z("🔄 Refrescar","btn-primary","game.refreshMarket()","Renueva la rotación del mercado con nuevas ofertas."),Z("🎒 Comparar con mochila","","game.setView('inventario')","Abre el inventario para comparar las ofertas con tu equipo actual.")].join(""))}

        ${ge([Z("🔄 Refrescar","btn-primary !py-3","game.refreshMarket()"),Z("🎒 Mochila","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Rotación actual","Compra solo mejoras reales: evita gastar oro en cambios de impacto bajo.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${f("Comprables",e,"Con tu oro actual")}
              ${f("Mejoras",m,"Frente al equipo equipado")}
              ${f("Oferta top",S?v[S.slot]:"—",S?S.name:"Sin oferta destacada")}
            </div>

            ${S?`
              <div class="surface-strong reward-card rounded-2xl p-4 mb-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Oferta destacada</div>
                    <div class="mt-1 flex flex-wrap items-center gap-2">
                      <div class="font-black rarity-${S.rarity} text-lg leading-snug">${S.name}</div>
                      ${E(S.rarity)}
                    </div>
                    <p class="text-sm text-slate-300/74 mt-2">${I(S).detail}</p>
                  </div>
                  <div class="shrink-0 text-right">
                    <div class="text-sm font-bold text-amber-200">${z(S.price)} oro</div>
                    <div class="mt-2">${pe(I(S).label,I(S).tone)}</div>
                  </div>
                </div>
              </div>
            `:""}

            <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              ${l.market.items.map(h=>{const j=I(h),w=(h.price||0)<=l.player.gold;return`
                  <div class="glass rounded-2xl p-4 market-card ${w?"":"opacity-80"}" ${d(`Oferta de rareza ${g(h.rarity)}. Precio ${z(h.price)} de oro. ${j.detail}`)}>
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${h.rarity} leading-snug">${h.name}</div>${E(h.rarity)}</div>
                        <div class="text-xs text-slate-300/60 mt-1">${v[h.slot]} · Nivel ${h.level}</div>
                      </div>
                      ${pe(j.label,j.tone)}
                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      ${U(h,4)}
                    </div>

                    <div class="market-meta mt-3">
                      <span class="text-sm text-slate-300/72">${j.detail}</span>
                      <span class="text-sm font-bold ${w?"text-amber-200":"text-rose-200"}">${z(h.price)} oro</span>
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
                ${F("Oferta destacada",S?`${S.name} lidera la rotación actual.`:"No hay oferta destacada ahora mismo.","reward-card")}
                ${F("No fuerces compra","Si nada mejora de verdad, conserva oro para una mejor rotación o para forja.","surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Consumibles útiles")}
              <div class="grid gap-2">
                <button type="button" class="btn btn-success" onclick="game.buyResource('potion')" ${d("Compra una poción para curarte más tarde por 120 de oro.")}>🧪 Poción · 120 oro</button>
                <button type="button" class="btn btn-violet" onclick="game.buyResource('key')" ${d("Compra una llave para acceder a mazmorras por 180 de oro.")}>🗝️ Llave · 180 oro</button>
                <button type="button" class="btn btn-primary" onclick="game.buyResource('essence')" ${d("Compra esencia para forja y progresión premium por 140 de oro.")}>✨ Esencia · 140 oro</button>
                <button type="button" class="btn" onclick="game.buyResource('sigil')" ${d("Compra un sigilo para rutas de trascendencia por 260 de oro.")}>🔷 Sigilo · 260 oro</button>
                <button type="button" class="btn" onclick="game.buyResource('food')" ${d("Compra comida para apoyar trabajos y mascotas por 65 de oro.")}>🍖 Comida x2 · 65 oro</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function A(){const S=_("forge"),e=_("market"),m=(j={})=>Object.entries(j).filter(([,w])=>w>0).map(([w,ne])=>`${z(ne)} ${w}`).join(" · "),h=(j=[])=>j.map(w=>`${Math.round((w.chance||0)*100)}% ${g(w.rarity)}`).join(" · ");return`
      <div class="space-y-5">
        ${ie("forja",`Hierro: <b>${z(l.player.iron)}</b> · Esencia: <b>${z(l.player.essence)}</b> · Sigilos: <b>${z(l.player.sigils||0)}</b>`,[Z("⚒️ Forjar arma","btn-primary","game.craftItem('weapon', 'basic')","Forja determinista con calidad variable."),Z("✨ Avanzada arma","btn-violet","game.craftItem('weapon', 'advanced')","Mayor coste, mejor piso de rareza y más afijos."),Z("🎒 Revisar inventario","","game.setView('inventario')")].join(""))}

        ${ge([Z("⚒️ Básica","btn-primary !py-3","game.craftItem('weapon', 'basic')"),Z("✨ Avanzada","btn-violet !py-3","game.craftItem('weapon', 'advanced')")])}

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
                    <div class="rounded-xl bg-white/[.04] p-2.5" ${d("Coste y tabla de outcomes de la receta básica.")}>Básica: <b>${m(w.cost)}</b><br><span class="text-slate-300/62">${h(w.outcomes)}</span></div>
                    <div class="rounded-xl bg-white/[.04] p-2.5" ${d("Coste y tabla de outcomes de la receta avanzada.")}>Avanzada: <b>${m(ne.cost)}</b><br><span class="text-slate-300/62">${h(ne.outcomes)}</span></div>
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
                ${["weapon","chest","ring","amulet"].map(j=>{const w=l.player.equipment[j],ne=w?t(j):null,ce=w?L(w.id):null,ue=w?se(w.id):null;return`
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${v[j]}</div>
                       <div class="font-black break-words ${w?`rarity-${w.rarity}`:"text-slate-400/80"}">${w?w.name:"Vacío"}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${w?`Nivel ${w.level} · Mejora +${w.upgrade||0}`:"Equipa algo para mejorarlo."}</div>
                      ${w&&ne?`<div class="text-xs text-slate-300/62 mt-2">Enhance: ${Math.round(ne.successChance*100)}% · coste ${m(ne.cost)}</div>`:""}
                      ${w&&ce?`<div class="text-xs text-slate-300/62 mt-1">Reforge: ${Math.round(ce.successChance*100)}% · coste ${m(ce.cost)}</div>`:""}
                      ${w&&ue?`<div class="text-xs text-slate-300/62 mt-1">Transcend: ${Math.round(ue.successChance*100)}% · ${ue.from} → ${ue.to}</div>`:""}
                      <div class="grid grid-cols-3 gap-2 mt-3">
                        <button type="button" class="btn btn-gold !py-2" ${w?`onclick="game.enhanceItem('${j}')"`:"disabled"} ${d("Mejora incremental estable de la pieza equipada.")}>Enhance</button>
                        <button type="button" class="btn btn-violet !py-2" ${w?`onclick="game.reforgeItem('${w.id}')"`:"disabled"} ${d("Redistribuye stats de forma controlada sin destruir el objeto.")}>Reforge</button>
                        <button type="button" class="btn !py-2" ${w&&ue?`onclick="game.transcendItem('${w.id}')"`:"disabled"} ${d("Evoluciona la rareza si cumples requisitos y coste de transcend.")}>Transcend</button>
                      </div>
                    </div>
                  `}).join("")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Pity y regla de gasto")}
              <div class="grid gap-3">
                ${F("Pity forja",`Epic en ${S.epic} intentos sin hito · Mythic en ${S.mythic}.`,"surface-subtle")}
                ${F("Pity mercado",`Epic en ${e.epic} rotaciones sin hito · Mythic en ${e.mythic}.`,"surface-subtle")}
                ${F("Estrategia","Hierro para volumen, esencia para upgrades, sigilos/echo para evolución tardía.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function i(){const S={barracks:"Más ataque y defensa global.",treasury:"Más oro en todas las actividades.",sanctuary:"Más vida máxima y regeneración.",hunters:"Mejor botín y hallazgos más finos.",arsenal:"Más capacidad de inventario."};return`
      <div class="space-y-5">
        ${ie("gremio",`Nivel total invertido: <b>${Y()}</b>`,[Z("🪙 Ver mercado","","game.setView('mercado')"),Z("🏋️ Entrenar","btn-primary","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Mejoras del gremio","Cada edificio empuja un estilo de progreso distinto.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${Object.entries(l.player.guild).map(([e,m])=>{const h=m+1,j=180+h*110+Y()*35,w=Math.max(1,Math.floor(h/2));return`
                  <div class="glass rounded-2xl p-4">
                    <div class="font-black text-lg capitalize" ${d(S[e])}>${e}</div>
                    <div class="text-sm text-slate-300/75 mt-1">${S[e]}</div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div class="rounded-xl bg-white/[.04] p-2">Nivel <b>${m}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Siguiente <b>${h}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Oro <b>${z(j)}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Esencia <b>${z(w)}</b></div>
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
                ${F("Especialízate","Sube uno o dos edificios primero para sentir impacto temprano.","surface-subtle")}
                ${F("Prioridad típica","Tesorería y Barracas suelen notarse antes en la partida.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function X(){return`
      <div class="space-y-5">
        ${ie("entrenamiento",`Puntos de atributo: <b>${l.player.attributePoints}</b> · habilidades: <b>${l.player.skillPoints}</b>`,[Z("👤 Perfil","","game.setView('perfil')"),Z("⚔️ Arena","btn-primary","game.setView('arena')")].join(""))}

        <div class="grid xl:grid-cols-[.95fr,1.05fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Atributos base","Primero ajusta base estadística; después pule habilidades activas.")}
            <div class="grid sm:grid-cols-2 gap-3">
              ${[["strength","Fuerza","Ataque y robo de vida."],["agility","Agilidad","Velocidad, crítico y esquiva."],["endurance","Resistencia","Vida, defensa y bloqueo."],["discipline","Disciplina","Energía y aguante máximo."]].map(([S,e,m])=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${e}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${m}</div>
                  <div class="text-sm mt-3">Nivel actual: <b>${l.player.training[S]}</b></div>
                  <button type="button" class="btn btn-primary mt-3 w-full" onclick="game.trainAttribute('${S}')">Subir</button>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="glass rounded-3xl p-5">
            ${P("Decisión","Habilidades activas")}
            <div class="space-y-3">
              ${Object.values(H).map(S=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${S.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${S.desc}</div>
                  <div class="text-xs text-slate-300/60 mt-2">Recarga ${S.cooldown} · Desbloqueo Nv ${S.unlockLevel}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button type="button" class="btn !py-2" onclick="game.toggleActiveSkill('${S.id}')">${l.player.activeSkills.includes(S.id)?"Quitar":"Equipar"}</button>
                    <button type="button" class="btn btn-violet !py-2" ${l.player.unlockedSkills.includes(S.id)?`onclick="game.upgradeSkill('${S.id}')"`:"disabled"}>Mejorar</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function K(){const S=!!l.timers.job;return`
      <div class="space-y-5">
        ${ie("trabajo",S?`En curso: <b>${l.timers.job.name}</b> · <span data-live-timer="job">${xe()}</span>`:"Sin trabajo activo",[Z("🧭 Expedición","","game.setView('expedicion')"),Z("💰 Mercado","btn-gold","game.setView('mercado')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Trabajos disponibles","Elige una fuente de oro estable cuando no quieras combate activo.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${c.map(e=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black text-lg">${e.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${e.desc}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Duración <b>${e.duration}s</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${z(e.reward.gold)} oro</b></div>
                  </div>
                  <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.startJob('${e.id}')" ${d("Inicia este trabajo y bloquea el temporizador hasta su finalización.")}>Aceptar</button>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Regla rápida")}
              <div class="grid gap-3">
                ${F("Estado",S?"Ya tienes un trabajo activo: espera el temporizador.":"No hay trabajo activo: puedes aceptar uno ahora.","surface-subtle")}
                ${F("Alternativa","Si también quieres botín, Expedición suele aportar más variedad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function le(){const S=R();return`
      <div class="space-y-5">
        ${ie("mascota",S?`Activa: <b>${S.name}</b>`:"Aún no tienes mascota",[Z("👤 Perfil","","game.setView('perfil')"),Z("🥚 Incubar","btn-violet","game.hatchPet()","Consume recursos para obtener una mascota aleatoria.")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Mascota activa","Gestiona alimentación y progreso solo del compañero que llevas activo.")}
            ${S?`
              <div class="glass rounded-2xl p-5">
                <div class="text-cyan-200">${N(S.icon||"paw","h-9 w-9")}</div>
                <div class="font-display font-extrabold text-2xl mt-2">${S.name}</div>
                <div class="text-sm text-slate-300/75 mt-1">${S.desc}</div>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  ${f("Nivel",l.player.petLevel)}
                  ${f("XP",`${l.player.petXp}/${3+l.player.petLevel}`)}
                </div>
                <div class="grid sm:grid-cols-2 gap-3 mt-4">
                  <button type="button" class="btn btn-success" onclick="game.feedPet()">${N("box","h-4 w-4")}<span>Alimentar</span></button>
                  <button type="button" class="btn btn-danger" onclick="game.releasePet()" ${d("Libera la mascota actual y pierdes sus bonos activos.")}>Liberar</button>
                </div>
              </div>
            `:`
              <div class="glass rounded-2xl p-5">
                <p class="text-sm text-slate-300/75">Incuba un huevo con 5 fragmentos y 8 de esencia para recibir un compañero aleatorio.</p>
                <button type="button" class="btn btn-violet mt-4" onclick="game.hatchPet()">${N("spark","h-4 w-4")}<span>Incubar huevo</span></button>
              </div>
            `}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${P("Soporte","Catálogo rápido")}
            <div class="grid gap-3">
              ${T.map(e=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-bold font-display inline-flex items-center gap-2">${N(e.icon||"paw","h-4 w-4")}<span>${e.name}</span></div>
                  <div class="text-sm text-slate-300/75 mt-1">${e.desc}</div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function be(){const S=B.slice(0,6);return`
      <div class="space-y-5">
        ${ie("logros",`Polvo de reliquia: <b>${l.player.relicDust}</b>`,[Z("🔱 Ascender","btn-gold","game.ascend()","Reinicia gran parte del progreso para ganar mejoras meta permanentes."),Z("📘 Diario","","game.setView('diario')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Hitos activos","Se muestra una selección corta para mantener foco de progresión.")}
            <div class="space-y-3">
              ${S.map(e=>{const m=W(e),h=l.claimedAchievements.includes(e.id);return`
                  <div class="glass rounded-2xl p-4">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black text-lg">${e.title}</div>
                        <div class="text-sm text-slate-300/75 mt-1">${e.desc}</div>
                      </div>
                      <div class="text-sm rounded-full px-3 py-1 ${h?"bg-emerald-400/15 text-emerald-300 border border-emerald-300/20":"bg-white/[.05]"}">${h?"Listo":`${m}/${e.target}`}</div>
                    </div>
                    <div class="mt-3">${J(m,e.target,"bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-300 shadow-[0_0_18px_rgba(34,211,238,.30)]","Progreso","Avance total hacia este logro y sus recompensas meta.")}</div>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${P("Decisión","Ascensión")}
              <p class="text-sm text-slate-300/75 mt-2">Actívala cuando quieras convertir una partida avanzada en progreso permanente.</p>
              <button type="button" class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${d("Reinicia gran parte de la partida a cambio de progreso meta permanente.")}>🔱 Ascender</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${P("Soporte","Altar de reliquias")}
              <div class="grid gap-3 mt-4">
                ${[["wrath","Ira"],["fortune","Fortuna"],["vitality","Vitalidad"],["momentum","Impulso"]].map(([e,m])=>`
                  <button type="button" class="btn btn-violet justify-between" onclick="game.spendRelic('${e}')" ${d(`Invierte polvo de reliquia en ${m.toLowerCase()} para obtener bonificaciones permanentes.`)}><span>${m}</span><span>Nv ${l.player.relics[e]}</span></button>
                `).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function $e(){const S=Math.max(8,l.ui.journalPageSize||16),e=l.journal||[],m=Math.max(1,Math.ceil(e.length/S)),h=Math.min(Math.max(1,l.ui.journalPage||1),m),j=(h-1)*S,w=e.slice(j,j+S);return`
      <div class="space-y-5">
        ${ie("diario",`Entradas guardadas: <b>${e.length}</b>`,[Z("🏆 Ver logros","","game.setView('logros')"),Z("📋 Resumen","btn-primary","game.setView('resumen')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,300px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${P("Contexto","Registro reciente","El diario es histórico: úsalo para revisar, no para decidir acciones inmediatas.")}
            <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${e.length?j+1:0}</b>–<b>${Math.min(j+S,e.length)}</b> de <b>${e.length}</b>.</div>
            <div class="space-y-3">
              ${w.map(ne=>`
                <div class="glass rounded-2xl p-4 cv-auto">
                  <div class="font-black">${k(ne.icon)} <span class="font-semibold">${new Date(ne.ts).toLocaleTimeString("es-ES")}</span></div>
                  <div class="text-sm text-slate-200/90 leading-relaxed mt-2">${ne.text}</div>
                </div>
              `).join("")||'<div class="text-sm text-slate-300/75">Todavía no hay entradas en el diario.</div>'}
            </div>
            ${O(h,m,"setJournalPage")}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${P("Soporte","Uso recomendado")}
            <div class="grid gap-3">
              ${F("Consulta","Revisa aquí eventos y recompensas pasadas.","surface-subtle")}
              ${F("Acción","Para progresar, vuelve a Resumen, Arena o Inventario.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}return{renderExpedicion:he,renderMazmorra:me,renderMercado:de,renderForja:A,renderGremio:i,renderEntrenamiento:X,renderTrabajo:K,renderMascota:le,renderLogros:be,renderDiario:$e}}const{SLOT_ORDER:Ot,SLOT_NAMES:gt,ZONES:vt,JOBS:Ar,PETS:Cr,SKILLS:zt,ACHIEVEMENTS:Ir,fmt:We,pct:Nt,htmlStat:at,progressBar:Ht,timeLeft:yt,state:Le,maxInventory:jr,getPetData:Ft,getDerivedStats:Lr,scaleItemStats:Pr,guildTotal:Rr,currentRank:Br,zoneForPlayer:Tr,isZoneUnlocked:pt,summarizeReward:_t,achievementProgress:Dr,previewSalvage:qr,previewCraftItem:Vr,previewEnhanceItem:Or,previewReforgeItem:Gt,previewTranscendItem:Wt,getPityStatus:zr,icon:lt,replaceEmojiIcons:Nr,rarityName:Jt,rarityBadge:ht,translateFilter:Hr,statLabel:Fr,statTooltip:_r,tooltipAttr:Ze,statusChip:dt,sectionHeader:Zt,infoCard:Ut,actionButton:Kt,actionBar:Yt,pageLead:Qt}=Tt;function Gr(s){const o=Le.player.equipment[s];return`
    <div class="rounded-2xl ring p-3 bg-white/[.04]">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${gt[s]}</div>
          ${o?`<div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-bold leading-snug break-words rarity-${o.rarity}">${o.name}</div>${ht(o.rarity)}</div>
               <div class="text-xs text-slate-300/70 mt-1">Nivel ${o.level} · Mejora +${o.upgrade||0}</div>`:'<div class="font-bold mt-1 text-slate-400/80">Vacío</div>'}
        </div>
        ${o?`<button type="button" class="btn !px-3 !py-2 text-xs" onclick="game.unequipItem('${s}')">Quitar</button>`:""}
      </div>
    </div>
  `}function Wr(s){return`
    <div class="glass rounded-2xl p-4">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div class="min-w-0">
          <div class="font-black text-lg">${s.title}</div>
          <div class="text-sm text-slate-300/75 mt-1">${s.desc}</div>
          <div class="text-xs text-slate-300/60 mt-3">${_t(s.reward)}</div>
        </div>
        <button type="button" class="btn ${s.completed?"btn-success":""}" ${s.completed&&!s.claimed?`onclick="game.claimQuest('${s.id}')"`:"disabled"}>
          ${s.claimed?"Cobrada":s.completed?"Cobrar":`${We(s.progress)}/${We(s.target)}`}
        </button>
      </div>
      <div class="mt-3">${Ht(s.progress,s.target,"bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-300 shadow-[0_0_18px_rgba(192,132,252,.32)]","Progreso","Avance actual del contrato seleccionado.")}</div>
    </div>
  `}function Jr(){return Le.timers.expedition?yt(Le.timers.expedition.endAt):"0s"}function Zr(){return Le.timers.job?yt(Le.timers.job.endAt):"0s"}function Xt(s,o,v){return o<=1?"":`
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
      <div class="text-sm text-slate-300/72">Página <b>${s}</b> de <b>${o}</b></div>
      <div class="flex gap-2">
        <button type="button" class="btn !py-2 !px-3" ${s<=1?"disabled":`onclick="game.${v}(${s-1})"`}>← Anterior</button>
        <button type="button" class="btn !py-2 !px-3" ${s>=o?"disabled":`onclick="game.${v}(${s+1})"`}>Siguiente →</button>
      </div>
    </div>
  `}function ea(){return`
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
      ${vt.map(s=>`
        <button
          type="button"
          class="text-left glass rounded-2xl p-4 transition ${Le.player.zoneId===s.id?"ring ring-cyan-300/35 bg-cyan-400/8":""} ${pt(s)?"":"opacity-45"}"
          ${pt(s)?`onclick="game.setZone(${s.id})"`:"disabled"}
          ${Ze(`Zona ${s.name}. Requiere nivel ${s.unlockLevel} y consume ${s.energyCost} de energía y ${s.staminaCost} de aguante.`)}
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="font-black text-lg">${s.name}</div>
              <div class="text-xs text-slate-300/60 mt-1">Nivel ${s.unlockLevel}+ · ${s.theme}</div>
            </div>
            <div class="text-xs rounded-full px-2.5 py-1 bg-white/[.06]">${pt(s)?"Activa":"Bloqueada"}</div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${lt("bolt","h-4 w-4 text-cyan-300")}<span>${s.energyCost} energía</span></div>
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${lt("dumbbell","h-4 w-4 text-emerald-300")}<span>${s.staminaCost} aguante</span></div>
          </div>
        </button>
      `).join("")}
    </div>
  `}function Ur(s,o){return s==="crit"||s==="dodge"||s==="block"||s==="lifesteal"?Nt(o):We(o)}const Kr={common:5,uncommon:7,rare:9,epic:11,legendary:12,mythic:14,ascendant:16};function Yr(s){const o=Kr[s.rarity]||10,v=s.upgrade||0;return{current:v,cap:o,remaining:Math.max(0,o-v)}}function Qr(s){const o=Math.round((s.qualityRoll||1)*100);return o>=114?`${o}% · excepcional`:o>=104?`${o}% · alta`:o>=96?`${o}% · estable`:`${o}% · baja`}function Xr(s){if(!s)return"Sin datos";const v=["iron","wood","essence","sigils","echoShards"].map(M=>({key:M,value:s[M]||0})).filter(M=>M.value>0).slice(0,3).map(M=>`+${M.value} ${M.key}`);return v.length?v.join(" · "):"Sin valor de reciclaje"}function bt(s){const o=Le.player.equipment[s.slot];if(!o)return{label:"Mejora limpia",tone:"success",detail:"No tienes una pieza equipada en este espacio."};const v=(s.score||0)-(o.score||0);return v>0?{label:`+${We(v)} puntuación`,tone:"success",detail:`Mejora respecto a ${o.name}.`}:v<0?{label:`${We(v)} puntuación`,tone:"danger",detail:`Rinde peor que ${o.name}.`}:{label:"Puntuación similar",tone:"",detail:`Rinde de forma parecida a ${o.name}.`}}function ta(s,o=4){return Object.entries(Pr(s)).slice(0,o).map(([v,M])=>`<div class="rounded-xl bg-white/[.04] p-2.5" ${Ze(_r(v))}>${Fr(v)}: <b>${Ur(v,M)}</b></div>`).join("")}function es(s){const o=s.filter(M=>M.rarity==="legendary"||M.rarity==="mythic"||M.rarity==="ascendant").length,v=s.filter(M=>bt(M).tone==="success").length;return`
    <div class="grid sm:grid-cols-3 gap-3 mb-4">
      ${at("Objetos filtrados",s.length)}
      ${at("Mejoras posibles",v)}
      ${at("Legendarios",o,"","Cantidad de objetos legendarios visibles en este filtro.")}
    </div>
  `}function ts(s,o,v){return`
    <div class="surface-strong rounded-2xl p-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Expedición</div>
          <div class="text-2xl font-black mt-1">${s}s</div>
          <p class="text-sm text-slate-300/74 mt-2">${v}</p>
        </div>
        ${dt(s<=30?"Corta":s<120?"Media":"Larga",o)}
      </div>
      <button type="button" class="btn ${o==="success"?"btn-primary":o==="warning"?"btn-gold":"btn-violet"} mt-4 w-full" onclick="game.startExpedition(${Le.player.zoneId}, ${s})">Enviar ${s}s</button>
    </div>
  `}function as(){let s=[...Le.player.inventory];const o=Le.ui.inventoryFilter;if(o!=="all"&&(s=s.filter(B=>B.slot===o||B.rarity===o)),!s.length)return'<div class="glass rounded-2xl p-5 text-slate-300/75">Tu inventario está vacío o el filtro no devuelve resultados.</div>';const v=Math.max(6,Le.ui.inventoryPageSize||18),M=Math.max(1,Math.ceil(s.length/v)),c=Math.min(Math.max(1,Le.ui.inventoryPage||1),M),T=(c-1)*v,H=s.slice(T,T+v);return`
    ${es(s)}
    <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${T+1}</b>–<b>${Math.min(T+v,s.length)}</b> de <b>${s.length}</b> objetos filtrados.</div>
    <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
      ${H.map(B=>{const l=bt(B),R=Yr(B),Y=qr(B.id),W=Gt(B.id),z=Wt(B.id);return`
          <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro" ${Ze(`Objeto de rareza ${Jt(B.rarity)}. Puntuación ${We(B.score)}. ${l.detail}`)}>
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${B.rarity} leading-snug break-words">${B.name}</div>${ht(B.rarity)}</div>
                <div class="text-xs text-slate-300/60 mt-1">${gt[B.slot]} · Nivel ${B.level||B.itemLevel} · Mejora +${B.upgrade||0}/${R.cap}</div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]" ${Ze("Puntuación total estimada del objeto según sus estadísticas y mejora actual.")}>Punt. ${We(B.score)}</div>
                <div class="mt-2">${dt(l.label,l.tone)}</div>
              </div>
            </div>
            <p class="text-xs text-slate-300/62 mt-3">${l.detail}</p>
            <div class="grid sm:grid-cols-2 gap-2 mt-3 text-xs text-slate-300/72">
              <div class="rounded-xl bg-white/[.04] p-2.5">Calidad: <b>${Qr(B)}</b></div>
              <div class="rounded-xl bg-white/[.04] p-2.5">Potencial: <b>+${R.remaining}</b> niveles</div>
              <div class="rounded-xl bg-white/[.04] p-2.5 sm:col-span-2">Reciclaje: <b>${Xr(Y)}</b></div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
              ${ta(B,4)}
            </div>
            <div class="grid gap-2 mt-4">
              <button type="button" class="btn btn-success !py-2.5 w-full" onclick="game.equipItem('${B.id}')">Equipar</button>
              <div class="grid grid-cols-2 gap-2">
                <button type="button" class="btn !py-2 text-xs" onclick="game.sellItem('${B.id}')">Vender</button>
                <button type="button" class="btn !py-2 text-xs" onclick="game.salvageItem('${B.id}')">Reciclar</button>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <button type="button" class="btn btn-violet !py-2 text-xs" onclick="game.reforgeItem('${B.id}')" ${W?Ze(`Coste reforge: ${Object.entries(W.cost).filter(([,f])=>f>0).map(([f,J])=>`${J} ${f}`).join(", ")}`):"disabled"}>Retemplar</button>
                <button type="button" class="btn btn-gold !py-2 text-xs" onclick="game.transcendItem('${B.id}')" ${z?Ze(`Trascender ${z.from} -> ${z.to}. Probabilidad ${Math.round(z.successChance*100)}%`):"disabled"}>Trascender</button>
              </div>
            </div>
          </div>
        `}).join("")}
    </div>
    ${Xt(c,M,"setInventoryPage")}
  `}const tt=Mr({SLOT_ORDER:Ot,ZONES:vt,SKILLS:zt,state:Le,maxInventory:jr,getPetData:Ft,getDerivedStats:Lr,currentRank:Br,zoneForPlayer:Tr,summarizeReward:_t,fmt:We,pct:Nt,htmlStat:at,timeLeft:yt,icon:lt,translateFilter:Hr,tooltipAttr:Ze,statusChip:dt,sectionHeader:Zt,infoCard:Ut,actionButton:Kt,actionBar:Yt,pageLead:Qt,questCard:Wr,equippedSlotCard:Gr,inventoryCards:as,zoneSelector:ea}),Oe=Er({SLOT_ORDER:Ot,SLOT_NAMES:gt,ZONES:vt,JOBS:Ar,PETS:Cr,SKILLS:zt,ACHIEVEMENTS:Ir,state:Le,getPetData:Ft,guildTotal:Rr,achievementProgress:Dr,fmt:We,htmlStat:at,progressBar:Ht,icon:lt,tooltipAttr:Ze,replaceEmojiIcons:Nr,rarityName:Jt,rarityBadge:ht,zoneSelector:ea,compareAgainstEquipped:bt,itemStatGrid:ta,durationChoiceCard:ts,previewCraftItem:Vr,previewEnhanceItem:Or,previewReforgeItem:Gt,previewTranscendItem:Wt,getPityStatus:zr,pager:Xt,expeditionTimerText:Jr,jobTimerText:Zr,pageLead:Qt,sectionHeader:Zt,infoCard:Ut,actionButton:Kt,actionBar:Yt,statusChip:dt});function ns(){return({resumen:tt.renderResumen,perfil:tt.renderPerfil,inventario:tt.renderInventario,arena:tt.renderArena,expedicion:Oe.renderExpedicion,mazmorra:Oe.renderMazmorra,mercado:Oe.renderMercado,forja:Oe.renderForja,gremio:Oe.renderGremio,entrenamiento:Oe.renderEntrenamiento,trabajo:Oe.renderTrabajo,mascota:Oe.renderMascota,logros:Oe.renderLogros,diario:Oe.renderDiario}[Le.currentView]||tt.renderResumen)()}function rs(){const s=Le.ui.modal;return s?`
    <div class="fixed inset-0 bg-slate-950/72 backdrop-blur-sm z-50 p-4 overflow-y-auto">
      <div class="min-h-full flex items-start justify-center py-8">
        <div class="glass-strong rounded-[2rem] p-5 sm:p-6 w-full max-w-5xl">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div>
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Detalle</div>
              <div class="text-2xl font-black">${s.title}</div>
            </div>
            <button type="button" class="btn" onclick="game.closeModal()">Cerrar</button>
          </div>
          ${s.content}
        </div>
      </div>
    </div>
  `:""}const ss={renderContent:ns,renderModal:rs};(()=>{const{STORAGE_KEY:s,VIEWS:o,VIEW_META:v}=window.AetherConfig,{$:M,clamp:c,fmt:T,timeLeft:H,sanitizeInlineHtml:B}=window.AetherUtils,{state:l,loadGame:R,saveGame:Y,getDerivedStats:W,maxInventory:z,hardReset:f,mutate:J,subscribeStore:N,getStoreMeta:d,setStoreMeta:k,syncExternalState:g}=window.AetherModel,E=window.AetherSystems,D={...wr,...ss},I=new Set(o.map(([r])=>r)),U={hud:"hud",desktopNav:"desktop-nav",content:"page-view",modal:"modal-root",mobileNav:"mobile-nav-root",mobileSheet:"mobile-sheet-root"},$=Object.create(null),y=new Set(Object.keys(U)),t=[],L={el:null,activeTarget:null,hideTimer:0,frame:0};let se=0,_=0,O=0;function fe(r){return M(U[r])}function xe(r){switch(r){case"hud":return D.renderHud();case"desktopNav":return D.renderDesktopNav();case"content":return D.renderContent();case"modal":return D.renderModal();case"mobileNav":return D.renderMobileNav();case"mobileSheet":return D.renderMobileSheet();default:return""}}function ie(r){return r?Array.isArray(r)?r:[r]:[]}function P(r=Object.keys(U)){ie(r).forEach(u=>y.add(u)),!se&&(se=window.requestAnimationFrame(()=>{se=0,A()}))}function F(){const r=fe("content");!r||!r.querySelectorAll||(r.querySelectorAll('[data-live-timer="expedition"]').forEach(u=>{u.textContent=l.timers.expedition?H(l.timers.expedition.endAt):"0s"}),r.querySelectorAll('[data-live-timer="job"]').forEach(u=>{u.textContent=l.timers.job?H(l.timers.job.endAt):"0s"}))}function Z(){const r=fe("hud");if(!r)return!1;const u=W(),V=u.maxHp?l.player.hp/u.maxHp:1,Q=u.maxHp?Math.max(0,Math.min(100,l.player.hp/u.maxHp*100)):0,ee=u.maxEnergy?Math.max(0,Math.min(100,l.player.energy/u.maxEnergy*100)):0,te=u.maxStamina?Math.max(0,Math.min(100,l.player.stamina/u.maxStamina*100)):0,oe=V<=.35?{text:"Vida crítica",tone:"danger"}:V<=.65?{text:"Vida media",tone:"warning"}:{text:"Vida estable",tone:"success"},Se=(De,Ee)=>{const Ae=r.querySelector(De);Ae&&Ae.textContent!==Ee&&(Ae.textContent=Ee)},ve=(De,Ee)=>{const Ae=r.querySelector(`[data-hud-bar="${De}"]`);if(!Ae)return;const qe=`${Ee}%`;Ae.style.width!==qe&&(Ae.style.width=qe)};Se("[data-hud-resources]",`${T(l.player.energy)}⚡ · ${T(l.player.stamina)}💪`),Se('[data-hud-current="hp"]',`${T(l.player.hp)} / ${T(u.maxHp)}`),Se('[data-hud-current="energy"]',`${T(l.player.energy)} / ${T(u.maxEnergy)}`),Se('[data-hud-current="stamina"]',`${T(l.player.stamina)} / ${T(u.maxStamina)}`),ve("hp",Q),ve("energy",ee),ve("stamina",te),Se('[data-hud-stat="gold"]',T(l.player.gold)),Se('[data-hud-stat="potions"]',T(l.player.potions)),Se('[data-hud-stat="attack"]',T(u.attack)),Se('[data-hud-stat="inventory"]',`${l.player.inventory.length}/${z()}`);const ke=r.querySelector("[data-hud-survivability]");return ke&&(ke.textContent=oe.text,ke.classList.remove("success","warning","danger"),ke.classList.add(oe.tone)),!0}function ge(r,u){const V=(r.getAttribute("data-card-title")||"").trim();if(V)return V;const Q=r.querySelector(".section-title, .font-display.font-extrabold, .font-black, .font-bold, h2, h3, h4"),ee=Q?(Q.textContent||"").trim().replace(/\s+/g," "):"";return ee||`Tarjeta ${u+1}`}function pe(r){let u=0,V=r;for(;V&&V.parentElement;)u+=1,V=V.parentElement;return u}function he(r,u){const V=[];let Q=u;for(;Q&&Q!==r;){let ee=0,te=Q.previousElementSibling;for(;te;)ee+=1,te=te.previousElementSibling;V.push(ee),Q=Q.parentElement}return V.reverse().join(".")}function me(r,u,V){J("ui/setCardCollapsed",()=>{(!l.ui.collapsedCardsByView||typeof l.ui.collapsedCardsByView!="object")&&(l.ui.collapsedCardsByView={}),(!l.ui.collapsedCardsByView[r]||typeof l.ui.collapsedCardsByView[r]!="object")&&(l.ui.collapsedCardsByView[r]={}),l.ui.collapsedCardsByView[r][u]=!!V},{source:"ui"}),i()}function de(){const r=fe("content");if(!r)return;const V=Array.from(r.querySelectorAll(".glass, .glass-strong, .surface-strong, .surface-subtle")).filter(ve=>!(!(ve instanceof HTMLElement)||ve.tagName.toLowerCase()==="details"||ve.closest(".mobile-cta-bar")||ve.closest("#mobile-nav-root")||ve.closest("#mobile-sheet-root"))),Q=l.currentView||"resumen",ee=l.ui.collapsedCardsByView&&l.ui.collapsedCardsByView[Q]||{},te=Object.keys(ee).length>0;[...V.map((ve,ke)=>({card:ve,order:ke,depth:pe(ve),domPath:he(r,ve)}))].sort((ve,ke)=>ke.depth-ve.depth||ve.order-ke.order).forEach(ve=>{const{card:ke,order:De}=ve,Ee=document.createElement("details");Array.from(ke.attributes).forEach(je=>{Ee.setAttribute(je.name,je.value)}),Ee.classList.add("card-collapsible");const Ae=document.createElement("summary");Ae.className="card-collapsible-summary",Ae.setAttribute("role","button");const qe=document.createElement("span");qe.className="card-collapsible-label";const Ue=ge(ke,De);qe.textContent=Ue;const ze=document.createElement("span");ze.className="card-collapsible-chevron",ze.setAttribute("aria-hidden","true"),ze.textContent="▾",Ae.append(qe,ze);const Ne=document.createElement("div");for(Ne.className="card-collapsible-body";ke.firstChild;)Ne.appendChild(ke.firstChild);Ee.append(Ae,Ne);const Me=(ke.getAttribute("data-card-id")||"").trim()||`${Q}:${ve.domPath}`;Ee.dataset.cardKey=Me,Object.prototype.hasOwnProperty.call(ee,Me)?Ee.open=ee[Me]!==!0:te?Ee.open=!0:Ee.open=De===0,Ee.addEventListener("toggle",()=>{me(Q,Me,!Ee.open)}),ke.replaceWith(Ee)})}function A(){Object.keys(U).forEach(u=>{if(!y.has(u))return;const V=fe(u);if(!V)return;const Q=xe(u);$[u]!==Q&&(V.innerHTML=Q,$[u]=Q,u==="content"&&de()),y.delete(u)}),F();const r=v[l.currentView]||v.resumen;document.title=`Aether Arena — ${r.label}`}function i(r=!1){if(!r&&!d().isDirty)return;if(r){O&&(clearTimeout(O),O=0),Y();return}if(O)return;const u=()=>{O=0,Y()};if(typeof window.requestIdleCallback=="function"){O=window.setTimeout(()=>{O=0,window.requestIdleCallback(u,{timeout:1200})},900);return}O=window.setTimeout(u,900)}function X(r){try{location.hash!==`#${r}`&&history.replaceState(null,"",`#${r}`)}catch{location.hash=r}}function K(r,u={}){if(!I.has(r))return;const V=l.currentView;J("ui/setView",()=>{l.currentView=r,l.currentTab=r,l.ui.moreMenuOpen=!1},{source:"ui"}),u.skipHash||X(r),P(["hud","desktopNav","content","mobileNav","mobileSheet"]),V!==r&&!u.keepScroll&&window.scrollTo(0,0),i()}function le(r){J("ui/setInventoryFilter",()=>{l.ui.inventoryFilter=r,l.ui.inventoryPage=1},{source:"ui"}),P("content"),i()}function be(r){J("ui/setInventoryPage",()=>{l.ui.inventoryPage=Math.max(1,Number(r)||1)},{source:"ui",markDirty:!1}),P("content")}function $e(r){J("ui/setJournalPage",()=>{l.ui.journalPage=Math.max(1,Number(r)||1)},{source:"ui",markDirty:!1}),P("content")}function S(r){J("ui/toggleMoreMenu",()=>{l.ui.moreMenuOpen=typeof r=="boolean"?r:!l.ui.moreMenuOpen},{source:"ui",markDirty:!1}),P(["mobileNav","mobileSheet"])}function e(){J("ui/closeModal",()=>{l.ui.modal=null},{source:"ui",markDirty:!1}),P("modal")}function m(r){const u=l.combatHistory.find(V=>V.id===r);u&&(J("ui/showCombat",()=>{l.ui.modal={type:"combat",title:B(u.title),content:`
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4">
              <div class="text-sm text-slate-300/75">${B(u.zone)}</div>
              <div class="text-sm text-slate-200/90 mt-2">${B(E.summarizeReward(u.rewards))}${u.drop?` · Botin: <span class="rarity-${u.drop.rarity}">${B(u.drop.name)}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
              <div class="space-y-2 text-sm">${u.log.map(V=>`<div>${B(V)}</div>`).join("")}</div>
            </div>
          </div>
        `}},{source:"ui",markDirty:!1}),P("modal"))}function h(){typeof confirm=="function"&&!confirm("¿Seguro que quieres reiniciar la partida? Se perdera el progreso local.")||(f(),K("resumen",{keepScroll:!1}),E.toast("Nueva partida iniciada","danger"),P(Object.keys(U)),i(!0))}function j(r){P(r||["hud","content","mobileSheet"]),i()}function w(){const r=document.createElement("div");r.id="ui-tooltip",r.className="pointer-events-none fixed z-[80] hidden max-w-[290px] rounded-2xl border border-cyan-300/24 bg-slate-950/92 px-3 py-2 text-xs leading-relaxed text-slate-100 backdrop-blur-xl shadow-[0_12px_40px_rgba(2,6,23,.55)] opacity-0 translate-y-1 transition duration-150 ease-out",document.body.appendChild(r),L.el=r;function u(te){if(!te||!L.el||L.el.classList.contains("hidden"))return;const oe=te.getBoundingClientRect(),Se=L.el.getBoundingClientRect(),ve=Math.max(12,oe.top-Se.height-10);let ke=oe.left+oe.width/2-Se.width/2;ke=Math.max(12,Math.min(ke,window.innerWidth-Se.width-12)),L.el.style.top=`${ve}px`,L.el.style.left=`${ke}px`}function V(te=L.activeTarget){!te||!L.el||L.frame||(L.frame=window.requestAnimationFrame(()=>{L.frame=0,u(te)}))}function Q(te){const oe=te&&te.getAttribute("data-tooltip");!oe||!L.el||(L.hideTimer&&(clearTimeout(L.hideTimer),L.hideTimer=0),L.activeTarget=te,L.el.innerHTML=oe,L.el.classList.remove("hidden"),window.requestAnimationFrame(()=>{L.el&&L.el.classList.remove("opacity-0","translate-y-1")}),V(te))}function ee(te){!L.activeTarget||!L.el||te&&L.activeTarget!==te&&L.activeTarget.contains(te)||(L.activeTarget=null,L.el.classList.add("opacity-0","translate-y-1"),L.hideTimer=window.setTimeout(()=>{L.el&&(L.el.classList.add("hidden"),L.hideTimer=0)},140))}document.addEventListener("mouseover",te=>{const oe=te.target.closest("[data-tooltip]");oe&&Q(oe)}),document.addEventListener("mouseout",te=>{const oe=te.target.closest("[data-tooltip]");oe&&ee(oe)}),document.addEventListener("focusin",te=>{const oe=te.target.closest("[data-tooltip]");oe&&Q(oe)}),document.addEventListener("focusout",te=>{const oe=te.target.closest("[data-tooltip]");oe&&ee(oe)}),document.addEventListener("mousemove",()=>{L.activeTarget&&V(L.activeTarget)}),window.addEventListener("scroll",()=>{L.activeTarget&&V(L.activeTarget)},!0),window.addEventListener("resize",()=>{L.activeTarget&&V(L.activeTarget)})}function ne(){for(;t.length;){const r=t.pop();typeof r=="function"&&r()}t.push(N(r=>r._meta&&[r._meta.isSaving,r._meta.isDirty,r._meta.lastSaveAt].join("|"),()=>P("hud"))),t.push(N(r=>r._meta?r._meta.syncRevision:0,(r,u)=>{r!==u&&P(Object.keys(U))})),t.push(N(r=>r.ui?r.ui.modal:null,()=>P("modal"))),t.push(N(r=>r.ui?r.ui.moreMenuOpen:!1,()=>P(["mobileNav","mobileSheet"])))}const ce={setView:K,setTab:K,setInventoryFilter:le,setInventoryPage:be,setJournalPage:$e,toggleMoreMenu:S,showCombat:m,closeModal:e,hardReset:h};Mn(ce,{systems:E,mutate:J,afterAction:j});function ue(){const r=Date.now();let u=!1,V=!1;const Q=l.player.hp,ee=l.player.energy,te=l.player.stamina;J("system/tick",()=>{const oe=c((r-l.lastTick)/1e3,0,document.hidden?30:5);l.lastTick=r,E.passiveRegen(oe),u=E.resolveFinishedTimers(r,document.hidden);const Se=W();l.player.hp=c(l.player.hp,1,Se.maxHp),l.player.energy=c(l.player.energy,0,Se.maxEnergy),l.player.stamina=c(l.player.stamina,0,Se.maxStamina),V=l.player.hp!==Q||l.player.energy!==ee||l.player.stamina!==te},{source:"tick",markDirty:!1}),(V||u)&&!d().isDirty&&k({isDirty:!0,lastSource:"tick"}),(!l.lastSave||r-l.lastSave>12e3)&&i(),!document.hidden&&((V||u)&&(Z()||P("hud")),F(),u?(P(["content","modal"]),i()):l.ui.modal&&P("modal"),l.ui.moreMenuOpen&&P(["mobileNav","mobileSheet"]))}function a(){_&&clearInterval(_),_=window.setInterval(ue,document.hidden?4e3:1e3)}function p(){const r=(location.hash||"").replace("#","").trim(),u=I.has(r)?r:l.currentView||"resumen";K(u,{skipHash:!1,keepScroll:!0})}function x(){const r=(location.hash||"").replace("#","").trim();I.has(r)&&r!==l.currentView&&K(r,{skipHash:!0})}function C(r){if(r.key!==s||r.newValue===r.oldValue)return;g(r.newValue)&&(P(Object.keys(U)),E.toast("Partida sincronizada desde otra pestana","cyan"))}function q(){w(),R(),J("system/offlineCatchup:init",()=>{E.offlineCatchup()},{source:"lifecycle"}),ne(),p(),P(Object.keys(U)),i(),a(),window.addEventListener("hashchange",x),document.addEventListener("visibilitychange",()=>{a(),document.hidden||(J("system/offlineCatchup:resume",()=>{E.offlineCatchup()},{source:"lifecycle"}),P(["hud","content","modal"]))}),window.addEventListener("storage",C),window.addEventListener("pagehide",()=>i(!0)),window.addEventListener("beforeunload",()=>i(!0))}window.game=ce,window.AetherController={queueRender:P,setView:K,closeModal:e,showCombat:m,scheduleSave:i},q()})();
