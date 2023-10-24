import{s as X,f as v,a as M,l as J,g as w,h as T,d as m,c as q,m as K,j as b,D as pe,i as P,u as p,n as Y,w as H,o as ce,r as Me,E as ue,F as y,G as qe,H as ge,v as ie,I as Ge,p as ne,J as ae,K as Ne,e as me}from"./scheduler.9d3a4e44.js";import{S as Z,i as x,f as oe,b as V,d as S,m as B,g as De,t as L,c as Le,a as D,e as F}from"./index.f08aea18.js";import{e as U}from"./each.e59479a4.js";import{b as Pe}from"./paths.7735e4cf.js";import{s as be,F as Ce,f as ve,e as we}from"./index.95a14a5b.js";function Ve(n){let e,s,t,l,u,a,i=n[0].title+"",o,r;return{c(){e=v("a"),s=v("div"),t=v("img"),u=M(),a=v("p"),o=J(i),this.h()},l(c){e=w(c,"A",{class:!0,href:!0});var d=T(e);s=w(d,"DIV",{class:!0});var f=T(s);t=w(f,"IMG",{alt:!0,src:!0,class:!0}),f.forEach(m),u=q(d),a=w(d,"P",{});var g=T(a);o=K(g,i),g.forEach(m),d.forEach(m),this.h()},h(){b(t,"alt","a placeholder"),pe(t.src,l="/images/"+n[0].image)||b(t,"src",l),b(t,"class","svelte-1ywc0q3"),b(s,"class","wrap svelte-1ywc0q3"),b(e,"class","orb svelte-1ywc0q3"),b(e,"href",r=be(n[0].pathData.path.replace("meta","")))},m(c,d){P(c,e,d),p(e,s),p(s,t),p(e,u),p(e,a),p(a,o)},p(c,[d]){d&1&&!pe(t.src,l="/images/"+c[0].image)&&b(t,"src",l),d&1&&i!==(i=c[0].title+"")&&Y(o,i),d&1&&r!==(r=be(c[0].pathData.path.replace("meta","")))&&b(e,"href",r)},i:H,o:H,d(c){c&&m(e)}}}function Se(n,e,s){let{meta:t}=e;return ce(()=>{}),n.$$set=l=>{"meta"in l&&s(0,t=l.meta)},[t]}class Be extends Z{constructor(e){super(),x(this,e,Se,Ve,X,{meta:0})}}function Ee(n,e,s){const t=n.slice();return t[1]=e[s],t}function je(n){let e,s,t,l=n[1].title+"",u,a,i,o,r=n[1].authors+"",c,d;return{c(){e=v("tr"),s=v("td"),t=v("a"),u=J(l),i=M(),o=v("td"),c=J(r),d=M(),this.h()},l(f){e=w(f,"TR",{class:!0});var g=T(e);s=w(g,"TD",{});var j=T(s);t=w(j,"A",{href:!0});var k=T(t);u=K(k,l),k.forEach(m),j.forEach(m),i=q(g),o=w(g,"TD",{});var h=T(o);c=K(h,r),h.forEach(m),d=q(g),g.forEach(m),this.h()},h(){b(t,"href",a=n[1].path),b(e,"class","svelte-g5r3bw")},m(f,g){P(f,e,g),p(e,s),p(s,t),p(t,u),p(e,i),p(e,o),p(o,c),p(e,d)},p(f,g){g&1&&l!==(l=f[1].title+"")&&Y(u,l),g&1&&a!==(a=f[1].path)&&b(t,"href",a),g&1&&r!==(r=f[1].authors+"")&&Y(c,r)},d(f){f&&m(e)}}}function Fe(n){let e,s,t='<tr class="svelte-g5r3bw"><th>Title</th> <th>Authors</th></tr>',l,u,a=U(n[0]),i=[];for(let o=0;o<a.length;o+=1)i[o]=je(Ee(n,a,o));return{c(){e=v("table"),s=v("thead"),s.innerHTML=t,l=M(),u=v("tbody");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=w(o,"TABLE",{class:!0});var r=T(e);s=w(r,"THEAD",{"data-svelte-h":!0}),Me(s)!=="svelte-1tqgf2d"&&(s.innerHTML=t),l=q(r),u=w(r,"TBODY",{});var c=T(u);for(let d=0;d<i.length;d+=1)i[d].l(c);c.forEach(m),r.forEach(m),this.h()},h(){b(e,"class","table element-table has-text-left")},m(o,r){P(o,e,r),p(e,s),p(e,l),p(e,u);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(u,null)},p(o,[r]){if(r&1){a=U(o[0]);let c;for(c=0;c<a.length;c+=1){const d=Ee(o,a,c);i[c]?i[c].p(d,r):(i[c]=je(d),i[c].c(),i[c].m(u,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=a.length}},i:H,o:H,d(o){o&&m(e),ue(i,o)}}}function He(n,e,s){let{groups:t=[]}=e;return n.$$set=l=>{"groups"in l&&s(0,t=l.groups)},[t]}class ye extends Z{constructor(e){super(),x(this,e,He,Fe,X,{groups:0})}}function ke(n,e,s){const t=n.slice();return t[4]=e[s],t}function Oe(n){let e,s=n[4]+"",t,l;return{c(){e=v("option"),t=J(s),this.h()},l(u){e=w(u,"OPTION",{});var a=T(e);t=K(a,s),a.forEach(m),this.h()},h(){e.__value=l=n[4],y(e,e.__value)},m(u,a){P(u,e,a),p(e,t)},p(u,a){a&2&&s!==(s=u[4]+"")&&Y(t,s),a&2&&l!==(l=u[4])&&(e.__value=l,y(e,e.__value))},d(u){u&&m(e)}}}function Ue(n){let e,s,t,l,u,a,i,o=U(n[1]),r=[];for(let c=0;c<o.length;c+=1)r[c]=Oe(ke(n,o,c));return{c(){e=v("control"),s=v("div"),t=v("select"),l=v("option"),u=J(n[2]);for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l(c){e=w(c,"CONTROL",{class:!0});var d=T(e);s=w(d,"DIV",{class:!0});var f=T(s);t=w(f,"SELECT",{name:!0});var g=T(t);l=w(g,"OPTION",{});var j=T(l);u=K(j,n[2]),j.forEach(m);for(let k=0;k<r.length;k+=1)r[k].l(g);g.forEach(m),f.forEach(m),d.forEach(m),this.h()},h(){l.__value=n[2],y(l,l.__value),b(t,"name","audience"),n[0]===void 0&&qe(()=>n[3].call(t)),b(s,"class","select"),b(e,"class","control drop-down")},m(c,d){P(c,e,d),p(e,s),p(s,t),p(t,l),p(l,u);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(t,null);ge(t,n[0],!0),a||(i=ie(t,"change",n[3]),a=!0)},p(c,[d]){if(d&4&&Y(u,c[2]),d&4&&(l.__value=c[2],y(l,l.__value)),d&2){o=U(c[1]);let f;for(f=0;f<o.length;f+=1){const g=ke(c,o,f);r[f]?r[f].p(g,d):(r[f]=Oe(g),r[f].c(),r[f].m(t,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=o.length}d&7&&ge(t,c[0])},i:H,o:H,d(c){c&&m(e),ue(r,c),a=!1,i()}}}function ze(n,e,s){let{options:t}=e,{defaultOption:l}=e,{selected:u=""}=e;ce(()=>{s(0,u=l)});function a(){u=Ge(this),s(0,u),s(1,t),s(2,l)}return n.$$set=i=>{"options"in i&&s(1,t=i.options),"defaultOption"in i&&s(2,l=i.defaultOption),"selected"in i&&s(0,u=i.selected)},[u,t,l,a]}class re extends Z{constructor(e){super(),x(this,e,ze,Ue,X,{options:1,defaultOption:2,selected:0})}}var Te={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]};function Ae(n,e,s){const t=n.slice();return t[14]=e[s],t}function Re(n){let e,s,t=U(n[5]),l=[];for(let a=0;a<t.length;a+=1)l[a]=$e(Ae(n,t,a));const u=a=>L(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=me()},l(a){for(let i=0;i<l.length;i+=1)l[i].l(a);e=me()},m(a,i){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(a,i);P(a,e,i),s=!0},p(a,i){if(i&32){t=U(a[5]);let o;for(o=0;o<t.length;o+=1){const r=Ae(a,t,o);l[o]?(l[o].p(r,i),D(l[o],1)):(l[o]=$e(r),l[o].c(),D(l[o],1),l[o].m(e.parentNode,e))}for(De(),o=t.length;o<l.length;o+=1)u(o);Le()}},i(a){if(!s){for(let i=0;i<t.length;i+=1)D(l[i]);s=!0}},o(a){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)L(l[i]);s=!1},d(a){a&&m(e),ue(l,a)}}}function Je(n){let e,s;return e=new ye({props:{groups:n[5]}}),{c(){V(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p(t,l){const u={};l&32&&(u.groups=t[5]),e.$set(u)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function $e(n){let e,s;return e=new Be({props:{meta:n[14]}}),{c(){V(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p(t,l){const u={};l&32&&(u.meta=t[14]),e.$set(u)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Ke(n){let e,s,t,l,u,a,i,o,r,c,d,f,g,j,k,h,I,$,O,N,z,Q;function ee(_){n[8](_)}let W={options:n[2],defaultOption:"All Audiences"};n[1].audiences!==void 0&&(W.selected=n[1].audiences),t=new re({props:W}),ne.push(()=>oe(t,"selected",ee));function te(_){n[9](_)}let R={options:n[3],defaultOption:"All Subjects"};n[1].subjects!==void 0&&(R.selected=n[1].subjects),a=new re({props:R}),ne.push(()=>oe(a,"selected",te));function Ie(_){n[10](_)}let fe={options:n[4],defaultOption:"All Grade Levels"};n[1].grades!==void 0&&(fe.selected=n[1].grades),r=new re({props:fe}),ne.push(()=>oe(r,"selected",Ie)),k=new Ce({props:{icon:n[0]?Te:ve}});const de=[Je,Re],G=[];function _e(_,E){return _[0]?0:1}return $=_e(n),O=G[$]=de[$](n),{c(){e=v("div"),s=v("div"),V(t.$$.fragment),u=M(),V(a.$$.fragment),o=M(),V(r.$$.fragment),d=M(),f=v("input"),g=M(),j=v("button"),V(k.$$.fragment),I=M(),O.c(),this.h()},l(_){e=w(_,"DIV",{class:!0});var E=T(e);s=w(E,"DIV",{class:!0});var A=T(s);S(t.$$.fragment,A),u=q(A),S(a.$$.fragment,A),o=q(A),S(r.$$.fragment,A),d=q(A),f=w(A,"INPUT",{class:!0,placeholder:!0}),g=q(A),j=w(A,"BUTTON",{"data-tooltip":!0,class:!0});var C=T(j);S(k.$$.fragment,C),C.forEach(m),A.forEach(m),I=q(E),O.l(E),E.forEach(m),this.h()},h(){b(f,"class","input mr-2"),b(f,"placeholder","Group Name"),b(j,"data-tooltip",h="View as "+(n[0]?"Orbs":"List")),b(j,"class","has-tooltip-arrow button svelte-5w3l3y"),b(s,"class","field is-grouped"),b(e,"class","projects")},m(_,E){P(_,e,E),p(e,s),B(t,s,null),p(s,u),B(a,s,null),p(s,o),B(r,s,null),p(s,d),p(s,f),y(f,n[1].term),p(s,g),p(s,j),B(k,j,null),p(e,I),G[$].m(e,null),N=!0,z||(Q=[ie(f,"input",n[11]),ie(j,"click",n[6])],z=!0)},p(_,[E]){const A={};E&4&&(A.options=_[2]),!l&&E&2&&(l=!0,A.selected=_[1].audiences,ae(()=>l=!1)),t.$set(A);const C={};E&8&&(C.options=_[3]),!i&&E&2&&(i=!0,C.selected=_[1].subjects,ae(()=>i=!1)),a.$set(C);const se={};E&16&&(se.options=_[4]),!c&&E&2&&(c=!0,se.selected=_[1].grades,ae(()=>c=!1)),r.$set(se),E&2&&f.value!==_[1].term&&y(f,_[1].term);const he={};E&1&&(he.icon=_[0]?Te:ve),k.$set(he),(!N||E&1&&h!==(h="View as "+(_[0]?"Orbs":"List")))&&b(j,"data-tooltip",h);let le=$;$=_e(_),$===le?G[$].p(_,E):(De(),L(G[le],1,1,()=>{G[le]=null}),Le(),O=G[$],O?O.p(_,E):(O=G[$]=de[$](_),O.c()),D(O,1),O.m(e,null))},i(_){N||(D(t.$$.fragment,_),D(a.$$.fragment,_),D(r.$$.fragment,_),D(k.$$.fragment,_),D(O),N=!0)},o(_){L(t.$$.fragment,_),L(a.$$.fragment,_),L(r.$$.fragment,_),L(k.$$.fragment,_),L(O),N=!1},d(_){_&&m(e),F(t),F(a),F(r),F(k),G[$].d(),z=!1,Ne(Q)}}}function Ye(n,e){let s=0;for(let t=0;t<n.length;t++)s+=e.includes(n[t])?1:0;return s>0}function Qe(n,e,s){let t,{elems:l=[]}=e,u=[],a=[],i=[],{list:o=!1}=e,r={term:"",audiences:"",subjects:"",grades:""};function c(){s(0,o=!o)}ce(async()=>{d(r,l);const h=await(await fetch(`${Pe}/api/library/meta`)).json();s(2,u=h.audiences);for(const I in h.subjects)s(3,a=[...a,I]);for(const I in h.grades)s(4,i=[...i,I])});function d(h,I){return I.filter(O=>{var R;const N=h.subjects=="All Subjects"?!0:O.subjects.includes(h.subjects),z=h.audiences=="All Audiences"?!0:O.audiences.includes(h.audiences),Q=we([h.grades]),ee=we(O.grades),W=h.grades=="All Grade Levels"?!0:Ye(Q,ee),te=h.term.length>0?(R=O.title)==null?void 0:R.toLowerCase().includes(h.term.toLowerCase()):!0;return N&&z&&te&&W})}function f(h){n.$$.not_equal(r.audiences,h)&&(r.audiences=h,s(1,r))}function g(h){n.$$.not_equal(r.subjects,h)&&(r.subjects=h,s(1,r))}function j(h){n.$$.not_equal(r.grades,h)&&(r.grades=h,s(1,r))}function k(){r.term=this.value,s(1,r)}return n.$$set=h=>{"elems"in h&&s(7,l=h.elems),"list"in h&&s(0,o=h.list)},n.$$.update=()=>{n.$$.dirty&130&&s(5,t=d(r,l))},[o,r,u,a,i,t,c,l,f,g,j,k]}class tt extends Z{constructor(e){super(),x(this,e,Qe,Ke,X,{elems:7,list:0})}}export{tt as P};
