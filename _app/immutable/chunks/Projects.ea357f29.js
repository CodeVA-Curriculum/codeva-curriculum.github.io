import{s as ee,f as v,a as M,l as K,g as w,h as j,d as b,c as G,m as R,j as m,y as me,i as q,u as g,n as Y,w as H,o as ue,r as Ge,E as fe,F as U,G as Ne,H as be,v as ce,I as Pe,p as ae,k as Ve,J as oe,K as qe,e as ve}from"./scheduler.34a17233.js";import{S as te,i as se,f as re,b as C,d as S,m as B,g as Ie,t as L,c as Le,a as $,e as F}from"./index.3c6c1944.js";import{e as z}from"./each.e59479a4.js";import{b as ye}from"./paths.464468f7.js";import{s as x,F as Ce,f as we,e as ke}from"./index.ab9c858a.js";function Se(n){let e,s,t,l,u,a,i=n[0].title+"",o,r;return{c(){e=v("a"),s=v("div"),t=v("img"),u=M(),a=v("p"),o=K(i),this.h()},l(c){e=w(c,"A",{class:!0,href:!0});var _=j(e);s=w(_,"DIV",{class:!0});var f=j(s);t=w(f,"IMG",{alt:!0,src:!0,class:!0}),f.forEach(b),u=G(_),a=w(_,"P",{});var p=j(a);o=R(p,i),p.forEach(b),_.forEach(b),this.h()},h(){m(t,"alt","a placeholder"),me(t.src,l="/images/"+n[0].image)||m(t,"src",l),m(t,"class","svelte-156t56h"),m(s,"class","wrap svelte-156t56h"),m(e,"class","orb svelte-156t56h"),m(e,"href",r=x(n[0].pathData.path.replace("meta","")))},m(c,_){q(c,e,_),g(e,s),g(s,t),g(e,u),g(e,a),g(a,o)},p(c,[_]){_&1&&!me(t.src,l="/images/"+c[0].image)&&m(t,"src",l),_&1&&i!==(i=c[0].title+"")&&Y(o,i),_&1&&r!==(r=x(c[0].pathData.path.replace("meta","")))&&m(e,"href",r)},i:H,o:H,d(c){c&&b(e)}}}function Be(n,e,s){let{meta:t}=e;return ue(()=>{}),n.$$set=l=>{"meta"in l&&s(0,t=l.meta)},[t]}class Fe extends te{constructor(e){super(),se(this,e,Be,Se,ee,{meta:0})}}function Ee(n,e,s){const t=n.slice();return t[1]=e[s],t}function je(n){let e,s,t,l=n[1].title+"",u,a,i,o,r=n[1].authors+"",c,_;return{c(){e=v("tr"),s=v("td"),t=v("a"),u=K(l),i=M(),o=v("td"),c=K(r),_=M(),this.h()},l(f){e=w(f,"TR",{class:!0});var p=j(e);s=w(p,"TD",{});var A=j(s);t=w(A,"A",{href:!0});var k=j(t);u=R(k,l),k.forEach(b),A.forEach(b),i=G(p),o=w(p,"TD",{});var d=j(o);c=R(d,r),d.forEach(b),_=G(p),p.forEach(b),this.h()},h(){m(t,"href",a=x(n[1].pathData.path).replace("/meta","")),m(e,"class","svelte-g5r3bw")},m(f,p){q(f,e,p),g(e,s),g(s,t),g(t,u),g(e,i),g(e,o),g(o,c),g(e,_)},p(f,p){p&1&&l!==(l=f[1].title+"")&&Y(u,l),p&1&&a!==(a=x(f[1].pathData.path).replace("/meta",""))&&m(t,"href",a),p&1&&r!==(r=f[1].authors+"")&&Y(c,r)},d(f){f&&b(e)}}}function He(n){let e,s,t='<tr class="svelte-g5r3bw"><th>Title</th> <th>Authors</th></tr>',l,u,a=z(n[0]),i=[];for(let o=0;o<a.length;o+=1)i[o]=je(Ee(n,a,o));return{c(){e=v("table"),s=v("thead"),s.innerHTML=t,l=M(),u=v("tbody");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=w(o,"TABLE",{class:!0});var r=j(e);s=w(r,"THEAD",{"data-svelte-h":!0}),Ge(s)!=="svelte-1tqgf2d"&&(s.innerHTML=t),l=G(r),u=w(r,"TBODY",{});var c=j(u);for(let _=0;_<i.length;_+=1)i[_].l(c);c.forEach(b),r.forEach(b),this.h()},h(){m(e,"class","table element-table has-text-left")},m(o,r){q(o,e,r),g(e,s),g(e,l),g(e,u);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(u,null)},p(o,[r]){if(r&1){a=z(o[0]);let c;for(c=0;c<a.length;c+=1){const _=Ee(o,a,c);i[c]?i[c].p(_,r):(i[c]=je(_),i[c].c(),i[c].m(u,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=a.length}},i:H,o:H,d(o){o&&b(e),fe(i,o)}}}function Ue(n,e,s){let{groups:t=[]}=e;return n.$$set=l=>{"groups"in l&&s(0,t=l.groups)},[t]}class ze extends te{constructor(e){super(),se(this,e,Ue,He,ee,{groups:0})}}function Te(n,e,s){const t=n.slice();return t[4]=e[s],t}function De(n){let e,s=n[4]+"",t,l;return{c(){e=v("option"),t=K(s),this.h()},l(u){e=w(u,"OPTION",{class:!0});var a=j(e);t=R(a,s),a.forEach(b),this.h()},h(){e.__value=l=n[4],U(e,e.__value),m(e,"class","svelte-et4ars")},m(u,a){q(u,e,a),g(e,t)},p(u,a){a&2&&s!==(s=u[4]+"")&&Y(t,s),a&2&&l!==(l=u[4])&&(e.__value=l,U(e,e.__value))},d(u){u&&b(e)}}}function Je(n){let e,s,t,l,u,a,i,o=z(n[1]),r=[];for(let c=0;c<o.length;c+=1)r[c]=De(Te(n,o,c));return{c(){e=v("div"),s=v("div"),t=v("select"),l=v("option"),u=K(n[2]);for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l(c){e=w(c,"DIV",{class:!0});var _=j(e);s=w(_,"DIV",{class:!0});var f=j(s);t=w(f,"SELECT",{name:!0,class:!0});var p=j(t);l=w(p,"OPTION",{class:!0});var A=j(l);u=R(A,n[2]),A.forEach(b);for(let k=0;k<r.length;k+=1)r[k].l(p);p.forEach(b),f.forEach(b),_.forEach(b),this.h()},h(){l.__value=n[2],U(l,l.__value),m(l,"class","svelte-et4ars"),m(t,"name","audience"),m(t,"class","svelte-et4ars"),n[0]===void 0&&Ne(()=>n[3].call(t)),m(s,"class","select is-fullwidth svelte-et4ars"),m(e,"class","control drop-down my-2 mx-1 p-0 is-inline-block-tablet svelte-et4ars")},m(c,_){q(c,e,_),g(e,s),g(s,t),g(t,l),g(l,u);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(t,null);be(t,n[0],!0),a||(i=ce(t,"change",n[3]),a=!0)},p(c,[_]){if(_&4&&Y(u,c[2]),_&4&&(l.__value=c[2],U(l,l.__value)),_&2){o=z(c[1]);let f;for(f=0;f<o.length;f+=1){const p=Te(c,o,f);r[f]?r[f].p(p,_):(r[f]=De(p),r[f].c(),r[f].m(t,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=o.length}_&7&&be(t,c[0])},i:H,o:H,d(c){c&&b(e),fe(r,c),a=!1,i()}}}function Ke(n,e,s){let{options:t}=e,{defaultOption:l}=e,{selected:u=""}=e;ue(()=>{s(0,u=l)});function a(){u=Pe(this),s(0,u),s(1,t),s(2,l)}return n.$$set=i=>{"options"in i&&s(1,t=i.options),"defaultOption"in i&&s(2,l=i.defaultOption),"selected"in i&&s(0,u=i.selected)},[u,t,l,a]}class ie extends te{constructor(e){super(),se(this,e,Ke,Je,ee,{options:1,defaultOption:2,selected:0})}}var Oe={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]};function Ae(n,e,s){const t=n.slice();return t[14]=e[s],t}function Re(n){let e,s,t=z(n[5]),l=[];for(let a=0;a<t.length;a+=1)l[a]=$e(Ae(n,t,a));const u=a=>L(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=ve()},l(a){for(let i=0;i<l.length;i+=1)l[i].l(a);e=ve()},m(a,i){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(a,i);q(a,e,i),s=!0},p(a,i){if(i&32){t=z(a[5]);let o;for(o=0;o<t.length;o+=1){const r=Ae(a,t,o);l[o]?(l[o].p(r,i),$(l[o],1)):(l[o]=$e(r),l[o].c(),$(l[o],1),l[o].m(e.parentNode,e))}for(Ie(),o=t.length;o<l.length;o+=1)u(o);Le()}},i(a){if(!s){for(let i=0;i<t.length;i+=1)$(l[i]);s=!0}},o(a){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)L(l[i]);s=!1},d(a){a&&b(e),fe(l,a)}}}function Ye(n){let e,s;return e=new ze({props:{groups:n[5]}}),{c(){C(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p(t,l){const u={};l&32&&(u.groups=t[5]),e.$set(u)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function $e(n){let e,s;return e=new Fe({props:{meta:n[14]}}),{c(){C(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p(t,l){const u={};l&32&&(u.meta=t[14]),e.$set(u)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Qe(n){let e,s,t,l,u,a,i,o,r,c,_,f,p,A,k,d,I,Q,T,D,V,J,W;function le(h){n[8](h)}let X={options:n[2],defaultOption:"All Audiences"};n[1].audiences!==void 0&&(X.selected=n[1].audiences),t=new ie({props:X}),ae.push(()=>re(t,"selected",le));function Z(h){n[9](h)}let de={options:n[3],defaultOption:"All Subjects"};n[1].subjects!==void 0&&(de.selected=n[1].subjects),a=new ie({props:de}),ae.push(()=>re(a,"selected",Z));function Me(h){n[10](h)}let _e={options:n[4],defaultOption:"All Grade Levels"};n[1].grades!==void 0&&(_e.selected=n[1].grades),r=new ie({props:_e}),ae.push(()=>re(r,"selected",Me)),d=new Ce({props:{icon:n[0]?Oe:we}});const he=[Ye,Re],N=[];function pe(h,E){return h[0]?0:1}return T=pe(n),D=N[T]=he[T](n),{c(){e=v("div"),s=v("div"),C(t.$$.fragment),u=M(),C(a.$$.fragment),o=M(),C(r.$$.fragment),_=M(),f=v("div"),p=v("input"),A=M(),k=v("button"),C(d.$$.fragment),Q=M(),D.c(),this.h()},l(h){e=w(h,"DIV",{class:!0});var E=j(e);s=w(E,"DIV",{class:!0});var O=j(s);S(t.$$.fragment,O),u=G(O),S(a.$$.fragment,O),o=G(O),S(r.$$.fragment,O),_=G(O),f=w(O,"DIV",{class:!0});var P=j(f);p=w(P,"INPUT",{class:!0,placeholder:!0}),A=G(P),k=w(P,"BUTTON",{style:!0,"data-tooltip":!0,class:!0});var y=j(k);S(d.$$.fragment,y),y.forEach(b),P.forEach(b),O.forEach(b),Q=G(E),D.l(E),E.forEach(b),this.h()},h(){m(p,"class","input mr-2 is-inline-block svelte-1foox37"),m(p,"placeholder","Group Name"),Ve(k,"width","2rem"),m(k,"data-tooltip",I="View as "+(n[0]?"Orbs":"List")),m(k,"class","has-tooltip-arrow button svelte-1foox37"),m(f,"class","my-2 mx-2 p-0 is-flex is-inline-block-tablet"),m(s,"class","field m-0 p-0"),m(e,"class","projects")},m(h,E){q(h,e,E),g(e,s),B(t,s,null),g(s,u),B(a,s,null),g(s,o),B(r,s,null),g(s,_),g(s,f),g(f,p),U(p,n[1].term),g(f,A),g(f,k),B(d,k,null),g(e,Q),N[T].m(e,null),V=!0,J||(W=[ce(p,"input",n[11]),ce(k,"click",n[6])],J=!0)},p(h,[E]){const O={};E&4&&(O.options=h[2]),!l&&E&2&&(l=!0,O.selected=h[1].audiences,oe(()=>l=!1)),t.$set(O);const P={};E&8&&(P.options=h[3]),!i&&E&2&&(i=!0,P.selected=h[1].subjects,oe(()=>i=!1)),a.$set(P);const y={};E&16&&(y.options=h[4]),!c&&E&2&&(c=!0,y.selected=h[1].grades,oe(()=>c=!1)),r.$set(y),E&2&&p.value!==h[1].term&&U(p,h[1].term);const ge={};E&1&&(ge.icon=h[0]?Oe:we),d.$set(ge),(!V||E&1&&I!==(I="View as "+(h[0]?"Orbs":"List")))&&m(k,"data-tooltip",I);let ne=T;T=pe(h),T===ne?N[T].p(h,E):(Ie(),L(N[ne],1,1,()=>{N[ne]=null}),Le(),D=N[T],D?D.p(h,E):(D=N[T]=he[T](h),D.c()),$(D,1),D.m(e,null))},i(h){V||($(t.$$.fragment,h),$(a.$$.fragment,h),$(r.$$.fragment,h),$(d.$$.fragment,h),$(D),V=!0)},o(h){L(t.$$.fragment,h),L(a.$$.fragment,h),L(r.$$.fragment,h),L(d.$$.fragment,h),L(D),V=!1},d(h){h&&b(e),F(t),F(a),F(r),F(d),N[T].d(),J=!1,qe(W)}}}function We(n,e){let s=0;for(let t=0;t<n.length;t++)s+=e.includes(n[t])?1:0;return s>0}function Xe(n,e,s){let t,{elems:l=[]}=e,u=[],a=[],i=[],{list:o=!1}=e,r={term:"",audiences:"",subjects:"",grades:""};function c(){s(0,o=!o)}ue(async()=>{_(r,l);const d=await(await fetch(`${ye}/api/library/meta`)).json();console.log(d),s(2,u=d.audiences);for(const I in d.subjects)s(3,a=[...a,d.subjects[I]]);for(const I in d.grades)s(4,i=[...i,I]);console.log("Subjects",a)});function _(d,I){return I.filter(T=>{var Z;const D=d.subjects=="All Subjects"?!0:T.subjects.includes(d.subjects),V=d.audiences=="All Audiences"?!0:T.audiences.includes(d.audiences),J=ke([d.grades]),W=ke(T.grades),le=d.grades=="All Grade Levels"?!0:We(J,W),X=d.term.length>0?(Z=T.title)==null?void 0:Z.toLowerCase().includes(d.term.toLowerCase()):!0;return D&&V&&X&&le})}function f(d){n.$$.not_equal(r.audiences,d)&&(r.audiences=d,s(1,r))}function p(d){n.$$.not_equal(r.subjects,d)&&(r.subjects=d,s(1,r))}function A(d){n.$$.not_equal(r.grades,d)&&(r.grades=d,s(1,r))}function k(){r.term=this.value,s(1,r)}return n.$$set=d=>{"elems"in d&&s(7,l=d.elems),"list"in d&&s(0,o=d.list)},n.$$.update=()=>{n.$$.dirty&130&&s(5,t=_(r,l))},[o,r,u,a,i,t,c,l,f,p,A,k]}class lt extends te{constructor(e){super(),se(this,e,Xe,Qe,ee,{elems:7,list:0})}}export{lt as P};
