import{S as z,i as G,s as J,l as h,u as S,a as M,m as _,p as m,v as q,h as f,c as O,q as d,r as B,b as K,J as u,w as H,n as w,f as E,d as T,t as I,K as F,x as L,y as P,z as Q,C as U,g as W}from"../chunks/index-e4632d4b.js";function X(c){let t,r,s,i,n,e,y,a,o,l,v,p;return{c(){t=h("div"),r=h("a"),s=h("div"),i=h("div"),n=h("div"),e=h("h2"),y=h("strong"),a=S(c[0]),o=M(),l=h("h2"),v=S(c[1]),this.h()},l(g){t=_(g,"DIV",{class:!0,style:!0});var x=m(t);r=_(x,"A",{href:!0,class:!0});var k=m(r);s=_(k,"DIV",{class:!0,style:!0});var D=m(s);i=_(D,"DIV",{class:!0});var V=m(i);n=_(V,"DIV",{class:!0});var b=m(n);e=_(b,"H2",{class:!0});var A=m(e);y=_(A,"STRONG",{});var C=m(y);a=q(C,c[0]),C.forEach(f),A.forEach(f),o=O(b),l=_(b,"H2",{class:!0});var R=m(l);v=q(R,c[1]),R.forEach(f),b.forEach(f),V.forEach(f),D.forEach(f),k.forEach(f),x.forEach(f),this.h()},h(){d(e,"class","text-rotate m-2 svelte-1v7bpr4"),d(l,"class","text-rotate m-2 mt-3 svelte-1v7bpr4"),d(n,"class","img-info-overlay d-flex text-dark svelte-1v7bpr4"),d(i,"class","img-info d-flex svelte-1v7bpr4"),d(s,"class","img d-flex flex-grow-1 svelte-1v7bpr4"),d(s,"style",p=`background-image: url("${c[2]}"`),d(r,"href",""),d(r,"class","d-flex flex-grow-1"),d(t,"class","d-flex col-12 col-md-4"),B(t,"padding","3px"),B(t,"aspect-ratio","1/1")},m(g,x){K(g,t,x),u(t,r),u(r,s),u(s,i),u(i,n),u(n,e),u(e,y),u(y,a),u(n,o),u(n,l),u(l,v)},p(g,[x]){x&1&&H(a,g[0]),x&2&&H(v,g[1]),x&4&&p!==(p=`background-image: url("${g[2]}"`)&&d(s,"style",p)},i:w,o:w,d(g){g&&f(t)}}}function Y(c,t,r){let{title:s=""}=t,{id:i=""}=t,{src:n=""}=t;return c.$$set=e=>{"title"in e&&r(0,s=e.title),"id"in e&&r(1,i=e.id),"src"in e&&r(2,n=e.src)},[s,i,n]}class Z extends z{constructor(t){super(),G(this,t,Y,X,J,{title:0,id:1,src:2})}}const $="/webkitAnimationBugReproduction/_app/immutable/assets/demo-b74e38bf.jpg";function N(c,t,r){const s=c.slice();return s[0]=t[r],s}function j(c){let t,r;return t=new Z({props:{src:$,title:"Demo image",id:"demo"}}),{c(){L(t.$$.fragment)},l(s){P(t.$$.fragment,s)},m(s,i){Q(t,s,i),r=!0},p:w,i(s){r||(E(t.$$.fragment,s),r=!0)},o(s){I(t.$$.fragment,s),r=!1},d(s){U(t,s)}}}function ee(c){let t,r,s,i,n=Array(15),e=[];for(let a=0;a<n.length;a+=1)e[a]=j(N(c,n,a));const y=a=>I(e[a],1,1,()=>{e[a]=null});return{c(){t=h("main"),r=h("div"),s=h("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=_(a,"MAIN",{class:!0});var o=m(t);r=_(o,"DIV",{class:!0});var l=m(r);s=_(l,"DIV",{class:!0});var v=m(s);for(let p=0;p<e.length;p+=1)e[p].l(v);v.forEach(f),l.forEach(f),o.forEach(f),this.h()},h(){d(s,"class","row w-100 flex-grow-1 align-content-start px-md-5 mx-lg-4"),d(r,"class","container-fluid d-flex h-100"),d(t,"class","svelte-153i531")},m(a,o){K(a,t,o),u(t,r),u(r,s);for(let l=0;l<e.length;l+=1)e[l].m(s,null);i=!0},p(a,[o]){if(o&0){n=Array(15);let l;for(l=0;l<n.length;l+=1){const v=N(a,n,l);e[l]?(e[l].p(v,o),E(e[l],1)):(e[l]=j(),e[l].c(),E(e[l],1),e[l].m(s,null))}for(W(),l=n.length;l<e.length;l+=1)y(l);T()}},i(a){if(!i){for(let o=0;o<n.length;o+=1)E(e[o]);i=!0}},o(a){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)I(e[o]);i=!1},d(a){a&&f(t),F(e,a)}}}class se extends z{constructor(t){super(),G(this,t,null,ee,J,{})}}export{se as default};
