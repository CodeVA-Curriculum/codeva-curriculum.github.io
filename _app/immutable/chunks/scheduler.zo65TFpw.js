var B=Object.defineProperty;var R=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>R(t,typeof e!="symbol"?e+"":e,n);function L(){}const st=t=>t;function G(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function ot(){return Object.create(null)}function F(t){t.forEach(z)}function I(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function at(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ft(t){return Object.keys(t).length===0}function W(t,...e){if(t==null){for(const i of e)i(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t,e,n){t.$$.on_destroy.push(W(e,n))}function dt(t,e,n,i){if(t){const r=M(t,e,n,i);return t[0](r)}}function M(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,o){if(r){const c=M(e,n,i,o);t.p(c,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function yt(t){return t??""}function gt(t){return t&&I(t.destroy)?t.destroy:L}let y=!1;function bt(){y=!0}function xt(){y=!1}function J(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:J(1,r,O=>e[n[O]].claim_order,u))-1;i[s]=n[a]+1;const A=a+1;n[A]=s,r=Math.max(A,r)}const o=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function Q(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=N("style");return e.textContent="/* empty */",V(U(t),e),e.sheet}function V(t,e){return Q(t.head||t,e),e.sheet}function X(t,e){if(y){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Y(t,e,n){t.insertBefore(e,n||null)}function Z(t,e,n){y&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function Nt(){return T(" ")}function Tt(){return T("")}function wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return t.dataset.svelteH}function St(t,e,n){const i=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&i.add(t[r].__value);return n||i.delete(e),Array.from(i)}function Ht(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Lt(t,e){let n=r(t),i;function r(l){for(let s=0;s<e.length;s++)l=l[e[s]]=l[e[s]]||[];return l}function o(){i.forEach(l=>n.push(l))}function c(){i.forEach(l=>n.splice(n.indexOf(l),1))}return{u(l){e=l;const s=r(t);s!==n&&(c(),n=s,o())},p(...l){i=l,o()},r:c}}function Mt(t){return Array.from(t.childNodes)}function D(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,r=!1){D(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function P(t,e,n,i){return j(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Ct(t,e,n){return P(t,e,n,N)}function Dt(t,e,n){return P(t,e,n,C)}function $(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function jt(t){return $(t," ")}function k(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return-1}function Pt(t,e){const n=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new S(e);D(t);const r=t.splice(n,i-n+1);x(r[0]),x(r[r.length-1]);const o=r.slice(1,r.length-1);for(const c of o)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new S(e,o)}function qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ot(t,e){t.value=e??""}function Bt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Rt(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Gt(t){const e=t.querySelector(":checked");return e&&e.__value}function zt(t,e,n){t.classList.toggle(e,!!n)}function tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ft(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}class et{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=C(n.nodeName):this.e=N(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Y(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class S extends et{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Z(this.t,this.n[i],n)}}function It(t,e){return new t(e)}let p;function g(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function Wt(t){w().$$.on_mount.push(t)}function Jt(t){w().$$.after_update.push(t)}function Kt(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=tt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const h=[],H=[];let d=[];const E=[],q=Promise.resolve();let v=!1;function nt(){v||(v=!0,q.then(rt))}function Qt(){return nt(),q}function it(t){d.push(t)}function Ut(t){E.push(t)}const b=new Set;let _=0;function rt(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const e=h[_];_++,g(e),ct(e.$$)}}catch(e){throw h.length=0,_=0,e}for(g(null),h.length=0,_=0;H.length;)H.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];b.has(n)||(b.add(n),n())}d.length=0}while(h.length);for(;E.length;)E.pop()();v=!1,b.clear(),g(t)}function ct(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}function Vt(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{Gt as $,Qt as A,H as B,It as C,at as D,yt as E,wt as F,Kt as G,I as H,U as I,Et as J,F as K,it as L,tt as M,st as N,g as O,ot as P,rt as Q,ft as R,Vt as S,p as T,z as U,h as V,nt as W,bt as X,xt as Y,Ot as Z,Rt as _,At as a,Ut as a0,S as a1,Pt as a2,C as a3,Dt as a4,zt as a5,gt as a6,St as a7,Lt as a8,Ht as a9,dt as b,Ct as c,x as d,N as e,pt as f,kt as g,ht as h,Z as i,Mt as j,Nt as k,Ft as l,jt as m,L as n,X as o,Bt as p,_t as q,Wt as r,ut as s,vt as t,mt as u,T as v,$ as w,qt as x,Tt as y,Jt as z};
