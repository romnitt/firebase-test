(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function b0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var an={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws=Symbol.for("react.element"),H0=Symbol.for("react.portal"),K0=Symbol.for("react.fragment"),W0=Symbol.for("react.strict_mode"),G0=Symbol.for("react.profiler"),q0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),X0=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),J0=Symbol.for("react.memo"),Z0=Symbol.for("react.lazy"),kd=Symbol.iterator;function ew(t){return t===null||typeof t!="object"?null:(t=kd&&t[kd]||t["@@iterator"],typeof t=="function"?t:null)}var tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nm=Object.assign,rm={};function ti(t,e,n){this.props=t,this.context=e,this.refs=rm,this.updater=n||tm}ti.prototype.isReactComponent={};ti.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ti.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function im(){}im.prototype=ti.prototype;function Cc(t,e,n){this.props=t,this.context=e,this.refs=rm,this.updater=n||tm}var Nc=Cc.prototype=new im;Nc.constructor=Cc;nm(Nc,ti.prototype);Nc.isPureReactComponent=!0;var Cd=Array.isArray,sm=Object.prototype.hasOwnProperty,Ac={current:null},om={key:!0,ref:!0,__self:!0,__source:!0};function am(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sm.call(e,r)&&!om.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ws,type:t,key:s,ref:o,props:i,_owner:Ac.current}}function tw(t,e){return{$$typeof:ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dc(t){return typeof t=="object"&&t!==null&&t.$$typeof===ws}function nw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nd=/\/+/g;function fl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nw(""+t.key):e.toString(36)}function go(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ws:case H0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fl(o,0):r,Cd(i)?(n="",t!=null&&(n=t.replace(Nd,"$&/")+"/"),go(i,e,n,"",function(u){return u})):i!=null&&(Dc(i)&&(i=tw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+fl(s,a);o+=go(s,e,n,l,i)}else if(l=ew(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+fl(s,a++),o+=go(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ks(t,e,n){if(t==null)return t;var r=[],i=0;return go(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var je={current:null},yo={transition:null},iw={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:yo,ReactCurrentOwner:Ac};B.Children={map:Ks,forEach:function(t,e,n){Ks(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ks(t,function(){e++}),e},toArray:function(t){return Ks(t,function(e){return e})||[]},only:function(t){if(!Dc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=ti;B.Fragment=K0;B.Profiler=G0;B.PureComponent=Cc;B.StrictMode=W0;B.Suspense=Y0;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ac.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sm.call(e,l)&&!om.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ws,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:Q0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:q0,_context:t},t.Consumer=t};B.createElement=am;B.createFactory=function(t){var e=am.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:X0,render:t}};B.isValidElement=Dc;B.lazy=function(t){return{$$typeof:Z0,_payload:{_status:-1,_result:t},_init:rw}};B.memo=function(t,e){return{$$typeof:J0,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=yo.transition;yo.transition={};try{t()}finally{yo.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return je.current.useCallback(t,e)};B.useContext=function(t){return je.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return je.current.useDeferredValue(t)};B.useEffect=function(t,e){return je.current.useEffect(t,e)};B.useId=function(){return je.current.useId()};B.useImperativeHandle=function(t,e,n){return je.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return je.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return je.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return je.current.useMemo(t,e)};B.useReducer=function(t,e,n){return je.current.useReducer(t,e,n)};B.useRef=function(t){return je.current.useRef(t)};B.useState=function(t){return je.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return je.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return je.current.useTransition()};B.version="18.2.0";(function(t){t.exports=B})(an);const sw=b0(an.exports);var iu={},lm={exports:{}},it={},um={exports:{}},cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,$){var F=C.length;C.push($);e:for(;0<F;){var oe=F-1>>>1,ge=C[oe];if(0<i(ge,$))C[oe]=$,C[F]=ge,F=oe;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var $=C[0],F=C.pop();if(F!==$){C[0]=F;e:for(var oe=0,ge=C.length,bs=ge>>>1;oe<bs;){var Pn=2*(oe+1)-1,dl=C[Pn],On=Pn+1,Hs=C[On];if(0>i(dl,F))On<ge&&0>i(Hs,dl)?(C[oe]=Hs,C[On]=F,oe=On):(C[oe]=dl,C[Pn]=F,oe=Pn);else if(On<ge&&0>i(Hs,F))C[oe]=Hs,C[On]=F,oe=On;else break e}}return $}function i(C,$){var F=C.sortIndex-$.sortIndex;return F!==0?F:C.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,y=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=C)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function v(C){if(S=!1,m(C),!y)if(n(l)!==null)y=!0,cl(T);else{var $=n(u);$!==null&&hl(v,$.startTime-C)}}function T(C,$){y=!1,S&&(S=!1,p(D),D=-1),g=!0;var F=f;try{for(m($),h=n(l);h!==null&&(!(h.expirationTime>$)||C&&!dt());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var ge=oe(h.expirationTime<=$);$=t.unstable_now(),typeof ge=="function"?h.callback=ge:h===n(l)&&r(l),m($)}else r(l);h=n(l)}if(h!==null)var bs=!0;else{var Pn=n(u);Pn!==null&&hl(v,Pn.startTime-$),bs=!1}return bs}finally{h=null,f=F,g=!1}}var N=!1,A=null,D=-1,X=5,U=-1;function dt(){return!(t.unstable_now()-U<X)}function ci(){if(A!==null){var C=t.unstable_now();U=C;var $=!0;try{$=A(!0,C)}finally{$?hi():(N=!1,A=null)}}else N=!1}var hi;if(typeof d=="function")hi=function(){d(ci)};else if(typeof MessageChannel<"u"){var Id=new MessageChannel,j0=Id.port2;Id.port1.onmessage=ci,hi=function(){j0.postMessage(null)}}else hi=function(){O(ci,0)};function cl(C){A=C,N||(N=!0,hi())}function hl(C,$){D=O(function(){C(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,cl(T))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var F=f;f=$;try{return C()}finally{f=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,$){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var F=f;f=C;try{return $()}finally{f=F}},t.unstable_scheduleCallback=function(C,$,F){var oe=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?oe+F:oe):F=oe,C){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=F+ge,C={id:c++,callback:$,priorityLevel:C,startTime:F,expirationTime:ge,sortIndex:-1},F>oe?(C.sortIndex=F,e(u,C),n(l)===null&&C===n(u)&&(S?(p(D),D=-1):S=!0,hl(v,F-oe))):(C.sortIndex=ge,e(l,C),y||g||(y=!0,cl(T))),C},t.unstable_shouldYield=dt,t.unstable_wrapCallback=function(C){var $=f;return function(){var F=f;f=$;try{return C.apply(this,arguments)}finally{f=F}}}})(cm);(function(t){t.exports=cm})(um);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=an.exports,nt=um.exports;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dm=new Set,bi={};function ur(t,e){Vr(t,e),Vr(t+"Capture",e)}function Vr(t,e){for(bi[t]=e,t=0;t<e.length;t++)dm.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=Object.prototype.hasOwnProperty,ow=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ad={},Dd={};function aw(t){return su.call(Dd,t)?!0:su.call(Ad,t)?!1:ow.test(t)?Dd[t]=!0:(Ad[t]=!0,!1)}function lw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uw(t,e,n,r){if(e===null||typeof e>"u"||lw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){De[t]=new be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];De[e]=new be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){De[t]=new be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){De[t]=new be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){De[t]=new be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){De[t]=new be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){De[t]=new be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){De[t]=new be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){De[t]=new be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rc=/[\-:]([a-z])/g;function Pc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rc,Pc);De[e]=new be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rc,Pc);De[e]=new be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rc,Pc);De[e]=new be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){De[t]=new be(t,1,!1,t.toLowerCase(),null,!1,!1)});De.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){De[t]=new be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oc(t,e,n,r){var i=De.hasOwnProperty(e)?De[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uw(e,n,i,r)&&(n=null),r||i===null?aw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qt=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ws=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),ou=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),lu=Symbol.for("react.suspense_list"),Mc=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),Rd=Symbol.iterator;function di(t){return t===null||typeof t!="object"?null:(t=Rd&&t[Rd]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,pl;function Si(t){if(pl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pl=e&&e[1]||""}return`
`+pl+t}var ml=!1;function gl(t,e){if(!t||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Si(t):""}function cw(t){switch(t.tag){case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return t=gl(t.type,!1),t;case 11:return t=gl(t.type.render,!1),t;case 1:return t=gl(t.type,!0),t;default:return""}}function uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gr:return"Fragment";case mr:return"Portal";case ou:return"Profiler";case xc:return"StrictMode";case au:return"Suspense";case lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pm:return(t.displayName||"Context")+".Consumer";case fm:return(t._context.displayName||"Context")+".Provider";case Lc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mc:return e=t.displayName||null,e!==null?e:uu(t.type)||"Memo";case Zt:e=t._payload,t=t._init;try{return uu(t(e))}catch{}}return null}function hw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uu(e);case 8:return e===xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dw(t){var e=gm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gs(t){t._valueTracker||(t._valueTracker=dw(t))}function ym(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Lo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cu(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vm(t,e){e=e.checked,e!=null&&Oc(t,"checked",e,!1)}function hu(t,e){vm(t,e);var n=Sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?du(t,e.type,n):e.hasOwnProperty("defaultValue")&&du(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Od(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function du(t,e,n){(e!=="number"||Lo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _i=Array.isArray;function Dr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(_i(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function wm(t,e){var n=Sn(e.value),r=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ld(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Em(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Em(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qs,Sm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qs=qs||document.createElement("div"),qs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fw=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(t){fw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ni[e]=Ni[t]})});function _m(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ni.hasOwnProperty(t)&&Ni[t]?(""+e).trim():e+"px"}function Tm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_m(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pw=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mu(t,e){if(e){if(pw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yu=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vu=null,Rr=null,Pr=null;function Md(t){if(t=_s(t)){if(typeof vu!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Na(e),vu(t.stateNode,t.type,e))}}function Im(t){Rr?Pr?Pr.push(t):Pr=[t]:Rr=t}function km(){if(Rr){var t=Rr,e=Pr;if(Pr=Rr=null,Md(t),e)for(t=0;t<e.length;t++)Md(e[t])}}function Cm(t,e){return t(e)}function Nm(){}var yl=!1;function Am(t,e,n){if(yl)return t(e,n);yl=!0;try{return Cm(t,e,n)}finally{yl=!1,(Rr!==null||Pr!==null)&&(Nm(),km())}}function Ki(t,e){var n=t.stateNode;if(n===null)return null;var r=Na(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var wu=!1;if(Bt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){wu=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{wu=!1}function mw(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ai=!1,Mo=null,$o=!1,Eu=null,gw={onError:function(t){Ai=!0,Mo=t}};function yw(t,e,n,r,i,s,o,a,l){Ai=!1,Mo=null,mw.apply(gw,arguments)}function vw(t,e,n,r,i,s,o,a,l){if(yw.apply(this,arguments),Ai){if(Ai){var u=Mo;Ai=!1,Mo=null}else throw Error(w(198));$o||($o=!0,Eu=u)}}function cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $d(t){if(cr(t)!==t)throw Error(w(188))}function ww(t){var e=t.alternate;if(!e){if(e=cr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $d(i),t;if(s===r)return $d(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Rm(t){return t=ww(t),t!==null?Pm(t):null}function Pm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pm(t);if(e!==null)return e;t=t.sibling}return null}var Om=nt.unstable_scheduleCallback,Fd=nt.unstable_cancelCallback,Ew=nt.unstable_shouldYield,Sw=nt.unstable_requestPaint,ae=nt.unstable_now,_w=nt.unstable_getCurrentPriorityLevel,Fc=nt.unstable_ImmediatePriority,xm=nt.unstable_UserBlockingPriority,Fo=nt.unstable_NormalPriority,Tw=nt.unstable_LowPriority,Lm=nt.unstable_IdlePriority,Ta=null,kt=null;function Iw(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ta,t,void 0,(t.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Nw,kw=Math.log,Cw=Math.LN2;function Nw(t){return t>>>=0,t===0?32:31-(kw(t)/Cw|0)|0}var Qs=64,Xs=4194304;function Ti(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ti(a):(s&=o,s!==0&&(r=Ti(s)))}else o=n&~i,o!==0?r=Ti(o):s!==0&&(r=Ti(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vt(e),i=1<<n,r|=t[n],e&=~i;return r}function Aw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=Aw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Su(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mm(){var t=Qs;return Qs<<=1,(Qs&4194240)===0&&(Qs=64),t}function vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vt(e),t[e]=n}function Rw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Uc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function $m(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Fm,Vc,Um,Vm,zm,_u=!1,Ys=[],cn=null,hn=null,dn=null,Wi=new Map,Gi=new Map,tn=[],Pw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ud(t,e){switch(t){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Wi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(e.pointerId)}}function pi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_s(e),e!==null&&Vc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ow(t,e,n,r,i){switch(e){case"focusin":return cn=pi(cn,t,e,n,r,i),!0;case"dragenter":return hn=pi(hn,t,e,n,r,i),!0;case"mouseover":return dn=pi(dn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wi.set(s,pi(Wi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gi.set(s,pi(Gi.get(s)||null,t,e,n,r,i)),!0}return!1}function Bm(t){var e=$n(t.target);if(e!==null){var n=cr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dm(n),e!==null){t.blockedOn=e,zm(t.priority,function(){Um(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yu=r,n.target.dispatchEvent(r),yu=null}else return e=_s(n),e!==null&&Vc(e),t.blockedOn=n,!1;e.shift()}return!0}function Vd(t,e,n){vo(t)&&n.delete(e)}function xw(){_u=!1,cn!==null&&vo(cn)&&(cn=null),hn!==null&&vo(hn)&&(hn=null),dn!==null&&vo(dn)&&(dn=null),Wi.forEach(Vd),Gi.forEach(Vd)}function mi(t,e){t.blockedOn===e&&(t.blockedOn=null,_u||(_u=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,xw)))}function qi(t){function e(i){return mi(i,t)}if(0<Ys.length){mi(Ys[0],t);for(var n=1;n<Ys.length;n++){var r=Ys[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cn!==null&&mi(cn,t),hn!==null&&mi(hn,t),dn!==null&&mi(dn,t),Wi.forEach(e),Gi.forEach(e),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)Bm(n),n.blockedOn===null&&tn.shift()}var Or=Qt.ReactCurrentBatchConfig,Vo=!0;function Lw(t,e,n,r){var i=q,s=Or.transition;Or.transition=null;try{q=1,zc(t,e,n,r)}finally{q=i,Or.transition=s}}function Mw(t,e,n,r){var i=q,s=Or.transition;Or.transition=null;try{q=4,zc(t,e,n,r)}finally{q=i,Or.transition=s}}function zc(t,e,n,r){if(Vo){var i=Tu(t,e,n,r);if(i===null)Al(t,e,r,zo,n),Ud(t,r);else if(Ow(i,t,e,n,r))r.stopPropagation();else if(Ud(t,r),e&4&&-1<Pw.indexOf(t)){for(;i!==null;){var s=_s(i);if(s!==null&&Fm(s),s=Tu(t,e,n,r),s===null&&Al(t,e,r,zo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Al(t,e,r,null,n)}}var zo=null;function Tu(t,e,n,r){if(zo=null,t=$c(r),t=$n(t),t!==null)if(e=cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zo=t,null}function jm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_w()){case Fc:return 1;case xm:return 4;case Fo:case Tw:return 16;case Lm:return 536870912;default:return 16}default:return 16}}var ln=null,Bc=null,wo=null;function bm(){if(wo)return wo;var t,e=Bc,n=e.length,r,i="value"in ln?ln.value:ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wo=i.slice(t,1<r?1-r:void 0)}function Eo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Js(){return!0}function zd(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Js:zd,this.isPropagationStopped=zd,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),e}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=st(ni),Ss=ie({},ni,{view:0,detail:0}),$w=st(Ss),wl,El,gi,Ia=ie({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gi&&(gi&&t.type==="mousemove"?(wl=t.screenX-gi.screenX,El=t.screenY-gi.screenY):El=wl=0,gi=t),wl)},movementY:function(t){return"movementY"in t?t.movementY:El}}),Bd=st(Ia),Fw=ie({},Ia,{dataTransfer:0}),Uw=st(Fw),Vw=ie({},Ss,{relatedTarget:0}),Sl=st(Vw),zw=ie({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),Bw=st(zw),jw=ie({},ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bw=st(jw),Hw=ie({},ni,{data:0}),jd=st(Hw),Kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ww={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gw[t])?!!e[t]:!1}function bc(){return qw}var Qw=ie({},Ss,{key:function(t){if(t.key){var e=Kw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ww[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(t){return t.type==="keypress"?Eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xw=st(Qw),Yw=ie({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=st(Yw),Jw=ie({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),Zw=st(Jw),e1=ie({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=st(e1),n1=ie({},Ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=st(n1),i1=[9,13,27,32],Hc=Bt&&"CompositionEvent"in window,Di=null;Bt&&"documentMode"in document&&(Di=document.documentMode);var s1=Bt&&"TextEvent"in window&&!Di,Hm=Bt&&(!Hc||Di&&8<Di&&11>=Di),Hd=String.fromCharCode(32),Kd=!1;function Km(t,e){switch(t){case"keyup":return i1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function o1(t,e){switch(t){case"compositionend":return Wm(e);case"keypress":return e.which!==32?null:(Kd=!0,Hd);case"textInput":return t=e.data,t===Hd&&Kd?null:t;default:return null}}function a1(t,e){if(yr)return t==="compositionend"||!Hc&&Km(t,e)?(t=bm(),wo=Bc=ln=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hm&&e.locale!=="ko"?null:e.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l1[t.type]:e==="textarea"}function Gm(t,e,n,r){Im(r),e=Bo(e,"onChange"),0<e.length&&(n=new jc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ri=null,Qi=null;function u1(t){ig(t,0)}function ka(t){var e=Er(t);if(ym(e))return t}function c1(t,e){if(t==="change")return e}var qm=!1;if(Bt){var _l;if(Bt){var Tl="oninput"in document;if(!Tl){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Tl=typeof Gd.oninput=="function"}_l=Tl}else _l=!1;qm=_l&&(!document.documentMode||9<document.documentMode)}function qd(){Ri&&(Ri.detachEvent("onpropertychange",Qm),Qi=Ri=null)}function Qm(t){if(t.propertyName==="value"&&ka(Qi)){var e=[];Gm(e,Qi,t,$c(t)),Am(u1,e)}}function h1(t,e,n){t==="focusin"?(qd(),Ri=e,Qi=n,Ri.attachEvent("onpropertychange",Qm)):t==="focusout"&&qd()}function d1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ka(Qi)}function f1(t,e){if(t==="click")return ka(e)}function p1(t,e){if(t==="input"||t==="change")return ka(e)}function m1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Et=typeof Object.is=="function"?Object.is:m1;function Xi(t,e){if(Et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!su.call(e,i)||!Et(t[i],e[i]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xd(t,e){var n=Qd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qd(n)}}function Xm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ym(){for(var t=window,e=Lo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lo(t.document)}return e}function Kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function g1(t){var e=Ym(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xm(n.ownerDocument.documentElement,n)){if(r!==null&&Kc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xd(n,s);var o=Xd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var y1=Bt&&"documentMode"in document&&11>=document.documentMode,vr=null,Iu=null,Pi=null,ku=!1;function Yd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||vr==null||vr!==Lo(r)||(r=vr,"selectionStart"in r&&Kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&Xi(Pi,r)||(Pi=r,r=Bo(Iu,"onSelect"),0<r.length&&(e=new jc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vr)))}function Zs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},Il={},Jm={};Bt&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ca(t){if(Il[t])return Il[t];if(!wr[t])return t;var e=wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jm)return Il[t]=e[n];return t}var Zm=Ca("animationend"),eg=Ca("animationiteration"),tg=Ca("animationstart"),ng=Ca("transitionend"),rg=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(t,e){rg.set(t,e),ur(e,[t])}for(var kl=0;kl<Jd.length;kl++){var Cl=Jd[kl],v1=Cl.toLowerCase(),w1=Cl[0].toUpperCase()+Cl.slice(1);Cn(v1,"on"+w1)}Cn(Zm,"onAnimationEnd");Cn(eg,"onAnimationIteration");Cn(tg,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(ng,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function Zd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vw(r,e,void 0,t),t.currentTarget=null}function ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Zd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Zd(i,a,u),s=l}}}if($o)throw t=Eu,$o=!1,Eu=null,t}function Y(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var r=t+"__bubble";n.has(r)||(sg(e,t,2,!1),n.add(r))}function Nl(t,e,n){var r=0;e&&(r|=4),sg(n,t,r,e)}var eo="_reactListening"+Math.random().toString(36).slice(2);function Yi(t){if(!t[eo]){t[eo]=!0,dm.forEach(function(n){n!=="selectionchange"&&(E1.has(n)||Nl(n,!1,t),Nl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[eo]||(e[eo]=!0,Nl("selectionchange",!1,e))}}function sg(t,e,n,r){switch(jm(e)){case 1:var i=Lw;break;case 4:i=Mw;break;default:i=zc}n=i.bind(null,e,n,t),i=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Al(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$n(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Am(function(){var u=s,c=$c(n),h=[];e:{var f=rg.get(t);if(f!==void 0){var g=jc,y=t;switch(t){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":g=Xw;break;case"focusin":y="focus",g=Sl;break;case"focusout":y="blur",g=Sl;break;case"beforeblur":case"afterblur":g=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Zw;break;case Zm:case eg:case tg:g=Bw;break;case ng:g=t1;break;case"scroll":g=$w;break;case"wheel":g=r1;break;case"copy":case"cut":case"paste":g=bw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bd}var S=(e&4)!==0,O=!S&&t==="scroll",p=S?f!==null?f+"Capture":null:f;S=[];for(var d=u,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Ki(d,p),v!=null&&S.push(Ji(d,v,m)))),O)break;d=d.return}0<S.length&&(f=new g(f,y,null,n,c),h.push({event:f,listeners:S}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==yu&&(y=n.relatedTarget||n.fromElement)&&($n(y)||y[jt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?$n(y):null,y!==null&&(O=cr(y),y!==O||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(S=Bd,v="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(S=bd,v="onPointerLeave",p="onPointerEnter",d="pointer"),O=g==null?f:Er(g),m=y==null?f:Er(y),f=new S(v,d+"leave",g,n,c),f.target=O,f.relatedTarget=m,v=null,$n(c)===u&&(S=new S(p,d+"enter",y,n,c),S.target=m,S.relatedTarget=O,v=S),O=v,g&&y)t:{for(S=g,p=y,d=0,m=S;m;m=fr(m))d++;for(m=0,v=p;v;v=fr(v))m++;for(;0<d-m;)S=fr(S),d--;for(;0<m-d;)p=fr(p),m--;for(;d--;){if(S===p||p!==null&&S===p.alternate)break t;S=fr(S),p=fr(p)}S=null}else S=null;g!==null&&ef(h,f,g,S,!1),y!==null&&O!==null&&ef(h,O,y,S,!0)}}e:{if(f=u?Er(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var T=c1;else if(Wd(f))if(qm)T=p1;else{T=d1;var N=h1}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=f1);if(T&&(T=T(t,u))){Gm(h,T,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&du(f,"number",f.value)}switch(N=u?Er(u):window,t){case"focusin":(Wd(N)||N.contentEditable==="true")&&(vr=N,Iu=u,Pi=null);break;case"focusout":Pi=Iu=vr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,Yd(h,n,c);break;case"selectionchange":if(y1)break;case"keydown":case"keyup":Yd(h,n,c)}var A;if(Hc)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else yr?Km(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Hm&&n.locale!=="ko"&&(yr||D!=="onCompositionStart"?D==="onCompositionEnd"&&yr&&(A=bm()):(ln=c,Bc="value"in ln?ln.value:ln.textContent,yr=!0)),N=Bo(u,D),0<N.length&&(D=new jd(D,t,null,n,c),h.push({event:D,listeners:N}),A?D.data=A:(A=Wm(n),A!==null&&(D.data=A)))),(A=s1?o1(t,n):a1(t,n))&&(u=Bo(u,"onBeforeInput"),0<u.length&&(c=new jd("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}ig(h,e)})}function Ji(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ki(t,n),s!=null&&r.unshift(Ji(t,s,i)),s=Ki(t,e),s!=null&&r.push(Ji(t,s,i))),t=t.return}return r}function fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ef(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ki(n,s),l!=null&&o.unshift(Ji(n,l,a))):i||(l=Ki(n,s),l!=null&&o.push(Ji(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S1=/\r\n?/g,_1=/\u0000|\uFFFD/g;function tf(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(_1,"")}function to(t,e,n){if(e=tf(e),tf(t)!==e&&n)throw Error(w(425))}function jo(){}var Cu=null,Nu=null;function Au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,T1=typeof clearTimeout=="function"?clearTimeout:void 0,nf=typeof Promise=="function"?Promise:void 0,I1=typeof queueMicrotask=="function"?queueMicrotask:typeof nf<"u"?function(t){return nf.resolve(null).then(t).catch(k1)}:Du;function k1(t){setTimeout(function(){throw t})}function Dl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(e)}function fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ri=Math.random().toString(36).slice(2),Tt="__reactFiber$"+ri,Zi="__reactProps$"+ri,jt="__reactContainer$"+ri,Ru="__reactEvents$"+ri,C1="__reactListeners$"+ri,N1="__reactHandles$"+ri;function $n(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rf(t);t!==null;){if(n=t[Tt])return n;t=rf(t)}return e}t=n,n=t.parentNode}return null}function _s(t){return t=t[Tt]||t[jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Na(t){return t[Zi]||null}var Pu=[],Sr=-1;function Nn(t){return{current:t}}function J(t){0>Sr||(t.current=Pu[Sr],Pu[Sr]=null,Sr--)}function Q(t,e){Sr++,Pu[Sr]=t.current,t.current=e}var _n={},$e=Nn(_n),Qe=Nn(!1),Xn=_n;function zr(t,e){var n=t.type.contextTypes;if(!n)return _n;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(t){return t=t.childContextTypes,t!=null}function bo(){J(Qe),J($e)}function sf(t,e,n){if($e.current!==_n)throw Error(w(168));Q($e,e),Q(Qe,n)}function og(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,hw(t)||"Unknown",i));return ie({},n,r)}function Ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_n,Xn=$e.current,Q($e,t),Q(Qe,Qe.current),!0}function of(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=og(t,e,Xn),r.__reactInternalMemoizedMergedChildContext=t,J(Qe),J($e),Q($e,t)):J(Qe),Q(Qe,n)}var xt=null,Aa=!1,Rl=!1;function ag(t){xt===null?xt=[t]:xt.push(t)}function A1(t){Aa=!0,ag(t)}function An(){if(!Rl&&xt!==null){Rl=!0;var t=0,e=q;try{var n=xt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xt=null,Aa=!1}catch(i){throw xt!==null&&(xt=xt.slice(t+1)),Om(Fc,An),i}finally{q=e,Rl=!1}}return null}var _r=[],Tr=0,Ko=null,Wo=0,ot=[],at=0,Yn=null,Mt=1,$t="";function xn(t,e){_r[Tr++]=Wo,_r[Tr++]=Ko,Ko=t,Wo=e}function lg(t,e,n){ot[at++]=Mt,ot[at++]=$t,ot[at++]=Yn,Yn=t;var r=Mt;t=$t;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var s=32-vt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mt=1<<32-vt(e)+i|n<<i|r,$t=s+t}else Mt=1<<s|n<<i|r,$t=t}function Wc(t){t.return!==null&&(xn(t,1),lg(t,1,0))}function Gc(t){for(;t===Ko;)Ko=_r[--Tr],_r[Tr]=null,Wo=_r[--Tr],_r[Tr]=null;for(;t===Yn;)Yn=ot[--at],ot[at]=null,$t=ot[--at],ot[at]=null,Mt=ot[--at],ot[at]=null}var tt=null,et=null,Z=!1,yt=null;function ug(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function af(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yn!==null?{id:Mt,overflow:$t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,et=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(Z){var e=et;if(e){var n=e;if(!af(t,e)){if(Ou(t))throw Error(w(418));e=fn(n.nextSibling);var r=tt;e&&af(t,e)?ug(r,n):(t.flags=t.flags&-4097|2,Z=!1,tt=t)}}else{if(Ou(t))throw Error(w(418));t.flags=t.flags&-4097|2,Z=!1,tt=t}}}function lf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function no(t){if(t!==tt)return!1;if(!Z)return lf(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Au(t.type,t.memoizedProps)),e&&(e=et)){if(Ou(t))throw cg(),Error(w(418));for(;e;)ug(t,e),e=fn(e.nextSibling)}if(lf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?fn(t.stateNode.nextSibling):null;return!0}function cg(){for(var t=et;t;)t=fn(t.nextSibling)}function Br(){et=tt=null,Z=!1}function qc(t){yt===null?yt=[t]:yt.push(t)}var D1=Qt.ReactCurrentBatchConfig;function mt(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Go=Nn(null),qo=null,Ir=null,Qc=null;function Xc(){Qc=Ir=qo=null}function Yc(t){var e=Go.current;J(Go),t._currentValue=e}function Lu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xr(t,e){qo=t,Qc=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ge=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(Qc!==t)if(t={context:t,memoizedValue:e,next:null},Ir===null){if(qo===null)throw Error(w(308));Ir=t,qo.dependencies={lanes:0,firstContext:t}}else Ir=Ir.next=t;return e}var Fn=null;function Jc(t){Fn===null?Fn=[t]:Fn.push(t)}function hg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jc(e)):(n.next=i.next,i.next=n),e.interleaved=n,bt(t,r)}function bt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var en=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bt(t,n)}return i=r.interleaved,i===null?(e.next=e,Jc(r)):(e.next=i.next,i.next=e),r.interleaved=e,bt(t,n)}function So(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uc(t,n)}}function uf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qo(t,e,n,r){var i=t.updateQueue;en=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,S=a;switch(f=e,g=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=ie({},h,f);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zn|=o,t.lanes=o,t.memoizedState=h}}function cf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var fg=new hm.Component().refs;function Mu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Da={isMounted:function(t){return(t=t._reactInternals)?cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Be(),i=gn(t),s=zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(wt(e,t,i,r),So(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Be(),i=gn(t),s=zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(wt(e,t,i,r),So(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Be(),r=gn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=pn(t,i,r),e!==null&&(wt(e,t,r,n),So(e,t,r))}};function hf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xi(n,r)||!Xi(i,s):!0}function pg(t,e,n){var r=!1,i=_n,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Xe(e)?Xn:$e.current,r=e.contextTypes,s=(r=r!=null)?zr(t,i):_n),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Da,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function df(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Da.enqueueReplaceState(e,e.state,null)}function $u(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=fg,Zc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Xe(e)?Xn:$e.current,i.context=zr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Da.enqueueReplaceState(i,i.state,null),Qo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function yi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===fg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function ro(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ff(t){var e=t._init;return e(t._payload)}function mg(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=yn(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,v){return d===null||d.tag!==6?(d=Fl(m,p.mode,v),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,v){var T=m.type;return T===gr?c(p,d,m.props.children,v,m.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zt&&ff(T)===d.type)?(v=i(d,m.props),v.ref=yi(p,d,m),v.return=p,v):(v=No(m.type,m.key,m.props,null,p.mode,v),v.ref=yi(p,d,m),v.return=p,v)}function u(p,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ul(m,p.mode,v),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,v,T){return d===null||d.tag!==7?(d=Hn(m,p.mode,v,T),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ws:return m=No(d.type,d.key,d.props,null,p.mode,m),m.ref=yi(p,null,d),m.return=p,m;case mr:return d=Ul(d,p.mode,m),d.return=p,d;case Zt:var v=d._init;return h(p,v(d._payload),m)}if(_i(d)||di(d))return d=Hn(d,p.mode,m,null),d.return=p,d;ro(p,d)}return null}function f(p,d,m,v){var T=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ws:return m.key===T?l(p,d,m,v):null;case mr:return m.key===T?u(p,d,m,v):null;case Zt:return T=m._init,f(p,d,T(m._payload),v)}if(_i(m)||di(m))return T!==null?null:c(p,d,m,v,null);ro(p,m)}return null}function g(p,d,m,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,a(d,p,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ws:return p=p.get(v.key===null?m:v.key)||null,l(d,p,v,T);case mr:return p=p.get(v.key===null?m:v.key)||null,u(d,p,v,T);case Zt:var N=v._init;return g(p,d,m,N(v._payload),T)}if(_i(v)||di(v))return p=p.get(m)||null,c(d,p,v,T,null);ro(d,v)}return null}function y(p,d,m,v){for(var T=null,N=null,A=d,D=d=0,X=null;A!==null&&D<m.length;D++){A.index>D?(X=A,A=null):X=A.sibling;var U=f(p,A,m[D],v);if(U===null){A===null&&(A=X);break}t&&A&&U.alternate===null&&e(p,A),d=s(U,d,D),N===null?T=U:N.sibling=U,N=U,A=X}if(D===m.length)return n(p,A),Z&&xn(p,D),T;if(A===null){for(;D<m.length;D++)A=h(p,m[D],v),A!==null&&(d=s(A,d,D),N===null?T=A:N.sibling=A,N=A);return Z&&xn(p,D),T}for(A=r(p,A);D<m.length;D++)X=g(A,p,D,m[D],v),X!==null&&(t&&X.alternate!==null&&A.delete(X.key===null?D:X.key),d=s(X,d,D),N===null?T=X:N.sibling=X,N=X);return t&&A.forEach(function(dt){return e(p,dt)}),Z&&xn(p,D),T}function S(p,d,m,v){var T=di(m);if(typeof T!="function")throw Error(w(150));if(m=T.call(m),m==null)throw Error(w(151));for(var N=T=null,A=d,D=d=0,X=null,U=m.next();A!==null&&!U.done;D++,U=m.next()){A.index>D?(X=A,A=null):X=A.sibling;var dt=f(p,A,U.value,v);if(dt===null){A===null&&(A=X);break}t&&A&&dt.alternate===null&&e(p,A),d=s(dt,d,D),N===null?T=dt:N.sibling=dt,N=dt,A=X}if(U.done)return n(p,A),Z&&xn(p,D),T;if(A===null){for(;!U.done;D++,U=m.next())U=h(p,U.value,v),U!==null&&(d=s(U,d,D),N===null?T=U:N.sibling=U,N=U);return Z&&xn(p,D),T}for(A=r(p,A);!U.done;D++,U=m.next())U=g(A,p,D,U.value,v),U!==null&&(t&&U.alternate!==null&&A.delete(U.key===null?D:U.key),d=s(U,d,D),N===null?T=U:N.sibling=U,N=U);return t&&A.forEach(function(ci){return e(p,ci)}),Z&&xn(p,D),T}function O(p,d,m,v){if(typeof m=="object"&&m!==null&&m.type===gr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ws:e:{for(var T=m.key,N=d;N!==null;){if(N.key===T){if(T=m.type,T===gr){if(N.tag===7){n(p,N.sibling),d=i(N,m.props.children),d.return=p,p=d;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zt&&ff(T)===N.type){n(p,N.sibling),d=i(N,m.props),d.ref=yi(p,N,m),d.return=p,p=d;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===gr?(d=Hn(m.props.children,p.mode,v,m.key),d.return=p,p=d):(v=No(m.type,m.key,m.props,null,p.mode,v),v.ref=yi(p,d,m),v.return=p,p=v)}return o(p);case mr:e:{for(N=m.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Ul(m,p.mode,v),d.return=p,p=d}return o(p);case Zt:return N=m._init,O(p,d,N(m._payload),v)}if(_i(m))return y(p,d,m,v);if(di(m))return S(p,d,m,v);ro(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Fl(m,p.mode,v),d.return=p,p=d),o(p)):n(p,d)}return O}var jr=mg(!0),gg=mg(!1),Ts={},Ct=Nn(Ts),es=Nn(Ts),ts=Nn(Ts);function Un(t){if(t===Ts)throw Error(w(174));return t}function eh(t,e){switch(Q(ts,e),Q(es,t),Q(Ct,Ts),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pu(e,t)}J(Ct),Q(Ct,e)}function br(){J(Ct),J(es),J(ts)}function yg(t){Un(ts.current);var e=Un(Ct.current),n=pu(e,t.type);e!==n&&(Q(es,t),Q(Ct,n))}function th(t){es.current===t&&(J(Ct),J(es))}var ne=Nn(0);function Xo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pl=[];function nh(){for(var t=0;t<Pl.length;t++)Pl[t]._workInProgressVersionPrimary=null;Pl.length=0}var _o=Qt.ReactCurrentDispatcher,Ol=Qt.ReactCurrentBatchConfig,Jn=0,re=null,fe=null,ve=null,Yo=!1,Oi=!1,ns=0,R1=0;function Oe(){throw Error(w(321))}function rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Et(t[n],e[n]))return!1;return!0}function ih(t,e,n,r,i,s){if(Jn=s,re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_o.current=t===null||t.memoizedState===null?L1:M1,t=n(r,i),Oi){s=0;do{if(Oi=!1,ns=0,25<=s)throw Error(w(301));s+=1,ve=fe=null,e.updateQueue=null,_o.current=$1,t=n(r,i)}while(Oi)}if(_o.current=Jo,e=fe!==null&&fe.next!==null,Jn=0,ve=fe=re=null,Yo=!1,e)throw Error(w(300));return t}function sh(){var t=ns!==0;return ns=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?re.memoizedState=ve=t:ve=ve.next=t,ve}function ht(){if(fe===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=ve===null?re.memoizedState:ve.next;if(e!==null)ve=e,fe=t;else{if(t===null)throw Error(w(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ve===null?re.memoizedState=ve=t:ve=ve.next=t}return ve}function rs(t,e){return typeof e=="function"?e(t):e}function xl(t){var e=ht(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Jn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,re.lanes|=c,Zn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Et(r,e.memoizedState)||(Ge=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,re.lanes|=s,Zn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ll(t){var e=ht(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Et(s,e.memoizedState)||(Ge=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vg(){}function wg(t,e){var n=re,r=ht(),i=e(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,Ge=!0),r=r.queue,oh(_g.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,is(9,Sg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(w(349));(Jn&30)!==0||Eg(n,e,i)}return i}function Eg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sg(t,e,n,r){e.value=n,e.getSnapshot=r,Tg(e)&&Ig(t)}function _g(t,e,n){return n(function(){Tg(e)&&Ig(t)})}function Tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Et(t,n)}catch{return!0}}function Ig(t){var e=bt(t,1);e!==null&&wt(e,t,1,-1)}function pf(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},e.queue=t,t=t.dispatch=x1.bind(null,re,t),[e.memoizedState,t]}function is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kg(){return ht().memoizedState}function To(t,e,n,r){var i=_t();re.flags|=t,i.memoizedState=is(1|e,n,void 0,r===void 0?null:r)}function Ra(t,e,n,r){var i=ht();r=r===void 0?null:r;var s=void 0;if(fe!==null){var o=fe.memoizedState;if(s=o.destroy,r!==null&&rh(r,o.deps)){i.memoizedState=is(e,n,s,r);return}}re.flags|=t,i.memoizedState=is(1|e,n,s,r)}function mf(t,e){return To(8390656,8,t,e)}function oh(t,e){return Ra(2048,8,t,e)}function Cg(t,e){return Ra(4,2,t,e)}function Ng(t,e){return Ra(4,4,t,e)}function Ag(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dg(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4,4,Ag.bind(null,e,t),n)}function ah(){}function Rg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Og(t,e,n){return(Jn&21)===0?(t.baseState&&(t.baseState=!1,Ge=!0),t.memoizedState=n):(Et(n,e)||(n=Mm(),re.lanes|=n,Zn|=n,t.baseState=!0),e)}function P1(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=Ol.transition;Ol.transition={};try{t(!1),e()}finally{q=n,Ol.transition=r}}function xg(){return ht().memoizedState}function O1(t,e,n){var r=gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lg(t))Mg(e,n);else if(n=hg(t,e,n,r),n!==null){var i=Be();wt(n,t,r,i),$g(n,e,r)}}function x1(t,e,n){var r=gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lg(t))Mg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,o)){var l=e.interleaved;l===null?(i.next=i,Jc(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=hg(t,e,i,r),n!==null&&(i=Be(),wt(n,t,r,i),$g(n,e,r))}}function Lg(t){var e=t.alternate;return t===re||e!==null&&e===re}function Mg(t,e){Oi=Yo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $g(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uc(t,n)}}var Jo={readContext:ct,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},L1={readContext:ct,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:mf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,To(4194308,4,Ag.bind(null,e,t),n)},useLayoutEffect:function(t,e){return To(4194308,4,t,e)},useInsertionEffect:function(t,e){return To(4,2,t,e)},useMemo:function(t,e){var n=_t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=O1.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:pf,useDebugValue:ah,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=pf(!1),e=t[0];return t=P1.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=re,i=_t();if(Z){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),we===null)throw Error(w(349));(Jn&30)!==0||Eg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,mf(_g.bind(null,r,s,t),[t]),r.flags|=2048,is(9,Sg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_t(),e=we.identifierPrefix;if(Z){var n=$t,r=Mt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},M1={readContext:ct,useCallback:Rg,useContext:ct,useEffect:oh,useImperativeHandle:Dg,useInsertionEffect:Cg,useLayoutEffect:Ng,useMemo:Pg,useReducer:xl,useRef:kg,useState:function(){return xl(rs)},useDebugValue:ah,useDeferredValue:function(t){var e=ht();return Og(e,fe.memoizedState,t)},useTransition:function(){var t=xl(rs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:vg,useSyncExternalStore:wg,useId:xg,unstable_isNewReconciler:!1},$1={readContext:ct,useCallback:Rg,useContext:ct,useEffect:oh,useImperativeHandle:Dg,useInsertionEffect:Cg,useLayoutEffect:Ng,useMemo:Pg,useReducer:Ll,useRef:kg,useState:function(){return Ll(rs)},useDebugValue:ah,useDeferredValue:function(t){var e=ht();return fe===null?e.memoizedState=t:Og(e,fe.memoizedState,t)},useTransition:function(){var t=Ll(rs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:vg,useSyncExternalStore:wg,useId:xg,unstable_isNewReconciler:!1};function Hr(t,e){try{var n="",r=e;do n+=cw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ml(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Fu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F1=typeof WeakMap=="function"?WeakMap:Map;function Fg(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ea||(ea=!0,Gu=r),Fu(t,e)},n}function Ug(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fu(t,e),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new F1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Y1.bind(null,t,e,n),e.then(t,t))}function yf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vf(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,pn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var U1=Qt.ReactCurrentOwner,Ge=!1;function Fe(t,e,n,r){e.child=t===null?gg(e,null,n,r):jr(e,t.child,n,r)}function wf(t,e,n,r,i){n=n.render;var s=e.ref;return xr(e,i),r=ih(t,e,n,r,s,i),n=sh(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ht(t,e,i)):(Z&&n&&Wc(e),e.flags|=1,Fe(t,e,r,i),e.child)}function Ef(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vg(t,e,s,r,i)):(t=No(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xi,n(o,r)&&t.ref===e.ref)return Ht(t,e,i)}return e.flags|=1,t=yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Vg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xi(s,r)&&t.ref===e.ref)if(Ge=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ge=!0);else return e.lanes=t.lanes,Ht(t,e,i)}return Uu(t,e,n,r,i)}function zg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Cr,Ze),Ze|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Cr,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Cr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Cr,Ze),Ze|=r;return Fe(t,e,i,n),e.child}function Bg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uu(t,e,n,r,i){var s=Xe(n)?Xn:$e.current;return s=zr(e,s),xr(e,i),n=ih(t,e,n,r,s,i),r=sh(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ht(t,e,i)):(Z&&r&&Wc(e),e.flags|=1,Fe(t,e,n,i),e.child)}function Sf(t,e,n,r,i){if(Xe(n)){var s=!0;Ho(e)}else s=!1;if(xr(e,i),e.stateNode===null)Io(t,e),pg(e,n,r),$u(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Xe(n)?Xn:$e.current,u=zr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&df(e,o,r,u),en=!1;var f=e.memoizedState;o.state=f,Qo(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Qe.current||en?(typeof c=="function"&&(Mu(e,n,c,r),l=e.memoizedState),(a=en||hf(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Xe(n)?Xn:$e.current,l=zr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&df(e,o,r,l),en=!1,f=e.memoizedState,o.state=f,Qo(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||Qe.current||en?(typeof g=="function"&&(Mu(e,n,g,r),y=e.memoizedState),(u=en||hf(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Vu(t,e,n,r,s,i)}function Vu(t,e,n,r,i,s){Bg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&of(e,n,!1),Ht(t,e,s);r=e.stateNode,U1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jr(e,t.child,null,s),e.child=jr(e,null,a,s)):Fe(t,e,a,s),e.memoizedState=r.state,i&&of(e,n,!0),e.child}function jg(t){var e=t.stateNode;e.pendingContext?sf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sf(t,e.context,!1),eh(t,e.containerInfo)}function _f(t,e,n,r,i){return Br(),qc(i),e.flags|=256,Fe(t,e,n,r),e.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Bu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bg(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ne,i&1),t===null)return xu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xa(o,r,0,null),t=Hn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bu(n),e.memoizedState=zu,t):lh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return V1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yn(a,s):(s=Hn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zu,r}return s=t.child,t=s.sibling,r=yn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lh(t,e){return e=xa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function io(t,e,n,r){return r!==null&&qc(r),jr(e,t.child,null,n),t=lh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function V1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ml(Error(w(422))),io(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xa({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&jr(e,t.child,null,o),e.child.memoizedState=Bu(o),e.memoizedState=zu,s);if((e.mode&1)===0)return io(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=Ml(s,r,void 0),io(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ge||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bt(t,i),wt(r,t,i,-1))}return ph(),r=Ml(Error(w(421))),io(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=J1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=fn(i.nextSibling),tt=e,Z=!0,yt=null,t!==null&&(ot[at++]=Mt,ot[at++]=$t,ot[at++]=Yn,Mt=t.id,$t=t.overflow,Yn=e),e=lh(e,r.children),e.flags|=4096,e)}function Tf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lu(t.return,e,n)}function $l(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Hg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(t,e,r.children,n),r=ne.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tf(t,n,e);else if(t.tag===19)Tf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ne,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$l(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$l(e,!0,n,null,s);break;case"together":$l(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Io(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ht(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z1(t,e,n){switch(e.tag){case 3:jg(e),Br();break;case 5:yg(e);break;case 1:Xe(e.type)&&Ho(e);break;case 4:eh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Go,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ne,ne.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?bg(t,e,n):(Q(ne,ne.current&1),t=Ht(t,e,n),t!==null?t.sibling:null);Q(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Hg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,zg(t,e,n)}return Ht(t,e,n)}var Kg,ju,Wg,Gg;Kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ju=function(){};Wg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Un(Ct.current);var s=null;switch(n){case"input":i=cu(t,i),r=cu(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=fu(t,i),r=fu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jo)}mu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gg=function(t,e,n,r){n!==r&&(e.flags|=4)};function vi(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function B1(t,e,n){var r=e.pendingProps;switch(Gc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return Xe(e.type)&&bo(),xe(e),null;case 3:return r=e.stateNode,br(),J(Qe),J($e),nh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(no(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,yt!==null&&(Xu(yt),yt=null))),ju(t,e),xe(e),null;case 5:th(e);var i=Un(ts.current);if(n=e.type,t!==null&&e.stateNode!=null)Wg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return xe(e),null}if(t=Un(Ct.current),no(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[Zi]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<Ii.length;i++)Y(Ii[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Pd(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":xd(r,s),Y("invalid",r)}mu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&to(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&to(r.textContent,a,t),i=["children",""+a]):bi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":Gs(r),Od(r,s,!0);break;case"textarea":Gs(r),Ld(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=jo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Em(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[Zi]=r,Kg(t,e,!1,!1),e.stateNode=t;e:{switch(o=gu(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ii.length;i++)Y(Ii[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":Pd(t,r),i=cu(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Y("invalid",t);break;case"textarea":xd(t,r),i=fu(t,r),Y("invalid",t);break;default:i=r}mu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hi(t,l):typeof l=="number"&&Hi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Y("scroll",t):l!=null&&Oc(t,s,l,o))}switch(n){case"input":Gs(t),Od(t,r,!1);break;case"textarea":Gs(t),Ld(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Dr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Dr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)Gg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Un(ts.current),Un(Ct.current),no(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:to(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return xe(e),null;case 13:if(J(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&et!==null&&(e.mode&1)!==0&&(e.flags&128)===0)cg(),Br(),e.flags|=98560,s=!1;else if(s=no(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Tt]=e}else Br(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else yt!==null&&(Xu(yt),yt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ne.current&1)!==0?pe===0&&(pe=3):ph())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return br(),ju(t,e),t===null&&Yi(e.stateNode.containerInfo),xe(e),null;case 10:return Yc(e.type._context),xe(e),null;case 17:return Xe(e.type)&&bo(),xe(e),null;case 19:if(J(ne),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vi(s,!1);else{if(pe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Xo(t),o!==null){for(e.flags|=128,vi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&ae()>Kr&&(e.flags|=128,r=!0,vi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Xo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return xe(e),null}else 2*ae()-s.renderingStartTime>Kr&&n!==1073741824&&(e.flags|=128,r=!0,vi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ae(),e.sibling=null,n=ne.current,Q(ne,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return fh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Ze&1073741824)!==0&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function j1(t,e){switch(Gc(e),e.tag){case 1:return Xe(e.type)&&bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return br(),J(Qe),J($e),nh(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return th(e),null;case 13:if(J(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(ne),null;case 4:return br(),null;case 10:return Yc(e.type._context),null;case 22:case 23:return fh(),null;case 24:return null;default:return null}}var so=!1,Le=!1,b1=typeof WeakSet=="function"?WeakSet:Set,I=null;function kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(t,e,r)}else n.current=null}function bu(t,e,n){try{n()}catch(r){se(t,e,r)}}var If=!1;function H1(t,e){if(Cu=Vo,t=Ym(),Kc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nu={focusedElem:t,selectionRange:n},Vo=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,O=y.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?S:mt(e.type,S),O);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){se(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return y=If,If=!1,y}function xi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bu(e,n,s)}i=i.next}while(i!==r)}}function Pa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qg(t){var e=t.alternate;e!==null&&(t.alternate=null,qg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[Zi],delete e[Ru],delete e[C1],delete e[N1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qg(t){return t.tag===5||t.tag===3||t.tag===4}function kf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jo));else if(r!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function Wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Te=null,gt=!1;function Yt(t,e,n){for(n=n.child;n!==null;)Xg(t,e,n),n=n.sibling}function Xg(t,e,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ta,n)}catch{}switch(n.tag){case 5:Le||kr(n,e);case 6:var r=Te,i=gt;Te=null,Yt(t,e,n),Te=r,gt=i,Te!==null&&(gt?(t=Te,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(gt?(t=Te,n=n.stateNode,t.nodeType===8?Dl(t.parentNode,n):t.nodeType===1&&Dl(t,n),qi(t)):Dl(Te,n.stateNode));break;case 4:r=Te,i=gt,Te=n.stateNode.containerInfo,gt=!0,Yt(t,e,n),Te=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&bu(n,e,o),i=i.next}while(i!==r)}Yt(t,e,n);break;case 1:if(!Le&&(kr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,e,a)}Yt(t,e,n);break;case 21:Yt(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Yt(t,e,n),Le=r):Yt(t,e,n);break;default:Yt(t,e,n)}}function Cf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new b1),e.forEach(function(r){var i=Z1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,gt=!1;break e;case 3:Te=a.stateNode.containerInfo,gt=!0;break e;case 4:Te=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(Te===null)throw Error(w(160));Xg(s,o,i),Te=null,gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yg(e,t),e=e.sibling}function Yg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),St(t),r&4){try{xi(3,t,t.return),Pa(3,t)}catch(S){se(t,t.return,S)}try{xi(5,t,t.return)}catch(S){se(t,t.return,S)}}break;case 1:ft(e,t),St(t),r&512&&n!==null&&kr(n,n.return);break;case 5:if(ft(e,t),St(t),r&512&&n!==null&&kr(n,n.return),t.flags&32){var i=t.stateNode;try{Hi(i,"")}catch(S){se(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vm(i,s),gu(a,o);var u=gu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Tm(i,h):c==="dangerouslySetInnerHTML"?Sm(i,h):c==="children"?Hi(i,h):Oc(i,c,h,u)}switch(a){case"input":hu(i,s);break;case"textarea":wm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Dr(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Dr(i,!!s.multiple,s.defaultValue,!0):Dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zi]=s}catch(S){se(t,t.return,S)}}break;case 6:if(ft(e,t),St(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){se(t,t.return,S)}}break;case 3:if(ft(e,t),St(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(e.containerInfo)}catch(S){se(t,t.return,S)}break;case 4:ft(e,t),St(t);break;case 13:ft(e,t),St(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hh=ae())),r&4&&Cf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(u=Le)||c,ft(e,t),Le=u):ft(e,t),St(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(I=t,c=t.child;c!==null;){for(h=I=c;I!==null;){switch(f=I,g=f.child,f.tag){case 0:case 11:case 14:case 15:xi(4,f,f.return);break;case 1:kr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(S){se(r,n,S)}}break;case 5:kr(f,f.return);break;case 22:if(f.memoizedState!==null){Af(h);continue}}g!==null?(g.return=f,I=g):Af(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_m("display",o))}catch(S){se(t,t.return,S)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){se(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ft(e,t),St(t),r&4&&Cf(t);break;case 21:break;default:ft(e,t),St(t)}}function St(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qg(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var s=kf(t);Wu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=kf(t);Ku(t,a,o);break;default:throw Error(w(161))}}catch(l){se(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function K1(t,e,n){I=t,Jg(t)}function Jg(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||so;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=so;var u=Le;if(so=o,(Le=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Df(i):l!==null?(l.return=o,I=l):Df(i);for(;s!==null;)I=s,Jg(s),s=s.sibling;I=i,so=a,Le=u}Nf(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,I=s):Nf(t)}}function Nf(t){for(;I!==null;){var e=I;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Le||Pa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&qi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Le||e.flags&512&&Hu(e)}catch(f){se(e,e.return,f)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function Af(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Df(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pa(4,e)}catch(l){se(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){se(e,i,l)}}var s=e.return;try{Hu(e)}catch(l){se(e,s,l)}break;case 5:var o=e.return;try{Hu(e)}catch(l){se(e,o,l)}}}catch(l){se(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var W1=Math.ceil,Zo=Qt.ReactCurrentDispatcher,uh=Qt.ReactCurrentOwner,ut=Qt.ReactCurrentBatchConfig,H=0,we=null,ce=null,Ce=0,Ze=0,Cr=Nn(0),pe=0,ss=null,Zn=0,Oa=0,ch=0,Li=null,Ke=null,hh=0,Kr=1/0,Ot=null,ea=!1,Gu=null,mn=null,oo=!1,un=null,ta=0,Mi=0,qu=null,ko=-1,Co=0;function Be(){return(H&6)!==0?ae():ko!==-1?ko:ko=ae()}function gn(t){return(t.mode&1)===0?1:(H&2)!==0&&Ce!==0?Ce&-Ce:D1.transition!==null?(Co===0&&(Co=Mm()),Co):(t=q,t!==0||(t=window.event,t=t===void 0?16:jm(t.type)),t)}function wt(t,e,n,r){if(50<Mi)throw Mi=0,qu=null,Error(w(185));Es(t,n,r),((H&2)===0||t!==we)&&(t===we&&((H&2)===0&&(Oa|=n),pe===4&&nn(t,Ce)),Ye(t,r),n===1&&H===0&&(e.mode&1)===0&&(Kr=ae()+500,Aa&&An()))}function Ye(t,e){var n=t.callbackNode;Dw(t,e);var r=Uo(t,t===we?Ce:0);if(r===0)n!==null&&Fd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fd(n),e===1)t.tag===0?A1(Rf.bind(null,t)):ag(Rf.bind(null,t)),I1(function(){(H&6)===0&&An()}),n=null;else{switch($m(r)){case 1:n=Fc;break;case 4:n=xm;break;case 16:n=Fo;break;case 536870912:n=Lm;break;default:n=Fo}n=oy(n,Zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zg(t,e){if(ko=-1,Co=0,(H&6)!==0)throw Error(w(327));var n=t.callbackNode;if(Lr()&&t.callbackNode!==n)return null;var r=Uo(t,t===we?Ce:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=na(t,r);else{e=r;var i=H;H|=2;var s=ty();(we!==t||Ce!==e)&&(Ot=null,Kr=ae()+500,bn(t,e));do try{Q1();break}catch(a){ey(t,a)}while(1);Xc(),Zo.current=s,H=i,ce!==null?e=0:(we=null,Ce=0,e=pe)}if(e!==0){if(e===2&&(i=Su(t),i!==0&&(r=i,e=Qu(t,i))),e===1)throw n=ss,bn(t,0),nn(t,r),Ye(t,ae()),n;if(e===6)nn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!G1(i)&&(e=na(t,r),e===2&&(s=Su(t),s!==0&&(r=s,e=Qu(t,s))),e===1))throw n=ss,bn(t,0),nn(t,r),Ye(t,ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Ln(t,Ke,Ot);break;case 3:if(nn(t,r),(r&130023424)===r&&(e=hh+500-ae(),10<e)){if(Uo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Du(Ln.bind(null,t,Ke,Ot),e);break}Ln(t,Ke,Ot);break;case 4:if(nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-vt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W1(r/1960))-r,10<r){t.timeoutHandle=Du(Ln.bind(null,t,Ke,Ot),r);break}Ln(t,Ke,Ot);break;case 5:Ln(t,Ke,Ot);break;default:throw Error(w(329))}}}return Ye(t,ae()),t.callbackNode===n?Zg.bind(null,t):null}function Qu(t,e){var n=Li;return t.current.memoizedState.isDehydrated&&(bn(t,e).flags|=256),t=na(t,e),t!==2&&(e=Ke,Ke=n,e!==null&&Xu(e)),t}function Xu(t){Ke===null?Ke=t:Ke.push.apply(Ke,t)}function G1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nn(t,e){for(e&=~ch,e&=~Oa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vt(e),r=1<<n;t[n]=-1,e&=~r}}function Rf(t){if((H&6)!==0)throw Error(w(327));Lr();var e=Uo(t,0);if((e&1)===0)return Ye(t,ae()),null;var n=na(t,e);if(t.tag!==0&&n===2){var r=Su(t);r!==0&&(e=r,n=Qu(t,r))}if(n===1)throw n=ss,bn(t,0),nn(t,e),Ye(t,ae()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ln(t,Ke,Ot),Ye(t,ae()),null}function dh(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Kr=ae()+500,Aa&&An())}}function er(t){un!==null&&un.tag===0&&(H&6)===0&&Lr();var e=H;H|=1;var n=ut.transition,r=q;try{if(ut.transition=null,q=1,t)return t()}finally{q=r,ut.transition=n,H=e,(H&6)===0&&An()}}function fh(){Ze=Cr.current,J(Cr)}function bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T1(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:br(),J(Qe),J($e),nh();break;case 5:th(r);break;case 4:br();break;case 13:J(ne);break;case 19:J(ne);break;case 10:Yc(r.type._context);break;case 22:case 23:fh()}n=n.return}if(we=t,ce=t=yn(t.current,null),Ce=Ze=e,pe=0,ss=null,ch=Oa=Zn=0,Ke=Li=null,Fn!==null){for(e=0;e<Fn.length;e++)if(n=Fn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fn=null}return t}function ey(t,e){do{var n=ce;try{if(Xc(),_o.current=Jo,Yo){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yo=!1}if(Jn=0,ve=fe=re=null,Oi=!1,ns=0,uh.current=null,n===null||n.return===null){pe=1,ss=e,ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=yf(o);if(g!==null){g.flags&=-257,vf(g,o,a,s,e),g.mode&1&&gf(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var S=new Set;S.add(l),e.updateQueue=S}else y.add(l);break e}else{if((e&1)===0){gf(s,u,e),ph();break e}l=Error(w(426))}}else if(Z&&a.mode&1){var O=yf(o);if(O!==null){(O.flags&65536)===0&&(O.flags|=256),vf(O,o,a,s,e),qc(Hr(l,a));break e}}s=l=Hr(l,a),pe!==4&&(pe=2),Li===null?Li=[s]:Li.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Fg(s,l,e);uf(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mn===null||!mn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Ug(s,a,e);uf(s,v);break e}}s=s.return}while(s!==null)}ry(n)}catch(T){e=T,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function ty(){var t=Zo.current;return Zo.current=Jo,t===null?Jo:t}function ph(){(pe===0||pe===3||pe===2)&&(pe=4),we===null||(Zn&268435455)===0&&(Oa&268435455)===0||nn(we,Ce)}function na(t,e){var n=H;H|=2;var r=ty();(we!==t||Ce!==e)&&(Ot=null,bn(t,e));do try{q1();break}catch(i){ey(t,i)}while(1);if(Xc(),H=n,Zo.current=r,ce!==null)throw Error(w(261));return we=null,Ce=0,pe}function q1(){for(;ce!==null;)ny(ce)}function Q1(){for(;ce!==null&&!Ew();)ny(ce)}function ny(t){var e=sy(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?ry(t):ce=e,uh.current=null}function ry(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=B1(n,e,Ze),n!==null){ce=n;return}}else{if(n=j1(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,ce=null;return}}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);pe===0&&(pe=5)}function Ln(t,e,n){var r=q,i=ut.transition;try{ut.transition=null,q=1,X1(t,e,n,r)}finally{ut.transition=i,q=r}return null}function X1(t,e,n,r){do Lr();while(un!==null);if((H&6)!==0)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rw(t,s),t===we&&(ce=we=null,Ce=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||oo||(oo=!0,oy(Fo,function(){return Lr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ut.transition,ut.transition=null;var o=q;q=1;var a=H;H|=4,uh.current=null,H1(t,n),Yg(n,t),g1(Nu),Vo=!!Cu,Nu=Cu=null,t.current=n,K1(n),Sw(),H=a,q=o,ut.transition=s}else t.current=n;if(oo&&(oo=!1,un=t,ta=i),s=t.pendingLanes,s===0&&(mn=null),Iw(n.stateNode),Ye(t,ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ea)throw ea=!1,t=Gu,Gu=null,t;return(ta&1)!==0&&t.tag!==0&&Lr(),s=t.pendingLanes,(s&1)!==0?t===qu?Mi++:(Mi=0,qu=t):Mi=0,An(),null}function Lr(){if(un!==null){var t=$m(ta),e=ut.transition,n=q;try{if(ut.transition=null,q=16>t?16:t,un===null)var r=!1;else{if(t=un,un=null,ta=0,(H&6)!==0)throw Error(w(331));var i=H;for(H|=4,I=t.current;I!==null;){var s=I,o=s.child;if((I.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:xi(8,c,s)}var h=c.child;if(h!==null)h.return=c,I=h;else for(;I!==null;){c=I;var f=c.sibling,g=c.return;if(qg(c),c===u){I=null;break}if(f!==null){f.return=g,I=f;break}I=g}}}var y=s.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}I=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:xi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,I=p;break e}I=s.return}}var d=t.current;for(I=d;I!==null;){o=I;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,I=m;else e:for(o=d;I!==null;){if(a=I,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Pa(9,a)}}catch(T){se(a,a.return,T)}if(a===o){I=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}if(H=i,An(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ta,t)}catch{}r=!0}return r}finally{q=n,ut.transition=e}}return!1}function Pf(t,e,n){e=Hr(n,e),e=Fg(t,e,1),t=pn(t,e,1),e=Be(),t!==null&&(Es(t,1,e),Ye(t,e))}function se(t,e,n){if(t.tag===3)Pf(t,t,n);else for(;e!==null;){if(e.tag===3){Pf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){t=Hr(n,t),t=Ug(e,t,1),e=pn(e,t,1),t=Be(),e!==null&&(Es(e,1,t),Ye(e,t));break}}e=e.return}}function Y1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Be(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Ce&n)===n&&(pe===4||pe===3&&(Ce&130023424)===Ce&&500>ae()-hh?bn(t,0):ch|=n),Ye(t,e)}function iy(t,e){e===0&&((t.mode&1)===0?e=1:(e=Xs,Xs<<=1,(Xs&130023424)===0&&(Xs=4194304)));var n=Be();t=bt(t,e),t!==null&&(Es(t,e,n),Ye(t,n))}function J1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iy(t,n)}function Z1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),iy(t,n)}var sy;sy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qe.current)Ge=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ge=!1,z1(t,e,n);Ge=(t.flags&131072)!==0}else Ge=!1,Z&&(e.flags&1048576)!==0&&lg(e,Wo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Io(t,e),t=e.pendingProps;var i=zr(e,$e.current);xr(e,n),i=ih(null,e,r,t,i,n);var s=sh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(r)?(s=!0,Ho(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zc(e),i.updater=Da,e.stateNode=i,i._reactInternals=e,$u(e,r,t,n),e=Vu(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&Wc(e),Fe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Io(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tE(r),t=mt(r,t),i){case 0:e=Uu(null,e,r,t,n);break e;case 1:e=Sf(null,e,r,t,n);break e;case 11:e=wf(null,e,r,t,n);break e;case 14:e=Ef(null,e,r,mt(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Uu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Sf(t,e,r,i,n);case 3:e:{if(jg(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dg(t,e),Qo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hr(Error(w(423)),e),e=_f(t,e,r,n,i);break e}else if(r!==i){i=Hr(Error(w(424)),e),e=_f(t,e,r,n,i);break e}else for(et=fn(e.stateNode.containerInfo.firstChild),tt=e,Z=!0,yt=null,n=gg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===i){e=Ht(t,e,n);break e}Fe(t,e,r,n)}e=e.child}return e;case 5:return yg(e),t===null&&xu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Au(r,i)?o=null:s!==null&&Au(r,s)&&(e.flags|=32),Bg(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&xu(e),null;case 13:return bg(t,e,n);case 4:return eh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jr(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),wf(t,e,r,i,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Go,r._currentValue),r._currentValue=o,s!==null)if(Et(s.value,o)){if(s.children===i.children&&!Qe.current){e=Ht(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=zt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xr(e,n),i=ct(i),r=r(i),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return r=e.type,i=mt(r,e.pendingProps),i=mt(r.type,i),Ef(t,e,r,i,n);case 15:return Vg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),Io(t,e),e.tag=1,Xe(r)?(t=!0,Ho(e)):t=!1,xr(e,n),pg(e,r,i),$u(e,r,i,n),Vu(null,e,r,!0,t,n);case 19:return Hg(t,e,n);case 22:return zg(t,e,n)}throw Error(w(156,e.tag))};function oy(t,e){return Om(t,e)}function eE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new eE(t,e,n,r)}function mh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tE(t){if(typeof t=="function")return mh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lc)return 11;if(t===Mc)return 14}return 2}function yn(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function No(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gr:return Hn(n.children,i,s,e);case xc:o=8,i|=8;break;case ou:return t=lt(12,n,e,i|2),t.elementType=ou,t.lanes=s,t;case au:return t=lt(13,n,e,i),t.elementType=au,t.lanes=s,t;case lu:return t=lt(19,n,e,i),t.elementType=lu,t.lanes=s,t;case mm:return xa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fm:o=10;break e;case pm:o=9;break e;case Lc:o=11;break e;case Mc:o=14;break e;case Zt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hn(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function xa(t,e,n,r){return t=lt(22,t,r,e),t.elementType=mm,t.lanes=n,t.stateNode={isHidden:!1},t}function Fl(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function Ul(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gh(t,e,n,r,i,s,o,a,l){return t=new nE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(s),t}function rE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ay(t){if(!t)return _n;t=t._reactInternals;e:{if(cr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Xe(n))return og(t,n,e)}return e}function ly(t,e,n,r,i,s,o,a,l){return t=gh(n,r,!0,t,i,s,o,a,l),t.context=ay(null),n=t.current,r=Be(),i=gn(n),s=zt(r,i),s.callback=e!=null?e:null,pn(n,s,i),t.current.lanes=i,Es(t,i,r),Ye(t,r),t}function La(t,e,n,r){var i=e.current,s=Be(),o=gn(i);return n=ay(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pn(i,e,o),t!==null&&(wt(t,i,o,s),So(t,i,o)),o}function ra(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Of(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yh(t,e){Of(t,e),(t=t.alternate)&&Of(t,e)}function iE(){return null}var uy=typeof reportError=="function"?reportError:function(t){console.error(t)};function vh(t){this._internalRoot=t}Ma.prototype.render=vh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));La(t,e,null,null)};Ma.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;er(function(){La(null,t,null,null)}),e[jt]=null}};function Ma(t){this._internalRoot=t}Ma.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tn.length&&e!==0&&e<tn[n].priority;n++);tn.splice(n,0,t),n===0&&Bm(t)}};function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xf(){}function sE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ra(o);s.call(u)}}var o=ly(e,r,t,0,null,!1,!1,"",xf);return t._reactRootContainer=o,t[jt]=o.current,Yi(t.nodeType===8?t.parentNode:t),er(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ra(l);a.call(u)}}var l=gh(t,0,!1,null,null,!1,!1,"",xf);return t._reactRootContainer=l,t[jt]=l.current,Yi(t.nodeType===8?t.parentNode:t),er(function(){La(e,l,n,r)}),l}function Fa(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ra(o);a.call(l)}}La(e,o,t,i)}else o=sE(n,e,t,i,r);return ra(o)}Fm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ti(e.pendingLanes);n!==0&&(Uc(e,n|1),Ye(e,ae()),(H&6)===0&&(Kr=ae()+500,An()))}break;case 13:er(function(){var r=bt(t,1);if(r!==null){var i=Be();wt(r,t,1,i)}}),yh(t,1)}};Vc=function(t){if(t.tag===13){var e=bt(t,134217728);if(e!==null){var n=Be();wt(e,t,134217728,n)}yh(t,134217728)}};Um=function(t){if(t.tag===13){var e=gn(t),n=bt(t,e);if(n!==null){var r=Be();wt(n,t,e,r)}yh(t,e)}};Vm=function(){return q};zm=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};vu=function(t,e,n){switch(e){case"input":if(hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Na(r);if(!i)throw Error(w(90));ym(r),hu(r,i)}}}break;case"textarea":wm(t,n);break;case"select":e=n.value,e!=null&&Dr(t,!!n.multiple,e,!1)}};Cm=dh;Nm=er;var oE={usingClientEntryPoint:!1,Events:[_s,Er,Na,Im,km,dh]},wi={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aE={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rm(t),t===null?null:t.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||iE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Ta=ao.inject(aE),kt=ao}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(e))throw Error(w(200));return rE(t,e,null,n)};it.createRoot=function(t,e){if(!wh(t))throw Error(w(299));var n=!1,r="",i=uy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gh(t,1,!1,null,null,n,!1,r,i),t[jt]=e.current,Yi(t.nodeType===8?t.parentNode:t),new vh(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Rm(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return er(t)};it.hydrate=function(t,e,n){if(!$a(e))throw Error(w(200));return Fa(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!wh(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ly(e,null,t,1,n!=null?n:null,i,!1,s,o),t[jt]=e.current,Yi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ma(e)};it.render=function(t,e,n){if(!$a(e))throw Error(w(200));return Fa(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!$a(t))throw Error(w(40));return t._reactRootContainer?(er(function(){Fa(null,null,t,!1,function(){t._reactRootContainer=null,t[jt]=null})}),!0):!1};it.unstable_batchedUpdates=dh;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$a(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Fa(t,e,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=it})(lm);var Lf=lm.exports;iu.createRoot=Lf.createRoot,iu.hydrateRoot=Lf.hydrateRoot;let lE=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},cE=function(t){const e=cy(t);return hy.encodeByteArray(e,!0)},dy=function(t){return cE(t).replace(/\./g,"")},hE=function(t){try{return hy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function py(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function my(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fE(){return Ee().indexOf("Electron/")>=0}function gy(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pE(){return Ee().indexOf("MSAppHost/")>=0}function mE(){return typeof indexedDB=="object"}function gE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yE,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,a,r)}}function vE(t,e){return t.replace(wE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wE=/\{\$([^}]+)}/g;function EE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ia(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Mf(s)&&Mf(o)){if(!ia(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function SE(t,e){const n=new _E(t,e);return n.subscribe.bind(n)}class _E{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vl),i.error===void 0&&(i.error=Vl),i.complete===void 0&&(i.complete=Vl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CE(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kE(t){return t===Mn?void 0:t}function CE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const AE={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},DE=W.INFO,RE={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},PE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eh{constructor(e){this.name=e,this._logLevel=DE,this._logHandler=PE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const OE=(t,e)=>e.some(n=>t instanceof n);let $f,Ff;function xE(){return $f||($f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LE(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yy=new WeakMap,Yu=new WeakMap,vy=new WeakMap,zl=new WeakMap,Sh=new WeakMap;function ME(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yy.set(n,t)}).catch(()=>{}),Sh.set(e,t),e}function $E(t){if(Yu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yu.set(t,e)}let Ju={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FE(t){Ju=t(Ju)}function UE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bl(this),e,...n);return vy.set(r,e.sort?e.sort():[e]),vn(r)}:LE().includes(t)?function(...e){return t.apply(Bl(this),e),vn(yy.get(this))}:function(...e){return vn(t.apply(Bl(this),e))}}function VE(t){return typeof t=="function"?UE(t):(t instanceof IDBTransaction&&$E(t),OE(t,xE())?new Proxy(t,Ju):t)}function vn(t){if(t instanceof IDBRequest)return ME(t);if(zl.has(t))return zl.get(t);const e=VE(t);return e!==t&&(zl.set(t,e),Sh.set(e,t)),e}const Bl=t=>Sh.get(t);function zE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vn(o.result),l.oldVersion,l.newVersion,vn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const BE=["get","getKey","getAll","getAllKeys","count"],jE=["put","add","delete","clear"],jl=new Map;function Uf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jl.get(e))return jl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return jl.set(e,s),s}FE(t=>({...t,get:(e,n,r)=>Uf(e,n)||t.get(e,n,r),has:(e,n)=>!!Uf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zu="@firebase/app",Vf="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Eh("@firebase/app"),KE="@firebase/app-compat",WE="@firebase/analytics-compat",GE="@firebase/analytics",qE="@firebase/app-check-compat",QE="@firebase/app-check",XE="@firebase/auth",YE="@firebase/auth-compat",JE="@firebase/database",ZE="@firebase/database-compat",eS="@firebase/functions",tS="@firebase/functions-compat",nS="@firebase/installations",rS="@firebase/installations-compat",iS="@firebase/messaging",sS="@firebase/messaging-compat",oS="@firebase/performance",aS="@firebase/performance-compat",lS="@firebase/remote-config",uS="@firebase/remote-config-compat",cS="@firebase/storage",hS="@firebase/storage-compat",dS="@firebase/firestore",fS="@firebase/firestore-compat",pS="firebase",mS="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="[DEFAULT]",gS={[Zu]:"fire-core",[KE]:"fire-core-compat",[GE]:"fire-analytics",[WE]:"fire-analytics-compat",[QE]:"fire-app-check",[qE]:"fire-app-check-compat",[XE]:"fire-auth",[YE]:"fire-auth-compat",[JE]:"fire-rtdb",[ZE]:"fire-rtdb-compat",[eS]:"fire-fn",[tS]:"fire-fn-compat",[nS]:"fire-iid",[rS]:"fire-iid-compat",[iS]:"fire-fcm",[sS]:"fire-fcm-compat",[oS]:"fire-perf",[aS]:"fire-perf-compat",[lS]:"fire-rc",[uS]:"fire-rc-compat",[cS]:"fire-gcs",[hS]:"fire-gcs-compat",[dS]:"fire-fst",[fS]:"fire-fst-compat","fire-js":"fire-js",[pS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map,ec=new Map;function yS(t,e){try{t.container.addComponent(e)}catch(n){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wr(t){const e=t.name;if(ec.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,t);for(const n of sa.values())yS(n,t);return!0}function _h(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rr=new Is("app","Firebase",vS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=mS;function ES(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:wy,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw rr.create("bad-app-name",{appName:String(r)});const i=sa.get(r);if(i){if(ia(t,i.options)&&ia(n,i.config))return i;throw rr.create("duplicate-app",{appName:r})}const s=new NE(r);for(const a of ec.values())s.addComponent(a);const o=new wS(t,n,s);return sa.set(r,o),o}function Ey(t=wy){const e=sa.get(t);if(!e)throw rr.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let i=(r=gS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(a.join(" "));return}Wr(new tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="firebase-heartbeat-database",_S=1,os="firebase-heartbeat-store";let bl=null;function Sy(){return bl||(bl=zE(SS,_S,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(os)}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),bl}async function TS(t){var e;try{return(await Sy()).transaction(os).objectStore(os).get(_y(t))}catch(n){if(n instanceof Xt)nr.warn(n.message);else{const r=rr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});nr.warn(r.message)}}}async function zf(t,e){var n;try{const i=(await Sy()).transaction(os,"readwrite");return await i.objectStore(os).put(e,_y(t)),i.done}catch(r){if(r instanceof Xt)nr.warn(r.message);else{const i=rr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});nr.warn(i.message)}}}function _y(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=1024,kS=30*24*60*60*1e3;class CS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=kS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bf(),{heartbeatsToSend:n,unsentEntries:r}=NS(this._heartbeatsCache.heartbeats),i=dy(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bf(){return new Date().toISOString().substring(0,10)}function NS(t,e=IS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?gE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jf(t){return dy(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){Wr(new tr("platform-logger",e=>new bE(e),"PRIVATE")),Wr(new tr("heartbeat",e=>new CS(e),"PRIVATE")),wn(Zu,Vf,t),wn(Zu,Vf,"esm2017"),wn("fire-js","")}DS("");var RS="firebase",PS="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(RS,PS,"app");var OS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,Th=Th||{},L=OS||self;function oa(){}function tc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ns(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xS(t){return Object.prototype.hasOwnProperty.call(t,Hl)&&t[Hl]||(t[Hl]=++LS)}var Hl="closure_uid_"+(1e9*Math.random()>>>0),LS=0;function MS(t,e,n){return t.call.apply(t.bind,arguments)}function $S(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ne(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ne=MS:Ne=$S,Ne.apply(null,arguments)}function lo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Dn(){this.s=this.s,this.o=this.o}var FS=0;Dn.prototype.s=!1;Dn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),FS!=0)&&xS(this)};Dn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ty=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Iy=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function US(t){e:{var e=D_;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function bf(t){return Array.prototype.concat.apply([],arguments)}function Ih(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function aa(t){return/^[\s\xa0]*$/.test(t)}var Hf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ue(t,e){return t.indexOf(e)!=-1}function Kl(t,e){return t<e?-1:t>e?1:0}var Ve;e:{var Kf=L.navigator;if(Kf){var Wf=Kf.userAgent;if(Wf){Ve=Wf;break e}}Ve=""}function kh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ky(t){const e={};for(const n in t)e[n]=t[n];return e}var Gf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cy(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Gf.length;s++)n=Gf[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ch(t){return Ch[" "](t),t}Ch[" "]=oa;function VS(t){var e=jS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var zS=Ue(Ve,"Opera"),Gr=Ue(Ve,"Trident")||Ue(Ve,"MSIE"),Ny=Ue(Ve,"Edge"),nc=Ny||Gr,Ay=Ue(Ve,"Gecko")&&!(Ue(Ve.toLowerCase(),"webkit")&&!Ue(Ve,"Edge"))&&!(Ue(Ve,"Trident")||Ue(Ve,"MSIE"))&&!Ue(Ve,"Edge"),BS=Ue(Ve.toLowerCase(),"webkit")&&!Ue(Ve,"Edge");function Dy(){var t=L.document;return t?t.documentMode:void 0}var la;e:{var Wl="",Gl=function(){var t=Ve;if(Ay)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ny)return/Edge\/([\d\.]+)/.exec(t);if(Gr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BS)return/WebKit\/(\S+)/.exec(t);if(zS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gl&&(Wl=Gl?Gl[1]:""),Gr){var ql=Dy();if(ql!=null&&ql>parseFloat(Wl)){la=String(ql);break e}}la=Wl}var jS={};function bS(){return VS(function(){let t=0;const e=Hf(String(la)).split("."),n=Hf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Kl(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Kl(i[2].length==0,s[2].length==0)||Kl(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var rc;if(L.document&&Gr){var qf=Dy();rc=qf||parseInt(la,10)||void 0}else rc=void 0;var HS=rc,KS=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",oa,e),L.removeEventListener("test",oa,e)}catch{}return t}();function Me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};function as(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ay){e:{try{Ch(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&as.Z.h.call(this)}}Pe(as,Me);var WS={2:"touch",3:"pen",4:"mouse"};as.prototype.h=function(){as.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var As="closure_listenable_"+(1e6*Math.random()|0),GS=0;function qS(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++GS,this.ca=this.fa=!1}function Ua(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Va(t){this.src=t,this.g={},this.h=0}Va.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new qS(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function ic(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ty(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ua(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Nh="closure_lm_"+(1e6*Math.random()|0),Ql={};function Ry(t,e,n,r,i){if(r&&r.once)return Oy(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ry(t,e[s],n,r,i);return null}return n=Rh(n),t&&t[As]?t.N(e,n,Ns(r)?!!r.capture:!!r,i):Py(t,e,n,!1,r,i)}function Py(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ns(i)?!!i.capture:!!i,a=Dh(t);if(a||(t[Nh]=a=new Va(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=QS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)KS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ly(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function QS(){function t(n){return e.call(t.src,t.listener,n)}var e=XS;return t}function Oy(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Oy(t,e[s],n,r,i);return null}return n=Rh(n),t&&t[As]?t.O(e,n,Ns(r)?!!r.capture:!!r,i):Py(t,e,n,!0,r,i)}function xy(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)xy(t,e[s],n,r,i);else r=Ns(r)?!!r.capture:!!r,n=Rh(n),t&&t[As]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sc(s,n,r,i),-1<n&&(Ua(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Dh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sc(e,n,r,i)),(n=-1<t?e[t]:null)&&Ah(n))}function Ah(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[As])ic(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ly(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Dh(e))?(ic(n,t),n.h==0&&(n.src=null,e[Nh]=null)):Ua(t)}}}function Ly(t){return t in Ql?Ql[t]:Ql[t]="on"+t}function XS(t,e){if(t.ca)t=!0;else{e=new as(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ah(t),t=n.call(r,e)}return t}function Dh(t){return t=t[Nh],t instanceof Va?t:null}var Xl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rh(t){return typeof t=="function"?t:(t[Xl]||(t[Xl]=function(e){return t.handleEvent(e)}),t[Xl])}function Se(){Dn.call(this),this.i=new Va(this),this.P=this,this.I=null}Pe(Se,Dn);Se.prototype[As]=!0;Se.prototype.removeEventListener=function(t,e,n,r){xy(this,t,e,n,r)};function Ae(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Me(e,t);else if(e instanceof Me)e.target=e.target||t;else{var i=e;e=new Me(r,t),Cy(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=uo(o,r,!0,e)&&i}if(o=e.g=t,i=uo(o,r,!0,e)&&i,i=uo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=uo(o,r,!1,e)&&i}Se.prototype.M=function(){if(Se.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ua(n[r]);delete t.g[e],t.h--}}this.I=null};Se.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Se.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function uo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&ic(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ph=L.JSON.stringify;function YS(){var t=$y;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class JS{constructor(){this.h=this.g=null}add(e,n){const r=My.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var My=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ZS,t=>t.reset());class ZS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function e_(t){L.setTimeout(()=>{throw t},0)}function Oh(t,e){oc||t_(),ac||(oc(),ac=!0),$y.add(t,e)}var oc;function t_(){var t=L.Promise.resolve(void 0);oc=function(){t.then(n_)}}var ac=!1,$y=new JS;function n_(){for(var t;t=YS();){try{t.h.call(t.g)}catch(n){e_(n)}var e=My;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ac=!1}function za(t,e){Se.call(this),this.h=t||1,this.g=e||L,this.j=Ne(this.kb,this),this.l=Date.now()}Pe(za,Se);k=za.prototype;k.da=!1;k.S=null;k.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ae(this,"tick"),this.da&&(xh(this),this.start()))}};k.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}k.M=function(){za.Z.M.call(this),xh(this),delete this.g};function Lh(t,e,n){if(typeof t=="function")n&&(t=Ne(t,n));else if(t&&typeof t.handleEvent=="function")t=Ne(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function Fy(t){t.g=Lh(()=>{t.g=null,t.i&&(t.i=!1,Fy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class r_ extends Dn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fy(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(t){Dn.call(this),this.h=t,this.g={}}Pe(ls,Dn);var Qf=[];function Uy(t,e,n,r){Array.isArray(n)||(n&&(Qf[0]=n.toString()),n=Qf);for(var i=0;i<n.length;i++){var s=Ry(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Vy(t){kh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ah(e)},t),t.g={}}ls.prototype.M=function(){ls.Z.M.call(this),Vy(this)};ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ba(){this.g=!0}Ba.prototype.Aa=function(){this.g=!1};function i_(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function s_(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Nr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+a_(t,n)+(r?" "+r:"")})}function o_(t,e){t.info(function(){return"TIMEOUT: "+e})}Ba.prototype.info=function(){};function a_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ph(n)}catch{return e}}var dr={},Xf=null;function ja(){return Xf=Xf||new Se}dr.Ma="serverreachability";function zy(t){Me.call(this,dr.Ma,t)}Pe(zy,Me);function us(t){const e=ja();Ae(e,new zy(e))}dr.STAT_EVENT="statevent";function By(t,e){Me.call(this,dr.STAT_EVENT,t),this.stat=e}Pe(By,Me);function ze(t){const e=ja();Ae(e,new By(e,t))}dr.Na="timingevent";function jy(t,e){Me.call(this,dr.Na,t),this.size=e}Pe(jy,Me);function Ds(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var ba={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},by={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Mh(){}Mh.prototype.h=null;function Yf(t){return t.h||(t.h=t.i())}function Hy(){}var Rs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function $h(){Me.call(this,"d")}Pe($h,Me);function Fh(){Me.call(this,"c")}Pe(Fh,Me);var lc;function Ha(){}Pe(Ha,Mh);Ha.prototype.g=function(){return new XMLHttpRequest};Ha.prototype.i=function(){return{}};lc=new Ha;function Ps(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ls(this),this.P=l_,t=nc?125:void 0,this.W=new za(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ky}function Ky(){this.i=null,this.g="",this.h=!1}var l_=45e3,uc={},ua={};k=Ps.prototype;k.setTimeout=function(t){this.P=t};function cc(t,e,n){t.K=1,t.v=Wa(Kt(e)),t.s=n,t.U=!0,Wy(t,null)}function Wy(t,e){t.F=Date.now(),Os(t),t.A=Kt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Zy(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ky,t.g=wv(t.l,n?e:null,!t.s),0<t.O&&(t.L=new r_(Ne(t.Ia,t,t.g),t.O)),Uy(t.V,t.g,"readystatechange",t.gb),e=t.H?ky(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),us(),i_(t.j,t.u,t.A,t.m,t.X,t.s)}k.gb=function(t){t=t.target;const e=this.L;e&&Ft(t)==3?e.l():this.Ia(t)};k.Ia=function(t){try{if(t==this.g)e:{const c=Ft(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||nc||this.g&&(this.h.h||this.g.ga()||tp(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?us(3):us(2)),Ka(this);var n=this.g.ba();this.N=n;t:if(Gy(this)){var r=tp(this.g);t="";var i=r.length,s=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),$i(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,s_(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!aa(a)){var u=a;break t}}u=null}if(n=u)Nr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hc(this,n);else{this.i=!1,this.o=3,ze(12),Vn(this),$i(this);break e}}this.U?(qy(this,c,o),nc&&this.i&&c==3&&(Uy(this.V,this.W,"tick",this.fb),this.W.start())):(Nr(this.j,this.m,o,null),hc(this,o)),c==4&&Vn(this),this.i&&!this.I&&(c==4?mv(this.l,this):(this.i=!1,Os(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),Vn(this),$i(this)}}}catch{}finally{}};function Gy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function qy(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=u_(t,n),i==ua){e==4&&(t.o=4,ze(14),r=!1),Nr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==uc){t.o=4,ze(15),Nr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Nr(t.j,t.m,i,null),hc(t,i);Gy(t)&&i!=ua&&i!=uc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wh(e),e.L=!0,ze(11))):(Nr(t.j,t.m,n,"[Invalid Chunked Response]"),Vn(t),$i(t))}k.fb=function(){if(this.g){var t=Ft(this.g),e=this.g.ga();this.C<e.length&&(Ka(this),qy(this,t,e),this.i&&t!=4&&Os(this))}};function u_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ua:(n=Number(e.substring(n,r)),isNaN(n)?uc:(r+=1,r+n>e.length?ua:(e=e.substr(r,n),t.C=r+n,e)))}k.cancel=function(){this.I=!0,Vn(this)};function Os(t){t.Y=Date.now()+t.P,Qy(t,t.P)}function Qy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ds(Ne(t.eb,t),e)}function Ka(t){t.B&&(L.clearTimeout(t.B),t.B=null)}k.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(o_(this.j,this.A),this.K!=2&&(us(),ze(17)),Vn(this),this.o=2,$i(this)):Qy(this,this.Y-t)};function $i(t){t.l.G==0||t.I||mv(t.l,t)}function Vn(t){Ka(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,xh(t.W),Vy(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function hc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||dc(n.i,t))){if(n.I=t.N,!t.J&&dc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fa(n),Qa(n);else break e;Kh(n),ze(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ds(Ne(n.ab,n),6e3));if(1>=nv(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else zn(n,11)}else if((t.J||n.g==t)&&fa(n),!aa(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(Ue(y,"spdy")||Ue(y,"quic")||Ue(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(zh(s,s.h),s.h=null))}if(r.D){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.sa=S,ee(r.F,r.D,S))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vv(r,r.H?r.la:null,r.W),o.J){rv(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Ka(a),Os(a)),r.g=o}else fv(r);0<n.l.length&&Xa(n)}else u[0]!="stop"&&u[0]!="close"||zn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zn(n,7):Hh(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}us(4)}catch{}}function c_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(tc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Uh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(tc(t)||typeof t=="string")Iy(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(tc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=c_(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ii(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ii)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}k=ii.prototype;k.R=function(){Vh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};k.T=function(){return Vh(this),this.g.concat()};function Vh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ir(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ir(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}k.get=function(t,e){return ir(this.h,t)?this.h[t]:e};k.set=function(t,e){ir(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};k.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ir(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Xy=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function h_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function sr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof sr){this.g=e!==void 0?e:t.g,ca(this,t.j),this.s=t.s,ha(this,t.i),da(this,t.m),this.l=t.l,e=t.h;var n=new cs;n.i=e.i,e.g&&(n.g=new ii(e.g),n.h=e.h),Jf(this,n),this.o=t.o}else t&&(n=String(t).match(Xy))?(this.g=!!e,ca(this,n[1]||"",!0),this.s=Fi(n[2]||""),ha(this,n[3]||"",!0),da(this,n[4]),this.l=Fi(n[5]||"",!0),Jf(this,n[6]||"",!0),this.o=Fi(n[7]||"")):(this.g=!!e,this.h=new cs(null,this.g))}sr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ki(e,Zf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ki(e,Zf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ki(n,n.charAt(0)=="/"?g_:m_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ki(n,v_)),t.join("")};function Kt(t){return new sr(t)}function ca(t,e,n){t.j=n?Fi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ha(t,e,n){t.i=n?Fi(e,!0):e}function da(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jf(t,e,n){e instanceof cs?(t.h=e,w_(t.h,t.g)):(n||(e=ki(e,y_)),t.h=new cs(e,t.g))}function ee(t,e,n){t.h.set(e,n)}function Wa(t){return ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function d_(t){return t instanceof sr?Kt(t):new sr(t,void 0)}function f_(t,e,n,r){var i=new sr(null,void 0);return t&&ca(i,t),e&&ha(i,e),n&&da(i,n),r&&(i.l=r),i}function Fi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ki(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,p_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function p_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zf=/[#\/\?@]/g,m_=/[#\?:]/g,g_=/[#\?]/g,y_=/[#\?@]/g,v_=/#/g;function cs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rn(t){t.g||(t.g=new ii,t.h=0,t.i&&h_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=cs.prototype;k.add=function(t,e){Rn(this),this.i=null,t=si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yy(t,e){Rn(t),e=si(t,e),ir(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ir(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Vh(t)))}function Jy(t,e){return Rn(t),e=si(t,e),ir(t.g.h,e)}k.forEach=function(t,e){Rn(this),this.g.forEach(function(n,r){Iy(n,function(i){t.call(e,i,r,this)},this)},this)};k.T=function(){Rn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};k.R=function(t){Rn(this);var e=[];if(typeof t=="string")Jy(this,t)&&(e=bf(e,this.g.get(si(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=bf(e,t[n])}return e};k.set=function(t,e){return Rn(this),this.i=null,t=si(this,t),Jy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Zy(t,e,n){Yy(t,e),0<n.length&&(t.i=null,t.g.set(si(t,e),Ih(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function w_(t,e){e&&!t.j&&(Rn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Yy(this,r),Zy(this,i,n))},t)),t.j=e}var E_=class{constructor(t,e){this.h=t,this.g=e}};function ev(t){this.l=t||S_,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ea&&L.g.Ea()&&L.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var S_=10;function tv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function nv(t){return t.h?1:t.g?t.g.size:0}function dc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zh(t,e){t.g?t.g.add(e):t.h=e}function rv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ev.prototype.cancel=function(){if(this.i=iv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function iv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ih(t.i)}function Bh(){}Bh.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};Bh.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function __(){this.g=new Bh}function T_(t,e,n){const r=n||"";try{Uh(t,function(i,s){let o=i;Ns(i)&&(o=Ph(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function I_(t,e){const n=new Ba;if(L.Image){const r=new Image;r.onload=lo(co,n,r,"TestLoadImage: loaded",!0,e),r.onerror=lo(co,n,r,"TestLoadImage: error",!1,e),r.onabort=lo(co,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=lo(co,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function co(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function xs(t){this.l=t.$b||null,this.j=t.ib||!1}Pe(xs,Mh);xs.prototype.g=function(){return new Ga(this.l,this.j)};xs.prototype.i=function(t){return function(){return t}}({});function Ga(t,e){Se.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=jh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(Ga,Se);var jh=0;k=Ga.prototype;k.open=function(t,e){if(this.readyState!=jh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hs(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=jh};k.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sv(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function sv(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}k.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ls(this):hs(this),this.readyState==3&&sv(this)}};k.Ua=function(t){this.g&&(this.response=this.responseText=t,Ls(this))};k.Ta=function(t){this.g&&(this.response=t,Ls(this))};k.ha=function(){this.g&&Ls(this)};function Ls(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hs(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var k_=L.JSON.parse;function de(t){Se.call(this),this.headers=new ii,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ov,this.K=this.L=!1}Pe(de,Se);var ov="",C_=/^https?$/i,N_=["POST","PUT"];k=de.prototype;k.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lc.g(),this.C=this.u?Yf(this.u):Yf(lc),this.g.onreadystatechange=Ne(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){ep(this,s);return}t=n||"";const i=new ii(this.headers);r&&Uh(r,function(s,o){i.set(o,s)}),r=US(i.T()),n=L.FormData&&t instanceof L.FormData,!(0<=Ty(N_,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{uv(this),0<this.B&&((this.K=A_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ne(this.pa,this)):this.A=Lh(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ep(this,s)}};function A_(t){return Gr&&bS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function D_(t){return t.toLowerCase()=="content-type"}k.pa=function(){typeof Th<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function ep(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,av(t),qa(t)}function av(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),qa(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qa(this,!0)),de.Z.M.call(this)};k.Fa=function(){this.s||(this.F||this.v||this.l?lv(this):this.cb())};k.cb=function(){lv(this)};function lv(t){if(t.h&&typeof Th<"u"&&(!t.C[1]||Ft(t)!=4||t.ba()!=2)){if(t.v&&Ft(t)==4)Lh(t.Fa,0,t);else if(Ae(t,"readystatechange"),Ft(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Xy)[1]||null;if(!i&&L.self&&L.self.location){var s=L.self.location.protocol;i=s.substr(0,s.length-1)}r=!C_.test(i?i.toLowerCase():"")}n=r}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<Ft(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",av(t)}}finally{qa(t)}}}}function qa(t,e){if(t.g){uv(t);const n=t.g,r=t.C[0]?oa:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=r}catch{}}}function uv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function Ft(t){return t.g?t.g.readyState:0}k.ba=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}};k.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),k_(e)}};function tp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ov:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Da=function(){return this.m};k.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function R_(t){let e="";return kh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=R_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ee(t,e,n))}function Ei(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cv(t){this.za=0,this.l=[],this.h=new Ba,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ei("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ei("baseRetryDelayMs",5e3,t),this.$a=Ei("retryDelaySeedMs",1e4,t),this.Ya=Ei("forwardChannelMaxRetries",2,t),this.ra=Ei("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ev(t&&t.concurrentRequestLimit),this.Ca=new __,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}k=cv.prototype;k.ma=8;k.G=1;function Hh(t){if(hv(t),t.G==3){var e=t.V++,n=Kt(t.F);ee(n,"SID",t.J),ee(n,"RID",e),ee(n,"TYPE","terminate"),Ms(t,n),e=new Ps(t,t.h,e,void 0),e.K=2,e.v=Wa(Kt(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=wv(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Os(e)}yv(t)}k.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Qa(t){t.g&&(Wh(t),t.g.cancel(),t.g=null)}function hv(t){Qa(t),t.u&&(L.clearTimeout(t.u),t.u=null),fa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function Yl(t,e){t.l.push(new E_(t.Za++,e)),t.G==3&&Xa(t)}function Xa(t){tv(t.i)||t.m||(t.m=!0,Oh(t.Ha,t),t.C=0)}function P_(t,e){return nv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ds(Ne(t.Ha,t,e),gv(t,t.C)),t.C++,!0)}k.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ps(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=ky(s),Cy(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dv(this,i,e),n=Kt(this.F),ee(n,"RID",t),ee(n,"CVER",22),this.D&&ee(n,"X-HTTP-Session-Id",this.D),Ms(this,n),this.o&&s&&bh(n,this.o,s),zh(this.i,i),this.Ra&&ee(n,"TYPE","init"),this.ja?(ee(n,"$req",e),ee(n,"SID","null"),i.$=!0,cc(i,n,null)):cc(i,n,e),this.G=2}}else this.G==3&&(t?np(this,t):this.l.length==0||tv(this.i)||np(this))};function np(t,e){var n;e?n=e.m:n=t.V++;const r=Kt(t.F);ee(r,"SID",t.J),ee(r,"RID",n),ee(r,"AID",t.U),Ms(t,r),t.o&&t.s&&bh(r,t.o,t.s),n=new Ps(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=dv(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),zh(t.i,n),cc(n,r,e)}function Ms(t,e){t.j&&Uh({},function(n,r){ee(e,r,n)})}function dv(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ne(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{T_(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function fv(t){t.g||t.u||(t.Y=1,Oh(t.Ga,t),t.A=0)}function Kh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ds(Ne(t.Ga,t),gv(t,t.A)),t.A++,!0)}k.Ga=function(){if(this.u=null,pv(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ds(Ne(this.bb,this),t)}};k.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ze(10),Qa(this),pv(this))};function Wh(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function pv(t){t.g=new Ps(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Kt(t.oa);ee(e,"RID","rpc"),ee(e,"SID",t.J),ee(e,"CI",t.N?"0":"1"),ee(e,"AID",t.U),Ms(t,e),ee(e,"TYPE","xmlhttp"),t.o&&t.s&&bh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Wa(Kt(e)),n.s=null,n.U=!0,Wy(n,t)}k.ab=function(){this.v!=null&&(this.v=null,Qa(this),Kh(this),ze(19))};function fa(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function mv(t,e){var n=null;if(t.g==e){fa(t),Wh(t),t.g=null;var r=2}else if(dc(t.i,e))n=e.D,rv(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ja(),Ae(r,new jy(r,n)),Xa(t)}else fv(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&P_(t,e)||r==2&&Kh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zn(t,5);break;case 4:zn(t,10);break;case 3:zn(t,6);break;default:zn(t,2)}}}function gv(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function zn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ne(t.jb,t);n||(n=new sr("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||ca(n,"https"),Wa(n)),I_(n.toString(),r)}else ze(2);t.G=0,t.j&&t.j.va(e),yv(t),hv(t)}k.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ze(2)):(this.h.info("Failed to ping google.com"),ze(1))};function yv(t){t.G=0,t.I=-1,t.j&&((iv(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ih(t.l),t.l.length=0),t.j.ua())}function vv(t,e,n){let r=d_(n);if(r.i!="")e&&ha(r,e+"."+r.i),da(r,r.m);else{const i=L.location;r=f_(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&kh(t.aa,function(i,s){ee(r,s,i)}),e=t.D,n=t.sa,e&&n&&ee(r,e,n),ee(r,"VER",t.ma),Ms(t,r),r}function wv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new de(new xs({ib:!0})):new de(t.qa),e.L=t.H,e}function Ev(){}k=Ev.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Oa=function(){};function pa(){if(Gr&&!(10<=Number(HS)))throw Error("Environmental error: no available transport.")}pa.prototype.g=function(t,e){return new rt(t,e)};function rt(t,e){Se.call(this),this.g=new cv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!aa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!aa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new oi(this)}Pe(rt,Se);rt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Oh(Ne(t.hb,t,e))),ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vv(t,null,t.W),Xa(t)};rt.prototype.close=function(){Hh(this.g)};rt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Yl(this.g,e)}else this.v?(e={},e.__data__=Ph(t),Yl(this.g,e)):Yl(this.g,t)};rt.prototype.M=function(){this.g.j=null,delete this.j,Hh(this.g),delete this.g,rt.Z.M.call(this)};function Sv(t){$h.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(Sv,$h);function _v(){Fh.call(this),this.status=1}Pe(_v,Fh);function oi(t){this.g=t}Pe(oi,Ev);oi.prototype.xa=function(){Ae(this.g,"a")};oi.prototype.wa=function(t){Ae(this.g,new Sv(t))};oi.prototype.va=function(t){Ae(this.g,new _v)};oi.prototype.ua=function(){Ae(this.g,"b")};pa.prototype.createWebChannel=pa.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;ba.NO_ERROR=0;ba.TIMEOUT=8;ba.HTTP_ERROR=6;by.COMPLETE="complete";Hy.EventType=Rs;Rs.OPEN="a";Rs.CLOSE="b";Rs.ERROR="c";Rs.MESSAGE="d";Se.prototype.listen=Se.prototype.N;de.prototype.listenOnce=de.prototype.O;de.prototype.getLastError=de.prototype.La;de.prototype.getLastErrorCode=de.prototype.Da;de.prototype.getStatus=de.prototype.ba;de.prototype.getResponseJson=de.prototype.Qa;de.prototype.getResponseText=de.prototype.ga;de.prototype.send=de.prototype.ea;var O_=function(){return new pa},x_=function(){return ja()},Jl=ba,L_=by,M_=dr,rp={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},$_=xs,ho=Hy,F_=de;const ip="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Eh("@firebase/firestore");function sp(){return or.logLevel}function R(t,...e){if(or.logLevel<=W.DEBUG){const n=e.map(Gh);or.debug(`Firestore (${ai}): ${t}`,...n)}}function Wt(t,...e){if(or.logLevel<=W.ERROR){const n=e.map(Gh);or.error(`Firestore (${ai}): ${t}`,...n)}}function op(t,...e){if(or.logLevel<=W.WARN){const n=e.map(Gh);or.warn(`Firestore (${ai}): ${t}`,...n)}}function Gh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${ai}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function he(t,e){t||z()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class z_{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new U_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new He(e)}}class B_{constructor(e,n,r){this.type="FirstParty",this.user=He.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class j_{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new B_(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H_{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.p=n.token,new b_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=K_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function G(t,e){return t<e?-1:t>e?1:0}function qr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new Je(0,0))}static max(){return new V(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ds.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ds?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends ds{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const W_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends ds{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return W_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(te.fromString(e))}static fromName(e){return new P(te.fromString(e).popFirst(5))}static empty(){return new P(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new te(e.slice()))}}function G_(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Tn(i,P.empty(),e)}function q_(t){return new Tn(t.readTime,t.key,-1)}class Tn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tn(V.min(),P.empty(),-1)}static max(){return new Tn(V.max(),P.empty(),-1)}}function Q_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qh(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==X_)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ya(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function J_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qh.ot=-1;class _e{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ie.RED,this.left=i!=null?i:Ie.EMPTY,this.right=s!=null?s:Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ie(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lp(this.data.getIterator())}getIteratorFrom(e){return new lp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class lp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Wn([])}unionWith(e){let n=new me(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Re(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Z_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(t){if(he(!!t),typeof t=="string"){let e=0;const n=Z_.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(t.seconds),nanos:ue(t.nanos)}}function ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kv(t){const e=t.mapValue.fields.__previous_value__;return Iv(e)?kv(e):e}function fs(t){const e=In(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Xr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return t==null}function fc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Iv(t)?4:tT(t)?9007199254740991:10:z()}function Rt(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fs(t).isEqual(fs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=In(r.timestampValue),o=In(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Qr(r.bytesValue).isEqual(Qr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ue(r.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(r.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ue(r.integerValue)===ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ue(r.doubleValue),o=ue(i.doubleValue);return s===o?fc(s)===fc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return qr(t.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(ap(s)!==ap(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rt(s[a],o[a])))return!1;return!0}(t,e);default:return z()}}function ps(t,e){return(t.values||[]).find(n=>Rt(n,e))!==void 0}function Yr(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ue(i.integerValue||i.doubleValue),a=ue(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return up(t.timestampValue,e.timestampValue);case 4:return up(fs(t),fs(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Qr(i),a=Qr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=G(o[l],a[l]);if(u!==0)return u}return G(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=G(ue(i.latitude),ue(s.latitude));return o!==0?o:G(ue(i.longitude),ue(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Yr(o[l],a[l]);if(u)return u}return G(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===po.mapValue&&s===po.mapValue)return 0;if(i===po.mapValue)return 1;if(s===po.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=G(a[c],u[c]);if(h!==0)return h;const f=Yr(o[a[c]],l[u[c]]);if(f!==0)return f}return G(a.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function up(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=In(t),r=In(e),i=G(n.seconds,r.seconds);return i!==0?i:G(n.nanos,r.nanos)}function Mr(t){return pc(t)}function pc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=In(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Qr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=pc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${pc(r.fields[a])}`;return s+"}"}(t.mapValue):z();var e,n}function mc(t){return!!t&&"integerValue"in t}function Xh(t){return!!t&&"arrayValue"in t}function cp(t){return!!t&&"nullValue"in t}function hp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zl(t){return!!t&&"mapValue"in t}function Ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ya(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ui(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ui(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Zl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Zl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ya(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Ui(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ke(e,0,V.min(),V.min(),It.empty(),0)}static newFoundDocument(e,n,r){return new ke(e,1,n,V.min(),r,0)}static newNoDocument(e,n){return new ke(e,2,n,V.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,V.min(),It.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function dp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nT(t,e,n,r,i,s,o)}function Yh(t){const e=K(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Mr(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mr(r)).join(",")),e.ut=n}return e.ut}function rT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Mr(r.value)}`;var r}).join(", ")}]`),Ja(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Mr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Mr(n)).join(",")),`Target(${e})`}function Jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!hT(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Rt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pp(t.startAt,e.startAt)&&pp(t.endAt,e.endAt)}function gc(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class qe extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new iT(e,n,r):n==="array-contains"?new aT(e,r):n==="in"?new lT(e,r):n==="not-in"?new uT(e,r):n==="array-contains-any"?new cT(e,r):new qe(e,n,r)}static ct(e,n,r){return n==="in"?new sT(e,r):new oT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Yr(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.at(Yr(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class iT extends qe{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.at(n)}}class sT extends qe{constructor(e,n){super(e,"in",n),this.keys=Cv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oT extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Cv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class aT extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xh(n)&&ps(n.arrayValue,this.value)}}class lT extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ps(this.value.arrayValue,n)}}class uT extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ps(this.value.arrayValue,n)}}class cT extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ps(this.value.arrayValue,r))}}class ma{constructor(e,n){this.position=e,this.inclusive=n}}class Vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function hT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function fp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=Yr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function pp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function dT(t,e,n,r,i,s,o,a){return new Za(t,e,n,r,i,s,o,a)}function Zh(t){return new Za(t)}function mp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pT(t){for(const e of t.filters)if(e.ht())return e.field;return null}function mT(t){return t.collectionGroup!==null}function ms(t){const e=K(t);if(e.lt===null){e.lt=[];const n=pT(e),r=fT(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Vi(n)),e.lt.push(new Vi(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Vi(We.keyField(),s))}}}return e.lt}function Gt(t){const e=K(t);if(!e.ft)if(e.limitType==="F")e.ft=dp(e.path,e.collectionGroup,ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ms(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Vi(s.field,o))}const r=e.endAt?new ma(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ma(e.startAt.position,e.startAt.inclusive):null;e.ft=dp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function yc(t,e,n){return new Za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function el(t,e){return Jh(Gt(t),Gt(e))&&t.limitType===e.limitType}function Nv(t){return`${Yh(Gt(t))}|lt:${t.limitType}`}function vc(t){return`Query(target=${rT(Gt(t))}; limitType=${t.limitType})`}function ed(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=fp(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ms(n),r)||n.endAt&&!function(i,s,o){const a=fp(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ms(n),r))}(t,e)}function gT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Av(t){return(e,n)=>{let r=!1;for(const i of ms(t)){const s=yT(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yT(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Yr(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function wT(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this._=void 0}}function ET(t,e,n){return t instanceof wc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ga?Dv(t,e):t instanceof ya?Rv(t,e):function(r,i){const s=_T(r,i),o=gp(s)+gp(r._t);return mc(s)&&mc(r._t)?wT(o):vT(r.wt,o)}(t,e)}function ST(t,e,n){return t instanceof ga?Dv(t,e):t instanceof ya?Rv(t,e):n}function _T(t,e){return t instanceof Ec?mc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class wc extends tl{}class ga extends tl{constructor(e){super(),this.elements=e}}function Dv(t,e){const n=Pv(e);for(const r of t.elements)n.some(i=>Rt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ya extends tl{constructor(e){super(),this.elements=e}}function Rv(t,e){let n=Pv(e);for(const r of t.elements)n=n.filter(i=>!Rt(i,r));return{arrayValue:{values:n}}}class Ec extends tl{constructor(e,n){super(),this.wt=e,this._t=n}}function gp(t){return ue(t.integerValue||t.doubleValue)}function Pv(t){return Xh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ga&&r instanceof ga||n instanceof ya&&r instanceof ya?qr(n.elements,r.elements,Rt):n instanceof Ec&&r instanceof Ec?Rt(n._t,r._t):n instanceof wc&&r instanceof wc}(t.transform,e.transform)}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class td{}function Ov(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kT(t.key,Gn.none()):new nd(t.key,t.data,Gn.none());{const n=t.data,r=It.empty();let i=new me(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new nl(t.key,r,new Wn(i.toArray()),Gn.none())}}function IT(t,e,n){t instanceof nd?function(r,i,s){const o=r.value.clone(),a=vp(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof nl?function(r,i,s){if(!Ao(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=vp(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(xv(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,r){return t instanceof nd?function(i,s,o,a){if(!Ao(i.precondition,s))return o;const l=i.value.clone(),u=wp(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof nl?function(i,s,o,a){if(!Ao(i.precondition,s))return o;const l=wp(i.fieldTransforms,a,s),u=s.data;return u.setAll(xv(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ao(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function yp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&qr(n,r,(i,s)=>TT(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nd extends td{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nl extends td{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vp(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ST(o,a,n[i]))}return r}function wp(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ET(s,o,e))}return r}class kT extends td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,j;function Lv(t){if(t===void 0)return Wt("GRPC error has no .code"),_.UNKNOWN;switch(t){case le.OK:return _.OK;case le.CANCELLED:return _.CANCELLED;case le.UNKNOWN:return _.UNKNOWN;case le.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case le.INTERNAL:return _.INTERNAL;case le.UNAVAILABLE:return _.UNAVAILABLE;case le.UNAUTHENTICATED:return _.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case le.NOT_FOUND:return _.NOT_FOUND;case le.ALREADY_EXISTS:return _.ALREADY_EXISTS;case le.PERMISSION_DENIED:return _.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case le.ABORTED:return _.ABORTED;case le.OUT_OF_RANGE:return _.OUT_OF_RANGE;case le.UNIMPLEMENTED:return _.UNIMPLEMENTED;case le.DATA_LOSS:return _.DATA_LOSS;default:return z()}}(j=le||(le={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ya(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return J_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new _e(P.comparator);function kn(){return NT}const Mv=new _e(P.comparator);function Ci(...t){let e=Mv;for(const n of t)e=e.insert(n.key,n);return e}function AT(t){let e=Mv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Bn(){return Bi()}function $v(){return Bi()}function Bi(){return new li(t=>t.toString(),(t,e)=>t.isEqual(e))}new _e(P.comparator);const DT=new me(P.comparator);function b(...t){let e=DT;for(const n of t)e=e.add(n);return e}const RT=new me(G);function Fv(){return RT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Fs.createSynthesizedTargetChangeForCurrentChange(e,n)),new rl(V.min(),r,Fv(),kn(),b())}}class Fs{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Fs(Re.EMPTY_BYTE_STRING,n,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class Uv{constructor(e,n){this.targetId=e,this.It=n}}class Vv{constructor(e,n,r=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ep{constructor(){this.Tt=0,this.Et=_p(),this.At=Re.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=b(),n=b(),r=b();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Fs(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=_p()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class PT{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=kn(),this.Bt=Sp(),this.Lt=new me(G)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(gc(s))if(r===0){const o=new P(s.path);this.Kt(n,o,ke.newNoDocument(o,V.min()))}else he(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&gc(a.target)){const l=new P(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,ke.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=b();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ht(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new rl(e,n,this.Lt,this.$t,r);return this.$t=kn(),this.Bt=Sp(),this.Lt=new me(G),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Ep,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new me(G),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Ep),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function Sp(){return new _e(P.comparator)}function _p(){return new _e(P.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class LT{constructor(e,n){this.databaseId=e,this.dt=n}}function MT(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $T(t,e){return t.dt?e.toBase64():e.toUint8Array()}function gs(t){return he(!!t),V.fromTimestamp(function(e){const n=In(e);return new Je(n.seconds,n.nanos)}(t))}function FT(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zv(t){const e=te.fromString(t);return he(bv(e)),e}function eu(t,e){const n=zv(e);if(n.get(1)!==t.databaseId.projectId)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(Bv(n))}function Sc(t,e){return FT(t.databaseId,e)}function UT(t){const e=zv(t);return e.length===4?te.emptyPath():Bv(e)}function Tp(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bv(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function VT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.dt?(he(u===void 0||typeof u=="string"),Re.fromBase64String(u||"")):(he(u===void 0||u instanceof Uint8Array),Re.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:Lv(l.code);return new x(u,l.message||"")}(o);n=new Vv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=eu(t,r.document.name),s=gs(r.document.updateTime),o=new It({mapValue:{fields:r.document.fields}}),a=ke.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Do(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=eu(t,r.document),s=r.readTime?gs(r.readTime):V.min(),o=ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Do([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=eu(t,r.document),s=r.removedTargetIds||[];n=new Do([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new CT(i),o=r.targetId;n=new Uv(o,s)}}return n}function zT(t,e){return{documents:[Sc(t,e.path)]}}function BT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Sc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(hp(h.value))return{unaryFilter:{field:pr(h.field),op:"IS_NAN"}};if(cp(h.value))return{unaryFilter:{field:pr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(hp(h.value))return{unaryFilter:{field:pr(h.field),op:"IS_NOT_NAN"}};if(cp(h.value))return{unaryFilter:{field:pr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pr(h.field),op:KT(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:pr(c.field),direction:HT(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.dt||Ja(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function jT(t){let e=UT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=jv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Vi(Ar(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ja(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new ma(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new ma(f,h)}(n.endAt)),dT(e,i,o,s,a,"F",l,u)}function bT(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function jv(t){return t?t.unaryFilter!==void 0?[GT(t)]:t.fieldFilter!==void 0?[WT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>jv(e)).reduce((e,n)=>e.concat(n)):z():[]}function HT(t){return OT[t]}function KT(t){return xT[t]}function pr(t){return{fieldPath:t.canonicalString()}}function Ar(t){return We.fromServerFormat(t.fieldPath)}function WT(t){return qe.create(Ar(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function GT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ar(t.unaryFilter.field);return qe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ar(t.unaryFilter.field);return qe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ar(t.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ar(t.unaryFilter.field);return qe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function bv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&IT(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$v();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Ov(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),b())}isEqual(e){return this.batchId===e.batchId&&qr(this.mutations,e.mutations,(n,r)=>yp(n,r))&&qr(this.baseMutations,e.baseMutations,(n,r)=>yp(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,i,s=V.min(),o=V.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.ne=e}}function YT(t){const e=jT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.ze=new ZT}addToCollectionParentIndex(e,n){return this.ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Tn.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class ZT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new me(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new me(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Jr(0)}static Rn(){return new Jr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.changes=new li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&zi(r.mutation,i,Wn.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,b()).next(()=>r))}getLocalViewOfDocuments(e,n,r=b()){const i=Bn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ci();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Bn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,b()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=kn();const o=Bi(),a=Bi();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof nl)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),zi(c.mutation,u,c.mutation.getFieldMask(),Je.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new tI(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Bi();let i=new _e((o,a)=>o-a),s=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Wn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||b()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=$v();c.forEach(f=>{if(!s.has(f)){const g=Ov(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(Bn());let a=-1,l=s;return o.next(u=>E.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?E.resolve():this.getBaseDocument(e,c,h).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,b())).next(c=>({batchId:a,changes:AT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=Ci();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ci();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(u,c){return new Za(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,ke.newInvalidDocument(u)))});let o=Ci();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&zi(u.mutation,l,Wn.empty(),Je.now()),ed(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):E.resolve(ke.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return E.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:gs(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:YT(r.bundledQuery),readTime:gs(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.overlays=new _e(P.comparator),this.Xn=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Bn();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=Bn(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Bn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Bn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return E.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new QT(n,r));let s=this.Xn.get(n);s===void 0&&(s=b(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.Zn=new me(ye.ts),this.es=new me(ye.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new ye(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new ye(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new P(new te([])),r=new ye(n,e),i=new ye(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new P(new te([])),r=new ye(n,e),i=new ye(n,e+1);let s=b();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ye(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ye{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return P.comparator(e.key,n.key)||G(e.ls,n.ls)}static ns(e,n){return G(e.ls,n.ls)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new me(ye.ts)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qT(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ye(n,0),i=new ye(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new me(G);return n.forEach(i=>{const s=new ye(i,0),o=new ye(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),E.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new ye(new P(s),0);let a=new me(G);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ls)),!0)},o),E.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return E.forEach(n.mutations,i=>{const s=new ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new ye(n,0),i=this.ds.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.ps=e,this.docs=new _e(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ke.newInvalidDocument(i))}),E.resolve(r)}getAllFromCollection(e,n,r){let i=kn();const s=new P(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Q_(q_(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,r,i){z()}Is(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aI(this)}getSize(e){return E.resolve(this.size)}}class aI extends eI{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.persistence=e,this.Ts=new li(n=>Yh(n),Jh),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Es=0,this.As=new rd,this.targetCount=0,this.Rs=Jr.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),E.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Jr(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.vn(n),E.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Qh(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new lI(this),this.indexManager=new JT,this.remoteDocumentCache=function(r){return new oI(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new XT(n),this.Ds=new rI(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new sI(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new cI(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return E.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class cI extends Y_{constructor(e){super(),this.currentSequenceNumber=e}}class id{constructor(e){this.persistence=e,this.ks=new rd,this.Ms=null}static Os(e){return new id(e)}get Fs(){if(this.Ms)return this.Ms;throw z()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),E.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Fs,r=>{const i=P.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return E.or([()=>E.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=b(),i=b();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(mp(n))return E.resolve(null);let r=Gt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yc(n,null,"F"),r=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=b(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ki(n,a);return this.Mi(n,u,o,l.readTime)?this.Ci(e,yc(n,null,"F")):this.Oi(e,u,n,l)}))})))}xi(e,n,r,i){return mp(n)||i.isEqual(V.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(sp()<=W.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vc(n)),this.Oi(e,o,n,G_(i,-1)))})}ki(e,n){let r=new me(Av(e));return n.forEach((i,s)=>{ed(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return sp()<=W.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",vc(n)),this.Di.getDocumentsMatchingQuery(e,n,Tn.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new _e(G),this.Bi=new li(s=>Yh(s),Jh),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nI(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function fI(t,e,n,r){return new dI(t,e,n,r)}async function Hv(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=b();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function Kv(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function pI(t,e){const n=K(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Re.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,S,O){return y.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(f,g,c)&&a.push(n.Vs.updateTargetData(s,g))});let l=kn(),u=b();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(mI(s,o,e.documentUpdates).next(c=>{l=c.Gi,u=c.Qi})),!r.isEqual(V.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.$i=i,s))}function mI(t,e,n){let r=b(),i=b();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(V.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function gI(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new qn(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function _c(t,e,n){const r=K(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$s(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Ip(t,e,n){const r=K(t);let i=V.min(),s=b();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=K(a),h=c.Bi.get(u);return h!==void 0?E.resolve(c.$i.get(h)):c.Vs.getTargetData(l,u)}(r,o,Gt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:b())).next(a=>(yI(r,gT(e),a),{documents:a,ji:s})))}function yI(t,e,n){let r=V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class kp{constructor(){this.activeTargetIds=Fv()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vI{constructor(){this.Fr=new kp,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new kp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);R("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>(R("RestConnection","Received: ",l),l),l=>{throw op("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ai,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=EI[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new F_;a.listenOnce(L_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Jl.NO_ERROR:const u=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Jl.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new x(_.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const c=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(h.status);o(new x(f,h.message))}else o(new x(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(_.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=O_(),o=x_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $_({})),this.uo(a.initMessageHeaders,n,r),fy()||my()||fE()||gy()||pE()||py()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");R("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const f=new SI({jr:y=>{h?R("Connection","Not sending because WebChannel is closed:",y):(c||(R("Connection","Opening WebChannel transport."),u.open(),c=!0),R("Connection","WebChannel sending:",y),u.send(y))},Wr:()=>u.close()}),g=(y,S,O)=>{y.listen(S,p=>{try{O(p)}catch(d){setTimeout(()=>{throw d},0)}})};return g(u,ho.EventType.OPEN,()=>{h||R("Connection","WebChannel transport opened.")}),g(u,ho.EventType.CLOSE,()=>{h||(h=!0,R("Connection","WebChannel transport closed"),f.eo())}),g(u,ho.EventType.ERROR,y=>{h||(h=!0,op("Connection","WebChannel transport errored:",y),f.eo(new x(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,ho.EventType.MESSAGE,y=>{var S;if(!h){const O=y.data[0];he(!!O);const p=O,d=p.error||((S=p[0])===null||S===void 0?void 0:S.error);if(d){R("Connection","WebChannel received error:",d);const m=d.status;let v=function(N){const A=le[N];if(A!==void 0)return Lv(A)}(m),T=d.message;v===void 0&&(v=_.INTERNAL,T="Unknown error status: "+m+" with message "+d.message),h=!0,f.eo(new x(v,T)),u.close()}else R("Connection","WebChannel received:",O),f.no(O)}}),g(o,M_.STAT_EVENT,y=>{y.stat===rp.PROXY?R("Connection","Detected buffering proxy"):y.stat===rp.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function tu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t){return new LT(t,!0)}class Gv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Gv(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new x(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class II extends TI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=VT(this.wt,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?gs(s.readTime):V.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Tp(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=gc(a)?{documents:zT(i,a)}:{query:BT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=$T(i,s.resumeToken):s.snapshotVersion.compareTo(V.min())>0&&(o.readTime=MT(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=bT(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Tp(this.wt),n.removeTarget=e,this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(_.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(_.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class CI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Wt(n),this.su=!1):R("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{Vs(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=K(a);l.lu.add(4),await Us(l),l._u.set("Unknown"),l.lu.delete(4),await il(l)}(this))})}),this._u=new CI(r,i)}}async function il(t){if(Vs(t))for(const e of t.fu)await e(!0)}async function Us(t){for(const e of t.fu)await e(!1)}function qv(t,e){const n=K(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),ld(n)?ad(n):ui(n).Co()&&od(n,e))}function Qv(t,e){const n=K(t),r=ui(n);n.hu.delete(e),r.Co()&&Xv(n,e),n.hu.size===0&&(r.Co()?r.ko():Vs(n)&&n._u.set("Unknown"))}function od(t,e){t.wu.Nt(e.targetId),ui(t).Qo(e)}function Xv(t,e){t.wu.Nt(e),ui(t).jo(e)}function ad(t){t.wu=new PT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),ui(t).start(),t._u.iu()}function ld(t){return Vs(t)&&!ui(t).Do()&&t.hu.size>0}function Vs(t){return K(t).lu.size===0}function Yv(t){t.wu=void 0}async function AI(t){t.hu.forEach((e,n)=>{od(t,e)})}async function DI(t,e){Yv(t),ld(t)?(t._u.uu(e),ad(t)):t._u.set("Unknown")}async function RI(t,e,n){if(t._u.set("Online"),e instanceof Vv&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Np(t,r)}else if(e instanceof Do?t.wu.Ut(e):e instanceof Uv?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(V.min()))try{const r=await Kv(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(l);u&&i.hu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(Re.EMPTY_BYTE_STRING,l.snapshotVersion)),Xv(i,a);const u=new qn(l.target,a,1,l.sequenceNumber);od(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Np(t,r)}}async function Np(t,e,n){if(!$s(e))throw e;t.lu.add(1),await Us(t),t._u.set("Offline"),n||(n=()=>Kv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await il(t)})}async function Ap(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Vs(n);n.lu.add(3),await Us(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await il(n)}async function PI(t,e){const n=K(t);e?(n.lu.delete(2),await il(n)):e||(n.lu.add(2),await Us(n),n._u.set("Unknown"))}function ui(t){return t.mu||(t.mu=function(e,n,r){const i=K(e);return i.tu(),new II(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:AI.bind(null,t),Jr:DI.bind(null,t),Go:RI.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),ld(t)?ad(t):t._u.set("Unknown")):(await t.mu.stop(),Yv(t))})),t.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ud(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jv(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),$s(t))return new x(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=Ci(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new $r(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $r)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.yu=new _e(P.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):z():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zr{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Zr(e,n,$r.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&el(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.Iu=void 0,this.listeners=[]}}class xI{constructor(){this.queries=new li(e=>Nv(e),el),this.onlineState="Unknown",this.Tu=new Set}}async function LI(t,e){const n=K(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new OI),i)try{s.Iu=await n.onListen(r)}catch(o){const a=Jv(o,`Initialization of query '${vc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&cd(n)}async function MI(t,e){const n=K(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $I(t,e){const n=K(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&cd(n)}function FI(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function cd(t){t.Tu.forEach(e=>{e.next()})}class UI{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.key=e}}class e0{constructor(e){this.key=e}}class VI{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=b(),this.mutatedKeys=b(),this.Lu=Av(e),this.Uu=new $r(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new Dp,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=ed(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;f&&g?f.data.isEqual(g.data)?y!==S&&(r.track({type:3,doc:g}),O=!0):this.Qu(f,g)||(r.track({type:2,doc:g}),O=!0,(l&&this.Lu(g,l)>0||u&&this.Lu(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),O=!0):f&&!g&&(r.track({type:1,doc:f}),O=!0,(l||u)&&(a=!0)),O&&(g?(o=o.add(g),s=S?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((u,c)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return g(h)-g(f)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new Zr(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Dp,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=b(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new e0(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new Zv(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=b();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Zr.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class zI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BI{constructor(e){this.key=e,this.Xu=!1}}class jI{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new li(a=>Nv(a),el),this.ec=new Map,this.nc=new Set,this.sc=new _e(P.comparator),this.ic=new Map,this.rc=new rd,this.oc={},this.uc=new Map,this.cc=Jr.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function bI(t,e){const n=XI(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await gI(n.localStore,Gt(e));n.isPrimaryClient&&qv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await HI(n,e,r,a==="current")}return i}async function HI(t,e,n,r){t.hc=(c,h,f)=>async function(g,y,S,O){let p=y.view.Ku(S);p.Mi&&(p=await Ip(g.localStore,y.query,!1).then(({documents:v})=>y.view.Ku(v,p)));const d=O&&O.targetChanges.get(y.targetId),m=y.view.applyChanges(p,g.isPrimaryClient,d);return Pp(g,y.targetId,m.zu),m.snapshot}(t,c,h,f);const i=await Ip(t.localStore,e,!0),s=new VI(e,i.ji),o=s.Ku(i.documents),a=Fs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Pp(t,n,l.zu);const u=new zI(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function KI(t,e){const n=K(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!el(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _c(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Qv(n.remoteStore,r.targetId),Tc(n,r.targetId)}).catch(qh)):(Tc(n,r.targetId),await _c(n.localStore,r.targetId,!0))}async function t0(t,e){const n=K(t);try{const r=await pI(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?he(o.Xu):i.removedDocuments.size>0&&(he(o.Xu),o.Xu=!1))}),await r0(n,r,e)}catch(r){await qh(r)}}function Rp(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=K(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Eu(o)&&(l=!0)}),l&&cd(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WI(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new _e(P.comparator);o=o.insert(s,ke.newNoDocument(s,V.min()));const a=b().add(s),l=new rl(V.min(),new Map,new me(G),o,a);await t0(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),hd(r)}else await _c(r.localStore,e,!1).then(()=>Tc(r,e,n)).catch(qh)}function Tc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||n0(t,r)})}function n0(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Qv(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),hd(t))}function Pp(t,e,n){for(const r of n)r instanceof Zv?(t.rc.addReference(r.key,e),GI(t,r)):r instanceof e0?(R("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||n0(t,r.key)):z()}function GI(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.nc.add(r),hd(t))}function hd(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new P(te.fromString(e)),r=t.cc.next();t.ic.set(r,new BI(n)),t.sc=t.sc.insert(n,r),qv(t.remoteStore,new qn(Gt(Zh(n.path)),r,2,Qh.ot))}}async function r0(t,e,n){const r=K(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=sd.Vi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const u=K(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>E.forEach(l,h=>E.forEach(h.Pi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>E.forEach(h.vi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!$s(c))throw c;R("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.$i.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.$i=u.$i.insert(h,y)}}}(r.localStore,s))}async function qI(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await Hv(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new x(_.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await r0(n,r.Ki)}}function QI(t,e){const n=K(t),r=n.ic.get(e);if(r&&r.Xu)return b().add(r.key);{let i=b();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function XI(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=t0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WI.bind(null,e),e.Zu.Go=$I.bind(null,e.eventManager),e.Zu.lc=FI.bind(null,e.eventManager),e}class YI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Wv(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return fI(this.persistence,new hI,e.initialUser,this.wt)}_c(e){return new uI(id.Os,this.wt)}dc(e){return new vI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qI.bind(null,this.syncEngine),await PI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new xI}createDatastore(e){const n=Wv(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new _I(i));var i;return function(s,o,a,l){return new kI(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Rp(this.syncEngine,a,0),o=Cp.V()?new Cp:new wI,new NI(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new jI(r,i,s,o,a,l);return u&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=K(e);R("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Us(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=Tv.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tk(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Hv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function nk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rk(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Ap(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Ap(e.remoteStore,s)),t.onlineComponents=e}async function rk(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await tk(t,new YI)),t.offlineComponents}async function ik(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await nk(t,new JI)),t.onlineComponents}async function sk(t){const e=await ik(t),n=e.eventManager;return n.onListen=bI.bind(null,e.syncEngine),n.onUnlisten=KI.bind(null,e.syncEngine),n}function ok(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new ZI({next:h=>{s.enqueueAndForget(()=>MI(i,c));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new x(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new x(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new UI(Zh(o.path),u,{includeMetadataChanges:!0,Du:!0});return LI(i,c)}(await sk(t),t.asyncQueue,e,n,r)),r.promise}const Op=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t,e,n){if(!n)throw new x(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ak(t,e,n,r){if(e===!0&&r===!0)throw new x(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xp(t){if(!P.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lp(t){if(P.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Mp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lk(t);throw new x(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ak("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $p({}),this._settingsFrozen=!1,e instanceof Xr?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new x(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xr(i.options.projectId)}(e))}get app(){if(!this._app)throw new x(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $p(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new V_;switch(n.type){case"gapi":const r=n.client;return he(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new j_(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new x(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Op.get(e);n&&(R("ComponentProvider","Removing Datastore"),Op.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class fd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fd(this.firestore,e,this._query)}}class En extends fd{constructor(e,n,r){super(e,n,Zh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new P(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function uk(t,e,...n){if(t=hr(t),i0("collection","path",e),t instanceof dd){const r=te.fromString(e,...n);return Lp(r),new En(t,null,r)}{if(!(t instanceof Nt||t instanceof En))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return Lp(r),new En(t.firestore,null,r)}}function ck(t,e,...n){if(t=hr(t),arguments.length===1&&(e=Tv.I()),i0("doc","path",e),t instanceof dd){const r=te.fromString(e,...n);return xp(r),new Nt(t,null,new P(r))}{if(!(t instanceof Nt||t instanceof En))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return xp(r),new Nt(t.firestore,t instanceof En?t.converter:null,new P(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Gv(this,"async_queue_retry"),this.Kc=()=>{const n=tu();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=tu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=tu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Kn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!$s(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=ud.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&z()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class s0 extends dd{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new hk,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||o0(this),this._firestoreClient.terminate()}}function dk(t=Ey()){return _h(t,"firestore").getImmediate()}function fk(t){return t._firestoreClient||o0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function o0(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new eT(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ek(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this._byteString=e}static fromBase64String(e){try{return new va(Re.fromBase64String(e))}catch(n){throw new x(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new va(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}const mk=new RegExp("[~\\*/\\[\\]]");function gk(t,e,n){if(e.search(mk)>=0)throw Fp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new a0(...e.split("."))._internalPath}catch{throw Fp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fp(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(_.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(u0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yk extends l0{data(){return super.data()}}function u0(t,e){return typeof e=="string"?gk(t,e):e instanceof a0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class c0 extends l0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wk(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(u0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wk extends c0{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const r={};return Ya(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new pk(ue(e.latitude),ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const n=In(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);he(bv(r));const i=new Xr(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||Wt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){t=Mp(t,Nt);const e=Mp(t.firestore,s0);return ok(fk(e),t._key).then(n=>Tk(e,t,n))}class _k extends Ek{constructor(e){super(),this.firestore=e}convertBytes(e){return new va(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Tk(t,e,n){const r=n.docs.get(e._key),i=new _k(t);return new c0(t,i,e._key,r,new vk(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ai=n})(Cs),Wr(new tr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new s0(i,new z_(n.getProvider("auth-internal")),new H_(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),wn(ip,"3.4.14",t),wn(ip,"3.4.14","esm2017")})();function pd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function h0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ik=h0,d0=new Is("auth","Firebase",h0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new Eh("@firebase/auth");function Ro(t,...e){Up.logLevel<=W.ERROR&&Up.error(`Auth (${Cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,...e){throw md(t,...e)}function At(t,...e){return md(t,...e)}function f0(t,e,n){const r=Object.assign(Object.assign({},Ik()),{[e]:n});return new Is("auth","Firebase",r).create(e,{appName:t.name})}function kk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Pt(t,"argument-error"),f0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function md(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return d0.create(t,...e)}function M(t,e,...n){if(!t)throw md(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function qt(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new Map;function Vt(t){qt(t instanceof Function,"Expected a class definition");let e=Vp.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t,e){const n=_h(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ia(s,e!=null?e:{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function Nk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ak(){return zp()==="http:"||zp()==="https:"}function zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ak()||py()||"connection"in navigator)?navigator.onLine:!0}function Rk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=fy()||my()}get(){return Dk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=new zs(3e4,6e4);function xk(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sl(t,e,n,r,i={}){return m0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ks(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),p0.fetch()(g0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function m0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Pk),e);try{const i=new Mk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw mo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw f0(t,c,u);Pt(t,c)}}catch(i){if(i instanceof Xt)throw i;Pt(t,"network-request-failed")}}async function Lk(t,e,n,r,i={}){const s=await sl(t,e,n,r,i);return"mfaPendingCredential"in s&&Pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function g0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gd(t.config,i):`${t.config.apiScheme}://${i}`}class Mk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),Ok.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e){return sl(t,"POST","/v1/accounts:delete",e)}async function Fk(t,e){return sl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uk(t,e=!1){const n=hr(t),r=await n.getIdToken(e),i=yd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ji(nu(i.auth_time)),issuedAtTime:ji(nu(i.iat)),expirationTime:ji(nu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nu(t){return Number(t)*1e3}function yd(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=hE(r);return s?JSON.parse(s):(Ro("Failed to decode base64 JWT payload"),null)}catch(s){return Ro("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Vk(t){const e=yd(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&zk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ys(t,Fk(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Hk(s.providerUserInfo):[],a=bk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new y0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function jk(t){const e=hr(t);await wa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Hk(t){return t.map(e=>{var{providerId:n}=e,r=pd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e){const n=await m0(t,{},async()=>{const r=ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=g0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",p0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Kk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vs;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new y0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ys(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Uk(this,e)}reload(){return jk(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ys(this,$k(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:T,providerData:N,stsTokenManager:A}=n;M(m&&A,e,"internal-error");const D=vs.fromJSON(this.name,A);M(typeof m=="string",e,"internal-error"),Jt(h,e.name),Jt(f,e.name),M(typeof v=="boolean",e,"internal-error"),M(typeof T=="boolean",e,"internal-error"),Jt(g,e.name),Jt(y,e.name),Jt(S,e.name),Jt(O,e.name),Jt(p,e.name),Jt(d,e.name);const X=new Qn({uid:m,auth:e,email:f,emailVerified:v,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:S,stsTokenManager:D,createdAt:p,lastLoginAt:d});return N&&Array.isArray(N)&&(X.providerData=N.map(U=>Object.assign({},U))),O&&(X._redirectEventId=O),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new vs;i.updateFromServerResponse(n);const s=new Qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wa(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v0.type="NONE";const Bp=v0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Po(this.userKey,i.apiKey,s),this.fullPersistenceKey=Po("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(Vt(Bp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Vt(Bp);const o=Po(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Qn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Fr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Fr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T0(e))return"Blackberry";if(I0(e))return"Webos";if(vd(e))return"Safari";if((e.includes("chrome/")||E0(e))&&!e.includes("edge/"))return"Chrome";if(_0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function w0(t=Ee()){return/firefox\//i.test(t)}function vd(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E0(t=Ee()){return/crios\//i.test(t)}function S0(t=Ee()){return/iemobile/i.test(t)}function _0(t=Ee()){return/android/i.test(t)}function T0(t=Ee()){return/blackberry/i.test(t)}function I0(t=Ee()){return/webos/i.test(t)}function ol(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Wk(t=Ee()){var e;return ol(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gk(){return gy()&&document.documentMode===10}function k0(t=Ee()){return ol(t)||_0(t)||I0(t)||T0(t)||/windows phone/i.test(t)||S0(t)}function qk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e=[]){let n;switch(t){case"Browser":n=jp(Ee());break;case"Worker":n=`${jp(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bp(this),this.idTokenSubscription=new bp(this),this.beforeStateQueue=new Qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await wa(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?hr(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function wd(t){return hr(t)}class bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=SE(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(t,e){return Lk(t,"POST","/v1/accounts:signInWithIdp",xk(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="http://localhost";class lr extends N0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ur(e,n)}buildRequest(){const e={requestUri:Yk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ks(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Bs{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Bs{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Bs{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qn._fromIdTokenResponse(e,r,i),o=Hp(r);return new ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hp(r);return new ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ea(e,n,r,i)}}function A0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(t,s,e,r):s})}async function Jk(t,e,n=!1){const r=await ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await ys(t,A0(i,s,e,t),n);M(o.idToken,i,"internal-error");const a=yd(o.idToken);M(a,i,"internal-error");const{sub:l}=a;return M(t.uid===l,i,"user-mismatch"),ei._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Pt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e,n=!1){const r="signIn",i=await A0(t,r,e),s=await ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function tC(t){return hr(t).signOut()}const Sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){const t=Ee();return vd(t)||ol(t)}const rC=1e3,iC=10;class R0 extends D0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nC()&&qk(),this.fallbackToPolling=k0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Gk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}R0.type="LOCAL";const sC=R0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0 extends D0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P0.type="SESSION";const O0=P0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new al(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await oC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}al.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Sd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function lC(t){Dt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function uC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hC(){return x0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="firebaseLocalStorageDb",dC=1,_a="firebaseLocalStorage",M0="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ll(t,e){return t.transaction([_a],e?"readwrite":"readonly").objectStore(_a)}function fC(){const t=indexedDB.deleteDatabase(L0);return new js(t).toPromise()}function kc(){const t=indexedDB.open(L0,dC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_a,{keyPath:M0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_a)?e(r):(r.close(),await fC(),e(await kc()))})})}async function Kp(t,e,n){const r=ll(t,!0).put({[M0]:e,value:n});return new js(r).toPromise()}async function pC(t,e){const n=ll(t,!1).get(e),r=await new js(n).toPromise();return r===void 0?null:r.value}function Wp(t,e){const n=ll(t,!0).delete(e);return new js(n).toPromise()}const mC=800,gC=3;class $0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=al._getInstance(hC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uC(),!this.activeServiceWorker)return;this.sender=new aC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kc();return await Kp(e,Sa,"1"),await Wp(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ll(i,!1).getAll();return new js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$0.type="LOCAL";const yC=$0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vC().appendChild(r)})}function EC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e){return e?Vt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends N0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SC(t){return eC(t.auth,new _d(t),t.bypassAuthState)}function _C(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Zk(n,new _d(t),t.bypassAuthState)}async function TC(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Jk(n,new _d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SC;case"linkViaPopup":case"linkViaRedirect":return TC;case"reauthViaPopup":case"reauthViaRedirect":return _C;default:Pt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new zs(2e3,1e4);async function kC(t,e,n){const r=wd(t);kk(t,e,Ed);const i=F0(r,n);return new jn(r,"signInViaPopup",e,i).executeNotNull()}class jn extends U0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,IC.get())};e()}}jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="pendingRedirect",Oo=new Map;class NC extends U0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await AC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AC(t,e){const n=PC(e),r=RC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DC(t,e){Oo.set(t._key(),e)}function RC(t){return Vt(t._redirectPersistence)}function PC(t){return Po(CC,t.config.apiKey,t.name)}async function OC(t,e,n=!1){const r=wd(t),i=F0(r,e),o=await new NC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=10*60*1e3;class LC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!V0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gp(e))}saveEventToCache(e){this.cachedEventUids.add(Gp(e)),this.lastProcessedEventTime=Date.now()}}function Gp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function V0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t,e={}){return sl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UC=/^https?/;async function VC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $C(t);for(const n of e)try{if(zC(n))return}catch{}Pt(t,"unauthorized-domain")}function zC(t){const e=Ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UC.test(n))return!1;if(FC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=new zs(3e4,6e4);function qp(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jC(t){return new Promise((e,n)=>{var r,i,s;function o(){qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qp(),n(At(t,"network-request-failed"))},timeout:BC.get()})}if(!((i=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dt().gapi)===null||s===void 0)&&s.load)o();else{const a=EC("iframefcb");return Dt()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},wC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xo=null,e})}let xo=null;function bC(t){return xo=xo||jC(t),xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new zs(5e3,15e3),KC="__/auth/iframe",WC="emulator/auth/iframe",GC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QC(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gd(e,WC):`https://${t.config.authDomain}/${KC}`,r={apiKey:e.apiKey,appName:t.name,v:Cs},i=qC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ks(r).slice(1)}`}async function XC(t){const e=await bC(t),n=Dt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:QC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=Dt().setTimeout(()=>{s(o)},HC.get());function l(){Dt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JC=500,ZC=600,eN="_blank",tN="http://localhost";class Qp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nN(t,e,n,r=JC,i=ZC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=E0(u)?eN:n),w0(u)&&(e=e||tN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(Wk(u)&&a!=="_self")return rN(e||"",a),new Qp(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Qp(h)}function rN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="__/auth/handler",sN="emulator/auth/handler";function Xp(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cs,eventId:i};if(e instanceof Ed){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Bs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${oN(t)}?${ks(a).slice(1)}`}function oN({config:t}){return t.emulator?gd(t,sN):`https://${t.authDomain}/${iN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="webStorageSupport";class aN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O0,this._completeRedirectFn=OC,this._overrideRedirectResult=DC}async _openPopup(e,n,r,i){var s;qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Xp(e,n,r,Ic(),i);return nN(e,o,Sd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),lC(Xp(e,n,r,Ic(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XC(e),r=new LC(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ru,{type:ru},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ru];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return k0()||vd()||ol()}}const lN=aN;var Yp="@firebase/auth",Jp="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hN(t){Wr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C0(t)},c=new Xk(a,l,u);return Nk(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new tr("auth-internal",e=>{const n=wd(e.getProvider("auth").getImmediate());return(r=>new uN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Yp,Jp,cN(t)),wn(Yp,Jp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t=Ey()){const e=_h(t,"auth");return e.isInitialized()?e.getImmediate():Ck(t,{popupRedirectResolver:lN,persistence:[yC,sC,O0]})}hN("Browser");const fN={apiKey:"AIzaSyDk2vxlMwCdqr1LjvQtkD_MJuP6BAQiQkk",authDomain:"test-build-3dab3.firebaseapp.com",projectId:"test-build-3dab3",storageBucket:"test-build-3dab3.appspot.com",messagingSenderId:"419889330911",appId:"1:419889330911:web:6eb69f04ce03b3f740876a"},z0=ES(fN),Zp=dk(z0),em=dN(z0),pN=new Lt;var Td={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mN=an.exports,gN=Symbol.for("react.element"),yN=Symbol.for("react.fragment"),vN=Object.prototype.hasOwnProperty,wN=mN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EN={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vN.call(e,r)&&!EN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gN,type:t,key:s,ref:o,props:i,_owner:wN.current}}ul.Fragment=yN;ul.jsx=B0;ul.jsxs=B0;(function(t){t.exports=ul})(Td);const pt=Td.exports.jsx,SN=Td.exports.jsxs;function _N(){const[t,e]=an.exports.useState([]),[n,r]=an.exports.useState(""),[i,s]=an.exports.useState(""),o=h=>{r(h.target.value)},a=()=>{t.push(n),r("")},l=t.map(h=>pt("p",{className:"number",children:`${h}, `},lE()));console.log(n);const u=()=>{console.log("Sign In"),kC(em,pN).then(h=>{const f=h.user;s(f.displayName),console.log(`Signed in as: ${f.displayName}`)}).catch(h=>{h.code,h.message,h.customData.email})},c=()=>{tC(em).then(()=>{console.log("Signed Out"),s("")})};return an.exports.useEffect(()=>{async function h(){uk(Zp,"numbers");const f=ck(Zp,"numbers","number"),g=await Sk(f);g.exists()?console.log(`My data, yo: ${g.data()}`):console.log("No such document, yo!")}h()}),SN("div",{className:"App",children:[i.length>0&&pt("p",{children:`Signed in: ${i}`}),i.length===0&&pt("button",{onClick:u,children:"Sign in"}),i.length>0&&pt("button",{onClick:c,children:"Sign out"}),pt("h1",{children:"Hello World"}),pt("h2",{children:"Here are some numbers:"}),pt("div",{children:l}),pt("input",{type:"number",name:"number",id:"number",placeholder:"Number",onChange:o,value:n}),pt("button",{type:"submit",onClick:a,children:"Submit"})]})}iu.createRoot(document.getElementById("root")).render(pt(sw.StrictMode,{children:pt(_N,{})}));
