(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5739)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,a=n(r(7294)),c=r(1978),o=r(2139),s=r(7795),i=r(670),u=r(4465),f=r(2692),d=r(8245),h=r(9246),p=r(227),v=r(3468);let m=new Set;function x(e,t,r,n,l){if(l||o.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,a=t+"%"+r+"%"+l;if(m.has(a))return;m.add(a)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function g(e){return"string"==typeof e?e:s.formatUrl(e)}let j=a.default.forwardRef(function(e,t){let r,n;let{href:s,as:m,children:j,prefetch:y,passHref:w,replace:b,shallow:_,scroll:N,locale:C,onClick:k,onMouseEnter:O,onTouchStart:M,legacyBehavior:E=!1}=e,z=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=j,E&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let P=!1!==y,L=a.default.useContext(f.RouterContext),H=a.default.useContext(d.AppRouterContext),S=null!=L?L:H,R=!L,{href:T,as:A}=a.default.useMemo(()=>{if(!L){let e=g(s);return{href:e,as:m?g(m):e}}let[e,t]=c.resolveHref(L,s,!0);return{href:e,as:m?c.resolveHref(L,m):t||e}},[L,s,m]),B=a.default.useRef(T),I=a.default.useRef(A);E&&(n=a.default.Children.only(r));let D=E?n&&"object"==typeof n&&n.ref:t,[U,V,K]=h.useIntersection({rootMargin:"200px"}),q=a.default.useCallback(e=>{(I.current!==A||B.current!==T)&&(K(),I.current=A,B.current=T),U(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[A,D,T,K,U]);a.default.useEffect(()=>{S&&V&&P&&x(S,T,A,{locale:C},R)},[A,T,V,C,P,null==L?void 0:L.locale,S,R]);let F={ref:q,onClick(e){E||"function"!=typeof k||k(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,l,c,s,i,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!o.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:c,locale:i,scroll:s}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?a.default.startTransition(p):p()}(e,S,T,A,b,_,N,C,R,P)},onMouseEnter(e){E||"function"!=typeof O||O(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(P||!R)&&x(S,T,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0},R)},onTouchStart(e){E||"function"!=typeof M||M(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(P||!R)&&x(S,T,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0},R)}};if(i.isAbsoluteUrl(A))F.href=A;else if(!E||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&p.getDomainLocale(A,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);F.href=t||v.addBasePath(u.addLocale(A,e,null==L?void 0:L.defaultLocale))}return E?a.default.cloneElement(n,F):a.default.createElement("a",Object.assign({},z,F),r)});t.default=j,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,i=s||!a,[u,f]=n.useState(!1),d=n.useRef(null),h=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(a){if(i||u)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=o.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=c.get(n)))return t;let l=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:l},o.push(r),c.set(r,t),t}(r);return a.set(e,t),l.observe(e),function(){if(a.delete(e),l.unobserve(e),0===a.size){l.disconnect(),c.delete(n);let e=o.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=l.requestIdleCallback(()=>f(!0));return()=>l.cancelIdleCallback(e)}},[i,r,t,u,d.current]);let p=n.useCallback(()=>{f(!1)},[]);return[h,u,p]};var n=r(7294),l=r(4686);let a="function"==typeof IntersectionObserver,c=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5739:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),l=r(1664),a=r.n(l),c=r(1163),o=r(7294),s=r(8193),i=r(8357);function u(e){return(0,i.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"}}]})(e)}let f=()=>{let[e,t]=(0,o.useState)(!1),[r,l]=(0,o.useState)(!1),[i,f]=(0,o.useState)("transparent"),[d,h]=(0,o.useState)("#ecf0f1"),p=(0,c.useRouter)(),v=()=>{t(!e)};(0,o.useEffect)(()=>{let e=()=>{window.scrollY>=800?(l(!0),f("#ecf0f1"),h("#1f2937")):(l(!1),f("transparent"),h("#ecf0f1"))};window.addEventListener("scroll",e)},[]);let m=r=>{r.preventDefault(),p.push("/myResume"),t(!e)};return(0,n.jsxs)("div",{style:{backgroundColor:"".concat(i)},className:r?"fixed w-full h-20 shadow-xl z-[100]":"fixed w-full h-20 z-[100]",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center w-full h-full px-2 2xl:px-16",children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("p",{className:"ml-10 font-medium text-xluppercase hover:scale-105",style:{color:"".concat(d)},children:"CHO JAE YOUNG"})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("ul",{style:{color:"".concat(d)},className:"hidden md:flex mr-10",children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:scale-105",children:"HOME"})}),(0,n.jsx)(a(),{href:"/#aboutMe",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:scale-105",children:"ABOUT"})}),(0,n.jsx)(a(),{href:"/#skills",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:scale-105",children:"SKILLS"})}),(0,n.jsx)(a(),{href:"/#projects",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:scale-105",children:"PROJECTS"})})]}),(0,n.jsx)("div",{onClick:v,className:"md:hidden cursor-pointer px-2",children:(0,n.jsx)(s.qTj,{style:{color:"".concat(d)},size:25})})]})]}),(0,n.jsx)("div",{className:e?"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":"",children:(0,n.jsxs)("div",{className:e?"fixed left-0 top-0 w-[75%] sm:[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease duration-500":"fixed left-[-100%] top-0 p-10 ease duration-500",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex w-full items-center justify-between",children:(0,n.jsx)("div",{onClick:v,className:"rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-150",children:(0,n.jsx)(s.oHP,{})})}),(0,n.jsx)("div",{className:"border-b border-gray-300 my-4",children:(0,n.jsx)("p",{className:"w-[85%] md:w-[90%] py-4",children:"together"})})]}),(0,n.jsxs)("div",{className:"py-4 flex flex-col h-[90vh]",children:[(0,n.jsxs)("ul",{className:"uppercase",children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("li",{onClick:()=>t(!e),className:"py-4 text-sm hover:border-b",children:"Home"})}),(0,n.jsx)(a(),{href:"/#about",children:(0,n.jsx)("li",{onClick:()=>t(!e),className:"py-4 text-sm hover:border-b",children:"About"})}),(0,n.jsx)(a(),{href:"/#skills",children:(0,n.jsx)("li",{onClick:()=>t(!e),className:"py-4 text-sm hover:border-b",children:"Skills"})}),(0,n.jsx)(a(),{href:"/#projects",children:(0,n.jsx)("li",{onClick:()=>t(!e),className:"py-4 text-sm hover:border-b",children:"Projects"})})]}),(0,n.jsxs)("div",{className:"pt-40",children:[(0,n.jsx)("p",{className:"uppercase tracking-widest text-[#6fa2c7]",children:" connect"}),(0,n.jsxs)("div",{className:"flex items-center justify-between w-full my-4 sm:w-[80%]",children:[(0,n.jsx)("a",{href:"https://www.linkedin.com/in/gw%C3%A9na%C3%ABl-gu%C3%A9rin-0636901a7/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150",children:(0,n.jsx)(s._iD,{})})}),(0,n.jsx)("a",{href:"https://github.com/gwen-guerin",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150",children:(0,n.jsx)(s.RrF,{})})}),(0,n.jsx)("a",{href:"mailto:gwenael.guerin@protonmail.com",children:(0,n.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150",children:(0,n.jsx)(s.Dme,{})})}),(0,n.jsx)(a(),{onClick:m,href:"/#myResume",target:"_blank",children:(0,n.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150",children:(0,n.jsx)(u,{})})})]})]})]})]})})]})};r(8434);let d=e=>{let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsx)(t,{...r})]})};var h=d},8434:function(){},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)},8193:function(e,t,r){"use strict";r.d(t,{Dme:function(){return o},Nhm:function(){return i},RrF:function(){return l},_iD:function(){return a},oHP:function(){return c},qTj:function(){return s}});var n=r(8357);function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}}]})(e)}function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(e)}function s(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function s(e){return function(t){return n.createElement(i,c({attr:c({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,c({key:r},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var r,l=e.attr,a=e.size,s=e.title,i=o(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,i,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);