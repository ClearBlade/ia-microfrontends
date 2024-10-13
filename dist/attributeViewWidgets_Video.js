/*! For license information please see attributeViewWidgets_Video.js.LICENSE.txt */
System.register(["@clearblade/ia-mfe-core","@clearblade/ia-mfe-react","react","react-dom","react-router-dom"],(function(e,t){var r={},n={},o={},i={},u={};return Object.defineProperty(o,"__esModule",{value:!0}),{setters:[function(e){r.getBasePath=e.getBasePath},function(e){n.AppProviders=e.AppProviders},function(e){Object.keys(e).forEach((function(t){o[t]=e[t]}))},function(e){i.default=e.default},function(e){u.BrowserRouter=e.BrowserRouter}],execute:function(){e((()=>{var e={228:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,u,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var a in i=Object(arguments[c]))r.call(i,a)&&(s[a]=i[a]);if(t){u=t(i);for(var l=0;l<u.length;l++)n.call(i,u[l])&&(s[u[l]]=i[u[l]])}}return s}},20:(e,t,r)=>{"use strict";r(228);var n=r(726),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var n,i={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:u.current}}},848:(e,t,r)=>{"use strict";e.exports=r(20)},126:(e,t,r)=>{const n=r(358).y;t.w=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},358:(e,t,r)=>{t.y=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,i=n.length;o!==t&&i>=0;)"/"===n[--i]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var u=n.slice(0,i+1);return r.protocol+"//"+r.host+u};Number.isInteger},63:(e,t,r)=>{"use strict";var n=r(726),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,u=n.useEffect,s=n.useLayoutEffect,c=n.useDebugValue;function a(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,l=n[1];return s((function(){o.value=r,o.getSnapshot=t,a(o)&&l({inst:o})}),[e,r,t]),u((function(){return a(o)&&l({inst:o}),e((function(){a(o)&&l({inst:o})}))}),[e]),c(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},888:(e,t,r)=>{"use strict";e.exports=r(63)},72:e=>{"use strict";e.exports=r},778:e=>{"use strict";e.exports=n},726:e=>{"use strict";e.exports=o},867:e=>{"use strict";e.exports=i},965:e=>{"use strict";e.exports=u}},s={};function c(t){var r=s[t];if(void 0!==r)return r.exports;var n=s[t]={exports:{}};return e[t](n,n.exports,c),n.exports}c.y=t,c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var a={};return(0,c(126).w)(1),(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}c.r(a),c.d(a,{bootstrap:()=>Ee,mount:()=>_e,unmount:()=>je});var r=c(72),n=c(778),o=c(726),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)};function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function p(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function f(e){return"function"==typeof e}function d(e){var t=e((function(e){Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var y=d((function(e){return function(t){e(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function h(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var m=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return e.prototype.unsubscribe=function(){var e,t,r,n,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var u=s(i),c=u.next();!c.done;c=u.next())c.value.remove(this)}catch(t){e={error:t}}finally{try{c&&!c.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}else i.remove(this);var a=this.initialTeardown;if(f(a))try{a()}catch(e){o=e instanceof y?e.errors:[e]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var h=s(d),m=h.next();!m.done;m=h.next()){var b=m.value;try{g(b)}catch(e){o=null!=o?o:[],e instanceof y?o=p(p([],l(o)),l(e.errors)):o.push(e)}}}catch(e){r={error:e}}finally{try{m&&!m.done&&(n=h.return)&&n.call(h)}finally{if(r)throw r.error}}}if(o)throw new y(o)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)g(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&h(t,e)},e.prototype.remove=function(t){var r=this._finalizers;r&&h(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=((t=new e).closed=!0,t),e}(),b=m.EMPTY;function v(e){return e instanceof m||e&&"closed"in e&&f(e.remove)&&f(e.add)&&f(e.unsubscribe)}function g(e){f(e)?e():e.unsubscribe()}var w=null,O=null,S=void 0,E=!1,_=!1,j={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=j.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,p([e,t],l(r))):setTimeout.apply(void 0,p([e,t],l(r)))},clearTimeout:function(e){var t=j.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function x(){}var P=R("C",void 0,void 0);function R(e,t,r){return{kind:e,value:t,error:r}}var C=null;function T(e){if(E){var t=!C;if(t&&(C={errorThrown:!1,error:null}),e(),t){var r=C,n=r.errorThrown,o=r.error;if(C=null,n)throw o}}else e()}var B=function(e){function t(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,v(t)&&t.add(r)):r.destination=F,r}return u(t,e),t.create=function(e,t,r){return new M(e,t,r)},t.prototype.next=function(e){this.isStopped?I(function(e){return R("N",e,void 0)}(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?I(R("E",void 0,e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?I(P,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(m),D=Function.prototype.bind;function k(e,t){return D.call(e,t)}var A=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){N(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){N(e)}else N(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){N(e)}},e}(),M=function(e){function t(t,r,n){var o,i,u=e.call(this)||this;return f(t)||!t?o={next:null!=t?t:void 0,error:null!=r?r:void 0,complete:null!=n?n:void 0}:u&&_?((i=Object.create(t)).unsubscribe=function(){return u.unsubscribe()},o={next:t.next&&k(t.next,i),error:t.error&&k(t.error,i),complete:t.complete&&k(t.complete,i)}):o=t,u.destination=new A(o),u}return u(t,e),t}(B);function N(e){var t;E?(t=e,E&&C&&(C.errorThrown=!0,C.error=t)):function(e){j.setTimeout((function(){if(!w)throw e;w(e)}))}(e)}function I(e,t){var r=O;r&&j.setTimeout((function(){return r(e,t)}))}var F={closed:!0,next:x,error:function(e){throw e},complete:x},U="function"==typeof Symbol&&Symbol.observable||"@@observable";function z(e){return e}var L=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var n,o=this,i=(n=e)&&n instanceof B||function(e){return e&&f(e.next)&&f(e.error)&&f(e.complete)}(n)&&v(n)?e:new M(e,t,r);return T((function(){var e=o,t=e.operator,r=e.source;i.add(t?t.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=G(t))((function(t,n){var o=new M({next:function(t){try{e(t)}catch(e){n(e),o.unsubscribe()}},error:n,complete:t});r.subscribe(o)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[U]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0===(r=e).length?z:1===r.length?r[0]:function(e){return r.reduce((function(e,t){return t(e)}),e)})(this);var r},e.prototype.toPromise=function(e){var t=this;return new(e=G(e))((function(e,r){var n;t.subscribe((function(e){return n=e}),(function(e){return r(e)}),(function(){return e(n)}))}))},e.create=function(t){return new e(t)},e}();function G(e){var t;return null!==(t=null!=e?e:S)&&void 0!==t?t:Promise}var $=d((function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),q=function(e){function t(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return u(t,e),t.prototype.lift=function(e){var t=new V(this,this);return t.operator=e,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new $},t.prototype.next=function(e){var t=this;T((function(){var r,n;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||(t.currentObservers=Array.from(t.observers));try{for(var o=s(t.currentObservers),i=o.next();!i.done;i=o.next())i.value.next(e)}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}}}))},t.prototype.error=function(e){var t=this;T((function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=e;for(var r=t.observers;r.length;)r.shift().error(e)}}))},t.prototype.complete=function(){var e=this;T((function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var t=e.observers;t.length;)t.shift().complete()}}))},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var t=this,r=this,n=r.hasError,o=r.isStopped,i=r.observers;return n||o?b:(this.currentObservers=null,i.push(e),new m((function(){t.currentObservers=null,h(i,e)})))},t.prototype._checkFinalizedStatuses=function(e){var t=this,r=t.hasError,n=t.thrownError,o=t.isStopped;r?e.error(n):o&&e.complete()},t.prototype.asObservable=function(){var e=new L;return e.source=this,e},t.create=function(e,t){return new V(e,t)},t}(L),V=function(e){function t(t,r){var n=e.call(this)||this;return n.destination=t,n.source=r,n}return u(t,e),t.prototype.next=function(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===r||r.call(t,e)},t.prototype.error=function(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===r||r.call(t,e)},t.prototype.complete=function(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)},t.prototype._subscribe=function(e){var t,r;return null!==(r=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==r?r:b},t}(q),W=(Object.defineProperty,Symbol("SUSPENSE")),Y=class extends Promise{constructor(e){super(e)}},H=class extends Error{constructor(){super(),this.name="NoSubscribersError"}};Error;var J=()=>e=>new L((t=>{let r;const n=()=>{r=new B({next(e){t.next(e)},error(e){e===W?(t.next(e),n()):t.error(e)},complete(){t.complete()}}),e.subscribe(r)};return n(),()=>{r.unsubscribe()}})),K=c(888),Q={},X=(0,o.createContext)(null),{Provider:Z}=X,ee=Promise.resolve(),te=()=>{throw ee},re=({source$:e,children:t,fallback:r})=>{const n=(0,o.useRef)();if(!n.current){const e=new m;n.current={s:e,u:t=>{let r=Q,n=!0;if(e.add(J()(t).subscribe({error:e=>{n?r=e:u((()=>{throw e}))}})),n=!1,r!==Q)throw r}}}const[i,u]=(0,o.useState)(null);if(null!==i&&i!==e)if(void 0===e)u(e);else try{e.getValue(),u(e)}catch(e){}(0,o.useEffect)((()=>{if(u(e),!e)return;const t=J()(e).subscribe({error:e=>u((()=>{throw e}))});return()=>{t.unsubscribe()}}),[e]),(0,o.useEffect)((()=>()=>{var e;null==(e=n.current)||e.s.unsubscribe(),n.current=void 0}),[]);const s=i===e?o.default.createElement(Z,{value:n.current.u},t):void 0===r?null:o.default.createElement(te,null);return void 0===r?s:null===i?r:o.default.createElement(o.Suspense,{fallback:r},s)},ne=c(867),oe=c(965);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){ce(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){var r;if("function"!=typeof(r=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(ae(r)));return function(){var e=r(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(ae(e)));return e}}var pe=null;try{pe=require("react").createContext()}catch(ie){}var fe={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function de(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function ye(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=be(e,t,(function(){r(this)})),i=le(e,t)(),u=function(e){var t=e.opts,r=e.elementToRender,n=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var i=t.ReactDOM[o](n);return i.render(r),i}return"hydrate"===o?t.ReactDOM.hydrate(r,n):t.ReactDOM.render(r,n),null}({elementToRender:o,domElement:i,opts:e});e.domElements[t.name]=i,e.renderResults[t.name]=u}))}function he(e,t){return new Promise((function(r){e.unmountFinished=r;var n=e.renderResults[t.name];n&&n.unmount?n.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function me(e,t){return new Promise((function(r){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(r);var n=be(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(n);else{var i=le(e,t)();e.ReactDOM.render(n,i)}}))}function be(e,t,r){var n=e.React.createElement(e.rootComponent,t),o=pe?e.React.createElement(pe.Provider,{value:t},n):n;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function r(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},r.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return r.prototype=Object.create(e.React.Component.prototype),r.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},r.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},r}(e,t),o=e.React.createElement(e.errorBoundaryClass,t,o)),e.React.createElement(e.SingleSpaRoot,ue(ue({},t),{},{mountFinished:r,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),o)}var ve=c(848);function ge(e){var t=(e=>{const t=(0,o.useContext)(X),[,r]=(0,o.useState)(),n=(0,o.useRef)();if(!n.current){const e=e=>{const t=e.getValue();if(t instanceof Y)throw t.catch((e=>{if(e instanceof H)return e;throw e}));return t},r=()=>{const r=n.current.source$;if(!r.getRefCount()&&!r.getDefaultValue){if(!t)throw new Error("Missing Subscribe!");t(r)}return e(r)};n.current={source$:null,args:[,r,r]}}const i=n.current;return i.source$!==e&&(i.source$=e,i.args[0]=t=>{const n=J()(e).subscribe({next:t,error:e=>{r((()=>{throw e}))}});return()=>{n.unsubscribe()}}),(0,K.useSyncExternalStore)(...i.args)})(e.attribute);return(0,ve.jsx)(n.AppProviders,{children:(0,ve.jsx)(re,{children:(0,ve.jsx)("iframe",{src:t})})})}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?we(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se=function(e){if("object"!==se(e))throw new Error("single-spa-react requires a configuration object");var t=ue(ue({},fe),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!pe&&t.React.createContext&&(pe=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var r={bootstrap:de.bind(null,t),mount:ye.bind(null,t),unmount:he.bind(null,t)};return t.parcelCanUpdate&&(r.update=me.bind(null,t)),r}({React:o.default,ReactDOM:ne.default,rootComponent:function(e){return(0,ve.jsx)(n.AppProviders,{children:(0,ve.jsx)(oe.BrowserRouter,{basename:(0,r.getBasePath)(),children:(0,ve.jsx)(re,{children:(0,ve.jsx)(ge,Oe({},e))})})})},errorBoundary:function(e,t,r){return null}}),Ee=Se.bootstrap,_e=Se.mount,je=Se.unmount})(),a})())}}}));
//# sourceMappingURL=attributeViewWidgets_Video.js.map