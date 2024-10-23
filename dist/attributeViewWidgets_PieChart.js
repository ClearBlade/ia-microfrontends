/*! For license information please see attributeViewWidgets_PieChart.js.LICENSE.txt */
System.register(["@clearblade/ia-mfe-core","@clearblade/ia-mfe-react","react","react-dom","react-router-dom","@material-ui/core"],(function(e,t){var r={},n={},o={},i={},a={},u={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(i,"__esModule",{value:!0}),{setters:[function(e){r.getBasePath=e.getBasePath},function(e){n.AppProviders=e.AppProviders},function(e){Object.keys(e).forEach((function(t){o[t]=e[t]}))},function(e){Object.keys(e).forEach((function(t){i[t]=e[t]}))},function(e){a.BrowserRouter=e.BrowserRouter},function(e){u.Grid=e.Grid,u.Typography=e.Typography}],execute:function(){e((()=>{var e={228:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))r.call(i,c)&&(u[c]=i[c]);if(t){a=t(i);for(var l=0;l<a.length;l++)n.call(i,a[l])&&(u[a[l]]=i[a[l]])}}return u}},677:function(e,t,r){!function(e,t){"use strict";function r(e){return e*Math.PI/180}function n(e,t,r){return e>r?r:e<t?t:e}function o(e,t){return t/100*e}function i(e,t){return e+t/2}function a(e,t){var n=r(e);return{dx:t*Math.cos(n),dy:t*Math.sin(n)}}function u(e){return"number"==typeof e}function s(e,t){return"function"==typeof e?e(t):e}function c(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function l(e){var r=e.renderLabel,n=e.labelProps,o=r(n);if("string"==typeof o||"number"==typeof o){n.dataEntry,n.dataIndex;var i=c(n,["dataEntry","dataIndex"]);return t.createElement("text",Object.assign({dominantBaseline:"central"},i),o)}return t.isValidElement(o)?o:null}function p(e){var t,r,n=e.labelPosition,o=e.lineWidth,i=(t=e.labelHorizontalShift,r=1e14,Math.round((t+Number.EPSILON)*r)/r);return 0===i?"middle":n>100?i>0?"start":"end":n<100-o?i>0?"end":"start":"middle"}function f(e,r){var n=r.label;if(n)return function(e,t){return e.map((function(e,r){var n,u=null!=(n=s(t.segmentsShift,r))?n:0,c=o(t.radius,t.labelPosition)+u,l=a(i(e.startAngle,e.degrees),c),f=l.dx,d=l.dy;return{x:t.center[0],y:t.center[1],dx:f,dy:d,textAnchor:p({labelPosition:t.labelPosition,lineWidth:t.lineWidth,labelHorizontalShift:f}),dataEntry:e,dataIndex:r,style:s(t.labelStyle,r)}}))}(e,r).map((function(e,r){return t.createElement(l,{key:"label-"+(e.dataEntry.key||r),renderLabel:n,labelProps:e})}))}var d=function(e,t,r,n,o){var i=o-n;if(0===i)return[];var a=r*Math.cos(n)+e,u=r*Math.sin(n)+t,s=r*Math.cos(o)+e,c=r*Math.sin(o)+t;return[["M",a,u],["A",r,r,0,Math.abs(i)<=Math.PI?"0":"1",i<0?"0":"1",s,c]]};function h(e){var s,l,p=e.cx,f=e.cy,h=e.lengthAngle,y=e.lineWidth,m=e.radius,v=e.shift,b=void 0===v?0:v,g=e.reveal,w=e.rounded,O=e.startAngle,E=e.title,S=c(e,["cx","cy","lengthAngle","lineWidth","radius","shift","reveal","rounded","startAngle","title"]),x=m-y/2,j=a(i(O,h),b),_=function(e,t,o,i,a){var u=n(i,-359.999,359.999);return d(e,t,a,r(o),r(o+u)).map((function(e){return e.join(" ")})).join(" ")}(p+j.dx,f+j.dy,O,h,x);if(u(g)){var P=r(x)*h;l=(s=Math.abs(P))-o(s,g)}return t.createElement("path",Object.assign({d:_,fill:"none",strokeWidth:y,strokeDasharray:s,strokeDashoffset:l,strokeLinecap:w?"round":void 0},S),E&&t.createElement("title",null,E))}function y(e,t){return e&&function(r){e(r,t)}}function m(e,r,n){var i=null!=n?n:function(e){return e.animate&&!u(e.reveal)?100:e.reveal}(r),a=r.radius,c=r.center,l=c[0],p=c[1],f=o(a,r.lineWidth),d=e.map((function(e,n){var o,u,c,d,m=s(r.segmentsStyle,n);return t.createElement(h,{cx:l,cy:p,key:e.key||n,lengthAngle:e.degrees,lineWidth:f,radius:a,rounded:r.rounded,reveal:i,shift:s(r.segmentsShift,n),startAngle:e.startAngle,title:e.title,style:Object.assign({},m,r.animate&&(o=r.animationDuration,u=r.animationEasing,c=m,d="stroke-dashoffset "+o+"ms "+u,c&&c.transition&&(d=d+","+c.transition),{transition:d})),stroke:e.color,tabIndex:r.segmentsTabIndex,onBlur:y(r.onBlur,n),onClick:y(r.onClick,n),onFocus:y(r.onFocus,n),onKeyDown:y(r.onKeyDown,n),onMouseOver:y(r.onMouseOver,n),onMouseOut:y(r.onMouseOut,n)})}));return r.background&&d.unshift(t.createElement(h,{cx:l,cy:p,key:"bg",lengthAngle:r.lengthAngle,lineWidth:f,radius:a,rounded:r.rounded,startAngle:r.startAngle,stroke:r.background})),d}var v={animationDuration:500,animationEasing:"ease-out",center:[50,50],data:[],labelPosition:50,lengthAngle:360,lineWidth:100,paddingAngle:0,radius:50,startAngle:0,viewBoxSize:[100,100]};e.PieChart=function(e){var r=function(e,t){var r=Object.assign({},t,e);for(var n in t)void 0===e[n]&&(r[n]=t[n]);return r}(e,v),i=t.useState(r.animate?0:null),a=i[0],u=i[1];t.useEffect((function(){r.animate&&u(null)}),[]);var s=function(e){for(var t=e.data,r=e.lengthAngle,i=e.totalValue,a=e.paddingAngle,u=e.startAngle,s=i||function(e){for(var t=0,r=0;r<e.length;r++)t+=e[r].value;return t}(t),c=n(r,-360,360),l=360===Math.abs(c)?t.length:t.length-1,p=Math.abs(a)*Math.sign(r),f=c-p*l,d=0,h=[],y=0;y<t.length;y++){var m=t[y],v=0===s?0:m.value/s*100,b=o(f,v),g=d+u;d=d+b+p,h.push(Object.assign({percentage:v,startAngle:g,degrees:b},m))}return h}(r);return t.createElement("svg",{viewBox:"0 0 "+r.viewBoxSize[0]+" "+r.viewBoxSize[1],width:"100%",height:"100%",className:r.className,style:r.style},m(s,r,a),f(s,r),r.children)},e.pieChartDefaultProps=v}(t,r(726))},20:(e,t,r)=>{"use strict";r(228);var n=r(726),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:a.current}}t.jsx=c,t.jsxs=c},848:(e,t,r)=>{"use strict";e.exports=r(20)},126:(e,t,r)=>{const n=r(358).y;t.w=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},358:(e,t,r)=>{t.y=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,i=n.length;o!==t&&i>=0;)"/"===n[--i]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var a=n.slice(0,i+1);return r.protocol+"//"+r.host+a};Number.isInteger},63:(e,t,r)=>{"use strict";var n=r(726),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,a=n.useEffect,u=n.useLayoutEffect,s=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,l=n[1];return u((function(){o.value=r,o.getSnapshot=t,c(o)&&l({inst:o})}),[e,r,t]),a((function(){return c(o)&&l({inst:o}),e((function(){c(o)&&l({inst:o})}))}),[e]),s(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},888:(e,t,r)=>{"use strict";e.exports=r(63)},72:e=>{"use strict";e.exports=r},778:e=>{"use strict";e.exports=n},509:e=>{"use strict";e.exports=u},726:e=>{"use strict";e.exports=o},867:e=>{"use strict";e.exports=i},965:e=>{"use strict";e.exports=a}},s={};function c(t){var r=s[t];if(void 0!==r)return r.exports;var n=s[t]={exports:{}};return e[t].call(n.exports,n,n.exports,c),n.exports}c.y=t,c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var l={};return(0,c(126).w)(1),(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}c.r(l),c.d(l,{bootstrap:()=>Pe,mount:()=>Ce,unmount:()=>Re});var r=c(72),n=c(778),o=c(726),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function p(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function f(e){return"function"==typeof e}function d(e){var t=e((function(e){Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var h=d((function(e){return function(t){e(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function y(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var m=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return e.prototype.unsubscribe=function(){var e,t,r,n,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var a=u(i),c=a.next();!c.done;c=a.next())c.value.remove(this)}catch(t){e={error:t}}finally{try{c&&!c.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else i.remove(this);var l=this.initialTeardown;if(f(l))try{l()}catch(e){o=e instanceof h?e.errors:[e]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var y=u(d),m=y.next();!m.done;m=y.next()){var v=m.value;try{g(v)}catch(e){o=null!=o?o:[],e instanceof h?o=p(p([],s(o)),s(e.errors)):o.push(e)}}}catch(e){r={error:e}}finally{try{m&&!m.done&&(n=y.return)&&n.call(y)}finally{if(r)throw r.error}}}if(o)throw new h(o)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)g(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&y(t,e)},e.prototype.remove=function(t){var r=this._finalizers;r&&y(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=((t=new e).closed=!0,t),e}(),v=m.EMPTY;function b(e){return e instanceof m||e&&"closed"in e&&f(e.remove)&&f(e.add)&&f(e.unsubscribe)}function g(e){f(e)?e():e.unsubscribe()}var w=null,O=null,E=void 0,S=!1,x=!1,j={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=j.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,p([e,t],s(r))):setTimeout.apply(void 0,p([e,t],s(r)))},clearTimeout:function(e){var t=j.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function _(){}var P=C("C",void 0,void 0);function C(e,t,r){return{kind:e,value:t,error:r}}var R=null;function A(e){if(S){var t=!R;if(t&&(R={errorThrown:!1,error:null}),e(),t){var r=R,n=r.errorThrown,o=r.error;if(R=null,n)throw o}}else e()}var T=function(e){function t(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,b(t)&&t.add(r)):r.destination=F,r}return a(t,e),t.create=function(e,t,r){return new D(e,t,r)},t.prototype.next=function(e){this.isStopped?N(function(e){return C("N",e,void 0)}(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?N(C("E",void 0,e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?N(P,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(m),k=Function.prototype.bind;function M(e,t){return k.call(e,t)}var B=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){I(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){I(e)}else I(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){I(e)}},e}(),D=function(e){function t(t,r,n){var o,i,a=e.call(this)||this;return f(t)||!t?o={next:null!=t?t:void 0,error:null!=r?r:void 0,complete:null!=n?n:void 0}:a&&x?((i=Object.create(t)).unsubscribe=function(){return a.unsubscribe()},o={next:t.next&&M(t.next,i),error:t.error&&M(t.error,i),complete:t.complete&&M(t.complete,i)}):o=t,a.destination=new B(o),a}return a(t,e),t}(T);function I(e){var t;S?(t=e,S&&R&&(R.errorThrown=!0,R.error=t)):function(e){j.setTimeout((function(){if(!w)throw e;w(e)}))}(e)}function N(e,t){var r=O;r&&j.setTimeout((function(){return r(e,t)}))}var F={closed:!0,next:_,error:function(e){throw e},complete:_},z="function"==typeof Symbol&&Symbol.observable||"@@observable";function W(e){return e}var L=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var n,o=this,i=(n=e)&&n instanceof T||function(e){return e&&f(e.next)&&f(e.error)&&f(e.complete)}(n)&&b(n)?e:new D(e,t,r);return A((function(){var e=o,t=e.operator,r=e.source;i.add(t?t.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=G(t))((function(t,n){var o=new D({next:function(t){try{e(t)}catch(e){n(e),o.unsubscribe()}},error:n,complete:t});r.subscribe(o)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[z]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0===(r=e).length?W:1===r.length?r[0]:function(e){return r.reduce((function(e,t){return t(e)}),e)})(this);var r},e.prototype.toPromise=function(e){var t=this;return new(e=G(e))((function(e,r){var n;t.subscribe((function(e){return n=e}),(function(e){return r(e)}),(function(){return e(n)}))}))},e.create=function(t){return new e(t)},e}();function G(e){var t;return null!==(t=null!=e?e:E)&&void 0!==t?t:Promise}var U=d((function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),$=function(e){function t(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return a(t,e),t.prototype.lift=function(e){var t=new V(this,this);return t.operator=e,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new U},t.prototype.next=function(e){var t=this;A((function(){var r,n;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||(t.currentObservers=Array.from(t.observers));try{for(var o=u(t.currentObservers),i=o.next();!i.done;i=o.next())i.value.next(e)}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}}}))},t.prototype.error=function(e){var t=this;A((function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=e;for(var r=t.observers;r.length;)r.shift().error(e)}}))},t.prototype.complete=function(){var e=this;A((function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var t=e.observers;t.length;)t.shift().complete()}}))},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var t=this,r=this,n=r.hasError,o=r.isStopped,i=r.observers;return n||o?v:(this.currentObservers=null,i.push(e),new m((function(){t.currentObservers=null,y(i,e)})))},t.prototype._checkFinalizedStatuses=function(e){var t=this,r=t.hasError,n=t.thrownError,o=t.isStopped;r?e.error(n):o&&e.complete()},t.prototype.asObservable=function(){var e=new L;return e.source=this,e},t.create=function(e,t){return new V(e,t)},t}(L),V=function(e){function t(t,r){var n=e.call(this)||this;return n.destination=t,n.source=r,n}return a(t,e),t.prototype.next=function(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===r||r.call(t,e)},t.prototype.error=function(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===r||r.call(t,e)},t.prototype.complete=function(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)},t.prototype._subscribe=function(e){var t,r;return null!==(r=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==r?r:v},t}($),q=(Object.defineProperty,Symbol("SUSPENSE")),H=class extends Promise{constructor(e){super(e)}},Y=class extends Error{constructor(){super(),this.name="NoSubscribersError"}};Error;var J=()=>e=>new L((t=>{let r;const n=()=>{r=new T({next(e){t.next(e)},error(e){e===q?(t.next(e),n()):t.error(e)},complete(){t.complete()}}),e.subscribe(r)};return n(),()=>{r.unsubscribe()}})),K=c(888),Q={},X=(0,o.createContext)(null),{Provider:Z}=X,ee=Promise.resolve(),te=()=>{throw ee},re=({source$:e,children:t,fallback:r})=>{const n=(0,o.useRef)();if(!n.current){const e=new m;n.current={s:e,u:t=>{let r=Q,n=!0;if(e.add(J()(t).subscribe({error:e=>{n?r=e:a((()=>{throw e}))}})),n=!1,r!==Q)throw r}}}const[i,a]=(0,o.useState)(null);if(null!==i&&i!==e)if(void 0===e)a(e);else try{e.getValue(),a(e)}catch(e){}(0,o.useEffect)((()=>{if(a(e),!e)return;const t=J()(e).subscribe({error:e=>a((()=>{throw e}))});return()=>{t.unsubscribe()}}),[e]),(0,o.useEffect)((()=>()=>{var e;null==(e=n.current)||e.s.unsubscribe(),n.current=void 0}),[]);const u=i===e?o.default.createElement(Z,{value:n.current.u},t):void 0===r?null:o.default.createElement(te,null);return void 0===r?u:null===i?r:o.default.createElement(o.Suspense,{fallback:r},u)},ne=c(867),oe=c(965);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){var r;if("function"!=typeof(r=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(ce(r)));return function(){var e=r(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(ce(e)));return e}}var pe=null;try{pe=require("react").createContext()}catch(ie){}var fe={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function de(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function he(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=ve(e,t,(function(){r(this)})),i=le(e,t)(),a=function(e){var t=e.opts,r=e.elementToRender,n=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var i=t.ReactDOM[o](n);return i.render(r),i}return"hydrate"===o?t.ReactDOM.hydrate(r,n):t.ReactDOM.render(r,n),null}({elementToRender:o,domElement:i,opts:e});e.domElements[t.name]=i,e.renderResults[t.name]=a}))}function ye(e,t){return new Promise((function(r){e.unmountFinished=r;var n=e.renderResults[t.name];n&&n.unmount?n.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function me(e,t){return new Promise((function(r){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(r);var n=ve(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(n);else{var i=le(e,t)();e.ReactDOM.render(n,i)}}))}function ve(e,t,r){var n=e.React.createElement(e.rootComponent,t),o=pe?e.React.createElement(pe.Provider,{value:t},n):n;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function r(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},r.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return r.prototype=Object.create(e.React.Component.prototype),r.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},r.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},r}(e,t),o=e.React.createElement(e.errorBoundaryClass,t,o)),e.React.createElement(e.SingleSpaRoot,ae(ae({},t),{},{mountFinished:r,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),o)}var be=c(509),ge=c(677),we={0:{color:"#E38627"},1:{color:"#C13C37"},2:{color:"#6A2135"},3:{color:"#F66D44"},4:{color:"#AADEA7"},5:{color:"#FEAE65"},6:{color:"#3C7464"},7:{color:"#17445E"},8:{color:"#944129"},9:{color:"#949886"},10:{color:"#43158A"}},Oe=c(848);function Ee(e){var t=(e=>{const t=(0,o.useContext)(X),[,r]=(0,o.useState)(),n=(0,o.useRef)();if(!n.current){const e=e=>{const t=e.getValue();if(t instanceof H)throw t.catch((e=>{if(e instanceof Y)return e;throw e}));return t},r=()=>{const r=n.current.source$;if(!r.getRefCount()&&!r.getDefaultValue){if(!t)throw new Error("Missing Subscribe!");t(r)}return e(r)};n.current={source$:null,args:[,r,r]}}const i=n.current;return i.source$!==e&&(i.source$=e,i.args[0]=t=>{const n=J()(e).subscribe({next:t,error:e=>{r((()=>{throw e}))}});return()=>{n.unsubscribe()}}),(0,K.useSyncExternalStore)(...i.args)})(e.attribute);if(!t)return(0,Oe.jsx)(be.Typography,{variant:"body2",children:"No data"});if("Text"===t)return(0,Oe.jsx)(Se,{data:[{title:"Attribute 1",value:10,color:"#E38627"},{title:"Attribute 2",value:20,color:"#C13C37"},{title:"Attribute 3",value:30,color:"#6A2135"}]});var r=function(e){try{var t=JSON.parse(e);return function(e){for(var t=0,r=Object.keys(e);t<r.length;t++){var n=r[t];if(!parseFloat(e[n]))return!1}return!0}(t)?Object.keys(t).map((function(e,r){return{title:e,value:parseFloat(t[e]),color:we[r].color}})):[]}catch(t){return e}}(t);return 0===r.length?(0,Oe.jsx)(be.Typography,{variant:"body2",children:"Invalid data"}):"string"==typeof r?(0,Oe.jsx)(be.Typography,{variant:"body2",children:r}):(0,Oe.jsx)(Se,{data:r})}function Se(e){var t=e.data;return(0,Oe.jsxs)(be.Grid,{container:!0,item:!0,xs:12,"justify-content":!0,children:[(0,Oe.jsx)(be.Grid,{item:!0,xs:6,children:(0,Oe.jsx)(ge.PieChart,{data:t,label:function(e){var t=e.dataEntry;return"".concat(Math.round(t.percentage),"%")},labelStyle:{fontSize:"10px",fontFamily:"sans-serif",fill:"white"}})}),(0,Oe.jsx)(be.Grid,{item:!0,xs:6,children:t.map((function(e,t){return(0,Oe.jsxs)("div",{style:{marginBottom:"5px",marginLeft:"15px",display:"flex",alignItems:"center"},children:[(0,Oe.jsx)("div",{style:{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:e.color,marginRight:"10px"}}),(0,Oe.jsx)("span",{children:e.title})]},t)}))})]})}function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?xe(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _e=function(e){if("object"!==ue(e))throw new Error("single-spa-react requires a configuration object");var t=ae(ae({},fe),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!pe&&t.React.createContext&&(pe=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var r={bootstrap:de.bind(null,t),mount:he.bind(null,t),unmount:ye.bind(null,t)};return t.parcelCanUpdate&&(r.update=me.bind(null,t)),r}({React:o,ReactDOM:ne,rootComponent:function(e){return(0,Oe.jsx)(n.AppProviders,{children:(0,Oe.jsx)(oe.BrowserRouter,{basename:(0,r.getBasePath)(),children:(0,Oe.jsx)(re,{children:(0,Oe.jsx)(Ee,je({},e))})})})},errorBoundary:function(e,t,r){return null}}),Pe=_e.bootstrap,Ce=_e.mount,Re=_e.unmount})(),l})())}}}));
//# sourceMappingURL=attributeViewWidgets_PieChart.js.map