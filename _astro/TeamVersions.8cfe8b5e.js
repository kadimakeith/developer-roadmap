import{_ as C,h as a,p as w}from"./hooks.module.6eb5c72e.js";import{a as D}from"./http.82ebf0f1.js";import{D as I}from"./dropdown.d1f25819.js";import{c as A,r as b,a as O,b as U}from"./resource-progress.e28c933e.js";import{g as _,d as R,s as S}from"./browser.bcc09af3.js";import{u as L}from"./use-outside-click.63bf96d6.js";import{u as z}from"./use-keydown.55c06bff.js";import{i as E}from"./jwt.f0e0aa9c.js";import{u as F}from"./use-auth.13ac07ad.js";import{u as G}from"./use-toast.fb52de5d.js";import{o as e}from"./jsxRuntime.module.c6f75409.js";import{k as K}from"./preact.module.346aa314.js";import"./toast.1fe7142d.js";import"./index.a98c85f5.js";function ae(v){const{t:d}=_();if(!E())return;const{resourceId:i,resourceType:m}=v,l=F(),x=G(),u=C(null),[y,N]=a(!0),[f,r]=a(!1),[T,P]=a(0),[p,j]=a([]),[t,c]=a(null);let n=!0;const h=t?t.team.avatar:l?.avatar,g=t?t.team.name:l?.name;t?.team.avatar||!t&&l?.avatar?n=!0:n=!1,L(u,()=>{r(!1)}),z("Escape",()=>{r(!1)});async function V(){const{response:s,error:o}=await D(`https://api.roadmap.sh/v1-get-team-versions?${new URLSearchParams({resourceId:i,resourceType:m})}`);if(o||!s){x.error(o?.message||"Failed to load team versions.");return}if(j(s),d){const $=s.find(k=>k.team._id===d)||null;c($)}setTimeout(()=>{N(!1),setTimeout(()=>{P(100)},50)},0)}return w(()=>{V().finally(()=>{})},[]),y||(w(()=>{if(A(),!t){R("t"),b(m,i).then();return}S({t:t.team._id}),b(m,i).then(()=>{t.config?.removed?.forEach(s=>{O(s,"removed")}),U()})},[t]),!p.length)?null:e("div",{className:`relative h-7 transition-opacity duration-500 sm:h-auto opacity-${T}`,children:[e("button",{className:"inline-flex h-7 items-center justify-between gap-1 rounded-md border px-1.5 py-1.5 text-xs font-medium hover:bg-gray-50 focus:outline-0 sm:h-8 sm:w-40 sm:px-3 sm:text-sm",onClick:()=>r(!f),children:[e("div",{className:"hidden w-full items-center justify-between sm:flex",children:[e("span",{className:"truncate",children:t?.team.name||"Team Versions"}),e("img",{alt:"Dropdown",src:I,class:"h-3 w-3 sm:h-4 sm:w-4"})]}),e("div",{className:"sm:hidden",children:n?e("img",{src:h?`https://dodrc8eu8m09s.cloudfront.net/avatars/${h}`:"/images/default-avatar.png",alt:`${g} Avatar`,className:"h-5 w-5 rounded-full object-cover"}):e("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs",children:g?.charAt(0).toUpperCase()})})]}),f&&e(K,{children:[e("div",{className:"fixed inset-0 z-40 block bg-black/20 sm:hidden","aria-hidden":"true"}),e("div",{ref:u,className:"fixed bottom-0 left-0 z-50 mt-1 h-fit w-full overflow-hidden rounded-md bg-white py-0.5 shadow-md sm:absolute sm:left-0 sm:right-0 sm:top-full sm:border",children:[e("button",{className:`flex h-8 w-full items-center justify-between px-3 py-1.5 text-xs font-medium hover:bg-gray-100 sm:text-sm ${t?"bg-white":"bg-gray-100"}`,onClick:()=>{c(null),r(!1)},children:e("div",{className:"flex w-full items-center justify-between",children:e("span",{className:"truncate",children:"Personal"})})}),p.map(s=>{const o=t?.team._id===s.team._id;return e("button",{className:`flex h-8 w-full items-center justify-between px-3 py-1.5 text-xs font-medium hover:bg-gray-100 sm:text-sm ${o?"bg-gray-100":"bg-white"}`,onClick:()=>{c(s),r(!1)},children:e("div",{className:"flex w-full items-center justify-between",children:e("span",{className:"truncate",children:s.team.name})})})})]})]})]})}export{ae as TeamVersions};
