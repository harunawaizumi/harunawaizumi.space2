(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{1516:function(e,t){"use strict";function o(e,t,o,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=o(4788),l=o(8754),n=o(224),u=l._(o(7294)),a=o(4532),f=o(3353),c=o(1410),i=o(9064),s=o(370),d=o(9955),p=o(4224),h=o(508),b=o(1516),y=o(4266),v=new Set;function g(e,t,o,r,l){if(l||(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let l=t+"%"+o+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(l))return;v.add(l)}Promise.resolve(e.prefetch(t,o,r)).catch((e=>{}))}}function _(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let m=u.default.forwardRef((function(e,t){let o,l,{href:c,as:v,children:m,prefetch:C,passHref:M,replace:j,shallow:k,scroll:P,locale:E,onClick:O,onMouseEnter:w,onTouchStart:x,legacyBehavior:L=!1}=e,R=n._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=m,L&&("string"==typeof o||"number"==typeof o)&&(o=u.default.createElement("a",null,o));let I=!1!==C,S=u.default.useContext(d.RouterContext),T=u.default.useContext(p.AppRouterContext),N=null!=S?S:T,U=!S,{href:A,as:D}=u.default.useMemo((()=>{if(!S){let e=_(c);return{href:e,as:v?_(v):e}}let[e,t]=(0,a.resolveHref)(S,c,!0);return{href:e,as:v?(0,a.resolveHref)(S,v):t||e}}),[S,c,v]),H=u.default.useRef(A),K=u.default.useRef(D);L&&(l=u.default.Children.only(o));let B=L?l&&"object"==typeof l&&l.ref:t,[q,z,F]=(0,h.useIntersection)({rootMargin:"200px"}),G=u.default.useCallback((e=>{(K.current!==D||H.current!==A)&&(F(),K.current=D,H.current=A),q(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))}),[D,B,A,F,q]);u.default.useEffect((()=>{N&&z&&I&&g(N,A,D,{locale:E},U)}),[D,A,z,E,I,null==S?void 0:S.locale,N,U]);let J={ref:G,onClick(e){L||"function"!=typeof O||O(e),L&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,o,r,l,n,a,c,i,s){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!(0,f.isLocalURL)(o)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[l?"replace":"push"](o,r,{shallow:n,locale:c,scroll:a}):t[l?"replace":"push"](r||o,{forceOptimisticNavigation:!s})};i?u.default.startTransition(p):p()}(e,N,A,D,j,k,P,E,U,I)},onMouseEnter(e){L||"function"!=typeof w||w(e),L&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),N&&(I||!U)&&g(N,A,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},U)},onTouchStart(e){L||"function"!=typeof x||x(e),L&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),N&&(I||!U)&&g(N,A,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},U)}};if((0,i.isAbsoluteUrl)(D))J.href=D;else if(!L||M||"a"===l.type&&!("href"in l.props)){let e=void 0!==E?E:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,b.getDomainLocale)(D,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);J.href=t||(0,y.addBasePath)((0,s.addLocale)(D,e,null==S?void 0:S.defaultLocale))}return L?u.default.cloneElement(l,J):u.default.createElement("a",r._({},R,J),o)}));("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let r=o(7294),l=o(29),n="function"==typeof IntersectionObserver,u=new Map,a=[];function f(e){let{rootRef:t,rootMargin:o,disabled:f}=e,c=f||!n,[i,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)((e=>{d.current=e}),[]);(0,r.useEffect)((()=>{if(n){if(c||i)return;let e=d.current;if(e&&e.tagName){return function(e,t,o){let{id:r,observer:l,elements:n}=function(e){let t,o={root:e.root||null,margin:e.rootMargin||""},r=a.find((e=>e.root===o.root&&e.margin===o.margin));if(r&&(t=u.get(r)))return t;let l=new Map,n=new IntersectionObserver((e=>{e.forEach((e=>{let t=l.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return t={id:o,observer:n,elements:l},a.push(o),u.set(o,t),t}(o);return n.set(e,(e=>e&&s(e))),l.observe(e),function(){if(n.delete(e),l.unobserve(e),0===n.size){l.disconnect(),u.delete(r);let e=a.findIndex((e=>e.root===r.root&&e.margin===r.margin));e>-1&&a.splice(e,1)}}}(e,0,{root:null==t?void 0:t.current,rootMargin:o})}}else if(!i){let e=(0,l.requestIdleCallback)((()=>s(!0)));return()=>(0,l.cancelIdleCallback)(e)}}),[c,o,t,i,d.current]);let h=(0,r.useCallback)((()=>{s(!1)}),[]);return[p,i,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,o){e.exports=o(5569)}}]);