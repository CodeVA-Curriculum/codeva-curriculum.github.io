import{s as x,f as u,l as h,a as S,g as d,h as v,m as g,d as m,c as q,i as _,u as E,n as $,w as b,B as w}from"../chunks/scheduler.203e81c9.js";import{S as y,i as B}from"../chunks/index.31a6a4fe.js";import{p as C}from"../chunks/stores.e7ea3c75.js";function H(i){var f;let a,s=i[0].status+"",r,o,n,p=((f=i[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(s),o=S(),n=u("p"),c=h(p)},l(e){a=d(e,"H1",{});var t=v(a);r=g(t,s),t.forEach(m),o=q(e),n=d(e,"P",{});var l=v(n);c=g(l,p),l.forEach(m)},m(e,t){_(e,a,t),E(a,r),_(e,o,t),_(e,n,t),E(n,c)},p(e,[t]){var l;t&1&&s!==(s=e[0].status+"")&&$(r,s),t&1&&p!==(p=((l=e[0].error)==null?void 0:l.message)+"")&&$(c,p)},i:b,o:b,d(e){e&&(m(a),m(o),m(n))}}}function P(i,a,s){let r;return w(i,C,o=>s(0,r=o)),[r]}class A extends y{constructor(a){super(),B(this,a,P,H,x,{})}}export{A as component};
