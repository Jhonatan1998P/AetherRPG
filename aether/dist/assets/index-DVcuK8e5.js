(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))S(d);new MutationObserver(d=>{for(const C of d)if(C.type==="childList")for(const T of C.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&S(T)}).observe(document,{childList:!0,subtree:!0});function f(d){const C={};return d.integrity&&(C.integrity=d.integrity),d.referrerPolicy&&(C.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?C.credentials="include":d.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function S(d){if(d.ep)return;d.ep=!0;const C=f(d);fetch(d.href,C)}})();const va=["weapon","offhand","helm","chest","gloves","boots","ring","amulet"],ba={weapon:"Arma",offhand:"Mano izquierda",helm:"Casco",chest:"Armadura",gloves:"Guantes",boots:"Botas",ring:"Anillo",amulet:"Amuleto"},ya=[{title:"Novato del Bronce",min:0},{title:"Aspirante de Arena",min:90},{title:"Centurion de Cristal",min:220},{title:"Campeon del Foro",min:420},{title:"Idolo de la Ciudad",min:720},{title:"Verdugo Solar",min:1100},{title:"Coloso Astral",min:1600},{title:"Inmortal del Panteon",min:2300}],ha=[{key:"common",name:"Comun",mult:1,affixes:0,value:14,order:0},{key:"uncommon",name:"Infrecuente",mult:1.14,affixes:1,value:34,order:1},{key:"rare",name:"Raro",mult:1.38,affixes:2,value:92,order:2},{key:"epic",name:"Epico",mult:1.74,affixes:3,value:240,order:3},{key:"legendary",name:"Legendario",mult:2.18,affixes:4,value:640,order:4},{key:"mythic",name:"Mitico",mult:2.82,affixes:5,value:1650,order:5}],xa={weapon:[{name:"Gladius",stats:{attack:7,speed:1}},{name:"Hacha de Coliseo",stats:{attack:9,defense:1}},{name:"Tridente del Foro",stats:{attack:8,crit:.02}},{name:"Espada Curva",stats:{attack:8,speed:2}},{name:"Lanza Escarlata",stats:{attack:10,crit:.01}}],offhand:[{name:"Escudo de Torre",stats:{defense:7,hp:18,block:.03}},{name:"Parma Ligera",stats:{defense:5,speed:2,block:.02}},{name:"Daga de Mano",stats:{attack:5,crit:.03}},{name:"Brazal Solar",stats:{defense:4,hp:10,crit:.01}}],helm:[{name:"Yelmo de Bronce",stats:{defense:5,hp:14}},{name:"Mascara del Duelo",stats:{defense:4,crit:.02}},{name:"Casco de Placas",stats:{defense:6,hp:10}},{name:"Corona de Hierro",stats:{hp:18,speed:1}}],chest:[{name:"Coraza Segmentada",stats:{defense:9,hp:28}},{name:"Pectoral de Guerra",stats:{defense:11,hp:22}},{name:"Tunica Blindada",stats:{defense:7,speed:2,hp:20}},{name:"Arnes del Leon",stats:{attack:4,defense:8,hp:18}}],gloves:[{name:"Guanteletes de Malla",stats:{defense:4,attack:2}},{name:"Guantes de Cazador",stats:{crit:.02,speed:1}},{name:"Mitones de Arena",stats:{attack:3,hp:8}},{name:"Brazales de Sangre",stats:{attack:4,lifesteal:.01}}],boots:[{name:"Grebas Reforzadas",stats:{defense:4,speed:1}},{name:"Sandalias de Arena",stats:{speed:3,dodge:.02}},{name:"Botas de Marcha",stats:{hp:10,speed:2}},{name:"Botas de Acecho",stats:{speed:2,crit:.01}}],ring:[{name:"Anillo de Plata",stats:{crit:.02,attack:2}},{name:"Sello del Foro",stats:{defense:3,hp:8}},{name:"Aro Solar",stats:{attack:3,speed:1}},{name:"Sortija Vital",stats:{hp:16}}],amulet:[{name:"Amuleto del Leon",stats:{attack:3,hp:10}},{name:"Talisman de Marmol",stats:{defense:3,block:.01}},{name:"Colgante del Alba",stats:{crit:.02,hp:8}},{name:"Medallon del Eco",stats:{speed:2,dodge:.01}}]},$a=[{prefix:"Furioso",stats:{attack:2}},{prefix:"Certero",stats:{crit:.02}},{prefix:"Agil",stats:{speed:2}},{prefix:"Imponente",stats:{hp:18}},{prefix:"Bastion",stats:{defense:3}},{prefix:"Sanguineo",stats:{lifesteal:.015}},{suffix:"del Coloso",stats:{hp:24,defense:2}},{suffix:"de la Tempestad",stats:{speed:2,crit:.01}},{suffix:"de la Caza",stats:{attack:3,crit:.01}},{suffix:"del Vigia",stats:{defense:4,block:.015}},{suffix:"de los Antiguos",stats:{hp:16,attack:2}},{suffix:"del Eclipse",stats:{attack:3,speed:1,crit:.01}}],ka=[{id:0,name:"Distrito de Arena",unlockLevel:1,energyCost:7,staminaCost:1,theme:"Callejones y plazas del coliseo",enemies:["Rufian del Foro","Apostador Violento","Mercenario de Bronce","Ladron de Tuneles"],boss:"Campeon de Grava"},{id:1,name:"Bosque Sangriento",unlockLevel:4,energyCost:9,staminaCost:1,theme:"Bestias y cazadores en la niebla",enemies:["Jabali Enloquecido","Cazador Sombrio","Tigre de Jaula","Bandido del Roble"],boss:"Gran Acechador Berkan"},{id:2,name:"Catacumbas Rotas",unlockLevel:8,energyCost:11,staminaCost:2,theme:"No muertos, guardianes y reliquias",enemies:["Esqueleto Vetusto","Fanatico de Cripta","Necrofago Roto","Guardia del Osario"],boss:"Pontifice de Hueso"},{id:3,name:"Dunas de Onice",unlockLevel:12,energyCost:13,staminaCost:2,theme:"Bestias solares y caravanas saqueadas",enemies:["Saqueador de Caravana","Escorpion de Brasa","Jinete del Viento","Chaman del Datil Negro"],boss:"Anhur, el Sol Partido"},{id:4,name:"Fortaleza del Eclipse",unlockLevel:16,energyCost:16,staminaCost:2,theme:"Caballeros caidos y maquinas de guerra",enemies:["Guardia Obsidiana","Verdugo del Eclipse","Ballestero Negro","Ingeniero del Asedio"],boss:"General Varzok"},{id:5,name:"Necropolis del Hierro",unlockLevel:21,energyCost:18,staminaCost:3,theme:"Automatas, espectros y altares profanos",enemies:["Arconte Ferrum","Espectro de Cadena","Mecanico Sacrilego","Profanador del Trono"],boss:"Maquina-Rey Nax"},{id:6,name:"Fisura Astral",unlockLevel:27,energyCost:21,staminaCost:3,theme:"Entidades del vacio y gloria absoluta",enemies:["Segador del Vacio","Centinela Astral","Bestia Prismatica","Oraculo Corrupto"],boss:"Aion, Devorador de Ecos"}],wa=[{id:"guardia",name:"Guardia del Foro",duration:45,reward:{gold:120,xp:25,food:1},desc:"Patrulla, disciplina y monedas seguras."},{id:"mercante",name:"Estiba de Mercaderes",duration:75,reward:{gold:190,xp:40,wood:2,iron:1},desc:"Carga mercancias y quedate con una comision."},{id:"arena",name:"Espectaculo Menor",duration:120,reward:{gold:320,xp:70,essence:1,potions:1},desc:"Show de arena, apuestas y fama barata."}],Sa=[{id:"wolf",name:"Lobo de Guerra",icon:"paw",desc:"Aumenta el dano y el critico.",bonus:{attackPct:.08,crit:.03}},{id:"phoenix",name:"Fenix de Ceniza",icon:"flame",desc:"Mas vida, regeneracion y esencia.",bonus:{hpPct:.1,regenPct:.15}},{id:"golem",name:"Golem de Basalto",icon:"shield",desc:"Defensa bruta y bloqueo.",bonus:{defensePct:.1,block:.03}},{id:"panther",name:"Pantera Crepuscular",icon:"spark",desc:"Velocidad, esquiva y golpes finos.",bonus:{speedPct:.08,dodge:.03}},{id:"raven",name:"Cuervo del Oraculo",icon:"feather",desc:"Mas oro, mejor botin y vision.",bonus:{goldPct:.08,lootLuck:.06}}],Ma={powerStrike:{id:"powerStrike",name:"Golpe devastador",desc:"Ataque de gran multiplicador.",unlockLevel:1,cooldown:3,mult:1.75},quickLunge:{id:"quickLunge",name:"Estocada veloz",desc:"Golpe rapido con extra de critico.",unlockLevel:1,cooldown:2,mult:1.15,critBonus:.14},fortify:{id:"fortify",name:"Guardia de acero",desc:"Golpeas y elevas tu defensa temporalmente.",unlockLevel:1,cooldown:5,mult:.82,selfBuff:{defensePct:.24,turns:2,shieldPct:.08}},shieldBash:{id:"shieldBash",name:"Embestida de escudo",desc:"Rompe la defensa rival. Requiere mano izquierda.",unlockLevel:5,cooldown:4,mult:1.32,requireOffhand:!0,armorBreak:{pct:.18,turns:2}},bloodRage:{id:"bloodRage",name:"Rabia sanguinea",desc:"Gran drenaje de vida en el impacto.",unlockLevel:7,cooldown:5,mult:1.38,lifestealBonus:.35},whirlwind:{id:"whirlwind",name:"Torbellino",desc:"Dos impactos consecutivos.",unlockLevel:9,cooldown:5,mult:.88,hits:2},execution:{id:"execution",name:"Ejecucion",desc:"Hace muchisimo mas dano a enemigos debilitados.",unlockLevel:12,cooldown:4,mult:1.2,executeThreshold:.35,executeMult:1.85},venomCut:{id:"venomCut",name:"Corte toxico",desc:"Aplica dano persistente.",unlockLevel:14,cooldown:4,mult:1.08,dot:{turns:3,ratio:.18,label:"Veneno"}},berserk:{id:"berserk",name:"Berserk",desc:"Te buffas y golpeas con furia.",unlockLevel:17,cooldown:6,mult:1.25,selfBuff:{attackPct:.22,defensePct:-.1,turns:3}},celestialEdge:{id:"celestialEdge",name:"Filo celestial",desc:"Golpe definitivo con alto critico.",unlockLevel:22,cooldown:7,mult:2.25,critBonus:.28}},Ea=[{id:"kills50",title:"Carne de Arena",desc:"Derrota 50 enemigos.",type:"kills",target:50,reward:{gold:250,shards:2}},{id:"wins25",title:"Favor del Publico",desc:"Gana 25 combates de arena.",type:"wins",target:25,reward:{gold:300,essence:3}},{id:"quest10",title:"Contratista",desc:"Completa 10 misiones.",type:"questsCompleted",target:10,reward:{gold:400,shards:3}},{id:"floor5",title:"Delvador",desc:"Alcanza el piso 5 de las mazmorras.",type:"highestDungeonFloor",target:5,reward:{gold:450,keys:2}},{id:"level10",title:"Veterano",desc:"Llega al nivel 10.",type:"level",target:10,reward:{gold:500,potions:2,essence:4}},{id:"legendary1",title:"Resplandor Dorado",desc:"Consigue 1 objeto legendario.",type:"legendaryFound",target:1,reward:{shards:4,gold:500}},{id:"guild8",title:"Constructor",desc:"Invierte 8 niveles de gremio en total.",type:"guildTotal",target:8,reward:{gold:700,essence:5}},{id:"ascend1",title:"Mas alla del polvo",desc:"Asciende una vez.",type:"ascension",target:1,reward:{relicDust:3,shards:5}}],Aa=[["resumen","Resumen"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],gt=[["resumen","Resumen"],["perfil","Perfil"],["inventario","Inventario"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],ja={resumen:{label:"Resumen",short:"Bucle principal",desc:"Vista rápida del ciclo principal, contratos y accesos clave.",icon:"home"},perfil:{label:"Perfil",short:"Gladiador",desc:"Identidad, equipo, rango, zona y estadísticas del héroe.",icon:"user"},inventario:{label:"Inventario",short:"Bolsa y equipo",desc:"Gestiona la mochila, filtra piezas y equipa mejoras.",icon:"backpack"},arena:{label:"Arena",short:"Combate rápido",desc:"Duelo instantáneo, élites y rachas de farmeo.",icon:"swords"},expedicion:{label:"Expediciones",short:"Temporizadores",desc:"Rutas en segundo plano con botín y materiales.",icon:"compass"},mazmorra:{label:"Mazmorras",short:"Pisos y jefes",desc:"Runs por pisos con jefe y cofre.",icon:"castle"},mercado:{label:"Mercado",short:"Compra y venta",desc:"Rotación de equipo y consumibles.",icon:"cart"},forja:{label:"Forja",short:"Creación y mejora",desc:"Creación de piezas y mejoras directas.",icon:"hammer"},gremio:{label:"Gremio",short:"Bonos pasivos",desc:"Mejoras permanentes de la partida.",icon:"shield"},entrenamiento:{label:"Entrenamiento",short:"Atributos y habilidades",desc:"Atributos, habilidades y especialización.",icon:"book"},trabajo:{label:"Trabajo",short:"Ingresos seguros",desc:"Ocupaciones temporizadas con retorno estable.",icon:"briefcase"},mascota:{label:"Mascota",short:"Compañero",desc:"Bonos únicos y progresión auxiliar.",icon:"paw"},logros:{label:"Logros",short:"Metaprogresión",desc:"Hitos, reliquias y ascensión.",icon:"trophy"},diario:{label:"Diario",short:"Registro",desc:"Historial de eventos y actividad reciente.",icon:"scroll"}},Pa=[{title:"Principal",views:["resumen","perfil","inventario","arena"]},{title:"Aventura",views:["expedicion","mazmorra"]},{title:"Economía",views:["mercado","forja","trabajo"]},{title:"Progreso",views:["gremio","entrenamiento","mascota","logros"]},{title:"Registro",views:["diario"]}],ft=["resumen","perfil","inventario","arena"],Ia=gt.map(([n])=>n).filter(n=>!ft.includes(n)),Ca="aether_arena_pbbg_v3";window.AetherConfig={STORAGE_KEY:Ca,SLOT_ORDER:va,SLOT_NAMES:ba,TABS:Aa,VIEWS:gt,VIEW_META:ja,VIEW_GROUPS:Pa,MOBILE_PRIMARY_VIEWS:ft,MOBILE_OVERFLOW_VIEWS:Ia,RANKS:ya,RARITIES:ha,ITEM_BASES:xa,AFFIXES:$a,ZONES:ka,JOBS:wa,PETS:Sa,SKILLS:Ma,ACHIEVEMENTS:Ea};(()=>{const{RARITIES:n,ITEM_BASES:o}=window.AetherConfig;let f=1;const S=u=>document.getElementById(u),d=u=>JSON.parse(JSON.stringify(u)),C=(u,a)=>Math.floor(Math.random()*(a-u+1))+u,T=(u,a)=>Math.random()*(a-u)+u,b=u=>u[Math.floor(Math.random()*u.length)],$=(u,a,I)=>Math.min(I,Math.max(a,u)),R=u=>u.reduce((a,I)=>a+I,0),_=()=>`${Date.now().toString(36)}_${(f++).toString(36)}_${C(100,999)}`,F={attack:{label:"Ataque",tip:"Aumenta el daño base que infliges en combate."},defense:{label:"Defensa",tip:"Reduce parte del daño recibido en cada impacto."},speed:{label:"Velocidad",tip:"Mejora la iniciativa y el ritmo de tus acciones."},hp:{label:"Vida máxima",tip:"Determina la cantidad total de salud disponible."},crit:{label:"Golpe crítico",tip:"Probabilidad de infligir daño crítico aumentado."},dodge:{label:"Esquiva",tip:"Probabilidad de evitar por completo un golpe enemigo."},block:{label:"Bloqueo",tip:"Probabilidad de mitigar una parte importante del daño."},lifesteal:{label:"Robo de vida",tip:"Porcentaje del daño convertido en curación propia."},attackPct:{label:"Ataque %",tip:"Multiplicador porcentual al ataque base."},defensePct:{label:"Defensa %",tip:"Multiplicador porcentual a la defensa base."},hpPct:{label:"Vida %",tip:"Multiplicador porcentual a la vida máxima."},speedPct:{label:"Velocidad %",tip:"Multiplicador porcentual a la velocidad base."},goldPct:{label:"Oro %",tip:"Incrementa el oro obtenido en actividades."},lootLuck:{label:"Suerte de botín",tip:"Mejora ligeramente la calidad y la frecuencia del botín."},regenPct:{label:"Regeneración %",tip:"Incrementa la recuperación pasiva de recursos."}},L={common:{name:"Común",tone:"text-slate-200 border-white/10 bg-white/[0.04]"},uncommon:{name:"Infrecuente",tone:"text-emerald-200 border-emerald-300/20 bg-emerald-400/10"},rare:{name:"Raro",tone:"text-sky-200 border-sky-300/24 bg-sky-400/10"},epic:{name:"Épico",tone:"text-violet-200 border-violet-300/24 bg-violet-400/10"},legendary:{name:"Legendario",tone:"text-amber-200 border-amber-300/24 bg-amber-400/10"},mythic:{name:"Mítico",tone:"text-fuchsia-200 border-fuchsia-300/24 bg-fuchsia-400/10"}},j={all:"Todo",weapon:"Armas",offhand:"Mano izquierda",helm:"Cascos",chest:"Armaduras",gloves:"Guantes",boots:"Botas",ring:"Anillos",amulet:"Amuletos",common:"Común",uncommon:"Infrecuente",rare:"Raro",epic:"Épico",legendary:"Legendario",mythic:"Mítico"};function K(u,a=0){return Number(u||0).toLocaleString("es-ES",{maximumFractionDigits:a})}function m(u){return`${K((u||0)*100,1)}%`}function t(u=""){return String(u).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function g(u=""){const a=String(u),I=[];let H=a;return[/<\/?b>/gi,/<br\s*\/?>/gi,/<span class="rarity-(common|uncommon|rare|epic|legendary|mythic)">/gi,/<\/span>/gi].forEach(Z=>{H=H.replace(Z,U=>{const ne=`__SAFE_HTML_${I.length}__`;return I.push({token:ne,match:U}),ne})}),H=t(H),I.forEach(({token:Z,match:U})=>{H=H.replace(Z,U)}),H}function k(u,a=2){return Number(u.toFixed(a))}function p(u){return(F[u]||{}).label||u}function y(u){return(F[u]||{}).tip||""}function h(u){return(L[u]||L.common).name}function P(u){const a=L[u]||L.common;return`<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.14em] ${a.tone}">${a.name}</span>`}function e(u){return j[u]||u}function s(u,a,I="",H=""){return`
      <div class="stat-pill rounded-2xl px-3 py-3"${H?` data-tooltip="${String(H).replace(/"/g,"&quot;")}"`:""}>
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/70">${u}</div>
        <div class="text-lg font-display font-extrabold tracking-[0.01em] text-white">${a}</div>
        ${I?`<div class="mt-1 text-xs leading-relaxed text-slate-300/65">${I}</div>`:""}
      </div>
    `}function l(u,a,I,H,G=""){const Z=a<=0?0:$(u/a*100,0,100);return`
      <div${G?` data-tooltip="${String(G).replace(/"/g,"&quot;")}"`:""}>
        <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
          <span class="font-medium tracking-[0.01em]">${H}</span>
          <span class="font-semibold text-slate-100">${K(u,u%1?1:0)} / ${K(a,a%1?1:0)}</span>
        </div>
        <div class="bar">
          <span class="relative flex h-full rounded-full ${I}" style="width:${Z}%">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
          </span>
        </div>
      </div>
    `}function x(u){return n.find(a=>a.key===u)||n[0]}function v(u,a){return!a||typeof a!="object"||Object.keys(a).forEach(I=>{const H=a[I];Array.isArray(H)?u[I]=H:H&&typeof H=="object"?((!u[I]||typeof u[I]!="object"||Array.isArray(u[I]))&&(u[I]={}),v(u[I],H)):u[I]=H}),u}function c(){return{attack:0,defense:0,speed:0,hp:0,crit:0,dodge:0,block:0,lifesteal:0,attackPct:0,defensePct:0,hpPct:0,speedPct:0,goldPct:0,lootLuck:0,regenPct:0}}function r(u,a){return Object.keys(a||{}).forEach(I=>{u[I]=(u[I]||0)+a[I]}),u}function w(u=Date.now()){const a=new Date(u),I=a.getFullYear(),H=String(a.getMonth()+1).padStart(2,"0"),G=String(a.getDate()).padStart(2,"0");return`${I}-${H}-${G}`}function B(u){const a=Math.max(0,u-Date.now()),I=Math.ceil(a/1e3),H=Math.floor(I/60),G=I%60;return H?`${H}m ${String(G).padStart(2,"0")}s`:`${G}s`}function V(u=1,a=0){const I=Math.random()-Math.min(.16,a*.035)-Math.min(.06,u*7e-4);return I<.0012?x("mythic"):I<.01?x("legendary"):I<.052?x("epic"):I<.19?x("rare"):I<.48?x("uncommon"):x("common")}function z(u,a){return(o[u]||[]).find(I=>I.name===a)||b(o[u]||[])}function q(u,a){return u+Math.max(0,Math.floor(a/4))*.85}window.AetherUtils={$:S,clone:d,rand:C,randf:T,pick:b,clamp:$,sum:R,uid:_,fmt:K,pct:m,escapeHtml:t,sanitizeInlineHtml:g,softRound:k,statLabel:p,statTooltip:y,rarityName:h,rarityBadge:P,translateFilter:e,htmlStat:s,progressBar:l,rarityDef:x,deepMerge:v,emptyStats:c,addStats:r,localDayKey:w,timeLeft:B,pickRarity:V,findBaseItem:z,scaledStatValue:q}})();function La(n){const{ITEM_BASES:o,AFFIXES:f,SLOT_ORDER:S,pick:d,rand:C,uid:T,softRound:b,rarityDef:$,pickRarity:R,findBaseItem:_,scaledStatValue:F,getLootLuck:L}=n;function j(y){const h=1+(y.upgrade||0)*.12,P={};return Object.entries(y.stats||{}).forEach(([e,s])=>{e==="crit"||e==="dodge"||e==="block"||e==="lifesteal"?P[e]=b(s+(y.upgrade||0)*.002,4):P[e]=b(s*h,2)}),P}function K(y){const h=j(y);return b((h.attack||0)*2.1+(h.defense||0)*1.85+(h.speed||0)*1.45+(h.hp||0)*.18+(h.crit||0)*120+(h.dodge||0)*90+(h.block||0)*70+(h.lifesteal||0)*140,1)}function m(y,h,P=null,e=null,s=0){const l=e?_(y,e):d(o[y]),x=P?$(P):R(h,L()),v={};Object.entries(l.stats).forEach(([u,a])=>{const I=typeof a=="number"?u==="crit"||u==="dodge"||u==="block"||u==="lifesteal"?a+Math.max(0,h-1)*5e-4:F(a,h):a;v[u]=b(I*x.mult,3)});const c=Math.min(5,x.affixes+s),r=new Set,w=[];for(let u=0;u<c;u++){let a=d(f),I=0;for(;r.has(a.prefix||a.suffix)&&I<20;)a=d(f),I+=1;r.add(a.prefix||a.suffix),w.push(a),Object.entries(a.stats).forEach(([H,G])=>{const Z=H==="crit"||H==="dodge"||H==="block"||H==="lifesteal"?G+Math.max(0,h-1)*5e-4:F(G,h);v[H]=b((v[H]||0)+Z,3)})}const B=[],V=w.find(u=>u.prefix),z=w.find(u=>u.suffix);V&&B.push(V.prefix),B.push(l.name),z&&B.push(z.suffix);const q={id:T(),slot:y,name:B.join(" "),rarity:x.key,level:h,baseName:l.name,stats:v,affixes:w.map(u=>u.prefix||u.suffix),value:Math.max(12,Math.round((x.value+h*8)*(1+c*.18))),upgrade:0,createdAt:Date.now()};return q.score=K(q),q}function t(y,h){const P=m(y,1,"common",h,0);return P.affixes=[],P.name=h,P.score=K(P),P}function g(y=1){const h=Math.random();return y>=32&&h<.0015?"mythic":y>=24&&h<.012?"legendary":y>=16&&h<.055?"epic":y>=8&&h<.22?"rare":h<.58?"uncommon":"common"}function k(y=1){const h=[],P=6+Math.min(2,Math.floor(y/12)),e={common:1.05,uncommon:1.16,rare:1.48,epic:2.05,legendary:3.1,mythic:4.8};for(let s=0;s<P;s++){const l=d(S),x=g(y),v=m(l,Math.max(1,y+C(-1,3)),x);v.price=Math.round(v.value*e[v.rarity]*(1+Math.max(0,y-1)*.015)),h.push(v)}return h.sort((s,l)=>(l.price||0)-(s.price||0))}function p(){return[t("helm","Yelmo de Bronce"),t("boots","Sandalias de Arena"),m("ring",1,"uncommon")]}return{scaleItemStats:j,computeItemScore:K,makeItem:m,makeStarterItem:t,generateMarket:k,starterInventory:p}}function Ra(n){const{SLOT_ORDER:o,emptyStats:f,addStats:S,softRound:d,clamp:C}=n,T={sig:"",value:null};function b(){T.sig="",T.value=null}function $(m,t){const g=t(),k=f();if(!g||!m.player.petLevel)return k;const p=1+m.player.petLevel*.16;return Object.entries(g.bonus).forEach(([y,h])=>{k[y]=d((k[y]||0)+h*p,4)}),k}function R(m){const t=m.player.guild,g=f();return g.attackPct+=t.barracks*.03,g.defensePct+=t.barracks*.02,g.goldPct+=t.treasury*.08,g.hpPct+=t.sanctuary*.05,g.regenPct+=t.sanctuary*.08,g.lootLuck+=t.hunters*.05,g}function _(m){const t=m.player.relics,g=f();return g.attackPct+=t.wrath*.04,g.goldPct+=t.fortune*.05,g.lootLuck+=t.fortune*.03,g.hpPct+=t.vitality*.06,g.regenPct+=t.vitality*.06,g.speedPct+=t.momentum*.03,g}function F(m,t){const g=f();return o.forEach(k=>{const p=m.player.equipment[k];p&&S(g,t(p))}),g}function L(m){const t=m.player.training;return{attack:t.strength*2.2,defense:t.endurance*1.3,speed:t.agility*1.5,hp:t.endurance*16,crit:t.agility*.002,dodge:t.agility*.002,block:t.endurance*.0015,lifesteal:t.strength*8e-4}}function j(m,t){if(!m.player)return{attack:14,defense:10,speed:8,maxHp:140,crit:.06,dodge:.04,block:.03,lifesteal:0,maxEnergy:100,maxStamina:12,goldPct:0,lootLuck:0,regenPct:0};const{getPetData:g,scaleItemStats:k}=t,p=m.player,y=[p.level,p.baseStats.attack,p.baseStats.defense,p.baseStats.speed,p.baseStats.crit,p.baseStats.dodge,p.baseStats.block,p.baseStats.lifesteal,p.training.strength,p.training.agility,p.training.endurance,p.training.discipline,p.guild.barracks,p.guild.treasury,p.guild.sanctuary,p.guild.hunters,p.guild.arsenal,p.relics.wrath,p.relics.fortune,p.relics.vitality,p.relics.momentum,p.pet||"",p.petLevel||0,...o.map(a=>{const I=p.equipment[a];return I?`${I.id}:${I.level}:${I.upgrade||0}:${I.rarity}:${I.reforge||0}`:"-"})].join("|");if(T.sig===y&&T.value)return T.value;const h=p.level,P={attack:p.baseStats.attack+h*3.2,defense:p.baseStats.defense+h*2.45,speed:p.baseStats.speed+h*1.2,hp:120+h*34,crit:p.baseStats.crit,dodge:p.baseStats.dodge,block:p.baseStats.block,lifesteal:p.baseStats.lifesteal,maxEnergy:100+p.training.discipline*5+p.relics.momentum*10,maxStamina:12+Math.floor(p.training.discipline/4)+p.relics.momentum},e=F(m,k),s=L(m),l=R(m),x=_(m),v=$(m,g);let c=P.attack+(e.attack||0)+(s.attack||0),r=P.defense+(e.defense||0)+(s.defense||0),w=P.speed+(e.speed||0)+(s.speed||0),B=P.hp+(e.hp||0)+(s.hp||0);const V=(l.attackPct||0)+(x.attackPct||0)+(v.attackPct||0),z=(l.defensePct||0)+(v.defensePct||0),q=(l.hpPct||0)+(x.hpPct||0)+(v.hpPct||0),u=(x.speedPct||0)+(v.speedPct||0);return c*=1+V,r*=1+z,B*=1+q,w*=1+u,T.sig=y,T.value={attack:d(c,2),defense:d(r,2),speed:d(w,2),maxHp:Math.round(B),crit:C(P.crit+(e.crit||0)+(s.crit||0)+(v.crit||0),0,.7),dodge:C(P.dodge+(e.dodge||0)+(s.dodge||0)+(v.dodge||0),0,.55),block:C(P.block+(e.block||0)+(s.block||0)+(v.block||0),0,.5),lifesteal:C(P.lifesteal+(e.lifesteal||0)+(s.lifesteal||0),0,.45),maxEnergy:P.maxEnergy,maxStamina:P.maxStamina,goldPct:(l.goldPct||0)+(v.goldPct||0)+(x.goldPct||0),lootLuck:(l.lootLuck||0)+(v.lootLuck||0)+(x.lootLuck||0),regenPct:(l.regenPct||0)+(v.regenPct||0)+(x.regenPct||0)},T.value}function K(m,t){return m.player&&j(m,t).lootLuck||0}return{invalidateDerivedCache:b,petBonus:$,getGuildBonus:R,getRelicBonus:_,getEquipmentBonus:F,getTrainingBonus:L,getDerivedStats:j,getLootLuck:K}}function Da(n){const{pick:o,uid:f,makeStarterItem:S,starterInventory:d,generateMarket:C}=n;function T(R){return Math.round(95+Math.pow(R,1.46)*48)}function b(R=1){const _=[{type:"kills",title:"Barrido de rivales",desc:"Derrota enemigos en la arena.",target:7+Math.floor(R*1.6),reward:{gold:120+R*20,xp:60+R*14,essence:1}},{type:"wins",title:"Clamor del publico",desc:"Gana combates de arena.",target:4+Math.floor(R*.6),reward:{gold:140+R*24,xp:65+R*15,potions:1}},{type:"earnGold",title:"Bolsillos pesados",desc:"Obten oro por cualquier medio.",target:320+R*90,reward:{gold:150+R*22,xp:70+R*12,shards:1}},{type:"crafts",title:"Acero fresco",desc:"Forja o mejora equipo.",target:2+Math.floor(R/7),reward:{gold:180+R*18,xp:60+R*16,iron:3}},{type:"expeditions",title:"Rutas peligrosas",desc:"Completa expediciones.",target:2+Math.floor(R/8),reward:{gold:160+R*18,xp:72+R*14,wood:3}},{type:"dungeons",title:"Hedor profundo",desc:"Supera incursiones en mazmorra.",target:1+Math.floor(R/10),reward:{gold:220+R*18,xp:95+R*18,keys:1}},{type:"salvaged",title:"Chatarra util",desc:"Recicla equipo sobrante.",target:3+Math.floor(R/7),reward:{gold:130+R*18,xp:55+R*13,essence:2}},{type:"elites",title:"Sangre de elite",desc:"Derrota enemigos elite.",target:1+Math.floor(R/9),reward:{gold:240+R*20,xp:90+R*17,shards:1}}],F=[],L=[];for(;F.length<4&&L.length<_.length;){const j=o(_);L.includes(j.type)||(L.push(j.type),F.push({id:f(),type:j.type,title:j.title,desc:j.desc,progress:0,target:j.target,reward:j.reward,completed:!1,claimed:!1}))}return F}function $(){return{version:4,currentView:"resumen",currentTab:"resumen",ui:{inventoryFilter:"all",inventoryPage:1,inventoryPageSize:18,journalPage:1,journalPageSize:16,modal:null,forgePreview:null,moreMenuOpen:!1},player:{name:"Aurelio",title:"Novato del Coliseo",level:1,xp:0,gold:260,shards:0,iron:16,wood:12,essence:5,food:6,potions:3,keys:2,hp:140,energy:100,stamina:12,baseStats:{attack:14,defense:10,speed:8,crit:.06,dodge:.04,block:.03,lifesteal:0},training:{strength:0,agility:0,endurance:0,discipline:0},guild:{barracks:0,treasury:0,sanctuary:0,hunters:0,arsenal:0},relics:{wrath:0,fortune:0,vitality:0,momentum:0},pet:null,petLevel:0,petXp:0,activeSkills:["powerStrike","quickLunge","fortify"],unlockedSkills:["powerStrike","quickLunge","fortify"],skillLevels:{powerStrike:1,quickLunge:1,fortify:1,shieldBash:1,bloodRage:1,whirlwind:1,execution:1,venomCut:1,berserk:1,celestialEdge:1},skillPoints:0,attributePoints:0,zoneId:0,highestDungeonFloor:1,ascension:0,relicDust:0,equipment:{weapon:S("weapon","Gladius"),offhand:S("offhand","Escudo de Torre"),helm:null,chest:S("chest","Coraza Segmentada"),gloves:null,boots:null,ring:null,amulet:null},inventory:d()},stats:{wins:0,losses:0,kills:0,damageDone:0,damageTaken:0,crits:0,questsCompleted:0,crafted:0,salvaged:0,earnedGold:0,expeditions:0,dungeons:0,elites:0,legendaryFound:0},quests:b(1),claimedAchievements:[],timers:{job:null,expedition:null},market:{items:C(1),lastRefresh:Date.now()},journal:[{id:f(),ts:Date.now(),icon:"⚔️",text:"Has entrado en Aether Arena. El coliseo huele a hierro, oro y gloria."}],streak:{lastClaimDay:null,days:0},combatHistory:[],lastTick:Date.now(),lastSave:0}}return{xpNeeded:T,defaultQuests:b,makeDefaultState:$}}function Va(n){const{state:o,PETS:f,sum:S,statsDomain:d,scaleItemStats:C}=n;function T(){return 28+o.player.guild.arsenal*8+o.player.ascension*2}function b(){return S(Object.values(o.player.guild||{}))}function $(){return f.find(t=>t.id===o.player.pet)||null}function R(){return d.petBonus(o,$)}function _(){return d.getGuildBonus(o)}function F(){return d.getRelicBonus(o)}function L(){return d.getEquipmentBonus(o,C)}function j(){return d.getTrainingBonus(o)}function K(){return d.getDerivedStats(o,{getPetData:$,scaleItemStats:C})}function m(){return d.getLootLuck(o,{getPetData:$,scaleItemStats:C})}return{maxInventory:T,guildTotal:b,getPetData:$,petBonus:R,getGuildBonus:_,getRelicBonus:F,getEquipmentBonus:L,getTrainingBonus:j,getDerivedStats:K,getLootLuck:m}}function Ta(n){const{clone:o,statsDomain:f,makeDefaultState:S,zustandVanilla:d,subscribeWithSelector:C}=n,T=new Set(["_meta","actions"]),b={};function $(m={}){return{hydrated:!1,isDirty:!1,isSaving:!1,lastMutationAt:0,lastMutationLabel:"bootstrap",mutationCount:0,lastSaveAt:0,saveCount:0,lastSource:"bootstrap",syncRevision:0,...m}}function R(m=null){const t=m||b,g={};return Object.keys(t||{}).forEach(k=>{T.has(k)||(g[k]=o(t[k]))}),g}function _(m=null){const t=R(m);return t.ui&&(t.ui.modal=null,t.ui.moreMenuOpen=!1,t.ui.forgePreview=null),t}function F(m){Object.keys(b).forEach(t=>delete b[t]),Object.assign(b,m),f.invalidateDerivedCache()}const L=d.createStore(C(()=>({...o(S()),_meta:$(),actions:{}})));function j(){return F(R(L.getState())),b}function K(m,t={},g=!0){const k=L.getState(),p=$({...k._meta||{},...t}),y={...o(m),_meta:p,actions:k.actions||{}};return L.setState(y,g),j()}return{state:b,gameStore:L,createStoreMeta:$,snapshotGameData:R,serializableState:_,replaceState:F,syncStateFromStore:j,setStoreSnapshot:K}}function qa(n){const{state:o,gameStore:f,clone:S,snapshotGameData:d,replaceState:C,normalizeState:T,createStoreMeta:b,setStoreSnapshot:$}=n;function R(){return f.getState()._meta||b()}function _(m={}){const t=f.getState();return f.setState({...t,_meta:b({...t._meta||{},...m})}),R()}function F(m={},t=!0){return $(o,m,t)}function L(m,t,g={}){const k=d(f.getState());try{C(S(k)),typeof t=="function"&&t(o),g.normalize&&T();const p=R();return F({hydrated:!0,isDirty:g.markDirty===!1?p.isDirty:!0,isSaving:!1,lastMutationAt:Date.now(),lastMutationLabel:m||"mutation",mutationCount:(p.mutationCount||0)+1,lastSource:g.source||"local"})}catch(p){throw C(k),p}}function j(m,t,g){return typeof m=="function"&&typeof t=="function"?f.subscribe(m,t,g):f.subscribe(m)}function K(m){return typeof m=="function"?m(f.getState()):f.getState()}return{getStoreMeta:R,setStoreMeta:_,commitWorkingState:F,mutate:L,subscribeStore:j,selectStore:K}}function Ba(n){const{STORAGE_KEY:o,state:f,makeDefaultState:S,clone:d,snapshotGameData:C,serializableState:T,replaceState:b,normalizeState:$,commitWorkingState:R,setStoreMeta:_,getStoreMeta:F}=n;function L(g,k="storage"){b(d(g||S())),$();const p=Date.now();return R({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:f.lastSave||p,lastSource:k,syncRevision:k==="external-sync"?F().syncRevision+1:F().syncRevision})}function j(){try{const g=Date.now();_({isSaving:!0});const k=T();return k.lastSave=g,localStorage.setItem(o,JSON.stringify(k)),b(C()),f.lastSave=g,R({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:g,saveCount:(F().saveCount||0)+1,lastSource:"save"}),!0}catch(g){return console.warn("No se pudo guardar la partida.",g),_({isSaving:!1}),!1}}function K(){try{const g=localStorage.getItem(o);return g?L(JSON.parse(g),"storage"):L(S(),"new-game")}catch(g){return console.warn("Guardado corrupto, creando uno nuevo.",g),L(S(),"recovered")}}function m(g){try{return L(g?JSON.parse(g):S(),"external-sync")}catch(k){return console.warn("No se pudo sincronizar el estado externo.",k),!1}}function t(){return localStorage.removeItem(o),L(S(),"reset")}return{loadFromParsedState:L,saveGame:j,loadGame:K,syncExternalState:m,hardReset:t}}(()=>{const{STORAGE_KEY:n,SLOT_ORDER:o,ITEM_BASES:f,AFFIXES:S,PETS:d,SKILLS:C}=window.AetherConfig,{clone:T,rand:b,pick:$,clamp:R,sum:_,uid:F,softRound:L,rarityDef:j,deepMerge:K,emptyStats:m,addStats:t,localDayKey:g,pickRarity:k,findBaseItem:p,scaledStatValue:y}=window.AetherUtils,h=Ra({SLOT_ORDER:o,emptyStats:m,addStats:t,softRound:L,clamp:R});let P=()=>0;const{scaleItemStats:e,computeItemScore:s,makeItem:l,makeStarterItem:x,generateMarket:v,starterInventory:c}=La({ITEM_BASES:f,AFFIXES:S,SLOT_ORDER:o,pick:$,rand:b,uid:F,softRound:L,rarityDef:j,pickRarity:k,findBaseItem:p,scaledStatValue:y,getLootLuck:()=>P()}),{xpNeeded:r,defaultQuests:w,makeDefaultState:B}=Da({pick:$,uid:F,makeStarterItem:x,starterInventory:c,generateMarket:v}),V=window.zustandVanilla||window.zustand,z=window.zustandMiddleware||{},q=typeof z.subscribeWithSelector=="function"?z.subscribeWithSelector:X=>X;if(!V||typeof V.createStore!="function")throw new Error("Zustand vanilla no esta disponible. Verifica la carga de la libreria antes de model.js");const u=Ta({clone:T,statsDomain:h,makeDefaultState:B,zustandVanilla:V,subscribeWithSelector:q}),{state:a,gameStore:I,createStoreMeta:H,snapshotGameData:G,serializableState:Z,replaceState:U,syncStateFromStore:ne,setStoreSnapshot:D}=u,A=Va({state:a,PETS:d,sum:_,statsDomain:h,scaleItemStats:e}),{maxInventory:O,guildTotal:W,getPetData:ee,petBonus:re,getGuildBonus:le,getRelicBonus:Pe,getEquipmentBonus:M,getTrainingBonus:Q,getDerivedStats:te,getLootLuck:pe}=A;P=pe,ne();function xe(X=null){const ce=a.player,Le=[];return Object.values(C).forEach($e=>{ce.level>=$e.unlockLevel&&!ce.unlockedSkills.includes($e.id)&&(ce.unlockedSkills.push($e.id),Le.push($e))}),typeof X=="function"&&Le.forEach($e=>X($e)),Le}function de(){const X=B();U(K(X,T(a))),a.currentView=a.currentView||a.currentTab||"resumen",a.currentTab=a.currentView,a.ui.moreMenuOpen=!!a.ui.moreMenuOpen,a.player.inventory||(a.player.inventory=[]),a.player.equipment||(a.player.equipment=X.player.equipment),a.player.guild||(a.player.guild=X.player.guild),a.player.training||(a.player.training=X.player.training),a.player.relics||(a.player.relics=X.player.relics),a.player.skillLevels||(a.player.skillLevels=X.player.skillLevels),a.player.activeSkills||(a.player.activeSkills=X.player.activeSkills),a.player.unlockedSkills||(a.player.unlockedSkills=X.player.unlockedSkills),a.quests||(a.quests=X.quests),(!a.market||!a.market.items)&&(a.market=X.market),a.stats||(a.stats=X.stats),a.claimedAchievements||(a.claimedAchievements=[]),a.combatHistory||(a.combatHistory=[]),a.journal||(a.journal=X.journal),a.streak||(a.streak=X.streak),a.timers||(a.timers=X.timers),a.ui||(a.ui=X.ui),a.ui.inventoryFilter=a.ui.inventoryFilter||"all",a.ui.inventoryPage=Math.max(1,Number(a.ui.inventoryPage)||1),a.ui.inventoryPageSize=Math.max(6,Number(a.ui.inventoryPageSize)||X.ui.inventoryPageSize),a.ui.journalPage=Math.max(1,Number(a.ui.journalPage)||1),a.ui.journalPageSize=Math.max(8,Number(a.ui.journalPageSize)||X.ui.journalPageSize),xe();const ce=te();a.player.hp=R(a.player.hp||ce.maxHp,1,ce.maxHp),a.player.energy=R(a.player.energy??ce.maxEnergy,0,ce.maxEnergy),a.player.stamina=R(a.player.stamina??ce.maxStamina,0,ce.maxStamina),a.player.title=a.player.title||"Novato del Coliseo",a.lastTick=a.lastTick||Date.now(),a.lastSave=a.lastSave||0}const Ke=qa({state:a,gameStore:I,clone:T,snapshotGameData:G,replaceState:U,normalizeState:de,createStoreMeta:H,setStoreSnapshot:D}),{getStoreMeta:qe,setStoreMeta:Ie,commitWorkingState:Ye,mutate:Be,subscribeStore:Ue,selectStore:Xe}=Ke,et=Ba({STORAGE_KEY:n,state:a,makeDefaultState:B,clone:T,snapshotGameData:G,serializableState:Z,replaceState:U,normalizeState:de,commitWorkingState:Ye,setStoreMeta:Ie,getStoreMeta:qe}),{saveGame:Oe,loadGame:ze,syncExternalState:Ne,hardReset:we}=et,Ce={mutate:Be,saveGame:Oe,loadGame:ze,hardReset:we,setMeta:Ie,syncExternalState:Ne};I.setState({...I.getState(),actions:Ce}),ne(),window.AetherModel={state:a,store:I,replaceState:U,snapshotGameData:G,mutate:Be,subscribeStore:Ue,selectStore:Xe,getStoreMeta:qe,setStoreMeta:Ie,syncExternalState:Ne,makeItem:l,makeStarterItem:x,scaleItemStats:e,computeItemScore:s,xpNeeded:r,defaultQuests:w,generateMarket:v,starterInventory:c,makeDefaultState:B,maxInventory:O,guildTotal:W,getPetData:ee,petBonus:re,getGuildBonus:le,getRelicBonus:Pe,getEquipmentBonus:M,getTrainingBonus:Q,getDerivedStats:te,getLootLuck:pe,ensureUnlockedSkills:xe,normalizeState:de,saveGame:Oe,loadGame:ze,hardReset:we}})();function Oa(n){const{SKILLS:o,pick:f,rand:S,randf:d,clamp:C,softRound:T,uid:b}=n;function $(e){return{berserker:{attack:1.12,defense:.92,speed:1.03,crit:.04,dodge:.01,block:0,lifesteal:.02},guardian:{attack:.9,defense:1.18,speed:.92,crit:.01,dodge:.02,block:.05,lifesteal:0},assassin:{attack:1,defense:.86,speed:1.22,crit:.06,dodge:.05,block:.01,lifesteal:0},beast:{attack:1.08,defense:.95,speed:1.09,crit:.03,dodge:.03,block:0,lifesteal:.03},occult:{attack:1.03,defense:.94,speed:1.05,crit:.05,dodge:.02,block:.02,lifesteal:0}}[e]||{attack:1,defense:1,speed:1,crit:0,dodge:0,block:0,lifesteal:0}}function R({zone:e,kind:s="normal",playerLevel:l=1,playerAscension:x=0,wins:v=0}){const c=Math.pow(l,.88)*.04,r=e&&typeof e.id=="number"?e.id*.25:0,w=x*.25,B=Math.min(v/60,3),V=s==="elite"?.3:s==="boss"?.6:0;return 1+c+r+w+B+V}function _({zone:e,kind:s="normal",extraScale:l=0,playerLevel:x=1,playerAscension:v=0,wins:c=0}){const w=f(["berserker","guardian","assassin","beast","occult"]),B=$(w),V=Math.max(1,Math.round(e.unlockLevel+x*.95+e.id*1.8+l+S(-1,2))),z=s==="elite"?1.3:s==="boss"?1.6:1,q=R({zone:e,kind:s,playerLevel:x,playerAscension:v,wins:c}),u=(12+V*3.4)*B.attack*z*q,a=(8+V*2.8)*B.defense*z*q,I=(120+V*34)*(s==="boss"?2.1:s==="elite"?1.5:1)*q,H=(7+V*1.08)*B.speed*q,G=s==="boss"?e.boss:f(e.enemies),Z={berserker:{name:"Furia salvaje",mult:1.45,cooldown:3},guardian:{name:"Muro de carne",mult:.9,cooldown:4,selfBuff:{defensePct:.2,turns:2}},assassin:{name:"Deguello",mult:1.2,cooldown:3,critBonus:.18},beast:{name:"Desgarro",mult:1.08,cooldown:3,dot:{turns:2,ratio:.12,label:"Sangrado"}},occult:{name:"Maldicion",mult:1.15,cooldown:4,armorBreak:{pct:.14,turns:2}}}[w];return{id:b(),name:G,zoneId:e.id,kind:s,archetype:w,level:V,maxHp:Math.round(I),hp:Math.round(I),attack:T(u,2),defense:T(a,2),speed:T(H,2),crit:C(.06+B.crit+(s==="boss"?.03:s==="elite"?.015:0)+(q-1)*.015,0,.55),dodge:C(.025+B.dodge+(s==="boss"?.02:s==="elite"?.01:0)+(q-1)*.012,0,.45),block:C(.015+B.block+(s==="boss"?.04:s==="elite"?.02:0)+(q-1)*.012,0,.4),lifesteal:C(B.lifesteal+(s==="boss"?.01:s==="elite"?.005:0)+(q-1)*.008,0,.25),skill:Z,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0}}function F(e,s){return{id:"player",name:e.name,maxHp:s.maxHp,hp:Math.round(e.hp),attack:s.attack,defense:s.defense,speed:s.speed,crit:s.crit,dodge:s.dodge,block:s.block,lifesteal:s.lifesteal,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0,activeSkills:(e.activeSkills||[]).filter(l=>(e.unlockedSkills||[]).includes(l))}}function L(e,s){return e.buffs.filter(l=>l.turns>0&&s in(l.values||{})).reduce((l,x)=>l+x.values[s],0)}function j(e,s){const l=`${s}Pct`;let x=e[s];return s==="defense"&&e.armorBreak&&e.armorBreak.turns>0&&(x*=1-e.armorBreak.pct),(s==="attack"||s==="defense"||s==="speed")&&(x*=1+L(e,l)),x+=L(e,s),x}function K(e,s){return 1+Math.max(0,(e&&e[s]||1)-1)*.08}function m(e,s,l){const x=e.activeSkills||[];for(const v of x){const c=o[v];if(c&&!(c.requireOffhand&&!l.equipment.offhand)&&!((e.cooldowns[v]||0)>0)&&!(c.executeThreshold&&s.hp/s.maxHp>c.executeThreshold))return c}return null}function t(e){return!e.skill||(e.cooldowns.special||0)>0?null:e.skill}function g(e,s){e.dots=e.dots.filter(l=>{if(l.turns<=0)return!1;const x=Math.round(l.damage);return e.hp-=x,s.push(`☠️ ${e.name} sufre ${x} por ${l.label}.`),l.turns-=1,l.turns>0}),e.buffs.forEach(l=>{l.turns-=1}),e.buffs=e.buffs.filter(l=>l.turns>0),e.armorBreak&&(e.armorBreak.turns-=1,e.armorBreak.turns<=0&&(e.armorBreak=null))}function k(e,s,l,x=1,v={},c=[]){const r=j(e,"attack"),w=j(s,"defense"),B=C((e.crit||0)+(v.critBonus||0),0,.85),V=C(s.dodge||0,0,.7);if(Math.random()<V)return c.push(`💨 ${s.name} esquiva ${l}.`),{damage:0,crit:!1,dodged:!0,blocked:!1};let z=r*x-w*.55;z=Math.max(r*.26,z),z*=d(.9,1.08);let q=!1;Math.random()<B&&(z*=1.68,q=!0);let u=!1;if(Math.random()<(s.block||0)&&(z*=.66,u=!0),z=Math.max(1,Math.round(z)),s.shield>0){const H=Math.min(s.shield,z);s.shield-=H,z-=H,H>0&&c.push(`🛡️ ${s.name} absorbe ${H} con un escudo.`)}if(z>0){s.hp-=z;const H=z*C((e.lifesteal||0)+(v.lifestealBonus||0),0,.9);H>0&&(e.hp=Math.min(e.maxHp,e.hp+Math.round(H)))}const a=q?" crítico":"",I=u?" (bloqueado parcialmente)":"";return c.push(`⚔️ ${e.name} usa ${l} y causa ${z}${a}${I}.`),{damage:z,crit:q,dodged:!1,blocked:u}}function p(e,s,l,x,v){if(!(!l||x.dodged)&&(l.armorBreak&&(s.armorBreak={pct:l.armorBreak.pct,turns:l.armorBreak.turns+1},v.push(`🧩 La armadura de ${s.name} queda expuesta.`)),l.dot&&x.damage>0&&(s.dots.push({damage:Math.max(3,e.attack*l.dot.ratio),turns:l.dot.turns,label:l.dot.label}),v.push(`🩸 ${s.name} queda afectado por ${l.dot.label}.`)),l.selfBuff)){if(e.buffs.push({turns:l.selfBuff.turns+1,values:{attackPct:l.selfBuff.attackPct||0,defensePct:l.selfBuff.defensePct||0,speedPct:l.selfBuff.speedPct||0}}),l.selfBuff.shieldPct){const c=Math.round(e.maxHp*l.selfBuff.shieldPct);e.shield+=c,v.push(`🛡️ ${e.name} obtiene un escudo de ${c}.`)}v.push(`✨ ${e.name} activa un refuerzo temporal.`)}}function y(e,s,l,x,v,c){if(e.hp<=0||s.hp<=0)return null;const r=l?m(e,s,x):t(e);if(!r){const z=k(e,s,"Golpe básico",1,{},c);return z.damage>0&&(l?v.damageDone+=z.damage:v.damageTaken+=z.damage),z}const w=(r.mult||1)*(l?K(x.skillLevels,r.id):1),B=r.hits||1;let V=null;for(let z=0;z<B;z++){const q={};r.critBonus&&(q.critBonus=r.critBonus),r.lifestealBonus&&(q.lifestealBonus=r.lifestealBonus);let u=w;if(r.executeThreshold&&s.hp/s.maxHp<=r.executeThreshold&&(u*=r.executeMult||1.6),V=k(e,s,r.name,u,q,c),V&&V.damage>0&&(l?v.damageDone+=V.damage:v.damageTaken+=V.damage),V&&V.crit&&l&&(v.crits+=1),s.hp<=0)break}return p(e,s,r,V||{dodged:!1,damage:0},c),l?e.cooldowns[r.id]=r.cooldown:e.cooldowns.special=r.cooldown,V}function h(e){Object.keys(e.cooldowns).forEach(s=>{e.cooldowns[s]=Math.max(0,(e.cooldowns[s]||0)-1)})}function P({enemy:e,playerState:s,derivedStats:l,zoneName:x,maxTurns:v=28}){const c=F(s,l),r=JSON.parse(JSON.stringify(e)),w=[`🏟️ <b>${c.name}</b> se enfrenta a <b>${r.name}</b> en <b>${x}</b>.`],B={damageDone:0,damageTaken:0,crits:0},V={equipment:s.equipment,skillLevels:s.skillLevels};let z=1;for(;c.hp>0&&r.hp>0&&z<=v&&(g(c,w),g(r,w),!(c.hp<=0||r.hp<=0));){const q=j(c,"speed")+d(0,3)>=j(r,"speed")+d(0,3)?[[c,r,!0],[r,c,!1]]:[[r,c,!1],[c,r,!0]];for(const[u,a,I]of q)if(!(u.hp<=0||a.hp<=0)&&(y(u,a,I,V,B,w),a.hp<=0))break;h(c),h(r),z+=1}return{player:c,foe:r,log:w,statsDelta:B,victory:c.hp>0&&r.hp<=0}}return{enemyArchetypeMods:$,difficultyMultiplier:R,makeEnemy:_,buildPlayerCombatant:F,activeBuffValue:L,effectiveStat:j,skillLevelMult:K,choosePlayerSkill:m,chooseEnemySkill:t,decayStatuses:g,performHit:k,applySkillEffects:p,actorTurn:y,tickCooldowns:h,runCombat:P}}function za(n){const{rarityDef:o,rand:f,uid:S,clone:d,generateMarket:C,makeItem:T,computeItemScore:b}=n;function $(e,s){return e.player.inventory.length<s}function R(e,s){e.player.inventory=e.player.inventory.filter(l=>l.id!==s)}function _(e,s){return e.player.inventory.find(l=>l.id===s)}function F(e,s,l){if(!s)return;const{maxInventory:x,addJournal:v,trackQuest:c,checkAchievements:r}=l;if(!$(e,x)){const w=Math.round(s.value*.45);e.player.gold+=w,e.stats.earnedGold+=w,v("📦",`Inventario lleno. <span class="rarity-${s.rarity}">${s.name}</span> se convierte en ${w} de oro.`),c("earnGold",w);return}e.player.inventory.push(s),e.player.inventory.sort((w,B)=>o(B.rarity).value+B.score-(o(w.rarity).value+w.score)),(s.rarity==="legendary"||s.rarity==="mythic")&&(e.stats.legendaryFound+=1),r()}function L(e,s,l){const{addJournal:x}=l,v=_(e,s);if(!v)return;const c=v.slot,r=e.player.equipment[c];e.player.equipment[c]=v,R(e,s),r&&e.player.inventory.push(r),x("🧷",`Equipas <span class="rarity-${v.rarity}">${v.name}</span>.`)}function j(e,s,l){const{maxInventory:x,addJournal:v,toast:c}=l,r=e.player.equipment[s];if(!r||!$(e,x)){c("No hay espacio en el inventario","danger");return}e.player.inventory.push(r),e.player.equipment[s]=null,v("🎒",`Guardas ${r.name} en el inventario.`)}function K(e,s,l){const{trackQuest:x,addJournal:v}=l,c=_(e,s);if(!c)return;const r=Math.round(c.value*.65);e.player.gold+=r,e.stats.earnedGold+=r,x("earnGold",r),R(e,s),v("💰",`Vendes ${c.name} por ${r} de oro.`)}function m(e,s,l){const{trackQuest:x,addJournal:v}=l,c=_(e,s);if(!c)return;const r=o(c.rarity),w=Math.max(1,Math.round(c.level/3+r.affixes)),B=Math.max(0,Math.round(r.affixes/2)),V=c.rarity==="rare"?1:c.rarity==="epic"?2:c.rarity==="legendary"?4:c.rarity==="mythic"?6:0;e.player.iron+=w,e.player.wood+=B,e.player.essence+=V,e.stats.salvaged+=1,x("salvaged",1),R(e,s),v("♻️",`Reciclas ${c.name}: +${w} hierro, +${B} madera${V?`, +${V} esencia`:""}.`)}function t(e,s,l){const{toast:x,addJournal:v}=l,c=90+e.player.level*12;if(s){if(e.player.gold<c){x("No tienes oro suficiente para refrescar","danger");return}e.player.gold-=c}e.market.items=C(e.player.level),e.market.lastRefresh=Date.now(),v("🛒",`El mercado renueva su inventario${s?` por ${c} de oro`:""}.`)}function g(e,s,l){const{maxInventory:x,toast:v,addJournal:c,trackQuest:r,checkAchievements:w}=l,B=e.market.items.find(z=>z.id===s);if(!B)return;if(e.player.gold<B.price){v("Oro insuficiente","danger");return}if(!$(e,x)){v("Inventario lleno","danger");return}e.player.gold-=B.price;const V=d(B);V.id=S(),F(e,V,{maxInventory:x,addJournal:c,trackQuest:r,checkAchievements:w}),e.market.items=e.market.items.filter(z=>z.id!==s),c("🛍️",`Compras ${B.name} por ${B.price} de oro.`)}function k(e,s,l){const{toast:x,grantRewards:v}=l,r={potion:{price:120,reward:{potions:1},label:"Poción"},key:{price:180,reward:{keys:1},label:"Llave de mazmorra"},essence:{price:140,reward:{essence:1},label:"Esencia"},food:{price:65,reward:{food:2},label:"Comida"}}[s];if(r){if(e.player.gold<r.price){x("Oro insuficiente","danger");return}e.player.gold-=r.price,v(r.reward,r.label)}}function p(e,s,l,x){const{maxInventory:v,toast:c,addJournal:r,trackQuest:w,checkAchievements:B}=x,V=l==="premium"?{gold:260,iron:12,wood:7,essence:3}:{gold:140,iron:8,wood:4,essence:1};if(e.player.gold<V.gold||e.player.iron<V.iron||e.player.wood<V.wood||e.player.essence<V.essence){c("Te faltan materiales","danger");return}if(!$(e,v)){c("Inventario lleno","danger");return}e.player.gold-=V.gold,e.player.iron-=V.iron,e.player.wood-=V.wood,e.player.essence-=V.essence;let z=null;if(l==="premium"){const u=Math.random()-Math.min(.06,e.player.level*.0015);e.player.level>=22&&u<.025?z="legendary":u<.26?z="epic":z="rare"}const q=T(s,e.player.level+f(0,2),z,null,l==="premium"?1:0);F(e,q,{maxInventory:v,addJournal:r,trackQuest:w,checkAchievements:B}),e.stats.crafted+=1,w("crafts",1),r("🔨",`Forjas ${q.name}.`),x.toast(`Nuevo objeto: ${q.name}`,"gold")}function y(e,s,l){const{toast:x,trackQuest:v,addJournal:c}=l,r=e.player.equipment[s];if(!r){x("No tienes ese hueco equipado","danger");return}if((r.upgrade||0)>=10){x("Ese objeto ya está al máximo","cyan");return}const w=o(r.rarity),B=Math.round(90+r.level*18+r.upgrade*65+w.value*.4),V=Math.max(2,Math.round(3+r.upgrade*1.4+w.affixes)),z=r.upgrade>=6?1+Math.floor(r.upgrade/3):0;if(e.player.gold<B||e.player.iron<V||e.player.essence<z){x("No tienes materiales suficientes","danger");return}e.player.gold-=B,e.player.iron-=V,e.player.essence-=z,r.upgrade+=1,r.score=b(r),e.stats.crafted+=1,v("crafts",1),c("⚒️",`Mejoras ${r.name} a +${r.upgrade}.`)}function h(e,s,l){const{toast:x,addJournal:v}=l,c=_(e,s)||Object.values(e.player.equipment).find(B=>B&&B.id===s);if(!c)return;const r={gold:180,essence:2};if(e.player.gold<r.gold||e.player.essence<r.essence){x("Te faltan recursos para retemplar","danger");return}e.player.gold-=r.gold,e.player.essence-=r.essence;const w=T(c.slot,Math.max(c.level,e.player.level),c.rarity,c.baseName);c.stats=w.stats,c.affixes=w.affixes,c.name=w.name,c.score=b(c),v("🌀",`Retemplas ${c.baseName} y nace ${c.name}.`)}function P(e,s){const{toast:l,trackQuest:x,addJournal:v}=s,c=e.player.inventory.filter(w=>w.rarity==="common");if(!c.length){l("No hay chatarra común que vender","cyan");return}let r=0;c.forEach(w=>{r+=Math.round(w.value*.55)}),e.player.inventory=e.player.inventory.filter(w=>w.rarity!=="common"),e.player.gold+=r,e.stats.earnedGold+=r,x("earnGold",r),v("🧹",`Vendes automáticamente ${c.length} objetos comunes por ${r} de oro.`)}return{acquireItem:F,removeInventoryItem:R,getInventoryItem:_,equipItem:L,unequipItem:j,sellItem:K,salvageItem:m,refreshMarket:t,buyMarketItem:g,buyResource:k,forgeItem:p,upgradeEquipped:y,rerollItem:h,autoManage:P}}function Na(n){const{JOBS:o,ZONES:f,clone:S,rand:d,pick:C,SLOT_ORDER:T,makeItem:b,clamp:$}=n;function R(m,t,g){const k=g(),p=k.maxHp*(.0033+k.regenPct*.01)*t,y=(.48+m.player.training.discipline*.02+m.player.relics.momentum*.04)*t,h=(.028+m.player.relics.momentum*.005)*t;m.player.hp=$(m.player.hp+p,1,k.maxHp),m.player.energy=$(m.player.energy+y,0,k.maxEnergy),m.player.stamina=$(m.player.stamina+h,0,k.maxStamina)}function _(m,t,g){const{toast:k,addJournal:p}=g,y=o.find(h=>h.id===t);if(y){if(m.timers.job){k("Ya tienes un trabajo en curso","cyan");return}if(m.player.energy<12){k("Necesitas al menos 12 de energía","danger");return}m.player.energy-=12,m.timers.job={id:y.id,name:y.name,endAt:Date.now()+y.duration*1e3,reward:S(y.reward),startedAt:Date.now()},p("🧰",`Comienzas el trabajo: <b>${y.name}</b>.`)}}function F(m,t,g){const{grantRewards:k,toast:p}=g;if(!m.timers.job)return;const y=m.timers.job;m.timers.job=null,k(y.reward,`Trabajo terminado — ${y.name}`),t||p(`Trabajo completado: ${y.name}`,"success")}function L(m,t,g,k){const{isZoneUnlocked:p,toast:y,addJournal:h}=k,P=f.find(s=>s.id===t);if(!P||!p(P))return;if(m.timers.expedition){y("Ya estás en expedición","cyan");return}const e=P.energyCost+Math.floor(g/40);if(m.player.energy<e||m.player.stamina<P.staminaCost){y("No tienes recursos para partir","danger");return}m.player.energy-=e,m.player.stamina-=P.staminaCost,m.timers.expedition={zoneId:t,endAt:Date.now()+g*1e3,durationSec:g,startedAt:Date.now()},h("🧭",`Sales de expedición a <b>${P.name}</b> durante ${g}s.`)}function j(m,t,g){const{grantRewards:k,getDerivedStats:p,trackQuest:y,acquireItem:h,addJournal:P,toast:e}=g;if(!m.timers.expedition)return;const s=m.timers.expedition;m.timers.expedition=null;const l=f.find(c=>c.id===s.zoneId)||f[0],x=1+s.durationSec/90,v={gold:Math.round((90+l.id*50+m.player.level*16)*x*(1+p().goldPct)),xp:Math.round((55+l.id*35+m.player.level*12)*x),iron:d(1,3+l.id),wood:d(1,2+Math.floor(l.id/2)),essence:Math.random()<.45?d(1,2+Math.floor(l.id/2)):0,food:Math.random()<.5?1+Math.floor(l.id/2):0};if(k(v,`Expedición — ${l.name}`),m.stats.expeditions+=1,y("expeditions",1),Math.random()<.55+l.id*.03){const c=b(C(T),m.player.level+l.id,Math.random()<.12?"epic":null);h(c),P("🎒",`Encuentras <span class="rarity-${c.rarity}">${c.name}</span> en la expedición.`)}t||e(`Expedición completada: ${l.name}`,"success")}function K(m,t,g,k){const{completeJob:p,completeExpedition:y}=k;let h=!1;return m.timers.job&&m.timers.job.endAt<=t&&(p(g),h=!0),m.timers.expedition&&m.timers.expedition.endAt<=t&&(y(g),h=!0),h}return{passiveRegen:R,startJob:_,completeJob:F,startExpedition:L,completeExpedition:j,resolveFinishedTimers:K}}function Ha(n){const{RANKS:o,ACHIEVEMENTS:f,clamp:S,clone:d,defaultQuests:C,makeDefaultState:T}=n;function b(t,g){const k=t.player.level*14+t.stats.wins*4+t.player.highestDungeonFloor*10+g()*8+t.player.ascension*60;let p=o[0];return o.forEach(y=>{k>=y.min&&(p=y)}),p}function $(t,g,k){const{xpNeeded:p,ensureUnlockedSkills:y,getDerivedStats:h,currentRank:P,addJournal:e,toast:s}=k;if(!g)return;t.player.xp+=g;let l=0;for(;t.player.xp>=p(t.player.level);)t.player.xp-=p(t.player.level),t.player.level+=1,t.player.attributePoints+=4,t.player.skillPoints+=1,l+=1,y(v=>{e("✨",`Has desbloqueado la habilidad <b>${v.name}</b>.`),s(`Habilidad desbloqueada: ${v.name}`,"violet")});const x=h();l>0&&(t.player.hp=x.maxHp,t.player.energy=x.maxEnergy,t.player.stamina=S(t.player.stamina+l,0,x.maxStamina),t.player.title=P().title,e("🌟",`Subes al nivel <b>${t.player.level}</b>. Recibes puntos de atributo y habilidad.`),s(`Nivel ${t.player.level} alcanzado`,"gold"))}function R(t,g,k,p){t.quests.forEach(y=>{y.claimed||y.type!==g||(y.progress+=k,y.progress>=y.target&&(y.progress=y.target,y.completed=!0))}),g==="crafts"&&(t.stats.crafted+=0),p()}function _(t,g,k){const{grantRewards:p,addJournal:y,checkAchievements:h}=k,P=t.quests.find(e=>e.id===g);!P||!P.completed||P.claimed||(P.claimed=!0,p(P.reward,`Misión: ${P.title}`),t.stats.questsCompleted+=1,y("📜",`Misión completada: <b>${P.title}</b>.`),t.quests.every(e=>e.claimed)&&(t.quests=C(t.player.level),y("🪄","Se generan nuevos contratos en el tablón.")),h())}function F(t,g){const{toast:k,addJournal:p}=g,y=140+t.player.level*12;if(t.player.gold<y){k("Oro insuficiente para renovar misiones","danger");return}t.player.gold-=y,t.quests=C(t.player.level),p("📌",`Renuevas el tablón de contratos por ${y} de oro.`)}function L(t,g,k){const p={kills:t.stats.kills,wins:t.stats.wins,questsCompleted:t.stats.questsCompleted,highestDungeonFloor:t.player.highestDungeonFloor,level:t.player.level,legendaryFound:t.stats.legendaryFound,guildTotal:k(),ascension:t.player.ascension};return Math.min(g.target,p[g.type]||0)}function j(t,g){const{grantRewards:k,addJournal:p,toast:y,guildTotal:h}=g;f.forEach(P=>{if(t.claimedAchievements.includes(P.id))return;L(t,P,h)>=P.target&&(t.claimedAchievements.push(P.id),k(P.reward,`Logro: ${P.title}`),p("🏆",`Logro desbloqueado: <b>${P.title}</b>.`),y(`Logro desbloqueado: ${P.title}`,"gold"))})}function K(t,g,k){const{toast:p,addJournal:y}=k;if(t.player.relicDust<=0){p("No tienes polvo de reliquia","danger");return}g in t.player.relics&&(t.player.relicDust-=1,t.player.relics[g]+=1,y("🗿",`Inviertes una reliquia en ${g}.`))}function m(t,g){const{toast:k,confirmAscend:p,replaceState:y,normalizeState:h,currentRank:P,addJournal:e,checkAchievements:s}=g;if(t.player.level<20&&t.player.highestDungeonFloor<8){k("Necesitas nivel 20 o piso 8 de mazmorra","danger");return}if(!p())return;const l=3+Math.floor(t.player.level/8)+Math.floor(t.player.highestDungeonFloor/4),x=d(t.player.relics),v=t.player.relicDust+l,c=t.player.ascension+1,r=T();r.player.relics=x,r.player.relicDust=v,r.player.ascension=c,r.player.shards=2,r.player.gold=320,y(r),h(),t.player.title=P().title,e("🔱",`Has ascendido. Obtienes ${l} de Polvo de Reliquia.`),s(),k(`Ascensión completada (+${l} reliquias)`,"gold")}return{currentRank:b,gainXp:$,trackQuest:R,claimQuest:_,rerollQuests:F,achievementProgress:L,checkAchievements:j,spendRelic:K,ascend:m}}(()=>{const{SLOT_ORDER:n,SLOT_NAMES:o,RANKS:f,ZONES:S,JOBS:d,PETS:C,SKILLS:T,ACHIEVEMENTS:b}=window.AetherConfig,{$,clone:R,rand:_,randf:F,pick:L,clamp:j,sum:K,uid:m,fmt:t,pct:g,softRound:k,localDayKey:p,timeLeft:y,rarityDef:h,sanitizeInlineHtml:P}=window.AetherUtils,{state:e,replaceState:s,makeDefaultState:l,normalizeState:x,makeItem:v,scaleItemStats:c,computeItemScore:r,xpNeeded:w,defaultQuests:B,generateMarket:V,maxInventory:z,guildTotal:q,getPetData:u,getDerivedStats:a,getLootLuck:I,ensureUnlockedSkills:H,saveGame:G}=window.AetherModel,Z=Oa({SKILLS:T,pick:L,rand:_,randf:F,clamp:j,softRound:k,uid:m}),U=za({rarityDef:h,rand:_,uid:m,clone:R,generateMarket:V,makeItem:v,computeItemScore:r}),ne=Na({JOBS:d,ZONES:S,clone:R,rand:_,pick:L,SLOT_ORDER:n,makeItem:v,clamp:j}),D=Ha({RANKS:f,ACHIEVEMENTS:b,clamp:j,clone:R,defaultQuests:B,makeDefaultState:l});function A(i,E){e.journal.unshift({id:m(),ts:Date.now(),icon:i,text:P(E)}),e.journal=e.journal.slice(0,80)}function O(i,E="cyan"){const N=$("toast-root");if(!N)return;const Y={cyan:"from-sky-500/25 to-cyan-300/10 border-cyan-300/25",gold:"from-amber-500/25 to-yellow-300/10 border-amber-300/30",danger:"from-rose-500/25 to-pink-300/10 border-rose-300/25",success:"from-emerald-500/25 to-green-300/10 border-emerald-300/25",violet:"from-violet-500/25 to-fuchsia-300/10 border-violet-300/25"},J=document.createElement("div");J.className=`glass-strong pointer-events-none rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-br ${Y[E]||Y.cyan} animate-[fadeIn_.2s_ease]`,J.innerHTML=P(i),N.appendChild(J),setTimeout(()=>{J.style.opacity="0",J.style.transform="translateY(-6px)",setTimeout(()=>J.remove(),260)},2800)}function W(i,E="Recompensa"){i&&(Object.entries(i).forEach(([N,Y])=>{N==="xp"?re(Y):N in e.player?e.player[N]+=Y:N in e.stats?e.stats[N]+=Y:N==="relicDust"&&(e.player.relicDust+=Y)}),i.gold&&(e.stats.earnedGold+=i.gold,oe("earnGold",i.gold)),A("🎁",`${E}: ${ee(i)}`))}function ee(i){return Object.entries(i).map(([E,N])=>{const Y={xp:"XP",gold:"oro",shards:"fragmentos",iron:"hierro",wood:"madera",essence:"esencia",food:"comida",potions:"pociones",keys:"llaves",relicDust:"polvo reliquia"}[E]||E;return`+${t(N)} ${Y}`}).join(" · ")}function re(i){return D.gainXp(e,i,{xpNeeded:w,ensureUnlockedSkills:H,getDerivedStats:a,currentRank:le,addJournal:A,toast:O})}function le(){return D.currentRank(e,q)}function Pe(){const i=Date.now(),E=j((i-(e.lastTick||i))/1e3,0,60*60*12);E<=0||(M(E),pt(i,!0),e.lastTick=i)}function M(i){return ne.passiveRegen(e,i,a)}function Q(){return S.find(i=>i.id===e.player.zoneId)||S[0]}function te(i){return e.player.level>=i.unlockLevel||e.player.ascension>0&&i.id<=2}function pe(i){const E=S.find(N=>N.id===i);!E||!te(E)||(e.player.zoneId=E.id)}function xe(i){return Z.enemyArchetypeMods(i)}function de(i,E="normal",N=0){return Z.makeEnemy({zone:i,kind:E,extraScale:N,playerLevel:e.player.level||1,playerAscension:e.player.ascension||0,wins:e.stats&&e.stats.wins?e.stats.wins:0})}function Ke(){return Z.buildPlayerCombatant(e.player,a())}function qe(i,E){return Z.activeBuffValue(i,E)}function Ie(i,E){return Z.effectiveStat(i,E)}function Ye(i){return Z.skillLevelMult(e.player.skillLevels,i)}function Be(i,E){return Z.choosePlayerSkill(i,E,{equipment:e.player.equipment,skillLevels:e.player.skillLevels})}function Ue(i){return Z.chooseEnemySkill(i)}function Xe(i,E){return Z.decayStatuses(i,E)}function et(i,E,N,Y=1,J={},ie=[]){return Z.performHit(i,E,N,Y,J,ie)}function Oe(i,E,N,Y,J){return Z.applySkillEffects(i,E,N,Y,J)}function ze(i,E,N,Y){const J={damageDone:0,damageTaken:0,crits:0};return Z.actorTurn(i,E,N,{equipment:e.player.equipment,skillLevels:e.player.skillLevels},J,Y)}function Ne(i){return Z.tickCooldowns(i)}function we(i,E={mode:"arena"}){const N=Z.runCombat({enemy:i,playerState:e.player,derivedStats:a(),zoneName:S[i.zoneId]&&S[i.zoneId].name||"Zona desconocida",maxTurns:28}),{player:Y,foe:J,log:ie,victory:ve,statsDelta:Se}=N;e.stats.damageDone+=Se.damageDone,e.stats.damageTaken+=Se.damageTaken,e.stats.crits+=Se.crits,e.player.hp=j(Y.hp,1,a().maxHp);const ue={gold:0,xp:0,iron:0,wood:0,essence:0,keys:0,potions:0};let be=null;if(ve){const ye=S[J.zoneId],ma=_(30,54)+J.level*12+(J.kind==="elite"?45:J.kind==="boss"?70:0),ga=_(22,38)+J.level*10+(J.kind==="boss"?55:0);ue.gold=Math.round(ma*(1+a().goldPct)),ue.xp=Math.round(ga),ue.iron=_(0,2+ye.id),ue.wood=_(0,1+Math.floor(ye.id/2)),ue.essence=Math.random()<.32+ye.id*.02?_(1,2+Math.floor(ye.id/2)):0,ue.keys=E.mode==="dungeon"&&Math.random()<.13?1:0,ue.potions=Math.random()<.08?1:0;const fa=.26+I()*.7+(J.kind==="elite"?.1:0)+(J.kind==="boss"?.16:0)+(E.mode==="dungeon"?.1:0);if(Math.random()<fa){const He=Math.random()-I()*.32-ye.id*.01-(J.kind==="elite"?.015:0)-(J.kind==="boss"?.04:0);let Re=null;(J.kind==="boss"||ye.id>=5)&&He<.0025?Re="mythic":(J.kind==="elite"||J.kind==="boss"||ye.id>=4)&&He<.013?Re="legendary":He<.06?Re="epic":He<.19&&(Re="rare"),be=v(L(n),J.level,Re),Ce(be)}W(ue,`Botín de ${J.name}`),e.stats.kills+=1,E.mode==="arena"&&(e.stats.wins+=1),E.mode==="dungeon"&&(e.stats.dungeons+=1),J.kind==="elite"&&(e.stats.elites+=1),J.kind==="boss"&&(e.player.highestDungeonFloor=Math.max(e.player.highestDungeonFloor,E.floor||e.player.highestDungeonFloor)),oe("kills",1),E.mode==="arena"&&oe("wins",1),E.mode==="dungeon"&&oe("dungeons",1),J.kind==="elite"&&oe("elites",1),A("⚔️",`Victoria contra <b>${J.name}</b>. ${ee(ue)}${be?` · Botín: <span class="rarity-${be.rarity}">${be.name}</span>`:""}`),O(`Victoria sobre ${J.name}`,"success")}else E.mode==="arena"&&(e.stats.losses+=1),e.player.gold=Math.max(0,e.player.gold-_(10,25)),A("💀",`Has sido derrotado por <b>${J.name}</b>. La multitud te abuchea.`),O(`Derrota contra ${J.name}`,"danger");e.player.title=le().title,fe(),e.combatHistory.unshift({id:m(),ts:Date.now(),title:`${ve?"Victoria":"Derrota"} vs ${J.name}`,result:ve?"victory":"defeat",enemy:J.name,zone:S[J.zoneId].name,log:ie,rewards:ue,drop:be}),e.combatHistory=e.combatHistory.slice(0,15),e.ui.modal={type:"combat",title:`${ve?"Victoria":"Derrota"} — ${J.name}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Resultado</div>
              <div class="text-xl font-black ${ve?"text-emerald-300":"text-rose-300"}">${ve?"Has ganado":"Has perdido"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${ee(ue)}${be?` · Botín: <span class="rarity-${be.rarity}">${be.name}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado final</div>
              <div class="text-lg font-black text-white">${t(e.player.hp)} HP restantes</div>
              <div class="text-sm text-slate-300/75 mt-1">${J.name} ${ve?"cayó derrotado":"sobrevivió al duelo"}.</div>
            </div>
          </div>
          <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro de combate</div>
            <div class="space-y-2 text-sm text-slate-100/90">${ie.map(ye=>`<div class="leading-relaxed">${ye}</div>`).join("")}</div>
          </div>
        </div>
      `}}function Ce(i){return U.acquireItem(e,i,{maxInventory:z(),addJournal:A,trackQuest:oe,checkAchievements:fe})}function X(i){return U.removeInventoryItem(e,i)}function ce(i){return U.getInventoryItem(e,i)}function Le(i){return U.equipItem(e,i,{addJournal:A})}function $e(i){return U.unequipItem(e,i,{maxInventory:z(),addJournal:A,toast:O})}function Bt(i){return U.sellItem(e,i,{addJournal:A,trackQuest:oe})}function Ot(i){return U.salvageItem(e,i,{addJournal:A,trackQuest:oe})}function zt(){const i=a();if(e.player.potions<=0){O("No te quedan pociones","danger");return}if(e.player.hp>=i.maxHp){O("Ya estás con toda la vida","cyan");return}e.player.potions-=1;const E=Math.round(i.maxHp*.42);e.player.hp=j(e.player.hp+E,0,i.maxHp),A("🧪",`Bebes una poción y recuperas ${E} HP.`),O(`+${E} HP`,"success")}function Nt(){const i=p();if(e.streak.lastClaimDay===i){O("La recompensa diaria ya fue reclamada hoy","cyan");return}const E=p(Date.now()-864e5);e.streak.days=e.streak.lastClaimDay===E?Math.min(7,e.streak.days+1):1,e.streak.lastClaimDay=i;const N=e.streak.days,Y={gold:180+N*70,xp:60+N*30,potions:N>=3?1:0,keys:N>=5?1:0,shards:N===7?3:1,essence:1+Math.floor(N/2)};W(Y,`Recompensa diaria (día ${N})`),O(`Recompensa diaria reclamada — racha ${N}`,"gold")}function Ht(i){const E={strength:["Fuerza",1],agility:["Agilidad",1],endurance:["Resistencia",1],discipline:["Disciplina",1]};if(!E[i])return;if(e.player.attributePoints<=0){O("No tienes puntos de atributo","danger");return}e.player.attributePoints-=1,e.player.training[i]+=1;const N=a();e.player.hp=Math.min(e.player.hp,N.maxHp),A("🏋️",`Aumentas ${E[i][0]}.`)}function _t(i){const E=T[i];if(!(!E||!e.player.unlockedSkills.includes(i))){if(e.player.skillPoints<=0){O("No tienes puntos de habilidad","danger");return}if((e.player.skillLevels[i]||1)>=5){O("Esa habilidad ya está al máximo","cyan");return}e.player.skillLevels[i]+=1,e.player.skillPoints-=1,A("📘",`Mejoras ${E.name} a nivel ${e.player.skillLevels[i]}.`)}}function Ft(i){if(!e.player.unlockedSkills.includes(i))return;const E=e.player.activeSkills,N=E.indexOf(i);if(N>=0){if(E.length<=1){O("Debes dejar al menos una habilidad activa","danger");return}E.splice(N,1)}else{if(E.length>=4){O("Máximo de 4 habilidades activas","cyan");return}E.push(i)}}function Gt(i=!0){return U.refreshMarket(e,i,{toast:O,addJournal:A})}function Jt(i){return U.buyMarketItem(e,i,{maxInventory:z(),toast:O,addJournal:A,trackQuest:oe,checkAchievements:fe})}function Zt(i){return U.buyResource(e,i,{toast:O,grantRewards:W})}function Wt(i,E="normal"){return U.forgeItem(e,i,E,{maxInventory:z(),toast:O,addJournal:A,trackQuest:oe,checkAchievements:fe})}function Qt(i){return U.upgradeEquipped(e,i,{toast:O,trackQuest:oe,addJournal:A})}function Kt(i){return U.rerollItem(e,i,{toast:O,addJournal:A})}function Yt(i){return ne.startJob(e,i,{toast:O,addJournal:A})}function dt(i=!1){return ne.completeJob(e,i,{grantRewards:W,toast:O})}function Ut(i,E){return ne.startExpedition(e,i,E,{isZoneUnlocked:te,toast:O,addJournal:A})}function ut(i=!1){return ne.completeExpedition(e,i,{grantRewards:W,getDerivedStats:a,trackQuest:oe,acquireItem:Ce,addJournal:A,toast:O})}function pt(i=Date.now(),E=!1){return ne.resolveFinishedTimers(e,i,E,{completeJob:dt,completeExpedition:ut})}function Xt(i="normal"){const E=Q(),N=E.staminaCost+(i==="elite"?1:0);if(e.player.stamina<N||e.player.energy<E.energyCost){O("No tienes energía o aguante suficiente","danger");return}e.player.stamina-=N,e.player.energy-=E.energyCost;const Y=de(E,i);we(Y,{mode:"arena"})}function ea(i=3){const E=[];for(let N=0;N<i;N++){const Y=Q();if(e.player.stamina<Y.staminaCost||e.player.energy<Y.energyCost||e.player.hp<a().maxHp*.2)break;e.player.stamina-=Y.staminaCost,e.player.energy-=Y.energyCost;const J=de(Y,"normal",N);we(J,{mode:"arena"});const ie=e.combatHistory[0];if(E.push(`${ie.result==="victory"?"✅":"❌"} ${ie.title}`),ie.result!=="victory")break}E.length&&(e.ui.modal={type:"summary",title:`Racha de arena x${E.length}`,content:`<div class="glass rounded-2xl p-4 text-sm text-slate-100/90 space-y-2">${E.map(N=>`<div>${N}</div>`).join("")}</div>`})}function ta(){if(e.player.keys<1){O("Necesitas una llave de mazmorra","danger");return}if(e.player.stamina<2){O("Necesitas al menos 2 de aguante","danger");return}e.player.keys-=1,e.player.stamina-=2;const i=e.player.highestDungeonFloor,E=S[Math.min(S.length-1,Math.floor((i-1)/2))],N=[];let Y=!0;if([de(E,"normal",i*.8),de(E,"normal",i*.85),de(E,"elite",i*.9),de(E,"boss",i)].forEach((ie,ve)=>{if(!Y)return;we(ie,{mode:"dungeon",floor:i});const Se=e.combatHistory[0];N.push(`${Se.result==="victory"?"✅":"❌"} ${ve<3?"Encuentro":"Jefe"}: ${ie.name}`),Se.result!=="victory"&&(Y=!1)}),Y){e.player.highestDungeonFloor+=1;const ie={gold:120+i*55,xp:90+i*42,essence:2+Math.floor(i/3),shards:i%3===0?2:1};W(ie,`Cofre del piso ${i}`),A("🏰",`Limpias el piso ${i} y avanzas al piso ${i+1}.`),O(`Piso ${i} superado`,"gold")}else A("🕸️",`No logras superar el piso ${i}.`);e.ui.modal={type:"summary",title:`Mazmorra — Piso ${i}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado</div>
              <div class="text-xl font-black ${Y?"text-emerald-300":"text-rose-300"}">${Y?"Incursión limpia":"Incursión fallida"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${Y?"El botín del jefe ha sido asegurado.":"Tu grupo de uno no pudo seguir avanzando."}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ruta</div>
              <div class="space-y-2 text-sm">${N.map(ie=>`<div>${ie}</div>`).join("")}</div>
            </div>
          </div>
        </div>
      `}}function aa(){if(e.player.pet){O("Ya tienes una mascota activa","cyan");return}if(e.player.shards<5||e.player.essence<8){O("Necesitas 5 fragmentos y 8 de esencia","danger");return}e.player.shards-=5,e.player.essence-=8;const i=L(C);e.player.pet=i.id,e.player.petLevel=1,e.player.petXp=0,A("🐾",`Incubas a <b>${i.name}</b>. ${i.desc}`),O(`Mascota obtenida: ${i.name}`,"violet")}function na(){if(!e.player.pet){O("Aún no tienes mascota","danger");return}if(e.player.food<2||e.player.essence<1){O("Necesitas 2 de comida y 1 de esencia","danger");return}e.player.food-=2,e.player.essence-=1,e.player.petXp+=1,e.player.petXp>=3+e.player.petLevel&&(e.player.petXp=0,e.player.petLevel+=1,A("🐾",`Tu mascota alcanza nivel ${e.player.petLevel}.`),O(`Mascota nivel ${e.player.petLevel}`,"success"))}function sa(){if(!e.player.pet)return;const i=u();e.player.pet=null,e.player.petLevel=0,e.player.petXp=0,A("🪽",`Liberas a ${i?i.name:"tu mascota"} y recuperas tu calma.`)}function ia(i){return D.spendRelic(e,i,{toast:O,addJournal:A})}function ra(){return D.ascend(e,{toast:O,confirmAscend:()=>window.confirm("Ascender reinicia nivel, equipo, inventario y recursos comunes, pero te da Polvo de Reliquia. ¿Continuar?"),replaceState:s,normalizeState:x,currentRank:le,addJournal:A,checkAchievements:fe})}function oe(i,E){return D.trackQuest(e,i,E,fe)}function oa(i){return D.claimQuest(e,i,{grantRewards:W,addJournal:A,checkAchievements:fe})}function la(){return D.rerollQuests(e,{toast:O,addJournal:A})}function ca(i){return D.achievementProgress(e,i,q)}function fe(){return D.checkAchievements(e,{grantRewards:W,addJournal:A,toast:O,guildTotal:q})}function da(i){const E=e.player.guild;if(!(i in E))return;const N=E[i]+1,Y=180+N*110+q()*35,J=Math.max(1,Math.floor(N/2));if(e.player.gold<Y||e.player.essence<J){O("No tienes recursos suficientes","danger");return}e.player.gold-=Y,e.player.essence-=J,E[i]+=1,A("🏛️",`Mejoras ${i} del gremio al nivel ${E[i]}.`),fe()}function ua(){return U.autoManage(e,{toast:O,trackQuest:oe,addJournal:A})}function pa(){const i=a();if(i.maxHp-e.player.hp<=0){O("Ya tienes la vida al máximo","cyan");return}let N=0;for(;e.player.hp<i.maxHp&&e.player.potions>0&&N<10;)e.player.potions-=1,e.player.hp=j(e.player.hp+i.maxHp*.42,0,i.maxHp),N++;A("🩹",`Usas ${N} poción(es) para recuperarte.`)}window.AetherSystems={addJournal:A,toast:O,grantRewards:W,summarizeReward:ee,gainXp:re,currentRank:le,offlineCatchup:Pe,passiveRegen:M,zoneForPlayer:Q,isZoneUnlocked:te,setZone:pe,enemyArchetypeMods:xe,makeEnemy:de,buildPlayerCombatant:Ke,activeBuffValue:qe,effectiveStat:Ie,skillLevelMult:Ye,choosePlayerSkill:Be,chooseEnemySkill:Ue,decayStatuses:Xe,performHit:et,applySkillEffects:Oe,actorTurn:ze,tickCooldowns:Ne,runCombat:we,acquireItem:Ce,removeInventoryItem:X,getInventoryItem:ce,equipItem:Le,unequipItem:$e,sellItem:Bt,salvageItem:Ot,usePotion:zt,claimDaily:Nt,trainAttribute:Ht,upgradeSkill:_t,toggleActiveSkill:Ft,refreshMarket:Gt,buyMarketItem:Jt,buyResource:Zt,forgeItem:Wt,upgradeEquipped:Qt,rerollItem:Kt,startJob:Yt,completeJob:dt,startExpedition:Ut,completeExpedition:ut,resolveFinishedTimers:pt,fightArena:Xt,arenaBlitz:ea,runDungeon:ta,hatchPet:aa,feedPet:na,releasePet:sa,spendRelic:ia,ascend:ra,trackQuest:oe,claimQuest:oa,rerollQuests:la,achievementProgress:ca,checkAchievements:fe,upgradeGuild:da,autoManage:ua,autoHeal:pa}})();const _a={setZone:["hud","content"],fightArena:["hud","content"],arenaBlitz:["hud","content","modal"],runDungeon:["hud","content","modal"],startExpedition:["hud","content"],startJob:["hud","content"],claimQuest:["hud","content"],rerollQuests:["hud","content"],usePotion:["hud","content"],autoHeal:["hud","content"],claimDaily:["hud","content"],buyMarketItem:["hud","content"],buyResource:["hud","content"],equipItem:["hud","content"],unequipItem:["hud","content"],sellItem:["hud","content"],salvageItem:["hud","content"],forgeItem:["hud","content"],upgradeEquipped:["hud","content"],rerollItem:["hud","content"],upgradeGuild:["hud","content"],trainAttribute:["hud","content"],upgradeSkill:["hud","content"],toggleActiveSkill:["hud","content"],hatchPet:["hud","content"],feedPet:["hud","content"],releasePet:["hud","content"],spendRelic:["hud","content"],ascend:["hud","content"],refreshMarket:["hud","content"],autoManage:["hud","content"]};function Fa(n,o){const{systems:f,mutate:S,afterAction:d}=o;return Object.entries(_a).forEach(([C,T])=>{n[C]=(...b)=>{let $;return S(`systems/${C}`,()=>{$=f[C](...b)},{source:"systems"}),d(T),$}}),n}const mt={home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5.25 9.75V21h13.5V9.75"/>',user:'<path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M4.5 20.25a7.5 7.5 0 0 1 15 0"/>',backpack:'<path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M6.75 7.5h10.5A2.25 2.25 0 0 1 19.5 9.75v9A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75v-9A2.25 2.25 0 0 1 6.75 7.5Z"/><path d="M9 12.75h6"/>',swords:'<path d="m4 20 7-7"/><path d="m13 11 7-7"/><path d="M14.5 4.5 19.5 9.5"/><path d="m4.5 14.5 5 5"/><path d="m9 9 6 6"/>',compass:'<circle cx="12" cy="12" r="8.25"/><path d="m14.75 9.25-1.65 4.85-4.85 1.65 1.65-4.85 4.85-1.65Z"/>',castle:'<path d="M5.25 21V9l3 1.5V6l3 1.5L15 6v4.5L18 9v12"/><path d="M3.75 21h16.5"/><path d="M9.75 21v-4.5h4.5V21"/>',cart:'<path d="M3.75 4.5h1.5l1.8 8.1a1.5 1.5 0 0 0 1.47 1.17h7.98a1.5 1.5 0 0 0 1.47-1.17L19.5 7.5H6.3"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17.25" cy="19.5" r="1.5"/>',hammer:'<path d="m14.25 5.25 4.5 4.5"/><path d="m6.75 12.75 7.5-7.5 3 3-7.5 7.5"/><path d="M5.25 14.25 3.75 20.25 9.75 18.75"/>',shield:'<path d="M12 3.75 5.25 6v5.25c0 4.29 2.7 8.11 6.75 9.5 4.05-1.39 6.75-5.21 6.75-9.5V6L12 3.75Z"/>',book:'<path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5v16.5H6.75A2.25 2.25 0 0 0 4.5 21V5.25Z"/><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 1 6.75 16.5h10.5"/>',briefcase:'<path d="M9 6V4.875A1.875 1.875 0 0 1 10.875 3h2.25A1.875 1.875 0 0 1 15 4.875V6"/><rect x="3.75" y="6" width="16.5" height="12.75" rx="2.25"/><path d="M3.75 11.25h16.5"/>',paw:'<circle cx="7" cy="9" r="1.25"/><circle cx="11" cy="6.5" r="1.25"/><circle cx="15" cy="6.5" r="1.25"/><circle cx="17" cy="10" r="1.25"/><path d="M12 18c-2.7 0-4.5-1.44-4.5-3.4 0-1.75 1.2-3.35 3.06-3.35.96 0 1.62.36 1.94.72.32-.36.98-.72 1.94-.72 1.86 0 3.06 1.6 3.06 3.35C16.5 16.56 14.7 18 12 18Z"/>',trophy:'<path d="M8.25 4.5h7.5v2.25A3.75 3.75 0 0 1 12 10.5 3.75 3.75 0 0 1 8.25 6.75V4.5Z"/><path d="M6 4.5h2.25v2.25A3 3 0 0 1 5.25 9.75H4.5A1.5 1.5 0 0 1 3 8.25v-.75A3 3 0 0 1 6 4.5Zm12 0h-2.25v2.25A3 3 0 0 0 18.75 9.75h.75A1.5 1.5 0 0 0 21 8.25v-.75A3 3 0 0 0 18 4.5Z"/><path d="M12 10.5v4.5"/><path d="M9 21h6"/><path d="M10.5 15h3v6h-3Z"/>',scroll:'<path d="M8.25 4.5h8.25A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5H8.25A3.75 3.75 0 0 1 4.5 15.75V8.25A3.75 3.75 0 0 1 8.25 4.5Z"/><path d="M8.25 4.5A2.25 2.25 0 0 0 6 6.75v9A2.25 2.25 0 0 1 3.75 18H6"/><path d="M9.75 9h4.5"/><path d="M9.75 12.75h4.5"/>',menu:'<path d="M4.5 7.5h15"/><path d="M4.5 12h15"/><path d="M4.5 16.5h15"/>',flask:'<path d="M10.5 3.75h3"/><path d="M10.5 3.75v5.1l-4.95 7.74A2.25 2.25 0 0 0 7.44 20.25h9.12a2.25 2.25 0 0 0 1.89-3.66L13.5 8.85v-5.1"/><path d="M8.25 14.25h7.5"/>',bandage:'<path d="m8.25 8.25 7.5 7.5"/><path d="m15.75 8.25-7.5 7.5"/><rect x="4.5" y="7.5" width="15" height="9" rx="2.25" transform="rotate(-45 12 12)"/>',gift:'<path d="M12 21V9"/><path d="M4.5 12h15"/><rect x="4.5" y="7.5" width="15" height="12.75" rx="2.25"/><path d="M12 7.5H8.25A2.25 2.25 0 1 1 10.5 5.25c0 .83-.43 1.56-1.08 1.97"/><path d="M12 7.5h3.75A2.25 2.25 0 1 0 13.5 5.25c0 .83.43 1.56 1.08 1.97"/>',broom:'<path d="M14.25 4.5 19.5 9.75"/><path d="M11.25 7.5 4.5 14.25"/><path d="M4.5 14.25 9.75 19.5"/><path d="m9.75 19.5 2.25-2.25"/>',crown:'<path d="M4.5 18 6.75 7.5 12 12l5.25-4.5L19.5 18Z"/><path d="M4.5 18h15"/>',flame:'<path d="M12 21c3.31 0 6-2.46 6-5.5 0-2.17-1.13-3.7-2.8-5.25-.9-.84-1.62-1.77-2.02-2.9-.38 1.3-1.25 2.45-2.42 3.55-1.75 1.64-4.76 3.45-4.76 6.6C6 18.54 8.69 21 12 21Z"/>',key:'<circle cx="8.25" cy="12" r="3.75"/><path d="M12 12h8.25"/><path d="M16.5 12v2.25"/><path d="M18.75 12v1.5"/>',spark:'<path d="M12 3.75 13.94 9.06 19.25 11 13.94 12.94 12 18.25 10.06 12.94 4.75 11 10.06 9.06 12 3.75Z"/>',bolt:'<path d="M13.5 3.75 7.5 13.5h4.5l-1.5 6.75 6-9.75h-4.5L13.5 3.75Z"/>',dumbbell:'<path d="M4.5 9v6"/><path d="M7.5 7.5v9"/><path d="M16.5 7.5v9"/><path d="M19.5 9v6"/><path d="M7.5 12h9"/>',check:'<circle cx="12" cy="12" r="8.25"/><path d="m8.75 12.25 2.25 2.25 4.25-4.5"/>',xcircle:'<circle cx="12" cy="12" r="8.25"/><path d="m9.75 9.75 4.5 4.5"/><path d="m14.25 9.75-4.5 4.5"/>',skull:'<path d="M12 3.75c-4.14 0-7.5 2.86-7.5 6.75 0 2.63 1.54 4.92 3.82 6.15V19.5h1.93v-1.5h3.5v1.5h1.93v-2.85c2.28-1.23 3.82-3.52 3.82-6.15 0-3.89-3.36-6.75-7.5-6.75Z"/><circle cx="9" cy="11.25" r="1"/><circle cx="15" cy="11.25" r="1"/><path d="M10.5 14.5h3"/>',info:'<circle cx="12" cy="12" r="8.25"/><path d="M12 10.5v5.25"/><path d="M12 7.5h.01"/>',wind:'<path d="M4.5 10.5h8.25a2.25 2.25 0 1 0-2.25-2.25"/><path d="M3.75 15h12a2.25 2.25 0 1 1-2.25 2.25"/><path d="M4.5 7.5h4.5"/>',droplet:'<path d="M12 3.75s5.25 5.79 5.25 9A5.25 5.25 0 1 1 6.75 12.75c0-3.21 5.25-9 5.25-9Z"/>',box:'<path d="m4.5 7.5 7.5-3 7.5 3-7.5 3-7.5-3Z"/><path d="M4.5 7.5v9l7.5 3 7.5-3v-9"/><path d="M12 10.5v9"/>',coins:'<circle cx="9" cy="12" r="3.75"/><path d="M12.75 9.75A3.75 3.75 0 1 1 16.5 16.5"/>',recycle:'<path d="m9 4.5 2.25 2.25L9 9"/><path d="M11.25 6.75H8.1A2.85 2.85 0 0 0 5.25 9.6v.15"/><path d="m15 19.5-2.25-2.25L15 15"/><path d="M12.75 17.25h3.15a2.85 2.85 0 0 0 2.85-2.85v-.15"/><path d="m18 9-3 0"/><path d="M18 9a2.85 2.85 0 0 0-2.85-2.85H15"/>',bag:'<path d="M7.5 9V7.5a4.5 4.5 0 0 1 9 0V9"/><path d="M5.25 9h13.5l-.9 9.45A2.25 2.25 0 0 1 15.61 20.5H8.39a2.25 2.25 0 0 1-2.24-2.05L5.25 9Z"/>',rotate:'<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4.5H15"/>',feather:'<path d="M19.5 4.5c-6 0-10.5 4.5-10.5 10.5v4.5"/><path d="M13.5 10.5 9 15"/><path d="M15.75 8.25 9 15"/>',gem:'<path d="m7.5 4.5-3 4.5 7.5 10.5L19.5 9l-3-4.5Z"/><path d="M9 4.5 12 9l3-4.5"/><path d="M4.5 9h15"/>',pin:'<path d="M9 4.5h6l-1.5 4.5 2.25 2.25v.75H8.25v-.75L10.5 9 9 4.5Z"/><path d="M12 12v7.5"/>'},Ga={"⚔️":"swords","⚔":"swords","👑":"crown","🔥":"flame","🌪️":"spark","🧭":"compass","🎒":"backpack","🏋️":"dumbbell","🧪":"flask","🩹":"bandage","🎁":"gift","🧹":"broom","🛒":"cart","⚒️":"hammer","⚒":"hammer","🗝️":"key","🗝":"key","✨":"spark","🐾":"paw","📋":"scroll","📚":"book","💼":"briefcase","🏆":"trophy","📜":"scroll","🛡️":"shield","🛡":"shield","👤":"user","◈":"home","☰":"menu","⚡":"bolt","💪":"dumbbell","✅":"check","❌":"xcircle","☠️":"skull","💨":"wind","🩸":"droplet","🌟":"spark","💀":"skull","📦":"box","💰":"coins","♻️":"recycle","♻":"recycle","📘":"book","🛍️":"bag","🛍":"bag","🔨":"hammer","🌀":"rotate","🧰":"briefcase","🏰":"castle","🪽":"feather","🪶":"feather","🗿":"gem","🔱":"spark","📌":"pin","🏛️":"castle","🏛":"castle","🏟️":"castle","🏟":"castle","🍖":"box"};function Ae(n,o="h-5 w-5"){const f=mt[n]||mt.spark;return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="${o}" aria-hidden="true">${f}</svg>`}function Ja(n,o,f={}){const{iconClass:S="h-4 w-4",wrapClass:d="inline-flex items-center gap-2",textClass:C=""}=f;return`<span class="${d}">${Ae(n,S)}<span class="${C}">${o}</span></span>`}function ge(n=""){let o=String(n);return Object.entries(Ga).forEach(([f,S])=>{o=o.split(f).join(Ae(S,"h-4 w-4 inline-block align-[-0.2em]"))}),o}function nt(n=""){return String(n).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function vt(n=""){return String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function We(n=""){const o=nt(n);return o?`data-tooltip="${vt(o)}"`:""}function st(n=""){const o=We(n);return o?`<span tabindex="0" role="button" aria-label="Más información" class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-200/80 cursor-help focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/65 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" ${o}>${Ae("info","h-3.5 w-3.5")}</span>`:""}const{SLOT_ORDER:Za,SLOT_NAMES:Wa,VIEWS:ps,VIEW_META:Ee,VIEW_GROUPS:bt,MOBILE_PRIMARY_VIEWS:Qa,MOBILE_OVERFLOW_VIEWS:ms,ZONES:Ka,JOBS:Ya,PETS:Ua,SKILLS:Xa,ACHIEVEMENTS:en}=window.AetherConfig,{fmt:tn,pct:an,htmlStat:nn,progressBar:sn,timeLeft:rn,rarityName:on,rarityBadge:ln,translateFilter:cn,statLabel:dn,statTooltip:un}=window.AetherUtils,{state:Ge,maxInventory:pn,getPetData:mn,getDerivedStats:gn,scaleItemStats:fn,xpNeeded:gs,guildTotal:vn,getStoreMeta:bn}=window.AetherModel,{currentRank:yn,zoneForPlayer:hn,isZoneUnlocked:xn,summarizeReward:$n,achievementProgress:kn}=window.AetherSystems;function yt(){return Ee[Ge.currentView]||Ee.resumen}function wn(n,o=""){return`<span class="status-chip ${o}">${ge(n)}</span>`}function Sn(n,o,f="",S=""){return`
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div class="section-eyebrow">${n}</div>
          <div class="mt-1 flex items-center gap-2"><div class="section-title font-display leading-tight">${o}</div>${st(f||o)}</div>
          ${f?`<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/76">${ge(f)}</p>`:""}
        </div>
        ${S?`<div class="shrink-0">${ge(S)}</div>`:""}
      </div>
    `}function Mn(n,o,f="",S=""){return`
      <div class="surface-strong rounded-2xl p-4 ${f}" ${We(S||o)}>
        <div class="mb-2 flex items-center gap-2 font-bold font-display text-white leading-tight">${ge(n)}${st(S||o)}</div>
        <p class="text-sm text-slate-300/78 leading-relaxed">${ge(o)}</p>
      </div>
    `}function En(n,o,f,S=""){const d=vt(nt(n));return`<button type="button" class="btn ${o}" onclick="${f}" aria-label="${d}" ${We(S||nt(n))}>${ge(n)}</button>`}function An(n){return`
      <div class="mobile-cta-bar md:hidden">
        <div class="glass-strong rounded-[1.6rem] p-3 grid grid-cols-2 gap-2 shadow-rail" role="group" aria-label="Acciones rápidas móviles">
          ${n.join("")}
        </div>
      </div>
    `}function jn(n,o="",f=""){const S=Ee[n]||yt(),d=bt.find(T=>T.views.includes(n)),C=d?d.views:[n];return`
      <div class="glass rounded-3xl p-5 sm:p-6 animate-rise-in">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/[.08] ring text-cyan-200">${Ae(S.icon,"h-4 w-4")}</span>
              ${d?d.title:"Vista individual"}
            </div>
            <div class="flex items-center gap-2"><h2 class="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">${S.label}</h2>${st(S.desc)}</div>
            <p class="text-sm sm:text-base text-slate-300/78 mt-2 max-w-3xl">${ge(S.desc)}</p>
            ${f?`<div class="hero-actions mt-4 max-w-2xl">${f}</div>`:""}
          </div>
          ${o?`<div class="glass rounded-2xl px-4 py-3 text-sm text-slate-200/90 shrink-0 border border-cyan-300/14">${ge(o)}</div>`:""}
        </div>
        ${C.length>1?`
          <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-3">Navegación relacionada</div>
            <div class="view-links">
              ${C.map(T=>`
                <button type="button" class="view-chip ${Ge.currentView===T?"active":""}" onclick="game.setView('${T}')" ${Ge.currentView===T?'aria-current="page"':""}>
                  ${Ae(Ee[T].icon,"h-4 w-4")}
                  <span>${Ee[T].label}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}const ht={SLOT_ORDER:Za,SLOT_NAMES:Wa,VIEW_META:Ee,VIEW_GROUPS:bt,MOBILE_PRIMARY_VIEWS:Qa,ZONES:Ka,JOBS:Ya,PETS:Ua,SKILLS:Xa,ACHIEVEMENTS:en,fmt:tn,pct:an,htmlStat:nn,progressBar:sn,timeLeft:rn,rarityName:on,rarityBadge:ln,translateFilter:cn,statLabel:dn,statTooltip:un,state:Ge,maxInventory:pn,getPetData:mn,getDerivedStats:gn,scaleItemStats:fn,guildTotal:vn,getStoreMeta:bn,currentRank:yn,zoneForPlayer:hn,isZoneUnlocked:xn,summarizeReward:$n,achievementProgress:kn,icon:Ae,withIcon:Ja,replaceEmojiIcons:ge,tooltipAttr:We,activeMeta:yt,statusChip:wn,sectionHeader:Sn,infoCard:Mn,actionButton:En,actionBar:An,pageLead:jn},{VIEW_GROUPS:xt,MOBILE_PRIMARY_VIEWS:$t,VIEW_META:Fe,state:ae,fmt:De,htmlStat:_e,progressBar:tt,getDerivedStats:Pn,currentRank:In,activeMeta:Cn,getStoreMeta:Ln,maxInventory:Rn,icon:Je,withIcon:Me,tooltipAttr:ke}=ht;function Dn(){const n=Pn(),o=In(),f=Cn(),S=Ln(),d=S.isSaving?"Guardando...":S.isDirty?"Cambios pendientes":S.lastSaveAt?`Guardado ${new Date(S.lastSaveAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Sin guardado",C=S.isSaving?"warning":S.isDirty?"danger":"success",T=n.maxHp?ae.player.hp/n.maxHp:1,b=T<=.35?'<span class="status-chip danger">Vida crítica</span>':T<=.65?'<span class="status-chip warning">Vida media</span>':'<span class="status-chip success">Vida estable</span>';return`
    <div class="glass-strong rounded-[2rem] p-4 sm:p-6 animate-rise-in">
      <div class="grid xl:grid-cols-[minmax(0,1.35fr),minmax(310px,.65fr)] gap-5 sm:gap-6">
        <section class="space-y-4 min-w-0">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
                <span class="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.65)]"></span>
                Aether Arena · ${f.label}
              </div>
              <h1 class="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.05]">${ae.player.name}</h1>
              <p class="text-slate-300/82 mt-2 text-sm sm:text-base">${ae.player.title} · <b>${o.title}</b></p>
              <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span class="status-chip ${C}">${d}</span>
                <span class="status-chip">Nivel ${ae.player.level}</span>
                <span class="status-chip">Zona ${f.label}</span>
                ${b}
              </div>
            </div>
            <div class="stat-pill rounded-2xl px-3.5 py-3 shrink-0 min-w-[168px]">
              <div class="text-xs text-slate-300/65 uppercase tracking-[.14em]">Recursos listos</div>
              <div class="text-base font-black text-emerald-300 leading-tight mt-1">${De(ae.player.energy)}⚡ · ${De(ae.player.stamina)}💪</div>
              <div class="text-[11px] text-slate-300/68 mt-1">Para combatir, forjar y explorar</div>
            </div>
          </div>

          <div class="space-y-3">
            ${tt(ae.player.hp,n.maxHp,"bg-gradient-to-r from-rose-500 via-pink-400 to-orange-300 shadow-[0_0_16px_rgba(244,63,94,.3)]","Vida","Salud actual sobre tu vida máxima.")}
            ${tt(ae.player.energy,n.maxEnergy,"bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_16px_rgba(34,211,238,.3)]","Energía","Recurso principal para varias acciones activas.")}
            ${tt(ae.player.stamina,n.maxStamina,"bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_16px_rgba(74,222,128,.28)]","Aguante","Marca cuántas actividades físicas puedes sostener.")}
          </div>
        </section>

        <aside class="space-y-3">
          <div class="kpi-rail">
            ${_e("Oro",De(ae.player.gold),"","Moneda principal para comprar, forjar y mejorar.")}
            ${_e("Pociones",De(ae.player.potions),"","Curación rápida para sostener el ciclo activo.")}
            ${_e("Ataque",De(n.attack),"","Daño base de tus golpes y habilidades ofensivas.")}
            ${_e("Mochila",`${ae.player.inventory.length}/${Rn()}`,"","Capacidad usada frente al máximo disponible.")}
          </div>

          <div class="glass rounded-2xl p-4">
            <div class="text-[11px] uppercase tracking-[.2em] text-cyan-200/62 mb-2">Acciones inmediatas</div>
            <div class="grid grid-cols-2 gap-2">
              <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${ke("Consume una poción para recuperar salud y sostener el ritmo de juego.")}>${Me("flask","Poción")}</button>
              <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${ke("Limpia inventario vendiendo y reciclando excedentes.")}>${Me("broom","Limpiar")}</button>
              <button class="btn !py-2.5" onclick="game.setView('arena')" ${ke("Abre la arena para continuar progreso activo.")}>${Me("swords","Arena")}</button>
              <button class="btn !py-2.5" onclick="game.setView('inventario')" ${ke("Abre inventario para comparar y equipar mejoras.")}>${Me("backpack","Inventario")}</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `}function kt(n,o=!1){const f=Fe[n],S=ae.currentView===n,d=S?'aria-current="page"':"";return o?`
      <button type="button" class="mobile-nav-btn ${S?"active":""}" onclick="game.setView('${n}')" aria-label="Ir a ${f.label}" ${d} ${ke(f.desc)}>
        <span class="nav-icon">${Je(f.icon)}</span>
        <span class="nav-label">${f.label}</span>
      </button>
    `:`
    <button type="button" class="nav-link ${S?"active":""}" onclick="game.setView('${n}')" ${d} ${ke(f.desc)}>
      <span class="nav-icon">${Je(f.icon)}</span>
      <span class="min-w-0">
        <span class="block font-bold leading-tight">${f.label}</span>
        <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${f.short}</span>
      </span>
    </button>
  `}function Vn(){return`
    <div class="glass rounded-3xl p-4 lg:p-5 sticky top-4 space-y-5">
      <div>
        <div class="text-xs uppercase tracking-[.2em] text-slate-300/55 mb-1">Navegación</div>
        <div class="text-2xl font-display font-extrabold">Vistas</div>
        <p class="text-sm text-slate-300/74 mt-2">Cada pantalla mantiene una acción principal y módulos de apoyo.</p>
      </div>

      <div class="space-y-4">
        ${xt.map(n=>`
          <div>
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45 mb-2">${n.title}</div>
            <div class="grid gap-2">
              ${n.views.map(o=>kt(o)).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <div class="space-y-2">
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45">Acciones rápidas</div>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-success !py-2.5" onclick="game.usePotion()" ${ke("Consume una poción para recuperar salud y seguir combatiendo.")}>${Me("flask","Poción")}</button>
          <button class="btn btn-primary !py-2.5" onclick="game.autoManage()" ${ke("Vende o recicla excedentes para despejar la mochila.")}>${Me("broom","Limpiar")}</button>
        </div>
      </div>
    </div>
  `}function Tn(){return`
    <nav class="mobile-nav glass-strong md:hidden" style="--mobile-nav-h: 6.25rem;">
      <div class="mobile-nav-grid">
        ${$t.map(n=>kt(n,!0)).join("")}
        <button type="button" class="mobile-nav-btn ${ae.ui.moreMenuOpen?"active":""}" onclick="game.toggleMoreMenu()" aria-label="Abrir más vistas">
          <span class="nav-icon">${Je("menu")}</span>
          <span class="nav-label">Más</span>
        </button>
      </div>
    </nav>
  `}function qn(){return ae.ui.moreMenuOpen?`
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
          ${xt.map(n=>`
            <section class="mobile-sheet-group">
              <div class="mobile-sheet-title">${n.title}</div>
              <div class="grid grid-cols-1 gap-2">
                ${n.views.filter(o=>!$t.includes(o)).map(o=>`
                  <button type="button" class="nav-link ${ae.currentView===o?"active":""}" onclick="game.setView('${o}')" ${ae.currentView===o?'aria-current="page"':""}>
                    <span class="nav-icon">${Je(Fe[o].icon)}</span>
                    <span class="min-w-0">
                      <span class="block font-bold leading-tight">${Fe[o].label}</span>
                      <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${Fe[o].short}</span>
                    </span>
                  </button>
                `).join("")||'<div class="text-sm text-slate-300/55 px-2 py-1">Ya visible en la barra inferior.</div>'}
              </div>
            </section>
          `).join("")}
        </div>
      </div>
    </div>
  `:""}const Bn={renderHud:Dn,renderDesktopNav:Vn,renderMobileNav:Tn,renderMobileSheet:qn};function On(n){const{SLOT_ORDER:o,ZONES:f,SKILLS:S,state:d,maxInventory:C,getPetData:T,getDerivedStats:b,currentRank:$,zoneForPlayer:R,summarizeReward:_,fmt:F,pct:L,htmlStat:j,timeLeft:K,icon:m,translateFilter:t,tooltipAttr:g,statusChip:k,sectionHeader:p,infoCard:y,actionButton:h,actionBar:P,pageLead:e,questCard:s,equippedSlotCard:l,inventoryCards:x,zoneSelector:v}=n;function c(){return d.timers.expedition?K(d.timers.expedition.endAt):"0s"}function r(){return d.timers.job?K(d.timers.job.endAt):"0s"}function w(){const q=R(),u=d.quests.find(G=>!G.claimed)||d.quests[0],a=d.quests.filter(G=>!G.claimed).length,I=d.player.inventory.length/Math.max(1,C()),H=I>=.9?k("Mochila al límite","danger"):I>=.7?k("Mochila alta","warning"):k("Mochila estable","success");return`
      <div class="space-y-5">
        ${e("resumen",`Zona activa: <b>${q.name}</b> · Contratos pendientes: <b>${a}</b>`,[h("⚔️ Continuar en arena","btn-primary","game.setView('arena')","Entra directo a combate para progreso activo, oro y botín."),h("🎒 Ordenar inventario","","game.setView('inventario')","Optimiza mochila y equipo antes de seguir peleando."),h("🧭 Lanzar expedición","btn-violet","game.setView('expedicion')","Activa progreso pasivo cuando no quieras jugar en modo activo.")].join(""))}

        ${P([h("⚔️ Arena","btn-primary !py-3","game.setView('arena')"),h("🎒 Inventario","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.15fr,.85fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${p("Ruta recomendada","Elige una sola acción y sigue","La vista resumen prioriza la siguiente decisión y deja el resto como contexto.")}
            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5" onclick="game.setView('arena')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Pelear ahora</div>
                  ${k("Principal","success")}
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
                  ${k(d.timers.expedition?"Activo":"Disponible",d.timers.expedition?"success":"")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Expedición y Trabajo sostienen recursos cuando dejas la sesión en segundo plano.</p>
              </button>
            </div>

            <div class="mt-5 grid sm:grid-cols-2 gap-3">
              ${y("Expedición",d.timers.expedition?`${f[d.timers.expedition.zoneId].name} · <span data-live-timer="expedition">${c()}</span>`:"No hay expedición activa.","surface-subtle")}
              ${y("Trabajo",d.timers.job?`${d.timers.job.name} · <span data-live-timer="job">${r()}</span>`:"No hay trabajo activo.","surface-subtle")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${p("Objetivo en foco","Un contrato visible")}
              ${u?s(u):'<div class="empty-state">No hay contratos disponibles.</div>'}
              <div class="mt-4 grid grid-cols-2 gap-2">
                <button type="button" class="btn" onclick="game.setView('diario')">Diario</button>
                <button type="button" class="btn" onclick="game.setView('logros')">Logros</button>
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${p("Estado rápido","Solo señales de decisión")}
              <div class="grid grid-cols-2 gap-3">
                ${j("Mochila",`${d.player.inventory.length}/${C()}`,"","Capacidad usada frente al máximo disponible.")}
                ${j("Llaves",d.player.keys)}
                ${j("Pociones",d.player.potions)}
                ${j("Racha",`${d.streak.days||0}/7`)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function B(){const q=b(),u=$(),a=T(),I=q.maxHp?Math.round(d.player.hp/q.maxHp*100):100;return`
      <div class="space-y-5">
        ${e("perfil",`Rango activo: <b>${u.title}</b> · Salud: <b>${I}%</b>`,[h("🎒 Ver equipo","btn-primary","game.setView('inventario')"),h("🏋️ Entrenar","","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${p("Identidad y rendimiento","Quién eres y cómo rindes","Esta pantalla separa tu perfil, estado de combate y progreso meta.")}

            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Gladiador</div>
                <div class="text-3xl font-black mt-1 leading-tight">${d.player.name}</div>
                <div class="text-sm text-cyan-200/85 mt-1">${d.player.title}</div>
              </div>
              <div class="grid grid-cols-2 gap-3 min-w-[250px]">
                ${j("Ascensiones",d.player.ascension,"","Cantidad de reinicios meta completados para progresión permanente.")}
                ${j("Piso más alto",d.player.highestDungeonFloor,"","Mayor piso de mazmorra superado hasta ahora.")}
                ${j("Inventario",`${d.player.inventory.length}/${C()}`,"","Capacidad actual de la mochila frente a su límite máximo.")}
                ${j("Polvo",d.player.relicDust,"","Moneda meta usada en reliquias y mejoras permanentes.")}
              </div>
            </div>

            <div class="mt-5 space-y-4">
              <div>
                <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-2">Combate</div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  ${j("Ataque",F(q.attack))}
                  ${j("Defensa",F(q.defense))}
                  ${j("Velocidad",F(q.speed))}
                  ${j("Vida máxima",F(q.maxHp),"","Total de salud disponible antes de caer derrotado.")}
                </div>
              </div>

              <div>
                <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-2">Probabilidades y sustain</div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  ${j("Golpe crítico",L(q.crit),"","Probabilidad de infligir daño aumentado en combate.")}
                  ${j("Esquiva",L(q.dodge))}
                  ${j("Bloqueo",L(q.block))}
                  ${j("Robo de vida",L(q.lifesteal),"","Porcentaje del daño que regresa como curación.")}
                </div>
              </div>
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${p("Equipo equipado","Lectura rápida de build")}
              <div class="space-y-2">${o.slice(0,4).map(l).join("")}</div>
              <button type="button" class="btn mt-4 w-full" onclick="game.setView('inventario')">Abrir inventario completo</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${p("Apoyos","Mascota y utilidades de sesión")}
              <div class="grid gap-3">
                ${a?y(`${m(a.icon||"paw","h-4 w-4 inline-block mr-2 align-[-0.15em]")}${a.name}`,`Nivel ${d.player.petLevel} · XP ${d.player.petXp}/${3+d.player.petLevel}<br>${a.desc}`,"surface-subtle"):y("Sin mascota activa","Incuba una en la vista de Mascota.","surface-subtle")}
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
    `}function V(){const q=["weapon","chest","ring","amulet"].map(l).join(""),u=d.ui.inventoryFilter,a=d.player.inventory.length,I=d.player.inventory.filter(G=>{const Z=d.player.equipment[G.slot];return!Z||(G.score||0)>(Z.score||0)}).length,H=d.player.inventory.filter(G=>G.rarity==="legendary"||G.rarity==="mythic").length;return`
      <div class="space-y-5">
        ${e("inventario",`Capacidad: <b>${d.player.inventory.length}/${C()}</b> · Mejoras potenciales: <b>${I}</b>`,[h("🧹 Gestión automática","btn-primary","game.autoManage()","Vende y recicla excedentes de forma automática."),h("⚒️ Forja","","game.setView('forja')"),h("🛒 Mercado","btn-violet","game.setView('mercado')")].join(""))}

        ${P([h("🧹 Limpiar","btn-primary !py-3","game.autoManage()"),h("⚒️ Forja","!py-3","game.setView('forja')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${p("Mochila","Filtra, compara y actúa","El inventario prioriza lectura rápida de mejoras y acciones de alto impacto.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${j("Objetos",a,"Total en mochila")}
              ${j("Mejoras",I,"Comparadas contra equipado")}
              ${j("Raros+",H,"Legendarios y míticos")}
            </div>

            <div class="space-y-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Filtro por tipo</div>
                <div class="filters-row mt-2">
                  ${["all",...o].map(G=>`
                    <button type="button" class="btn filter-pill ${u===G?"active tab-btn":""}" onclick="game.setInventoryFilter('${G}')" ${g(`Filtrar inventario por ${t(G).toLowerCase()}.`)}>${t(G)}</button>
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
                  ${["common","uncommon","rare","epic","legendary","mythic"].map(G=>`
                    <button type="button" class="btn filter-pill ${u===G?"active tab-btn":""}" onclick="game.setInventoryFilter('${G}')" ${g(`Filtrar inventario por ${t(G).toLowerCase()}.`)}>${t(G)}</button>
                  `).join("")}
                </div>
              </details>
            </div>

            ${x()}
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
              <div class="mt-4 space-y-2">${q}</div>
            </details>

            <div class="glass rounded-3xl p-5">
              ${p("Reglas rápidas","Qué vender o guardar")}
              <div class="grid gap-3">
                ${y("Prioridad","Equipa mejoras claras primero, luego limpia duplicados de bajo puntaje.","surface-subtle")}
                ${y("Si dudas","Si no mejora build ni economía, recicla o vende para liberar capacidad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function z(){const q=R(),u=d.player.activeSkills.map(Z=>S[Z]).filter(Boolean),a=d.combatHistory.slice(0,2),I=b(),G=(I.maxHp?d.player.hp/I.maxHp:1)<.5?"normal":u.length>=2?"elite":"normal";return`
      <div class="space-y-5">
        ${e("arena",`Zona: <b>${q.name}</b> · Coste <b>${q.energyCost}⚡ / ${q.staminaCost}💪</b>`,[h("⚔️ Normal","btn-primary","game.fightArena('normal')"),h("👑 Élite","btn-violet","game.fightArena('elite')"),h("🔥 x3","btn-gold","game.arenaBlitz(3)")].join(""))}

        ${P([h("⚔️ Normal","btn-primary !py-3","game.fightArena('normal')"),h("👑 Élite","btn-violet !py-3","game.fightArena('elite')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${p("Combate","Decide modo y entra","La arena muestra la decisión principal primero. Zona, build e historial quedan como soporte.")}

            <div class="grid md:grid-cols-3 gap-3">
              <button type="button" class="surface-strong rounded-2xl p-4 text-left" onclick="game.fightArena('normal')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Normal</div>
                  ${k(G==="normal"?"Recomendado":"Estable","success")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Flujo seguro para mantener ritmo cuando estás ajustando build.</p>
              </button>

              <button type="button" class="surface-strong elite-card rounded-2xl p-4 text-left" onclick="game.fightArena('elite')">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Élite</div>
                  ${k(G==="elite"?"Recomendado":"Riesgo","warning")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Más exigente, mejor retorno cuando ya tienes vida y habilidades estables.</p>
              </button>

              <button type="button" class="surface-strong reward-card rounded-2xl p-4 text-left" onclick="game.arenaBlitz(3)">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black text-lg">Racha x3</div>
                  ${k("Acelerar")}
                </div>
                <p class="text-sm text-slate-300/76 mt-2">Multiplica combates para subir ritmo cuando dominas la zona actual.</p>
              </button>
            </div>

            <div class="grid sm:grid-cols-3 gap-3 mt-4">
              ${j("Zona activa",q.name,q.theme)}
              ${j("Coste",`${q.energyCost}⚡ / ${q.staminaCost}💪`,"Por combate")}
              ${j("Registro",`${d.stats.wins}V / ${d.stats.losses}D`,"Historial global")}
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
              <div class="mt-4">${v()}</div>
            </details>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${p("Preparación","Build activa para la zona")}
              <div class="grid gap-3">
                ${y("Habilidades activas",u.length?u.map(Z=>`${Z.name} · Nv ${d.player.skillLevels[Z.id]||1}`).join("<br>"):"No hay habilidades activas equipadas.","surface-subtle")}
                ${y("Contexto",`Victorias ${d.stats.wins} · Derrotas ${d.stats.losses} · Bajas ${d.stats.kills}`,"surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${p("Historial","Últimos resultados")}
              <div class="space-y-3">
                ${a.length?a.map(Z=>`
                    <button type="button" class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${Z.id}')">
                      <div class="font-black ${Z.result==="victory"?"text-emerald-300":"text-rose-300"}">${Z.title}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${Z.zone}</div>
                      <div class="text-xs text-slate-300/58 mt-2">${_(Z.rewards)}</div>
                    </button>
                  `).join(""):'<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}return{renderResumen:w,renderPerfil:B,renderInventario:V,renderArena:z}}function zn(n){const{SLOT_ORDER:o,SLOT_NAMES:f,ZONES:S,JOBS:d,PETS:C,SKILLS:T,ACHIEVEMENTS:b,state:$,getPetData:R,guildTotal:_,achievementProgress:F,fmt:L,htmlStat:j,progressBar:K,icon:m,tooltipAttr:t,replaceEmojiIcons:g,rarityName:k,rarityBadge:p,zoneSelector:y,compareAgainstEquipped:h,itemStatGrid:P,durationChoiceCard:e,pager:s,expeditionTimerText:l,jobTimerText:x,pageLead:v,sectionHeader:c,infoCard:r,actionButton:w,actionBar:B,statusChip:V}=n;function z(){const D=!!$.timers.expedition;return`
      <div class="space-y-5">
        ${v("expedicion",D?`En curso: <b>${S[$.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${l()}</span>`:"Sin expedición activa",[w("30s","btn-primary",`game.startExpedition(${$.player.zoneId}, 30)`),w("60s","",`game.startExpedition(${$.player.zoneId}, 60)`),w("120s","btn-gold",`game.startExpedition(${$.player.zoneId}, 120)`)].join(""))}

        ${B([w("30s","btn-primary !py-3",`game.startExpedition(${$.player.zoneId}, 30)`),w("120s","btn-gold !py-3",`game.startExpedition(${$.player.zoneId}, 120)`)])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Elige destino","Primero define una zona segura para tu estado actual de recursos.")}
            ${y()}

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
                ${r("Estado actual",D?"Ya tienes una expedición activa: espera el temporizador o cambia de foco.":"No hay expedición activa: puedes lanzar una ruta ahora.","surface-subtle")}
                ${r("Destino","Usa zonas cómodas cuando solo quieres materiales estables.","surface-subtle")}
                ${r("Después","Cuando termine, vuelve a Arena o Inventario para cerrar el ciclo.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function q(){const D=$.player.keys>0;return`
      <div class="space-y-5">
        ${v("mazmorra",`Llaves: <b>${$.player.keys}</b> · Piso más alto: <b>${$.player.highestDungeonFloor}</b>`,[w("🗝️ Entrar","btn-gold","game.runDungeon()","Consume una llave y empieza una incursión de mazmorra."),w("🎒 Revisar equipo","","game.setView('inventario')")].join(""))}

        ${B([w("🗝️ Entrar","btn-gold !py-3","game.runDungeon()"),w("🎒 Equipo","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Ruta de incursión","La mazmorra tiene un recorrido fijo por intento: entra solo cuando estés listo.")}
            <div class="grid gap-2 text-sm">
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>1. Enemigo base</span>${V("Entrada")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>2. Enemigo base</span>${V("Presión")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>3. Enemigo élite</span>${V("Riesgo","warning")}</div>
              <div class="surface-subtle rounded-xl p-3 flex items-center justify-between"><span>4. Jefe del piso</span>${V("Pico","danger")}</div>
            </div>

            <div class="mt-4 grid sm:grid-cols-3 gap-3">
              ${j("Llaves",$.player.keys,D?"Listo para entrar":"Necesitas conseguir llaves")}
              ${j("Piso récord",$.player.highestDungeonFloor,"Tu tope actual")}
              ${j("Estado",D?"Disponible":"Bloqueado",D?"Tienes acceso inmediato":"Visita mercado o recompensas")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Decisión","¿Entrar ahora?")}
              <div class="grid gap-3">
                ${r("Recompensa","Oro, XP, esencia, fragmentos, llaves extra y botín de mayor calidad.","reward-card","Las mazmorras elevan el techo de recompensa frente al farmeo básico.")}
                ${r("Checklist","Entra cuando tengas llaves, pociones y una build ya ordenada.","surface-subtle")}
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
    `}function u(){const D=[...$.market.items].sort((W,ee)=>(ee.score||0)-(W.score||0))[0],A=$.market.items.filter(W=>(W.price||0)<=$.player.gold).length,O=$.market.items.filter(W=>h(W).tone==="success").length;return`
      <div class="space-y-5">
        ${v("mercado",`Oro disponible: <b>${L($.player.gold)}</b>`,[w("🔄 Refrescar","btn-primary","game.refreshMarket()","Renueva la rotación del mercado con nuevas ofertas."),w("🎒 Comparar con mochila","","game.setView('inventario')","Abre el inventario para comparar las ofertas con tu equipo actual.")].join(""))}

        ${B([w("🔄 Refrescar","btn-primary !py-3","game.refreshMarket()"),w("🎒 Mochila","!py-3","game.setView('inventario')")])}

        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Rotación actual","Compra solo mejoras reales: evita gastar oro en cambios de impacto bajo.")}

            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${j("Comprables",A,"Con tu oro actual")}
              ${j("Mejoras",O,"Frente al equipo equipado")}
              ${j("Oferta top",D?f[D.slot]:"—",D?D.name:"Sin oferta destacada")}
            </div>

            ${D?`
              <div class="surface-strong reward-card rounded-2xl p-4 mb-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Oferta destacada</div>
                    <div class="mt-1 flex flex-wrap items-center gap-2">
                      <div class="font-black rarity-${D.rarity} text-lg leading-snug">${D.name}</div>
                      ${p(D.rarity)}
                    </div>
                    <p class="text-sm text-slate-300/74 mt-2">${h(D).detail}</p>
                  </div>
                  <div class="shrink-0 text-right">
                    <div class="text-sm font-bold text-amber-200">${L(D.price)} oro</div>
                    <div class="mt-2">${V(h(D).label,h(D).tone)}</div>
                  </div>
                </div>
              </div>
            `:""}

            <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              ${$.market.items.map(W=>{const ee=h(W),re=(W.price||0)<=$.player.gold;return`
                  <div class="glass rounded-2xl p-4 market-card ${re?"":"opacity-80"}" ${t(`Oferta de rareza ${k(W.rarity)}. Precio ${L(W.price)} de oro. ${ee.detail}`)}>
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${W.rarity} leading-snug">${W.name}</div>${p(W.rarity)}</div>
                        <div class="text-xs text-slate-300/60 mt-1">${f[W.slot]} · Nivel ${W.level}</div>
                      </div>
                      ${V(ee.label,ee.tone)}
                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      ${P(W,4)}
                    </div>

                    <div class="market-meta mt-3">
                      <span class="text-sm text-slate-300/72">${ee.detail}</span>
                      <span class="text-sm font-bold ${re?"text-amber-200":"text-rose-200"}">${L(W.price)} oro</span>
                    </div>

                    <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.buyMarketItem('${W.id}')" ${re?"":"disabled"}>Comprar</button>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Decisión","Qué mirar antes de comprar")}
              <div class="grid gap-3">
                ${r("Oferta destacada",D?`${D.name} lidera la rotación actual.`:"No hay oferta destacada ahora mismo.","reward-card")}
                ${r("No fuerces compra","Si nada mejora de verdad, conserva oro para una mejor rotación o para forja.","surface-subtle")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Consumibles útiles")}
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
    `}function a(){return`
      <div class="space-y-5">
        ${v("forja",`Hierro: <b>${L($.player.iron)}</b> · Esencia: <b>${L($.player.essence)}</b>`,[w("⚒️ Forjar arma","btn-primary","game.forgeItem('weapon', 'normal')","Forja un arma estándar con coste moderado y rareza controlada."),w("✨ Premium arma","btn-violet","game.forgeItem('weapon', 'premium')","Forja un arma premium con mayor acceso a rarezas altas."),w("🎒 Revisar inventario","","game.setView('inventario')")].join(""))}

        ${B([w("⚒️ Normal","btn-primary !py-3","game.forgeItem('weapon', 'normal')"),w("✨ Premium","btn-violet !py-3","game.forgeItem('weapon', 'premium')")])}

        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Creación por espacio","Forja normal para volumen. Premium para apostar por rarezas altas.")}
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${o.map(D=>`
                <div class="glass rounded-2xl p-4 forge-recipe-card">
                  <div class="font-bold">${f[D]}</div>
                  <div class="text-sm text-slate-300/70 mt-1">Pieza aleatoria del hueco.</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2" ${t("Forja normal: más común, barata y orientada a volumen.")}>Normal <b>hierro</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2" ${t("Forja premium: más costosa y con mejor acceso a rarezas altas.")}>Premium <b>esencia</b></div>
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
                ${["weapon","chest","ring","amulet"].map(D=>{const A=$.player.equipment[D];return`
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${f[D]}</div>
                      <div class="font-black ${A?`rarity-${A.rarity}`:"text-slate-400/80"}">${A?A.name:"Vacío"}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${A?`Nivel ${A.level} · Mejora +${A.upgrade||0}`:"Equipa algo para mejorarlo."}</div>
                      <button type="button" class="btn btn-gold mt-3 w-full" ${A?`onclick="game.upgradeEquipped('${D}')"`:"disabled"} ${t("Sube el nivel de mejora de la pieza equipada y aumenta sus estadísticas.")}>⚒️ Mejorar</button>
                    </div>
                  `}).join("")}
              </div>
            </div>

            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Regla de gasto")}
              <div class="grid gap-3">
                ${r("Hierro","Úsalo para generar volumen y buscar base útil.","surface-subtle")}
                ${r("Esencia","Resérvala para intentos premium y mejoras clave.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function I(){const D={barracks:"Más ataque y defensa global.",treasury:"Más oro en todas las actividades.",sanctuary:"Más vida máxima y regeneración.",hunters:"Mejor botín y hallazgos más finos.",arsenal:"Más capacidad de inventario."};return`
      <div class="space-y-5">
        ${v("gremio",`Nivel total invertido: <b>${_()}</b>`,[w("🪙 Ver mercado","","game.setView('mercado')"),w("🏋️ Entrenar","btn-primary","game.setView('entrenamiento')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Mejoras del gremio","Cada edificio empuja un estilo de progreso distinto.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${Object.entries($.player.guild).map(([A,O])=>{const W=O+1,ee=180+W*110+_()*35,re=Math.max(1,Math.floor(W/2));return`
                  <div class="glass rounded-2xl p-4">
                    <div class="font-black text-lg capitalize" ${t(D[A])}>${A}</div>
                    <div class="text-sm text-slate-300/75 mt-1">${D[A]}</div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div class="rounded-xl bg-white/[.04] p-2">Nivel <b>${O}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Siguiente <b>${W}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Oro <b>${L(ee)}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Esencia <b>${L(re)}</b></div>
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
                ${r("Especialízate","Sube uno o dos edificios primero para sentir impacto temprano.","surface-subtle")}
                ${r("Prioridad típica","Tesorería y Barracas suelen notarse antes en la partida.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function H(){return`
      <div class="space-y-5">
        ${v("entrenamiento",`Puntos de atributo: <b>${$.player.attributePoints}</b> · habilidades: <b>${$.player.skillPoints}</b>`,[w("👤 Perfil","","game.setView('perfil')"),w("⚔️ Arena","btn-primary","game.setView('arena')")].join(""))}

        <div class="grid xl:grid-cols-[.95fr,1.05fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Atributos base","Primero ajusta base estadística; después pule habilidades activas.")}
            <div class="grid sm:grid-cols-2 gap-3">
              ${[["strength","Fuerza","Ataque y robo de vida."],["agility","Agilidad","Velocidad, crítico y esquiva."],["endurance","Resistencia","Vida, defensa y bloqueo."],["discipline","Disciplina","Energía y aguante máximo."]].map(([D,A,O])=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${A}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${O}</div>
                  <div class="text-sm mt-3">Nivel actual: <b>${$.player.training[D]}</b></div>
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
                    <button type="button" class="btn !py-2" onclick="game.toggleSkill('${D.id}')">${$.player.activeSkills.includes(D.id)?"Quitar":"Equipar"}</button>
                    <button type="button" class="btn btn-violet !py-2" ${$.player.unlockedSkills.includes(D.id)?`onclick="game.upgradeSkill('${D.id}')"`:"disabled"}>Mejorar</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function G(){const D=!!$.timers.job;return`
      <div class="space-y-5">
        ${v("trabajo",D?`En curso: <b>${$.timers.job.name}</b> · <span data-live-timer="job">${x()}</span>`:"Sin trabajo activo",[w("🧭 Expedición","","game.setView('expedicion')"),w("💰 Mercado","btn-gold","game.setView('mercado')")].join(""))}

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
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${L(A.reward.gold)} oro</b></div>
                  </div>
                  <button type="button" class="btn btn-gold mt-3 w-full" onclick="game.startJob('${A.id}')" ${t("Inicia este trabajo y bloquea el temporizador hasta su finalización.")}>Aceptar</button>
                </div>
              `).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Regla rápida")}
              <div class="grid gap-3">
                ${r("Estado",D?"Ya tienes un trabajo activo: espera el temporizador.":"No hay trabajo activo: puedes aceptar uno ahora.","surface-subtle")}
                ${r("Alternativa","Si también quieres botín, Expedición suele aportar más variedad.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function Z(){const D=R();return`
      <div class="space-y-5">
        ${v("mascota",D?`Activa: <b>${D.name}</b>`:"Aún no tienes mascota",[w("👤 Perfil","","game.setView('perfil')"),w("🥚 Incubar","btn-violet","game.hatchPet()","Consume recursos para obtener una mascota aleatoria.")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Mascota activa","Gestiona alimentación y progreso solo del compañero que llevas activo.")}
            ${D?`
              <div class="glass rounded-2xl p-5">
                <div class="text-cyan-200">${m(D.icon||"paw","h-9 w-9")}</div>
                <div class="font-display font-extrabold text-2xl mt-2">${D.name}</div>
                <div class="text-sm text-slate-300/75 mt-1">${D.desc}</div>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  ${j("Nivel",$.player.petLevel)}
                  ${j("XP",`${$.player.petXp}/${3+$.player.petLevel}`)}
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
            ${c("Soporte","Catálogo rápido")}
            <div class="grid gap-3">
              ${C.map(A=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-bold font-display inline-flex items-center gap-2">${m(A.icon||"paw","h-4 w-4")}<span>${A.name}</span></div>
                  <div class="text-sm text-slate-300/75 mt-1">${A.desc}</div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function U(){const D=b.slice(0,6);return`
      <div class="space-y-5">
        ${v("logros",`Polvo de reliquia: <b>${$.player.relicDust}</b>`,[w("🔱 Ascender","btn-gold","game.ascend()","Reinicia gran parte del progreso para ganar mejoras meta permanentes."),w("📘 Diario","","game.setView('diario')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Hitos activos","Se muestra una selección corta para mantener foco de progresión.")}
            <div class="space-y-3">
              ${D.map(A=>{const O=F(A),W=$.claimedAchievements.includes(A.id);return`
                  <div class="glass rounded-2xl p-4">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black text-lg">${A.title}</div>
                        <div class="text-sm text-slate-300/75 mt-1">${A.desc}</div>
                      </div>
                      <div class="text-sm rounded-full px-3 py-1 ${W?"bg-emerald-400/15 text-emerald-300 border border-emerald-300/20":"bg-white/[.05]"}">${W?"Listo":`${O}/${A.target}`}</div>
                    </div>
                    <div class="mt-3">${K(O,A.target,"bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-300 shadow-[0_0_18px_rgba(34,211,238,.30)]","Progreso","Avance total hacia este logro y sus recompensas meta.")}</div>
                  </div>
                `}).join("")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${c("Decisión","Ascensión")}
              <p class="text-sm text-slate-300/75 mt-2">Actívala cuando quieras convertir una partida avanzada en progreso permanente.</p>
              <button type="button" class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${t("Reinicia gran parte de la partida a cambio de progreso meta permanente.")}>🔱 Ascender</button>
            </div>

            <div class="glass rounded-3xl p-5">
              ${c("Soporte","Altar de reliquias")}
              <div class="grid gap-3 mt-4">
                ${[["wrath","Ira"],["fortune","Fortuna"],["vitality","Vitalidad"],["momentum","Impulso"]].map(([A,O])=>`
                  <button type="button" class="btn btn-violet justify-between" onclick="game.spendRelic('${A}')" ${t(`Invierte polvo de reliquia en ${O.toLowerCase()} para obtener bonificaciones permanentes.`)}><span>${O}</span><span>Nv ${$.player.relics[A]}</span></button>
                `).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function ne(){const D=Math.max(8,$.ui.journalPageSize||16),A=$.journal||[],O=Math.max(1,Math.ceil(A.length/D)),W=Math.min(Math.max(1,$.ui.journalPage||1),O),ee=(W-1)*D,re=A.slice(ee,ee+D);return`
      <div class="space-y-5">
        ${v("diario",`Entradas guardadas: <b>${A.length}</b>`,[w("🏆 Ver logros","","game.setView('logros')"),w("📋 Resumen","btn-primary","game.setView('resumen')")].join(""))}

        <div class="grid xl:grid-cols-[1fr,300px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${c("Contexto","Registro reciente","El diario es histórico: úsalo para revisar, no para decidir acciones inmediatas.")}
            <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${A.length?ee+1:0}</b>–<b>${Math.min(ee+D,A.length)}</b> de <b>${A.length}</b>.</div>
            <div class="space-y-3">
              ${re.map(le=>`
                <div class="glass rounded-2xl p-4 cv-auto">
                  <div class="font-black">${g(le.icon)} <span class="font-semibold">${new Date(le.ts).toLocaleTimeString("es-ES")}</span></div>
                  <div class="text-sm text-slate-200/90 leading-relaxed mt-2">${le.text}</div>
                </div>
              `).join("")||'<div class="text-sm text-slate-300/75">Todavía no hay entradas en el diario.</div>'}
            </div>
            ${s(W,O,"setJournalPage")}
          </section>

          <aside class="glass rounded-3xl p-5">
            ${c("Soporte","Uso recomendado")}
            <div class="grid gap-3">
              ${r("Consulta","Revisa aquí eventos y recompensas pasadas.","surface-subtle")}
              ${r("Acción","Para progresar, vuelve a Resumen, Arena o Inventario.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}return{renderExpedicion:z,renderMazmorra:q,renderMercado:u,renderForja:a,renderGremio:I,renderEntrenamiento:H,renderTrabajo:G,renderMascota:Z,renderLogros:U,renderDiario:ne}}const{SLOT_ORDER:wt,SLOT_NAMES:it,ZONES:rt,JOBS:Nn,PETS:Hn,SKILLS:St,ACHIEVEMENTS:_n,fmt:he,pct:Mt,htmlStat:Te,progressBar:Et,timeLeft:ot,state:se,maxInventory:Fn,getPetData:At,getDerivedStats:Gn,scaleItemStats:Jn,guildTotal:Zn,currentRank:Wn,zoneForPlayer:Qn,isZoneUnlocked:at,summarizeReward:jt,achievementProgress:Kn,icon:Ze,replaceEmojiIcons:Yn,rarityName:Pt,rarityBadge:lt,translateFilter:Un,statLabel:Xn,statTooltip:es,tooltipAttr:je,statusChip:Qe,sectionHeader:It,infoCard:Ct,actionButton:Lt,actionBar:Rt,pageLead:Dt}=ht;function ts(n){const o=se.player.equipment[n];return`
    <div class="rounded-2xl ring p-3 bg-white/[.04]">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${it[n]}</div>
          ${o?`<div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-bold leading-snug rarity-${o.rarity}">${o.name}</div>${lt(o.rarity)}</div>
               <div class="text-xs text-slate-300/70 mt-1">Nivel ${o.level} · Mejora +${o.upgrade||0}</div>`:'<div class="font-bold mt-1 text-slate-400/80">Vacío</div>'}
        </div>
        ${o?`<button type="button" class="btn !px-3 !py-2 text-xs" onclick="game.unequipItem('${n}')">Quitar</button>`:""}
      </div>
    </div>
  `}function as(n){return`
    <div class="glass rounded-2xl p-4">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div class="min-w-0">
          <div class="font-black text-lg">${n.title}</div>
          <div class="text-sm text-slate-300/75 mt-1">${n.desc}</div>
          <div class="text-xs text-slate-300/60 mt-3">${jt(n.reward)}</div>
        </div>
        <button type="button" class="btn ${n.completed?"btn-success":""}" ${n.completed&&!n.claimed?`onclick="game.claimQuest('${n.id}')"`:"disabled"}>
          ${n.claimed?"Cobrada":n.completed?"Cobrar":`${he(n.progress)}/${he(n.target)}`}
        </button>
      </div>
      <div class="mt-3">${Et(n.progress,n.target,"bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-300 shadow-[0_0_18px_rgba(192,132,252,.32)]","Progreso","Avance actual del contrato seleccionado.")}</div>
    </div>
  `}function ns(){return se.timers.expedition?ot(se.timers.expedition.endAt):"0s"}function ss(){return se.timers.job?ot(se.timers.job.endAt):"0s"}function Vt(n,o,f){return o<=1?"":`
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
      <div class="text-sm text-slate-300/72">Página <b>${n}</b> de <b>${o}</b></div>
      <div class="flex gap-2">
        <button type="button" class="btn !py-2 !px-3" ${n<=1?"disabled":`onclick="game.${f}(${n-1})"`}>← Anterior</button>
        <button type="button" class="btn !py-2 !px-3" ${n>=o?"disabled":`onclick="game.${f}(${n+1})"`}>Siguiente →</button>
      </div>
    </div>
  `}function Tt(){return`
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
      ${rt.map(n=>`
        <button
          type="button"
          class="text-left glass rounded-2xl p-4 transition ${se.player.zoneId===n.id?"ring ring-cyan-300/35 bg-cyan-400/8":""} ${at(n)?"":"opacity-45"}"
          ${at(n)?`onclick="game.setZone(${n.id})"`:"disabled"}
          ${je(`Zona ${n.name}. Requiere nivel ${n.unlockLevel} y consume ${n.energyCost} de energía y ${n.staminaCost} de aguante.`)}
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="font-black text-lg">${n.name}</div>
              <div class="text-xs text-slate-300/60 mt-1">Nivel ${n.unlockLevel}+ · ${n.theme}</div>
            </div>
            <div class="text-xs rounded-full px-2.5 py-1 bg-white/[.06]">${at(n)?"Activa":"Bloqueada"}</div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${Ze("bolt","h-4 w-4 text-cyan-300")}<span>${n.energyCost} energía</span></div>
            <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${Ze("dumbbell","h-4 w-4 text-emerald-300")}<span>${n.staminaCost} aguante</span></div>
          </div>
        </button>
      `).join("")}
    </div>
  `}function is(n,o){return n==="crit"||n==="dodge"||n==="block"||n==="lifesteal"?Mt(o):he(o)}function ct(n){const o=se.player.equipment[n.slot];if(!o)return{label:"Mejora limpia",tone:"success",detail:"No tienes una pieza equipada en este espacio."};const f=(n.score||0)-(o.score||0);return f>0?{label:`+${he(f)} puntuación`,tone:"success",detail:`Mejora respecto a ${o.name}.`}:f<0?{label:`${he(f)} puntuación`,tone:"danger",detail:`Rinde peor que ${o.name}.`}:{label:"Puntuación similar",tone:"",detail:`Rinde de forma parecida a ${o.name}.`}}function qt(n,o=4){return Object.entries(Jn(n)).slice(0,o).map(([f,S])=>`<div class="rounded-xl bg-white/[.04] p-2.5" ${je(es(f))}>${Xn(f)}: <b>${is(f,S)}</b></div>`).join("")}function rs(n){const o=n.filter(S=>S.rarity==="legendary").length,f=n.filter(S=>ct(S).tone==="success").length;return`
    <div class="grid sm:grid-cols-3 gap-3 mb-4">
      ${Te("Objetos filtrados",n.length)}
      ${Te("Mejoras posibles",f)}
      ${Te("Legendarios",o,"","Cantidad de objetos legendarios visibles en este filtro.")}
    </div>
  `}function os(n,o,f){return`
    <div class="surface-strong rounded-2xl p-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Expedición</div>
          <div class="text-2xl font-black mt-1">${n}s</div>
          <p class="text-sm text-slate-300/74 mt-2">${f}</p>
        </div>
        ${Qe(n<=30?"Corta":n<120?"Media":"Larga",o)}
      </div>
      <button type="button" class="btn ${o==="success"?"btn-primary":o==="warning"?"btn-gold":"btn-violet"} mt-4 w-full" onclick="game.startExpedition(${se.player.zoneId}, ${n})">Enviar ${n}s</button>
    </div>
  `}function ls(){let n=[...se.player.inventory];const o=se.ui.inventoryFilter;if(o!=="all"&&(n=n.filter(b=>b.slot===o||b.rarity===o)),!n.length)return'<div class="glass rounded-2xl p-5 text-slate-300/75">Tu inventario está vacío o el filtro no devuelve resultados.</div>';const f=Math.max(6,se.ui.inventoryPageSize||18),S=Math.max(1,Math.ceil(n.length/f)),d=Math.min(Math.max(1,se.ui.inventoryPage||1),S),C=(d-1)*f,T=n.slice(C,C+f);return`
    ${rs(n)}
    <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${C+1}</b>–<b>${Math.min(C+f,n.length)}</b> de <b>${n.length}</b> objetos filtrados.</div>
    <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
      ${T.map(b=>{const $=ct(b);return`
          <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro" ${je(`Objeto de rareza ${Pt(b.rarity)}. Puntuación ${he(b.score)}. ${$.detail}`)}>
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${b.rarity} leading-snug">${b.name}</div>${lt(b.rarity)}</div>
                <div class="text-xs text-slate-300/60 mt-1">${it[b.slot]} · Nivel ${b.level} · Mejora +${b.upgrade||0}</div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]" ${je("Puntuación total estimada del objeto según sus estadísticas y mejora actual.")}>Punt. ${he(b.score)}</div>
                <div class="mt-2">${Qe($.label,$.tone)}</div>
              </div>
            </div>
            <p class="text-xs text-slate-300/62 mt-3">${$.detail}</p>
            <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
              ${qt(b,4)}
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
    ${Vt(d,S,"setInventoryPage")}
  `}const Ve=On({SLOT_ORDER:wt,ZONES:rt,SKILLS:St,state:se,maxInventory:Fn,getPetData:At,getDerivedStats:Gn,currentRank:Wn,zoneForPlayer:Qn,summarizeReward:jt,fmt:he,pct:Mt,htmlStat:Te,timeLeft:ot,icon:Ze,translateFilter:Un,tooltipAttr:je,statusChip:Qe,sectionHeader:It,infoCard:Ct,actionButton:Lt,actionBar:Rt,pageLead:Dt,questCard:as,equippedSlotCard:ts,inventoryCards:ls,zoneSelector:Tt}),me=zn({SLOT_ORDER:wt,SLOT_NAMES:it,ZONES:rt,JOBS:Nn,PETS:Hn,SKILLS:St,ACHIEVEMENTS:_n,state:se,getPetData:At,guildTotal:Zn,achievementProgress:Kn,fmt:he,htmlStat:Te,progressBar:Et,icon:Ze,tooltipAttr:je,replaceEmojiIcons:Yn,rarityName:Pt,rarityBadge:lt,zoneSelector:Tt,compareAgainstEquipped:ct,itemStatGrid:qt,durationChoiceCard:os,pager:Vt,expeditionTimerText:ns,jobTimerText:ss,pageLead:Dt,sectionHeader:It,infoCard:Ct,actionButton:Lt,actionBar:Rt,statusChip:Qe});function cs(){return({resumen:Ve.renderResumen,perfil:Ve.renderPerfil,inventario:Ve.renderInventario,arena:Ve.renderArena,expedicion:me.renderExpedicion,mazmorra:me.renderMazmorra,mercado:me.renderMercado,forja:me.renderForja,gremio:me.renderGremio,entrenamiento:me.renderEntrenamiento,trabajo:me.renderTrabajo,mascota:me.renderMascota,logros:me.renderLogros,diario:me.renderDiario}[se.currentView]||Ve.renderResumen)()}function ds(){const n=se.ui.modal;return n?`
    <div class="fixed inset-0 bg-slate-950/72 backdrop-blur-sm z-50 p-4 overflow-y-auto">
      <div class="min-h-full flex items-start justify-center py-8">
        <div class="glass-strong rounded-[2rem] p-5 sm:p-6 w-full max-w-5xl">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div>
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Detalle</div>
              <div class="text-2xl font-black">${n.title}</div>
            </div>
            <button type="button" class="btn" onclick="game.closeModal()">Cerrar</button>
          </div>
          ${n.content}
        </div>
      </div>
    </div>
  `:""}const us={renderContent:cs,renderModal:ds};(()=>{const{STORAGE_KEY:n,VIEWS:o,VIEW_META:f}=window.AetherConfig,{$:S,clamp:d,timeLeft:C,sanitizeInlineHtml:T}=window.AetherUtils,{state:b,loadGame:$,saveGame:R,getDerivedStats:_,hardReset:F,mutate:L,subscribeStore:j,getStoreMeta:K,syncExternalState:m}=window.AetherModel,t=window.AetherSystems,g={...Bn,...us},k=new Set(o.map(([M])=>M)),p={hud:"hud",desktopNav:"desktop-nav",content:"page-view",modal:"modal-root",mobileNav:"mobile-nav-root",mobileSheet:"mobile-sheet-root"},y=Object.create(null),h=new Set(Object.keys(p)),P=[];let e=0,s=0,l=0;function x(M){return S(p[M])}function v(M){switch(M){case"hud":return g.renderHud();case"desktopNav":return g.renderDesktopNav();case"content":return g.renderContent();case"modal":return g.renderModal();case"mobileNav":return g.renderMobileNav();case"mobileSheet":return g.renderMobileSheet();default:return""}}function c(M){return M?Array.isArray(M)?M:[M]:[]}function r(M=Object.keys(p)){c(M).forEach(Q=>h.add(Q)),!e&&(e=window.requestAnimationFrame(()=>{e=0,B()}))}function w(){const M=x("content");!M||!M.querySelectorAll||(M.querySelectorAll('[data-live-timer="expedition"]').forEach(Q=>{Q.textContent=b.timers.expedition?C(b.timers.expedition.endAt):"0s"}),M.querySelectorAll('[data-live-timer="job"]').forEach(Q=>{Q.textContent=b.timers.job?C(b.timers.job.endAt):"0s"}))}function B(){Object.keys(p).forEach(Q=>{if(!h.has(Q))return;const te=x(Q);if(!te)return;const pe=v(Q),xe=ge(pe);y[Q]!==xe&&(te.innerHTML=xe,y[Q]=xe),h.delete(Q)}),w();const M=f[b.currentView]||f.resumen;document.title=`Aether Arena — ${M.label}`}function V(M=!1){if(!M&&!K().isDirty)return;if(M){l&&(clearTimeout(l),l=0),R();return}if(l)return;const Q=()=>{l=0,R()};if(typeof window.requestIdleCallback=="function"){l=window.setTimeout(()=>{l=0,window.requestIdleCallback(Q,{timeout:1200})},900);return}l=window.setTimeout(Q,900)}function z(M){try{location.hash!==`#${M}`&&history.replaceState(null,"",`#${M}`)}catch{location.hash=M}}function q(M,Q={}){if(!k.has(M))return;const te=b.currentView;L("ui/setView",()=>{b.currentView=M,b.currentTab=M,b.ui.moreMenuOpen=!1},{source:"ui"}),Q.skipHash||z(M),r(["hud","desktopNav","content","mobileNav","mobileSheet"]),te!==M&&!Q.keepScroll&&window.scrollTo(0,0),V()}function u(M){L("ui/setInventoryFilter",()=>{b.ui.inventoryFilter=M,b.ui.inventoryPage=1},{source:"ui"}),r("content"),V()}function a(M){L("ui/setInventoryPage",()=>{b.ui.inventoryPage=Math.max(1,Number(M)||1)},{source:"ui",markDirty:!1}),r("content")}function I(M){L("ui/setJournalPage",()=>{b.ui.journalPage=Math.max(1,Number(M)||1)},{source:"ui",markDirty:!1}),r("content")}function H(M){L("ui/toggleMoreMenu",()=>{b.ui.moreMenuOpen=typeof M=="boolean"?M:!b.ui.moreMenuOpen},{source:"ui",markDirty:!1}),r(["mobileNav","mobileSheet"])}function G(){L("ui/closeModal",()=>{b.ui.modal=null},{source:"ui",markDirty:!1}),r("modal")}function Z(M){const Q=b.combatHistory.find(te=>te.id===M);Q&&(L("ui/showCombat",()=>{b.ui.modal={type:"combat",title:T(Q.title),content:`
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4">
              <div class="text-sm text-slate-300/75">${T(Q.zone)}</div>
              <div class="text-sm text-slate-200/90 mt-2">${T(t.summarizeReward(Q.rewards))}${Q.drop?` · Botin: <span class="rarity-${Q.drop.rarity}">${T(Q.drop.name)}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
              <div class="space-y-2 text-sm">${Q.log.map(te=>`<div>${T(te)}</div>`).join("")}</div>
            </div>
          </div>
        `}},{source:"ui",markDirty:!1}),r("modal"))}function U(){typeof confirm=="function"&&!confirm("¿Seguro que quieres reiniciar la partida? Se perdera el progreso local.")||(F(),q("resumen",{keepScroll:!1}),t.toast("Nueva partida iniciada","danger"),r(Object.keys(p)),V(!0))}function ne(M){r(M||["hud","content","mobileSheet"]),V()}function D(){for(;P.length;){const M=P.pop();typeof M=="function"&&M()}P.push(j(M=>M._meta&&[M._meta.isSaving,M._meta.isDirty,M._meta.lastSaveAt,M._meta.lastMutationLabel].join("|"),()=>r("hud"))),P.push(j(M=>M._meta?M._meta.syncRevision:0,(M,Q)=>{M!==Q&&r(Object.keys(p))})),P.push(j(M=>M.ui?M.ui.modal:null,()=>r("modal"))),P.push(j(M=>M.ui?M.ui.moreMenuOpen:!1,()=>r(["mobileNav","mobileSheet"])))}const A={setView:q,setTab:q,setInventoryFilter:u,setInventoryPage:a,setJournalPage:I,toggleMoreMenu:H,showCombat:Z,closeModal:G,hardReset:U};Fa(A,{systems:t,mutate:L,afterAction:ne});function O(){const M=Date.now();let Q=!1;L("system/tick",()=>{const te=d((M-b.lastTick)/1e3,0,document.hidden?30:5);b.lastTick=M,t.passiveRegen(te),Q=t.resolveFinishedTimers(M,document.hidden);const pe=_();b.player.hp=d(b.player.hp,1,pe.maxHp),b.player.energy=d(b.player.energy,0,pe.maxEnergy),b.player.stamina=d(b.player.stamina,0,pe.maxStamina)},{source:"tick"}),(!b.lastSave||M-b.lastSave>12e3)&&V(),!document.hidden&&(r("hud"),w(),Q?(r(["content","modal"]),V()):b.ui.modal&&r("modal"),b.ui.moreMenuOpen&&r(["mobileNav","mobileSheet"]))}function W(){s&&clearInterval(s),s=window.setInterval(O,document.hidden?4e3:1e3)}function ee(){const M=(location.hash||"").replace("#","").trim(),Q=k.has(M)?M:b.currentView||"resumen";q(Q,{skipHash:!1,keepScroll:!0})}function re(){const M=(location.hash||"").replace("#","").trim();k.has(M)&&M!==b.currentView&&q(M,{skipHash:!0})}function le(M){if(M.key!==n||M.newValue===M.oldValue)return;m(M.newValue)&&(r(Object.keys(p)),t.toast("Partida sincronizada desde otra pestana","cyan"))}function Pe(){$(),L("system/offlineCatchup:init",()=>{t.offlineCatchup()},{source:"lifecycle"}),D(),ee(),r(Object.keys(p)),V(),W(),window.addEventListener("hashchange",re),document.addEventListener("visibilitychange",()=>{W(),document.hidden||(L("system/offlineCatchup:resume",()=>{t.offlineCatchup()},{source:"lifecycle"}),r(["hud","content","modal"]))}),window.addEventListener("storage",le),window.addEventListener("pagehide",()=>V(!0)),window.addEventListener("beforeunload",()=>V(!0))}window.game=A,window.AetherController={queueRender:r,setView:q,closeModal:G,showCombat:Z,scheduleSave:V},Pe()})();
