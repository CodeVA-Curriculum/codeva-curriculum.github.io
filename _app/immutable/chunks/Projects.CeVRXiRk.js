import{s as y,e as v,k as M,t as J,c as w,j,d as b,m as L,r as K,a as m,G as ge,i as P,o as g,v as Q,n as H,q as ie,g as Le,p as ce,x as U,M as Ge,_ as me,y as oe,$ as Ne,E as le,A as Ve,a0 as ne,z as Pe,w as be}from"./scheduler.C65pyL3v.js";import{S as x,i as ee,f as ae,c as B,b as C,m as z,g as $e,a as I,e as qe,t as $,d as F}from"./index.DEl-XE7C.js";import{s as Z,e as R,F as Se,l as ve,a as we}from"./index.COuYqp-R.js";import{b as Be}from"./paths.BVXqVrt-.js";function Ce(n){let e,s,t,l,u,a,i=n[0].title+"",r,o;return{c(){e=v("a"),s=v("div"),t=v("img"),u=M(),a=v("p"),r=J(i),this.h()},l(c){e=w(c,"A",{class:!0,href:!0});var d=j(e);s=w(d,"DIV",{class:!0});var f=j(s);t=w(f,"IMG",{alt:!0,src:!0,class:!0}),f.forEach(b),u=L(d),a=w(d,"P",{});var p=j(a);r=K(p,i),p.forEach(b),d.forEach(b),this.h()},h(){m(t,"alt","a placeholder"),ge(t.src,l="/images/"+n[0].image)||m(t,"src",l),m(t,"class","svelte-156t56h"),m(s,"class","wrap svelte-156t56h"),m(e,"class","orb svelte-156t56h"),m(e,"href",o=Z(n[0].pathData.path.replace("meta","")))},m(c,d){P(c,e,d),g(e,s),g(s,t),g(e,u),g(e,a),g(a,r)},p(c,[d]){d&1&&!ge(t.src,l="/images/"+c[0].image)&&m(t,"src",l),d&1&&i!==(i=c[0].title+"")&&Q(r,i),d&1&&o!==(o=Z(c[0].pathData.path.replace("meta","")))&&m(e,"href",o)},i:H,o:H,d(c){c&&b(e)}}}function ze(n,e,s){let{meta:t}=e;return ie(()=>{}),n.$$set=l=>{"meta"in l&&s(0,t=l.meta)},[t]}class Fe extends x{constructor(e){super(),ee(this,e,ze,Ce,y,{meta:0})}}function ke(n,e,s){const t=n.slice();return t[1]=e[s],t}function Ee(n){let e,s,t,l=n[1].title+"",u,a,i,r,o=n[1].authors+"",c,d;return{c(){e=v("tr"),s=v("td"),t=v("a"),u=J(l),i=M(),r=v("td"),c=J(o),d=M(),this.h()},l(f){e=w(f,"TR",{class:!0});var p=j(e);s=w(p,"TD",{});var O=j(s);t=w(O,"A",{href:!0});var k=j(t);u=K(k,l),k.forEach(b),O.forEach(b),i=L(p),r=w(p,"TD",{});var h=j(r);c=K(h,o),h.forEach(b),d=L(p),p.forEach(b),this.h()},h(){m(t,"href",a=Z(n[1].pathData.path).replace("/meta","")),m(e,"class","svelte-g5r3bw")},m(f,p){P(f,e,p),g(e,s),g(s,t),g(t,u),g(e,i),g(e,r),g(r,c),g(e,d)},p(f,p){p&1&&l!==(l=f[1].title+"")&&Q(u,l),p&1&&a!==(a=Z(f[1].pathData.path).replace("/meta",""))&&m(t,"href",a),p&1&&o!==(o=f[1].authors+"")&&Q(c,o)},d(f){f&&b(e)}}}function He(n){let e,s,t='<tr class="svelte-g5r3bw"><th>Title</th> <th>Authors</th></tr>',l,u,a=R(n[0]),i=[];for(let r=0;r<a.length;r+=1)i[r]=Ee(ke(n,a,r));return{c(){e=v("table"),s=v("thead"),s.innerHTML=t,l=M(),u=v("tbody");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=w(r,"TABLE",{class:!0});var o=j(e);s=w(o,"THEAD",{"data-svelte-h":!0}),Le(s)!=="svelte-1tqgf2d"&&(s.innerHTML=t),l=L(o),u=w(o,"TBODY",{});var c=j(u);for(let d=0;d<i.length;d+=1)i[d].l(c);c.forEach(b),o.forEach(b),this.h()},h(){m(e,"class","table element-table has-text-left")},m(r,o){P(r,e,o),g(e,s),g(e,l),g(e,u);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(u,null)},p(r,[o]){if(o&1){a=R(r[0]);let c;for(c=0;c<a.length;c+=1){const d=ke(r,a,c);i[c]?i[c].p(d,o):(i[c]=Ee(d),i[c].c(),i[c].m(u,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=a.length}},i:H,o:H,d(r){r&&b(e),ce(i,r)}}}function Ue(n,e,s){let{groups:t=[]}=e;return n.$$set=l=>{"groups"in l&&s(0,t=l.groups)},[t]}class Re extends x{constructor(e){super(),ee(this,e,Ue,He,y,{groups:0})}}function je(n,e,s){const t=n.slice();return t[4]=e[s],t}function Te(n){let e,s=n[4]+"",t,l;return{c(){e=v("option"),t=J(s),this.h()},l(u){e=w(u,"OPTION",{class:!0});var a=j(e);t=K(a,s),a.forEach(b),this.h()},h(){e.__value=l=n[4],U(e,e.__value),m(e,"class","svelte-sgeqct")},m(u,a){P(u,e,a),g(e,t)},p(u,a){a&2&&s!==(s=u[4]+"")&&Q(t,s),a&2&&l!==(l=u[4])&&(e.__value=l,U(e,e.__value))},d(u){u&&b(e)}}}function Ye(n){let e,s,t,l,u,a,i,r=R(n[1]),o=[];for(let c=0;c<r.length;c+=1)o[c]=Te(je(n,r,c));return{c(){e=v("div"),s=v("div"),t=v("select"),l=v("option"),u=J(n[2]);for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=w(c,"DIV",{class:!0});var d=j(e);s=w(d,"DIV",{class:!0});var f=j(s);t=w(f,"SELECT",{name:!0,class:!0});var p=j(t);l=w(p,"OPTION",{class:!0});var O=j(l);u=K(O,n[2]),O.forEach(b);for(let k=0;k<o.length;k+=1)o[k].l(p);p.forEach(b),f.forEach(b),d.forEach(b),this.h()},h(){l.__value=n[2],U(l,l.__value),m(l,"class","svelte-sgeqct"),m(t,"name","audience"),m(t,"class","svelte-sgeqct"),n[0]===void 0&&Ge(()=>n[3].call(t)),m(s,"class","select is-fullwidth svelte-sgeqct"),m(e,"class","control drop-down my-2 mx-1 p-0 is-inline-block-tablet svelte-sgeqct")},m(c,d){P(c,e,d),g(e,s),g(s,t),g(t,l),g(l,u);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(t,null);me(t,n[0],!0),a||(i=oe(t,"change",n[3]),a=!0)},p(c,[d]){if(d&4&&Q(u,c[2]),d&4&&(l.__value=c[2],U(l,l.__value)),d&2){r=R(c[1]);let f;for(f=0;f<r.length;f+=1){const p=je(c,r,f);o[f]?o[f].p(p,d):(o[f]=Te(p),o[f].c(),o[f].m(t,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=r.length}d&7&&me(t,c[0])},i:H,o:H,d(c){c&&b(e),ce(o,c),a=!1,i()}}}function Je(n,e,s){let{options:t}=e,{defaultOption:l}=e,{selected:u=""}=e;ie(()=>{s(0,u=l)});function a(){u=Ne(this),s(0,u),s(1,t),s(2,l)}return n.$$set=i=>{"options"in i&&s(1,t=i.options),"defaultOption"in i&&s(2,l=i.defaultOption),"selected"in i&&s(0,u=i.selected)},[u,t,l,a]}class re extends x{constructor(e){super(),ee(this,e,Je,Ye,y,{options:1,defaultOption:2,selected:0})}}var Ae={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]};function De(n,e,s){const t=n.slice();return t[14]=e[s],t}function Ke(n){let e,s,t=R(n[5]),l=[];for(let a=0;a<t.length;a+=1)l[a]=Oe(De(n,t,a));const u=a=>I(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=be()},l(a){for(let i=0;i<l.length;i+=1)l[i].l(a);e=be()},m(a,i){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(a,i);P(a,e,i),s=!0},p(a,i){if(i&32){t=R(a[5]);let r;for(r=0;r<t.length;r+=1){const o=De(a,t,r);l[r]?(l[r].p(o,i),$(l[r],1)):(l[r]=Oe(o),l[r].c(),$(l[r],1),l[r].m(e.parentNode,e))}for($e(),r=t.length;r<l.length;r+=1)u(r);qe()}},i(a){if(!s){for(let i=0;i<t.length;i+=1)$(l[i]);s=!0}},o(a){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)I(l[i]);s=!1},d(a){a&&b(e),ce(l,a)}}}function Qe(n){let e,s;return e=new Re({props:{groups:n[5]}}),{c(){B(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){z(e,t,l),s=!0},p(t,l){const u={};l&32&&(u.groups=t[5]),e.$set(u)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Oe(n){let e,s;return e=new Fe({props:{meta:n[14]}}),{c(){B(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){z(e,t,l),s=!0},p(t,l){const u={};l&32&&(u.meta=t[14]),e.$set(u)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function We(n){let e,s,t,l,u,a,i,r,o,c,d,f,p,O,k,h,q,W,T,A,V,Y,X;function te(_){n[8](_)}let ue={options:n[2],defaultOption:"All Audiences"};n[1].audiences!==void 0&&(ue.selected=n[1].audiences),t=new re({props:ue}),le.push(()=>ae(t,"selected",te));function Ie(_){n[9](_)}let fe={options:n[3],defaultOption:"All Subjects"};n[1].subjects!==void 0&&(fe.selected=n[1].subjects),a=new re({props:fe}),le.push(()=>ae(a,"selected",Ie));function Me(_){n[10](_)}let de={options:n[4],defaultOption:"All Grade Levels"};n[1].grades!==void 0&&(de.selected=n[1].grades),o=new re({props:de}),le.push(()=>ae(o,"selected",Me)),h=new Se({props:{icon:n[0]?Ae:ve}});const _e=[Qe,Ke],G=[];function he(_,E){return _[0]?0:1}return T=he(n),A=G[T]=_e[T](n),{c(){e=v("div"),s=v("div"),B(t.$$.fragment),u=M(),B(a.$$.fragment),r=M(),B(o.$$.fragment),d=M(),f=v("div"),p=v("input"),O=M(),k=v("button"),B(h.$$.fragment),W=M(),A.c(),this.h()},l(_){e=w(_,"DIV",{class:!0});var E=j(e);s=w(E,"DIV",{class:!0});var D=j(s);C(t.$$.fragment,D),u=L(D),C(a.$$.fragment,D),r=L(D),C(o.$$.fragment,D),d=L(D),f=w(D,"DIV",{class:!0});var N=j(f);p=w(N,"INPUT",{class:!0,placeholder:!0}),O=L(N),k=w(N,"BUTTON",{style:!0,"data-tooltip":!0,class:!0});var S=j(k);C(h.$$.fragment,S),S.forEach(b),N.forEach(b),D.forEach(b),W=L(E),A.l(E),E.forEach(b),this.h()},h(){m(p,"class","input mr-2 is-inline-block svelte-1foox37"),m(p,"placeholder","Group Name"),Ve(k,"width","2rem"),m(k,"data-tooltip",q="View as "+(n[0]?"Orbs":"List")),m(k,"class","has-tooltip-arrow button svelte-1foox37"),m(f,"class","my-2 mx-2 p-0 is-flex is-inline-block-tablet"),m(s,"class","field m-0 p-0"),m(e,"class","projects")},m(_,E){P(_,e,E),g(e,s),z(t,s,null),g(s,u),z(a,s,null),g(s,r),z(o,s,null),g(s,d),g(s,f),g(f,p),U(p,n[1].term),g(f,O),g(f,k),z(h,k,null),g(e,W),G[T].m(e,null),V=!0,Y||(X=[oe(p,"input",n[11]),oe(k,"click",n[6])],Y=!0)},p(_,[E]){const D={};E&4&&(D.options=_[2]),!l&&E&2&&(l=!0,D.selected=_[1].audiences,ne(()=>l=!1)),t.$set(D);const N={};E&8&&(N.options=_[3]),!i&&E&2&&(i=!0,N.selected=_[1].subjects,ne(()=>i=!1)),a.$set(N);const S={};E&16&&(S.options=_[4]),!c&&E&2&&(c=!0,S.selected=_[1].grades,ne(()=>c=!1)),o.$set(S),E&2&&p.value!==_[1].term&&U(p,_[1].term);const pe={};E&1&&(pe.icon=_[0]?Ae:ve),h.$set(pe),(!V||E&1&&q!==(q="View as "+(_[0]?"Orbs":"List")))&&m(k,"data-tooltip",q);let se=T;T=he(_),T===se?G[T].p(_,E):($e(),I(G[se],1,1,()=>{G[se]=null}),qe(),A=G[T],A?A.p(_,E):(A=G[T]=_e[T](_),A.c()),$(A,1),A.m(e,null))},i(_){V||($(t.$$.fragment,_),$(a.$$.fragment,_),$(o.$$.fragment,_),$(h.$$.fragment,_),$(A),V=!0)},o(_){I(t.$$.fragment,_),I(a.$$.fragment,_),I(o.$$.fragment,_),I(h.$$.fragment,_),I(A),V=!1},d(_){_&&b(e),F(t),F(a),F(o),F(h),G[T].d(),Y=!1,Pe(X)}}}function Xe(n,e){let s=0;for(let t=0;t<n.length;t++)s+=e.includes(n[t])?1:0;return s>0}function Ze(n,e,s){let t,{elems:l=[]}=e,u=[],a=[],i=[],{list:r=!1}=e,o={term:"",audiences:"",subjects:"",grades:""};function c(){s(0,r=!r)}ie(async()=>{d(o,l);const h=await(await fetch(`${Be}/api/library/meta.json`)).json();s(2,u=h.audiences);for(const q in h.subjects)s(3,a=[...a,h.subjects[q]]);for(const q in h.grades)s(4,i=[...i,q])});function d(h,q){return q.filter(T=>{const A=h.subjects=="All Subjects"?!0:T.subjects.includes(h.subjects),V=h.audiences=="All Audiences"?!0:T.audiences.includes(h.audiences),Y=we([h.grades]),X=we(T.grades),te=h.grades=="All Grade Levels"?!0:Xe(Y,X);return A&&V&&te})}function f(h){n.$$.not_equal(o.audiences,h)&&(o.audiences=h,s(1,o))}function p(h){n.$$.not_equal(o.subjects,h)&&(o.subjects=h,s(1,o))}function O(h){n.$$.not_equal(o.grades,h)&&(o.grades=h,s(1,o))}function k(){o.term=this.value,s(1,o)}return n.$$set=h=>{"elems"in h&&s(7,l=h.elems),"list"in h&&s(0,r=h.list)},n.$$.update=()=>{n.$$.dirty&130&&s(5,t=d(o,l))},[r,o,u,a,i,t,c,l,f,p,O,k]}class st extends x{constructor(e){super(),ee(this,e,Ze,We,y,{elems:7,list:0})}}export{st as P};
