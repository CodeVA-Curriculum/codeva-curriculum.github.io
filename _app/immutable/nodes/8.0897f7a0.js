import{s as ne,f as $,a as A,g as b,h as V,d as _,c as j,j as v,i as B,u as d,E as se,l as T,m as H,L as we,n as J,w as Ie,r as de,y as Ae,k as be,o as Ce,M as Fe,N as Ke,x as Je}from"../chunks/scheduler.34a17233.js";import{S as re,i as ie,b as G,d as z,m as U,a as P,t as M,e as F,g as Ee,c as ke}from"../chunks/index.3c6c1944.js";import{e as R}from"../chunks/each.e59479a4.js";import{b as Qe}from"../chunks/paths.1d8e0eed.js";import{F as We,a as Xe,s as _e}from"../chunks/index.d0d225bb.js";import{E as Ye,a as Ze}from"../chunks/ElementCard.7c6824f0.js";import{S as xe}from"../chunks/StandardTag.d2c6f0a0.js";function je(s,e,l){const t=s.slice();return t[2]=e[l],t}function Le(s){let e,l,t=s[2].title+"",o,a,f;return{c(){e=$("li"),l=$("a"),o=T(t),this.h()},l(h){e=b(h,"LI",{class:!0});var c=V(e);l=b(c,"A",{"data-sveltekit-reload":!0,href:!0});var i=V(l);o=H(i,t),i.forEach(_),c.forEach(_),this.h()},h(){v(l,"data-sveltekit-reload",""),v(l,"href",a=_e(s[2].pathData.path).replace("/meta","")),v(e,"class",f=we(s[2].title==s[1]?"is-active":"")+" svelte-1l145dm")},m(h,c){B(h,e,c),d(e,l),d(l,o)},p(h,c){c&1&&t!==(t=h[2].title+"")&&J(o,t),c&1&&a!==(a=_e(h[2].pathData.path).replace("/meta",""))&&v(l,"href",a),c&3&&f!==(f=we(h[2].title==h[1]?"is-active":"")+" svelte-1l145dm")&&v(e,"class",f)},d(h){h&&_(e)}}}function et(s){let e,l,t,o,a,f,h;a=new We({props:{class:"mt-1",icon:Xe}});let c=R([...s[0]].reverse()),i=[];for(let n=0;n<c.length;n+=1)i[n]=Le(je(s,c,n));return{c(){e=$("div"),l=$("ul"),t=$("li"),o=$("a"),G(a.$$.fragment),f=A();for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=b(n,"DIV",{class:!0,"aria-label":!0});var r=V(e);l=b(r,"UL",{class:!0});var m=V(l);t=b(m,"LI",{class:!0});var u=V(t);o=b(u,"A",{href:!0});var p=V(o);z(a.$$.fragment,p),p.forEach(_),u.forEach(_),f=j(m);for(let g=0;g<i.length;g+=1)i[g].l(m);m.forEach(_),r.forEach(_),this.h()},h(){v(o,"href",Qe+"/library"),v(t,"class","svelte-1l145dm"),v(l,"class","svelte-1l145dm"),v(e,"class","breadcrumb"),v(e,"aria-label","breadcrumbs")},m(n,r){B(n,e,r),d(e,l),d(l,t),d(t,o),U(a,o,null),d(l,f);for(let m=0;m<i.length;m+=1)i[m]&&i[m].m(l,null);h=!0},p(n,[r]){if(r&3){c=R([...n[0]].reverse());let m;for(m=0;m<c.length;m+=1){const u=je(n,c,m);i[m]?i[m].p(u,r):(i[m]=Le(u),i[m].c(),i[m].m(l,null))}for(;m<i.length;m+=1)i[m].d(1);i.length=c.length}},i(n){h||(P(a.$$.fragment,n),h=!0)},o(n){M(a.$$.fragment,n),h=!1},d(n){n&&_(e),F(a),se(i,n)}}}function tt(s,e,l){let{nodes:t}=e,{here:o}=e;return s.$$set=a=>{"nodes"in a&&l(0,t=a.nodes),"here"in a&&l(1,o=a.here)},[t,o]}class lt extends re{constructor(e){super(),ie(this,e,tt,et,ne,{nodes:0,here:1})}}function Se(s,e,l){const t=s.slice();return t[2]=e[l],t[4]=l,t}function ye(s){let e=s[4]!=0?", ":"",l,t=s[2]+"",o;return{c(){l=T(e),o=T(t)},l(a){l=H(a,e),o=H(a,t)},m(a,f){B(a,l,f),B(a,o,f)},p(a,f){f&1&&t!==(t=a[2]+"")&&J(o,t)},d(a){a&&(_(l),_(o))}}}function at(s){let e,l,t,o,a=s[0].length>1?"s":"",f,h,c,i=R(s[0]),n=[];for(let r=0;r<i.length;r+=1)n[r]=ye(Se(s,i,r));return{c(){e=$("div"),l=$("p"),t=$("strong"),o=T(s[1]),f=T(a),h=T(":"),c=A();for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=b(r,"DIV",{class:!0});var m=V(e);l=b(m,"P",{class:!0});var u=V(l);t=b(u,"STRONG",{});var p=V(t);o=H(p,s[1]),f=H(p,a),h=H(p,":"),p.forEach(_),c=j(u);for(let g=0;g<n.length;g+=1)n[g].l(u);u.forEach(_),m.forEach(_),this.h()},h(){v(l,"class","svelte-1p1w4x6"),v(e,"class","lister metadata")},m(r,m){B(r,e,m),d(e,l),d(l,t),d(t,o),d(t,f),d(t,h),d(l,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(l,null)},p(r,[m]){if(m&2&&J(o,r[1]),m&1&&a!==(a=r[0].length>1?"s":"")&&J(f,a),m&1){i=R(r[0]);let u;for(u=0;u<i.length;u+=1){const p=Se(r,i,u);n[u]?n[u].p(p,m):(n[u]=ye(p),n[u].c(),n[u].m(l,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=i.length}},i:Ie,o:Ie,d(r){r&&_(e),se(n,r)}}}function nt(s,e,l){let{items:t}=e,{title:o="Lorem ipsum"}=e;return s.$$set=a=>{"items"in a&&l(0,t=a.items),"title"in a&&l(1,o=a.title)},[t,o]}class $e extends re{constructor(e){super(),ie(this,e,nt,at,ne,{items:0,title:1})}}function Pe(s,e,l){const t=s.slice();return t[2]=e[l],t[4]=l,t}function Te(s){let e,l,t,o=s[1].length>1?"s":"",a,f,h=R(s[1]),c=[];for(let i=0;i<h.length;i+=1)c[i]=Be(Pe(s,h,i));return{c(){e=$("p"),l=T(`Part of the 
                `);for(let i=0;i<c.length;i+=1)c[i].c();t=T(`
                project`),a=T(o),f=T(".")},l(i){e=b(i,"P",{});var n=V(e);l=H(n,`Part of the 
                `);for(let r=0;r<c.length;r+=1)c[r].l(n);t=H(n,`
                project`),a=H(n,o),f=H(n,"."),n.forEach(_)},m(i,n){B(i,e,n),d(e,l);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(e,null);d(e,t),d(e,a),d(e,f)},p(i,n){if(n&2){h=R(i[1]);let r;for(r=0;r<h.length;r+=1){const m=Pe(i,h,r);c[r]?c[r].p(m,n):(c[r]=Be(m),c[r].c(),c[r].m(e,t))}for(;r<c.length;r+=1)c[r].d(1);c.length=h.length}n&2&&o!==(o=i[1].length>1?"s":"")&&J(a,o)},d(i){i&&_(e),se(c,i)}}}function st(s){let e;return{c(){e=T(",")},l(l){e=H(l,",")},m(l,t){B(l,e,t)},d(l){l&&_(e)}}}function He(s){let e;return{c(){e=T("and")},l(l){e=H(l,"and")},m(l,t){B(l,e,t)},d(l){l&&_(e)}}}function Be(s){let e,l,t,o,a=s[2].title+"",f,h,c=s[4]>1&&st(),i=s[4]==s[1].length-1&&s[1].length>1&&He();return{c(){c&&c.c(),e=A(),i&&i.c(),l=A(),t=$("a"),o=$("i"),f=T(a),this.h()},l(n){c&&c.l(n),e=j(n),i&&i.l(n),l=j(n),t=b(n,"A",{"data-sveltekit-reload":!0,href:!0});var r=V(t);o=b(r,"I",{});var m=V(o);f=H(m,a),m.forEach(_),r.forEach(_),this.h()},h(){v(t,"data-sveltekit-reload",""),v(t,"href",h=_e(s[2].pathData.path).replace("/meta",""))},m(n,r){c&&c.m(n,r),B(n,e,r),i&&i.m(n,r),B(n,l,r),B(n,t,r),d(t,o),d(o,f)},p(n,r){n[4]==n[1].length-1&&n[1].length>1?i||(i=He(),i.c(),i.m(l.parentNode,l)):i&&(i.d(1),i=null),r&2&&a!==(a=n[2].title+"")&&J(f,a),r&2&&h!==(h=_e(n[2].pathData.path).replace("/meta",""))&&v(t,"href",h)},d(n){n&&(_(e),_(l),_(t)),c&&c.d(n),i&&i.d(n)}}}function rt(s){let e,l,t,o,a,f,h,c,i,n,r,m=s[0].title+"",u,p,g,C,x=s[0].authors+"",w,S,E,k,L,I,q,ee,Q,ge,W,le,De="License: ",te,oe=s[0].license.name+"",ue,he,ve,X,K;l=new lt({props:{nodes:[s[0],...s[1]],here:s[0].title}});let N=s[1].length>0&&Te(s);return L=new $e({props:{title:"Subject",items:s[0].subjects}}),q=new $e({props:{title:"Grade",items:s[0].grades}}),Q=new $e({props:{title:"Material Type",items:s[0].types}}),X=new Ye({props:{meta:s[0]}}),{c(){e=$("div"),G(l.$$.fragment),t=A(),o=$("div"),a=$("div"),f=$("img"),i=A(),n=$("div"),r=$("h1"),u=T(m),p=A(),g=$("p"),C=T("by "),w=T(x),S=A(),N&&N.c(),E=A(),k=$("div"),G(L.$$.fragment),I=A(),G(q.$$.fragment),ee=A(),G(Q.$$.fragment),ge=A(),W=$("p"),le=$("strong"),le.textContent=De,te=$("a"),ue=T(oe),ve=A(),G(X.$$.fragment),this.h()},l(D){e=b(D,"DIV",{class:!0});var y=V(e);z(l.$$.fragment,y),t=j(y),o=b(y,"DIV",{class:!0});var Y=V(o);a=b(Y,"DIV",{class:!0});var fe=V(a);f=b(fe,"IMG",{alt:!0,src:!0}),fe.forEach(_),i=j(Y),n=b(Y,"DIV",{class:!0});var O=V(n);r=b(O,"H1",{});var ce=V(r);u=H(ce,m),ce.forEach(_),p=j(O),g=b(O,"P",{class:!0});var ae=V(g);C=H(ae,"by "),w=H(ae,x),ae.forEach(_),S=j(O),N&&N.l(O),E=j(O),k=b(O,"DIV",{class:!0});var Z=V(k);z(L.$$.fragment,Z),I=j(Z),z(q.$$.fragment,Z),ee=j(Z),z(Q.$$.fragment,Z),ge=j(Z),W=b(Z,"P",{style:!0});var pe=V(W);le=b(pe,"STRONG",{"data-svelte-h":!0}),de(le)!=="svelte-gp2stt"&&(le.textContent=De),te=b(pe,"A",{href:!0});var Ve=V(te);ue=H(Ve,oe),Ve.forEach(_),pe.forEach(_),Z.forEach(_),ve=j(O),z(X.$$.fragment,O),O.forEach(_),Y.forEach(_),y.forEach(_),this.h()},h(){v(f,"alt",h="A logo for the "+s[0].title+" resource from CodeVA"),Ae(f.src,c="/images/"+s[0].image)||v(f,"src",c),v(a,"class","column is-one-quarter"),v(g,"class","heading"),v(te,"href",he=s[0].license.link),be(W,"font-size","smaller"),be(W,"margin","0 auto"),v(k,"class","metadata svelte-18zqis6"),v(n,"class","column ml-5"),v(o,"class","columns"),v(e,"class","document-header content")},m(D,y){B(D,e,y),U(l,e,null),d(e,t),d(e,o),d(o,a),d(a,f),d(o,i),d(o,n),d(n,r),d(r,u),d(n,p),d(n,g),d(g,C),d(g,w),d(n,S),N&&N.m(n,null),d(n,E),d(n,k),U(L,k,null),d(k,I),U(q,k,null),d(k,ee),U(Q,k,null),d(k,ge),d(k,W),d(W,le),d(W,te),d(te,ue),d(n,ve),U(X,n,null),K=!0},p(D,[y]){const Y={};y&3&&(Y.nodes=[D[0],...D[1]]),y&1&&(Y.here=D[0].title),l.$set(Y),(!K||y&1&&h!==(h="A logo for the "+D[0].title+" resource from CodeVA"))&&v(f,"alt",h),(!K||y&1&&!Ae(f.src,c="/images/"+D[0].image))&&v(f,"src",c),(!K||y&1)&&m!==(m=D[0].title+"")&&J(u,m),(!K||y&1)&&x!==(x=D[0].authors+"")&&J(w,x),D[1].length>0?N?N.p(D,y):(N=Te(D),N.c(),N.m(n,E)):N&&(N.d(1),N=null);const fe={};y&1&&(fe.items=D[0].subjects),L.$set(fe);const O={};y&1&&(O.items=D[0].grades),q.$set(O);const ce={};y&1&&(ce.items=D[0].types),Q.$set(ce),(!K||y&1)&&oe!==(oe=D[0].license.name+"")&&J(ue,oe),(!K||y&1&&he!==(he=D[0].license.link))&&v(te,"href",he);const ae={};y&1&&(ae.meta=D[0]),X.$set(ae)},i(D){K||(P(l.$$.fragment,D),P(L.$$.fragment,D),P(q.$$.fragment,D),P(Q.$$.fragment,D),P(X.$$.fragment,D),K=!0)},o(D){M(l.$$.fragment,D),M(L.$$.fragment,D),M(q.$$.fragment,D),M(Q.$$.fragment,D),M(X.$$.fragment,D),K=!1},d(D){D&&_(e),F(l),N&&N.d(),F(L),F(q),F(Q),F(X)}}}function it(s,e,l){let{meta:t}=e,o=[];return Ce(()=>{for(let a=0;a<t.parents.length;a++)t.parents[a].pathData.path.includes(".meta")||l(1,o=[...o,t.parents[a]])}),s.$$set=a=>{"meta"in a&&l(0,t=a.meta)},[t,o]}class ot extends re{constructor(e){super(),ie(this,e,it,rt,ne,{meta:0})}}function Me(s,e,l){const t=s.slice();return t[1]=e[l],t}function qe(s){let e,l;return e=new xe({props:{status:!0,get:!0,theme:"is-light",id:s[1]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,o){U(e,t,o),l=!0},p(t,o){const a={};o&1&&(a.id=t[1]),e.$set(a)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function ft(s){let e,l,t="Standards",o,a,f="Click to Read SOLs",h,c,i,n=R(s[0]),r=[];for(let u=0;u<n.length;u+=1)r[u]=qe(Me(s,n,u));const m=u=>M(r[u],1,1,()=>{r[u]=null});return{c(){e=$("div"),l=$("h3"),l.textContent=t,o=A(),a=$("p"),a.textContent=f,h=A(),c=$("div");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){e=b(u,"DIV",{id:!0,class:!0});var p=V(e);l=b(p,"H3",{"data-svelte-h":!0}),de(l)!=="svelte-1ftp5fs"&&(l.textContent=t),o=j(p),a=b(p,"P",{style:!0,class:!0,"data-svelte-h":!0}),de(a)!=="svelte-644eqf"&&(a.textContent=f),h=j(p),c=b(p,"DIV",{class:!0});var g=V(c);for(let C=0;C<r.length;C+=1)r[C].l(g);g.forEach(_),p.forEach(_),this.h()},h(){be(a,"font-size","10pt"),v(a,"class","is-italic"),v(c,"class","pills full svelte-1pfyjah"),v(e,"id","standards-box"),v(e,"class","sidebar standards svelte-1pfyjah")},m(u,p){B(u,e,p),d(e,l),d(e,o),d(e,a),d(e,h),d(e,c);for(let g=0;g<r.length;g+=1)r[g]&&r[g].m(c,null);i=!0},p(u,[p]){if(p&1){n=R(u[0]);let g;for(g=0;g<n.length;g+=1){const C=Me(u,n,g);r[g]?(r[g].p(C,p),P(r[g],1)):(r[g]=qe(C),r[g].c(),P(r[g],1),r[g].m(c,null))}for(Ee(),g=n.length;g<r.length;g+=1)m(g);ke()}},i(u){if(!i){for(let p=0;p<n.length;p+=1)P(r[p]);i=!0}},o(u){r=r.filter(Boolean);for(let p=0;p<r.length;p+=1)M(r[p]);i=!1},d(u){u&&_(e),se(r,u)}}}function ct(s,e,l){let{standards:t=[]}=e;return s.$$set=o=>{"standards"in o&&l(0,t=o.standards)},[t]}class ut extends re{constructor(e){super(),ie(this,e,ct,ft,ne,{standards:0})}}function Ne(s,e,l){const t=s.slice();return t[2]=e[l],t}function Oe(s,e,l){const t=s.slice();return t[5]=e[l],t}function Re(s){let e,l;return e=new Ze({props:{data:s[5]}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,o){U(e,t,o),l=!0},p(t,o){const a={};o&1&&(a.data=t[5]),e.$set(a)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function Ge(s){let e,l;return e=new ut({props:{standards:s[0].frontmatter.standards}}),{c(){G(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,o){U(e,t,o),l=!0},p(t,o){const a={};o&1&&(a.standards=t[0].frontmatter.standards),e.$set(a)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function ze(s){let e,l,t="Tags",o,a=R(s[0].frontmatter.tags),f=[];for(let h=0;h<a.length;h+=1)f[h]=Ue(Ne(s,a,h));return{c(){e=$("div"),l=$("h3"),l.textContent=t,o=A();for(let h=0;h<f.length;h+=1)f[h].c();this.h()},l(h){e=b(h,"DIV",{class:!0});var c=V(e);l=b(c,"H3",{"data-svelte-h":!0}),de(l)!=="svelte-1nl40cx"&&(l.textContent=t),o=j(c);for(let i=0;i<f.length;i+=1)f[i].l(c);c.forEach(_),this.h()},h(){v(e,"class","sidebar svelte-bsoh1u")},m(h,c){B(h,e,c),d(e,l),d(e,o);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(e,null)},p(h,c){if(c&1){a=R(h[0].frontmatter.tags);let i;for(i=0;i<a.length;i+=1){const n=Ne(h,a,i);f[i]?f[i].p(n,c):(f[i]=Ue(n),f[i].c(),f[i].m(e,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=a.length}},d(h){h&&_(e),se(f,h)}}}function Ue(s){let e,l=s[2]+"",t;return{c(){e=$("span"),t=T(l),this.h()},l(o){e=b(o,"SPAN",{class:!0});var a=V(e);t=H(a,l),a.forEach(_),this.h()},h(){v(e,"class","tag is-light m-1")},m(o,a){B(o,e,a),d(e,t)},p(o,a){a&1&&l!==(l=o[2]+"")&&J(t,l)},d(o){o&&_(e)}}}function ht(s){let e,l,t,o,a,f,h,c,i=s[0].content+"",n,r,m,u,p;l=new ot({props:{meta:s[0].frontmatter}});let g=R(s[0].frontmatter.members),C=[];for(let E=0;E<g.length;E+=1)C[E]=Re(Oe(s,g,E));const x=E=>M(C[E],1,1,()=>{C[E]=null});let w=s[0].frontmatter.standards&&Ge(s),S=s[0].frontmatter.tags&&ze(s);return{c(){e=$("div"),G(l.$$.fragment),t=A(),o=$("hr"),a=A(),f=$("div"),h=$("div"),c=new Fe(!1),n=A();for(let E=0;E<C.length;E+=1)C[E].c();r=A(),m=$("div"),w&&w.c(),u=A(),S&&S.c(),this.h()},l(E){e=b(E,"DIV",{class:!0});var k=V(e);z(l.$$.fragment,k),t=j(k),o=b(k,"HR",{}),a=j(k),f=b(k,"DIV",{class:!0});var L=V(f);h=b(L,"DIV",{class:!0});var I=V(h);c=Ke(I,!1),n=j(I);for(let ee=0;ee<C.length;ee+=1)C[ee].l(I);I.forEach(_),r=j(L),m=b(L,"DIV",{class:!0});var q=V(m);w&&w.l(q),u=j(q),S&&S.l(q),q.forEach(_),L.forEach(_),k.forEach(_),this.h()},h(){c.a=n,v(h,"class","column is-two-thirds"),v(m,"class","column ml-3"),v(f,"class","columns"),v(e,"class","content")},m(E,k){B(E,e,k),U(l,e,null),d(e,t),d(e,o),d(e,a),d(e,f),d(f,h),c.m(i,h),d(h,n);for(let L=0;L<C.length;L+=1)C[L]&&C[L].m(h,null);d(f,r),d(f,m),w&&w.m(m,null),d(m,u),S&&S.m(m,null),p=!0},p(E,[k]){const L={};if(k&1&&(L.meta=E[0].frontmatter),l.$set(L),(!p||k&1)&&i!==(i=E[0].content+"")&&c.p(i),k&1){g=R(E[0].frontmatter.members);let I;for(I=0;I<g.length;I+=1){const q=Oe(E,g,I);C[I]?(C[I].p(q,k),P(C[I],1)):(C[I]=Re(q),C[I].c(),P(C[I],1),C[I].m(h,null))}for(Ee(),I=g.length;I<C.length;I+=1)x(I);ke()}E[0].frontmatter.standards?w?(w.p(E,k),k&1&&P(w,1)):(w=Ge(E),w.c(),P(w,1),w.m(m,u)):w&&(Ee(),M(w,1,1,()=>{w=null}),ke()),E[0].frontmatter.tags?S?S.p(E,k):(S=ze(E),S.c(),S.m(m,null)):S&&(S.d(1),S=null)},i(E){if(!p){P(l.$$.fragment,E);for(let k=0;k<g.length;k+=1)P(C[k]);P(w),p=!0}},o(E){M(l.$$.fragment,E),C=C.filter(Boolean);for(let k=0;k<C.length;k+=1)M(C[k]);M(w),p=!1},d(E){E&&_(e),F(l),se(C,E),w&&w.d(),S&&S.d()}}}function mt(s,e,l){let{data:t}=e,o={};return Ce(async()=>{new URLSearchParams;const a=t.frontmatter.standards?t.frontmatter.standards:[];for(let f=0;f<a.length;f++)o[a[f].subject]?o[a[f].subject].includes(a[f].standard)||(o[a[f].subject]=[...o[a[f].subject],a[f]]):o[a[f].subject]=[a[f]]}),s.$$set=a=>{"data"in a&&l(0,t=a.data)},[t]}class dt extends re{constructor(e){super(),ie(this,e,mt,ht,ne,{data:0})}}function _t(s){let e,l,t,o,a,f,h,c,i,n,r;return document.title=e=s[0].frontmatter.title+" | CodeVA Curriculum Library",n=new dt({props:{data:s[0]}}),{c(){l=$("meta"),o=$("meta"),f=$("meta"),h=A(),c=$("div"),i=$("div"),G(n.$$.fragment),this.h()},l(m){const u=Je("svelte-1d78fl7",document.head);l=b(u,"META",{name:!0,content:!0}),o=b(u,"META",{name:!0,content:!0}),f=b(u,"META",{name:!0,content:!0}),u.forEach(_),h=j(m),c=b(m,"DIV",{class:!0});var p=V(c);i=b(p,"DIV",{class:!0});var g=V(i);z(n.$$.fragment,g),g.forEach(_),p.forEach(_),this.h()},h(){v(l,"name",t=s[0].frontmatter.title+" | CodeVA Curriculum Library"),v(l,"content",s[1]),v(o,"name","author"),v(o,"content",a=s[0].frontmatter.authors),v(f,"name","keywords"),v(f,"content",s[2]),v(i,"class","section"),v(c,"class","container is-max-desktop")},m(m,u){d(document.head,l),d(document.head,o),d(document.head,f),B(m,h,u),B(m,c,u),d(c,i),U(n,i,null),r=!0},p(m,[u]){(!r||u&1)&&e!==(e=m[0].frontmatter.title+" | CodeVA Curriculum Library")&&(document.title=e),(!r||u&1&&t!==(t=m[0].frontmatter.title+" | CodeVA Curriculum Library"))&&v(l,"name",t),(!r||u&2)&&v(l,"content",m[1]),(!r||u&1&&a!==(a=m[0].frontmatter.authors))&&v(o,"content",a),(!r||u&4)&&v(f,"content",m[2]);const p={};u&1&&(p.data=m[0]),n.$set(p)},i(m){r||(P(n.$$.fragment,m),r=!0)},o(m){M(n.$$.fragment,m),r=!1},d(m){m&&(_(h),_(c)),_(l),_(o),_(f),F(n)}}}function me(s){let e="";for(let l=0;l<s.length;l++)e+=s[l],l!=s.length-1&&(e+=",");return e}function gt(s,e,l){let{data:t}=e,o="",a="";return Ce(()=>{console.log(t);const f=t.content.indexOf("<p>"),h=t.content.indexOf("</p>");l(1,o=t.content.slice(f+3,h).replace(/<[^>]*>?/gm,"")),l(2,a=me(t.frontmatter.tags)+","+me(t.frontmatter.subjects)+","+me(t.frontmatter.types)+","+me(t.frontmatter.audiences))}),s.$$set=f=>{"data"in f&&l(0,t=f.data)},[t,o,a]}class Dt extends re{constructor(e){super(),ie(this,e,gt,_t,ne,{data:0})}}export{Dt as component};
