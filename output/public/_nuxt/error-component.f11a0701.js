import{o as m,c as E,n as f,g,u as s,d as n,_ as a}from"./entry.4f9e4fd1.js";const k={__name:"nuxt-error-page",props:{error:Object},setup(c){const u=c,{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),o=r===404,i=t.statusMessage??(o?"Page Not Found":"Internal Server Error"),p=t.message||t.toString(),_=void 0,d=o?n(()=>a(()=>import("./error-404.5ae362a8.js"),["./error-404.5ae362a8.js","./entry.4f9e4fd1.js","./entry.1f3d5f27.css","./error-404.8bdbaeb8.css"],import.meta.url).then(e=>e.default||e)):n(()=>a(()=>import("./error-500.59c22e07.js"),["./error-500.59c22e07.js","./entry.4f9e4fd1.js","./entry.1f3d5f27.css","./error-500.b63a96f5.css"],import.meta.url).then(e=>e.default||e));return(e,l)=>(m(),E(s(d),f(g({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},h=k;export{h as default};
