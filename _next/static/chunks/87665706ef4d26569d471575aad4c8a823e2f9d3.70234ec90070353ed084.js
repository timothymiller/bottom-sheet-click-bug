(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"OPR+":function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(){"use strict";var e={d:function(t,n){for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){if("noModule"in HTMLScriptElement.prototype){const t=document.createElement("script");t.src=e,t.setAttribute("crossorigin",""),document.body.appendChild(t)}}e.r(t),e.d(t,{componentsReady:function(){return s},load:function(){return r}});const c="porscheDesignSystem",r=(e={prefix:""})=>{!function({script:e,version:t,prefix:r}){var s;const o=null!==(s=function(e){const t=(document[c]||(document[c]={}),document[c]),{[e]:n=null}=t;if(null===n){const n={isLoaded:!1,prefixes:[],registerCustomElements:null};t[e]=n}return t[e]}(t))&&void 0!==s?s:{},{isLoaded:a,prefixes:i,registerCustomElements:l}=o;a||(n(e),o.isLoaded=!0),i.includes(r)||(i.push(r),l&&l(r))}(Object.assign(Object.assign({},{version:"2.3.0-beta.3",script:("undefined"!==typeof window&&"cn"===window.PORSCHE_DESIGN_SYSTEM_CDN?"https://cdn.ui.porsche.cn":"https://cdn.ui.porsche.com")+"/porsche-design-system/components/porsche-design-system.v2.3.0-beta.3.2187accf924b3c63cdb1.js"}),e))},s=(e=document.body)=>{let t;const n=new Promise((e=>t=e));if(o())a(e,t);else{const n="readystatechange",c=()=>{o()&&(document.removeEventListener(n,c),a(e,t))};document.addEventListener(n,c)}return n},o=()=>"complete"===document.readyState,a=(e,t)=>{const n=i(e);Promise.all(n).then((e=>t(e.length))).catch(console.error)},i=e=>{let t=[];return 1===(null==e?void 0:e.nodeType)&&Array.from(e.children).forEach((e=>{f(e)&&t.push(e.componentOnReady()),t=t.concat(i(e))})),t},l=/^(.*-)?P-(.*)$/,f=e=>l.exec(e.tagName)&&"function"==typeof e.componentOnReady;return t}()},PTj2:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return v})),n.d(t,"j",(function(){return E})),n.d(t,"k",(function(){return x})),n.d(t,"l",(function(){return y})),n.d(t,"m",(function(){return R})),n.d(t,"n",(function(){return L})),n.d(t,"o",(function(){return N})),n.d(t,"p",(function(){return P})),n.d(t,"q",(function(){return S})),n.d(t,"r",(function(){return z})),n.d(t,"s",(function(){return C})),n.d(t,"t",(function(){return k})),n.d(t,"u",(function(){return a}));var c=n("OPR+"),r=n("nKUr"),s=n("q1tI");const o=Object(s.createContext)({prefix:void 0}),a=({prefix:e="",...t})=>(Object(s.useEffect)((()=>{Object(c.load)({prefix:e})}),[e]),Object(r.jsx)(o.Provider,Object.assign({value:{prefix:e}},t),void 0)),i=e=>e.split(" ").filter((e=>e)),l=(e,t)=>n=>{e.current=n,"function"===typeof t?t(n):null!==t&&(t.current=n)};const f=e=>{{const{prefix:t}=Object(s.useContext)(o);if(void 0===t)throw new Error("It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.");return t?t+"-"+e:e}},u=(e,t,n)=>{Object(s.useEffect)((()=>{const{current:c}=e;if(c&&n)return c.addEventListener(t,n),()=>null===c||void 0===c?void 0:c.removeEventListener(t,n)}),[n])},d=(e,t)=>{const n=Object(s.useRef)();return Object(s.useMemo)((()=>{const{current:c}=e;let r=t;return c&&(r=((e,t="",n="")=>{const c=i(t);let r=i(e);return c.length&&(r=r.filter((e=>!c.includes(e)))),i(n).concat(r).join(" ")})(c.className,n.current,t),c.className=r),n.current=t,r}),[t])},b=Object(s.forwardRef)((({compact:e,heading:t,onAccordionChange:n,open:c,size:o="small",tag:a="h2",theme:i="light",className:b,...j},h)=>{const g=Object(s.useRef)();u(g,"accordionChange",n);const O=f("p-accordion"),p=[e,t,c,o,a,i];Object(s.useEffect)((()=>{const{current:e}=g;["compact","heading","open","size","tag","theme"].forEach(((t,n)=>e[t]=p[n]))}),p);const m={...j,class:d(g,b),ref:l(g,h)};return Object(r.jsx)(O,Object.assign({},m),void 0)})),j=Object(s.forwardRef)((({disabled:e=!1,hideLabel:t=!1,icon:n="arrow-head-right",iconSource:c,loading:o=!1,tabbable:a=!0,theme:i="light",type:u="submit",variant:b="secondary",className:j,...h},g)=>{const O=Object(s.useRef)(),p=f("p-button"),m=[e,t,n,c,o,a,i,u,b];Object(s.useEffect)((()=>{const{current:e}=O;["disabled","hideLabel","icon","iconSource","loading","tabbable","theme","type","variant"].forEach(((t,n)=>e[t]=m[n]))}),m);const w={...h,class:d(O,j),ref:l(O,g)};return Object(r.jsx)(p,Object.assign({},w),void 0)})),h=Object(s.forwardRef)((({disabled:e=!1,hideLabel:t=!1,icon:n="arrow-head-right",iconSource:c,loading:o=!1,size:a="small",tabbable:i=!0,theme:u="light",type:b="submit",weight:j="regular",className:h,...g},O)=>{const p=Object(s.useRef)(),m=f("p-button-pure"),w=[e,t,n,c,o,a,i,u,b,j];Object(s.useEffect)((()=>{const{current:e}=p;["disabled","hideLabel","icon","iconSource","loading","size","tabbable","theme","type","weight"].forEach(((t,n)=>e[t]=w[n]))}),w);const v={...g,class:d(p,h),ref:l(p,O)};return Object(r.jsx)(m,Object.assign({},v),void 0)})),g=Object(s.forwardRef)((({hideLabel:e=!1,label:t="",message:n="",state:c="none",className:o,...a},i)=>{const u=Object(s.useRef)(),b=f("p-checkbox-wrapper"),j=[e,t,n,c];Object(s.useEffect)((()=>{const{current:e}=u;["hideLabel","label","message","state"].forEach(((t,n)=>e[t]=j[n]))}),j);const h={...a,class:d(u,o),ref:l(u,i)};return Object(r.jsx)(b,Object.assign({},h),void 0)})),O=Object(s.forwardRef)((({color:e="neutral-contrast-low",orientation:t="horizontal",theme:n="light",className:c,...o},a)=>{const i=Object(s.useRef)(),u=f("p-divider"),b=[e,t,n];Object(s.useEffect)((()=>{const{current:e}=i;["color","orientation","theme"].forEach(((t,n)=>e[t]=b[n]))}),b);const j={...o,class:d(i,c),ref:l(i,a)};return Object(r.jsx)(u,Object.assign({},j),void 0)})),p=Object(s.forwardRef)((({alignContent:e="stretch",alignItems:t="stretch",direction:n="row",inline:c=!1,justifyContent:o="flex-start",wrap:a="nowrap",className:i,...u},b)=>{const j=Object(s.useRef)(),h=f("p-flex"),g=[e,t,n,c,o,a];Object(s.useEffect)((()=>{const{current:e}=j;["alignContent","alignItems","direction","inline","justifyContent","wrap"].forEach(((t,n)=>e[t]=g[n]))}),g);const O={...u,class:d(j,i),ref:l(j,b)};return Object(r.jsx)(h,Object.assign({},O),void 0)})),m=Object(s.forwardRef)((({alignSelf:e="auto",flex:t="initial",grow:n=0,offset:c="none",shrink:o=1,width:a="auto",className:i,...u},b)=>{const j=Object(s.useRef)(),h=f("p-flex-item"),g=[e,t,n,c,o,a];Object(s.useEffect)((()=>{const{current:e}=j;["alignSelf","flex","grow","offset","shrink","width"].forEach(((t,n)=>e[t]=g[n]))}),g);const O={...u,class:d(j,i),ref:l(j,b)};return Object(r.jsx)(h,Object.assign({},O),void 0)})),w=Object(s.forwardRef)((({direction:e="row",gutter:t={base:16,s:24,m:36},wrap:n="wrap",className:c,...o},a)=>{const i=Object(s.useRef)(),u=f("p-grid"),b=[e,t,n];Object(s.useEffect)((()=>{const{current:e}=i;["direction","gutter","wrap"].forEach(((t,n)=>e[t]=b[n]))}),b);const j={...o,class:d(i,c),ref:l(i,a)};return Object(r.jsx)(u,Object.assign({},j),void 0)})),v=Object(s.forwardRef)((({offset:e=0,size:t=1,className:n,...c},o)=>{const a=Object(s.useRef)(),i=f("p-grid-item"),u=[e,t];Object(s.useEffect)((()=>{const{current:e}=a;["offset","size"].forEach(((t,n)=>e[t]=u[n]))}),u);const b={...c,class:d(a,n),ref:l(a,o)};return Object(r.jsx)(i,Object.assign({},b),void 0)})),E=Object(s.forwardRef)((({align:e="left",color:t="default",ellipsis:n=!1,tag:c,theme:o="light",variant:a="headline-1",className:i,...u},b)=>{const j=Object(s.useRef)(),h=f("p-headline"),g=[e,t,n,c,o,a];Object(s.useEffect)((()=>{const{current:e}=j;["align","color","ellipsis","tag","theme","variant"].forEach(((t,n)=>e[t]=g[n]))}),g);const O={...u,class:d(j,i),ref:l(j,b)};return Object(r.jsx)(h,Object.assign({},O),void 0)})),x=Object(s.forwardRef)((({color:e="default",lazy:t=!1,name:n="arrow-head-right",size:c="small",source:o,theme:a="light",className:i,...u},b)=>{const j=Object(s.useRef)(),h=f("p-icon"),g=[e,t,n,c,o,a];Object(s.useEffect)((()=>{const{current:e}=j;["color","lazy","name","size","source","theme"].forEach(((t,n)=>e[t]=g[n]))}),g);const O={...u,class:d(j,i),ref:l(j,b)};return Object(r.jsx)(h,Object.assign({},O),void 0)})),y=Object(s.forwardRef)((({download:e,hideLabel:t=!1,href:n,icon:c="arrow-head-right",iconSource:o,rel:a,target:i="_self",theme:u="light",variant:b="secondary",className:j,...h},g)=>{const O=Object(s.useRef)(),p=f("p-link"),m=[e,t,n,c,o,a,i,u,b];Object(s.useEffect)((()=>{const{current:e}=O;["download","hideLabel","href","icon","iconSource","rel","target","theme","variant"].forEach(((t,n)=>e[t]=m[n]))}),m);const w={...h,class:d(O,j),ref:l(O,g)};return Object(r.jsx)(p,Object.assign({},w),void 0)})),R=Object(s.forwardRef)((({active:e=!1,download:t,hideLabel:n=!1,href:c,icon:o="arrow-head-right",iconSource:a,rel:i,size:u="small",target:b="_self",theme:j="light",weight:h="regular",className:g,...O},p)=>{const m=Object(s.useRef)(),w=f("p-link-pure"),v=[e,t,n,c,o,a,i,u,b,j,h];Object(s.useEffect)((()=>{const{current:e}=m;["active","download","hideLabel","href","icon","iconSource","rel","size","target","theme","weight"].forEach(((t,n)=>e[t]=v[n]))}),v);const E={...O,class:d(m,g),ref:l(m,p)};return Object(r.jsx)(w,Object.assign({},E),void 0)})),L=Object(s.forwardRef)((({activePage:e=1,allyLabel:t="Pagination",allyLabelNext:n="Next page",allyLabelPage:c="Page",allyLabelPrev:o="Previous page",itemsPerPage:a=1,maxNumberOfPageLinks:i={base:5,xs:7},onPageChange:b,theme:j="light",totalItemsCount:h=1,className:g,...O},p)=>{const m=Object(s.useRef)();u(m,"pageChange",b);const w=f("p-pagination"),v=[e,t,n,c,o,a,i,j,h];Object(s.useEffect)((()=>{const{current:e}=m;["activePage","allyLabel","allyLabelNext","allyLabelPage","allyLabelPrev","itemsPerPage","maxNumberOfPageLinks","theme","totalItemsCount"].forEach(((t,n)=>e[t]=v[n]))}),v);const E={...O,class:d(m,g),ref:l(m,p)};return Object(r.jsx)(w,Object.assign({},E),void 0)})),N=Object(s.forwardRef)((({hideLabel:e=!1,label:t="",message:n="",state:c="none",className:o,...a},i)=>{const u=Object(s.useRef)(),b=f("p-radio-button-wrapper"),j=[e,t,n,c];Object(s.useEffect)((()=>{const{current:e}=u;["hideLabel","label","message","state"].forEach(((t,n)=>e[t]=j[n]))}),j);const h={...a,class:d(u,o),ref:l(u,i)};return Object(r.jsx)(b,Object.assign({},h),void 0)})),P=Object(s.forwardRef)((({description:e="",dropdownDirection:t="auto",filter:n=!1,hideLabel:c=!1,label:o="",message:a="",native:i=!1,state:u="none",theme:b="light",className:j,...h},g)=>{const O=Object(s.useRef)(),p=f("p-select-wrapper"),m=[e,t,n,c,o,a,i,u,b];Object(s.useEffect)((()=>{const{current:e}=O;["description","dropdownDirection","filter","hideLabel","label","message","native","state","theme"].forEach(((t,n)=>e[t]=m[n]))}),m);const w={...h,class:d(O,j),ref:l(O,g)};return Object(r.jsx)(p,Object.assign({},w),void 0)})),S=Object(s.forwardRef)((({size:e="small",theme:t="light",className:n,...c},o)=>{const a=Object(s.useRef)(),i=f("p-spinner"),u=[e,t];Object(s.useEffect)((()=>{const{current:e}=a;["size","theme"].forEach(((t,n)=>e[t]=u[n]))}),u);const b={...c,class:d(a,n),ref:l(a,o)};return Object(r.jsx)(i,Object.assign({},b),void 0)})),z=Object(s.forwardRef)((({align:e="left",color:t="default",ellipsis:n=!1,size:c="small",tag:o="p",theme:a="light",weight:i="regular",className:u,...b},j)=>{const h=Object(s.useRef)(),g=f("p-text"),O=[e,t,n,c,o,a,i];Object(s.useEffect)((()=>{const{current:e}=h;["align","color","ellipsis","size","tag","theme","weight"].forEach(((t,n)=>e[t]=O[n]))}),O);const p={...b,class:d(h,u),ref:l(h,j)};return Object(r.jsx)(g,Object.assign({},p),void 0)})),C=Object(s.forwardRef)((({description:e="",hideLabel:t=!1,label:n="",message:c="",state:o="none",className:a,...i},u)=>{const b=Object(s.useRef)(),j=f("p-text-field-wrapper"),h=[e,t,n,c,o];Object(s.useEffect)((()=>{const{current:e}=b;["description","hideLabel","label","message","state"].forEach(((t,n)=>e[t]=h[n]))}),h);const g={...i,class:d(b,a),ref:l(b,u)};return Object(r.jsx)(j,Object.assign({},g),void 0)})),k=Object(s.forwardRef)((({description:e="",hideLabel:t=!1,label:n="",message:c="",state:o="none",className:a,...i},u)=>{const b=Object(s.useRef)(),j=f("p-textarea-wrapper"),h=[e,t,n,c,o];Object(s.useEffect)((()=>{const{current:e}=b;["description","hideLabel","label","message","state"].forEach(((t,n)=>e[t]=h[n]))}),h);const g={...i,class:d(b,a),ref:l(b,u)};return Object(r.jsx)(j,Object.assign({},g),void 0)}))},rePB:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))}}]);