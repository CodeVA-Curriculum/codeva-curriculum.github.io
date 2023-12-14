import{s as D,f as m,a as y,g as v,h as $,r as x,c as T,d as c,j as o,i as M,u as p,v as B,w as L,x as z,y as K,z as X,A as Y,B as Z,C as ee,D as te}from"../chunks/scheduler.34a17233.js";import{S as I,i as O,b as J,d as Q,m as U,a as N,t as P,e as W}from"../chunks/index.3c6c1944.js";import{b as E}from"../chunks/paths.d01ae1e2.js";/* empty css                                                  */import{p as ae}from"../chunks/stores.e5e6acfa.js";const ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,se=!0,be=Object.freeze(Object.defineProperty({__proto__:null,prerender:se},Symbol.toStringTag,{value:"Module"}));const re=""+new URL("../assets/CodeVA_Logo_Secondary.18b59f22.png",import.meta.url).href;function ie(i){let t,s,a,r=`<img alt="The CodeVA Logo" src="${re}" height="28"/>`,u,n,d,l,e,f,C,A,V,H,g,b,q=`<a class="navbar-item" href="${E}/">Home</a> <a class="navbar-item" href="${E}/library">Search Our Library</a> <a target="_blank" class="navbar-item" href="https://goopenva.org/profile/18746">GoOpenVA</a> <a class="navbar-item" href="${E}/contact">Contact Us!</a>`,S,j,k;return{c(){t=m("nav"),s=m("div"),a=m("a"),a.innerHTML=r,u=y(),n=m("button"),d=m("span"),l=y(),e=m("span"),f=y(),C=m("span"),H=y(),g=m("div"),b=m("div"),b.innerHTML=q,this.h()},l(_){t=v(_,"NAV",{class:!0});var h=$(t);s=v(h,"DIV",{class:!0});var G=$(s);a=v(G,"A",{class:!0,href:!0,"data-svelte-h":!0}),x(a)!=="svelte-j97leh"&&(a.innerHTML=r),u=T(G),n=v(G,"BUTTON",{class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0});var w=$(n);d=v(w,"SPAN",{"aria-hidden":!0}),$(d).forEach(c),l=T(w),e=v(w,"SPAN",{"aria-hidden":!0}),$(e).forEach(c),f=T(w),C=v(w,"SPAN",{"aria-hidden":!0}),$(C).forEach(c),w.forEach(c),G.forEach(c),H=T(h),g=v(h,"DIV",{id:!0,class:!0});var F=$(g);b=v(F,"DIV",{class:!0,"data-svelte-h":!0}),x(b)!=="svelte-kmpvla"&&(b.innerHTML=q),F.forEach(c),h.forEach(c),this.h()},h(){o(a,"class","navbar-item"),o(a,"href",E+"/"),o(d,"aria-hidden","true"),o(e,"aria-hidden","true"),o(C,"aria-hidden","true"),o(n,"class",A="navbar-burger "+(i[0].active?"is-active":"")),o(n,"aria-label","menu"),o(n,"aria-expanded",V=i[0].active),o(n,"data-target","nav-menu"),o(s,"class","navbar-brand logo"),o(b,"class","navbar-end"),o(g,"id","nav-menu"),o(g,"class",S="navbar-menu "+(i[0].active?"is-active":"")),o(t,"class","navbar svelte-niqltt")},m(_,h){M(_,t,h),p(t,s),p(s,a),p(s,u),p(s,n),p(n,d),p(n,l),p(n,e),p(n,f),p(n,C),p(t,H),p(t,g),p(g,b),j||(k=B(n,"click",i[1]),j=!0)},p(_,[h]){h&1&&A!==(A="navbar-burger "+(_[0].active?"is-active":""))&&o(n,"class",A),h&1&&V!==(V=_[0].active)&&o(n,"aria-expanded",V),h&1&&S!==(S="navbar-menu "+(_[0].active?"is-active":""))&&o(g,"class",S)},i:L,o:L,d(_){_&&c(t),j=!1,k()}}}function oe(i,t,s){let a={active:!1};function r(){s(0,a.active=!a.active,a)}return[a,r]}class le extends I{constructor(t){super(),O(this,t,oe,ie,D,{})}}const{document:R}=ne;function ce(i){let t,s="",a,r,u=`window.dataLayer = window.dataLayer || []
  
      function gtag() {
        dataLayer.push(arguments)
      }
  
      gtag('js', new Date())
      gtag('config', 'G-GGRJWQV0FT')`;return{c(){t=m("script"),t.innerHTML=s,r=m("script"),r.textContent=u,this.h()},l(n){const d=z("svelte-1yo266e",R.head);t=v(d,"SCRIPT",{src:!0,"data-svelte-h":!0}),x(t)!=="svelte-1gdm8qx"&&(t.innerHTML=s),r=v(d,"SCRIPT",{"data-svelte-h":!0}),x(r)!=="svelte-12st24n"&&(r.textContent=u),d.forEach(c),this.h()},h(){t.async=!0,K(t.src,a="https://www.googletagmanager.com/gtag/js?id=G-GGRJWQV0FT")||o(t,"src",a)},m(n,d){p(R.head,t),p(R.head,r)},p:L,i:L,o:L,d(n){c(t),c(r)}}}function ue(i,t,s){let a;return X(i,ae,r=>s(0,a=r)),i.$$.update=()=>{i.$$.dirty&1&&typeof gtag<"u"&&gtag("config","G-GGRJWQV0FT",{page_title:document.title,page_path:a.url.pathname})},[a]}class de extends I{constructor(t){super(),O(this,t,ue,ce,D,{})}}function fe(i){let t,s,a,r,u,n;s=new de({}),r=new le({});const d=i[1].default,l=Y(d,i,i[0],null);return{c(){t=y(),J(s.$$.fragment),a=y(),J(r.$$.fragment),u=y(),l&&l.c(),this.h()},l(e){z("svelte-dcig5l",document.head).forEach(c),t=T(e),Q(s.$$.fragment,e),a=T(e),Q(r.$$.fragment,e),u=T(e),l&&l.l(e),this.h()},h(){document.title="CodeVA Curriculum Library"},m(e,f){M(e,t,f),U(s,e,f),M(e,a,f),U(r,e,f),M(e,u,f),l&&l.m(e,f),n=!0},p(e,[f]){l&&l.p&&(!n||f&1)&&Z(l,d,e,e[0],n?te(d,e[0],f,null):ee(e[0]),null)},i(e){n||(N(s.$$.fragment,e),N(r.$$.fragment,e),N(l,e),n=!0)},o(e){P(s.$$.fragment,e),P(r.$$.fragment,e),P(l,e),n=!1},d(e){e&&(c(t),c(a),c(u)),W(s,e),W(r,e),l&&l.d(e)}}}function pe(i,t,s){let{$$slots:a={},$$scope:r}=t;return i.$$set=u=>{"$$scope"in u&&s(0,r=u.$$scope)},[r,a]}class $e extends I{constructor(t){super(),O(this,t,pe,fe,D,{})}}export{$e as component,be as universal};
