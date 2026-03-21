(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))k(d);new MutationObserver(d=>{for(const E of d)if(E.type==="childList")for(const T of E.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&k(T)}).observe(document,{childList:!0,subtree:!0});function v(d){const E={};return d.integrity&&(E.integrity=d.integrity),d.referrerPolicy&&(E.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?E.credentials="include":d.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function k(d){if(d.ep)return;d.ep=!0;const E=v(d);fetch(d.href,E)}})();const va=["weapon","offhand","helm","chest","gloves","boots","ring","amulet"],ba={weapon:"Arma",offhand:"Mano izquierda",helm:"Casco",chest:"Armadura",gloves:"Guantes",boots:"Botas",ring:"Anillo",amulet:"Amuleto"},ya=[{title:"Novato del Bronce",min:0},{title:"Aspirante de Arena",min:90},{title:"Centurion de Cristal",min:220},{title:"Campeon del Foro",min:420},{title:"Idolo de la Ciudad",min:720},{title:"Verdugo Solar",min:1100},{title:"Coloso Astral",min:1600},{title:"Inmortal del Panteon",min:2300}],ha=[{key:"common",name:"Comun",mult:1,affixes:0,value:14,order:0},{key:"uncommon",name:"Infrecuente",mult:1.14,affixes:1,value:34,order:1},{key:"rare",name:"Raro",mult:1.38,affixes:2,value:92,order:2},{key:"epic",name:"Epico",mult:1.74,affixes:3,value:240,order:3},{key:"legendary",name:"Legendario",mult:2.18,affixes:4,value:640,order:4},{key:"mythic",name:"Mitico",mult:2.82,affixes:5,value:1650,order:5}],xa={weapon:[{name:"Gladius",stats:{attack:7,speed:1}},{name:"Hacha de Coliseo",stats:{attack:9,defense:1}},{name:"Tridente del Foro",stats:{attack:8,crit:.02}},{name:"Espada Curva",stats:{attack:8,speed:2}},{name:"Lanza Escarlata",stats:{attack:10,crit:.01}}],offhand:[{name:"Escudo de Torre",stats:{defense:7,hp:18,block:.03}},{name:"Parma Ligera",stats:{defense:5,speed:2,block:.02}},{name:"Daga de Mano",stats:{attack:5,crit:.03}},{name:"Brazal Solar",stats:{defense:4,hp:10,crit:.01}}],helm:[{name:"Yelmo de Bronce",stats:{defense:5,hp:14}},{name:"Mascara del Duelo",stats:{defense:4,crit:.02}},{name:"Casco de Placas",stats:{defense:6,hp:10}},{name:"Corona de Hierro",stats:{hp:18,speed:1}}],chest:[{name:"Coraza Segmentada",stats:{defense:9,hp:28}},{name:"Pectoral de Guerra",stats:{defense:11,hp:22}},{name:"Tunica Blindada",stats:{defense:7,speed:2,hp:20}},{name:"Arnes del Leon",stats:{attack:4,defense:8,hp:18}}],gloves:[{name:"Guanteletes de Malla",stats:{defense:4,attack:2}},{name:"Guantes de Cazador",stats:{crit:.02,speed:1}},{name:"Mitones de Arena",stats:{attack:3,hp:8}},{name:"Brazales de Sangre",stats:{attack:4,lifesteal:.01}}],boots:[{name:"Grebas Reforzadas",stats:{defense:4,speed:1}},{name:"Sandalias de Arena",stats:{speed:3,dodge:.02}},{name:"Botas de Marcha",stats:{hp:10,speed:2}},{name:"Botas de Acecho",stats:{speed:2,crit:.01}}],ring:[{name:"Anillo de Plata",stats:{crit:.02,attack:2}},{name:"Sello del Foro",stats:{defense:3,hp:8}},{name:"Aro Solar",stats:{attack:3,speed:1}},{name:"Sortija Vital",stats:{hp:16}}],amulet:[{name:"Amuleto del Leon",stats:{attack:3,hp:10}},{name:"Talisman de Marmol",stats:{defense:3,block:.01}},{name:"Colgante del Alba",stats:{crit:.02,hp:8}},{name:"Medallon del Eco",stats:{speed:2,dodge:.01}}]},$a=[{prefix:"Furioso",stats:{attack:2}},{prefix:"Certero",stats:{crit:.02}},{prefix:"Agil",stats:{speed:2}},{prefix:"Imponente",stats:{hp:18}},{prefix:"Bastion",stats:{defense:3}},{prefix:"Sanguineo",stats:{lifesteal:.015}},{suffix:"del Coloso",stats:{hp:24,defense:2}},{suffix:"de la Tempestad",stats:{speed:2,crit:.01}},{suffix:"de la Caza",stats:{attack:3,crit:.01}},{suffix:"del Vigia",stats:{defense:4,block:.015}},{suffix:"de los Antiguos",stats:{hp:16,attack:2}},{suffix:"del Eclipse",stats:{attack:3,speed:1,crit:.01}}],ka=[{id:0,name:"Distrito de Arena",unlockLevel:1,energyCost:7,staminaCost:1,theme:"Callejones y plazas del coliseo",enemies:["Rufian del Foro","Apostador Violento","Mercenario de Bronce","Ladron de Tuneles"],boss:"Campeon de Grava"},{id:1,name:"Bosque Sangriento",unlockLevel:4,energyCost:9,staminaCost:1,theme:"Bestias y cazadores en la niebla",enemies:["Jabali Enloquecido","Cazador Sombrio","Tigre de Jaula","Bandido del Roble"],boss:"Gran Acechador Berkan"},{id:2,name:"Catacumbas Rotas",unlockLevel:8,energyCost:11,staminaCost:2,theme:"No muertos, guardianes y reliquias",enemies:["Esqueleto Vetusto","Fanatico de Cripta","Necrofago Roto","Guardia del Osario"],boss:"Pontifice de Hueso"},{id:3,name:"Dunas de Onice",unlockLevel:12,energyCost:13,staminaCost:2,theme:"Bestias solares y caravanas saqueadas",enemies:["Saqueador de Caravana","Escorpion de Brasa","Jinete del Viento","Chaman del Datil Negro"],boss:"Anhur, el Sol Partido"},{id:4,name:"Fortaleza del Eclipse",unlockLevel:16,energyCost:16,staminaCost:2,theme:"Caballeros caidos y maquinas de guerra",enemies:["Guardia Obsidiana","Verdugo del Eclipse","Ballestero Negro","Ingeniero del Asedio"],boss:"General Varzok"},{id:5,name:"Necropolis del Hierro",unlockLevel:21,energyCost:18,staminaCost:3,theme:"Automatas, espectros y altares profanos",enemies:["Arconte Ferrum","Espectro de Cadena","Mecanico Sacrilego","Profanador del Trono"],boss:"Maquina-Rey Nax"},{id:6,name:"Fisura Astral",unlockLevel:27,energyCost:21,staminaCost:3,theme:"Entidades del vacio y gloria absoluta",enemies:["Segador del Vacio","Centinela Astral","Bestia Prismatica","Oraculo Corrupto"],boss:"Aion, Devorador de Ecos"}],wa=[{id:"guardia",name:"Guardia del Foro",duration:45,reward:{gold:120,xp:25,food:1},desc:"Patrulla, disciplina y monedas seguras."},{id:"mercante",name:"Estiba de Mercaderes",duration:75,reward:{gold:190,xp:40,wood:2,iron:1},desc:"Carga mercancias y quedate con una comision."},{id:"arena",name:"Espectaculo Menor",duration:120,reward:{gold:320,xp:70,essence:1,potions:1},desc:"Show de arena, apuestas y fama barata."}],Sa=[{id:"wolf",name:"Lobo de Guerra",icon:"paw",desc:"Aumenta el dano y el critico.",bonus:{attackPct:.08,crit:.03}},{id:"phoenix",name:"Fenix de Ceniza",icon:"flame",desc:"Mas vida, regeneracion y esencia.",bonus:{hpPct:.1,regenPct:.15}},{id:"golem",name:"Golem de Basalto",icon:"shield",desc:"Defensa bruta y bloqueo.",bonus:{defensePct:.1,block:.03}},{id:"panther",name:"Pantera Crepuscular",icon:"spark",desc:"Velocidad, esquiva y golpes finos.",bonus:{speedPct:.08,dodge:.03}},{id:"raven",name:"Cuervo del Oraculo",icon:"feather",desc:"Mas oro, mejor botin y vision.",bonus:{goldPct:.08,lootLuck:.06}}],Ma={powerStrike:{id:"powerStrike",name:"Golpe devastador",desc:"Ataque de gran multiplicador.",unlockLevel:1,cooldown:3,mult:1.75},quickLunge:{id:"quickLunge",name:"Estocada veloz",desc:"Golpe rapido con extra de critico.",unlockLevel:1,cooldown:2,mult:1.15,critBonus:.14},fortify:{id:"fortify",name:"Guardia de acero",desc:"Golpeas y elevas tu defensa temporalmente.",unlockLevel:1,cooldown:5,mult:.82,selfBuff:{defensePct:.24,turns:2,shieldPct:.08}},shieldBash:{id:"shieldBash",name:"Embestida de escudo",desc:"Rompe la defensa rival. Requiere mano izquierda.",unlockLevel:5,cooldown:4,mult:1.32,requireOffhand:!0,armorBreak:{pct:.18,turns:2}},bloodRage:{id:"bloodRage",name:"Rabia sanguinea",desc:"Gran drenaje de vida en el impacto.",unlockLevel:7,cooldown:5,mult:1.38,lifestealBonus:.35},whirlwind:{id:"whirlwind",name:"Torbellino",desc:"Dos impactos consecutivos.",unlockLevel:9,cooldown:5,mult:.88,hits:2},execution:{id:"execution",name:"Ejecucion",desc:"Hace muchisimo mas dano a enemigos debilitados.",unlockLevel:12,cooldown:4,mult:1.2,executeThreshold:.35,executeMult:1.85},venomCut:{id:"venomCut",name:"Corte toxico",desc:"Aplica dano persistente.",unlockLevel:14,cooldown:4,mult:1.08,dot:{turns:3,ratio:.18,label:"Veneno"}},berserk:{id:"berserk",name:"Berserk",desc:"Te buffas y golpeas con furia.",unlockLevel:17,cooldown:6,mult:1.25,selfBuff:{attackPct:.22,defensePct:-.1,turns:3}},celestialEdge:{id:"celestialEdge",name:"Filo celestial",desc:"Golpe definitivo con alto critico.",unlockLevel:22,cooldown:7,mult:2.25,critBonus:.28}},Ea=[{id:"kills50",title:"Carne de Arena",desc:"Derrota 50 enemigos.",type:"kills",target:50,reward:{gold:250,shards:2}},{id:"wins25",title:"Favor del Publico",desc:"Gana 25 combates de arena.",type:"wins",target:25,reward:{gold:300,essence:3}},{id:"quest10",title:"Contratista",desc:"Completa 10 misiones.",type:"questsCompleted",target:10,reward:{gold:400,shards:3}},{id:"floor5",title:"Delvador",desc:"Alcanza el piso 5 de las mazmorras.",type:"highestDungeonFloor",target:5,reward:{gold:450,keys:2}},{id:"level10",title:"Veterano",desc:"Llega al nivel 10.",type:"level",target:10,reward:{gold:500,potions:2,essence:4}},{id:"legendary1",title:"Resplandor Dorado",desc:"Consigue 1 objeto legendario.",type:"legendaryFound",target:1,reward:{shards:4,gold:500}},{id:"guild8",title:"Constructor",desc:"Invierte 8 niveles de gremio en total.",type:"guildTotal",target:8,reward:{gold:700,essence:5}},{id:"ascend1",title:"Mas alla del polvo",desc:"Asciende una vez.",type:"ascension",target:1,reward:{relicDust:3,shards:5}}],Aa=[["resumen","Resumen"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],kt=[["resumen","Resumen"],["perfil","Perfil"],["inventario","Inventario"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],ja={resumen:{label:"Resumen",short:"Bucle principal",desc:"Vista rápida del ciclo principal, contratos y accesos clave.",icon:"home"},perfil:{label:"Perfil",short:"Gladiador",desc:"Identidad, equipo, rango, zona y estadísticas del héroe.",icon:"user"},inventario:{label:"Inventario",short:"Bolsa y equipo",desc:"Gestiona la mochila, filtra piezas y equipa mejoras.",icon:"backpack"},arena:{label:"Arena",short:"Combate rápido",desc:"Duelo instantáneo, élites y rachas de farmeo.",icon:"swords"},expedicion:{label:"Expediciones",short:"Temporizadores",desc:"Rutas en segundo plano con botín y materiales.",icon:"compass"},mazmorra:{label:"Mazmorras",short:"Pisos y jefes",desc:"Runs por pisos con jefe y cofre.",icon:"castle"},mercado:{label:"Mercado",short:"Compra y venta",desc:"Rotación de equipo y consumibles.",icon:"cart"},forja:{label:"Forja",short:"Creación y mejora",desc:"Creación de piezas y mejoras directas.",icon:"hammer"},gremio:{label:"Gremio",short:"Bonos pasivos",desc:"Mejoras permanentes de la partida.",icon:"shield"},entrenamiento:{label:"Entrenamiento",short:"Atributos y habilidades",desc:"Atributos, habilidades y especialización.",icon:"book"},trabajo:{label:"Trabajo",short:"Ingresos seguros",desc:"Ocupaciones temporizadas con retorno estable.",icon:"briefcase"},mascota:{label:"Mascota",short:"Compañero",desc:"Bonos únicos y progresión auxiliar.",icon:"paw"},logros:{label:"Logros",short:"Metaprogresión",desc:"Hitos, reliquias y ascensión.",icon:"trophy"},diario:{label:"Diario",short:"Registro",desc:"Historial de eventos y actividad reciente.",icon:"scroll"}},Ca=[{title:"Principal",views:["resumen","perfil","inventario","arena"]},{title:"Aventura",views:["expedicion","mazmorra"]},{title:"Economía",views:["mercado","forja","trabajo"]},{title:"Progreso",views:["gremio","entrenamiento","mascota","logros"]},{title:"Registro",views:["diario"]}],wt=["resumen","perfil","inventario","arena"],Pa=kt.map(([t])=>t).filter(t=>!wt.includes(t)),Ia="aether_arena_pbbg_v3";window.AetherConfig={STORAGE_KEY:Ia,SLOT_ORDER:va,SLOT_NAMES:ba,TABS:Aa,VIEWS:kt,VIEW_META:ja,VIEW_GROUPS:Ca,MOBILE_PRIMARY_VIEWS:wt,MOBILE_OVERFLOW_VIEWS:Pa,RANKS:ya,RARITIES:ha,ITEM_BASES:xa,AFFIXES:$a,ZONES:ka,JOBS:wa,PETS:Sa,SKILLS:Ma,ACHIEVEMENTS:Ea};(()=>{const{RARITIES:t,ITEM_BASES:o}=window.AetherConfig;let v=1;const k=m=>document.getElementById(m),d=m=>JSON.parse(JSON.stringify(m)),E=(m,$)=>Math.floor(Math.random()*($-m+1))+m,T=(m,$)=>Math.random()*($-m)+m,I=m=>m[Math.floor(Math.random()*m.length)],i=(m,$,R)=>Math.min(R,Math.max($,m)),C=m=>m.reduce(($,R)=>$+R,0),_=()=>`${Date.now().toString(36)}_${(v++).toString(36)}_${E(100,999)}`,N={attack:{label:"Ataque",tip:"Aumenta el daño base que infliges en combate."},defense:{label:"Defensa",tip:"Reduce parte del daño recibido en cada impacto."},speed:{label:"Velocidad",tip:"Mejora la iniciativa y el ritmo de tus acciones."},hp:{label:"Vida máxima",tip:"Determina la cantidad total de salud disponible."},crit:{label:"Golpe crítico",tip:"Probabilidad de infligir daño crítico aumentado."},dodge:{label:"Esquiva",tip:"Probabilidad de evitar por completo un golpe enemigo."},block:{label:"Bloqueo",tip:"Probabilidad de mitigar una parte importante del daño."},lifesteal:{label:"Robo de vida",tip:"Porcentaje del daño convertido en curación propia."},attackPct:{label:"Ataque %",tip:"Multiplicador porcentual al ataque base."},defensePct:{label:"Defensa %",tip:"Multiplicador porcentual a la defensa base."},hpPct:{label:"Vida %",tip:"Multiplicador porcentual a la vida máxima."},speedPct:{label:"Velocidad %",tip:"Multiplicador porcentual a la velocidad base."},goldPct:{label:"Oro %",tip:"Incrementa el oro obtenido en actividades."},lootLuck:{label:"Suerte de botín",tip:"Mejora ligeramente la calidad y la frecuencia del botín."},regenPct:{label:"Regeneración %",tip:"Incrementa la recuperación pasiva de recursos."}},V={common:{name:"Común",tone:"text-slate-200 border-white/10 bg-white/[0.04]"},uncommon:{name:"Infrecuente",tone:"text-emerald-200 border-emerald-300/20 bg-emerald-400/10"},rare:{name:"Raro",tone:"text-sky-200 border-sky-300/24 bg-sky-400/10"},epic:{name:"Épico",tone:"text-violet-200 border-violet-300/24 bg-violet-400/10"},legendary:{name:"Legendario",tone:"text-amber-200 border-amber-300/24 bg-amber-400/10"},mythic:{name:"Mítico",tone:"text-fuchsia-200 border-fuchsia-300/24 bg-fuchsia-400/10"}},P={all:"Todo",weapon:"Armas",offhand:"Mano izquierda",helm:"Cascos",chest:"Armaduras",gloves:"Guantes",boots:"Botas",ring:"Anillos",amulet:"Amuletos",common:"Común",uncommon:"Infrecuente",rare:"Raro",epic:"Épico",legendary:"Legendario",mythic:"Mítico"};function Z(m,$=0){return Number(m||0).toLocaleString("es-ES",{maximumFractionDigits:$})}function g(m){return`${Z((m||0)*100,1)}%`}function a(m=""){return String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function y(m=""){const $=String(m),R=[];let F=$;return[/<\/?b>/gi,/<br\s*\/?>/gi,/<span class="rarity-(common|uncommon|rare|epic|legendary|mythic)">/gi,/<\/span>/gi].forEach(K=>{F=F.replace(K,ne=>{const se=`__SAFE_HTML_${R.length}__`;return R.push({token:se,match:ne}),se})}),F=a(F),R.forEach(({token:K,match:ne})=>{F=F.replace(K,ne)}),F}function M(m,$=2){return Number(m.toFixed($))}function f(m){return(N[m]||{}).label||m}function x(m){return(N[m]||{}).tip||""}function w(m){return(V[m]||V.common).name}function L(m){const $=V[m]||V.common;return`<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.14em] ${$.tone}">${$.name}</span>`}function e(m){return P[m]||m}function n(m,$,R="",F=""){return`
      <div class="stat-pill rounded-2xl px-3 py-3"${F?` data-tooltip="${String(F).replace(/"/g,"&quot;")}"`:""}>
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/70">${m}</div>
        <div class="text-lg font-display font-extrabold tracking-[0.01em] text-white">${$}</div>
        ${R?`<div class="mt-1 text-xs leading-relaxed text-slate-300/65">${R}</div>`:""}
      </div>
    `}function l(m,$,R,F,Q=""){const K=$<=0?0:i(m/$*100,0,100);return`
      <div${Q?` data-tooltip="${String(Q).replace(/"/g,"&quot;")}"`:""}>
        <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
          <span class="font-medium tracking-[0.01em]">${F}</span>
          <span class="font-semibold text-slate-100">${Z(m,m%1?1:0)} / ${Z($,$%1?1:0)}</span>
        </div>
        <div class="bar">
          <span class="relative flex h-full rounded-full ${R}" style="width:${K}%">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
          </span>
        </div>
      </div>
    `}function p(m){return t.find($=>$.key===m)||t[0]}function h(m,$){return!$||typeof $!="object"||Object.keys($).forEach(R=>{const F=$[R];Array.isArray(F)?m[R]=F:F&&typeof F=="object"?((!m[R]||typeof m[R]!="object"||Array.isArray(m[R]))&&(m[R]={}),h(m[R],F)):m[R]=F}),m}function c(){return{attack:0,defense:0,speed:0,hp:0,crit:0,dodge:0,block:0,lifesteal:0,attackPct:0,defensePct:0,hpPct:0,speedPct:0,goldPct:0,lootLuck:0,regenPct:0}}function u(m,$){return Object.keys($||{}).forEach(R=>{m[R]=(m[R]||0)+$[R]}),m}function S(m=Date.now()){const $=new Date(m),R=$.getFullYear(),F=String($.getMonth()+1).padStart(2,"0"),Q=String($.getDate()).padStart(2,"0");return`${R}-${F}-${Q}`}function O(m){const $=Math.max(0,m-Date.now()),R=Math.ceil($/1e3),F=Math.floor(R/60),Q=R%60;return F?`${F}m ${String(Q).padStart(2,"0")}s`:`${Q}s`}function z(m=1,$=0){const R=Math.random()-Math.min(.16,$*.035)-Math.min(.06,m*7e-4);return R<.0012?p("mythic"):R<.01?p("legendary"):R<.052?p("epic"):R<.19?p("rare"):R<.48?p("uncommon"):p("common")}function r(m,$){return(o[m]||[]).find(R=>R.name===$)||I(o[m]||[])}function B(m,$){return m+Math.max(0,Math.floor($/4))*.85}window.AetherUtils={$:k,clone:d,rand:E,randf:T,pick:I,clamp:i,sum:C,uid:_,fmt:Z,pct:g,escapeHtml:a,sanitizeInlineHtml:y,softRound:M,statLabel:f,statTooltip:x,rarityName:w,rarityBadge:L,translateFilter:e,htmlStat:n,progressBar:l,rarityDef:p,deepMerge:h,emptyStats:c,addStats:u,localDayKey:S,timeLeft:O,pickRarity:z,findBaseItem:r,scaledStatValue:B}})();const xt=t=>{let o;const v=new Set,k=(C,_)=>{const N=typeof C=="function"?C(o):C;if(!Object.is(N,o)){const V=o;o=_??(typeof N!="object"||N===null)?N:Object.assign({},o,N),v.forEach(P=>P(o,V))}},d=()=>o,I={setState:k,getState:d,getInitialState:()=>i,subscribe:C=>(v.add(C),()=>v.delete(C))},i=o=t(k,d,I);return I},La=t=>t?xt(t):xt,Ra=t=>(o,v,k)=>{const d=k.subscribe;return k.subscribe=(T,I,i)=>{let C=T;if(I){const _=(i==null?void 0:i.equalityFn)||Object.is;let N=T(k.getState());C=V=>{const P=T(V);if(!_(N,P)){const Z=N;I(N=P,Z)}},i!=null&&i.fireImmediately&&I(N,N)}return d(C)},t(o,v,k)},Da=Ra;function Ta(t){const{ITEM_BASES:o,AFFIXES:v,SLOT_ORDER:k,pick:d,rand:E,uid:T,softRound:I,rarityDef:i,pickRarity:C,findBaseItem:_,scaledStatValue:N,getLootLuck:V}=t;function P(x){const w=1+(x.upgrade||0)*.12,L={};return Object.entries(x.stats||{}).forEach(([e,n])=>{e==="crit"||e==="dodge"||e==="block"||e==="lifesteal"?L[e]=I(n+(x.upgrade||0)*.002,4):L[e]=I(n*w,2)}),L}function Z(x){const w=P(x);return I((w.attack||0)*2.1+(w.defense||0)*1.85+(w.speed||0)*1.45+(w.hp||0)*.18+(w.crit||0)*120+(w.dodge||0)*90+(w.block||0)*70+(w.lifesteal||0)*140,1)}function g(x,w,L=null,e=null,n=0){const l=e?_(x,e):d(o[x]),p=L?i(L):C(w,V()),h={};Object.entries(l.stats).forEach(([m,$])=>{const R=typeof $=="number"?m==="crit"||m==="dodge"||m==="block"||m==="lifesteal"?$+Math.max(0,w-1)*5e-4:N($,w):$;h[m]=I(R*p.mult,3)});const c=Math.min(5,p.affixes+n),u=new Set,S=[];for(let m=0;m<c;m++){let $=d(v),R=0;for(;u.has($.prefix||$.suffix)&&R<20;)$=d(v),R+=1;u.add($.prefix||$.suffix),S.push($),Object.entries($.stats).forEach(([F,Q])=>{const K=F==="crit"||F==="dodge"||F==="block"||F==="lifesteal"?Q+Math.max(0,w-1)*5e-4:N(Q,w);h[F]=I((h[F]||0)+K,3)})}const O=[],z=S.find(m=>m.prefix),r=S.find(m=>m.suffix);z&&O.push(z.prefix),O.push(l.name),r&&O.push(r.suffix);const B={id:T(),slot:x,name:O.join(" "),rarity:p.key,level:w,baseName:l.name,stats:h,affixes:S.map(m=>m.prefix||m.suffix),value:Math.max(12,Math.round((p.value+w*8)*(1+c*.18))),upgrade:0,createdAt:Date.now()};return B.score=Z(B),B}function a(x,w){const L=g(x,1,"common",w,0);return L.affixes=[],L.name=w,L.score=Z(L),L}function y(x=1){const w=Math.random();return x>=32&&w<.0015?"mythic":x>=24&&w<.012?"legendary":x>=16&&w<.055?"epic":x>=8&&w<.22?"rare":w<.58?"uncommon":"common"}function M(x=1){const w=[],L=6+Math.min(2,Math.floor(x/12)),e={common:1.05,uncommon:1.16,rare:1.48,epic:2.05,legendary:3.1,mythic:4.8};for(let n=0;n<L;n++){const l=d(k),p=y(x),h=g(l,Math.max(1,x+E(-1,3)),p);h.price=Math.round(h.value*e[h.rarity]*(1+Math.max(0,x-1)*.015)),w.push(h)}return w.sort((n,l)=>(l.price||0)-(n.price||0))}function f(){return[a("helm","Yelmo de Bronce"),a("boots","Sandalias de Arena"),g("ring",1,"uncommon")]}return{scaleItemStats:P,computeItemScore:Z,makeItem:g,makeStarterItem:a,generateMarket:M,starterInventory:f}}function Va(t){const{SLOT_ORDER:o,emptyStats:v,addStats:k,softRound:d,clamp:E}=t,T={sig:"",value:null};function I(){T.sig="",T.value=null}function i(g,a){const y=a(),M=v();if(!y||!g.player.petLevel)return M;const f=1+g.player.petLevel*.16;return Object.entries(y.bonus).forEach(([x,w])=>{M[x]=d((M[x]||0)+w*f,4)}),M}function C(g){const a=g.player.guild,y=v();return y.attackPct+=a.barracks*.03,y.defensePct+=a.barracks*.02,y.goldPct+=a.treasury*.08,y.hpPct+=a.sanctuary*.05,y.regenPct+=a.sanctuary*.08,y.lootLuck+=a.hunters*.05,y}function _(g){const a=g.player.relics,y=v();return y.attackPct+=a.wrath*.04,y.goldPct+=a.fortune*.05,y.lootLuck+=a.fortune*.03,y.hpPct+=a.vitality*.06,y.regenPct+=a.vitality*.06,y.speedPct+=a.momentum*.03,y}function N(g,a){const y=v();return o.forEach(M=>{const f=g.player.equipment[M];f&&k(y,a(f))}),y}function V(g){const a=g.player.training;return{attack:a.strength*2.2,defense:a.endurance*1.3,speed:a.agility*1.5,hp:a.endurance*16,crit:a.agility*.002,dodge:a.agility*.002,block:a.endurance*.0015,lifesteal:a.strength*8e-4}}function P(g,a){if(!g.player)return{attack:14,defense:10,speed:8,maxHp:140,crit:.06,dodge:.04,block:.03,lifesteal:0,maxEnergy:100,maxStamina:12,goldPct:0,lootLuck:0,regenPct:0};const{getPetData:y,scaleItemStats:M}=a,f=g.player,x=[f.level,f.baseStats.attack,f.baseStats.defense,f.baseStats.speed,f.baseStats.crit,f.baseStats.dodge,f.baseStats.block,f.baseStats.lifesteal,f.training.strength,f.training.agility,f.training.endurance,f.training.discipline,f.guild.barracks,f.guild.treasury,f.guild.sanctuary,f.guild.hunters,f.guild.arsenal,f.relics.wrath,f.relics.fortune,f.relics.vitality,f.relics.momentum,f.pet||"",f.petLevel||0,...o.map($=>{const R=f.equipment[$];return R?`${R.id}:${R.level}:${R.upgrade||0}:${R.rarity}:${R.reforge||0}`:"-"})].join("|");if(T.sig===x&&T.value)return T.value;const w=f.level,L={attack:f.baseStats.attack+w*3.2,defense:f.baseStats.defense+w*2.45,speed:f.baseStats.speed+w*1.2,hp:120+w*34,crit:f.baseStats.crit,dodge:f.baseStats.dodge,block:f.baseStats.block,lifesteal:f.baseStats.lifesteal,maxEnergy:100+f.training.discipline*5+f.relics.momentum*10,maxStamina:12+Math.floor(f.training.discipline/4)+f.relics.momentum},e=N(g,M),n=V(g),l=C(g),p=_(g),h=i(g,y);let c=L.attack+(e.attack||0)+(n.attack||0),u=L.defense+(e.defense||0)+(n.defense||0),S=L.speed+(e.speed||0)+(n.speed||0),O=L.hp+(e.hp||0)+(n.hp||0);const z=(l.attackPct||0)+(p.attackPct||0)+(h.attackPct||0),r=(l.defensePct||0)+(h.defensePct||0),B=(l.hpPct||0)+(p.hpPct||0)+(h.hpPct||0),m=(p.speedPct||0)+(h.speedPct||0);return c*=1+z,u*=1+r,O*=1+B,S*=1+m,T.sig=x,T.value={attack:d(c,2),defense:d(u,2),speed:d(S,2),maxHp:Math.round(O),crit:E(L.crit+(e.crit||0)+(n.crit||0)+(h.crit||0),0,.7),dodge:E(L.dodge+(e.dodge||0)+(n.dodge||0)+(h.dodge||0),0,.55),block:E(L.block+(e.block||0)+(n.block||0)+(h.block||0),0,.5),lifesteal:E(L.lifesteal+(e.lifesteal||0)+(n.lifesteal||0),0,.45),maxEnergy:L.maxEnergy,maxStamina:L.maxStamina,goldPct:(l.goldPct||0)+(h.goldPct||0)+(p.goldPct||0),lootLuck:(l.lootLuck||0)+(h.lootLuck||0)+(p.lootLuck||0),regenPct:(l.regenPct||0)+(h.regenPct||0)+(p.regenPct||0)},T.value}function Z(g,a){return g.player&&P(g,a).lootLuck||0}return{invalidateDerivedCache:I,petBonus:i,getGuildBonus:C,getRelicBonus:_,getEquipmentBonus:N,getTrainingBonus:V,getDerivedStats:P,getLootLuck:Z}}function qa(t){const{pick:o,uid:v,makeStarterItem:k,starterInventory:d,generateMarket:E}=t;function T(C){return Math.round(95+Math.pow(C,1.46)*48)}function I(C=1){const _=[{type:"kills",title:"Barrido de rivales",desc:"Derrota enemigos en la arena.",target:7+Math.floor(C*1.6),reward:{gold:120+C*20,xp:60+C*14,essence:1}},{type:"wins",title:"Clamor del publico",desc:"Gana combates de arena.",target:4+Math.floor(C*.6),reward:{gold:140+C*24,xp:65+C*15,potions:1}},{type:"earnGold",title:"Bolsillos pesados",desc:"Obten oro por cualquier medio.",target:320+C*90,reward:{gold:150+C*22,xp:70+C*12,shards:1}},{type:"crafts",title:"Acero fresco",desc:"Forja o mejora equipo.",target:2+Math.floor(C/7),reward:{gold:180+C*18,xp:60+C*16,iron:3}},{type:"expeditions",title:"Rutas peligrosas",desc:"Completa expediciones.",target:2+Math.floor(C/8),reward:{gold:160+C*18,xp:72+C*14,wood:3}},{type:"dungeons",title:"Hedor profundo",desc:"Supera incursiones en mazmorra.",target:1+Math.floor(C/10),reward:{gold:220+C*18,xp:95+C*18,keys:1}},{type:"salvaged",title:"Chatarra util",desc:"Recicla equipo sobrante.",target:3+Math.floor(C/7),reward:{gold:130+C*18,xp:55+C*13,essence:2}},{type:"elites",title:"Sangre de elite",desc:"Derrota enemigos elite.",target:1+Math.floor(C/9),reward:{gold:240+C*20,xp:90+C*17,shards:1}}],N=[],V=[];for(;N.length<4&&V.length<_.length;){const P=o(_);V.includes(P.type)||(V.push(P.type),N.push({id:v(),type:P.type,title:P.title,desc:P.desc,progress:0,target:P.target,reward:P.reward,completed:!1,claimed:!1}))}return N}function i(){return{version:4,currentView:"resumen",currentTab:"resumen",ui:{inventoryFilter:"all",inventoryPage:1,inventoryPageSize:18,journalPage:1,journalPageSize:16,modal:null,forgePreview:null,moreMenuOpen:!1,collapsedCardsByView:{}},player:{name:"Aurelio",title:"Novato del Coliseo",level:1,xp:0,gold:260,shards:0,iron:16,wood:12,essence:5,food:6,potions:3,keys:2,hp:140,energy:100,stamina:12,baseStats:{attack:14,defense:10,speed:8,crit:.06,dodge:.04,block:.03,lifesteal:0},training:{strength:0,agility:0,endurance:0,discipline:0},guild:{barracks:0,treasury:0,sanctuary:0,hunters:0,arsenal:0},relics:{wrath:0,fortune:0,vitality:0,momentum:0},pet:null,petLevel:0,petXp:0,activeSkills:["powerStrike","quickLunge","fortify"],unlockedSkills:["powerStrike","quickLunge","fortify"],skillLevels:{powerStrike:1,quickLunge:1,fortify:1,shieldBash:1,bloodRage:1,whirlwind:1,execution:1,venomCut:1,berserk:1,celestialEdge:1},skillPoints:0,attributePoints:0,zoneId:0,highestDungeonFloor:1,ascension:0,relicDust:0,equipment:{weapon:k("weapon","Gladius"),offhand:k("offhand","Escudo de Torre"),helm:null,chest:k("chest","Coraza Segmentada"),gloves:null,boots:null,ring:null,amulet:null},inventory:d()},stats:{wins:0,losses:0,kills:0,damageDone:0,damageTaken:0,crits:0,questsCompleted:0,crafted:0,salvaged:0,earnedGold:0,expeditions:0,dungeons:0,elites:0,legendaryFound:0},quests:I(1),claimedAchievements:[],timers:{job:null,expedition:null},market:{items:E(1),lastRefresh:Date.now()},journal:[{id:v(),ts:Date.now(),icon:"⚔️",text:"Has entrado en Aether Arena. El coliseo huele a hierro, oro y gloria."}],streak:{lastClaimDay:null,days:0},combatHistory:[],lastTick:Date.now(),lastSave:0}}return{xpNeeded:T,defaultQuests:I,makeDefaultState:i}}function Ba(t){const{state:o,PETS:v,sum:k,statsDomain:d,scaleItemStats:E}=t;function T(){return 28+o.player.guild.arsenal*8+o.player.ascension*2}function I(){return k(Object.values(o.player.guild||{}))}function i(){return v.find(a=>a.id===o.player.pet)||null}function C(){return d.petBonus(o,i)}function _(){return d.getGuildBonus(o)}function N(){return d.getRelicBonus(o)}function V(){return d.getEquipmentBonus(o,E)}function P(){return d.getTrainingBonus(o)}function Z(){return d.getDerivedStats(o,{getPetData:i,scaleItemStats:E})}function g(){return d.getLootLuck(o,{getPetData:i,scaleItemStats:E})}return{maxInventory:T,guildTotal:I,getPetData:i,petBonus:C,getGuildBonus:_,getRelicBonus:N,getEquipmentBonus:V,getTrainingBonus:P,getDerivedStats:Z,getLootLuck:g}}function Oa(t){const{clone:o,statsDomain:v,makeDefaultState:k,createStore:d,subscribeWithSelector:E}=t,T=new Set(["_meta","actions"]),I={};function i(g={}){return{hydrated:!1,isDirty:!1,isSaving:!1,lastMutationAt:0,lastMutationLabel:"bootstrap",mutationCount:0,lastSaveAt:0,saveCount:0,lastSource:"bootstrap",syncRevision:0,...g}}function C(g=null){const a=g||I,y={};return Object.keys(a||{}).forEach(M=>{T.has(M)||(y[M]=o(a[M]))}),y}function _(g=null){const a=C(g);return a.ui&&(a.ui.modal=null,a.ui.moreMenuOpen=!1,a.ui.forgePreview=null),a}function N(g){Object.keys(I).forEach(a=>delete I[a]),Object.assign(I,g),v.invalidateDerivedCache()}const V=d(E(()=>({...o(k()),_meta:i(),actions:{}})));function P(){return N(C(V.getState())),I}function Z(g,a={},y=!0){const M=V.getState(),f=i({...M._meta||{},...a}),x={...o(g),_meta:f,actions:M.actions||{}};return V.setState(x,y),P()}return{state:I,gameStore:V,createStoreMeta:i,snapshotGameData:C,serializableState:_,replaceState:N,syncStateFromStore:P,setStoreSnapshot:Z}}function Na(t){const{state:o,gameStore:v,clone:k,snapshotGameData:d,replaceState:E,normalizeState:T,createStoreMeta:I,setStoreSnapshot:i}=t;function C(){return v.getState()._meta||I()}function _(g={}){const a=v.getState();return v.setState({...a,_meta:I({...a._meta||{},...g})}),C()}function N(g={},a=!0){return i(o,g,a)}function V(g,a,y={}){const M=d(v.getState());try{E(k(M)),typeof a=="function"&&a(o),y.normalize&&T();const f=C();return N({hydrated:!0,isDirty:y.markDirty===!1?f.isDirty:!0,isSaving:!1,lastMutationAt:Date.now(),lastMutationLabel:g||"mutation",mutationCount:(f.mutationCount||0)+1,lastSource:y.source||"local"})}catch(f){throw E(M),f}}function P(g,a,y){return typeof g=="function"&&typeof a=="function"?v.subscribe(g,a,y):v.subscribe(g)}function Z(g){return typeof g=="function"?g(v.getState()):v.getState()}return{getStoreMeta:C,setStoreMeta:_,commitWorkingState:N,mutate:V,subscribeStore:P,selectStore:Z}}function za(t){const{STORAGE_KEY:o,state:v,makeDefaultState:k,clone:d,snapshotGameData:E,serializableState:T,replaceState:I,normalizeState:i,commitWorkingState:C,setStoreMeta:_,getStoreMeta:N}=t;function V(y,M="storage"){I(d(y||k())),i();const f=Date.now();return C({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:v.lastSave||f,lastSource:M,syncRevision:M==="external-sync"?N().syncRevision+1:N().syncRevision})}function P(){try{const y=Date.now();_({isSaving:!0});const M=T();return M.lastSave=y,localStorage.setItem(o,JSON.stringify(M)),I(E()),v.lastSave=y,C({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:y,saveCount:(N().saveCount||0)+1,lastSource:"save"}),!0}catch(y){return console.warn("No se pudo guardar la partida.",y),_({isSaving:!1}),!1}}function Z(){try{const y=localStorage.getItem(o);return y?V(JSON.parse(y),"storage"):V(k(),"new-game")}catch(y){return console.warn("Guardado corrupto, creando uno nuevo.",y),V(k(),"recovered")}}function g(y){try{return V(y?JSON.parse(y):k(),"external-sync")}catch(M){return console.warn("No se pudo sincronizar el estado externo.",M),!1}}function a(){return localStorage.removeItem(o),V(k(),"reset")}return{loadFromParsedState:V,saveGame:P,loadGame:Z,syncExternalState:g,hardReset:a}}(()=>{const{STORAGE_KEY:t,SLOT_ORDER:o,ITEM_BASES:v,AFFIXES:k,PETS:d,SKILLS:E}=window.AetherConfig,{clone:T,rand:I,pick:i,clamp:C,sum:_,uid:N,softRound:V,rarityDef:P,deepMerge:Z,emptyStats:g,addStats:a,localDayKey:y,pickRarity:M,findBaseItem:f,scaledStatValue:x}=window.AetherUtils,w=Va({SLOT_ORDER:o,emptyStats:g,addStats:a,softRound:V,clamp:C});let L=()=>0;const{scaleItemStats:e,computeItemScore:n,makeItem:l,makeStarterItem:p,generateMarket:h,starterInventory:c}=Ta({ITEM_BASES:v,AFFIXES:k,SLOT_ORDER:o,pick:i,rand:I,uid:N,softRound:V,rarityDef:P,pickRarity:M,findBaseItem:f,scaledStatValue:x,getLootLuck:()=>L()}),{xpNeeded:u,defaultQuests:S,makeDefaultState:O}=qa({pick:i,uid:N,makeStarterItem:p,starterInventory:c,generateMarket:h}),z=Oa({clone:T,statsDomain:w,makeDefaultState:O,createStore:La,subscribeWithSelector:Da}),{state:r,gameStore:B,createStoreMeta:m,snapshotGameData:$,serializableState:R,replaceState:F,syncStateFromStore:Q,setStoreSnapshot:K}=z,ne=Ba({state:r,PETS:d,sum:_,statsDomain:w,scaleItemStats:e}),{maxInventory:se,guildTotal:D,getPetData:A,petBonus:H,getGuildBonus:Y,getRelicBonus:re,getEquipmentBonus:me,getTrainingBonus:ve,getDerivedStats:Le,getLootLuck:Re}=ne;L=Re,Q();function je(J=null){const X=r.player,ie=[];return Object.values(E).forEach(te=>{X.level>=te.unlockLevel&&!X.unlockedSkills.includes(te.id)&&(X.unlockedSkills.push(te.id),ie.push(te))}),typeof J=="function"&&ie.forEach(te=>J(te)),ie}function $e(){const J=O();F(Z(J,T(r))),r.currentView=r.currentView||r.currentTab||"resumen",r.currentTab=r.currentView,r.ui.moreMenuOpen=!!r.ui.moreMenuOpen,r.player.inventory||(r.player.inventory=[]),r.player.equipment||(r.player.equipment=J.player.equipment),r.player.guild||(r.player.guild=J.player.guild),r.player.training||(r.player.training=J.player.training),r.player.relics||(r.player.relics=J.player.relics),r.player.skillLevels||(r.player.skillLevels=J.player.skillLevels),r.player.activeSkills||(r.player.activeSkills=J.player.activeSkills),r.player.unlockedSkills||(r.player.unlockedSkills=J.player.unlockedSkills),r.quests||(r.quests=J.quests),(!r.market||!r.market.items)&&(r.market=J.market),r.stats||(r.stats=J.stats),r.claimedAchievements||(r.claimedAchievements=[]),r.combatHistory||(r.combatHistory=[]),r.journal||(r.journal=J.journal),r.streak||(r.streak=J.streak),r.timers||(r.timers=J.timers),r.ui||(r.ui=J.ui),r.ui.inventoryFilter=r.ui.inventoryFilter||"all",r.ui.inventoryPage=Math.max(1,Number(r.ui.inventoryPage)||1),r.ui.inventoryPageSize=Math.max(6,Number(r.ui.inventoryPageSize)||J.ui.inventoryPageSize),r.ui.journalPage=Math.max(1,Number(r.ui.journalPage)||1),r.ui.journalPageSize=Math.max(8,Number(r.ui.journalPageSize)||J.ui.journalPageSize),(!r.ui.collapsedCardsByView||typeof r.ui.collapsedCardsByView!="object")&&(r.ui.collapsedCardsByView={}),je();const X=Le();r.player.hp=C(r.player.hp||X.maxHp,1,X.maxHp),r.player.energy=C(r.player.energy??X.maxEnergy,0,X.maxEnergy),r.player.stamina=C(r.player.stamina??X.maxStamina,0,X.maxStamina),r.player.title=r.player.title||"Novato del Coliseo",r.lastTick=r.lastTick||Date.now(),r.lastSave=r.lastSave||0}const Fe=Na({state:r,gameStore:B,clone:T,snapshotGameData:$,replaceState:F,normalizeState:$e,createStoreMeta:m,setStoreSnapshot:K}),{getStoreMeta:De,setStoreMeta:be,commitWorkingState:Te,mutate:Ve,subscribeStore:Ge,selectStore:Je}=Fe,Ze=za({STORAGE_KEY:t,state:r,makeDefaultState:O,clone:T,snapshotGameData:$,serializableState:R,replaceState:F,normalizeState:$e,commitWorkingState:Te,setStoreMeta:be,getStoreMeta:De}),{saveGame:b,loadGame:q,syncExternalState:U,hardReset:ae}=Ze,le={mutate:Ve,saveGame:b,loadGame:q,hardReset:ae,setMeta:be,syncExternalState:U};B.setState({...B.getState(),actions:le}),Q(),window.AetherModel={state:r,store:B,replaceState:F,snapshotGameData:$,mutate:Ve,subscribeStore:Ge,selectStore:Je,getStoreMeta:De,setStoreMeta:be,syncExternalState:U,makeItem:l,makeStarterItem:p,scaleItemStats:e,computeItemScore:n,xpNeeded:u,defaultQuests:S,generateMarket:h,starterInventory:c,makeDefaultState:O,maxInventory:se,guildTotal:D,getPetData:A,petBonus:H,getGuildBonus:Y,getRelicBonus:re,getEquipmentBonus:me,getTrainingBonus:ve,getDerivedStats:Le,getLootLuck:Re,ensureUnlockedSkills:je,normalizeState:$e,saveGame:b,loadGame:q,hardReset:ae}})();function Ha(t){const{SKILLS:o,pick:v,rand:k,randf:d,clamp:E,softRound:T,uid:I}=t;function i(e){return{berserker:{attack:1.12,defense:.92,speed:1.03,crit:.04,dodge:.01,block:0,lifesteal:.02},guardian:{attack:.9,defense:1.18,speed:.92,crit:.01,dodge:.02,block:.05,lifesteal:0},assassin:{attack:1,defense:.86,speed:1.22,crit:.06,dodge:.05,block:.01,lifesteal:0},beast:{attack:1.08,defense:.95,speed:1.09,crit:.03,dodge:.03,block:0,lifesteal:.03},occult:{attack:1.03,defense:.94,speed:1.05,crit:.05,dodge:.02,block:.02,lifesteal:0}}[e]||{attack:1,defense:1,speed:1,crit:0,dodge:0,block:0,lifesteal:0}}function C({zone:e,kind:n="normal",playerLevel:l=1,playerAscension:p=0,wins:h=0}){const c=Math.pow(l,.88)*.04,u=e&&typeof e.id=="number"?e.id*.25:0,S=p*.25,O=Math.min(h/60,3),z=n==="elite"?.3:n==="boss"?.6:0;return 1+c+u+S+O+z}function _({zone:e,kind:n="normal",extraScale:l=0,playerLevel:p=1,playerAscension:h=0,wins:c=0}){const S=v(["berserker","guardian","assassin","beast","occult"]),O=i(S),z=Math.max(1,Math.round(e.unlockLevel+p*.95+e.id*1.8+l+k(-1,2))),r=n==="elite"?1.3:n==="boss"?1.6:1,B=C({zone:e,kind:n,playerLevel:p,playerAscension:h,wins:c}),m=(12+z*3.4)*O.attack*r*B,$=(8+z*2.8)*O.defense*r*B,R=(120+z*34)*(n==="boss"?2.1:n==="elite"?1.5:1)*B,F=(7+z*1.08)*O.speed*B,Q=n==="boss"?e.boss:v(e.enemies),K={berserker:{name:"Furia salvaje",mult:1.45,cooldown:3},guardian:{name:"Muro de carne",mult:.9,cooldown:4,selfBuff:{defensePct:.2,turns:2}},assassin:{name:"Deguello",mult:1.2,cooldown:3,critBonus:.18},beast:{name:"Desgarro",mult:1.08,cooldown:3,dot:{turns:2,ratio:.12,label:"Sangrado"}},occult:{name:"Maldicion",mult:1.15,cooldown:4,armorBreak:{pct:.14,turns:2}}}[S];return{id:I(),name:Q,zoneId:e.id,kind:n,archetype:S,level:z,maxHp:Math.round(R),hp:Math.round(R),attack:T(m,2),defense:T($,2),speed:T(F,2),crit:E(.06+O.crit+(n==="boss"?.03:n==="elite"?.015:0)+(B-1)*.015,0,.55),dodge:E(.025+O.dodge+(n==="boss"?.02:n==="elite"?.01:0)+(B-1)*.012,0,.45),block:E(.015+O.block+(n==="boss"?.04:n==="elite"?.02:0)+(B-1)*.012,0,.4),lifesteal:E(O.lifesteal+(n==="boss"?.01:n==="elite"?.005:0)+(B-1)*.008,0,.25),skill:K,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0}}function N(e,n){return{id:"player",name:e.name,maxHp:n.maxHp,hp:Math.round(e.hp),attack:n.attack,defense:n.defense,speed:n.speed,crit:n.crit,dodge:n.dodge,block:n.block,lifesteal:n.lifesteal,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0,activeSkills:(e.activeSkills||[]).filter(l=>(e.unlockedSkills||[]).includes(l))}}function V(e,n){return e.buffs.filter(l=>l.turns>0&&n in(l.values||{})).reduce((l,p)=>l+p.values[n],0)}function P(e,n){const l=`${n}Pct`;let p=e[n];return n==="defense"&&e.armorBreak&&e.armorBreak.turns>0&&(p*=1-e.armorBreak.pct),(n==="attack"||n==="defense"||n==="speed")&&(p*=1+V(e,l)),p+=V(e,n),p}function Z(e,n){return 1+Math.max(0,(e&&e[n]||1)-1)*.08}function g(e,n,l){const p=e.activeSkills||[];for(const h of p){const c=o[h];if(c&&!(c.requireOffhand&&!l.equipment.offhand)&&!((e.cooldowns[h]||0)>0)&&!(c.executeThreshold&&n.hp/n.maxHp>c.executeThreshold))return c}return null}function a(e){return!e.skill||(e.cooldowns.special||0)>0?null:e.skill}function y(e,n){e.dots=e.dots.filter(l=>{if(l.turns<=0)return!1;const p=Math.round(l.damage);return e.hp-=p,n.push(`☠️ ${e.name} sufre ${p} por ${l.label}.`),l.turns-=1,l.turns>0}),e.buffs.forEach(l=>{l.turns-=1}),e.buffs=e.buffs.filter(l=>l.turns>0),e.armorBreak&&(e.armorBreak.turns-=1,e.armorBreak.turns<=0&&(e.armorBreak=null))}function M(e,n,l,p=1,h={},c=[]){const u=P(e,"attack"),S=P(n,"defense"),O=E((e.crit||0)+(h.critBonus||0),0,.85),z=E(n.dodge||0,0,.7);if(Math.random()<z)return c.push(`💨 ${n.name} esquiva ${l}.`),{damage:0,crit:!1,dodged:!0,blocked:!1};let r=u*p-S*.55;r=Math.max(u*.26,r),r*=d(.9,1.08);let B=!1;Math.random()<O&&(r*=1.68,B=!0);let m=!1;if(Math.random()<(n.block||0)&&(r*=.66,m=!0),r=Math.max(1,Math.round(r)),n.shield>0){const F=Math.min(n.shield,r);n.shield-=F,r-=F,F>0&&c.push(`🛡️ ${n.name} absorbe ${F} con un escudo.`)}if(r>0){n.hp-=r;const F=r*E((e.lifesteal||0)+(h.lifestealBonus||0),0,.9);F>0&&(e.hp=Math.min(e.maxHp,e.hp+Math.round(F)))}const $=B?" crítico":"",R=m?" (bloqueado parcialmente)":"";return c.push(`⚔️ ${e.name} usa ${l} y causa ${r}${$}${R}.`),{damage:r,crit:B,dodged:!1,blocked:m}}function f(e,n,l,p,h){if(!(!l||p.dodged)&&(l.armorBreak&&(n.armorBreak={pct:l.armorBreak.pct,turns:l.armorBreak.turns+1},h.push(`🧩 La armadura de ${n.name} queda expuesta.`)),l.dot&&p.damage>0&&(n.dots.push({damage:Math.max(3,e.attack*l.dot.ratio),turns:l.dot.turns,label:l.dot.label}),h.push(`🩸 ${n.name} queda afectado por ${l.dot.label}.`)),l.selfBuff)){if(e.buffs.push({turns:l.selfBuff.turns+1,values:{attackPct:l.selfBuff.attackPct||0,defensePct:l.selfBuff.defensePct||0,speedPct:l.selfBuff.speedPct||0}}),l.selfBuff.shieldPct){const c=Math.round(e.maxHp*l.selfBuff.shieldPct);e.shield+=c,h.push(`🛡️ ${e.name} obtiene un escudo de ${c}.`)}h.push(`✨ ${e.name} activa un refuerzo temporal.`)}}function x(e,n,l,p,h,c){if(e.hp<=0||n.hp<=0)return null;const u=l?g(e,n,p):a(e);if(!u){const r=M(e,n,"Golpe básico",1,{},c);return r.damage>0&&(l?h.damageDone+=r.damage:h.damageTaken+=r.damage),r}const S=(u.mult||1)*(l?Z(p.skillLevels,u.id):1),O=u.hits||1;let z=null;for(let r=0;r<O;r++){const B={};u.critBonus&&(B.critBonus=u.critBonus),u.lifestealBonus&&(B.lifestealBonus=u.lifestealBonus);let m=S;if(u.executeThreshold&&n.hp/n.maxHp<=u.executeThreshold&&(m*=u.executeMult||1.6),z=M(e,n,u.name,m,B,c),z&&z.damage>0&&(l?h.damageDone+=z.damage:h.damageTaken+=z.damage),z&&z.crit&&l&&(h.crits+=1),n.hp<=0)break}return f(e,n,u,z||{dodged:!1,damage:0},c),l?e.cooldowns[u.id]=u.cooldown:e.cooldowns.special=u.cooldown,z}function w(e){Object.keys(e.cooldowns).forEach(n=>{e.cooldowns[n]=Math.max(0,(e.cooldowns[n]||0)-1)})}function L({enemy:e,playerState:n,derivedStats:l,zoneName:p,maxTurns:h=28}){const c=N(n,l),u=JSON.parse(JSON.stringify(e)),S=[`🏟️ <b>${c.name}</b> se enfrenta a <b>${u.name}</b> en <b>${p}</b>.`],O={damageDone:0,damageTaken:0,crits:0},z={equipment:n.equipment,skillLevels:n.skillLevels};let r=1;for(;c.hp>0&&u.hp>0&&r<=h&&(y(c,S),y(u,S),!(c.hp<=0||u.hp<=0));){const B=P(c,"speed")+d(0,3)>=P(u,"speed")+d(0,3)?[[c,u,!0],[u,c,!1]]:[[u,c,!1],[c,u,!0]];for(const[m,$,R]of B)if(!(m.hp<=0||$.hp<=0)&&(x(m,$,R,z,O,S),$.hp<=0))break;w(c),w(u),r+=1}return{player:c,foe:u,log:S,statsDelta:O,victory:c.hp>0&&u.hp<=0}}return{enemyArchetypeMods:i,difficultyMultiplier:C,makeEnemy:_,buildPlayerCombatant:N,activeBuffValue:V,effectiveStat:P,skillLevelMult:Z,choosePlayerSkill:g,chooseEnemySkill:a,decayStatuses:y,performHit:M,applySkillEffects:f,actorTurn:x,tickCooldowns:w,runCombat:L}}function _a(t){const{rarityDef:o,rand:v,uid:k,clone:d,generateMarket:E,makeItem:T,computeItemScore:I}=t;function i(e,n){return e.player.inventory.length<n}function C(e,n){e.player.inventory=e.player.inventory.filter(l=>l.id!==n)}function _(e,n){return e.player.inventory.find(l=>l.id===n)}function N(e,n,l){if(!n)return;const{maxInventory:p,addJournal:h,trackQuest:c,checkAchievements:u}=l;if(!i(e,p)){const S=Math.round(n.value*.45);e.player.gold+=S,e.stats.earnedGold+=S,h("📦",`Inventario lleno. <span class="rarity-${n.rarity}">${n.name}</span> se convierte en ${S} de oro.`),c("earnGold",S);return}e.player.inventory.push(n),e.player.inventory.sort((S,O)=>o(O.rarity).value+O.score-(o(S.rarity).value+S.score)),(n.rarity==="legendary"||n.rarity==="mythic")&&(e.stats.legendaryFound+=1),u()}function V(e,n,l){const{addJournal:p}=l,h=_(e,n);if(!h)return;const c=h.slot,u=e.player.equipment[c];e.player.equipment[c]=h,C(e,n),u&&e.player.inventory.push(u),p("🧷",`Equipas <span class="rarity-${h.rarity}">${h.name}</span>.`)}function P(e,n,l){const{maxInventory:p,addJournal:h,toast:c}=l,u=e.player.equipment[n];if(!u||!i(e,p)){c("No hay espacio en el inventario","danger");return}e.player.inventory.push(u),e.player.equipment[n]=null,h("🎒",`Guardas ${u.name} en el inventario.`)}function Z(e,n,l){const{trackQuest:p,addJournal:h}=l,c=_(e,n);if(!c)return;const u=Math.round(c.value*.65);e.player.gold+=u,e.stats.earnedGold+=u,p("earnGold",u),C(e,n),h("💰",`Vendes ${c.name} por ${u} de oro.`)}function g(e,n,l){const{trackQuest:p,addJournal:h}=l,c=_(e,n);if(!c)return;const u=o(c.rarity),S=Math.max(1,Math.round(c.level/3+u.affixes)),O=Math.max(0,Math.round(u.affixes/2)),z=c.rarity==="rare"?1:c.rarity==="epic"?2:c.rarity==="legendary"?4:c.rarity==="mythic"?6:0;e.player.iron+=S,e.player.wood+=O,e.player.essence+=z,e.stats.salvaged+=1,p("salvaged",1),C(e,n),h("♻️",`Reciclas ${c.name}: +${S} hierro, +${O} madera${z?`, +${z} esencia`:""}.`)}function a(e,n,l){const{toast:p,addJournal:h}=l,c=90+e.player.level*12;if(n){if(e.player.gold<c){p("No tienes oro suficiente para refrescar","danger");return}e.player.gold-=c}e.market.items=E(e.player.level),e.market.lastRefresh=Date.now(),h("🛒",`El mercado renueva su inventario${n?` por ${c} de oro`:""}.`)}function y(e,n,l){const{maxInventory:p,toast:h,addJournal:c,trackQuest:u,checkAchievements:S}=l,O=e.market.items.find(r=>r.id===n);if(!O)return;if(e.player.gold<O.price){h("Oro insuficiente","danger");return}if(!i(e,p)){h("Inventario lleno","danger");return}e.player.gold-=O.price;const z=d(O);z.id=k(),N(e,z,{maxInventory:p,addJournal:c,trackQuest:u,checkAchievements:S}),e.market.items=e.market.items.filter(r=>r.id!==n),c("🛍️",`Compras ${O.name} por ${O.price} de oro.`)}function M(e,n,l){const{toast:p,grantRewards:h}=l,u={potion:{price:120,reward:{potions:1},label:"Poción"},key:{price:180,reward:{keys:1},label:"Llave de mazmorra"},essence:{price:140,reward:{essence:1},label:"Esencia"},food:{price:65,reward:{food:2},label:"Comida"}}[n];if(u){if(e.player.gold<u.price){p("Oro insuficiente","danger");return}e.player.gold-=u.price,h(u.reward,u.label)}}function f(e,n,l,p){const{maxInventory:h,toast:c,addJournal:u,trackQuest:S,checkAchievements:O}=p,z=l==="premium"?{gold:260,iron:12,wood:7,essence:3}:{gold:140,iron:8,wood:4,essence:1};if(e.player.gold<z.gold||e.player.iron<z.iron||e.player.wood<z.wood||e.player.essence<z.essence){c("Te faltan materiales","danger");return}if(!i(e,h)){c("Inventario lleno","danger");return}e.player.gold-=z.gold,e.player.iron-=z.iron,e.player.wood-=z.wood,e.player.essence-=z.essence;let r=null;if(l==="premium"){const m=Math.random()-Math.min(.06,e.player.level*.0015);e.player.level>=22&&m<.025?r="legendary":m<.26?r="epic":r="rare"}const B=T(n,e.player.level+v(0,2),r,null,l==="premium"?1:0);N(e,B,{maxInventory:h,addJournal:u,trackQuest:S,checkAchievements:O}),e.stats.crafted+=1,S("crafts",1),u("🔨",`Forjas ${B.name}.`),p.toast(`Nuevo objeto: ${B.name}`,"gold")}function x(e,n,l){const{toast:p,trackQuest:h,addJournal:c}=l,u=e.player.equipment[n];if(!u){p("No tienes ese hueco equipado","danger");return}if((u.upgrade||0)>=10){p("Ese objeto ya está al máximo","cyan");return}const S=o(u.rarity),O=Math.round(90+u.level*18+u.upgrade*65+S.value*.4),z=Math.max(2,Math.round(3+u.upgrade*1.4+S.affixes)),r=u.upgrade>=6?1+Math.floor(u.upgrade/3):0;if(e.player.gold<O||e.player.iron<z||e.player.essence<r){p("No tienes materiales suficientes","danger");return}e.player.gold-=O,e.player.iron-=z,e.player.essence-=r,u.upgrade+=1,u.score=I(u),e.stats.crafted+=1,h("crafts",1),c("⚒️",`Mejoras ${u.name} a +${u.upgrade}.`)}function w(e,n,l){const{toast:p,addJournal:h}=l,c=_(e,n)||Object.values(e.player.equipment).find(O=>O&&O.id===n);if(!c)return;const u={gold:180,essence:2};if(e.player.gold<u.gold||e.player.essence<u.essence){p("Te faltan recursos para retemplar","danger");return}e.player.gold-=u.gold,e.player.essence-=u.essence;const S=T(c.slot,Math.max(c.level,e.player.level),c.rarity,c.baseName);c.stats=S.stats,c.affixes=S.affixes,c.name=S.name,c.score=I(c),h("🌀",`Retemplas ${c.baseName} y nace ${c.name}.`)}function L(e,n){const{toast:l,trackQuest:p,addJournal:h}=n,c=e.player.inventory.filter(S=>S.rarity==="common");if(!c.length){l("No hay chatarra común que vender","cyan");return}let u=0;c.forEach(S=>{u+=Math.round(S.value*.55)}),e.player.inventory=e.player.inventory.filter(S=>S.rarity!=="common"),e.player.gold+=u,e.stats.earnedGold+=u,p("earnGold",u),h("🧹",`Vendes automáticamente ${c.length} objetos comunes por ${u} de oro.`)}return{acquireItem:N,removeInventoryItem:C,getInventoryItem:_,equipItem:V,unequipItem:P,sellItem:Z,salvageItem:g,refreshMarket:a,buyMarketItem:y,buyResource:M,forgeItem:f,upgradeEquipped:x,rerollItem:w,autoManage:L}}function Fa(t){const{JOBS:o,ZONES:v,clone:k,rand:d,pick:E,SLOT_ORDER:T,makeItem:I,clamp:i}=t;function C(g,a,y){const M=y(),f=M.maxHp*(.0033+M.regenPct*.01)*a,x=(.48+g.player.training.discipline*.02+g.player.relics.momentum*.04)*a,w=(.028+g.player.relics.momentum*.005)*a;g.player.hp=i(g.player.hp+f,1,M.maxHp),g.player.energy=i(g.player.energy+x,0,M.maxEnergy),g.player.stamina=i(g.player.stamina+w,0,M.maxStamina)}function _(g,a,y){const{toast:M,addJournal:f}=y,x=o.find(w=>w.id===a);if(x){if(g.timers.job){M("Ya tienes un trabajo en curso","cyan");return}if(g.player.energy<12){M("Necesitas al menos 12 de energía","danger");return}g.player.energy-=12,g.timers.job={id:x.id,name:x.name,endAt:Date.now()+x.duration*1e3,reward:k(x.reward),startedAt:Date.now()},f("🧰",`Comienzas el trabajo: <b>${x.name}</b>.`)}}function N(g,a,y){const{grantRewards:M,toast:f}=y;if(!g.timers.job)return;const x=g.timers.job;g.timers.job=null,M(x.reward,`Trabajo terminado — ${x.name}`),a||f(`Trabajo completado: ${x.name}`,"success")}function V(g,a,y,M){const{isZoneUnlocked:f,toast:x,addJournal:w}=M,L=v.find(n=>n.id===a);if(!L||!f(L))return;if(g.timers.expedition){x("Ya estás en expedición","cyan");return}const e=L.energyCost+Math.floor(y/40);if(g.player.energy<e||g.player.stamina<L.staminaCost){x("No tienes recursos para partir","danger");return}g.player.energy-=e,g.player.stamina-=L.staminaCost,g.timers.expedition={zoneId:a,endAt:Date.now()+y*1e3,durationSec:y,startedAt:Date.now()},w("🧭",`Sales de expedición a <b>${L.name}</b> durante ${y}s.`)}function P(g,a,y){const{grantRewards:M,getDerivedStats:f,trackQuest:x,acquireItem:w,addJournal:L,toast:e}=y;if(!g.timers.expedition)return;const n=g.timers.expedition;g.timers.expedition=null;const l=v.find(c=>c.id===n.zoneId)||v[0],p=1+n.durationSec/90,h={gold:Math.round((90+l.id*50+g.player.level*16)*p*(1+f().goldPct)),xp:Math.round((55+l.id*35+g.player.level*12)*p),iron:d(1,3+l.id),wood:d(1,2+Math.floor(l.id/2)),essence:Math.random()<.45?d(1,2+Math.floor(l.id/2)):0,food:Math.random()<.5?1+Math.floor(l.id/2):0};if(M(h,`Expedición — ${l.name}`),g.stats.expeditions+=1,x("expeditions",1),Math.random()<.55+l.id*.03){const c=I(E(T),g.player.level+l.id,Math.random()<.12?"epic":null);w(c),L("🎒",`Encuentras <span class="rarity-${c.rarity}">${c.name}</span> en la expedición.`)}a||e(`Expedición completada: ${l.name}`,"success")}function Z(g,a,y,M){const{completeJob:f,completeExpedition:x}=M;let w=!1;return g.timers.job&&g.timers.job.endAt<=a&&(f(y),w=!0),g.timers.expedition&&g.timers.expedition.endAt<=a&&(x(y),w=!0),w}return{passiveRegen:C,startJob:_,completeJob:N,startExpedition:V,completeExpedition:P,resolveFinishedTimers:Z}}function Ga(t){const{RANKS:o,ACHIEVEMENTS:v,clamp:k,clone:d,defaultQuests:E,makeDefaultState:T}=t;function I(a,y){const M=a.player.level*14+a.stats.wins*4+a.player.highestDungeonFloor*10+y()*8+a.player.ascension*60;let f=o[0];return o.forEach(x=>{M>=x.min&&(f=x)}),f}function i(a,y,M){const{xpNeeded:f,ensureUnlockedSkills:x,getDerivedStats:w,currentRank:L,addJournal:e,toast:n}=M;if(!y)return;a.player.xp+=y;let l=0;for(;a.player.xp>=f(a.player.level);)a.player.xp-=f(a.player.level),a.player.level+=1,a.player.attributePoints+=4,a.player.skillPoints+=1,l+=1,x(h=>{e("✨",`Has desbloqueado la habilidad <b>${h.name}</b>.`),n(`Habilidad desbloqueada: ${h.name}`,"violet")});const p=w();l>0&&(a.player.hp=p.maxHp,a.player.energy=p.maxEnergy,a.player.stamina=k(a.player.stamina+l,0,p.maxStamina),a.player.title=L().title,e("🌟",`Subes al nivel <b>${a.player.level}</b>. Recibes puntos de atributo y habilidad.`),n(`Nivel ${a.player.level} alcanzado`,"gold"))}function C(a,y,M,f){a.quests.forEach(x=>{x.claimed||x.type!==y||(x.progress+=M,x.progress>=x.target&&(x.progress=x.target,x.completed=!0))}),y==="crafts"&&(a.stats.crafted+=0),f()}function _(a,y,M){const{grantRewards:f,addJournal:x,checkAchievements:w}=M,L=a.quests.find(e=>e.id===y);!L||!L.completed||L.claimed||(L.claimed=!0,f(L.reward,`Misión: ${L.title}`),a.stats.questsCompleted+=1,x("📜",`Misión completada: <b>${L.title}</b>.`),a.quests.every(e=>e.claimed)&&(a.quests=E(a.player.level),x("🪄","Se generan nuevos contratos en el tablón.")),w())}function N(a,y){const{toast:M,addJournal:f}=y,x=140+a.player.level*12;if(a.player.gold<x){M("Oro insuficiente para renovar misiones","danger");return}a.player.gold-=x,a.quests=E(a.player.level),f("📌",`Renuevas el tablón de contratos por ${x} de oro.`)}function V(a,y,M){const f={kills:a.stats.kills,wins:a.stats.wins,questsCompleted:a.stats.questsCompleted,highestDungeonFloor:a.player.highestDungeonFloor,level:a.player.level,legendaryFound:a.stats.legendaryFound,guildTotal:M(),ascension:a.player.ascension};return Math.min(y.target,f[y.type]||0)}function P(a,y){const{grantRewards:M,addJournal:f,toast:x,guildTotal:w}=y;v.forEach(L=>{if(a.claimedAchievements.includes(L.id))return;V(a,L,w)>=L.target&&(a.claimedAchievements.push(L.id),M(L.reward,`Logro: ${L.title}`),f("🏆",`Logro desbloqueado: <b>${L.title}</b>.`),x(`Logro desbloqueado: ${L.title}`,"gold"))})}function Z(a,y,M){const{toast:f,addJournal:x}=M;if(a.player.relicDust<=0){f("No tienes polvo de reliquia","danger");return}y in a.player.relics&&(a.player.relicDust-=1,a.player.relics[y]+=1,x("🗿",`Inviertes una reliquia en ${y}.`))}function g(a,y){const{toast:M,confirmAscend:f,replaceState:x,normalizeState:w,currentRank:L,addJournal:e,checkAchievements:n}=y;if(a.player.level<20&&a.player.highestDungeonFloor<8){M("Necesitas nivel 20 o piso 8 de mazmorra","danger");return}if(!f())return;const l=3+Math.floor(a.player.level/8)+Math.floor(a.player.highestDungeonFloor/4),p=d(a.player.relics),h=a.player.relicDust+l,c=a.player.ascension+1,u=T();u.player.relics=p,u.player.relicDust=h,u.player.ascension=c,u.player.shards=2,u.player.gold=320,x(u),w(),a.player.title=L().title,e("🔱",`Has ascendido. Obtienes ${l} de Polvo de Reliquia.`),n(),M(`Ascensión completada (+${l} reliquias)`,"gold")}return{currentRank:I,gainXp:i,trackQuest:C,claimQuest:_,rerollQuests:N,achievementProgress:V,checkAchievements:P,spendRelic:Z,ascend:g}}(()=>{const{SLOT_ORDER:t,SLOT_NAMES:o,RANKS:v,ZONES:k,JOBS:d,PETS:E,SKILLS:T,ACHIEVEMENTS:I}=window.AetherConfig,{$:i,clone:C,rand:_,randf:N,pick:V,clamp:P,sum:Z,uid:g,fmt:a,pct:y,softRound:M,localDayKey:f,timeLeft:x,rarityDef:w,sanitizeInlineHtml:L}=window.AetherUtils,{state:e,replaceState:n,makeDefaultState:l,normalizeState:p,makeItem:h,scaleItemStats:c,computeItemScore:u,xpNeeded:S,defaultQuests:O,generateMarket:z,maxInventory:r,guildTotal:B,getPetData:m,getDerivedStats:$,getLootLuck:R,ensureUnlockedSkills:F,saveGame:Q}=window.AetherModel,K=Ha({SKILLS:T,pick:V,rand:_,randf:N,clamp:P,softRound:M,uid:g}),ne=_a({rarityDef:w,rand:_,uid:g,clone:C,generateMarket:z,makeItem:h,computeItemScore:u}),se=Fa({JOBS:d,ZONES:k,clone:C,rand:_,pick:V,SLOT_ORDER:t,makeItem:h,clamp:P}),D=Ga({RANKS:v,ACHIEVEMENTS:I,clamp:P,clone:C,defaultQuests:O,makeDefaultState:l});function A(s,j){e.journal.unshift({id:g(),ts:Date.now(),icon:s,text:L(j)}),e.journal=e.journal.slice(0,80)}function H(s,j="cyan"){const G=i("toast-root");if(!G)return;const ee={cyan:"from-sky-500/25 to-cyan-300/10 border-cyan-300/25",gold:"from-amber-500/25 to-yellow-300/10 border-amber-300/30",danger:"from-rose-500/25 to-pink-300/10 border-rose-300/25",success:"from-emerald-500/25 to-green-300/10 border-emerald-300/25",violet:"from-violet-500/25 to-fuchsia-300/10 border-violet-300/25"},W=document.createElement("div");W.className=`glass-strong pointer-events-none rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-br ${ee[j]||ee.cyan} animate-[fadeIn_.2s_ease]`,W.innerHTML=L(s),G.appendChild(W),setTimeout(()=>{W.style.opacity="0",W.style.transform="translateY(-6px)",setTimeout(()=>W.remove(),260)},2800)}function Y(s,j="Recompensa"){s&&(Object.entries(s).forEach(([G,ee])=>{G==="xp"?me(ee):G in e.player?e.player[G]+=ee:G in e.stats?e.stats[G]+=ee:G==="relicDust"&&(e.player.relicDust+=ee)}),s.gold&&(e.stats.earnedGold+=s.gold,fe("earnGold",s.gold)),A("🎁",`${j}: ${re(s)}`))}function re(s){return Object.entries(s).map(([j,G])=>{const ee={xp:"XP",gold:"oro",shards:"fragmentos",iron:"hierro",wood:"madera",essence:"esencia",food:"comida",potions:"pociones",keys:"llaves",relicDust:"polvo reliquia"}[j]||j;return`+${a(G)} ${ee}`}).join(" · ")}function me(s){return D.gainXp(e,s,{xpNeeded:S,ensureUnlockedSkills:F,getDerivedStats:$,currentRank:ve,addJournal:A,toast:H})}function ve(){return D.currentRank(e,B)}function Le(){const s=Date.now(),j=P((s-(e.lastTick||s))/1e3,0,60*60*12);j<=0||(Re(j),ht(s,!0),e.lastTick=s)}function Re(s){return se.passiveRegen(e,s,$)}function je(){return k.find(s=>s.id===e.player.zoneId)||k[0]}function $e(s){return e.player.level>=s.unlockLevel||e.player.ascension>0&&s.id<=2}function Fe(s){const j=k.find(G=>G.id===s);!j||!$e(j)||(e.player.zoneId=j.id)}function De(s){return K.enemyArchetypeMods(s)}function be(s,j="normal",G=0){return K.makeEnemy({zone:s,kind:j,extraScale:G,playerLevel:e.player.level||1,playerAscension:e.player.ascension||0,wins:e.stats&&e.stats.wins?e.stats.wins:0})}function Te(){return K.buildPlayerCombatant(e.player,$())}function Ve(s,j){return K.activeBuffValue(s,j)}function Ge(s,j){return K.effectiveStat(s,j)}function Je(s){return K.skillLevelMult(e.player.skillLevels,s)}function Ze(s,j){return K.choosePlayerSkill(s,j,{equipment:e.player.equipment,skillLevels:e.player.skillLevels})}function b(s){return K.chooseEnemySkill(s)}function q(s,j){return K.decayStatuses(s,j)}function U(s,j,G,ee=1,W={},pe=[]){return K.performHit(s,j,G,ee,W,pe)}function ae(s,j,G,ee,W){return K.applySkillEffects(s,j,G,ee,W)}function le(s,j,G,ee){const W={damageDone:0,damageTaken:0,crits:0};return K.actorTurn(s,j,G,{equipment:e.player.equipment,skillLevels:e.player.skillLevels},W,ee)}function J(s){return K.tickCooldowns(s)}function X(s,j={mode:"arena"}){const G=K.runCombat({enemy:s,playerState:e.player,derivedStats:$(),zoneName:k[s.zoneId]&&k[s.zoneId].name||"Zona desconocida",maxTurns:28}),{player:ee,foe:W,log:pe,victory:we,statsDelta:Oe}=G;e.stats.damageDone+=Oe.damageDone,e.stats.damageTaken+=Oe.damageTaken,e.stats.crits+=Oe.crits,e.player.hp=P(ee.hp,1,$().maxHp);const ye={gold:0,xp:0,iron:0,wood:0,essence:0,keys:0,potions:0};let Se=null;if(we){const Me=k[W.zoneId],ma=_(30,54)+W.level*12+(W.kind==="elite"?45:W.kind==="boss"?70:0),ga=_(22,38)+W.level*10+(W.kind==="boss"?55:0);ye.gold=Math.round(ma*(1+$().goldPct)),ye.xp=Math.round(ga),ye.iron=_(0,2+Me.id),ye.wood=_(0,1+Math.floor(Me.id/2)),ye.essence=Math.random()<.32+Me.id*.02?_(1,2+Math.floor(Me.id/2)):0,ye.keys=j.mode==="dungeon"&&Math.random()<.13?1:0,ye.potions=Math.random()<.08?1:0;const fa=.26+R()*.7+(W.kind==="elite"?.1:0)+(W.kind==="boss"?.16:0)+(j.mode==="dungeon"?.1:0);if(Math.random()<fa){const Xe=Math.random()-R()*.32-Me.id*.01-(W.kind==="elite"?.015:0)-(W.kind==="boss"?.04:0);let Qe=null;(W.kind==="boss"||Me.id>=5)&&Xe<.0025?Qe="mythic":(W.kind==="elite"||W.kind==="boss"||Me.id>=4)&&Xe<.013?Qe="legendary":Xe<.06?Qe="epic":Xe<.19&&(Qe="rare"),Se=h(V(t),W.level,Qe),ie(Se)}Y(ye,`Botín de ${W.name}`),e.stats.kills+=1,j.mode==="arena"&&(e.stats.wins+=1),j.mode==="dungeon"&&(e.stats.dungeons+=1),W.kind==="elite"&&(e.stats.elites+=1),W.kind==="boss"&&(e.player.highestDungeonFloor=Math.max(e.player.highestDungeonFloor,j.floor||e.player.highestDungeonFloor)),fe("kills",1),j.mode==="arena"&&fe("wins",1),j.mode==="dungeon"&&fe("dungeons",1),W.kind==="elite"&&fe("elites",1),A("⚔️",`Victoria contra <b>${W.name}</b>. ${re(ye)}${Se?` · Botín: <span class="rarity-${Se.rarity}">${Se.name}</span>`:""}`),H(`Victoria sobre ${W.name}`,"success")}else j.mode==="arena"&&(e.stats.losses+=1),e.player.gold=Math.max(0,e.player.gold-_(10,25)),A("💀",`Has sido derrotado por <b>${W.name}</b>. La multitud te abuchea.`),H(`Derrota contra ${W.name}`,"danger");e.player.title=ve().title,ke(),e.combatHistory.unshift({id:g(),ts:Date.now(),title:`${we?"Victoria":"Derrota"} vs ${W.name}`,result:we?"victory":"defeat",enemy:W.name,zone:k[W.zoneId].name,log:pe,rewards:ye,drop:Se}),e.combatHistory=e.combatHistory.slice(0,15),e.ui.modal={type:"combat",title:`${we?"Victoria":"Derrota"} — ${W.name}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Resultado</div>
              <div class="text-xl font-black ${we?"text-emerald-300":"text-rose-300"}">${we?"Has ganado":"Has perdido"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${re(ye)}${Se?` · Botín: <span class="rarity-${Se.rarity}">${Se.name}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado final</div>
              <div class="text-lg font-black text-white">${a(e.player.hp)} HP restantes</div>
              <div class="text-sm text-slate-300/75 mt-1">${W.name} ${we?"cayó derrotado":"sobrevivió al duelo"}.</div>
            </div>
          </div>
          <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro de combate</div>
            <div class="space-y-2 text-sm text-slate-100/90">${pe.map(Me=>`<div class="leading-relaxed">${Me}</div>`).join("")}</div>
          </div>
        </div>
      `}}function ie(s){return ne.acquireItem(e,s,{maxInventory:r(),addJournal:A,trackQuest:fe,checkAchievements:ke})}function te(s){return ne.removeInventoryItem(e,s)}function oe(s){return ne.getInventoryItem(e,s)}function Ce(s){return ne.equipItem(e,s,{addJournal:A})}function de(s){return ne.unequipItem(e,s,{maxInventory:r(),addJournal:A,toast:H})}function ge(s){return ne.sellItem(e,s,{addJournal:A,trackQuest:fe})}function Pe(s){return ne.salvageItem(e,s,{addJournal:A,trackQuest:fe})}function ot(){const s=$();if(e.player.potions<=0){H("No te quedan pociones","danger");return}if(e.player.hp>=s.maxHp){H("Ya estás con toda la vida","cyan");return}e.player.potions-=1;const j=Math.round(s.maxHp*.42);e.player.hp=P(e.player.hp+j,0,s.maxHp),A("🧪",`Bebes una poción y recuperas ${j} HP.`),H(`+${j} HP`,"success")}function qe(){const s=f();if(e.streak.lastClaimDay===s){H("La recompensa diaria ya fue reclamada hoy","cyan");return}const j=f(Date.now()-864e5);e.streak.days=e.streak.lastClaimDay===j?Math.min(7,e.streak.days+1):1,e.streak.lastClaimDay=s;const G=e.streak.days,ee={gold:180+G*70,xp:60+G*30,potions:G>=3?1:0,keys:G>=5?1:0,shards:G===7?3:1,essence:1+Math.floor(G/2)};Y(ee,`Recompensa diaria (día ${G})`),H(`Recompensa diaria reclamada — racha ${G}`,"gold")}function We(s){const j={strength:["Fuerza",1],agility:["Agilidad",1],endurance:["Resistencia",1],discipline:["Disciplina",1]};if(!j[s])return;if(e.player.attributePoints<=0){H("No tienes puntos de atributo","danger");return}e.player.attributePoints-=1,e.player.training[s]+=1;const G=$();e.player.hp=Math.min(e.player.hp,G.maxHp),A("🏋️",`Aumentas ${j[s][0]}.`)}function vt(s){const j=T[s];if(!(!j||!e.player.unlockedSkills.includes(s))){if(e.player.skillPoints<=0){H("No tienes puntos de habilidad","danger");return}if((e.player.skillLevels[s]||1)>=5){H("Esa habilidad ya está al máximo","cyan");return}e.player.skillLevels[s]+=1,e.player.skillPoints-=1,A("📘",`Mejoras ${j.name} a nivel ${e.player.skillLevels[s]}.`)}}function Be(s){if(!e.player.unlockedSkills.includes(s))return;const j=e.player.activeSkills,G=j.indexOf(s);if(G>=0){if(j.length<=1){H("Debes dejar al menos una habilidad activa","danger");return}j.splice(G,1)}else{if(j.length>=4){H("Máximo de 4 habilidades activas","cyan");return}j.push(s)}}function Ue(s=!0){return ne.refreshMarket(e,s,{toast:H,addJournal:A})}function Jt(s){return ne.buyMarketItem(e,s,{maxInventory:r(),toast:H,addJournal:A,trackQuest:fe,checkAchievements:ke})}function Zt(s){return ne.buyResource(e,s,{toast:H,grantRewards:Y})}function Wt(s,j="normal"){return ne.forgeItem(e,s,j,{maxInventory:r(),toast:H,addJournal:A,trackQuest:fe,checkAchievements:ke})}function Qt(s){return ne.upgradeEquipped(e,s,{toast:H,trackQuest:fe,addJournal:A})}function Kt(s){return ne.rerollItem(e,s,{toast:H,addJournal:A})}function Yt(s){return se.startJob(e,s,{toast:H,addJournal:A})}function bt(s=!1){return se.completeJob(e,s,{grantRewards:Y,toast:H})}function Ut(s,j){return se.startExpedition(e,s,j,{isZoneUnlocked:$e,toast:H,addJournal:A})}function yt(s=!1){return se.completeExpedition(e,s,{grantRewards:Y,getDerivedStats:$,trackQuest:fe,acquireItem:ie,addJournal:A,toast:H})}function ht(s=Date.now(),j=!1){return se.resolveFinishedTimers(e,s,j,{completeJob:bt,completeExpedition:yt})}function Xt(s="normal"){const j=je(),G=j.staminaCost+(s==="elite"?1:0);if(e.player.stamina<G||e.player.energy<j.energyCost){H("No tienes energía o aguante suficiente","danger");return}e.player.stamina-=G,e.player.energy-=j.energyCost;const ee=be(j,s);X(ee,{mode:"arena"})}function ea(s=3){const j=[];for(let G=0;G<s;G++){const ee=je();if(e.player.stamina<ee.staminaCost||e.player.energy<ee.energyCost||e.player.hp<$().maxHp*.2)break;e.player.stamina-=ee.staminaCost,e.player.energy-=ee.energyCost;const W=be(ee,"normal",G);X(W,{mode:"arena"});const pe=e.combatHistory[0];if(j.push(`${pe.result==="victory"?"✅":"❌"} ${pe.title}`),pe.result!=="victory")break}j.length&&(e.ui.modal={type:"summary",title:`Racha de arena x${j.length}`,content:`<div class="glass rounded-2xl p-4 text-sm text-slate-100/90 space-y-2">${j.map(G=>`<div>${G}</div>`).join("")}</div>`})}function ta(){if(e.player.keys<1){H("Necesitas una llave de mazmorra","danger");return}if(e.player.stamina<2){H("Necesitas al menos 2 de aguante","danger");return}e.player.keys-=1,e.player.stamina-=2;const s=e.player.highestDungeonFloor,j=k[Math.min(k.length-1,Math.floor((s-1)/2))],G=[];let ee=!0;if([be(j,"normal",s*.8),be(j,"normal",s*.85),be(j,"elite",s*.9),be(j,"boss",s)].forEach((pe,we)=>{if(!ee)return;X(pe,{mode:"dungeon",floor:s});const Oe=e.combatHistory[0];G.push(`${Oe.result==="victory"?"✅":"❌"} ${we<3?"Encuentro":"Jefe"}: ${pe.name}`),Oe.result!=="victory"&&(ee=!1)}),ee){e.player.highestDungeonFloor+=1;const pe={gold:120+s*55,xp:90+s*42,essence:2+Math.floor(s/3),shards:s%3===0?2:1};Y(pe,`Cofre del piso ${s}`),A("🏰",`Limpias el piso ${s} y avanzas al piso ${s+1}.`),H(`Piso ${s} superado`,"gold")}else A("🕸️",`No logras superar el piso ${s}.`);e.ui.modal={type:"summary",title:`Mazmorra — Piso ${s}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado</div>
              <div class="text-xl font-black ${ee?"text-emerald-300":"text-rose-300"}">${ee?"Incursión limpia":"Incursión fallida"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${ee?"El botín del jefe ha sido asegurado.":"Tu grupo de uno no pudo seguir avanzando."}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ruta</div>
              <div class="space-y-2 text-sm">${G.map(pe=>`<div>${pe}</div>`).join("")}</div>
            </div>
          </div>
        </div>
      `}}function aa(){if(e.player.pet){H("Ya tienes una mascota activa","cyan");return}if(e.player.shards<5||e.player.essence<8){H("Necesitas 5 fragmentos y 8 de esencia","danger");return}e.player.shards-=5,e.player.essence-=8;const s=V(E);e.player.pet=s.id,e.player.petLevel=1,e.player.petXp=0,A("🐾",`Incubas a <b>${s.name}</b>. ${s.desc}`),H(`Mascota obtenida: ${s.name}`,"violet")}function na(){if(!e.player.pet){H("Aún no tienes mascota","danger");return}if(e.player.food<2||e.player.essence<1){H("Necesitas 2 de comida y 1 de esencia","danger");return}e.player.food-=2,e.player.essence-=1,e.player.petXp+=1,e.player.petXp>=3+e.player.petLevel&&(e.player.petXp=0,e.player.petLevel+=1,A("🐾",`Tu mascota alcanza nivel ${e.player.petLevel}.`),H(`Mascota nivel ${e.player.petLevel}`,"success"))}function sa(){if(!e.player.pet)return;const s=m();e.player.pet=null,e.player.petLevel=0,e.player.petXp=0,A("🪽",`Liberas a ${s?s.name:"tu mascota"} y recuperas tu calma.`)}function ia(s){return D.spendRelic(e,s,{toast:H,addJournal:A})}function ra(){return D.ascend(e,{toast:H,confirmAscend:()=>window.confirm("Ascender reinicia nivel, equipo, inventario y recursos comunes, pero te da Polvo de Reliquia. ¿Continuar?"),replaceState:n,normalizeState:p,currentRank:ve,addJournal:A,checkAchievements:ke})}function fe(s,j){return D.trackQuest(e,s,j,ke)}function oa(s){return D.claimQuest(e,s,{grantRewards:Y,addJournal:A,checkAchievements:ke})}function la(){return D.rerollQuests(e,{toast:H,addJournal:A})}function ca(s){return D.achievementProgress(e,s,B)}function ke(){return D.checkAchievements(e,{grantRewards:Y,addJournal:A,toast:H,guildTotal:B})}function da(s){const j=e.player.guild;if(!(s in j))return;const G=j[s]+1,ee=180+G*110+B()*35,W=Math.max(1,Math.floor(G/2));if(e.player.gold<ee||e.player.essence<W){H("No tienes recursos suficientes","danger");return}e.player.gold-=ee,e.player.essence-=W,j[s]+=1,A("🏛️",`Mejoras ${s} del gremio al nivel ${j[s]}.`),ke()}function ua(){return ne.autoManage(e,{toast:H,trackQuest:fe,addJournal:A})}function pa(){const s=$();if(s.maxHp-e.player.hp<=0){H("Ya tienes la vida al máximo","cyan");return}let G=0;for(;e.player.hp<s.maxHp&&e.player.potions>0&&G<10;)e.player.potions-=1,e.player.hp=P(e.player.hp+s.maxHp*.42,0,s.maxHp),G++;A("🩹",`Usas ${G} poción(es) para recuperarte.`)}window.AetherSystems={addJournal:A,toast:H,grantRewards:Y,summarizeReward:re,gainXp:me,currentRank:ve,offlineCatchup:Le,passiveRegen:Re,zoneForPlayer:je,isZoneUnlocked:$e,setZone:Fe,enemyArchetypeMods:De,makeEnemy:be,buildPlayerCombatant:Te,activeBuffValue:Ve,effectiveStat:Ge,skillLevelMult:Je,choosePlayerSkill:Ze,chooseEnemySkill:b,decayStatuses:q,performHit:U,applySkillEffects:ae,actorTurn:le,tickCooldowns:J,runCombat:X,acquireItem:ie,removeInventoryItem:te,getInventoryItem:oe,equipItem:Ce,unequipItem:de,sellItem:ge,salvageItem:Pe,usePotion:ot,claimDaily:qe,trainAttribute:We,upgradeSkill:vt,toggleActiveSkill:Be,refreshMarket:Ue,buyMarketItem:Jt,buyResource:Zt,forgeItem:Wt,upgradeEquipped:Qt,rerollItem:Kt,startJob:Yt,completeJob:bt,startExpedition:Ut,completeExpedition:yt,resolveFinishedTimers:ht,fightArena:Xt,arenaBlitz:ea,runDungeon:ta,hatchPet:aa,feedPet:na,releasePet:sa,spendRelic:ia,ascend:ra,trackQuest:fe,claimQuest:oa,rerollQuests:la,achievementProgress:ca,checkAchievements:ke,upgradeGuild:da,autoManage:ua,autoHeal:pa}})();const Ja={setZone:["hud","content"],fightArena:["hud","content"],arenaBlitz:["hud","content","modal"],runDungeon:["hud","content","modal"],startExpedition:["hud","content"],startJob:["hud","content"],claimQuest:["hud","content"],rerollQuests:["hud","content"],usePotion:["hud","content"],autoHeal:["hud","content"],claimDaily:["hud","content"],buyMarketItem:["hud","content"],buyResource:["hud","content"],equipItem:["hud","content"],unequipItem:["hud","content"],sellItem:["hud","content"],salvageItem:["hud","content"],forgeItem:["hud","content"],upgradeEquipped:["hud","content"],rerollItem:["hud","content"],upgradeGuild:["hud","content"],trainAttribute:["hud","content"],upgradeSkill:["hud","content"],toggleActiveSkill:["hud","content"],hatchPet:["hud","content"],feedPet:["hud","content"],releasePet:["hud","content"],spendRelic:["hud","content"],ascend:["hud","content"],refreshMarket:["hud","content"],autoManage:["hud","content"]};function Za(t,o){const{systems:v,mutate:k,afterAction:d}=o;return Object.entries(Ja).forEach(([E,T])=>{t[E]=(...I)=>{let i;return k(`systems/${E}`,()=>{i=v[E](...I)},{source:"systems"}),d(T),i}}),t}const $t={home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5.25 9.75V21h13.5V9.75"/>',user:'<path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M4.5 20.25a7.5 7.5 0 0 1 15 0"/>',backpack:'<path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M6.75 7.5h10.5A2.25 2.25 0 0 1 19.5 9.75v9A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75v-9A2.25 2.25 0 0 1 6.75 7.5Z"/><path d="M9 12.75h6"/>',swords:'<path d="m4 20 7-7"/><path d="m13 11 7-7"/><path d="M14.5 4.5 19.5 9.5"/><path d="m4.5 14.5 5 5"/><path d="m9 9 6 6"/>',compass:'<circle cx="12" cy="12" r="8.25"/><path d="m14.75 9.25-1.65 4.85-4.85 1.65 1.65-4.85 4.85-1.65Z"/>',castle:'<path d="M5.25 21V9l3 1.5V6l3 1.5L15 6v4.5L18 9v12"/><path d="M3.75 21h16.5"/><path d="M9.75 21v-4.5h4.5V21"/>',cart:'<path d="M3.75 4.5h1.5l1.8 8.1a1.5 1.5 0 0 0 1.47 1.17h7.98a1.5 1.5 0 0 0 1.47-1.17L19.5 7.5H6.3"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17.25" cy="19.5" r="1.5"/>',hammer:'<path d="m14.25 5.25 4.5 4.5"/><path d="m6.75 12.75 7.5-7.5 3 3-7.5 7.5"/><path d="M5.25 14.25 3.75 20.25 9.75 18.75"/>',shield:'<path d="M12 3.75 5.25 6v5.25c0 4.29 2.7 8.11 6.75 9.5 4.05-1.39 6.75-5.21 6.75-9.5V6L12 3.75Z"/>',book:'<path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5v16.5H6.75A2.25 2.25 0 0 0 4.5 21V5.25Z"/><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 1 6.75 16.5h10.5"/>',briefcase:'<path d="M9 6V4.875A1.875 1.875 0 0 1 10.875 3h2.25A1.875 1.875 0 0 1 15 4.875V6"/><rect x="3.75" y="6" width="16.5" height="12.75" rx="2.25"/><path d="M3.75 11.25h16.5"/>',paw:'<circle cx="7" cy="9" r="1.25"/><circle cx="11" cy="6.5" r="1.25"/><circle cx="15" cy="6.5" r="1.25"/><circle cx="17" cy="10" r="1.25"/><path d="M12 18c-2.7 0-4.5-1.44-4.5-3.4 0-1.75 1.2-3.35 3.06-3.35.96 0 1.62.36 1.94.72.32-.36.98-.72 1.94-.72 1.86 0 3.06 1.6 3.06 3.35C16.5 16.56 14.7 18 12 18Z"/>',trophy:'<path d="M8.25 4.5h7.5v2.25A3.75 3.75 0 0 1 12 10.5 3.75 3.75 0 0 1 8.25 6.75V4.5Z"/><path d="M6 4.5h2.25v2.25A3 3 0 0 1 5.25 9.75H4.5A1.5 1.5 0 0 1 3 8.25v-.75A3 3 0 0 1 6 4.5Zm12 0h-2.25v2.25A3 3 0 0 0 18.75 9.75h.75A1.5 1.5 0 0 0 21 8.25v-.75A3 3 0 0 0 18 4.5Z"/><path d="M12 10.5v4.5"/><path d="M9 21h6"/><path d="M10.5 15h3v6h-3Z"/>',scroll:'<path d="M8.25 4.5h8.25A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5H8.25A3.75 3.75 0 0 1 4.5 15.75V8.25A3.75 3.75 0 0 1 8.25 4.5Z"/><path d="M8.25 4.5A2.25 2.25 0 0 0 6 6.75v9A2.25 2.25 0 0 1 3.75 18H6"/><path d="M9.75 9h4.5"/><path d="M9.75 12.75h4.5"/>',menu:'<path d="M4.5 7.5h15"/><path d="M4.5 12h15"/><path d="M4.5 16.5h15"/>',flask:'<path d="M10.5 3.75h3"/><path d="M10.5 3.75v5.1l-4.95 7.74A2.25 2.25 0 0 0 7.44 20.25h9.12a2.25 2.25 0 0 0 1.89-3.66L13.5 8.85v-5.1"/><path d="M8.25 14.25h7.5"/>',bandage:'<path d="m8.25 8.25 7.5 7.5"/><path d="m15.75 8.25-7.5 7.5"/><rect x="4.5" y="7.5" width="15" height="9" rx="2.25" transform="rotate(-45 12 12)"/>',gift:'<path d="M12 21V9"/><path d="M4.5 12h15"/><rect x="4.5" y="7.5" width="15" height="12.75" rx="2.25"/><path d="M12 7.5H8.25A2.25 2.25 0 1 1 10.5 5.25c0 .83-.43 1.56-1.08 1.97"/><path d="M12 7.5h3.75A2.25 2.25 0 1 0 13.5 5.25c0 .83.43 1.56 1.08 1.97"/>',broom:'<path d="M14.25 4.5 19.5 9.75"/><path d="M11.25 7.5 4.5 14.25"/><path d="M4.5 14.25 9.75 19.5"/><path d="m9.75 19.5 2.25-2.25"/>',crown:'<path d="M4.5 18 6.75 7.5 12 12l5.25-4.5L19.5 18Z"/><path d="M4.5 18h15"/>',flame:'<path d="M12 21c3.31 0 6-2.46 6-5.5 0-2.17-1.13-3.7-2.8-5.25-.9-.84-1.62-1.77-2.02-2.9-.38 1.3-1.25 2.45-2.42 3.55-1.75 1.64-4.76 3.45-4.76 6.6C6 18.54 8.69 21 12 21Z"/>',key:'<circle cx="8.25" cy="12" r="3.75"/><path d="M12 12h8.25"/><path d="M16.5 12v2.25"/><path d="M18.75 12v1.5"/>',spark:'<path d="M12 3.75 13.94 9.06 19.25 11 13.94 12.94 12 18.25 10.06 12.94 4.75 11 10.06 9.06 12 3.75Z"/>',bolt:'<path d="M13.5 3.75 7.5 13.5h4.5l-1.5 6.75 6-9.75h-4.5L13.5 3.75Z"/>',dumbbell:'<path d="M4.5 9v6"/><path d="M7.5 7.5v9"/><path d="M16.5 7.5v9"/><path d="M19.5 9v6"/><path d="M7.5 12h9"/>',check:'<circle cx="12" cy="12" r="8.25"/><path d="m8.75 12.25 2.25 2.25 4.25-4.5"/>',xcircle:'<circle cx="12" cy="12" r="8.25"/><path d="m9.75 9.75 4.5 4.5"/><path d="m14.25 9.75-4.5 4.5"/>',skull:'<path d="M12 3.75c-4.14 0-7.5 2.86-7.5 6.75 0 2.63 1.54 4.92 3.82 6.15V19.5h1.93v-1.5h3.5v1.5h1.93v-2.85c2.28-1.23 3.82-3.52 3.82-6.15 0-3.89-3.36-6.75-7.5-6.75Z"/><circle cx="9" cy="11.25" r="1"/><circle cx="15" cy="11.25" r="1"/><path d="M10.5 14.5h3"/>',info:'<circle cx="12" cy="12" r="8.25"/><path d="M12 10.5v5.25"/><path d="M12 7.5h.01"/>',wind:'<path d="M4.5 10.5h8.25a2.25 2.25 0 1 0-2.25-2.25"/><path d="M3.75 15h12a2.25 2.25 0 1 1-2.25 2.25"/><path d="M4.5 7.5h4.5"/>',droplet:'<path d="M12 3.75s5.25 5.79 5.25 9A5.25 5.25 0 1 1 6.75 12.75c0-3.21 5.25-9 5.25-9Z"/>',box:'<path d="m4.5 7.5 7.5-3 7.5 3-7.5 3-7.5-3Z"/><path d="M4.5 7.5v9l7.5 3 7.5-3v-9"/><path d="M12 10.5v9"/>',coins:'<circle cx="9" cy="12" r="3.75"/><path d="M12.75 9.75A3.75 3.75 0 1 1 16.5 16.5"/>',recycle:'<path d="m9 4.5 2.25 2.25L9 9"/><path d="M11.25 6.75H8.1A2.85 2.85 0 0 0 5.25 9.6v.15"/><path d="m15 19.5-2.25-2.25L15 15"/><path d="M12.75 17.25h3.15a2.85 2.85 0 0 0 2.85-2.85v-.15"/><path d="m18 9-3 0"/><path d="M18 9a2.85 2.85 0 0 0-2.85-2.85H15"/>',bag:'<path d="M7.5 9V7.5a4.5 4.5 0 0 1 9 0V9"/><path d="M5.25 9h13.5l-.9 9.45A2.25 2.25 0 0 1 15.61 20.5H8.39a2.25 2.25 0 0 1-2.24-2.05L5.25 9Z"/>',rotate:'<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4.5H15"/>',feather:'<path d="M19.5 4.5c-6 0-10.5 4.5-10.5 10.5v4.5"/><path d="M13.5 10.5 9 15"/><path d="M15.75 8.25 9 15"/>',gem:'<path d="m7.5 4.5-3 4.5 7.5 10.5L19.5 9l-3-4.5Z"/><path d="M9 4.5 12 9l3-4.5"/><path d="M4.5 9h15"/>',pin:'<path d="M9 4.5h6l-1.5 4.5 2.25 2.25v.75H8.25v-.75L10.5 9 9 4.5Z"/><path d="M12 12v7.5"/>'},Wa={"⚔️":"swords","⚔":"swords","👑":"crown","🔥":"flame","🌪️":"spark","🧭":"compass","🎒":"backpack","🏋️":"dumbbell","🧪":"flask","🩹":"bandage","🎁":"gift","🧹":"broom","🛒":"cart","⚒️":"hammer","⚒":"hammer","🗝️":"key","🗝":"key","✨":"spark","🐾":"paw","📋":"scroll","📚":"book","💼":"briefcase","🏆":"trophy","📜":"scroll","🛡️":"shield","🛡":"shield","👤":"user","◈":"home","☰":"menu","⚡":"bolt","💪":"dumbbell","✅":"check","❌":"xcircle","☠️":"skull","💨":"wind","🩸":"droplet","🌟":"spark","💀":"skull","📦":"box","💰":"coins","♻️":"recycle","♻":"recycle","📘":"book","🛍️":"bag","🛍":"bag","🔨":"hammer","🌀":"rotate","🧰":"briefcase","🏰":"castle","🪽":"feather","🪶":"feather","🗿":"gem","🔱":"spark","📌":"pin","🏛️":"castle","🏛":"castle","🏟️":"castle","🏟":"castle","🍖":"box"};function He(t,o="h-5 w-5"){const v=$t[t]||$t.spark;return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="${o}" aria-hidden="true">${v}</svg>`}function Qa(t,o,v={}){const{iconClass:k="h-4 w-4",wrapClass:d="inline-flex items-center gap-2",textClass:E=""}=v;return`<span class="${d}">${He(t,k)}<span class="${E}">${o}</span></span>`}function Ee(t=""){let o=String(t);return Object.entries(Wa).forEach(([v,k])=>{o=o.split(v).join(He(k,"h-4 w-4 inline-block align-[-0.2em]"))}),o}function ct(t=""){return String(t).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function St(t=""){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function it(t=""){const o=ct(t);return o?`data-tooltip="${St(o)}"`:""}function dt(t=""){const o=it(t);return o?`<span tabindex="0" role="button" aria-label="Más información" class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-200/80 cursor-help focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/65 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" ${o}>${He("info","h-3.5 w-3.5")}</span>`:""}const{SLOT_ORDER:Ka,SLOT_NAMES:Ya,VIEWS:fs,VIEW_META:ze,VIEW_GROUPS:Mt,MOBILE_PRIMARY_VIEWS:Ua,MOBILE_OVERFLOW_VIEWS:vs,ZONES:Xa,JOBS:en,PETS:tn,SKILLS:an,ACHIEVEMENTS:nn}=window.AetherConfig,{fmt:sn,pct:rn,htmlStat:on,progressBar:ln,timeLeft:cn,rarityName:dn,rarityBadge:un,translateFilter:pn,statLabel:mn,statTooltip:gn}=window.AetherUtils,{state:at,maxInventory:fn,getPetData:vn,getDerivedStats:bn,scaleItemStats:yn,xpNeeded:bs,guildTotal:hn,getStoreMeta:xn}=window.AetherModel,{currentRank:$n,zoneForPlayer:kn,isZoneUnlocked:wn,summarizeReward:Sn,achievementProgress:Mn}=window.AetherSystems;function Et(){return ze[at.currentView]||ze.resumen}function En(t,o=""){return`<span class="status-chip ${o}">${Ee(t)}</span>`}function An(t,o,v="",k=""){return`
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div class="section-eyebrow">${t}</div>
          <div class="mt-1 flex items-center gap-2"><div class="section-title font-display leading-tight">${o}</div>${dt(v||o)}</div>
          ${v?`<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/76">${Ee(v)}</p>`:""}
        </div>
        ${k?`<div class="shrink-0">${Ee(k)}</div>`:""}
      </div>
    `}function jn(t,o,v="",k=""){return`
      <div class="surface-strong rounded-2xl p-4 ${v}" ${it(k||o)}>
        <div class="mb-2 flex items-center gap-2 font-bold font-display text-white leading-tight">${Ee(t)}${dt(k||o)}</div>
        <p class="text-sm text-slate-300/78 leading-relaxed">${Ee(o)}</p>
      </div>
    `}function Cn(t,o,v,k=""){const d=St(ct(t));return`<button type="button" class="btn ${o}" onclick="${v}" aria-label="${d}" ${it(k||ct(t))}>${Ee(t)}</button>`}function Pn(t){return`
      <div class="mobile-cta-bar md:hidden">
        <div class="glass-strong rounded-[1.6rem] p-3 grid grid-cols-2 gap-2 shadow-rail" role="group" aria-label="Acciones rápidas móviles">
          ${t.join("")}
        </div>
      </div>
    `}function In(t,o="",v=""){const k=ze[t]||Et(),d=Mt.find(T=>T.views.includes(t)),E=d?d.views:[t];return`
      <div class="glass rounded-3xl p-5 sm:p-6">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/[.08] ring text-cyan-200">${He(k.icon,"h-4 w-4")}</span>
              ${d?d.title:"Vista individual"}
            </div>
            <div class="flex items-center gap-2"><h2 class="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">${k.label}</h2>${dt(k.desc)}</div>
            <p class="text-sm sm:text-base text-slate-300/78 mt-2 max-w-3xl">${Ee(k.desc)}</p>
            ${v?`<div class="hero-actions mt-4 max-w-2xl">${v}</div>`:""}
          </div>
          ${o?`<div class="glass rounded-2xl px-4 py-3 text-sm text-slate-200/90 shrink-0 border border-cyan-300/14">${Ee(o)}</div>`:""}
        </div>
        ${E.length>1?`
          <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-3">Navegación relacionada</div>
            <div class="view-links">
              ${E.map(T=>`
                <button type="button" class="view-chip ${at.currentView===T?"active":""}" onclick="game.setView('${T}')" ${at.currentView===T?'aria-current="page"':""}>
                  ${He(ze[T].icon,"h-4 w-4")}
                  <span>${ze[T].label}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}const At={SLOT_ORDER:Ka,SLOT_NAMES:Ya,VIEW_META:ze,VIEW_GROUPS:Mt,MOBILE_PRIMARY_VIEWS:Ua,ZONES:Xa,JOBS:en,PETS:tn,SKILLS:an,ACHIEVEMENTS:nn,fmt:sn,pct:rn,htmlStat:on,progressBar:ln,timeLeft:cn,rarityName:dn,rarityBadge:un,translateFilter:pn,statLabel:mn,statTooltip:gn,state:at,maxInventory:fn,getPetData:vn,getDerivedStats:bn,scaleItemStats:yn,guildTotal:hn,getStoreMeta:xn,currentRank:$n,zoneForPlayer:kn,isZoneUnlocked:wn,summarizeReward:Sn,achievementProgress:Mn,icon:He,withIcon:Qa,replaceEmojiIcons:Ee,tooltipAttr:it,activeMeta:Et,statusChip:En,sectionHeader:An,infoCard:jn,actionButton:Cn,actionBar:Pn,pageLead:In},{VIEW_GROUPS:jt,MOBILE_PRIMARY_VIEWS:Ct,VIEW_META:tt,state:ce,fmt:he,htmlStat:et,getDerivedStats:Ln,currentRank:Rn,activeMeta:Dn,getStoreMeta:Tn,maxInventory:Vn,icon:nt,withIcon:Ne,tooltipAttr:Ie}=At;function qn(){const t=Ln(),o=Rn(),v=Dn(),k=Tn(),d=k.isSaving?"Guardando...":k.isDirty?"Cambios pendientes":k.lastSaveAt?`Guardado ${new Date(k.lastSaveAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Sin guardado",E=k.isSaving?"warning":k.isDirty?"danger":"success",T=t.maxHp?ce.player.hp/t.maxHp:1,I=T<=.35?{text:"Vida crítica",tone:"danger"}:T<=.65?{text:"Vida media",tone:"warning"}:{text:"Vida estable",tone:"success"},i=t.maxHp?Math.max(0,Math.min(100,ce.player.hp/t.maxHp*100)):0,C=t.maxEnergy?Math.max(0,Math.min(100,ce.player.energy/t.maxEnergy*100)):0,_=t.maxStamina?Math.max(0,Math.min(100,ce.player.stamina/t.maxStamina*100)):0;return`
    <div class="glass-strong rounded-[2rem] p-4 sm:p-6">
      <div class="grid xl:grid-cols-[minmax(0,1.35fr),minmax(310px,.65fr)] gap-5 sm:gap-6">
        <section class="space-y-4 min-w-0">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
                <span class="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.65)]"></span>
                Aether Arena · ${v.label}
              </div>
              <h1 class="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.05]">${ce.player.name}</h1>
              <p class="text-slate-300/82 mt-2 text-sm sm:text-base">${ce.player.title} · <b>${o.title}</b></p>
              <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span class="status-chip ${E}">${d}</span>
                <span class="status-chip">Nivel ${ce.player.level}</span>
                <span class="status-chip">Zona ${v.label}</span>
                <span class="status-chip ${I.tone}" data-hud-survivability>${I.text}</span>
              </div>
            </div>
            <div class="stat-pill rounded-2xl px-3.5 py-3 shrink-0 min-w-[168px]">
              <div class="text-xs text-slate-300/65 uppercase tracking-[.14em]">Recursos listos</div>
              <div class="text-base font-black text-emerald-300 leading-tight mt-1" data-hud-resources>${he(ce.player.energy)}⚡ · ${he(ce.player.stamina)}💪</div>
              <div class="text-[11px] text-slate-300/68 mt-1">Para combatir, forjar y explorar</div>
            </div>
          </div>

          <div class="space-y-3">
            <div data-tooltip="Salud actual sobre tu vida máxima.">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Vida</span>
                <span class="font-semibold text-slate-100" data-hud-current="hp">${he(ce.player.hp)} / ${he(t.maxHp)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-300 shadow-[0_0_16px_rgba(244,63,94,.3)]" data-hud-bar="hp" style="width:${i}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
            <div data-tooltip="Recurso principal para varias acciones activas.">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Energía</span>
                <span class="font-semibold text-slate-100" data-hud-current="energy">${he(ce.player.energy)} / ${he(t.maxEnergy)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_16px_rgba(34,211,238,.3)]" data-hud-bar="energy" style="width:${C}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
            <div data-tooltip="Marca cuántas actividades físicas puedes sostener.">
              <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
                <span class="font-medium tracking-[0.01em]">Aguante</span>
                <span class="font-semibold text-slate-100" data-hud-current="stamina">${he(ce.player.stamina)} / ${he(t.maxStamina)}</span>
              </div>
              <div class="bar">
                <span class="relative flex h-full rounded-full bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_16px_rgba(74,222,128,.28)]" data-hud-bar="stamina" style="width:${_}%">
                  <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <aside class="space-y-3">
          <div class="kpi-rail">
            ${et("Oro",`<span data-hud-stat="gold">${he(ce.player.gold)}</span>`,"","Moneda principal para comprar, forjar y mejorar.")}
            ${et("Pociones",`<span data-hud-stat="potions">${he(ce.player.potions)}</span>`,"","Curación rápida para sostener el ciclo activo.")}
            ${et("Ataque",`<span data-hud-stat="attack">${he(t.attack)}</span>`,"","Daño base de tus golpes y habilidades ofensivas.")}
            ${et("Mochila",`<span data-hud-stat="inventory">${ce.player.inventory.length}/${Vn()}</span>`,"","Capacidad usada frente al máximo disponible.")}
          </div>

          <div class="glass rounded-2xl p-4">
            <div class="text-[11px] uppercase tracking-[.2em] text-cyan-200/62 mb-2">Acciones inmediatas</div>
            <div class="grid grid-cols-2 gap-2">
              <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${Ie("Consume una poción para recuperar salud y sostener el ritmo de juego.")}>${Ne("flask","Poción")}</button>
              <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${Ie("Limpia inventario vendiendo y reciclando excedentes.")}>${Ne("broom","Limpiar")}</button>
              <button class="btn !py-2.5" onclick="game.setView('arena')" ${Ie("Abre la arena para continuar progreso activo.")}>${Ne("swords","Arena")}</button>
              <button class="btn !py-2.5" onclick="game.setView('inventario')" ${Ie("Abre inventario para comparar y equipar mejoras.")}>${Ne("backpack","Inventario")}</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `}function Pt(t,o=!1){const v=tt[t],k=ce.currentView===t,d=k?'aria-current="page"':"";return o?`
      <button type="button" class="mobile-nav-btn ${k?"active":""}" onclick="game.setView('${t}')" aria-label="Ir a ${v.label}" ${d} ${Ie(v.desc)}>
        <span class="nav-icon">${nt(v.icon)}</span>
        <span class="nav-label">${v.label}</span>
      </button>
    `:`
    <button type="button" class="nav-link ${k?"active":""}" onclick="game.setView('${t}')" ${d} ${Ie(v.desc)}>
      <span class="nav-icon">${nt(v.icon)}</span>
      <span class="min-w-0">
        <span class="block font-bold leading-tight">${v.label}</span>
        <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${v.short}</span>
      </span>
    </button>
  `}function Bn(){return`
    <div class="glass rounded-3xl p-4 lg:p-5 sticky top-4 space-y-5">
      <div>
        <div class="text-xs uppercase tracking-[.2em] text-slate-300/55 mb-1">Navegación</div>
        <div class="text-2xl font-display font-extrabold">Vistas</div>
        <p class="text-sm text-slate-300/74 mt-2">Cada pantalla mantiene una acción principal y módulos de apoyo.</p>
      </div>

      <div class="space-y-4">
        ${jt.map(t=>`
          <div>
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45 mb-2">${t.title}</div>
            <div class="grid gap-2">
              ${t.views.map(o=>Pt(o)).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <div class="space-y-2">
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45">Acciones rápidas</div>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${Ie("Consume una poción para recuperar salud y seguir combatiendo.")}>${Ne("flask","Poción")}</button>
          <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${Ie("Vende o recicla excedentes para despejar la mochila.")}>${Ne("broom","Limpiar")}</button>
        </div>
      </div>
    </div>
  `}function On(){return`
    <nav class="mobile-nav glass-strong md:hidden" style="--mobile-nav-h: 6.25rem;">
      <div class="mobile-nav-grid">
        ${Ct.map(t=>Pt(t,!0)).join("")}
        <button type="button" class="mobile-nav-btn ${ce.ui.moreMenuOpen?"active":""}" onclick="game.toggleMoreMenu()" aria-label="Abrir más vistas">
          <span class="nav-icon">${nt("menu")}</span>
          <span class="nav-label">Más</span>
        </button>
      </div>
    </nav>
  `}function Nn(){return ce.ui.moreMenuOpen?`
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
          ${jt.map(t=>`
            <section class="mobile-sheet-group">
              <div class="mobile-sheet-title">${t.title}</div>
              <div class="grid grid-cols-1 gap-2">
                ${t.views.filter(o=>!Ct.includes(o)).map(o=>`
                  <button type="button" class="nav-link ${ce.currentView===o?"active":""}" onclick="game.setView('${o}')" ${ce.currentView===o?'aria-current="page"':""}>
                    <span class="nav-icon">${nt(tt[o].icon)}</span>
                    <span class="min-w-0">
                      <span class="block font-bold leading-tight">${tt[o].label}</span>
                      <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${tt[o].short}</span>
                    </span>
                  </button>
                `).join("")||'<div class="text-sm text-slate-300/55 px-2 py-1">Ya visible en la barra inferior.</div>'}
              </div>
            </section>
          `).join("")}
        </div>
      </div>
    </div>
  `:""}const zn={renderHud:qn,renderDesktopNav:Bn,renderMobileNav:On,renderMobileSheet:Nn};function Hn(t){const{SLOT_ORDER:o,ZONES:v,SKILLS:k,state:d,maxInventory:E,getPetData:T,getDerivedStats:I,currentRank:i,zoneForPlayer:C,summarizeReward:_,fmt:N,pct:V,htmlStat:P,timeLeft:Z,icon:g,translateFilter:a,tooltipAttr:y,statusChip:M,sectionHeader:f,infoCard:x,actionButton:w,actionBar:L,pageLead:e,questCard:n,equippedSlotCard:l,inventoryCards:p,zoneSelector:h}=t;function c(){return d.timers.expedition?Z(d.timers.expedition.endAt):"0s"}function u(){return d.timers.job?Z(d.timers.job.endAt):"0s"}function S(){const B=C(),m=d.quests.find(Q=>!Q.claimed)||d.quests[0],$=d.quests.filter(Q=>!Q.claimed).length,R=d.player.inventory.length/Math.max(1,E()),F=R>=.9?M("Mochila al límite","danger"):R>=.7?M("Mochila alta","warning"):M("Mochila estable","success");return`
      <div class="space-y-5">
        ${e("resumen",`Zona activa: <b>${B.name}</b> · Contratos pendientes: <b>${$}</b>`,[w("⚔️ Continuar en arena","btn-primary","game.setView('arena')","Entra directo a combate para progreso activo, oro y botín."),w("🎒 Ordenar inventario","","game.setView('inventario')","Optimiza mochila y equipo antes de seguir peleando."),w("🧭 Lanzar expedición","btn-violet","game.setView('expedicion')","Activa progreso pasivo cuando no quieras jugar en modo activo.")].join(""))}

        ${L([w("⚔️ Arena","btn-primary !py-3","game.setView('arena')"),w("🎒 Inventario","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.15fr,.85fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${f("Ruta recomendada","Elige una sola acción y sigue","La vista resumen prioriza la siguiente decisión y deja el resto como contexto.")}
            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('arena')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Pelear ahora</div>
                  ${M("Principal","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Usa Arena para mantener ritmo de progreso y conseguir botín inmediato.</p>
              </button>

              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('inventario')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Ajustar build</div>
                  ${F}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Abre Inventario si tienes mejoras pendientes o la mochila está cargada.</p>
              </button>

              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('expedicion')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Progreso pasivo</div>
                  ${M(d.timers.expedition?"Activo":"Disponible",d.timers.expedition?"success":"")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Expedición y Trabajo sostienen recursos cuando dejas la sesión en segundo plano.</p>
              </button>
            </div>

            <div class="mt-5 grid sm:grid-cols-2 gap-3">
              ${x("Expedición",d.timers.expedition?`${v[d.timers.expedition.zoneId].name} · <span data-live-timer="expedition">${c()}</span>`:"No hay expedición activa.","surface-subtle")}
              ${x("Trabajo",d.timers.job?`${d.timers.job.name} · <span data-live-timer="job">${u()}</span>`:"No hay trabajo activo.","surface-subtle")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${f("Objetivo en foco","Un contrato visible")}
              ${m?n(m):'<div class="empty-state">No hay contratos disponibles.</div>'}
              <div class="mt-4 grid grid-cols-2 gap-2">
                <button type="button" class="btn" onclick="game.setView('diario')">Diario</button>
                <button type="button" class="btn" onclick="game.setView('logros')">Logros</button>
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${f("Estado rápido","Solo señales de decisión")}
              <div class="grid grid-cols-2 gap-3">
                ${P("Mochila",`${d.player.inventory.length}/${E()}`,"","Capacidad usada frente al máximo disponible.")}
                ${P("Llaves",d.player.keys)}
                ${P("Pociones",d.player.potions)}
                ${P("Racha",`${d.streak.days||0}/7`)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function O(){const B=I(),m=i(),$=T(),R=B.maxHp?Math.round(d.player.hp/B.maxHp*100):100;return`
      <div class="space-y-5">
        ${e("perfil",`Rango activo: <b>${m.title}</b> · Salud: <b>${R}%</b>`,[w("🎒 Ver equipo","btn-primary","game.setView('inventario')"),w("🏋️ Entrenar","","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${f("Identidad y rendimiento","Quién eres y cómo rindes","Esta pantalla separa tu perfil, estado de combate y progreso meta.")}

            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Gladiador</div>
                <div class="text-3xl font-black mt-1 leading-tight">${d.player.name}</div>
                <div class="text-sm text-cyan-200/85 mt-1">${d.player.title}</div>
              </div>
              <div class="grid grid-cols-2 gap-3 sm:min-w-[250px]">
                ${P("Ascensiones",d.player.ascension,"","Cantidad de reinicios meta completados para progresión permanente.")}
                ${P("Piso más alto",d.player.highestDungeonFloor,"","Mayor piso de mazmorra superado hasta ahora.")}
                ${P("Inventario",`${d.player.inventory.length}/${E()}`,"","Capacidad actual de la mochila frente a su límite máximo.")}
                ${P("Polvo",d.player.relicDust,"","Moneda meta usada en reliquias y mejoras permanentes.")}
              </div>
            </div>

            <div class="mt-5 space-y-3">
              <div>
                <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-2">Stats críticas</div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  ${P("Ataque",N(B.attack))}
                  ${P("Defensa",N(B.defense))}
                  ${P("Velocidad",N(B.speed))}
                  ${P("Vida máxima",N(B.maxHp),"","Total de salud disponible antes de caer derrotado.")}
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
                  ${P("Golpe crítico",V(B.crit),"","Probabilidad de infligir daño aumentado en combate.")}
                  ${P("Esquiva",V(B.dodge))}
                  ${P("Bloqueo",V(B.block))}
                  ${P("Robo de vida",V(B.lifesteal),"","Porcentaje del daño que regresa como curación.")}
                </div>
              </details>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${f("Equipo equipado","Lectura rápida de build")}
              <div class="space-y-2">${o.slice(0,4).map(l).join("")}</div>
              <button type="button" class="btn mt-4 w-full" onclick="game.setView('inventario')">Abrir inventario completo</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${f("Apoyos","Mascota y utilidades de sesión")}
              <div class="grid gap-3">
                ${$?x(`${g($.icon||"paw","h-4 w-4 inline-block mr-2 align-[-0.15em]")}${$.name}`,`Nivel ${d.player.petLevel} · XP ${d.player.petXp}/${3+d.player.petLevel}<br>${$.desc}`,"surface-subtle"):x("Sin mascota activa","Incuba una en la vista de Mascota.","surface-subtle")}
              </div>
              <div class="grid grid-cols-2 gap-2 mt-4">
                <button type="button" class="btn btn-success" onclick="game.usePotion()" ${y("Consume una poción para recuperar salud fuera de combate.")}>🧪 Poción</button>
                <button type="button" class="btn btn-primary" onclick="game.autoHeal()" ${y("Aplica una curación automática si tienes recursos disponibles.")}>🩹 Curar</button>
                <button type="button" class="btn btn-gold" onclick="game.claimDaily()" ${y("Reclama tu recompensa diaria cuando esté lista.")}>🎁 Diario</button>
                <button type="button" class="btn" onclick="game.setView('mascota')" ${y("Abre la gestión de tu mascota activa y sus bonificaciones.")}>🐾 Mascota</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function z(){const B=["weapon","chest","ring","amulet"].map(l).join(""),m=d.ui.inventoryFilter,$=d.player.inventory.length,R=d.player.inventory.filter(Q=>{const K=d.player.equipment[Q.slot];return!K||(Q.score||0)>(K.score||0)}).length,F=d.player.inventory.filter(Q=>Q.rarity==="legendary"||Q.rarity==="mythic").length;return`
      <div class="space-y-5">
        ${e("inventario",`Capacidad: <b>${d.player.inventory.length}/${E()}</b> · Mejoras potenciales: <b>${R}</b>`,[w("🧹 Gestión automática","btn-primary","game.autoManage()","Vende y recicla excedentes de forma automática."),w("⚒️ Forja","","game.setView('forja')"),w("🛒 Mercado","btn-violet","game.setView('mercado')")].join(""))}

        ${L([w("🧹 Limpiar","btn-primary !py-3","game.autoManage()"),w("⚒️ Forja","!py-3","game.setView('forja')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${f("Mochila","Filtra, compara y actúa","El inventario prioriza lectura rápida de mejoras y acciones de alto impacto.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${P("Objetos",$,"Total en mochila")}
              ${P("Mejoras",R,"Comparadas contra equipado")}
              ${P("Raros+",F,"Legendarios y míticos")}
            </div>

            <div class="space-y-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Filtro por tipo</div>
                <div class="filters-row mt-2">
                  ${["all",...o].map(Q=>`
                    <button type="button" class="btn filter-pill ${m===Q?"active tab-btn":""}" onclick="game.setInventoryFilter('${Q}')" ${y(`Filtrar inventario por ${a(Q).toLowerCase()}.`)}>${a(Q)}</button>
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
                  ${["common","uncommon","rare","epic","legendary","mythic"].map(Q=>`
                    <button type="button" class="btn filter-pill ${m===Q?"active tab-btn":""}" onclick="game.setInventoryFilter('${Q}')" ${y(`Filtrar inventario por ${a(Q).toLowerCase()}.`)}>${a(Q)}</button>
                  `).join("")}
                </div>
              </details>
            </div>

            ${p()}
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
              <div class="mt-4 space-y-2">${B}</div>
            </details>

            <div class="glass rounded-3xl p-5">
              ${f("Reglas rápidas","Qué vender o guardar")}
              <div class="grid gap-3">
                ${x("Prioridad","Equipa mejoras claras primero, luego limpia duplicados de bajo puntaje.","surface-subtle")}
                ${x("Si dudas","Si no mejora build ni economía, recicla o vende para liberar capacidad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function r(){const B=C(),m=d.player.activeSkills.map(K=>k[K]).filter(Boolean),$=d.combatHistory.slice(0,2),R=I(),Q=(R.maxHp?d.player.hp/R.maxHp:1)<.5?"normal":m.length>=2?"elite":"normal";return`
      <div class="space-y-5">
        ${e("arena",`Zona: <b>${B.name}</b> · Coste <b>${B.energyCost}⚡ / ${B.staminaCost}💪</b>`,[w("⚔️ Normal","btn-primary","game.fightArena('normal')"),w("👑 Élite","btn-violet","game.fightArena('elite')"),w("🔥 x3","btn-gold","game.arenaBlitz(3)")].join(""))}

        ${L([w("⚔️ Normal","btn-primary !py-3","game.fightArena('normal')"),w("👑 Élite","btn-violet !py-3","game.fightArena('elite')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${f("Combate","Decide modo y entra","La arena muestra la decisión principal primero. Zona, build e historial quedan como soporte.")}

            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left" onclick="game.fightArena('normal')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Normal</div>
                  ${M(Q==="normal"?"Recomendado":"Estable","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Flujo seguro para mantener ritmo cuando estás ajustando build.</p>
              </button>

              <button type="button" class="surface-strong elite-card rounded-2xl p-4 text-left" onclick="game.fightArena('elite')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Élite</div>
                  ${M(Q==="elite"?"Recomendado":"Riesgo","warning")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Más exigente, mejor retorno cuando ya tienes vida y habilidades estables.</p>
              </button>

              <button type="button" class="surface-strong reward-card rounded-2xl p-4 text-left" onclick="game.arenaBlitz(3)">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Racha x3</div>
                  ${M("Acelerar")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Multiplica combates para subir ritmo cuando dominas la zona actual.</p>
              </button>
            </div>

            <div class="grid sm:grid-cols-3 gap-3 mt-4">
              ${P("Zona activa",B.name,B.theme)}
              ${P("Coste",`${B.energyCost}⚡ / ${B.staminaCost}💪`,"Por combate")}
              ${P("Registro",`${d.stats.wins}V / ${d.stats.losses}D`,"Historial global")}
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
              <div class="mt-4">${h()}</div>
            </details>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${f("Preparación","Build activa para la zona")}
              <div class="grid gap-3">
                ${x("Habilidades activas",m.length?m.map(K=>`${K.name} · Nv ${d.player.skillLevels[K.id]||1}`).join("<br>"):"No hay habilidades activas equipadas.","surface-subtle")}
                ${x("Contexto",`Victorias ${d.stats.wins} · Derrotas ${d.stats.losses} · Bajas ${d.stats.kills}`,"surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${f("Historial","Últimos resultados")}
              <div class="space-y-3">
                ${$.length?$.map(K=>`
                    <button type="button" class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${K.id}')">
                      <div class="font-black ${K.result==="victory"?"text-emerald-300":"text-rose-300"}">${K.title}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${K.zone}</div>
                      <div class="text-xs text-slate-300/58 mt-2">${_(K.rewards)}</div>
                    </button>
                  `).join(""):'<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}return{renderResumen:S,renderPerfil:O,renderInventario:z,renderArena:r}}function _n(t){const{SLOT_ORDER:o,SLOT_NAMES:v,ZONES:k,JOBS:d,PETS:E,SKILLS:T,ACHIEVEMENTS:I,state:i,getPetData:C,guildTotal:_,achievementProgress:N,fmt:V,htmlStat:P,progressBar:Z,icon:g,tooltipAttr:a,replaceEmojiIcons:y,rarityName:M,rarityBadge:f,zoneSelector:x,compareAgainstEquipped:w,itemStatGrid:L,durationChoiceCard:e,pager:n,expeditionTimerText:l,jobTimerText:p,pageLead:h,sectionHeader:c,infoCard:u,actionButton:S,actionBar:O,statusChip:z}=t;function r(){const D=!!i.timers.expedition;return`
      <div class="space-y-5">
        ${h("expedicion",D?`En curso: <b>${k[i.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${l()}</span>`:"Sin expedición activa",[S("30s","btn-primary",`game.startExpedition(${i.player.zoneId}, 30)`),S("60s","",`game.startExpedition(${i.player.zoneId}, 60)`),S("120s","btn-gold",`game.startExpedition(${i.player.zoneId}, 120)`)].join(""))}

        ${O([S("30s","btn-primary !py-3",`game.startExpedition(${i.player.zoneId}, 30)`),S("120s","btn-gold !py-3",`game.startExpedition(${i.player.zoneId}, 120)`)])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Elige destino","Primero define una zona segura para tu estado actual de recursos.")}
            ${x()}

            <div class="mt-5">
              ${c("Decisión","Elige duración","Duraciones cortas para control activo, largas para progreso pasivo.")}
              <div class="grid lg:grid-cols-3 gap-3">
                ${e(30,"success","Salida corta para mantener flujo y reaccionar rápido.")}
                ${e(60,"","Balance para sesiones mixtas entre combate y gestión.")}
                ${e(120,"warning","Más retorno si vas a dejar la partida corriendo.")}
              </div>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Regla rápida")}
              <div class="grid gap-3">
                ${u("Estado actual",D?"Ya tienes una expedición activa: espera el temporizador o cambia de foco.":"No hay expedición activa: puedes lanzar una ruta ahora.","surface-subtle")}
                ${u("Destino","Usa zonas cómodas cuando solo quieres materiales estables.","surface-subtle")}
                ${u("Después","Cuando termine, vuelve a Arena o Inventario para cerrar el ciclo.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function B(){const D=i.player.keys>0;return`
      <div class="space-y-5">
        ${h("mazmorra",`Llaves: <b>${i.player.keys}</b> · Piso más alto: <b>${i.player.highestDungeonFloor}</b>`,[S("🗝️ Entrar","btn-gold","game.runDungeon()","Consume una llave y empieza una incursión de mazmorra."),S("🎒 Revisar equipo","","game.setView('inventario')")].join(""))}

        ${O([S("🗝️ Entrar","btn-gold !py-3","game.runDungeon()"),S("🎒 Equipo","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Ruta de incursión","La mazmorra tiene un recorrido fijo por intento: entra solo cuando estés listo.")}
            <div class="grid gap-2 text-sm">
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>1. Enemigo base</span>${z("Entrada")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>2. Enemigo base</span>${z("Presión")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>3. Enemigo élite</span>${z("Riesgo","warning")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>4. Jefe del piso</span>${z("Pico","danger")}</div>
            </div>

            <div class="mt-4 grid sm:grid-cols-3 gap-3">
              ${P("Llaves",i.player.keys,D?"Listo para entrar":"Necesitas conseguir llaves")}
              ${P("Piso récord",i.player.highestDungeonFloor,"Tu tope actual")}
              ${P("Estado",D?"Disponible":"Bloqueado",D?"Tienes acceso inmediato":"Visita mercado o recompensas")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Decisión","¿Entrar ahora?")}
              <div class="grid gap-3">
                ${u("Recompensa","Oro, XP, esencia, fragmentos, llaves extra y botín de mayor calidad.","reward-card","Las mazmorras elevan el techo de recompensa frente al farmeo básico.")}
                ${u("Checklist","Entra cuando tengas llaves, pociones y una build ya ordenada.","surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Siguiente paso")}
              <div class="grid gap-2">
                <button type="button" class="btn" onclick="game.setView('inventario')">Ajustar equipo</button>
                <button type="button" class="btn" onclick="game.setView('arena')">Subir recursos en Arena</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function m(){const D=[...i.market.items].sort((Y,re)=>(re.score||0)-(Y.score||0))[0],A=i.market.items.filter(Y=>(Y.price||0)<=i.player.gold).length,H=i.market.items.filter(Y=>w(Y).tone==="success").length;return`
      <div class="space-y-5">
        ${h("mercado",`Oro disponible: <b>${V(i.player.gold)}</b>`,[S("🔄 Refrescar","btn-primary","game.refreshMarket()","Renueva la rotación del mercado con nuevas ofertas."),S("🎒 Comparar con mochila","","game.setView('inventario')","Abre el inventario para comparar las ofertas con tu equipo actual.")].join(""))}

        ${O([S("🔄 Refrescar","btn-primary !py-3","game.refreshMarket()"),S("🎒 Mochila","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Rotación actual","Compra solo mejoras reales: evita gastar oro en cambios de impacto bajo.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${P("Comprables",A,"Con tu oro actual")}
              ${P("Mejoras",H,"Frente al equipo equipado")}
              ${P("Oferta top",D?v[D.slot]:"—",D?D.name:"Sin oferta destacada")}
            </div>

            ${D?`
              <div class="surface-strong reward-card rounded-2xl p-4 mb-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Oferta destacada</div>
                    <div class="mt-1 flex flex-wrap items-center gap-2">
                      <div class="font-black rarity-${D.rarity} text-lg leading-snug">${D.name}</div>
                      ${f(D.rarity)}
                    </div>
                    <p class="text-sm text-slate-300/74 mt-2">${w(D).detail}</p>
                  </div>
                  <div class="shrink-0 text-right">
                    <div class="text-sm font-bold text-amber-200">${V(D.price)} oro</div>
                    <div class="mt-2">${z(w(D).label,w(D).tone)}</div>
                  </div>
                </div>
              </div>
            `:""}

            <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              ${i.market.items.map(Y=>{const re=w(Y),me=(Y.price||0)<=i.player.gold;return`
                  <div class="glass rounded-2xl p-4 market-card ${me?"":"opacity-80"}" ${a(`Oferta de rareza ${M(Y.rarity)}. Precio ${V(Y.price)} de oro. ${re.detail}`)}>
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${Y.rarity} leading-snug">${Y.name}</div>${f(Y.rarity)}</div>
                        <div class="text-xs text-slate-300/60 mt-1">${v[Y.slot]} · Nivel ${Y.level}</div>
                      </div>
                      ${z(re.label,re.tone)}
                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      ${L(Y,4)}
                    </div>

                    <div class="market-meta mt-3">
                      <span class="text-sm text-slate-300/72">${re.detail}</span>
                      <span class="text-sm font-bold ${me?"text-amber-200":"text-rose-200"}">${V(Y.price)} oro</span>
                    </div>

                    <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.buyMarketItem('${Y.id}')" ${me?"":"disabled"}>Comprar</button>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Decisión","Qué mirar antes de comprar")}
              <div class="grid gap-3">
                ${u("Oferta destacada",D?`${D.name} lidera la rotación actual.`:"No hay oferta destacada ahora mismo.","reward-card")}
                ${u("No fuerces compra","Si nada mejora de verdad, conserva oro para una mejor rotación o para forja.","surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Consumibles útiles")}
              <div class="grid gap-2">
                <button type="button" class="btn btn-success" onclick="game.buyResource('potion')" ${a("Compra una poción para curarte más tarde por 120 de oro.")}>🧪 Poción · 120 oro</button>
                <button type="button" class="btn btn-violet" onclick="game.buyResource('key')" ${a("Compra una llave para acceder a mazmorras por 180 de oro.")}>🗝️ Llave · 180 oro</button>
                <button type="button" class="btn btn-primary" onclick="game.buyResource('essence')" ${a("Compra esencia para forja y progresión premium por 140 de oro.")}>✨ Esencia · 140 oro</button>
                <button type="button" class="btn" onclick="game.buyResource('food')" ${a("Compra comida para apoyar trabajos y mascotas por 65 de oro.")}>🍖 Comida x2 · 65 oro</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function $(){return`
      <div class="space-y-5">
        ${h("forja",`Hierro: <b>${V(i.player.iron)}</b> · Esencia: <b>${V(i.player.essence)}</b>`,[S("⚒️ Forjar arma","btn-primary","game.forgeItem('weapon', 'normal')","Forja un arma estándar con coste moderado y rareza controlada."),S("✨ Premium arma","btn-violet","game.forgeItem('weapon', 'premium')","Forja un arma premium con mayor acceso a rarezas altas."),S("🎒 Revisar inventario","","game.setView('inventario')")].join(""))}

        ${O([S("⚒️ Normal","btn-primary !py-3","game.forgeItem('weapon', 'normal')"),S("✨ Premium","btn-violet !py-3","game.forgeItem('weapon', 'premium')")])}

        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Creación por espacio","Forja normal para volumen. Premium para apostar por rarezas altas.")}
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${o.map(D=>`
                <div class="glass rounded-2xl p-4 forge-recipe-card">
                  <div class="font-bold">${v[D]}</div>
                  <div class="text-sm text-slate-300/70 mt-1">Pieza aleatoria del hueco.</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2" ${a("Forja normal: más común, barata y orientada a volumen.")}>Normal <b>hierro</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2" ${a("Forja premium: más costosa y con mejor acceso a rarezas altas.")}>Premium <b>esencia</b></div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button type="button" class="btn btn-primary !py-2" onclick="game.forgeItem('${D}', 'normal')">Forjar</button>
                    <button type="button" class="btn btn-violet !py-2" onclick="game.forgeItem('${D}', 'premium')">Premium</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Decisión","Mejorar equipado","Invierte solo en piezas que ya decidiste conservar.")}
              <div class="space-y-3 mt-4">
                ${["weapon","chest","ring","amulet"].map(D=>{const A=i.player.equipment[D];return`
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${v[D]}</div>
                       <div class="font-black break-words ${A?`rarity-${A.rarity}`:"text-slate-400/80"}">${A?A.name:"Vacío"}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${A?`Nivel ${A.level} · Mejora +${A.upgrade||0}`:"Equipa algo para mejorarlo."}</div>
                      <button type="button" class="btn btn-gold mt-3 w-full" ${A?`onclick="game.upgradeEquipped('${D}')"`:"disabled"} ${a("Sube el nivel de mejora de la pieza equipada y aumenta sus estadísticas.")}>⚒️ Mejorar</button>
                    </div>
                  `}).join("")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Regla de gasto")}
              <div class="grid gap-3">
                ${u("Hierro","Úsalo para generar volumen y buscar base útil.","surface-subtle")}
                ${u("Esencia","Resérvala para intentos premium y mejoras clave.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function R(){const D={barracks:"Más ataque y defensa global.",treasury:"Más oro en todas las actividades.",sanctuary:"Más vida máxima y regeneración.",hunters:"Mejor botín y hallazgos más finos.",arsenal:"Más capacidad de inventario."};return`
      <div class="space-y-5">
        ${h("gremio",`Nivel total invertido: <b>${_()}</b>`,[S("🪙 Ver mercado","","game.setView('mercado')"),S("🏋️ Entrenar","btn-primary","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Mejoras del gremio","Cada edificio empuja un estilo de progreso distinto.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${Object.entries(i.player.guild).map(([A,H])=>{const Y=H+1,re=180+Y*110+_()*35,me=Math.max(1,Math.floor(Y/2));return`
                  <div class="glass rounded-2xl p-4">
                    <div class="font-black text-lg capitalize" ${a(D[A])}>${A}</div>
                    <div class="text-sm text-slate-300/75 mt-1">${D[A]}</div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div class="rounded-xl bg-white/[.04] p-2">Nivel <b>${H}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Siguiente <b>${Y}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Oro <b>${V(re)}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Esencia <b>${V(me)}</b></div>
                    </div>
                    <button type="button" class="btn btn-violet mt-3 w-full" onclick="game.upgradeGuild('${A}')">Mejorar</button>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Decisión","Cómo repartir inversión")}
              <div class="grid gap-3">
                ${u("Especialízate","Sube uno o dos edificios primero para sentir impacto temprano.","surface-subtle")}
                ${u("Prioridad típica","Tesorería y Barracas suelen notarse antes en la partida.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function F(){return`
      <div class="space-y-5">
        ${h("entrenamiento",`Puntos de atributo: <b>${i.player.attributePoints}</b> · habilidades: <b>${i.player.skillPoints}</b>`,[S("👤 Perfil","","game.setView('perfil')"),S("⚔️ Arena","btn-primary","game.setView('arena')")].join(""))}

        <div class="grid xl:grid-cols-[.95fr,1.05fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Atributos base","Primero ajusta base estadística; después pule habilidades activas.")}
            <div class="grid sm:grid-cols-2 gap-3">
              ${[["strength","Fuerza","Ataque y robo de vida."],["agility","Agilidad","Velocidad, crítico y esquiva."],["endurance","Resistencia","Vida, defensa y bloqueo."],["discipline","Disciplina","Energía y aguante máximo."]].map(([D,A,H])=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${A}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${H}</div>
                  <div class="text-sm mt-3">Nivel actual: <b>${i.player.training[D]}</b></div>
                  <button type="button" class="btn btn-primary mt-3 w-full" onclick="game.trainAttribute('${D}')">Subir</button>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="glass rounded-3xl p-5">
            ${c("Decisión","Habilidades activas")}
            <div class="space-y-3">
              ${Object.values(T).map(D=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${D.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${D.desc}</div>
                  <div class="text-xs text-slate-300/60 mt-2">Recarga ${D.cooldown} · Desbloqueo Nv ${D.unlockLevel}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button type="button" class="btn !py-2" onclick="game.toggleSkill('${D.id}')">${i.player.activeSkills.includes(D.id)?"Quitar":"Equipar"}</button>
                    <button type="button" class="btn btn-violet !py-2" ${i.player.unlockedSkills.includes(D.id)?`onclick="game.upgradeSkill('${D.id}')"`:"disabled"}>Mejorar</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function Q(){const D=!!i.timers.job;return`
      <div class="space-y-5">
        ${h("trabajo",D?`En curso: <b>${i.timers.job.name}</b> · <span data-live-timer="job">${p()}</span>`:"Sin trabajo activo",[S("🧭 Expedición","","game.setView('expedicion')"),S("💰 Mercado","btn-gold","game.setView('mercado')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Trabajos disponibles","Elige una fuente de oro estable cuando no quieras combate activo.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${d.map(A=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black text-lg">${A.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${A.desc}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Duración <b>${A.duration}s</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${V(A.reward.gold)} oro</b></div>
                  </div>
                  <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.startJob('${A.id}')" ${a("Inicia este trabajo y bloquea el temporizador hasta su finalización.")}>Aceptar</button>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Regla rápida")}
              <div class="grid gap-3">
                ${u("Estado",D?"Ya tienes un trabajo activo: espera el temporizador.":"No hay trabajo activo: puedes aceptar uno ahora.","surface-subtle")}
                ${u("Alternativa","Si también quieres botín, Expedición suele aportar más variedad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function K(){const D=C();return`
      <div class="space-y-5">
        ${h("mascota",D?`Activa: <b>${D.name}</b>`:"Aún no tienes mascota",[S("👤 Perfil","","game.setView('perfil')"),S("🥚 Incubar","btn-violet","game.hatchPet()","Consume recursos para obtener una mascota aleatoria.")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Mascota activa","Gestiona alimentación y progreso solo del compañero que llevas activo.")}
            ${D?`
              <div class="glass rounded-2xl p-5">
                <div class="text-cyan-200">${g(D.icon||"paw","h-9 w-9")}</div>
                <div class="font-display font-extrabold text-2xl mt-2">${D.name}</div>
                <div class="text-sm text-slate-300/75 mt-1">${D.desc}</div>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  ${P("Nivel",i.player.petLevel)}
                  ${P("XP",`${i.player.petXp}/${3+i.player.petLevel}`)}
                </div>
                <div class="grid sm:grid-cols-2 gap-3 mt-4">
                  <button type="button" class="btn btn-success" onclick="game.feedPet()">${g("box","h-4 w-4")}<span>Alimentar</span></button>
                  <button type="button" class="btn btn-danger" onclick="game.releasePet()" ${a("Libera la mascota actual y pierdes sus bonos activos.")}>Liberar</button>
                </div>
              </div>
            `:`
              <div class="glass rounded-2xl p-5">
                <p class="text-sm text-slate-300/75">Incuba un huevo con 5 fragmentos y 8 de esencia para recibir un compañero aleatorio.</p>
                <button type="button" class="btn btn-violet mt-4" onclick="game.hatchPet()">${g("spark","h-4 w-4")}<span>Incubar huevo</span></button>
              </div>
            `}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${c("Soporte","Catálogo rápido")}
            <div class="grid gap-3">
              ${E.map(A=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-bold font-display inline-flex items-center gap-2">${g(A.icon||"paw","h-4 w-4")}<span>${A.name}</span></div>
                  <div class="text-sm text-slate-300/75 mt-1">${A.desc}</div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function ne(){const D=I.slice(0,6);return`
      <div class="space-y-5">
        ${h("logros",`Polvo de reliquia: <b>${i.player.relicDust}</b>`,[S("🔱 Ascender","btn-gold","game.ascend()","Reinicia gran parte del progreso para ganar mejoras meta permanentes."),S("📘 Diario","","game.setView('diario')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Hitos activos","Se muestra una selección corta para mantener foco de progresión.")}
            <div class="space-y-3">
              ${D.map(A=>{const H=N(A),Y=i.claimedAchievements.includes(A.id);return`
                  <div class="glass rounded-2xl p-4">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black text-lg">${A.title}</div>
                        <div class="text-sm text-slate-300/75 mt-1">${A.desc}</div>
                      </div>
                      <div class="text-sm rounded-full px-3 py-1 ${Y?"bg-emerald-400/15 text-emerald-300 border border-emerald-300/20":"bg-white/[.05]"}">${Y?"Listo":`${H}/${A.target}`}</div>
                    </div>
                    <div class="mt-3">${Z(H,A.target,"bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-300 shadow-[0_0_18px_rgba(34,211,238,.30)]","Progreso","Avance total hacia este logro y sus recompensas meta.")}</div>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Decisión","Ascensión")}
              <p class="text-sm text-slate-300/75 mt-2">Actívala cuando quieras convertir una partida avanzada en progreso permanente.</p>
              <button type="button" class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${a("Reinicia gran parte de la partida a cambio de progreso meta permanente.")}>🔱 Ascender</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Altar de reliquias")}
              <div class="grid gap-3 mt-4">
                ${[["wrath","Ira"],["fortune","Fortuna"],["vitality","Vitalidad"],["momentum","Impulso"]].map(([A,H])=>`
                  <button type="button" class="btn btn-violet justify-between" onclick="game.spendRelic('${A}')" ${a(`Invierte polvo de reliquia en ${H.toLowerCase()} para obtener bonificaciones permanentes.`)}><span>${H}</span><span>Nv ${i.player.relics[A]}</span></button>
                `).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function se(){const D=Math.max(8,i.ui.journalPageSize||16),A=i.journal||[],H=Math.max(1,Math.ceil(A.length/D)),Y=Math.min(Math.max(1,i.ui.journalPage||1),H),re=(Y-1)*D,me=A.slice(re,re+D);return`
      <div class="space-y-5">
        ${h("diario",`Entradas guardadas: <b>${A.length}</b>`,[S("🏆 Ver logros","","game.setView('logros')"),S("📋 Resumen","btn-primary","game.setView('resumen')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,300px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Registro reciente","El diario es histórico: úsalo para revisar, no para decidir acciones inmediatas.")}
            <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${A.length?re+1:0}</b>–<b>${Math.min(re+D,A.length)}</b> de <b>${A.length}</b>.</div>
            <div class="space-y-3">
              ${me.map(ve=>`
                <div class="glass rounded-2xl p-4 cv-auto">
                  <div class="font-black">${y(ve.icon)} <span class="font-semibold">${new Date(ve.ts).toLocaleTimeString("es-ES")}</span></div>
                  <div class="text-sm text-slate-200/90 leading-relaxed mt-2">${ve.text}</div>
                </div>
              `).join("")||'<div class="text-sm text-slate-300/75">Todavía no hay entradas en el diario.</div>'}
            </div>
            ${n(Y,H,"setJournalPage")}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${c("Soporte","Uso recomendado")}
            <div class="grid gap-3">
              ${u("Consulta","Revisa aquí eventos y recompensas pasadas.","surface-subtle")}
              ${u("Acción","Para progresar, vuelve a Resumen, Arena o Inventario.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}return{renderExpedicion:r,renderMazmorra:B,renderMercado:m,renderForja:$,renderGremio:R,renderEntrenamiento:F,renderTrabajo:Q,renderMascota:K,renderLogros:ne,renderDiario:se}}const{SLOT_ORDER:It,SLOT_NAMES:ut,ZONES:pt,JOBS:Fn,PETS:Gn,SKILLS:Lt,ACHIEVEMENTS:Jn,fmt:Ae,pct:Rt,htmlStat:Ye,progressBar:Dt,timeLeft:mt,state:ue,maxInventory:Zn,getPetData:Tt,getDerivedStats:Wn,scaleItemStats:Qn,guildTotal:Kn,currentRank:Yn,zoneForPlayer:Un,isZoneUnlocked:lt,summarizeReward:Vt,achievementProgress:Xn,icon:st,replaceEmojiIcons:es,rarityName:qt,rarityBadge:gt,translateFilter:ts,statLabel:as,statTooltip:ns,tooltipAttr:_e,statusChip:rt,sectionHeader:Bt,infoCard:Ot,actionButton:Nt,actionBar:zt,pageLead:Ht}=At;function ss(t){const o=ue.player.equipment[t];return`
    <div class="rounded-2xl ring p-3 bg-white/[.04]">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${ut[t]}</div>
          ${o?`<div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-bold leading-snug break-words rarity-${o.rarity}">${o.name}</div>${gt(o.rarity)}</div>
               <div class="text-xs text-slate-300/70 mt-1">Nivel ${o.level} · Mejora +${o.upgrade||0}</div>`:'<div class="font-bold mt-1 text-slate-400/80">Vacío</div>'}
        </div>
        ${o?`<button type="button" class="btn !px-3 !py-2 text-xs" onclick="game.unequipItem('${t}')">Quitar</button>`:""}
      </div>
    </div>
  `}function is(t){return`
    <div class="glass rounded-2xl p-4">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div class="min-w-0">
          <div class="font-black text-lg">${t.title}</div>
          <div class="text-sm text-slate-300/75 mt-1">${t.desc}</div>
          <div class="text-xs text-slate-300/60 mt-3">${Vt(t.reward)}</div>
        </div>
        <button type="button" class="btn ${t.completed?"btn-success":""}" ${t.completed&&!t.claimed?`onclick="game.claimQuest('${t.id}')"`:"disabled"}>
          ${t.claimed?"Cobrada":t.completed?"Cobrar":`${Ae(t.progress)}/${Ae(t.target)}`}
        </button>
      </div>
      <div class="mt-3">${Dt(t.progress,t.target,"bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-300 shadow-[0_0_18px_rgba(192,132,252,.32)]","Progreso","Avance actual del contrato seleccionado.")}</div>
    </div>
  `}function rs(){return ue.timers.expedition?mt(ue.timers.expedition.endAt):"0s"}function os(){return ue.timers.job?mt(ue.timers.job.endAt):"0s"}function _t(t,o,v){return o<=1?"":`
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
      <div class="text-sm text-slate-300/72">Página <b>${t}</b> de <b>${o}</b></div>
      <div class="flex gap-2">
        <button type="button" class="btn !py-2 !px-3" ${t<=1?"disabled":`onclick="game.${v}(${t-1})"`}>← Anterior</button>
        <button type="button" class="btn !py-2 !px-3" ${t>=o?"disabled":`onclick="game.${v}(${t+1})"`}>Siguiente →</button>
      </div>
    </div>
  `}function Ft(){return`
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
      ${pt.map(t=>`
        <button
          type="button"
          class="text-left glass rounded-2xl p-4 transition ${ue.player.zoneId===t.id?"ring ring-cyan-300/35 bg-cyan-400/8":""} ${lt(t)?"":"opacity-45"}"
          ${lt(t)?`onclick="game.setZone(${t.id})"`:"disabled"}
          ${_e(`Zona ${t.name}. Requiere nivel ${t.unlockLevel} y consume ${t.energyCost} de energía y ${t.staminaCost} de aguante.`)}
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="font-black text-lg">${t.name}</div>
              <div class="text-xs text-slate-300/60 mt-1">Nivel ${t.unlockLevel}+ · ${t.theme}</div>
            </div>
            <div class="text-xs rounded-full px-2.5 py-1 bg-white/[.06]">${lt(t)?"Activa":"Bloqueada"}</div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${st("bolt","h-4 w-4 text-cyan-300")}<span>${t.energyCost} energía</span></div>
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${st("dumbbell","h-4 w-4 text-emerald-300")}<span>${t.staminaCost} aguante</span></div>
          </div>
        </button>
      `).join("")}
    </div>
  `}function ls(t,o){return t==="crit"||t==="dodge"||t==="block"||t==="lifesteal"?Rt(o):Ae(o)}function ft(t){const o=ue.player.equipment[t.slot];if(!o)return{label:"Mejora limpia",tone:"success",detail:"No tienes una pieza equipada en este espacio."};const v=(t.score||0)-(o.score||0);return v>0?{label:`+${Ae(v)} puntuación`,tone:"success",detail:`Mejora respecto a ${o.name}.`}:v<0?{label:`${Ae(v)} puntuación`,tone:"danger",detail:`Rinde peor que ${o.name}.`}:{label:"Puntuación similar",tone:"",detail:`Rinde de forma parecida a ${o.name}.`}}function Gt(t,o=4){return Object.entries(Qn(t)).slice(0,o).map(([v,k])=>`<div class="rounded-xl bg-white/[.04] p-2.5" ${_e(ns(v))}>${as(v)}: <b>${ls(v,k)}</b></div>`).join("")}function cs(t){const o=t.filter(k=>k.rarity==="legendary").length,v=t.filter(k=>ft(k).tone==="success").length;return`
    <div class="grid sm:grid-cols-3 gap-3 mb-4">
      ${Ye("Objetos filtrados",t.length)}
      ${Ye("Mejoras posibles",v)}
      ${Ye("Legendarios",o,"","Cantidad de objetos legendarios visibles en este filtro.")}
    </div>
  `}function ds(t,o,v){return`
    <div class="surface-strong rounded-2xl p-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Expedición</div>
          <div class="text-2xl font-black mt-1">${t}s</div>
          <p class="text-sm text-slate-300/74 mt-2">${v}</p>
        </div>
        ${rt(t<=30?"Corta":t<120?"Media":"Larga",o)}
      </div>
      <button type="button" class="btn ${o==="success"?"btn-primary":o==="warning"?"btn-gold":"btn-violet"} mt-4 w-full" onclick="game.startExpedition(${ue.player.zoneId}, ${t})">Enviar ${t}s</button>
    </div>
  `}function us(){let t=[...ue.player.inventory];const o=ue.ui.inventoryFilter;if(o!=="all"&&(t=t.filter(I=>I.slot===o||I.rarity===o)),!t.length)return'<div class="glass rounded-2xl p-5 text-slate-300/75">Tu inventario está vacío o el filtro no devuelve resultados.</div>';const v=Math.max(6,ue.ui.inventoryPageSize||18),k=Math.max(1,Math.ceil(t.length/v)),d=Math.min(Math.max(1,ue.ui.inventoryPage||1),k),E=(d-1)*v,T=t.slice(E,E+v);return`
    ${cs(t)}
    <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${E+1}</b>–<b>${Math.min(E+v,t.length)}</b> de <b>${t.length}</b> objetos filtrados.</div>
    <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
      ${T.map(I=>{const i=ft(I);return`
          <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro" ${_e(`Objeto de rareza ${qt(I.rarity)}. Puntuación ${Ae(I.score)}. ${i.detail}`)}>
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${I.rarity} leading-snug break-words">${I.name}</div>${gt(I.rarity)}</div>
                <div class="text-xs text-slate-300/60 mt-1">${ut[I.slot]} · Nivel ${I.level} · Mejora +${I.upgrade||0}</div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]" ${_e("Puntuación total estimada del objeto según sus estadísticas y mejora actual.")}>Punt. ${Ae(I.score)}</div>
                <div class="mt-2">${rt(i.label,i.tone)}</div>
              </div>
            </div>
            <p class="text-xs text-slate-300/62 mt-3">${i.detail}</p>
            <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
              ${Gt(I,4)}
            </div>
            <div class="grid gap-2 mt-4">
              <button type="button" class="btn btn-success !py-2.5 w-full" onclick="game.equipItem('${I.id}')">Equipar</button>
              <div class="grid grid-cols-3 gap-2">
                <button type="button" class="btn !py-2 text-xs" onclick="game.sellItem('${I.id}')">Vender</button>
                <button type="button" class="btn !py-2 text-xs" onclick="game.salvageItem('${I.id}')">Reciclar</button>
                <button type="button" class="btn btn-violet !py-2 text-xs" onclick="game.rerollItem('${I.id}')">Retemplar</button>
              </div>
            </div>
          </div>
        `}).join("")}
    </div>
    ${_t(d,k,"setInventoryPage")}
  `}const Ke=Hn({SLOT_ORDER:It,ZONES:pt,SKILLS:Lt,state:ue,maxInventory:Zn,getPetData:Tt,getDerivedStats:Wn,currentRank:Yn,zoneForPlayer:Un,summarizeReward:Vt,fmt:Ae,pct:Rt,htmlStat:Ye,timeLeft:mt,icon:st,translateFilter:ts,tooltipAttr:_e,statusChip:rt,sectionHeader:Bt,infoCard:Ot,actionButton:Nt,actionBar:zt,pageLead:Ht,questCard:is,equippedSlotCard:ss,inventoryCards:us,zoneSelector:Ft}),xe=_n({SLOT_ORDER:It,SLOT_NAMES:ut,ZONES:pt,JOBS:Fn,PETS:Gn,SKILLS:Lt,ACHIEVEMENTS:Jn,state:ue,getPetData:Tt,guildTotal:Kn,achievementProgress:Xn,fmt:Ae,htmlStat:Ye,progressBar:Dt,icon:st,tooltipAttr:_e,replaceEmojiIcons:es,rarityName:qt,rarityBadge:gt,zoneSelector:Ft,compareAgainstEquipped:ft,itemStatGrid:Gt,durationChoiceCard:ds,pager:_t,expeditionTimerText:rs,jobTimerText:os,pageLead:Ht,sectionHeader:Bt,infoCard:Ot,actionButton:Nt,actionBar:zt,statusChip:rt});function ps(){return({resumen:Ke.renderResumen,perfil:Ke.renderPerfil,inventario:Ke.renderInventario,arena:Ke.renderArena,expedicion:xe.renderExpedicion,mazmorra:xe.renderMazmorra,mercado:xe.renderMercado,forja:xe.renderForja,gremio:xe.renderGremio,entrenamiento:xe.renderEntrenamiento,trabajo:xe.renderTrabajo,mascota:xe.renderMascota,logros:xe.renderLogros,diario:xe.renderDiario}[ue.currentView]||Ke.renderResumen)()}function ms(){const t=ue.ui.modal;return t?`
    <div class="fixed inset-0 bg-slate-950/72 backdrop-blur-sm z-50 p-4 overflow-y-auto">
      <div class="min-h-full flex items-start justify-center py-8">
        <div class="glass-strong rounded-[2rem] p-5 sm:p-6 w-full max-w-5xl">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div>
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Detalle</div>
              <div class="text-2xl font-black">${t.title}</div>
            </div>
            <button type="button" class="btn" onclick="game.closeModal()">Cerrar</button>
          </div>
          ${t.content}
        </div>
      </div>
    </div>
  `:""}const gs={renderContent:ps,renderModal:ms};(()=>{const{STORAGE_KEY:t,VIEWS:o,VIEW_META:v}=window.AetherConfig,{$:k,clamp:d,fmt:E,timeLeft:T,sanitizeInlineHtml:I}=window.AetherUtils,{state:i,loadGame:C,saveGame:_,getDerivedStats:N,maxInventory:V,hardReset:P,mutate:Z,subscribeStore:g,getStoreMeta:a,setStoreMeta:y,syncExternalState:M}=window.AetherModel,f=window.AetherSystems,x={...zn,...gs},w=new Set(o.map(([b])=>b)),L={hud:"hud",desktopNav:"desktop-nav",content:"page-view",modal:"modal-root",mobileNav:"mobile-nav-root",mobileSheet:"mobile-sheet-root"},e=Object.create(null),n=new Set(Object.keys(L)),l=[],p={el:null,activeTarget:null,hideTimer:0,frame:0};let h=0,c=0,u=0;function S(b){return k(L[b])}function O(b){switch(b){case"hud":return x.renderHud();case"desktopNav":return x.renderDesktopNav();case"content":return x.renderContent();case"modal":return x.renderModal();case"mobileNav":return x.renderMobileNav();case"mobileSheet":return x.renderMobileSheet();default:return""}}function z(b){return b?Array.isArray(b)?b:[b]:[]}function r(b=Object.keys(L)){z(b).forEach(q=>n.add(q)),!h&&(h=window.requestAnimationFrame(()=>{h=0,ne()}))}function B(){const b=S("content");!b||!b.querySelectorAll||(b.querySelectorAll('[data-live-timer="expedition"]').forEach(q=>{q.textContent=i.timers.expedition?T(i.timers.expedition.endAt):"0s"}),b.querySelectorAll('[data-live-timer="job"]').forEach(q=>{q.textContent=i.timers.job?T(i.timers.job.endAt):"0s"}))}function m(){const b=S("hud");if(!b)return!1;const q=N(),U=q.maxHp?i.player.hp/q.maxHp:1,ae=q.maxHp?Math.max(0,Math.min(100,i.player.hp/q.maxHp*100)):0,le=q.maxEnergy?Math.max(0,Math.min(100,i.player.energy/q.maxEnergy*100)):0,J=q.maxStamina?Math.max(0,Math.min(100,i.player.stamina/q.maxStamina*100)):0,X=U<=.35?{text:"Vida crítica",tone:"danger"}:U<=.65?{text:"Vida media",tone:"warning"}:{text:"Vida estable",tone:"success"},ie=(Ce,de)=>{const ge=b.querySelector(Ce);ge&&ge.textContent!==de&&(ge.textContent=de)},te=(Ce,de)=>{const ge=b.querySelector(`[data-hud-bar="${Ce}"]`);if(!ge)return;const Pe=`${de}%`;ge.style.width!==Pe&&(ge.style.width=Pe)};ie("[data-hud-resources]",`${E(i.player.energy)}⚡ · ${E(i.player.stamina)}💪`),ie('[data-hud-current="hp"]',`${E(i.player.hp)} / ${E(q.maxHp)}`),ie('[data-hud-current="energy"]',`${E(i.player.energy)} / ${E(q.maxEnergy)}`),ie('[data-hud-current="stamina"]',`${E(i.player.stamina)} / ${E(q.maxStamina)}`),te("hp",ae),te("energy",le),te("stamina",J),ie('[data-hud-stat="gold"]',E(i.player.gold)),ie('[data-hud-stat="potions"]',E(i.player.potions)),ie('[data-hud-stat="attack"]',E(q.attack)),ie('[data-hud-stat="inventory"]',`${i.player.inventory.length}/${V()}`);const oe=b.querySelector("[data-hud-survivability]");return oe&&(oe.textContent=X.text,oe.classList.remove("success","warning","danger"),oe.classList.add(X.tone)),!0}function $(b,q){const U=(b.getAttribute("data-card-title")||"").trim();if(U)return U;const ae=b.querySelector(".section-title, .font-display.font-extrabold, .font-black, .font-bold, h2, h3, h4"),le=ae?(ae.textContent||"").trim().replace(/\s+/g," "):"";return le||`Tarjeta ${q+1}`}function R(b){let q=0,U=b;for(;U&&U.parentElement;)q+=1,U=U.parentElement;return q}function F(b,q){const U=[];let ae=q;for(;ae&&ae!==b;){let le=0,J=ae.previousElementSibling;for(;J;)le+=1,J=J.previousElementSibling;U.push(le),ae=ae.parentElement}return U.reverse().join(".")}function Q(b,q,U){Z("ui/setCardCollapsed",()=>{(!i.ui.collapsedCardsByView||typeof i.ui.collapsedCardsByView!="object")&&(i.ui.collapsedCardsByView={}),(!i.ui.collapsedCardsByView[b]||typeof i.ui.collapsedCardsByView[b]!="object")&&(i.ui.collapsedCardsByView[b]={}),i.ui.collapsedCardsByView[b][q]=!!U},{source:"ui"}),se()}function K(){const b=S("content");if(!b)return;const U=Array.from(b.querySelectorAll(".glass, .glass-strong, .surface-strong, .surface-subtle")).filter(te=>!(!(te instanceof HTMLElement)||te.tagName.toLowerCase()==="details"||te.closest(".mobile-cta-bar")||te.closest("#mobile-nav-root")||te.closest("#mobile-sheet-root"))),ae=i.currentView||"resumen",le=i.ui.collapsedCardsByView&&i.ui.collapsedCardsByView[ae]||{},J=Object.keys(le).length>0;[...U.map((te,oe)=>({card:te,order:oe,depth:R(te),domPath:F(b,te)}))].sort((te,oe)=>oe.depth-te.depth||te.order-oe.order).forEach(te=>{const{card:oe,order:Ce}=te,de=document.createElement("details");Array.from(oe.attributes).forEach(Ue=>{de.setAttribute(Ue.name,Ue.value)}),de.classList.add("card-collapsible");const ge=document.createElement("summary");ge.className="card-collapsible-summary",ge.setAttribute("role","button");const Pe=document.createElement("span");Pe.className="card-collapsible-label";const ot=$(oe,Ce);Pe.textContent=ot;const qe=document.createElement("span");qe.className="card-collapsible-chevron",qe.setAttribute("aria-hidden","true"),qe.textContent="▾",ge.append(Pe,qe);const We=document.createElement("div");for(We.className="card-collapsible-body";oe.firstChild;)We.appendChild(oe.firstChild);de.append(ge,We);const Be=(oe.getAttribute("data-card-id")||"").trim()||`${ae}:${te.domPath}`;de.dataset.cardKey=Be,Object.prototype.hasOwnProperty.call(le,Be)?de.open=le[Be]!==!0:J?de.open=!0:de.open=Ce===0,de.addEventListener("toggle",()=>{Q(ae,Be,!de.open)}),oe.replaceWith(de)})}function ne(){Object.keys(L).forEach(q=>{if(!n.has(q))return;const U=S(q);if(!U)return;const ae=O(q);e[q]!==ae&&(U.innerHTML=ae,e[q]=ae,q==="content"&&K()),n.delete(q)}),B();const b=v[i.currentView]||v.resumen;document.title=`Aether Arena — ${b.label}`}function se(b=!1){if(!b&&!a().isDirty)return;if(b){u&&(clearTimeout(u),u=0),_();return}if(u)return;const q=()=>{u=0,_()};if(typeof window.requestIdleCallback=="function"){u=window.setTimeout(()=>{u=0,window.requestIdleCallback(q,{timeout:1200})},900);return}u=window.setTimeout(q,900)}function D(b){try{location.hash!==`#${b}`&&history.replaceState(null,"",`#${b}`)}catch{location.hash=b}}function A(b,q={}){if(!w.has(b))return;const U=i.currentView;Z("ui/setView",()=>{i.currentView=b,i.currentTab=b,i.ui.moreMenuOpen=!1},{source:"ui"}),q.skipHash||D(b),r(["hud","desktopNav","content","mobileNav","mobileSheet"]),U!==b&&!q.keepScroll&&window.scrollTo(0,0),se()}function H(b){Z("ui/setInventoryFilter",()=>{i.ui.inventoryFilter=b,i.ui.inventoryPage=1},{source:"ui"}),r("content"),se()}function Y(b){Z("ui/setInventoryPage",()=>{i.ui.inventoryPage=Math.max(1,Number(b)||1)},{source:"ui",markDirty:!1}),r("content")}function re(b){Z("ui/setJournalPage",()=>{i.ui.journalPage=Math.max(1,Number(b)||1)},{source:"ui",markDirty:!1}),r("content")}function me(b){Z("ui/toggleMoreMenu",()=>{i.ui.moreMenuOpen=typeof b=="boolean"?b:!i.ui.moreMenuOpen},{source:"ui",markDirty:!1}),r(["mobileNav","mobileSheet"])}function ve(){Z("ui/closeModal",()=>{i.ui.modal=null},{source:"ui",markDirty:!1}),r("modal")}function Le(b){const q=i.combatHistory.find(U=>U.id===b);q&&(Z("ui/showCombat",()=>{i.ui.modal={type:"combat",title:I(q.title),content:`
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4">
              <div class="text-sm text-slate-300/75">${I(q.zone)}</div>
              <div class="text-sm text-slate-200/90 mt-2">${I(f.summarizeReward(q.rewards))}${q.drop?` · Botin: <span class="rarity-${q.drop.rarity}">${I(q.drop.name)}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
              <div class="space-y-2 text-sm">${q.log.map(U=>`<div>${I(U)}</div>`).join("")}</div>
            </div>
          </div>
        `}},{source:"ui",markDirty:!1}),r("modal"))}function Re(){typeof confirm=="function"&&!confirm("¿Seguro que quieres reiniciar la partida? Se perdera el progreso local.")||(P(),A("resumen",{keepScroll:!1}),f.toast("Nueva partida iniciada","danger"),r(Object.keys(L)),se(!0))}function je(b){r(b||["hud","content","mobileSheet"]),se()}function $e(){const b=document.createElement("div");b.id="ui-tooltip",b.className="pointer-events-none fixed z-[80] hidden max-w-[290px] rounded-2xl border border-cyan-300/24 bg-slate-950/92 px-3 py-2 text-xs leading-relaxed text-slate-100 backdrop-blur-xl shadow-[0_12px_40px_rgba(2,6,23,.55)] opacity-0 translate-y-1 transition duration-150 ease-out",document.body.appendChild(b),p.el=b;function q(J){if(!J||!p.el||p.el.classList.contains("hidden"))return;const X=J.getBoundingClientRect(),ie=p.el.getBoundingClientRect(),te=Math.max(12,X.top-ie.height-10);let oe=X.left+X.width/2-ie.width/2;oe=Math.max(12,Math.min(oe,window.innerWidth-ie.width-12)),p.el.style.top=`${te}px`,p.el.style.left=`${oe}px`}function U(J=p.activeTarget){!J||!p.el||p.frame||(p.frame=window.requestAnimationFrame(()=>{p.frame=0,q(J)}))}function ae(J){const X=J&&J.getAttribute("data-tooltip");!X||!p.el||(p.hideTimer&&(clearTimeout(p.hideTimer),p.hideTimer=0),p.activeTarget=J,p.el.innerHTML=X,p.el.classList.remove("hidden"),window.requestAnimationFrame(()=>{p.el&&p.el.classList.remove("opacity-0","translate-y-1")}),U(J))}function le(J){!p.activeTarget||!p.el||J&&p.activeTarget!==J&&p.activeTarget.contains(J)||(p.activeTarget=null,p.el.classList.add("opacity-0","translate-y-1"),p.hideTimer=window.setTimeout(()=>{p.el&&(p.el.classList.add("hidden"),p.hideTimer=0)},140))}document.addEventListener("mouseover",J=>{const X=J.target.closest("[data-tooltip]");X&&ae(X)}),document.addEventListener("mouseout",J=>{const X=J.target.closest("[data-tooltip]");X&&le(X)}),document.addEventListener("focusin",J=>{const X=J.target.closest("[data-tooltip]");X&&ae(X)}),document.addEventListener("focusout",J=>{const X=J.target.closest("[data-tooltip]");X&&le(X)}),document.addEventListener("mousemove",()=>{p.activeTarget&&U(p.activeTarget)}),window.addEventListener("scroll",()=>{p.activeTarget&&U(p.activeTarget)},!0),window.addEventListener("resize",()=>{p.activeTarget&&U(p.activeTarget)})}function Fe(){for(;l.length;){const b=l.pop();typeof b=="function"&&b()}l.push(g(b=>b._meta&&[b._meta.isSaving,b._meta.isDirty,b._meta.lastSaveAt].join("|"),()=>r("hud"))),l.push(g(b=>b._meta?b._meta.syncRevision:0,(b,q)=>{b!==q&&r(Object.keys(L))})),l.push(g(b=>b.ui?b.ui.modal:null,()=>r("modal"))),l.push(g(b=>b.ui?b.ui.moreMenuOpen:!1,()=>r(["mobileNav","mobileSheet"])))}const De={setView:A,setTab:A,setInventoryFilter:H,setInventoryPage:Y,setJournalPage:re,toggleMoreMenu:me,showCombat:Le,closeModal:ve,hardReset:Re};Za(De,{systems:f,mutate:Z,afterAction:je});function be(){const b=Date.now();let q=!1,U=!1;const ae=i.player.hp,le=i.player.energy,J=i.player.stamina;Z("system/tick",()=>{const X=d((b-i.lastTick)/1e3,0,document.hidden?30:5);i.lastTick=b,f.passiveRegen(X),q=f.resolveFinishedTimers(b,document.hidden);const ie=N();i.player.hp=d(i.player.hp,1,ie.maxHp),i.player.energy=d(i.player.energy,0,ie.maxEnergy),i.player.stamina=d(i.player.stamina,0,ie.maxStamina),U=i.player.hp!==ae||i.player.energy!==le||i.player.stamina!==J},{source:"tick",markDirty:!1}),(U||q)&&!a().isDirty&&y({isDirty:!0,lastSource:"tick"}),(!i.lastSave||b-i.lastSave>12e3)&&se(),!document.hidden&&((U||q)&&(m()||r("hud")),B(),q?(r(["content","modal"]),se()):i.ui.modal&&r("modal"),i.ui.moreMenuOpen&&r(["mobileNav","mobileSheet"]))}function Te(){c&&clearInterval(c),c=window.setInterval(be,document.hidden?4e3:1e3)}function Ve(){const b=(location.hash||"").replace("#","").trim(),q=w.has(b)?b:i.currentView||"resumen";A(q,{skipHash:!1,keepScroll:!0})}function Ge(){const b=(location.hash||"").replace("#","").trim();w.has(b)&&b!==i.currentView&&A(b,{skipHash:!0})}function Je(b){if(b.key!==t||b.newValue===b.oldValue)return;M(b.newValue)&&(r(Object.keys(L)),f.toast("Partida sincronizada desde otra pestana","cyan"))}function Ze(){$e(),C(),Z("system/offlineCatchup:init",()=>{f.offlineCatchup()},{source:"lifecycle"}),Fe(),Ve(),r(Object.keys(L)),se(),Te(),window.addEventListener("hashchange",Ge),document.addEventListener("visibilitychange",()=>{Te(),document.hidden||(Z("system/offlineCatchup:resume",()=>{f.offlineCatchup()},{source:"lifecycle"}),r(["hud","content","modal"]))}),window.addEventListener("storage",Je),window.addEventListener("pagehide",()=>se(!0)),window.addEventListener("beforeunload",()=>se(!0))}window.game=De,window.AetherController={queueRender:r,setView:A,closeModal:ve,showCombat:Le,scheduleSave:se},Ze()})();
