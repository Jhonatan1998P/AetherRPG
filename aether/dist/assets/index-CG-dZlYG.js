(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))k(j);new MutationObserver(j=>{for(const g of j)if(g.type==="childList")for(const T of g.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&k(T)}).observe(document,{childList:!0,subtree:!0});function b(j){const g={};return j.integrity&&(g.integrity=j.integrity),j.referrerPolicy&&(g.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?g.credentials="include":j.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function k(j){if(j.ep)return;j.ep=!0;const g=b(j);fetch(j.href,g)}})();const ba=["weapon","offhand","helm","chest","gloves","boots","ring","amulet"],ya={weapon:"Arma",offhand:"Mano izquierda",helm:"Casco",chest:"Armadura",gloves:"Guantes",boots:"Botas",ring:"Anillo",amulet:"Amuleto"},ha=[{title:"Novato del Bronce",min:0},{title:"Aspirante de Arena",min:90},{title:"Centurion de Cristal",min:220},{title:"Campeon del Foro",min:420},{title:"Idolo de la Ciudad",min:720},{title:"Verdugo Solar",min:1100},{title:"Coloso Astral",min:1600},{title:"Inmortal del Panteon",min:2300}],xa=[{key:"common",name:"Comun",mult:1,affixes:0,value:14,order:0},{key:"uncommon",name:"Infrecuente",mult:1.14,affixes:1,value:34,order:1},{key:"rare",name:"Raro",mult:1.38,affixes:2,value:92,order:2},{key:"epic",name:"Epico",mult:1.74,affixes:3,value:240,order:3},{key:"legendary",name:"Legendario",mult:2.18,affixes:4,value:640,order:4},{key:"mythic",name:"Mitico",mult:2.82,affixes:5,value:1650,order:5}],$a={weapon:[{name:"Gladius",stats:{attack:7,speed:1}},{name:"Hacha de Coliseo",stats:{attack:9,defense:1}},{name:"Tridente del Foro",stats:{attack:8,crit:.02}},{name:"Espada Curva",stats:{attack:8,speed:2}},{name:"Lanza Escarlata",stats:{attack:10,crit:.01}}],offhand:[{name:"Escudo de Torre",stats:{defense:7,hp:18,block:.03}},{name:"Parma Ligera",stats:{defense:5,speed:2,block:.02}},{name:"Daga de Mano",stats:{attack:5,crit:.03}},{name:"Brazal Solar",stats:{defense:4,hp:10,crit:.01}}],helm:[{name:"Yelmo de Bronce",stats:{defense:5,hp:14}},{name:"Mascara del Duelo",stats:{defense:4,crit:.02}},{name:"Casco de Placas",stats:{defense:6,hp:10}},{name:"Corona de Hierro",stats:{hp:18,speed:1}}],chest:[{name:"Coraza Segmentada",stats:{defense:9,hp:28}},{name:"Pectoral de Guerra",stats:{defense:11,hp:22}},{name:"Tunica Blindada",stats:{defense:7,speed:2,hp:20}},{name:"Arnes del Leon",stats:{attack:4,defense:8,hp:18}}],gloves:[{name:"Guanteletes de Malla",stats:{defense:4,attack:2}},{name:"Guantes de Cazador",stats:{crit:.02,speed:1}},{name:"Mitones de Arena",stats:{attack:3,hp:8}},{name:"Brazales de Sangre",stats:{attack:4,lifesteal:.01}}],boots:[{name:"Grebas Reforzadas",stats:{defense:4,speed:1}},{name:"Sandalias de Arena",stats:{speed:3,dodge:.02}},{name:"Botas de Marcha",stats:{hp:10,speed:2}},{name:"Botas de Acecho",stats:{speed:2,crit:.01}}],ring:[{name:"Anillo de Plata",stats:{crit:.02,attack:2}},{name:"Sello del Foro",stats:{defense:3,hp:8}},{name:"Aro Solar",stats:{attack:3,speed:1}},{name:"Sortija Vital",stats:{hp:16}}],amulet:[{name:"Amuleto del Leon",stats:{attack:3,hp:10}},{name:"Talisman de Marmol",stats:{defense:3,block:.01}},{name:"Colgante del Alba",stats:{crit:.02,hp:8}},{name:"Medallon del Eco",stats:{speed:2,dodge:.01}}]},ka=[{prefix:"Furioso",stats:{attack:2}},{prefix:"Certero",stats:{crit:.02}},{prefix:"Agil",stats:{speed:2}},{prefix:"Imponente",stats:{hp:18}},{prefix:"Bastion",stats:{defense:3}},{prefix:"Sanguineo",stats:{lifesteal:.015}},{suffix:"del Coloso",stats:{hp:24,defense:2}},{suffix:"de la Tempestad",stats:{speed:2,crit:.01}},{suffix:"de la Caza",stats:{attack:3,crit:.01}},{suffix:"del Vigia",stats:{defense:4,block:.015}},{suffix:"de los Antiguos",stats:{hp:16,attack:2}},{suffix:"del Eclipse",stats:{attack:3,speed:1,crit:.01}}],Sa=[{id:0,name:"Distrito de Arena",unlockLevel:1,energyCost:7,staminaCost:1,theme:"Callejones y plazas del coliseo",enemies:["Rufian del Foro","Apostador Violento","Mercenario de Bronce","Ladron de Tuneles"],boss:"Campeon de Grava"},{id:1,name:"Bosque Sangriento",unlockLevel:4,energyCost:9,staminaCost:1,theme:"Bestias y cazadores en la niebla",enemies:["Jabali Enloquecido","Cazador Sombrio","Tigre de Jaula","Bandido del Roble"],boss:"Gran Acechador Berkan"},{id:2,name:"Catacumbas Rotas",unlockLevel:8,energyCost:11,staminaCost:2,theme:"No muertos, guardianes y reliquias",enemies:["Esqueleto Vetusto","Fanatico de Cripta","Necrofago Roto","Guardia del Osario"],boss:"Pontifice de Hueso"},{id:3,name:"Dunas de Onice",unlockLevel:12,energyCost:13,staminaCost:2,theme:"Bestias solares y caravanas saqueadas",enemies:["Saqueador de Caravana","Escorpion de Brasa","Jinete del Viento","Chaman del Datil Negro"],boss:"Anhur, el Sol Partido"},{id:4,name:"Fortaleza del Eclipse",unlockLevel:16,energyCost:16,staminaCost:2,theme:"Caballeros caidos y maquinas de guerra",enemies:["Guardia Obsidiana","Verdugo del Eclipse","Ballestero Negro","Ingeniero del Asedio"],boss:"General Varzok"},{id:5,name:"Necropolis del Hierro",unlockLevel:21,energyCost:18,staminaCost:3,theme:"Automatas, espectros y altares profanos",enemies:["Arconte Ferrum","Espectro de Cadena","Mecanico Sacrilego","Profanador del Trono"],boss:"Maquina-Rey Nax"},{id:6,name:"Fisura Astral",unlockLevel:27,energyCost:21,staminaCost:3,theme:"Entidades del vacio y gloria absoluta",enemies:["Segador del Vacio","Centinela Astral","Bestia Prismatica","Oraculo Corrupto"],boss:"Aion, Devorador de Ecos"}],wa=[{id:"guardia",name:"Guardia del Foro",duration:45,reward:{gold:120,xp:25,food:1},desc:"Patrulla, disciplina y monedas seguras."},{id:"mercante",name:"Estiba de Mercaderes",duration:75,reward:{gold:190,xp:40,wood:2,iron:1},desc:"Carga mercancias y quedate con una comision."},{id:"arena",name:"Espectaculo Menor",duration:120,reward:{gold:320,xp:70,essence:1,potions:1},desc:"Show de arena, apuestas y fama barata."}],Ma=[{id:"wolf",name:"Lobo de Guerra",icon:"paw",desc:"Aumenta el dano y el critico.",bonus:{attackPct:.08,crit:.03}},{id:"phoenix",name:"Fenix de Ceniza",icon:"flame",desc:"Mas vida, regeneracion y esencia.",bonus:{hpPct:.1,regenPct:.15}},{id:"golem",name:"Golem de Basalto",icon:"shield",desc:"Defensa bruta y bloqueo.",bonus:{defensePct:.1,block:.03}},{id:"panther",name:"Pantera Crepuscular",icon:"spark",desc:"Velocidad, esquiva y golpes finos.",bonus:{speedPct:.08,dodge:.03}},{id:"raven",name:"Cuervo del Oraculo",icon:"feather",desc:"Mas oro, mejor botin y vision.",bonus:{goldPct:.08,lootLuck:.06}}],Ea={powerStrike:{id:"powerStrike",name:"Golpe devastador",desc:"Ataque de gran multiplicador.",unlockLevel:1,cooldown:3,mult:1.75},quickLunge:{id:"quickLunge",name:"Estocada veloz",desc:"Golpe rapido con extra de critico.",unlockLevel:1,cooldown:2,mult:1.15,critBonus:.14},fortify:{id:"fortify",name:"Guardia de acero",desc:"Golpeas y elevas tu defensa temporalmente.",unlockLevel:1,cooldown:5,mult:.82,selfBuff:{defensePct:.24,turns:2,shieldPct:.08}},shieldBash:{id:"shieldBash",name:"Embestida de escudo",desc:"Rompe la defensa rival. Requiere mano izquierda.",unlockLevel:5,cooldown:4,mult:1.32,requireOffhand:!0,armorBreak:{pct:.18,turns:2}},bloodRage:{id:"bloodRage",name:"Rabia sanguinea",desc:"Gran drenaje de vida en el impacto.",unlockLevel:7,cooldown:5,mult:1.38,lifestealBonus:.35},whirlwind:{id:"whirlwind",name:"Torbellino",desc:"Dos impactos consecutivos.",unlockLevel:9,cooldown:5,mult:.88,hits:2},execution:{id:"execution",name:"Ejecucion",desc:"Hace muchisimo mas dano a enemigos debilitados.",unlockLevel:12,cooldown:4,mult:1.2,executeThreshold:.35,executeMult:1.85},venomCut:{id:"venomCut",name:"Corte toxico",desc:"Aplica dano persistente.",unlockLevel:14,cooldown:4,mult:1.08,dot:{turns:3,ratio:.18,label:"Veneno"}},berserk:{id:"berserk",name:"Berserk",desc:"Te buffas y golpeas con furia.",unlockLevel:17,cooldown:6,mult:1.25,selfBuff:{attackPct:.22,defensePct:-.1,turns:3}},celestialEdge:{id:"celestialEdge",name:"Filo celestial",desc:"Golpe definitivo con alto critico.",unlockLevel:22,cooldown:7,mult:2.25,critBonus:.28}},Aa=[{id:"kills50",title:"Carne de Arena",desc:"Derrota 50 enemigos.",type:"kills",target:50,reward:{gold:250,shards:2}},{id:"wins25",title:"Favor del Publico",desc:"Gana 25 combates de arena.",type:"wins",target:25,reward:{gold:300,essence:3}},{id:"quest10",title:"Contratista",desc:"Completa 10 misiones.",type:"questsCompleted",target:10,reward:{gold:400,shards:3}},{id:"floor5",title:"Delvador",desc:"Alcanza el piso 5 de las mazmorras.",type:"highestDungeonFloor",target:5,reward:{gold:450,keys:2}},{id:"level10",title:"Veterano",desc:"Llega al nivel 10.",type:"level",target:10,reward:{gold:500,potions:2,essence:4}},{id:"legendary1",title:"Resplandor Dorado",desc:"Consigue 1 objeto legendario.",type:"legendaryFound",target:1,reward:{shards:4,gold:500}},{id:"guild8",title:"Constructor",desc:"Invierte 8 niveles de gremio en total.",type:"guildTotal",target:8,reward:{gold:700,essence:5}},{id:"ascend1",title:"Mas alla del polvo",desc:"Asciende una vez.",type:"ascension",target:1,reward:{relicDust:3,shards:5}}],ja=[["resumen","Resumen"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],ft=[["resumen","Resumen"],["perfil","Perfil"],["inventario","Inventario"],["arena","Arena"],["expedicion","Expediciones"],["mazmorra","Mazmorras"],["mercado","Mercado"],["forja","Forja"],["gremio","Gremio"],["entrenamiento","Entrenamiento"],["trabajo","Trabajo"],["mascota","Mascota"],["logros","Logros"],["diario","Diario"]],Ia={resumen:{label:"Resumen",short:"Bucle principal",desc:"Vista rápida del ciclo principal, contratos y accesos clave.",icon:"home"},perfil:{label:"Perfil",short:"Gladiador",desc:"Identidad, equipo, rango, zona y estadísticas del héroe.",icon:"user"},inventario:{label:"Inventario",short:"Bolsa y equipo",desc:"Gestiona la mochila, filtra piezas y equipa mejoras.",icon:"backpack"},arena:{label:"Arena",short:"Combate rápido",desc:"Duelo instantáneo, élites y rachas de farmeo.",icon:"swords"},expedicion:{label:"Expediciones",short:"Temporizadores",desc:"Rutas en segundo plano con botín y materiales.",icon:"compass"},mazmorra:{label:"Mazmorras",short:"Pisos y jefes",desc:"Runs por pisos con jefe y cofre.",icon:"castle"},mercado:{label:"Mercado",short:"Compra y venta",desc:"Rotación de equipo y consumibles.",icon:"cart"},forja:{label:"Forja",short:"Creación y mejora",desc:"Creación de piezas y mejoras directas.",icon:"hammer"},gremio:{label:"Gremio",short:"Bonos pasivos",desc:"Mejoras permanentes de la partida.",icon:"shield"},entrenamiento:{label:"Entrenamiento",short:"Atributos y habilidades",desc:"Atributos, habilidades y especialización.",icon:"book"},trabajo:{label:"Trabajo",short:"Ingresos seguros",desc:"Ocupaciones temporizadas con retorno estable.",icon:"briefcase"},mascota:{label:"Mascota",short:"Compañero",desc:"Bonos únicos y progresión auxiliar.",icon:"paw"},logros:{label:"Logros",short:"Metaprogresión",desc:"Hitos, reliquias y ascensión.",icon:"trophy"},diario:{label:"Diario",short:"Registro",desc:"Historial de eventos y actividad reciente.",icon:"scroll"}},Pa=[{title:"Principal",views:["resumen","perfil","inventario","arena"]},{title:"Aventura",views:["expedicion","mazmorra"]},{title:"Economía",views:["mercado","forja","trabajo"]},{title:"Progreso",views:["gremio","entrenamiento","mascota","logros"]},{title:"Registro",views:["diario"]}],vt=["resumen","perfil","inventario","arena"],La=ft.map(([s])=>s).filter(s=>!vt.includes(s)),Ca="aether_arena_pbbg_v3";window.AetherConfig={STORAGE_KEY:Ca,SLOT_ORDER:ba,SLOT_NAMES:ya,TABS:ja,VIEWS:ft,VIEW_META:Ia,VIEW_GROUPS:Pa,MOBILE_PRIMARY_VIEWS:vt,MOBILE_OVERFLOW_VIEWS:La,RANKS:ha,RARITIES:xa,ITEM_BASES:$a,AFFIXES:ka,ZONES:Sa,JOBS:wa,PETS:Ma,SKILLS:Ea,ACHIEVEMENTS:Aa};(()=>{const{RARITIES:s,ITEM_BASES:c}=window.AetherConfig;let b=1;const k=u=>document.getElementById(u),j=u=>JSON.parse(JSON.stringify(u)),g=(u,r)=>Math.floor(Math.random()*(r-u+1))+u,T=(u,r)=>Math.random()*(r-u)+u,y=u=>u[Math.floor(Math.random()*u.length)],$=(u,r,R)=>Math.min(R,Math.max(r,u)),L=u=>u.reduce((r,R)=>r+R,0),_=()=>`${Date.now().toString(36)}_${(b++).toString(36)}_${g(100,999)}`,J={attack:{label:"Ataque",tip:"Aumenta el daño base que infliges en combate."},defense:{label:"Defensa",tip:"Reduce parte del daño recibido en cada impacto."},speed:{label:"Velocidad",tip:"Mejora la iniciativa y el ritmo de tus acciones."},hp:{label:"Vida máxima",tip:"Determina la cantidad total de salud disponible."},crit:{label:"Golpe crítico",tip:"Probabilidad de infligir daño crítico aumentado."},dodge:{label:"Esquiva",tip:"Probabilidad de evitar por completo un golpe enemigo."},block:{label:"Bloqueo",tip:"Probabilidad de mitigar una parte importante del daño."},lifesteal:{label:"Robo de vida",tip:"Porcentaje del daño convertido en curación propia."},attackPct:{label:"Ataque %",tip:"Multiplicador porcentual al ataque base."},defensePct:{label:"Defensa %",tip:"Multiplicador porcentual a la defensa base."},hpPct:{label:"Vida %",tip:"Multiplicador porcentual a la vida máxima."},speedPct:{label:"Velocidad %",tip:"Multiplicador porcentual a la velocidad base."},goldPct:{label:"Oro %",tip:"Incrementa el oro obtenido en actividades."},lootLuck:{label:"Suerte de botín",tip:"Mejora ligeramente la calidad y la frecuencia del botín."},regenPct:{label:"Regeneración %",tip:"Incrementa la recuperación pasiva de recursos."}},C={common:{name:"Común",tone:"text-slate-200 border-white/10 bg-white/[0.04]"},uncommon:{name:"Infrecuente",tone:"text-emerald-200 border-emerald-300/20 bg-emerald-400/10"},rare:{name:"Raro",tone:"text-sky-200 border-sky-300/24 bg-sky-400/10"},epic:{name:"Épico",tone:"text-violet-200 border-violet-300/24 bg-violet-400/10"},legendary:{name:"Legendario",tone:"text-amber-200 border-amber-300/24 bg-amber-400/10"},mythic:{name:"Mítico",tone:"text-fuchsia-200 border-fuchsia-300/24 bg-fuchsia-400/10"}},V={all:"Todo",weapon:"Armas",offhand:"Mano izquierda",helm:"Cascos",chest:"Armaduras",gloves:"Guantes",boots:"Botas",ring:"Anillos",amulet:"Amuletos",common:"Común",uncommon:"Infrecuente",rare:"Raro",epic:"Épico",legendary:"Legendario",mythic:"Mítico"};function Q(u,r=0){return Number(u||0).toLocaleString("es-ES",{maximumFractionDigits:r})}function d(u){return`${Q((u||0)*100,1)}%`}function t(u=""){return String(u).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function p(u=""){const r=String(u),R=[];let N=r;return[/<\/?b>/gi,/<br\s*\/?>/gi,/<span class="rarity-(common|uncommon|rare|epic|legendary|mythic)">/gi,/<\/span>/gi].forEach(Y=>{N=N.replace(Y,H=>{const K=`__SAFE_HTML_${R.length}__`;return R.push({token:K,match:H}),K})}),N=t(N),R.forEach(({token:Y,match:H})=>{N=N.replace(Y,H)}),N}function A(u,r=2){return Number(u.toFixed(r))}function f(u){return(J[u]||{}).label||u}function x(u){return(J[u]||{}).tip||""}function E(u){return(C[u]||C.common).name}function P(u){const r=C[u]||C.common;return`<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[.14em] ${r.tone}">${r.name}</span>`}function e(u){return V[u]||u}function a(u,r,R="",N=""){return`
      <div class="stat-pill rounded-2xl px-3 py-3"${N?` data-tooltip="${String(N).replace(/"/g,"&quot;")}"`:""}>
        <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/70">${u}</div>
        <div class="text-lg font-display font-extrabold tracking-[0.01em] text-white">${r}</div>
        ${R?`<div class="mt-1 text-xs leading-relaxed text-slate-300/65">${R}</div>`:""}
      </div>
    `}function l(u,r,R,N,X=""){const Y=r<=0?0:$(u/r*100,0,100);return`
      <div${X?` data-tooltip="${String(X).replace(/"/g,"&quot;")}"`:""}>
        <div class="mb-1 flex items-center justify-between gap-3 text-xs text-slate-300/80">
          <span class="font-medium tracking-[0.01em]">${N}</span>
          <span class="font-semibold text-slate-100">${Q(u,u%1?1:0)} / ${Q(r,r%1?1:0)}</span>
        </div>
        <div class="bar">
          <span class="relative flex h-full rounded-full ${R}" style="width:${Y}%">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-80"></span>
          </span>
        </div>
      </div>
    `}function v(u){return s.find(r=>r.key===u)||s[0]}function m(u,r){return!r||typeof r!="object"||Object.keys(r).forEach(R=>{const N=r[R];Array.isArray(N)?u[R]=N:N&&typeof N=="object"?((!u[R]||typeof u[R]!="object"||Array.isArray(u[R]))&&(u[R]={}),m(u[R],N)):u[R]=N}),u}function o(){return{attack:0,defense:0,speed:0,hp:0,crit:0,dodge:0,block:0,lifesteal:0,attackPct:0,defensePct:0,hpPct:0,speedPct:0,goldPct:0,lootLuck:0,regenPct:0}}function i(u,r){return Object.keys(r||{}).forEach(R=>{u[R]=(u[R]||0)+r[R]}),u}function h(u=Date.now()){const r=new Date(u),R=r.getFullYear(),N=String(r.getMonth()+1).padStart(2,"0"),X=String(r.getDate()).padStart(2,"0");return`${R}-${N}-${X}`}function q(u){const r=Math.max(0,u-Date.now()),R=Math.ceil(r/1e3),N=Math.floor(R/60),X=R%60;return N?`${N}m ${String(X).padStart(2,"0")}s`:`${X}s`}function D(u=1,r=0){const R=Math.random()-Math.min(.16,r*.035)-Math.min(.06,u*7e-4);return R<.0012?v("mythic"):R<.01?v("legendary"):R<.052?v("epic"):R<.19?v("rare"):R<.48?v("uncommon"):v("common")}function O(u,r){return(c[u]||[]).find(R=>R.name===r)||y(c[u]||[])}function F(u,r){return u+Math.max(0,Math.floor(r/4))*.85}window.AetherUtils={$:k,clone:j,rand:g,randf:T,pick:y,clamp:$,sum:L,uid:_,fmt:Q,pct:d,escapeHtml:t,sanitizeInlineHtml:p,softRound:A,statLabel:f,statTooltip:x,rarityName:E,rarityBadge:P,translateFilter:e,htmlStat:a,progressBar:l,rarityDef:v,deepMerge:m,emptyStats:o,addStats:i,localDayKey:h,timeLeft:q,pickRarity:D,findBaseItem:O,scaledStatValue:F}})();function Ra(s){const{ITEM_BASES:c,AFFIXES:b,SLOT_ORDER:k,pick:j,rand:g,uid:T,softRound:y,rarityDef:$,pickRarity:L,findBaseItem:_,scaledStatValue:J,getLootLuck:C}=s;function V(x){const E=1+(x.upgrade||0)*.12,P={};return Object.entries(x.stats||{}).forEach(([e,a])=>{e==="crit"||e==="dodge"||e==="block"||e==="lifesteal"?P[e]=y(a+(x.upgrade||0)*.002,4):P[e]=y(a*E,2)}),P}function Q(x){const E=V(x);return y((E.attack||0)*2.1+(E.defense||0)*1.85+(E.speed||0)*1.45+(E.hp||0)*.18+(E.crit||0)*120+(E.dodge||0)*90+(E.block||0)*70+(E.lifesteal||0)*140,1)}function d(x,E,P=null,e=null,a=0){const l=e?_(x,e):j(c[x]),v=P?$(P):L(E,C()),m={};Object.entries(l.stats).forEach(([u,r])=>{const R=typeof r=="number"?u==="crit"||u==="dodge"||u==="block"||u==="lifesteal"?r+Math.max(0,E-1)*5e-4:J(r,E):r;m[u]=y(R*v.mult,3)});const o=Math.min(5,v.affixes+a),i=new Set,h=[];for(let u=0;u<o;u++){let r=j(b),R=0;for(;i.has(r.prefix||r.suffix)&&R<20;)r=j(b),R+=1;i.add(r.prefix||r.suffix),h.push(r),Object.entries(r.stats).forEach(([N,X])=>{const Y=N==="crit"||N==="dodge"||N==="block"||N==="lifesteal"?X+Math.max(0,E-1)*5e-4:J(X,E);m[N]=y((m[N]||0)+Y,3)})}const q=[],D=h.find(u=>u.prefix),O=h.find(u=>u.suffix);D&&q.push(D.prefix),q.push(l.name),O&&q.push(O.suffix);const F={id:T(),slot:x,name:q.join(" "),rarity:v.key,level:E,baseName:l.name,stats:m,affixes:h.map(u=>u.prefix||u.suffix),value:Math.max(12,Math.round((v.value+E*8)*(1+o*.18))),upgrade:0,createdAt:Date.now()};return F.score=Q(F),F}function t(x,E){const P=d(x,1,"common",E,0);return P.affixes=[],P.name=E,P.score=Q(P),P}function p(x=1){const E=Math.random();return x>=32&&E<.0015?"mythic":x>=24&&E<.012?"legendary":x>=16&&E<.055?"epic":x>=8&&E<.22?"rare":E<.58?"uncommon":"common"}function A(x=1){const E=[],P=6+Math.min(2,Math.floor(x/12)),e={common:1.05,uncommon:1.16,rare:1.48,epic:2.05,legendary:3.1,mythic:4.8};for(let a=0;a<P;a++){const l=j(k),v=p(x),m=d(l,Math.max(1,x+g(-1,3)),v);m.price=Math.round(m.value*e[m.rarity]*(1+Math.max(0,x-1)*.015)),E.push(m)}return E.sort((a,l)=>(l.price||0)-(a.price||0))}function f(){return[t("helm","Yelmo de Bronce"),t("boots","Sandalias de Arena"),d("ring",1,"uncommon")]}return{scaleItemStats:V,computeItemScore:Q,makeItem:d,makeStarterItem:t,generateMarket:A,starterInventory:f}}function Da(s){const{SLOT_ORDER:c,emptyStats:b,addStats:k,softRound:j,clamp:g}=s,T={sig:"",value:null};function y(){T.sig="",T.value=null}function $(d,t){const p=t(),A=b();if(!p||!d.player.petLevel)return A;const f=1+d.player.petLevel*.16;return Object.entries(p.bonus).forEach(([x,E])=>{A[x]=j((A[x]||0)+E*f,4)}),A}function L(d){const t=d.player.guild,p=b();return p.attackPct+=t.barracks*.03,p.defensePct+=t.barracks*.02,p.goldPct+=t.treasury*.08,p.hpPct+=t.sanctuary*.05,p.regenPct+=t.sanctuary*.08,p.lootLuck+=t.hunters*.05,p}function _(d){const t=d.player.relics,p=b();return p.attackPct+=t.wrath*.04,p.goldPct+=t.fortune*.05,p.lootLuck+=t.fortune*.03,p.hpPct+=t.vitality*.06,p.regenPct+=t.vitality*.06,p.speedPct+=t.momentum*.03,p}function J(d,t){const p=b();return c.forEach(A=>{const f=d.player.equipment[A];f&&k(p,t(f))}),p}function C(d){const t=d.player.training;return{attack:t.strength*2.2,defense:t.endurance*1.3,speed:t.agility*1.5,hp:t.endurance*16,crit:t.agility*.002,dodge:t.agility*.002,block:t.endurance*.0015,lifesteal:t.strength*8e-4}}function V(d,t){if(!d.player)return{attack:14,defense:10,speed:8,maxHp:140,crit:.06,dodge:.04,block:.03,lifesteal:0,maxEnergy:100,maxStamina:12,goldPct:0,lootLuck:0,regenPct:0};const{getPetData:p,scaleItemStats:A}=t,f=d.player,x=[f.level,f.baseStats.attack,f.baseStats.defense,f.baseStats.speed,f.baseStats.crit,f.baseStats.dodge,f.baseStats.block,f.baseStats.lifesteal,f.training.strength,f.training.agility,f.training.endurance,f.training.discipline,f.guild.barracks,f.guild.treasury,f.guild.sanctuary,f.guild.hunters,f.guild.arsenal,f.relics.wrath,f.relics.fortune,f.relics.vitality,f.relics.momentum,f.pet||"",f.petLevel||0,...c.map(r=>{const R=f.equipment[r];return R?`${R.id}:${R.level}:${R.upgrade||0}:${R.rarity}:${R.reforge||0}`:"-"})].join("|");if(T.sig===x&&T.value)return T.value;const E=f.level,P={attack:f.baseStats.attack+E*3.2,defense:f.baseStats.defense+E*2.45,speed:f.baseStats.speed+E*1.2,hp:120+E*34,crit:f.baseStats.crit,dodge:f.baseStats.dodge,block:f.baseStats.block,lifesteal:f.baseStats.lifesteal,maxEnergy:100+f.training.discipline*5+f.relics.momentum*10,maxStamina:12+Math.floor(f.training.discipline/4)+f.relics.momentum},e=J(d,A),a=C(d),l=L(d),v=_(d),m=$(d,p);let o=P.attack+(e.attack||0)+(a.attack||0),i=P.defense+(e.defense||0)+(a.defense||0),h=P.speed+(e.speed||0)+(a.speed||0),q=P.hp+(e.hp||0)+(a.hp||0);const D=(l.attackPct||0)+(v.attackPct||0)+(m.attackPct||0),O=(l.defensePct||0)+(m.defensePct||0),F=(l.hpPct||0)+(v.hpPct||0)+(m.hpPct||0),u=(v.speedPct||0)+(m.speedPct||0);return o*=1+D,i*=1+O,q*=1+F,h*=1+u,T.sig=x,T.value={attack:j(o,2),defense:j(i,2),speed:j(h,2),maxHp:Math.round(q),crit:g(P.crit+(e.crit||0)+(a.crit||0)+(m.crit||0),0,.7),dodge:g(P.dodge+(e.dodge||0)+(a.dodge||0)+(m.dodge||0),0,.55),block:g(P.block+(e.block||0)+(a.block||0)+(m.block||0),0,.5),lifesteal:g(P.lifesteal+(e.lifesteal||0)+(a.lifesteal||0),0,.45),maxEnergy:P.maxEnergy,maxStamina:P.maxStamina,goldPct:(l.goldPct||0)+(m.goldPct||0)+(v.goldPct||0),lootLuck:(l.lootLuck||0)+(m.lootLuck||0)+(v.lootLuck||0),regenPct:(l.regenPct||0)+(m.regenPct||0)+(v.regenPct||0)},T.value}function Q(d,t){return d.player&&V(d,t).lootLuck||0}return{invalidateDerivedCache:y,petBonus:$,getGuildBonus:L,getRelicBonus:_,getEquipmentBonus:J,getTrainingBonus:C,getDerivedStats:V,getLootLuck:Q}}function Ta(s){const{pick:c,uid:b,makeStarterItem:k,starterInventory:j,generateMarket:g}=s;function T(L){return Math.round(95+Math.pow(L,1.46)*48)}function y(L=1){const _=[{type:"kills",title:"Barrido de rivales",desc:"Derrota enemigos en la arena.",target:7+Math.floor(L*1.6),reward:{gold:120+L*20,xp:60+L*14,essence:1}},{type:"wins",title:"Clamor del publico",desc:"Gana combates de arena.",target:4+Math.floor(L*.6),reward:{gold:140+L*24,xp:65+L*15,potions:1}},{type:"earnGold",title:"Bolsillos pesados",desc:"Obten oro por cualquier medio.",target:320+L*90,reward:{gold:150+L*22,xp:70+L*12,shards:1}},{type:"crafts",title:"Acero fresco",desc:"Forja o mejora equipo.",target:2+Math.floor(L/7),reward:{gold:180+L*18,xp:60+L*16,iron:3}},{type:"expeditions",title:"Rutas peligrosas",desc:"Completa expediciones.",target:2+Math.floor(L/8),reward:{gold:160+L*18,xp:72+L*14,wood:3}},{type:"dungeons",title:"Hedor profundo",desc:"Supera incursiones en mazmorra.",target:1+Math.floor(L/10),reward:{gold:220+L*18,xp:95+L*18,keys:1}},{type:"salvaged",title:"Chatarra util",desc:"Recicla equipo sobrante.",target:3+Math.floor(L/7),reward:{gold:130+L*18,xp:55+L*13,essence:2}},{type:"elites",title:"Sangre de elite",desc:"Derrota enemigos elite.",target:1+Math.floor(L/9),reward:{gold:240+L*20,xp:90+L*17,shards:1}}],J=[],C=[];for(;J.length<4&&C.length<_.length;){const V=c(_);C.includes(V.type)||(C.push(V.type),J.push({id:b(),type:V.type,title:V.title,desc:V.desc,progress:0,target:V.target,reward:V.reward,completed:!1,claimed:!1}))}return J}function $(){return{version:4,currentView:"resumen",currentTab:"resumen",ui:{inventoryFilter:"all",inventoryPage:1,inventoryPageSize:18,journalPage:1,journalPageSize:16,modal:null,forgePreview:null,moreMenuOpen:!1},player:{name:"Aurelio",title:"Novato del Coliseo",level:1,xp:0,gold:260,shards:0,iron:16,wood:12,essence:5,food:6,potions:3,keys:2,hp:140,energy:100,stamina:12,baseStats:{attack:14,defense:10,speed:8,crit:.06,dodge:.04,block:.03,lifesteal:0},training:{strength:0,agility:0,endurance:0,discipline:0},guild:{barracks:0,treasury:0,sanctuary:0,hunters:0,arsenal:0},relics:{wrath:0,fortune:0,vitality:0,momentum:0},pet:null,petLevel:0,petXp:0,activeSkills:["powerStrike","quickLunge","fortify"],unlockedSkills:["powerStrike","quickLunge","fortify"],skillLevels:{powerStrike:1,quickLunge:1,fortify:1,shieldBash:1,bloodRage:1,whirlwind:1,execution:1,venomCut:1,berserk:1,celestialEdge:1},skillPoints:0,attributePoints:0,zoneId:0,highestDungeonFloor:1,ascension:0,relicDust:0,equipment:{weapon:k("weapon","Gladius"),offhand:k("offhand","Escudo de Torre"),helm:null,chest:k("chest","Coraza Segmentada"),gloves:null,boots:null,ring:null,amulet:null},inventory:j()},stats:{wins:0,losses:0,kills:0,damageDone:0,damageTaken:0,crits:0,questsCompleted:0,crafted:0,salvaged:0,earnedGold:0,expeditions:0,dungeons:0,elites:0,legendaryFound:0},quests:y(1),claimedAchievements:[],timers:{job:null,expedition:null},market:{items:g(1),lastRefresh:Date.now()},journal:[{id:b(),ts:Date.now(),icon:"⚔️",text:"Has entrado en Aether Arena. El coliseo huele a hierro, oro y gloria."}],streak:{lastClaimDay:null,days:0},combatHistory:[],lastTick:Date.now(),lastSave:0}}return{xpNeeded:T,defaultQuests:y,makeDefaultState:$}}function qa(s){const{state:c,PETS:b,sum:k,statsDomain:j,scaleItemStats:g}=s;function T(){return 28+c.player.guild.arsenal*8+c.player.ascension*2}function y(){return k(Object.values(c.player.guild||{}))}function $(){return b.find(t=>t.id===c.player.pet)||null}function L(){return j.petBonus(c,$)}function _(){return j.getGuildBonus(c)}function J(){return j.getRelicBonus(c)}function C(){return j.getEquipmentBonus(c,g)}function V(){return j.getTrainingBonus(c)}function Q(){return j.getDerivedStats(c,{getPetData:$,scaleItemStats:g})}function d(){return j.getLootLuck(c,{getPetData:$,scaleItemStats:g})}return{maxInventory:T,guildTotal:y,getPetData:$,petBonus:L,getGuildBonus:_,getRelicBonus:J,getEquipmentBonus:C,getTrainingBonus:V,getDerivedStats:Q,getLootLuck:d}}function Va(s){const{clone:c,statsDomain:b,makeDefaultState:k,zustandVanilla:j,subscribeWithSelector:g}=s,T=new Set(["_meta","actions"]),y={};function $(d={}){return{hydrated:!1,isDirty:!1,isSaving:!1,lastMutationAt:0,lastMutationLabel:"bootstrap",mutationCount:0,lastSaveAt:0,saveCount:0,lastSource:"bootstrap",syncRevision:0,...d}}function L(d=null){const t=d||y,p={};return Object.keys(t||{}).forEach(A=>{T.has(A)||(p[A]=c(t[A]))}),p}function _(d=null){const t=L(d);return t.ui&&(t.ui.modal=null,t.ui.moreMenuOpen=!1,t.ui.forgePreview=null),t}function J(d){Object.keys(y).forEach(t=>delete y[t]),Object.assign(y,d),b.invalidateDerivedCache()}const C=j.createStore(g(()=>({...c(k()),_meta:$(),actions:{}})));function V(){return J(L(C.getState())),y}function Q(d,t={},p=!0){const A=C.getState(),f=$({...A._meta||{},...t}),x={...c(d),_meta:f,actions:A.actions||{}};return C.setState(x,p),V()}return{state:y,gameStore:C,createStoreMeta:$,snapshotGameData:L,serializableState:_,replaceState:J,syncStateFromStore:V,setStoreSnapshot:Q}}function Ba(s){const{state:c,gameStore:b,clone:k,snapshotGameData:j,replaceState:g,normalizeState:T,createStoreMeta:y,setStoreSnapshot:$}=s;function L(){return b.getState()._meta||y()}function _(d={}){const t=b.getState();return b.setState({...t,_meta:y({...t._meta||{},...d})}),L()}function J(d={},t=!0){return $(c,d,t)}function C(d,t,p={}){const A=j(b.getState());try{g(k(A)),typeof t=="function"&&t(c),p.normalize&&T();const f=L();return J({hydrated:!0,isDirty:p.markDirty===!1?f.isDirty:!0,isSaving:!1,lastMutationAt:Date.now(),lastMutationLabel:d||"mutation",mutationCount:(f.mutationCount||0)+1,lastSource:p.source||"local"})}catch(f){throw g(A),f}}function V(d,t,p){return typeof d=="function"&&typeof t=="function"?b.subscribe(d,t,p):b.subscribe(d)}function Q(d){return typeof d=="function"?d(b.getState()):b.getState()}return{getStoreMeta:L,setStoreMeta:_,commitWorkingState:J,mutate:C,subscribeStore:V,selectStore:Q}}function Oa(s){const{STORAGE_KEY:c,state:b,makeDefaultState:k,clone:j,snapshotGameData:g,serializableState:T,replaceState:y,normalizeState:$,commitWorkingState:L,setStoreMeta:_,getStoreMeta:J}=s;function C(p,A="storage"){y(j(p||k())),$();const f=Date.now();return L({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:b.lastSave||f,lastSource:A,syncRevision:A==="external-sync"?J().syncRevision+1:J().syncRevision})}function V(){try{const p=Date.now();_({isSaving:!0});const A=T();return A.lastSave=p,localStorage.setItem(c,JSON.stringify(A)),y(g()),b.lastSave=p,L({hydrated:!0,isDirty:!1,isSaving:!1,lastSaveAt:p,saveCount:(J().saveCount||0)+1,lastSource:"save"}),!0}catch(p){return console.warn("No se pudo guardar la partida.",p),_({isSaving:!1}),!1}}function Q(){try{const p=localStorage.getItem(c);return p?C(JSON.parse(p),"storage"):C(k(),"new-game")}catch(p){return console.warn("Guardado corrupto, creando uno nuevo.",p),C(k(),"recovered")}}function d(p){try{return C(p?JSON.parse(p):k(),"external-sync")}catch(A){return console.warn("No se pudo sincronizar el estado externo.",A),!1}}function t(){return localStorage.removeItem(c),C(k(),"reset")}return{loadFromParsedState:C,saveGame:V,loadGame:Q,syncExternalState:d,hardReset:t}}(()=>{const{STORAGE_KEY:s,SLOT_ORDER:c,ITEM_BASES:b,AFFIXES:k,PETS:j,SKILLS:g}=window.AetherConfig,{clone:T,rand:y,pick:$,clamp:L,sum:_,uid:J,softRound:C,rarityDef:V,deepMerge:Q,emptyStats:d,addStats:t,localDayKey:p,pickRarity:A,findBaseItem:f,scaledStatValue:x}=window.AetherUtils,E=Da({SLOT_ORDER:c,emptyStats:d,addStats:t,softRound:C,clamp:L});let P=()=>0;const{scaleItemStats:e,computeItemScore:a,makeItem:l,makeStarterItem:v,generateMarket:m,starterInventory:o}=Ra({ITEM_BASES:b,AFFIXES:k,SLOT_ORDER:c,pick:$,rand:y,uid:J,softRound:C,rarityDef:V,pickRarity:A,findBaseItem:f,scaledStatValue:x,getLootLuck:()=>P()}),{xpNeeded:i,defaultQuests:h,makeDefaultState:q}=Ta({pick:$,uid:J,makeStarterItem:v,starterInventory:o,generateMarket:m}),D=window.zustandVanilla||window.zustand,O=window.zustandMiddleware||{},F=typeof O.subscribeWithSelector=="function"?O.subscribeWithSelector:ee=>ee;if(!D||typeof D.createStore!="function")throw new Error("Zustand vanilla no esta disponible. Verifica la carga de la libreria antes de model.js");const u=Va({clone:T,statsDomain:E,makeDefaultState:q,zustandVanilla:D,subscribeWithSelector:F}),{state:r,gameStore:R,createStoreMeta:N,snapshotGameData:X,serializableState:Y,replaceState:H,syncStateFromStore:K,setStoreSnapshot:I}=u,S=qa({state:r,PETS:j,sum:_,statsDomain:E,scaleItemStats:e}),{maxInventory:B,guildTotal:Z,getPetData:te,petBonus:ie,getGuildBonus:le,getRelicBonus:Ae,getEquipmentBonus:w,getTrainingBonus:W,getDerivedStats:ae,getLootLuck:pe}=S;P=pe,K();function xe(ee=null){const ce=r.player,Pe=[];return Object.values(g).forEach($e=>{ce.level>=$e.unlockLevel&&!ce.unlockedSkills.includes($e.id)&&(ce.unlockedSkills.push($e.id),Pe.push($e))}),typeof ee=="function"&&Pe.forEach($e=>ee($e)),Pe}function de(){const ee=q();H(Q(ee,T(r))),r.currentView=r.currentView||r.currentTab||"resumen",r.currentTab=r.currentView,r.ui.moreMenuOpen=!!r.ui.moreMenuOpen,r.player.inventory||(r.player.inventory=[]),r.player.equipment||(r.player.equipment=ee.player.equipment),r.player.guild||(r.player.guild=ee.player.guild),r.player.training||(r.player.training=ee.player.training),r.player.relics||(r.player.relics=ee.player.relics),r.player.skillLevels||(r.player.skillLevels=ee.player.skillLevels),r.player.activeSkills||(r.player.activeSkills=ee.player.activeSkills),r.player.unlockedSkills||(r.player.unlockedSkills=ee.player.unlockedSkills),r.quests||(r.quests=ee.quests),(!r.market||!r.market.items)&&(r.market=ee.market),r.stats||(r.stats=ee.stats),r.claimedAchievements||(r.claimedAchievements=[]),r.combatHistory||(r.combatHistory=[]),r.journal||(r.journal=ee.journal),r.streak||(r.streak=ee.streak),r.timers||(r.timers=ee.timers),r.ui||(r.ui=ee.ui),r.ui.inventoryFilter=r.ui.inventoryFilter||"all",r.ui.inventoryPage=Math.max(1,Number(r.ui.inventoryPage)||1),r.ui.inventoryPageSize=Math.max(6,Number(r.ui.inventoryPageSize)||ee.ui.inventoryPageSize),r.ui.journalPage=Math.max(1,Number(r.ui.journalPage)||1),r.ui.journalPageSize=Math.max(8,Number(r.ui.journalPageSize)||ee.ui.journalPageSize),xe();const ce=ae();r.player.hp=L(r.player.hp||ce.maxHp,1,ce.maxHp),r.player.energy=L(r.player.energy??ce.maxEnergy,0,ce.maxEnergy),r.player.stamina=L(r.player.stamina??ce.maxStamina,0,ce.maxStamina),r.player.title=r.player.title||"Novato del Coliseo",r.lastTick=r.lastTick||Date.now(),r.lastSave=r.lastSave||0}const Ke=Ba({state:r,gameStore:R,clone:T,snapshotGameData:X,replaceState:H,normalizeState:de,createStoreMeta:N,setStoreSnapshot:I}),{getStoreMeta:Te,setStoreMeta:je,commitWorkingState:Ye,mutate:qe,subscribeStore:Xe,selectStore:et}=Ke,tt=Oa({STORAGE_KEY:s,state:r,makeDefaultState:q,clone:T,snapshotGameData:X,serializableState:Y,replaceState:H,normalizeState:de,commitWorkingState:Ye,setStoreMeta:je,getStoreMeta:Te}),{saveGame:Ve,loadGame:Be,syncExternalState:Oe,hardReset:ke}=tt,Ie={mutate:qe,saveGame:Ve,loadGame:Be,hardReset:ke,setMeta:je,syncExternalState:Oe};R.setState({...R.getState(),actions:Ie}),K(),window.AetherModel={state:r,store:R,replaceState:H,snapshotGameData:X,mutate:qe,subscribeStore:Xe,selectStore:et,getStoreMeta:Te,setStoreMeta:je,syncExternalState:Oe,makeItem:l,makeStarterItem:v,scaleItemStats:e,computeItemScore:a,xpNeeded:i,defaultQuests:h,generateMarket:m,starterInventory:o,makeDefaultState:q,maxInventory:B,guildTotal:Z,getPetData:te,petBonus:ie,getGuildBonus:le,getRelicBonus:Ae,getEquipmentBonus:w,getTrainingBonus:W,getDerivedStats:ae,getLootLuck:pe,ensureUnlockedSkills:xe,normalizeState:de,saveGame:Ve,loadGame:Be,hardReset:ke}})();function za(s){const{SKILLS:c,pick:b,rand:k,randf:j,clamp:g,softRound:T,uid:y}=s;function $(e){return{berserker:{attack:1.12,defense:.92,speed:1.03,crit:.04,dodge:.01,block:0,lifesteal:.02},guardian:{attack:.9,defense:1.18,speed:.92,crit:.01,dodge:.02,block:.05,lifesteal:0},assassin:{attack:1,defense:.86,speed:1.22,crit:.06,dodge:.05,block:.01,lifesteal:0},beast:{attack:1.08,defense:.95,speed:1.09,crit:.03,dodge:.03,block:0,lifesteal:.03},occult:{attack:1.03,defense:.94,speed:1.05,crit:.05,dodge:.02,block:.02,lifesteal:0}}[e]||{attack:1,defense:1,speed:1,crit:0,dodge:0,block:0,lifesteal:0}}function L({zone:e,kind:a="normal",playerLevel:l=1,playerAscension:v=0,wins:m=0}){const o=Math.pow(l,.88)*.04,i=e&&typeof e.id=="number"?e.id*.25:0,h=v*.25,q=Math.min(m/60,3),D=a==="elite"?.3:a==="boss"?.6:0;return 1+o+i+h+q+D}function _({zone:e,kind:a="normal",extraScale:l=0,playerLevel:v=1,playerAscension:m=0,wins:o=0}){const h=b(["berserker","guardian","assassin","beast","occult"]),q=$(h),D=Math.max(1,Math.round(e.unlockLevel+v*.95+e.id*1.8+l+k(-1,2))),O=a==="elite"?1.3:a==="boss"?1.6:1,F=L({zone:e,kind:a,playerLevel:v,playerAscension:m,wins:o}),u=(12+D*3.4)*q.attack*O*F,r=(8+D*2.8)*q.defense*O*F,R=(120+D*34)*(a==="boss"?2.1:a==="elite"?1.5:1)*F,N=(7+D*1.08)*q.speed*F,X=a==="boss"?e.boss:b(e.enemies),Y={berserker:{name:"Furia salvaje",mult:1.45,cooldown:3},guardian:{name:"Muro de carne",mult:.9,cooldown:4,selfBuff:{defensePct:.2,turns:2}},assassin:{name:"Deguello",mult:1.2,cooldown:3,critBonus:.18},beast:{name:"Desgarro",mult:1.08,cooldown:3,dot:{turns:2,ratio:.12,label:"Sangrado"}},occult:{name:"Maldicion",mult:1.15,cooldown:4,armorBreak:{pct:.14,turns:2}}}[h];return{id:y(),name:X,zoneId:e.id,kind:a,archetype:h,level:D,maxHp:Math.round(R),hp:Math.round(R),attack:T(u,2),defense:T(r,2),speed:T(N,2),crit:g(.06+q.crit+(a==="boss"?.03:a==="elite"?.015:0)+(F-1)*.015,0,.55),dodge:g(.025+q.dodge+(a==="boss"?.02:a==="elite"?.01:0)+(F-1)*.012,0,.45),block:g(.015+q.block+(a==="boss"?.04:a==="elite"?.02:0)+(F-1)*.012,0,.4),lifesteal:g(q.lifesteal+(a==="boss"?.01:a==="elite"?.005:0)+(F-1)*.008,0,.25),skill:Y,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0}}function J(e,a){return{id:"player",name:e.name,maxHp:a.maxHp,hp:Math.round(e.hp),attack:a.attack,defense:a.defense,speed:a.speed,crit:a.crit,dodge:a.dodge,block:a.block,lifesteal:a.lifesteal,cooldowns:{},buffs:[],dots:[],armorBreak:null,shield:0,activeSkills:(e.activeSkills||[]).filter(l=>(e.unlockedSkills||[]).includes(l))}}function C(e,a){return e.buffs.filter(l=>l.turns>0&&a in(l.values||{})).reduce((l,v)=>l+v.values[a],0)}function V(e,a){const l=`${a}Pct`;let v=e[a];return a==="defense"&&e.armorBreak&&e.armorBreak.turns>0&&(v*=1-e.armorBreak.pct),(a==="attack"||a==="defense"||a==="speed")&&(v*=1+C(e,l)),v+=C(e,a),v}function Q(e,a){return 1+Math.max(0,(e&&e[a]||1)-1)*.08}function d(e,a,l){const v=e.activeSkills||[];for(const m of v){const o=c[m];if(o&&!(o.requireOffhand&&!l.equipment.offhand)&&!((e.cooldowns[m]||0)>0)&&!(o.executeThreshold&&a.hp/a.maxHp>o.executeThreshold))return o}return null}function t(e){return!e.skill||(e.cooldowns.special||0)>0?null:e.skill}function p(e,a){e.dots=e.dots.filter(l=>{if(l.turns<=0)return!1;const v=Math.round(l.damage);return e.hp-=v,a.push(`☠️ ${e.name} sufre ${v} por ${l.label}.`),l.turns-=1,l.turns>0}),e.buffs.forEach(l=>{l.turns-=1}),e.buffs=e.buffs.filter(l=>l.turns>0),e.armorBreak&&(e.armorBreak.turns-=1,e.armorBreak.turns<=0&&(e.armorBreak=null))}function A(e,a,l,v=1,m={},o=[]){const i=V(e,"attack"),h=V(a,"defense"),q=g((e.crit||0)+(m.critBonus||0),0,.85),D=g(a.dodge||0,0,.7);if(Math.random()<D)return o.push(`💨 ${a.name} esquiva ${l}.`),{damage:0,crit:!1,dodged:!0,blocked:!1};let O=i*v-h*.55;O=Math.max(i*.26,O),O*=j(.9,1.08);let F=!1;Math.random()<q&&(O*=1.68,F=!0);let u=!1;if(Math.random()<(a.block||0)&&(O*=.66,u=!0),O=Math.max(1,Math.round(O)),a.shield>0){const N=Math.min(a.shield,O);a.shield-=N,O-=N,N>0&&o.push(`🛡️ ${a.name} absorbe ${N} con un escudo.`)}if(O>0){a.hp-=O;const N=O*g((e.lifesteal||0)+(m.lifestealBonus||0),0,.9);N>0&&(e.hp=Math.min(e.maxHp,e.hp+Math.round(N)))}const r=F?" crítico":"",R=u?" (bloqueado parcialmente)":"";return o.push(`⚔️ ${e.name} usa ${l} y causa ${O}${r}${R}.`),{damage:O,crit:F,dodged:!1,blocked:u}}function f(e,a,l,v,m){if(!(!l||v.dodged)&&(l.armorBreak&&(a.armorBreak={pct:l.armorBreak.pct,turns:l.armorBreak.turns+1},m.push(`🧩 La armadura de ${a.name} queda expuesta.`)),l.dot&&v.damage>0&&(a.dots.push({damage:Math.max(3,e.attack*l.dot.ratio),turns:l.dot.turns,label:l.dot.label}),m.push(`🩸 ${a.name} queda afectado por ${l.dot.label}.`)),l.selfBuff)){if(e.buffs.push({turns:l.selfBuff.turns+1,values:{attackPct:l.selfBuff.attackPct||0,defensePct:l.selfBuff.defensePct||0,speedPct:l.selfBuff.speedPct||0}}),l.selfBuff.shieldPct){const o=Math.round(e.maxHp*l.selfBuff.shieldPct);e.shield+=o,m.push(`🛡️ ${e.name} obtiene un escudo de ${o}.`)}m.push(`✨ ${e.name} activa un refuerzo temporal.`)}}function x(e,a,l,v,m,o){if(e.hp<=0||a.hp<=0)return null;const i=l?d(e,a,v):t(e);if(!i){const O=A(e,a,"Golpe básico",1,{},o);return O.damage>0&&(l?m.damageDone+=O.damage:m.damageTaken+=O.damage),O}const h=(i.mult||1)*(l?Q(v.skillLevels,i.id):1),q=i.hits||1;let D=null;for(let O=0;O<q;O++){const F={};i.critBonus&&(F.critBonus=i.critBonus),i.lifestealBonus&&(F.lifestealBonus=i.lifestealBonus);let u=h;if(i.executeThreshold&&a.hp/a.maxHp<=i.executeThreshold&&(u*=i.executeMult||1.6),D=A(e,a,i.name,u,F,o),D&&D.damage>0&&(l?m.damageDone+=D.damage:m.damageTaken+=D.damage),D&&D.crit&&l&&(m.crits+=1),a.hp<=0)break}return f(e,a,i,D||{dodged:!1,damage:0},o),l?e.cooldowns[i.id]=i.cooldown:e.cooldowns.special=i.cooldown,D}function E(e){Object.keys(e.cooldowns).forEach(a=>{e.cooldowns[a]=Math.max(0,(e.cooldowns[a]||0)-1)})}function P({enemy:e,playerState:a,derivedStats:l,zoneName:v,maxTurns:m=28}){const o=J(a,l),i=JSON.parse(JSON.stringify(e)),h=[`🏟️ <b>${o.name}</b> se enfrenta a <b>${i.name}</b> en <b>${v}</b>.`],q={damageDone:0,damageTaken:0,crits:0},D={equipment:a.equipment,skillLevels:a.skillLevels};let O=1;for(;o.hp>0&&i.hp>0&&O<=m&&(p(o,h),p(i,h),!(o.hp<=0||i.hp<=0));){const F=V(o,"speed")+j(0,3)>=V(i,"speed")+j(0,3)?[[o,i,!0],[i,o,!1]]:[[i,o,!1],[o,i,!0]];for(const[u,r,R]of F)if(!(u.hp<=0||r.hp<=0)&&(x(u,r,R,D,q,h),r.hp<=0))break;E(o),E(i),O+=1}return{player:o,foe:i,log:h,statsDelta:q,victory:o.hp>0&&i.hp<=0}}return{enemyArchetypeMods:$,difficultyMultiplier:L,makeEnemy:_,buildPlayerCombatant:J,activeBuffValue:C,effectiveStat:V,skillLevelMult:Q,choosePlayerSkill:d,chooseEnemySkill:t,decayStatuses:p,performHit:A,applySkillEffects:f,actorTurn:x,tickCooldowns:E,runCombat:P}}function Na(s){const{rarityDef:c,rand:b,uid:k,clone:j,generateMarket:g,makeItem:T,computeItemScore:y}=s;function $(e,a){return e.player.inventory.length<a}function L(e,a){e.player.inventory=e.player.inventory.filter(l=>l.id!==a)}function _(e,a){return e.player.inventory.find(l=>l.id===a)}function J(e,a,l){if(!a)return;const{maxInventory:v,addJournal:m,trackQuest:o,checkAchievements:i}=l;if(!$(e,v)){const h=Math.round(a.value*.45);e.player.gold+=h,e.stats.earnedGold+=h,m("📦",`Inventario lleno. <span class="rarity-${a.rarity}">${a.name}</span> se convierte en ${h} de oro.`),o("earnGold",h);return}e.player.inventory.push(a),e.player.inventory.sort((h,q)=>c(q.rarity).value+q.score-(c(h.rarity).value+h.score)),(a.rarity==="legendary"||a.rarity==="mythic")&&(e.stats.legendaryFound+=1),i()}function C(e,a,l){const{addJournal:v}=l,m=_(e,a);if(!m)return;const o=m.slot,i=e.player.equipment[o];e.player.equipment[o]=m,L(e,a),i&&e.player.inventory.push(i),v("🧷",`Equipas <span class="rarity-${m.rarity}">${m.name}</span>.`)}function V(e,a,l){const{maxInventory:v,addJournal:m,toast:o}=l,i=e.player.equipment[a];if(!i||!$(e,v)){o("No hay espacio en el inventario","danger");return}e.player.inventory.push(i),e.player.equipment[a]=null,m("🎒",`Guardas ${i.name} en el inventario.`)}function Q(e,a,l){const{trackQuest:v,addJournal:m}=l,o=_(e,a);if(!o)return;const i=Math.round(o.value*.65);e.player.gold+=i,e.stats.earnedGold+=i,v("earnGold",i),L(e,a),m("💰",`Vendes ${o.name} por ${i} de oro.`)}function d(e,a,l){const{trackQuest:v,addJournal:m}=l,o=_(e,a);if(!o)return;const i=c(o.rarity),h=Math.max(1,Math.round(o.level/3+i.affixes)),q=Math.max(0,Math.round(i.affixes/2)),D=o.rarity==="rare"?1:o.rarity==="epic"?2:o.rarity==="legendary"?4:o.rarity==="mythic"?6:0;e.player.iron+=h,e.player.wood+=q,e.player.essence+=D,e.stats.salvaged+=1,v("salvaged",1),L(e,a),m("♻️",`Reciclas ${o.name}: +${h} hierro, +${q} madera${D?`, +${D} esencia`:""}.`)}function t(e,a,l){const{toast:v,addJournal:m}=l,o=90+e.player.level*12;if(a){if(e.player.gold<o){v("No tienes oro suficiente para refrescar","danger");return}e.player.gold-=o}e.market.items=g(e.player.level),e.market.lastRefresh=Date.now(),m("🛒",`El mercado renueva su inventario${a?` por ${o} de oro`:""}.`)}function p(e,a,l){const{maxInventory:v,toast:m,addJournal:o,trackQuest:i,checkAchievements:h}=l,q=e.market.items.find(O=>O.id===a);if(!q)return;if(e.player.gold<q.price){m("Oro insuficiente","danger");return}if(!$(e,v)){m("Inventario lleno","danger");return}e.player.gold-=q.price;const D=j(q);D.id=k(),J(e,D,{maxInventory:v,addJournal:o,trackQuest:i,checkAchievements:h}),e.market.items=e.market.items.filter(O=>O.id!==a),o("🛍️",`Compras ${q.name} por ${q.price} de oro.`)}function A(e,a,l){const{toast:v,grantRewards:m}=l,i={potion:{price:120,reward:{potions:1},label:"Poción"},key:{price:180,reward:{keys:1},label:"Llave de mazmorra"},essence:{price:140,reward:{essence:1},label:"Esencia"},food:{price:65,reward:{food:2},label:"Comida"}}[a];if(i){if(e.player.gold<i.price){v("Oro insuficiente","danger");return}e.player.gold-=i.price,m(i.reward,i.label)}}function f(e,a,l,v){const{maxInventory:m,toast:o,addJournal:i,trackQuest:h,checkAchievements:q}=v,D=l==="premium"?{gold:260,iron:12,wood:7,essence:3}:{gold:140,iron:8,wood:4,essence:1};if(e.player.gold<D.gold||e.player.iron<D.iron||e.player.wood<D.wood||e.player.essence<D.essence){o("Te faltan materiales","danger");return}if(!$(e,m)){o("Inventario lleno","danger");return}e.player.gold-=D.gold,e.player.iron-=D.iron,e.player.wood-=D.wood,e.player.essence-=D.essence;let O=null;if(l==="premium"){const u=Math.random()-Math.min(.06,e.player.level*.0015);e.player.level>=22&&u<.025?O="legendary":u<.26?O="epic":O="rare"}const F=T(a,e.player.level+b(0,2),O,null,l==="premium"?1:0);J(e,F,{maxInventory:m,addJournal:i,trackQuest:h,checkAchievements:q}),e.stats.crafted+=1,h("crafts",1),i("🔨",`Forjas ${F.name}.`),v.toast(`Nuevo objeto: ${F.name}`,"gold")}function x(e,a,l){const{toast:v,trackQuest:m,addJournal:o}=l,i=e.player.equipment[a];if(!i){v("No tienes ese hueco equipado","danger");return}if((i.upgrade||0)>=10){v("Ese objeto ya está al máximo","cyan");return}const h=c(i.rarity),q=Math.round(90+i.level*18+i.upgrade*65+h.value*.4),D=Math.max(2,Math.round(3+i.upgrade*1.4+h.affixes)),O=i.upgrade>=6?1+Math.floor(i.upgrade/3):0;if(e.player.gold<q||e.player.iron<D||e.player.essence<O){v("No tienes materiales suficientes","danger");return}e.player.gold-=q,e.player.iron-=D,e.player.essence-=O,i.upgrade+=1,i.score=y(i),e.stats.crafted+=1,m("crafts",1),o("⚒️",`Mejoras ${i.name} a +${i.upgrade}.`)}function E(e,a,l){const{toast:v,addJournal:m}=l,o=_(e,a)||Object.values(e.player.equipment).find(q=>q&&q.id===a);if(!o)return;const i={gold:180,essence:2};if(e.player.gold<i.gold||e.player.essence<i.essence){v("Te faltan recursos para retemplar","danger");return}e.player.gold-=i.gold,e.player.essence-=i.essence;const h=T(o.slot,Math.max(o.level,e.player.level),o.rarity,o.baseName);o.stats=h.stats,o.affixes=h.affixes,o.name=h.name,o.score=y(o),m("🌀",`Retemplas ${o.baseName} y nace ${o.name}.`)}function P(e,a){const{toast:l,trackQuest:v,addJournal:m}=a,o=e.player.inventory.filter(h=>h.rarity==="common");if(!o.length){l("No hay chatarra común que vender","cyan");return}let i=0;o.forEach(h=>{i+=Math.round(h.value*.55)}),e.player.inventory=e.player.inventory.filter(h=>h.rarity!=="common"),e.player.gold+=i,e.stats.earnedGold+=i,v("earnGold",i),m("🧹",`Vendes automáticamente ${o.length} objetos comunes por ${i} de oro.`)}return{acquireItem:J,removeInventoryItem:L,getInventoryItem:_,equipItem:C,unequipItem:V,sellItem:Q,salvageItem:d,refreshMarket:t,buyMarketItem:p,buyResource:A,forgeItem:f,upgradeEquipped:x,rerollItem:E,autoManage:P}}function _a(s){const{JOBS:c,ZONES:b,clone:k,rand:j,pick:g,SLOT_ORDER:T,makeItem:y,clamp:$}=s;function L(d,t,p){const A=p(),f=A.maxHp*(.0033+A.regenPct*.01)*t,x=(.48+d.player.training.discipline*.02+d.player.relics.momentum*.04)*t,E=(.028+d.player.relics.momentum*.005)*t;d.player.hp=$(d.player.hp+f,1,A.maxHp),d.player.energy=$(d.player.energy+x,0,A.maxEnergy),d.player.stamina=$(d.player.stamina+E,0,A.maxStamina)}function _(d,t,p){const{toast:A,addJournal:f}=p,x=c.find(E=>E.id===t);if(x){if(d.timers.job){A("Ya tienes un trabajo en curso","cyan");return}if(d.player.energy<12){A("Necesitas al menos 12 de energía","danger");return}d.player.energy-=12,d.timers.job={id:x.id,name:x.name,endAt:Date.now()+x.duration*1e3,reward:k(x.reward),startedAt:Date.now()},f("🧰",`Comienzas el trabajo: <b>${x.name}</b>.`)}}function J(d,t,p){const{grantRewards:A,toast:f}=p;if(!d.timers.job)return;const x=d.timers.job;d.timers.job=null,A(x.reward,`Trabajo terminado — ${x.name}`),t||f(`Trabajo completado: ${x.name}`,"success")}function C(d,t,p,A){const{isZoneUnlocked:f,toast:x,addJournal:E}=A,P=b.find(a=>a.id===t);if(!P||!f(P))return;if(d.timers.expedition){x("Ya estás en expedición","cyan");return}const e=P.energyCost+Math.floor(p/40);if(d.player.energy<e||d.player.stamina<P.staminaCost){x("No tienes recursos para partir","danger");return}d.player.energy-=e,d.player.stamina-=P.staminaCost,d.timers.expedition={zoneId:t,endAt:Date.now()+p*1e3,durationSec:p,startedAt:Date.now()},E("🧭",`Sales de expedición a <b>${P.name}</b> durante ${p}s.`)}function V(d,t,p){const{grantRewards:A,getDerivedStats:f,trackQuest:x,acquireItem:E,addJournal:P,toast:e}=p;if(!d.timers.expedition)return;const a=d.timers.expedition;d.timers.expedition=null;const l=b.find(o=>o.id===a.zoneId)||b[0],v=1+a.durationSec/90,m={gold:Math.round((90+l.id*50+d.player.level*16)*v*(1+f().goldPct)),xp:Math.round((55+l.id*35+d.player.level*12)*v),iron:j(1,3+l.id),wood:j(1,2+Math.floor(l.id/2)),essence:Math.random()<.45?j(1,2+Math.floor(l.id/2)):0,food:Math.random()<.5?1+Math.floor(l.id/2):0};if(A(m,`Expedición — ${l.name}`),d.stats.expeditions+=1,x("expeditions",1),Math.random()<.55+l.id*.03){const o=y(g(T),d.player.level+l.id,Math.random()<.12?"epic":null);E(o),P("🎒",`Encuentras <span class="rarity-${o.rarity}">${o.name}</span> en la expedición.`)}t||e(`Expedición completada: ${l.name}`,"success")}function Q(d,t,p,A){const{completeJob:f,completeExpedition:x}=A;let E=!1;return d.timers.job&&d.timers.job.endAt<=t&&(f(p),E=!0),d.timers.expedition&&d.timers.expedition.endAt<=t&&(x(p),E=!0),E}return{passiveRegen:L,startJob:_,completeJob:J,startExpedition:C,completeExpedition:V,resolveFinishedTimers:Q}}function Ha(s){const{RANKS:c,ACHIEVEMENTS:b,clamp:k,clone:j,defaultQuests:g,makeDefaultState:T}=s;function y(t,p){const A=t.player.level*14+t.stats.wins*4+t.player.highestDungeonFloor*10+p()*8+t.player.ascension*60;let f=c[0];return c.forEach(x=>{A>=x.min&&(f=x)}),f}function $(t,p,A){const{xpNeeded:f,ensureUnlockedSkills:x,getDerivedStats:E,currentRank:P,addJournal:e,toast:a}=A;if(!p)return;t.player.xp+=p;let l=0;for(;t.player.xp>=f(t.player.level);)t.player.xp-=f(t.player.level),t.player.level+=1,t.player.attributePoints+=4,t.player.skillPoints+=1,l+=1,x(m=>{e("✨",`Has desbloqueado la habilidad <b>${m.name}</b>.`),a(`Habilidad desbloqueada: ${m.name}`,"violet")});const v=E();l>0&&(t.player.hp=v.maxHp,t.player.energy=v.maxEnergy,t.player.stamina=k(t.player.stamina+l,0,v.maxStamina),t.player.title=P().title,e("🌟",`Subes al nivel <b>${t.player.level}</b>. Recibes puntos de atributo y habilidad.`),a(`Nivel ${t.player.level} alcanzado`,"gold"))}function L(t,p,A,f){t.quests.forEach(x=>{x.claimed||x.type!==p||(x.progress+=A,x.progress>=x.target&&(x.progress=x.target,x.completed=!0))}),p==="crafts"&&(t.stats.crafted+=0),f()}function _(t,p,A){const{grantRewards:f,addJournal:x,checkAchievements:E}=A,P=t.quests.find(e=>e.id===p);!P||!P.completed||P.claimed||(P.claimed=!0,f(P.reward,`Misión: ${P.title}`),t.stats.questsCompleted+=1,x("📜",`Misión completada: <b>${P.title}</b>.`),t.quests.every(e=>e.claimed)&&(t.quests=g(t.player.level),x("🪄","Se generan nuevos contratos en el tablón.")),E())}function J(t,p){const{toast:A,addJournal:f}=p,x=140+t.player.level*12;if(t.player.gold<x){A("Oro insuficiente para renovar misiones","danger");return}t.player.gold-=x,t.quests=g(t.player.level),f("📌",`Renuevas el tablón de contratos por ${x} de oro.`)}function C(t,p,A){const f={kills:t.stats.kills,wins:t.stats.wins,questsCompleted:t.stats.questsCompleted,highestDungeonFloor:t.player.highestDungeonFloor,level:t.player.level,legendaryFound:t.stats.legendaryFound,guildTotal:A(),ascension:t.player.ascension};return Math.min(p.target,f[p.type]||0)}function V(t,p){const{grantRewards:A,addJournal:f,toast:x,guildTotal:E}=p;b.forEach(P=>{if(t.claimedAchievements.includes(P.id))return;C(t,P,E)>=P.target&&(t.claimedAchievements.push(P.id),A(P.reward,`Logro: ${P.title}`),f("🏆",`Logro desbloqueado: <b>${P.title}</b>.`),x(`Logro desbloqueado: ${P.title}`,"gold"))})}function Q(t,p,A){const{toast:f,addJournal:x}=A;if(t.player.relicDust<=0){f("No tienes polvo de reliquia","danger");return}p in t.player.relics&&(t.player.relicDust-=1,t.player.relics[p]+=1,x("🗿",`Inviertes una reliquia en ${p}.`))}function d(t,p){const{toast:A,confirmAscend:f,replaceState:x,normalizeState:E,currentRank:P,addJournal:e,checkAchievements:a}=p;if(t.player.level<20&&t.player.highestDungeonFloor<8){A("Necesitas nivel 20 o piso 8 de mazmorra","danger");return}if(!f())return;const l=3+Math.floor(t.player.level/8)+Math.floor(t.player.highestDungeonFloor/4),v=j(t.player.relics),m=t.player.relicDust+l,o=t.player.ascension+1,i=T();i.player.relics=v,i.player.relicDust=m,i.player.ascension=o,i.player.shards=2,i.player.gold=320,x(i),E(),t.player.title=P().title,e("🔱",`Has ascendido. Obtienes ${l} de Polvo de Reliquia.`),a(),A(`Ascensión completada (+${l} reliquias)`,"gold")}return{currentRank:y,gainXp:$,trackQuest:L,claimQuest:_,rerollQuests:J,achievementProgress:C,checkAchievements:V,spendRelic:Q,ascend:d}}(()=>{const{SLOT_ORDER:s,SLOT_NAMES:c,RANKS:b,ZONES:k,JOBS:j,PETS:g,SKILLS:T,ACHIEVEMENTS:y}=window.AetherConfig,{$,clone:L,rand:_,randf:J,pick:C,clamp:V,sum:Q,uid:d,fmt:t,pct:p,softRound:A,localDayKey:f,timeLeft:x,rarityDef:E,sanitizeInlineHtml:P}=window.AetherUtils,{state:e,replaceState:a,makeDefaultState:l,normalizeState:v,makeItem:m,scaleItemStats:o,computeItemScore:i,xpNeeded:h,defaultQuests:q,generateMarket:D,maxInventory:O,guildTotal:F,getPetData:u,getDerivedStats:r,getLootLuck:R,ensureUnlockedSkills:N,saveGame:X}=window.AetherModel,Y=za({SKILLS:T,pick:C,rand:_,randf:J,clamp:V,softRound:A,uid:d}),H=Na({rarityDef:E,rand:_,uid:d,clone:L,generateMarket:D,makeItem:m,computeItemScore:i}),K=_a({JOBS:j,ZONES:k,clone:L,rand:_,pick:C,SLOT_ORDER:s,makeItem:m,clamp:V}),I=Ha({RANKS:b,ACHIEVEMENTS:y,clamp:V,clone:L,defaultQuests:q,makeDefaultState:l});function S(n,M){e.journal.unshift({id:d(),ts:Date.now(),icon:n,text:P(M)}),e.journal=e.journal.slice(0,80)}function B(n,M="cyan"){const z=$("toast-root");if(!z)return;const U={cyan:"from-sky-500/25 to-cyan-300/10 border-cyan-300/25",gold:"from-amber-500/25 to-yellow-300/10 border-amber-300/30",danger:"from-rose-500/25 to-pink-300/10 border-rose-300/25",success:"from-emerald-500/25 to-green-300/10 border-emerald-300/25",violet:"from-violet-500/25 to-fuchsia-300/10 border-violet-300/25"},G=document.createElement("div");G.className=`glass-strong pointer-events-none rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-br ${U[M]||U.cyan} animate-[fadeIn_.2s_ease]`,G.innerHTML=P(n),z.appendChild(G),setTimeout(()=>{G.style.opacity="0",G.style.transform="translateY(-6px)",setTimeout(()=>G.remove(),260)},2800)}function Z(n,M="Recompensa"){n&&(Object.entries(n).forEach(([z,U])=>{z==="xp"?ie(U):z in e.player?e.player[z]+=U:z in e.stats?e.stats[z]+=U:z==="relicDust"&&(e.player.relicDust+=U)}),n.gold&&(e.stats.earnedGold+=n.gold,oe("earnGold",n.gold)),S("🎁",`${M}: ${te(n)}`))}function te(n){return Object.entries(n).map(([M,z])=>{const U={xp:"XP",gold:"oro",shards:"fragmentos",iron:"hierro",wood:"madera",essence:"esencia",food:"comida",potions:"pociones",keys:"llaves",relicDust:"polvo reliquia"}[M]||M;return`+${t(z)} ${U}`}).join(" · ")}function ie(n){return I.gainXp(e,n,{xpNeeded:h,ensureUnlockedSkills:N,getDerivedStats:r,currentRank:le,addJournal:S,toast:B})}function le(){return I.currentRank(e,F)}function Ae(){const n=Date.now(),M=V((n-(e.lastTick||n))/1e3,0,60*60*12);M<=0||(w(M),pt(n,!0),e.lastTick=n)}function w(n){return K.passiveRegen(e,n,r)}function W(){return k.find(n=>n.id===e.player.zoneId)||k[0]}function ae(n){return e.player.level>=n.unlockLevel||e.player.ascension>0&&n.id<=2}function pe(n){const M=k.find(z=>z.id===n);!M||!ae(M)||(e.player.zoneId=M.id)}function xe(n){return Y.enemyArchetypeMods(n)}function de(n,M="normal",z=0){return Y.makeEnemy({zone:n,kind:M,extraScale:z,playerLevel:e.player.level||1,playerAscension:e.player.ascension||0,wins:e.stats&&e.stats.wins?e.stats.wins:0})}function Ke(){return Y.buildPlayerCombatant(e.player,r())}function Te(n,M){return Y.activeBuffValue(n,M)}function je(n,M){return Y.effectiveStat(n,M)}function Ye(n){return Y.skillLevelMult(e.player.skillLevels,n)}function qe(n,M){return Y.choosePlayerSkill(n,M,{equipment:e.player.equipment,skillLevels:e.player.skillLevels})}function Xe(n){return Y.chooseEnemySkill(n)}function et(n,M){return Y.decayStatuses(n,M)}function tt(n,M,z,U=1,G={},ne=[]){return Y.performHit(n,M,z,U,G,ne)}function Ve(n,M,z,U,G){return Y.applySkillEffects(n,M,z,U,G)}function Be(n,M,z,U){const G={damageDone:0,damageTaken:0,crits:0};return Y.actorTurn(n,M,z,{equipment:e.player.equipment,skillLevels:e.player.skillLevels},G,U)}function Oe(n){return Y.tickCooldowns(n)}function ke(n,M={mode:"arena"}){const z=Y.runCombat({enemy:n,playerState:e.player,derivedStats:r(),zoneName:k[n.zoneId]&&k[n.zoneId].name||"Zona desconocida",maxTurns:28}),{player:U,foe:G,log:ne,victory:ve,statsDelta:Se}=z;e.stats.damageDone+=Se.damageDone,e.stats.damageTaken+=Se.damageTaken,e.stats.crits+=Se.crits,e.player.hp=V(U.hp,1,r().maxHp);const ue={gold:0,xp:0,iron:0,wood:0,essence:0,keys:0,potions:0};let be=null;if(ve){const ye=k[G.zoneId],ga=_(30,54)+G.level*12+(G.kind==="elite"?45:G.kind==="boss"?70:0),fa=_(22,38)+G.level*10+(G.kind==="boss"?55:0);ue.gold=Math.round(ga*(1+r().goldPct)),ue.xp=Math.round(fa),ue.iron=_(0,2+ye.id),ue.wood=_(0,1+Math.floor(ye.id/2)),ue.essence=Math.random()<.32+ye.id*.02?_(1,2+Math.floor(ye.id/2)):0,ue.keys=M.mode==="dungeon"&&Math.random()<.13?1:0,ue.potions=Math.random()<.08?1:0;const va=.26+R()*.7+(G.kind==="elite"?.1:0)+(G.kind==="boss"?.16:0)+(M.mode==="dungeon"?.1:0);if(Math.random()<va){const ze=Math.random()-R()*.32-ye.id*.01-(G.kind==="elite"?.015:0)-(G.kind==="boss"?.04:0);let Le=null;(G.kind==="boss"||ye.id>=5)&&ze<.0025?Le="mythic":(G.kind==="elite"||G.kind==="boss"||ye.id>=4)&&ze<.013?Le="legendary":ze<.06?Le="epic":ze<.19&&(Le="rare"),be=m(C(s),G.level,Le),Ie(be)}Z(ue,`Botín de ${G.name}`),e.stats.kills+=1,M.mode==="arena"&&(e.stats.wins+=1),M.mode==="dungeon"&&(e.stats.dungeons+=1),G.kind==="elite"&&(e.stats.elites+=1),G.kind==="boss"&&(e.player.highestDungeonFloor=Math.max(e.player.highestDungeonFloor,M.floor||e.player.highestDungeonFloor)),oe("kills",1),M.mode==="arena"&&oe("wins",1),M.mode==="dungeon"&&oe("dungeons",1),G.kind==="elite"&&oe("elites",1),S("⚔️",`Victoria contra <b>${G.name}</b>. ${te(ue)}${be?` · Botín: <span class="rarity-${be.rarity}">${be.name}</span>`:""}`),B(`Victoria sobre ${G.name}`,"success")}else M.mode==="arena"&&(e.stats.losses+=1),e.player.gold=Math.max(0,e.player.gold-_(10,25)),S("💀",`Has sido derrotado por <b>${G.name}</b>. La multitud te abuchea.`),B(`Derrota contra ${G.name}`,"danger");e.player.title=le().title,fe(),e.combatHistory.unshift({id:d(),ts:Date.now(),title:`${ve?"Victoria":"Derrota"} vs ${G.name}`,result:ve?"victory":"defeat",enemy:G.name,zone:k[G.zoneId].name,log:ne,rewards:ue,drop:be}),e.combatHistory=e.combatHistory.slice(0,15),e.ui.modal={type:"combat",title:`${ve?"Victoria":"Derrota"} — ${G.name}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Resultado</div>
              <div class="text-xl font-black ${ve?"text-emerald-300":"text-rose-300"}">${ve?"Has ganado":"Has perdido"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${te(ue)}${be?` · Botín: <span class="rarity-${be.rarity}">${be.name}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado final</div>
              <div class="text-lg font-black text-white">${t(e.player.hp)} HP restantes</div>
              <div class="text-sm text-slate-300/75 mt-1">${G.name} ${ve?"cayó derrotado":"sobrevivió al duelo"}.</div>
            </div>
          </div>
          <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-3">Registro de combate</div>
            <div class="space-y-2 text-sm text-slate-100/90">${ne.map(ye=>`<div class="leading-relaxed">${ye}</div>`).join("")}</div>
          </div>
        </div>
      `}}function Ie(n){return H.acquireItem(e,n,{maxInventory:O(),addJournal:S,trackQuest:oe,checkAchievements:fe})}function ee(n){return H.removeInventoryItem(e,n)}function ce(n){return H.getInventoryItem(e,n)}function Pe(n){return H.equipItem(e,n,{addJournal:S})}function $e(n){return H.unequipItem(e,n,{maxInventory:O(),addJournal:S,toast:B})}function Ot(n){return H.sellItem(e,n,{addJournal:S,trackQuest:oe})}function zt(n){return H.salvageItem(e,n,{addJournal:S,trackQuest:oe})}function Nt(){const n=r();if(e.player.potions<=0){B("No te quedan pociones","danger");return}if(e.player.hp>=n.maxHp){B("Ya estás con toda la vida","cyan");return}e.player.potions-=1;const M=Math.round(n.maxHp*.42);e.player.hp=V(e.player.hp+M,0,n.maxHp),S("🧪",`Bebes una poción y recuperas ${M} HP.`),B(`+${M} HP`,"success")}function _t(){const n=f();if(e.streak.lastClaimDay===n){B("La recompensa diaria ya fue reclamada hoy","cyan");return}const M=f(Date.now()-864e5);e.streak.days=e.streak.lastClaimDay===M?Math.min(7,e.streak.days+1):1,e.streak.lastClaimDay=n;const z=e.streak.days,U={gold:180+z*70,xp:60+z*30,potions:z>=3?1:0,keys:z>=5?1:0,shards:z===7?3:1,essence:1+Math.floor(z/2)};Z(U,`Recompensa diaria (día ${z})`),B(`Recompensa diaria reclamada — racha ${z}`,"gold")}function Ht(n){const M={strength:["Fuerza",1],agility:["Agilidad",1],endurance:["Resistencia",1],discipline:["Disciplina",1]};if(!M[n])return;if(e.player.attributePoints<=0){B("No tienes puntos de atributo","danger");return}e.player.attributePoints-=1,e.player.training[n]+=1;const z=r();e.player.hp=Math.min(e.player.hp,z.maxHp),S("🏋️",`Aumentas ${M[n][0]}.`)}function Ft(n){const M=T[n];if(!(!M||!e.player.unlockedSkills.includes(n))){if(e.player.skillPoints<=0){B("No tienes puntos de habilidad","danger");return}if((e.player.skillLevels[n]||1)>=5){B("Esa habilidad ya está al máximo","cyan");return}e.player.skillLevels[n]+=1,e.player.skillPoints-=1,S("📘",`Mejoras ${M.name} a nivel ${e.player.skillLevels[n]}.`)}}function Gt(n){if(!e.player.unlockedSkills.includes(n))return;const M=e.player.activeSkills,z=M.indexOf(n);if(z>=0){if(M.length<=1){B("Debes dejar al menos una habilidad activa","danger");return}M.splice(z,1)}else{if(M.length>=4){B("Máximo de 4 habilidades activas","cyan");return}M.push(n)}}function Jt(n=!0){return H.refreshMarket(e,n,{toast:B,addJournal:S})}function Zt(n){return H.buyMarketItem(e,n,{maxInventory:O(),toast:B,addJournal:S,trackQuest:oe,checkAchievements:fe})}function Wt(n){return H.buyResource(e,n,{toast:B,grantRewards:Z})}function Qt(n,M="normal"){return H.forgeItem(e,n,M,{maxInventory:O(),toast:B,addJournal:S,trackQuest:oe,checkAchievements:fe})}function Ut(n){return H.upgradeEquipped(e,n,{toast:B,trackQuest:oe,addJournal:S})}function Kt(n){return H.rerollItem(e,n,{toast:B,addJournal:S})}function Yt(n){return K.startJob(e,n,{toast:B,addJournal:S})}function dt(n=!1){return K.completeJob(e,n,{grantRewards:Z,toast:B})}function Xt(n,M){return K.startExpedition(e,n,M,{isZoneUnlocked:ae,toast:B,addJournal:S})}function ut(n=!1){return K.completeExpedition(e,n,{grantRewards:Z,getDerivedStats:r,trackQuest:oe,acquireItem:Ie,addJournal:S,toast:B})}function pt(n=Date.now(),M=!1){return K.resolveFinishedTimers(e,n,M,{completeJob:dt,completeExpedition:ut})}function ea(n="normal"){const M=W(),z=M.staminaCost+(n==="elite"?1:0);if(e.player.stamina<z||e.player.energy<M.energyCost){B("No tienes energía o aguante suficiente","danger");return}e.player.stamina-=z,e.player.energy-=M.energyCost;const U=de(M,n);ke(U,{mode:"arena"})}function ta(n=3){const M=[];for(let z=0;z<n;z++){const U=W();if(e.player.stamina<U.staminaCost||e.player.energy<U.energyCost||e.player.hp<r().maxHp*.2)break;e.player.stamina-=U.staminaCost,e.player.energy-=U.energyCost;const G=de(U,"normal",z);ke(G,{mode:"arena"});const ne=e.combatHistory[0];if(M.push(`${ne.result==="victory"?"✅":"❌"} ${ne.title}`),ne.result!=="victory")break}M.length&&(e.ui.modal={type:"summary",title:`Racha de arena x${M.length}`,content:`<div class="glass rounded-2xl p-4 text-sm text-slate-100/90 space-y-2">${M.map(z=>`<div>${z}</div>`).join("")}</div>`})}function aa(){if(e.player.keys<1){B("Necesitas una llave de mazmorra","danger");return}if(e.player.stamina<2){B("Necesitas al menos 2 de aguante","danger");return}e.player.keys-=1,e.player.stamina-=2;const n=e.player.highestDungeonFloor,M=k[Math.min(k.length-1,Math.floor((n-1)/2))],z=[];let U=!0;if([de(M,"normal",n*.8),de(M,"normal",n*.85),de(M,"elite",n*.9),de(M,"boss",n)].forEach((ne,ve)=>{if(!U)return;ke(ne,{mode:"dungeon",floor:n});const Se=e.combatHistory[0];z.push(`${Se.result==="victory"?"✅":"❌"} ${ve<3?"Encuentro":"Jefe"}: ${ne.name}`),Se.result!=="victory"&&(U=!1)}),U){e.player.highestDungeonFloor+=1;const ne={gold:120+n*55,xp:90+n*42,essence:2+Math.floor(n/3),shards:n%3===0?2:1};Z(ne,`Cofre del piso ${n}`),S("🏰",`Limpias el piso ${n} y avanzas al piso ${n+1}.`),B(`Piso ${n} superado`,"gold")}else S("🕸️",`No logras superar el piso ${n}.`);e.ui.modal={type:"summary",title:`Mazmorra — Piso ${n}`,content:`
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Estado</div>
              <div class="text-xl font-black ${U?"text-emerald-300":"text-rose-300"}">${U?"Incursión limpia":"Incursión fallida"}</div>
              <div class="text-sm text-slate-300/75 mt-1">${U?"El botín del jefe ha sido asegurado.":"Tu grupo de uno no pudo seguir avanzando."}</div>
            </div>
            <div class="glass rounded-2xl p-4">
              <div class="text-xs uppercase tracking-[.18em] text-slate-300/65 mb-1">Ruta</div>
              <div class="space-y-2 text-sm">${z.map(ne=>`<div>${ne}</div>`).join("")}</div>
            </div>
          </div>
        </div>
      `}}function sa(){if(e.player.pet){B("Ya tienes una mascota activa","cyan");return}if(e.player.shards<5||e.player.essence<8){B("Necesitas 5 fragmentos y 8 de esencia","danger");return}e.player.shards-=5,e.player.essence-=8;const n=C(g);e.player.pet=n.id,e.player.petLevel=1,e.player.petXp=0,S("🐾",`Incubas a <b>${n.name}</b>. ${n.desc}`),B(`Mascota obtenida: ${n.name}`,"violet")}function na(){if(!e.player.pet){B("Aún no tienes mascota","danger");return}if(e.player.food<2||e.player.essence<1){B("Necesitas 2 de comida y 1 de esencia","danger");return}e.player.food-=2,e.player.essence-=1,e.player.petXp+=1,e.player.petXp>=3+e.player.petLevel&&(e.player.petXp=0,e.player.petLevel+=1,S("🐾",`Tu mascota alcanza nivel ${e.player.petLevel}.`),B(`Mascota nivel ${e.player.petLevel}`,"success"))}function ra(){if(!e.player.pet)return;const n=u();e.player.pet=null,e.player.petLevel=0,e.player.petXp=0,S("🪽",`Liberas a ${n?n.name:"tu mascota"} y recuperas tu calma.`)}function ia(n){return I.spendRelic(e,n,{toast:B,addJournal:S})}function oa(){return I.ascend(e,{toast:B,confirmAscend:()=>window.confirm("Ascender reinicia nivel, equipo, inventario y recursos comunes, pero te da Polvo de Reliquia. ¿Continuar?"),replaceState:a,normalizeState:v,currentRank:le,addJournal:S,checkAchievements:fe})}function oe(n,M){return I.trackQuest(e,n,M,fe)}function la(n){return I.claimQuest(e,n,{grantRewards:Z,addJournal:S,checkAchievements:fe})}function ca(){return I.rerollQuests(e,{toast:B,addJournal:S})}function da(n){return I.achievementProgress(e,n,F)}function fe(){return I.checkAchievements(e,{grantRewards:Z,addJournal:S,toast:B,guildTotal:F})}function ua(n){const M=e.player.guild;if(!(n in M))return;const z=M[n]+1,U=180+z*110+F()*35,G=Math.max(1,Math.floor(z/2));if(e.player.gold<U||e.player.essence<G){B("No tienes recursos suficientes","danger");return}e.player.gold-=U,e.player.essence-=G,M[n]+=1,S("🏛️",`Mejoras ${n} del gremio al nivel ${M[n]}.`),fe()}function pa(){return H.autoManage(e,{toast:B,trackQuest:oe,addJournal:S})}function ma(){const n=r();if(n.maxHp-e.player.hp<=0){B("Ya tienes la vida al máximo","cyan");return}let z=0;for(;e.player.hp<n.maxHp&&e.player.potions>0&&z<10;)e.player.potions-=1,e.player.hp=V(e.player.hp+n.maxHp*.42,0,n.maxHp),z++;S("🩹",`Usas ${z} poción(es) para recuperarte.`)}window.AetherSystems={addJournal:S,toast:B,grantRewards:Z,summarizeReward:te,gainXp:ie,currentRank:le,offlineCatchup:Ae,passiveRegen:w,zoneForPlayer:W,isZoneUnlocked:ae,setZone:pe,enemyArchetypeMods:xe,makeEnemy:de,buildPlayerCombatant:Ke,activeBuffValue:Te,effectiveStat:je,skillLevelMult:Ye,choosePlayerSkill:qe,chooseEnemySkill:Xe,decayStatuses:et,performHit:tt,applySkillEffects:Ve,actorTurn:Be,tickCooldowns:Oe,runCombat:ke,acquireItem:Ie,removeInventoryItem:ee,getInventoryItem:ce,equipItem:Pe,unequipItem:$e,sellItem:Ot,salvageItem:zt,usePotion:Nt,claimDaily:_t,trainAttribute:Ht,upgradeSkill:Ft,toggleActiveSkill:Gt,refreshMarket:Jt,buyMarketItem:Zt,buyResource:Wt,forgeItem:Qt,upgradeEquipped:Ut,rerollItem:Kt,startJob:Yt,completeJob:dt,startExpedition:Xt,completeExpedition:ut,resolveFinishedTimers:pt,fightArena:ea,arenaBlitz:ta,runDungeon:aa,hatchPet:sa,feedPet:na,releasePet:ra,spendRelic:ia,ascend:oa,trackQuest:oe,claimQuest:la,rerollQuests:ca,achievementProgress:da,checkAchievements:fe,upgradeGuild:ua,autoManage:pa,autoHeal:ma}})();const Fa={setZone:["hud","content"],fightArena:["hud","content"],arenaBlitz:["hud","content","modal"],runDungeon:["hud","content","modal"],startExpedition:["hud","content"],startJob:["hud","content"],claimQuest:["hud","content"],rerollQuests:["hud","content"],usePotion:["hud","content"],autoHeal:["hud","content"],claimDaily:["hud","content"],buyMarketItem:["hud","content"],buyResource:["hud","content"],equipItem:["hud","content"],unequipItem:["hud","content"],sellItem:["hud","content"],salvageItem:["hud","content"],forgeItem:["hud","content"],upgradeEquipped:["hud","content"],rerollItem:["hud","content"],upgradeGuild:["hud","content"],trainAttribute:["hud","content"],upgradeSkill:["hud","content"],toggleActiveSkill:["hud","content"],hatchPet:["hud","content"],feedPet:["hud","content"],releasePet:["hud","content"],spendRelic:["hud","content"],ascend:["hud","content"],refreshMarket:["hud","content"],autoManage:["hud","content"]};function Ga(s,c){const{systems:b,mutate:k,afterAction:j}=c;return Object.entries(Fa).forEach(([g,T])=>{s[g]=(...y)=>{let $;return k(`systems/${g}`,()=>{$=b[g](...y)},{source:"systems"}),j(T),$}}),s}const mt={home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5.25 9.75V21h13.5V9.75"/>',user:'<path d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M4.5 20.25a7.5 7.5 0 0 1 15 0"/>',backpack:'<path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M6.75 7.5h10.5A2.25 2.25 0 0 1 19.5 9.75v9A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75v-9A2.25 2.25 0 0 1 6.75 7.5Z"/><path d="M9 12.75h6"/>',swords:'<path d="m4 20 7-7"/><path d="m13 11 7-7"/><path d="M14.5 4.5 19.5 9.5"/><path d="m4.5 14.5 5 5"/><path d="m9 9 6 6"/>',compass:'<circle cx="12" cy="12" r="8.25"/><path d="m14.75 9.25-1.65 4.85-4.85 1.65 1.65-4.85 4.85-1.65Z"/>',castle:'<path d="M5.25 21V9l3 1.5V6l3 1.5L15 6v4.5L18 9v12"/><path d="M3.75 21h16.5"/><path d="M9.75 21v-4.5h4.5V21"/>',cart:'<path d="M3.75 4.5h1.5l1.8 8.1a1.5 1.5 0 0 0 1.47 1.17h7.98a1.5 1.5 0 0 0 1.47-1.17L19.5 7.5H6.3"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17.25" cy="19.5" r="1.5"/>',hammer:'<path d="m14.25 5.25 4.5 4.5"/><path d="m6.75 12.75 7.5-7.5 3 3-7.5 7.5"/><path d="M5.25 14.25 3.75 20.25 9.75 18.75"/>',shield:'<path d="M12 3.75 5.25 6v5.25c0 4.29 2.7 8.11 6.75 9.5 4.05-1.39 6.75-5.21 6.75-9.5V6L12 3.75Z"/>',book:'<path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5v16.5H6.75A2.25 2.25 0 0 0 4.5 21V5.25Z"/><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 1 6.75 16.5h10.5"/>',briefcase:'<path d="M9 6V4.875A1.875 1.875 0 0 1 10.875 3h2.25A1.875 1.875 0 0 1 15 4.875V6"/><rect x="3.75" y="6" width="16.5" height="12.75" rx="2.25"/><path d="M3.75 11.25h16.5"/>',paw:'<circle cx="7" cy="9" r="1.25"/><circle cx="11" cy="6.5" r="1.25"/><circle cx="15" cy="6.5" r="1.25"/><circle cx="17" cy="10" r="1.25"/><path d="M12 18c-2.7 0-4.5-1.44-4.5-3.4 0-1.75 1.2-3.35 3.06-3.35.96 0 1.62.36 1.94.72.32-.36.98-.72 1.94-.72 1.86 0 3.06 1.6 3.06 3.35C16.5 16.56 14.7 18 12 18Z"/>',trophy:'<path d="M8.25 4.5h7.5v2.25A3.75 3.75 0 0 1 12 10.5 3.75 3.75 0 0 1 8.25 6.75V4.5Z"/><path d="M6 4.5h2.25v2.25A3 3 0 0 1 5.25 9.75H4.5A1.5 1.5 0 0 1 3 8.25v-.75A3 3 0 0 1 6 4.5Zm12 0h-2.25v2.25A3 3 0 0 0 18.75 9.75h.75A1.5 1.5 0 0 0 21 8.25v-.75A3 3 0 0 0 18 4.5Z"/><path d="M12 10.5v4.5"/><path d="M9 21h6"/><path d="M10.5 15h3v6h-3Z"/>',scroll:'<path d="M8.25 4.5h8.25A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5H8.25A3.75 3.75 0 0 1 4.5 15.75V8.25A3.75 3.75 0 0 1 8.25 4.5Z"/><path d="M8.25 4.5A2.25 2.25 0 0 0 6 6.75v9A2.25 2.25 0 0 1 3.75 18H6"/><path d="M9.75 9h4.5"/><path d="M9.75 12.75h4.5"/>',menu:'<path d="M4.5 7.5h15"/><path d="M4.5 12h15"/><path d="M4.5 16.5h15"/>',flask:'<path d="M10.5 3.75h3"/><path d="M10.5 3.75v5.1l-4.95 7.74A2.25 2.25 0 0 0 7.44 20.25h9.12a2.25 2.25 0 0 0 1.89-3.66L13.5 8.85v-5.1"/><path d="M8.25 14.25h7.5"/>',bandage:'<path d="m8.25 8.25 7.5 7.5"/><path d="m15.75 8.25-7.5 7.5"/><rect x="4.5" y="7.5" width="15" height="9" rx="2.25" transform="rotate(-45 12 12)"/>',gift:'<path d="M12 21V9"/><path d="M4.5 12h15"/><rect x="4.5" y="7.5" width="15" height="12.75" rx="2.25"/><path d="M12 7.5H8.25A2.25 2.25 0 1 1 10.5 5.25c0 .83-.43 1.56-1.08 1.97"/><path d="M12 7.5h3.75A2.25 2.25 0 1 0 13.5 5.25c0 .83.43 1.56 1.08 1.97"/>',broom:'<path d="M14.25 4.5 19.5 9.75"/><path d="M11.25 7.5 4.5 14.25"/><path d="M4.5 14.25 9.75 19.5"/><path d="m9.75 19.5 2.25-2.25"/>',crown:'<path d="M4.5 18 6.75 7.5 12 12l5.25-4.5L19.5 18Z"/><path d="M4.5 18h15"/>',flame:'<path d="M12 21c3.31 0 6-2.46 6-5.5 0-2.17-1.13-3.7-2.8-5.25-.9-.84-1.62-1.77-2.02-2.9-.38 1.3-1.25 2.45-2.42 3.55-1.75 1.64-4.76 3.45-4.76 6.6C6 18.54 8.69 21 12 21Z"/>',key:'<circle cx="8.25" cy="12" r="3.75"/><path d="M12 12h8.25"/><path d="M16.5 12v2.25"/><path d="M18.75 12v1.5"/>',spark:'<path d="M12 3.75 13.94 9.06 19.25 11 13.94 12.94 12 18.25 10.06 12.94 4.75 11 10.06 9.06 12 3.75Z"/>',bolt:'<path d="M13.5 3.75 7.5 13.5h4.5l-1.5 6.75 6-9.75h-4.5L13.5 3.75Z"/>',dumbbell:'<path d="M4.5 9v6"/><path d="M7.5 7.5v9"/><path d="M16.5 7.5v9"/><path d="M19.5 9v6"/><path d="M7.5 12h9"/>',check:'<circle cx="12" cy="12" r="8.25"/><path d="m8.75 12.25 2.25 2.25 4.25-4.5"/>',xcircle:'<circle cx="12" cy="12" r="8.25"/><path d="m9.75 9.75 4.5 4.5"/><path d="m14.25 9.75-4.5 4.5"/>',skull:'<path d="M12 3.75c-4.14 0-7.5 2.86-7.5 6.75 0 2.63 1.54 4.92 3.82 6.15V19.5h1.93v-1.5h3.5v1.5h1.93v-2.85c2.28-1.23 3.82-3.52 3.82-6.15 0-3.89-3.36-6.75-7.5-6.75Z"/><circle cx="9" cy="11.25" r="1"/><circle cx="15" cy="11.25" r="1"/><path d="M10.5 14.5h3"/>',info:'<circle cx="12" cy="12" r="8.25"/><path d="M12 10.5v5.25"/><path d="M12 7.5h.01"/>',wind:'<path d="M4.5 10.5h8.25a2.25 2.25 0 1 0-2.25-2.25"/><path d="M3.75 15h12a2.25 2.25 0 1 1-2.25 2.25"/><path d="M4.5 7.5h4.5"/>',droplet:'<path d="M12 3.75s5.25 5.79 5.25 9A5.25 5.25 0 1 1 6.75 12.75c0-3.21 5.25-9 5.25-9Z"/>',box:'<path d="m4.5 7.5 7.5-3 7.5 3-7.5 3-7.5-3Z"/><path d="M4.5 7.5v9l7.5 3 7.5-3v-9"/><path d="M12 10.5v9"/>',coins:'<circle cx="9" cy="12" r="3.75"/><path d="M12.75 9.75A3.75 3.75 0 1 1 16.5 16.5"/>',recycle:'<path d="m9 4.5 2.25 2.25L9 9"/><path d="M11.25 6.75H8.1A2.85 2.85 0 0 0 5.25 9.6v.15"/><path d="m15 19.5-2.25-2.25L15 15"/><path d="M12.75 17.25h3.15a2.85 2.85 0 0 0 2.85-2.85v-.15"/><path d="m18 9-3 0"/><path d="M18 9a2.85 2.85 0 0 0-2.85-2.85H15"/>',bag:'<path d="M7.5 9V7.5a4.5 4.5 0 0 1 9 0V9"/><path d="M5.25 9h13.5l-.9 9.45A2.25 2.25 0 0 1 15.61 20.5H8.39a2.25 2.25 0 0 1-2.24-2.05L5.25 9Z"/>',rotate:'<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4.5H15"/>',feather:'<path d="M19.5 4.5c-6 0-10.5 4.5-10.5 10.5v4.5"/><path d="M13.5 10.5 9 15"/><path d="M15.75 8.25 9 15"/>',gem:'<path d="m7.5 4.5-3 4.5 7.5 10.5L19.5 9l-3-4.5Z"/><path d="M9 4.5 12 9l3-4.5"/><path d="M4.5 9h15"/>',pin:'<path d="M9 4.5h6l-1.5 4.5 2.25 2.25v.75H8.25v-.75L10.5 9 9 4.5Z"/><path d="M12 12v7.5"/>'},Ja={"⚔️":"swords","⚔":"swords","👑":"crown","🔥":"flame","🌪️":"spark","🧭":"compass","🎒":"backpack","🏋️":"dumbbell","🧪":"flask","🩹":"bandage","🎁":"gift","🧹":"broom","🛒":"cart","⚒️":"hammer","⚒":"hammer","🗝️":"key","🗝":"key","✨":"spark","🐾":"paw","📋":"scroll","📚":"book","💼":"briefcase","🏆":"trophy","📜":"scroll","🛡️":"shield","🛡":"shield","👤":"user","◈":"home","☰":"menu","⚡":"bolt","💪":"dumbbell","✅":"check","❌":"xcircle","☠️":"skull","💨":"wind","🩸":"droplet","🌟":"spark","💀":"skull","📦":"box","💰":"coins","♻️":"recycle","♻":"recycle","📘":"book","🛍️":"bag","🛍":"bag","🔨":"hammer","🌀":"rotate","🧰":"briefcase","🏰":"castle","🪽":"feather","🪶":"feather","🗿":"gem","🔱":"spark","📌":"pin","🏛️":"castle","🏛":"castle","🏟️":"castle","🏟":"castle","🍖":"box"};function Me(s,c="h-5 w-5"){const b=mt[s]||mt.spark;return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="${c}" aria-hidden="true">${b}</svg>`}function Za(s,c,b={}){const{iconClass:k="h-4 w-4",wrapClass:j="inline-flex items-center gap-2",textClass:g=""}=b;return`<span class="${j}">${Me(s,k)}<span class="${g}">${c}</span></span>`}function ge(s=""){let c=String(s);return Object.entries(Ja).forEach(([b,k])=>{c=c.split(b).join(Me(k,"h-4 w-4 inline-block align-[-0.2em]"))}),c}function bt(s=""){return String(s).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function Wa(s=""){return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ze(s=""){const c=bt(s);return c?`data-tooltip="${Wa(c)}"`:""}function st(s=""){const c=Ze(s);return c?`<span tabindex="0" class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-200/80 cursor-help" ${c}>${Me("info","h-3.5 w-3.5")}</span>`:""}const{SLOT_ORDER:Qa,SLOT_NAMES:Ua,VIEWS:pn,VIEW_META:we,VIEW_GROUPS:yt,MOBILE_PRIMARY_VIEWS:Ka,MOBILE_OVERFLOW_VIEWS:mn,ZONES:Ya,JOBS:Xa,PETS:es,SKILLS:ts,ACHIEVEMENTS:as}=window.AetherConfig,{fmt:ss,pct:ns,htmlStat:rs,progressBar:is,timeLeft:os,rarityName:ls,rarityBadge:cs,translateFilter:ds,statLabel:us,statTooltip:ps}=window.AetherUtils,{state:nt,maxInventory:ms,getPetData:gs,getDerivedStats:fs,scaleItemStats:vs,xpNeeded:gn,guildTotal:bs,getStoreMeta:ys}=window.AetherModel,{currentRank:hs,zoneForPlayer:xs,isZoneUnlocked:$s,summarizeReward:ks,achievementProgress:Ss}=window.AetherSystems;function ht(){return we[nt.currentView]||we.resumen}function ws(s,c=""){return`<span class="status-chip ${c}">${ge(s)}</span>`}function Ms(s,c,b="",k=""){return`
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div class="section-eyebrow">${s}</div>
          <div class="mt-1 flex items-center gap-2"><div class="section-title font-display">${c}</div>${st(b||c)}</div>
          ${b?`<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300/76">${ge(b)}</p>`:""}
        </div>
        ${k?`<div class="shrink-0">${ge(k)}</div>`:""}
      </div>
    `}function Es(s,c,b="",k=""){return`
      <div class="surface-strong rounded-2xl p-4 ${b}" ${Ze(k||c)}>
        <div class="mb-2 flex items-center gap-2 font-bold font-display text-white">${ge(s)}${st(k||c)}</div>
        <p class="text-sm text-slate-300/78 leading-relaxed">${ge(c)}</p>
      </div>
    `}function As(s,c,b,k=""){return`<button class="btn ${c}" onclick="${b}" ${Ze(k||bt(s))}>${ge(s)}</button>`}function js(s){return`
      <div class="mobile-cta-bar md:hidden">
        <div class="glass-strong rounded-[1.6rem] p-3 grid grid-cols-2 gap-2">
          ${s.join("")}
        </div>
      </div>
    `}function Is(s,c="",b=""){const k=we[s]||ht(),j=yt.find(T=>T.views.includes(s)),g=j?j.views:[s];return`
      <div class="glass rounded-3xl p-5 sm:p-6">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/[.08] ring text-cyan-200">${Me(k.icon,"h-4 w-4")}</span>
              ${j?j.title:"Vista individual"}
            </div>
            <div class="flex items-center gap-2"><h2 class="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">${k.label}</h2>${st(k.desc)}</div>
            <p class="text-sm sm:text-base text-slate-300/78 mt-2 max-w-3xl">${ge(k.desc)}</p>
            ${b?`<div class="hero-actions mt-4 max-w-2xl">${b}</div>`:""}
          </div>
          ${c?`<div class="glass rounded-2xl px-4 py-3 text-sm text-slate-200/90 shrink-0">${ge(c)}</div>`:""}
        </div>
        ${g.length>1?`
          <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55 mb-3">Navegación relacionada</div>
            <div class="view-links">
              ${g.map(T=>`
                <button class="view-chip ${nt.currentView===T?"active":""}" onclick="game.setView('${T}')">
                  ${Me(we[T].icon,"h-4 w-4")}
                  <span>${we[T].label}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}const xt={SLOT_ORDER:Qa,SLOT_NAMES:Ua,VIEW_META:we,VIEW_GROUPS:yt,MOBILE_PRIMARY_VIEWS:Ka,ZONES:Ya,JOBS:Xa,PETS:es,SKILLS:ts,ACHIEVEMENTS:as,fmt:ss,pct:ns,htmlStat:rs,progressBar:is,timeLeft:os,rarityName:ls,rarityBadge:cs,translateFilter:ds,statLabel:us,statTooltip:ps,state:nt,maxInventory:ms,getPetData:gs,getDerivedStats:fs,scaleItemStats:vs,guildTotal:bs,getStoreMeta:ys,currentRank:hs,zoneForPlayer:xs,isZoneUnlocked:$s,summarizeReward:ks,achievementProgress:Ss,icon:Me,withIcon:Za,replaceEmojiIcons:ge,tooltipAttr:Ze,activeMeta:ht,statusChip:ws,sectionHeader:Ms,infoCard:Es,actionButton:As,actionBar:js,pageLead:Is},{VIEW_GROUPS:$t,MOBILE_PRIMARY_VIEWS:kt,VIEW_META:_e,state:re,fmt:Ce,htmlStat:Ne,progressBar:at,getDerivedStats:Ps,currentRank:Ls,activeMeta:Cs,getStoreMeta:Rs,maxInventory:Ds,icon:Fe,withIcon:gt,tooltipAttr:Ge}=xt;function Ts(){const s=Ps(),c=Ls(),b=Cs(),k=Rs(),j=k.isSaving?"Guardando...":k.isDirty?"Cambios pendientes":k.lastSaveAt?`Guardado ${new Date(k.lastSaveAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Sin guardado",g=k.isSaving?"warning":k.isDirty?"danger":"success";return`
      <div class="glass-strong rounded-[2rem] p-4 sm:p-5">
        <div class="grid xl:grid-cols-[1.1fr,.9fr] gap-4 sm:gap-5">
          <div class="space-y-4 min-w-0">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div class="min-w-0">
                <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.24em] text-cyan-200/75 mb-2">
                  <span class="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.7)]"></span>
                  Aether Arena · ${b.label}
                </div>
                <h1 class="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">${re.player.name}</h1>
                <p class="text-slate-300/82 mt-2 text-sm sm:text-base">${re.player.title} · <b>${c.title}</b></p>
                <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span class="status-chip ${g}">${j}</span>
                  <span class="status-chip">Nivel ${re.player.level}</span>
                  <span class="status-chip">Zona ${b.label}</span>
                </div>
              </div>
              <div class="stat-pill rounded-2xl px-3 py-3 shrink-0 min-w-[120px]">
                <div class="text-xs text-slate-300/65">Recursos listos</div>
                <div class="text-base font-black text-emerald-300 leading-tight">${Ce(re.player.energy)}⚡ · ${Ce(re.player.stamina)}💪</div>
              </div>
            </div>

            <div class="space-y-3">
              ${at(re.player.hp,s.maxHp,"bg-gradient-to-r from-rose-500 via-pink-400 to-orange-300 shadow-[0_0_18px_rgba(244,63,94,.35)]","Vida","Salud actual sobre tu vida máxima.")}
              ${at(re.player.energy,s.maxEnergy,"bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_18px_rgba(34,211,238,.35)]","Energía","Recurso principal para varias acciones activas.")}
              ${at(re.player.stamina,s.maxStamina,"bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 shadow-[0_0_18px_rgba(74,222,128,.32)]","Aguante","Marca cuántas actividades físicas puedes sostener.")}
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            ${Ne("Oro",Ce(re.player.gold),"","Moneda principal para comprar, forjar y mejorar.")}
            ${Ne("Pociones",Ce(re.player.potions),"","Curación rápida para sostener el ciclo activo.")}
            ${Ne("Ataque",Ce(s.attack),"","Daño base de tus golpes y habilidades ofensivas.")}
            ${Ne("Mochila",`${re.player.inventory.length}/${Ds()}`,"","Capacidad usada frente al máximo disponible.")}
          </div>
        </div>
      </div>
    `}function St(s,c=!1){const b=_e[s],k=re.currentView===s;return c?`
        <button class="mobile-nav-btn ${k?"active":""}" onclick="game.setView('${s}')" aria-label="Ir a ${b.label}" ${Ge(b.desc)}>
          <span class="nav-icon">${Fe(b.icon)}</span>
          <span class="nav-label">${b.label}</span>
        </button>
      `:`
      <button class="nav-link ${k?"active":""}" onclick="game.setView('${s}')" ${Ge(b.desc)}>
        <span class="nav-icon">${Fe(b.icon)}</span>
        <span class="min-w-0">
          <span class="block font-bold leading-tight">${b.label}</span>
        </span>
      </button>
    `}function qs(){return`
      <div class="glass rounded-3xl p-4 lg:p-5 sticky top-4 space-y-5">
        <div>
          <div class="text-xs uppercase tracking-[.2em] text-slate-300/55 mb-1">Navegación</div>
          <div class="text-2xl font-display font-extrabold">Vistas</div>
          <p class="text-sm text-slate-300/74 mt-2">Cada pantalla muestra una tarea principal y deja el resto como apoyo.</p>
        </div>

        <div class="space-y-4">
          ${$t.map(s=>`
            <div>
              <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45 mb-2">${s.title}</div>
              <div class="grid gap-2">
                ${s.views.map(c=>St(c)).join("")}
              </div>
            </div>
          `).join("")}
        </div>

        <div class="space-y-2">
          <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/45">Acciones rápidas</div>
          <div class="grid grid-cols-2 gap-2">
            <button class="btn btn-success !py-3" onclick="game.usePotion()" ${Ge("Consume una poción para recuperar salud y seguir combatiendo.")}>${gt("flask","Poción")}</button>
            <button class="btn btn-primary !py-3" onclick="game.autoManage()" ${Ge("Vende o recicla excedentes para despejar la mochila.")}>${gt("broom","Limpiar")}</button>
          </div>
        </div>
      </div>
    `}function Vs(){return`
      <nav class="mobile-nav glass-strong md:hidden">
        <div class="mobile-nav-grid">
          ${kt.map(s=>St(s,!0)).join("")}
          <button class="mobile-nav-btn ${re.ui.moreMenuOpen?"active":""}" onclick="game.toggleMoreMenu()" aria-label="Abrir más vistas">
            <span class="nav-icon">${Fe("menu")}</span>
            <span class="nav-label">Más</span>
          </button>
        </div>
      </nav>
    `}function Bs(){return re.ui.moreMenuOpen?`
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
            ${$t.map(s=>`
              <section class="mobile-sheet-group">
                <div class="mobile-sheet-title">${s.title}</div>
                <div class="grid grid-cols-1 gap-2">
                  ${s.views.filter(c=>!kt.includes(c)).map(c=>`
                    <button class="nav-link ${re.currentView===c?"active":""}" onclick="game.setView('${c}')">
                      <span class="nav-icon">${Fe(_e[c].icon)}</span>
                      <span class="min-w-0">
                        <span class="block font-bold leading-tight">${_e[c].label}</span>
                        <span class="block text-[11px] text-slate-300/62 leading-tight mt-1">${_e[c].short}</span>
                      </span>
                    </button>
                  `).join("")||'<div class="text-sm text-slate-300/55 px-2 py-1">Ya visible en la barra inferior.</div>'}
                </div>
              </section>
            `).join("")}
          </div>
        </div>
      </div>
    `:""}const Os={renderHud:Ts,renderDesktopNav:qs,renderMobileNav:Vs,renderMobileSheet:Bs};function zs(s){const{SLOT_ORDER:c,SLOT_NAMES:b,ZONES:k,SKILLS:j,state:g,maxInventory:T,getPetData:y,getDerivedStats:$,currentRank:L,zoneForPlayer:_,isZoneUnlocked:J,summarizeReward:C,fmt:V,pct:Q,htmlStat:d,progressBar:t,timeLeft:p,icon:A,rarityName:f,rarityBadge:x,translateFilter:E,statLabel:P,statTooltip:e,tooltipAttr:a,statusChip:l,sectionHeader:v,infoCard:m,actionButton:o,actionBar:i,pageLead:h,questCard:q,equippedSlotCard:D,inventoryCards:O,zoneSelector:F}=s;function u(){return g.timers.expedition?p(g.timers.expedition.endAt):"0s"}function r(){return g.timers.job?p(g.timers.job.endAt):"0s"}function R(){const H=_(),K=g.quests.find(I=>!I.claimed)||g.quests[0];return`
      <div class="space-y-5">
        ${h("resumen",`Zona activa: <b>${H.name}</b>`,[o("⚔️ Continuar en arena","btn-primary","game.setView('arena')","Abre la arena para seguir con combates activos y botín."),o("🧭 Lanzar expedición","","game.setView('expedicion')","Accede a expediciones para progreso pasivo y materiales."),o("🎒 Revisar mochila","btn-violet","game.setView('inventario')","Abre el inventario para equipar, vender o reciclar piezas.")].join(""))}
        ${i([o("⚔️ Arena","btn-primary !py-3","game.setView('arena')"),o("🎒 Mochila","!py-3","game.setView('inventario')")])}
        <div class="grid xl:grid-cols-[1.15fr,.85fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${v("Tu ciclo","Haz solo una de estas cosas ahora","El resumen deja de intentar mostrar todo. Aquí solo eliges el siguiente paso.")}
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
              ${m("Expedición",g.timers.expedition?`${k[g.timers.expedition.zoneId].name} · <span data-live-timer="expedition">${u()}</span>`:"No hay expedición activa.","surface-subtle")}
              ${m("Trabajo",g.timers.job?`${g.timers.job.name} · <span data-live-timer="job">${r()}</span>`:"No hay trabajo activo.","surface-subtle")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${v("Prioridad","Un solo objetivo visible")}
              ${K?q(K):'<div class="empty-state">No hay contratos disponibles.</div>'}
              <div class="mt-4 grid grid-cols-2 gap-2">
                <button class="btn" onclick="game.setView('diario')">Diario</button>
                <button class="btn" onclick="game.setView('logros')">Logros</button>
              </div>
            </div>
            <div class="glass rounded-3xl p-5">
              ${v("Estado rápido","Solo lo que condiciona decisiones")}
              <div class="grid grid-cols-2 gap-3">
                ${d("Mochila",`${g.player.inventory.length}/${T()}`,"","Capacidad usada del inventario frente al máximo disponible.")}
                ${d("Llaves",g.player.keys)}
                ${d("Pociones",g.player.potions)}
                ${d("Racha",`${g.streak.days||0}/7`)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function N(){const H=$(),K=L(),I=y();return`
      <div class="space-y-5">
        ${h("perfil",`${K.title}`,[o("🎒 Ver equipo","btn-primary","game.setView('inventario')"),o("🏋️ Entrenar","","game.setView('entrenamiento')")].join(""))}
        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${v("Identidad","Tu estado actual","Esta pantalla se centra en quién eres y cómo rindes, no en todas las decisiones de la partida.")}
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Gladiador</div>
                <div class="text-3xl font-black mt-1">${g.player.name}</div>
                <div class="text-sm text-cyan-200/85 mt-1">${g.player.title}</div>
              </div>
              <div class="grid grid-cols-2 gap-3 min-w-[250px]">
                ${d("Ascensiones",g.player.ascension,"","Cantidad de reinicios meta completados para progresión permanente.")}
                ${d("Piso más alto",g.player.highestDungeonFloor,"","Mayor piso de mazmorra superado hasta ahora.")}
                ${d("Inventario",`${g.player.inventory.length}/${T()}`,"","Capacidad actual de la mochila frente a su límite máximo.")}
                ${d("Polvo",g.player.relicDust,"","Moneda meta usada en reliquias y mejoras permanentes.")}
              </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              ${d("Ataque",V(H.attack))}
              ${d("Defensa",V(H.defense))}
              ${d("Velocidad",V(H.speed))}
              ${d("Vida máxima",V(H.maxHp),"","Total de salud disponible antes de caer derrotado.")}
              ${d("Golpe crítico",Q(H.crit),"","Probabilidad de infligir daño aumentado en combate.")}
              ${d("Esquiva",Q(H.dodge))}
              ${d("Bloqueo",Q(H.block))}
              ${d("Robo de vida",Q(H.lifesteal),"","Porcentaje del daño que regresa como curación.")}
            </div>
          </section>

          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${v("Equipo","Lectura rápida")}
              <div class="space-y-2">${c.slice(0,4).map(D).join("")}</div>
              <button class="btn mt-4 w-full" onclick="game.setView('inventario')">Abrir inventario completo</button>
            </div>
            <div class="glass rounded-3xl p-5">
              ${v("Apoyos","Compañero y utilidades")}
              <div class="grid gap-3">
                ${I?m(`${A(I.icon||"paw","h-4 w-4 inline-block mr-2 align-[-0.15em]")}${I.name}`,`Nivel ${g.player.petLevel} · XP ${g.player.petXp}/${3+g.player.petLevel}<br>${I.desc}`,"surface-subtle"):m("Sin mascota activa","Incuba una en la vista de Mascota.","surface-subtle")}
              </div>
              <div class="grid grid-cols-2 gap-2 mt-4">
                <button class="btn btn-success" onclick="game.usePotion()" ${a("Consume una poción para recuperar salud fuera de combate.")}>🧪 Poción</button>
                <button class="btn btn-primary" onclick="game.autoHeal()" ${a("Aplica una curación automática si tienes recursos disponibles.")}>🩹 Curar</button>
                <button class="btn btn-gold" onclick="game.claimDaily()" ${a("Reclama tu recompensa diaria cuando esté lista.")}>🎁 Diario</button>
                <button class="btn" onclick="game.setView('mascota')" ${a("Abre la gestión de tu mascota activa y sus bonificaciones.")}>🐾 Mascota</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function X(){const H=["weapon","chest","ring","amulet"].map(D).join("");return`
      <div class="space-y-5">
        ${h("inventario",`Capacidad: <b>${g.player.inventory.length}/${T()}</b>`,[o("🧹 Gestión automática","btn-primary","game.autoManage()","Vende y recicla excedentes de forma automática."),o("⚒️ Forja","","game.setView('forja')"),o("🛒 Mercado","btn-violet","game.setView('mercado')")].join(""))}
        ${i([o("🧹 Limpiar","btn-primary !py-3","game.autoManage()"),o("⚒️ Forja","!py-3","game.setView('forja')")])}
        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${v("Mochila","Decide pieza por pieza","La vista principal se centra en filtrar, comparar y actuar. El contexto extra queda a un lado y solo cuando lo necesites.")}
            <div class="space-y-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Filtro por tipo</div>
                <div class="filters-row mt-2">
                  ${["all",...c].map(K=>`
                    <button class="btn filter-pill ${g.ui.inventoryFilter===K?"active tab-btn":""}" onclick="game.setInventoryFilter('${K}')" ${a(`Filtrar inventario por ${E(K).toLowerCase()}.`)}>${E(K)}</button>
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
                  ${["common","uncommon","rare","epic","legendary","mythic"].map(K=>`
                    <button class="btn filter-pill ${g.ui.inventoryFilter===K?"active tab-btn":""}" onclick="game.setInventoryFilter('${K}')" ${a(`Filtrar inventario por ${E(K).toLowerCase()}.`)}>${E(K)}</button>
                  `).join("")}
                </div>
              </details>
            </div>
            ${O()}
          </section>

          <aside class="stack-compact">
            <details class="glass rounded-3xl p-5" open>
              <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div class="flex items-center justify-between gap-3">
                  <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">Referencia</div>
                  <span class="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Referencia</span>
                </div>
                <div class="mt-1 font-display font-extrabold text-lg leading-tight">Equipo equipado ahora</div>
              </summary>
              <div class="mt-4 space-y-2">${H}</div>
            </details>
          </aside>
        </div>
      </div>
    `}function Y(){const H=_(),K=g.player.activeSkills.map(S=>j[S]).filter(Boolean),I=g.combatHistory.slice(0,2);return`
      <div class="space-y-5">
        ${h("arena",`Zona: <b>${H.name}</b> · Coste <b>${H.energyCost}⚡ / ${H.staminaCost}💪</b>`,[o("⚔️ Normal","btn-primary","game.fightArena('normal')"),o("👑 Élite","btn-violet","game.fightArena('elite')"),o("🔥 x3","btn-gold","game.arenaBlitz(3)")].join(""))}
        ${i([o("⚔️ Normal","btn-primary !py-3","game.fightArena('normal')"),o("👑 Élite","btn-violet !py-3","game.fightArena('elite')")])}
        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${v("Combate","Elige y entra","La arena deja visible solo la decisión principal. Zona, build e historial quedan como módulos secundarios.")}
            <div class="grid md:grid-cols-3 gap-3">
              <button class="surface-strong rounded-2xl p-4 text-left" onclick="game.fightArena('normal')">
                <div class="flex items-center justify-between gap-2"><div class="font-black text-lg">Normal</div>${l("Flujo","success")}</div>
                <p class="text-sm text-slate-300/76 mt-2">Progreso estable y bajo riesgo para seguir farmeando.</p>
              </button>
              <button class="surface-strong elite-card rounded-2xl p-4 text-left" onclick="game.fightArena('elite')">
                <div class="flex items-center justify-between gap-2"><div class="font-black text-lg">Élite</div>${l("Riesgo","warning")}</div>
                <p class="text-sm text-slate-300/76 mt-2">Más exigente, mejor recompensa si tu build ya está firme.</p>
              </button>
              <button class="surface-strong reward-card rounded-2xl p-4 text-left" onclick="game.arenaBlitz(3)">
                <div class="flex items-center justify-between gap-2"><div class="font-black text-lg">Racha x3</div>${l("Acelerar")}</div>
                <p class="text-sm text-slate-300/76 mt-2">Acelera progreso cuando ya dominas la zona actual.</p>
              </button>
            </div>
            <div class="grid sm:grid-cols-3 gap-3 mt-4">
              ${d("Zona activa",H.name,H.theme)}
              ${d("Coste",`${H.energyCost}⚡ / ${H.staminaCost}💪`,"Por combate")}
              ${d("Registro",`${g.stats.wins}V / ${g.stats.losses}D`,"Historial global")}
            </div>
            <details class="surface-subtle rounded-2xl p-4 mt-4">
              <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div class="flex items-center justify-between gap-3">
                  <div><div class="text-sm font-bold">Cambiar zona</div><div class="text-xs text-slate-300/62 mt-1">Solo ábrelo cuando quieras mover el foco de la partida.</div></div>
                  <span class="inline-flex items-center rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] uppercase tracking-[.16em] text-slate-300/62">Destino</span>
                </div>
              </summary>
              <div class="mt-4">${F()}</div>
            </details>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${v("Preparación","Build activa para esta zona")}
              <div class="grid gap-3">
                ${m("Habilidades activas",K.length?K.map(S=>`${S.name} · Nv ${g.player.skillLevels[S.id]||1}`).join("<br>"):"No hay habilidades activas equipadas.","surface-subtle")}
                ${m("Lectura rápida",`Victorias ${g.stats.wins} · Derrotas ${g.stats.losses} · Bajas ${g.stats.kills}`,"surface-subtle")}
              </div>
            </div>
            <div class="glass rounded-3xl p-5">
              ${v("Historial","Últimos resultados")}
              <div class="space-y-3">
                ${I.length?I.map(S=>`
                  <button class="w-full text-left glass rounded-2xl p-4 history-entry" onclick="game.showCombat('${S.id}')">
                    <div class="font-black ${S.result==="victory"?"text-emerald-300":"text-rose-300"}">${S.title}</div>
                    <div class="text-sm text-slate-300/70 mt-1">${S.zone}</div>
                  </button>
                `).join(""):'<div class="empty-state">Aún no hay combates recientes.</div>'}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}return{renderResumen:R,renderPerfil:N,renderInventario:X,renderArena:Y}}function Ns(s){const{SLOT_ORDER:c,SLOT_NAMES:b,ZONES:k,JOBS:j,PETS:g,SKILLS:T,ACHIEVEMENTS:y,state:$,getPetData:L,guildTotal:_,achievementProgress:J,fmt:C,htmlStat:V,progressBar:Q,icon:d,tooltipAttr:t,replaceEmojiIcons:p,rarityName:A,rarityBadge:f,zoneSelector:x,compareAgainstEquipped:E,itemStatGrid:P,durationChoiceCard:e,pager:a,expeditionTimerText:l,jobTimerText:v,pageLead:m,sectionHeader:o,infoCard:i,actionButton:h,actionBar:q,statusChip:D}=s;function O(){return`
      <div class="space-y-5">
        ${m("expedicion",$.timers.expedition?`En curso: <b>${k[$.timers.expedition.zoneId].name}</b> · <span data-live-timer="expedition">${l()}</span>`:"Sin expedición activa",[h("30s","btn-primary",`game.startExpedition(${$.player.zoneId}, 30)`),h("60s","",`game.startExpedition(${$.player.zoneId}, 60)`),h("120s","btn-gold",`game.startExpedition(${$.player.zoneId}, 120)`)].join(""))}
        ${q([h("30s","btn-primary !py-3",`game.startExpedition(${$.player.zoneId}, 30)`),h("120s","btn-gold !py-3",`game.startExpedition(${$.player.zoneId}, 120)`)])}
        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Paso 1","Elige destino","Primero eliges la zona. Después eliges cuánto tiempo comprometer.")}
            ${x()}
            <div class="mt-5">
              ${o("Paso 2","Elige duración")}
              <div class="grid lg:grid-cols-3 gap-3">
                ${e(30,"success","Salida corta para mantener el flujo.")}
                ${e(60,"","Punto medio si sigues tocando otras vistas.")}
                ${e(120,"warning","Más retorno, más espera.")}
              </div>
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Qué mirar","Solo tres ideas")}
              <div class="grid gap-3">
                ${i("Destino","Usa zonas ya cómodas si solo buscas recursos seguros.","surface-subtle")}
                ${i("Duración","Cuanto más larga, más sentido tiene si vas a dejar el juego corriendo.","surface-subtle")}
                ${i("Después","Cuando termine, decide entre Arena para seguir progresando o Inventario para ordenar.","surface-subtle")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function F(){return`
      <div class="space-y-5">
        ${m("mazmorra",`Llaves: <b>${$.player.keys}</b> · Piso más alto: <b>${$.player.highestDungeonFloor}</b>`,[h("🗝️ Entrar","btn-gold","game.runDungeon()","Consume una llave y empieza una incursión de mazmorra."),h("🎒 Revisar equipo","","game.setView('inventario')")].join(""))}
        ${q([h("🗝️ Entrar","btn-gold !py-3","game.runDungeon()"),h("🎒 Equipo","!py-3","game.setView('inventario')")])}
        <div class="grid xl:grid-cols-[1.05fr,.95fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Recorrido","La mazmorra de este intento","Aquí solo ves la ruta y decides si entrar o prepararte mejor.")}
            <div class="grid gap-2 text-sm">
              <div class="rounded-xl bg-white/[.04] p-3">1. Enemigo base</div>
              <div class="rounded-xl bg-white/[.04] p-3">2. Enemigo base</div>
              <div class="rounded-xl bg-white/[.04] p-3">3. Enemigo élite</div>
              <div class="rounded-xl bg-white/[.04] p-3">4. Jefe del piso</div>
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Recompensa","Por qué vale la pena")}
              <div class="grid gap-3">
                ${i("Cofre del piso","Oro, XP, esencia, fragmentos, llaves extra y botín de mejor calidad.","reward-card","Las mazmorras mejoran la calidad del botín y de los materiales.")}
                ${i("Cuándo entrar","Hazlo cuando tengas llaves y una configuración ya ordenada.","surface-subtle","Entra cuando tu equipo y habilidades ya estén en un estado estable.")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function u(){const I=[...$.market.items].sort((Z,te)=>(te.score||0)-(Z.score||0))[0],S=$.market.items.filter(Z=>(Z.price||0)<=$.player.gold).length,B=$.market.items.filter(Z=>E(Z).tone==="success").length;return`
      <div class="space-y-5">
        ${m("mercado",`Oro disponible: <b>${C($.player.gold)}</b>`,[h("🔄 Refrescar","btn-primary","game.refreshMarket()","Renueva la rotación del mercado con nuevas ofertas."),h("🎒 Comparar con mochila","","game.setView('inventario')","Abre el inventario para comparar las ofertas con tu equipo actual.")].join(""))}
        ${q([h("🔄 Refrescar","btn-primary !py-3","game.refreshMarket()"),h("🎒 Mochila","!py-3","game.setView('inventario')")])}
        <div class="grid xl:grid-cols-[minmax(0,1fr),320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Rotación actual","Compra solo mejoras claras","El mercado prioriza piezas de equipo. Consumibles y ayuda contextual quedan en módulos secundarios.")}
            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              ${V("Comprables",S,"Con tu oro actual")}
              ${V("Mejoras",B,"Frente a lo equipado")}
              ${V("Oferta top",I?b[I.slot]:"—",I?I.name:"Sin oferta destacada")}
            </div>
            ${I?`
              <div class="surface-strong reward-card rounded-2xl p-4 mb-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Oferta destacada</div>
                    <div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-black rarity-${I.rarity} text-lg leading-snug">${I.name}</div>${f(I.rarity)}</div>
                    <p class="text-sm text-slate-300/74 mt-2">${E(I).detail}</p>
                  </div>
                  <div class="shrink-0 text-right">
                    <div class="text-sm font-bold text-amber-200">${C(I.price)} oro</div>
                    <div class="mt-2">${D(E(I).label,E(I).tone)}</div>
                  </div>
                </div>
              </div>
            `:""}
            <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-3">
              ${$.market.items.map(Z=>{const te=E(Z),ie=(Z.price||0)<=$.player.gold;return`
                  <div class="glass rounded-2xl p-4 market-card ${ie?"":"opacity-80"}" ${t(`Oferta de rareza ${A(Z.rarity)}. Precio ${C(Z.price)} de oro. ${te.detail}`)}>
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${Z.rarity} leading-snug">${Z.name}</div>${f(Z.rarity)}</div>
                        <div class="text-xs text-slate-300/60 mt-1">${b[Z.slot]} · Nivel ${Z.level}</div>
                      </div>
                      ${D(te.label,te.tone)}
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      ${P(Z,4)}
                    </div>
                    <div class="market-meta mt-3">
                      <span class="text-sm text-slate-300/72">${te.detail}</span>
                      <span class="text-sm font-bold ${ie?"text-amber-200":"text-rose-200"}">${C(Z.price)} oro</span>
                    </div>
                    <button class="btn btn-gold mt-3 w-full" onclick="game.buyMarketItem('${Z.id}')" ${ie?"":"disabled"}>Comprar</button>
                  </div>
                `}).join("")}
            </div>
          </section>
          <aside class="stack-compact">
            <details class="glass rounded-3xl p-5" open>
              <summary class="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">Decisión</div>
                <div class="mt-1 font-display font-extrabold text-lg leading-tight">Qué mirar antes de comprar</div>
              </summary>
              <div class="grid gap-3 mt-4">
                ${i("Oferta destacada",I?`${I.name} lidera la rotación actual.`:"No hay oferta destacada ahora mismo.","reward-card","El mercado castiga mucho más las rarezas altas: verás menos piezas legendarias y míticas.")}
                ${i("No fuerces compra","Si nada mejora de verdad, ahorra oro o ve a Forja.","surface-subtle")}
              </div>
            </details>
          </aside>
        </div>
      </div>
    `}function r(){return`
      <div class="space-y-5">
        ${m("forja",`Hierro: <b>${C($.player.iron)}</b> · Esencia: <b>${C($.player.essence)}</b>`,[h("⚒️ Forjar arma","btn-primary","game.forgeItem('weapon', 'normal')","Forja un arma estándar con coste moderado y rareza controlada."),h("✨ Premium arma","btn-violet","game.forgeItem('weapon', 'premium')","Forja un arma premium con mayor acceso a rarezas altas."),h("🎒 Revisar inventario","","game.setView('inventario')")].join(""))}
        ${q([h("⚒️ Normal","btn-primary !py-3","game.forgeItem('weapon', 'normal')"),h("✨ Premium","btn-violet !py-3","game.forgeItem('weapon', 'premium')")])}
        <div class="grid xl:grid-cols-[1fr,340px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Forja","Crea una pieza para un espacio","La forja común genera botín funcional. La forja premium empuja las rarezas altas, pero sigue siendo exigente.")}
            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              ${c.map(I=>`
                <div class="glass rounded-2xl p-4 forge-recipe-card">
                  <div class="font-bold">${b[I]}</div>
                  <div class="text-sm text-slate-300/70 mt-1">Pieza aleatoria del hueco.</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2" ${t("Forja normal: más común, barata y orientada a volumen.")}>Normal <b>hierro</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2" ${t("Forja premium: más costosa y con mejor acceso a rarezas altas.")}>Premium <b>esencia</b></div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button class="btn btn-primary !py-2" onclick="game.forgeItem('${I}', 'normal')">Forjar</button>
                    <button class="btn btn-violet !py-2" onclick="game.forgeItem('${I}', 'premium')">Premium</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Mejora","Solo piezas ya equipadas","Esta columna existe para reforzar lo que ya decidiste conservar.")}
              <div class="space-y-3 mt-4">
                ${["weapon","chest","ring","amulet"].map(I=>{const S=$.player.equipment[I];return`
                    <div class="glass rounded-2xl p-4 forge-upgrade-card">
                      <div class="text-xs text-slate-300/55 uppercase tracking-[.18em]">${b[I]}</div>
                      <div class="font-black ${S?`rarity-${S.rarity}`:"text-slate-400/80"}">${S?S.name:"Vacío"}</div>
                      <div class="text-sm text-slate-300/70 mt-1">${S?`Nivel ${S.level} · Mejora +${S.upgrade||0}`:"Equipa algo para mejorarlo."}</div>
                      <button class="btn btn-gold mt-3 w-full" ${S?`onclick="game.upgradeEquipped('${I}')"`:"disabled"} ${t("Sube el nivel de mejora de la pieza equipada y aumenta sus estadísticas.")}>⚒️ Mejorar</button>
                    </div>
                  `}).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function R(){const I={barracks:"Más ataque y defensa global.",treasury:"Más oro en todas las actividades.",sanctuary:"Más vida máxima y regeneración.",hunters:"Mejor botín y hallazgos más finos.",arsenal:"Más capacidad de inventario."};return`
      <div class="space-y-5">
        ${m("gremio",`Nivel total invertido: <b>${_()}</b>`,[h("🪙 Ver mercado","","game.setView('mercado')"),h("🏋️ Entrenar","btn-primary","game.setView('entrenamiento')")].join(""))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Mejoras del gremio","Invierte en un frente por vez","Cada edificio es una decisión de largo plazo.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${Object.entries($.player.guild).map(([S,B])=>{const Z=B+1,te=180+Z*110+_()*35,ie=Math.max(1,Math.floor(Z/2));return`
                  <div class="glass rounded-2xl p-4">
                    <div class="font-black text-lg capitalize" ${t(I[S])}>${S}</div>
                    <div class="text-sm text-slate-300/75 mt-1">${I[S]}</div>
                    <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div class="rounded-xl bg-white/[.04] p-2">Nivel <b>${B}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Siguiente <b>${Z}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Oro <b>${C(te)}</b></div>
                      <div class="rounded-xl bg-white/[.04] p-2">Esencia <b>${C(ie)}</b></div>
                    </div>
                    <button class="btn btn-violet mt-3 w-full" onclick="game.upgradeGuild('${S}')">Mejorar</button>
                  </div>
                `}).join("")}
            </div>
          </section>
          <aside class="glass rounded-3xl p-5">
            ${o("Consejo","Cómo usarlo")}
            <div class="grid gap-3">
              ${i("Especialízate","Sube uno o dos edificios primero en lugar de repartir demasiado.","surface-subtle")}
              ${i("Prioridad típica","Tesorería y Barracas suelen sentirse antes en la partida.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}function N(){return`
      <div class="space-y-5">
        ${m("entrenamiento",`Puntos de atributo: <b>${$.player.attributePoints}</b> · habilidades: <b>${$.player.skillPoints}</b>`,[h("👤 Perfil","","game.setView('perfil')"),h("⚔️ Arena","btn-primary","game.setView('arena')")].join(""))}
        <div class="grid xl:grid-cols-[.95fr,1.05fr] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Atributos","Sube tu base","Primero mejoras atributos. Las habilidades quedan en la columna de apoyo.")}
            <div class="grid sm:grid-cols-2 gap-3">
              ${[["strength","Fuerza","Ataque y robo de vida."],["agility","Agilidad","Velocidad, crítico y esquiva."],["endurance","Resistencia","Vida, defensa y bloqueo."],["discipline","Disciplina","Energía y aguante máximo."]].map(([I,S,B])=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${S}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${B}</div>
                  <div class="text-sm mt-3">Nivel actual: <b>${$.player.training[I]}</b></div>
                  <button class="btn btn-primary mt-3 w-full" onclick="game.trainAttribute('${I}')">Subir</button>
                </div>
              `).join("")}
            </div>
          </section>
          <aside class="glass rounded-3xl p-5">
            ${o("Habilidades","Activa o mejora solo las importantes")}
            <div class="space-y-3">
              ${Object.values(T).map(I=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black">${I.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${I.desc}</div>
                  <div class="text-xs text-slate-300/60 mt-2">Recarga ${I.cooldown} · Desbloqueo Nv ${I.unlockLevel}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3">
                    <button class="btn !py-2" onclick="game.toggleSkill('${I.id}')">${$.player.activeSkills.includes(I.id)?"Quitar":"Equipar"}</button>
                    <button class="btn btn-violet !py-2" ${$.player.unlockedSkills.includes(I.id)?`onclick="game.upgradeSkill('${I.id}')"`:"disabled"}>Mejorar</button>
                  </div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function X(){return`
      <div class="space-y-5">
        ${m("trabajo",$.timers.job?`En curso: <b>${$.timers.job.name}</b> · <span data-live-timer="job">${v()}</span>`:"Sin trabajo activo",[h("🧭 Expedición","","game.setView('expedicion')"),h("💰 Mercado","btn-gold","game.setView('mercado')")].join(""))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Trabajos","Elige una fuente de oro","Esta vista queda solo para elegir un encargo.")}
            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              ${j.map(I=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-black text-lg">${I.name}</div>
                  <div class="text-sm text-slate-300/75 mt-1">${I.desc}</div>
                  <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div class="rounded-xl bg-white/[.04] p-2">Duración <b>${I.duration}s</b></div>
                    <div class="rounded-xl bg-white/[.04] p-2">Pago <b>${C(I.reward.gold)} oro</b></div>
                  </div>
                  <button class="btn btn-gold mt-3 w-full" onclick="game.startJob('${I.id}')" ${t("Inicia este trabajo y bloquea el temporizador hasta su finalización.")}>Aceptar</button>
                </div>
              `).join("")}
            </div>
          </section>
          <aside class="glass rounded-3xl p-5">
            ${o("Cuándo usarlo","Regla rápida")}
            <div class="grid gap-3">
              ${i("Trabajo","Úsalo cuando quieras oro estable sin pelear.","surface-subtle")}
              ${i("Alternativa","Si también quieres botín, Expedición suele darte más variedad.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}function Y(){const I=L();return`
      <div class="space-y-5">
        ${m("mascota",I?`Activa: <b>${I.name}</b>`:"Aún no tienes mascota",[h("👤 Perfil","","game.setView('perfil')"),h("🥚 Incubar","btn-violet","game.hatchPet()","Consume recursos para obtener una mascota aleatoria.")].join(""))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Compañero","Gestiona solo tu mascota activa")}
            ${I?`
              <div class="glass rounded-2xl p-5">
                <div class="text-cyan-200">${d(I.icon||"paw","h-9 w-9")}</div>
                <div class="font-display font-extrabold text-2xl mt-2">${I.name}</div>
                <div class="text-sm text-slate-300/75 mt-1">${I.desc}</div>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  ${V("Nivel",$.player.petLevel)}
                  ${V("XP",`${$.player.petXp}/${3+$.player.petLevel}`)}
                </div>
                <div class="grid sm:grid-cols-2 gap-3 mt-4">
                  <button class="btn btn-success" onclick="game.feedPet()">${d("box","h-4 w-4")}<span>Alimentar</span></button>
                  <button class="btn btn-danger" onclick="game.releasePet()" ${t("Libera la mascota actual y pierdes sus bonos activos.")}>Liberar</button>
                </div>
              </div>
            `:`
              <div class="glass rounded-2xl p-5">
                <p class="text-sm text-slate-300/75">Incuba un huevo con 5 fragmentos y 8 de esencia para recibir un compañero aleatorio.</p>
                <button class="btn btn-violet mt-4" onclick="game.hatchPet()">${d("spark","h-4 w-4")}<span>Incubar huevo</span></button>
              </div>
            `}
          </section>
          <aside class="glass rounded-3xl p-5">
            ${o("Catálogo","Vista rápida")}
            <div class="grid gap-3">
              ${g.map(S=>`
                <div class="glass rounded-2xl p-4">
                  <div class="font-bold font-display inline-flex items-center gap-2">${d(S.icon||"paw","h-4 w-4")}<span>${S.name}</span></div>
                  <div class="text-sm text-slate-300/75 mt-1">${S.desc}</div>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    `}function H(){const I=y.slice(0,6);return`
      <div class="space-y-5">
        ${m("logros",`Polvo de reliquia: <b>${$.player.relicDust}</b>`,[h("🔱 Ascender","btn-gold","game.ascend()","Reinicia gran parte del progreso para ganar mejoras meta permanentes."),h("📘 Diario","","game.setView('diario')")].join(""))}
        <div class="grid xl:grid-cols-[1fr,320px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Hitos activos","Solo una selección visible","Los logros dejan de ser una pared de progreso. Aquí ves solo los más relevantes.")}
            <div class="space-y-3">
              ${I.map(S=>{const B=J(S),Z=$.claimedAchievements.includes(S.id);return`
                  <div class="glass rounded-2xl p-4">
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="font-black text-lg">${S.title}</div>
                        <div class="text-sm text-slate-300/75 mt-1">${S.desc}</div>
                      </div>
                      <div class="text-sm rounded-full px-3 py-1 ${Z?"bg-emerald-400/15 text-emerald-300 border border-emerald-300/20":"bg-white/[.05]"}">${Z?"Listo":`${B}/${S.target}`}</div>
                    </div>
                    <div class="mt-3">${Q(B,S.target,"bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-300 shadow-[0_0_18px_rgba(34,211,238,.30)]","Progreso","Avance total hacia este logro y sus recompensas meta.")}</div>
                  </div>
                `}).join("")}
            </div>
          </section>
          <aside class="stack-compact">
            <div class="glass rounded-3xl p-5">
              ${o("Ascensión","Reinicio con progreso meta")}
              <p class="text-sm text-slate-300/75 mt-2">Hazla cuando quieras convertir una partida avanzada en progreso permanente.</p>
              <button class="btn btn-gold mt-4 w-full" onclick="game.ascend()" ${t("Reinicia gran parte de la partida a cambio de progreso meta permanente.")}>🔱 Ascender</button>
            </div>
            <div class="glass rounded-3xl p-5">
              ${o("Altar","Inversión rápida")}
              <div class="grid gap-3 mt-4">
                ${[["wrath","Ira"],["fortune","Fortuna"],["vitality","Vitalidad"],["momentum","Impulso"]].map(([S,B])=>`
                  <button class="btn btn-violet justify-between" onclick="game.spendRelic('${S}')" ${t(`Invierte polvo de reliquia en ${B.toLowerCase()} para obtener bonificaciones permanentes.`)}><span>${B}</span><span>Nv ${$.player.relics[S]}</span></button>
                `).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `}function K(){const I=Math.max(8,$.ui.journalPageSize||16),S=$.journal||[],B=Math.max(1,Math.ceil(S.length/I)),Z=Math.min(Math.max(1,$.ui.journalPage||1),B),te=(Z-1)*I,ie=S.slice(te,te+I);return`
      <div class="space-y-5">
        ${m("diario",`Entradas guardadas: <b>${S.length}</b>`,[h("🏆 Ver logros","","game.setView('logros')"),h("📋 Resumen","btn-primary","game.setView('resumen')")].join(""))}
        <div class="grid xl:grid-cols-[1fr,300px] gap-5">
          <section class="glass rounded-3xl p-5">
            ${o("Registro","Solo eventos recientes","El diario queda como historial consultable, no como otra pantalla cargada de decisiones.")}
            <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${S.length?te+1:0}</b>–<b>${Math.min(te+I,S.length)}</b> de <b>${S.length}</b>.</div>
            <div class="space-y-3">
              ${ie.map(le=>`
                <div class="glass rounded-2xl p-4 cv-auto">
                  <div class="font-black">${p(le.icon)} <span class="font-semibold">${new Date(le.ts).toLocaleTimeString("es-ES")}</span></div>
                  <div class="text-sm text-slate-200/90 leading-relaxed mt-2">${le.text}</div>
                </div>
              `).join("")||'<div class="text-sm text-slate-300/75">Todavía no hay entradas en el diario.</div>'}
            </div>
            ${a(Z,B,"setJournalPage")}
          </section>
          <aside class="glass rounded-3xl p-5">
            ${o("Uso","Cómo leerlo")}
            <div class="grid gap-3">
              ${i("Consulta","Úsalo para revisar qué pasó, no para tomar decisiones inmediatas.","surface-subtle")}
              ${i("Después","Si buscas progreso, vuelve a Resumen o Arena.","surface-subtle")}
            </div>
          </aside>
        </div>
      </div>
    `}return{renderExpedicion:O,renderMazmorra:F,renderMercado:u,renderForja:r,renderGremio:R,renderEntrenamiento:N,renderTrabajo:X,renderMascota:Y,renderLogros:H,renderDiario:K}}const{SLOT_ORDER:wt,SLOT_NAMES:We,ZONES:rt,JOBS:_s,PETS:Hs,SKILLS:Mt,ACHIEVEMENTS:Fs,fmt:he,pct:Et,htmlStat:De,progressBar:it,timeLeft:ot,state:se,maxInventory:Gs,getPetData:At,getDerivedStats:Js,scaleItemStats:Zs,guildTotal:Ws,currentRank:Qs,zoneForPlayer:Us,isZoneUnlocked:He,summarizeReward:jt,achievementProgress:Ks,icon:Je,replaceEmojiIcons:Ys,rarityName:lt,rarityBadge:Qe,translateFilter:Xs,statLabel:It,statTooltip:Pt,tooltipAttr:Ee,statusChip:Ue,sectionHeader:Lt,infoCard:Ct,actionButton:Rt,actionBar:Dt,pageLead:Tt}=xt;function en(s){const c=se.player.equipment[s];return`
      <div class="rounded-2xl ring p-3 bg-white/[.04]">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="text-[11px] uppercase tracking-[.18em] text-slate-300/55">${We[s]}</div>
            ${c?`<div class="mt-1 flex flex-wrap items-center gap-2"><div class="font-bold leading-snug rarity-${c.rarity}">${c.name}</div>${Qe(c.rarity)}</div>
                 <div class="text-xs text-slate-300/70 mt-1">Nivel ${c.level} · Mejora +${c.upgrade||0}</div>`:'<div class="font-bold mt-1 text-slate-400/80">Vacío</div>'}
          </div>
          ${c?`<button class="btn !px-3 !py-2 text-xs" onclick="game.unequipItem('${s}')">Quitar</button>`:""}
        </div>
      </div>
    `}function tn(s){return`
      <div class="glass rounded-2xl p-4">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div class="min-w-0">
            <div class="font-black text-lg">${s.title}</div>
            <div class="text-sm text-slate-300/75 mt-1">${s.desc}</div>
            <div class="text-xs text-slate-300/60 mt-3">${jt(s.reward)}</div>
          </div>
          <button class="btn ${s.completed?"btn-success":""}" ${s.completed&&!s.claimed?`onclick="game.claimQuest('${s.id}')"`:"disabled"}>
            ${s.claimed?"Cobrada":s.completed?"Cobrar":`${he(s.progress)}/${he(s.target)}`}
          </button>
        </div>
        <div class="mt-3">${it(s.progress,s.target,"bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-300 shadow-[0_0_18px_rgba(192,132,252,.32)]","Progreso","Avance actual del contrato seleccionado.")}</div>
      </div>
    `}function an(){return se.timers.expedition?ot(se.timers.expedition.endAt):"0s"}function sn(){return se.timers.job?ot(se.timers.job.endAt):"0s"}function qt(s,c,b){return c<=1?"":`
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
        <div class="text-sm text-slate-300/72">Página <b>${s}</b> de <b>${c}</b></div>
        <div class="flex gap-2">
          <button class="btn !py-2 !px-3" ${s<=1?"disabled":`onclick="game.${b}(${s-1})"`}>← Anterior</button>
          <button class="btn !py-2 !px-3" ${s>=c?"disabled":`onclick="game.${b}(${s+1})"`}>Siguiente →</button>
        </div>
      </div>
    `}function Vt(){return`
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
        ${rt.map(s=>`
          <button
            class="text-left glass rounded-2xl p-4 transition ${se.player.zoneId===s.id?"ring ring-cyan-300/35 bg-cyan-400/8":""} ${He(s)?"":"opacity-45"}"
            ${He(s)?`onclick="game.setZone(${s.id})"`:"disabled"}
            ${Ee(`Zona ${s.name}. Requiere nivel ${s.unlockLevel} y consume ${s.energyCost} de energía y ${s.staminaCost} de aguante.`)}
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="font-black text-lg">${s.name}</div>
                <div class="text-xs text-slate-300/60 mt-1">Nivel ${s.unlockLevel}+ · ${s.theme}</div>
              </div>
              <div class="text-xs rounded-full px-2.5 py-1 bg-white/[.06]">${He(s)?"Activa":"Bloqueada"}</div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
              <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${Je("bolt","h-4 w-4 text-cyan-300")}<span>${s.energyCost} energía</span></div>
              <div class="inline-flex items-center gap-2 rounded-xl bg-white/[.04] p-3">${Je("dumbbell","h-4 w-4 text-emerald-300")}<span>${s.staminaCost} aguante</span></div>
            </div>
          </button>
        `).join("")}
      </div>
    `}function nn(s,c){return s==="crit"||s==="dodge"||s==="block"||s==="lifesteal"?Et(c):he(c)}function ct(s){const c=se.player.equipment[s.slot];if(!c)return{label:"Mejora limpia",tone:"success",detail:"No tienes una pieza equipada en este espacio."};const b=(s.score||0)-(c.score||0);return b>0?{label:`+${he(b)} puntuación`,tone:"success",detail:`Mejora respecto a ${c.name}.`}:b<0?{label:`${he(b)} puntuación`,tone:"danger",detail:`Rinde peor que ${c.name}.`}:{label:"Puntuación similar",tone:"",detail:`Rinde de forma parecida a ${c.name}.`}}function Bt(s,c=4){return Object.entries(Zs(s)).slice(0,c).map(([b,k])=>`<div class="rounded-xl bg-white/[.04] p-2.5" ${Ee(Pt(b))}>${It(b)}: <b>${nn(b,k)}</b></div>`).join("")}function rn(s){const c=s.filter(k=>k.rarity==="legendary").length,b=s.filter(k=>ct(k).tone==="success").length;return`
      <div class="grid sm:grid-cols-3 gap-3 mb-4">
        ${De("Objetos filtrados",s.length)}
        ${De("Mejoras posibles",b)}
        ${De("Legendarios",c,"","Cantidad de objetos legendarios visibles en este filtro.")}
      </div>
    `}function on(s,c,b){return`
      <div class="surface-strong rounded-2xl p-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="text-xs uppercase tracking-[.18em] text-slate-300/55">Expedición</div>
            <div class="text-2xl font-black mt-1">${s}s</div>
            <p class="text-sm text-slate-300/74 mt-2">${b}</p>
          </div>
          ${Ue(s<=30?"Corta":s<120?"Media":"Larga",c)}
        </div>
        <button class="btn ${c==="success"?"btn-primary":c==="warning"?"btn-gold":"btn-violet"} mt-4 w-full" onclick="game.startExpedition(${se.player.zoneId}, ${s})">Enviar ${s}s</button>
      </div>
    `}function ln(){let s=[...se.player.inventory];const c=se.ui.inventoryFilter;if(c!=="all"&&(s=s.filter(y=>y.slot===c||y.rarity===c)),!s.length)return'<div class="glass rounded-2xl p-5 text-slate-300/75">Tu inventario está vacío o el filtro no devuelve resultados.</div>';const b=Math.max(6,se.ui.inventoryPageSize||18),k=Math.max(1,Math.ceil(s.length/b)),j=Math.min(Math.max(1,se.ui.inventoryPage||1),k),g=(j-1)*b,T=s.slice(g,g+b);return`
      ${rn(s)}
      <div class="text-sm text-slate-300/72 mb-4">Mostrando <b>${g+1}</b>–<b>${Math.min(g+b,s.length)}</b> de <b>${s.length}</b> objetos filtrados.</div>
      <div class="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3">
        ${T.map(y=>{const $=ct(y);return`
            <div class="glass rounded-2xl p-4 item-card cv-auto inventory-card-pro" ${Ee(`Objeto de rareza ${lt(y.rarity)}. Puntuación ${he(y.score)}. ${$.detail}`)}>
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <div class="flex flex-wrap items-center gap-2"><div class="font-black rarity-${y.rarity} leading-snug">${y.name}</div>${Qe(y.rarity)}</div>
                  <div class="text-xs text-slate-300/60 mt-1">${We[y.slot]} · Nivel ${y.level} · Mejora +${y.upgrade||0}</div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-xs rounded-full px-2 py-1 bg-white/[.06]" ${Ee("Puntuación total estimada del objeto según sus estadísticas y mejora actual.")}>Punt. ${he(y.score)}</div>
                  <div class="mt-2">${Ue($.label,$.tone)}</div>
                </div>
              </div>
              <p class="text-xs text-slate-300/62 mt-3">${$.detail}</p>
              <div class="grid grid-cols-2 gap-2 mt-3 text-sm">
                ${Bt(y,4)}
              </div>
              <div class="grid gap-2 mt-4">
                <button class="btn btn-success !py-2.5 w-full" onclick="game.equipItem('${y.id}')">Equipar</button>
                <div class="grid grid-cols-3 gap-2">
                  <button class="btn !py-2 text-xs" onclick="game.sellItem('${y.id}')">Vender</button>
                  <button class="btn !py-2 text-xs" onclick="game.salvageItem('${y.id}')">Reciclar</button>
                  <button class="btn btn-violet !py-2 text-xs" onclick="game.rerollItem('${y.id}')">Retemplar</button>
                </div>
              </div>
            </div>
          `}).join("")}
      </div>
      ${qt(j,k,"setInventoryPage")}
    `}const Re=zs({SLOT_ORDER:wt,SLOT_NAMES:We,ZONES:rt,SKILLS:Mt,state:se,maxInventory:Gs,getPetData:At,getDerivedStats:Js,currentRank:Qs,zoneForPlayer:Us,isZoneUnlocked:He,summarizeReward:jt,fmt:he,pct:Et,htmlStat:De,progressBar:it,timeLeft:ot,icon:Je,rarityName:lt,rarityBadge:Qe,translateFilter:Xs,statLabel:It,statTooltip:Pt,tooltipAttr:Ee,statusChip:Ue,sectionHeader:Lt,infoCard:Ct,actionButton:Rt,actionBar:Dt,pageLead:Tt,questCard:tn,equippedSlotCard:en,inventoryCards:ln,zoneSelector:Vt}),me=Ns({SLOT_ORDER:wt,SLOT_NAMES:We,ZONES:rt,JOBS:_s,PETS:Hs,SKILLS:Mt,ACHIEVEMENTS:Fs,state:se,getPetData:At,guildTotal:Ws,achievementProgress:Ks,fmt:he,htmlStat:De,progressBar:it,icon:Je,tooltipAttr:Ee,replaceEmojiIcons:Ys,rarityName:lt,rarityBadge:Qe,zoneSelector:Vt,compareAgainstEquipped:ct,itemStatGrid:Bt,durationChoiceCard:on,pager:qt,expeditionTimerText:an,jobTimerText:sn,pageLead:Tt,sectionHeader:Lt,infoCard:Ct,actionButton:Rt,actionBar:Dt,statusChip:Ue});function cn(){return({resumen:Re.renderResumen,perfil:Re.renderPerfil,inventario:Re.renderInventario,arena:Re.renderArena,expedicion:me.renderExpedicion,mazmorra:me.renderMazmorra,mercado:me.renderMercado,forja:me.renderForja,gremio:me.renderGremio,entrenamiento:me.renderEntrenamiento,trabajo:me.renderTrabajo,mascota:me.renderMascota,logros:me.renderLogros,diario:me.renderDiario}[se.currentView]||Re.renderResumen)()}function dn(){const s=se.ui.modal;return s?`
      <div class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 p-4 overflow-y-auto">
        <div class="min-h-full flex items-start justify-center py-8">
          <div class="glass-strong rounded-[2rem] p-5 sm:p-6 w-full max-w-5xl">
            <div class="flex items-start justify-between gap-3 mb-4">
              <div>
                <div class="text-xs uppercase tracking-[.18em] text-slate-300/55 mb-1">Detalle</div>
                <div class="text-2xl font-black">${s.title}</div>
              </div>
              <button class="btn" onclick="game.closeModal()">Cerrar</button>
            </div>
            ${s.content}
          </div>
        </div>
      </div>
    `:""}const un={renderContent:cn,renderModal:dn};(()=>{const{STORAGE_KEY:s,VIEWS:c,VIEW_META:b}=window.AetherConfig,{$:k,clamp:j,timeLeft:g,sanitizeInlineHtml:T}=window.AetherUtils,{state:y,loadGame:$,saveGame:L,getDerivedStats:_,hardReset:J,mutate:C,subscribeStore:V,getStoreMeta:Q,syncExternalState:d}=window.AetherModel,t=window.AetherSystems,p={...Os,...un},A=new Set(c.map(([w])=>w)),f={hud:"hud",desktopNav:"desktop-nav",content:"page-view",modal:"modal-root",mobileNav:"mobile-nav-root",mobileSheet:"mobile-sheet-root"},x=Object.create(null),E=new Set(Object.keys(f)),P=[];let e=0,a=0,l=0;function v(w){return k(f[w])}function m(w){switch(w){case"hud":return p.renderHud();case"desktopNav":return p.renderDesktopNav();case"content":return p.renderContent();case"modal":return p.renderModal();case"mobileNav":return p.renderMobileNav();case"mobileSheet":return p.renderMobileSheet();default:return""}}function o(w){return w?Array.isArray(w)?w:[w]:[]}function i(w=Object.keys(f)){o(w).forEach(W=>E.add(W)),!e&&(e=window.requestAnimationFrame(()=>{e=0,q()}))}function h(){const w=v("content");!w||!w.querySelectorAll||(w.querySelectorAll('[data-live-timer="expedition"]').forEach(W=>{W.textContent=y.timers.expedition?g(y.timers.expedition.endAt):"0s"}),w.querySelectorAll('[data-live-timer="job"]').forEach(W=>{W.textContent=y.timers.job?g(y.timers.job.endAt):"0s"}))}function q(){Object.keys(f).forEach(W=>{if(!E.has(W))return;const ae=v(W);if(!ae)return;const pe=m(W),xe=ge(pe);x[W]!==xe&&(ae.innerHTML=xe,x[W]=xe),E.delete(W)}),h();const w=b[y.currentView]||b.resumen;document.title=`Aether Arena — ${w.label}`}function D(w=!1){if(!w&&!Q().isDirty)return;if(w){l&&(clearTimeout(l),l=0),L();return}if(l)return;const W=()=>{l=0,L()};if(typeof window.requestIdleCallback=="function"){l=window.setTimeout(()=>{l=0,window.requestIdleCallback(W,{timeout:1200})},900);return}l=window.setTimeout(W,900)}function O(w){try{location.hash!==`#${w}`&&history.replaceState(null,"",`#${w}`)}catch{location.hash=w}}function F(w,W={}){if(!A.has(w))return;const ae=y.currentView;C("ui/setView",()=>{y.currentView=w,y.currentTab=w,y.ui.moreMenuOpen=!1},{source:"ui"}),W.skipHash||O(w),i(["hud","desktopNav","content","mobileNav","mobileSheet"]),ae!==w&&!W.keepScroll&&window.scrollTo(0,0),D()}function u(w){C("ui/setInventoryFilter",()=>{y.ui.inventoryFilter=w,y.ui.inventoryPage=1},{source:"ui"}),i("content"),D()}function r(w){C("ui/setInventoryPage",()=>{y.ui.inventoryPage=Math.max(1,Number(w)||1)},{source:"ui",markDirty:!1}),i("content")}function R(w){C("ui/setJournalPage",()=>{y.ui.journalPage=Math.max(1,Number(w)||1)},{source:"ui",markDirty:!1}),i("content")}function N(w){C("ui/toggleMoreMenu",()=>{y.ui.moreMenuOpen=typeof w=="boolean"?w:!y.ui.moreMenuOpen},{source:"ui",markDirty:!1}),i(["mobileNav","mobileSheet"])}function X(){C("ui/closeModal",()=>{y.ui.modal=null},{source:"ui",markDirty:!1}),i("modal")}function Y(w){const W=y.combatHistory.find(ae=>ae.id===w);W&&(C("ui/showCombat",()=>{y.ui.modal={type:"combat",title:T(W.title),content:`
          <div class="space-y-4">
            <div class="glass rounded-2xl p-4">
              <div class="text-sm text-slate-300/75">${T(W.zone)}</div>
              <div class="text-sm text-slate-200/90 mt-2">${T(t.summarizeReward(W.rewards))}${W.drop?` · Botin: <span class="rarity-${W.drop.rarity}">${T(W.drop.name)}</span>`:""}</div>
            </div>
            <div class="glass rounded-2xl p-4 max-h-[55vh] overflow-auto">
              <div class="space-y-2 text-sm">${W.log.map(ae=>`<div>${T(ae)}</div>`).join("")}</div>
            </div>
          </div>
        `}},{source:"ui",markDirty:!1}),i("modal"))}function H(){typeof confirm=="function"&&!confirm("¿Seguro que quieres reiniciar la partida? Se perdera el progreso local.")||(J(),F("resumen",{keepScroll:!1}),t.toast("Nueva partida iniciada","danger"),i(Object.keys(f)),D(!0))}function K(w){i(w||["hud","content","mobileSheet"]),D()}function I(){for(;P.length;){const w=P.pop();typeof w=="function"&&w()}P.push(V(w=>w._meta&&[w._meta.isSaving,w._meta.isDirty,w._meta.lastSaveAt,w._meta.lastMutationLabel].join("|"),()=>i("hud"))),P.push(V(w=>w._meta?w._meta.syncRevision:0,(w,W)=>{w!==W&&i(Object.keys(f))})),P.push(V(w=>w.ui?w.ui.modal:null,()=>i("modal"))),P.push(V(w=>w.ui?w.ui.moreMenuOpen:!1,()=>i(["mobileNav","mobileSheet"])))}const S={setView:F,setTab:F,setInventoryFilter:u,setInventoryPage:r,setJournalPage:R,toggleMoreMenu:N,showCombat:Y,closeModal:X,hardReset:H};Ga(S,{systems:t,mutate:C,afterAction:K});function B(){const w=Date.now();let W=!1;C("system/tick",()=>{const ae=j((w-y.lastTick)/1e3,0,document.hidden?30:5);y.lastTick=w,t.passiveRegen(ae),W=t.resolveFinishedTimers(w,document.hidden);const pe=_();y.player.hp=j(y.player.hp,1,pe.maxHp),y.player.energy=j(y.player.energy,0,pe.maxEnergy),y.player.stamina=j(y.player.stamina,0,pe.maxStamina)},{source:"tick"}),(!y.lastSave||w-y.lastSave>12e3)&&D(),!document.hidden&&(i("hud"),h(),W?(i(["content","modal"]),D()):y.ui.modal&&i("modal"),y.ui.moreMenuOpen&&i(["mobileNav","mobileSheet"]))}function Z(){a&&clearInterval(a),a=window.setInterval(B,document.hidden?4e3:1e3)}function te(){const w=(location.hash||"").replace("#","").trim(),W=A.has(w)?w:y.currentView||"resumen";F(W,{skipHash:!1,keepScroll:!0})}function ie(){const w=(location.hash||"").replace("#","").trim();A.has(w)&&w!==y.currentView&&F(w,{skipHash:!0})}function le(w){if(w.key!==s||w.newValue===w.oldValue)return;d(w.newValue)&&(i(Object.keys(f)),t.toast("Partida sincronizada desde otra pestana","cyan"))}function Ae(){$(),C("system/offlineCatchup:init",()=>{t.offlineCatchup()},{source:"lifecycle"}),I(),te(),i(Object.keys(f)),D(),Z(),window.addEventListener("hashchange",ie),document.addEventListener("visibilitychange",()=>{Z(),document.hidden||(C("system/offlineCatchup:resume",()=>{t.offlineCatchup()},{source:"lifecycle"}),i(["hud","content","modal"]))}),window.addEventListener("storage",le),window.addEventListener("pagehide",()=>D(!0)),window.addEventListener("beforeunload",()=>D(!0))}window.game=S,window.AetherController={queueRender:i,setView:F,closeModal:X,showCombat:Y,scheduleSave:D},Ae()})();
