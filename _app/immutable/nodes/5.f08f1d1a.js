import{s as z,f as h,a as x,g as d,h as H,r as w,c as C,d as $,j as V,k as A,i as K,u as r,C as O,o as Y}from"../chunks/scheduler.31069e28.js";import{S as B,i as F,b as I,d as L,m as M,a as T,t as U,e as q}from"../chunks/index.0a0eb968.js";import{P as G}from"../chunks/Projects.507a8774.js";import{S as J}from"../chunks/Search.3571c1a9.js";import{p as N}from"../chunks/stores.83d21a25.js";function Q(v){let e,t,n,p="Search the Library",f,a,k="Use the search bar below to browse CodeVA&#39;s library of <strong>dozens of computer science lesson plans</strong> across all grades K-12. Use the filters to narrow down your search, or check out our curriculum projects listed below!",y,u,j,o,g,D="Our Projects",P,m,E="Check out our project groups below! You can use the dropdowns to filter the list to what you need, or search for a specific project using the search bar above.",S,l,b;return u=new J({props:{filter:!1}}),l=new G({props:{elems:v[0]}}),{c(){e=h("div"),t=h("div"),n=h("h1"),n.textContent=p,f=x(),a=h("p"),a.innerHTML=k,y=x(),I(u.$$.fragment),j=x(),o=h("div"),g=h("h1"),g.textContent=D,P=x(),m=h("p"),m.textContent=E,S=x(),I(l.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0});var i=H(e);t=d(i,"DIV",{class:!0});var c=H(t);n=d(c,"H1",{"data-svelte-h":!0}),w(n)!=="svelte-macydg"&&(n.textContent=p),f=C(c),a=d(c,"P",{"data-svelte-h":!0}),w(a)!=="svelte-u9xex"&&(a.innerHTML=k),y=C(c),L(u.$$.fragment,c),c.forEach($),j=C(i),o=d(i,"DIV",{class:!0});var _=H(o);g=d(_,"H1",{"data-svelte-h":!0}),w(g)!=="svelte-x33wwg"&&(g.textContent=D),P=C(_),m=d(_,"P",{style:!0,"data-svelte-h":!0}),w(m)!=="svelte-da9i1c"&&(m.textContent=E),S=C(_),L(l.$$.fragment,_),_.forEach($),i.forEach($),this.h()},h(){V(t,"class","section"),A(m,"margin-bottom","3rem"),V(o,"class","section"),V(e,"class","content has-text-centered")},m(s,i){K(s,e,i),r(e,t),r(t,n),r(t,f),r(t,a),r(t,y),M(u,t,null),r(e,j),r(e,o),r(o,g),r(o,P),r(o,m),r(o,S),M(l,o,null),b=!0},p(s,[i]){const c={};i&1&&(c.elems=s[0]),l.$set(c)},i(s){b||(T(u.$$.fragment,s),T(l.$$.fragment,s),b=!0)},o(s){U(u.$$.fragment,s),U(l.$$.fragment,s),b=!1},d(s){s&&$(e),q(u),q(l)}}}function R(v,e,t){let n;O(v,N,a=>t(3,n=a));let{data:p}=e,f=[];return Y(()=>{n.url.searchParams,t(0,f=p.projects)}),v.$$set=a=>{"data"in a&&t(1,p=a.data)},[f,p]}class st extends B{constructor(e){super(),F(this,e,R,Q,z,{data:1})}}export{st as component};