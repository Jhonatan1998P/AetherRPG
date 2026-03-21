(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))S(r);new MutationObserver(r=>{for(const L of r)if(L.type==="childList")for(const q of L.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&S(q)}).observe(document,{childList:!0,subtree:!0});function f(r){const L={};return r.integrity&&(L.integrity=r.integrity),r.referrerPolicy&&(L.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?L.credentials="include":r.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function S(r){if(r.ep)return;r.ep=!0;const L=f(r);fetch(r.href,L)}})();const ba=["weapon","offhand","helm","chest","gloves","boots","ring","amulet"],ya={weapon:"Arma",offhand:"Mano izquierda",helm:"Casco",chest:"Armadura",gloves:"Guantes",boots:"Botas",ring:"Anillo",amulet:"Amuleto"},ha=[{title:"Novato del Bronce",min:0},{title:"Aspirante de Arena",min:90},{title:"Centurion de Cristal",min:220},{title:"Campeon del Foro",min:420},{title:"Idolo de la Ciudad",min:720},{title:"Verdugo Solar",min:1100},{title:"Coloso Astral",min:1600},{title:"Inmortal del Panteon",min:2300}],xa=[{key:"common",name:"Comun",mult:1,affixes:0,value:14,order:0},{key:"uncommon",name:"Infrecuente",mult:1.14,affixes:1,value:34,order:1},{key:"rare",name:"Raro",mult:1.38,affixes:2,value:92,order:2},{key:"epic",name:"Epico",mult:1.74,affixes:3,value:240,order:3},{key:"legendary",name:"Legendario",mult:2.18,affixes:4,value:640,order:4},{key:"mythic",name:"Mitico",mult:2.82,affixes:5,value:1650,order:5}],$a={weapon:[{name:"Gladius",stats:{attack:7,speed:1}},{name:"Hacha de Coliseo",stats:{attack:9,defense:1}},{name:"Tridente del Foro",stats:{attack:8,crit:.02}},{name:"Espada Curva",stats:{attack:8,speed:2}},{name:"Lanza Escarlata",stats:{attack:10,crit:.01}}],offhand:[{name:"Escudo de Torre",stats:{defense:7,hp:18,block:.03}},{name:"Parma Ligera",stats:{defense:5,speed:2,block:.02}},{name:"Daga de Mano",stats:{attack:5,crit:.03}},{name:"Brazal Solar",stats:{defense:4,hp:10,crit:.01}}],helm:[{name:"Yelmo de Bronce",stats:{defense:5,hp:14}},{name:"Mascara del Duelo",stats:{defense:4,crit:.02}},{name:"Casco de Placas",stats:{defense:6,hp:10}},{name:"Corona de Hierro",stats:{hp:18,speed:1}}],chest:[{name:"Coraza Segmentada",stats:{defense:9,hp:28}},{name:"Pectoral de Guerra",stats:{defense:11,hp:22}},{name:"Tunica Blindada",stats:{defense:7,speed:2,hp:20}},{name:"Arnes del Leon",stats:{attack:4,defense:8,hp:18}}],gloves:[{name:"Guanteletes de Malla",stats:{defense:4,attack:2}},{name:"Guantes de Cazador",stats:{crit:.02,speed:1}},{name:"Mitones de Arena",stats:{attack:3,hp:8}},{name:"Brazales de Sangre",stats:{attack:4,lifesteal:.01}}],boots:[{name:"Grebas Reforzadas",stats:{defense:4,speed:1}},{name:"Sandalias de Arena",stats:{speed:3,dodge:.02}},{name:"Botas de Marcha",stats:{hp:10,speed:2}},{name:"Botas de Acecho",stats:{speed:2,crit:.01}}],ring:[{name:"Anillo de Plata",stats:{crit:.02,attack:2}},{name:"Sello del Foro",stats:{defense:3,hp:8}},{name:"Aro Solar",stats:{attack:3,speed:1}},{name:"Sortija Vital",stats:{hp:16}}],amulet:[{name:"Amuleto del Leon",stats:{attack:3,hp:10}},{name:"Talisman de Marmol",stats:{defense:3,block:.01}},{name:"Colgante del Alba",stats:{crit:.02,hp:8}},{name:"Medallon del Eco",stats:{speed:2,dodge:.01}}]},ka=[{prefix:"Furioso",stats:{attack:2}},{prefix:"Certero",stats:{crit:.02}},{prefix:"Agil",stats:{speed:2}},{prefix:"Imponente",stats:{hp:18}},{prefix:"Bastion",stats:{defense:3}},{prefix:"Sanguineo",stats:{lifesteal:.015}},{suffix:"del Coloso",stats:{hp:24,defense:2}},{suffix:"de la Tempestad",stats:{speed:2,crit:.01}},{suffix:"de la Caza",stats:{attack:3,crit:.01}},{suffix:"del Vigia",stats:{defense:4,block:.015}},{suffix:"de los Antiguos",stats:{hp:16,attack:2}},{suffix:"del Eclipse",stats:{attack:3,speed:1,crit:.01}}],wa=[{id:0,name:"Distrito de Arena",unlockLevel:1,energyCost:7,staminaCost:1,theme:"Callejones y plazas del coliseo",enemies:["Rufian del Foro","Apostador Violento","Mercenario de Bronce","Ladron de Tuneles"],boss:"Campeon de Grava"},{id:1,name:"Bosque Sangriento",unlockLevel:4,energyCost:9,staminaCost:1,theme:"Bestias y cazadores en la niebla",enemies:["Jabali Enloquecido","Cazador Sombrio","Tigre de Jaula","Bandido del Roble"],boss:"Gran Acechador Berkan"},{id:2,name:"Catacumbas Rotas",unlockLevel:8,energyCost:11,staminaCost:2,theme:"No muertos, guardianes y reliquias",enemies:["Esqueleto Vetusto","Fanatico de Cripta","Necrofago Roto","Guardia del Osario"],boss:"Pontifice de Hueso"},{id:3,name:"Dunas de Onice",unlockLevel:12,energyCost:13,staminaCost:2,theme:"Bestias solares y caravanas saqueadas",enemies:["Saqueador de Caravana","Escorpion de Brasa","Jinete del Viento","Chaman del Datil Negro"],boss:"Anhur, el Sol Partido"},{id:4,name:"Fortaleza del Eclipse",unlockLevel:16,energyCost:16,staminaCost:2,theme:"Caballeros caidos y maquinas de guerra",enemies:["Guardia Obsidiana","Verdugo del Eclipse","Ballestero Negro","Ingeniero del Asedio"],boss:"General Varzok"},{id:5,name:"Necropolis del Hierro",unlockLevel:21,energyCost:18,staminaCost:3,theme:"Automatas, espectros y altares profanos",enemies:["Arconte Ferrum","Espectro de Cadena","Mecanico Sacrilego","Profanador del Trono"],boss:"Maquina-Rey Nax"},{id:6,name:"Fisura Astral",unlockLevel:27,energyCost:21,staminaCost:3,theme:"Entidades del vacio y gloria absoluta",enemies:["Segador del Vacio","Centinela Astral","Bestia Prismatica","Oraculo Corrupto"],boss:"Aion, Devorador de Ecos"}],Sa=[{id:"guardia",name:"Guardia del Foro",duration:45,reward:{gold:120,xp:25,food:1},desc:"Patrulla, disciplina y monedas seguras."},{id:"mercante",name:"Estiba de Mercaderes",duration:75,reward:{gold:190,xp:40,wood:2,iron:1},desc:"Carga mercancias y quedate con una comision."},{id:"arena",name:"Espectaculo Menor",duration:120,reward:{gold:320,xp:70,essence:1,potions:1},desc:"Show de arena, apuestas y fama barata."}],Ma=[{id:"wolf",name:"Lobo de Guerra",icon:"paw",desc:"Aumenta el dano y el critico.",bonus:{attackPct:.08,crit:.03}},{id:"phoenix",name:"Fenix de Ceniza",icon:"flame",desc:"Mas vida, regeneracion y esencia.",bonus:{hpPct:.1,regenPct:.15}},{id:"golem",name:"Golem de Basalto",icon:"shield",desc:"Defensa bruta y bloqueo.",bonus:{defensePct:.1,block:.03}},{id:"panther",name:"Pantera Crepuscular",icon:"spark",desc:"Velocidad, esquiva y golpes finos.",bonus:{speedPct:.08,dodge:.03}},{id:"raven",name:"Cuervo del Oraculo",icon:"feather",desc:"Mas oro, mejor botin y vision.",bonus:{goldPct:.08,lootLuck:.06}}],Ea={powerStrike:{id:"powerStrike",name:"Golpe devastador",desc:"Ataque de gran multiplicador.",unlockLevel:1,cooldown:3,mult:1.75},quickLunge:{id:"quickLunge",name:"Estocada veloz",desc:"Golpe rapido con extra de critico.",unlockLevel:1,cooldown:2,mult:1.15,critBonus:.14},fortify:{id:"fortify",name:"Guardia de acero",desc:"Golpeas y elevas tu defensa temporalmente.",unlockLevel:1,cooldown:5,mult:.82,selfBuff:{defensePct:.24,turns:2,shieldPct:.08}},shieldBash:{id:"shieldBash",name:"Embestida de escudo",desc:"Rompe la defensa rival. Requiere mano izquierda.",unlockLevel:5,cooldown:4,mult:1.32,requireOffhand:!0,armorBreak:{pct:.18,turns:2}},bloodRage:{id:"bloodRage",name:"Rabia sanguinea",desc:"Gran drenaje de vida en el impacto.",unlockLevel:7,cooldown:5,mult:1.38,lifestealBonus:.35},whirlwind:{id:"whirlwind",name:"Torbellino",desc:"Dos impactos consecutivos.",unlockLevel:9,cooldown:5,mult:.88,hits:2},execution:{id:"execution",name:"Ejecucion",desc:"Hace muchisimo mas dano a enemigos debilitados.",unlockLevel:12,cooldown:4,mult:1.2,executeThreshold:.35,executeMult:1.85},venomCut:{id:"venomCut",name:"Corte toxico",desc:"Aplica dano persistente.",unlockLevel:14,cooldown:4,mult:1.08,dot:{turns:3,ratio:.18,label:"Veneno"}},berserk:{id:"berserk",name:"Berserk",desc:"Te buffas y golpeas con furia.",unlockLevel:17,cooldown:6,mult:1.25,selfBuff:{attackPct:.22,defensePct:-.1,turns:3}},celestialEdge:{id:"celestialEdge",name:"Filo celestial",desc:"Golpe definitivo con alto critico.",unlockLevel:22,cooldown:7,mult:2.25,critBonus:.28}},Aa=[{id:"kills50",title:"Carne de Arena",desc:"Derrota 50 enemigos.",type:"kills",target:50,reward:{gold:250,shards:2}},{id:"wins25",title:"Favor del Publico",desc:"Gana 25 combates de arena.",type:"wins",target:25,reward:{gold:300,essence:3}},{id:"quest10",title:"Contratista",desc:"Completa 10 misiones.",type:"questsCompleted",target:10,reward:{gold:400,shards:3}},{id:"floor5",title:"Delvador",desc:"Alcanza el piso 5 de las mazmorras.",type:"highestDungeonFloor",target:5,reward:{gold:450,keys:2}},{id:"level10",title:"Veterano",desc:"Llega al nivel 10.",type:"level",target:10,reward:{gold:500,potions:2,essence:4}},{id:"legendary1",title:"Resplandor Dorado",desc:"Consigue 1 objeto legendario.",type:"legendaryFound",target:1,reward:{shards:4,gold:500}},{id:"guild8",title:"Constructor",desc:"Invierte 8 niveles de gremio en total.",type:"guildTotal",target:8,reward:{gold:700,essence:5}},{id:"ascend1",title:"Mas alla del polvo",desc:"Asciende una vez.",type:"ascension",target:1,reward:{relicDust:3,shards:5}}],ja=[["resumen","Resumen"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],pt=[["resumen","Resumen"],["perfil","Perfil"],["inventario","Inventario"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],Ca={resumen:{label:"Resumen",short:"Bucle principal",desc:"Vista rápida del ciclo principal, contratos y accesos clave.",icon:"home"},perfil:{label:"Perfil",short:"Gladiador",desc:"Identidad, equipo, rango, zona y estadísticas del héroe.",icon:"user"},inventario:{label:"Inventario",short:"Bolsa y equipo",desc:"Gestiona la mochila, filtra piezas y equipa mejoras.",icon:"backpack"},arena:{label:"Arena",short:"Combate rápido",desc:"Duelo instantáneo, élites y rachas de farmeo.",icon:"swords"},expedicion:{label:"Expediciones",short:"Temporizadores",desc:"Rutas en segundo plano con botín y materiales.",icon:"compass"},mazmorra:{label:"Mazmorras",short:"Pisos y jefes",desc:"Runs por pisos con jefe y cofre.",icon:"castle"},mercado:{label:"Mercado",short:"Compra y venta",desc:"Rotación de equipo y consumibles.",icon:"cart"},forja:{label:"Forja",short:"Creación y mejora",desc:"Creación de piezas y mejoras directas.",icon:"hammer"},gremio:{label:"Gremio",short:"Bonos pasivos",desc:"Mejoras permanentes de la partida.",icon:"shield"},entrenamiento:{label:"Entrenamiento",short:"Atributos y habilidades",desc:"Atributos, habilidades y especialización.",icon:"book"},trabajo:{label:"Trabajo",short:"Ingresos seguros",desc:"Ocupaciones temporizadas con retorno estable.",icon:"briefcase"},mascota:{label:"Mascota",short:"Compañero",desc:"Bonos únicos y progresión auxiliar.",icon:"paw"},logros:{label:"Logros",short:"Metaprogresión",desc:"Hitos, reliquias y ascensión.",icon:"trophy"},diario:{label:"Diario",short:"Registro",desc:"Historial de eventos y actividad reciente.",icon:"scroll"}},Ia=[{title:"Principal",views:["resumen","perfil","inventario","arena"]},{title:"Aventura",views:["expedicion","mazmorra"]},{title:"Economía",views:["mercado","forja","trabajo"]},{title:"Progreso",views:["gremio","entrenamiento","mascota","logros"]},{title:"Registro",views:["diario"]}],mt=["resumen","perfil","inventario","arena"],Pa=pt.map(([a])=>a).filter(a=>!mt.includes(a)),La="aether_arena_pbbg_v3";window.AetherConfig={STORAGE_KEY:La,SLOT_ORDER:ba,SLOT_NAMES:ya,TABS:ja,VIEWS:pt,VIEW_META:Ca,VIEW_GROUPS:Ia,MOBILE_PRIMARY_VIEWS:mt,MOBILE_OVERFLOW_VIEWS:Pa,RANKS:ha,RARITIES:xa,ITEM_BASES:$a,AFFIXES:ka,ZONES:wa,JOBS:Sa,PETS:Ma,SKILLS:Ea,ACHIEVEMENTS:Aa};(()=>{const{RARITIES:a,ITEM_BASES:i}=window.AetherConfig;let f=1;const S=l=>document.getElementById(l),r=l=>JSON.parse(JSON.stringify(l)),L=(l,k)=>Math.floor(Math.random()*(k-l+1))+l,q=(l,k)=>Math.random()*(k-l)+l,b=l=>l[Math.floor(Math.random()*l.length)],x=(l,k,P)=>Math.min(P,Math.max(k,l)),C=l=>l.reduce((k,P)=>k+P,0),F=()=>`${Date.now().toString(36)}_${(f++).toString(36)}_${L(100,999)}`,z={attack:{label:"Ataque",tip:"Aumenta el daño base que infliges en combate."},defense:{label:"Defensa",tip:"Reduce parte del daño recibido en cada impacto."},speed:{label:"Velocidad",tip:"Mejora la iniciativa y el ritmo de tus acciones."},hp:{label:"Vida máxima",tip:"Determina la cantidad total de salud disponible."},crit:{label:"Golpe crítico",tip:"Probabilidad de infligir daño crítico aumentado."},dodge:{label:"Esquiva",tip:"Probabilidad de evitar por completo un golpe enemigo."},block:{label:"Bloqueo",tip:"Probabilidad de mitigar una parte importante del daño."},lifesteal:{label:"Robo de vida",tip:"Porcentaje del daño convertido en curación propia."},attackPct:{label:"Ataque %",tip:"Multiplicador porcentual al ataque base."},defensePct:{label:"Defensa %",tip:"Multiplicador porcentual a la defensa base."},hpPct:{label:"Vida %",tip:"Multiplicador porcentual a la vida máxima."},speedPct:{label:"Velocidad %",tip:"Multiplicador porcentual a la velocidad base."},goldPct:{label:"Oro %",tip:"Incrementa el oro obtenido en actividades."},lootLuck:{label:"Suerte de botín",tip:"Mejora ligeramente la calidad y la frecuencia del botín."},regenPct:{label:"Regeneración %",tip:"Incrementa la recuperación pasiva de recursos."}},R={common:{name:"Común",tone:"text-slate-200 border-white/10 bg-white/[0.04]"},uncommon:{name:"Infrecuente",tone:"text-emerald-200 border-emerald-300/20 bg-emerald-400/10"},rare:{name:"Raro",tone:"text-sky-200 border-sky-300/24 bg-sky-400/10"},epic:{name:"Épico",tone:"text-violet-200 border-violet-300/24 bg-violet-400/10"},legendary:{name:"Legendario",tone:"text-amber-200 border-amber-300/24 bg-amber-400/10"},mythic:{name:"Mítico",tone:"text-fuchsia-200 border-fuchsia-300/24 bg-fuchsia-400/10"}},A={all:"Todo",weapon:"Armas",offhand:"Mano izquierda",helm:"Cascos",chest:"Armaduras",gloves:"Guantes",boots:"Botas",ring:"Anillos",amulet:"Amuletos",common:"Común",uncommon:"Infrecuente",rare:"Raro",epic:"Épico",legendary:"Legendario",mythic:"Mítico"};function K(l,k=0){return Number(l||0).toLocaleString("es-ES",{maximumFractionDigits:k})}function m(l){return`${K((l||0)*100,1)}%`}function t(l=""){return String(l).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function g(l=""){const k=String(l),P=[];let H=k;return[/<\/?b>/gi,/<br\s*\/?>/gi,/<span class="rarity-(common|uncommon|rare|epic|legendary|mythic)">/gi,/<\/span>/gi].forEach(W=>{H=H.replace(W,ee=>{const oe=`__SAFE_HTML_${P.length}__`;return P.push({token:oe,match:ee}),oe})}),H=t(H),P.forEach(({token:W,match:ee})=>{H=H.replace(W,ee)}),H}function E(l,k=2){return Number(l.toFixed(k))}function p(l){return(z[l]||{}).label||l}function $(l){return(z[l]||{}).tip||""}function M(l){return(R[l]||R.common).name}function D(l){const k=R[l]||R.common;return`<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.14em] ${k.tone}">${k.name}</span>`}function e(l){return A[l]||l}function n(l,k,P="",H=""){return`
      <div class="stat-pill rounded-2xl px-3 py-3"${H?` data-tooltip="${String(H).replace(/"/g,"&quot;")}"`:""}>
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/70">${l}</div>
        <div class="text-lg font-display font-extrabold tracking-[0.01em] text-white">${k}</div>
        ${P?`<div class="mt-1 text-xs leading-relaxed text-slate-300/65">${P}</div>`:""}
      </div>
    `}function c(l,k,P,H,Z=""){const W=k<=0?0:x(l/k*100,0,100);return`
      <div${Z?` data-tooltip="${String(Z).replace(/"/g,"&quot;")}"`:""}>
        <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
          <span class="font-medium tracking-[0.01em]">${H}</span>
          <span class="font-semibold text-slate-100">${K(l,l%1?1:0)} / ${K(k,k%1?1:0)}</span>
        </div>
        <div class="bar">
          <span class="relative flex h-full rounded-full ${P}" style="width:${W}%">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
          </span>
        </div>
      </div>
    `}function h(l){return a.find(k=>k.key===l)||a[0]}function y(l,k){return!k||typeof k!="object"||Object.keys(k).forEach(P=>{const H=k[P];Array.isArray(H)?l[P]=H:H&&typeof H=="object"?((!l[P]||typeof l[P]!="object"||Array.isArray(l[P]))&&(l[P]={}),y(l[P],H)):l[P]=H}),l}function o(){return{attack:0,defense:0,speed:0,hp:0,crit:0,dodge:0,block:0,lifesteal:0,attackPct:0,defensePct:0,hpPct:0,speedPct:0,goldPct:0,lootLuck:0,regenPct:0}}function u(l,k){return Object.keys(k||{}).forEach(P=>{l[P]=(l[P]||0)+k[P]}),l}function v(l=Date.now()){const k=new Date(l),P=k.getFullYear(),H=String(k.getMonth()+1).padStart(2,"0"),Z=String(k.getDate()).padStart(2,"0");return`${P}-${H}-${Z}`}function B(l){const k=Math.max(0,l-Date.now()),P=Math.ceil(k/1e3),H=Math.floor(P/60),Z=P%60;return H?`${H}m ${String(Z).padStart(2,"0")}s`:`${Z}s`}function O(l=1,k=0){const P=Math.random()-Math.min(.16,k*.035)-Math.min(.06,l*7e-4);return P<.0012?h("mythic"):P<.01?h("legendary"):P<.052?h("epic"):P<.19?h("rare"):P<.48?h("uncommon"):h("common")}function d(l,k){return(i[l]||[]).find(P=>P.name===k)||b(i[l]||[])}function V(l,k){return l+Math.max(0,Math.floor(k/4))*.85}window.AetherUtils={$:S,clone:r,rand:L,randf:q,pick:b,clamp:x,sum:C,uid:F,fmt:K,pct:m,escapeHtml:t,sanitizeInlineHtml:g,softRound:E,statLabel:p,statTooltip:$,rarityName:M,rarityBadge:D,translateFilter:e,htmlStat:n,progressBar:c,rarityDef:h,deepMerge:y,emptyStats:o,addStats:u,localDayKey:v,timeLeft:B,pickRarity:O,findBaseItem:d,scaledStatValue:V}})();const dt=a=>{let i;const f=new Set,S=(C,F)=>{const z=typeof C=="function"?C(i):C;if(!Object.is(z,i)){const R=i;i=F??(typeof z!="object"||z===null)?z:Object.assign({},i,z),f.forEach(A=>A(i,R))}},r=()=>i,b={setState:S,getState:r,getInitialState:()=>x,subscribe:C=>(f.add(C),()=>f.delete(C))},x=i=a(S,r,b);return b},Ra=a=>a?dt(a):dt,Da=a=>(i,f,S)=>{const r=S.subscribe;return S.subscribe=(q,b,x)=>{let C=q;if(b){const F=(x==null?void 0:x.equalityFn)||Object.is;let z=q(S.getState());C=R=>{const A=q(R);if(!F(z,A)){const K=z;b(z=A,K)}},x!=null&&x.fireImmediately&&b(z,z)}return r(C)},a(i,f,S)},Ta=Da;function qa(a){const{ITEM_BASES:i,AFFIXES:f,SLOT_ORDER:S,pick:r,rand:L,uid:q,softRound:b,rarityDef:x,pickRarity:C,findBaseItem:F,scaledStatValue:z,getLootLuck:R}=a;function A($){const M=1+($.upgrade||0)*.12,D={};return Object.entries($.stats||{}).forEach(([e,n])=>{e==="crit"||e==="dodge"||e==="block"||e==="lifesteal"?D[e]=b(n+($.upgrade||0)*.002,4):D[e]=b(n*M,2)}),D}function K($){const M=A($);return b((M.attack||0)*2.1+(M.defense||0)*1.85+(M.speed||0)*1.45+(M.hp||0)*.18+(M.crit||0)*120+(M.dodge||0)*90+(M.block||0)*70+(M.lifesteal||0)*140,1)}function m($,M,D=null,e=null,n=0){const c=e?F($,e):r(i[$]),h=D?x(D):C(M,R()),y={};Object.entries(c.stats).forEach(([l,k])=>{const P=typeof k=="number"?l==="crit"||l==="dodge"||l==="block"||l==="lifesteal"?k+Math.max(0,M-1)*5e-4:z(k,M):k;y[l]=b(P*h.mult,3)});const o=Math.min(5,h.affixes+n),u=new Set,v=[];for(let l=0;l<o;l++){let k=r(f),P=0;for(;u.has(k.prefix||k.suffix)&&P<20;)k=r(f),P+=1;u.add(k.prefix||k.suffix),v.push(k),Object.entries(k.stats).forEach(([H,Z])=>{const W=H==="crit"||H==="dodge"||H==="block"||H==="lifesteal"?Z+Math.max(0,M-1)*5e-4:z(Z,M);y[H]=b((y[H]||0)+W,3)})}const B=[],O=v.find(l=>l.prefix),d=v.find(l=>l.suffix);O&&B.push(O.prefix),B.push(c.name),d&&B.push(d.suffix);const V={id:q(),slot:$,name:B.join(" "),rarity:h.key,level:M,baseName:c.name,stats:y,affixes:v.map(l=>l.prefix||l.suffix),value:Math.max(12,Math.round((h.value+M*8)*(1+o*.18))),upgrade:0,createdAt:Date.now()};return V.score=K(V),V}function t($,M){const D=m($,1,"common",M,0);return D.affixes=[],D.name=M,D.score=K(D),D}function g($=1){const M=Math.random();return $>=32&&M<.0015?"mythic":$>=24&&M<.012?"legendary":$>=16&&M<.055?"epic":$>=8&&M<.22?"rare":M<.58?"uncommon":"common"}function E($=1){const M=[],D=6+Math.min(2,Math.floor($/12)),e={common:1.05,uncommon:1.16,rare:1.48,epic:2.05,legendary:3.1,mythic:4.8};for(let n=0;n<D;n++){const c=r(S),h=g($),y=m(c,Math.max(1,$+L(-1,3)),h);y.price=Math.round(y.value*e[y.rarity]*(1+Math.max(0,$-1)*.015)),M.push(y)}return M.sort((n,c)=>(c.price||0)-(n.price||0))}function p(){return[t("helm","Yelmo de Bronce"),t("boots","Sandalias de Arena"),m("ring",1,"uncommon")]}return{scaleItemStats:A,computeItemScore:K,makeItem:m,makeStarterItem:t,generateMarket:E,starterInventory:p}}function Va(a){const{SLOT_ORDER:i,emptyStats:f,addStats:S,softRound:r,clamp:L}=a,q={sig:"",value:null};function b(){q.sig="",q.value=null}function x(m,t){const g=t(),E=f();if(!g||!m.player.petLevel)return E;const p=1+m.player.petLevel*.16;return Object.entries(g.bonus).forEach(([$,M])=>{E[$]=r((E[$]||0)+M*p,4)}),E}function C(m){const t=m.player.guild,g=f();return g.attackPct+=t.barracks*.03,g.defensePct+=t.barracks*.02,g.goldPct+=t.treasury*.08,g.hpPct+=t.sanctuary*.05,g.regenPct+=t.sanctuary*.08,g.lootLuck+=t.hunters*.05,g}function F(m){const t=m.player.relics,g=f();return g.attackPct+=t.wrath*.04,g.goldPct+=t.fortune*.05,g.lootLuck+=t.fortune*.03,g.hpPct+=t.vitality*.06,g.regenPct+=t.vitality*.06,g.speedPct+=t.momentum*.03,g}function z(m,t){const g=f();return i.forEach(E=>{const p=m.player.equipment[E];p&&S(g,t(p))}),g}function R(m){const t=m.player.training;return{attack:t.strength*2.2,defense:t.endurance*1.3,speed:t.agility*1.5,hp:t.endurance*16,crit:t.agility*.002,dodge:t.agility*.002,block:t.endurance*.0015,lifesteal:t.strength*8e-4}}function A(m,t){if(!m.player)return{attack:14,defense:10,speed:8,maxHp:140,crit:.06,dodge:.04,block:.03,lifesteal:0,maxEnergy:100,maxStamina:12,goldPct:0,lootLuck:0,regenPct:0};const{getPetData:g,scaleItemStats:E}=t,p=m.player,$=[p.level,p.baseStats.attack,p.baseStats.defense,p.baseStats.speed,p.baseStats.crit,p.baseStats.dodge,p.baseStats.block,p.baseStats.lifesteal,p.training.strength,p.training.agility,p.training.endurance,p.training.discipline,p.guild.barracks,p.guild.treasury,p.guild.sanctuary,p.guild.hunters,p.guild.arsenal,p.relics.wrath,p.relics.fortune,p.relics.vitality,p.relics.momentum,p.pet||"",p.petLevel||0,...i.map(k=>{const P=p.equipment[k];return P?`${P.id}:${P.level}:${P.upgrade||0}:${P.rarity}:${P.reforge||0}`:"-"})].join("|");if(q.sig===$&&q.value)return q.value;const M=p.level,D={attack:p.baseStats.attack+M*3.2,defense:p.baseStats.defense+M*2.45,speed:p.baseStats.speed+M*1.2,hp:120+M*34,crit:p.baseStats.crit,dodge:p.baseStats.dodge,block:p.baseStats.block,lifesteal:p.baseStats.lifesteal,maxEnergy:100+p.training.discipline*5+p.relics.momentum*10,maxStamina:12+Math.floor(p.training.discipline/4)+p.relics.momentum},e=z(m,E),n=R(m),c=C(m),h=F(m),y=x(m,g);let o=D.attack+(e.attack||0)+(n.attack||0),u=D.defense+(e.defense||0)+(n.defense||0),v=D.speed+(e.speed||0)+(n.speed||0),B=D.hp+(e.hp||0)+(n.hp||0);const O=(c.attackPct||0)+(h.attackPct||0)+(y.attackPct||0),d=(c.defensePct||0)+(y.defensePct||0),V=(c.hpPct||0)+(h.hpPct||0)+(y.hpPct||0),l=(h.speedPct||0)+(y.speedPct||0);return o*=1+O,u*=1+d,B*=1+V,v*=1+l,q.sig=$,q.value={attack:r(o,2),defense:r(u,2),speed:r(v,2),maxHp:Math.round(B),crit:L(D.crit+(e.crit||0)+(n.crit||0)+(y.crit||0),0,.7),dodge:L(D.dodge+(e.dodge||0)+(n.dodge||0)+(y.dodge||0),0,.55),block:L(D.block+(e.block||0)+(n.block||0)+(y.block||0),0,.5),lifesteal:L(D.lifesteal+(e.lifesteal||0)+(n.lifesteal||0),0,.45),maxEnergy:D.maxEnergy,maxStamina:D.maxStamina,goldPct:(c.goldPct||0)+(y.goldPct||0)+(h.goldPct||0),lootLuck:(c.lootLuck||0)+(y.lootLuck||0)+(h.lootLuck||0),regenPct:(c.regenPct||0)+(y.regenPct||0)+(h.regenPct||0)},q.value}function K(m,t){return m.player&&A(m,t).lootLuck||0}return{invalidateDerivedCache:b,petBonus:x,getGuildBonus:C,getRelicBonus:F,getEquipmentBonus:z,getTrainingBonus:R,getDerivedStats:A,getLootLuck:K}}function Ba(a){const{pick:i,uid:f,makeStarterItem:S,starterInventory:r,generateMarket:L}=a;function q(C){return Math.round(95+Math.pow(C,1.46)*48)}function b(C=1){const F=[{type:"kills",title:"Barrido de rivales",desc:"Derrota enemigos en la arena.",target:7+Math.floor(C*1.6),reward:{gold:120+C*20,xp:60+C*14,essence:1}},{type:"wins",title:"Clamor del publico",desc:"Gana combates de arena.",target:4+Math.floor(C*.6),reward:{gold:140+C*24,xp:65+C*15,potions:1}},{type:"earnGold",title:"Bolsillos pesados",desc:"Obten oro por cualquier medio.",target:320+C*90,reward:{gold:150+C*22,xp:70+C*12,shards:1}},{type:"crafts",title:"Acero fresco",desc:"Forja o mejora equipo.",target:2+Math.floor(C/7),reward:{gold:180+C*18,xp:60+C*16,iron:3}},{type:"expeditions",title:"Rutas peligrosas",desc:"Completa expediciones.",target:2+Math.floor(C/8),reward:{gold:160+C*18,xp:72+C*14,wood:3}},{type:"dungeons",title:"Hedor profundo",desc:"Supera incursiones en mazmorra.",target:1+Math.floor(C/10),reward:{gold:220+C*18,xp:95+C*18,keys:1}},{type:"salvaged",title:"Chatarra util",desc:"Recicla equipo sobrante.",target:3+Math.floor(C/7),reward:{gold:130+C*18,xp:55+C*13,essence:2}},{type:"elites",title:"Sangre de elite",desc:"Derrota enemigos elite.",target:1+Math.floor(C/9),reward:{gold:240+C*20,xp:90+C*17,shards:1}}],z=[],R=[];for(;z.length<4&&R.length<F.length;){const A=i(F);R.includes(A.type)||(R.push(A.type),z.push({id:f(),type:A.type,title:A.title,desc:A.desc,progress:0,target:A.target,reward:A.reward,completed:!1,claimed:!1}))}return z}function x(){return{version:4,currentView:"resumen",currentTab:"resumen",ui:{inventoryFilter:"all",inventoryPage:1,inventoryPageSize:18,journalPage:1,journalPageSize:16,modal:null,forgePreview:null,moreMenuOpen:!1},player:{name:"Aurelio",title:"Novato del Coliseo",level:1,xp:0,gold:260,shards:0,iron:16,wood:12,essence:5,food:6,potions:3,keys:2,hp:140,energy:100,stamina:12,baseStats:{attack:14,defense:10,speed:8,crit:.06,dodge:.04,block:.03,lifesteal:0},training:{strength:0,agility:0,endurance:0,discipline:0},guild:{barracks:0,treasury:0,sanctuary:0,hunters:0,arsenal:0},relics:{wrath:0,fortune:0,vitality:0,momentum:0},pet:null,petLevel:0,petXp:0,activeSkills:["powerStrike","quickLunge","fortify"],unlockedSkills:["powerStrike","quickLunge","fortify"],skillLevels:{powerStrike:1,quickLunge:1,fortify:1,shieldBash:1,bloodRage:1,whirlwind:1,execution:1,venomCut:1,berserk:1,celestialEdge:1},skillPoints:0,attributePoints:0,zoneId:0,highestDungeonFloor:1,ascension:0,relicDust:0,equipment:{weapon:S("weapon","Gladius"),offhand:S("offhand","Escudo de Torre"),helm:null,chest:S("chest","Coraza Segmentada"),gloves:null,boots:null,ring:null,amulet:null},inventory:r()},stats:{wins:0,losses:0,kills:0,damageDone:0,damageTaken:0,crits:0,questsCompleted:0,crafted:0,salvaged:0,earnedGold:0,expeditions:0,dungeons:0,elites:0,legendaryFound:0},quests:b(1),claimedAchievements:[],timers:{job:null,expedition:null},market:{items:L(1),lastRefresh:Date.now()},journal:[{id:f(),ts:Date.now(),icon:"⚔️",text:"Has entrado en Aether Arena. El coliseo huele a hierro, oro y gloria."}],streak:{lastClaimDay:null,days:0},combatHistory:[],lastTick:Date.now(),lastSave:0}}return{xpNeeded:q,defaultQuests:b,makeDefaultState:x}}function Oa(a){const{state:i,PETS:f,sum:S,statsDomain:r,scaleItemStats:L}=a;function q(){return 28+i.player.guild.arsenal*8+i.player.ascension*2}function b(){return S(Object.values(i.player.guild||{}))}function x(){return f.find(t=>t.id===i.player.pet)||null}function C(){return r.petBonus(i,x)}function F(){return r.getGuildBonus(i)}function z(){return r.getRelicBonus(i)}function R(){return r.getEquipmentBonus(i,L)}function A(){return r.getTrainingBonus(i)}function K(){return r.getDerivedStats(i,{getPetData:x,scaleItemStats:L})}function m(){return r.getLootLuck(i,{getPetData:x,scaleItemStats:L})}return{maxInventory:q,guildTotal:b,getPetData:x,petBonus:C,getGuildBonus:F,getRelicBonus:z,getEquipmentBonus:R,getTrainingBonus:A,getDerivedStats:K,getLootLuck:m}}function Na(a){const{clone:i,statsDomain:f,makeDefaultState:S,createStore:r,subscribeWithSelector:L}=a,q=new Set(["_meta","actions"]),b={};function x(m={}){return{hydrated:!1,isDirty:!1,isSaving:!1,lastMutationAt:0,lastMutationLabel:"bootstrap",mutationCount:0,lastSaveAt:0,saveCount:0,lastSource:"bootstrap",syncRevision:0,...m}}function C(m=null){const t=m||b,g={};return Object.keys(t||{}).forEach(E=>{q.has(E)||(g[E]=i(t[E]))}),g}function F(m=null){const t=C(m);return t.ui&&(t.ui.modal=null,t.ui.moreMenuOpen=!1,t.ui.forgePreview=null),t}function z(m){Object.keys(b).forEach(t=>delete b[t]),Object.assign(b,m),f.invalidateDerivedCache()}const R=r(L(()=>({...i(S()),_meta:x(),actions:{}})));function A(){return z(C(R.getState())),b}function K(m,t={},g=!0){const E=R.getState(),p=x({...E._meta||{},...t}),$={...i(m),_meta:p,actions:E.actions||{}};return R.setState($,g),A()}return{state:b,gameStore:R,createStoreMeta:x,snapshotGameData:C,serializableState:F,replaceState:z,syncStateFromStore:A,setStoreSnapshot:K}}function za(a){const{state:i,gameStore:f,clone:S,snapshotGameData:r,replaceState:L,normalizeState:q,createStoreMeta:b,setStoreSnapshot:x}=a;function C(){return f.getState()._meta||b()}function F(m={}){const t=f.getState();return f.setState({...t,_meta:b({...t._meta||{},...m})}),C()}function z(m={},t=!0){return x(i,m,t)}function R(m,t,g={}){const E=r(f.getState());try{L(S(E)),typeof t=="function"&&t(i),g.normalize&&q();const p=C();return z({hydrated:!0,isDirty:g.markDirty===!1?p.isDirty:!0,isSaving:!1,lastMutationAt:Date.now(),lastMutationLabel:m||"mutation",mutationCount:(p.mutationCount||0)+1,lastSource:g.source||"local"})}catch(p){throw L(E),p}}function A(m,t,g){return typeof m=="function"&&typeof t=="function"?f.subscribe(m,t,g):f.subscribe(m)}function K(m){return typeof m=="function"?m(f.getState()):f.getState()}return{getStoreMeta:C,setStoreMeta:F,commitWorkingState:z,mutate:R,subscribeStore:A,selectStore:K}}function Ha(a){const{STORAGE_KEY:i,state:f,makeDefaultState:S,clone:r,snapshotGameData:L,serializableState:q,replaceState:b,normalizeState:x,commitWorkingState:C,setStoreMeta:F,getStoreMeta:z}=a;function R(g,E="storage"){b(r(g||S())),x();const p=Date.now();return C({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:f.lastSave||p,lastSource:E,syncRevision:E==="external-sync"?z().syncRevision+1:z().syncRevision})}function A(){try{const g=Date.now();F({isSaving:!0});const E=q();return E.lastSave=g,localStorage.setItem(i,JSON.stringify(E)),b(L()),f.lastSave=g,C({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:g,saveCount:(z().saveCount||0)+1,lastSource:"save"}),!0}catch(g){return console.warn("No se pudo guardar la partida.",g),F({isSaving:!1}),!1}}function K(){try{const g=localStorage.getItem(i);return g?R(JSON.parse(g),"storage"):R(S(),"new-game")}catch(g){return console.warn("Guardado corrupto, creando uno nuevo.",g),R(S(),"recovered")}}function m(g){try{return R(g?JSON.parse(g):S(),"external-sync")}catch(E){return console.warn("No se pudo sincronizar el estado externo.",E),!1}}function t(){return localStorage.removeItem(i),R(S(),"reset")}return{loadFromParsedState:R,saveGame:A,loadGame:K,syncExternalState:m,hardReset:t}}(()=>{const{STORAGE_KEY:a,SLOT_ORDER:i,ITEM_BASES:f,AFFIXES:S,PETS:r,SKILLS:L}=window.AetherConfig,{clone:q,rand:b,pick:x,clamp:C,sum:F,uid:z,softRound:R,rarityDef:A,deepMerge:K,emptyStats:m,addStats:t,localDayKey:g,pickRarity:E,findBaseItem:p,scaledStatValue:$}=window.AetherUtils,M=Va({SLOT_ORDER:i,emptyStats:m,addStats:t,softRound:R,clamp:C});let D=()=>0;const{scaleItemStats:e,computeItemScore:n,makeItem:c,makeStarterItem:h,generateMarket:y,starterInventory:o}=qa({ITEM_BASES:f,AFFIXES:S,SLOT_ORDER:i,pick:x,rand:b,uid:z,softRound:R,rarityDef:A,pickRarity:E,findBaseItem:p,scaledStatValue:$,getLootLuck:()=>D()}),{xpNeeded:u,defaultQuests:v,makeDefaultState:B}=Ba({pick:x,uid:z,makeStarterItem:h,starterInventory:o,generateMarket:y}),O=Na({clone:q,statsDomain:M,makeDefaultState:B,createStore:Ra,subscribeWithSelector:Ta}),{state:d,gameStore:V,createStoreMeta:l,snapshotGameData:k,serializableState:P,replaceState:H,syncStateFromStore:Z,setStoreSnapshot:W}=O,ee=Oa({state:d,PETS:r,sum:F,statsDomain:M,scaleItemStats:e}),{maxInventory:oe,guildTotal:T,getPetData:I,petBonus:N,getGuildBonus:Q,getRelicBonus:ne,getEquipmentBonus:ce,getTrainingBonus:fe,getDerivedStats:Ie,getLootLuck:Pe}=ee;D=Pe,Z();function Ee(te=null){const de=d.player,Le=[];return Object.values(L).forEach(je=>{de.level>=je.unlockLevel&&!de.unlockedSkills.includes(je.id)&&(de.unlockedSkills.push(je.id),Le.push(je))}),typeof te=="function"&&Le.forEach(je=>te(je)),Le}function he(){const te=B();H(K(te,q(d))),d.currentView=d.currentView||d.currentTab||"resumen",d.currentTab=d.currentView,d.ui.moreMenuOpen=!!d.ui.moreMenuOpen,d.player.inventory||(d.player.inventory=[]),d.player.equipment||(d.player.equipment=te.player.equipment),d.player.guild||(d.player.guild=te.player.guild),d.player.training||(d.player.training=te.player.training),d.player.relics||(d.player.relics=te.player.relics),d.player.skillLevels||(d.player.skillLevels=te.player.skillLevels),d.player.activeSkills||(d.player.activeSkills=te.player.activeSkills),d.player.unlockedSkills||(d.player.unlockedSkills=te.player.unlockedSkills),d.quests||(d.quests=te.quests),(!d.market||!d.market.items)&&(d.market=te.market),d.stats||(d.stats=te.stats),d.claimedAchievements||(d.claimedAchievements=[]),d.combatHistory||(d.combatHistory=[]),d.journal||(d.journal=te.journal),d.streak||(d.streak=te.streak),d.timers||(d.timers=te.timers),d.ui||(d.ui=te.ui),d.ui.inventoryFilter=d.ui.inventoryFilter||"all",d.ui.inventoryPage=Math.max(1,Number(d.ui.inventoryPage)||1),d.ui.inventoryPageSize=Math.max(6,Number(d.ui.inventoryPageSize)||te.ui.inventoryPageSize),d.ui.journalPage=Math.max(1,Number(d.ui.journalPage)||1),d.ui.journalPageSize=Math.max(8,Number(d.ui.journalPageSize)||te.ui.journalPageSize),Ee();const de=Ie();d.player.hp=C(d.player.hp||de.maxHp,1,de.maxHp),d.player.energy=C(d.player.energy??de.maxEnergy,0,de.maxEnergy),d.player.stamina=C(d.player.stamina??de.maxStamina,0,de.maxStamina),d.player.title=d.player.title||"Novato del Coliseo",d.lastTick=d.lastTick||Date.now(),d.lastSave=d.lastSave||0}const Be=za({state:d,gameStore:V,clone:q,snapshotGameData:k,replaceState:H,normalizeState:he,createStoreMeta:l,setStoreSnapshot:W}),{getStoreMeta:w,setStoreMeta:G,commitWorkingState:ae,mutate:ie,subscribeStore:se,selectStore:U}=Be,X=Ha({STORAGE_KEY:a,state:d,makeDefaultState:B,clone:q,snapshotGameData:k,serializableState:P,replaceState:H,normalizeState:he,commitWorkingState:ae,setStoreMeta:G,getStoreMeta:w}),{saveGame:me,loadGame:be,syncExternalState:ge,hardReset:Ae}=X,_e={mutate:ie,saveGame:me,loadGame:be,hardReset:Ae,setMeta:G,syncExternalState:ge};V.setState({...V.getState(),actions:_e}),Z(),window.AetherModel={state:d,store:V,replaceState:H,snapshotGameData:k,mutate:ie,subscribeStore:se,selectStore:U,getStoreMeta:w,setStoreMeta:G,syncExternalState:ge,makeItem:c,makeStarterItem:h,scaleItemStats:e,computeItemScore:n,xpNeeded:u,defaultQuests:v,generateMarket:y,starterInventory:o,makeDefaultState:B,maxInventory:oe,guildTotal:T,getPetData:I,petBonus:N,getGuildBonus:Q,getRelicBonus:ne,getEquipmentBonus:ce,getTrainingBonus:fe,getDerivedStats:Ie,getLootLuck:Pe,ensureUnlockedSkills:Ee,normalizeState:he,saveGame:me,loadGame:be,hardReset:Ae}})();function _a(a){const{SKILLS:i,pick:f,rand:S,randf:r,clamp:L,softRound:q,uid:b}=a;function x(e){return{berserker:{attack:1.12,defense:.92,speed:1.03,crit:.04,dodge:.01,block:0,lifesteal:.02},guardian:{attack:.9,defense:1.18,speed:.92,crit:.01,dodge:.02,block:.05,lifesteal:0},assassin:{attack:1,defense:.86,speed:1.22,crit:.06,dodge:.05,block:.01,lifesteal:0},beast:{attack:1.08,defense:.95,speed:1.09,crit:.03,dodge:.03,block:0,lifesteal:.03},occult:{attack:1.03,defense:.94,speed:1.05,crit:.05,dodge:.02,block:.02,lifesteal:0}}[e]||{attack:1,defense:1,speed:1,crit:0,dodge:0,block:0,lifesteal:0}}function C({zone:e,kind:n="normal",playerLevel:c=1,playerAscension:h=0,wins:y=0}){const o=Math.pow(c,.88)*.04,u=e&&typeof e.id=="number"?e.id*.25:0,v=h*.25,B=Math.min(y/60,3),O=n==="elite"?.3:n==="boss"?.6:0;return 1+o+u+v+B+O}function F({zone:e,kind:n="normal",extraScale:c=0,playerLevel:h=1,playerAscension:y=0,wins:o=0}){const v=f(["berserker","guardian","assassin","beast","occult"]),B=x(v),O=Math.max(1,Math.round(e.unlockLevel+h*.95+e.id*1.8+c+S(-1,2))),d=n==="elite"?1.3:n==="boss"?1.6:1,V=C({zone:e,kind:n,playerLevel:h,playerAscension:y,wins:o}),l=(12+O*3.4)*B.attack*d*V,k=(8+O*2.8)*B.defense*d*V,P=(120+O*34)*(n==="boss"?2.1:n==="elite"?1.5:1)*V,H=(7+O*1.08)*B.speed*V,Z=n==="boss"?e.boss:f(e.enemies),W={berserker:{name:"Furia salvaje",mult:1.45,cooldown:3},guardian:{name:"Muro de carne",mult:.9,cooldown:4,selfBuff:{defensePct:.2,turns:2}},assassin:{name:"Deguello",mult:1.2,cooldown:3,critBonus:.18},beast:{name:"Desgarro",mult:1.08,cooldown:3,dot:{turns:2,ratio:.12,label:"Sangrado"}},occult:{name:"Maldicion",mult:1.15,cooldown:4,armorBreak:{pct:.14,turns:2}}}[v];return{id:b(),name:Z,zoneId:e.id,kind:n,archetype:v,level:O,maxHp:Math.round(P),hp:Math.round(P),attack:q(l,2),defense:q(k,2),speed:q(H,2),crit:L(.06+B.crit+(n==="boss"?.03:n==="elite"?.015:0)+(V-1)*.015,0,.55),dodge:L(.025+B.dodge+(n==="boss"?.02:n==="elite"?.01:0)+(V-1)*.012,0,.45),block:L(.015+B.block+(n==="boss"?.04:n==="elite"?.02:0)+(V-1)*.012,0,.4),lifesteal:L(B.lifesteal+(n==="boss"?.01:n==="elite"?.005:0)+(V-1)*.008,0,.25),skill:W,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0}}function z(e,n){return{id:"player",name:e.name,maxHp:n.maxHp,hp:Math.round(e.hp),attack:n.attack,defense:n.defense,speed:n.speed,crit:n.crit,dodge:n.dodge,block:n.block,lifesteal:n.lifesteal,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0,activeSkills:(e.activeSkills||[]).filter(c=>(e.unlockedSkills||[]).includes(c))}}function R(e,n){return e.buffs.filter(c=>c.turns>0&&n in(c.values||{})).reduce((c,h)=>c+h.values[n],0)}function A(e,n){const c=`${n}Pct`;let h=e[n];return n==="defense"&&e.armorBreak&&e.armorBreak.turns>0&&(h*=1-e.armorBreak.pct),(n==="attack"||n==="defense"||n==="speed")&&(h*=1+R(e,c)),h+=R(e,n),h}function K(e,n){return 1+Math.max(0,(e&&e[n]||1)-1)*.08}function m(e,n,c){const h=e.activeSkills||[];for(const y of h){const o=i[y];if(o&&!(o.requireOffhand&&!c.equipment.offhand)&&!((e.cooldowns[y]||0)>0)&&!(o.executeThreshold&&n.hp/n.maxHp>o.executeThreshold))return o}return null}function t(e){return!e.skill||(e.cooldowns.special||0)>0?null:e.skill}function g(e,n){e.dots=e.dots.filter(c=>{if(c.turns<=0)return!1;const h=Math.round(c.damage);return e.hp-=h,n.push(`☠️ ${e.name} sufre ${h} por ${c.label}.`),c.turns-=1,c.turns>0}),e.buffs.forEach(c=>{c.turns-=1}),e.buffs=e.buffs.filter(c=>c.turns>0),e.armorBreak&&(e.armorBreak.turns-=1,e.armorBreak.turns<=0&&(e.armorBreak=null))}function E(e,n,c,h=1,y={},o=[]){const u=A(e,"attack"),v=A(n,"defense"),B=L((e.crit||0)+(y.critBonus||0),0,.85),O=L(n.dodge||0,0,.7);if(Math.random()<O)return o.push(`💨 ${n.name} esquiva ${c}.`),{damage:0,crit:!1,dodged:!0,blocked:!1};let d=u*h-v*.55;d=Math.max(u*.26,d),d*=r(.9,1.08);let V=!1;Math.random()<B&&(d*=1.68,V=!0);let l=!1;if(Math.random()<(n.block||0)&&(d*=.66,l=!0),d=Math.max(1,Math.round(d)),n.shield>0){const H=Math.min(n.shield,d);n.shield-=H,d-=H,H>0&&o.push(`🛡️ ${n.name} absorbe ${H} con un escudo.`)}if(d>0){n.hp-=d;const H=d*L((e.lifesteal||0)+(y.lifestealBonus||0),0,.9);H>0&&(e.hp=Math.min(e.maxHp,e.hp+Math.round(H)))}const k=V?" crítico":"",P=l?" (bloqueado parcialmente)":"";return o.push(`⚔️ ${e.name} usa ${c} y causa ${d}${k}${P}.`),{damage:d,crit:V,dodged:!1,blocked:l}}function p(e,n,c,h,y){if(!(!c||h.dodged)&&(c.armorBreak&&(n.armorBreak={pct:c.armorBreak.pct,turns:c.armorBreak.turns+1},y.push(`🧩 La armadura de ${n.name} queda expuesta.`)),c.dot&&h.damage>0&&(n.dots.push({damage:Math.max(3,e.attack*c.dot.ratio),turns:c.dot.turns,label:c.dot.label}),y.push(`🩸 ${n.name} queda afectado por ${c.dot.label}.`)),c.selfBuff)){if(e.buffs.push({turns:c.selfBuff.turns+1,values:{attackPct:c.selfBuff.attackPct||0,defensePct:c.selfBuff.defensePct||0,speedPct:c.selfBuff.speedPct||0}}),c.selfBuff.shieldPct){const o=Math.round(e.maxHp*c.selfBuff.shieldPct);e.shield+=o,y.push(`🛡️ ${e.name} obtiene un escudo de ${o}.`)}y.push(`✨ ${e.name} activa un refuerzo temporal.`)}}function $(e,n,c,h,y,o){if(e.hp<=0||n.hp<=0)return null;const u=c?m(e,n,h):t(e);if(!u){const d=E(e,n,"Golpe básico",1,{},o);return d.damage>0&&(c?y.damageDone+=d.damage:y.damageTaken+=d.damage),d}const v=(u.mult||1)*(c?K(h.skillLevels,u.id):1),B=u.hits||1;let O=null;for(let d=0;d<B;d++){const V={};u.critBonus&&(V.critBonus=u.critBonus),u.lifestealBonus&&(V.lifestealBonus=u.lifestealBonus);let l=v;if(u.executeThreshold&&n.hp/n.maxHp<=u.executeThreshold&&(l*=u.executeMult||1.6),O=E(e,n,u.name,l,V,o),O&&O.damage>0&&(c?y.damageDone+=O.damage:y.damageTaken+=O.damage),O&&O.crit&&c&&(y.crits+=1),n.hp<=0)break}return p(e,n,u,O||{dodged:!1,damage:0},o),c?e.cooldowns[u.id]=u.cooldown:e.cooldowns.special=u.cooldown,O}function M(e){Object.keys(e.cooldowns).forEach(n=>{e.cooldowns[n]=Math.max(0,(e.cooldowns[n]||0)-1)})}function D({enemy:e,playerState:n,derivedStats:c,zoneName:h,maxTurns:y=28}){const o=z(n,c),u=JSON.parse(JSON.stringify(e)),v=[`🏟️ <b>${o.name}</b> se enfrenta a <b>${u.name}</b> en <b>${h}</b>.`],B={damageDone:0,damageTaken:0,crits:0},O={equipment:n.equipment,skillLevels:n.skillLevels};let d=1;for(;o.hp>0&&u.hp>0&&d<=y&&(g(o,v),g(u,v),!(o.hp<=0||u.hp<=0));){const V=A(o,"speed")+r(0,3)>=A(u,"speed")+r(0,3)?[[o,u,!0],[u,o,!1]]:[[u,o,!1],[o,u,!0]];for(const[l,k,P]of V)if(!(l.hp<=0||k.hp<=0)&&($(l,k,P,O,B,v),k.hp<=0))break;M(o),M(u),d+=1}return{player:o,foe:u,log:v,statsDelta:B,victory:o.hp>0&&u.hp<=0}}return{enemyArchetypeMods:x,difficultyMultiplier:C,makeEnemy:F,buildPlayerCombatant:z,activeBuffValue:R,effectiveStat:A,skillLevelMult:K,choosePlayerSkill:m,chooseEnemySkill:t,decayStatuses:g,performHit:E,applySkillEffects:p,actorTurn:$,tickCooldowns:M,runCombat:D}}function Fa(a){const{rarityDef:i,rand:f,uid:S,clone:r,generateMarket:L,makeItem:q,computeItemScore:b}=a;function x(e,n){return e.player.inventory.length<n}function C(e,n){e.player.inventory=e.player.inventory.filter(c=>c.id!==n)}function F(e,n){return e.player.inventory.find(c=>c.id===n)}function z(e,n,c){if(!n)return;const{maxInventory:h,addJournal:y,trackQuest:o,checkAchievements:u}=c;if(!x(e,h)){const v=Math.round(n.value*.45);e.player.gold+=v,e.stats.earnedGold+=v,y("📦",`Inventario lleno. <span class="rarity-${n.rarity}">${n.name}</span> se convierte en ${v} de oro.`),o("earnGold",v);return}e.player.inventory.push(n),e.player.inventory.sort((v,B)=>i(B.rarity).value+B.score-(i(v.rarity).value+v.score)),(n.rarity==="legendary"||n.rarity==="mythic")&&(e.stats.legendaryFound+=1),u()}function R(e,n,c){const{addJournal:h}=c,y=F(e,n);if(!y)return;const o=y.slot,u=e.player.equipment[o];e.player.equipment[o]=y,C(e,n),u&&e.player.inventory.push(u),h("🧷",`Equipas <span class="rarity-${y.rarity}">${y.name}</span>.`)}function A(e,n,c){const{maxInventory:h,addJournal:y,toast:o}=c,u=e.player.equipment[n];if(!u||!x(e,h)){o("No hay espacio en el inventario","danger");return}e.player.inventory.push(u),e.player.equipment[n]=null,y("🎒",`Guardas ${u.name} en el inventario.`)}function K(e,n,c){const{trackQuest:h,addJournal:y}=c,o=F(e,n);if(!o)return;const u=Math.round(o.value*.65);e.player.gold+=u,e.stats.earnedGold+=u,h("earnGold",u),C(e,n),y("💰",`Vendes ${o.name} por ${u} de oro.`)}function m(e,n,c){const{trackQuest:h,addJournal:y}=c,o=F(e,n);if(!o)return;const u=i(o.rarity),v=Math.max(1,Math.round(o.level/3+u.affixes)),B=Math.max(0,Math.round(u.affixes/2)),O=o.rarity==="rare"?1:o.rarity==="epic"?2:o.rarity==="legendary"?4:o.rarity==="mythic"?6:0;e.player.iron+=v,e.player.wood+=B,e.player.essence+=O,e.stats.salvaged+=1,h("salvaged",1),C(e,n),y("♻️",`Reciclas ${o.name}: +${v} hierro, +${B} madera${O?`, +${O} esencia`:""}.`)}function t(e,n,c){const{toast:h,addJournal:y}=c,o=90+e.player.level*12;if(n){if(e.player.gold<o){h("No tienes oro suficiente para refrescar","danger");return}e.player.gold-=o}e.market.items=L(e.player.level),e.market.lastRefresh=Date.now(),y("🛒",`El mercado renueva su inventario${n?` por ${o} de oro`:""}.`)}function g(e,n,c){const{maxInventory:h,toast:y,addJournal:o,trackQuest:u,checkAchievements:v}=c,B=e.market.items.find(d=>d.id===n);if(!B)return;if(e.player.gold<B.price){y("Oro insuficiente","danger");return}if(!x(e,h)){y("Inventario lleno","danger");return}e.player.gold-=B.price;const O=r(B);O.id=S(),z(e,O,{maxInventory:h,addJournal:o,trackQuest:u,checkAchievements:v}),e.market.items=e.market.items.filter(d=>d.id!==n),o("🛍️",`Compras ${B.name} por ${B.price} de oro.`)}function E(e,n,c){const{toast:h,grantRewards:y}=c,u={potion:{price:120,reward:{potions:1},label:"Poción"},key:{price:180,reward:{keys:1},label:"Llave de mazmorra"},essence:{price:140,reward:{essence:1},label:"Esencia"},food:{price:65,reward:{food:2},label:"Comida"}}[n];if(u){if(e.player.gold<u.price){h("Oro insuficiente","danger");return}e.player.gold-=u.price,y(u.reward,u.label)}}function p(e,n,c,h){const{maxInventory:y,toast:o,addJournal:u,trackQuest:v,checkAchievements:B}=h,O=c==="premium"?{gold:260,iron:12,wood:7,essence:3}:{gold:140,iron:8,wood:4,essence:1};if(e.player.gold<O.gold||e.player.iron<O.iron||e.player.wood<O.wood||e.player.essence<O.essence){o("Te faltan materiales","danger");return}if(!x(e,y)){o("Inventario lleno","danger");return}e.player.gold-=O.gold,e.player.iron-=O.iron,e.player.wood-=O.wood,e.player.essence-=O.essence;let d=null;if(c==="premium"){const l=Math.random()-Math.min(.06,e.player.level*.0015);e.player.level>=22&&l<.025?d="legendary":l<.26?d="epic":d="rare"}const V=q(n,e.player.level+f(0,2),d,null,c==="premium"?1:0);z(e,V,{maxInventory:y,addJournal:u,trackQuest:v,checkAchievements:B}),e.stats.crafted+=1,v("crafts",1),u("🔨",`Forjas ${V.name}.`),h.toast(`Nuevo objeto: ${V.name}`,"gold")}function $(e,n,c){const{toast:h,trackQuest:y,addJournal:o}=c,u=e.player.equipment[n];if(!u){h("No tienes ese hueco equipado","danger");return}if((u.upgrade||0)>=10){h("Ese objeto ya está al máximo","cyan");return}const v=i(u.rarity),B=Math.round(90+u.level*18+u.upgrade*65+v.value*.4),O=Math.max(2,Math.round(3+u.upgrade*1.4+v.affixes)),d=u.upgrade>=6?1+Math.floor(u.upgrade/3):0;if(e.player.gold<B||e.player.iron<O||e.player.essence<d){h("No tienes materiales suficientes","danger");return}e.player.gold-=B,e.player.iron-=O,e.player.essence-=d,u.upgrade+=1,u.score=b(u),e.stats.crafted+=1,y("crafts",1),o("⚒️",`Mejoras ${u.name} a +${u.upgrade}.`)}function M(e,n,c){const{toast:h,addJournal:y}=c,o=F(e,n)||Object.values(e.player.equipment).find(B=>B&&B.id===n);if(!o)return;const u={gold:180,essence:2};if(e.player.gold<u.gold||e.player.essence<u.essence){h("Te faltan recursos para retemplar","danger");return}e.player.gold-=u.gold,e.player.essence-=u.essence;const v=q(o.slot,Math.max(o.level,e.player.level),o.rarity,o.baseName);o.stats=v.stats,o.affixes=v.affixes,o.name=v.name,o.score=b(o),y("🌀",`Retemplas ${o.baseName} y nace ${o.name}.`)}function D(e,n){const{toast:c,trackQuest:h,addJournal:y}=n,o=e.player.inventory.filter(v=>v.rarity==="common");if(!o.length){c("No hay chatarra común que vender","cyan");return}let u=0;o.forEach(v=>{u+=Math.round(v.value*.55)}),e.player.inventory=e.player.inventory.filter(v=>v.rarity!=="common"),e.player.gold+=u,e.stats.earnedGold+=u,h("earnGold",u),y("🧹",`Vendes automáticamente ${o.length} objetos comunes por ${u} de oro.`)}return{acquireItem:z,removeInventoryItem:C,getInventoryItem:F,equipItem:R,unequipItem:A,sellItem:K,salvageItem:m,refreshMarket:t,buyMarketItem:g,buyResource:E,forgeItem:p,upgradeEquipped:$,rerollItem:M,autoManage:D}}function Ga(a){const{JOBS:i,ZONES:f,clone:S,rand:r,pick:L,SLOT_ORDER:q,makeItem:b,clamp:x}=a;function C(m,t,g){const E=g(),p=E.maxHp*(.0033+E.regenPct*.01)*t,$=(.48+m.player.training.discipline*.02+m.player.relics.momentum*.04)*t,M=(.028+m.player.relics.momentum*.005)*t;m.player.hp=x(m.player.hp+p,1,E.maxHp),m.player.energy=x(m.player.energy+$,0,E.maxEnergy),m.player.stamina=x(m.player.stamina+M,0,E.maxStamina)}function F(m,t,g){const{toast:E,addJournal:p}=g,$=i.find(M=>M.id===t);if($){if(m.timers.job){E("Ya tienes un trabajo en curso","cyan");return}if(m.player.energy<12){E("Necesitas al menos 12 de energía","danger");return}m.player.energy-=12,m.timers.job={id:$.id,name:$.name,endAt:Date.now()+$.duration*1e3,reward:S($.reward),startedAt:Date.now()},p("🧰",`Comienzas el trabajo: <b>${$.name}</b>.`)}}function z(m,t,g){const{grantRewards:E,toast:p}=g;if(!m.timers.job)return;const $=m.timers.job;m.timers.job=null,E($.reward,`Trabajo terminado — ${$.name}`),t||p(`Trabajo completado: ${$.name}`,"success")}function R(m,t,g,E){const{isZoneUnlocked:p,toast:$,addJournal:M}=E,D=f.find(n=>n.id===t);if(!D||!p(D))return;if(m.timers.expedition){$("Ya estás en expedición","cyan");return}const e=D.energyCost+Math.floor(g/40);if(m.player.energy<e||m.player.stamina<D.staminaCost){$("No tienes recursos para partir","danger");return}m.player.energy-=e,m.player.stamina-=D.staminaCost,m.timers.expedition={zoneId:t,endAt:Date.now()+g*1e3,durationSec:g,startedAt:Date.now()},M("🧭",`Sales de expedición a <b>${D.name}</b> durante ${g}s.`)}function A(m,t,g){const{grantRewards:E,getDerivedStats:p,trackQuest:$,acquireItem:M,addJournal:D,toast:e}=g;if(!m.timers.expedition)return;const n=m.timers.expedition;m.timers.expedition=null;const c=f.find(o=>o.id===n.zoneId)||f[0],h=1+n.durationSec/90,y={gold:Math.round((90+c.id*50+m.player.level*16)*h*(1+p().goldPct)),xp:Math.round((55+c.id*35+m.player.level*12)*h),iron:r(1,3+c.id),wood:r(1,2+Math.floor(c.id/2)),essence:Math.random()<.45?r(1,2+Math.floor(c.id/2)):0,food:Math.random()<.5?1+Math.floor(c.id/2):0};if(E(y,`Expedición — ${c.name}`),m.stats.expeditions+=1,$("expeditions",1),Math.random()<.55+c.id*.03){const o=b(L(q),m.player.level+c.id,Math.random()<.12?"epic":null);M(o),D("🎒",`Encuentras <span class="rarity-${o.rarity}">${o.name}</span> en la expedición.`)}t||e(`Expedición completada: ${c.name}`,"success")}function K(m,t,g,E){const{completeJob:p,completeExpedition:$}=E;let M=!1;return m.timers.job&&m.timers.job.endAt<=t&&(p(g),M=!0),m.timers.expedition&&m.timers.expedition.endAt<=t&&($(g),M=!0),M}return{passiveRegen:C,startJob:F,completeJob:z,startExpedition:R,completeExpedition:A,resolveFinishedTimers:K}}function Ja(a){const{RANKS:i,ACHIEVEMENTS:f,clamp:S,clone:r,defaultQuests:L,makeDefaultState:q}=a;function b(t,g){const E=t.player.level*14+t.stats.wins*4+t.player.highestDungeonFloor*10+g()*8+t.player.ascension*60;let p=i[0];return i.forEach($=>{E>=$.min&&(p=$)}),p}function x(t,g,E){const{xpNeeded:p,ensureUnlockedSkills:$,getDerivedStats:M,currentRank:D,addJournal:e,toast:n}=E;if(!g)return;t.player.xp+=g;let c=0;for(;t.player.xp>=p(t.player.level);)t.player.xp-=p(t.player.level),t.player.level+=1,t.player.attributePoints+=4,t.player.skillPoints+=1,c+=1,$(y=>{e("✨",`Has desbloqueado la habilidad <b>${y.name}</b>.`),n(`Habilidad desbloqueada: ${y.name}`,"violet")});const h=M();c>0&&(t.player.hp=h.maxHp,t.player.energy=h.maxEnergy,t.player.stamina=S(t.player.stamina+c,0,h.maxStamina),t.player.title=D().title,e("🌟",`Subes al nivel <b>${t.player.level}</b>. Recibes puntos de atributo y habilidad.`),n(`Nivel ${t.player.level} alcanzado`,"gold"))}function C(t,g,E,p){t.quests.forEach($=>{$.claimed||$.type!==g||($.progress+=E,$.progress>=$.target&&($.progress=$.target,$.completed=!0))}),g==="crafts"&&(t.stats.crafted+=0),p()}function F(t,g,E){const{grantRewards:p,addJournal:$,checkAchievements:M}=E,D=t.quests.find(e=>e.id===g);!D||!D.completed||D.claimed||(D.claimed=!0,p(D.reward,`Misión: ${D.title}`),t.stats.questsCompleted+=1,$("📜",`Misión completada: <b>${D.title}</b>.`),t.quests.every(e=>e.claimed)&&(t.quests=L(t.player.level),$("🪄","Se generan nuevos contratos en el tablón.")),M())}function z(t,g){const{toast:E,addJournal:p}=g,$=140+t.player.level*12;if(t.player.gold<$){E("Oro insuficiente para renovar misiones","danger");return}t.player.gold-=$,t.quests=L(t.player.level),p("📌",`Renuevas el tablón de contratos por ${$} de oro.`)}function R(t,g,E){const p={kills:t.stats.kills,wins:t.stats.wins,questsCompleted:t.stats.questsCompleted,highestDungeonFloor:t.player.highestDungeonFloor,level:t.player.level,legendaryFound:t.stats.legendaryFound,guildTotal:E(),ascension:t.player.ascension};return Math.min(g.target,p[g.type]||0)}function A(t,g){const{grantRewards:E,addJournal:p,toast:$,guildTotal:M}=g;f.forEach(D=>{if(t.claimedAchievements.includes(D.id))return;R(t,D,M)>=D.target&&(t.claimedAchievements.push(D.id),E(D.reward,`Logro: ${D.title}`),p("🏆",`Logro desbloqueado: <b>${D.title}</b>.`),$(`Logro desbloqueado: ${D.title}`,"gold"))})}function K(t,g,E){const{toast:p,addJournal:$}=E;if(t.player.relicDust<=0){p("No tienes polvo de reliquia","danger");return}g in t.player.relics&&(t.player.relicDust-=1,t.player.relics[g]+=1,$("🗿",`Inviertes una reliquia en ${g}.`))}function m(t,g){const{toast:E,confirmAscend:p,replaceState:$,normalizeState:M,currentRank:D,addJournal:e,checkAchievements:n}=g;if(t.player.level<20&&t.player.highestDungeonFloor<8){E("Necesitas nivel 20 o piso 8 de mazmorra","danger");return}if(!p())return;const c=3+Math.floor(t.player.level/8)+Math.floor(t.player.highestDungeonFloor/4),h=r(t.player.relics),y=t.player.relicDust+c,o=t.player.ascension+1,u=q();u.player.relics=h,u.player.relicDust=y,u.player.ascension=o,u.player.shards=2,u.player.gold=320,$(u),M(),t.player.title=D().title,e("🔱",`Has ascendido. Obtienes ${c} de Polvo de Reliquia.`),n(),E(`Ascensión completada (+${c} reliquias)`,"gold")}return{currentRank:b,gainXp:x,trackQuest:C,claimQuest:F,rerollQuests:z,achievementProgress:R,checkAchievements:A,spendRelic:K,ascend:m}}(()=>{const{SLOT_ORDER:a,SLOT_NAMES:i,RANKS:f,ZONES:S,JOBS:r,PETS:L,SKILLS:q,ACHIEVEMENTS:b}=window.AetherConfig,{$:x,clone:C,rand:F,randf:z,pick:R,clamp:A,sum:K,uid:m,fmt:t,pct:g,softRound:E,localDayKey:p,timeLeft:$,rarityDef:M,sanitizeInlineHtml:D}=window.AetherUtils,{state:e,replaceState:n,makeDefaultState:c,normalizeState:h,makeItem:y,scaleItemStats:o,computeItemScore:u,xpNeeded:v,defaultQuests:B,generateMarket:O,maxInventory:d,guildTotal:V,getPetData:l,getDerivedStats:k,getLootLuck:P,ensureUnlockedSkills:H,saveGame:Z}=window.AetherModel,W=_a({SKILLS:q,pick:R,rand:F,randf:z,clamp:A,softRound:E,uid:m}),ee=Fa({rarityDef:M,rand:F,uid:m,clone:C,generateMarket:O,makeItem:y,computeItemScore:u}),oe=Ga({JOBS:r,ZONES:S,clone:C,rand:F,pick:R,SLOT_ORDER:a,makeItem:y,clamp:A}),T=Ja({RANKS:f,ACHIEVEMENTS:b,clamp:A,clone:C,defaultQuests:B,makeDefaultState:c});function I(s,j){e.journal.unshift({id:m(),ts:Date.now(),icon:s,text:D(j)}),e.journal=e.journal.slice(0,80)}function N(s,j="cyan"){const _=x("toast-root");if(!_)return;const Y={cyan:"from-sky-500/25 to-cyan-300/10 border-cyan-300/25",gold:"from-amber-500/25 to-yellow-300/10 border-amber-300/30",danger:"from-rose-500/25 to-pink-300/10 border-rose-300/25",success:"from-emerald-500/25 to-green-300/10 border-emerald-300/25",violet:"from-violet-500/25 to-fuchsia-300/10 border-violet-300/25"},J=document.createElement("div");J.className=`glass-strong pointer-events-none rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-br ${Y[j]||Y.cyan} animate-[fadeIn_.2s_ease]`,J.innerHTML=D(s),_.appendChild(J),setTimeout(()=>{J.style.opacity="0",J.style.transform="translateY(-6px)",setTimeout(()=>J.remove(),260)},2800)}function Q(s,j="Recompensa"){s&&(Object.entries(s).forEach(([_,Y])=>{_==="xp"?ce(Y):_ in e.player?e.player[_]+=Y:_ in e.stats?e.stats[_]+=Y:_==="relicDust"&&(e.player.relicDust+=Y)}),s.gold&&(e.stats.earnedGold+=s.gold,pe("earnGold",s.gold)),I("🎁",`${j}: ${ne(s)}`))}function ne(s){return Object.entries(s).map(([j,_])=>{const Y={xp:"XP",gold:"oro",shards:"fragmentos",iron:"hierro",wood:"madera",essence:"esencia",food:"comida",potions:"pociones",keys:"llaves",relicDust:"polvo reliquia"}[j]||j;return`+${t(_)} ${Y}`}).join(" · ")}function ce(s){return T.gainXp(e,s,{xpNeeded:v,ensureUnlockedSkills:H,getDerivedStats:k,currentRank:fe,addJournal:I,toast:N})}function fe(){return T.currentRank(e,V)}function Ie(){const s=Date.now(),j=A((s-(e.lastTick||s))/1e3,0,60*60*12);j<=0||(Pe(j),ct(s,!0),e.lastTick=s)}function Pe(s){return oe.passiveRegen(e,s,k)}function Ee(){return S.find(s=>s.id===e.player.zoneId)||S[0]}function he(s){return e.player.level>=s.unlockLevel||e.player.ascension>0&&s.id<=2}function Be(s){const j=S.find(_=>_.id===s);!j||!he(j)||(e.player.zoneId=j.id)}function w(s){return W.enemyArchetypeMods(s)}function G(s,j="normal",_=0){return W.makeEnemy({zone:s,kind:j,extraScale:_,playerLevel:e.player.level||1,playerAscension:e.player.ascension||0,wins:e.stats&&e.stats.wins?e.stats.wins:0})}function ae(){return W.buildPlayerCombatant(e.player,k())}function ie(s,j){return W.activeBuffValue(s,j)}function se(s,j){return W.effectiveStat(s,j)}function U(s){return W.skillLevelMult(e.player.skillLevels,s)}function X(s,j){return W.choosePlayerSkill(s,j,{equipment:e.player.equipment,skillLevels:e.player.skillLevels})}function me(s){return W.chooseEnemySkill(s)}function be(s,j){return W.decayStatuses(s,j)}function ge(s,j,_,Y=1,J={},ue=[]){return W.performHit(s,j,_,Y,J,ue)}function Ae(s,j,_,Y,J){return W.applySkillEffects(s,j,_,Y,J)}function _e(s,j,_,Y){const J={damageDone:0,damageTaken:0,crits:0};return W.actorTurn(s,j,_,{equipment:e.player.equipment,skillLevels:e.player.skillLevels},J,Y)}function te(s){return W.tickCooldowns(s)}function de(s,j={mode:"arena"}){const _=W.runCombat({enemy:s,playerState:e.player,derivedStats:k(),zoneName:S[s.zoneId]&&S[s.zoneId].name||"Zona desconocida",maxTurns:28}),{player:Y,foe:J,log:ue,victory:$e,statsDelta:Re}=_;e.stats.damageDone+=Re.damageDone,e.stats.damageTaken+=Re.damageTaken,e.stats.crits+=Re.crits,e.player.hp=A(Y.hp,1,k().maxHp);const ve={gold:0,xp:0,iron:0,wood:0,essence:0,keys:0,potions:0};let ke=null;if($e){const we=S[J.zoneId],ga=F(30,54)+J.level*12+(J.kind==="elite"?45:J.kind==="boss"?70:0),fa=F(22,38)+J.level*10+(J.kind==="boss"?55:0);ve.gold=Math.round(ga*(1+k().goldPct)),ve.xp=Math.round(fa),ve.iron=F(0,2+we.id),ve.wood=F(0,1+Math.floor(we.id/2)),ve.essence=Math.random()<.32+we.id*.02?F(1,2+Math.floor(we.id/2)):0,ve.keys=j.mode==="dungeon"&&Math.random()<.13?1:0,ve.potions=Math.random()<.08?1:0;const va=.26+P()*.7+(J.kind==="elite"?.1:0)+(J.kind==="boss"?.16:0)+(j.mode==="dungeon"?.1:0);if(Math.random()<va){const Fe=Math.random()-P()*.32-we.id*.01-(J.kind==="elite"?.015:0)-(J.kind==="boss"?.04:0);let Oe=null;(J.kind==="boss"||we.id>=5)&&Fe<.0025?Oe="mythic":(J.kind==="elite"||J.kind==="boss"||we.id>=4)&&Fe<.013?Oe="legendary":Fe<.06?Oe="epic":Fe<.19&&(Oe="rare"),ke=y(R(a),J.level,Oe),Le(ke)}Q(ve,`Botín de ${J.name}`),e.stats.kills+=1,j.mode==="arena"&&(e.stats.wins+=1),j.mode==="dungeon"&&(e.stats.dungeons+=1),J.kind==="elite"&&(e.stats.elites+=1),J.kind==="boss"&&(e.player.highestDungeonFloor=Math.max(e.player.highestDungeonFloor,j.floor||e.player.highestDungeonFloor)),pe("kills",1),j.mode==="arena"&&pe("wins",1),j.mode==="dungeon"&&pe("dungeons",1),J.kind==="elite"&&pe("elites",1),I("⚔️",`Victoria contra <b>${J.name}</b>. ${ne(ve)}${ke?` · Botín: <span class="rarity-${ke.rarity}">${ke.name}</span>`:""}`),N(`Victoria sobre ${J.name}`,"success")}else j.mode==="arena"&&(e.stats.losses+=1),e.player.gold=Math.max(0,e.player.gold-F(10,25)),I("💀",`Has sido derrotado por <b>${J.name}</b>. La multitud te abuchea.`),N(`Derrota contra ${J.name}`,"danger");e.player.title=fe().title,xe(),e.combatHistory.unshift({id:m(),ts:Date.now(),title:`${$e?"Victoria":"Derrota"} vs ${J.name}`,result:$e?"victory":"defeat",enemy:J.name,zone:S[J.zoneId].name,log:ue,rewards:ve,drop:ke}),e.combatHistory=e.combatHistory.slice(0,15),e.ui.modal={type:"combat",title:`${$e?"Victoria":"Derrota"} — ${J.name}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Resultado</div>
              <div class="text-xl font-black ${$e?"text-emerald-300":"text-rose-300"}">${$e?"Has ganado":"Has perdido"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${ne(ve)}${ke?` · Botín: <span class="rarity-${ke.rarity}">${ke.name}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado final</div>
              <div class="text-lg font-black text-white">${t(e.player.hp)} HP restantes</div>
              <div class="text-sm text-slate-300/75 mt-1">${J.name} ${$e?"cayó derrotado":"sobrevivió al duelo"}.</div>
            </div>
          </div>
          <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro de combate</div>
            <div class="space-y-2 text-sm text-slate-100/90">${ue.map(we=>`<div class="leading-relaxed">${we}</div>`).join("")}</div>
          </div>
        </div>
      `}}function Le(s){return ee.acquireItem(e,s,{maxInventory:d(),addJournal:I,trackQuest:pe,checkAchievements:xe})}function je(s){return ee.removeInventoryItem(e,s)}function qt(s){return ee.getInventoryItem(e,s)}function Vt(s){return ee.equipItem(e,s,{addJournal:I})}function Bt(s){return ee.unequipItem(e,s,{maxInventory:d(),addJournal:I,toast:N})}function Ot(s){return ee.sellItem(e,s,{addJournal:I,trackQuest:pe})}function Nt(s){return ee.salvageItem(e,s,{addJournal:I,trackQuest:pe})}function zt(){const s=k();if(e.player.potions<=0){N("No te quedan pociones","danger");return}if(e.player.hp>=s.maxHp){N("Ya estás con toda la vida","cyan");return}e.player.potions-=1;const j=Math.round(s.maxHp*.42);e.player.hp=A(e.player.hp+j,0,s.maxHp),I("🧪",`Bebes una poción y recuperas ${j} HP.`),N(`+${j} HP`,"success")}function Ht(){const s=p();if(e.streak.lastClaimDay===s){N("La recompensa diaria ya fue reclamada hoy","cyan");return}const j=p(Date.now()-864e5);e.streak.days=e.streak.lastClaimDay===j?Math.min(7,e.streak.days+1):1,e.streak.lastClaimDay=s;const _=e.streak.days,Y={gold:180+_*70,xp:60+_*30,potions:_>=3?1:0,keys:_>=5?1:0,shards:_===7?3:1,essence:1+Math.floor(_/2)};Q(Y,`Recompensa diaria (día ${_})`),N(`Recompensa diaria reclamada — racha ${_}`,"gold")}function _t(s){const j={strength:["Fuerza",1],agility:["Agilidad",1],endurance:["Resistencia",1],discipline:["Disciplina",1]};if(!j[s])return;if(e.player.attributePoints<=0){N("No tienes puntos de atributo","danger");return}e.player.attributePoints-=1,e.player.training[s]+=1;const _=k();e.player.hp=Math.min(e.player.hp,_.maxHp),I("🏋️",`Aumentas ${j[s][0]}.`)}function Ft(s){const j=q[s];if(!(!j||!e.player.unlockedSkills.includes(s))){if(e.player.skillPoints<=0){N("No tienes puntos de habilidad","danger");return}if((e.player.skillLevels[s]||1)>=5){N("Esa habilidad ya está al máximo","cyan");return}e.player.skillLevels[s]+=1,e.player.skillPoints-=1,I("📘",`Mejoras ${j.name} a nivel ${e.player.skillLevels[s]}.`)}}function Gt(s){if(!e.player.unlockedSkills.includes(s))return;const j=e.player.activeSkills,_=j.indexOf(s);if(_>=0){if(j.length<=1){N("Debes dejar al menos una habilidad activa","danger");return}j.splice(_,1)}else{if(j.length>=4){N("Máximo de 4 habilidades activas","cyan");return}j.push(s)}}function Jt(s=!0){return ee.refreshMarket(e,s,{toast:N,addJournal:I})}function Zt(s){return ee.buyMarketItem(e,s,{maxInventory:d(),toast:N,addJournal:I,trackQuest:pe,checkAchievements:xe})}function Wt(s){return ee.buyResource(e,s,{toast:N,grantRewards:Q})}function Qt(s,j="normal"){return ee.forgeItem(e,s,j,{maxInventory:d(),toast:N,addJournal:I,trackQuest:pe,checkAchievements:xe})}function Kt(s){return ee.upgradeEquipped(e,s,{toast:N,trackQuest:pe,addJournal:I})}function Yt(s){return ee.rerollItem(e,s,{toast:N,addJournal:I})}function Ut(s){return oe.startJob(e,s,{toast:N,addJournal:I})}function ot(s=!1){return oe.completeJob(e,s,{grantRewards:Q,toast:N})}function Xt(s,j){return oe.startExpedition(e,s,j,{isZoneUnlocked:he,toast:N,addJournal:I})}function lt(s=!1){return oe.completeExpedition(e,s,{grantRewards:Q,getDerivedStats:k,trackQuest:pe,acquireItem:Le,addJournal:I,toast:N})}function ct(s=Date.now(),j=!1){return oe.resolveFinishedTimers(e,s,j,{completeJob:ot,completeExpedition:lt})}function ea(s="normal"){const j=Ee(),_=j.staminaCost+(s==="elite"?1:0);if(e.player.stamina<_||e.player.energy<j.energyCost){N("No tienes energía o aguante suficiente","danger");return}e.player.stamina-=_,e.player.energy-=j.energyCost;const Y=G(j,s);de(Y,{mode:"arena"})}function ta(s=3){const j=[];for(let _=0;_<s;_++){const Y=Ee();if(e.player.stamina<Y.staminaCost||e.player.energy<Y.energyCost||e.player.hp<k().maxHp*.2)break;e.player.stamina-=Y.staminaCost,e.player.energy-=Y.energyCost;const J=G(Y,"normal",_);de(J,{mode:"arena"});const ue=e.combatHistory[0];if(j.push(`${ue.result==="victory"?"✅":"❌"} ${ue.title}`),ue.result!=="victory")break}j.length&&(e.ui.modal={type:"summary",title:`Racha de arena x${j.length}`,content:`<div class="glass rounded-2xl p-4 text-sm text-slate-100/90 space-y-2">${j.map(_=>`<div>${_}</div>`).join("")}</div>`})}function aa(){if(e.player.keys<1){N("Necesitas una llave de mazmorra","danger");return}if(e.player.stamina<2){N("Necesitas al menos 2 de aguante","danger");return}e.player.keys-=1,e.player.stamina-=2;const s=e.player.highestDungeonFloor,j=S[Math.min(S.length-1,Math.floor((s-1)/2))],_=[];let Y=!0;if([G(j,"normal",s*.8),G(j,"normal",s*.85),G(j,"elite",s*.9),G(j,"boss",s)].forEach((ue,$e)=>{if(!Y)return;de(ue,{mode:"dungeon",floor:s});const Re=e.combatHistory[0];_.push(`${Re.result==="victory"?"✅":"❌"} ${$e<3?"Encuentro":"Jefe"}: ${ue.name}`),Re.result!=="victory"&&(Y=!1)}),Y){e.player.highestDungeonFloor+=1;const ue={gold:120+s*55,xp:90+s*42,essence:2+Math.floor(s/3),shards:s%3===0?2:1};Q(ue,`Cofre del piso ${s}`),I("🏰",`Limpias el piso ${s} y avanzas al piso ${s+1}.`),N(`Piso ${s} superado`,"gold")}else I("🕸️",`No logras superar el piso ${s}.`);e.ui.modal={type:"summary",title:`Mazmorra — Piso ${s}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado</div>
              <div class="text-xl font-black ${Y?"text-emerald-300":"text-rose-300"}">${Y?"Incursión limpia":"Incursión fallida"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${Y?"El botín del jefe ha sido asegurado.":"Tu grupo de uno no pudo seguir avanzando."}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ruta</div>
              <div class="space-y-2 text-sm">${_.map(ue=>`<div>${ue}</div>`).join("")}</div>
            </div>
          </div>
        </div>
      `}}function na(){if(e.player.pet){N("Ya tienes una mascota activa","cyan");return}if(e.player.shards<5||e.player.essence<8){N("Necesitas 5 fragmentos y 8 de esencia","danger");return}e.player.shards-=5,e.player.essence-=8;const s=R(L);e.player.pet=s.id,e.player.petLevel=1,e.player.petXp=0,I("🐾",`Incubas a <b>${s.name}</b>. ${s.desc}`),N(`Mascota obtenida: ${s.name}`,"violet")}function sa(){if(!e.player.pet){N("Aún no tienes mascota","danger");return}if(e.player.food<2||e.player.essence<1){N("Necesitas 2 de comida y 1 de esencia","danger");return}e.player.food-=2,e.player.essence-=1,e.player.petXp+=1,e.player.petXp>=3+e.player.petLevel&&(e.player.petXp=0,e.player.petLevel+=1,I("🐾",`Tu mascota alcanza nivel ${e.player.petLevel}.`),N(`Mascota nivel ${e.player.petLevel}`,"success"))}function ia(){if(!e.player.pet)return;const s=l();e.player.pet=null,e.player.petLevel=0,e.player.petXp=0,I("🪽",`Liberas a ${s?s.name:"tu mascota"} y recuperas tu calma.`)}function ra(s){return T.spendRelic(e,s,{toast:N,addJournal:I})}function oa(){return T.ascend(e,{toast:N,confirmAscend:()=>window.confirm("Ascender reinicia nivel, equipo, inventario y recursos comunes, pero te da Polvo de Reliquia. ¿Continuar?"),replaceState:n,normalizeState:h,currentRank:fe,addJournal:I,checkAchievements:xe})}function pe(s,j){return T.trackQuest(e,s,j,xe)}function la(s){return T.claimQuest(e,s,{grantRewards:Q,addJournal:I,checkAchievements:xe})}function ca(){return T.rerollQuests(e,{toast:N,addJournal:I})}function da(s){return T.achievementProgress(e,s,V)}function xe(){return T.checkAchievements(e,{grantRewards:Q,addJournal:I,toast:N,guildTotal:V})}function ua(s){const j=e.player.guild;if(!(s in j))return;const _=j[s]+1,Y=180+_*110+V()*35,J=Math.max(1,Math.floor(_/2));if(e.player.gold<Y||e.player.essence<J){N("No tienes recursos suficientes","danger");return}e.player.gold-=Y,e.player.essence-=J,j[s]+=1,I("🏛️",`Mejoras ${s} del gremio al nivel ${j[s]}.`),xe()}function pa(){return ee.autoManage(e,{toast:N,trackQuest:pe,addJournal:I})}function ma(){const s=k();if(s.maxHp-e.player.hp<=0){N("Ya tienes la vida al máximo","cyan");return}let _=0;for(;e.player.hp<s.maxHp&&e.player.potions>0&&_<10;)e.player.potions-=1,e.player.hp=A(e.player.hp+s.maxHp*.42,0,s.maxHp),_++;I("🩹",`Usas ${_} poción(es) para recuperarte.`)}window.AetherSystems={addJournal:I,toast:N,grantRewards:Q,summarizeReward:ne,gainXp:ce,currentRank:fe,offlineCatchup:Ie,passiveRegen:Pe,zoneForPlayer:Ee,isZoneUnlocked:he,setZone:Be,enemyArchetypeMods:w,makeEnemy:G,buildPlayerCombatant:ae,activeBuffValue:ie,effectiveStat:se,skillLevelMult:U,choosePlayerSkill:X,chooseEnemySkill:me,decayStatuses:be,performHit:ge,applySkillEffects:Ae,actorTurn:_e,tickCooldowns:te,runCombat:de,acquireItem:Le,removeInventoryItem:je,getInventoryItem:qt,equipItem:Vt,unequipItem:Bt,sellItem:Ot,salvageItem:Nt,usePotion:zt,claimDaily:Ht,trainAttribute:_t,upgradeSkill:Ft,toggleActiveSkill:Gt,refreshMarket:Jt,buyMarketItem:Zt,buyResource:Wt,forgeItem:Qt,upgradeEquipped:Kt,rerollItem:Yt,startJob:Ut,completeJob:ot,startExpedition:Xt,completeExpedition:lt,resolveFinishedTimers:ct,fightArena:ea,arenaBlitz:ta,runDungeon:aa,hatchPet:na,feedPet:sa,releasePet:ia,spendRelic:ra,ascend:oa,trackQuest:pe,claimQuest:la,rerollQuests:ca,achievementProgress:da,checkAchievements:xe,upgradeGuild:ua,autoManage:pa,autoHeal:ma}})();const Za={setZone:["hud","content"],fightArena:["hud","content"],arenaBlitz:["hud","content","modal"],runDungeon:["hud","content","modal"],startExpedition:["hud","content"],startJob:["hud","content"],claimQuest:["hud","content"],rerollQuests:["hud","content"],usePotion:["hud","content"],autoHeal:["hud","content"],claimDaily:["hud","content"],buyMarketItem:["hud","content"],buyResource:["hud","content"],equipItem:["hud","content"],unequipItem:["hud","content"],sellItem:["hud","content"],salvageItem:["hud","content"],forgeItem:["hud","content"],upgradeEquipped:["hud","content"],rerollItem:["hud","content"],upgradeGuild:["hud","content"],trainAttribute:["hud","content"],upgradeSkill:["hud","content"],toggleActiveSkill:["hud","content"],hatchPet:["hud","content"],feedPet:["hud","content"],releasePet:["hud","content"],spendRelic:["hud","content"],ascend:["hud","content"],refreshMarket:["hud","content"],autoManage:["hud","content"]};function Wa(a,i){const{systems:f,mutate:S,afterAction:r}=i;return Object.entries(Za).forEach(([L,q])=>{a[L]=(...b)=>{let x;return S(`systems/${L}`,()=>{x=f[L](...b)},{source:"systems"}),r(q),x}}),a}const ut={home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5.25 9.75V21h13.5V9.75"/>',user:'<path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M4.5 20.25a7.5 7.5 0 0 1 15 0"/>',backpack:'<path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M6.75 7.5h10.5A2.25 2.25 0 0 1 19.5 9.75v9A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75v-9A2.25 2.25 0 0 1 6.75 7.5Z"/><path d="M9 12.75h6"/>',swords:'<path d="m4 20 7-7"/><path d="m13 11 7-7"/><path d="M14.5 4.5 19.5 9.5"/><path d="m4.5 14.5 5 5"/><path d="m9 9 6 6"/>',compass:'<circle cx="12" cy="12" r="8.25"/><path d="m14.75 9.25-1.65 4.85-4.85 1.65 1.65-4.85 4.85-1.65Z"/>',castle:'<path d="M5.25 21V9l3 1.5V6l3 1.5L15 6v4.5L18 9v12"/><path d="M3.75 21h16.5"/><path d="M9.75 21v-4.5h4.5V21"/>',cart:'<path d="M3.75 4.5h1.5l1.8 8.1a1.5 1.5 0 0 0 1.47 1.17h7.98a1.5 1.5 0 0 0 1.47-1.17L19.5 7.5H6.3"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17.25" cy="19.5" r="1.5"/>',hammer:'<path d="m14.25 5.25 4.5 4.5"/><path d="m6.75 12.75 7.5-7.5 3 3-7.5 7.5"/><path d="M5.25 14.25 3.75 20.25 9.75 18.75"/>',shield:'<path d="M12 3.75 5.25 6v5.25c0 4.29 2.7 8.11 6.75 9.5 4.05-1.39 6.75-5.21 6.75-9.5V6L12 3.75Z"/>',book:'<path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5v16.5H6.75A2.25 2.25 0 0 0 4.5 21V5.25Z"/><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 1 6.75 16.5h10.5"/>',briefcase:'<path d="M9 6V4.875A1.875 1.875 0 0 1 10.875 3h2.25A1.875 1.875 0 0 1 15 4.875V6"/><rect x="3.75" y="6" width="16.5" height="12.75" rx="2.25"/><path d="M3.75 11.25h16.5"/>',paw:'<circle cx="7" cy="9" r="1.25"/><circle cx="11" cy="6.5" r="1.25"/><circle cx="15" cy="6.5" r="1.25"/><circle cx="17" cy="10" r="1.25"/><path d="M12 18c-2.7 0-4.5-1.44-4.5-3.4 0-1.75 1.2-3.35 3.06-3.35.96 0 1.62.36 1.94.72.32-.36.98-.72 1.94-.72 1.86 0 3.06 1.6 3.06 3.35C16.5 16.56 14.7 18 12 18Z"/>',trophy:'<path d="M8.25 4.5h7.5v2.25A3.75 3.75 0 0 1 12 10.5 3.75 3.75 0 0 1 8.25 6.75V4.5Z"/><path d="M6 4.5h2.25v2.25A3 3 0 0 1 5.25 9.75H4.5A1.5 1.5 0 0 1 3 8.25v-.75A3 3 0 0 1 6 4.5Zm12 0h-2.25v2.25A3 3 0 0 0 18.75 9.75h.75A1.5 1.5 0 0 0 21 8.25v-.75A3 3 0 0 0 18 4.5Z"/><path d="M12 10.5v4.5"/><path d="M9 21h6"/><path d="M10.5 15h3v6h-3Z"/>',scroll:'<path d="M8.25 4.5h8.25A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5H8.25A3.75 3.75 0 0 1 4.5 15.75V8.25A3.75 3.75 0 0 1 8.25 4.5Z"/><path d="M8.25 4.5A2.25 2.25 0 0 0 6 6.75v9A2.25 2.25 0 0 1 3.75 18H6"/><path d="M9.75 9h4.5"/><path d="M9.75 12.75h4.5"/>',menu:'<path d="M4.5 7.5h15"/><path d="M4.5 12h15"/><path d="M4.5 16.5h15"/>',flask:'<path d="M10.5 3.75h3"/><path d="M10.5 3.75v5.1l-4.95 7.74A2.25 2.25 0 0 0 7.44 20.25h9.12a2.25 2.25 0 0 0 1.89-3.66L13.5 8.85v-5.1"/><path d="M8.25 14.25h7.5"/>',bandage:'<path d="m8.25 8.25 7.5 7.5"/><path d="m15.75 8.25-7.5 7.5"/><rect x="4.5" y="7.5" width="15" height="9" rx="2.25" transform="rotate(-45 12 12)"/>',gift:'<path d="M12 21V9"/><path d="M4.5 12h15"/><rect x="4.5" y="7.5" width="15" height="12.75" rx="2.25"/><path d="M12 7.5H8.25A2.25 2.25 0 1 1 10.5 5.25c0 .83-.43 1.56-1.08 1.97"/><path d="M12 7.5h3.75A2.25 2.25 0 1 0 13.5 5.25c0 .83.43 1.56 1.08 1.97"/>',broom:'<path d="M14.25 4.5 19.5 9.75"/><path d="M11.25 7.5 4.5 14.25"/><path d="M4.5 14.25 9.75 19.5"/><path d="m9.75 19.5 2.25-2.25"/>',crown:'<path d="M4.5 18 6.75 7.5 12 12l5.25-4.5L19.5 18Z"/><path d="M4.5 18h15"/>',flame:'<path d="M12 21c3.31 0 6-2.46 6-5.5 0-2.17-1.13-3.7-2.8-5.25-.9-.84-1.62-1.77-2.02-2.9-.38 1.3-1.25 2.45-2.42 3.55-1.75 1.64-4.76 3.45-4.76 6.6C6 18.54 8.69 21 12 21Z"/>',key:'<circle cx="8.25" cy="12" r="3.75"/><path d="M12 12h8.25"/><path d="M16.5 12v2.25"/><path d="M18.75 12v1.5"/>',spark:'<path d="M12 3.75 13.94 9.06 19.25 11 13.94 12.94 12 18.25 10.06 12.94 4.75 11 10.06 9.06 12 3.75Z"/>',bolt:'<path d="M13.5 3.75 7.5 13.5h4.5l-1.5 6.75 6-9.75h-4.5L13.5 3.75Z"/>',dumbbell:'<path d="M4.5 9v6"/><path d="M7.5 7.5v9"/><path d="M16.5 7.5v9"/><path d="M19.5 9v6"/><path d="M7.5 12h9"/>',check:'<circle cx="12" cy="12" r="8.25"/><path d="m8.75 12.25 2.25 2.25 4.25-4.5"/>',xcircle:'<circle cx="12" cy="12" r="8.25"/><path d="m9.75 9.75 4.5 4.5"/><path d="m14.25 9.75-4.5 4.5"/>',skull:'<path d="M12 3.75c-4.14 0-7.5 2.86-7.5 6.75 0 2.63 1.54 4.92 3.82 6.15V19.5h1.93v-1.5h3.5v1.5h1.93v-2.85c2.28-1.23 3.82-3.52 3.82-6.15 0-3.89-3.36-6.75-7.5-6.75Z"/><circle cx="9" cy="11.25" r="1"/><circle cx="15" cy="11.25" r="1"/><path d="M10.5 14.5h3"/>',info:'<circle cx="12" cy="12" r="8.25"/><path d="M12 10.5v5.25"/><path d="M12 7.5h.01"/>',wind:'<path d="M4.5 10.5h8.25a2.25 2.25 0 1 0-2.25-2.25"/><path d="M3.75 15h12a2.25 2.25 0 1 1-2.25 2.25"/><path d="M4.5 7.5h4.5"/>',droplet:'<path d="M12 3.75s5.25 5.79 5.25 9A5.25 5.25 0 1 1 6.75 12.75c0-3.21 5.25-9 5.25-9Z"/>',box:'<path d="m4.5 7.5 7.5-3 7.5 3-7.5 3-7.5-3Z"/><path d="M4.5 7.5v9l7.5 3 7.5-3v-9"/><path d="M12 10.5v9"/>',coins:'<circle cx="9" cy="12" r="3.75"/><path d="M12.75 9.75A3.75 3.75 0 1 1 16.5 16.5"/>',recycle:'<path d="m9 4.5 2.25 2.25L9 9"/><path d="M11.25 6.75H8.1A2.85 2.85 0 0 0 5.25 9.6v.15"/><path d="m15 19.5-2.25-2.25L15 15"/><path d="M12.75 17.25h3.15a2.85 2.85 0 0 0 2.85-2.85v-.15"/><path d="m18 9-3 0"/><path d="M18 9a2.85 2.85 0 0 0-2.85-2.85H15"/>',bag:'<path d="M7.5 9V7.5a4.5 4.5 0 0 1 9 0V9"/><path d="M5.25 9h13.5l-.9 9.45A2.25 2.25 0 0 1 15.61 20.5H8.39a2.25 2.25 0 0 1-2.24-2.05L5.25 9Z"/>',rotate:'<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4.5H15"/>',feather:'<path d="M19.5 4.5c-6 0-10.5 4.5-10.5 10.5v4.5"/><path d="M13.5 10.5 9 15"/><path d="M15.75 8.25 9 15"/>',gem:'<path d="m7.5 4.5-3 4.5 7.5 10.5L19.5 9l-3-4.5Z"/><path d="M9 4.5 12 9l3-4.5"/><path d="M4.5 9h15"/>',pin:'<path d="M9 4.5h6l-1.5 4.5 2.25 2.25v.75H8.25v-.75L10.5 9 9 4.5Z"/><path d="M12 12v7.5"/>'},Qa={"⚔️":"swords","⚔":"swords","👑":"crown","🔥":"flame","🌪️":"spark","🧭":"compass","🎒":"backpack","🏋️":"dumbbell","🧪":"flask","🩹":"bandage","🎁":"gift","🧹":"broom","🛒":"cart","⚒️":"hammer","⚒":"hammer","🗝️":"key","🗝":"key","✨":"spark","🐾":"paw","📋":"scroll","📚":"book","💼":"briefcase","🏆":"trophy","📜":"scroll","🛡️":"shield","🛡":"shield","👤":"user","◈":"home","☰":"menu","⚡":"bolt","💪":"dumbbell","✅":"check","❌":"xcircle","☠️":"skull","💨":"wind","🩸":"droplet","🌟":"spark","💀":"skull","📦":"box","💰":"coins","♻️":"recycle","♻":"recycle","📘":"book","🛍️":"bag","🛍":"bag","🔨":"hammer","🌀":"rotate","🧰":"briefcase","🏰":"castle","🪽":"feather","🪶":"feather","🗿":"gem","🔱":"spark","📌":"pin","🏛️":"castle","🏛":"castle","🏟️":"castle","🏟":"castle","🍖":"box"};function qe(a,i="h-5 w-5"){const f=ut[a]||ut.spark;return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="${i}" aria-hidden="true">${f}</svg>`}function Ka(a,i,f={}){const{iconClass:S="h-4 w-4",wrapClass:r="inline-flex items-center gap-2",textClass:L=""}=f;return`<span class="${r}">${qe(a,S)}<span class="${L}">${i}</span></span>`}function Se(a=""){let i=String(a);return Object.entries(Qa).forEach(([f,S])=>{i=i.split(f).join(qe(S,"h-4 w-4 inline-block align-[-0.2em]"))}),i}function et(a=""){return String(a).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function gt(a=""){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ke(a=""){const i=et(a);return i?`data-tooltip="${gt(i)}"`:""}function tt(a=""){const i=Ke(a);return i?`<span tabindex="0" role="button" aria-label="Más información" class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-200/80 cursor-help focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/65 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" ${i}>${qe("info","h-3.5 w-3.5")}</span>`:""}const{SLOT_ORDER:Ya,SLOT_NAMES:Ua,VIEWS:vs,VIEW_META:Te,VIEW_GROUPS:ft,MOBILE_PRIMARY_VIEWS:Xa,MOBILE_OVERFLOW_VIEWS:bs,ZONES:en,JOBS:tn,PETS:an,SKILLS:nn,ACHIEVEMENTS:sn}=window.AetherConfig,{fmt:rn,pct:on,htmlStat:ln,progressBar:cn,timeLeft:dn,rarityName:un,rarityBadge:pn,translateFilter:mn,statLabel:gn,statTooltip:fn}=window.AetherUtils,{state:Ze,maxInventory:vn,getPetData:bn,getDerivedStats:yn,scaleItemStats:hn,xpNeeded:ys,guildTotal:xn,getStoreMeta:$n}=window.AetherModel,{currentRank:kn,zoneForPlayer:wn,isZoneUnlocked:Sn,summarizeReward:Mn,achievementProgress:En}=window.AetherSystems;function vt(){return Te[Ze.currentView]||Te.resumen}function An(a,i=""){return`<span class="status-chip ${i}">${Se(a)}</span>`}function jn(a,i,f="",S=""){return`
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div class="section-eyebrow">${a}</div>
          <div class="mt-1 flex items-center gap-2"><div class="section-title font-display leading-tight">${i}</div>${tt(f||i)}</div>
          ${f?`<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/76">${Se(f)}</p>`:""}
        </div>
        ${S?`<div class="shrink-0">${Se(S)}</div>`:""}
      </div>
    `}function Cn(a,i,f="",S=""){return`
      <div class="surface-strong rounded-2xl p-4 ${f}" ${Ke(S||i)}>
        <div class="mb-2 flex items-center gap-2 font-bold font-display text-white leading-tight">${Se(a)}${tt(S||i)}</div>
        <p class="text-sm text-slate-300/78 leading-relaxed">${Se(i)}</p>
      </div>
    `}function In(a,i,f,S=""){const r=gt(et(a));return`<button type="button" class="btn ${i}" onclick="${f}" aria-label="${r}" ${Ke(S||et(a))}>${Se(a)}</button>`}function Pn(a){return`
      <div class="mobile-cta-bar md:hidden">
        <div class="glass-strong rounded-[1.6rem] p-3 grid grid-cols-2 gap-2 shadow-rail" role="group" aria-label="Acciones rápidas móviles">
          ${a.join("")}
        </div>
      </div>
    `}function Ln(a,i="",f=""){const S=Te[a]||vt(),r=ft.find(q=>q.views.includes(a)),L=r?r.views:[a];return`
      <div class="glass rounded-3xl p-5 sm:p-6 animate-rise-in">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/[.08] ring text-cyan-200">${qe(S.icon,"h-4 w-4")}</span>
              ${r?r.title:"Vista individual"}
            </div>
            <div class="flex items-center gap-2"><h2 class="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">${S.label}</h2>${tt(S.desc)}</div>
            <p class="text-sm sm:text-base text-slate-300/78 mt-2 max-w-3xl">${Se(S.desc)}</p>
            ${f?`<div class="hero-actions mt-4 max-w-2xl">${f}</div>`:""}
          </div>
          ${i?`<div class="glass rounded-2xl px-4 py-3 text-sm text-slate-200/90 shrink-0 border border-cyan-300/14">${Se(i)}</div>`:""}
        </div>
        ${L.length>1?`
          <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-3">Navegación relacionada</div>
            <div class="view-links">
              ${L.map(q=>`
                <button type="button" class="view-chip ${Ze.currentView===q?"active":""}" onclick="game.setView('${q}')" ${Ze.currentView===q?'aria-current="page"':""}>
                  ${qe(Te[q].icon,"h-4 w-4")}
                  <span>${Te[q].label}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}const bt={SLOT_ORDER:Ya,SLOT_NAMES:Ua,VIEW_META:Te,VIEW_GROUPS:ft,MOBILE_PRIMARY_VIEWS:Xa,ZONES:en,JOBS:tn,PETS:an,SKILLS:nn,ACHIEVEMENTS:sn,fmt:rn,pct:on,htmlStat:ln,progressBar:cn,timeLeft:dn,rarityName:un,rarityBadge:pn,translateFilter:mn,statLabel:gn,statTooltip:fn,state:Ze,maxInventory:vn,getPetData:bn,getDerivedStats:yn,scaleItemStats:hn,guildTotal:xn,getStoreMeta:$n,currentRank:kn,zoneForPlayer:wn,isZoneUnlocked:Sn,summarizeReward:Mn,achievementProgress:En,icon:qe,withIcon:Ka,replaceEmojiIcons:Se,tooltipAttr:Ke,activeMeta:vt,statusChip:An,sectionHeader:jn,infoCard:Cn,actionButton:In,actionBar:Pn,pageLead:Ln},{VIEW_GROUPS:yt,MOBILE_PRIMARY_VIEWS:ht,VIEW_META:Je,state:re,fmt:Ne,htmlStat:Ge,progressBar:Ue,getDerivedStats:Rn,currentRank:Dn,activeMeta:Tn,getStoreMeta:qn,maxInventory:Vn,icon:We,withIcon:De,tooltipAttr:Ce}=bt;function Bn(){const a=Rn(),i=Dn(),f=Tn(),S=qn(),r=S.isSaving?"Guardando...":S.isDirty?"Cambios pendientes":S.lastSaveAt?`Guardado ${new Date(S.lastSaveAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Sin guardado",L=S.isSaving?"warning":S.isDirty?"danger":"success",q=a.maxHp?re.player.hp/a.maxHp:1,b=q<=.35?'<span class="status-chip danger">Vida crítica</span>':q<=.65?'<span class="status-chip warning">Vida media</span>':'<span class="status-chip success">Vida estable</span>';return`
    <div class="glass-strong rounded-[2rem] p-4 sm:p-6 animate-rise-in">
      <div class="grid xl:grid-cols-[minmax(0,1.35fr),minmax(310px,.65fr)] gap-5 sm:gap-6">
        <section class="space-y-4 min-w-0">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
                <span class="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.65)]"></span>
                Aether Arena · ${f.label}
              </div>
              <h1 class="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.05]">${re.player.name}</h1>
              <p class="text-slate-300/82 mt-2 text-sm sm:text-base">${re.player.title} · <b>${i.title}</b></p>
              <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span class="status-chip ${L}">${r}</span>
                <span class="status-chip">Nivel ${re.player.level}</span>
                <span class="status-chip">Zona ${f.label}</span>
                ${b}
              </div>
            </div>
            <div class="stat-pill rounded-2xl px-3.5 py-3 shrink-0 min-w-[168px]">
              <div class="text-xs text-slate-300/65 uppercase tracking-[.14em]">Recursos listos</div>
              <div class="text-base font-black text-emerald-300 leading-tight mt-1">${Ne(re.player.energy)}⚡ · ${Ne(re.player.stamina)}💪</div>
              <div class="text-[11px] text-slate-300/68 mt-1">Para combatir, forjar y explorar</div>
            </div>
          </div>

          <div class="space-y-3">
            ${Ue(re.player.hp,a.maxHp,"bg-gradient-to-r from-rose-500 via-pink-400 to-orange-300 shadow-[0_0_16px_rgba(244,63,94,.3)]","Vida","Salud actual sobre tu vida máxima.")}
            ${Ue(re.player.energy,a.maxEnergy,"bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_16px_rgba(34,211,238,.3)]","Energía","Recurso principal para varias acciones activas.")}
            ${Ue(re.player.stamina,a.maxStamina,"bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_16px_rgba(74,222,128,.28)]","Aguante","Marca cuántas actividades físicas puedes sostener.")}
          </div>
        </section>

        <aside class="space-y-3">
          <div class="kpi-rail">
            ${Ge("Oro",Ne(re.player.gold),"","Moneda principal para comprar, forjar y mejorar.")}
            ${Ge("Pociones",Ne(re.player.potions),"","Curación rápida para sostener el ciclo activo.")}
            ${Ge("Ataque",Ne(a.attack),"","Daño base de tus golpes y habilidades ofensivas.")}
            ${Ge("Mochila",`${re.player.inventory.length}/${Vn()}`,"","Capacidad usada frente al máximo disponible.")}
          </div>

          <div class="glass rounded-2xl p-4">
            <div class="text-[11px] uppercase tracking-[.2em] text-cyan-200/62 mb-2">Acciones inmediatas</div>
            <div class="grid grid-cols-2 gap-2">
              <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${Ce("Consume una poción para recuperar salud y sostener el ritmo de juego.")}>${De("flask","Poción")}</button>
              <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${Ce("Limpia inventario vendiendo y reciclando excedentes.")}>${De("broom","Limpiar")}</button>
              <button class="btn !py-2.5" onclick="game.setView('arena')" ${Ce("Abre la arena para continuar progreso activo.")}>${De("swords","Arena")}</button>
              <button class="btn !py-2.5" onclick="game.setView('inventario')" ${Ce("Abre inventario para comparar y equipar mejoras.")}>${De("backpack","Inventario")}</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `}function xt(a,i=!1){const f=Je[a],S=re.currentView===a,r=S?'aria-current="page"':"";return i?`
      <button type="button" class="mobile-nav-btn ${S?"active":""}" onclick="game.setView('${a}')" aria-label="Ir a ${f.label}" ${r} ${Ce(f.desc)}>
        <span class="nav-icon">${We(f.icon)}</span>
        <span class="nav-label">${f.label}</span>
      </button>
    `:`
    <button type="button" class="nav-link ${S?"active":""}" onclick="game.setView('${a}')" ${r} ${Ce(f.desc)}>
      <span class="nav-icon">${We(f.icon)}</span>
      <span class="min-w-0">
        <span class="block font-bold leading-tight">${f.label}</span>
        <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${f.short}</span>
      </span>
    </button>
  `}function On(){return`
    <div class="glass rounded-3xl p-4 lg:p-5 sticky top-4 space-y-5">
      <div>
        <div class="text-xs uppercase tracking-[.2em] text-slate-300/55 mb-1">Navegación</div>
        <div class="text-2xl font-display font-extrabold">Vistas</div>
        <p class="text-sm text-slate-300/74 mt-2">Cada pantalla mantiene una acción principal y módulos de apoyo.</p>
      </div>

      <div class="space-y-4">
        ${yt.map(a=>`
          <div>
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45 mb-2">${a.title}</div>
            <div class="grid gap-2">
              ${a.views.map(i=>xt(i)).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <div class="space-y-2">
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45">Acciones rápidas</div>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${Ce("Consume una poción para recuperar salud y seguir combatiendo.")}>${De("flask","Poción")}</button>
          <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${Ce("Vende o recicla excedentes para despejar la mochila.")}>${De("broom","Limpiar")}</button>
        </div>
      </div>
    </div>
  `}function Nn(){return`
    <nav class="mobile-nav glass-strong md:hidden" style="--mobile-nav-h: 6.25rem;">
      <div class="mobile-nav-grid">
        ${ht.map(a=>xt(a,!0)).join("")}
        <button type="button" class="mobile-nav-btn ${re.ui.moreMenuOpen?"active":""}" onclick="game.toggleMoreMenu()" aria-label="Abrir más vistas">
          <span class="nav-icon">${We("menu")}</span>
          <span class="nav-label">Más</span>
        </button>
      </div>
    </nav>
  `}function zn(){return re.ui.moreMenuOpen?`
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
          ${yt.map(a=>`
            <section class="mobile-sheet-group">
              <div class="mobile-sheet-title">${a.title}</div>
              <div class="grid grid-cols-1 gap-2">
                ${a.views.filter(i=>!ht.includes(i)).map(i=>`
                  <button type="button" class="nav-link ${re.currentView===i?"active":""}" onclick="game.setView('${i}')" ${re.currentView===i?'aria-current="page"':""}>
                    <span class="nav-icon">${We(Je[i].icon)}</span>
                    <span class="min-w-0">
                      <span class="block font-bold leading-tight">${Je[i].label}</span>
                      <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${Je[i].short}</span>
                    </span>
                  </button>
                `).join("")||'<div class="text-sm text-slate-300/55 px-2 py-1">Ya visible en la barra inferior.</div>'}
              </div>
            </section>
          `).join("")}
        </div>
      </div>
    </div>
  `:""}const Hn={renderHud:Bn,renderDesktopNav:On,renderMobileNav:Nn,renderMobileSheet:zn};function _n(a){const{SLOT_ORDER:i,ZONES:f,SKILLS:S,state:r,maxInventory:L,getPetData:q,getDerivedStats:b,currentRank:x,zoneForPlayer:C,summarizeReward:F,fmt:z,pct:R,htmlStat:A,timeLeft:K,icon:m,translateFilter:t,tooltipAttr:g,statusChip:E,sectionHeader:p,infoCard:$,actionButton:M,actionBar:D,pageLead:e,questCard:n,equippedSlotCard:c,inventoryCards:h,zoneSelector:y}=a;function o(){return r.timers.expedition?K(r.timers.expedition.endAt):"0s"}function u(){return r.timers.job?K(r.timers.job.endAt):"0s"}function v(){const V=C(),l=r.quests.find(Z=>!Z.claimed)||r.quests[0],k=r.quests.filter(Z=>!Z.claimed).length,P=r.player.inventory.length/Math.max(1,L()),H=P>=.9?E("Mochila al límite","danger"):P>=.7?E("Mochila alta","warning"):E("Mochila estable","success");return`
      <div class="space-y-5">
        ${e("resumen",`Zona activa: <b>${V.name}</b> · Contratos pendientes: <b>${k}</b>`,[M("⚔️ Continuar en arena","btn-primary","game.setView('arena')","Entra directo a combate para progreso activo, oro y botín."),M("🎒 Ordenar inventario","","game.setView('inventario')","Optimiza mochila y equipo antes de seguir peleando."),M("🧭 Lanzar expedición","btn-violet","game.setView('expedicion')","Activa progreso pasivo cuando no quieras jugar en modo activo.")].join(""))}

        ${D([M("⚔️ Arena","btn-primary !py-3","game.setView('arena')"),M("🎒 Inventario","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.15fr,.85fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${p("Ruta recomendada","Elige una sola acción y sigue","La vista resumen prioriza la siguiente decisión y deja el resto como contexto.")}
            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('arena')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Pelear ahora</div>
                  ${E("Principal","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Usa Arena para mantener ritmo de progreso y conseguir botín inmediato.</p>
              </button>

              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('inventario')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Ajustar build</div>
                  ${H}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Abre Inventario si tienes mejoras pendientes o la mochila está cargada.</p>
              </button>

              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('expedicion')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Progreso pasivo</div>
                  ${E(r.timers.expedition?"Activo":"Disponible",r.timers.expedition?"success":"")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Expedición y Trabajo sostienen recursos cuando dejas la sesión en segundo plano.</p>
              </button>
            </div>

            <div class="mt-5 grid sm:grid-cols-2 gap-3">
              ${$("Expedición",r.timers.expedition?`${f[r.timers.expedition.zoneId].name} · <span data-live-timer="expedition">${o()}</span>`:"No hay expedición activa.","surface-subtle")}
              ${$("Trabajo",r.timers.job?`${r.timers.job.name} · <span data-live-timer="job">${u()}</span>`:"No hay trabajo activo.","surface-subtle")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${p("Objetivo en foco","Un contrato visible")}
              ${l?n(l):'<div class="empty-state">No hay contratos disponibles.</div>'}
              <div class="mt-4 grid grid-cols-2 gap-2">
                <button type="button" class="btn" onclick="game.setView('diario')">Diario</button>
                <button type="button" class="btn" onclick="game.setView('logros')">Logros</button>
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${p("Estado rápido","Solo señales de decisión")}
              <div class="grid grid-cols-2 gap-3">
                ${A("Mochila",`${r.player.inventory.length}/${L()}`,"","Capacidad usada frente al máximo disponible.")}
                ${A("Llaves",r.player.keys)}
                ${A("Pociones",r.player.potions)}
                ${A("Racha",`${r.streak.days||0}/7`)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function B(){const V=b(),l=x(),k=q(),P=V.maxHp?Math.round(r.player.hp/V.maxHp*100):100;return`
      <div class="space-y-5">
        ${e("perfil",`Rango activo: <b>${l.title}</b> · Salud: <b>${P}%</b>`,[M("🎒 Ver equipo","btn-primary","game.setView('inventario')"),M("🏋️ Entrenar","","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${p("Identidad y rendimiento","Quién eres y cómo rindes","Esta pantalla separa tu perfil, estado de combate y progreso meta.")}

            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Gladiador</div>
                <div class="text-3xl font-black mt-1 leading-tight">${r.player.name}</div>
                <div class="text-sm text-cyan-200/85 mt-1">${r.player.title}</div>
              </div>
              <div class="grid grid-cols-2 gap-3 sm:min-w-[250px]">
                ${A("Ascensiones",r.player.ascension,"","Cantidad de reinicios meta completados para progresión permanente.")}
                ${A("Piso más alto",r.player.highestDungeonFloor,"","Mayor piso de mazmorra superado hasta ahora.")}
                ${A("Inventario",`${r.player.inventory.length}/${L()}`,"","Capacidad actual de la mochila frente a su límite máximo.")}
                ${A("Polvo",r.player.relicDust,"","Moneda meta usada en reliquias y mejoras permanentes.")}
              </div>
            </div>

            <div class="mt-5 space-y-3">
              <div>
                <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-2">Stats críticas</div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  ${A("Ataque",z(V.attack))}
                  ${A("Defensa",z(V.defense))}
                  ${A("Velocidad",z(V.speed))}
                  ${A("Vida máxima",z(V.maxHp),"","Total de salud disponible antes de caer derrotado.")}
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
                  ${A("Golpe crítico",R(V.crit),"","Probabilidad de infligir daño aumentado en combate.")}
                  ${A("Esquiva",R(V.dodge))}
                  ${A("Bloqueo",R(V.block))}
                  ${A("Robo de vida",R(V.lifesteal),"","Porcentaje del daño que regresa como curación.")}
                </div>
              </details>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${p("Equipo equipado","Lectura rápida de build")}
              <div class="space-y-2">${i.slice(0,4).map(c).join("")}</div>
              <button type="button" class="btn mt-4 w-full" onclick="game.setView('inventario')">Abrir inventario completo</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${p("Apoyos","Mascota y utilidades de sesión")}
              <div class="grid gap-3">
                ${k?$(`${m(k.icon||"paw","h-4 w-4 inline-block mr-2 align-[-0.15em]")}${k.name}`,`Nivel ${r.player.petLevel} · XP ${r.player.petXp}/${3+r.player.petLevel}<br>${k.desc}`,"surface-subtle"):$("Sin mascota activa","Incuba una en la vista de Mascota.","surface-subtle")}
              </div>
              <div class="grid grid-cols-2 gap-2 mt-4">
                <button type="button" class="btn btn-success" onclick="game.usePotion()" ${g("Consume una poción para recuperar salud fuera de combate.")}>🧪 Poción</button>
                <button type="button" class="btn btn-primary" onclick="game.autoHeal()" ${g("Aplica una curación automática si tienes recursos disponibles.")}>🩹 Curar</button>
                <button type="button" class="btn btn-gold" onclick="game.claimDaily()" ${g("Reclama tu recompensa diaria cuando esté lista.")}>🎁 Diario</button>
                <button type="button" class="btn" onclick="game.setView('mascota')" ${g("Abre la gestión de tu mascota activa y sus bonificaciones.")}>🐾 Mascota</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function O(){const V=["weapon","chest","ring","amulet"].map(c).join(""),l=r.ui.inventoryFilter,k=r.player.inventory.length,P=r.player.inventory.filter(Z=>{const W=r.player.equipment[Z.slot];return!W||(Z.score||0)>(W.score||0)}).length,H=r.player.inventory.filter(Z=>Z.rarity==="legendary"||Z.rarity==="mythic").length;return`
      <div class="space-y-5">
        ${e("inventario",`Capacidad: <b>${r.player.inventory.length}/${L()}</b> · Mejoras potenciales: <b>${P}</b>`,[M("🧹 Gestión automática","btn-primary","game.autoManage()","Vende y recicla excedentes de forma automática."),M("⚒️ Forja","","game.setView('forja')"),M("🛒 Mercado","btn-violet","game.setView('mercado')")].join(""))}

        ${D([M("🧹 Limpiar","btn-primary !py-3","game.autoManage()"),M("⚒️ Forja","!py-3","game.setView('forja')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${p("Mochila","Filtra, compara y actúa","El inventario prioriza lectura rápida de mejoras y acciones de alto impacto.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${A("Objetos",k,"Total en mochila")}
              ${A("Mejoras",P,"Comparadas contra equipado")}
              ${A("Raros+",H,"Legendarios y míticos")}
            </div>

            <div class="space-y-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Filtro por tipo</div>
                <div class="filters-row mt-2">
                  ${["all",...i].map(Z=>`
                    <button type="button" class="btn filter-pill ${l===Z?"active tab-btn":""}" onclick="game.setInventoryFilter('${Z}')" ${g(`Filtrar inventario por ${t(Z).toLowerCase()}.`)}>${t(Z)}</button>
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
                  ${["common","uncommon","rare","epic","legendary","mythic"].map(Z=>`
                    <button type="button" class="btn filter-pill ${l===Z?"active tab-btn":""}" onclick="game.setInventoryFilter('${Z}')" ${g(`Filtrar inventario por ${t(Z).toLowerCase()}.`)}>${t(Z)}</button>
                  `).join("")}
                </div>
              </details>
            </div>

            ${h()}
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
              <div class="mt-4 space-y-2">${V}</div>
            </details>

            <div class="glass rounded-3xl p-5">
              ${p("Reglas rápidas","Qué vender o guardar")}
              <div class="grid gap-3">
                ${$("Prioridad","Equipa mejoras claras primero, luego limpia duplicados de bajo puntaje.","surface-subtle")}
                ${$("Si dudas","Si no mejora build ni economía, recicla o vende para liberar capacidad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function d(){const V=C(),l=r.player.activeSkills.map(W=>S[W]).filter(Boolean),k=r.combatHistory.slice(0,2),P=b(),Z=(P.maxHp?r.player.hp/P.maxHp:1)<.5?"normal":l.length>=2?"elite":"normal";return`
      <div class="space-y-5">
        ${e("arena",`Zona: <b>${V.name}</b> · Coste <b>${V.energyCost}⚡ / ${V.staminaCost}💪</b>`,[M("⚔️ Normal","btn-primary","game.fightArena('normal')"),M("👑 Élite","btn-violet","game.fightArena('elite')"),M("🔥 x3","btn-gold","game.arenaBlitz(3)")].join(""))}

        ${D([M("⚔️ Normal","btn-primary !py-3","game.fightArena('normal')"),M("👑 Élite","btn-violet !py-3","game.fightArena('elite')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${p("Combate","Decide modo y entra","La arena muestra la decisión principal primero. Zona, build e historial quedan como soporte.")}

            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left" onclick="game.fightArena('normal')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Normal</div>
                  ${E(Z==="normal"?"Recomendado":"Estable","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Flujo seguro para mantener ritmo cuando estás ajustando build.</p>
              </button>

              <button type="button" class="surface-strong elite-card rounded-2xl p-4 text-left" onclick="game.fightArena('elite')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Élite</div>
                  ${E(Z==="elite"?"Recomendado":"Riesgo","warning")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Más exigente, mejor retorno cuando ya tienes vida y habilidades estables.</p>
              </button>

              <button type="button" class="surface-strong reward-card rounded-2xl p-4 text-left" onclick="game.arenaBlitz(3)">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Racha x3</div>
                  ${E("Acelerar")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Multiplica combates para subir ritmo cuando dominas la zona actual.</p>
              </button>
            </div>

            <div class="grid sm:grid-cols-3 gap-3 mt-4">
              ${A("Zona activa",V.name,V.theme)}
              ${A("Coste",`${V.energyCost}⚡ / ${V.staminaCost}💪`,"Por combate")}
              ${A("Registro",`${r.stats.wins}V / ${r.stats.losses}D`,"Historial global")}
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
              <div class="mt-4">${y()}</div>
            </details>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${p("Preparación","Build activa para la zona")}
              <div class="grid gap-3">
                ${$("Habilidades activas",l.length?l.map(W=>`${W.name} · Nv ${r.player.skillLevels[W.id]||1}`).join("<br>"):"No hay habilidades activas equipadas.","surface-subtle")}
                ${$("Contexto",`Victorias ${r.stats.wins} · Derrotas ${r.stats.losses} · Bajas ${r.stats.kills}`,"surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${p("Historial","Últimos resultados")}
              <div class="space-y-3">
                ${k.length?k.map(W=>`
                    <button type="button" class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${W.id}')">
                      <div class="font-black ${W.result==="victory"?"text-emerald-300":"text-rose-300"}">${W.title}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${W.zone}</div>
                      <div class="text-xs text-slate-300/58 mt-2">${F(W.rewards)}</div>
                    </button>
                  `).join(""):'<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}return{renderResumen:v,renderPerfil:B,renderInventario:O,renderArena:d}}function Fn(a){const{SLOT_ORDER:i,SLOT_NAMES:f,ZONES:S,JOBS:r,PETS:L,SKILLS:q,ACHIEVEMENTS:b,state:x,getPetData:C,guildTotal:F,achievementProgress:z,fmt:R,htmlStat:A,progressBar:K,icon:m,tooltipAttr:t,replaceEmojiIcons:g,rarityName:E,rarityBadge:p,zoneSelector:$,compareAgainstEquipped:M,itemStatGrid:D,durationChoiceCard:e,pager:n,expeditionTimerText:c,jobTimerText:h,pageLead:y,sectionHeader:o,infoCard:u,actionButton:v,actionBar:B,statusChip:O}=a;function d(){const T=!!x.timers.expedition;return`
      <div class="space-y-5">
        ${y("expedicion",T?`En curso: <b>${S[x.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${c()}</span>`:"Sin expedición activa",[v("30s","btn-primary",`game.startExpedition(${x.player.zoneId}, 30)`),v("60s","",`game.startExpedition(${x.player.zoneId}, 60)`),v("120s","btn-gold",`game.startExpedition(${x.player.zoneId}, 120)`)].join(""))}

        ${B([v("30s","btn-primary !py-3",`game.startExpedition(${x.player.zoneId}, 30)`),v("120s","btn-gold !py-3",`game.startExpedition(${x.player.zoneId}, 120)`)])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Elige destino","Primero define una zona segura para tu estado actual de recursos.")}
            ${$()}

            <div class="mt-5">
              ${o("Decisión","Elige duración","Duraciones cortas para control activo, largas para progreso pasivo.")}
              <div class="grid lg:grid-cols-3 gap-3">
                ${e(30,"success","Salida corta para mantener flujo y reaccionar rápido.")}
                ${e(60,"","Balance para sesiones mixtas entre combate y gestión.")}
                ${e(120,"warning","Más retorno si vas a dejar la partida corriendo.")}
              </div>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Soporte","Regla rápida")}
              <div class="grid gap-3">
                ${u("Estado actual",T?"Ya tienes una expedición activa: espera el temporizador o cambia de foco.":"No hay expedición activa: puedes lanzar una ruta ahora.","surface-subtle")}
                ${u("Destino","Usa zonas cómodas cuando solo quieres materiales estables.","surface-subtle")}
                ${u("Después","Cuando termine, vuelve a Arena o Inventario para cerrar el ciclo.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function V(){const T=x.player.keys>0;return`
      <div class="space-y-5">
        ${y("mazmorra",`Llaves: <b>${x.player.keys}</b> · Piso más alto: <b>${x.player.highestDungeonFloor}</b>`,[v("🗝️ Entrar","btn-gold","game.runDungeon()","Consume una llave y empieza una incursión de mazmorra."),v("🎒 Revisar equipo","","game.setView('inventario')")].join(""))}

        ${B([v("🗝️ Entrar","btn-gold !py-3","game.runDungeon()"),v("🎒 Equipo","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Ruta de incursión","La mazmorra tiene un recorrido fijo por intento: entra solo cuando estés listo.")}
            <div class="grid gap-2 text-sm">
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>1. Enemigo base</span>${O("Entrada")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>2. Enemigo base</span>${O("Presión")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>3. Enemigo élite</span>${O("Riesgo","warning")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>4. Jefe del piso</span>${O("Pico","danger")}</div>
            </div>

            <div class="mt-4 grid sm:grid-cols-3 gap-3">
              ${A("Llaves",x.player.keys,T?"Listo para entrar":"Necesitas conseguir llaves")}
              ${A("Piso récord",x.player.highestDungeonFloor,"Tu tope actual")}
              ${A("Estado",T?"Disponible":"Bloqueado",T?"Tienes acceso inmediato":"Visita mercado o recompensas")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Decisión","¿Entrar ahora?")}
              <div class="grid gap-3">
                ${u("Recompensa","Oro, XP, esencia, fragmentos, llaves extra y botín de mayor calidad.","reward-card","Las mazmorras elevan el techo de recompensa frente al farmeo básico.")}
                ${u("Checklist","Entra cuando tengas llaves, pociones y una build ya ordenada.","surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${o("Soporte","Siguiente paso")}
              <div class="grid gap-2">
                <button type="button" class="btn" onclick="game.setView('inventario')">Ajustar equipo</button>
                <button type="button" class="btn" onclick="game.setView('arena')">Subir recursos en Arena</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function l(){const T=[...x.market.items].sort((Q,ne)=>(ne.score||0)-(Q.score||0))[0],I=x.market.items.filter(Q=>(Q.price||0)<=x.player.gold).length,N=x.market.items.filter(Q=>M(Q).tone==="success").length;return`
      <div class="space-y-5">
        ${y("mercado",`Oro disponible: <b>${R(x.player.gold)}</b>`,[v("🔄 Refrescar","btn-primary","game.refreshMarket()","Renueva la rotación del mercado con nuevas ofertas."),v("🎒 Comparar con mochila","","game.setView('inventario')","Abre el inventario para comparar las ofertas con tu equipo actual.")].join(""))}

        ${B([v("🔄 Refrescar","btn-primary !py-3","game.refreshMarket()"),v("🎒 Mochila","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Rotación actual","Compra solo mejoras reales: evita gastar oro en cambios de impacto bajo.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${A("Comprables",I,"Con tu oro actual")}
              ${A("Mejoras",N,"Frente al equipo equipado")}
              ${A("Oferta top",T?f[T.slot]:"—",T?T.name:"Sin oferta destacada")}
            </div>

            ${T?`
              <div class="surface-strong reward-card rounded-2xl p-4 mb-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Oferta destacada</div>
                    <div class="mt-1 flex flex-wrap items-center gap-2">
                      <div class="font-black rarity-${T.rarity} text-lg leading-snug">${T.name}</div>
                      ${p(T.rarity)}
                    </div>
                    <p class="text-sm text-slate-300/74 mt-2">${M(T).detail}</p>
                  </div>
                  <div class="shrink-0 text-right">
                    <div class="text-sm font-bold text-amber-200">${R(T.price)} oro</div>
                    <div class="mt-2">${O(M(T).label,M(T).tone)}</div>
                  </div>
                </div>
              </div>
            `:""}

            <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              ${x.market.items.map(Q=>{const ne=M(Q),ce=(Q.price||0)<=x.player.gold;return`
                  <div class="glass rounded-2xl p-4 market-card ${ce?"":"opacity-80"}" ${t(`Oferta de rareza ${E(Q.rarity)}. Precio ${R(Q.price)} de oro. ${ne.detail}`)}>
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${Q.rarity} leading-snug">${Q.name}</div>${p(Q.rarity)}</div>
                        <div class="text-xs text-slate-300/60 mt-1">${f[Q.slot]} · Nivel ${Q.level}</div>
                      </div>
                      ${O(ne.label,ne.tone)}
                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      ${D(Q,4)}
                    </div>

                    <div class="market-meta mt-3">
                      <span class="text-sm text-slate-300/72">${ne.detail}</span>
                      <span class="text-sm font-bold ${ce?"text-amber-200":"text-rose-200"}">${R(Q.price)} oro</span>
                    </div>

                    <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.buyMarketItem('${Q.id}')" ${ce?"":"disabled"}>Comprar</button>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Decisión","Qué mirar antes de comprar")}
              <div class="grid gap-3">
                ${u("Oferta destacada",T?`${T.name} lidera la rotación actual.`:"No hay oferta destacada ahora mismo.","reward-card")}
                ${u("No fuerces compra","Si nada mejora de verdad, conserva oro para una mejor rotación o para forja.","surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${o("Soporte","Consumibles útiles")}
              <div class="grid gap-2">
                <button type="button" class="btn btn-success" onclick="game.buyResource('potion')" ${t("Compra una poción para curarte más tarde por 120 de oro.")}>🧪 Poción · 120 oro</button>
                <button type="button" class="btn btn-violet" onclick="game.buyResource('key')" ${t("Compra una llave para acceder a mazmorras por 180 de oro.")}>🗝️ Llave · 180 oro</button>
                <button type="button" class="btn btn-primary" onclick="game.buyResource('essence')" ${t("Compra esencia para forja y progresión premium por 140 de oro.")}>✨ Esencia · 140 oro</button>
                <button type="button" class="btn" onclick="game.buyResource('food')" ${t("Compra comida para apoyar trabajos y mascotas por 65 de oro.")}>🍖 Comida x2 · 65 oro</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function k(){return`
      <div class="space-y-5">
        ${y("forja",`Hierro: <b>${R(x.player.iron)}</b> · Esencia: <b>${R(x.player.essence)}</b>`,[v("⚒️ Forjar arma","btn-primary","game.forgeItem('weapon', 'normal')","Forja un arma estándar con coste moderado y rareza controlada."),v("✨ Premium arma","btn-violet","game.forgeItem('weapon', 'premium')","Forja un arma premium con mayor acceso a rarezas altas."),v("🎒 Revisar inventario","","game.setView('inventario')")].join(""))}

        ${B([v("⚒️ Normal","btn-primary !py-3","game.forgeItem('weapon', 'normal')"),v("✨ Premium","btn-violet !py-3","game.forgeItem('weapon', 'premium')")])}

        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Creación por espacio","Forja normal para volumen. Premium para apostar por rarezas altas.")}
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${i.map(T=>`
                <div class="glass rounded-2xl p-4 forge-recipe-card">
                  <div class="font-bold">${f[T]}</div>
                  <div class="text-sm text-slate-300/70 mt-1">Pieza aleatoria del hueco.</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2" ${t("Forja normal: más común, barata y orientada a volumen.")}>Normal <b>hierro</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2" ${t("Forja premium: más costosa y con mejor acceso a rarezas altas.")}>Premium <b>esencia</b></div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button type="button" class="btn btn-primary !py-2" onclick="game.forgeItem('${T}', 'normal')">Forjar</button>
                    <button type="button" class="btn btn-violet !py-2" onclick="game.forgeItem('${T}', 'premium')">Premium</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Decisión","Mejorar equipado","Invierte solo en piezas que ya decidiste conservar.")}
              <div class="space-y-3 mt-4">
                ${["weapon","chest","ring","amulet"].map(T=>{const I=x.player.equipment[T];return`
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${f[T]}</div>
                       <div class="font-black break-words ${I?`rarity-${I.rarity}`:"text-slate-400/80"}">${I?I.name:"Vacío"}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${I?`Nivel ${I.level} · Mejora +${I.upgrade||0}`:"Equipa algo para mejorarlo."}</div>
                      <button type="button" class="btn btn-gold mt-3 w-full" ${I?`onclick="game.upgradeEquipped('${T}')"`:"disabled"} ${t("Sube el nivel de mejora de la pieza equipada y aumenta sus estadísticas.")}>⚒️ Mejorar</button>
                    </div>
                  `}).join("")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${o("Soporte","Regla de gasto")}
              <div class="grid gap-3">
                ${u("Hierro","Úsalo para generar volumen y buscar base útil.","surface-subtle")}
                ${u("Esencia","Resérvala para intentos premium y mejoras clave.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function P(){const T={barracks:"Más ataque y defensa global.",treasury:"Más oro en todas las actividades.",sanctuary:"Más vida máxima y regeneración.",hunters:"Mejor botín y hallazgos más finos.",arsenal:"Más capacidad de inventario."};return`
      <div class="space-y-5">
        ${y("gremio",`Nivel total invertido: <b>${F()}</b>`,[v("🪙 Ver mercado","","game.setView('mercado')"),v("🏋️ Entrenar","btn-primary","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Mejoras del gremio","Cada edificio empuja un estilo de progreso distinto.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${Object.entries(x.player.guild).map(([I,N])=>{const Q=N+1,ne=180+Q*110+F()*35,ce=Math.max(1,Math.floor(Q/2));return`
                  <div class="glass rounded-2xl p-4">
                    <div class="font-black text-lg capitalize" ${t(T[I])}>${I}</div>
                    <div class="text-sm text-slate-300/75 mt-1">${T[I]}</div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div class="rounded-xl bg-white/[.04] p-2">Nivel <b>${N}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Siguiente <b>${Q}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Oro <b>${R(ne)}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Esencia <b>${R(ce)}</b></div>
                    </div>
                    <button type="button" class="btn btn-violet mt-3 w-full" onclick="game.upgradeGuild('${I}')">Mejorar</button>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Decisión","Cómo repartir inversión")}
              <div class="grid gap-3">
                ${u("Especialízate","Sube uno o dos edificios primero para sentir impacto temprano.","surface-subtle")}
                ${u("Prioridad típica","Tesorería y Barracas suelen notarse antes en la partida.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function H(){return`
      <div class="space-y-5">
        ${y("entrenamiento",`Puntos de atributo: <b>${x.player.attributePoints}</b> · habilidades: <b>${x.player.skillPoints}</b>`,[v("👤 Perfil","","game.setView('perfil')"),v("⚔️ Arena","btn-primary","game.setView('arena')")].join(""))}

        <div class="grid xl:grid-cols-[.95fr,1.05fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Atributos base","Primero ajusta base estadística; después pule habilidades activas.")}
            <div class="grid sm:grid-cols-2 gap-3">
              ${[["strength","Fuerza","Ataque y robo de vida."],["agility","Agilidad","Velocidad, crítico y esquiva."],["endurance","Resistencia","Vida, defensa y bloqueo."],["discipline","Disciplina","Energía y aguante máximo."]].map(([T,I,N])=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${I}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${N}</div>
                  <div class="text-sm mt-3">Nivel actual: <b>${x.player.training[T]}</b></div>
                  <button type="button" class="btn btn-primary mt-3 w-full" onclick="game.trainAttribute('${T}')">Subir</button>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="glass rounded-3xl p-5">
            ${o("Decisión","Habilidades activas")}
            <div class="space-y-3">
              ${Object.values(q).map(T=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${T.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${T.desc}</div>
                  <div class="text-xs text-slate-300/60 mt-2">Recarga ${T.cooldown} · Desbloqueo Nv ${T.unlockLevel}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button type="button" class="btn !py-2" onclick="game.toggleSkill('${T.id}')">${x.player.activeSkills.includes(T.id)?"Quitar":"Equipar"}</button>
                    <button type="button" class="btn btn-violet !py-2" ${x.player.unlockedSkills.includes(T.id)?`onclick="game.upgradeSkill('${T.id}')"`:"disabled"}>Mejorar</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function Z(){const T=!!x.timers.job;return`
      <div class="space-y-5">
        ${y("trabajo",T?`En curso: <b>${x.timers.job.name}</b> · <span data-live-timer="job">${h()}</span>`:"Sin trabajo activo",[v("🧭 Expedición","","game.setView('expedicion')"),v("💰 Mercado","btn-gold","game.setView('mercado')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Trabajos disponibles","Elige una fuente de oro estable cuando no quieras combate activo.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${r.map(I=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black text-lg">${I.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${I.desc}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Duración <b>${I.duration}s</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${R(I.reward.gold)} oro</b></div>
                  </div>
                  <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.startJob('${I.id}')" ${t("Inicia este trabajo y bloquea el temporizador hasta su finalización.")}>Aceptar</button>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Soporte","Regla rápida")}
              <div class="grid gap-3">
                ${u("Estado",T?"Ya tienes un trabajo activo: espera el temporizador.":"No hay trabajo activo: puedes aceptar uno ahora.","surface-subtle")}
                ${u("Alternativa","Si también quieres botín, Expedición suele aportar más variedad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function W(){const T=C();return`
      <div class="space-y-5">
        ${y("mascota",T?`Activa: <b>${T.name}</b>`:"Aún no tienes mascota",[v("👤 Perfil","","game.setView('perfil')"),v("🥚 Incubar","btn-violet","game.hatchPet()","Consume recursos para obtener una mascota aleatoria.")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Mascota activa","Gestiona alimentación y progreso solo del compañero que llevas activo.")}
            ${T?`
              <div class="glass rounded-2xl p-5">
                <div class="text-cyan-200">${m(T.icon||"paw","h-9 w-9")}</div>
                <div class="font-display font-extrabold text-2xl mt-2">${T.name}</div>
                <div class="text-sm text-slate-300/75 mt-1">${T.desc}</div>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  ${A("Nivel",x.player.petLevel)}
                  ${A("XP",`${x.player.petXp}/${3+x.player.petLevel}`)}
                </div>
                <div class="grid sm:grid-cols-2 gap-3 mt-4">
                  <button type="button" class="btn btn-success" onclick="game.feedPet()">${m("box","h-4 w-4")}<span>Alimentar</span></button>
                  <button type="button" class="btn btn-danger" onclick="game.releasePet()" ${t("Libera la mascota actual y pierdes sus bonos activos.")}>Liberar</button>
                </div>
              </div>
            `:`
              <div class="glass rounded-2xl p-5">
                <p class="text-sm text-slate-300/75">Incuba un huevo con 5 fragmentos y 8 de esencia para recibir un compañero aleatorio.</p>
                <button type="button" class="btn btn-violet mt-4" onclick="game.hatchPet()">${m("spark","h-4 w-4")}<span>Incubar huevo</span></button>
              </div>
            `}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${o("Soporte","Catálogo rápido")}
            <div class="grid gap-3">
              ${L.map(I=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-bold font-display inline-flex items-center gap-2">${m(I.icon||"paw","h-4 w-4")}<span>${I.name}</span></div>
                  <div class="text-sm text-slate-300/75 mt-1">${I.desc}</div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function ee(){const T=b.slice(0,6);return`
      <div class="space-y-5">
        ${y("logros",`Polvo de reliquia: <b>${x.player.relicDust}</b>`,[v("🔱 Ascender","btn-gold","game.ascend()","Reinicia gran parte del progreso para ganar mejoras meta permanentes."),v("📘 Diario","","game.setView('diario')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Hitos activos","Se muestra una selección corta para mantener foco de progresión.")}
            <div class="space-y-3">
              ${T.map(I=>{const N=z(I),Q=x.claimedAchievements.includes(I.id);return`
                  <div class="glass rounded-2xl p-4">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black text-lg">${I.title}</div>
                        <div class="text-sm text-slate-300/75 mt-1">${I.desc}</div>
                      </div>
                      <div class="text-sm rounded-full px-3 py-1 ${Q?"bg-emerald-400/15 text-emerald-300 border border-emerald-300/20":"bg-white/[.05]"}">${Q?"Listo":`${N}/${I.target}`}</div>
                    </div>
                    <div class="mt-3">${K(N,I.target,"bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-300 shadow-[0_0_18px_rgba(34,211,238,.30)]","Progreso","Avance total hacia este logro y sus recompensas meta.")}</div>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Decisión","Ascensión")}
              <p class="text-sm text-slate-300/75 mt-2">Actívala cuando quieras convertir una partida avanzada en progreso permanente.</p>
              <button type="button" class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${t("Reinicia gran parte de la partida a cambio de progreso meta permanente.")}>🔱 Ascender</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${o("Soporte","Altar de reliquias")}
              <div class="grid gap-3 mt-4">
                ${[["wrath","Ira"],["fortune","Fortuna"],["vitality","Vitalidad"],["momentum","Impulso"]].map(([I,N])=>`
                  <button type="button" class="btn btn-violet justify-between" onclick="game.spendRelic('${I}')" ${t(`Invierte polvo de reliquia en ${N.toLowerCase()} para obtener bonificaciones permanentes.`)}><span>${N}</span><span>Nv ${x.player.relics[I]}</span></button>
                `).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function oe(){const T=Math.max(8,x.ui.journalPageSize||16),I=x.journal||[],N=Math.max(1,Math.ceil(I.length/T)),Q=Math.min(Math.max(1,x.ui.journalPage||1),N),ne=(Q-1)*T,ce=I.slice(ne,ne+T);return`
      <div class="space-y-5">
        ${y("diario",`Entradas guardadas: <b>${I.length}</b>`,[v("🏆 Ver logros","","game.setView('logros')"),v("📋 Resumen","btn-primary","game.setView('resumen')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,300px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Contexto","Registro reciente","El diario es histórico: úsalo para revisar, no para decidir acciones inmediatas.")}
            <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${I.length?ne+1:0}</b>–<b>${Math.min(ne+T,I.length)}</b> de <b>${I.length}</b>.</div>
            <div class="space-y-3">
              ${ce.map(fe=>`
                <div class="glass rounded-2xl p-4 cv-auto">
                  <div class="font-black">${g(fe.icon)} <span class="font-semibold">${new Date(fe.ts).toLocaleTimeString("es-ES")}</span></div>
                  <div class="text-sm text-slate-200/90 leading-relaxed mt-2">${fe.text}</div>
                </div>
              `).join("")||'<div class="text-sm text-slate-300/75">Todavía no hay entradas en el diario.</div>'}
            </div>
            ${n(Q,N,"setJournalPage")}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${o("Soporte","Uso recomendado")}
            <div class="grid gap-3">
              ${u("Consulta","Revisa aquí eventos y recompensas pasadas.","surface-subtle")}
              ${u("Acción","Para progresar, vuelve a Resumen, Arena o Inventario.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}return{renderExpedicion:d,renderMazmorra:V,renderMercado:l,renderForja:k,renderGremio:P,renderEntrenamiento:H,renderTrabajo:Z,renderMascota:W,renderLogros:ee,renderDiario:oe}}const{SLOT_ORDER:$t,SLOT_NAMES:at,ZONES:nt,JOBS:Gn,PETS:Jn,SKILLS:kt,ACHIEVEMENTS:Zn,fmt:Me,pct:wt,htmlStat:He,progressBar:St,timeLeft:st,state:le,maxInventory:Wn,getPetData:Mt,getDerivedStats:Qn,scaleItemStats:Kn,guildTotal:Yn,currentRank:Un,zoneForPlayer:Xn,isZoneUnlocked:Xe,summarizeReward:Et,achievementProgress:es,icon:Qe,replaceEmojiIcons:ts,rarityName:At,rarityBadge:it,translateFilter:as,statLabel:ns,statTooltip:ss,tooltipAttr:Ve,statusChip:Ye,sectionHeader:jt,infoCard:Ct,actionButton:It,actionBar:Pt,pageLead:Lt}=bt;function is(a){const i=le.player.equipment[a];return`
    <div class="rounded-2xl ring p-3 bg-white/[.04]">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${at[a]}</div>
          ${i?`<div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-bold leading-snug break-words rarity-${i.rarity}">${i.name}</div>${it(i.rarity)}</div>
               <div class="text-xs text-slate-300/70 mt-1">Nivel ${i.level} · Mejora +${i.upgrade||0}</div>`:'<div class="font-bold mt-1 text-slate-400/80">Vacío</div>'}
        </div>
        ${i?`<button type="button" class="btn !px-3 !py-2 text-xs" onclick="game.unequipItem('${a}')">Quitar</button>`:""}
      </div>
    </div>
  `}function rs(a){return`
    <div class="glass rounded-2xl p-4">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div class="min-w-0">
          <div class="font-black text-lg">${a.title}</div>
          <div class="text-sm text-slate-300/75 mt-1">${a.desc}</div>
          <div class="text-xs text-slate-300/60 mt-3">${Et(a.reward)}</div>
        </div>
        <button type="button" class="btn ${a.completed?"btn-success":""}" ${a.completed&&!a.claimed?`onclick="game.claimQuest('${a.id}')"`:"disabled"}>
          ${a.claimed?"Cobrada":a.completed?"Cobrar":`${Me(a.progress)}/${Me(a.target)}`}
        </button>
      </div>
      <div class="mt-3">${St(a.progress,a.target,"bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-300 shadow-[0_0_18px_rgba(192,132,252,.32)]","Progreso","Avance actual del contrato seleccionado.")}</div>
    </div>
  `}function os(){return le.timers.expedition?st(le.timers.expedition.endAt):"0s"}function ls(){return le.timers.job?st(le.timers.job.endAt):"0s"}function Rt(a,i,f){return i<=1?"":`
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
      <div class="text-sm text-slate-300/72">Página <b>${a}</b> de <b>${i}</b></div>
      <div class="flex gap-2">
        <button type="button" class="btn !py-2 !px-3" ${a<=1?"disabled":`onclick="game.${f}(${a-1})"`}>← Anterior</button>
        <button type="button" class="btn !py-2 !px-3" ${a>=i?"disabled":`onclick="game.${f}(${a+1})"`}>Siguiente →</button>
      </div>
    </div>
  `}function Dt(){return`
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
      ${nt.map(a=>`
        <button
          type="button"
          class="text-left glass rounded-2xl p-4 transition ${le.player.zoneId===a.id?"ring ring-cyan-300/35 bg-cyan-400/8":""} ${Xe(a)?"":"opacity-45"}"
          ${Xe(a)?`onclick="game.setZone(${a.id})"`:"disabled"}
          ${Ve(`Zona ${a.name}. Requiere nivel ${a.unlockLevel} y consume ${a.energyCost} de energía y ${a.staminaCost} de aguante.`)}
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="font-black text-lg">${a.name}</div>
              <div class="text-xs text-slate-300/60 mt-1">Nivel ${a.unlockLevel}+ · ${a.theme}</div>
            </div>
            <div class="text-xs rounded-full px-2.5 py-1 bg-white/[.06]">${Xe(a)?"Activa":"Bloqueada"}</div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${Qe("bolt","h-4 w-4 text-cyan-300")}<span>${a.energyCost} energía</span></div>
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${Qe("dumbbell","h-4 w-4 text-emerald-300")}<span>${a.staminaCost} aguante</span></div>
          </div>
        </button>
      `).join("")}
    </div>
  `}function cs(a,i){return a==="crit"||a==="dodge"||a==="block"||a==="lifesteal"?wt(i):Me(i)}function rt(a){const i=le.player.equipment[a.slot];if(!i)return{label:"Mejora limpia",tone:"success",detail:"No tienes una pieza equipada en este espacio."};const f=(a.score||0)-(i.score||0);return f>0?{label:`+${Me(f)} puntuación`,tone:"success",detail:`Mejora respecto a ${i.name}.`}:f<0?{label:`${Me(f)} puntuación`,tone:"danger",detail:`Rinde peor que ${i.name}.`}:{label:"Puntuación similar",tone:"",detail:`Rinde de forma parecida a ${i.name}.`}}function Tt(a,i=4){return Object.entries(Kn(a)).slice(0,i).map(([f,S])=>`<div class="rounded-xl bg-white/[.04] p-2.5" ${Ve(ss(f))}>${ns(f)}: <b>${cs(f,S)}</b></div>`).join("")}function ds(a){const i=a.filter(S=>S.rarity==="legendary").length,f=a.filter(S=>rt(S).tone==="success").length;return`
    <div class="grid sm:grid-cols-3 gap-3 mb-4">
      ${He("Objetos filtrados",a.length)}
      ${He("Mejoras posibles",f)}
      ${He("Legendarios",i,"","Cantidad de objetos legendarios visibles en este filtro.")}
    </div>
  `}function us(a,i,f){return`
    <div class="surface-strong rounded-2xl p-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Expedición</div>
          <div class="text-2xl font-black mt-1">${a}s</div>
          <p class="text-sm text-slate-300/74 mt-2">${f}</p>
        </div>
        ${Ye(a<=30?"Corta":a<120?"Media":"Larga",i)}
      </div>
      <button type="button" class="btn ${i==="success"?"btn-primary":i==="warning"?"btn-gold":"btn-violet"} mt-4 w-full" onclick="game.startExpedition(${le.player.zoneId}, ${a})">Enviar ${a}s</button>
    </div>
  `}function ps(){let a=[...le.player.inventory];const i=le.ui.inventoryFilter;if(i!=="all"&&(a=a.filter(b=>b.slot===i||b.rarity===i)),!a.length)return'<div class="glass rounded-2xl p-5 text-slate-300/75">Tu inventario está vacío o el filtro no devuelve resultados.</div>';const f=Math.max(6,le.ui.inventoryPageSize||18),S=Math.max(1,Math.ceil(a.length/f)),r=Math.min(Math.max(1,le.ui.inventoryPage||1),S),L=(r-1)*f,q=a.slice(L,L+f);return`
    ${ds(a)}
    <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${L+1}</b>–<b>${Math.min(L+f,a.length)}</b> de <b>${a.length}</b> objetos filtrados.</div>
    <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
      ${q.map(b=>{const x=rt(b);return`
          <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro" ${Ve(`Objeto de rareza ${At(b.rarity)}. Puntuación ${Me(b.score)}. ${x.detail}`)}>
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${b.rarity} leading-snug break-words">${b.name}</div>${it(b.rarity)}</div>
                <div class="text-xs text-slate-300/60 mt-1">${at[b.slot]} · Nivel ${b.level} · Mejora +${b.upgrade||0}</div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]" ${Ve("Puntuación total estimada del objeto según sus estadísticas y mejora actual.")}>Punt. ${Me(b.score)}</div>
                <div class="mt-2">${Ye(x.label,x.tone)}</div>
              </div>
            </div>
            <p class="text-xs text-slate-300/62 mt-3">${x.detail}</p>
            <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
              ${Tt(b,4)}
            </div>
            <div class="grid gap-2 mt-4">
              <button type="button" class="btn btn-success !py-2.5 w-full" onclick="game.equipItem('${b.id}')">Equipar</button>
              <div class="grid grid-cols-3 gap-2">
                <button type="button" class="btn !py-2 text-xs" onclick="game.sellItem('${b.id}')">Vender</button>
                <button type="button" class="btn !py-2 text-xs" onclick="game.salvageItem('${b.id}')">Reciclar</button>
                <button type="button" class="btn btn-violet !py-2 text-xs" onclick="game.rerollItem('${b.id}')">Retemplar</button>
              </div>
            </div>
          </div>
        `}).join("")}
    </div>
    ${Rt(r,S,"setInventoryPage")}
  `}const ze=_n({SLOT_ORDER:$t,ZONES:nt,SKILLS:kt,state:le,maxInventory:Wn,getPetData:Mt,getDerivedStats:Qn,currentRank:Un,zoneForPlayer:Xn,summarizeReward:Et,fmt:Me,pct:wt,htmlStat:He,timeLeft:st,icon:Qe,translateFilter:as,tooltipAttr:Ve,statusChip:Ye,sectionHeader:jt,infoCard:Ct,actionButton:It,actionBar:Pt,pageLead:Lt,questCard:rs,equippedSlotCard:is,inventoryCards:ps,zoneSelector:Dt}),ye=Fn({SLOT_ORDER:$t,SLOT_NAMES:at,ZONES:nt,JOBS:Gn,PETS:Jn,SKILLS:kt,ACHIEVEMENTS:Zn,state:le,getPetData:Mt,guildTotal:Yn,achievementProgress:es,fmt:Me,htmlStat:He,progressBar:St,icon:Qe,tooltipAttr:Ve,replaceEmojiIcons:ts,rarityName:At,rarityBadge:it,zoneSelector:Dt,compareAgainstEquipped:rt,itemStatGrid:Tt,durationChoiceCard:us,pager:Rt,expeditionTimerText:os,jobTimerText:ls,pageLead:Lt,sectionHeader:jt,infoCard:Ct,actionButton:It,actionBar:Pt,statusChip:Ye});function ms(){return({resumen:ze.renderResumen,perfil:ze.renderPerfil,inventario:ze.renderInventario,arena:ze.renderArena,expedicion:ye.renderExpedicion,mazmorra:ye.renderMazmorra,mercado:ye.renderMercado,forja:ye.renderForja,gremio:ye.renderGremio,entrenamiento:ye.renderEntrenamiento,trabajo:ye.renderTrabajo,mascota:ye.renderMascota,logros:ye.renderLogros,diario:ye.renderDiario}[le.currentView]||ze.renderResumen)()}function gs(){const a=le.ui.modal;return a?`
    <div class="fixed inset-0 bg-slate-950/72 backdrop-blur-sm z-50 p-4 overflow-y-auto">
      <div class="min-h-full flex items-start justify-center py-8">
        <div class="glass-strong rounded-[2rem] p-5 sm:p-6 w-full max-w-5xl">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div>
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Detalle</div>
              <div class="text-2xl font-black">${a.title}</div>
            </div>
            <button type="button" class="btn" onclick="game.closeModal()">Cerrar</button>
          </div>
          ${a.content}
        </div>
      </div>
    </div>
  `:""}const fs={renderContent:ms,renderModal:gs};(()=>{const{STORAGE_KEY:a,VIEWS:i,VIEW_META:f}=window.AetherConfig,{$:S,clamp:r,timeLeft:L,sanitizeInlineHtml:q}=window.AetherUtils,{state:b,loadGame:x,saveGame:C,getDerivedStats:F,hardReset:z,mutate:R,subscribeStore:A,getStoreMeta:K,syncExternalState:m}=window.AetherModel,t=window.AetherSystems,g={...Hn,...fs},E=new Set(i.map(([w])=>w)),p={hud:"hud",desktopNav:"desktop-nav",content:"page-view",modal:"modal-root",mobileNav:"mobile-nav-root",mobileSheet:"mobile-sheet-root"},$=Object.create(null),M=new Set(Object.keys(p)),D=[],e={el:null,activeTarget:null,hideTimer:0,frame:0};let n=0,c=0,h=0;function y(w){return S(p[w])}function o(w){switch(w){case"hud":return g.renderHud();case"desktopNav":return g.renderDesktopNav();case"content":return g.renderContent();case"modal":return g.renderModal();case"mobileNav":return g.renderMobileNav();case"mobileSheet":return g.renderMobileSheet();default:return""}}function u(w){return w?Array.isArray(w)?w:[w]:[]}function v(w=Object.keys(p)){u(w).forEach(G=>M.add(G)),!n&&(n=window.requestAnimationFrame(()=>{n=0,V()}))}function B(){const w=y("content");!w||!w.querySelectorAll||(w.querySelectorAll('[data-live-timer="expedition"]').forEach(G=>{G.textContent=b.timers.expedition?L(b.timers.expedition.endAt):"0s"}),w.querySelectorAll('[data-live-timer="job"]').forEach(G=>{G.textContent=b.timers.job?L(b.timers.job.endAt):"0s"}))}function O(w,G){const ae=(w.getAttribute("data-card-title")||"").trim();if(ae)return ae;const ie=w.querySelector(".section-title, .font-display.font-extrabold, .font-black, .font-bold, h2, h3, h4"),se=ie?(ie.textContent||"").trim().replace(/\s+/g," "):"";return se||`Tarjeta ${G+1}`}function d(){const w=y("content");if(!w)return;const ae=Array.from(w.querySelectorAll(".glass, .glass-strong, .surface-strong, .surface-subtle")).filter(se=>!(!(se instanceof HTMLElement)||se.tagName.toLowerCase()==="details"||se.closest(".mobile-cta-bar")||se.closest("#mobile-nav-root")||se.closest("#mobile-sheet-root")));let ie=!1;ae.forEach((se,U)=>{const X=document.createElement("details");Array.from(se.attributes).forEach(te=>{X.setAttribute(te.name,te.value)}),X.classList.add("card-collapsible");const me=document.createElement("summary");me.className="card-collapsible-summary",me.setAttribute("role","button");const be=document.createElement("span");be.className="card-collapsible-label",be.textContent=O(se,U);const ge=document.createElement("span");ge.className="card-collapsible-chevron",ge.setAttribute("aria-hidden","true"),ge.textContent="▾",me.append(be,ge);const Ae=document.createElement("div");for(Ae.className="card-collapsible-body";se.firstChild;)Ae.appendChild(se.firstChild);X.append(me,Ae),!ie&&(se.classList.contains("rounded-3xl")||U===0)&&(X.open=!0,ie=!0),se.replaceWith(X)})}function V(){Object.keys(p).forEach(G=>{if(!M.has(G))return;const ae=y(G);if(!ae)return;const ie=o(G);$[G]!==ie&&(ae.innerHTML=ie,$[G]=ie,G==="content"&&d()),M.delete(G)}),B();const w=f[b.currentView]||f.resumen;document.title=`Aether Arena — ${w.label}`}function l(w=!1){if(!w&&!K().isDirty)return;if(w){h&&(clearTimeout(h),h=0),C();return}if(h)return;const G=()=>{h=0,C()};if(typeof window.requestIdleCallback=="function"){h=window.setTimeout(()=>{h=0,window.requestIdleCallback(G,{timeout:1200})},900);return}h=window.setTimeout(G,900)}function k(w){try{location.hash!==`#${w}`&&history.replaceState(null,"",`#${w}`)}catch{location.hash=w}}function P(w,G={}){if(!E.has(w))return;const ae=b.currentView;R("ui/setView",()=>{b.currentView=w,b.currentTab=w,b.ui.moreMenuOpen=!1},{source:"ui"}),G.skipHash||k(w),v(["hud","desktopNav","content","mobileNav","mobileSheet"]),ae!==w&&!G.keepScroll&&window.scrollTo(0,0),l()}function H(w){R("ui/setInventoryFilter",()=>{b.ui.inventoryFilter=w,b.ui.inventoryPage=1},{source:"ui"}),v("content"),l()}function Z(w){R("ui/setInventoryPage",()=>{b.ui.inventoryPage=Math.max(1,Number(w)||1)},{source:"ui",markDirty:!1}),v("content")}function W(w){R("ui/setJournalPage",()=>{b.ui.journalPage=Math.max(1,Number(w)||1)},{source:"ui",markDirty:!1}),v("content")}function ee(w){R("ui/toggleMoreMenu",()=>{b.ui.moreMenuOpen=typeof w=="boolean"?w:!b.ui.moreMenuOpen},{source:"ui",markDirty:!1}),v(["mobileNav","mobileSheet"])}function oe(){R("ui/closeModal",()=>{b.ui.modal=null},{source:"ui",markDirty:!1}),v("modal")}function T(w){const G=b.combatHistory.find(ae=>ae.id===w);G&&(R("ui/showCombat",()=>{b.ui.modal={type:"combat",title:q(G.title),content:`
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4">
              <div class="text-sm text-slate-300/75">${q(G.zone)}</div>
              <div class="text-sm text-slate-200/90 mt-2">${q(t.summarizeReward(G.rewards))}${G.drop?` · Botin: <span class="rarity-${G.drop.rarity}">${q(G.drop.name)}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
              <div class="space-y-2 text-sm">${G.log.map(ae=>`<div>${q(ae)}</div>`).join("")}</div>
            </div>
          </div>
        `}},{source:"ui",markDirty:!1}),v("modal"))}function I(){typeof confirm=="function"&&!confirm("¿Seguro que quieres reiniciar la partida? Se perdera el progreso local.")||(z(),P("resumen",{keepScroll:!1}),t.toast("Nueva partida iniciada","danger"),v(Object.keys(p)),l(!0))}function N(w){v(w||["hud","content","mobileSheet"]),l()}function Q(){const w=document.createElement("div");w.id="ui-tooltip",w.className="pointer-events-none fixed z-[80] hidden max-w-[290px] rounded-2xl border border-cyan-300/24 bg-slate-950/92 px-3 py-2 text-xs leading-relaxed text-slate-100 backdrop-blur-xl shadow-[0_12px_40px_rgba(2,6,23,.55)] opacity-0 translate-y-1 transition duration-150 ease-out",document.body.appendChild(w),e.el=w;function G(U){if(!U||!e.el||e.el.classList.contains("hidden"))return;const X=U.getBoundingClientRect(),me=e.el.getBoundingClientRect(),be=Math.max(12,X.top-me.height-10);let ge=X.left+X.width/2-me.width/2;ge=Math.max(12,Math.min(ge,window.innerWidth-me.width-12)),e.el.style.top=`${be}px`,e.el.style.left=`${ge}px`}function ae(U=e.activeTarget){!U||!e.el||e.frame||(e.frame=window.requestAnimationFrame(()=>{e.frame=0,G(U)}))}function ie(U){const X=U&&U.getAttribute("data-tooltip");!X||!e.el||(e.hideTimer&&(clearTimeout(e.hideTimer),e.hideTimer=0),e.activeTarget=U,e.el.innerHTML=X,e.el.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.el&&e.el.classList.remove("opacity-0","translate-y-1")}),ae(U))}function se(U){!e.activeTarget||!e.el||U&&e.activeTarget!==U&&e.activeTarget.contains(U)||(e.activeTarget=null,e.el.classList.add("opacity-0","translate-y-1"),e.hideTimer=window.setTimeout(()=>{e.el&&(e.el.classList.add("hidden"),e.hideTimer=0)},140))}document.addEventListener("mouseover",U=>{const X=U.target.closest("[data-tooltip]");X&&ie(X)}),document.addEventListener("mouseout",U=>{const X=U.target.closest("[data-tooltip]");X&&se(X)}),document.addEventListener("focusin",U=>{const X=U.target.closest("[data-tooltip]");X&&ie(X)}),document.addEventListener("focusout",U=>{const X=U.target.closest("[data-tooltip]");X&&se(X)}),document.addEventListener("mousemove",()=>{e.activeTarget&&ae(e.activeTarget)}),window.addEventListener("scroll",()=>{e.activeTarget&&ae(e.activeTarget)},!0),window.addEventListener("resize",()=>{e.activeTarget&&ae(e.activeTarget)})}function ne(){for(;D.length;){const w=D.pop();typeof w=="function"&&w()}D.push(A(w=>w._meta&&[w._meta.isSaving,w._meta.isDirty,w._meta.lastSaveAt,w._meta.lastMutationLabel].join("|"),()=>v("hud"))),D.push(A(w=>w._meta?w._meta.syncRevision:0,(w,G)=>{w!==G&&v(Object.keys(p))})),D.push(A(w=>w.ui?w.ui.modal:null,()=>v("modal"))),D.push(A(w=>w.ui?w.ui.moreMenuOpen:!1,()=>v(["mobileNav","mobileSheet"])))}const ce={setView:P,setTab:P,setInventoryFilter:H,setInventoryPage:Z,setJournalPage:W,toggleMoreMenu:ee,showCombat:T,closeModal:oe,hardReset:I};Wa(ce,{systems:t,mutate:R,afterAction:N});function fe(){const w=Date.now();let G=!1;R("system/tick",()=>{const ae=r((w-b.lastTick)/1e3,0,document.hidden?30:5);b.lastTick=w,t.passiveRegen(ae),G=t.resolveFinishedTimers(w,document.hidden);const ie=F();b.player.hp=r(b.player.hp,1,ie.maxHp),b.player.energy=r(b.player.energy,0,ie.maxEnergy),b.player.stamina=r(b.player.stamina,0,ie.maxStamina)},{source:"tick"}),(!b.lastSave||w-b.lastSave>12e3)&&l(),!document.hidden&&(v("hud"),B(),G?(v(["content","modal"]),l()):b.ui.modal&&v("modal"),b.ui.moreMenuOpen&&v(["mobileNav","mobileSheet"]))}function Ie(){c&&clearInterval(c),c=window.setInterval(fe,document.hidden?4e3:1e3)}function Pe(){const w=(location.hash||"").replace("#","").trim(),G=E.has(w)?w:b.currentView||"resumen";P(G,{skipHash:!1,keepScroll:!0})}function Ee(){const w=(location.hash||"").replace("#","").trim();E.has(w)&&w!==b.currentView&&P(w,{skipHash:!0})}function he(w){if(w.key!==a||w.newValue===w.oldValue)return;m(w.newValue)&&(v(Object.keys(p)),t.toast("Partida sincronizada desde otra pestana","cyan"))}function Be(){Q(),x(),R("system/offlineCatchup:init",()=>{t.offlineCatchup()},{source:"lifecycle"}),ne(),Pe(),v(Object.keys(p)),l(),Ie(),window.addEventListener("hashchange",Ee),document.addEventListener("visibilitychange",()=>{Ie(),document.hidden||(R("system/offlineCatchup:resume",()=>{t.offlineCatchup()},{source:"lifecycle"}),v(["hud","content","modal"]))}),window.addEventListener("storage",he),window.addEventListener("pagehide",()=>l(!0)),window.addEventListener("beforeunload",()=>l(!0))}window.game=ce,window.AetherController={queueRender:v,setView:P,closeModal:oe,showCombat:T,scheduleSave:l},Be()})();
