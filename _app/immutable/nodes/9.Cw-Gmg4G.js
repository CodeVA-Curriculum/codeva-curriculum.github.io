<<<<<<<< HEAD:_app/immutable/nodes/9.Buaa495D.js
import{s as oe,e as b,k as q,l as ae,c as w,d as p,m as E,j as I,a as A,o as D,i as C,B as ie,q as ce,g as H,n as V,w as T,p as ne}from"../chunks/scheduler.C65pyL3v.js";import{S as ue,i as fe,c as O,b as F,m as U,t as k,a as y,e as M,d as G,g as R}from"../chunks/index.DEl-XE7C.js";import{a as N,b as he,e as z}from"../chunks/index.COuYqp-R.js";import{S as de,p as _e}from"../chunks/Search.DiI0zBgD.js";import{E as se}from"../chunks/ElementCard.AFxlU_3D.js";/* empty css                                                          */function P(s,r){let n=0;for(let t=0;t<s.length;t++)n+=r.includes(s[t])?1:0;return n>0}function me(s,r){const n=Array(s.length+1).fill(null).map(()=>Array(r.length+1).fill(0));for(let t=1;t<s.length+1;t++)for(let e=1;e<r.length+1;e++)s[t-1]===r[e-1]?n[t][e]=1+n[t-1][e-1]:n[t][e]=Math.max(n[t-1][e],n[t][e-1]);return n[s.length][r.length]}function X(s,r,n){var t;for(let e=0;e<r.length;e++){const i=me(s.toLowerCase(),(t=r[e].title)==null?void 0:t.toLowerCase());r[e].score=i}return r=r.filter(e=>{var i,l;return((i=e.title)==null?void 0:i.toLowerCase().includes(s.toLowerCase()))||s.toLowerCase().includes((l=e.title)==null?void 0:l.toLowerCase())||e.score>e.title.length/2}),r.sort((e,i)=>{if(i.score==e.score){const l=["Lesson Plan","Unit of Study","Curricular Resource"];let o=0,a=0;for(let c=0;c<e.types.length;c++){const u=l.indexOf(e.types[c]);o<u&&(o=u)}for(let c=0;c<i.types.length;c++){const u=l.indexOf(i.types[c]);a<u&&(a=u)}return o-a}else return i.score-e.score}),r}function Y(s){for(let r=0;r<s.length;r++)console.log(`    ${r+1}: ${s[r].title}`)}function pe(s,r){let n={};for(const[t,e]of s.entries())n[t]?n[t].push(e):n[t]=[e];return n.grade&&(n.grade=N(n.grade)),n.subj&&(n.subj=he(n.subj,r.subjects)),n}async function ge(s,r){console.log("Starting with",r.length);let n=r.filter(e=>(s.grade?P(s.grade,N(e.grades)):!0)&&(s.subj?P(s.subj,e.subjects):!0)&&(s.aud?P(s.aud,e.audiences):!0)&&(s.type?P(s.type,e.types):!0)&&(s.tags?P(s.tag,e.tags):!0)),t=n.filter(e=>{if(e.standards&&s.sol){let i=e.standards.filter(l=>{const o=l.split("."),a=N([o[0]]);let c=[];for(let u=0;u<a.length;u++){const h=`${a[u]}.${o[1]}`+(o.length>2?`.${o[2]}`:"");c.push(h)}return c=c.filter(u=>{for(let h=0;h<s.sol.length;h++)return s.sol[h].includes(u);return!1}),c.length>0});return P(s.sol,e.standards)||i.length>0}else return!s.sol});return t=t.filter(e=>e.tags&&s.tag?P(s.tag,e.tags):!s.tag),t.sort((e,i)=>{const l=["Unit of Study","Lesson Plan","Curricular Resource"];let o=0,a=0;for(let c=0;c<e.types.length;c++){const u=l.indexOf(e.types[c]);o<u&&(o=u)}for(let c=0;c<i.types.length;c++){const u=l.indexOf(i.types[c]);a<u&&(a=u)}return o-a}),s.q&&(t=t.filter(e=>e.title.toLowerCase().includes(s.q[0].toLowerCase())),t=X(s.q[0],t),n=X(s.q[0],n)),n=n.filter(e=>!t.find(l=>e.pathData.path==l.pathData.path)),n=n.splice(0,10),console.log(`
Ending with`,n.length,"related"),Y(n),console.log(`
Ending with`,t.length,"results"),Y(t),{related:n,results:t}}function Z(s,r,n){const t=s.slice();return t[5]=r[n],t}function j(s,r,n){const t=s.slice();return t[5]=r[n],t}function ee(s){let r,n="Search Our Library",t,e,i="CodeVA creates lesson plans, resources, and curriculum design guides to help teachers create and deliver high-quality, standards-aligned computer science learning experiences. Use the search bar and filters below to explore our library!";return{c(){r=b("h1"),r.textContent=n,t=q(),e=b("div"),e.textContent=i,this.h()},l(l){r=w(l,"H1",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-t5ldik"&&(r.textContent=n),t=E(l),e=w(l,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-cke4dw"&&(e.textContent=i),this.h()},h(){A(r,"class","low svelte-17s8c4q"),A(e,"class","has-text-left my-5")},m(l,o){C(l,r,o),C(l,t,o),C(l,e,o)},d(l){l&&(p(r),p(t),p(e))}}}function te(s){let r,n,t="Results",e,i,l,o,a,c,u,h,d="Related Materials",m,_,g,S;const J=[ke,ve],x=[];function K(f,v){return f[0]&&f[0].length>0?0:1}i=K(s),l=x[i]=J[i](s);const Q=[ye,Ce],L=[];function W(f,v){return f[1]&&f[1].length>0?0:1}return _=W(s),g=L[_]=Q[_](s),{c(){r=b("div"),n=b("h2"),n.textContent=t,e=q(),l.c(),o=q(),a=b("hr"),c=q(),u=b("div"),h=b("h2"),h.textContent=d,m=q(),g.c(),this.h()},l(f){r=w(f,"DIV",{class:!0});var v=I(r);n=w(v,"H2",{"data-svelte-h":!0}),H(n)!=="svelte-s6ksa4"&&(n.textContent=t),e=E(v),l.l(v),v.forEach(p),o=E(f),a=w(f,"HR",{}),c=E(f),u=w(f,"DIV",{class:!0});var $=I(u);h=w($,"H2",{"data-svelte-h":!0}),H(h)!=="svelte-1oww17h"&&(h.textContent=d),m=E($),g.l($),$.forEach(p),this.h()},h(){A(r,"class","section results has-text-left svelte-17s8c4q"),A(u,"class","section related has-text-left svelte-17s8c4q")},m(f,v){C(f,r,v),D(r,n),D(r,e),x[i].m(r,null),C(f,o,v),C(f,a,v),C(f,c,v),C(f,u,v),D(u,h),D(u,m),L[_].m(u,null),S=!0},p(f,v){let $=i;i=K(f),i===$?x[i].p(f,v):(R(),y(x[$],1,1,()=>{x[$]=null}),M(),l=x[i],l?l.p(f,v):(l=x[i]=J[i](f),l.c()),k(l,1),l.m(r,null));let B=_;_=W(f),_===B?L[_].p(f,v):(R(),y(L[B],1,1,()=>{L[B]=null}),M(),g=L[_],g?g.p(f,v):(g=L[_]=Q[_](f),g.c()),k(g,1),g.m(u,null))},i(f){S||(k(l),k(g),S=!0)},o(f){y(l),y(g),S=!1},d(f){f&&(p(r),p(o),p(a),p(c),p(u)),x[i].d(),L[_].d()}}}function ve(s){let r,n="<i>No Results</i>";return{c(){r=b("p"),r.innerHTML=n},l(t){r=w(t,"P",{"data-svelte-h":!0}),H(r)!=="svelte-1fqpei0"&&(r.innerHTML=n)},m(t,e){C(t,r,e)},p:V,i:V,o:V,d(t){t&&p(r)}}}function ke(s){let r,n,t=z(s[0]),e=[];for(let l=0;l<t.length;l+=1)e[l]=re(j(s,t,l));const i=l=>y(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();r=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);r=T()},m(l,o){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,o);C(l,r,o),n=!0},p(l,o){if(o&1){t=z(l[0]);let a;for(a=0;a<t.length;a+=1){const c=j(l,t,a);e[a]?(e[a].p(c,o),k(e[a],1)):(e[a]=re(c),e[a].c(),k(e[a],1),e[a].m(r.parentNode,r))}for(R(),a=t.length;a<e.length;a+=1)i(a);M()}},i(l){if(!n){for(let o=0;o<t.length;o+=1)k(e[o]);n=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)y(e[o]);n=!1},d(l){l&&p(r),ne(e,l)}}}function re(s){let r,n;return r=new se({props:{data:s[5]}}),{c(){O(r.$$.fragment)},l(t){F(r.$$.fragment,t)},m(t,e){U(r,t,e),n=!0},p(t,e){const i={};e&1&&(i.data=t[5]),r.$set(i)},i(t){n||(k(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){G(r,t)}}}function Ce(s){let r,n="<i>No Results</i>";return{c(){r=b("p"),r.innerHTML=n},l(t){r=w(t,"P",{"data-svelte-h":!0}),H(r)!=="svelte-1fqpei0"&&(r.innerHTML=n)},m(t,e){C(t,r,e)},p:V,i:V,o:V,d(t){t&&p(r)}}}function ye(s){let r,n,t=z(s[1]),e=[];for(let l=0;l<t.length;l+=1)e[l]=le(Z(s,t,l));const i=l=>y(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();r=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);r=T()},m(l,o){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,o);C(l,r,o),n=!0},p(l,o){if(o&2){t=z(l[1]);let a;for(a=0;a<t.length;a+=1){const c=Z(l,t,a);e[a]?(e[a].p(c,o),k(e[a],1)):(e[a]=le(c),e[a].c(),k(e[a],1),e[a].m(r.parentNode,r))}for(R(),a=t.length;a<e.length;a+=1)i(a);M()}},i(l){if(!n){for(let o=0;o<t.length;o+=1)k(e[o]);n=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)y(e[o]);n=!1},d(l){l&&p(r),ne(e,l)}}}function le(s){let r,n;return r=new se({props:{data:s[5]}}),{c(){O(r.$$.fragment)},l(t){F(r.$$.fragment,t)},m(t,e){U(r,t,e),n=!0},p(t,e){const i={};e&2&&(i.data=t[5]),r.$set(i)},i(t){n||(k(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){G(r,t)}}}function be(s){let r,n,t,e,i=s[2].size==1&&s[2].has("error"),l,o,a,c=s[2].size!=0&&s[2].has("error")==!1,u,h=i&&ee();o=new de({props:{filter:!1}});let d=c&&te(s);return{c(){r=b("meta"),n=q(),t=b("div"),e=b("div"),h&&h.c(),l=q(),O(o.$$.fragment),a=q(),d&&d.c(),this.h()},l(m){const _=ae("svelte-1k3j2y6",document.head);r=w(_,"META",{name:!0,content:!0}),_.forEach(p),n=E(m),t=w(m,"DIV",{class:!0});var g=I(t);e=w(g,"DIV",{class:!0});var S=I(e);h&&h.l(S),l=E(S),F(o.$$.fragment,S),S.forEach(p),a=E(g),d&&d.l(g),g.forEach(p),this.h()},h(){document.title="Search the CodeVA Curriculum Library",A(r,"name","Search the CodeVA Curriculum Library"),A(r,"content","Find free, sharable, and remixable computer science lessons, curricular resources, tutorials, and more aligned to the Virginia Computer Science Standards of Learning."),A(e,"class","section"),A(t,"class","search content has-text-centered")},m(m,_){D(document.head,r),C(m,n,_),C(m,t,_),D(t,e),h&&h.m(e,null),D(e,l),U(o,e,null),D(t,a),d&&d.m(t,null),u=!0},p(m,[_]){_&4&&(i=m[2].size==1&&m[2].has("error")),i?h||(h=ee(),h.c(),h.m(e,l)):h&&(h.d(1),h=null),_&4&&(c=m[2].size!=0&&m[2].has("error")==!1),c?d?(d.p(m,_),_&4&&k(d,1)):(d=te(m),d.c(),k(d,1),d.m(t,null)):d&&(R(),y(d,1,1,()=>{d=null}),M())},i(m){u||(k(o.$$.fragment,m),k(d),u=!0)},o(m){y(o.$$.fragment,m),y(d),u=!1},d(m){m&&(p(n),p(t)),p(r),h&&h.d(),G(o),d&&d.d()}}}function we(s,r,n){let t;ie(s,_e,a=>n(4,t=a));let{data:e={frontmatter:[],meta:[]}}=r,i=[],l=[],o=new URLSearchParams;return ce(async()=>{if(n(2,o=t.url.searchParams),t.url.searchParams.size==0){n(0,i=[]),n(1,l=[]);return}let a=pe(t.url.searchParams,e.meta);ge(a,e.frontmatter).then(u=>{n(0,i=u.results),n(1,l=u.related)})}),s.$$set=a=>{"data"in a&&n(3,e=a.data)},[i,l,o,e]}class Ae extends ue{constructor(r){super(),fe(this,r,we,be,oe,{data:3})}}export{Ae as component};
========
import{s as oe,e as b,k as q,l as ae,c as w,d as p,m as E,j as I,a as A,o as D,i as C,q as ie,r as ce,g as H,n as V,y as T,t as ne}from"../chunks/scheduler.zo65TFpw.js";import{S as ue,i as fe,c as B,b as F,m as U,t as k,a as y,e as M,d as G,g as R}from"../chunks/index.Bsfxrln0.js";import{e as z}from"../chunks/each.D6YF6ztN.js";import{S as he,p as de}from"../chunks/Search.DJZX5HkG.js";import{E as se}from"../chunks/ElementCard.Bvahy7Jb.js";import{e as O,a as _e}from"../chunks/index.JsWo1DXp.js";function P(s,r){let n=0;for(let t=0;t<s.length;t++)n+=r.includes(s[t])?1:0;return n>0}function me(s,r){const n=Array(s.length+1).fill(null).map(()=>Array(r.length+1).fill(0));for(let t=1;t<s.length+1;t++)for(let e=1;e<r.length+1;e++)s[t-1]===r[e-1]?n[t][e]=1+n[t-1][e-1]:n[t][e]=Math.max(n[t-1][e],n[t][e-1]);return n[s.length][r.length]}function X(s,r,n){var t;for(let e=0;e<r.length;e++){const i=me(s.toLowerCase(),(t=r[e].title)==null?void 0:t.toLowerCase());r[e].score=i}return r=r.filter(e=>{var i,l;return((i=e.title)==null?void 0:i.toLowerCase().includes(s.toLowerCase()))||s.toLowerCase().includes((l=e.title)==null?void 0:l.toLowerCase())||e.score>e.title.length/2}),r.sort((e,i)=>{if(i.score==e.score){const l=["Lesson Plan","Unit of Study","Curricular Resource"];let o=0,a=0;for(let c=0;c<e.types.length;c++){const u=l.indexOf(e.types[c]);o<u&&(o=u)}for(let c=0;c<i.types.length;c++){const u=l.indexOf(i.types[c]);a<u&&(a=u)}return o-a}else return i.score-e.score}),r}function Y(s){for(let r=0;r<s.length;r++)console.log(`    ${r+1}: ${s[r].title}`)}function pe(s,r){let n={};for(const[t,e]of s.entries())n[t]?n[t].push(e):n[t]=[e];return n.grade&&(n.grade=O(n.grade)),n.subj&&(n.subj=_e(n.subj,r.subjects)),n}async function ge(s,r){console.log("Starting with",r.length);let n=r.filter(e=>(s.grade?P(s.grade,O(e.grades)):!0)&&(s.subj?P(s.subj,e.subjects):!0)&&(s.aud?P(s.aud,e.audiences):!0)&&(s.type?P(s.type,e.types):!0)&&(s.tags?P(s.tag,e.tags):!0)),t=n.filter(e=>{if(e.standards&&s.sol){let i=e.standards.filter(l=>{const o=l.split("."),a=O([o[0]]);let c=[];for(let u=0;u<a.length;u++){const h=`${a[u]}.${o[1]}`+(o.length>2?`.${o[2]}`:"");c.push(h)}return c=c.filter(u=>{for(let h=0;h<s.sol.length;h++)return s.sol[h].includes(u);return!1}),c.length>0});return P(s.sol,e.standards)||i.length>0}else return!s.sol});return t=t.filter(e=>e.tags&&s.tag?P(s.tag,e.tags):!s.tag),t.sort((e,i)=>{const l=["Unit of Study","Lesson Plan","Curricular Resource"];let o=0,a=0;for(let c=0;c<e.types.length;c++){const u=l.indexOf(e.types[c]);o<u&&(o=u)}for(let c=0;c<i.types.length;c++){const u=l.indexOf(i.types[c]);a<u&&(a=u)}return o-a}),s.q&&(t=t.filter(e=>e.title.toLowerCase().includes(s.q[0].toLowerCase())),t=X(s.q[0],t),n=X(s.q[0],n)),n=n.filter(e=>!t.find(l=>e.pathData.path==l.pathData.path)),n=n.splice(0,10),console.log(`
Ending with`,n.length,"related"),Y(n),console.log(`
Ending with`,t.length,"results"),Y(t),{related:n,results:t}}function Z(s,r,n){const t=s.slice();return t[5]=r[n],t}function j(s,r,n){const t=s.slice();return t[5]=r[n],t}function ee(s){let r,n="Search Our Library",t,e,i="CodeVA creates lesson plans, resources, and curriculum design guides to help teachers create and deliver high-quality, standards-aligned computer science learning experiences. Use the search bar and filters below to explore our library!";return{c(){r=b("h1"),r.textContent=n,t=q(),e=b("div"),e.textContent=i,this.h()},l(l){r=w(l,"H1",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-t5ldik"&&(r.textContent=n),t=E(l),e=w(l,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-cke4dw"&&(e.textContent=i),this.h()},h(){A(r,"class","low svelte-17s8c4q"),A(e,"class","has-text-left my-5")},m(l,o){C(l,r,o),C(l,t,o),C(l,e,o)},d(l){l&&(p(r),p(t),p(e))}}}function te(s){let r,n,t="Results",e,i,l,o,a,c,u,h,d="Related Materials",m,_,g,S;const J=[ke,ve],x=[];function K(f,v){return f[0]&&f[0].length>0?0:1}i=K(s),l=x[i]=J[i](s);const Q=[ye,Ce],L=[];function W(f,v){return f[1]&&f[1].length>0?0:1}return _=W(s),g=L[_]=Q[_](s),{c(){r=b("div"),n=b("h2"),n.textContent=t,e=q(),l.c(),o=q(),a=b("hr"),c=q(),u=b("div"),h=b("h2"),h.textContent=d,m=q(),g.c(),this.h()},l(f){r=w(f,"DIV",{class:!0});var v=I(r);n=w(v,"H2",{"data-svelte-h":!0}),H(n)!=="svelte-s6ksa4"&&(n.textContent=t),e=E(v),l.l(v),v.forEach(p),o=E(f),a=w(f,"HR",{}),c=E(f),u=w(f,"DIV",{class:!0});var $=I(u);h=w($,"H2",{"data-svelte-h":!0}),H(h)!=="svelte-1oww17h"&&(h.textContent=d),m=E($),g.l($),$.forEach(p),this.h()},h(){A(r,"class","section results has-text-left svelte-17s8c4q"),A(u,"class","section related has-text-left svelte-17s8c4q")},m(f,v){C(f,r,v),D(r,n),D(r,e),x[i].m(r,null),C(f,o,v),C(f,a,v),C(f,c,v),C(f,u,v),D(u,h),D(u,m),L[_].m(u,null),S=!0},p(f,v){let $=i;i=K(f),i===$?x[i].p(f,v):(R(),y(x[$],1,1,()=>{x[$]=null}),M(),l=x[i],l?l.p(f,v):(l=x[i]=J[i](f),l.c()),k(l,1),l.m(r,null));let N=_;_=W(f),_===N?L[_].p(f,v):(R(),y(L[N],1,1,()=>{L[N]=null}),M(),g=L[_],g?g.p(f,v):(g=L[_]=Q[_](f),g.c()),k(g,1),g.m(u,null))},i(f){S||(k(l),k(g),S=!0)},o(f){y(l),y(g),S=!1},d(f){f&&(p(r),p(o),p(a),p(c),p(u)),x[i].d(),L[_].d()}}}function ve(s){let r,n="<i>No Results</i>";return{c(){r=b("p"),r.innerHTML=n},l(t){r=w(t,"P",{"data-svelte-h":!0}),H(r)!=="svelte-1fqpei0"&&(r.innerHTML=n)},m(t,e){C(t,r,e)},p:V,i:V,o:V,d(t){t&&p(r)}}}function ke(s){let r,n,t=z(s[0]),e=[];for(let l=0;l<t.length;l+=1)e[l]=re(j(s,t,l));const i=l=>y(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();r=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);r=T()},m(l,o){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,o);C(l,r,o),n=!0},p(l,o){if(o&1){t=z(l[0]);let a;for(a=0;a<t.length;a+=1){const c=j(l,t,a);e[a]?(e[a].p(c,o),k(e[a],1)):(e[a]=re(c),e[a].c(),k(e[a],1),e[a].m(r.parentNode,r))}for(R(),a=t.length;a<e.length;a+=1)i(a);M()}},i(l){if(!n){for(let o=0;o<t.length;o+=1)k(e[o]);n=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)y(e[o]);n=!1},d(l){l&&p(r),ne(e,l)}}}function re(s){let r,n;return r=new se({props:{data:s[5]}}),{c(){B(r.$$.fragment)},l(t){F(r.$$.fragment,t)},m(t,e){U(r,t,e),n=!0},p(t,e){const i={};e&1&&(i.data=t[5]),r.$set(i)},i(t){n||(k(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){G(r,t)}}}function Ce(s){let r,n="<i>No Results</i>";return{c(){r=b("p"),r.innerHTML=n},l(t){r=w(t,"P",{"data-svelte-h":!0}),H(r)!=="svelte-1fqpei0"&&(r.innerHTML=n)},m(t,e){C(t,r,e)},p:V,i:V,o:V,d(t){t&&p(r)}}}function ye(s){let r,n,t=z(s[1]),e=[];for(let l=0;l<t.length;l+=1)e[l]=le(Z(s,t,l));const i=l=>y(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();r=T()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);r=T()},m(l,o){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,o);C(l,r,o),n=!0},p(l,o){if(o&2){t=z(l[1]);let a;for(a=0;a<t.length;a+=1){const c=Z(l,t,a);e[a]?(e[a].p(c,o),k(e[a],1)):(e[a]=le(c),e[a].c(),k(e[a],1),e[a].m(r.parentNode,r))}for(R(),a=t.length;a<e.length;a+=1)i(a);M()}},i(l){if(!n){for(let o=0;o<t.length;o+=1)k(e[o]);n=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)y(e[o]);n=!1},d(l){l&&p(r),ne(e,l)}}}function le(s){let r,n;return r=new se({props:{data:s[5]}}),{c(){B(r.$$.fragment)},l(t){F(r.$$.fragment,t)},m(t,e){U(r,t,e),n=!0},p(t,e){const i={};e&2&&(i.data=t[5]),r.$set(i)},i(t){n||(k(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){G(r,t)}}}function be(s){let r,n,t,e,i=s[2].size==1&&s[2].has("error"),l,o,a,c=s[2].size!=0&&s[2].has("error")==!1,u,h=i&&ee();o=new he({props:{filter:!1}});let d=c&&te(s);return{c(){r=b("meta"),n=q(),t=b("div"),e=b("div"),h&&h.c(),l=q(),B(o.$$.fragment),a=q(),d&&d.c(),this.h()},l(m){const _=ae("svelte-1k3j2y6",document.head);r=w(_,"META",{name:!0,content:!0}),_.forEach(p),n=E(m),t=w(m,"DIV",{class:!0});var g=I(t);e=w(g,"DIV",{class:!0});var S=I(e);h&&h.l(S),l=E(S),F(o.$$.fragment,S),S.forEach(p),a=E(g),d&&d.l(g),g.forEach(p),this.h()},h(){document.title="Search the CodeVA Curriculum Library",A(r,"name","Search the CodeVA Curriculum Library"),A(r,"content","Find free, sharable, and remixable computer science lessons, curricular resources, tutorials, and more aligned to the Virginia Computer Science Standards of Learning."),A(e,"class","section"),A(t,"class","search content has-text-centered")},m(m,_){D(document.head,r),C(m,n,_),C(m,t,_),D(t,e),h&&h.m(e,null),D(e,l),U(o,e,null),D(t,a),d&&d.m(t,null),u=!0},p(m,[_]){_&4&&(i=m[2].size==1&&m[2].has("error")),i?h||(h=ee(),h.c(),h.m(e,l)):h&&(h.d(1),h=null),_&4&&(c=m[2].size!=0&&m[2].has("error")==!1),c?d?(d.p(m,_),_&4&&k(d,1)):(d=te(m),d.c(),k(d,1),d.m(t,null)):d&&(R(),y(d,1,1,()=>{d=null}),M())},i(m){u||(k(o.$$.fragment,m),k(d),u=!0)},o(m){y(o.$$.fragment,m),y(d),u=!1},d(m){m&&(p(n),p(t)),p(r),h&&h.d(),G(o),d&&d.d()}}}function we(s,r,n){let t;ie(s,de,a=>n(4,t=a));let{data:e={frontmatter:[],meta:[]}}=r,i=[],l=[],o=new URLSearchParams;return ce(async()=>{if(n(2,o=t.url.searchParams),t.url.searchParams.size==0){n(0,i=[]),n(1,l=[]);return}let a=pe(t.url.searchParams,e.meta);ge(a,e.frontmatter).then(u=>{n(0,i=u.results),n(1,l=u.related)})}),s.$$set=a=>{"data"in a&&n(3,e=a.data)},[i,l,o,e]}class Ae extends ue{constructor(r){super(),fe(this,r,we,be,oe,{data:3})}}export{Ae as component};
>>>>>>>> c1cf1d4d9602b180252a5482bf16aef6a2b2ff8d:_app/immutable/nodes/9.Cw-Gmg4G.js
