import{s as _e,f as p,a as L,g as $,h as D,d,c as P,j as v,i as y,u as m,E as re,l as A,m as C,L as Be,n as R,w as qe,r as Pe,y as ye,k as Fe,M as st,N as it,o as rt,x as ft}from"../chunks/scheduler.7b7490e9.js";import{S as de,i as ge,b as J,d as K,m as Q,a as I,t as T,e as W,g as ue,c as me}from"../chunks/index.61078197.js";import{e as N}from"../chunks/each.e59479a4.js";import{b as Le}from"../chunks/paths.fd0c3db4.js";import{F as Se,a as ot,s as Ee,b as ct}from"../chunks/metaUtils.ef6d8de0.js";import{f as ht,E as ut}from"../chunks/ElementCard.9980815f.js";import{S as mt}from"../chunks/StandardTag.c5e0cb98.js";function Me(i,e,l){const a=i.slice();return a[2]=e[l],a}function Ne(i){let e,l,a=i[2].title+"",o,r,f;return{c(){e=p("li"),l=p("a"),o=A(a),this.h()},l(s){e=$(s,"LI",{class:!0});var h=D(e);l=$(h,"A",{href:!0});var n=D(l);o=C(n,a),n.forEach(d),h.forEach(d),this.h()},h(){v(l,"href",r=Ee(i[2].pathData.path).replace("meta","")),v(e,"class",f=Be(i[2].title==i[1]?"is-active":"")+" svelte-1l145dm")},m(s,h){y(s,e,h),m(e,l),m(l,o)},p(s,h){h&1&&a!==(a=s[2].title+"")&&R(o,a),h&1&&r!==(r=Ee(s[2].pathData.path).replace("meta",""))&&v(l,"href",r),h&3&&f!==(f=Be(s[2].title==s[1]?"is-active":"")+" svelte-1l145dm")&&v(e,"class",f)},d(s){s&&d(e)}}}function _t(i){let e,l,a,o,r,f,s;r=new Se({props:{class:"mt-1",icon:ot}});let h=N(i[0]),n=[];for(let t=0;t<h.length;t+=1)n[t]=Ne(Me(i,h,t));return{c(){e=p("div"),l=p("ul"),a=p("li"),o=p("a"),J(r.$$.fragment),f=L();for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=$(t,"DIV",{class:!0,"aria-label":!0});var c=D(e);l=$(c,"UL",{class:!0});var u=D(l);a=$(u,"LI",{class:!0});var _=D(a);o=$(_,"A",{href:!0});var g=D(o);K(r.$$.fragment,g),g.forEach(d),_.forEach(d),f=P(u);for(let w=0;w<n.length;w+=1)n[w].l(u);u.forEach(d),c.forEach(d),this.h()},h(){v(o,"href",Le+"/library"),v(a,"class","svelte-1l145dm"),v(l,"class","svelte-1l145dm"),v(e,"class","breadcrumb"),v(e,"aria-label","breadcrumbs")},m(t,c){y(t,e,c),m(e,l),m(l,a),m(a,o),Q(r,o,null),m(l,f);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(l,null);s=!0},p(t,[c]){if(c&3){h=N(t[0]);let u;for(u=0;u<h.length;u+=1){const _=Me(t,h,u);n[u]?n[u].p(_,c):(n[u]=Ne(_),n[u].c(),n[u].m(l,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=h.length}},i(t){s||(I(r.$$.fragment,t),s=!0)},o(t){T(r.$$.fragment,t),s=!1},d(t){t&&d(e),W(r),re(n,t)}}}function dt(i,e,l){let{nodes:a}=e,{here:o}=e;return i.$$set=r=>{"nodes"in r&&l(0,a=r.nodes),"here"in r&&l(1,o=r.here)},[a,o]}class gt extends de{constructor(e){super(),ge(this,e,dt,_t,_e,{nodes:0,here:1})}}function Oe(i,e,l){const a=i.slice();return a[2]=e[l],a[4]=l,a}function Re(i){let e=i[4]!=0?", ":"",l,a=i[2]+"",o;return{c(){l=A(e),o=A(a)},l(r){l=C(r,e),o=C(r,a)},m(r,f){y(r,l,f),y(r,o,f)},p(r,f){f&1&&a!==(a=r[2]+"")&&R(o,a)},d(r){r&&(d(l),d(o))}}}function vt(i){let e,l,a,o,r=i[0].length>1?"s":"",f,s,h,n=N(i[0]),t=[];for(let c=0;c<n.length;c+=1)t[c]=Re(Oe(i,n,c));return{c(){e=p("div"),l=p("p"),a=p("strong"),o=A(i[1]),f=A(r),s=A(":"),h=L();for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=$(c,"DIV",{class:!0});var u=D(e);l=$(u,"P",{class:!0});var _=D(l);a=$(_,"STRONG",{});var g=D(a);o=C(g,i[1]),f=C(g,r),s=C(g,":"),g.forEach(d),h=P(_);for(let w=0;w<t.length;w+=1)t[w].l(_);_.forEach(d),u.forEach(d),this.h()},h(){v(l,"class","svelte-1p1w4x6"),v(e,"class","lister metadata")},m(c,u){y(c,e,u),m(e,l),m(l,a),m(a,o),m(a,f),m(a,s),m(l,h);for(let _=0;_<t.length;_+=1)t[_]&&t[_].m(l,null)},p(c,[u]){if(u&2&&R(o,c[1]),u&1&&r!==(r=c[0].length>1?"s":"")&&R(f,r),u&1){n=N(c[0]);let _;for(_=0;_<n.length;_+=1){const g=Oe(c,n,_);t[_]?t[_].p(g,u):(t[_]=Re(g),t[_].c(),t[_].m(l,null))}for(;_<t.length;_+=1)t[_].d(1);t.length=n.length}},i:qe,o:qe,d(c){c&&d(e),re(t,c)}}}function pt(i,e,l){let{items:a}=e,{title:o="Lorem ipsum"}=e;return i.$$set=r=>{"items"in r&&l(0,a=r.items),"title"in r&&l(1,o=r.title)},[a,o]}class Ge extends de{constructor(e){super(),ge(this,e,pt,vt,_e,{items:0,title:1})}}function Ue(i,e,l){const a=i.slice();return a[1]=e[l],a[3]=l,a}function ze(i){let e,l,a,o=i[0].parents.length>1?"s":"",r,f,s=N(i[0].parents),h=[];for(let n=0;n<s.length;n+=1)h[n]=Ke(Ue(i,s,n));return{c(){e=p("p"),l=A(`Part of the 
                `);for(let n=0;n<h.length;n+=1)h[n].c();a=A(`
                project`),r=A(o),f=A(".")},l(n){e=$(n,"P",{});var t=D(e);l=C(t,`Part of the 
                `);for(let c=0;c<h.length;c+=1)h[c].l(t);a=C(t,`
                project`),r=C(t,o),f=C(t,"."),t.forEach(d)},m(n,t){y(n,e,t),m(e,l);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(e,null);m(e,a),m(e,r),m(e,f)},p(n,t){if(t&1){s=N(n[0].parents);let c;for(c=0;c<s.length;c+=1){const u=Ue(n,s,c);h[c]?h[c].p(u,t):(h[c]=Ke(u),h[c].c(),h[c].m(e,a))}for(;c<h.length;c+=1)h[c].d(1);h.length=s.length}t&1&&o!==(o=n[0].parents.length>1?"s":"")&&R(r,o)},d(n){n&&d(e),re(h,n)}}}function $t(i){let e;return{c(){e=A(",")},l(l){e=C(l,",")},m(l,a){y(l,e,a)},d(l){l&&d(e)}}}function Je(i){let e;return{c(){e=A("and")},l(l){e=C(l,"and")},m(l,a){y(l,e,a)},d(l){l&&d(e)}}}function Ke(i){let e,l,a,o,r=i[1].title+"",f,s,h=i[3]!=0&&$t(),n=i[3]==i[0].parents.length-1&&i[0].parents.length>1&&Je();return{c(){h&&h.c(),e=L(),n&&n.c(),l=L(),a=p("a"),o=p("i"),f=A(r),this.h()},l(t){h&&h.l(t),e=P(t),n&&n.l(t),l=P(t),a=$(t,"A",{"data-sveltekit-reload":!0,href:!0});var c=D(a);o=$(c,"I",{});var u=D(o);f=C(u,r),u.forEach(d),c.forEach(d),this.h()},h(){v(a,"data-sveltekit-reload",""),v(a,"href",s=Ee(i[1].pathData.path).replace("meta",""))},m(t,c){h&&h.m(t,c),y(t,e,c),n&&n.m(t,c),y(t,l,c),y(t,a,c),m(a,o),m(o,f)},p(t,c){t[3]==t[0].parents.length-1&&t[0].parents.length>1?n||(n=Je(),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null),c&1&&r!==(r=t[1].title+"")&&R(f,r),c&1&&s!==(s=Ee(t[1].pathData.path).replace("meta",""))&&v(a,"href",s)},d(t){t&&(d(e),d(l),d(a)),h&&h.d(t),n&&n.d(t)}}}function Qe(i){let e,l,a=i[0].members.length>0?"Group":"",o,r,f,s,h;return f=new Se({props:{class:"ml-2",icon:ct}}),{c(){e=p("a"),l=A("Download "),o=A(a),r=A(` PDF
                    `),J(f.$$.fragment),this.h()},l(n){e=$(n,"A",{class:!0,href:!0});var t=D(e);l=C(t,"Download "),o=C(t,a),r=C(t,` PDF
                    `),K(f.$$.fragment,t),t.forEach(d),this.h()},h(){v(e,"class","button"),v(e,"href",s=i[0].links.pdf)},m(n,t){y(n,e,t),m(e,l),m(e,o),m(e,r),Q(f,e,null),h=!0},p(n,t){(!h||t&1)&&a!==(a=n[0].members.length>0?"Group":"")&&R(o,a),(!h||t&1&&s!==(s=n[0].links.pdf))&&v(e,"href",s)},i(n){h||(I(f.$$.fragment,n),h=!0)},o(n){T(f.$$.fragment,n),h=!1},d(n){n&&d(e),W(f)}}}function bt(i){let e,l,a,o,r,f,s,h,n,t,c,u=i[0].title+"",_,g,w,V,te=i[0].authors+"",j,B,b,E,H,G,F,le,Y,De,Z,se,He="License: ",ae,ie=i[0].license.name+"",ve,pe,we,X,z,Ve,fe=i[0].members.length>0?"Group":"",$e,Ie,ne,be,Ae,U;l=new gt({props:{nodes:[...i[0].parents,i[0]],here:i[0].title}});let M=i[0].parents.length>0&&ze(i);H=new Ge({props:{title:"Subject",items:i[0].subjects}}),F=new Ge({props:{title:"Grade",items:i[0].grades}}),Y=new Ge({props:{title:"Material Type",items:i[0].types}}),ne=new Se({props:{class:"ml-2",icon:ht}});let q=i[0].links.pdf&&Qe(i);return{c(){e=p("div"),J(l.$$.fragment),a=L(),o=p("div"),r=p("div"),f=p("img"),n=L(),t=p("div"),c=p("h1"),_=A(u),g=L(),w=p("p"),V=A("by "),j=A(te),B=L(),M&&M.c(),b=L(),E=p("div"),J(H.$$.fragment),G=L(),J(F.$$.fragment),le=L(),J(Y.$$.fragment),De=L(),Z=p("p"),se=p("strong"),se.textContent=He,ae=p("a"),ve=A(ie),we=L(),X=p("div"),z=p("a"),Ve=A("View "),$e=A(fe),Ie=A(` on Google Drive
                    `),J(ne.$$.fragment),Ae=L(),q&&q.c(),this.h()},l(k){e=$(k,"DIV",{class:!0});var S=D(e);K(l.$$.fragment,S),a=P(S),o=$(S,"DIV",{class:!0});var x=D(o);r=$(x,"DIV",{class:!0});var oe=D(r);f=$(oe,"IMG",{alt:!0,src:!0}),oe.forEach(d),n=P(x),t=$(x,"DIV",{class:!0});var O=D(t);c=$(O,"H1",{});var ce=D(c);_=C(ce,u),ce.forEach(d),g=P(O),w=$(O,"P",{class:!0});var Ce=D(w);V=C(Ce,"by "),j=C(Ce,te),Ce.forEach(d),B=P(O),M&&M.l(O),b=P(O),E=$(O,"DIV",{class:!0});var ee=D(E);K(H.$$.fragment,ee),G=P(ee),K(F.$$.fragment,ee),le=P(ee),K(Y.$$.fragment,ee),De=P(ee),Z=$(ee,"P",{style:!0});var je=D(Z);se=$(je,"STRONG",{"data-svelte-h":!0}),Pe(se)!=="svelte-gp2stt"&&(se.textContent=He),ae=$(je,"A",{href:!0});var Te=D(ae);ve=C(Te,ie),Te.forEach(d),je.forEach(d),ee.forEach(d),we=P(O),X=$(O,"DIV",{class:!0});var ke=D(X);z=$(ke,"A",{class:!0,href:!0});var he=D(z);Ve=C(he,"View "),$e=C(he,fe),Ie=C(he,` on Google Drive
                    `),K(ne.$$.fragment,he),he.forEach(d),Ae=P(ke),q&&q.l(ke),ke.forEach(d),O.forEach(d),x.forEach(d),S.forEach(d),this.h()},h(){v(f,"alt",s="A logo for the "+i[0].title+" resource from CodeVA"),ye(f.src,h="/images/"+i[0].image)||v(f,"src",h),v(r,"class","column is-one-quarter"),v(w,"class","heading"),v(ae,"href",pe=i[0].license.link),Fe(Z,"font-size","smaller"),Fe(Z,"margin","0 auto"),v(E,"class","metadata svelte-18zqis6"),v(z,"class","button is-primary"),v(z,"href",be=i[0].links.drive),v(X,"class","buttons is-left my-5"),v(t,"class","column ml-5"),v(o,"class","columns"),v(e,"class","document-header content")},m(k,S){y(k,e,S),Q(l,e,null),m(e,a),m(e,o),m(o,r),m(r,f),m(o,n),m(o,t),m(t,c),m(c,_),m(t,g),m(t,w),m(w,V),m(w,j),m(t,B),M&&M.m(t,null),m(t,b),m(t,E),Q(H,E,null),m(E,G),Q(F,E,null),m(E,le),Q(Y,E,null),m(E,De),m(E,Z),m(Z,se),m(Z,ae),m(ae,ve),m(t,we),m(t,X),m(X,z),m(z,Ve),m(z,$e),m(z,Ie),Q(ne,z,null),m(X,Ae),q&&q.m(X,null),U=!0},p(k,[S]){const x={};S&1&&(x.nodes=[...k[0].parents,k[0]]),S&1&&(x.here=k[0].title),l.$set(x),(!U||S&1&&s!==(s="A logo for the "+k[0].title+" resource from CodeVA"))&&v(f,"alt",s),(!U||S&1&&!ye(f.src,h="/images/"+k[0].image))&&v(f,"src",h),(!U||S&1)&&u!==(u=k[0].title+"")&&R(_,u),(!U||S&1)&&te!==(te=k[0].authors+"")&&R(j,te),k[0].parents.length>0?M?M.p(k,S):(M=ze(k),M.c(),M.m(t,b)):M&&(M.d(1),M=null);const oe={};S&1&&(oe.items=k[0].subjects),H.$set(oe);const O={};S&1&&(O.items=k[0].grades),F.$set(O);const ce={};S&1&&(ce.items=k[0].types),Y.$set(ce),(!U||S&1)&&ie!==(ie=k[0].license.name+"")&&R(ve,ie),(!U||S&1&&pe!==(pe=k[0].license.link))&&v(ae,"href",pe),(!U||S&1)&&fe!==(fe=k[0].members.length>0?"Group":"")&&R($e,fe),(!U||S&1&&be!==(be=k[0].links.drive))&&v(z,"href",be),k[0].links.pdf?q?(q.p(k,S),S&1&&I(q,1)):(q=Qe(k),q.c(),I(q,1),q.m(X,null)):q&&(ue(),T(q,1,1,()=>{q=null}),me())},i(k){U||(I(l.$$.fragment,k),I(H.$$.fragment,k),I(F.$$.fragment,k),I(Y.$$.fragment,k),I(ne.$$.fragment,k),I(q),U=!0)},o(k){T(l.$$.fragment,k),T(H.$$.fragment,k),T(F.$$.fragment,k),T(Y.$$.fragment,k),T(ne.$$.fragment,k),T(q),U=!1},d(k){k&&d(e),W(l),M&&M.d(),W(H),W(F),W(Y),W(ne),q&&q.d()}}}function kt(i,e,l){let{meta:a}=e;return i.$$set=o=>{"meta"in o&&l(0,a=o.meta)},[a]}class Et extends de{constructor(e){super(),ge(this,e,kt,bt,_e,{meta:0})}}function We(i,e,l){const a=i.slice();return a[2]=e[l],a}function Xe(i,e,l){const a=i.slice();return a[5]=e[l][0],a[6]=e[l][1],a}function Ye(i,e,l){const a=i.slice();return a[9]=e[l],a}function Ze(i,e,l){const a=i.slice();return a[12]=e[l],a}function xe(i){let e,l;return e=new ut({props:{data:i[12]}}),{c(){J(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,o){Q(e,a,o),l=!0},p(a,o){const r={};o&1&&(r.data=a[12]),e.$set(r)},i(a){l||(I(e.$$.fragment,a),l=!0)},o(a){T(e.$$.fragment,a),l=!1},d(a){W(e,a)}}}function et(i){let e,l,a="Standards",o,r,f=N(Object.entries(i[1])),s=[];for(let n=0;n<f.length;n+=1)s[n]=lt(Xe(i,f,n));const h=n=>T(s[n],1,1,()=>{s[n]=null});return{c(){e=p("div"),l=p("h3"),l.textContent=a,o=L();for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=$(n,"DIV",{class:!0});var t=D(e);l=$(t,"H3",{"data-svelte-h":!0}),Pe(l)!=="svelte-1ftp5fs"&&(l.textContent=a),o=P(t);for(let c=0;c<s.length;c+=1)s[c].l(t);t.forEach(d),this.h()},h(){v(e,"class","sidebar svelte-bsoh1u")},m(n,t){y(n,e,t),m(e,l),m(e,o);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);r=!0},p(n,t){if(t&2){f=N(Object.entries(n[1]));let c;for(c=0;c<f.length;c+=1){const u=Xe(n,f,c);s[c]?(s[c].p(u,t),I(s[c],1)):(s[c]=lt(u),s[c].c(),I(s[c],1),s[c].m(e,null))}for(ue(),c=f.length;c<s.length;c+=1)h(c);me()}},i(n){if(!r){for(let t=0;t<f.length;t+=1)I(s[t]);r=!0}},o(n){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)T(s[t]);r=!1},d(n){n&&d(e),re(s,n)}}}function tt(i){let e,l;return e=new mt({props:{standard:i[9],status:!0,theme:"is-light"}}),{c(){J(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,o){Q(e,a,o),l=!0},p(a,o){const r={};o&2&&(r.standard=a[9]),e.$set(r)},i(a){l||(I(e.$$.fragment,a),l=!0)},o(a){T(e.$$.fragment,a),l=!1},d(a){W(e,a)}}}function lt(i){let e,l,a=i[5]+"",o,r,f,s,h,n=N(i[6]),t=[];for(let u=0;u<n.length;u+=1)t[u]=tt(Ye(i,n,u));const c=u=>T(t[u],1,1,()=>{t[u]=null});return{c(){e=p("p"),l=p("i"),o=A(a),r=A(":"),f=L();for(let u=0;u<t.length;u+=1)t[u].c();s=L()},l(u){e=$(u,"P",{});var _=D(e);l=$(_,"I",{});var g=D(l);o=C(g,a),r=C(g,":"),g.forEach(d),f=P(_);for(let w=0;w<t.length;w+=1)t[w].l(_);s=P(_),_.forEach(d)},m(u,_){y(u,e,_),m(e,l),m(l,o),m(l,r),m(e,f);for(let g=0;g<t.length;g+=1)t[g]&&t[g].m(e,null);m(e,s),h=!0},p(u,_){if((!h||_&2)&&a!==(a=u[5]+"")&&R(o,a),_&2){n=N(u[6]);let g;for(g=0;g<n.length;g+=1){const w=Ye(u,n,g);t[g]?(t[g].p(w,_),I(t[g],1)):(t[g]=tt(w),t[g].c(),I(t[g],1),t[g].m(e,s))}for(ue(),g=n.length;g<t.length;g+=1)c(g);me()}},i(u){if(!h){for(let _=0;_<n.length;_+=1)I(t[_]);h=!0}},o(u){t=t.filter(Boolean);for(let _=0;_<t.length;_+=1)T(t[_]);h=!1},d(u){u&&d(e),re(t,u)}}}function at(i){let e,l,a="Tags",o,r=N(i[0].frontmatter.tags),f=[];for(let s=0;s<r.length;s+=1)f[s]=nt(We(i,r,s));return{c(){e=p("div"),l=p("h3"),l.textContent=a,o=L();for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){e=$(s,"DIV",{class:!0});var h=D(e);l=$(h,"H3",{"data-svelte-h":!0}),Pe(l)!=="svelte-1nl40cx"&&(l.textContent=a),o=P(h);for(let n=0;n<f.length;n+=1)f[n].l(h);h.forEach(d),this.h()},h(){v(e,"class","sidebar svelte-bsoh1u")},m(s,h){y(s,e,h),m(e,l),m(e,o);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(e,null)},p(s,h){if(h&1){r=N(s[0].frontmatter.tags);let n;for(n=0;n<r.length;n+=1){const t=We(s,r,n);f[n]?f[n].p(t,h):(f[n]=nt(t),f[n].c(),f[n].m(e,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=r.length}},d(s){s&&d(e),re(f,s)}}}function nt(i){let e,l=i[2]+"",a,o;return{c(){e=p("a"),a=A(l),this.h()},l(r){e=$(r,"A",{href:!0,class:!0});var f=D(e);a=C(f,l),f.forEach(d),this.h()},h(){v(e,"href",o=`${Le}/library/search?tag=${i[2]}`),v(e,"class","tag m-1")},m(r,f){y(r,e,f),m(e,a)},p(r,f){f&1&&l!==(l=r[2]+"")&&R(a,l),f&1&&o!==(o=`${Le}/library/search?tag=${r[2]}`)&&v(e,"href",o)},d(r){r&&d(e)}}}function Dt(i){let e,l,a,o,r,f,s,h,n=i[0].content+"",t,c,u,_,g;l=new Et({props:{meta:i[0].frontmatter}});let w=N(i[0].frontmatter.members),V=[];for(let b=0;b<w.length;b+=1)V[b]=xe(Ze(i,w,b));const te=b=>T(V[b],1,1,()=>{V[b]=null});let j=i[0].frontmatter.standards&&et(i),B=i[0].frontmatter.tags&&at(i);return{c(){e=p("div"),J(l.$$.fragment),a=L(),o=p("hr"),r=L(),f=p("div"),s=p("div"),h=new st(!1),t=L();for(let b=0;b<V.length;b+=1)V[b].c();c=L(),u=p("div"),j&&j.c(),_=L(),B&&B.c(),this.h()},l(b){e=$(b,"DIV",{class:!0});var E=D(e);K(l.$$.fragment,E),a=P(E),o=$(E,"HR",{}),r=P(E),f=$(E,"DIV",{class:!0});var H=D(f);s=$(H,"DIV",{class:!0});var G=D(s);h=it(G,!1),t=P(G);for(let le=0;le<V.length;le+=1)V[le].l(G);G.forEach(d),c=P(H),u=$(H,"DIV",{class:!0});var F=D(u);j&&j.l(F),_=P(F),B&&B.l(F),F.forEach(d),H.forEach(d),E.forEach(d),this.h()},h(){h.a=t,v(s,"class","column is-two-thirds"),v(u,"class","column ml-3"),v(f,"class","columns"),v(e,"class","content")},m(b,E){y(b,e,E),Q(l,e,null),m(e,a),m(e,o),m(e,r),m(e,f),m(f,s),h.m(n,s),m(s,t);for(let H=0;H<V.length;H+=1)V[H]&&V[H].m(s,null);m(f,c),m(f,u),j&&j.m(u,null),m(u,_),B&&B.m(u,null),g=!0},p(b,[E]){const H={};if(E&1&&(H.meta=b[0].frontmatter),l.$set(H),(!g||E&1)&&n!==(n=b[0].content+"")&&h.p(n),E&1){w=N(b[0].frontmatter.members);let G;for(G=0;G<w.length;G+=1){const F=Ze(b,w,G);V[G]?(V[G].p(F,E),I(V[G],1)):(V[G]=xe(F),V[G].c(),I(V[G],1),V[G].m(s,null))}for(ue(),G=w.length;G<V.length;G+=1)te(G);me()}b[0].frontmatter.standards?j?(j.p(b,E),E&1&&I(j,1)):(j=et(b),j.c(),I(j,1),j.m(u,_)):j&&(ue(),T(j,1,1,()=>{j=null}),me()),b[0].frontmatter.tags?B?B.p(b,E):(B=at(b),B.c(),B.m(u,null)):B&&(B.d(1),B=null)},i(b){if(!g){I(l.$$.fragment,b);for(let E=0;E<w.length;E+=1)I(V[E]);I(j),g=!0}},o(b){T(l.$$.fragment,b),V=V.filter(Boolean);for(let E=0;E<V.length;E+=1)T(V[E]);T(j),g=!1},d(b){b&&d(e),W(l),re(V,b),j&&j.d(),B&&B.d()}}}function wt(i,e,l){let{data:a}=e,o={};return rt(async()=>{new URLSearchParams;const r=a.frontmatter.standards?a.frontmatter.standards:[];for(let f=0;f<r.length;f++)o[r[f].subject]?o[r[f].subject].includes(r[f].standard)||l(1,o[r[f].subject]=[...o[r[f].subject],r[f]],o):l(1,o[r[f].subject]=[r[f]],o)}),i.$$set=r=>{"data"in r&&l(0,a=r.data)},[a,o]}class Vt extends de{constructor(e){super(),ge(this,e,wt,Dt,_e,{data:0})}}function It(i){let e,l,a,o,r,f;return document.title=e=i[0].frontmatter.title+" | CodeVA Curriculum Library",r=new Vt({props:{data:i[0]}}),{c(){l=L(),a=p("div"),o=p("div"),J(r.$$.fragment),this.h()},l(s){ft("svelte-1k0ybwd",document.head).forEach(d),l=P(s),a=$(s,"DIV",{class:!0});var n=D(a);o=$(n,"DIV",{class:!0});var t=D(o);K(r.$$.fragment,t),t.forEach(d),n.forEach(d),this.h()},h(){v(o,"class","section"),v(a,"class","container is-max-desktop")},m(s,h){y(s,l,h),y(s,a,h),m(a,o),Q(r,o,null),f=!0},p(s,[h]){(!f||h&1)&&e!==(e=s[0].frontmatter.title+" | CodeVA Curriculum Library")&&(document.title=e);const n={};h&1&&(n.data=s[0]),r.$set(n)},i(s){f||(I(r.$$.fragment,s),f=!0)},o(s){T(r.$$.fragment,s),f=!1},d(s){s&&(d(l),d(a)),W(r)}}}function At(i,e,l){let{data:a}=e;return rt(()=>{}),i.$$set=o=>{"data"in o&&l(0,a=o.data)},[a]}class Tt extends de{constructor(e){super(),ge(this,e,At,It,_e,{data:0})}}export{Tt as component};
