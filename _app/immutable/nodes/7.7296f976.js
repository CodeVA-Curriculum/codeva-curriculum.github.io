import{s as _e,f as p,a as S,g as $,h as D,d,c as H,j as v,i as F,u as m,D as re,l as A,m as C,K as Be,n as U,w as qe,r as Se,C as Fe,k as Me,L as st,M as it,o as rt}from"../chunks/scheduler.203e81c9.js";import{S as de,i as ge,b as K,d as J,m as Q,a as V,t as T,e as W,g as ue,c as me}from"../chunks/index.31a6a4fe.js";import{e as R}from"../chunks/each.e59479a4.js";import{b as Pe}from"../chunks/paths.ccbcdb87.js";import{F as He,a as ft,s as Ee,b as ot}from"../chunks/metaUtils.b77d4958.js";import{f as ct,E as ht}from"../chunks/ElementCard.b1ad9225.js";import{S as ut}from"../chunks/StandardTag.cceadcee.js";function Oe(i,e,l){const a=i.slice();return a[2]=e[l],a}function Re(i){let e,l,a=i[2].title+"",o,r,s;return{c(){e=p("li"),l=p("a"),o=A(a),this.h()},l(f){e=$(f,"LI",{class:!0});var u=D(e);l=$(u,"A",{href:!0});var n=D(l);o=C(n,a),n.forEach(d),u.forEach(d),this.h()},h(){v(l,"href",r=Ee(i[2].pathData.path).replace("meta","")),v(e,"class",s=Be(i[2].title==i[1]?"is-active":"")+" svelte-1l145dm")},m(f,u){F(f,e,u),m(e,l),m(l,o)},p(f,u){u&1&&a!==(a=f[2].title+"")&&U(o,a),u&1&&r!==(r=Ee(f[2].pathData.path).replace("meta",""))&&v(l,"href",r),u&3&&s!==(s=Be(f[2].title==f[1]?"is-active":"")+" svelte-1l145dm")&&v(e,"class",s)},d(f){f&&d(e)}}}function mt(i){let e,l,a,o,r,s,f;r=new He({props:{class:"mt-1",icon:ft}});let u=R(i[0]),n=[];for(let t=0;t<u.length;t+=1)n[t]=Re(Oe(i,u,t));return{c(){e=p("div"),l=p("ul"),a=p("li"),o=p("a"),K(r.$$.fragment),s=S();for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=$(t,"DIV",{class:!0,"aria-label":!0});var c=D(e);l=$(c,"UL",{class:!0});var h=D(l);a=$(h,"LI",{class:!0});var _=D(a);o=$(_,"A",{href:!0});var g=D(o);J(r.$$.fragment,g),g.forEach(d),_.forEach(d),s=H(h);for(let w=0;w<n.length;w+=1)n[w].l(h);h.forEach(d),c.forEach(d),this.h()},h(){v(o,"href",Pe+"/library"),v(a,"class","svelte-1l145dm"),v(l,"class","svelte-1l145dm"),v(e,"class","breadcrumb"),v(e,"aria-label","breadcrumbs")},m(t,c){F(t,e,c),m(e,l),m(l,a),m(a,o),Q(r,o,null),m(l,s);for(let h=0;h<n.length;h+=1)n[h]&&n[h].m(l,null);f=!0},p(t,[c]){if(c&3){u=R(t[0]);let h;for(h=0;h<u.length;h+=1){const _=Oe(t,u,h);n[h]?n[h].p(_,c):(n[h]=Re(_),n[h].c(),n[h].m(l,null))}for(;h<n.length;h+=1)n[h].d(1);n.length=u.length}},i(t){f||(V(r.$$.fragment,t),f=!0)},o(t){T(r.$$.fragment,t),f=!1},d(t){t&&d(e),W(r),re(n,t)}}}function _t(i,e,l){let{nodes:a}=e,{here:o}=e;return i.$$set=r=>{"nodes"in r&&l(0,a=r.nodes),"here"in r&&l(1,o=r.here)},[a,o]}class dt extends de{constructor(e){super(),ge(this,e,_t,mt,_e,{nodes:0,here:1})}}function Ne(i,e,l){const a=i.slice();return a[2]=e[l],a[4]=l,a}function Ue(i){let e=i[4]!=0?", ":"",l,a=i[2]+"",o;return{c(){l=A(e),o=A(a)},l(r){l=C(r,e),o=C(r,a)},m(r,s){F(r,l,s),F(r,o,s)},p(r,s){s&1&&a!==(a=r[2]+"")&&U(o,a)},d(r){r&&(d(l),d(o))}}}function gt(i){let e,l,a,o,r=i[0].length>1?"s":"",s,f,u,n=R(i[0]),t=[];for(let c=0;c<n.length;c+=1)t[c]=Ue(Ne(i,n,c));return{c(){e=p("div"),l=p("p"),a=p("strong"),o=A(i[1]),s=A(r),f=A(":"),u=S();for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=$(c,"DIV",{class:!0});var h=D(e);l=$(h,"P",{class:!0});var _=D(l);a=$(_,"STRONG",{});var g=D(a);o=C(g,i[1]),s=C(g,r),f=C(g,":"),g.forEach(d),u=H(_);for(let w=0;w<t.length;w+=1)t[w].l(_);_.forEach(d),h.forEach(d),this.h()},h(){v(l,"class","svelte-1p1w4x6"),v(e,"class","lister metadata")},m(c,h){F(c,e,h),m(e,l),m(l,a),m(a,o),m(a,s),m(a,f),m(l,u);for(let _=0;_<t.length;_+=1)t[_]&&t[_].m(l,null)},p(c,[h]){if(h&2&&U(o,c[1]),h&1&&r!==(r=c[0].length>1?"s":"")&&U(s,r),h&1){n=R(c[0]);let _;for(_=0;_<n.length;_+=1){const g=Ne(c,n,_);t[_]?t[_].p(g,h):(t[_]=Ue(g),t[_].c(),t[_].m(l,null))}for(;_<t.length;_+=1)t[_].d(1);t.length=n.length}},i:qe,o:qe,d(c){c&&d(e),re(t,c)}}}function vt(i,e,l){let{items:a}=e,{title:o="Lorem ipsum"}=e;return i.$$set=r=>{"items"in r&&l(0,a=r.items),"title"in r&&l(1,o=r.title)},[a,o]}class Ge extends de{constructor(e){super(),ge(this,e,vt,gt,_e,{items:0,title:1})}}function ze(i,e,l){const a=i.slice();return a[1]=e[l],a[3]=l,a}function ye(i){let e,l,a,o=i[0].parents.length>1?"s":"",r,s,f=R(i[0].parents),u=[];for(let n=0;n<f.length;n+=1)u[n]=Je(ze(i,f,n));return{c(){e=p("p"),l=A(`Part of the 
                `);for(let n=0;n<u.length;n+=1)u[n].c();a=A(`
                project`),r=A(o),s=A(".")},l(n){e=$(n,"P",{});var t=D(e);l=C(t,`Part of the 
                `);for(let c=0;c<u.length;c+=1)u[c].l(t);a=C(t,`
                project`),r=C(t,o),s=C(t,"."),t.forEach(d)},m(n,t){F(n,e,t),m(e,l);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(e,null);m(e,a),m(e,r),m(e,s)},p(n,t){if(t&1){f=R(n[0].parents);let c;for(c=0;c<f.length;c+=1){const h=ze(n,f,c);u[c]?u[c].p(h,t):(u[c]=Je(h),u[c].c(),u[c].m(e,a))}for(;c<u.length;c+=1)u[c].d(1);u.length=f.length}t&1&&o!==(o=n[0].parents.length>1?"s":"")&&U(r,o)},d(n){n&&d(e),re(u,n)}}}function pt(i){let e;return{c(){e=A(",")},l(l){e=C(l,",")},m(l,a){F(l,e,a)},d(l){l&&d(e)}}}function Ke(i){let e;return{c(){e=A("and")},l(l){e=C(l,"and")},m(l,a){F(l,e,a)},d(l){l&&d(e)}}}function Je(i){let e,l,a,o,r=i[1].title+"",s,f,u=i[3]!=0&&pt(),n=i[3]==i[0].parents.length-1&&i[0].parents.length>1&&Ke();return{c(){u&&u.c(),e=S(),n&&n.c(),l=S(),a=p("a"),o=p("i"),s=A(r),this.h()},l(t){u&&u.l(t),e=H(t),n&&n.l(t),l=H(t),a=$(t,"A",{"data-sveltekit-reload":!0,href:!0});var c=D(a);o=$(c,"I",{});var h=D(o);s=C(h,r),h.forEach(d),c.forEach(d),this.h()},h(){v(a,"data-sveltekit-reload",""),v(a,"href",f=Ee(i[1].pathData.path).replace("meta",""))},m(t,c){u&&u.m(t,c),F(t,e,c),n&&n.m(t,c),F(t,l,c),F(t,a,c),m(a,o),m(o,s)},p(t,c){t[3]==t[0].parents.length-1&&t[0].parents.length>1?n||(n=Ke(),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null),c&1&&r!==(r=t[1].title+"")&&U(s,r),c&1&&f!==(f=Ee(t[1].pathData.path).replace("meta",""))&&v(a,"href",f)},d(t){t&&(d(e),d(l),d(a)),u&&u.d(t),n&&n.d(t)}}}function Qe(i){let e,l,a=i[0].members.length>0?"Group":"",o,r,s,f,u;return s=new He({props:{class:"ml-2",icon:ot}}),{c(){e=p("a"),l=A("Download "),o=A(a),r=A(` PDF
                    `),K(s.$$.fragment),this.h()},l(n){e=$(n,"A",{class:!0,href:!0});var t=D(e);l=C(t,"Download "),o=C(t,a),r=C(t,` PDF
                    `),J(s.$$.fragment,t),t.forEach(d),this.h()},h(){v(e,"class","button"),v(e,"href",f=i[0].links.pdf)},m(n,t){F(n,e,t),m(e,l),m(e,o),m(e,r),Q(s,e,null),u=!0},p(n,t){(!u||t&1)&&a!==(a=n[0].members.length>0?"Group":"")&&U(o,a),(!u||t&1&&f!==(f=n[0].links.pdf))&&v(e,"href",f)},i(n){u||(V(s.$$.fragment,n),u=!0)},o(n){T(s.$$.fragment,n),u=!1},d(n){n&&d(e),W(s)}}}function $t(i){let e,l,a,o,r,s,f,u,n,t,c,h=i[0].title+"",_,g,w,I,te=i[0].authors+"",j,B,b,E,L,G,M,le,Y,De,Z,se,Le="License: ",ae,ie=i[0].license.name+"",ve,pe,we,X,y,Ie,fe=i[0].members.length>0?"Group":"",$e,Ve,ne,be,Ae,z;l=new dt({props:{nodes:[...i[0].parents,i[0]],here:i[0].title}});let O=i[0].parents.length>0&&ye(i);L=new Ge({props:{title:"Subject",items:i[0].subjects}}),M=new Ge({props:{title:"Grade",items:i[0].grades}}),Y=new Ge({props:{title:"Material Type",items:i[0].types}}),ne=new He({props:{class:"ml-2",icon:ct}});let q=i[0].links.pdf&&Qe(i);return{c(){e=p("div"),K(l.$$.fragment),a=S(),o=p("div"),r=p("div"),s=p("img"),n=S(),t=p("div"),c=p("h1"),_=A(h),g=S(),w=p("p"),I=A("by "),j=A(te),B=S(),O&&O.c(),b=S(),E=p("div"),K(L.$$.fragment),G=S(),K(M.$$.fragment),le=S(),K(Y.$$.fragment),De=S(),Z=p("p"),se=p("strong"),se.textContent=Le,ae=p("a"),ve=A(ie),we=S(),X=p("div"),y=p("a"),Ie=A("View "),$e=A(fe),Ve=A(` on Google Drive
                    `),K(ne.$$.fragment),Ae=S(),q&&q.c(),this.h()},l(k){e=$(k,"DIV",{class:!0});var P=D(e);J(l.$$.fragment,P),a=H(P),o=$(P,"DIV",{class:!0});var x=D(o);r=$(x,"DIV",{class:!0});var oe=D(r);s=$(oe,"IMG",{alt:!0,src:!0}),oe.forEach(d),n=H(x),t=$(x,"DIV",{class:!0});var N=D(t);c=$(N,"H1",{});var ce=D(c);_=C(ce,h),ce.forEach(d),g=H(N),w=$(N,"P",{class:!0});var Ce=D(w);I=C(Ce,"by "),j=C(Ce,te),Ce.forEach(d),B=H(N),O&&O.l(N),b=H(N),E=$(N,"DIV",{class:!0});var ee=D(E);J(L.$$.fragment,ee),G=H(ee),J(M.$$.fragment,ee),le=H(ee),J(Y.$$.fragment,ee),De=H(ee),Z=$(ee,"P",{style:!0});var je=D(Z);se=$(je,"STRONG",{"data-svelte-h":!0}),Se(se)!=="svelte-gp2stt"&&(se.textContent=Le),ae=$(je,"A",{href:!0});var Te=D(ae);ve=C(Te,ie),Te.forEach(d),je.forEach(d),ee.forEach(d),we=H(N),X=$(N,"DIV",{class:!0});var ke=D(X);y=$(ke,"A",{class:!0,href:!0});var he=D(y);Ie=C(he,"View "),$e=C(he,fe),Ve=C(he,` on Google Drive
                    `),J(ne.$$.fragment,he),he.forEach(d),Ae=H(ke),q&&q.l(ke),ke.forEach(d),N.forEach(d),x.forEach(d),P.forEach(d),this.h()},h(){v(s,"alt",f="A logo for the "+i[0].title+" resource from CodeVA"),Fe(s.src,u="/images/"+i[0].image)||v(s,"src",u),v(r,"class","column is-one-quarter"),v(w,"class","heading"),v(ae,"href",pe=i[0].license.link),Me(Z,"font-size","smaller"),Me(Z,"margin","0 auto"),v(E,"class","metadata svelte-18zqis6"),v(y,"class","button is-primary"),v(y,"href",be=i[0].links.drive),v(X,"class","buttons is-left my-5"),v(t,"class","column ml-5"),v(o,"class","columns"),v(e,"class","document-header content")},m(k,P){F(k,e,P),Q(l,e,null),m(e,a),m(e,o),m(o,r),m(r,s),m(o,n),m(o,t),m(t,c),m(c,_),m(t,g),m(t,w),m(w,I),m(w,j),m(t,B),O&&O.m(t,null),m(t,b),m(t,E),Q(L,E,null),m(E,G),Q(M,E,null),m(E,le),Q(Y,E,null),m(E,De),m(E,Z),m(Z,se),m(Z,ae),m(ae,ve),m(t,we),m(t,X),m(X,y),m(y,Ie),m(y,$e),m(y,Ve),Q(ne,y,null),m(X,Ae),q&&q.m(X,null),z=!0},p(k,[P]){const x={};P&1&&(x.nodes=[...k[0].parents,k[0]]),P&1&&(x.here=k[0].title),l.$set(x),(!z||P&1&&f!==(f="A logo for the "+k[0].title+" resource from CodeVA"))&&v(s,"alt",f),(!z||P&1&&!Fe(s.src,u="/images/"+k[0].image))&&v(s,"src",u),(!z||P&1)&&h!==(h=k[0].title+"")&&U(_,h),(!z||P&1)&&te!==(te=k[0].authors+"")&&U(j,te),k[0].parents.length>0?O?O.p(k,P):(O=ye(k),O.c(),O.m(t,b)):O&&(O.d(1),O=null);const oe={};P&1&&(oe.items=k[0].subjects),L.$set(oe);const N={};P&1&&(N.items=k[0].grades),M.$set(N);const ce={};P&1&&(ce.items=k[0].types),Y.$set(ce),(!z||P&1)&&ie!==(ie=k[0].license.name+"")&&U(ve,ie),(!z||P&1&&pe!==(pe=k[0].license.link))&&v(ae,"href",pe),(!z||P&1)&&fe!==(fe=k[0].members.length>0?"Group":"")&&U($e,fe),(!z||P&1&&be!==(be=k[0].links.drive))&&v(y,"href",be),k[0].links.pdf?q?(q.p(k,P),P&1&&V(q,1)):(q=Qe(k),q.c(),V(q,1),q.m(X,null)):q&&(ue(),T(q,1,1,()=>{q=null}),me())},i(k){z||(V(l.$$.fragment,k),V(L.$$.fragment,k),V(M.$$.fragment,k),V(Y.$$.fragment,k),V(ne.$$.fragment,k),V(q),z=!0)},o(k){T(l.$$.fragment,k),T(L.$$.fragment,k),T(M.$$.fragment,k),T(Y.$$.fragment,k),T(ne.$$.fragment,k),T(q),z=!1},d(k){k&&d(e),W(l),O&&O.d(),W(L),W(M),W(Y),W(ne),q&&q.d()}}}function bt(i,e,l){let{meta:a}=e;return i.$$set=o=>{"meta"in o&&l(0,a=o.meta)},[a]}class kt extends de{constructor(e){super(),ge(this,e,bt,$t,_e,{meta:0})}}function We(i,e,l){const a=i.slice();return a[2]=e[l],a}function Xe(i,e,l){const a=i.slice();return a[5]=e[l][0],a[6]=e[l][1],a}function Ye(i,e,l){const a=i.slice();return a[9]=e[l],a}function Ze(i,e,l){const a=i.slice();return a[12]=e[l],a}function xe(i){let e,l;return e=new ht({props:{data:i[12]}}),{c(){K(e.$$.fragment)},l(a){J(e.$$.fragment,a)},m(a,o){Q(e,a,o),l=!0},p(a,o){const r={};o&1&&(r.data=a[12]),e.$set(r)},i(a){l||(V(e.$$.fragment,a),l=!0)},o(a){T(e.$$.fragment,a),l=!1},d(a){W(e,a)}}}function et(i){let e,l,a="Standards",o,r,s=R(Object.entries(i[1])),f=[];for(let n=0;n<s.length;n+=1)f[n]=lt(Xe(i,s,n));const u=n=>T(f[n],1,1,()=>{f[n]=null});return{c(){e=p("div"),l=p("h3"),l.textContent=a,o=S();for(let n=0;n<f.length;n+=1)f[n].c();this.h()},l(n){e=$(n,"DIV",{class:!0});var t=D(e);l=$(t,"H3",{"data-svelte-h":!0}),Se(l)!=="svelte-1ftp5fs"&&(l.textContent=a),o=H(t);for(let c=0;c<f.length;c+=1)f[c].l(t);t.forEach(d),this.h()},h(){v(e,"class","sidebar svelte-bsoh1u")},m(n,t){F(n,e,t),m(e,l),m(e,o);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(e,null);r=!0},p(n,t){if(t&2){s=R(Object.entries(n[1]));let c;for(c=0;c<s.length;c+=1){const h=Xe(n,s,c);f[c]?(f[c].p(h,t),V(f[c],1)):(f[c]=lt(h),f[c].c(),V(f[c],1),f[c].m(e,null))}for(ue(),c=s.length;c<f.length;c+=1)u(c);me()}},i(n){if(!r){for(let t=0;t<s.length;t+=1)V(f[t]);r=!0}},o(n){f=f.filter(Boolean);for(let t=0;t<f.length;t+=1)T(f[t]);r=!1},d(n){n&&d(e),re(f,n)}}}function tt(i){let e,l;return e=new ut({props:{standard:i[9],status:!0,theme:"is-light"}}),{c(){K(e.$$.fragment)},l(a){J(e.$$.fragment,a)},m(a,o){Q(e,a,o),l=!0},p(a,o){const r={};o&2&&(r.standard=a[9]),e.$set(r)},i(a){l||(V(e.$$.fragment,a),l=!0)},o(a){T(e.$$.fragment,a),l=!1},d(a){W(e,a)}}}function lt(i){let e,l,a=i[5]+"",o,r,s,f,u,n=R(i[6]),t=[];for(let h=0;h<n.length;h+=1)t[h]=tt(Ye(i,n,h));const c=h=>T(t[h],1,1,()=>{t[h]=null});return{c(){e=p("p"),l=p("i"),o=A(a),r=A(":"),s=S();for(let h=0;h<t.length;h+=1)t[h].c();f=S()},l(h){e=$(h,"P",{});var _=D(e);l=$(_,"I",{});var g=D(l);o=C(g,a),r=C(g,":"),g.forEach(d),s=H(_);for(let w=0;w<t.length;w+=1)t[w].l(_);f=H(_),_.forEach(d)},m(h,_){F(h,e,_),m(e,l),m(l,o),m(l,r),m(e,s);for(let g=0;g<t.length;g+=1)t[g]&&t[g].m(e,null);m(e,f),u=!0},p(h,_){if((!u||_&2)&&a!==(a=h[5]+"")&&U(o,a),_&2){n=R(h[6]);let g;for(g=0;g<n.length;g+=1){const w=Ye(h,n,g);t[g]?(t[g].p(w,_),V(t[g],1)):(t[g]=tt(w),t[g].c(),V(t[g],1),t[g].m(e,f))}for(ue(),g=n.length;g<t.length;g+=1)c(g);me()}},i(h){if(!u){for(let _=0;_<n.length;_+=1)V(t[_]);u=!0}},o(h){t=t.filter(Boolean);for(let _=0;_<t.length;_+=1)T(t[_]);u=!1},d(h){h&&d(e),re(t,h)}}}function at(i){let e,l,a="Tags",o,r=R(i[0].frontmatter.tags),s=[];for(let f=0;f<r.length;f+=1)s[f]=nt(We(i,r,f));return{c(){e=p("div"),l=p("h3"),l.textContent=a,o=S();for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=$(f,"DIV",{class:!0});var u=D(e);l=$(u,"H3",{"data-svelte-h":!0}),Se(l)!=="svelte-1nl40cx"&&(l.textContent=a),o=H(u);for(let n=0;n<s.length;n+=1)s[n].l(u);u.forEach(d),this.h()},h(){v(e,"class","sidebar svelte-bsoh1u")},m(f,u){F(f,e,u),m(e,l),m(e,o);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null)},p(f,u){if(u&1){r=R(f[0].frontmatter.tags);let n;for(n=0;n<r.length;n+=1){const t=We(f,r,n);s[n]?s[n].p(t,u):(s[n]=nt(t),s[n].c(),s[n].m(e,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=r.length}},d(f){f&&d(e),re(s,f)}}}function nt(i){let e,l=i[2]+"",a,o;return{c(){e=p("a"),a=A(l),this.h()},l(r){e=$(r,"A",{href:!0,class:!0});var s=D(e);a=C(s,l),s.forEach(d),this.h()},h(){v(e,"href",o=`${Pe}/library/search?tag=${i[2]}`),v(e,"class","tag m-1")},m(r,s){F(r,e,s),m(e,a)},p(r,s){s&1&&l!==(l=r[2]+"")&&U(a,l),s&1&&o!==(o=`${Pe}/library/search?tag=${r[2]}`)&&v(e,"href",o)},d(r){r&&d(e)}}}function Et(i){let e,l,a,o,r,s,f,u,n=i[0].content+"",t,c,h,_,g;l=new kt({props:{meta:i[0].frontmatter}});let w=R(i[0].frontmatter.members),I=[];for(let b=0;b<w.length;b+=1)I[b]=xe(Ze(i,w,b));const te=b=>T(I[b],1,1,()=>{I[b]=null});let j=i[0].frontmatter.standards&&et(i),B=i[0].frontmatter.tags&&at(i);return{c(){e=p("div"),K(l.$$.fragment),a=S(),o=p("hr"),r=S(),s=p("div"),f=p("div"),u=new st(!1),t=S();for(let b=0;b<I.length;b+=1)I[b].c();c=S(),h=p("div"),j&&j.c(),_=S(),B&&B.c(),this.h()},l(b){e=$(b,"DIV",{class:!0});var E=D(e);J(l.$$.fragment,E),a=H(E),o=$(E,"HR",{}),r=H(E),s=$(E,"DIV",{class:!0});var L=D(s);f=$(L,"DIV",{class:!0});var G=D(f);u=it(G,!1),t=H(G);for(let le=0;le<I.length;le+=1)I[le].l(G);G.forEach(d),c=H(L),h=$(L,"DIV",{class:!0});var M=D(h);j&&j.l(M),_=H(M),B&&B.l(M),M.forEach(d),L.forEach(d),E.forEach(d),this.h()},h(){u.a=t,v(f,"class","column is-two-thirds"),v(h,"class","column ml-3"),v(s,"class","columns"),v(e,"class","content")},m(b,E){F(b,e,E),Q(l,e,null),m(e,a),m(e,o),m(e,r),m(e,s),m(s,f),u.m(n,f),m(f,t);for(let L=0;L<I.length;L+=1)I[L]&&I[L].m(f,null);m(s,c),m(s,h),j&&j.m(h,null),m(h,_),B&&B.m(h,null),g=!0},p(b,[E]){const L={};if(E&1&&(L.meta=b[0].frontmatter),l.$set(L),(!g||E&1)&&n!==(n=b[0].content+"")&&u.p(n),E&1){w=R(b[0].frontmatter.members);let G;for(G=0;G<w.length;G+=1){const M=Ze(b,w,G);I[G]?(I[G].p(M,E),V(I[G],1)):(I[G]=xe(M),I[G].c(),V(I[G],1),I[G].m(f,null))}for(ue(),G=w.length;G<I.length;G+=1)te(G);me()}b[0].frontmatter.standards?j?(j.p(b,E),E&1&&V(j,1)):(j=et(b),j.c(),V(j,1),j.m(h,_)):j&&(ue(),T(j,1,1,()=>{j=null}),me()),b[0].frontmatter.tags?B?B.p(b,E):(B=at(b),B.c(),B.m(h,null)):B&&(B.d(1),B=null)},i(b){if(!g){V(l.$$.fragment,b);for(let E=0;E<w.length;E+=1)V(I[E]);V(j),g=!0}},o(b){T(l.$$.fragment,b),I=I.filter(Boolean);for(let E=0;E<I.length;E+=1)T(I[E]);T(j),g=!1},d(b){b&&d(e),W(l),re(I,b),j&&j.d(),B&&B.d()}}}function Dt(i,e,l){let{data:a}=e,o={};return rt(async()=>{new URLSearchParams;const r=a.frontmatter.standards?a.frontmatter.standards:[];for(let s=0;s<r.length;s++)o[r[s].subject]?o[r[s].subject].includes(r[s].standard)||l(1,o[r[s].subject]=[...o[r[s].subject],r[s]],o):l(1,o[r[s].subject]=[r[s]],o)}),i.$$set=r=>{"data"in r&&l(0,a=r.data)},[a,o]}class wt extends de{constructor(e){super(),ge(this,e,Dt,Et,_e,{data:0})}}function It(i){let e,l,a,o;return a=new wt({props:{data:i[0]}}),{c(){e=p("div"),l=p("div"),K(a.$$.fragment),this.h()},l(r){e=$(r,"DIV",{class:!0});var s=D(e);l=$(s,"DIV",{class:!0});var f=D(l);J(a.$$.fragment,f),f.forEach(d),s.forEach(d),this.h()},h(){v(l,"class","section"),v(e,"class","container is-max-desktop")},m(r,s){F(r,e,s),m(e,l),Q(a,l,null),o=!0},p(r,[s]){const f={};s&1&&(f.data=r[0]),a.$set(f)},i(r){o||(V(a.$$.fragment,r),o=!0)},o(r){T(a.$$.fragment,r),o=!1},d(r){r&&d(e),W(a)}}}function Vt(i,e,l){let{data:a}=e;return rt(()=>{}),i.$$set=o=>{"data"in o&&l(0,a=o.data)},[a]}class Lt extends de{constructor(e){super(),ge(this,e,Vt,It,_e,{data:0})}}export{Lt as component};