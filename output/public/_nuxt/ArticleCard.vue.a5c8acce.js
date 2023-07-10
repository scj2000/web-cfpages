import{v as b,x as B,y as w,z as L,A as N,B as x,C as k,D as A,f as q,b as m,a as M,E as S,G as U,H as C,I as G,o as z,c as $,k as H,u as y,p as T,l as _,t as I,J as D}from"./entry.4f9e4fd1.js";async function F(e,t){return await J(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function J(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,o)=>{const r=new Image;r.onload=()=>{const s={width:r.width,height:r.height,ratio:r.width/r.height};t(s)},r.onerror=s=>o(s),r.src=e})}function j(e){return t=>t?e[t]||t:e.missingValue}function O({formatter:e,keyMap:t,joinWith:o="/",valueMap:r}={}){e||(e=(n,i)=>`${n}=${i}`),t&&typeof t!="function"&&(t=j(t));const s=r||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=j(s[n]))}),(n={})=>Object.entries(n).filter(([c,u])=>typeof u<"u").map(([c,u])=>{const g=s[c];return typeof g=="function"&&(u=g(n[c])),c=typeof t=="function"?t(c):c,e(c,u)}).join(o)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function V(e){const t={options:e},o=(s,n={})=>P(t,s,n),r=(s,n={},i={})=>o(s,{...i,modifiers:N(n,i.modifiers||{})}).url;for(const s in e.presets)r[s]=(n,i,c)=>r(n,i,{...e.presets[s],...c});return r.options=e,r.getImage=o,r.getMeta=(s,n)=>Q(t,s,n),r.getSizes=(s,n)=>Z(t,s,n),t.$img=r,r}async function Q(e,t,o){const r=P(e,t,{...o});return typeof r.getMeta=="function"?await r.getMeta():await F(e,r.url)}function P(e,t,o){var g,l;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:r,defaults:s}=Y(e,o.provider||e.options.provider),n=X(e,o.preset);if(t=b(t)?t:B(t),!r.supportsAlias)for(const d in e.options.alias)t.startsWith(d)&&(t=w(e.options.alias[d],t.substr(d.length)));if(r.validateDomains&&b(t)){const d=L(t).host;if(!e.options.domains.find(f=>f===d))return{url:t}}const i=N(o,n,s);i.modifiers={...i.modifiers};const c=i.modifiers.format;(g=i.modifiers)!=null&&g.width&&(i.modifiers.width=v(i.modifiers.width)),(l=i.modifiers)!=null&&l.height&&(i.modifiers.height=v(i.modifiers.height));const u=r.getImage(t,i,e);return u.format=u.format||c||"",u}function Y(e,t){const o=e.options.providers[t];if(!o)throw new Error("Unknown provider: "+t);return o}function X(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Z(e,t,o){var g,l;const r=v((g=o.modifiers)==null?void 0:g.width),s=v((l=o.modifiers)==null?void 0:l.height),n=r&&s?s/r:0,i=[],c={};if(typeof o.sizes=="string")for(const d of o.sizes.split(/[\s,]+/).filter(f=>f)){const f=d.split(":");f.length===2&&(c[f[0].trim()]=f[1].trim())}else Object.assign(c,o.sizes);for(const d in c){const f=e.options.screens&&e.options.screens[d]||parseInt(d);let a=String(c[d]);const h=a.endsWith("vw");if(!h&&/^\d+$/.test(a)&&(a=a+"px"),!h&&!a.endsWith("px"))continue;let p=parseInt(a);if(!f||!p)continue;h&&(p=Math.round(p/100*f));const R=n?Math.round(p*n):s;i.push({width:p,size:a,screenMaxWidth:f,media:`(max-width: ${f}px)`,src:e.$img(t,{...o.modifiers,width:p,height:R},o)})}i.sort((d,f)=>d.screenMaxWidth-f.screenMaxWidth);const u=i[i.length-1];return u&&(u.media=""),{sizes:i.map(d=>`${d.media?d.media+" ":""}${d.size}`).join(", "),srcset:i.map(d=>`${d.src} ${d.width}w`).join(", "),src:u==null?void 0:u.src}}const W=O({joinWith:"&"}),K=(e,{modifiers:t={},baseURL:o}={})=>{const r=t.transforms;r&&r.length>0&&(t.transforms=new URLSearchParams(JSON.stringify(r)).toString().replace(/=+$/,""));const s=W(t);return{url:w(o,e+(s?"?"+s:""))}},ee=Object.freeze(Object.defineProperty({__proto__:null,getImage:K,operationsGenerator:W},Symbol.toStringTag,{value:"Module"})),te=O({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>x(e)+"_"+x(t)}),re=(e,{modifiers:t={},baseURL:o}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=te(t)||"_";return o||(o=w(r.options.nuxt.baseURL,"/_ipx")),{url:w(o,s,k(e))}},ie=!0,oe=!0,se=Object.freeze(Object.defineProperty({__proto__:null,getImage:re,supportsAlias:oe,validateDomains:ie},Symbol.toStringTag,{value:"Module"})),E={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};E.providers={directus:{provider:ee,defaults:{baseURL:"https://cdn.scj2000.net/assets/",modifiers:{}}},ipx:{provider:se,defaults:void 0}};const ne=()=>{const e=q(),t=A();return t.$img||t._img||(t._img=V({...E,nuxt:{baseURL:e.app.baseURL}}))},ae={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},de=e=>{const t=m(()=>({provider:e.provider,preset:e.preset})),o=m(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),r=m(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:o,modifiers:r}},ce={...ae,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ue=M({name:"NuxtImg",props:ce,emits:["load","error"],setup:(e,t)=>{const o=ne(),r=de(e),s=S(!1),n=m(()=>o.getSizes(e.src,{...r.options.value,sizes:e.sizes,modifiers:{...r.modifiers.value,width:v(e.width),height:v(e.height)}})),i=m(()=>{const a={...r.attrs.value,"data-nuxt-img":""};return e.sizes&&(a.sizes=n.value.sizes,a.srcset=n.value.srcset),a}),c=m(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||s.value)return!1;if(typeof a=="string")return a;const h=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return o(e.src,{...r.modifiers.value,width:h[0],height:h[1],quality:h[2]||50},r.options.value)}),u=m(()=>e.sizes?n.value.src:o(e.src,r.modifiers.value,r.options.value)),g=m(()=>c.value?c.value:u.value);if(e.preload){const a=Object.values(n.value).every(h=>h);U({link:[{rel:"preload",as:"image",...a?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:g.value}}]})}const l=S(),f=A().isHydrating;return C(()=>{if(c.value){const a=new Image;a.src=u.value,a.onload=h=>{l.value&&(l.value.src=u.value),s.value=!0,t.emit("load",h)};return}l.value&&(l.value.complete&&f&&(l.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),l.value.onload=a=>{t.emit("load",a)},l.value.onerror=a=>{t.emit("error",a)})}),()=>G("img",{ref:l,key:g.value,src:g.value,...i.value,...t.attrs})}}),le={class:"flex flex-col max-h-48 overflow-hidden justify-start p-4 leading-normal"},fe={class:"mb-2 text-2xl font-ming font-bold tracking-tight text-red-500 hover:text-red-300"},ge={class:"overflow-hidden font-normal text-gray-500 hover:text-gray-700"},he=M({__name:"ArticleCard",props:{data:{}},setup(e){const t=e,o=m(()=>{var i;return(i=t.data)==null?void 0:i.title}),r=m(()=>{var i;return(i=t.data)==null?void 0:i.cover_image}),s=m(()=>{var i;return(i=t.data)==null?void 0:i.summary}),n=m(()=>{var i;return(i=t.data)==null?void 0:i.slug});return(i,c)=>{const u=ue,g=D;return z(),$(g,{to:y(n),class:"flex flex-col items-start border border-gray-200 rounded-lg shadow mb-2 md:flex-row bg-gray-300"},{default:H(()=>{var l,d;return[(l=y(r))!=null&&l.id?(z(),$(u,{key:0,class:"object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",provider:"directus",src:(d=y(r))==null?void 0:d.id,modifiers:{key:"cover"},alt:""},null,8,["src"])):T("",!0),_("div",le,[_("h5",fe,I(y(o)),1),_("p",ge,I(y(s)),1)])]}),_:1},8,["to"])}}});export{he as _};
