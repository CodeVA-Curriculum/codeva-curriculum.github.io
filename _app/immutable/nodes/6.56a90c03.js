import{s as ne,a as H,f as k,x as ae,d as p,c as L,g as j,h as D,r as N,j as A,i as M,u,E as O,o as oe,l as S,m as G,n as R,e as z}from"../chunks/scheduler.34a17233.js";import{S as re,i as ce,b as ie,d as fe,m as he,a as _e,t as ue,e as de}from"../chunks/index.3c6c1944.js";import{e as P}from"../chunks/each.e59479a4.js";import{P as me}from"../chunks/Projects.ea357f29.js";import{s as F}from"../chunks/index.ab9c858a.js";function J(o,s,l){const t=o.slice();return t[2]=s[l],t}function Q(o,s,l){const t=o.slice();return t[5]=s[l],t[7]=l,t}function W(o,s,l){const t=o.slice();return t[8]=s[l],t[7]=l,t}function X(o,s,l){const t=o.slice();return t[10]=s[l],t}function Z(o){let s=o[10]+"",l;return{c(){l=S(s)},l(t){l=G(t,s)},m(t,a){M(t,l,a)},p(t,a){a&1&&s!==(s=t[10]+"")&&R(l,s)},d(t){t&&p(l)}}}function ee(o){let s;return{c(){s=S(", ")},l(l){s=G(l,", ")},m(l,t){M(l,s,t)},d(l){l&&p(s)}}}function te(o){let s=o[8]+"",l,t,a=o[2].subjects.length>1&&o[7]<o[2].subjects.length-1&&ee();return{c(){l=S(s),a&&a.c(),t=z()},l(r){l=G(r,s),a&&a.l(r),t=z()},m(r,g){M(r,l,g),a&&a.m(r,g),M(r,t,g)},p(r,g){g&1&&s!==(s=r[8]+"")&&R(l,s),r[2].subjects.length>1&&r[7]<r[2].subjects.length-1?a||(a=ee(),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(r){r&&(p(l),p(t)),a&&a.d(r)}}}function pe(o){let s;return{c(){s=S(", ")},l(l){s=G(l,", ")},m(l,t){M(l,s,t)},d(l){l&&p(s)}}}function le(o){let s=o[5]+"",l,t=o[7]!=0&&pe();return{c(){t&&t.c(),l=S(s)},l(a){t&&t.l(a),l=G(a,s)},m(a,r){t&&t.m(a,r),M(a,l,r)},p(a,r){r&1&&s!==(s=a[5]+"")&&R(l,s)},d(a){a&&p(l),t&&t.d(a)}}}function se(o){let s,l,t,a=o[2].title+"",r,g,y,V,C,E,B,w,T,$=P(o[2].grades),d=[];for(let n=0;n<$.length;n+=1)d[n]=Z(X(o,$,n));let b=P(o[2].subjects),_=[];for(let n=0;n<b.length;n+=1)_[n]=te(W(o,b,n));let q=P(o[2].types),m=[];for(let n=0;n<q.length;n+=1)m[n]=le(Q(o,q,n));return{c(){s=k("tr"),l=k("td"),t=k("a"),r=S(a),y=H(),V=k("td");for(let n=0;n<d.length;n+=1)d[n].c();C=H(),E=k("td");for(let n=0;n<_.length;n+=1)_[n].c();B=H(),w=k("td");for(let n=0;n<m.length;n+=1)m[n].c();T=H(),this.h()},l(n){s=j(n,"TR",{class:!0});var h=D(s);l=j(h,"TD",{});var e=D(l);t=j(e,"A",{href:!0});var c=D(t);r=G(c,a),c.forEach(p),e.forEach(p),y=L(h),V=j(h,"TD",{});var i=D(V);for(let f=0;f<d.length;f+=1)d[f].l(i);i.forEach(p),C=L(h),E=j(h,"TD",{});var x=D(E);for(let f=0;f<_.length;f+=1)_[f].l(x);x.forEach(p),B=L(h),w=j(h,"TD",{});var v=D(w);for(let f=0;f<m.length;f+=1)m[f].l(v);v.forEach(p),T=L(h),h.forEach(p),this.h()},h(){A(t,"href",g=F(o[2].pathData.path)),A(s,"class","svelte-hjy91q")},m(n,h){M(n,s,h),u(s,l),u(l,t),u(t,r),u(s,y),u(s,V);for(let e=0;e<d.length;e+=1)d[e]&&d[e].m(V,null);u(s,C),u(s,E);for(let e=0;e<_.length;e+=1)_[e]&&_[e].m(E,null);u(s,B),u(s,w);for(let e=0;e<m.length;e+=1)m[e]&&m[e].m(w,null);u(s,T)},p(n,h){if(h&1&&a!==(a=n[2].title+"")&&R(r,a),h&1&&g!==(g=F(n[2].pathData.path))&&A(t,"href",g),h&1){$=P(n[2].grades);let e;for(e=0;e<$.length;e+=1){const c=X(n,$,e);d[e]?d[e].p(c,h):(d[e]=Z(c),d[e].c(),d[e].m(V,null))}for(;e<d.length;e+=1)d[e].d(1);d.length=$.length}if(h&1){b=P(n[2].subjects);let e;for(e=0;e<b.length;e+=1){const c=W(n,b,e);_[e]?_[e].p(c,h):(_[e]=te(c),_[e].c(),_[e].m(E,null))}for(;e<_.length;e+=1)_[e].d(1);_.length=b.length}if(h&1){q=P(n[2].types);let e;for(e=0;e<q.length;e+=1){const c=Q(n,q,e);m[e]?m[e].p(c,h):(m[e]=le(c),m[e].c(),m[e].m(w,null))}for(;e<m.length;e+=1)m[e].d(1);m.length=q.length}},d(n){n&&p(s),O(d,n),O(_,n),O(m,n)}}}function ge(o){let s,l,t,a='<h1>CodeVA&#39;s Curriculum Projects</h1> <p class="block">Below, you&#39;ll find a list of all of CodeVA&#39;s curriculum projects. Each of these projects is an effort to support K-12 Virginia teachers across a wide range of contexts in providing high-quality computer science learning experiences to their students. Click the links below to explore our resources!</p>',r,g,y,V,C,E,B="CodeVA's Curriculum Lesson Index",w,T,$="Here, you'll find a table with every single lesson plan and lesson sequence in CodeVA's library.",d,b,_,q='<tr class="headings"><td>Title</td> <td>Grade(s)</td> <td>Subject(s)</td> <td>Type(s)</td></tr>',m,n,h;y=new me({props:{list:!0,elems:o[1]}});let e=P(o[0].lessons),c=[];for(let i=0;i<e.length;i+=1)c[i]=se(J(o,e,i));return{c(){s=H(),l=k("div"),t=k("div"),t.innerHTML=a,r=H(),g=k("div"),ie(y.$$.fragment),V=H(),C=k("div"),E=k("h1"),E.textContent=B,w=H(),T=k("p"),T.textContent=$,d=H(),b=k("table"),_=k("thead"),_.innerHTML=q,m=H(),n=k("tbody");for(let i=0;i<c.length;i+=1)c[i].c();this.h()},l(i){ae("svelte-ce8qvf",document.head).forEach(p),s=L(i),l=j(i,"DIV",{class:!0});var v=D(l);t=j(v,"DIV",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-dv1fy9"&&(t.innerHTML=a),r=L(v),g=j(v,"DIV",{class:!0});var f=D(g);fe(y.$$.fragment,f),f.forEach(p),V=L(v),C=j(v,"DIV",{class:!0});var I=D(C);E=j(I,"H1",{"data-svelte-h":!0}),N(E)!=="svelte-5gxye7"&&(E.textContent=B),w=L(I),T=j(I,"P",{class:!0,"data-svelte-h":!0}),N(T)!=="svelte-1roekm4"&&(T.textContent=$),d=L(I),b=j(I,"TABLE",{class:!0});var K=D(b);_=j(K,"THEAD",{"data-svelte-h":!0}),N(_)!=="svelte-1chbki0"&&(_.innerHTML=q),m=L(K),n=j(K,"TBODY",{class:!0});var Y=D(n);for(let U=0;U<c.length;U+=1)c[U].l(Y);Y.forEach(p),K.forEach(p),I.forEach(p),v.forEach(p),this.h()},h(){document.title="Browse the Library",A(t,"class","section"),A(g,"class","section"),A(T,"class","block"),A(n,"class","svelte-hjy91q"),A(b,"class","table"),A(C,"class","section"),A(l,"class","lessons-browse container content")},m(i,x){M(i,s,x),M(i,l,x),u(l,t),u(l,r),u(l,g),he(y,g,null),u(l,V),u(l,C),u(C,E),u(C,w),u(C,T),u(C,d),u(C,b),u(b,_),u(b,m),u(b,n);for(let v=0;v<c.length;v+=1)c[v]&&c[v].m(n,null);h=!0},p(i,[x]){const v={};if(x&2&&(v.elems=i[1]),y.$set(v),x&1){e=P(i[0].lessons);let f;for(f=0;f<e.length;f+=1){const I=J(i,e,f);c[f]?c[f].p(I,x):(c[f]=se(I),c[f].c(),c[f].m(n,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=e.length}},i(i){h||(_e(y.$$.fragment,i),h=!0)},o(i){ue(y.$$.fragment,i),h=!1},d(i){i&&(p(s),p(l)),de(y),O(c,i)}}}function ve(o,s,l){let{data:t}=s,a=[];return oe(()=>{l(1,a=t.projects)}),o.$$set=r=>{"data"in r&&l(0,t=r.data)},[t,a]}class ye extends re{constructor(s){super(),ce(this,s,ve,ge,ne,{data:0})}}export{ye as component};
