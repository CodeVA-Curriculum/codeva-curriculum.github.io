import{s as oe,f as b,a as q,x as ae,g as S,d as p,c as E,h as z,j as D,u as P,i as k,z as ie,o as ce,r as M,w as H,e as I,E as ne}from"../chunks/scheduler.34a17233.js";import{S as ue,i as fe,b as B,d as F,m as U,a as C,t as y,c as R,e as G,g as V}from"../chunks/index.3c6c1944.js";import{e as T}from"../chunks/each.e59479a4.js";import{S as he}from"../chunks/Search.0502aec4.js";import{a as se}from"../chunks/ElementCard.7c6824f0.js";import{p as de}from"../chunks/stores.5e560dac.js";import{e as O,b as me}from"../chunks/index.d0d225bb.js";function A(s,l){let n=0;for(let t=0;t<s.length;t++)n+=l.includes(s[t])?1:0;return n>0}function _e(s,l){const n=Array(s.length+1).fill(null).map(()=>Array(l.length+1).fill(0));for(let t=1;t<s.length+1;t++)for(let e=1;e<l.length+1;e++)s[t-1]===l[e-1]?n[t][e]=1+n[t-1][e-1]:n[t][e]=Math.max(n[t-1][e],n[t][e-1]);return n[s.length][l.length]}function X(s,l,n){var t;for(let e=0;e<l.length;e++){const i=_e(s.toLowerCase(),(t=l[e].title)==null?void 0:t.toLowerCase());l[e].score=i}return l=l.filter(e=>{var i,r;return((i=e.title)==null?void 0:i.toLowerCase().includes(s.toLowerCase()))||s.toLowerCase().includes((r=e.title)==null?void 0:r.toLowerCase())||e.score>e.title.length/2}),l.sort((e,i)=>{if(i.score==e.score){const r=["Lesson Plan","Unit of Study","Curricular Resource"];let o=0,a=0;for(let c=0;c<e.types.length;c++){const u=r.indexOf(e.types[c]);o<u&&(o=u)}for(let c=0;c<i.types.length;c++){const u=r.indexOf(i.types[c]);a<u&&(a=u)}return o-a}else return i.score-e.score}),l}function Y(s){for(let l=0;l<s.length;l++)console.log(`    ${l+1}: ${s[l].title}`)}function pe(s,l){let n={};for(const[t,e]of s.entries())n[t]?n[t].push(e):n[t]=[e];return n.grade&&(n.grade=O(n.grade)),n.subj&&(n.subj=me(n.subj,l.subjects)),n}async function ge(s,l){console.log("Starting with",l.length);let n=l.filter(e=>(s.grade?A(s.grade,O(e.grades)):!0)&&(s.subj?A(s.subj,e.subjects):!0)&&(s.aud?A(s.aud,e.audiences):!0)&&(s.type?A(s.type,e.types):!0)&&(s.tags?A(s.tag,e.tags):!0)),t=n.filter(e=>{if(e.standards&&s.sol){let i=e.standards.filter(r=>{const o=r.split("."),a=O([o[0]]);let c=[];for(let u=0;u<a.length;u++){const h=`${a[u]}.${o[1]}`+(o.length>2?`.${o[2]}`:"");c.push(h)}return c=c.filter(u=>{for(let h=0;h<s.sol.length;h++)return s.sol[h].includes(u);return!1}),c.length>0});return A(s.sol,e.standards)||i.length>0}else return!s.sol});return t=t.filter(e=>e.tags&&s.tag?A(s.tag,e.tags):!s.tag),t.sort((e,i)=>{const r=["Lesson Plan","Unit of Study","Curricular Resource"];let o=0,a=0;for(let c=0;c<e.types.length;c++){const u=r.indexOf(e.types[c]);o<u&&(o=u)}for(let c=0;c<i.types.length;c++){const u=r.indexOf(i.types[c]);a<u&&(a=u)}return o-a}),s.q&&(t=t.filter(e=>e.title.toLowerCase().includes(s.q[0].toLowerCase())),t=X(s.q[0],t),n=X(s.q[0],n)),n=n.filter(e=>!t.find(r=>e.pathData.path==r.pathData.path)),console.log(`
Ending with`,n.length,"related"),Y(n),console.log(`
Ending with`,t.length,"results"),Y(t),{related:n,results:t}}function Z(s,l,n){const t=s.slice();return t[5]=l[n],t}function j(s,l,n){const t=s.slice();return t[5]=l[n],t}function ee(s){let l,n="Search Our Library",t,e,i="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";return{c(){l=b("h1"),l.textContent=n,t=q(),e=b("div"),e.textContent=i,this.h()},l(r){l=S(r,"H1",{class:!0,"data-svelte-h":!0}),M(l)!=="svelte-t5ldik"&&(l.textContent=n),t=E(r),e=S(r,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1djaebf"&&(e.textContent=i),this.h()},h(){D(l,"class","low svelte-17s8c4q"),D(e,"class","has-text-left my-5")},m(r,o){k(r,l,o),k(r,t,o),k(r,e,o)},d(r){r&&(p(l),p(t),p(e))}}}function te(s){let l,n,t="Results",e,i,r,o,a,c,u,h,d="Related Materials",_,m,g,w;const J=[Ce,ve],x=[];function K(f,v){return f[0]&&f[0].length>0?0:1}i=K(s),r=x[i]=J[i](s);const Q=[ye,ke],L=[];function W(f,v){return f[1]&&f[1].length>0?0:1}return m=W(s),g=L[m]=Q[m](s),{c(){l=b("div"),n=b("h2"),n.textContent=t,e=q(),r.c(),o=q(),a=b("hr"),c=q(),u=b("div"),h=b("h2"),h.textContent=d,_=q(),g.c(),this.h()},l(f){l=S(f,"DIV",{class:!0});var v=z(l);n=S(v,"H2",{"data-svelte-h":!0}),M(n)!=="svelte-s6ksa4"&&(n.textContent=t),e=E(v),r.l(v),v.forEach(p),o=E(f),a=S(f,"HR",{}),c=E(f),u=S(f,"DIV",{class:!0});var $=z(u);h=S($,"H2",{"data-svelte-h":!0}),M(h)!=="svelte-1oww17h"&&(h.textContent=d),_=E($),g.l($),$.forEach(p),this.h()},h(){D(l,"class","section results has-text-left svelte-17s8c4q"),D(u,"class","section related has-text-left svelte-17s8c4q")},m(f,v){k(f,l,v),P(l,n),P(l,e),x[i].m(l,null),k(f,o,v),k(f,a,v),k(f,c,v),k(f,u,v),P(u,h),P(u,_),L[m].m(u,null),w=!0},p(f,v){let $=i;i=K(f),i===$?x[i].p(f,v):(V(),y(x[$],1,1,()=>{x[$]=null}),R(),r=x[i],r?r.p(f,v):(r=x[i]=J[i](f),r.c()),C(r,1),r.m(l,null));let N=m;m=W(f),m===N?L[m].p(f,v):(V(),y(L[N],1,1,()=>{L[N]=null}),R(),g=L[m],g?g.p(f,v):(g=L[m]=Q[m](f),g.c()),C(g,1),g.m(u,null))},i(f){w||(C(r),C(g),w=!0)},o(f){y(r),y(g),w=!1},d(f){f&&(p(l),p(o),p(a),p(c),p(u)),x[i].d(),L[m].d()}}}function ve(s){let l,n="<i>No Results</i>";return{c(){l=b("p"),l.innerHTML=n},l(t){l=S(t,"P",{"data-svelte-h":!0}),M(l)!=="svelte-1fqpei0"&&(l.innerHTML=n)},m(t,e){k(t,l,e)},p:H,i:H,o:H,d(t){t&&p(l)}}}function Ce(s){let l,n,t=T(s[0]),e=[];for(let r=0;r<t.length;r+=1)e[r]=le(j(s,t,r));const i=r=>y(e[r],1,1,()=>{e[r]=null});return{c(){for(let r=0;r<e.length;r+=1)e[r].c();l=I()},l(r){for(let o=0;o<e.length;o+=1)e[o].l(r);l=I()},m(r,o){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(r,o);k(r,l,o),n=!0},p(r,o){if(o&1){t=T(r[0]);let a;for(a=0;a<t.length;a+=1){const c=j(r,t,a);e[a]?(e[a].p(c,o),C(e[a],1)):(e[a]=le(c),e[a].c(),C(e[a],1),e[a].m(l.parentNode,l))}for(V(),a=t.length;a<e.length;a+=1)i(a);R()}},i(r){if(!n){for(let o=0;o<t.length;o+=1)C(e[o]);n=!0}},o(r){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)y(e[o]);n=!1},d(r){r&&p(l),ne(e,r)}}}function le(s){let l,n;return l=new se({props:{data:s[5]}}),{c(){B(l.$$.fragment)},l(t){F(l.$$.fragment,t)},m(t,e){U(l,t,e),n=!0},p(t,e){const i={};e&1&&(i.data=t[5]),l.$set(i)},i(t){n||(C(l.$$.fragment,t),n=!0)},o(t){y(l.$$.fragment,t),n=!1},d(t){G(l,t)}}}function ke(s){let l,n="<i>No Results</i>";return{c(){l=b("p"),l.innerHTML=n},l(t){l=S(t,"P",{"data-svelte-h":!0}),M(l)!=="svelte-1fqpei0"&&(l.innerHTML=n)},m(t,e){k(t,l,e)},p:H,i:H,o:H,d(t){t&&p(l)}}}function ye(s){let l,n,t=T(s[1]),e=[];for(let r=0;r<t.length;r+=1)e[r]=re(Z(s,t,r));const i=r=>y(e[r],1,1,()=>{e[r]=null});return{c(){for(let r=0;r<e.length;r+=1)e[r].c();l=I()},l(r){for(let o=0;o<e.length;o+=1)e[o].l(r);l=I()},m(r,o){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(r,o);k(r,l,o),n=!0},p(r,o){if(o&2){t=T(r[1]);let a;for(a=0;a<t.length;a+=1){const c=Z(r,t,a);e[a]?(e[a].p(c,o),C(e[a],1)):(e[a]=re(c),e[a].c(),C(e[a],1),e[a].m(l.parentNode,l))}for(V(),a=t.length;a<e.length;a+=1)i(a);R()}},i(r){if(!n){for(let o=0;o<t.length;o+=1)C(e[o]);n=!0}},o(r){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)y(e[o]);n=!1},d(r){r&&p(l),ne(e,r)}}}function re(s){let l,n;return l=new se({props:{data:s[5]}}),{c(){B(l.$$.fragment)},l(t){F(l.$$.fragment,t)},m(t,e){U(l,t,e),n=!0},p(t,e){const i={};e&2&&(i.data=t[5]),l.$set(i)},i(t){n||(C(l.$$.fragment,t),n=!0)},o(t){y(l.$$.fragment,t),n=!1},d(t){G(l,t)}}}function be(s){let l,n,t,e,i=s[2].size==1&&s[2].has("error"),r,o,a,c=s[2].size!=0&&s[2].has("error")==!1,u,h=i&&ee();o=new he({props:{filter:!1}});let d=c&&te(s);return{c(){l=b("meta"),n=q(),t=b("div"),e=b("div"),h&&h.c(),r=q(),B(o.$$.fragment),a=q(),d&&d.c(),this.h()},l(_){const m=ae("svelte-1k3j2y6",document.head);l=S(m,"META",{name:!0,content:!0}),m.forEach(p),n=E(_),t=S(_,"DIV",{class:!0});var g=z(t);e=S(g,"DIV",{class:!0});var w=z(e);h&&h.l(w),r=E(w),F(o.$$.fragment,w),w.forEach(p),a=E(g),d&&d.l(g),g.forEach(p),this.h()},h(){document.title="Search the CodeVA Curriculum Library",D(l,"name","Search the CodeVA Curriculum Library"),D(l,"content","Find free, sharable, and remixable computer science lessons, curricular resources, tutorials, and more aligned to the Virginia Computer Science Standards of Learning."),D(e,"class","section"),D(t,"class","search content has-text-centered")},m(_,m){P(document.head,l),k(_,n,m),k(_,t,m),P(t,e),h&&h.m(e,null),P(e,r),U(o,e,null),P(t,a),d&&d.m(t,null),u=!0},p(_,[m]){m&4&&(i=_[2].size==1&&_[2].has("error")),i?h||(h=ee(),h.c(),h.m(e,r)):h&&(h.d(1),h=null),m&4&&(c=_[2].size!=0&&_[2].has("error")==!1),c?d?(d.p(_,m),m&4&&C(d,1)):(d=te(_),d.c(),C(d,1),d.m(t,null)):d&&(V(),y(d,1,1,()=>{d=null}),R())},i(_){u||(C(o.$$.fragment,_),C(d),u=!0)},o(_){y(o.$$.fragment,_),y(d),u=!1},d(_){_&&(p(n),p(t)),p(l),h&&h.d(),G(o),d&&d.d()}}}function Se(s,l,n){let t;ie(s,de,a=>n(4,t=a));let{data:e={frontmatter:[],meta:[]}}=l,i=[],r=[],o=new URLSearchParams;return ce(()=>{if(n(2,o=t.url.searchParams),t.url.searchParams.size==0){n(0,i=[]),n(1,r=[]);return}let a=pe(t.url.searchParams,e.meta);ge(a,e.frontmatter).then(u=>{n(0,i=u.results),n(1,r=u.related)})}),s.$$set=a=>{"data"in a&&n(3,e=a.data)},[i,r,o,e]}class Pe extends ue{constructor(l){super(),fe(this,l,Se,be,oe,{data:3})}}export{Pe as component};
