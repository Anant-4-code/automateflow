(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var Zd={exports:{}},wa={},Qd={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function n1(){if(A0)return xt;A0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function m(V){return V===null||typeof V!="object"?null:(V=v&&V[v]||V["@@iterator"],typeof V=="function"?V:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(V,Q,Le){this.props=V,this.context=Q,this.refs=w,this.updater=Le||_}y.prototype.isReactComponent={},y.prototype.setState=function(V,Q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Q,"setState")},y.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function S(){}S.prototype=y.prototype;function b(V,Q,Le){this.props=V,this.context=Q,this.refs=w,this.updater=Le||_}var D=b.prototype=new S;D.constructor=b,E(D,y.prototype),D.isPureReactComponent=!0;var P=Array.isArray,O=Object.prototype.hasOwnProperty,L={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function M(V,Q,Le){var Be,Ie={},le=null,me=null;if(Q!=null)for(Be in Q.ref!==void 0&&(me=Q.ref),Q.key!==void 0&&(le=""+Q.key),Q)O.call(Q,Be)&&!U.hasOwnProperty(Be)&&(Ie[Be]=Q[Be]);var de=arguments.length-2;if(de===1)Ie.children=Le;else if(1<de){for(var Ne=Array(de),je=0;je<de;je++)Ne[je]=arguments[je+2];Ie.children=Ne}if(V&&V.defaultProps)for(Be in de=V.defaultProps,de)Ie[Be]===void 0&&(Ie[Be]=de[Be]);return{$$typeof:n,type:V,key:le,ref:me,props:Ie,_owner:L.current}}function N(V,Q){return{$$typeof:n,type:V.type,key:Q,ref:V.ref,props:V.props,_owner:V._owner}}function B(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function F(V){var Q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Le){return Q[Le]})}var W=/\/+/g;function J(V,Q){return typeof V=="object"&&V!==null&&V.key!=null?F(""+V.key):Q.toString(36)}function se(V,Q,Le,Be,Ie){var le=typeof V;(le==="undefined"||le==="boolean")&&(V=null);var me=!1;if(V===null)me=!0;else switch(le){case"string":case"number":me=!0;break;case"object":switch(V.$$typeof){case n:case e:me=!0}}if(me)return me=V,Ie=Ie(me),V=Be===""?"."+J(me,0):Be,P(Ie)?(Le="",V!=null&&(Le=V.replace(W,"$&/")+"/"),se(Ie,Q,Le,"",function(je){return je})):Ie!=null&&(B(Ie)&&(Ie=N(Ie,Le+(!Ie.key||me&&me.key===Ie.key?"":(""+Ie.key).replace(W,"$&/")+"/")+V)),Q.push(Ie)),1;if(me=0,Be=Be===""?".":Be+":",P(V))for(var de=0;de<V.length;de++){le=V[de];var Ne=Be+J(le,de);me+=se(le,Q,Le,Ne,Ie)}else if(Ne=m(V),typeof Ne=="function")for(V=Ne.call(V),de=0;!(le=V.next()).done;)le=le.value,Ne=Be+J(le,de++),me+=se(le,Q,Le,Ne,Ie);else if(le==="object")throw Q=String(V),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return me}function z(V,Q,Le){if(V==null)return V;var Be=[],Ie=0;return se(V,Be,"","",function(le){return Q.call(Le,le,Ie++)}),Be}function $(V){if(V._status===-1){var Q=V._result;Q=Q(),Q.then(function(Le){(V._status===0||V._status===-1)&&(V._status=1,V._result=Le)},function(Le){(V._status===0||V._status===-1)&&(V._status=2,V._result=Le)}),V._status===-1&&(V._status=0,V._result=Q)}if(V._status===1)return V._result.default;throw V._result}var j={current:null},X={transition:null},te={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:X,ReactCurrentOwner:L};function oe(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:z,forEach:function(V,Q,Le){z(V,function(){Q.apply(this,arguments)},Le)},count:function(V){var Q=0;return z(V,function(){Q++}),Q},toArray:function(V){return z(V,function(Q){return Q})||[]},only:function(V){if(!B(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},xt.Component=y,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=b,xt.StrictMode=r,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,xt.act=oe,xt.cloneElement=function(V,Q,Le){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Be=E({},V.props),Ie=V.key,le=V.ref,me=V._owner;if(Q!=null){if(Q.ref!==void 0&&(le=Q.ref,me=L.current),Q.key!==void 0&&(Ie=""+Q.key),V.type&&V.type.defaultProps)var de=V.type.defaultProps;for(Ne in Q)O.call(Q,Ne)&&!U.hasOwnProperty(Ne)&&(Be[Ne]=Q[Ne]===void 0&&de!==void 0?de[Ne]:Q[Ne])}var Ne=arguments.length-2;if(Ne===1)Be.children=Le;else if(1<Ne){de=Array(Ne);for(var je=0;je<Ne;je++)de[je]=arguments[je+2];Be.children=de}return{$$typeof:n,type:V.type,key:Ie,ref:le,props:Be,_owner:me}},xt.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},xt.createElement=M,xt.createFactory=function(V){var Q=M.bind(null,V);return Q.type=V,Q},xt.createRef=function(){return{current:null}},xt.forwardRef=function(V){return{$$typeof:d,render:V}},xt.isValidElement=B,xt.lazy=function(V){return{$$typeof:g,_payload:{_status:-1,_result:V},_init:$}},xt.memo=function(V,Q){return{$$typeof:f,type:V,compare:Q===void 0?null:Q}},xt.startTransition=function(V){var Q=X.transition;X.transition={};try{V()}finally{X.transition=Q}},xt.unstable_act=oe,xt.useCallback=function(V,Q){return j.current.useCallback(V,Q)},xt.useContext=function(V){return j.current.useContext(V)},xt.useDebugValue=function(){},xt.useDeferredValue=function(V){return j.current.useDeferredValue(V)},xt.useEffect=function(V,Q){return j.current.useEffect(V,Q)},xt.useId=function(){return j.current.useId()},xt.useImperativeHandle=function(V,Q,Le){return j.current.useImperativeHandle(V,Q,Le)},xt.useInsertionEffect=function(V,Q){return j.current.useInsertionEffect(V,Q)},xt.useLayoutEffect=function(V,Q){return j.current.useLayoutEffect(V,Q)},xt.useMemo=function(V,Q){return j.current.useMemo(V,Q)},xt.useReducer=function(V,Q,Le){return j.current.useReducer(V,Q,Le)},xt.useRef=function(V){return j.current.useRef(V)},xt.useState=function(V){return j.current.useState(V)},xt.useSyncExternalStore=function(V,Q,Le){return j.current.useSyncExternalStore(V,Q,Le)},xt.useTransition=function(){return j.current.useTransition()},xt.version="18.3.1",xt}var b0;function vp(){return b0||(b0=1,Qd.exports=n1()),Qd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function i1(){if(C0)return wa;C0=1;var n=vp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,f){var g,v={},m=null,_=null;f!==void 0&&(m=""+f),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(_=h.ref);for(g in h)r.call(h,g)&&!a.hasOwnProperty(g)&&(v[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:d,key:m,ref:_,props:v,_owner:o.current}}return wa.Fragment=t,wa.jsx=c,wa.jsxs=c,wa}var R0;function r1(){return R0||(R0=1,Zd.exports=i1()),Zd.exports}var C=r1(),rc={},Jd={exports:{}},Xn={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function s1(){return P0||(P0=1,(function(n){function e(X,te){var oe=X.length;X.push(te);e:for(;0<oe;){var V=oe-1>>>1,Q=X[V];if(0<o(Q,te))X[V]=te,X[oe]=Q,oe=V;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var te=X[0],oe=X.pop();if(oe!==te){X[0]=oe;e:for(var V=0,Q=X.length,Le=Q>>>1;V<Le;){var Be=2*(V+1)-1,Ie=X[Be],le=Be+1,me=X[le];if(0>o(Ie,oe))le<Q&&0>o(me,Ie)?(X[V]=me,X[le]=oe,V=le):(X[V]=Ie,X[Be]=oe,V=Be);else if(le<Q&&0>o(me,oe))X[V]=me,X[le]=oe,V=le;else break e}}return te}function o(X,te){var oe=X.sortIndex-te.sortIndex;return oe!==0?oe:X.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var h=[],f=[],g=1,v=null,m=3,_=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(X){for(var te=t(f);te!==null;){if(te.callback===null)r(f);else if(te.startTime<=X)r(f),te.sortIndex=te.expirationTime,e(h,te);else break;te=t(f)}}function P(X){if(w=!1,D(X),!E)if(t(h)!==null)E=!0,$(O);else{var te=t(f);te!==null&&j(P,te.startTime-X)}}function O(X,te){E=!1,w&&(w=!1,S(M),M=-1),_=!0;var oe=m;try{for(D(te),v=t(h);v!==null&&(!(v.expirationTime>te)||X&&!F());){var V=v.callback;if(typeof V=="function"){v.callback=null,m=v.priorityLevel;var Q=V(v.expirationTime<=te);te=n.unstable_now(),typeof Q=="function"?v.callback=Q:v===t(h)&&r(h),D(te)}else r(h);v=t(h)}if(v!==null)var Le=!0;else{var Be=t(f);Be!==null&&j(P,Be.startTime-te),Le=!1}return Le}finally{v=null,m=oe,_=!1}}var L=!1,U=null,M=-1,N=5,B=-1;function F(){return!(n.unstable_now()-B<N)}function W(){if(U!==null){var X=n.unstable_now();B=X;var te=!0;try{te=U(!0,X)}finally{te?J():(L=!1,U=null)}}else L=!1}var J;if(typeof b=="function")J=function(){b(W)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,z=se.port2;se.port1.onmessage=W,J=function(){z.postMessage(null)}}else J=function(){y(W,0)};function $(X){U=X,L||(L=!0,J())}function j(X,te){M=y(function(){X(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){E||_||(E=!0,$(O))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(X){switch(m){case 1:case 2:case 3:var te=3;break;default:te=m}var oe=m;m=te;try{return X()}finally{m=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,te){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var oe=m;m=X;try{return te()}finally{m=oe}},n.unstable_scheduleCallback=function(X,te,oe){var V=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?V+oe:V):oe=V,X){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,X={id:g++,callback:te,priorityLevel:X,startTime:oe,expirationTime:Q,sortIndex:-1},oe>V?(X.sortIndex=oe,e(f,X),t(h)===null&&X===t(f)&&(w?(S(M),M=-1):w=!0,j(P,oe-V))):(X.sortIndex=Q,e(h,X),E||_||(E=!0,$(O))),X},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(X){var te=m;return function(){var oe=m;m=te;try{return X.apply(this,arguments)}finally{m=oe}}}})(tf)),tf}var D0;function o1(){return D0||(D0=1,ef.exports=s1()),ef.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function a1(){if(L0)return Xn;L0=1;var n=vp(),e=o1();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function m(i){return h.call(v,i)?!0:h.call(g,i)?!1:f.test(i)?v[i]=!0:(g[i]=!0,!1)}function _(i,s,l,u){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,u){if(s===null||typeof s>"u"||_(i,s,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function w(i,s,l,u,p,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new w(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new w(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new w(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new w(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new w(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new w(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new w(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new w(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new w(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,b);y[s]=new w(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,b);y[s]=new w(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,b);y[s]=new w(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new w(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new w(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,s,l,u){var p=y.hasOwnProperty(s)?y[s]:null;(p!==null?p.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,p,u)&&(l=null),u||p===null?m(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,u=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?i.setAttributeNS(u,s,l):i.setAttribute(s,l))))}var P=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),L=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),F=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),X=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=X&&i[X]||i["@@iterator"],typeof i=="function"?i:null)}var oe=Object.assign,V;function Q(i){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+i}var Le=!1;function Be(i,s){if(!i||Le)return"";Le=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var u=ue}Reflect.construct(i,[],s)}else{try{s.call()}catch(ue){u=ue}i.call(s.prototype)}else{try{throw Error()}catch(ue){u=ue}i()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var p=ue.stack.split(`
`),x=u.stack.split(`
`),A=p.length-1,k=x.length-1;1<=A&&0<=k&&p[A]!==x[k];)k--;for(;1<=A&&0<=k;A--,k--)if(p[A]!==x[k]){if(A!==1||k!==1)do if(A--,k--,0>k||p[A]!==x[k]){var G=`
`+p[A].replace(" at new "," at ");return i.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",i.displayName)),G}while(1<=A&&0<=k);break}}}finally{Le=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Q(i):""}function Ie(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=Be(i.type,!1),i;case 11:return i=Be(i.type.render,!1),i;case 1:return i=Be(i.type,!0),i;default:return""}}function le(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case L:return"Portal";case N:return"Profiler";case M:return"StrictMode";case J:return"Suspense";case se:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case F:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case W:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case z:return s=i.displayName||null,s!==null?s:le(i.type)||"Memo";case $:s=i._payload,i=i._init;try{return le(i(s))}catch{}}return null}function me(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(s);case 8:return s===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function de(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ne(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function je(i){var s=Ne(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){u=""+A,x.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function et(i){i._valueTracker||(i._valueTracker=je(i))}function kt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),u="";return i&&(u=Ne(i)?i.checked?"true":"false":i.value),i=u,i!==l?(s.setValue(i),!0):!1}function dt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function wt(i,s){var l=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Nt(i,s){var l=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;l=de(s.value!=null?s.value:l),i._wrapperState={initialChecked:u,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ft(i,s){s=s.checked,s!=null&&D(i,"checked",s,!1)}function $t(i,s){ft(i,s);var l=de(s.value),u=s.type;if(l!=null)u==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(u==="submit"||u==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?xn(i,s.type,l):s.hasOwnProperty("defaultValue")&&xn(i,s.type,de(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Bt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function xn(i,s,l){(s!=="number"||dt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var q=Array.isArray;function Vt(i,s,l,u){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&u&&(i[l].defaultSelected=!0)}else{for(l=""+de(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,u&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function ht(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Rt(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(q(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:de(l)}}function Ue(i,s){var l=de(s.value),u=de(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),u!=null&&(i.defaultValue=""+u)}function Ht(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function I(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?I(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Z,pe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,u,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,u,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Z.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function xe(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(i){De.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ee[s]=Ee[i]})});function fe(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ee.hasOwnProperty(i)&&Ee[i]?(""+s).trim():s+"px"}function ge(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=fe(l,s[l],u);l==="float"&&(l="cssFloat"),u?i.setProperty(l,p):i[l]=p}}var Oe=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(i,s){if(s){if(Oe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function be(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function it(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ot=null,mt=null,H=null;function Ae(i){if(i=ua(i)){if(typeof ot!="function")throw Error(t(280));var s=i.stateNode;s&&(s=_l(s),ot(i.stateNode,i.type,s))}}function he(i){mt?H?H.push(i):H=[i]:mt=i}function ke(){if(mt){var i=mt,s=H;if(H=mt=null,Ae(i),s)for(i=0;i<s.length;i++)Ae(s[i])}}function Re(i,s){return i(s)}function _e(){}var Ye=!1;function at(i,s,l){if(Ye)return i(s,l);Ye=!0;try{return Re(i,s,l)}finally{Ye=!1,(mt!==null||H!==null)&&(_e(),ke())}}function Ut(i,s){var l=i.stateNode;if(l===null)return null;var u=_l(l);if(u===null)return null;l=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var At=!1;if(d)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){At=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{At=!1}function si(i,s,l,u,p,x,A,k,G){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(l,ue)}catch(Se){this.onError(Se)}}var tr=!1,Bs=null,ss=!1,Vs=null,nr={onError:function(i){tr=!0,Bs=i}};function Ho(i,s,l,u,p,x,A,k,G){tr=!1,Bs=null,si.apply(nr,arguments)}function nl(i,s,l,u,p,x,A,k,G){if(Ho.apply(this,arguments),tr){if(tr){var ue=Bs;tr=!1,Bs=null}else throw Error(t(198));ss||(ss=!0,Vs=ue)}}function Ui(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function os(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Wo(i){if(Ui(i)!==i)throw Error(t(188))}function zs(i){var s=i.alternate;if(!s){if(s=Ui(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,u=s;;){var p=l.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===l)return Wo(p),i;if(x===u)return Wo(p),s;x=x.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=x;else{for(var A=!1,k=p.child;k;){if(k===l){A=!0,l=p,u=x;break}if(k===u){A=!0,u=p,l=x;break}k=k.sibling}if(!A){for(k=x.child;k;){if(k===l){A=!0,l=x,u=p;break}if(k===u){A=!0,u=x,l=p;break}k=k.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function jo(i){return i=zs(i),i!==null?Xo(i):null}function Xo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Xo(i);if(s!==null)return s;i=i.sibling}return null}var il=e.unstable_scheduleCallback,rl=e.unstable_cancelCallback,yu=e.unstable_shouldYield,Su=e.unstable_requestPaint,Kt=e.unstable_now,Mu=e.unstable_getCurrentPriorityLevel,qo=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,K=e.unstable_NormalPriority,ce=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,Pe=null;function He(i){if(Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(ne,i,void 0,(i.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:lt,$e=Math.log,Je=Math.LN2;function lt(i){return i>>>=0,i===0?32:31-($e(i)/Je|0)|0}var ct=64,Ze=4194304;function St(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function zt(i,s){var l=i.pendingLanes;if(l===0)return 0;var u=0,p=i.suspendedLanes,x=i.pingedLanes,A=l&268435455;if(A!==0){var k=A&~p;k!==0?u=St(k):(x&=A,x!==0&&(u=St(x)))}else A=l&~p,A!==0?u=St(A):x!==0&&(u=St(x));if(u===0)return 0;if(s!==0&&s!==u&&(s&p)===0&&(p=u&-u,x=s&-s,p>=x||p===16&&(x&4194240)!==0))return s;if((u&4)!==0&&(u|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=u;0<s;)l=31-Ce(s),p=1<<l,u|=i[l],s&=~p;return u}function qt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(i,s){for(var l=i.suspendedLanes,u=i.pingedLanes,p=i.expirationTimes,x=i.pendingLanes;0<x;){var A=31-Ce(x),k=1<<A,G=p[A];G===-1?((k&l)===0||(k&u)!==0)&&(p[A]=qt(k,s)):G<=s&&(i.expiredLanes|=k),x&=~k}}function rn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ze(){var i=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),i}function _n(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function gt(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Ce(s),i[s]=l}function Bn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var u=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Ce(l),x=1<<p;s[p]=0,u[p]=-1,i[p]=-1,l&=~x}}function Vn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var u=31-Ce(l),p=1<<u;p&s|i[u]&s&&(i[u]|=s),l&=~p}}var vt=0;function ir(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ct,Wt,vi,Dt,xi,Fi=!1,as=[],Ar=null,br=null,Cr=null,Yo=new Map,$o=new Map,Rr=[],TS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cm(i,s){switch(i){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Yo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(s.pointerId)}}function Ko(i,s,l,u,p,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},s!==null&&(s=ua(s),s!==null&&Wt(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function wS(i,s,l,u,p){switch(s){case"focusin":return Ar=Ko(Ar,i,s,l,u,p),!0;case"dragenter":return br=Ko(br,i,s,l,u,p),!0;case"mouseover":return Cr=Ko(Cr,i,s,l,u,p),!0;case"pointerover":var x=p.pointerId;return Yo.set(x,Ko(Yo.get(x)||null,i,s,l,u,p)),!0;case"gotpointercapture":return x=p.pointerId,$o.set(x,Ko($o.get(x)||null,i,s,l,u,p)),!0}return!1}function um(i){var s=ls(i.target);if(s!==null){var l=Ui(s);if(l!==null){if(s=l.tag,s===13){if(s=os(l),s!==null){i.blockedOn=s,xi(i.priority,function(){vi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function sl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Tu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var u=new l.constructor(l.type,l);Te=u,l.target.dispatchEvent(u),Te=null}else return s=ua(l),s!==null&&Wt(s),i.blockedOn=l,!1;s.shift()}return!0}function dm(i,s,l){sl(i)&&l.delete(s)}function AS(){Fi=!1,Ar!==null&&sl(Ar)&&(Ar=null),br!==null&&sl(br)&&(br=null),Cr!==null&&sl(Cr)&&(Cr=null),Yo.forEach(dm),$o.forEach(dm)}function Zo(i,s){i.blockedOn===s&&(i.blockedOn=null,Fi||(Fi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,AS)))}function Qo(i){function s(p){return Zo(p,i)}if(0<as.length){Zo(as[0],i);for(var l=1;l<as.length;l++){var u=as[l];u.blockedOn===i&&(u.blockedOn=null)}}for(Ar!==null&&Zo(Ar,i),br!==null&&Zo(br,i),Cr!==null&&Zo(Cr,i),Yo.forEach(s),$o.forEach(s),l=0;l<Rr.length;l++)u=Rr[l],u.blockedOn===i&&(u.blockedOn=null);for(;0<Rr.length&&(l=Rr[0],l.blockedOn===null);)um(l),l.blockedOn===null&&Rr.shift()}var Gs=P.ReactCurrentBatchConfig,ol=!0;function bS(i,s,l,u){var p=vt,x=Gs.transition;Gs.transition=null;try{vt=1,Eu(i,s,l,u)}finally{vt=p,Gs.transition=x}}function CS(i,s,l,u){var p=vt,x=Gs.transition;Gs.transition=null;try{vt=4,Eu(i,s,l,u)}finally{vt=p,Gs.transition=x}}function Eu(i,s,l,u){if(ol){var p=Tu(i,s,l,u);if(p===null)zu(i,s,u,al,l),cm(i,u);else if(wS(p,i,s,l,u))u.stopPropagation();else if(cm(i,u),s&4&&-1<TS.indexOf(i)){for(;p!==null;){var x=ua(p);if(x!==null&&Ct(x),x=Tu(i,s,l,u),x===null&&zu(i,s,u,al,l),x===p)break;p=x}p!==null&&u.stopPropagation()}else zu(i,s,u,null,l)}}var al=null;function Tu(i,s,l,u){if(al=null,i=it(u),i=ls(i),i!==null)if(s=Ui(i),s===null)i=null;else if(l=s.tag,l===13){if(i=os(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return al=i,null}function fm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mu()){case qo:return 1;case R:return 4;case K:case ce:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Pr=null,wu=null,ll=null;function hm(){if(ll)return ll;var i,s=wu,l=s.length,u,p="value"in Pr?Pr.value:Pr.textContent,x=p.length;for(i=0;i<l&&s[i]===p[i];i++);var A=l-i;for(u=1;u<=A&&s[l-u]===p[x-u];u++);return ll=p.slice(i,1<u?1-u:void 0)}function cl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ul(){return!0}function pm(){return!1}function Kn(i){function s(l,u,p,x,A){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var k in i)i.hasOwnProperty(k)&&(l=i[k],this[k]=l?l(x):x[k]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?ul:pm,this.isPropagationStopped=pm,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),s}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=Kn(Hs),Jo=oe({},Hs,{view:0,detail:0}),RS=Kn(Jo),bu,Cu,ea,dl=oe({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ea&&(ea&&i.type==="mousemove"?(bu=i.screenX-ea.screenX,Cu=i.screenY-ea.screenY):Cu=bu=0,ea=i),bu)},movementY:function(i){return"movementY"in i?i.movementY:Cu}}),mm=Kn(dl),PS=oe({},dl,{dataTransfer:0}),DS=Kn(PS),LS=oe({},Jo,{relatedTarget:0}),Ru=Kn(LS),NS=oe({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),IS=Kn(NS),US=oe({},Hs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),FS=Kn(US),OS=oe({},Hs,{data:0}),gm=Kn(OS),kS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=VS[i])?!!s[i]:!1}function Pu(){return zS}var GS=oe({},Jo,{key:function(i){if(i.key){var s=kS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=cl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?BS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(i){return i.type==="keypress"?cl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?cl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),HS=Kn(GS),WS=oe({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=Kn(WS),jS=oe({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),XS=Kn(jS),qS=oe({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),YS=Kn(qS),$S=oe({},dl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=Kn($S),ZS=[9,13,27,32],Du=d&&"CompositionEvent"in window,ta=null;d&&"documentMode"in document&&(ta=document.documentMode);var QS=d&&"TextEvent"in window&&!ta,xm=d&&(!Du||ta&&8<ta&&11>=ta),_m=" ",ym=!1;function Sm(i,s){switch(i){case"keyup":return ZS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ws=!1;function JS(i,s){switch(i){case"compositionend":return Mm(s);case"keypress":return s.which!==32?null:(ym=!0,_m);case"textInput":return i=s.data,i===_m&&ym?null:i;default:return null}}function eM(i,s){if(Ws)return i==="compositionend"||!Du&&Sm(i,s)?(i=hm(),ll=wu=Pr=null,Ws=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return xm&&s.locale!=="ko"?null:s.data;default:return null}}var tM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!tM[i.type]:s==="textarea"}function Tm(i,s,l,u){he(u),s=gl(s,"onChange"),0<s.length&&(l=new Au("onChange","change",null,l,u),i.push({event:l,listeners:s}))}var na=null,ia=null;function nM(i){Gm(i,0)}function fl(i){var s=$s(i);if(kt(s))return i}function iM(i,s){if(i==="change")return s}var wm=!1;if(d){var Lu;if(d){var Nu="oninput"in document;if(!Nu){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),Nu=typeof Am.oninput=="function"}Lu=Nu}else Lu=!1;wm=Lu&&(!document.documentMode||9<document.documentMode)}function bm(){na&&(na.detachEvent("onpropertychange",Cm),ia=na=null)}function Cm(i){if(i.propertyName==="value"&&fl(ia)){var s=[];Tm(s,ia,i,it(i)),at(nM,s)}}function rM(i,s,l){i==="focusin"?(bm(),na=s,ia=l,na.attachEvent("onpropertychange",Cm)):i==="focusout"&&bm()}function sM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return fl(ia)}function oM(i,s){if(i==="click")return fl(s)}function aM(i,s){if(i==="input"||i==="change")return fl(s)}function lM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var _i=typeof Object.is=="function"?Object.is:lM;function ra(i,s){if(_i(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),u=Object.keys(s);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!h.call(s,p)||!_i(i[p],s[p]))return!1}return!0}function Rm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Pm(i,s){var l=Rm(i);i=0;for(var u;l;){if(l.nodeType===3){if(u=i+l.textContent.length,i<=s&&u>=s)return{node:l,offset:s-i};i=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Rm(l)}}function Dm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Dm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Lm(){for(var i=window,s=dt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=dt(i.document)}return s}function Iu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function cM(i){var s=Lm(),l=i.focusedElem,u=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Dm(l.ownerDocument.documentElement,l)){if(u!==null&&Iu(l)){if(s=u.start,i=u.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!i.extend&&x>u&&(p=u,u=x,x=p),p=Pm(l,x);var A=Pm(l,u);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),x>u?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var uM=d&&"documentMode"in document&&11>=document.documentMode,js=null,Uu=null,sa=null,Fu=!1;function Nm(i,s,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Fu||js==null||js!==dt(u)||(u=js,"selectionStart"in u&&Iu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),sa&&ra(sa,u)||(sa=u,u=gl(Uu,"onSelect"),0<u.length&&(s=new Au("onSelect","select",null,s,l),i.push({event:s,listeners:u}),s.target=js)))}function hl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Xs={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Ou={},Im={};d&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function pl(i){if(Ou[i])return Ou[i];if(!Xs[i])return i;var s=Xs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Im)return Ou[i]=s[l];return i}var Um=pl("animationend"),Fm=pl("animationiteration"),Om=pl("animationstart"),km=pl("transitionend"),Bm=new Map,Vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(i,s){Bm.set(i,s),a(s,[i])}for(var ku=0;ku<Vm.length;ku++){var Bu=Vm[ku],dM=Bu.toLowerCase(),fM=Bu[0].toUpperCase()+Bu.slice(1);Dr(dM,"on"+fM)}Dr(Um,"onAnimationEnd"),Dr(Fm,"onAnimationIteration"),Dr(Om,"onAnimationStart"),Dr("dblclick","onDoubleClick"),Dr("focusin","onFocus"),Dr("focusout","onBlur"),Dr(km,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hM=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function zm(i,s,l){var u=i.type||"unknown-event";i.currentTarget=l,nl(u,s,void 0,i),i.currentTarget=null}function Gm(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var u=i[l],p=u.event;u=u.listeners;e:{var x=void 0;if(s)for(var A=u.length-1;0<=A;A--){var k=u[A],G=k.instance,ue=k.currentTarget;if(k=k.listener,G!==x&&p.isPropagationStopped())break e;zm(p,k,ue),x=G}else for(A=0;A<u.length;A++){if(k=u[A],G=k.instance,ue=k.currentTarget,k=k.listener,G!==x&&p.isPropagationStopped())break e;zm(p,k,ue),x=G}}}if(ss)throw i=Vs,ss=!1,Vs=null,i}function jt(i,s){var l=s[qu];l===void 0&&(l=s[qu]=new Set);var u=i+"__bubble";l.has(u)||(Hm(s,i,2,!1),l.add(u))}function Vu(i,s,l){var u=0;s&&(u|=4),Hm(l,i,u,s)}var ml="_reactListening"+Math.random().toString(36).slice(2);function aa(i){if(!i[ml]){i[ml]=!0,r.forEach(function(l){l!=="selectionchange"&&(hM.has(l)||Vu(l,!1,i),Vu(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ml]||(s[ml]=!0,Vu("selectionchange",!1,s))}}function Hm(i,s,l,u){switch(fm(s)){case 1:var p=bS;break;case 4:p=CS;break;default:p=Eu}l=p.bind(null,s,l,i),p=void 0,!At||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function zu(i,s,l,u,p){var x=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var k=u.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(A===4)for(A=u.return;A!==null;){var G=A.tag;if((G===3||G===4)&&(G=A.stateNode.containerInfo,G===p||G.nodeType===8&&G.parentNode===p))return;A=A.return}for(;k!==null;){if(A=ls(k),A===null)return;if(G=A.tag,G===5||G===6){u=x=A;continue e}k=k.parentNode}}u=u.return}at(function(){var ue=x,Se=it(l),Me=[];e:{var ye=Bm.get(i);if(ye!==void 0){var Ge=Au,Xe=i;switch(i){case"keypress":if(cl(l)===0)break e;case"keydown":case"keyup":Ge=HS;break;case"focusin":Xe="focus",Ge=Ru;break;case"focusout":Xe="blur",Ge=Ru;break;case"beforeblur":case"afterblur":Ge=Ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=DS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=XS;break;case Um:case Fm:case Om:Ge=IS;break;case km:Ge=YS;break;case"scroll":Ge=RS;break;case"wheel":Ge=KS;break;case"copy":case"cut":case"paste":Ge=FS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=vm}var Ke=(s&4)!==0,tn=!Ke&&i==="scroll",ee=Ke?ye!==null?ye+"Capture":null:ye;Ke=[];for(var Y=ue,re;Y!==null;){re=Y;var we=re.stateNode;if(re.tag===5&&we!==null&&(re=we,ee!==null&&(we=Ut(Y,ee),we!=null&&Ke.push(la(Y,we,re)))),tn)break;Y=Y.return}0<Ke.length&&(ye=new Ge(ye,Xe,null,l,Se),Me.push({event:ye,listeners:Ke}))}}if((s&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",Ge=i==="mouseout"||i==="pointerout",ye&&l!==Te&&(Xe=l.relatedTarget||l.fromElement)&&(ls(Xe)||Xe[rr]))break e;if((Ge||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ge?(Xe=l.relatedTarget||l.toElement,Ge=ue,Xe=Xe?ls(Xe):null,Xe!==null&&(tn=Ui(Xe),Xe!==tn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Ge=null,Xe=ue),Ge!==Xe)){if(Ke=mm,we="onMouseLeave",ee="onMouseEnter",Y="mouse",(i==="pointerout"||i==="pointerover")&&(Ke=vm,we="onPointerLeave",ee="onPointerEnter",Y="pointer"),tn=Ge==null?ye:$s(Ge),re=Xe==null?ye:$s(Xe),ye=new Ke(we,Y+"leave",Ge,l,Se),ye.target=tn,ye.relatedTarget=re,we=null,ls(Se)===ue&&(Ke=new Ke(ee,Y+"enter",Xe,l,Se),Ke.target=re,Ke.relatedTarget=tn,we=Ke),tn=we,Ge&&Xe)t:{for(Ke=Ge,ee=Xe,Y=0,re=Ke;re;re=qs(re))Y++;for(re=0,we=ee;we;we=qs(we))re++;for(;0<Y-re;)Ke=qs(Ke),Y--;for(;0<re-Y;)ee=qs(ee),re--;for(;Y--;){if(Ke===ee||ee!==null&&Ke===ee.alternate)break t;Ke=qs(Ke),ee=qs(ee)}Ke=null}else Ke=null;Ge!==null&&Wm(Me,ye,Ge,Ke,!1),Xe!==null&&tn!==null&&Wm(Me,tn,Xe,Ke,!0)}}e:{if(ye=ue?$s(ue):window,Ge=ye.nodeName&&ye.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&ye.type==="file")var Qe=iM;else if(Em(ye))if(wm)Qe=aM;else{Qe=sM;var tt=rM}else(Ge=ye.nodeName)&&Ge.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Qe=oM);if(Qe&&(Qe=Qe(i,ue))){Tm(Me,Qe,l,Se);break e}tt&&tt(i,ye,ue),i==="focusout"&&(tt=ye._wrapperState)&&tt.controlled&&ye.type==="number"&&xn(ye,"number",ye.value)}switch(tt=ue?$s(ue):window,i){case"focusin":(Em(tt)||tt.contentEditable==="true")&&(js=tt,Uu=ue,sa=null);break;case"focusout":sa=Uu=js=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Nm(Me,l,Se);break;case"selectionchange":if(uM)break;case"keydown":case"keyup":Nm(Me,l,Se)}var nt;if(Du)e:{switch(i){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else Ws?Sm(i,l)&&(st="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(xm&&l.locale!=="ko"&&(Ws||st!=="onCompositionStart"?st==="onCompositionEnd"&&Ws&&(nt=hm()):(Pr=Se,wu="value"in Pr?Pr.value:Pr.textContent,Ws=!0)),tt=gl(ue,st),0<tt.length&&(st=new gm(st,i,null,l,Se),Me.push({event:st,listeners:tt}),nt?st.data=nt:(nt=Mm(l),nt!==null&&(st.data=nt)))),(nt=QS?JS(i,l):eM(i,l))&&(ue=gl(ue,"onBeforeInput"),0<ue.length&&(Se=new gm("onBeforeInput","beforeinput",null,l,Se),Me.push({event:Se,listeners:ue}),Se.data=nt))}Gm(Me,s)})}function la(i,s,l){return{instance:i,listener:s,currentTarget:l}}function gl(i,s){for(var l=s+"Capture",u=[];i!==null;){var p=i,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Ut(i,l),x!=null&&u.unshift(la(i,x,p)),x=Ut(i,s),x!=null&&u.push(la(i,x,p))),i=i.return}return u}function qs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Wm(i,s,l,u,p){for(var x=s._reactName,A=[];l!==null&&l!==u;){var k=l,G=k.alternate,ue=k.stateNode;if(G!==null&&G===u)break;k.tag===5&&ue!==null&&(k=ue,p?(G=Ut(l,x),G!=null&&A.unshift(la(l,G,k))):p||(G=Ut(l,x),G!=null&&A.push(la(l,G,k)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var pM=/\r\n?/g,mM=/\u0000|\uFFFD/g;function jm(i){return(typeof i=="string"?i:""+i).replace(pM,`
`).replace(mM,"")}function vl(i,s,l){if(s=jm(s),jm(i)!==s&&l)throw Error(t(425))}function xl(){}var Gu=null,Hu=null;function Wu(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,gM=typeof clearTimeout=="function"?clearTimeout:void 0,Xm=typeof Promise=="function"?Promise:void 0,vM=typeof queueMicrotask=="function"?queueMicrotask:typeof Xm<"u"?function(i){return Xm.resolve(null).then(i).catch(xM)}:ju;function xM(i){setTimeout(function(){throw i})}function Xu(i,s){var l=s,u=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){i.removeChild(p),Qo(s);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);Qo(s)}function Lr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function qm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Ys,ca="__reactProps$"+Ys,rr="__reactContainer$"+Ys,qu="__reactEvents$"+Ys,_M="__reactListeners$"+Ys,yM="__reactHandles$"+Ys;function ls(i){var s=i[Oi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[rr]||l[Oi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=qm(i);i!==null;){if(l=i[Oi])return l;i=qm(i)}return s}i=l,l=i.parentNode}return null}function ua(i){return i=i[Oi]||i[rr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function $s(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function _l(i){return i[ca]||null}var Yu=[],Ks=-1;function Nr(i){return{current:i}}function Xt(i){0>Ks||(i.current=Yu[Ks],Yu[Ks]=null,Ks--)}function Gt(i,s){Ks++,Yu[Ks]=i.current,i.current=s}var Ir={},wn=Nr(Ir),zn=Nr(!1),cs=Ir;function Zs(i,s){var l=i.type.contextTypes;if(!l)return Ir;var u=i.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in l)p[x]=s[x];return u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Gn(i){return i=i.childContextTypes,i!=null}function yl(){Xt(zn),Xt(wn)}function Ym(i,s,l){if(wn.current!==Ir)throw Error(t(168));Gt(wn,s),Gt(zn,l)}function $m(i,s,l){var u=i.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in s))throw Error(t(108,me(i)||"Unknown",p));return oe({},l,u)}function Sl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ir,cs=wn.current,Gt(wn,i),Gt(zn,zn.current),!0}function Km(i,s,l){var u=i.stateNode;if(!u)throw Error(t(169));l?(i=$m(i,s,cs),u.__reactInternalMemoizedMergedChildContext=i,Xt(zn),Xt(wn),Gt(wn,i)):Xt(zn),Gt(zn,l)}var sr=null,Ml=!1,$u=!1;function Zm(i){sr===null?sr=[i]:sr.push(i)}function SM(i){Ml=!0,Zm(i)}function Ur(){if(!$u&&sr!==null){$u=!0;var i=0,s=vt;try{var l=sr;for(vt=1;i<l.length;i++){var u=l[i];do u=u(!0);while(u!==null)}sr=null,Ml=!1}catch(p){throw sr!==null&&(sr=sr.slice(i+1)),il(qo,Ur),p}finally{vt=s,$u=!1}}return null}var Qs=[],Js=0,El=null,Tl=0,oi=[],ai=0,us=null,or=1,ar="";function ds(i,s){Qs[Js++]=Tl,Qs[Js++]=El,El=i,Tl=s}function Qm(i,s,l){oi[ai++]=or,oi[ai++]=ar,oi[ai++]=us,us=i;var u=or;i=ar;var p=32-Ce(u)-1;u&=~(1<<p),l+=1;var x=32-Ce(s)+p;if(30<x){var A=p-p%5;x=(u&(1<<A)-1).toString(32),u>>=A,p-=A,or=1<<32-Ce(s)+p|l<<p|u,ar=x+i}else or=1<<x|l<<p|u,ar=i}function Ku(i){i.return!==null&&(ds(i,1),Qm(i,1,0))}function Zu(i){for(;i===El;)El=Qs[--Js],Qs[Js]=null,Tl=Qs[--Js],Qs[Js]=null;for(;i===us;)us=oi[--ai],oi[ai]=null,ar=oi[--ai],oi[ai]=null,or=oi[--ai],oi[ai]=null}var Zn=null,Qn=null,Yt=!1,yi=null;function Jm(i,s){var l=di(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function eg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Zn=i,Qn=Lr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Zn=i,Qn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=us!==null?{id:or,overflow:ar}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=di(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Zn=i,Qn=null,!0):!1;default:return!1}}function Qu(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ju(i){if(Yt){var s=Qn;if(s){var l=s;if(!eg(i,s)){if(Qu(i))throw Error(t(418));s=Lr(l.nextSibling);var u=Zn;s&&eg(i,s)?Jm(u,l):(i.flags=i.flags&-4097|2,Yt=!1,Zn=i)}}else{if(Qu(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,Zn=i}}}function tg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Zn=i}function wl(i){if(i!==Zn)return!1;if(!Yt)return tg(i),Yt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Wu(i.type,i.memoizedProps)),s&&(s=Qn)){if(Qu(i))throw ng(),Error(t(418));for(;s;)Jm(i,s),s=Lr(s.nextSibling)}if(tg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Qn=Lr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Qn=null}}else Qn=Zn?Lr(i.stateNode.nextSibling):null;return!0}function ng(){for(var i=Qn;i;)i=Lr(i.nextSibling)}function eo(){Qn=Zn=null,Yt=!1}function ed(i){yi===null?yi=[i]:yi.push(i)}var MM=P.ReactCurrentBatchConfig;function da(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,i));var p=u,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var k=p.refs;A===null?delete k[x]:k[x]=A},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Al(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function ig(i){var s=i._init;return s(i._payload)}function rg(i){function s(ee,Y){if(i){var re=ee.deletions;re===null?(ee.deletions=[Y],ee.flags|=16):re.push(Y)}}function l(ee,Y){if(!i)return null;for(;Y!==null;)s(ee,Y),Y=Y.sibling;return null}function u(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function p(ee,Y){return ee=Hr(ee,Y),ee.index=0,ee.sibling=null,ee}function x(ee,Y,re){return ee.index=re,i?(re=ee.alternate,re!==null?(re=re.index,re<Y?(ee.flags|=2,Y):re):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function A(ee){return i&&ee.alternate===null&&(ee.flags|=2),ee}function k(ee,Y,re,we){return Y===null||Y.tag!==6?(Y=jd(re,ee.mode,we),Y.return=ee,Y):(Y=p(Y,re),Y.return=ee,Y)}function G(ee,Y,re,we){var Qe=re.type;return Qe===U?Se(ee,Y,re.props.children,we,re.key):Y!==null&&(Y.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===$&&ig(Qe)===Y.type)?(we=p(Y,re.props),we.ref=da(ee,Y,re),we.return=ee,we):(we=Kl(re.type,re.key,re.props,null,ee.mode,we),we.ref=da(ee,Y,re),we.return=ee,we)}function ue(ee,Y,re,we){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==re.containerInfo||Y.stateNode.implementation!==re.implementation?(Y=Xd(re,ee.mode,we),Y.return=ee,Y):(Y=p(Y,re.children||[]),Y.return=ee,Y)}function Se(ee,Y,re,we,Qe){return Y===null||Y.tag!==7?(Y=_s(re,ee.mode,we,Qe),Y.return=ee,Y):(Y=p(Y,re),Y.return=ee,Y)}function Me(ee,Y,re){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=jd(""+Y,ee.mode,re),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case O:return re=Kl(Y.type,Y.key,Y.props,null,ee.mode,re),re.ref=da(ee,null,Y),re.return=ee,re;case L:return Y=Xd(Y,ee.mode,re),Y.return=ee,Y;case $:var we=Y._init;return Me(ee,we(Y._payload),re)}if(q(Y)||te(Y))return Y=_s(Y,ee.mode,re,null),Y.return=ee,Y;Al(ee,Y)}return null}function ye(ee,Y,re,we){var Qe=Y!==null?Y.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Qe!==null?null:k(ee,Y,""+re,we);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case O:return re.key===Qe?G(ee,Y,re,we):null;case L:return re.key===Qe?ue(ee,Y,re,we):null;case $:return Qe=re._init,ye(ee,Y,Qe(re._payload),we)}if(q(re)||te(re))return Qe!==null?null:Se(ee,Y,re,we,null);Al(ee,re)}return null}function Ge(ee,Y,re,we,Qe){if(typeof we=="string"&&we!==""||typeof we=="number")return ee=ee.get(re)||null,k(Y,ee,""+we,Qe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case O:return ee=ee.get(we.key===null?re:we.key)||null,G(Y,ee,we,Qe);case L:return ee=ee.get(we.key===null?re:we.key)||null,ue(Y,ee,we,Qe);case $:var tt=we._init;return Ge(ee,Y,re,tt(we._payload),Qe)}if(q(we)||te(we))return ee=ee.get(re)||null,Se(Y,ee,we,Qe,null);Al(Y,we)}return null}function Xe(ee,Y,re,we){for(var Qe=null,tt=null,nt=Y,st=Y=0,gn=null;nt!==null&&st<re.length;st++){nt.index>st?(gn=nt,nt=null):gn=nt.sibling;var bt=ye(ee,nt,re[st],we);if(bt===null){nt===null&&(nt=gn);break}i&&nt&&bt.alternate===null&&s(ee,nt),Y=x(bt,Y,st),tt===null?Qe=bt:tt.sibling=bt,tt=bt,nt=gn}if(st===re.length)return l(ee,nt),Yt&&ds(ee,st),Qe;if(nt===null){for(;st<re.length;st++)nt=Me(ee,re[st],we),nt!==null&&(Y=x(nt,Y,st),tt===null?Qe=nt:tt.sibling=nt,tt=nt);return Yt&&ds(ee,st),Qe}for(nt=u(ee,nt);st<re.length;st++)gn=Ge(nt,ee,st,re[st],we),gn!==null&&(i&&gn.alternate!==null&&nt.delete(gn.key===null?st:gn.key),Y=x(gn,Y,st),tt===null?Qe=gn:tt.sibling=gn,tt=gn);return i&&nt.forEach(function(Wr){return s(ee,Wr)}),Yt&&ds(ee,st),Qe}function Ke(ee,Y,re,we){var Qe=te(re);if(typeof Qe!="function")throw Error(t(150));if(re=Qe.call(re),re==null)throw Error(t(151));for(var tt=Qe=null,nt=Y,st=Y=0,gn=null,bt=re.next();nt!==null&&!bt.done;st++,bt=re.next()){nt.index>st?(gn=nt,nt=null):gn=nt.sibling;var Wr=ye(ee,nt,bt.value,we);if(Wr===null){nt===null&&(nt=gn);break}i&&nt&&Wr.alternate===null&&s(ee,nt),Y=x(Wr,Y,st),tt===null?Qe=Wr:tt.sibling=Wr,tt=Wr,nt=gn}if(bt.done)return l(ee,nt),Yt&&ds(ee,st),Qe;if(nt===null){for(;!bt.done;st++,bt=re.next())bt=Me(ee,bt.value,we),bt!==null&&(Y=x(bt,Y,st),tt===null?Qe=bt:tt.sibling=bt,tt=bt);return Yt&&ds(ee,st),Qe}for(nt=u(ee,nt);!bt.done;st++,bt=re.next())bt=Ge(nt,ee,st,bt.value,we),bt!==null&&(i&&bt.alternate!==null&&nt.delete(bt.key===null?st:bt.key),Y=x(bt,Y,st),tt===null?Qe=bt:tt.sibling=bt,tt=bt);return i&&nt.forEach(function(t1){return s(ee,t1)}),Yt&&ds(ee,st),Qe}function tn(ee,Y,re,we){if(typeof re=="object"&&re!==null&&re.type===U&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case O:e:{for(var Qe=re.key,tt=Y;tt!==null;){if(tt.key===Qe){if(Qe=re.type,Qe===U){if(tt.tag===7){l(ee,tt.sibling),Y=p(tt,re.props.children),Y.return=ee,ee=Y;break e}}else if(tt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===$&&ig(Qe)===tt.type){l(ee,tt.sibling),Y=p(tt,re.props),Y.ref=da(ee,tt,re),Y.return=ee,ee=Y;break e}l(ee,tt);break}else s(ee,tt);tt=tt.sibling}re.type===U?(Y=_s(re.props.children,ee.mode,we,re.key),Y.return=ee,ee=Y):(we=Kl(re.type,re.key,re.props,null,ee.mode,we),we.ref=da(ee,Y,re),we.return=ee,ee=we)}return A(ee);case L:e:{for(tt=re.key;Y!==null;){if(Y.key===tt)if(Y.tag===4&&Y.stateNode.containerInfo===re.containerInfo&&Y.stateNode.implementation===re.implementation){l(ee,Y.sibling),Y=p(Y,re.children||[]),Y.return=ee,ee=Y;break e}else{l(ee,Y);break}else s(ee,Y);Y=Y.sibling}Y=Xd(re,ee.mode,we),Y.return=ee,ee=Y}return A(ee);case $:return tt=re._init,tn(ee,Y,tt(re._payload),we)}if(q(re))return Xe(ee,Y,re,we);if(te(re))return Ke(ee,Y,re,we);Al(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,Y!==null&&Y.tag===6?(l(ee,Y.sibling),Y=p(Y,re),Y.return=ee,ee=Y):(l(ee,Y),Y=jd(re,ee.mode,we),Y.return=ee,ee=Y),A(ee)):l(ee,Y)}return tn}var to=rg(!0),sg=rg(!1),bl=Nr(null),Cl=null,no=null,td=null;function nd(){td=no=Cl=null}function id(i){var s=bl.current;Xt(bl),i._currentValue=s}function rd(i,s,l){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===l)break;i=i.return}}function io(i,s){Cl=i,td=no=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Hn=!0),i.firstContext=null)}function li(i){var s=i._currentValue;if(td!==i)if(i={context:i,memoizedValue:s,next:null},no===null){if(Cl===null)throw Error(t(308));no=i,Cl.dependencies={lanes:0,firstContext:i}}else no=no.next=i;return s}var fs=null;function sd(i){fs===null?fs=[i]:fs.push(i)}function og(i,s,l,u){var p=s.interleaved;return p===null?(l.next=l,sd(s)):(l.next=p.next,p.next=l),s.interleaved=l,lr(i,u)}function lr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Fr=!1;function od(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ag(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function cr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Or(i,s,l){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,lr(i,l)}return p=u.interleaved,p===null?(s.next=s,sd(u)):(s.next=p.next,p.next=s),u.interleaved=s,lr(i,l)}function Rl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,Vn(i,l)}}function lg(i,s){var l=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?p=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?p=x=s:x=x.next=s}else p=x=s;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Pl(i,s,l,u){var p=i.updateQueue;Fr=!1;var x=p.firstBaseUpdate,A=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var G=k,ue=G.next;G.next=null,A===null?x=ue:A.next=ue,A=G;var Se=i.alternate;Se!==null&&(Se=Se.updateQueue,k=Se.lastBaseUpdate,k!==A&&(k===null?Se.firstBaseUpdate=ue:k.next=ue,Se.lastBaseUpdate=G))}if(x!==null){var Me=p.baseState;A=0,Se=ue=G=null,k=x;do{var ye=k.lane,Ge=k.eventTime;if((u&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ge,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Xe=i,Ke=k;switch(ye=s,Ge=l,Ke.tag){case 1:if(Xe=Ke.payload,typeof Xe=="function"){Me=Xe.call(Ge,Me,ye);break e}Me=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ke.payload,ye=typeof Xe=="function"?Xe.call(Ge,Me,ye):Xe,ye==null)break e;Me=oe({},Me,ye);break e;case 2:Fr=!0}}k.callback!==null&&k.lane!==0&&(i.flags|=64,ye=p.effects,ye===null?p.effects=[k]:ye.push(k))}else Ge={eventTime:Ge,lane:ye,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Se===null?(ue=Se=Ge,G=Me):Se=Se.next=Ge,A|=ye;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;ye=k,k=ye.next,ye.next=null,p.lastBaseUpdate=ye,p.shared.pending=null}}while(!0);if(Se===null&&(G=Me),p.baseState=G,p.firstBaseUpdate=ue,p.lastBaseUpdate=Se,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else x===null&&(p.shared.lanes=0);ms|=A,i.lanes=A,i.memoizedState=Me}}function cg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var u=i[s],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var fa={},ki=Nr(fa),ha=Nr(fa),pa=Nr(fa);function hs(i){if(i===fa)throw Error(t(174));return i}function ad(i,s){switch(Gt(pa,s),Gt(ha,i),Gt(ki,fa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:T(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=T(s,i)}Xt(ki),Gt(ki,s)}function ro(){Xt(ki),Xt(ha),Xt(pa)}function ug(i){hs(pa.current);var s=hs(ki.current),l=T(s,i.type);s!==l&&(Gt(ha,i),Gt(ki,l))}function ld(i){ha.current===i&&(Xt(ki),Xt(ha))}var Zt=Nr(0);function Dl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var cd=[];function ud(){for(var i=0;i<cd.length;i++)cd[i]._workInProgressVersionPrimary=null;cd.length=0}var Ll=P.ReactCurrentDispatcher,dd=P.ReactCurrentBatchConfig,ps=0,Qt=null,ln=null,pn=null,Nl=!1,ma=!1,ga=0,EM=0;function An(){throw Error(t(321))}function fd(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!_i(i[l],s[l]))return!1;return!0}function hd(i,s,l,u,p,x){if(ps=x,Qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ll.current=i===null||i.memoizedState===null?bM:CM,i=l(u,p),ma){x=0;do{if(ma=!1,ga=0,25<=x)throw Error(t(301));x+=1,pn=ln=null,s.updateQueue=null,Ll.current=RM,i=l(u,p)}while(ma)}if(Ll.current=Fl,s=ln!==null&&ln.next!==null,ps=0,pn=ln=Qt=null,Nl=!1,s)throw Error(t(300));return i}function pd(){var i=ga!==0;return ga=0,i}function Bi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Qt.memoizedState=pn=i:pn=pn.next=i,pn}function ci(){if(ln===null){var i=Qt.alternate;i=i!==null?i.memoizedState:null}else i=ln.next;var s=pn===null?Qt.memoizedState:pn.next;if(s!==null)pn=s,ln=i;else{if(i===null)throw Error(t(310));ln=i,i={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},pn===null?Qt.memoizedState=pn=i:pn=pn.next=i}return pn}function va(i,s){return typeof s=="function"?s(i):s}function md(i){var s=ci(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=ln,p=u.baseQueue,x=l.pending;if(x!==null){if(p!==null){var A=p.next;p.next=x.next,x.next=A}u.baseQueue=p=x,l.pending=null}if(p!==null){x=p.next,u=u.baseState;var k=A=null,G=null,ue=x;do{var Se=ue.lane;if((ps&Se)===Se)G!==null&&(G=G.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:i(u,ue.action);else{var Me={lane:Se,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};G===null?(k=G=Me,A=u):G=G.next=Me,Qt.lanes|=Se,ms|=Se}ue=ue.next}while(ue!==null&&ue!==x);G===null?A=u:G.next=k,_i(u,s.memoizedState)||(Hn=!0),s.memoizedState=u,s.baseState=A,s.baseQueue=G,l.lastRenderedState=u}if(i=l.interleaved,i!==null){p=i;do x=p.lane,Qt.lanes|=x,ms|=x,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function gd(i){var s=ci(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=l.dispatch,p=l.pending,x=s.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do x=i(x,A.action),A=A.next;while(A!==p);_i(x,s.memoizedState)||(Hn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,u]}function dg(){}function fg(i,s){var l=Qt,u=ci(),p=s(),x=!_i(u.memoizedState,p);if(x&&(u.memoizedState=p,Hn=!0),u=u.queue,vd(mg.bind(null,l,u,i),[i]),u.getSnapshot!==s||x||pn!==null&&pn.memoizedState.tag&1){if(l.flags|=2048,xa(9,pg.bind(null,l,u,p,s),void 0,null),mn===null)throw Error(t(349));(ps&30)!==0||hg(l,s,p)}return p}function hg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function pg(i,s,l,u){s.value=l,s.getSnapshot=u,gg(s)&&vg(i)}function mg(i,s,l){return l(function(){gg(s)&&vg(i)})}function gg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!_i(i,l)}catch{return!0}}function vg(i){var s=lr(i,1);s!==null&&Ti(s,i,1,-1)}function xg(i){var s=Bi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:i},s.queue=i,i=i.dispatch=AM.bind(null,Qt,i),[s.memoizedState,i]}function xa(i,s,l,u){return i={tag:i,create:s,destroy:l,deps:u,next:null},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(u=l.next,l.next=i,i.next=u,s.lastEffect=i)),i}function _g(){return ci().memoizedState}function Il(i,s,l,u){var p=Bi();Qt.flags|=i,p.memoizedState=xa(1|s,l,void 0,u===void 0?null:u)}function Ul(i,s,l,u){var p=ci();u=u===void 0?null:u;var x=void 0;if(ln!==null){var A=ln.memoizedState;if(x=A.destroy,u!==null&&fd(u,A.deps)){p.memoizedState=xa(s,l,x,u);return}}Qt.flags|=i,p.memoizedState=xa(1|s,l,x,u)}function yg(i,s){return Il(8390656,8,i,s)}function vd(i,s){return Ul(2048,8,i,s)}function Sg(i,s){return Ul(4,2,i,s)}function Mg(i,s){return Ul(4,4,i,s)}function Eg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Tg(i,s,l){return l=l!=null?l.concat([i]):null,Ul(4,4,Eg.bind(null,s,i),l)}function xd(){}function wg(i,s){var l=ci();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&fd(s,u[1])?u[0]:(l.memoizedState=[i,s],i)}function Ag(i,s){var l=ci();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&fd(s,u[1])?u[0]:(i=i(),l.memoizedState=[i,s],i)}function bg(i,s,l){return(ps&21)===0?(i.baseState&&(i.baseState=!1,Hn=!0),i.memoizedState=l):(_i(l,s)||(l=ze(),Qt.lanes|=l,ms|=l,i.baseState=!0),s)}function TM(i,s){var l=vt;vt=l!==0&&4>l?l:4,i(!0);var u=dd.transition;dd.transition={};try{i(!1),s()}finally{vt=l,dd.transition=u}}function Cg(){return ci().memoizedState}function wM(i,s,l){var u=zr(i);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Rg(i))Pg(s,l);else if(l=og(i,s,l,u),l!==null){var p=In();Ti(l,i,u,p),Dg(l,s,u)}}function AM(i,s,l){var u=zr(i),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Rg(i))Pg(s,p);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,k=x(A,l);if(p.hasEagerState=!0,p.eagerState=k,_i(k,A)){var G=s.interleaved;G===null?(p.next=p,sd(s)):(p.next=G.next,G.next=p),s.interleaved=p;return}}catch{}finally{}l=og(i,s,p,u),l!==null&&(p=In(),Ti(l,i,u,p),Dg(l,s,u))}}function Rg(i){var s=i.alternate;return i===Qt||s!==null&&s===Qt}function Pg(i,s){ma=Nl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Dg(i,s,l){if((l&4194240)!==0){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,Vn(i,l)}}var Fl={readContext:li,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},bM={readContext:li,useCallback:function(i,s){return Bi().memoizedState=[i,s===void 0?null:s],i},useContext:li,useEffect:yg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Il(4194308,4,Eg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Il(4194308,4,i,s)},useInsertionEffect:function(i,s){return Il(4,2,i,s)},useMemo:function(i,s){var l=Bi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var u=Bi();return s=l!==void 0?l(s):s,u.memoizedState=u.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},u.queue=i,i=i.dispatch=wM.bind(null,Qt,i),[u.memoizedState,i]},useRef:function(i){var s=Bi();return i={current:i},s.memoizedState=i},useState:xg,useDebugValue:xd,useDeferredValue:function(i){return Bi().memoizedState=i},useTransition:function(){var i=xg(!1),s=i[0];return i=TM.bind(null,i[1]),Bi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var u=Qt,p=Bi();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),mn===null)throw Error(t(349));(ps&30)!==0||hg(u,s,l)}p.memoizedState=l;var x={value:l,getSnapshot:s};return p.queue=x,yg(mg.bind(null,u,x,i),[i]),u.flags|=2048,xa(9,pg.bind(null,u,x,l,s),void 0,null),l},useId:function(){var i=Bi(),s=mn.identifierPrefix;if(Yt){var l=ar,u=or;l=(u&~(1<<32-Ce(u)-1)).toString(32)+l,s=":"+s+"R"+l,l=ga++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=EM++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},CM={readContext:li,useCallback:wg,useContext:li,useEffect:vd,useImperativeHandle:Tg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:Ag,useReducer:md,useRef:_g,useState:function(){return md(va)},useDebugValue:xd,useDeferredValue:function(i){var s=ci();return bg(s,ln.memoizedState,i)},useTransition:function(){var i=md(va)[0],s=ci().memoizedState;return[i,s]},useMutableSource:dg,useSyncExternalStore:fg,useId:Cg,unstable_isNewReconciler:!1},RM={readContext:li,useCallback:wg,useContext:li,useEffect:vd,useImperativeHandle:Tg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:Ag,useReducer:gd,useRef:_g,useState:function(){return gd(va)},useDebugValue:xd,useDeferredValue:function(i){var s=ci();return ln===null?s.memoizedState=i:bg(s,ln.memoizedState,i)},useTransition:function(){var i=gd(va)[0],s=ci().memoizedState;return[i,s]},useMutableSource:dg,useSyncExternalStore:fg,useId:Cg,unstable_isNewReconciler:!1};function Si(i,s){if(i&&i.defaultProps){s=oe({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function _d(i,s,l,u){s=i.memoizedState,l=l(u,s),l=l==null?s:oe({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Ol={isMounted:function(i){return(i=i._reactInternals)?Ui(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var u=In(),p=zr(i),x=cr(u,p);x.payload=s,l!=null&&(x.callback=l),s=Or(i,x,p),s!==null&&(Ti(s,i,p,u),Rl(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var u=In(),p=zr(i),x=cr(u,p);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Or(i,x,p),s!==null&&(Ti(s,i,p,u),Rl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=In(),u=zr(i),p=cr(l,u);p.tag=2,s!=null&&(p.callback=s),s=Or(i,p,u),s!==null&&(Ti(s,i,u,l),Rl(s,i,u))}};function Lg(i,s,l,u,p,x,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,x,A):s.prototype&&s.prototype.isPureReactComponent?!ra(l,u)||!ra(p,x):!0}function Ng(i,s,l){var u=!1,p=Ir,x=s.contextType;return typeof x=="object"&&x!==null?x=li(x):(p=Gn(s)?cs:wn.current,u=s.contextTypes,x=(u=u!=null)?Zs(i,p):Ir),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ol,i.stateNode=s,s._reactInternals=i,u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=x),s}function Ig(i,s,l,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,u),s.state!==i&&Ol.enqueueReplaceState(s,s.state,null)}function yd(i,s,l,u){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},od(i);var x=s.contextType;typeof x=="object"&&x!==null?p.context=li(x):(x=Gn(s)?cs:wn.current,p.context=Zs(i,x)),p.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(_d(i,s,x,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Ol.enqueueReplaceState(p,p.state,null),Pl(i,l,p,u),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function so(i,s){try{var l="",u=s;do l+=Ie(u),u=u.return;while(u);var p=l}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:p,digest:null}}function Sd(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Md(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var PM=typeof WeakMap=="function"?WeakMap:Map;function Ug(i,s,l){l=cr(-1,l),l.tag=3,l.payload={element:null};var u=s.value;return l.callback=function(){Wl||(Wl=!0,Od=u),Md(i,s)},l}function Fg(i,s,l){l=cr(-1,l),l.tag=3;var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var p=s.value;l.payload=function(){return u(p)},l.callback=function(){Md(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Md(i,s),typeof u!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function Og(i,s,l){var u=i.pingCache;if(u===null){u=i.pingCache=new PM;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(l)||(p.add(l),i=WM.bind(null,i,s,l),s.then(i,i))}function kg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Bg(i,s,l,u,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=cr(-1,1),s.tag=2,Or(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var DM=P.ReactCurrentOwner,Hn=!1;function Nn(i,s,l,u){s.child=i===null?sg(s,null,l,u):to(s,i.child,l,u)}function Vg(i,s,l,u,p){l=l.render;var x=s.ref;return io(s,p),u=hd(i,s,l,u,x,p),l=pd(),i!==null&&!Hn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,ur(i,s,p)):(Yt&&l&&Ku(s),s.flags|=1,Nn(i,s,u,p),s.child)}function zg(i,s,l,u,p){if(i===null){var x=l.type;return typeof x=="function"&&!Wd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,Gg(i,s,x,u,p)):(i=Kl(l.type,null,u,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&p)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:ra,l(A,u)&&i.ref===s.ref)return ur(i,s,p)}return s.flags|=1,i=Hr(x,u),i.ref=s.ref,i.return=s,s.child=i}function Gg(i,s,l,u,p){if(i!==null){var x=i.memoizedProps;if(ra(x,u)&&i.ref===s.ref)if(Hn=!1,s.pendingProps=u=x,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Hn=!0);else return s.lanes=i.lanes,ur(i,s,p)}return Ed(i,s,l,u,p)}function Hg(i,s,l){var u=s.pendingProps,p=u.children,x=i!==null?i.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(ao,Jn),Jn|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(ao,Jn),Jn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:l,Gt(ao,Jn),Jn|=u}else x!==null?(u=x.baseLanes|l,s.memoizedState=null):u=l,Gt(ao,Jn),Jn|=u;return Nn(i,s,p,l),s.child}function Wg(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Ed(i,s,l,u,p){var x=Gn(l)?cs:wn.current;return x=Zs(s,x),io(s,p),l=hd(i,s,l,u,x,p),u=pd(),i!==null&&!Hn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,ur(i,s,p)):(Yt&&u&&Ku(s),s.flags|=1,Nn(i,s,l,p),s.child)}function jg(i,s,l,u,p){if(Gn(l)){var x=!0;Sl(s)}else x=!1;if(io(s,p),s.stateNode===null)Bl(i,s),Ng(s,l,u),yd(s,l,u,p),u=!0;else if(i===null){var A=s.stateNode,k=s.memoizedProps;A.props=k;var G=A.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=li(ue):(ue=Gn(l)?cs:wn.current,ue=Zs(s,ue));var Se=l.getDerivedStateFromProps,Me=typeof Se=="function"||typeof A.getSnapshotBeforeUpdate=="function";Me||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==u||G!==ue)&&Ig(s,A,u,ue),Fr=!1;var ye=s.memoizedState;A.state=ye,Pl(s,u,A,p),G=s.memoizedState,k!==u||ye!==G||zn.current||Fr?(typeof Se=="function"&&(_d(s,l,Se,u),G=s.memoizedState),(k=Fr||Lg(s,l,k,u,ye,G,ue))?(Me||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=G),A.props=u,A.state=G,A.context=ue,u=k):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{A=s.stateNode,ag(i,s),k=s.memoizedProps,ue=s.type===s.elementType?k:Si(s.type,k),A.props=ue,Me=s.pendingProps,ye=A.context,G=l.contextType,typeof G=="object"&&G!==null?G=li(G):(G=Gn(l)?cs:wn.current,G=Zs(s,G));var Ge=l.getDerivedStateFromProps;(Se=typeof Ge=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==Me||ye!==G)&&Ig(s,A,u,G),Fr=!1,ye=s.memoizedState,A.state=ye,Pl(s,u,A,p);var Xe=s.memoizedState;k!==Me||ye!==Xe||zn.current||Fr?(typeof Ge=="function"&&(_d(s,l,Ge,u),Xe=s.memoizedState),(ue=Fr||Lg(s,l,ue,u,ye,Xe,G)||!1)?(Se||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,Xe,G),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,Xe,G)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Xe),A.props=u,A.state=Xe,A.context=G,u=ue):(typeof A.componentDidUpdate!="function"||k===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),u=!1)}return Td(i,s,l,u,x,p)}function Td(i,s,l,u,p,x){Wg(i,s);var A=(s.flags&128)!==0;if(!u&&!A)return p&&Km(s,l,!1),ur(i,s,x);u=s.stateNode,DM.current=s;var k=A&&typeof l.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,i!==null&&A?(s.child=to(s,i.child,null,x),s.child=to(s,null,k,x)):Nn(i,s,k,x),s.memoizedState=u.state,p&&Km(s,l,!0),s.child}function Xg(i){var s=i.stateNode;s.pendingContext?Ym(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Ym(i,s.context,!1),ad(i,s.containerInfo)}function qg(i,s,l,u,p){return eo(),ed(p),s.flags|=256,Nn(i,s,l,u),s.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Ad(i){return{baseLanes:i,cachePool:null,transitions:null}}function Yg(i,s,l){var u=s.pendingProps,p=Zt.current,x=!1,A=(s.flags&128)!==0,k;if((k=A)||(k=i!==null&&i.memoizedState===null?!1:(p&2)!==0),k?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Gt(Zt,p&1),i===null)return Ju(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=u.children,i=u.fallback,x?(u=s.mode,x=s.child,A={mode:"hidden",children:A},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=Zl(A,u,0,null),i=_s(i,u,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=Ad(l),s.memoizedState=wd,i):bd(s,A));if(p=i.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return LM(i,s,A,u,k,p,l);if(x){x=u.fallback,A=s.mode,p=i.child,k=p.sibling;var G={mode:"hidden",children:u.children};return(A&1)===0&&s.child!==p?(u=s.child,u.childLanes=0,u.pendingProps=G,s.deletions=null):(u=Hr(p,G),u.subtreeFlags=p.subtreeFlags&14680064),k!==null?x=Hr(k,x):(x=_s(x,A,l,null),x.flags|=2),x.return=s,u.return=s,u.sibling=x,s.child=u,u=x,x=s.child,A=i.child.memoizedState,A=A===null?Ad(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=i.childLanes&~l,s.memoizedState=wd,u}return x=i.child,i=x.sibling,u=Hr(x,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=l),u.return=s,u.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=u,s.memoizedState=null,u}function bd(i,s){return s=Zl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function kl(i,s,l,u){return u!==null&&ed(u),to(s,i.child,null,l),i=bd(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function LM(i,s,l,u,p,x,A){if(l)return s.flags&256?(s.flags&=-257,u=Sd(Error(t(422))),kl(i,s,A,u)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=u.fallback,p=s.mode,u=Zl({mode:"visible",children:u.children},p,0,null),x=_s(x,p,A,null),x.flags|=2,u.return=s,x.return=s,u.sibling=x,s.child=u,(s.mode&1)!==0&&to(s,i.child,null,A),s.child.memoizedState=Ad(A),s.memoizedState=wd,x);if((s.mode&1)===0)return kl(i,s,A,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var k=u.dgst;return u=k,x=Error(t(419)),u=Sd(x,u,void 0),kl(i,s,A,u)}if(k=(A&i.childLanes)!==0,Hn||k){if(u=mn,u!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|A))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,lr(i,p),Ti(u,i,p,-1))}return Hd(),u=Sd(Error(t(421))),kl(i,s,A,u)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=jM.bind(null,i),p._reactRetry=s,null):(i=x.treeContext,Qn=Lr(p.nextSibling),Zn=s,Yt=!0,yi=null,i!==null&&(oi[ai++]=or,oi[ai++]=ar,oi[ai++]=us,or=i.id,ar=i.overflow,us=s),s=bd(s,u.children),s.flags|=4096,s)}function $g(i,s,l){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),rd(i.return,s,l)}function Cd(i,s,l,u,p){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=l,x.tailMode=p)}function Kg(i,s,l){var u=s.pendingProps,p=u.revealOrder,x=u.tail;if(Nn(i,s,u.children,l),u=Zt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&$g(i,l,s);else if(i.tag===19)$g(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}if(Gt(Zt,u),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Dl(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Cd(s,!1,p,l,x);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Dl(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Cd(s,!0,l,null,x);break;case"together":Cd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Bl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ur(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ms|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Hr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Hr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function NM(i,s,l){switch(s.tag){case 3:Xg(s),eo();break;case 5:ug(s);break;case 1:Gn(s.type)&&Sl(s);break;case 4:ad(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,p=s.memoizedProps.value;Gt(bl,u._currentValue),u._currentValue=p;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Gt(Zt,Zt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Yg(i,s,l):(Gt(Zt,Zt.current&1),i=ur(i,s,l),i!==null?i.sibling:null);Gt(Zt,Zt.current&1);break;case 19:if(u=(l&s.childLanes)!==0,(i.flags&128)!==0){if(u)return Kg(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt(Zt,Zt.current),u)break;return null;case 22:case 23:return s.lanes=0,Hg(i,s,l)}return ur(i,s,l)}var Zg,Rd,Qg,Jg;Zg=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Rd=function(){},Qg=function(i,s,l,u){var p=i.memoizedProps;if(p!==u){i=s.stateNode,hs(ki.current);var x=null;switch(l){case"input":p=wt(i,p),u=wt(i,u),x=[];break;case"select":p=oe({},p,{value:void 0}),u=oe({},u,{value:void 0}),x=[];break;case"textarea":p=ht(i,p),u=ht(i,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(i.onclick=xl)}Ve(l,u);var A;l=null;for(ue in p)if(!u.hasOwnProperty(ue)&&p.hasOwnProperty(ue)&&p[ue]!=null)if(ue==="style"){var k=p[ue];for(A in k)k.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?x||(x=[]):(x=x||[]).push(ue,null));for(ue in u){var G=u[ue];if(k=p!=null?p[ue]:void 0,u.hasOwnProperty(ue)&&G!==k&&(G!=null||k!=null))if(ue==="style")if(k){for(A in k)!k.hasOwnProperty(A)||G&&G.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in G)G.hasOwnProperty(A)&&k[A]!==G[A]&&(l||(l={}),l[A]=G[A])}else l||(x||(x=[]),x.push(ue,l)),l=G;else ue==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,k=k?k.__html:void 0,G!=null&&k!==G&&(x=x||[]).push(ue,G)):ue==="children"?typeof G!="string"&&typeof G!="number"||(x=x||[]).push(ue,""+G):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(G!=null&&ue==="onScroll"&&jt("scroll",i),x||k===G||(x=[])):(x=x||[]).push(ue,G))}l&&(x=x||[]).push("style",l);var ue=x;(s.updateQueue=ue)&&(s.flags|=4)}},Jg=function(i,s,l,u){l!==u&&(s.flags|=4)};function _a(i,s){if(!Yt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function bn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,u=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=u,i.childLanes=l,s}function IM(i,s,l){var u=s.pendingProps;switch(Zu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(s),null;case 1:return Gn(s.type)&&yl(),bn(s),null;case 3:return u=s.stateNode,ro(),Xt(zn),Xt(wn),ud(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(wl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yi!==null&&(Vd(yi),yi=null))),Rd(i,s),bn(s),null;case 5:ld(s);var p=hs(pa.current);if(l=s.type,i!==null&&s.stateNode!=null)Qg(i,s,l,u,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return bn(s),null}if(i=hs(ki.current),wl(s)){u=s.stateNode,l=s.type;var x=s.memoizedProps;switch(u[Oi]=s,u[ca]=x,i=(s.mode&1)!==0,l){case"dialog":jt("cancel",u),jt("close",u);break;case"iframe":case"object":case"embed":jt("load",u);break;case"video":case"audio":for(p=0;p<oa.length;p++)jt(oa[p],u);break;case"source":jt("error",u);break;case"img":case"image":case"link":jt("error",u),jt("load",u);break;case"details":jt("toggle",u);break;case"input":Nt(u,x),jt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},jt("invalid",u);break;case"textarea":Rt(u,x),jt("invalid",u)}Ve(l,x),p=null;for(var A in x)if(x.hasOwnProperty(A)){var k=x[A];A==="children"?typeof k=="string"?u.textContent!==k&&(x.suppressHydrationWarning!==!0&&vl(u.textContent,k,i),p=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(x.suppressHydrationWarning!==!0&&vl(u.textContent,k,i),p=["children",""+k]):o.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&jt("scroll",u)}switch(l){case"input":et(u),Bt(u,x,!0);break;case"textarea":et(u),Ht(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=xl)}u=p,s.updateQueue=u,u!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=I(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof u.is=="string"?i=A.createElement(l,{is:u.is}):(i=A.createElement(l),l==="select"&&(A=i,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):i=A.createElementNS(i,l),i[Oi]=s,i[ca]=u,Zg(i,s,!1,!1),s.stateNode=i;e:{switch(A=be(l,u),l){case"dialog":jt("cancel",i),jt("close",i),p=u;break;case"iframe":case"object":case"embed":jt("load",i),p=u;break;case"video":case"audio":for(p=0;p<oa.length;p++)jt(oa[p],i);p=u;break;case"source":jt("error",i),p=u;break;case"img":case"image":case"link":jt("error",i),jt("load",i),p=u;break;case"details":jt("toggle",i),p=u;break;case"input":Nt(i,u),p=wt(i,u),jt("invalid",i);break;case"option":p=u;break;case"select":i._wrapperState={wasMultiple:!!u.multiple},p=oe({},u,{value:void 0}),jt("invalid",i);break;case"textarea":Rt(i,u),p=ht(i,u),jt("invalid",i);break;default:p=u}Ve(l,p),k=p;for(x in k)if(k.hasOwnProperty(x)){var G=k[x];x==="style"?ge(i,G):x==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&pe(i,G)):x==="children"?typeof G=="string"?(l!=="textarea"||G!=="")&&xe(i,G):typeof G=="number"&&xe(i,""+G):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?G!=null&&x==="onScroll"&&jt("scroll",i):G!=null&&D(i,x,G,A))}switch(l){case"input":et(i),Bt(i,u,!1);break;case"textarea":et(i),Ht(i);break;case"option":u.value!=null&&i.setAttribute("value",""+de(u.value));break;case"select":i.multiple=!!u.multiple,x=u.value,x!=null?Vt(i,!!u.multiple,x,!1):u.defaultValue!=null&&Vt(i,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=xl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return bn(s),null;case 6:if(i&&s.stateNode!=null)Jg(i,s,i.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(l=hs(pa.current),hs(ki.current),wl(s)){if(u=s.stateNode,l=s.memoizedProps,u[Oi]=s,(x=u.nodeValue!==l)&&(i=Zn,i!==null))switch(i.tag){case 3:vl(u.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&vl(u.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Oi]=s,s.stateNode=u}return bn(s),null;case 13:if(Xt(Zt),u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&Qn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)ng(),eo(),s.flags|=98560,x=!1;else if(x=wl(s),u!==null&&u.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Oi]=s}else eo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;bn(s),x=!1}else yi!==null&&(Vd(yi),yi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(u=u!==null,u!==(i!==null&&i.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Zt.current&1)!==0?cn===0&&(cn=3):Hd())),s.updateQueue!==null&&(s.flags|=4),bn(s),null);case 4:return ro(),Rd(i,s),i===null&&aa(s.stateNode.containerInfo),bn(s),null;case 10:return id(s.type._context),bn(s),null;case 17:return Gn(s.type)&&yl(),bn(s),null;case 19:if(Xt(Zt),x=s.memoizedState,x===null)return bn(s),null;if(u=(s.flags&128)!==0,A=x.rendering,A===null)if(u)_a(x,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=Dl(i),A!==null){for(s.flags|=128,_a(x,!1),u=A.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=l,l=s.child;l!==null;)x=l,i=u,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,i=A.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Gt(Zt,Zt.current&1|2),s.child}i=i.sibling}x.tail!==null&&Kt()>lo&&(s.flags|=128,u=!0,_a(x,!1),s.lanes=4194304)}else{if(!u)if(i=Dl(A),i!==null){if(s.flags|=128,u=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),_a(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!Yt)return bn(s),null}else 2*Kt()-x.renderingStartTime>lo&&l!==1073741824&&(s.flags|=128,u=!0,_a(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(l=x.last,l!==null?l.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=Kt(),s.sibling=null,l=Zt.current,Gt(Zt,u?l&1|2:l&1),s):(bn(s),null);case 22:case 23:return Gd(),u=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(Jn&1073741824)!==0&&(bn(s),s.subtreeFlags&6&&(s.flags|=8192)):bn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function UM(i,s){switch(Zu(s),s.tag){case 1:return Gn(s.type)&&yl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ro(),Xt(zn),Xt(wn),ud(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return ld(s),null;case 13:if(Xt(Zt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));eo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Xt(Zt),null;case 4:return ro(),null;case 10:return id(s.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var Vl=!1,Cn=!1,FM=typeof WeakSet=="function"?WeakSet:Set,We=null;function oo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){Jt(i,s,u)}else l.current=null}function Pd(i,s,l){try{l()}catch(u){Jt(i,s,u)}}var e0=!1;function OM(i,s){if(Gu=ol,i=Lm(),Iu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,k=-1,G=-1,ue=0,Se=0,Me=i,ye=null;t:for(;;){for(var Ge;Me!==l||p!==0&&Me.nodeType!==3||(k=A+p),Me!==x||u!==0&&Me.nodeType!==3||(G=A+u),Me.nodeType===3&&(A+=Me.nodeValue.length),(Ge=Me.firstChild)!==null;)ye=Me,Me=Ge;for(;;){if(Me===i)break t;if(ye===l&&++ue===p&&(k=A),ye===x&&++Se===u&&(G=A),(Ge=Me.nextSibling)!==null)break;Me=ye,ye=Me.parentNode}Me=Ge}l=k===-1||G===-1?null:{start:k,end:G}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hu={focusedElem:i,selectionRange:l},ol=!1,We=s;We!==null;)if(s=We,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,We=i;else for(;We!==null;){s=We;try{var Xe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ke=Xe.memoizedProps,tn=Xe.memoizedState,ee=s.stateNode,Y=ee.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:Si(s.type,Ke),tn);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var re=s.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Jt(s,s.return,we)}if(i=s.sibling,i!==null){i.return=s.return,We=i;break}We=s.return}return Xe=e0,e0=!1,Xe}function ya(i,s,l){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&i)===i){var x=p.destroy;p.destroy=void 0,x!==void 0&&Pd(s,l,x)}p=p.next}while(p!==u)}}function zl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var u=l.create;l.destroy=u()}l=l.next}while(l!==s)}}function Dd(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function t0(i){var s=i.alternate;s!==null&&(i.alternate=null,t0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Oi],delete s[ca],delete s[qu],delete s[_M],delete s[yM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function n0(i){return i.tag===5||i.tag===3||i.tag===4}function i0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||n0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ld(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=xl));else if(u!==4&&(i=i.child,i!==null))for(Ld(i,s,l),i=i.sibling;i!==null;)Ld(i,s,l),i=i.sibling}function Nd(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(u!==4&&(i=i.child,i!==null))for(Nd(i,s,l),i=i.sibling;i!==null;)Nd(i,s,l),i=i.sibling}var yn=null,Mi=!1;function kr(i,s,l){for(l=l.child;l!==null;)r0(i,s,l),l=l.sibling}function r0(i,s,l){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(ne,l)}catch{}switch(l.tag){case 5:Cn||oo(l,s);case 6:var u=yn,p=Mi;yn=null,kr(i,s,l),yn=u,Mi=p,yn!==null&&(Mi?(i=yn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):yn.removeChild(l.stateNode));break;case 18:yn!==null&&(Mi?(i=yn,l=l.stateNode,i.nodeType===8?Xu(i.parentNode,l):i.nodeType===1&&Xu(i,l),Qo(i)):Xu(yn,l.stateNode));break;case 4:u=yn,p=Mi,yn=l.stateNode.containerInfo,Mi=!0,kr(i,s,l),yn=u,Mi=p;break;case 0:case 11:case 14:case 15:if(!Cn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Pd(l,s,A),p=p.next}while(p!==u)}kr(i,s,l);break;case 1:if(!Cn&&(oo(l,s),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(k){Jt(l,s,k)}kr(i,s,l);break;case 21:kr(i,s,l);break;case 22:l.mode&1?(Cn=(u=Cn)||l.memoizedState!==null,kr(i,s,l),Cn=u):kr(i,s,l);break;default:kr(i,s,l)}}function s0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new FM),s.forEach(function(u){var p=XM.bind(null,i,u);l.has(u)||(l.add(u),u.then(p,p))})}}function Ei(i,s){var l=s.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var x=i,A=s,k=A;e:for(;k!==null;){switch(k.tag){case 5:yn=k.stateNode,Mi=!1;break e;case 3:yn=k.stateNode.containerInfo,Mi=!0;break e;case 4:yn=k.stateNode.containerInfo,Mi=!0;break e}k=k.return}if(yn===null)throw Error(t(160));r0(x,A,p),yn=null,Mi=!1;var G=p.alternate;G!==null&&(G.return=null),p.return=null}catch(ue){Jt(p,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)o0(s,i),s=s.sibling}function o0(i,s){var l=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ei(s,i),Vi(i),u&4){try{ya(3,i,i.return),zl(3,i)}catch(Ke){Jt(i,i.return,Ke)}try{ya(5,i,i.return)}catch(Ke){Jt(i,i.return,Ke)}}break;case 1:Ei(s,i),Vi(i),u&512&&l!==null&&oo(l,l.return);break;case 5:if(Ei(s,i),Vi(i),u&512&&l!==null&&oo(l,l.return),i.flags&32){var p=i.stateNode;try{xe(p,"")}catch(Ke){Jt(i,i.return,Ke)}}if(u&4&&(p=i.stateNode,p!=null)){var x=i.memoizedProps,A=l!==null?l.memoizedProps:x,k=i.type,G=i.updateQueue;if(i.updateQueue=null,G!==null)try{k==="input"&&x.type==="radio"&&x.name!=null&&ft(p,x),be(k,A);var ue=be(k,x);for(A=0;A<G.length;A+=2){var Se=G[A],Me=G[A+1];Se==="style"?ge(p,Me):Se==="dangerouslySetInnerHTML"?pe(p,Me):Se==="children"?xe(p,Me):D(p,Se,Me,ue)}switch(k){case"input":$t(p,x);break;case"textarea":Ue(p,x);break;case"select":var ye=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Ge=x.value;Ge!=null?Vt(p,!!x.multiple,Ge,!1):ye!==!!x.multiple&&(x.defaultValue!=null?Vt(p,!!x.multiple,x.defaultValue,!0):Vt(p,!!x.multiple,x.multiple?[]:"",!1))}p[ca]=x}catch(Ke){Jt(i,i.return,Ke)}}break;case 6:if(Ei(s,i),Vi(i),u&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,x=i.memoizedProps;try{p.nodeValue=x}catch(Ke){Jt(i,i.return,Ke)}}break;case 3:if(Ei(s,i),Vi(i),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Qo(s.containerInfo)}catch(Ke){Jt(i,i.return,Ke)}break;case 4:Ei(s,i),Vi(i);break;case 13:Ei(s,i),Vi(i),p=i.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Fd=Kt())),u&4&&s0(i);break;case 22:if(Se=l!==null&&l.memoizedState!==null,i.mode&1?(Cn=(ue=Cn)||Se,Ei(s,i),Cn=ue):Ei(s,i),Vi(i),u&8192){if(ue=i.memoizedState!==null,(i.stateNode.isHidden=ue)&&!Se&&(i.mode&1)!==0)for(We=i,Se=i.child;Se!==null;){for(Me=We=Se;We!==null;){switch(ye=We,Ge=ye.child,ye.tag){case 0:case 11:case 14:case 15:ya(4,ye,ye.return);break;case 1:oo(ye,ye.return);var Xe=ye.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=ye,l=ye.return;try{s=u,Xe.props=s.memoizedProps,Xe.state=s.memoizedState,Xe.componentWillUnmount()}catch(Ke){Jt(u,l,Ke)}}break;case 5:oo(ye,ye.return);break;case 22:if(ye.memoizedState!==null){c0(Me);continue}}Ge!==null?(Ge.return=ye,We=Ge):c0(Me)}Se=Se.sibling}e:for(Se=null,Me=i;;){if(Me.tag===5){if(Se===null){Se=Me;try{p=Me.stateNode,ue?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(k=Me.stateNode,G=Me.memoizedProps.style,A=G!=null&&G.hasOwnProperty("display")?G.display:null,k.style.display=fe("display",A))}catch(Ke){Jt(i,i.return,Ke)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(Ke){Jt(i,i.return,Ke)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ei(s,i),Vi(i),u&4&&s0(i);break;case 21:break;default:Ei(s,i),Vi(i)}}function Vi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(n0(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(xe(p,""),u.flags&=-33);var x=i0(i);Nd(i,x,p);break;case 3:case 4:var A=u.stateNode.containerInfo,k=i0(i);Ld(i,k,A);break;default:throw Error(t(161))}}catch(G){Jt(i,i.return,G)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function kM(i,s,l){We=i,a0(i)}function a0(i,s,l){for(var u=(i.mode&1)!==0;We!==null;){var p=We,x=p.child;if(p.tag===22&&u){var A=p.memoizedState!==null||Vl;if(!A){var k=p.alternate,G=k!==null&&k.memoizedState!==null||Cn;k=Vl;var ue=Cn;if(Vl=A,(Cn=G)&&!ue)for(We=p;We!==null;)A=We,G=A.child,A.tag===22&&A.memoizedState!==null?u0(p):G!==null?(G.return=A,We=G):u0(p);for(;x!==null;)We=x,a0(x),x=x.sibling;We=p,Vl=k,Cn=ue}l0(i)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,We=x):l0(i)}}function l0(i){for(;We!==null;){var s=We;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Cn||zl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!Cn)if(l===null)u.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Si(s.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&cg(s,x,u);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}cg(s,A,l)}break;case 5:var k=s.stateNode;if(l===null&&s.flags&4){l=k;var G=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&l.focus();break;case"img":G.src&&(l.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var Se=ue.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&Qo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||s.flags&512&&Dd(s)}catch(ye){Jt(s,s.return,ye)}}if(s===i){We=null;break}if(l=s.sibling,l!==null){l.return=s.return,We=l;break}We=s.return}}function c0(i){for(;We!==null;){var s=We;if(s===i){We=null;break}var l=s.sibling;if(l!==null){l.return=s.return,We=l;break}We=s.return}}function u0(i){for(;We!==null;){var s=We;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{zl(4,s)}catch(G){Jt(s,l,G)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var p=s.return;try{u.componentDidMount()}catch(G){Jt(s,p,G)}}var x=s.return;try{Dd(s)}catch(G){Jt(s,x,G)}break;case 5:var A=s.return;try{Dd(s)}catch(G){Jt(s,A,G)}}}catch(G){Jt(s,s.return,G)}if(s===i){We=null;break}var k=s.sibling;if(k!==null){k.return=s.return,We=k;break}We=s.return}}var BM=Math.ceil,Gl=P.ReactCurrentDispatcher,Id=P.ReactCurrentOwner,ui=P.ReactCurrentBatchConfig,Et=0,mn=null,sn=null,Sn=0,Jn=0,ao=Nr(0),cn=0,Sa=null,ms=0,Hl=0,Ud=0,Ma=null,Wn=null,Fd=0,lo=1/0,dr=null,Wl=!1,Od=null,Br=null,jl=!1,Vr=null,Xl=0,Ea=0,kd=null,ql=-1,Yl=0;function In(){return(Et&6)!==0?Kt():ql!==-1?ql:ql=Kt()}function zr(i){return(i.mode&1)===0?1:(Et&2)!==0&&Sn!==0?Sn&-Sn:MM.transition!==null?(Yl===0&&(Yl=ze()),Yl):(i=vt,i!==0||(i=window.event,i=i===void 0?16:fm(i.type)),i)}function Ti(i,s,l,u){if(50<Ea)throw Ea=0,kd=null,Error(t(185));gt(i,l,u),((Et&2)===0||i!==mn)&&(i===mn&&((Et&2)===0&&(Hl|=l),cn===4&&Gr(i,Sn)),jn(i,u),l===1&&Et===0&&(s.mode&1)===0&&(lo=Kt()+500,Ml&&Ur()))}function jn(i,s){var l=i.callbackNode;Pt(i,s);var u=zt(i,i===mn?Sn:0);if(u===0)l!==null&&rl(l),i.callbackNode=null,i.callbackPriority=0;else if(s=u&-u,i.callbackPriority!==s){if(l!=null&&rl(l),s===1)i.tag===0?SM(f0.bind(null,i)):Zm(f0.bind(null,i)),vM(function(){(Et&6)===0&&Ur()}),l=null;else{switch(ir(u)){case 1:l=qo;break;case 4:l=R;break;case 16:l=K;break;case 536870912:l=ie;break;default:l=K}l=y0(l,d0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function d0(i,s){if(ql=-1,Yl=0,(Et&6)!==0)throw Error(t(327));var l=i.callbackNode;if(co()&&i.callbackNode!==l)return null;var u=zt(i,i===mn?Sn:0);if(u===0)return null;if((u&30)!==0||(u&i.expiredLanes)!==0||s)s=$l(i,u);else{s=u;var p=Et;Et|=2;var x=p0();(mn!==i||Sn!==s)&&(dr=null,lo=Kt()+500,vs(i,s));do try{GM();break}catch(k){h0(i,k)}while(!0);nd(),Gl.current=x,Et=p,sn!==null?s=0:(mn=null,Sn=0,s=cn)}if(s!==0){if(s===2&&(p=rn(i),p!==0&&(u=p,s=Bd(i,p))),s===1)throw l=Sa,vs(i,0),Gr(i,u),jn(i,Kt()),l;if(s===6)Gr(i,u);else{if(p=i.current.alternate,(u&30)===0&&!VM(p)&&(s=$l(i,u),s===2&&(x=rn(i),x!==0&&(u=x,s=Bd(i,x))),s===1))throw l=Sa,vs(i,0),Gr(i,u),jn(i,Kt()),l;switch(i.finishedWork=p,i.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:xs(i,Wn,dr);break;case 3:if(Gr(i,u),(u&130023424)===u&&(s=Fd+500-Kt(),10<s)){if(zt(i,0)!==0)break;if(p=i.suspendedLanes,(p&u)!==u){In(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=ju(xs.bind(null,i,Wn,dr),s);break}xs(i,Wn,dr);break;case 4:if(Gr(i,u),(u&4194240)===u)break;for(s=i.eventTimes,p=-1;0<u;){var A=31-Ce(u);x=1<<A,A=s[A],A>p&&(p=A),u&=~x}if(u=p,u=Kt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*BM(u/1960))-u,10<u){i.timeoutHandle=ju(xs.bind(null,i,Wn,dr),u);break}xs(i,Wn,dr);break;case 5:xs(i,Wn,dr);break;default:throw Error(t(329))}}}return jn(i,Kt()),i.callbackNode===l?d0.bind(null,i):null}function Bd(i,s){var l=Ma;return i.current.memoizedState.isDehydrated&&(vs(i,s).flags|=256),i=$l(i,s),i!==2&&(s=Wn,Wn=l,s!==null&&Vd(s)),i}function Vd(i){Wn===null?Wn=i:Wn.push.apply(Wn,i)}function VM(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],x=p.getSnapshot;p=p.value;try{if(!_i(x(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Gr(i,s){for(s&=~Ud,s&=~Hl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Ce(s),u=1<<l;i[l]=-1,s&=~u}}function f0(i){if((Et&6)!==0)throw Error(t(327));co();var s=zt(i,0);if((s&1)===0)return jn(i,Kt()),null;var l=$l(i,s);if(i.tag!==0&&l===2){var u=rn(i);u!==0&&(s=u,l=Bd(i,u))}if(l===1)throw l=Sa,vs(i,0),Gr(i,s),jn(i,Kt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,xs(i,Wn,dr),jn(i,Kt()),null}function zd(i,s){var l=Et;Et|=1;try{return i(s)}finally{Et=l,Et===0&&(lo=Kt()+500,Ml&&Ur())}}function gs(i){Vr!==null&&Vr.tag===0&&(Et&6)===0&&co();var s=Et;Et|=1;var l=ui.transition,u=vt;try{if(ui.transition=null,vt=1,i)return i()}finally{vt=u,ui.transition=l,Et=s,(Et&6)===0&&Ur()}}function Gd(){Jn=ao.current,Xt(ao)}function vs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,gM(l)),sn!==null)for(l=sn.return;l!==null;){var u=l;switch(Zu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&yl();break;case 3:ro(),Xt(zn),Xt(wn),ud();break;case 5:ld(u);break;case 4:ro();break;case 13:Xt(Zt);break;case 19:Xt(Zt);break;case 10:id(u.type._context);break;case 22:case 23:Gd()}l=l.return}if(mn=i,sn=i=Hr(i.current,null),Sn=Jn=s,cn=0,Sa=null,Ud=Hl=ms=0,Wn=Ma=null,fs!==null){for(s=0;s<fs.length;s++)if(l=fs[s],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,x=l.pending;if(x!==null){var A=x.next;x.next=p,u.next=A}l.pending=u}fs=null}return i}function h0(i,s){do{var l=sn;try{if(nd(),Ll.current=Fl,Nl){for(var u=Qt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Nl=!1}if(ps=0,pn=ln=Qt=null,ma=!1,ga=0,Id.current=null,l===null||l.return===null){cn=1,Sa=s,sn=null;break}e:{var x=i,A=l.return,k=l,G=s;if(s=Sn,k.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ue=G,Se=k,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ge=kg(A);if(Ge!==null){Ge.flags&=-257,Bg(Ge,A,k,x,s),Ge.mode&1&&Og(x,ue,s),s=Ge,G=ue;var Xe=s.updateQueue;if(Xe===null){var Ke=new Set;Ke.add(G),s.updateQueue=Ke}else Xe.add(G);break e}else{if((s&1)===0){Og(x,ue,s),Hd();break e}G=Error(t(426))}}else if(Yt&&k.mode&1){var tn=kg(A);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),Bg(tn,A,k,x,s),ed(so(G,k));break e}}x=G=so(G,k),cn!==4&&(cn=2),Ma===null?Ma=[x]:Ma.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ee=Ug(x,G,s);lg(x,ee);break e;case 1:k=G;var Y=x.type,re=x.stateNode;if((x.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Br===null||!Br.has(re)))){x.flags|=65536,s&=-s,x.lanes|=s;var we=Fg(x,k,s);lg(x,we);break e}}x=x.return}while(x!==null)}g0(l)}catch(Qe){s=Qe,sn===l&&l!==null&&(sn=l=l.return);continue}break}while(!0)}function p0(){var i=Gl.current;return Gl.current=Fl,i===null?Fl:i}function Hd(){(cn===0||cn===3||cn===2)&&(cn=4),mn===null||(ms&268435455)===0&&(Hl&268435455)===0||Gr(mn,Sn)}function $l(i,s){var l=Et;Et|=2;var u=p0();(mn!==i||Sn!==s)&&(dr=null,vs(i,s));do try{zM();break}catch(p){h0(i,p)}while(!0);if(nd(),Et=l,Gl.current=u,sn!==null)throw Error(t(261));return mn=null,Sn=0,cn}function zM(){for(;sn!==null;)m0(sn)}function GM(){for(;sn!==null&&!yu();)m0(sn)}function m0(i){var s=_0(i.alternate,i,Jn);i.memoizedProps=i.pendingProps,s===null?g0(i):sn=s,Id.current=null}function g0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=IM(l,s,Jn),l!==null){sn=l;return}}else{if(l=UM(l,s),l!==null){l.flags&=32767,sn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,sn=null;return}}if(s=s.sibling,s!==null){sn=s;return}sn=s=i}while(s!==null);cn===0&&(cn=5)}function xs(i,s,l){var u=vt,p=ui.transition;try{ui.transition=null,vt=1,HM(i,s,l,u)}finally{ui.transition=p,vt=u}return null}function HM(i,s,l,u){do co();while(Vr!==null);if((Et&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Bn(i,x),i===mn&&(sn=mn=null,Sn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||jl||(jl=!0,y0(K,function(){return co(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=ui.transition,ui.transition=null;var A=vt;vt=1;var k=Et;Et|=4,Id.current=null,OM(i,l),o0(l,i),cM(Hu),ol=!!Gu,Hu=Gu=null,i.current=l,kM(l),Su(),Et=k,vt=A,ui.transition=x}else i.current=l;if(jl&&(jl=!1,Vr=i,Xl=p),x=i.pendingLanes,x===0&&(Br=null),He(l.stateNode),jn(i,Kt()),s!==null)for(u=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Wl)throw Wl=!1,i=Od,Od=null,i;return(Xl&1)!==0&&i.tag!==0&&co(),x=i.pendingLanes,(x&1)!==0?i===kd?Ea++:(Ea=0,kd=i):Ea=0,Ur(),null}function co(){if(Vr!==null){var i=ir(Xl),s=ui.transition,l=vt;try{if(ui.transition=null,vt=16>i?16:i,Vr===null)var u=!1;else{if(i=Vr,Vr=null,Xl=0,(Et&6)!==0)throw Error(t(331));var p=Et;for(Et|=4,We=i.current;We!==null;){var x=We,A=x.child;if((We.flags&16)!==0){var k=x.deletions;if(k!==null){for(var G=0;G<k.length;G++){var ue=k[G];for(We=ue;We!==null;){var Se=We;switch(Se.tag){case 0:case 11:case 15:ya(8,Se,x)}var Me=Se.child;if(Me!==null)Me.return=Se,We=Me;else for(;We!==null;){Se=We;var ye=Se.sibling,Ge=Se.return;if(t0(Se),Se===ue){We=null;break}if(ye!==null){ye.return=Ge,We=ye;break}We=Ge}}}var Xe=x.alternate;if(Xe!==null){var Ke=Xe.child;if(Ke!==null){Xe.child=null;do{var tn=Ke.sibling;Ke.sibling=null,Ke=tn}while(Ke!==null)}}We=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,We=A;else e:for(;We!==null;){if(x=We,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ya(9,x,x.return)}var ee=x.sibling;if(ee!==null){ee.return=x.return,We=ee;break e}We=x.return}}var Y=i.current;for(We=Y;We!==null;){A=We;var re=A.child;if((A.subtreeFlags&2064)!==0&&re!==null)re.return=A,We=re;else e:for(A=Y;We!==null;){if(k=We,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:zl(9,k)}}catch(Qe){Jt(k,k.return,Qe)}if(k===A){We=null;break e}var we=k.sibling;if(we!==null){we.return=k.return,We=we;break e}We=k.return}}if(Et=p,Ur(),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(ne,i)}catch{}u=!0}return u}finally{vt=l,ui.transition=s}}return!1}function v0(i,s,l){s=so(l,s),s=Ug(i,s,1),i=Or(i,s,1),s=In(),i!==null&&(gt(i,1,s),jn(i,s))}function Jt(i,s,l){if(i.tag===3)v0(i,i,l);else for(;s!==null;){if(s.tag===3){v0(s,i,l);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Br===null||!Br.has(u))){i=so(l,i),i=Fg(s,i,1),s=Or(s,i,1),i=In(),s!==null&&(gt(s,1,i),jn(s,i));break}}s=s.return}}function WM(i,s,l){var u=i.pingCache;u!==null&&u.delete(s),s=In(),i.pingedLanes|=i.suspendedLanes&l,mn===i&&(Sn&l)===l&&(cn===4||cn===3&&(Sn&130023424)===Sn&&500>Kt()-Fd?vs(i,0):Ud|=l),jn(i,s)}function x0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var l=In();i=lr(i,s),i!==null&&(gt(i,s,l),jn(i,l))}function jM(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),x0(i,l)}function XM(i,s){var l=0;switch(i.tag){case 13:var u=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=i.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),x0(i,l)}var _0;_0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||zn.current)Hn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Hn=!1,NM(i,s,l);Hn=(i.flags&131072)!==0}else Hn=!1,Yt&&(s.flags&1048576)!==0&&Qm(s,Tl,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Bl(i,s),i=s.pendingProps;var p=Zs(s,wn.current);io(s,l),p=hd(null,s,u,i,p,l);var x=pd();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gn(u)?(x=!0,Sl(s)):x=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,od(s),p.updater=Ol,s.stateNode=p,p._reactInternals=s,yd(s,u,i,l),s=Td(null,s,u,!0,x,l)):(s.tag=0,Yt&&x&&Ku(s),Nn(null,s,p,l),s=s.child),s;case 16:u=s.elementType;e:{switch(Bl(i,s),i=s.pendingProps,p=u._init,u=p(u._payload),s.type=u,p=s.tag=YM(u),i=Si(u,i),p){case 0:s=Ed(null,s,u,i,l);break e;case 1:s=jg(null,s,u,i,l);break e;case 11:s=Vg(null,s,u,i,l);break e;case 14:s=zg(null,s,u,Si(u.type,i),l);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Si(u,p),Ed(i,s,u,p,l);case 1:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Si(u,p),jg(i,s,u,p,l);case 3:e:{if(Xg(s),i===null)throw Error(t(387));u=s.pendingProps,x=s.memoizedState,p=x.element,ag(i,s),Pl(s,u,null,l);var A=s.memoizedState;if(u=A.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){p=so(Error(t(423)),s),s=qg(i,s,u,l,p);break e}else if(u!==p){p=so(Error(t(424)),s),s=qg(i,s,u,l,p);break e}else for(Qn=Lr(s.stateNode.containerInfo.firstChild),Zn=s,Yt=!0,yi=null,l=sg(s,null,u,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(eo(),u===p){s=ur(i,s,l);break e}Nn(i,s,u,l)}s=s.child}return s;case 5:return ug(s),i===null&&Ju(s),u=s.type,p=s.pendingProps,x=i!==null?i.memoizedProps:null,A=p.children,Wu(u,p)?A=null:x!==null&&Wu(u,x)&&(s.flags|=32),Wg(i,s),Nn(i,s,A,l),s.child;case 6:return i===null&&Ju(s),null;case 13:return Yg(i,s,l);case 4:return ad(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=to(s,null,u,l):Nn(i,s,u,l),s.child;case 11:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Si(u,p),Vg(i,s,u,p,l);case 7:return Nn(i,s,s.pendingProps,l),s.child;case 8:return Nn(i,s,s.pendingProps.children,l),s.child;case 12:return Nn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(u=s.type._context,p=s.pendingProps,x=s.memoizedProps,A=p.value,Gt(bl,u._currentValue),u._currentValue=A,x!==null)if(_i(x.value,A)){if(x.children===p.children&&!zn.current){s=ur(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var k=x.dependencies;if(k!==null){A=x.child;for(var G=k.firstContext;G!==null;){if(G.context===u){if(x.tag===1){G=cr(-1,l&-l),G.tag=2;var ue=x.updateQueue;if(ue!==null){ue=ue.shared;var Se=ue.pending;Se===null?G.next=G:(G.next=Se.next,Se.next=G),ue.pending=G}}x.lanes|=l,G=x.alternate,G!==null&&(G.lanes|=l),rd(x.return,l,s),k.lanes|=l;break}G=G.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,k=A.alternate,k!==null&&(k.lanes|=l),rd(A,l,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Nn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,u=s.pendingProps.children,io(s,l),p=li(p),u=u(p),s.flags|=1,Nn(i,s,u,l),s.child;case 14:return u=s.type,p=Si(u,s.pendingProps),p=Si(u.type,p),zg(i,s,u,p,l);case 15:return Gg(i,s,s.type,s.pendingProps,l);case 17:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Si(u,p),Bl(i,s),s.tag=1,Gn(u)?(i=!0,Sl(s)):i=!1,io(s,l),Ng(s,u,p),yd(s,u,p,l),Td(null,s,u,!0,i,l);case 19:return Kg(i,s,l);case 22:return Hg(i,s,l)}throw Error(t(156,s.tag))};function y0(i,s){return il(i,s)}function qM(i,s,l,u){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(i,s,l,u){return new qM(i,s,l,u)}function Wd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function YM(i){if(typeof i=="function")return Wd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===W)return 11;if(i===z)return 14}return 2}function Hr(i,s){var l=i.alternate;return l===null?(l=di(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Kl(i,s,l,u,p,x){var A=2;if(u=i,typeof i=="function")Wd(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case U:return _s(l.children,p,x,s);case M:A=8,p|=8;break;case N:return i=di(12,l,s,p|2),i.elementType=N,i.lanes=x,i;case J:return i=di(13,l,s,p),i.elementType=J,i.lanes=x,i;case se:return i=di(19,l,s,p),i.elementType=se,i.lanes=x,i;case j:return Zl(l,p,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:A=10;break e;case F:A=9;break e;case W:A=11;break e;case z:A=14;break e;case $:A=16,u=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=di(A,l,s,p),s.elementType=i,s.type=u,s.lanes=x,s}function _s(i,s,l,u){return i=di(7,i,u,s),i.lanes=l,i}function Zl(i,s,l,u){return i=di(22,i,u,s),i.elementType=j,i.lanes=l,i.stateNode={isHidden:!1},i}function jd(i,s,l){return i=di(6,i,null,s),i.lanes=l,i}function Xd(i,s,l){return s=di(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function $M(i,s,l,u,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function qd(i,s,l,u,p,x,A,k,G){return i=new $M(i,s,l,k,G),s===1?(s=1,x===!0&&(s|=8)):s=0,x=di(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(x),i}function KM(i,s,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:u==null?null:""+u,children:i,containerInfo:s,implementation:l}}function S0(i){if(!i)return Ir;i=i._reactInternals;e:{if(Ui(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Gn(l))return $m(i,l,s)}return s}function M0(i,s,l,u,p,x,A,k,G){return i=qd(l,u,!0,i,p,x,A,k,G),i.context=S0(null),l=i.current,u=In(),p=zr(l),x=cr(u,p),x.callback=s??null,Or(l,x,p),i.current.lanes=p,gt(i,p,u),jn(i,u),i}function Ql(i,s,l,u){var p=s.current,x=In(),A=zr(p);return l=S0(l),s.context===null?s.context=l:s.pendingContext=l,s=cr(x,A),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Or(p,s,A),i!==null&&(Ti(i,p,A,x),Rl(i,p,A)),A}function Jl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function E0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Yd(i,s){E0(i,s),(i=i.alternate)&&E0(i,s)}function ZM(){return null}var T0=typeof reportError=="function"?reportError:function(i){console.error(i)};function $d(i){this._internalRoot=i}ec.prototype.render=$d.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Ql(i,s,null,null)},ec.prototype.unmount=$d.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;gs(function(){Ql(null,i,null,null)}),s[rr]=null}};function ec(i){this._internalRoot=i}ec.prototype.unstable_scheduleHydration=function(i){if(i){var s=Dt();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Rr.length&&s!==0&&s<Rr[l].priority;l++);Rr.splice(l,0,i),l===0&&um(i)}};function Kd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function tc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function w0(){}function QM(i,s,l,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var ue=Jl(A);x.call(ue)}}var A=M0(s,u,i,0,null,!1,!1,"",w0);return i._reactRootContainer=A,i[rr]=A.current,aa(i.nodeType===8?i.parentNode:i),gs(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof u=="function"){var k=u;u=function(){var ue=Jl(G);k.call(ue)}}var G=qd(i,0,!1,null,null,!1,!1,"",w0);return i._reactRootContainer=G,i[rr]=G.current,aa(i.nodeType===8?i.parentNode:i),gs(function(){Ql(s,G,l,u)}),G}function nc(i,s,l,u,p){var x=l._reactRootContainer;if(x){var A=x;if(typeof p=="function"){var k=p;p=function(){var G=Jl(A);k.call(G)}}Ql(s,A,i,p)}else A=QM(l,s,i,p,u);return Jl(A)}Ct=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=St(s.pendingLanes);l!==0&&(Vn(s,l|1),jn(s,Kt()),(Et&6)===0&&(lo=Kt()+500,Ur()))}break;case 13:gs(function(){var u=lr(i,1);if(u!==null){var p=In();Ti(u,i,1,p)}}),Yd(i,1)}},Wt=function(i){if(i.tag===13){var s=lr(i,134217728);if(s!==null){var l=In();Ti(s,i,134217728,l)}Yd(i,134217728)}},vi=function(i){if(i.tag===13){var s=zr(i),l=lr(i,s);if(l!==null){var u=In();Ti(l,i,s,u)}Yd(i,s)}},Dt=function(){return vt},xi=function(i,s){var l=vt;try{return vt=i,s()}finally{vt=l}},ot=function(i,s,l){switch(s){case"input":if($t(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var u=l[s];if(u!==i&&u.form===i.form){var p=_l(u);if(!p)throw Error(t(90));kt(u),$t(u,p)}}}break;case"textarea":Ue(i,l);break;case"select":s=l.value,s!=null&&Vt(i,!!l.multiple,s,!1)}},Re=zd,_e=gs;var JM={usingClientEntryPoint:!1,Events:[ua,$s,_l,he,ke,zd]},Ta={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e1={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=jo(i),i===null?null:i.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||ZM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ne=ic.inject(e1),Pe=ic}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JM,Xn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(s))throw Error(t(200));return KM(i,s,null,l)},Xn.createRoot=function(i,s){if(!Kd(i))throw Error(t(299));var l=!1,u="",p=T0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=qd(i,1,!1,null,null,l,!1,u,p),i[rr]=s.current,aa(i.nodeType===8?i.parentNode:i),new $d(s)},Xn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=jo(s),i=i===null?null:i.stateNode,i},Xn.flushSync=function(i){return gs(i)},Xn.hydrate=function(i,s,l){if(!tc(s))throw Error(t(200));return nc(null,i,s,!0,l)},Xn.hydrateRoot=function(i,s,l){if(!Kd(i))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,x="",A=T0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=M0(s,null,i,1,l??null,p,!1,x,A),i[rr]=s.current,aa(i),u)for(i=0;i<u.length;i++)l=u[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new ec(s)},Xn.render=function(i,s,l){if(!tc(s))throw Error(t(200));return nc(null,i,s,!1,l)},Xn.unmountComponentAtNode=function(i){if(!tc(i))throw Error(t(40));return i._reactRootContainer?(gs(function(){nc(null,null,i,!1,function(){i._reactRootContainer=null,i[rr]=null})}),!0):!1},Xn.unstable_batchedUpdates=zd,Xn.unstable_renderSubtreeIntoContainer=function(i,s,l,u){if(!tc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return nc(i,s,l,!1,u)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var N0;function l1(){if(N0)return Jd.exports;N0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Jd.exports=a1(),Jd.exports}var I0;function c1(){if(I0)return rc;I0=1;var n=l1();return rc.createRoot=n.createRoot,rc.hydrateRoot=n.hydrateRoot,rc}var u1=c1(),ve=vp();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f1=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),U0=n=>{const e=f1(n);return e.charAt(0).toUpperCase()+e.slice(1)},Jx=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=ve.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...d},h)=>ve.createElement("svg",{ref:h,...h1,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Jx("lucide",o),...d},[...c.map(([f,g])=>ve.createElement(f,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=(n,e)=>{const t=ve.forwardRef(({className:r,...o},a)=>ve.createElement(p1,{ref:a,iconNode:e,className:Jx(`lucide-${d1(U0(n))}`,`lucide-${n}`,r),...o}));return t.displayName=U0(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],za=$n("arrow-up-right",m1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],v1=$n("brain",g1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],_1=$n("building",x1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Jf=$n("check",y1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],M1=$n("chevron-down",S1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],T1=$n("dollar-sign",E1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]],A1=$n("indian-rupee",w1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],C1=$n("menu",b1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],P1=$n("message-square",R1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],L1=$n("moon",D1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],I1=$n("play",N1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],F1=$n("sun",U1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],k1=$n("trending-up",O1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],e_=$n("x",B1);function V1({items:n,animationTime:e=600,particleCount:t=15,particleDistances:r=[90,10],particleR:o=100,timeVariance:a=300,colors:c=[1,2,3,1,2,3,1,4],initialActiveIndex:d=0,theme:h="dark"}){const f=ve.useRef(null),g=ve.useRef(null),v=ve.useRef(null),m=ve.useRef(null),[_,E]=ve.useState(d),w=(L=1)=>L/2-Math.random()*L,y=(L,U,M)=>{const N=(360+w(8))/M*U*(Math.PI/180);return[L*Math.cos(N),L*Math.sin(N)]},S=(L,U,M,N)=>{let B=w(N/10);return{start:y(M[0],t-L,t),end:y(M[1]+w(7),t-L,t),time:U,scale:1+w(.2),color:c[Math.floor(Math.random()*c.length)],rotate:B>0?(B+N/20)*10:(B-N/20)*10}},b=L=>{const U=r,M=o,N=e*2+a;L.style.setProperty("--time",`${N}ms`);for(let B=0;B<t;B++){const F=e*2+w(a*2),W=S(B,F,U,M);L.classList.remove("active"),setTimeout(()=>{const J=document.createElement("span"),se=document.createElement("span");J.classList.add("particle"),J.style.setProperty("--start-x",`${W.start[0]}px`),J.style.setProperty("--start-y",`${W.start[1]}px`),J.style.setProperty("--end-x",`${W.end[0]}px`),J.style.setProperty("--end-y",`${W.end[1]}px`),J.style.setProperty("--time",`${W.time}ms`),J.style.setProperty("--scale",`${W.scale}`),J.style.setProperty("--color",`var(--color-${W.color}, #14b8a6)`),J.style.setProperty("--rotate",`${W.rotate}deg`),se.classList.add("point"),J.appendChild(se),L.appendChild(J),requestAnimationFrame(()=>{L.classList.add("active")}),setTimeout(()=>{try{L.removeChild(J)}catch{}},F)},30)}},D=L=>{if(!f.current||!v.current||!m.current)return;const U=f.current.getBoundingClientRect(),M=L.getBoundingClientRect(),N={left:`${M.x-U.x}px`,top:`${M.y-U.y}px`,width:`${M.width}px`,height:`${M.height}px`};Object.assign(v.current.style,N),Object.assign(m.current.style,N),m.current.innerText=L.innerText},P=(L,U)=>{const N=L.currentTarget.parentElement;!N||_===U||(E(U),D(N),v.current&&v.current.querySelectorAll(".particle").forEach(F=>{var W;try{(W=v.current)==null||W.removeChild(F)}catch{}}),m.current&&(m.current.classList.remove("active"),m.current.offsetWidth,m.current.classList.add("active")),v.current&&b(v.current))},O=(L,U)=>{if(L.key==="Enter"||L.key===" "){L.preventDefault();const M=L.currentTarget;M.parentElement&&P({currentTarget:M},U)}};return ve.useEffect(()=>{var M,N;if(!g.current||!f.current)return;const L=g.current.querySelectorAll("li")[_];L&&(D(L),(M=m.current)==null||M.classList.add("active"),(N=v.current)==null||N.classList.add("active"));const U=new ResizeObserver(()=>{var F;const B=(F=g.current)==null?void 0:F.querySelectorAll("li")[_];B&&D(B)});return U.observe(f.current),()=>U.disconnect()},[_]),C.jsxs("div",{className:`gooey-nav-container theme-${h}`,ref:f,children:[C.jsx("nav",{children:C.jsx("ul",{ref:g,children:n.map((L,U)=>C.jsx("li",{className:_===U?"active":"",children:C.jsx("a",{href:L.href,onClick:M=>P(M,U),onKeyDown:M=>O(M,U),children:L.label})},U))})}),C.jsx("span",{className:"effect filter",ref:v}),C.jsx("span",{className:"effect text",ref:m})]})}const t_="/assets/Black-C_Nn8jEO.png",n_="/assets/White-B_TMsImC.png",F0="https://calendly.com/sanyam-chhoriya/automate-flow-ai-demo?month=2026-05";function z1({theme:n="dark",toggleTheme:e}){const[t,r]=ve.useState(!1),[o,a]=ve.useState(!1),[c,d]=ve.useState("#home");ve.useEffect(()=>{const f=()=>{r(window.scrollY>80)};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]);const h=[{label:"Home",href:"#home"},{label:"Features",href:"#features"},{label:"Pricing",href:"#pricing"},{label:"Contact Us",href:"#contact"}];return C.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:1e3,transition:"background 400ms cubic-bezier(0.16,1,0.3,1), backdrop-filter 400ms ease, border-color 400ms ease",...t?{background:n==="dark"?"rgba(8, 12, 18, 0.78)":"rgba(245, 248, 252, 0.82)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",borderBottom:n==="dark"?"1px solid rgba(255,255,255,0.07)":"1px solid rgba(0,0,0,0.08)"}:{}},children:[C.jsxs("div",{className:"nav-shell",children:[C.jsx("a",{href:"#home","aria-label":"Automate Flow AI — Home",style:{textDecoration:"none"},children:C.jsx("div",{className:"logo-only",children:C.jsx("img",{src:n==="dark"?n_:t_,alt:"Automate Flow AI",className:"logo-icon"})})}),C.jsxs("div",{className:"nav-center",children:[C.jsx(V1,{items:h,theme:n}),C.jsxs("a",{href:F0,target:"_blank",rel:"noopener noreferrer",className:"get-started-btn",id:"nav-get-started-btn",children:["Get Started",C.jsx(za,{style:{width:14,height:14}})]})]}),C.jsxs("div",{className:"nav-actions",children:[e&&C.jsx("button",{id:"nav-theme-toggle-btn",onClick:e,className:"nav-icon-btn","aria-label":n==="dark"?"Switch to light mode":"Switch to dark mode",children:n==="dark"?C.jsx(F1,{style:{width:17,height:17}}):C.jsx(L1,{style:{width:17,height:17}})}),C.jsx("a",{href:"https://wa.me/919307783836",target:"_blank",rel:"noopener noreferrer",className:"nav-icon-btn whatsapp","aria-label":"Chat on WhatsApp",id:"nav-whatsapp-btn",children:C.jsx("svg",{width:"18",height:"18",fill:"#25D366",viewBox:"0 0 24 24",children:C.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})})}),C.jsx("button",{id:"nav-mobile-menu-btn",className:"nav-icon-btn nav-mobile-menu-btn",onClick:()=>a(!o),"aria-label":o?"Close menu":"Open menu",children:o?C.jsx(e_,{style:{width:18,height:18}}):C.jsx(C1,{style:{width:18,height:18}})})]})]}),o&&C.jsxs("div",{className:"nav-mobile-drawer",children:[h.map(f=>C.jsx("a",{href:f.href,className:`nav-mobile-link${c===f.href?" active":""}`,onClick:()=>{d(f.href),a(!1)},children:f.label},f.href)),C.jsxs("a",{href:F0,target:"_blank",rel:"noopener noreferrer",className:"nav-mobile-cta",onClick:()=>a(!1),id:"nav-mobile-get-started-btn",children:["Get Started",C.jsx(za,{style:{width:14,height:14}})]})]})]})}const xp=ve.createContext({});function _p(n){const e=ve.useRef(null);return e.current===null&&(e.current=n()),e.current}const G1=typeof window<"u",i_=G1?ve.useLayoutEffect:ve.useEffect,du=ve.createContext(null);function yp(n,e){n.indexOf(e)===-1&&n.push(e)}function Yc(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Qi=(n,e,t)=>t>e?e:t<n?n:t;let Sp=()=>{};const ts={},r_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),s_=n=>typeof n=="object"&&n!==null,o_=n=>/^0[^.\s]+$/u.test(n);function a_(n){let e;return()=>(e===void 0&&(e=n()),e)}const gi=n=>n,Ya=(...n)=>n.reduce((e,t)=>r=>t(e(r))),Ga=(n,e,t)=>{const r=e-n;return r?(t-n)/r:1};class Mp{constructor(){this.subscriptions=[]}add(e){return yp(this.subscriptions,e),()=>Yc(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ii=n=>n*1e3,mi=n=>n/1e3,l_=(n,e)=>e?n*(1e3/e):0,c_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,H1=1e-7,W1=12;function j1(n,e,t,r,o){let a,c,d=0;do c=e+(t-e)/2,a=c_(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>H1&&++d<W1);return c}function $a(n,e,t,r){if(n===e&&t===r)return gi;const o=a=>j1(a,0,1,n,t);return a=>a===0||a===1?a:c_(o(a),e,r)}const u_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,d_=n=>e=>1-n(1-e),f_=$a(.33,1.53,.69,.99),Ep=d_(f_),h_=u_(Ep),p_=n=>n>=1?1:(n*=2)<1?.5*Ep(n):.5*(2-Math.pow(2,-10*(n-1))),Tp=n=>1-Math.sin(Math.acos(n)),m_=d_(Tp),g_=u_(Tp),X1=$a(.42,0,1,1),q1=$a(0,0,.58,1),v_=$a(.42,0,.58,1),Y1=n=>Array.isArray(n)&&typeof n[0]!="number",x_=n=>Array.isArray(n)&&typeof n[0]=="number",$1={linear:gi,easeIn:X1,easeInOut:v_,easeOut:q1,circIn:Tp,circInOut:g_,circOut:m_,backIn:Ep,backInOut:h_,backOut:f_,anticipate:p_},K1=n=>typeof n=="string",O0=n=>{if(x_(n)){Sp(n.length===4);const[e,t,r,o]=n;return $a(e,t,r,o)}else if(K1(n))return $1[n];return n},sc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Z1(n,e){let t=new Set,r=new Set,o=!1,a=!1;const c=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function h(g){c.has(g)&&(f.schedule(g),n()),g(d)}const f={schedule:(g,v=!1,m=!1)=>{const E=m&&o?t:r;return v&&c.add(g),E.add(g),g},cancel:g=>{r.delete(g),c.delete(g)},process:g=>{if(d=g,o){a=!0;return}o=!0;const v=t;t=r,r=v,t.forEach(h),t.clear(),o=!1,a&&(a=!1,f.process(g))}};return f}const Q1=40;function __(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=sc.reduce((D,P)=>(D[P]=Z1(a),D),{}),{setup:d,read:h,resolveKeyframes:f,preUpdate:g,update:v,preRender:m,render:_,postRender:E}=c,w=()=>{const D=ts.useManualTiming,P=D?o.timestamp:performance.now();t=!1,D||(o.delta=r?1e3/60:Math.max(Math.min(P-o.timestamp,Q1),1)),o.timestamp=P,o.isProcessing=!0,d.process(o),h.process(o),f.process(o),g.process(o),v.process(o),m.process(o),_.process(o),E.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(w))},y=()=>{t=!0,r=!0,o.isProcessing||n(w)};return{schedule:sc.reduce((D,P)=>{const O=c[P];return D[P]=(L,U=!1,M=!1)=>(t||y(),O.schedule(L,U,M)),D},{}),cancel:D=>{for(let P=0;P<sc.length;P++)c[sc[P]].cancel(D)},state:o,steps:c}}const{schedule:Ot,cancel:ns,state:Mn,steps:nf}=__(typeof requestAnimationFrame<"u"?requestAnimationFrame:gi,!0);let Nc;function J1(){Nc=void 0}const Fn={now:()=>(Nc===void 0&&Fn.set(Mn.isProcessing||ts.useManualTiming?Mn.timestamp:performance.now()),Nc),set:n=>{Nc=n,queueMicrotask(J1)}},y_=n=>e=>typeof e=="string"&&e.startsWith(n),S_=y_("--"),eE=y_("var(--"),wp=n=>eE(n)?tE.test(n.split("/*")[0].trim()):!1,tE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function k0(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const ko={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ha={...ko,transform:n=>Qi(0,1,n)},oc={...ko,default:1},Oa=n=>Math.round(n*1e5)/1e5,Ap=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function nE(n){return n==null}const iE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,bp=(n,e)=>t=>!!(typeof t=="string"&&iE.test(t)&&t.startsWith(n)||e&&!nE(t)&&Object.prototype.hasOwnProperty.call(t,e)),M_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,d]=r.match(Ap);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},rE=n=>Qi(0,255,n),rf={...ko,transform:n=>Math.round(rE(n))},Rs={test:bp("rgb","red"),parse:M_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+rf.transform(n)+", "+rf.transform(e)+", "+rf.transform(t)+", "+Oa(Ha.transform(r))+")"};function sE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const eh={test:bp("#"),parse:sE,transform:Rs.transform},Ka=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),vr=Ka("deg"),Yi=Ka("%"),qe=Ka("px"),oE=Ka("vh"),aE=Ka("vw"),B0={...Yi,parse:n=>Yi.parse(n)/100,transform:n=>Yi.transform(n*100)},Ao={test:bp("hsl","hue"),parse:M_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Yi.transform(Oa(e))+", "+Yi.transform(Oa(t))+", "+Oa(Ha.transform(r))+")"},an={test:n=>Rs.test(n)||eh.test(n)||Ao.test(n),parse:n=>Rs.test(n)?Rs.parse(n):Ao.test(n)?Ao.parse(n):eh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Rs.transform(n):Ao.transform(n),getAnimatableNone:n=>{const e=an.parse(n);return e.alpha=0,an.transform(e)}},lE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function cE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Ap))==null?void 0:e.length)||0)+(((t=n.match(lE))==null?void 0:t.length)||0)>0}const E_="number",T_="color",uE="var",dE="var(",V0="${}",fE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Do(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const d=e.replace(fE,h=>(an.test(h)?(r.color.push(a),o.push(T_),t.push(an.parse(h))):h.startsWith(dE)?(r.var.push(a),o.push(uE),t.push(h)):(r.number.push(a),o.push(E_),t.push(parseFloat(h))),++a,V0)).split(V0);return{values:t,split:d,indexes:r,types:o}}function hE(n){return Do(n).values}function w_({split:n,types:e}){const t=n.length;return r=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],r[a]!==void 0){const c=e[a];c===E_?o+=Oa(r[a]):c===T_?o+=an.transform(r[a]):o+=r[a]}return o}}function pE(n){return w_(Do(n))}const mE=n=>typeof n=="number"?0:an.test(n)?an.getAnimatableNone(n):n,gE=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:mE(n);function vE(n){const e=Do(n);return w_(e)(e.values.map((r,o)=>gE(r,e.split[o])))}const Ni={test:cE,parse:hE,createTransformer:pE,getAnimatableNone:vE};function sf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function xE({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const d=t<.5?t*(1+e):t+e-t*e,h=2*t-d;o=sf(h,d,n+1/3),a=sf(h,d,n),c=sf(h,d,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function $c(n,e){return t=>t>0?e:n}const Ft=(n,e,t)=>n+(e-n)*t,of=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},_E=[eh,Rs,Ao],yE=n=>_E.find(e=>e.test(n));function z0(n){const e=yE(n);if(!e)return!1;let t=e.parse(n);return e===Ao&&(t=xE(t)),t}const G0=(n,e)=>{const t=z0(n),r=z0(e);if(!t||!r)return $c(n,e);const o={...t};return a=>(o.red=of(t.red,r.red,a),o.green=of(t.green,r.green,a),o.blue=of(t.blue,r.blue,a),o.alpha=Ft(t.alpha,r.alpha,a),Rs.transform(o))},th=new Set(["none","hidden"]);function SE(n,e){return th.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function ME(n,e){return t=>Ft(n,e,t)}function Cp(n){return typeof n=="number"?ME:typeof n=="string"?wp(n)?$c:an.test(n)?G0:wE:Array.isArray(n)?A_:typeof n=="object"?an.test(n)?G0:EE:$c}function A_(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>Cp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function EE(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Cp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function TE(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],d=n.values[c]??0;t[o]=d,r[a]++}return t}const wE=(n,e)=>{const t=Ni.createTransformer(e),r=Do(n),o=Do(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?th.has(n)&&!o.values.length||th.has(e)&&!r.values.length?SE(n,e):Ya(A_(TE(r,o),o.values),t):$c(n,e)};function b_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Ft(n,e,t):Cp(n)(n,e)}const AE=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Ot.update(e,t),stop:()=>ns(e),now:()=>Mn.isProcessing?Mn.timestamp:Fn.now()}},C_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Kc=2e4;function Rp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Kc;)e+=t,r=n.next(e);return e>=Kc?1/0:e}function bE(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(Rp(r),Kc);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:mi(o)}}const en={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function nh(n,e){return n*Math.sqrt(1-e*e)}const CE=12;function RE(n,e,t){let r=t;for(let o=1;o<CE;o++)r=r-n(r)/e(r);return r}const af=.001;function PE({duration:n=en.duration,bounce:e=en.bounce,velocity:t=en.velocity,mass:r=en.mass}){let o,a,c=1-e;c=Qi(en.minDamping,en.maxDamping,c),n=Qi(en.minDuration,en.maxDuration,mi(n)),c<1?(o=f=>{const g=f*c,v=g*n,m=g-t,_=nh(f,c),E=Math.exp(-v);return af-m/_*E},a=f=>{const v=f*c*n,m=v*t+t,_=Math.pow(c,2)*Math.pow(f,2)*n,E=Math.exp(-v),w=nh(Math.pow(f,2),c);return(-o(f)+af>0?-1:1)*((m-_)*E)/w}):(o=f=>{const g=Math.exp(-f*n),v=(f-t)*n+1;return-af+g*v},a=f=>{const g=Math.exp(-f*n),v=(t-f)*(n*n);return g*v});const d=5/n,h=RE(o,a,d);if(n=ii(n),isNaN(h))return{stiffness:en.stiffness,damping:en.damping,duration:n};{const f=Math.pow(h,2)*r;return{stiffness:f,damping:c*2*Math.sqrt(r*f),duration:n}}}const DE=["duration","bounce"],LE=["stiffness","damping","mass"];function H0(n,e){return e.some(t=>n[t]!==void 0)}function NE(n){let e={velocity:en.velocity,stiffness:en.stiffness,damping:en.damping,mass:en.mass,isResolvedFromDuration:!1,...n};if(!H0(n,LE)&&H0(n,DE))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Qi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:en.mass,stiffness:o,damping:a}}else{const t=PE({...n,velocity:0});e={...e,...t,mass:en.mass},e.isResolvedFromDuration=!0}return e}function Zc(n=en.visualDuration,e=en.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],d={done:!1,value:a},{stiffness:h,damping:f,mass:g,duration:v,velocity:m,isResolvedFromDuration:_}=NE({...t,velocity:-mi(t.velocity||0)}),E=m||0,w=f/(2*Math.sqrt(h*g)),y=c-a,S=mi(Math.sqrt(h/g)),b=Math.abs(y)<5;r||(r=b?en.restSpeed.granular:en.restSpeed.default),o||(o=b?en.restDelta.granular:en.restDelta.default);let D,P,O,L,U,M;if(w<1)O=nh(S,w),L=(E+w*S*y)/O,D=B=>{const F=Math.exp(-w*S*B);return c-F*(L*Math.sin(O*B)+y*Math.cos(O*B))},U=w*S*L+y*O,M=w*S*y-L*O,P=B=>Math.exp(-w*S*B)*(U*Math.sin(O*B)+M*Math.cos(O*B));else if(w===1){D=F=>c-Math.exp(-S*F)*(y+(E+S*y)*F);const B=E+S*y;P=F=>Math.exp(-S*F)*(S*B*F-E)}else{const B=S*Math.sqrt(w*w-1);D=se=>{const z=Math.exp(-w*S*se),$=Math.min(B*se,300);return c-z*((E+w*S*y)*Math.sinh($)+B*y*Math.cosh($))/B};const F=(E+w*S*y)/B,W=w*S*F-y*B,J=w*S*y-F*B;P=se=>{const z=Math.exp(-w*S*se),$=Math.min(B*se,300);return z*(W*Math.sinh($)+J*Math.cosh($))}}const N={calculatedDuration:_&&v||null,velocity:B=>ii(P(B)),next:B=>{if(!_&&w<1){const W=Math.exp(-w*S*B),J=Math.sin(O*B),se=Math.cos(O*B),z=c-W*(L*J+y*se),$=ii(W*(U*J+M*se));return d.done=Math.abs($)<=r&&Math.abs(c-z)<=o,d.value=d.done?c:z,d}const F=D(B);if(_)d.done=B>=v;else{const W=ii(P(B));d.done=Math.abs(W)<=r&&Math.abs(c-F)<=o}return d.value=d.done?c:F,d},toString:()=>{const B=Math.min(Rp(N),Kc),F=C_(W=>N.next(B*W).value,B,30);return B+"ms "+F},toTransition:()=>{}};return N}Zc.applyToOptions=n=>{const e=bE(n,100,Zc);return n.ease=e.ease,n.duration=ii(e.duration),n.type="keyframes",n};const IE=5;function R_(n,e,t){const r=Math.max(e-IE,0);return l_(t-n(r),e-r)}function ih({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:d,max:h,restDelta:f=.5,restSpeed:g}){const v=n[0],m={done:!1,value:v},_=M=>d!==void 0&&M<d||h!==void 0&&M>h,E=M=>d===void 0?h:h===void 0||Math.abs(d-M)<Math.abs(h-M)?d:h;let w=t*e;const y=v+w,S=c===void 0?y:c(y);S!==y&&(w=S-v);const b=M=>-w*Math.exp(-M/r),D=M=>S+b(M),P=M=>{const N=b(M),B=D(M);m.done=Math.abs(N)<=f,m.value=m.done?S:B};let O,L;const U=M=>{_(m.value)&&(O=M,L=Zc({keyframes:[m.value,E(m.value)],velocity:R_(D,M,m.value),damping:o,stiffness:a,restDelta:f,restSpeed:g}))};return U(0),{calculatedDuration:null,next:M=>{let N=!1;return!L&&O===void 0&&(N=!0,P(M),U(M)),O!==void 0&&M>=O?L.next(M-O):(!N&&P(M),m)}}}function UE(n,e,t){const r=[],o=t||ts.mix||b_,a=n.length-1;for(let c=0;c<a;c++){let d=o(n[c],n[c+1]);if(e){const h=Array.isArray(e)?e[c]||gi:e;d=Ya(h,d)}r.push(d)}return r}function FE(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Sp(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const d=UE(e,r,o),h=d.length,f=g=>{if(c&&g<n[0])return e[0];let v=0;if(h>1)for(;v<n.length-2&&!(g<n[v+1]);v++);const m=Ga(n[v],n[v+1],g);return d[v](m)};return t?g=>f(Qi(n[0],n[a-1],g)):f}function OE(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Ga(0,e,r);n.push(Ft(t,1,o))}}function kE(n){const e=[0];return OE(e,n.length-1),e}function BE(n,e){return n.map(t=>t*e)}function VE(n,e){return n.map(()=>e||v_).splice(0,n.length-1)}function ka({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=Y1(r)?r.map(O0):O0(r),a={done:!1,value:e[0]},c=BE(t&&t.length===e.length?t:kE(e),n),d=FE(c,e,{ease:Array.isArray(o)?o:VE(e,o)});return{calculatedDuration:n,next:h=>(a.value=d(h),a.done=h>=n,a)}}const zE=n=>n!==null;function fu(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(zE),d=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!d||r===void 0?a[d]:r}const GE={decay:ih,inertia:ih,tween:ka,keyframes:ka,spring:Zc};function P_(n){typeof n.type=="string"&&(n.type=GE[n.type])}class Pp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const HE=n=>n/100;class Qc extends Pp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Fn.now()&&this.tick(Fn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;P_(e);const{type:t=ka,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:d}=e;const h=t||ka;h!==ka&&typeof d[0]!="number"&&(this.mixKeyframes=Ya(HE,b_(d[0],d[1])),d=[0,100]);const f=h({...e,keyframes:d});a==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...d].reverse(),velocity:-c})),f.calculatedDuration===null&&(f.calculatedDuration=Rp(f));const{calculatedDuration:g}=f;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=f}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:d,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:f=0,keyframes:g,repeat:v,repeatType:m,repeatDelay:_,type:E,onUpdate:w,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-f*(this.playbackSpeed>=0?1:-1),b=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let D=this.currentTime,P=r;if(v){const M=Math.min(this.currentTime,o)/d;let N=Math.floor(M),B=M%1;!B&&M>=1&&(B=1),B===1&&N--,N=Math.min(N,v+1),!!(N%2)&&(m==="reverse"?(B=1-B,_&&(B-=_/d)):m==="mirror"&&(P=c)),D=Qi(0,1,B)*d}let O;b?(this.delayState.value=g[0],O=this.delayState):O=P.next(D),a&&!b&&(O.value=a(O.value));let{done:L}=O;!b&&h!==null&&(L=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return U&&E!==ih&&(O.value=fu(g,this.options,y,this.speed)),w&&w(O.value),U&&this.finish(),O}then(e,t){return this.finished.then(e,t)}get duration(){return mi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+mi(e)}get time(){return mi(this.currentTime)}set time(e){e=ii(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return R_(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Fn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=mi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=AE,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Fn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function WE(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Ps=n=>n*180/Math.PI,rh=n=>{const e=Ps(Math.atan2(n[1],n[0]));return sh(e)},jE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:rh,rotateZ:rh,skewX:n=>Ps(Math.atan(n[1])),skewY:n=>Ps(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},sh=n=>(n=n%360,n<0&&(n+=360),n),W0=rh,j0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),X0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),XE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:j0,scaleY:X0,scale:n=>(j0(n)+X0(n))/2,rotateX:n=>sh(Ps(Math.atan2(n[6],n[5]))),rotateY:n=>sh(Ps(Math.atan2(-n[2],n[0]))),rotateZ:W0,rotate:W0,skewX:n=>Ps(Math.atan(n[4])),skewY:n=>Ps(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function oh(n){return n.includes("scale")?1:0}function ah(n,e){if(!n||n==="none")return oh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=XE,o=t;else{const d=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=jE,o=d}if(!o)return oh(e);const a=r[e],c=o[1].split(",").map(YE);return typeof a=="function"?a(c):c[a]}const qE=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return ah(t,e)};function YE(n){return parseFloat(n.trim())}const Bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vo=new Set([...Bo,"pathRotation"]),q0=n=>n===ko||n===qe,$E=new Set(["x","y","z"]),KE=Bo.filter(n=>!$E.has(n));function ZE(n){const e=[];return KE.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Jr={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>ah(e,"x"),y:(n,{transform:e})=>ah(e,"y")};Jr.translateX=Jr.x;Jr.translateY=Jr.y;const Ns=new Set;let lh=!1,ch=!1,uh=!1;function D_(){if(ch){const n=Array.from(Ns).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=ZE(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var d;(d=r.getValue(a))==null||d.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ch=!1,lh=!1,Ns.forEach(n=>n.complete(uh)),Ns.clear()}function L_(){Ns.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(ch=!0)})}function QE(){uh=!0,L_(),D_(),uh=!1}class Dp{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Ns.add(this),lh||(lh=!0,Ot.read(L_),Ot.resolveKeyframes(D_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}WE(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ns.delete(this)}cancel(){this.state==="scheduled"&&(Ns.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const JE=n=>n.startsWith("--");function N_(n,e,t){JE(e)?n.style.setProperty(e,t):n.style[e]=t}const eT={};function I_(n,e){const t=a_(n);return()=>eT[e]??t()}const tT=I_(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),U_=I_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ia=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Y0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ia([0,.65,.55,1]),circOut:Ia([.55,0,1,.45]),backIn:Ia([.31,.01,.66,-.59]),backOut:Ia([.33,1.53,.69,.99])};function F_(n,e){if(n)return typeof n=="function"?U_()?C_(n,e):"ease-out":x_(n)?Ia(n):Array.isArray(n)?n.map(t=>F_(t,e)||Y0.easeOut):Y0[n]}function nT(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:d="easeOut",times:h}={},f=void 0){const g={[e]:t};h&&(g.offset=h);const v=F_(d,o);Array.isArray(v)&&(g.easing=v);const m={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return f&&(m.pseudoElement=f),n.animate(g,m)}function O_(n){return typeof n=="function"&&"applyToOptions"in n}function iT({type:n,...e}){return O_(n)&&U_()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class k_ extends Pp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:d,onComplete:h}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Sp(typeof e.type!="string");const f=iT(e);this.animation=nT(t,r,o,f,a),f.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const g=fu(o,this.options,d,this.speed);this.updateMotionValue&&this.updateMotionValue(g),N_(t,r,g),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return mi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+mi(e)}get time(){return mi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ii(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&tT()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),gi):o(this)}}const B_={anticipate:p_,backInOut:h_,circInOut:g_};function rT(n){return n in B_}function sT(n){typeof n.ease=="string"&&rT(n.ease)&&(n.ease=B_[n.ease])}const lf=10;class oT extends k_{constructor(e){sT(e),P_(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const d=new Qc({...c,autoplay:!1}),h=Math.max(lf,Fn.now()-this.startTime),f=Qi(0,lf,h-lf),g=d.sample(h).value,{name:v}=this.options;a&&v&&N_(a,v,g),t.setWithVelocity(d.sample(Math.max(0,h-f)).value,g,f),d.stop()}}const $0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ni.test(n)||n==="0")&&!n.startsWith("url("));function aT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function lT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=$0(o,e),d=$0(a,e);return!c||!d?!1:aT(n)||(t==="spring"||O_(t))&&r}function dh(n){n.duration=0,n.type="keyframes"}const V_=new Set(["opacity","clipPath","filter","transform"]),cT=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function uT(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&cT.test(n[e]))return!0;return!1}const dT=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),fT=a_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function hT(n){var v;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c,keyframes:d}=n;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:g}=e.owner.getProps();return fT()&&t&&(V_.has(t)||dT.has(t)&&uT(d))&&(t!=="transform"||!g)&&!f&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const pT=40;class mT extends Pp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:d,name:h,motionValue:f,element:g,...v}){var E;super(),this.stop=()=>{var w,y;this._animation&&(this._animation.stop(),(w=this.stopTimeline)==null||w.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Fn.now();const m={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:h,motionValue:f,element:g,...v},_=(g==null?void 0:g.KeyframeResolver)||Dp;this.keyframeResolver=new _(d,(w,y,S)=>this.onKeyframesResolved(w,y,m,!S),h,f,g),(E=this.keyframeResolver)==null||E.scheduleResolve()}onKeyframesResolved(e,t,r,o){var S,b;this.keyframeResolver=void 0;const{name:a,type:c,velocity:d,delay:h,isHandoff:f,onUpdate:g}=r;this.resolvedAt=Fn.now();let v=!0;lT(e,a,c,d)||(v=!1,(ts.instantAnimations||!h)&&(g==null||g(fu(e,r,t))),e[0]=e[e.length-1],dh(r),r.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>pT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},E=v&&!f&&hT(_),w=(b=(S=_.motionValue)==null?void 0:S.owner)==null?void 0:b.current;let y;if(E)try{y=new oT({..._,element:w})}catch{y=new Qc(_)}else y=new Qc(_);y.finished.then(()=>{this.notifyFinished()}).catch(gi),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),QE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function z_(n,e,t,r=0,o=1){const a=Array.from(n).sort((f,g)=>f.sortNodePosition(g)).indexOf(e),c=n.size,d=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:d-a*r}const K0=30,gT=n=>!isNaN(parseFloat(n));class vT{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=Fn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Fn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=gT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Mp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Ot.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Fn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>K0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,K0);return l_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Lo(n,e){return new vT(n,e)}function G_(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function Lp(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?G_(t,n):t}const xT={type:"spring",stiffness:500,damping:25,restSpeed:10},_T=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),yT={type:"keyframes",duration:.8},ST={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},MT=(n,{keyframes:e})=>e.length>2?yT:Vo.has(n)?n.startsWith("scale")?_T(e[1]):xT:ST,ET=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function TT(n){for(const e in n)if(!ET.has(e))return!0;return!1}const Np=(n,e,t,r={},o,a)=>c=>{const d=Lp(r,n)||{},h=d.delay||r.delay||0;let{elapsed:f=0}=r;f=f-ii(h);const g={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...d,delay:-f,onUpdate:m=>{e.set(m),d.onUpdate&&d.onUpdate(m)},onComplete:()=>{c(),d.onComplete&&d.onComplete()},name:n,motionValue:e,element:a?void 0:o};TT(d)||Object.assign(g,MT(n,g)),g.duration&&(g.duration=ii(g.duration)),g.repeatDelay&&(g.repeatDelay=ii(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(dh(g),g.delay===0&&(v=!0)),(ts.instantAnimations||ts.skipAnimations||o!=null&&o.shouldSkipAnimations||d.skipAnimations)&&(v=!0,dh(g),g.delay=0),g.allowFlatten=!d.type&&!d.ease,v&&!a&&e.get()!==void 0){const m=fu(g.keyframes,d);if(m!==void 0){Ot.update(()=>{g.onUpdate(m),g.onComplete()});return}}return d.isSync?new Qc(g):new mT(g)},wT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function AT(n){const e=wT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function H_(n,e,t=1){const[r,o]=AT(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return r_(c)?parseFloat(c):c}return wp(o)?H_(o,e,t+1):o}function Z0(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Ip(n,e,t,r){if(typeof e=="function"){const[o,a]=Z0(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=Z0(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Is(n,e,t){const r=n.getProps();return Ip(r,e,t!==void 0?t:r.custom,n)}const W_=new Set(["width","height","top","left","right","bottom",...Bo]),fh=n=>Array.isArray(n);function bT(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Lo(t))}function CT(n){return fh(n)?n[n.length-1]||0:n}function RT(n,e){const t=Is(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const d=CT(a[c]);bT(n,c,d)}}const En=n=>!!(n&&n.getVelocity);function PT(n){return!!(En(n)&&n.add)}function hh(n,e){const t=n.getValue("willChange");if(PT(t))return t.add(e);if(!t&&ts.WillChange){const r=new ts.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function Up(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const DT="framerAppearId",j_="data-"+Up(DT);function X_(n){return n.props[j_]}function LT({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function q_(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...d}=e;const h=n.getDefaultTransition();a=a?G_(a,h):h;const f=a==null?void 0:a.reduceMotion,g=a==null?void 0:a.skipAnimations;r&&(a=r);const v=[],m=o&&n.animationState&&n.animationState.getState()[o],_=a==null?void 0:a.path;_&&_.animateVisualElement(n,d,a,t,v);for(const E in d){const w=n.getValue(E,n.latestValues[E]??null),y=d[E];if(y===void 0||m&&LT(m,E))continue;const S={delay:t,...Lp(a||{},E)};g&&(S.skipAnimations=!0);const b=w.get();if(b!==void 0&&!w.isAnimating()&&!Array.isArray(y)&&y===b&&!S.velocity){Ot.update(()=>w.set(y));continue}let D=!1;if(window.MotionHandoffAnimation){const L=X_(n);if(L){const U=window.MotionHandoffAnimation(L,E,Ot);U!==null&&(S.startTime=U,D=!0)}}hh(n,E);const P=f??n.shouldReduceMotion;w.start(Np(E,w,y,P&&W_.has(E)?{type:!1}:S,n,D));const O=w.animation;O&&v.push(O)}if(c){const E=()=>Ot.update(()=>{c&&RT(n,c)});v.length?Promise.all(v).then(E):E()}return v}function ph(n,e,t={}){var h;const r=Is(n,e,t.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(q_(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(f=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:m}=o;return NT(n,e,f,g,v,m,t)}:()=>Promise.resolve(),{when:d}=o;if(d){const[f,g]=d==="beforeChildren"?[a,c]:[c,a];return f().then(()=>g())}else return Promise.all([a(),c(t.delay)])}function NT(n,e,t=0,r=0,o=0,a=1,c){const d=[];for(const h of n.variantChildren)h.notify("AnimationStart",e),d.push(ph(h,e,{...c,delay:t+(typeof r=="function"?0:r)+z_(n.variantChildren,h,r,o,a)}).then(()=>h.notify("AnimationComplete",e)));return Promise.all(d)}function IT(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>ph(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=ph(n,e,t);else{const o=typeof e=="function"?Is(n,e,t.custom):e;r=Promise.all(q_(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const UT={test:n=>n==="auto",parse:n=>n},Y_=n=>e=>e.test(n),$_=[ko,qe,Yi,vr,aE,oE,UT],Q0=n=>$_.find(Y_(n));function FT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||o_(n):!0}const OT=new Set(["brightness","contrast","saturate","opacity"]);function kT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Ap)||[];if(!r)return n;const o=t.replace(r,"");let a=OT.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const BT=/\b([a-z-]*)\(.*?\)/gu,mh={...Ni,getAnimatableNone:n=>{const e=n.match(BT);return e?e.map(kT).join(" "):n}},gh={...Ni,getAnimatableNone:n=>{const e=Ni.parse(n);return Ni.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},J0={...ko,transform:Math.round},VT={rotate:vr,pathRotation:vr,rotateX:vr,rotateY:vr,rotateZ:vr,scale:oc,scaleX:oc,scaleY:oc,scaleZ:oc,skew:vr,skewX:vr,skewY:vr,distance:qe,translateX:qe,translateY:qe,translateZ:qe,x:qe,y:qe,z:qe,perspective:qe,transformPerspective:qe,opacity:Ha,originX:B0,originY:B0,originZ:qe},Jc={borderWidth:qe,borderTopWidth:qe,borderRightWidth:qe,borderBottomWidth:qe,borderLeftWidth:qe,borderRadius:qe,borderTopLeftRadius:qe,borderTopRightRadius:qe,borderBottomRightRadius:qe,borderBottomLeftRadius:qe,width:qe,maxWidth:qe,height:qe,maxHeight:qe,top:qe,right:qe,bottom:qe,left:qe,inset:qe,insetBlock:qe,insetBlockStart:qe,insetBlockEnd:qe,insetInline:qe,insetInlineStart:qe,insetInlineEnd:qe,padding:qe,paddingTop:qe,paddingRight:qe,paddingBottom:qe,paddingLeft:qe,paddingBlock:qe,paddingBlockStart:qe,paddingBlockEnd:qe,paddingInline:qe,paddingInlineStart:qe,paddingInlineEnd:qe,margin:qe,marginTop:qe,marginRight:qe,marginBottom:qe,marginLeft:qe,marginBlock:qe,marginBlockStart:qe,marginBlockEnd:qe,marginInline:qe,marginInlineStart:qe,marginInlineEnd:qe,fontSize:qe,backgroundPositionX:qe,backgroundPositionY:qe,...VT,zIndex:J0,fillOpacity:Ha,strokeOpacity:Ha,numOctaves:J0},zT={...Jc,color:an,backgroundColor:an,outlineColor:an,fill:an,stroke:an,borderColor:an,borderTopColor:an,borderRightColor:an,borderBottomColor:an,borderLeftColor:an,filter:mh,WebkitFilter:mh,mask:gh,WebkitMask:gh},K_=n=>zT[n],GT=new Set([mh,gh]);function Z_(n,e){let t=K_(n);return GT.has(t)||(t=Ni),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const HT=new Set(["auto","none","0"]);function WT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!HT.has(a)&&Do(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=Z_(t,o)}class jT extends Dp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let g=0;g<e.length;g++){let v=e[g];if(typeof v=="string"&&(v=v.trim(),wp(v))){const m=H_(v,t.current);m!==void 0&&(e[g]=m),g===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!W_.has(r)||e.length!==2)return;const[o,a]=e,c=Q0(o),d=Q0(a),h=k0(o),f=k0(a);if(h!==f&&Jr[r]){this.needsMeasurement=!0;return}if(c!==d)if(q0(c)&&q0(d))for(let g=0;g<e.length;g++){const v=e[g];typeof v=="string"&&(e[g]=parseFloat(v))}else Jr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||FT(e[o]))&&r.push(o);r.length&&WT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Jr[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var d;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=Jr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([h,f])=>{e.getValue(h).set(f)}),this.resolveNoneKeyframes()}}function Q_(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const o=(t==null?void 0:t[n])??r.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const vh=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Ic(n){return s_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Fp}=__(queueMicrotask,!1),Ri={x:!1,y:!1};function J_(){return Ri.x||Ri.y}function XT(n){return n==="x"||n==="y"?Ri[n]?null:(Ri[n]=!0,()=>{Ri[n]=!1}):Ri.x||Ri.y?null:(Ri.x=Ri.y=!0,()=>{Ri.x=Ri.y=!1})}function ey(n,e){const t=Q_(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function qT(n){return!(n.pointerType==="touch"||J_())}function YT(n,e,t={}){const[r,o,a]=ey(n,t);return r.forEach(c=>{let d=!1,h=!1,f;const g=()=>{c.removeEventListener("pointerleave",E)},v=y=>{f&&(f(y),f=void 0),g()},m=y=>{d=!1,window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),h&&(h=!1,v(y))},_=()=>{d=!0,window.addEventListener("pointerup",m,o),window.addEventListener("pointercancel",m,o)},E=y=>{if(y.pointerType!=="touch"){if(d){h=!0;return}v(y)}},w=y=>{if(!qT(y))return;h=!1;const S=e(c,y);typeof S=="function"&&(f=S,c.addEventListener("pointerleave",E,o))};c.addEventListener("pointerenter",w,o),c.addEventListener("pointerdown",_,o)}),a}const ty=(n,e)=>e?n===e?!0:ty(n,e.parentElement):!1,Op=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,$T=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function KT(n){return $T.has(n.tagName)||n.isContentEditable===!0}const ZT=new Set(["INPUT","SELECT","TEXTAREA"]);function QT(n){return ZT.has(n.tagName)||n.isContentEditable===!0}const Uc=new WeakSet;function ev(n){return e=>{e.key==="Enter"&&n(e)}}function cf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const JT=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=ev(()=>{if(Uc.has(t))return;cf(t,"down");const o=ev(()=>{cf(t,"up")}),a=()=>cf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function tv(n){return Op(n)&&!J_()}const nv=new WeakSet;function ew(n,e,t={}){const[r,o,a]=ey(n,t),c=d=>{const h=d.currentTarget;if(!tv(d)||nv.has(d))return;Uc.add(h),t.stopPropagation&&nv.add(d);const f=e(h,d),g=(_,E)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",m),Uc.has(h)&&Uc.delete(h),tv(_)&&typeof f=="function"&&f(_,{success:E})},v=_=>{g(_,h===window||h===document||t.useGlobalTarget||ty(h,_.target))},m=_=>{g(_,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",m,o)};return r.forEach(d=>{(t.useGlobalTarget?window:d).addEventListener("pointerdown",c,o),Ic(d)&&(d.addEventListener("focus",f=>JT(f,o)),!KT(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),a}function kp(n){return s_(n)&&"ownerSVGElement"in n}const Fc=new WeakMap;let Zr;const ny=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:kp(r)&&"getBBox"in r?r.getBBox()[e]:r[t],tw=ny("inline","width","offsetWidth"),nw=ny("block","height","offsetHeight");function iw({target:n,borderBoxSize:e}){var t;(t=Fc.get(n))==null||t.forEach(r=>{r(n,{get width(){return tw(n,e)},get height(){return nw(n,e)}})})}function rw(n){n.forEach(iw)}function sw(){typeof ResizeObserver>"u"||(Zr=new ResizeObserver(rw))}function ow(n,e){Zr||sw();const t=Q_(n);return t.forEach(r=>{let o=Fc.get(r);o||(o=new Set,Fc.set(r,o)),o.add(e),Zr==null||Zr.observe(r)}),()=>{t.forEach(r=>{const o=Fc.get(r);o==null||o.delete(e),o!=null&&o.size||Zr==null||Zr.unobserve(r)})}}const Oc=new Set;let bo;function aw(){bo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};Oc.forEach(e=>e(n))},window.addEventListener("resize",bo)}function lw(n){return Oc.add(n),bo||aw(),()=>{Oc.delete(n),!Oc.size&&typeof bo=="function"&&(window.removeEventListener("resize",bo),bo=void 0)}}function iv(n,e){return typeof n=="function"?lw(n):ow(n,e)}function cw(n){return kp(n)&&n.tagName==="svg"}const uw=[...$_,an,Ni],dw=n=>uw.find(Y_(n)),rv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Co=()=>({x:rv(),y:rv()}),sv=()=>({min:0,max:0}),un=()=>({x:sv(),y:sv()}),fw=new WeakMap;function hu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Wa(n){return typeof n=="string"||Array.isArray(n)}const Bp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vp=["initial",...Bp];function pu(n){return hu(n.animate)||Vp.some(e=>Wa(n[e]))}function iy(n){return!!(pu(n)||n.variants)}function hw(n,e,t){for(const r in e){const o=e[r],a=t[r];if(En(o))n.addValue(r,o);else if(En(a))n.addValue(r,Lo(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Lo(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const xh={current:null},ry={current:!1},pw=typeof window<"u";function mw(){if(ry.current=!0,!!pw)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>xh.current=n.matches;n.addEventListener("change",e),e()}else xh.current=!1}const ov=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let eu={};function sy(n){eu=n}function gw(){return eu}class vw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:d},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Dp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Fn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Ot.render(this.render,!1,!0))};const{latestValues:f,renderState:g}=d;this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=g,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=pu(t),this.isVariantNode=iy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in m){const E=m[_];f[_]!==void 0&&En(E)&&E.set(f[_])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,fw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(ry.current||mw(),this.shouldReduceMotion=xh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),ns(this.notifyUpdate),ns(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&V_.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:d,times:h,ease:f,duration:g}=t.accelerate,v=new k_({element:this.current,name:e,keyframes:d,times:h,ease:f,duration:ii(g)}),m=c(v);this.valueSubscriptions.set(e,()=>{m(),v.cancel()});return}const r=Vo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Ot.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in eu){const t=eu[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):un()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<ov.length;r++){const o=ov[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=hw(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Lo(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(r_(r)||o_(r))?r=parseFloat(r):!dw(r)&&Ni.test(t)&&(r=Z_(e,t)),this.setBaseTarget(e,En(r)?r.get():r)),En(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const c=Ip(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(r=c[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!En(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Mp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Fp.render(this.render)}}class oy extends vw{constructor(){super(...arguments),this.KeyframeResolver=jT}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;En(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class rs{constructor(e){this.isMounted=!1,this.node=e}update(){}}function ay({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function xw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function _w(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function uf(n){return n===void 0||n===1}function _h({scale:n,scaleX:e,scaleY:t}){return!uf(n)||!uf(e)||!uf(t)}function ws(n){return _h(n)||ly(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function ly(n){return av(n.x)||av(n.y)}function av(n){return n&&n!=="0%"}function tu(n,e,t){const r=n-t,o=e*r;return t+o}function lv(n,e,t,r,o){return o!==void 0&&(n=tu(n,o,r)),tu(n,t,r)+e}function yh(n,e=0,t=1,r,o){n.min=lv(n.min,e,t,r,o),n.max=lv(n.max,e,t,r,o)}function cy(n,{x:e,y:t}){yh(n.x,e.translate,e.scale,e.originPoint),yh(n.y,t.translate,t.scale,t.originPoint)}const cv=.999999999999,uv=1.0000000000001;function yw(n,e,t,r=!1){var d;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let h=0;h<o;h++){a=t[h],c=a.projectionDelta;const{visualElement:f}=a.options;f&&f.props.style&&f.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Wi(n.x,-a.scroll.offset.x),Wi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,cy(n,c)),r&&ws(a.latestValues)&&kc(n,a.latestValues,(d=a.layout)==null?void 0:d.layoutBox))}e.x<uv&&e.x>cv&&(e.x=1),e.y<uv&&e.y>cv&&(e.y=1)}function Wi(n,e){n.min+=e,n.max+=e}function dv(n,e,t,r,o=.5){const a=Ft(n.min,n.max,o);yh(n,e,t,a,r)}function fv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function kc(n,e,t){const r=t??n;dv(n.x,fv(e.x,r.x),e.scaleX,e.scale,e.originX),dv(n.y,fv(e.y,r.y),e.scaleY,e.scale,e.originY)}function uy(n,e){return ay(_w(n.getBoundingClientRect(),e))}function Sw(n,e,t){const r=uy(n,t),{scroll:o}=e;return o&&(Wi(r.x,o.offset.x),Wi(r.y,o.offset.y)),r}const Mw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ew=Bo.length;function Tw(n,e,t){let r="",o=!0;for(let c=0;c<Ew;c++){const d=Bo[c],h=n[d];if(h===void 0)continue;let f=!0;if(typeof h=="number")f=h===(d.startsWith("scale")?1:0);else{const g=parseFloat(h);f=d.startsWith("scale")?g===1:g===0}if(!f||t){const g=vh(h,Jc[d]);if(!f){o=!1;const v=Mw[d]||d;r+=`${v}(${g}) `}t&&(e[d]=g)}}const a=n.pathRotation;return a&&(o=!1,r+=`rotate(${vh(a,Jc.pathRotation)}) `),r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function zp(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,d=!1;for(const h in e){const f=e[h];if(Vo.has(h)){c=!0;continue}else if(S_(h)){o[h]=f;continue}else{const g=vh(f,Jc[h]);h.startsWith("origin")?(d=!0,a[h]=g):r[h]=g}}if(e.transform||(c||t?r.transform=Tw(e,n.transform,t):r.transform&&(r.transform="none")),d){const{originX:h="50%",originY:f="50%",originZ:g=0}=a;r.transformOrigin=`${h} ${f} ${g}`}}function dy(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function hv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Aa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(qe.test(n))n=parseFloat(n);else return n;const t=hv(n,e.target.x),r=hv(n,e.target.y);return`${t}% ${r}%`}},ww={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Ni.parse(n);if(o.length>5)return r;const a=Ni.createTransformer(n),c=typeof o[0]!="number"?1:0,d=t.x.scale*e.x,h=t.y.scale*e.y;o[0+c]/=d,o[1+c]/=h;const f=Ft(d,h,.5);return typeof o[2+c]=="number"&&(o[2+c]/=f),typeof o[3+c]=="number"&&(o[3+c]/=f),a(o)}},Sh={borderRadius:{...Aa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Aa,borderTopRightRadius:Aa,borderBottomLeftRadius:Aa,borderBottomRightRadius:Aa,boxShadow:ww};function fy(n,{layout:e,layoutId:t}){return Vo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Sh[n]||n==="opacity")}function Gp(n,e,t){var c;const r=n.style,o=e==null?void 0:e.style,a={};if(!r)return a;for(const d in r)(En(r[d])||o&&En(o[d])||fy(d,n)||((c=t==null?void 0:t.getValue(d))==null?void 0:c.liveStyle)!==void 0)&&(a[d]=r[d]);return a}function Aw(n){return window.getComputedStyle(n)}class bw extends oy{constructor(){super(...arguments),this.type="html",this.renderInstance=dy}readValueFromInstance(e,t){var r;if(Vo.has(t))return(r=this.projection)!=null&&r.isProjecting?oh(t):qE(e,t);{const o=Aw(e),a=(S_(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return uy(e,t)}build(e,t,r){zp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Gp(e,t,r)}}const Cw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Rw={offset:"strokeDashoffset",array:"strokeDasharray"};function Pw(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?Cw:Rw;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const Dw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function hy(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...d},h,f,g){if(zp(n,d,f),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:m}=n;v.transform&&(m.transform=v.transform,delete v.transform),(m.transform||v.transformOrigin)&&(m.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),m.transform&&(m.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete v.transformBox);for(const _ of Dw)v[_]!==void 0&&(m[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&Pw(v,o,a,c,!1)}const py=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),my=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Lw(n,e,t,r){dy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(py.has(o)?o:Up(o),e.attrs[o])}function gy(n,e,t){const r=Gp(n,e,t);for(const o in n)if(En(n[o])||En(e[o])){const a=Bo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class Nw extends oy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=un}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Vo.has(t)){const r=K_(t);return r&&r.default||0}return t=py.has(t)?t:Up(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return gy(e,t,r)}build(e,t,r){hy(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){Lw(e,t,r,o)}mount(e){this.isSVGTag=my(e.tagName),super.mount(e)}}const Iw=Vp.length;function vy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?vy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Iw;t++){const r=Vp[t],o=n.props[r];(Wa(o)||o===!1)&&(e[r]=o)}return e}function xy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const Uw=[...Bp].reverse(),Fw=Bp.length;function Ow(n){return e=>Promise.all(e.map(({animation:t,options:r})=>IT(n,t,r)))}function kw(n){let e=Ow(n),t=pv(),r=!0,o=!1;const a=f=>(g,v)=>{var _;const m=Is(n,v,f==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(m){const{transition:E,transitionEnd:w,...y}=m;g={...g,...y,...w}}return g};function c(f){e=f(n)}function d(f){const{props:g}=n,v=vy(n.parent)||{},m=[],_=new Set;let E={},w=1/0;for(let S=0;S<Fw;S++){const b=Uw[S],D=t[b],P=g[b]!==void 0?g[b]:v[b],O=Wa(P),L=b===f?D.isActive:null;L===!1&&(w=S);let U=P===v[b]&&P!==g[b]&&O;if(U&&(r||o)&&n.manuallyAnimateOnMount&&(U=!1),D.protectedKeys={...E},!D.isActive&&L===null||!P&&!D.prevProp||hu(P)||typeof P=="boolean")continue;if(b==="exit"&&D.isActive&&L!==!0){D.prevResolvedValues&&(E={...E,...D.prevResolvedValues});continue}const M=Bw(D.prevProp,P);let N=M||b===f&&D.isActive&&!U&&O||S>w&&O,B=!1;const F=Array.isArray(P)?P:[P];let W=F.reduce(a(b),{});L===!1&&(W={});const{prevResolvedValues:J={}}=D,se={...J,...W},z=X=>{N=!0,_.has(X)&&(B=!0,_.delete(X)),D.needsAnimating[X]=!0;const te=n.getValue(X);te&&(te.liveStyle=!1)};for(const X in se){const te=W[X],oe=J[X];if(E.hasOwnProperty(X))continue;let V=!1;fh(te)&&fh(oe)?V=!xy(te,oe)||M:V=te!==oe,V?te!=null?z(X):_.add(X):te!==void 0&&_.has(X)?z(X):D.protectedKeys[X]=!0}D.prevProp=P,D.prevResolvedValues=W,D.isActive&&(E={...E,...W}),(r||o)&&n.blockInitialAnimation&&(N=!1);const $=U&&M;N&&(!$||B)&&m.push(...F.map(X=>{const te={type:b};if(typeof X=="string"&&(r||o)&&!$&&n.manuallyAnimateOnMount&&n.parent){const{parent:oe}=n,V=Is(oe,X);if(oe.enteringChildren&&V){const{delayChildren:Q}=V.transition||{};te.delay=z_(oe.enteringChildren,n,Q)}}return{animation:X,options:te}}))}if(_.size){const S={};if(typeof g.initial!="boolean"){const b=Is(n,Array.isArray(g.initial)?g.initial[0]:g.initial);b&&b.transition&&(S.transition=b.transition)}_.forEach(b=>{const D=n.getBaseTarget(b),P=n.getValue(b);P&&(P.liveStyle=!0),S[b]=D??null}),m.push({animation:S})}let y=!!m.length;return r&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(y=!1),r=!1,o=!1,y?e(m):Promise.resolve()}function h(f,g){var m;if(t[f].isActive===g)return Promise.resolve();(m=n.variantChildren)==null||m.forEach(_=>{var E;return(E=_.animationState)==null?void 0:E.setActive(f,g)}),t[f].isActive=g;const v=d(f);for(const _ in t)t[_].protectedKeys={};return v}return{animateChanges:d,setActive:h,setAnimateFunction:c,getState:()=>t,reset:()=>{t=pv(),o=!0}}}function Bw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!xy(e,n):!1}function ys(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function pv(){return{animate:ys(!0),whileInView:ys(),whileHover:ys(),whileTap:ys(),whileDrag:ys(),whileFocus:ys(),exit:ys()}}function Mh(n,e){n.min=e.min,n.max=e.max}function wi(n,e){Mh(n.x,e.x),Mh(n.y,e.y)}function mv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const _y=1e-4,Vw=1-_y,zw=1+_y,yy=.01,Gw=0-yy,Hw=0+yy;function On(n){return n.max-n.min}function Ww(n,e,t){return Math.abs(n-e)<=t}function gv(n,e,t,r=.5){n.origin=r,n.originPoint=Ft(e.min,e.max,n.origin),n.scale=On(t)/On(e),n.translate=Ft(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Vw&&n.scale<=zw||isNaN(n.scale))&&(n.scale=1),(n.translate>=Gw&&n.translate<=Hw||isNaN(n.translate))&&(n.translate=0)}function Ba(n,e,t,r){gv(n.x,e.x,t.x,r?r.originX:void 0),gv(n.y,e.y,t.y,r?r.originY:void 0)}function vv(n,e,t,r=0){const o=r?Ft(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+On(e)}function jw(n,e,t,r){vv(n.x,e.x,t.x,r==null?void 0:r.x),vv(n.y,e.y,t.y,r==null?void 0:r.y)}function xv(n,e,t,r=0){const o=r?Ft(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+On(e)}function nu(n,e,t,r){xv(n.x,e.x,t.x,r==null?void 0:r.x),xv(n.y,e.y,t.y,r==null?void 0:r.y)}function _v(n,e,t,r,o){return n-=e,n=tu(n,1/t,r),o!==void 0&&(n=tu(n,1/o,r)),n}function Xw(n,e=0,t=1,r=.5,o,a=n,c=n){if(Yi.test(e)&&(e=parseFloat(e),e=Ft(c.min,c.max,e/100)-c.min),typeof e!="number")return;let d=Ft(a.min,a.max,r);n===a&&(d-=e),n.min=_v(n.min,e,t,d,o),n.max=_v(n.max,e,t,d,o)}function yv(n,e,[t,r,o],a,c){Xw(n,e[t],e[r],e[o],e.scale,a,c)}const qw=["x","scaleX","originX"],Yw=["y","scaleY","originY"];function Sv(n,e,t,r){yv(n.x,e,qw,t?t.x:void 0,r?r.x:void 0),yv(n.y,e,Yw,t?t.y:void 0,r?r.y:void 0)}function Mv(n){return n.translate===0&&n.scale===1}function Sy(n){return Mv(n.x)&&Mv(n.y)}function Ev(n,e){return n.min===e.min&&n.max===e.max}function $w(n,e){return Ev(n.x,e.x)&&Ev(n.y,e.y)}function Tv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function My(n,e){return Tv(n.x,e.x)&&Tv(n.y,e.y)}function wv(n){return On(n.x)/On(n.y)}function Av(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Hi(n){return[n("x"),n("y")]}function Kw(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:f,rotate:g,pathRotation:v,rotateX:m,rotateY:_,skewX:E,skewY:w}=t;f&&(r=`perspective(${f}px) ${r}`),g&&(r+=`rotate(${g}deg) `),v&&(r+=`rotate(${v}deg) `),m&&(r+=`rotateX(${m}deg) `),_&&(r+=`rotateY(${_}deg) `),E&&(r+=`skewX(${E}deg) `),w&&(r+=`skewY(${w}deg) `)}const d=n.x.scale*e.x,h=n.y.scale*e.y;return(d!==1||h!==1)&&(r+=`scale(${d}, ${h})`),r||"none"}const Ey=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Zw=Ey.length,bv=n=>typeof n=="string"?parseFloat(n):n,Cv=n=>typeof n=="number"||qe.test(n);function Qw(n,e,t,r,o,a){o?(n.opacity=Ft(0,t.opacity??1,Jw(r)),n.opacityExit=Ft(e.opacity??1,0,eA(r))):a&&(n.opacity=Ft(e.opacity??1,t.opacity??1,r));for(let c=0;c<Zw;c++){const d=Ey[c];let h=Rv(e,d),f=Rv(t,d);if(h===void 0&&f===void 0)continue;h||(h=0),f||(f=0),h===0||f===0||Cv(h)===Cv(f)?(n[d]=Math.max(Ft(bv(h),bv(f),r),0),(Yi.test(f)||Yi.test(h))&&(n[d]+="%")):n[d]=f}(e.rotate||t.rotate)&&(n.rotate=Ft(e.rotate||0,t.rotate||0,r))}function Rv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Jw=Ty(0,.5,m_),eA=Ty(.5,.95,gi);function Ty(n,e,t){return r=>r<n?0:r>e?1:t(Ga(n,e,r))}function tA(n,e,t){const r=En(n)?n:Lo(n);return r.start(Np("",r,e,t)),r.animation}function ja(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}const nA=(n,e)=>n.depth-e.depth;class iA{constructor(){this.children=[],this.isDirty=!1}add(e){yp(this.children,e),this.isDirty=!0}remove(e){Yc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(nA),this.isDirty=!1,this.children.forEach(e)}}function rA(n,e){const t=Fn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(ns(r),n(a-e))};return Ot.setup(r,!0),()=>ns(r)}function Bc(n){return En(n)?n.get():n}class sA{constructor(){this.members=[]}add(e){yp(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(Yc(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(Yc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,a,c;(r=(t=e.options).onExitComplete)==null||r.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Vc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},df=["","X","Y","Z"],oA=1e3;let aA=0;function ff(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function wy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=X_(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ot,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&wy(r)}function Ay({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},d=e==null?void 0:e()){this.id=aA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(uA),this.nodes.forEach(gA),this.nodes.forEach(vA),this.nodes.forEach(dA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new iA)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Mp),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const h=this.eventHandlers.get(c);h&&h.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=kp(c)&&!cw(c),this.instance=c;const{layoutId:d,layout:h,visualElement:f}=this.options;if(f&&!f.current&&f.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||d)&&(this.isLayoutDirty=!0),n){let g,v=0;const m=()=>this.root.updateBlockedByResize=!1;Ot.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,g&&g(),g=rA(m,250),Vc.hasAnimatedSinceResize&&(Vc.hasAnimatedSinceResize=!1,this.nodes.forEach(Lv)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&f&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:m,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||f.getDefaultTransition()||MA,{onLayoutAnimationStart:w,onLayoutAnimationComplete:y}=f.getProps(),S=!this.targetLayout||!My(this.targetLayout,_),b=!v&&m;if(this.options.layoutRoot||this.resumeFrom||b||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...Lp(E,"layout"),onPlay:w,onComplete:y};(f.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(g,b,D.path)}else v||Lv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ns(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:d,layout:h}=this.options;if(d===void 0&&!h)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const h=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),h&&this.nodes.forEach(hA),this.nodes.forEach(Pv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Dv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(pA),this.nodes.forEach(mA),this.nodes.forEach(lA),this.nodes.forEach(cA)):this.nodes.forEach(Dv),this.clearAllSnapshots();const d=Fn.now();Mn.delta=Qi(0,1e3/60,d-Mn.timestamp),Mn.timestamp=d,Mn.isProcessing=!0,nf.update.process(Mn),nf.preRender.process(Mn),nf.render.process(Mn),Mn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(fA),this.sharedNodes.forEach(_A)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!On(this.snapshot.measuredBox.x)&&!On(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=un()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!Sy(this.projectionDelta),h=this.getTransformTemplate(),f=h?h(this.latestValues,""):void 0,g=f!==this.prevTransformTemplateValue;c&&this.instance&&(d||ws(this.latestValues)||g)&&(o(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let h=this.removeElementScroll(d);return c&&(h=this.removeTransform(h)),EA(h),{animationId:this.root.animationId,measuredBox:d,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:c}=this.options;if(!c)return un();const d=c.measureViewportBox();if(!(((f=this.scroll)==null?void 0:f.wasRoot)||this.path.some(TA))){const{scroll:g}=this.root;g&&(Wi(d.x,g.offset.x),Wi(d.y,g.offset.y))}return d}removeElementScroll(c){var h;const d=un();if(wi(d,c),(h=this.scroll)!=null&&h.wasRoot)return d;for(let f=0;f<this.path.length;f++){const g=this.path[f],{scroll:v,options:m}=g;g!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&wi(d,c),Wi(d.x,v.offset.x),Wi(d.y,v.offset.y))}return d}applyTransform(c,d=!1,h){var g,v;const f=h||un();wi(f,c);for(let m=0;m<this.path.length;m++){const _=this.path[m];!d&&_.options.layoutScroll&&_.scroll&&_!==_.root&&(Wi(f.x,-_.scroll.offset.x),Wi(f.y,-_.scroll.offset.y)),ws(_.latestValues)&&kc(f,_.latestValues,(g=_.layout)==null?void 0:g.layoutBox)}return ws(this.latestValues)&&kc(f,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),f}removeTransform(c){var h;const d=un();wi(d,c);for(let f=0;f<this.path.length;f++){const g=this.path[f];if(!ws(g.latestValues))continue;let v;g.instance&&(_h(g.latestValues)&&g.updateSnapshot(),v=un(),wi(v,g.measurePageBox())),Sv(d,g.latestValues,(h=g.snapshot)==null?void 0:h.layoutBox,v)}return ws(this.latestValues)&&Sv(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!this.layout||!(g||v))return;this.resolvedRelativeTargetAt=Mn.timestamp;const m=this.getClosestProjectingParent();m&&this.linkedParentVersion!==m.layoutVersion&&!m.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&m&&m.layout?this.createRelativeTarget(m,this.layout.layoutBox,m.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=un(),this.targetWithTransforms=un()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),jw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):wi(this.target,this.layout.layoutBox),cy(this.target,this.targetDelta)):wi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?this.createRelativeTarget(m,this.target,m.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||_h(this.parent.latestValues)||ly(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,d,h){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=un(),this.relativeTargetOrigin=un(),nu(this.relativeTargetOrigin,d,h,this.options.layoutAnchor||void 0),wi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var E;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Mn.timestamp&&(h=!1),h)return;const{layout:f,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||g))return;wi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,m=this.treeScale.y;yw(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=un());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(mv(this.prevProjectionDelta.x,this.projectionDelta.x),mv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ba(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==m||!Av(this.projectionDelta.x,this.prevProjectionDelta.x)||!Av(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Co(),this.projectionDelta=Co(),this.projectionDeltaWithTransform=Co()}setAnimationOrigin(c,d=!1,h){const f=this.snapshot,g=f?f.latestValues:{},v={...this.latestValues},m=Co();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const _=un(),E=f?f.source:void 0,w=this.layout?this.layout.source:void 0,y=E!==w,S=this.getStack(),b=!S||S.members.length<=1,D=!!(y&&!b&&this.options.crossfade===!0&&!this.path.some(SA));this.animationProgress=0;let P;const O=h==null?void 0:h.interpolateProjection(c);this.mixTargetDelta=L=>{const U=L/1e3,M=O==null?void 0:O(U);M?(m.x.translate=M.x,m.x.scale=Ft(c.x.scale,1,U),m.x.origin=c.x.origin,m.x.originPoint=c.x.originPoint,m.y.translate=M.y,m.y.scale=Ft(c.y.scale,1,U),m.y.origin=c.y.origin,m.y.originPoint=c.y.originPoint):(Nv(m.x,c.x,U),Nv(m.y,c.y,U)),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(nu(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),yA(this.relativeTarget,this.relativeTargetOrigin,_,U),P&&$w(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=un()),wi(P,this.relativeTarget)),y&&(this.animationValues=v,Qw(v,g,this.latestValues,U,D,b)),M&&M.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=M.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=U},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var d,h,f;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(f=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||f.stop(),this.pendingAnimation&&(ns(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ot.update(()=>{Vc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Lo(0)),this.motionValue.jump(0,!1),this.currentAnimation=tA(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),c.onUpdate&&c.onUpdate(g)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(oA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:h,layout:f,latestValues:g}=c;if(!(!d||!h||!f)){if(this!==c&&this.layout&&f&&by(this.options.animationType,this.layout.layoutBox,f.layoutBox)){h=this.target||un();const v=On(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+v;const m=On(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+m}wi(d,h),kc(d,g),Ba(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new sA),this.sharedNodes.get(c).add(d);const f=d.options.initialPromotionConfig;d.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var d;const{layoutId:c}=this.options;return c?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:c}=this.options;return c?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:h}={}){const f=this.getStack();f&&f.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(d=!0),!d)return;const f={};h.z&&ff("z",c,f,this.animationValues);for(let g=0;g<df.length;g++)ff(`rotate${df[g]}`,c,f,this.animationValues),ff(`skew${df[g]}`,c,f,this.animationValues);c.render();for(const g in f)c.setStaticValue(g,f[g]),this.animationValues&&(this.animationValues[g]=f[g]);c.scheduleRender()}applyProjectionStyles(c,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=Bc(d==null?void 0:d.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none";return}const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=Bc(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!ws(this.latestValues)&&(c.transform=h?h({},""):"none",this.hasProjected=!1);return}c.visibility="";const g=f.animationValues||f.latestValues;this.applyTransformsToTarget();let v=Kw(this.projectionDeltaWithTransform,this.treeScale,g);h&&(v=h(g,v)),c.transform=v;const{x:m,y:_}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${_.origin*100}% 0`,f.animationValues?c.opacity=f===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:c.opacity=f===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in Sh){if(g[E]===void 0)continue;const{correct:w,applyTo:y,isCSSVariable:S}=Sh[E],b=v==="none"?g[E]:w(g[E],f);if(y){const D=y.length;for(let P=0;P<D;P++)c[y[P]]=b}else S?this.options.visualElement.renderState.vars[E]=b:c[E]=b}this.options.layoutId&&(c.pointerEvents=f===this?Bc(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(Pv),this.root.sharedNodes.clear()}}}function lA(n){n.updateLayout()}function cA(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")Hi(v=>{const m=c?e.measuredBox[v]:e.layoutBox[v],_=On(m);m.min=r[v].min,m.max=m.min+_});else if(a==="x"||a==="y"){const v=a==="x"?"y":"x";Mh(c?e.measuredBox[v]:e.layoutBox[v],r[v])}else by(a,e.layoutBox,r)&&Hi(v=>{const m=c?e.measuredBox[v]:e.layoutBox[v],_=On(r[v]);m.max=m.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+_)});const d=Co();Ba(d,r,e.layoutBox);const h=Co();c?Ba(h,n.applyTransform(o,!0),e.measuredBox):Ba(h,r,e.layoutBox);const f=!Sy(d);let g=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:_}=v;if(m&&_){const E=n.options.layoutAnchor||void 0,w=un();nu(w,e.layoutBox,m.layoutBox,E);const y=un();nu(y,r,_.layoutBox,E),My(w,y)||(g=!0),v.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=w,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:h,layoutDelta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function uA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function dA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function fA(n){n.clearSnapshot()}function Pv(n){n.clearMeasurements()}function hA(n){n.isLayoutDirty=!0,n.updateLayout()}function Dv(n){n.isLayoutDirty=!1}function pA(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function mA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Lv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function gA(n){n.resolveTargetDelta()}function vA(n){n.calcProjection()}function xA(n){n.resetSkewAndRotation()}function _A(n){n.removeLeadSnapshot()}function Nv(n,e,t){n.translate=Ft(e.translate,0,t),n.scale=Ft(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Iv(n,e,t,r){n.min=Ft(e.min,t.min,r),n.max=Ft(e.max,t.max,r)}function yA(n,e,t,r){Iv(n.x,e.x,t.x,r),Iv(n.y,e.y,t.y,r)}function SA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const MA={duration:.45,ease:[.4,0,.1,1]},Uv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Fv=Uv("applewebkit/")&&!Uv("chrome/")?Math.round:gi;function Ov(n){n.min=Fv(n.min),n.max=Fv(n.max)}function EA(n){Ov(n.x),Ov(n.y)}function by(n,e,t){return n==="position"||n==="preserve-aspect"&&!Ww(wv(e),wv(t),.2)}function TA(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const wA=Ay({attachResizeListener:(n,e)=>ja(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),hf={current:void 0},Cy=Ay({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!hf.current){const n=new wA({});n.mount(window),n.setOptions({layoutScroll:!0}),hf.current=n}return hf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Hp=ve.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function kv(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function AA(...n){return e=>{let t=!1;const r=n.map(o=>{const a=kv(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():kv(n[o],null)}}}}function bA(...n){return ve.useCallback(AA(...n),n)}class CA extends ve.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Ic(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=t.offsetParent,o=Ic(r)&&r.offsetWidth||0,a=Ic(r)&&r.offsetHeight||0,c=getComputedStyle(t),d=this.props.sizeRef.current;d.height=parseFloat(c.height),d.width=parseFloat(c.width),d.top=t.offsetTop,d.left=t.offsetLeft,d.right=o-d.width-d.left,d.bottom=a-d.height-d.top,d.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function RA({children:n,isPresent:e,anchorX:t,anchorY:r,root:o,pop:a}){var m;const c=ve.useId(),d=ve.useRef(null),h=ve.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:f}=ve.useContext(Hp),g=((m=n.props)==null?void 0:m.ref)??(n==null?void 0:n.ref),v=bA(d,g);return ve.useInsertionEffect(()=>{const{width:_,height:E,top:w,left:y,right:S,bottom:b,direction:D}=h.current;if(e||a===!1||!d.current||!_||!E)return;const P=D==="rtl",O=t==="left"?P?`right: ${S}`:`left: ${y}`:P?`left: ${y}`:`right: ${S}`,L=r==="bottom"?`bottom: ${b}`:`top: ${w}`;d.current.dataset.motionPopId=c;const U=document.createElement("style");f&&(U.nonce=f);const M=o??document.head;return M.appendChild(U),U.sheet&&U.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${_}px !important;
            height: ${E}px !important;
            ${O}px !important;
            ${L}px !important;
          }
        `),()=>{var N;(N=d.current)==null||N.removeAttribute("data-motion-pop-id"),M.contains(U)&&M.removeChild(U)}},[e]),C.jsx(CA,{isPresent:e,childRef:d,sizeRef:h,pop:a,children:a===!1?n:ve.cloneElement(n,{ref:v})})}const PA=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c,anchorX:d,anchorY:h,root:f})=>{const g=_p(DA),v=ve.useId();let m=!0,_=ve.useMemo(()=>(m=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:E=>{g.set(E,!0);for(const w of g.values())if(!w)return;r&&r()},register:E=>(g.set(E,!1),()=>g.delete(E))}),[t,g,r]);return a&&m&&(_={..._}),ve.useMemo(()=>{g.forEach((E,w)=>g.set(w,!1))},[t]),ve.useEffect(()=>{!t&&!g.size&&r&&r()},[t]),n=C.jsx(RA,{pop:c==="popLayout",isPresent:t,anchorX:d,anchorY:h,root:f,children:n}),C.jsx(du.Provider,{value:_,children:n})};function DA(){return new Map}function Ry(n=!0){const e=ve.useContext(du);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=ve.useId();ve.useEffect(()=>{if(n)return o(a)},[n]);const c=ve.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const ac=n=>n.key||"";function Bv(n){const e=[];return ve.Children.forEach(n,t=>{ve.isValidElement(t)&&e.push(t)}),e}const zc=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:d="left",anchorY:h="top",root:f})=>{const[g,v]=Ry(c),m=ve.useMemo(()=>Bv(n),[n]),_=c&&!g?[]:m.map(ac),E=ve.useRef(!0),w=ve.useRef(m),y=_p(()=>new Map),S=ve.useRef(new Set),[b,D]=ve.useState(m),[P,O]=ve.useState(m);i_(()=>{E.current=!1,w.current=m;for(let M=0;M<P.length;M++){const N=ac(P[M]);_.includes(N)?(y.delete(N),S.current.delete(N)):y.get(N)!==!0&&y.set(N,!1)}},[P,_.length,_.join("-")]);const L=[];if(m!==b){let M=[...m];for(let N=0;N<P.length;N++){const B=P[N],F=ac(B);_.includes(F)||(M.splice(N,0,B),L.push(B))}return a==="wait"&&L.length&&(M=L),O(Bv(M)),D(m),null}const{forceRender:U}=ve.useContext(xp);return C.jsx(C.Fragment,{children:P.map(M=>{const N=ac(M),B=c&&!g?!1:m===P||_.includes(N),F=()=>{if(S.current.has(N))return;if(y.has(N))S.current.add(N),y.set(N,!0);else return;let W=!0;y.forEach(J=>{J||(W=!1)}),W&&(U==null||U(),O(w.current),c&&(v==null||v()),r&&r())};return C.jsx(PA,{isPresent:B,initial:!E.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:f,onExitComplete:B?void 0:F,anchorX:d,anchorY:h,children:M},N)})})},Py=ve.createContext({strict:!1}),Vv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let zv=!1;function LA(){if(zv)return;const n={};for(const e in Vv)n[e]={isEnabled:t=>Vv[e].some(r=>!!t[r])};sy(n),zv=!0}function Dy(){return LA(),gw()}function NA(n){const e=Dy();for(const t in n)e[t]={...e[t],...n[t]};sy(e)}const IA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function iu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||IA.has(n)}let Ly=n=>!iu(n);function UA(n){typeof n=="function"&&(Ly=e=>e.startsWith("on")?!iu(e):n(e))}try{UA(require("@emotion/is-prop-valid").default)}catch{}function FA(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||En(n[o])||(Ly(o)||t===!0&&iu(o)||!e&&!iu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const mu=ve.createContext({});function OA(n,e){if(pu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Wa(t)?t:void 0,animate:Wa(r)?r:void 0}}return n.inherit!==!1?e:{}}function kA(n){const{initial:e,animate:t}=OA(n,ve.useContext(mu));return ve.useMemo(()=>({initial:e,animate:t}),[Gv(e),Gv(t)])}function Gv(n){return Array.isArray(n)?n.join(" "):n}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ny(n,e,t){for(const r in e)!En(e[r])&&!fy(r,t)&&(n[r]=e[r])}function BA({transformTemplate:n},e){return ve.useMemo(()=>{const t=Wp();return zp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function VA(n,e){const t=n.style||{},r={};return Ny(r,t,n),Object.assign(r,BA(n,e)),r}function zA(n,e){const t={},r=VA(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const Iy=()=>({...Wp(),attrs:{}});function GA(n,e,t,r){const o=ve.useMemo(()=>{const a=Iy();return hy(a,e,my(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};Ny(a,n.style,n),o.style={...a,...o.style}}return o}const HA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jp(n){return typeof n!="string"||n.includes("-")?!1:!!(HA.indexOf(n)>-1||/[A-Z]/u.test(n))}function WA(n,e,t,{latestValues:r},o,a=!1,c){const h=(c??jp(n)?GA:zA)(e,r,o,n),f=FA(e,typeof n=="string",a),g=n!==ve.Fragment?{...f,...h,ref:t}:{},{children:v}=e,m=ve.useMemo(()=>En(v)?v.get():v,[v]);return ve.createElement(n,{...g,children:m})}function jA({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:XA(t,r,o,n),renderState:e()}}function XA(n,e,t,r){const o={},a=r(n,{});for(const m in a)o[m]=Bc(a[m]);let{initial:c,animate:d}=n;const h=pu(n),f=iy(n);e&&f&&!h&&n.inherit!==!1&&(c===void 0&&(c=e.initial),d===void 0&&(d=e.animate));let g=t?t.initial===!1:!1;g=g||c===!1;const v=g?d:c;if(v&&typeof v!="boolean"&&!hu(v)){const m=Array.isArray(v)?v:[v];for(let _=0;_<m.length;_++){const E=Ip(n,m[_]);if(E){const{transitionEnd:w,transition:y,...S}=E;for(const b in S){let D=S[b];if(Array.isArray(D)){const P=g?D.length-1:0;D=D[P]}D!==null&&(o[b]=D)}for(const b in w)o[b]=w[b]}}}return o}const Uy=n=>(e,t)=>{const r=ve.useContext(mu),o=ve.useContext(du),a=()=>jA(n,e,r,o);return t?a():_p(a)},qA=Uy({scrapeMotionValuesFromProps:Gp,createRenderState:Wp}),YA=Uy({scrapeMotionValuesFromProps:gy,createRenderState:Iy}),$A=Symbol.for("motionComponentSymbol");function KA(n,e,t){const r=ve.useRef(t);ve.useInsertionEffect(()=>{r.current=t});const o=ve.useRef(null);return ve.useCallback(a=>{var d;a&&((d=n.onMount)==null||d.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=r.current;if(typeof c=="function")if(a){const h=c(a);typeof h=="function"&&(o.current=h)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const Fy=ve.createContext({});function wo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function ZA(n,e,t,r,o,a){var D,P;const{visualElement:c}=ve.useContext(mu),d=ve.useContext(Py),h=ve.useContext(du),f=ve.useContext(Hp),g=f.reducedMotion,v=f.skipAnimations,m=ve.useRef(null),_=ve.useRef(!1);r=r||d.renderer,!m.current&&r&&(m.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g,skipAnimations:v,isSVG:a}),_.current&&m.current&&(m.current.manuallyAnimateOnMount=!0));const E=m.current,w=ve.useContext(Fy);E&&!E.projection&&o&&(E.type==="html"||E.type==="svg")&&QA(m.current,t,o,w);const y=ve.useRef(!1);ve.useInsertionEffect(()=>{E&&y.current&&E.update(t,h)});const S=t[j_],b=ve.useRef(!!S&&typeof window<"u"&&!((D=window.MotionHandoffIsComplete)!=null&&D.call(window,S))&&((P=window.MotionHasOptimisedAnimation)==null?void 0:P.call(window,S)));return i_(()=>{_.current=!0,E&&(y.current=!0,window.MotionIsMounted=!0,E.updateFeatures(),E.scheduleRenderMicrotask(),b.current&&E.animationState&&E.animationState.animateChanges())}),ve.useEffect(()=>{E&&(!b.current&&E.animationState&&E.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var O;(O=window.MotionHandoffMarkAsComplete)==null||O.call(window,S)}),b.current=!1),E.enteringChildren=void 0)}),E}function QA(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:d,layoutScroll:h,layoutRoot:f,layoutAnchor:g,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Oy(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||d&&wo(d),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:h,layoutRoot:f,layoutAnchor:g})}function Oy(n){if(n)return n.options.allowProjection!==!1?n.projection:Oy(n.parent)}function pf(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&NA(r);const a=t?t==="svg":jp(n),c=a?YA:qA;function d(f,g){let v;const m={...ve.useContext(Hp),...f,layoutId:JA(f)},{isStatic:_}=m,E=kA(f),w=c(f,_);if(!_&&typeof window<"u"){eb();const y=tb(m);v=y.MeasureLayout,E.visualElement=ZA(n,w,m,o,y.ProjectionNode,a)}return C.jsxs(mu.Provider,{value:E,children:[v&&E.visualElement?C.jsx(v,{visualElement:E.visualElement,...m}):null,WA(n,f,KA(w,E.visualElement,g),w,_,e,a)]})}d.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const h=ve.forwardRef(d);return h[$A]=n,h}function JA({layoutId:n}){const e=ve.useContext(xp).id;return e&&n!==void 0?e+"-"+n:n}function eb(n,e){ve.useContext(Py).strict}function tb(n){const e=Dy(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function nb(n,e){if(typeof Proxy>"u")return pf;const t=new Map,r=(a,c)=>pf(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,pf(c,void 0,n,e)),t.get(c))})}const ib=(n,e)=>e.isSVG??jp(n)?new Nw(e):new bw(e,{allowProjection:n!==ve.Fragment});class rb extends rs{constructor(e){super(e),e.animationState||(e.animationState=kw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();hu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let sb=0;class ob extends rs{constructor(){super(...arguments),this.id=sb++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:c,custom:d}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const h=Is(this.node,c,d);if(h){const{transition:f,transitionEnd:g,...v}=h;for(const m in v)(a=this.node.getValue(m))==null||a.jump(v[m])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const ab={animation:{Feature:rb},exit:{Feature:ob}};function Za(n){return{point:{x:n.pageX,y:n.pageY}}}const lb=n=>e=>Op(e)&&n(e,Za(e));function Va(n,e,t,r){return ja(n,e,lb(t),r)}const ky=({current:n})=>n?n.ownerDocument.defaultView:null,Hv=(n,e)=>Math.abs(n-e);function cb(n,e){const t=Hv(n.x,e.x),r=Hv(n.y,e.y);return Math.sqrt(t**2+r**2)}const Wv=new Set(["auto","scroll"]);class By{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:d}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=_=>{this.handleScroll(_.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=lc(this.lastRawMoveEventInfo,this.transformPagePoint));const _=mf(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,w=cb(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!w)return;const{point:y}=_,{timestamp:S}=Mn;this.history.push({...y,timestamp:S});const{onStart:b,onMove:D}=this.handlers;E||(b&&b(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,_)},this.handlePointerMove=(_,E)=>{this.lastMoveEvent=_,this.lastRawMoveEventInfo=E,this.lastMoveEventInfo=lc(E,this.transformPagePoint),Ot.update(this.updatePoint,!0)},this.handlePointerUp=(_,E)=>{this.end();const{onEnd:w,onSessionEnd:y,resumeAnimation:S}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=mf(_.type==="pointercancel"?this.lastMoveEventInfo:lc(E,this.transformPagePoint),this.history);this.startEvent&&w&&w(_,b),y&&y(_,b)},!Op(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const h=Za(e),f=lc(h,this.transformPagePoint),{point:g}=f,{timestamp:v}=Mn;this.history=[{...g,timestamp:v}];const{onSessionStart:m}=t;m&&m(e,mf(f,this.history)),this.removeListeners=Ya(Va(this.contextWindow,"pointermove",this.handlePointerMove),Va(this.contextWindow,"pointerup",this.handlePointerUp),Va(this.contextWindow,"pointercancel",this.handlePointerUp)),d&&this.startScrollTracking(d)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(Wv.has(r.overflowX)||Wv.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),Ot.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ns(this.updatePoint)}}function lc(n,e){return e?{point:e(n.point)}:n}function jv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function mf({point:n},e){return{point:n,delta:jv(n,Vy(e)),offset:jv(n,ub(e)),velocity:db(e,.1)}}function ub(n){return n[0]}function Vy(n){return n[n.length-1]}function db(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Vy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ii(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>ii(e)*2&&(r=n[1]);const a=mi(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function fb(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Ft(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Ft(t,n,r.max):Math.min(n,t)),n}function Xv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function hb(n,{top:e,left:t,bottom:r,right:o}){return{x:Xv(n.x,t,o),y:Xv(n.y,e,r)}}function qv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function pb(n,e){return{x:qv(n.x,e.x),y:qv(n.y,e.y)}}function mb(n,e){let t=.5;const r=On(n),o=On(e);return o>r?t=Ga(e.min,e.max-r,n.min):r>o&&(t=Ga(n.min,n.max-o,e.min)),Qi(0,1,t)}function gb(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Eh=.35;function vb(n=Eh){return n===!1?n=0:n===!0&&(n=Eh),{x:Yv(n,"left","right"),y:Yv(n,"top","bottom")}}function Yv(n,e,t){return{min:$v(n,e),max:$v(n,t)}}function $v(n,e){return typeof n=="number"?n:n[e]||0}const xb=new WeakMap;class _b{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=un(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(Za(v).point),this.stopAnimation()},c=(v,m)=>{const{drag:_,dragPropagation:E,onDragStart:w}=this.getProps();if(_&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=XT(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=m,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Hi(S=>{let b=this.getAxisMotionValue(S).get()||0;if(Yi.test(b)){const{projection:D}=this.visualElement;if(D&&D.layout){const P=D.layout.layoutBox[S];P&&(b=On(P)*(parseFloat(b)/100))}}this.originPoint[S]=b}),w&&Ot.update(()=>w(v,m),!1,!0),hh(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},d=(v,m)=>{this.latestPointerEvent=v,this.latestPanInfo=m;const{dragPropagation:_,dragDirectionLock:E,onDirectionLock:w,onDrag:y}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:S}=m;if(E&&this.currentDirection===null){this.currentDirection=Sb(S),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",m.point,S),this.updateAxis("y",m.point,S),this.visualElement.render(),y&&Ot.update(()=>y(v,m),!1,!0)},h=(v,m)=>{this.latestPointerEvent=v,this.latestPanInfo=m,this.stop(v,m),this.latestPointerEvent=null,this.latestPanInfo=null},f=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new By(e,{onSessionStart:a,onStart:c,onMove:d,onSessionEnd:h,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:r,contextWindow:ky(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:d}=this.getProps();d&&Ot.postRender(()=>d(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!cc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=fb(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&wo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=hb(r.layoutBox,e):this.constraints=!1,this.elastic=vb(t),o!==this.constraints&&!wo(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Hi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=gb(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!wo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=Sw(r,o.root,this.visualElement.getTransformPagePoint());let c=pb(o.layout.layoutBox,a);if(t){const d=t(xw(c));this.hasMutatedConstraints=!!d,d&&(c=ay(d))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),h=this.constraints||{},f=Hi(g=>{if(!cc(g,t,this.currentDirection))return;let v=h&&h[g]||{};(c===!0||c===g)&&(v={min:0,max:0});const m=o?200:1e6,_=o?40:1e7,E={type:"inertia",velocity:r?e[g]:0,bounceStiffness:m,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(g,E)});return Promise.all(f).then(d)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return hh(this.visualElement,e),r.start(Np(e,r,0,t,this.visualElement,!1))}stopAnimation(){Hi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Hi(t=>{const{drag:r}=this.getProps();if(!cc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:d}=o.layout.layoutBox[t],h=a.get()||0;a.set(e[t]-Ft(c,d,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!wo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Hi(c=>{const d=this.getAxisMotionValue(c);if(d&&this.constraints!==!1){const h=d.get();o[c]=mb({min:h,max:h},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Hi(c=>{if(!cc(c,e,null))return;const d=this.getAxisMotionValue(c),{min:h,max:f}=this.constraints[c];d.set(Ft(h,f,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;xb.set(this.visualElement,this);const e=this.visualElement.current,t=Va(e,"pointerdown",f=>{const{drag:g,dragListener:v=!0}=this.getProps(),m=f.target,_=m!==e&&QT(m);g&&v&&!_&&this.start(f)});let r;const o=()=>{const{dragConstraints:f}=this.getProps();wo(f)&&f.current&&(this.constraints=this.resolveRefConstraints(),r||(r=yb(e,f.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Ot.read(o);const d=ja(window,"resize",()=>this.scalePositionWithinConstraints()),h=a.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:g})=>{this.isDragging&&g&&(Hi(v=>{const m=this.getAxisMotionValue(v);m&&(this.originPoint[v]+=f[v].translate,m.set(m.get()+f[v].translate))}),this.visualElement.render())}));return()=>{d(),t(),c(),h&&h(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Eh,dragMomentum:d=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:d}}}function Kv(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function yb(n,e,t){const r=iv(n,Kv(t)),o=iv(e,Kv(t));return()=>{r(),o()}}function cc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function Sb(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Mb extends rs{constructor(e){super(e),this.removeGroupControls=gi,this.removeListeners=gi,this.controls=new _b(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||gi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const gf=n=>(e,t)=>{n&&Ot.update(()=>n(e,t),!1,!0)};class Eb extends rs{constructor(){super(...arguments),this.removePointerDownListener=gi}onPointerDown(e){this.session=new By(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ky(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:gf(e),onStart:gf(t),onMove:gf(r),onEnd:(a,c)=>{delete this.session,o&&Ot.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Va(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vf=!1;class Tb extends ve.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),vf&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Vc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),vf=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Ot.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),Fp.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;vf=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function zy(n){const[e,t]=Ry(),r=ve.useContext(xp);return C.jsx(Tb,{...n,layoutGroup:r,switchLayoutGroup:ve.useContext(Fy),isPresent:e,safeToRemove:t})}const wb={pan:{Feature:Eb},drag:{Feature:Mb,ProjectionNode:Cy,MeasureLayout:zy}};function Zv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&Ot.postRender(()=>a(e,Za(e)))}class Ab extends rs{mount(){const{current:e}=this.node;e&&(this.unmount=YT(e,(t,r)=>(Zv(this.node,r,"Start"),o=>Zv(this.node,o,"End"))))}unmount(){}}class bb extends rs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ya(ja(this.node.current,"focus",()=>this.onFocus()),ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qv(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&Ot.postRender(()=>a(e,Za(e)))}class Cb extends rs{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=ew(e,(o,a)=>(Qv(this.node,a,"Start"),(c,{success:d})=>Qv(this.node,c,d?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Th=new WeakMap,xf=new WeakMap,Rb=n=>{const e=Th.get(n.target);e&&e(n)},Pb=n=>{n.forEach(Rb)};function Db({root:n,...e}){const t=n||document;xf.has(t)||xf.set(t,{});const r=xf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Pb,{root:n,...e})),r[o]}function Lb(n,e,t){const r=Db(e);return Th.set(n,t),r.observe(n),()=>{Th.delete(n),r.unobserve(n)}}const Nb={some:0,all:1};class Ib extends rs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var h;(h=this.stopObserver)==null||h.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:Nb[o]},d=f=>{const{isIntersecting:g}=f;if(this.isInView===g||(this.isInView=g,a&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:v,onViewportLeave:m}=this.node.getProps(),_=g?v:m;_&&_(f)};this.stopObserver=Lb(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Ub(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Ub({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Fb={inView:{Feature:Ib},tap:{Feature:Cb},focus:{Feature:bb},hover:{Feature:Ab}},Ob={layout:{ProjectionNode:Cy,MeasureLayout:zy}},kb={...ab,...Fb,...wb,...Ob},ni=nb(kb,ib);function Bb({text:n,className:e=""}){const[t,r]=ve.useState(!1),o=ve.useRef(null);ve.useEffect(()=>{const c=new IntersectionObserver(d=>{d[0].isIntersecting&&r(!0)},{threshold:.1});return o.current&&c.observe(o.current),()=>c.disconnect()},[]);const a=n.split(" ");return C.jsx("p",{ref:o,className:e,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",rowGap:"0.1em"},children:a.map((c,d)=>C.jsx(ni.span,{initial:{filter:"blur(10px)",opacity:0,y:50},animate:t?{filter:["blur(10px)","blur(5px)","blur(0px)"],opacity:[0,.5,1],y:[50,-5,0]}:{},transition:{duration:.7,times:[0,.5,1],ease:"easeOut",delay:d*100/1e3},style:{display:"inline-block",marginRight:"0.28em"},children:c},d))})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="184",Vb=0,Jv=1,zb=2,Gc=1,Gb=2,Ua=3,is=0,Yn=1,xr=2,yr=0,Ro=1,ex=2,tx=3,nx=4,Hb=5,bs=100,Wb=101,jb=102,Xb=103,qb=104,Yb=200,$b=201,Kb=202,Zb=203,wh=204,Ah=205,Qb=206,Jb=207,eC=208,tC=209,nC=210,iC=211,rC=212,sC=213,oC=214,bh=0,Ch=1,Rh=2,No=3,Ph=4,Dh=5,Lh=6,Nh=7,Gy=0,aC=1,lC=2,$i=0,Hy=1,Wy=2,jy=3,Xy=4,qy=5,Yy=6,$y=7,Ky=300,Us=301,Io=302,_f=303,yf=304,gu=306,Ih=1e3,_r=1001,Uh=1002,Tn=1003,cC=1004,uc=1005,Dn=1006,Sf=1007,Ds=1008,pi=1009,Zy=1010,Qy=1011,Xa=1012,qp=1013,Ji=1014,Xi=1015,Er=1016,Yp=1017,$p=1018,qa=1020,Jy=35902,eS=35899,tS=1021,nS=1022,Li=1023,Tr=1026,Ls=1027,iS=1028,Kp=1029,Fs=1030,Zp=1031,Qp=1033,Hc=33776,Wc=33777,jc=33778,Xc=33779,Fh=35840,Oh=35841,kh=35842,Bh=35843,Vh=36196,zh=37492,Gh=37496,Hh=37488,Wh=37489,ru=37490,jh=37491,Xh=37808,qh=37809,Yh=37810,$h=37811,Kh=37812,Zh=37813,Qh=37814,Jh=37815,ep=37816,tp=37817,np=37818,ip=37819,rp=37820,sp=37821,op=36492,ap=36494,lp=36495,cp=36283,up=36284,su=36285,dp=36286,uC=3200,ix=0,dC=1,Qr="",hi="srgb",ou="srgb-linear",au="linear",Lt="srgb",uo=7680,rx=519,fC=512,hC=513,pC=514,Jp=515,mC=516,gC=517,em=518,vC=519,sx=35044,ox="300 es",qi=2e3,lu=2001;function xC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _C(){const n=cu("canvas");return n.style.display="block",n}const ax={};function lx(...n){const e="THREE."+n.shift();console.log(e,...n)}function rS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function rt(...n){n=rS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Tt(...n){n=rS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function fp(...n){const e=n.join(" ");e in ax||(ax[e]=!0,rt(...n))}function yC(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const SC={[bh]:Ch,[Rh]:Lh,[Ph]:Nh,[No]:Dh,[Ch]:bh,[Lh]:Rh,[Nh]:Ph,[Dh]:No};class ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=Math.PI/180,hp=180/Math.PI;function Qa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function MC(n,e){return(n%e+e)%e}function Ef(n,e,t){return(1-t)*n+t*e}function ba(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rm=class rm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rm.prototype.isVector2=!0;let Mt=rm;class zo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,d){let h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3],m=a[c+0],_=a[c+1],E=a[c+2],w=a[c+3];if(v!==w||h!==m||f!==_||g!==E){let y=h*m+f*_+g*E+v*w;y<0&&(m=-m,_=-_,E=-E,w=-w,y=-y);let S=1-d;if(y<.9995){const b=Math.acos(y),D=Math.sin(b);S=Math.sin(S*b)/D,d=Math.sin(d*b)/D,h=h*S+m*d,f=f*S+_*d,g=g*S+E*d,v=v*S+w*d}else{h=h*S+m*d,f=f*S+_*d,g=g*S+E*d,v=v*S+w*d;const b=1/Math.sqrt(h*h+f*f+g*g+v*v);h*=b,f*=b,g*=b,v*=b}}e[t]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const d=r[o],h=r[o+1],f=r[o+2],g=r[o+3],v=a[c],m=a[c+1],_=a[c+2],E=a[c+3];return e[t]=d*E+g*v+h*_-f*m,e[t+1]=h*E+g*m+f*v-d*_,e[t+2]=f*E+g*_+d*m-h*v,e[t+3]=g*E-d*v-h*m-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,d=Math.cos,h=Math.sin,f=d(r/2),g=d(o/2),v=d(a/2),m=h(r/2),_=h(o/2),E=h(a/2);switch(c){case"XYZ":this._x=m*g*v+f*_*E,this._y=f*_*v-m*g*E,this._z=f*g*E+m*_*v,this._w=f*g*v-m*_*E;break;case"YXZ":this._x=m*g*v+f*_*E,this._y=f*_*v-m*g*E,this._z=f*g*E-m*_*v,this._w=f*g*v+m*_*E;break;case"ZXY":this._x=m*g*v-f*_*E,this._y=f*_*v+m*g*E,this._z=f*g*E+m*_*v,this._w=f*g*v-m*_*E;break;case"ZYX":this._x=m*g*v-f*_*E,this._y=f*_*v+m*g*E,this._z=f*g*E-m*_*v,this._w=f*g*v+m*_*E;break;case"YZX":this._x=m*g*v+f*_*E,this._y=f*_*v+m*g*E,this._z=f*g*E-m*_*v,this._w=f*g*v-m*_*E;break;case"XZY":this._x=m*g*v-f*_*E,this._y=f*_*v-m*g*E,this._z=f*g*E+m*_*v,this._w=f*g*v+m*_*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],d=t[5],h=t[9],f=t[2],g=t[6],v=t[10],m=r+d+v;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(g-h)*_,this._y=(a-f)*_,this._z=(c-o)*_}else if(r>d&&r>v){const _=2*Math.sqrt(1+r-d-v);this._w=(g-h)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+f)/_}else if(d>v){const _=2*Math.sqrt(1+d-r-v);this._w=(a-f)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(h+g)/_}else{const _=2*Math.sqrt(1+v-r-d);this._w=(c-o)/_,this._x=(a+f)/_,this._y=(h+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,d=t._x,h=t._y,f=t._z,g=t._w;return this._x=r*g+c*d+o*f-a*h,this._y=o*g+c*h+a*d-r*f,this._z=a*g+c*f+r*h-o*d,this._w=c*g-r*d-o*h-a*f,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,a=-a,c=-c,d=-d);let h=1-t;if(d<.9995){const f=Math.acos(d),g=Math.sin(f);h=Math.sin(h*f)/g,t=Math.sin(t*f)/g,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sm=class sm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,d=e.z,h=e.w,f=2*(c*o-d*r),g=2*(d*t-a*o),v=2*(a*r-c*t);return this.x=t+h*f+c*v-d*g,this.y=r+h*g+d*f-a*v,this.z=o+h*v+a*g-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,d=t.y,h=t.z;return this.x=o*h-a*d,this.y=a*c-r*h,this.z=r*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tf.copy(this).projectOnVector(e),this.sub(Tf)}reflect(e){return this.sub(Tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sm.prototype.isVector3=!0;let ae=sm;const Tf=new ae,cx=new zo,om=class om{constructor(e,t,r,o,a,c,d,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,d,h,f)}set(e,t,r,o,a,c,d,h,f){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=a,g[5]=h,g[6]=r,g[7]=c,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],d=r[3],h=r[6],f=r[1],g=r[4],v=r[7],m=r[2],_=r[5],E=r[8],w=o[0],y=o[3],S=o[6],b=o[1],D=o[4],P=o[7],O=o[2],L=o[5],U=o[8];return a[0]=c*w+d*b+h*O,a[3]=c*y+d*D+h*L,a[6]=c*S+d*P+h*U,a[1]=f*w+g*b+v*O,a[4]=f*y+g*D+v*L,a[7]=f*S+g*P+v*U,a[2]=m*w+_*b+E*O,a[5]=m*y+_*D+E*L,a[8]=m*S+_*P+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],d=e[5],h=e[6],f=e[7],g=e[8];return t*c*g-t*d*f-r*a*g+r*d*h+o*a*f-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],d=e[5],h=e[6],f=e[7],g=e[8],v=g*c-d*f,m=d*h-g*a,_=f*a-c*h,E=t*v+r*m+o*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(o*f-g*r)*w,e[2]=(d*r-o*c)*w,e[3]=m*w,e[4]=(g*t-o*h)*w,e[5]=(o*a-d*t)*w,e[6]=_*w,e[7]=(r*h-f*t)*w,e[8]=(c*t-r*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,d){const h=Math.cos(a),f=Math.sin(a);return this.set(r*h,r*f,-r*(h*c+f*d)+c+e,-o*f,o*h,-o*(-f*c+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(wf.makeScale(e,t)),this}rotate(e){return this.premultiply(wf.makeRotation(-e)),this}translate(e,t){return this.premultiply(wf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};om.prototype.isMatrix3=!0;let ut=om;const wf=new ut,ux=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dx=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EC(){const n={enabled:!0,workingColorSpace:ou,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Lt&&(o.r=Sr(o.r),o.g=Sr(o.g),o.b=Sr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(o.r=Po(o.r),o.g=Po(o.g),o.b=Po(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?au:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return fp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return fp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[ou]:{primaries:e,whitePoint:r,transfer:au,toXYZ:ux,fromXYZ:dx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:ux,fromXYZ:dx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),n}const _t=EC();function Sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fo;class TC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{fo===void 0&&(fo=cu("canvas")),fo.width=e.width,fo.height=e.height;const o=fo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=fo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Sr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Sr(t[r]/255)*255):t[r]=Sr(t[r]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wC=0;class tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wC++}),this.uuid=Qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?a.push(Af(o[c].image)):a.push(Af(o[c]))}else a=Af(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Af(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?TC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let AC=0;const bf=new ae;class kn extends ks{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,r=_r,o=_r,a=Dn,c=Ds,d=Li,h=pi,f=kn.DEFAULT_ANISOTROPY,g=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AC++}),this.uuid=Qa(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bf).x}get height(){return this.source.getSize(bf).y}get depth(){return this.source.getSize(bf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ky)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Ky;kn.DEFAULT_ANISOTROPY=1;const am=class am{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const h=e.elements,f=h[0],g=h[4],v=h[8],m=h[1],_=h[5],E=h[9],w=h[2],y=h[6],S=h[10];if(Math.abs(g-m)<.01&&Math.abs(v-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(v+w)<.1&&Math.abs(E+y)<.1&&Math.abs(f+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(f+1)/2,P=(_+1)/2,O=(S+1)/2,L=(g+m)/4,U=(v+w)/4,M=(E+y)/4;return D>P&&D>O?D<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(D),o=L/r,a=U/r):P>O?P<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(P),r=L/o,a=M/o):O<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(O),r=U/a,o=M/a),this.set(r,o,a,t),this}let b=Math.sqrt((y-E)*(y-E)+(v-w)*(v-w)+(m-g)*(m-g));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(v-w)/b,this.z=(m-g)/b,this.w=Math.acos((f+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};am.prototype.isVector4=!0;let nn=am;class bC extends ks{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new kn(o),c=r.count;for(let d=0;d<c;d++)this.textures[d]=a.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new tm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends bC{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class sS extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CC extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=class uu{constructor(e,t,r,o,a,c,d,h,f,g,v,m,_,E,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,d,h,f,g,v,m,_,E,w,y)}set(e,t,r,o,a,c,d,h,f,g,v,m,_,E,w,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=a,S[5]=c,S[9]=d,S[13]=h,S[2]=f,S[6]=g,S[10]=v,S[14]=m,S[3]=_,S[7]=E,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ho.setFromMatrixColumn(e,0).length(),a=1/ho.setFromMatrixColumn(e,1).length(),c=1/ho.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(o),f=Math.sin(o),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=c*g,_=c*v,E=d*g,w=d*v;t[0]=h*g,t[4]=-h*v,t[8]=f,t[1]=_+E*f,t[5]=m-w*f,t[9]=-d*h,t[2]=w-m*f,t[6]=E+_*f,t[10]=c*h}else if(e.order==="YXZ"){const m=h*g,_=h*v,E=f*g,w=f*v;t[0]=m+w*d,t[4]=E*d-_,t[8]=c*f,t[1]=c*v,t[5]=c*g,t[9]=-d,t[2]=_*d-E,t[6]=w+m*d,t[10]=c*h}else if(e.order==="ZXY"){const m=h*g,_=h*v,E=f*g,w=f*v;t[0]=m-w*d,t[4]=-c*v,t[8]=E+_*d,t[1]=_+E*d,t[5]=c*g,t[9]=w-m*d,t[2]=-c*f,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const m=c*g,_=c*v,E=d*g,w=d*v;t[0]=h*g,t[4]=E*f-_,t[8]=m*f+w,t[1]=h*v,t[5]=w*f+m,t[9]=_*f-E,t[2]=-f,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,_=c*f,E=d*h,w=d*f;t[0]=h*g,t[4]=w-m*v,t[8]=E*v+_,t[1]=v,t[5]=c*g,t[9]=-d*g,t[2]=-f*g,t[6]=_*v+E,t[10]=m-w*v}else if(e.order==="XZY"){const m=c*h,_=c*f,E=d*h,w=d*f;t[0]=h*g,t[4]=-v,t[8]=f*g,t[1]=m*v+w,t[5]=c*g,t[9]=_*v-E,t[2]=E*v-_,t[6]=d*g,t[10]=w*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RC,e,PC)}lookAt(e,t,r){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),jr.crossVectors(r,ei),jr.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),jr.crossVectors(r,ei)),jr.normalize(),dc.crossVectors(ei,jr),o[0]=jr.x,o[4]=dc.x,o[8]=ei.x,o[1]=jr.y,o[5]=dc.y,o[9]=ei.y,o[2]=jr.z,o[6]=dc.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],d=r[4],h=r[8],f=r[12],g=r[1],v=r[5],m=r[9],_=r[13],E=r[2],w=r[6],y=r[10],S=r[14],b=r[3],D=r[7],P=r[11],O=r[15],L=o[0],U=o[4],M=o[8],N=o[12],B=o[1],F=o[5],W=o[9],J=o[13],se=o[2],z=o[6],$=o[10],j=o[14],X=o[3],te=o[7],oe=o[11],V=o[15];return a[0]=c*L+d*B+h*se+f*X,a[4]=c*U+d*F+h*z+f*te,a[8]=c*M+d*W+h*$+f*oe,a[12]=c*N+d*J+h*j+f*V,a[1]=g*L+v*B+m*se+_*X,a[5]=g*U+v*F+m*z+_*te,a[9]=g*M+v*W+m*$+_*oe,a[13]=g*N+v*J+m*j+_*V,a[2]=E*L+w*B+y*se+S*X,a[6]=E*U+w*F+y*z+S*te,a[10]=E*M+w*W+y*$+S*oe,a[14]=E*N+w*J+y*j+S*V,a[3]=b*L+D*B+P*se+O*X,a[7]=b*U+D*F+P*z+O*te,a[11]=b*M+D*W+P*$+O*oe,a[15]=b*N+D*J+P*j+O*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],d=e[5],h=e[9],f=e[13],g=e[2],v=e[6],m=e[10],_=e[14],E=e[3],w=e[7],y=e[11],S=e[15],b=h*_-f*m,D=d*_-f*v,P=d*m-h*v,O=c*_-f*g,L=c*m-h*g,U=c*v-d*g;return t*(w*b-y*D+S*P)-r*(E*b-y*O+S*L)+o*(E*D-w*O+S*U)-a*(E*P-w*L+y*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],d=e[5],h=e[6],f=e[7],g=e[8],v=e[9],m=e[10],_=e[11],E=e[12],w=e[13],y=e[14],S=e[15],b=t*d-r*c,D=t*h-o*c,P=t*f-a*c,O=r*h-o*d,L=r*f-a*d,U=o*f-a*h,M=g*w-v*E,N=g*y-m*E,B=g*S-_*E,F=v*y-m*w,W=v*S-_*w,J=m*S-_*y,se=b*J-D*W+P*F+O*B-L*N+U*M;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/se;return e[0]=(d*J-h*W+f*F)*z,e[1]=(o*W-r*J-a*F)*z,e[2]=(w*U-y*L+S*O)*z,e[3]=(m*L-v*U-_*O)*z,e[4]=(h*B-c*J-f*N)*z,e[5]=(t*J-o*B+a*N)*z,e[6]=(y*P-E*U-S*D)*z,e[7]=(g*U-m*P+_*D)*z,e[8]=(c*W-d*B+f*M)*z,e[9]=(r*B-t*W-a*M)*z,e[10]=(E*L-w*P+S*b)*z,e[11]=(v*P-g*L-_*b)*z,e[12]=(d*N-c*F-h*M)*z,e[13]=(t*F-r*N+o*M)*z,e[14]=(w*D-E*O-y*b)*z,e[15]=(g*O-v*D+m*b)*z,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,d=e.y,h=e.z,f=a*c,g=a*d;return this.set(f*c+r,f*d-o*h,f*h+o*d,0,f*d+o*h,g*d+r,g*h-o*c,0,f*h-o*d,g*h+o*c,a*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,d=t._z,h=t._w,f=a+a,g=c+c,v=d+d,m=a*f,_=a*g,E=a*v,w=c*g,y=c*v,S=d*v,b=h*f,D=h*g,P=h*v,O=r.x,L=r.y,U=r.z;return o[0]=(1-(w+S))*O,o[1]=(_+P)*O,o[2]=(E-D)*O,o[3]=0,o[4]=(_-P)*L,o[5]=(1-(m+S))*L,o[6]=(y+b)*L,o[7]=0,o[8]=(E+D)*U,o[9]=(y-b)*U,o[10]=(1-(m+w))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let c=ho.set(o[0],o[1],o[2]).length();const d=ho.set(o[4],o[5],o[6]).length(),h=ho.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ai.copy(this);const f=1/c,g=1/d,v=1/h;return Ai.elements[0]*=f,Ai.elements[1]*=f,Ai.elements[2]*=f,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,t.setFromRotationMatrix(Ai),r.x=c,r.y=d,r.z=h,this}makePerspective(e,t,r,o,a,c,d=qi,h=!1){const f=this.elements,g=2*a/(t-e),v=2*a/(r-o),m=(t+e)/(t-e),_=(r+o)/(r-o);let E,w;if(h)E=a/(c-a),w=c*a/(c-a);else if(d===qi)E=-(c+a)/(c-a),w=-2*c*a/(c-a);else if(d===lu)E=-c/(c-a),w=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=g,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=v,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=E,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,a,c,d=qi,h=!1){const f=this.elements,g=2/(t-e),v=2/(r-o),m=-(t+e)/(t-e),_=-(r+o)/(r-o);let E,w;if(h)E=1/(c-a),w=c/(c-a);else if(d===qi)E=-2/(c-a),w=-(c+a)/(c-a);else if(d===lu)E=-1/(c-a),w=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=g,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=v,f[9]=0,f[13]=_,f[2]=0,f[6]=0,f[10]=E,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};uu.prototype.isMatrix4=!0;let dn=uu;const ho=new ae,Ai=new dn,RC=new ae(0,0,0),PC=new ae(1,1,1),jr=new ae,dc=new ae,ei=new ae,fx=new dn,hx=new zo;class Os{constructor(e=0,t=0,r=0,o=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],d=o[8],h=o[1],f=o[5],g=o[9],v=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,_),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(d,_));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(d,a)):(this._x=Math.atan2(-g,_),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return fx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fx,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hx.setFromEuler(this),this.setFromQuaternion(hx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class oS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DC=0;const px=new ae,po=new zo,fr=new dn,fc=new ae,Ca=new ae,LC=new ae,NC=new zo,mx=new ae(1,0,0),gx=new ae(0,1,0),vx=new ae(0,0,1),xx={type:"added"},IC={type:"removed"},mo={type:"childadded",child:null},Cf={type:"childremoved",child:null};class ri extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const e=new ae,t=new Os,r=new zo,o=new ae(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new ut}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,t){return po.setFromAxisAngle(e,t),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(mx,e)}rotateY(e){return this.rotateOnAxis(gx,e)}rotateZ(e){return this.rotateOnAxis(vx,e)}translateOnAxis(e,t){return px.copy(e).applyQuaternion(this.quaternion),this.position.add(px.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mx,e)}translateY(e){return this.translateOnAxis(gx,e)}translateZ(e){return this.translateOnAxis(vx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fc.copy(e):fc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Ca,fc,this.up):fr.lookAt(fc,Ca,this.up),this.quaternion.setFromRotationMatrix(fr),o&&(fr.extractRotation(o.matrixWorld),po.setFromRotationMatrix(fr),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xx),mo.child=e,this.dispatchEvent(mo),mo.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IC),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xx),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,LC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,NC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,g=h.length;f<g;f++){const v=h[f];a(e.shapes,v)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(a(e.materials,this.material[h]));o.material=d}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(a(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),f=c(e.textures),g=c(e.images),v=c(e.shapes),m=c(e.skeletons),_=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),f.length>0&&(r.textures=f),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(d){const h=[];for(const f in d){const g=d[f];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ri.DEFAULT_UP=new ae(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hc extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UC={type:"move"};class Rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),S=this._getHandJoint(f,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],m=g.position.distanceTo(v.position),_=.02,E=.005;f.inputState.pinching&&m>_+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=_-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(UC)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new hc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const aS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Pf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class It{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=_t.workingColorSpace){return this.r=e,this.g=t,this.b=r,_t.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=_t.workingColorSpace){if(e=MC(e,1),t=yt(t,0,1),r=yt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Pf(c,a,e+1/3),this.g=Pf(c,a,e),this.b=Pf(c,a,e-1/3)}return _t.colorSpaceToWorking(this,o),this}setStyle(e,t=hi){function r(a){a!==void 0&&parseFloat(a)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=aS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return _t.workingToColorSpace(Pn.copy(this),e),Math.round(yt(Pn.r*255,0,255))*65536+Math.round(yt(Pn.g*255,0,255))*256+Math.round(yt(Pn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Pn.copy(this),t);const r=Pn.r,o=Pn.g,a=Pn.b,c=Math.max(r,o,a),d=Math.min(r,o,a);let h,f;const g=(d+c)/2;if(d===c)h=0,f=0;else{const v=c-d;switch(f=g<=.5?v/(c+d):v/(2-c-d),c){case r:h=(o-a)/v+(o<a?6:0);break;case o:h=(a-r)/v+2;break;case a:h=(r-o)/v+4;break}h/=6}return e.h=h,e.s=f,e.l=g,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=hi){_t.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,r=Pn.g,o=Pn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(pc);const r=Ef(Xr.h,pc.h,t),o=Ef(Xr.s,pc.s,t),a=Ef(Xr.l,pc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new It;It.NAMES=aS;class FC extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Os,this.environmentIntensity=1,this.environmentRotation=new Os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new ae,hr=new ae,Df=new ae,pr=new ae,go=new ae,vo=new ae,_x=new ae,Lf=new ae,Nf=new ae,If=new ae,Uf=new nn,Ff=new nn,Of=new nn;class Di{constructor(e=new ae,t=new ae,r=new ae){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),bi.subVectors(e,t),o.cross(bi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){bi.subVectors(o,t),hr.subVectors(r,t),Df.subVectors(e,t);const c=bi.dot(bi),d=bi.dot(hr),h=bi.dot(Df),f=hr.dot(hr),g=hr.dot(Df),v=c*f-d*d;if(v===0)return a.set(0,0,0),null;const m=1/v,_=(f*h-d*g)*m,E=(c*g-d*h)*m;return a.set(1-_-E,E,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,r,o,a,c,d,h){return this.getBarycoord(e,t,r,o,pr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,pr.x),h.addScaledVector(c,pr.y),h.addScaledVector(d,pr.z),h)}static getInterpolatedAttribute(e,t,r,o,a,c){return Uf.setScalar(0),Ff.setScalar(0),Of.setScalar(0),Uf.fromBufferAttribute(e,t),Ff.fromBufferAttribute(e,r),Of.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Uf,a.x),c.addScaledVector(Ff,a.y),c.addScaledVector(Of,a.z),c}static isFrontFacing(e,t,r,o){return bi.subVectors(r,t),hr.subVectors(e,t),bi.cross(hr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),bi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Di.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,d;go.subVectors(o,r),vo.subVectors(a,r),Lf.subVectors(e,r);const h=go.dot(Lf),f=vo.dot(Lf);if(h<=0&&f<=0)return t.copy(r);Nf.subVectors(e,o);const g=go.dot(Nf),v=vo.dot(Nf);if(g>=0&&v<=g)return t.copy(o);const m=h*v-g*f;if(m<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(go,c);If.subVectors(e,a);const _=go.dot(If),E=vo.dot(If);if(E>=0&&_<=E)return t.copy(a);const w=_*f-h*E;if(w<=0&&f>=0&&E<=0)return d=f/(f-E),t.copy(r).addScaledVector(vo,d);const y=g*E-_*v;if(y<=0&&v-g>=0&&_-E>=0)return _x.subVectors(a,o),d=(v-g)/(v-g+(_-E)),t.copy(o).addScaledVector(_x,d);const S=1/(y+w+m);return c=w*S,d=m*S,t.copy(r).addScaledVector(go,c).addScaledVector(vo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ja{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=a.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ci):Ci.fromBufferAttribute(a,c),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mc.copy(r.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),gc.subVectors(this.max,Ra),xo.subVectors(e.a,Ra),_o.subVectors(e.b,Ra),yo.subVectors(e.c,Ra),qr.subVectors(_o,xo),Yr.subVectors(yo,_o),Ss.subVectors(xo,yo);let t=[0,-qr.z,qr.y,0,-Yr.z,Yr.y,0,-Ss.z,Ss.y,qr.z,0,-qr.x,Yr.z,0,-Yr.x,Ss.z,0,-Ss.x,-qr.y,qr.x,0,-Yr.y,Yr.x,0,-Ss.y,Ss.x,0];return!kf(t,xo,_o,yo,gc)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,xo,_o,yo,gc))?!1:(vc.crossVectors(qr,Yr),t=[vc.x,vc.y,vc.z],kf(t,xo,_o,yo,gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ci=new ae,mc=new Ja,xo=new ae,_o=new ae,yo=new ae,qr=new ae,Yr=new ae,Ss=new ae,Ra=new ae,gc=new ae,vc=new ae,Ms=new ae;function kf(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){Ms.fromArray(n,a);const d=o.x*Math.abs(Ms.x)+o.y*Math.abs(Ms.y)+o.z*Math.abs(Ms.z),h=e.dot(Ms),f=t.dot(Ms),g=r.dot(Ms);if(Math.max(-Math.max(h,f,g),Math.min(h,f,g))>d)return!1}return!0}const on=new ae,xc=new Mt;let OC=0;class Zi extends ks{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=sx,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)xc.fromBufferAttribute(this,t),xc.applyMatrix3(e),this.setXY(t,xc.x,xc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ba(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ba(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ba(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ba(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ba(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),o=qn(o,this.array),a=qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class lS extends Zi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class cS extends Zi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Mr extends Zi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const kC=new Ja,Pa=new ae,Bf=new ae;class nm{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):kC.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Bf)),this.expandByPoint(Pa.copy(e.center).sub(Bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let BC=0;const fi=new dn,Vf=new ri,So=new ae,ti=new Ja,Da=new Ja,vn=new ae;class wr extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BC++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xC(e)?cS:lS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ut().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return Vf.lookAt(e),Vf.updateMatrix(),this.applyMatrix4(Vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Mr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const d=t[a];Da.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ti.min,Da.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Da.max),ti.expandByPoint(vn)):(ti.expandByPoint(Da.min),ti.expandByPoint(Da.max))}ti.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)vn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let a=0,c=t.length;a<c;a++){const d=t[a],h=this.morphTargetsRelative;for(let f=0,g=d.count;f<g;f++)vn.fromBufferAttribute(d,f),h&&(So.fromBufferAttribute(e,f),vn.add(So)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let M=0;M<r.count;M++)d[M]=new ae,h[M]=new ae;const f=new ae,g=new ae,v=new ae,m=new Mt,_=new Mt,E=new Mt,w=new ae,y=new ae;function S(M,N,B){f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,N),v.fromBufferAttribute(r,B),m.fromBufferAttribute(a,M),_.fromBufferAttribute(a,N),E.fromBufferAttribute(a,B),g.sub(f),v.sub(f),_.sub(m),E.sub(m);const F=1/(_.x*E.y-E.x*_.y);isFinite(F)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(v,-_.y).multiplyScalar(F),y.copy(v).multiplyScalar(_.x).addScaledVector(g,-E.x).multiplyScalar(F),d[M].add(w),d[N].add(w),d[B].add(w),h[M].add(y),h[N].add(y),h[B].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let M=0,N=b.length;M<N;++M){const B=b[M],F=B.start,W=B.count;for(let J=F,se=F+W;J<se;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new ae,P=new ae,O=new ae,L=new ae;function U(M){O.fromBufferAttribute(o,M),L.copy(O);const N=d[M];D.copy(N),D.sub(O.multiplyScalar(O.dot(N))).normalize(),P.crossVectors(L,N);const F=P.dot(h[M])<0?-1:1;c.setXYZW(M,D.x,D.y,D.z,F)}for(let M=0,N=b.length;M<N;++M){const B=b[M],F=B.start,W=B.count;for(let J=F,se=F+W;J<se;J+=3)U(e.getX(J+0)),U(e.getX(J+1)),U(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,_=r.count;m<_;m++)r.setXYZ(m,0,0,0);const o=new ae,a=new ae,c=new ae,d=new ae,h=new ae,f=new ae,g=new ae,v=new ae;if(e)for(let m=0,_=e.count;m<_;m+=3){const E=e.getX(m+0),w=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),g.subVectors(c,a),v.subVectors(o,a),g.cross(v),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),f.fromBufferAttribute(r,y),d.add(g),h.add(g),f.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,a),v.subVectors(o,a),g.cross(v),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,h){const f=d.array,g=d.itemSize,v=d.normalized,m=new f.constructor(h.length*g);let _=0,E=0;for(let w=0,y=h.length;w<y;w++){d.isInterleavedBufferAttribute?_=h[w]*d.data.stride+d.offset:_=h[w]*g;for(let S=0;S<g;S++)m[E++]=f[_++]}return new Zi(m,g,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wr,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],f=e(h,r);t.setAttribute(d,f)}const a=this.morphAttributes;for(const d in a){const h=[],f=a[d];for(let g=0,v=f.length;g<v;g++){const m=f[g],_=e(m,r);h.push(_)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const f=c[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const f=r[h];e.data.attributes[h]=f.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],g=[];for(let v=0,m=f.length;v<m;v++){const _=f[v];g.push(_.toJSON(e.data))}g.length>0&&(o[h]=g,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const f in o){const g=o[f];this.setAttribute(f,g.clone(t))}const a=e.morphAttributes;for(const f in a){const g=[],v=a[f];for(let m=0,_=v.length;m<_;m++)g.push(v[m].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,g=c.length;f<g;f++){const v=c[f];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let VC=0;class vu extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=Ro,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Ah,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(r.blending=this.blending),this.side!==is&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ah&&(r.blendDst=this.blendDst),this.blendEquation!==bs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const d in a){const h=a[d];delete h.metadata,c.push(h)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new ae,zf=new ae,_c=new ae,$r=new ae,Gf=new ae,yc=new ae,Hf=new ae;class zC{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){zf.copy(e).add(t).multiplyScalar(.5),_c.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(zf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(_c),d=$r.dot(this.direction),h=-$r.dot(_c),f=$r.lengthSq(),g=Math.abs(1-c*c);let v,m,_,E;if(g>0)if(v=c*h-d,m=c*d-h,E=a*g,v>=0)if(m>=-E)if(m<=E){const w=1/g;v*=w,m*=w,_=v*(v+c*m+2*d)+m*(c*v+m+2*h)+f}else m=a,v=Math.max(0,-(c*m+d)),_=-v*v+m*(m+2*h)+f;else m=-a,v=Math.max(0,-(c*m+d)),_=-v*v+m*(m+2*h)+f;else m<=-E?(v=Math.max(0,-(-c*a+d)),m=v>0?-a:Math.min(Math.max(-a,-h),a),_=-v*v+m*(m+2*h)+f):m<=E?(v=0,m=Math.min(Math.max(-a,-h),a),_=m*(m+2*h)+f):(v=Math.max(0,-(c*a+d)),m=v>0?a:Math.min(Math.max(-a,-h),a),_=-v*v+m*(m+2*h)+f);else m=c>0?-a:a,v=Math.max(0,-(c*m+d)),_=-v*v+m*(m+2*h)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(zf).addScaledVector(_c,m),_}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const r=gr.dot(this.direction),o=gr.dot(gr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,d,h;const f=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,m=this.origin;return f>=0?(r=(e.min.x-m.x)*f,o=(e.max.x-m.x)*f):(r=(e.max.x-m.x)*f,o=(e.min.x-m.x)*f),g>=0?(a=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(a=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(d=(e.min.z-m.z)*v,h=(e.max.z-m.z)*v):(d=(e.max.z-m.z)*v,h=(e.min.z-m.z)*v),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,r,o,a){Gf.subVectors(t,e),yc.subVectors(r,e),Hf.crossVectors(Gf,yc);let c=this.direction.dot(Hf),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;$r.subVectors(this.origin,e);const h=d*this.direction.dot(yc.crossVectors($r,yc));if(h<0)return null;const f=d*this.direction.dot(Gf.cross($r));if(f<0||h+f>c)return null;const g=-d*$r.dot(Hf);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uS extends vu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.combine=Gy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yx=new dn,Es=new zC,Sc=new nm,Sx=new ae,Mc=new ae,Ec=new ae,Tc=new ae,Wf=new ae,wc=new ae,Mx=new ae,Ac=new ae;class er extends ri{constructor(e=new wr,t=new uS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(a&&d){wc.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const g=d[h],v=a[h];g!==0&&(Wf.fromBufferAttribute(v,e),c?wc.addScaledVector(Wf,g):wc.addScaledVector(Wf.sub(t),g))}t.add(wc)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(a),Es.copy(e.ray).recast(e.near),!(Sc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Sc,Sx)===null||Es.origin.distanceToSquared(Sx)>(e.far-e.near)**2))&&(yx.copy(a).invert(),Es.copy(e.ray).applyMatrix4(yx),!(r.boundingBox!==null&&Es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,d=a.index,h=a.attributes.position,f=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,m=a.groups,_=a.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,w=m.length;E<w;E++){const y=m[E],S=c[y.materialIndex],b=Math.max(y.start,_.start),D=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let P=b,O=D;P<O;P+=3){const L=d.getX(P),U=d.getX(P+1),M=d.getX(P+2);o=bc(this,S,e,r,f,g,v,L,U,M),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,_.start),w=Math.min(d.count,_.start+_.count);for(let y=E,S=w;y<S;y+=3){const b=d.getX(y),D=d.getX(y+1),P=d.getX(y+2);o=bc(this,c,e,r,f,g,v,b,D,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,w=m.length;E<w;E++){const y=m[E],S=c[y.materialIndex],b=Math.max(y.start,_.start),D=Math.min(h.count,Math.min(y.start+y.count,_.start+_.count));for(let P=b,O=D;P<O;P+=3){const L=P,U=P+1,M=P+2;o=bc(this,S,e,r,f,g,v,L,U,M),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,_.start),w=Math.min(h.count,_.start+_.count);for(let y=E,S=w;y<S;y+=3){const b=y,D=y+1,P=y+2;o=bc(this,c,e,r,f,g,v,b,D,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function GC(n,e,t,r,o,a,c,d){let h;if(e.side===Yn?h=r.intersectTriangle(c,a,o,!0,d):h=r.intersectTriangle(o,a,c,e.side===is,d),h===null)return null;Ac.copy(d),Ac.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(Ac);return f<t.near||f>t.far?null:{distance:f,point:Ac.clone(),object:n}}function bc(n,e,t,r,o,a,c,d,h,f){n.getVertexPosition(d,Mc),n.getVertexPosition(h,Ec),n.getVertexPosition(f,Tc);const g=GC(n,e,t,r,Mc,Ec,Tc,Mx);if(g){const v=new ae;Di.getBarycoord(Mx,Mc,Ec,Tc,v),o&&(g.uv=Di.getInterpolatedAttribute(o,d,h,f,v,new Mt)),a&&(g.uv1=Di.getInterpolatedAttribute(a,d,h,f,v,new Mt)),c&&(g.normal=Di.getInterpolatedAttribute(c,d,h,f,v,new ae),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:d,b:h,c:f,normal:new ae,materialIndex:0};Di.getNormal(Mc,Ec,Tc,m.normal),g.face=m,g.barycoord=v}return g}class HC extends kn{constructor(e=null,t=1,r=1,o,a,c,d,h,f=Tn,g=Tn,v,m){super(null,c,d,h,f,g,o,a,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jf=new ae,WC=new ae,jC=new ut;class As{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=jf.subVectors(r,t).cross(WC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(jf),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||jC.getNormalMatrix(e),o=this.coplanarPoint(jf).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new nm,XC=new Mt(.5,.5),Cc=new ae;class dS{constructor(e=new As,t=new As,r=new As,o=new As,a=new As,c=new As){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(a),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,a=e.elements,c=a[0],d=a[1],h=a[2],f=a[3],g=a[4],v=a[5],m=a[6],_=a[7],E=a[8],w=a[9],y=a[10],S=a[11],b=a[12],D=a[13],P=a[14],O=a[15];if(o[0].setComponents(f-c,_-g,S-E,O-b).normalize(),o[1].setComponents(f+c,_+g,S+E,O+b).normalize(),o[2].setComponents(f+d,_+v,S+w,O+D).normalize(),o[3].setComponents(f-d,_-v,S-w,O-D).normalize(),r)o[4].setComponents(h,m,y,P).normalize(),o[5].setComponents(f-h,_-m,S-y,O-P).normalize();else if(o[4].setComponents(f-h,_-m,S-y,O-P).normalize(),t===qi)o[5].setComponents(f+h,_+m,S+y,O+P).normalize();else if(t===lu)o[5].setComponents(h,m,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=XC.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Cc.x=o.normal.x>0?e.max.x:e.min.x,Cc.y=o.normal.y>0?e.max.y:e.min.y,Cc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fS extends kn{constructor(e=[],t=Us,r,o,a,c,d,h,f,g){super(e,t,r,o,a,c,d,h,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uo extends kn{constructor(e,t,r=Ji,o,a,c,d=Tn,h=Tn,f,g=Tr,v=1){if(g!==Tr&&g!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,a,c,d,h,g,r,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qC extends Uo{constructor(e,t=Ji,r=Us,o,a,c=Tn,d=Tn,h,f=Tr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,o,a,c,d,h,f),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hS extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends wr{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const d=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],g=[],v=[];let m=0,_=0;E("z","y","x",-1,-1,r,t,e,c,a,0),E("z","y","x",1,-1,r,t,-e,c,a,1),E("x","z","y",1,1,e,r,t,o,c,2),E("x","z","y",1,-1,e,r,-t,o,c,3),E("x","y","z",1,-1,e,t,r,o,a,4),E("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(h),this.setAttribute("position",new Mr(f,3)),this.setAttribute("normal",new Mr(g,3)),this.setAttribute("uv",new Mr(v,2));function E(w,y,S,b,D,P,O,L,U,M,N){const B=P/U,F=O/M,W=P/2,J=O/2,se=L/2,z=U+1,$=M+1;let j=0,X=0;const te=new ae;for(let oe=0;oe<$;oe++){const V=oe*F-J;for(let Q=0;Q<z;Q++){const Le=Q*B-W;te[w]=Le*b,te[y]=V*D,te[S]=se,f.push(te.x,te.y,te.z),te[w]=0,te[y]=0,te[S]=L>0?1:-1,g.push(te.x,te.y,te.z),v.push(Q/U),v.push(1-oe/M),j+=1}}for(let oe=0;oe<M;oe++)for(let V=0;V<U;V++){const Q=m+V+z*oe,Le=m+V+z*(oe+1),Be=m+(V+1)+z*(oe+1),Ie=m+(V+1)+z*oe;h.push(Q,Le,Ie),h.push(Le,Be,Ie),X+=6}d.addGroup(_,X,N),_+=X,m+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class tl extends wr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,d=Math.floor(r),h=Math.floor(o),f=d+1,g=h+1,v=e/d,m=t/h,_=[],E=[],w=[],y=[];for(let S=0;S<g;S++){const b=S*m-c;for(let D=0;D<f;D++){const P=D*v-a;E.push(P,-b,0),w.push(0,0,1),y.push(D/d),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let b=0;b<d;b++){const D=b+f*S,P=b+f*(S+1),O=b+1+f*(S+1),L=b+1+f*S;_.push(D,P,L),_.push(P,O,L)}this.setIndex(_),this.setAttribute("position",new Mr(E,3)),this.setAttribute("normal",new Mr(w,3)),this.setAttribute("uv",new Mr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(Ex(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Ex(o[0])){const a=[];for(let c=0,d=o.length;c<d;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const r=Fo(n[t]);for(const o in r)e[o]=r[o]}return e}function Ex(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function YC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const $C={clone:Fo,merge:Un};var KC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends vu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KC,this.fragmentShader=ZC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=YC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class QC extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JC extends vu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eR extends vu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rc=new ae,Pc=new zo,zi=new ae;class mS extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rc,Pc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Pc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Rc,Pc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Pc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new ae,Tx=new Mt,wx=new Mt;class Pi extends mS{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hp*2*Math.atan(Math.tan(Mf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,Tx,wx),t.subVectors(wx,Tx)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/h,t-=c.offsetY*r/f,o*=c.width/h,r*=c.height/f}const d=this.filmOffset;d!==0&&(a+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class im extends mS{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mo=-90,Eo=1;class tR extends ri{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(Mo,Eo,e,t);o.layers=this.layers,this.add(o);const a=new Pi(Mo,Eo,e,t);a.layers=this.layers,this.add(a);const c=new Pi(Mo,Eo,e,t);c.layers=this.layers,this.add(c);const d=new Pi(Mo,Eo,e,t);d.layers=this.layers,this.add(d);const h=new Pi(Mo,Eo,e,t);h.layers=this.layers,this.add(h);const f=new Pi(Mo,Eo,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,d,h]=t;for(const f of t)this.remove(f);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,d,h,f,g]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,m,_),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class nR extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class iR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const lm=class lm{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};lm.prototype.isMatrix2=!0;let Ax=lm;function bx(n,e,t,r){const o=rR(r);switch(t){case tS:return n*e;case iS:return n*e/o.components*o.byteLength;case Kp:return n*e/o.components*o.byteLength;case Fs:return n*e*2/o.components*o.byteLength;case Zp:return n*e*2/o.components*o.byteLength;case nS:return n*e*3/o.components*o.byteLength;case Li:return n*e*4/o.components*o.byteLength;case Qp:return n*e*4/o.components*o.byteLength;case Hc:case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jc:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oh:case Bh:return Math.max(n,16)*Math.max(e,8)/4;case Fh:case kh:return Math.max(n,8)*Math.max(e,8)/2;case Vh:case zh:case Hh:case Wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gh:case ru:case jh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ep:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case np:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ip:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case op:case ap:case lp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cp:case up:return Math.ceil(n/4)*Math.ceil(e/4)*8;case su:case dp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rR(n){switch(n){case pi:case Zy:return{byteLength:1,components:1};case Xa:case Qy:case Er:return{byteLength:2,components:1};case Yp:case $p:return{byteLength:2,components:4};case Ji:case qp:case Xi:return{byteLength:4,components:1};case Jy:case eS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gS(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function sR(n){const e=new WeakMap;function t(d,h){const f=d.array,g=d.usage,v=f.byteLength,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,f,g),d.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=n.HALF_FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,f){const g=h.array,v=h.updateRanges;if(n.bindBuffer(f,d),v.length===0)n.bufferSubData(f,0,g);else{v.sort((_,E)=>_.start-E.start);let m=0;for(let _=1;_<v.length;_++){const E=v[m],w=v[_];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++m,v[m]=w)}v.length=m+1;for(let _=0,E=v.length;_<E;_++){const w=v[_];n.bufferSubData(f,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(n.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,h));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,d,h),f.version=d.version}}return{get:o,remove:a,update:c}}var oR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_R=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,RR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FR="gl_FragColor = linearToOutputTexel( gl_FragColor );",OR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,BR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$R=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,QR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,c2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,F2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,H2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,j2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_P=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:oR,alphahash_pars_fragment:aR,alphamap_fragment:lR,alphamap_pars_fragment:cR,alphatest_fragment:uR,alphatest_pars_fragment:dR,aomap_fragment:fR,aomap_pars_fragment:hR,batching_pars_vertex:pR,batching_vertex:mR,begin_vertex:gR,beginnormal_vertex:vR,bsdfs:xR,iridescence_fragment:_R,bumpmap_pars_fragment:yR,clipping_planes_fragment:SR,clipping_planes_pars_fragment:MR,clipping_planes_pars_vertex:ER,clipping_planes_vertex:TR,color_fragment:wR,color_pars_fragment:AR,color_pars_vertex:bR,color_vertex:CR,common:RR,cube_uv_reflection_fragment:PR,defaultnormal_vertex:DR,displacementmap_pars_vertex:LR,displacementmap_vertex:NR,emissivemap_fragment:IR,emissivemap_pars_fragment:UR,colorspace_fragment:FR,colorspace_pars_fragment:OR,envmap_fragment:kR,envmap_common_pars_fragment:BR,envmap_pars_fragment:VR,envmap_pars_vertex:zR,envmap_physical_pars_fragment:QR,envmap_vertex:GR,fog_vertex:HR,fog_pars_vertex:WR,fog_fragment:jR,fog_pars_fragment:XR,gradientmap_pars_fragment:qR,lightmap_pars_fragment:YR,lights_lambert_fragment:$R,lights_lambert_pars_fragment:KR,lights_pars_begin:ZR,lights_toon_fragment:JR,lights_toon_pars_fragment:e2,lights_phong_fragment:t2,lights_phong_pars_fragment:n2,lights_physical_fragment:i2,lights_physical_pars_fragment:r2,lights_fragment_begin:s2,lights_fragment_maps:o2,lights_fragment_end:a2,lightprobes_pars_fragment:l2,logdepthbuf_fragment:c2,logdepthbuf_pars_fragment:u2,logdepthbuf_pars_vertex:d2,logdepthbuf_vertex:f2,map_fragment:h2,map_pars_fragment:p2,map_particle_fragment:m2,map_particle_pars_fragment:g2,metalnessmap_fragment:v2,metalnessmap_pars_fragment:x2,morphinstance_vertex:_2,morphcolor_vertex:y2,morphnormal_vertex:S2,morphtarget_pars_vertex:M2,morphtarget_vertex:E2,normal_fragment_begin:T2,normal_fragment_maps:w2,normal_pars_fragment:A2,normal_pars_vertex:b2,normal_vertex:C2,normalmap_pars_fragment:R2,clearcoat_normal_fragment_begin:P2,clearcoat_normal_fragment_maps:D2,clearcoat_pars_fragment:L2,iridescence_pars_fragment:N2,opaque_fragment:I2,packing:U2,premultiplied_alpha_fragment:F2,project_vertex:O2,dithering_fragment:k2,dithering_pars_fragment:B2,roughnessmap_fragment:V2,roughnessmap_pars_fragment:z2,shadowmap_pars_fragment:G2,shadowmap_pars_vertex:H2,shadowmap_vertex:W2,shadowmask_pars_fragment:j2,skinbase_vertex:X2,skinning_pars_vertex:q2,skinning_vertex:Y2,skinnormal_vertex:$2,specularmap_fragment:K2,specularmap_pars_fragment:Z2,tonemapping_fragment:Q2,tonemapping_pars_fragment:J2,transmission_fragment:eP,transmission_pars_fragment:tP,uv_pars_fragment:nP,uv_pars_vertex:iP,uv_vertex:rP,worldpos_vertex:sP,background_vert:oP,background_frag:aP,backgroundCube_vert:lP,backgroundCube_frag:cP,cube_vert:uP,cube_frag:dP,depth_vert:fP,depth_frag:hP,distance_vert:pP,distance_frag:mP,equirect_vert:gP,equirect_frag:vP,linedashed_vert:xP,linedashed_frag:_P,meshbasic_vert:yP,meshbasic_frag:SP,meshlambert_vert:MP,meshlambert_frag:EP,meshmatcap_vert:TP,meshmatcap_frag:wP,meshnormal_vert:AP,meshnormal_frag:bP,meshphong_vert:CP,meshphong_frag:RP,meshphysical_vert:PP,meshphysical_frag:DP,meshtoon_vert:LP,meshtoon_frag:NP,points_vert:IP,points_frag:UP,shadow_vert:FP,shadow_frag:OP,sprite_vert:kP,sprite_frag:BP},Fe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ji={basic:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Un([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Un([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Un([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Un([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Un([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Un([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Un([Fe.common,Fe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Un([Fe.lights,Fe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ji.physical={uniforms:Un([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Dc={r:0,b:0,g:0},VP=new dn,vS=new ut;vS.set(-1,0,0,0,1,0,0,0,1);function zP(n,e,t,r,o,a){const c=new It(0);let d=o===!0?0:1,h,f,g=null,v=0,m=null;function _(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){const P=b.backgroundBlurriness>0;D=e.get(D,P)}return D}function E(b){let D=!1;const P=_(b);P===null?y(c,d):P&&P.isColor&&(y(P,1),D=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(b,D){const P=_(D);P&&(P.isCubeTexture||P.mapping===gu)?(f===void 0&&(f=new er(new el(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Fo(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(O,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=P,f.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(VP.makeRotationFromEuler(D.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(vS),f.material.toneMapped=_t.getTransfer(P.colorSpace)!==Lt,(g!==P||v!==P.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,g=P,v=P.version,m=n.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new er(new tl(2,2),new Ii({name:"BackgroundMaterial",uniforms:Fo(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=_t.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,g=P,v=P.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,D){b.getRGB(Dc,pS(n)),t.buffers.color.setClear(Dc.r,Dc.g,Dc.b,D,a)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,D=1){c.set(b),d=D,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(c,d)},render:E,addToRenderList:w,dispose:S}}function GP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=m(null);let a=o,c=!1;function d(F,W,J,se,z){let $=!1;const j=v(F,se,J,W);a!==j&&(a=j,f(a.object)),$=_(F,se,J,z),$&&E(F,se,J,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,P(F,W,J,se),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function h(){return n.createVertexArray()}function f(F){return n.bindVertexArray(F)}function g(F){return n.deleteVertexArray(F)}function v(F,W,J,se){const z=se.wireframe===!0;let $=r[W.id];$===void 0&&($={},r[W.id]=$);const j=F.isInstancedMesh===!0?F.id:0;let X=$[j];X===void 0&&(X={},$[j]=X);let te=X[J.id];te===void 0&&(te={},X[J.id]=te);let oe=te[z];return oe===void 0&&(oe=m(h()),te[z]=oe),oe}function m(F){const W=[],J=[],se=[];for(let z=0;z<t;z++)W[z]=0,J[z]=0,se[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:J,attributeDivisors:se,object:F,attributes:{},index:null}}function _(F,W,J,se){const z=a.attributes,$=W.attributes;let j=0;const X=J.getAttributes();for(const te in X)if(X[te].location>=0){const V=z[te];let Q=$[te];if(Q===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),V===void 0||V.attribute!==Q||Q&&V.data!==Q.data)return!0;j++}return a.attributesNum!==j||a.index!==se}function E(F,W,J,se){const z={},$=W.attributes;let j=0;const X=J.getAttributes();for(const te in X)if(X[te].location>=0){let V=$[te];V===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(V=F.instanceColor));const Q={};Q.attribute=V,V&&V.data&&(Q.data=V.data),z[te]=Q,j++}a.attributes=z,a.attributesNum=j,a.index=se}function w(){const F=a.newAttributes;for(let W=0,J=F.length;W<J;W++)F[W]=0}function y(F){S(F,0)}function S(F,W){const J=a.newAttributes,se=a.enabledAttributes,z=a.attributeDivisors;J[F]=1,se[F]===0&&(n.enableVertexAttribArray(F),se[F]=1),z[F]!==W&&(n.vertexAttribDivisor(F,W),z[F]=W)}function b(){const F=a.newAttributes,W=a.enabledAttributes;for(let J=0,se=W.length;J<se;J++)W[J]!==F[J]&&(n.disableVertexAttribArray(J),W[J]=0)}function D(F,W,J,se,z,$,j){j===!0?n.vertexAttribIPointer(F,W,J,z,$):n.vertexAttribPointer(F,W,J,se,z,$)}function P(F,W,J,se){w();const z=se.attributes,$=J.getAttributes(),j=W.defaultAttributeValues;for(const X in $){const te=$[X];if(te.location>=0){let oe=z[X];if(oe===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),oe!==void 0){const V=oe.normalized,Q=oe.itemSize,Le=e.get(oe);if(Le===void 0)continue;const Be=Le.buffer,Ie=Le.type,le=Le.bytesPerElement,me=Ie===n.INT||Ie===n.UNSIGNED_INT||oe.gpuType===qp;if(oe.isInterleavedBufferAttribute){const de=oe.data,Ne=de.stride,je=oe.offset;if(de.isInstancedInterleavedBuffer){for(let et=0;et<te.locationSize;et++)S(te.location+et,de.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let et=0;et<te.locationSize;et++)y(te.location+et);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let et=0;et<te.locationSize;et++)D(te.location+et,Q/te.locationSize,Ie,V,Ne*le,(je+Q/te.locationSize*et)*le,me)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<te.locationSize;de++)S(te.location+de,oe.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<te.locationSize;de++)y(te.location+de);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let de=0;de<te.locationSize;de++)D(te.location+de,Q/te.locationSize,Ie,V,Q*le,Q/te.locationSize*de*le,me)}}else if(j!==void 0){const V=j[X];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(te.location,V);break;case 3:n.vertexAttrib3fv(te.location,V);break;case 4:n.vertexAttrib4fv(te.location,V);break;default:n.vertexAttrib1fv(te.location,V)}}}}b()}function O(){N();for(const F in r){const W=r[F];for(const J in W){const se=W[J];for(const z in se){const $=se[z];for(const j in $)g($[j].object),delete $[j];delete se[z]}}delete r[F]}}function L(F){if(r[F.id]===void 0)return;const W=r[F.id];for(const J in W){const se=W[J];for(const z in se){const $=se[z];for(const j in $)g($[j].object),delete $[j];delete se[z]}}delete r[F.id]}function U(F){for(const W in r){const J=r[W];for(const se in J){const z=J[se];if(z[F.id]===void 0)continue;const $=z[F.id];for(const j in $)g($[j].object),delete $[j];delete z[F.id]}}}function M(F){for(const W in r){const J=r[W],se=F.isInstancedMesh===!0?F.id:0,z=J[se];if(z!==void 0){for(const $ in z){const j=z[$];for(const X in j)g(j[X].object),delete j[X];delete z[$]}delete J[se],Object.keys(J).length===0&&delete r[W]}}}function N(){B(),c=!0,a!==o&&(a=o,f(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:N,resetDefaultState:B,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:M,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:b}}function HP(n,e,t){let r;function o(h){r=h}function a(h,f){n.drawArrays(r,h,f),t.update(f,r,1)}function c(h,f,g){g!==0&&(n.drawArraysInstanced(r,h,f,g),t.update(f,r,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,f,0,g);let m=0;for(let _=0;_<g;_++)m+=f[_];t.update(m,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=d}function WP(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==Li&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const M=U===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==pi&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Xi&&!M)}function h(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const g=h(f);g!==f&&(rt("WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:P,maxSamples:O,samples:L}}function jP(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new As,d=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const _=v.length!==0||m||r!==0||o;return o=m,r=v.length,_},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=g(v,m,0)},this.setState=function(v,m,_){const E=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,S=n.get(v);if(!o||E===null||E.length===0||a&&!y)a?g(null):f();else{const b=a?0:r,D=b*4;let P=S.clippingState||null;h.value=P,P=g(E,m,D,_);for(let O=0;O!==D;++O)P[O]=t[O];S.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,m,_,E){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=h.value,E!==!0||y===null){const S=_+w*4,b=m.matrixWorldInverse;d.getNormalMatrix(b),(y===null||y.length<S)&&(y=new Float32Array(S));for(let D=0,P=_;D!==w;++D,P+=4)c.copy(v[D]).applyMatrix4(b,d),c.normal.toArray(y,P),y[P+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const es=4,Cx=[.125,.215,.35,.446,.526,.582],Cs=20,XP=256,La=new im,Rx=new It;let Xf=null,qf=0,Yf=0,$f=!1;const qP=new ae;class Px{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:d=qP}=a;Xf=this._renderer.getRenderTarget(),qf=this._renderer.getActiveCubeFace(),Yf=this._renderer.getActiveMipmapLevel(),$f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xf,qf,Yf),this._renderer.xr.enabled=$f,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xf=this._renderer.getRenderTarget(),qf=this._renderer.getActiveCubeFace(),Yf=this._renderer.getActiveMipmapLevel(),$f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Er,format:Li,colorSpace:ou,depthBuffer:!1},o=Dx(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dx(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YP(a)),this._blurMaterial=KP(a,e,t),this._ggxMaterial=$P(a,e,t)}return o}_compileMaterial(e){const t=new er(new wr,e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,r,o,a){const h=new Pi(90,1,t,r),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,_=v.toneMapping;v.getClearColor(Rx),v.toneMapping=$i,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new er(new el,new uS({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,S=!0):(y.color.copy(Rx),S=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(h.up.set(0,f[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+g[D],a.y,a.z)):P===1?(h.up.set(0,0,f[D]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+g[D],a.z)):(h.up.set(0,f[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+g[D]));const O=this._cubeSize;To(o,P*O,D>2?O:0,O,O),v.setRenderTarget(o),S&&v.render(w,h),v.render(e,h)}v.toneMapping=_,v.autoClear=m,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Us||e.mapping===Io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lx());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const d=a.uniforms;d.envMap.value=e;const h=this._cubeSize;To(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,La)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,f=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(f*f-g*g),m=0+f*1.25,_=v*m,{_lodMax:E}=this,w=this._sizeLods[r],y=3*w*(r>E-es?r-E+es:0),S=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=_,h.mipInt.value=E-t,To(a,y,S,3*w,2*w),o.setRenderTarget(a),o.render(d,La),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=E-r,To(e,y,S,3*w,2*w),o.setRenderTarget(e),o.render(d,La)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,d){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=f;const m=f.uniforms,_=this._sizeLods[r]-1,E=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Cs-1),w=a/E,y=isFinite(a)?1+Math.floor(g*w):Cs;y>Cs&&rt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Cs}`);const S=[];let b=0;for(let U=0;U<Cs;++U){const M=U/w,N=Math.exp(-M*M/2);S.push(N),U===0?b+=N:U<y&&(b+=2*N)}for(let U=0;U<S.length;U++)S[U]=S[U]/b;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=c==="latitudinal",d&&(m.poleAxis.value=d);const{_lodMax:D}=this;m.dTheta.value=E,m.mipInt.value=D-r;const P=this._sizeLods[o],O=3*P*(o>D-es?o-D+es:0),L=4*(this._cubeSize-P);To(t,O,L,3*P,2*P),h.setRenderTarget(t),h.render(v,La)}}function YP(n){const e=[],t=[],r=[];let o=n;const a=n-es+1+Cx.length;for(let c=0;c<a;c++){const d=Math.pow(2,o);e.push(d);let h=1/d;c>n-es?h=Cx[c-n+es-1]:c===0&&(h=0),t.push(h);const f=1/(d-2),g=-f,v=1+f,m=[g,g,v,g,v,v,g,g,v,v,g,v],_=6,E=6,w=3,y=2,S=1,b=new Float32Array(w*E*_),D=new Float32Array(y*E*_),P=new Float32Array(S*E*_);for(let L=0;L<_;L++){const U=L%3*2/3-1,M=L>2?0:-1,N=[U,M,0,U+2/3,M,0,U+2/3,M+1,0,U,M,0,U+2/3,M+1,0,U,M+1,0];b.set(N,w*E*L),D.set(m,y*E*L);const B=[L,L,L,L,L,L];P.set(B,S*E*L)}const O=new wr;O.setAttribute("position",new Zi(b,w)),O.setAttribute("uv",new Zi(D,y)),O.setAttribute("faceIndex",new Zi(P,S)),r.push(new er(O,null)),o>es&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Dx(n,e,t){const r=new Ki(n,e,t);return r.texture.mapping=gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function To(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function $P(n,e,t){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function KP(n,e,t){const r=new Float32Array(Cs),o=new ae(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Lx(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Nx(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xS extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new fS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new el(5,5,5),a=new Ii({name:"CubemapFromEquirect",uniforms:Fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:yr});a.uniforms.tEquirect.value=t;const c=new er(o,a),d=t.minFilter;return t.minFilter===Ds&&(t.minFilter=Dn),new tR(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function ZP(n){let e=new WeakMap,t=new WeakMap,r=null;function o(m,_=!1){return m==null?null:_?c(m):a(m)}function a(m){if(m&&m.isTexture){const _=m.mapping;if(_===_f||_===yf)if(e.has(m)){const E=e.get(m).texture;return d(E,m.mapping)}else{const E=m.image;if(E&&E.height>0){const w=new xS(E.height);return w.fromEquirectangularTexture(n,m),e.set(m,w),m.addEventListener("dispose",f),d(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,E=_===_f||_===yf,w=_===Us||_===Io;if(E||w){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return r===null&&(r=new Px(n)),y=E?r.fromEquirectangular(m,y):r.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const b=m.image;return E&&b&&b.height>0||w&&b&&h(b)?(r===null&&(r=new Px(n)),y=E?r.fromEquirectangular(m):r.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function d(m,_){return _===_f?m.mapping=Us:_===yf&&(m.mapping=Io),m}function h(m){let _=0;const E=6;for(let w=0;w<E;w++)m[w]!==void 0&&_++;return _===E}function f(m){const _=m.target;_.removeEventListener("dispose",f);const E=e.get(_);E!==void 0&&(e.delete(_),E.dispose())}function g(m){const _=m.target;_.removeEventListener("dispose",g);const E=t.get(_);E!==void 0&&(t.delete(_),E.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function QP(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&fp("WebGLRenderer: "+r+" extension not supported."),o}}}function JP(n,e,t,r){const o={},a=new WeakMap;function c(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);m.removeEventListener("dispose",c),delete o[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function d(v,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function h(v){const m=v.attributes;for(const _ in m)e.update(m[_],n.ARRAY_BUFFER)}function f(v){const m=[],_=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(_!==null){const b=_.array;w=_.version;for(let D=0,P=b.length;D<P;D+=3){const O=b[D+0],L=b[D+1],U=b[D+2];m.push(O,L,L,U,U,O)}}else{const b=E.array;w=E.version;for(let D=0,P=b.length/3-1;D<P;D+=3){const O=D+0,L=D+1,U=D+2;m.push(O,L,L,U,U,O)}}const y=new(E.count>=65535?cS:lS)(m,1);y.version=w;const S=a.get(v);S&&e.remove(S),a.set(v,y)}function g(v){const m=a.get(v);if(m){const _=v.index;_!==null&&m.version<_.version&&f(v)}else f(v);return a.get(v)}return{get:d,update:h,getWireframeAttribute:g}}function e3(n,e,t){let r;function o(v){r=v}let a,c;function d(v){a=v.type,c=v.bytesPerElement}function h(v,m){n.drawElements(r,m,a,v*c),t.update(m,r,1)}function f(v,m,_){_!==0&&(n.drawElementsInstanced(r,m,a,v*c,_),t.update(m,r,_))}function g(v,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,a,v,0,_);let w=0;for(let y=0;y<_;y++)w+=m[y];t.update(w,r,1)}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=f,this.renderMultiDraw=g}function t3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,d){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=d*(a/3);break;case n.LINES:t.lines+=d*(a/2);break;case n.LINE_STRIP:t.lines+=d*(a-1);break;case n.LINE_LOOP:t.lines+=d*a;break;case n.POINTS:t.points+=d*a;break;default:Tt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function n3(n,e,t){const r=new WeakMap,o=new nn;function a(c,d,h){const f=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(d);if(m===void 0||m.count!==v){let B=function(){M.dispose(),r.delete(d),d.removeEventListener("dispose",B)};var _=B;m!==void 0&&m.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;E===!0&&(P=1),w===!0&&(P=2),y===!0&&(P=3);let O=d.attributes.position.count*P,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const U=new Float32Array(O*L*4*v),M=new sS(U,O,L,v);M.type=Xi,M.needsUpdate=!0;const N=P*4;for(let F=0;F<v;F++){const W=S[F],J=b[F],se=D[F],z=O*L*4*F;for(let $=0;$<W.count;$++){const j=$*N;E===!0&&(o.fromBufferAttribute(W,$),U[z+j+0]=o.x,U[z+j+1]=o.y,U[z+j+2]=o.z,U[z+j+3]=0),w===!0&&(o.fromBufferAttribute(J,$),U[z+j+4]=o.x,U[z+j+5]=o.y,U[z+j+6]=o.z,U[z+j+7]=0),y===!0&&(o.fromBufferAttribute(se,$),U[z+j+8]=o.x,U[z+j+9]=o.y,U[z+j+10]=o.z,U[z+j+11]=se.itemSize===4?o.w:1)}}m={count:v,texture:M,size:new Mt(O,L)},r.set(d,m),d.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<f.length;y++)E+=f[y];const w=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",f)}h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function i3(n,e,t,r,o){let a=new WeakMap;function c(f){const g=o.render.frame,v=f.geometry,m=e.get(f,v);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==g&&(t.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,n.ARRAY_BUFFER),a.set(f,g))),f.isSkinnedMesh){const _=f.skeleton;a.get(_)!==g&&(_.update(),a.set(_,g))}return m}function d(){a=new WeakMap}function h(f){const g=f.target;g.removeEventListener("dispose",h),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:d}}const r3={[Hy]:"LINEAR_TONE_MAPPING",[Wy]:"REINHARD_TONE_MAPPING",[jy]:"CINEON_TONE_MAPPING",[Xy]:"ACES_FILMIC_TONE_MAPPING",[Yy]:"AGX_TONE_MAPPING",[$y]:"NEUTRAL_TONE_MAPPING",[qy]:"CUSTOM_TONE_MAPPING"};function s3(n,e,t,r,o){const a=new Ki(e,t,{type:n,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Uo(e,t):void 0}),c=new Ki(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),d=new wr;d.setAttribute("position",new Mr([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Mr([0,2,0,0,2,0],2));const h=new QC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new er(d,h),g=new im(-1,1,1,-1,0,1);let v=null,m=null,_=!1,E,w=null,y=[],S=!1;this.setSize=function(b,D){a.setSize(b,D),c.setSize(b,D);for(let P=0;P<y.length;P++){const O=y[P];O.setSize&&O.setSize(b,D)}},this.setEffects=function(b){y=b,S=y.length>0&&y[0].isRenderPass===!0;const D=a.width,P=a.height;for(let O=0;O<y.length;O++){const L=y[O];L.setSize&&L.setSize(D,P)}},this.begin=function(b,D){if(_||b.toneMapping===$i&&y.length===0)return!1;if(w=D,D!==null){const P=D.width,O=D.height;(a.width!==P||a.height!==O)&&this.setSize(P,O)}return S===!1&&b.setRenderTarget(a),E=b.toneMapping,b.toneMapping=$i,!0},this.hasRenderPass=function(){return S},this.end=function(b,D){b.toneMapping=E,_=!0;let P=a,O=c;for(let L=0;L<y.length;L++){const U=y[L];if(U.enabled!==!1&&(U.render(b,O,P,D),U.needsSwap!==!1)){const M=P;P=O,O=M}}if(v!==b.outputColorSpace||m!==b.toneMapping){v=b.outputColorSpace,m=b.toneMapping,h.defines={},_t.getTransfer(v)===Lt&&(h.defines.SRGB_TRANSFER="");const L=r3[m];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(w),b.render(f,g),w=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),c.dispose(),d.dispose(),h.dispose()}}const _S=new kn,pp=new Uo(1,1),yS=new sS,SS=new CC,MS=new fS,Ix=[],Ux=[],Fx=new Float32Array(16),Ox=new Float32Array(9),kx=new Float32Array(4);function Go(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=Ix[o];if(a===void 0&&(a=new Float32Array(o),Ix[o]=a),e!==0){r.toArray(a,0);for(let c=1,d=0;c!==e;++c)d+=t,n[c].toArray(a,d)}return a}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function _u(n,e){let t=Ux[e];t===void 0&&(t=new Int32Array(e),Ux[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function o3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function a3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function l3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function c3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function u3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;kx.set(r),n.uniformMatrix2fv(this.addr,!1,kx),hn(t,r)}}function d3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;Ox.set(r),n.uniformMatrix3fv(this.addr,!1,Ox),hn(t,r)}}function f3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;Fx.set(r),n.uniformMatrix4fv(this.addr,!1,Fx),hn(t,r)}}function h3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function m3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function g3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function v3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function x3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function _3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function S3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(pp.compareFunction=t.isReversedDepthBuffer()?em:Jp,a=pp):a=_S,t.setTexture2D(e||a,o)}function M3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||SS,o)}function E3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||MS,o)}function T3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||yS,o)}function w3(n){switch(n){case 5126:return o3;case 35664:return a3;case 35665:return l3;case 35666:return c3;case 35674:return u3;case 35675:return d3;case 35676:return f3;case 5124:case 35670:return h3;case 35667:case 35671:return p3;case 35668:case 35672:return m3;case 35669:case 35673:return g3;case 5125:return v3;case 36294:return x3;case 36295:return _3;case 36296:return y3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return M3;case 35680:case 36300:case 36308:case 36293:return E3;case 36289:case 36303:case 36311:case 36292:return T3}}function A3(n,e){n.uniform1fv(this.addr,e)}function b3(n,e){const t=Go(e,this.size,2);n.uniform2fv(this.addr,t)}function C3(n,e){const t=Go(e,this.size,3);n.uniform3fv(this.addr,t)}function R3(n,e){const t=Go(e,this.size,4);n.uniform4fv(this.addr,t)}function P3(n,e){const t=Go(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D3(n,e){const t=Go(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L3(n,e){const t=Go(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function N3(n,e){n.uniform1iv(this.addr,e)}function I3(n,e){n.uniform2iv(this.addr,e)}function U3(n,e){n.uniform3iv(this.addr,e)}function F3(n,e){n.uniform4iv(this.addr,e)}function O3(n,e){n.uniform1uiv(this.addr,e)}function k3(n,e){n.uniform2uiv(this.addr,e)}function B3(n,e){n.uniform3uiv(this.addr,e)}function V3(n,e){n.uniform4uiv(this.addr,e)}function z3(n,e,t){const r=this.cache,o=e.length,a=_u(t,o);fn(r,a)||(n.uniform1iv(this.addr,a),hn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=pp:c=_S;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,a[d])}function G3(n,e,t){const r=this.cache,o=e.length,a=_u(t,o);fn(r,a)||(n.uniform1iv(this.addr,a),hn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||SS,a[c])}function H3(n,e,t){const r=this.cache,o=e.length,a=_u(t,o);fn(r,a)||(n.uniform1iv(this.addr,a),hn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||MS,a[c])}function W3(n,e,t){const r=this.cache,o=e.length,a=_u(t,o);fn(r,a)||(n.uniform1iv(this.addr,a),hn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||yS,a[c])}function j3(n){switch(n){case 5126:return A3;case 35664:return b3;case 35665:return C3;case 35666:return R3;case 35674:return P3;case 35675:return D3;case 35676:return L3;case 5124:case 35670:return N3;case 35667:case 35671:return I3;case 35668:case 35672:return U3;case 35669:case 35673:return F3;case 5125:return O3;case 36294:return k3;case 36295:return B3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return z3;case 35679:case 36299:case 36307:return G3;case 35680:case 36300:case 36308:case 36293:return H3;case 36289:case 36303:case 36311:case 36292:return W3}}class X3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=w3(t.type)}}class q3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j3(t.type)}}class Y3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const d=o[a];d.setValue(e,t[d.id],r)}}}const Kf=/(\w+)(\])?(\[|\.)?/g;function Bx(n,e){n.seq.push(e),n.map[e.id]=e}function $3(n,e,t){const r=n.name,o=r.length;for(Kf.lastIndex=0;;){const a=Kf.exec(r),c=Kf.lastIndex;let d=a[1];const h=a[2]==="]",f=a[3];if(h&&(d=d|0),f===void 0||f==="["&&c+2===o){Bx(t,f===void 0?new X3(d,n,e):new q3(d,n,e));break}else{let v=t.map[d];v===void 0&&(v=new Y3(d),Bx(t,v)),t=v}}}class qc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);$3(d,h,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const d=t[a],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Vx(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const K3=37297;let Z3=0;function Q3(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const zx=new ut;function J3(n){_t._getMatrix(zx,_t.workingColorSpace,n);const e=`mat3( ${zx.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case au:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gx(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+Q3(n.getShaderSource(e),d)}else return a}function eD(n,e){const t=J3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tD={[Hy]:"Linear",[Wy]:"Reinhard",[jy]:"Cineon",[Xy]:"ACESFilmic",[Yy]:"AgX",[$y]:"Neutral",[qy]:"Custom"};function nD(n,e){const t=tD[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lc=new ae;function iD(){_t.getLuminanceCoefficients(Lc);const n=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function sD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function oD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let d=1;a.type===n.FLOAT_MAT2&&(d=2),a.type===n.FLOAT_MAT3&&(d=3),a.type===n.FLOAT_MAT4&&(d=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:d}}return t}function Fa(n){return n!==""}function Hx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aD=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(n){return n.replace(aD,cD)}const lD=new Map;function cD(n,e){let t=pt[e];if(t===void 0){const r=lD.get(e);if(r!==void 0)t=pt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return mp(t)}const uD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jx(n){return n.replace(uD,dD)}function dD(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Xx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const fD={[Gc]:"SHADOWMAP_TYPE_PCF",[Ua]:"SHADOWMAP_TYPE_VSM"};function hD(n){return fD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pD={[Us]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function mD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":pD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const gD={[Io]:"ENVMAP_MODE_REFRACTION"};function vD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xD={[Gy]:"ENVMAP_BLENDING_MULTIPLY",[aC]:"ENVMAP_BLENDING_MIX",[lC]:"ENVMAP_BLENDING_ADD"};function _D(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xD[n.combine]||"ENVMAP_BLENDING_NONE"}function yD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function SD(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=hD(t),f=mD(t),g=vD(t),v=_D(t),m=yD(t),_=rD(t),E=sD(a),w=o.createProgram();let y,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Fa).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Fa).join(`
`),S.length>0&&(S+=`
`)):(y=[Xx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),S=[Xx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?pt.tonemapping_pars_fragment:"",t.toneMapping!==$i?nD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,eD("linearToOutputTexel",t.outputColorSpace),iD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),c=mp(c),c=Hx(c,t),c=Wx(c,t),d=mp(d),d=Hx(d,t),d=Wx(d,t),c=jx(c),d=jx(d),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=b+y+c,P=b+S+d,O=Vx(o,o.VERTEX_SHADER,D),L=Vx(o,o.FRAGMENT_SHADER,P);o.attachShader(w,O),o.attachShader(w,L),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function U(F){if(n.debug.checkShaderErrors){const W=o.getProgramInfoLog(w)||"",J=o.getShaderInfoLog(O)||"",se=o.getShaderInfoLog(L)||"",z=W.trim(),$=J.trim(),j=se.trim();let X=!0,te=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,w,O,L);else{const oe=Gx(o,O,"vertex"),V=Gx(o,L,"fragment");Tt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+oe+`
`+V)}else z!==""?rt("WebGLProgram: Program Info Log:",z):($===""||j==="")&&(te=!1);te&&(F.diagnostics={runnable:X,programLog:z,vertexShader:{log:$,prefix:y},fragmentShader:{log:j,prefix:S}})}o.deleteShader(O),o.deleteShader(L),M=new qc(o,w),N=oD(o,w)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let N;this.getAttributes=function(){return N===void 0&&U(this),N};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(w,K3)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z3++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=L,this}let MD=0;class ED{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new TD(e),t.set(e,r)),r}}class TD{constructor(e){this.id=MD++,this.code=e,this.usedTimes=0}}function wD(n){return n===Fs||n===ru||n===su}function AD(n,e,t,r,o,a){const c=new oS,d=new ED,h=new Set,f=[],g=new Map,v=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(M){return h.add(M),M===0?"uv":`uv${M}`}function w(M,N,B,F,W,J){const se=F.fog,z=W.geometry,$=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,j=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,X=e.get(M.envMap||$,j),te=X&&X.mapping===gu?X.image.height:null,oe=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&rt("WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const V=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Q=V!==void 0?V.length:0;let Le=0;z.morphAttributes.position!==void 0&&(Le=1),z.morphAttributes.normal!==void 0&&(Le=2),z.morphAttributes.color!==void 0&&(Le=3);let Be,Ie,le,me;if(oe){const at=ji[oe];Be=at.vertexShader,Ie=at.fragmentShader}else Be=M.vertexShader,Ie=M.fragmentShader,d.update(M),le=d.getVertexShaderID(M),me=d.getFragmentShaderID(M);const de=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),je=W.isInstancedMesh===!0,et=W.isBatchedMesh===!0,kt=!!M.map,dt=!!M.matcap,wt=!!X,Nt=!!M.aoMap,ft=!!M.lightMap,$t=!!M.bumpMap,Bt=!!M.normalMap,xn=!!M.displacementMap,q=!!M.emissiveMap,Vt=!!M.metalnessMap,ht=!!M.roughnessMap,Rt=M.anisotropy>0,Ue=M.clearcoat>0,Ht=M.dispersion>0,I=M.iridescence>0,T=M.sheen>0,Z=M.transmission>0,pe=Rt&&!!M.anisotropyMap,xe=Ue&&!!M.clearcoatMap,Ee=Ue&&!!M.clearcoatNormalMap,De=Ue&&!!M.clearcoatRoughnessMap,fe=I&&!!M.iridescenceMap,ge=I&&!!M.iridescenceThicknessMap,Oe=T&&!!M.sheenColorMap,Ve=T&&!!M.sheenRoughnessMap,be=!!M.specularMap,Te=!!M.specularColorMap,it=!!M.specularIntensityMap,ot=Z&&!!M.transmissionMap,mt=Z&&!!M.thicknessMap,H=!!M.gradientMap,Ae=!!M.alphaMap,he=M.alphaTest>0,ke=!!M.alphaHash,Re=!!M.extensions;let _e=$i;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(_e=n.toneMapping);const Ye={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Be,fragmentShader:Ie,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:et,batchingColor:et&&W._colorsTexture!==null,instancing:je,instancingColor:je&&W.instanceColor!==null,instancingMorph:je&&W.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:kt,matcap:dt,envMap:wt,envMapMode:wt&&X.mapping,envMapCubeUVHeight:te,aoMap:Nt,lightMap:ft,bumpMap:$t,normalMap:Bt,displacementMap:xn,emissiveMap:q,normalMapObjectSpace:Bt&&M.normalMapType===dC,normalMapTangentSpace:Bt&&M.normalMapType===ix,packedNormalMap:Bt&&M.normalMapType===ix&&wD(M.normalMap.format),metalnessMap:Vt,roughnessMap:ht,anisotropy:Rt,anisotropyMap:pe,clearcoat:Ue,clearcoatMap:xe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:De,dispersion:Ht,iridescence:I,iridescenceMap:fe,iridescenceThicknessMap:ge,sheen:T,sheenColorMap:Oe,sheenRoughnessMap:Ve,specularMap:be,specularColorMap:Te,specularIntensityMap:it,transmission:Z,transmissionMap:ot,thicknessMap:mt,gradientMap:H,opaque:M.transparent===!1&&M.blending===Ro&&M.alphaToCoverage===!1,alphaMap:Ae,alphaTest:he,alphaHash:ke,combine:M.combine,mapUv:kt&&E(M.map.channel),aoMapUv:Nt&&E(M.aoMap.channel),lightMapUv:ft&&E(M.lightMap.channel),bumpMapUv:$t&&E(M.bumpMap.channel),normalMapUv:Bt&&E(M.normalMap.channel),displacementMapUv:xn&&E(M.displacementMap.channel),emissiveMapUv:q&&E(M.emissiveMap.channel),metalnessMapUv:Vt&&E(M.metalnessMap.channel),roughnessMapUv:ht&&E(M.roughnessMap.channel),anisotropyMapUv:pe&&E(M.anisotropyMap.channel),clearcoatMapUv:xe&&E(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&E(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&E(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&E(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&E(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&E(M.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(M.sheenRoughnessMap.channel),specularMapUv:be&&E(M.specularMap.channel),specularColorMapUv:Te&&E(M.specularColorMap.channel),specularIntensityMapUv:it&&E(M.specularIntensityMap.channel),transmissionMapUv:ot&&E(M.transmissionMap.channel),thicknessMapUv:mt&&E(M.thicknessMap.channel),alphaMapUv:Ae&&E(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Bt||Rt),vertexNormals:!!z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(kt||Ae),fog:!!se,useFog:M.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&Bt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ne,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Le,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:kt&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===Lt,decodeVideoTextureEmissive:q&&M.emissiveMap.isVideoTexture===!0&&_t.getTransfer(M.emissiveMap.colorSpace)===Lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xr,flipSided:M.side===Yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=h.has(1),Ye.vertexUv2s=h.has(2),Ye.vertexUv3s=h.has(3),h.clear(),Ye}function y(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)N.push(B),N.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(S(N,M),b(N,M),N.push(n.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function S(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapCubeUVHeight),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.morphAttributeCount),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function b(M,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),M.push(c.mask)}function D(M){const N=_[M.type];let B;if(N){const F=ji[N];B=$C.clone(F.uniforms)}else B=M.uniforms;return B}function P(M,N){let B=g.get(N);return B!==void 0?++B.usedTimes:(B=new SD(n,N,M,o),f.push(B),g.set(N,B)),B}function O(M){if(--M.usedTimes===0){const N=f.indexOf(M);f[N]=f[f.length-1],f.pop(),g.delete(M.cacheKey),M.destroy()}}function L(M){d.remove(M)}function U(){d.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:D,acquireProgram:P,releaseProgram:O,releaseShaderCache:L,programs:f,dispose:U}}function bD(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let d=n.get(c);return d===void 0&&(d={},n.set(c,d)),d}function r(c){n.delete(c)}function o(c,d,h){n.get(c)[d]=h}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function CD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function qx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yx(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function d(m,_,E,w,y,S){let b=n[e];return b===void 0?(b={id:m.id,object:m,geometry:_,material:E,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:y,group:S},n[e]=b):(b.id=m.id,b.object=m,b.geometry=_,b.material=E,b.materialVariant=c(m),b.groupOrder=w,b.renderOrder=m.renderOrder,b.z=y,b.group=S),e++,b}function h(m,_,E,w,y,S){const b=d(m,_,E,w,y,S);E.transmission>0?r.push(b):E.transparent===!0?o.push(b):t.push(b)}function f(m,_,E,w,y,S){const b=d(m,_,E,w,y,S);E.transmission>0?r.unshift(b):E.transparent===!0?o.unshift(b):t.unshift(b)}function g(m,_){t.length>1&&t.sort(m||CD),r.length>1&&r.sort(_||qx),o.length>1&&o.sort(_||qx)}function v(){for(let m=e,_=n.length;m<_;m++){const E=n[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:h,unshift:f,finish:v,sort:g}}function RD(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new Yx,n.set(r,[c])):o>=a.length?(c=new Yx,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function PD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new It};break;case"SpotLight":t={position:new ae,direction:new ae,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function DD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LD=0;function ND(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ID(n){const e=new PD,t=DD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new ae);const o=new ae,a=new dn,c=new dn;function d(f){let g=0,v=0,m=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let _=0,E=0,w=0,y=0,S=0,b=0,D=0,P=0,O=0,L=0,U=0;f.sort(ND);for(let N=0,B=f.length;N<B;N++){const F=f[N],W=F.color,J=F.intensity,se=F.distance;let z=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Fs?z=F.shadow.map.texture:z=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)g+=W.r*J,v+=W.g*J,m+=W.b*J;else if(F.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(F.sh.coefficients[$],J);U++}else if(F.isDirectionalLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,X=t.get(F);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,r.directionalShadow[_]=X,r.directionalShadowMap[_]=z,r.directionalShadowMatrix[_]=F.shadow.matrix,b++}r.directional[_]=$,_++}else if(F.isSpotLight){const $=e.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(W).multiplyScalar(J),$.distance=se,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,r.spot[w]=$;const j=F.shadow;if(F.map&&(r.spotLightMap[O]=F.map,O++,j.updateMatrices(F),F.castShadow&&L++),r.spotLightMatrix[w]=j.matrix,F.castShadow){const X=t.get(F);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,r.spotShadow[w]=X,r.spotShadowMap[w]=z,P++}w++}else if(F.isRectAreaLight){const $=e.get(F);$.color.copy(W).multiplyScalar(J),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=$,y++}else if(F.isPointLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),$.distance=F.distance,$.decay=F.decay,F.castShadow){const j=F.shadow,X=t.get(F);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,r.pointShadow[E]=X,r.pointShadowMap[E]=z,r.pointShadowMatrix[E]=F.shadow.matrix,D++}r.point[E]=$,E++}else if(F.isHemisphereLight){const $=e.get(F);$.skyColor.copy(F.color).multiplyScalar(J),$.groundColor.copy(F.groundColor).multiplyScalar(J),r.hemi[S]=$,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=m;const M=r.hash;(M.directionalLength!==_||M.pointLength!==E||M.spotLength!==w||M.rectAreaLength!==y||M.hemiLength!==S||M.numDirectionalShadows!==b||M.numPointShadows!==D||M.numSpotShadows!==P||M.numSpotMaps!==O||M.numLightProbes!==U)&&(r.directional.length=_,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=U,M.directionalLength=_,M.pointLength=E,M.spotLength=w,M.rectAreaLength=y,M.hemiLength=S,M.numDirectionalShadows=b,M.numPointShadows=D,M.numSpotShadows=P,M.numSpotMaps=O,M.numLightProbes=U,r.version=LD++)}function h(f,g){let v=0,m=0,_=0,E=0,w=0;const y=g.matrixWorldInverse;for(let S=0,b=f.length;S<b;S++){const D=f[S];if(D.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),v++}else if(D.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),_++}else if(D.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),c.identity(),a.copy(D.matrixWorld),a.premultiply(y),c.extractRotation(a),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),m++}else if(D.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(y),w++}}}return{setup:d,setupView:h,state:r}}function $x(n){const e=new ID(n),t=[],r=[],o=[];function a(m){v.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function d(m){r.push(m)}function h(m){o.push(m)}function f(){e.setup(t)}function g(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:f,setupLightsView:g,pushLight:c,pushShadow:d,pushLightProbeGrid:h}}function UD(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let d;return c===void 0?(d=new $x(n),e.set(o,[d])):a>=c.length?(d=new $x(n),c.push(d)):d=c[a],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const FD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kD=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],BD=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Kx=new dn,Na=new ae,Zf=new ae;function VD(n,e,t){let r=new dS;const o=new Mt,a=new Mt,c=new nn,d=new JC,h=new eR,f={},g=t.maxTextureSize,v={[is]:Yn,[Yn]:is,[xr]:xr},m=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:FD,fragmentShader:OD}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const E=new wr;E.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new er(E,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let S=this.type;this.render=function(L,U,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Gb&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gc);const N=n.getRenderTarget(),B=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),W=n.state;W.setBlending(yr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const J=S!==this.type;J&&U.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(z=>z.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,z=L.length;se<z;se++){const $=L[se],j=$.shadow;if(j===void 0){rt("WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const X=j.getFrameExtents();o.multiply(X),a.copy(j.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(a.x=Math.floor(g/X.x),o.x=a.x*X.x,j.mapSize.x=a.x),o.y>g&&(a.y=Math.floor(g/X.y),o.y=a.y*X.y,j.mapSize.y=a.y));const te=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=te,j.map===null||J===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ua){if($.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Ki(o.x,o.y,{format:Fs,type:Er,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),j.map.texture.name=$.name+".shadowMap",j.map.depthTexture=new Uo(o.x,o.y,Xi),j.map.depthTexture.name=$.name+".shadowMapDepth",j.map.depthTexture.format=Tr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Tn,j.map.depthTexture.magFilter=Tn}else $.isPointLight?(j.map=new xS(o.x),j.map.depthTexture=new qC(o.x,Ji)):(j.map=new Ki(o.x,o.y),j.map.depthTexture=new Uo(o.x,o.y,Ji)),j.map.depthTexture.name=$.name+".shadowMap",j.map.depthTexture.format=Tr,this.type===Gc?(j.map.depthTexture.compareFunction=te?em:Jp,j.map.depthTexture.minFilter=Dn,j.map.depthTexture.magFilter=Dn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Tn,j.map.depthTexture.magFilter=Tn);j.camera.updateProjectionMatrix()}const oe=j.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<oe;V++){if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,V),n.clear();else{V===0&&(n.setRenderTarget(j.map),n.clear());const Q=j.getViewport(V);c.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),W.viewport(c)}if($.isPointLight){const Q=j.camera,Le=j.matrix,Be=$.distance||Q.far;Be!==Q.far&&(Q.far=Be,Q.updateProjectionMatrix()),Na.setFromMatrixPosition($.matrixWorld),Q.position.copy(Na),Zf.copy(Q.position),Zf.add(kD[V]),Q.up.copy(BD[V]),Q.lookAt(Zf),Q.updateMatrixWorld(),Le.makeTranslation(-Na.x,-Na.y,-Na.z),Kx.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Kx,Q.coordinateSystem,Q.reversedDepth)}else j.updateMatrices($);r=j.getFrustum(),P(U,M,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===Ua&&b(j,M),j.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(N,B,F)};function b(L,U){const M=e.update(w);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ki(o.x,o.y,{format:Fs,type:Er})),m.uniforms.shadow_pass.value=L.map.depthTexture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(U,null,M,m,w,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(U,null,M,_,w,null)}function D(L,U,M,N){let B=null;const F=M.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)B=F;else if(B=M.isPointLight===!0?h:d,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const W=B.uuid,J=U.uuid;let se=f[W];se===void 0&&(se={},f[W]=se);let z=se[J];z===void 0&&(z=B.clone(),se[J]=z,U.addEventListener("dispose",O)),B=z}if(B.visible=U.visible,B.wireframe=U.wireframe,N===Ua?B.side=U.shadowSide!==null?U.shadowSide:U.side:B.side=U.shadowSide!==null?U.shadowSide:v[U.side],B.alphaMap=U.alphaMap,B.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,B.map=U.map,B.clipShadows=U.clipShadows,B.clippingPlanes=U.clippingPlanes,B.clipIntersection=U.clipIntersection,B.displacementMap=U.displacementMap,B.displacementScale=U.displacementScale,B.displacementBias=U.displacementBias,B.wireframeLinewidth=U.wireframeLinewidth,B.linewidth=U.linewidth,M.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const W=n.properties.get(B);W.light=M}return B}function P(L,U,M,N,B){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===Ua)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,L.matrixWorld);const J=e.update(L),se=L.material;if(Array.isArray(se)){const z=J.groups;for(let $=0,j=z.length;$<j;$++){const X=z[$],te=se[X.materialIndex];if(te&&te.visible){const oe=D(L,te,N,B);L.onBeforeShadow(n,L,U,M,J,oe,X),n.renderBufferDirect(M,null,J,oe,L,X),L.onAfterShadow(n,L,U,M,J,oe,X)}}}else if(se.visible){const z=D(L,se,N,B);L.onBeforeShadow(n,L,U,M,J,z,null),n.renderBufferDirect(M,null,J,z,L,null),L.onAfterShadow(n,L,U,M,J,z,null)}}const W=L.children;for(let J=0,se=W.length;J<se;J++)P(W[J],U,M,N,B)}function O(L){L.target.removeEventListener("dispose",O);for(const M in f){const N=f[M],B=L.target.uuid;B in N&&(N[B].dispose(),delete N[B])}}}function zD(n,e){function t(){let H=!1;const Ae=new nn;let he=null;const ke=new nn(0,0,0,0);return{setMask:function(Re){he!==Re&&!H&&(n.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){H=Re},setClear:function(Re,_e,Ye,at,Ut){Ut===!0&&(Re*=at,_e*=at,Ye*=at),Ae.set(Re,_e,Ye,at),ke.equals(Ae)===!1&&(n.clearColor(Re,_e,Ye,at),ke.copy(Ae))},reset:function(){H=!1,he=null,ke.set(-1,0,0,0)}}}function r(){let H=!1,Ae=!1,he=null,ke=null,Re=null;return{setReversed:function(_e){if(Ae!==_e){const Ye=e.get("EXT_clip_control");_e?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ae=_e;const at=Re;Re=null,this.setClear(at)}},getReversed:function(){return Ae},setTest:function(_e){_e?de(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(_e){he!==_e&&!H&&(n.depthMask(_e),he=_e)},setFunc:function(_e){if(Ae&&(_e=SC[_e]),ke!==_e){switch(_e){case bh:n.depthFunc(n.NEVER);break;case Ch:n.depthFunc(n.ALWAYS);break;case Rh:n.depthFunc(n.LESS);break;case No:n.depthFunc(n.LEQUAL);break;case Ph:n.depthFunc(n.EQUAL);break;case Dh:n.depthFunc(n.GEQUAL);break;case Lh:n.depthFunc(n.GREATER);break;case Nh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ke=_e}},setLocked:function(_e){H=_e},setClear:function(_e){Re!==_e&&(Re=_e,Ae&&(_e=1-_e),n.clearDepth(_e))},reset:function(){H=!1,he=null,ke=null,Re=null,Ae=!1}}}function o(){let H=!1,Ae=null,he=null,ke=null,Re=null,_e=null,Ye=null,at=null,Ut=null;return{setTest:function(At){H||(At?de(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(At){Ae!==At&&!H&&(n.stencilMask(At),Ae=At)},setFunc:function(At,Ln,si){(he!==At||ke!==Ln||Re!==si)&&(n.stencilFunc(At,Ln,si),he=At,ke=Ln,Re=si)},setOp:function(At,Ln,si){(_e!==At||Ye!==Ln||at!==si)&&(n.stencilOp(At,Ln,si),_e=At,Ye=Ln,at=si)},setLocked:function(At){H=At},setClear:function(At){Ut!==At&&(n.clearStencil(At),Ut=At)},reset:function(){H=!1,Ae=null,he=null,ke=null,Re=null,_e=null,Ye=null,at=null,Ut=null}}}const a=new t,c=new r,d=new o,h=new WeakMap,f=new WeakMap;let g={},v={},m={},_=new WeakMap,E=[],w=null,y=!1,S=null,b=null,D=null,P=null,O=null,L=null,U=null,M=new It(0,0,0),N=0,B=!1,F=null,W=null,J=null,se=null,z=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,X=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=X>=1):te.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=X>=2);let oe=null,V={};const Q=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Be=new nn().fromArray(Q),Ie=new nn().fromArray(Le);function le(H,Ae,he,ke){const Re=new Uint8Array(4),_e=n.createTexture();n.bindTexture(H,_e),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<he;Ye++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Ae+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return _e}const me={};me[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),de(n.DEPTH_TEST),c.setFunc(No),$t(!1),Bt(Jv),de(n.CULL_FACE),Nt(yr);function de(H){g[H]!==!0&&(n.enable(H),g[H]=!0)}function Ne(H){g[H]!==!1&&(n.disable(H),g[H]=!1)}function je(H,Ae){return m[H]!==Ae?(n.bindFramebuffer(H,Ae),m[H]=Ae,H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ae),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function et(H,Ae){let he=E,ke=!1;if(H){he=_.get(Ae),he===void 0&&(he=[],_.set(Ae,he));const Re=H.textures;if(he.length!==Re.length||he[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ye=Re.length;_e<Ye;_e++)he[_e]=n.COLOR_ATTACHMENT0+_e;he.length=Re.length,ke=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,ke=!0);ke&&n.drawBuffers(he)}function kt(H){return w!==H?(n.useProgram(H),w=H,!0):!1}const dt={[bs]:n.FUNC_ADD,[Wb]:n.FUNC_SUBTRACT,[jb]:n.FUNC_REVERSE_SUBTRACT};dt[Xb]=n.MIN,dt[qb]=n.MAX;const wt={[Yb]:n.ZERO,[$b]:n.ONE,[Kb]:n.SRC_COLOR,[wh]:n.SRC_ALPHA,[nC]:n.SRC_ALPHA_SATURATE,[eC]:n.DST_COLOR,[Qb]:n.DST_ALPHA,[Zb]:n.ONE_MINUS_SRC_COLOR,[Ah]:n.ONE_MINUS_SRC_ALPHA,[tC]:n.ONE_MINUS_DST_COLOR,[Jb]:n.ONE_MINUS_DST_ALPHA,[iC]:n.CONSTANT_COLOR,[rC]:n.ONE_MINUS_CONSTANT_COLOR,[sC]:n.CONSTANT_ALPHA,[oC]:n.ONE_MINUS_CONSTANT_ALPHA};function Nt(H,Ae,he,ke,Re,_e,Ye,at,Ut,At){if(H===yr){y===!0&&(Ne(n.BLEND),y=!1);return}if(y===!1&&(de(n.BLEND),y=!0),H!==Hb){if(H!==S||At!==B){if((b!==bs||O!==bs)&&(n.blendEquation(n.FUNC_ADD),b=bs,O=bs),At)switch(H){case Ro:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ex:n.blendFunc(n.ONE,n.ONE);break;case tx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Tt("WebGLState: Invalid blending: ",H);break}else switch(H){case Ro:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ex:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tx:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nx:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",H);break}D=null,P=null,L=null,U=null,M.set(0,0,0),N=0,S=H,B=At}return}Re=Re||Ae,_e=_e||he,Ye=Ye||ke,(Ae!==b||Re!==O)&&(n.blendEquationSeparate(dt[Ae],dt[Re]),b=Ae,O=Re),(he!==D||ke!==P||_e!==L||Ye!==U)&&(n.blendFuncSeparate(wt[he],wt[ke],wt[_e],wt[Ye]),D=he,P=ke,L=_e,U=Ye),(at.equals(M)===!1||Ut!==N)&&(n.blendColor(at.r,at.g,at.b,Ut),M.copy(at),N=Ut),S=H,B=!1}function ft(H,Ae){H.side===xr?Ne(n.CULL_FACE):de(n.CULL_FACE);let he=H.side===Yn;Ae&&(he=!he),$t(he),H.blending===Ro&&H.transparent===!1?Nt(yr):Nt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const ke=H.stencilWrite;d.setTest(ke),ke&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),q(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function $t(H){F!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),F=H)}function Bt(H){H!==Vb?(de(n.CULL_FACE),H!==W&&(H===Jv?n.cullFace(n.BACK):H===zb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),W=H}function xn(H){H!==J&&(j&&n.lineWidth(H),J=H)}function q(H,Ae,he){H?(de(n.POLYGON_OFFSET_FILL),(se!==Ae||z!==he)&&(se=Ae,z=he,c.getReversed()&&(Ae=-Ae),n.polygonOffset(Ae,he))):Ne(n.POLYGON_OFFSET_FILL)}function Vt(H){H?de(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function ht(H){H===void 0&&(H=n.TEXTURE0+$-1),oe!==H&&(n.activeTexture(H),oe=H)}function Rt(H,Ae,he){he===void 0&&(oe===null?he=n.TEXTURE0+$-1:he=oe);let ke=V[he];ke===void 0&&(ke={type:void 0,texture:void 0},V[he]=ke),(ke.type!==H||ke.texture!==Ae)&&(oe!==he&&(n.activeTexture(he),oe=he),n.bindTexture(H,Ae||me[H]),ke.type=H,ke.texture=Ae)}function Ue(){const H=V[oe];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ht(){try{n.compressedTexImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function T(){try{n.texSubImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function Z(){try{n.texSubImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function pe(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function Ee(){try{n.texStorage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function De(){try{n.texStorage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function fe(){try{n.texImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function ge(){try{n.texImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function Oe(H){return v[H]!==void 0?v[H]:n.getParameter(H)}function Ve(H,Ae){v[H]!==Ae&&(n.pixelStorei(H,Ae),v[H]=Ae)}function be(H){Be.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Be.copy(H))}function Te(H){Ie.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ie.copy(H))}function it(H,Ae){let he=f.get(Ae);he===void 0&&(he=new WeakMap,f.set(Ae,he));let ke=he.get(H);ke===void 0&&(ke=n.getUniformBlockIndex(Ae,H.name),he.set(H,ke))}function ot(H,Ae){const ke=f.get(Ae).get(H);h.get(Ae)!==ke&&(n.uniformBlockBinding(Ae,ke,H.__bindingPointIndex),h.set(Ae,ke))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},oe=null,V={},m={},_=new WeakMap,E=[],w=null,y=!1,S=null,b=null,D=null,P=null,O=null,L=null,U=null,M=new It(0,0,0),N=0,B=!1,F=null,W=null,J=null,se=null,z=null,Be.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:de,disable:Ne,bindFramebuffer:je,drawBuffers:et,useProgram:kt,setBlending:Nt,setMaterial:ft,setFlipSided:$t,setCullFace:Bt,setLineWidth:xn,setPolygonOffset:q,setScissorTest:Vt,activeTexture:ht,bindTexture:Rt,unbindTexture:Ue,compressedTexImage2D:Ht,compressedTexImage3D:I,texImage2D:fe,texImage3D:ge,pixelStorei:Ve,getParameter:Oe,updateUBOMapping:it,uniformBlockBinding:ot,texStorage2D:Ee,texStorage3D:De,texSubImage2D:T,texSubImage3D:Z,compressedTexSubImage2D:pe,compressedTexSubImage3D:xe,scissor:be,viewport:Te,reset:mt}}function GD(n,e,t,r,o,a,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Mt,g=new WeakMap,v=new Set;let m;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,T){return E?new OffscreenCanvas(I,T):cu("canvas")}function y(I,T,Z){let pe=1;const xe=Ht(I);if((xe.width>Z||xe.height>Z)&&(pe=Z/Math.max(xe.width,xe.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ee=Math.floor(pe*xe.width),De=Math.floor(pe*xe.height);m===void 0&&(m=w(Ee,De));const fe=T?w(Ee,De):m;return fe.width=Ee,fe.height=De,fe.getContext("2d").drawImage(I,0,0,Ee,De),rt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Ee+"x"+De+")."),fe}else return"data"in I&&rt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),I;return I}function S(I){return I.generateMipmaps}function b(I){n.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(I,T,Z,pe,xe,Ee=!1){if(I!==null){if(n[I]!==void 0)return n[I];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let De;pe&&(De=e.get("EXT_texture_norm16"),De||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=T;if(T===n.RED&&(Z===n.FLOAT&&(fe=n.R32F),Z===n.HALF_FLOAT&&(fe=n.R16F),Z===n.UNSIGNED_BYTE&&(fe=n.R8),Z===n.UNSIGNED_SHORT&&De&&(fe=De.R16_EXT),Z===n.SHORT&&De&&(fe=De.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.R8UI),Z===n.UNSIGNED_SHORT&&(fe=n.R16UI),Z===n.UNSIGNED_INT&&(fe=n.R32UI),Z===n.BYTE&&(fe=n.R8I),Z===n.SHORT&&(fe=n.R16I),Z===n.INT&&(fe=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(fe=n.RG32F),Z===n.HALF_FLOAT&&(fe=n.RG16F),Z===n.UNSIGNED_BYTE&&(fe=n.RG8),Z===n.UNSIGNED_SHORT&&De&&(fe=De.RG16_EXT),Z===n.SHORT&&De&&(fe=De.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RG8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RG16UI),Z===n.UNSIGNED_INT&&(fe=n.RG32UI),Z===n.BYTE&&(fe=n.RG8I),Z===n.SHORT&&(fe=n.RG16I),Z===n.INT&&(fe=n.RG32I)),T===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),Z===n.UNSIGNED_INT&&(fe=n.RGB32UI),Z===n.BYTE&&(fe=n.RGB8I),Z===n.SHORT&&(fe=n.RGB16I),Z===n.INT&&(fe=n.RGB32I)),T===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),Z===n.UNSIGNED_INT&&(fe=n.RGBA32UI),Z===n.BYTE&&(fe=n.RGBA8I),Z===n.SHORT&&(fe=n.RGBA16I),Z===n.INT&&(fe=n.RGBA32I)),T===n.RGB&&(Z===n.UNSIGNED_SHORT&&De&&(fe=De.RGB16_EXT),Z===n.SHORT&&De&&(fe=De.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),T===n.RGBA){const ge=Ee?au:_t.getTransfer(xe);Z===n.FLOAT&&(fe=n.RGBA32F),Z===n.HALF_FLOAT&&(fe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(fe=ge===Lt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&De&&(fe=De.RGBA16_EXT),Z===n.SHORT&&De&&(fe=De.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function O(I,T){let Z;return I?T===null||T===Ji||T===qa?Z=n.DEPTH24_STENCIL8:T===Xi?Z=n.DEPTH32F_STENCIL8:T===Xa&&(Z=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ji||T===qa?Z=n.DEPTH_COMPONENT24:T===Xi?Z=n.DEPTH_COMPONENT32F:T===Xa&&(Z=n.DEPTH_COMPONENT16),Z}function L(I,T){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tn&&I.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function U(I){const T=I.target;T.removeEventListener("dispose",U),N(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&v.delete(T)}function M(I){const T=I.target;T.removeEventListener("dispose",M),F(T)}function N(I){const T=r.get(I);if(T.__webglInit===void 0)return;const Z=I.source,pe=_.get(Z);if(pe){const xe=pe[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&B(I),Object.keys(pe).length===0&&_.delete(Z)}r.remove(I)}function B(I){const T=r.get(I);n.deleteTexture(T.__webglTexture);const Z=I.source,pe=_.get(Z);delete pe[T.__cacheKey],c.memory.textures--}function F(I){const T=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let xe=0;xe<T.__webglFramebuffer[pe].length;xe++)n.deleteFramebuffer(T.__webglFramebuffer[pe][xe]);else n.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)n.deleteFramebuffer(T.__webglFramebuffer[pe]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=I.textures;for(let pe=0,xe=Z.length;pe<xe;pe++){const Ee=r.get(Z[pe]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),c.memory.textures--),r.remove(Z[pe])}r.remove(I)}let W=0;function J(){W=0}function se(){return W}function z(I){W=I}function $(){const I=W;return I>=o.maxTextures&&rt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),W+=1,I}function j(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function X(I,T){const Z=r.get(I);if(I.isVideoTexture&&Rt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const pe=I.image;if(pe===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(Z,I,T);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function te(I,T){const Z=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Ne(Z,I,T);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function oe(I,T){const Z=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Ne(Z,I,T);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function V(I,T){const Z=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){je(Z,I,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}const Q={[Ih]:n.REPEAT,[_r]:n.CLAMP_TO_EDGE,[Uh]:n.MIRRORED_REPEAT},Le={[Tn]:n.NEAREST,[cC]:n.NEAREST_MIPMAP_NEAREST,[uc]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[Sf]:n.LINEAR_MIPMAP_NEAREST,[Ds]:n.LINEAR_MIPMAP_LINEAR},Be={[fC]:n.NEVER,[vC]:n.ALWAYS,[hC]:n.LESS,[Jp]:n.LEQUAL,[pC]:n.EQUAL,[em]:n.GEQUAL,[mC]:n.GREATER,[gC]:n.NOTEQUAL};function Ie(I,T){if(T.type===Xi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Dn||T.magFilter===Sf||T.magFilter===uc||T.magFilter===Ds||T.minFilter===Dn||T.minFilter===Sf||T.minFilter===uc||T.minFilter===Ds)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Q[T.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Q[T.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Q[T.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Le[T.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Le[T.minFilter]),T.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Be[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Tn||T.minFilter!==uc&&T.minFilter!==Ds||T.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function le(I,T){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",U));const pe=T.source;let xe=_.get(pe);xe===void 0&&(xe={},_.set(pe,xe));const Ee=j(T);if(Ee!==I.__cacheKey){xe[Ee]===void 0&&(xe[Ee]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),xe[Ee].usedTimes++;const De=xe[I.__cacheKey];De!==void 0&&(xe[I.__cacheKey].usedTimes--,De.usedTimes===0&&B(T)),I.__cacheKey=Ee,I.__webglTexture=xe[Ee].texture}return Z}function me(I,T,Z){return Math.floor(Math.floor(I/Z)/T)}function de(I,T,Z,pe){const Ee=I.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Z,pe,T.data);else{Ee.sort((Ve,be)=>Ve.start-be.start);let De=0;for(let Ve=1;Ve<Ee.length;Ve++){const be=Ee[De],Te=Ee[Ve],it=be.start+be.count,ot=me(Te.start,T.width,4),mt=me(be.start,T.width,4);Te.start<=it+1&&ot===mt&&me(Te.start+Te.count-1,T.width,4)===ot?be.count=Math.max(be.count,Te.start+Te.count-be.start):(++De,Ee[De]=Te)}Ee.length=De+1;const fe=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Ve=0,be=Ee.length;Ve<be;Ve++){const Te=Ee[Ve],it=Math.floor(Te.start/4),ot=Math.ceil(Te.count/4),mt=it%T.width,H=Math.floor(it/T.width),Ae=ot,he=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,mt,H,Ae,he,Z,pe,T.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function Ne(I,T,Z){let pe=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=n.TEXTURE_3D);const xe=le(I,T),Ee=T.source;t.bindTexture(pe,I.__webglTexture,n.TEXTURE0+Z);const De=r.get(Ee);if(Ee.version!==De.__version||xe===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const he=_t.getPrimaries(_t.workingColorSpace),ke=T.colorSpace===Qr?null:_t.getPrimaries(T.colorSpace),Re=T.colorSpace===Qr||he===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ge=y(T.image,!1,o.maxTextureSize);ge=Ue(T,ge);const Oe=a.convert(T.format,T.colorSpace),Ve=a.convert(T.type);let be=P(T.internalFormat,Oe,Ve,T.normalized,T.colorSpace,T.isVideoTexture);Ie(pe,T);let Te;const it=T.mipmaps,ot=T.isVideoTexture!==!0,mt=De.__version===void 0||xe===!0,H=Ee.dataReady,Ae=L(T,ge);if(T.isDepthTexture)be=O(T.format===Ls,T.type),mt&&(ot?t.texStorage2D(n.TEXTURE_2D,1,be,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,be,ge.width,ge.height,0,Oe,Ve,null));else if(T.isDataTexture)if(it.length>0){ot&&mt&&t.texStorage2D(n.TEXTURE_2D,Ae,be,it[0].width,it[0].height);for(let he=0,ke=it.length;he<ke;he++)Te=it[he],ot?H&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Te.width,Te.height,Oe,Ve,Te.data):t.texImage2D(n.TEXTURE_2D,he,be,Te.width,Te.height,0,Oe,Ve,Te.data);T.generateMipmaps=!1}else ot?(mt&&t.texStorage2D(n.TEXTURE_2D,Ae,be,ge.width,ge.height),H&&de(T,ge,Oe,Ve)):t.texImage2D(n.TEXTURE_2D,0,be,ge.width,ge.height,0,Oe,Ve,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,be,it[0].width,it[0].height,ge.depth);for(let he=0,ke=it.length;he<ke;he++)if(Te=it[he],T.format!==Li)if(Oe!==null)if(ot){if(H)if(T.layerUpdates.size>0){const Re=bx(Te.width,Te.height,T.format,T.type);for(const _e of T.layerUpdates){const Ye=Te.data.subarray(_e*Re/Te.data.BYTES_PER_ELEMENT,(_e+1)*Re/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,_e,Te.width,Te.height,1,Oe,Ye)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,ge.depth,Oe,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,be,Te.width,Te.height,ge.depth,0,Te.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,ge.depth,Oe,Ve,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,be,Te.width,Te.height,ge.depth,0,Oe,Ve,Te.data)}else{ot&&mt&&t.texStorage2D(n.TEXTURE_2D,Ae,be,it[0].width,it[0].height);for(let he=0,ke=it.length;he<ke;he++)Te=it[he],T.format!==Li?Oe!==null?ot?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Te.width,Te.height,Oe,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,he,be,Te.width,Te.height,0,Te.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?H&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Te.width,Te.height,Oe,Ve,Te.data):t.texImage2D(n.TEXTURE_2D,he,be,Te.width,Te.height,0,Oe,Ve,Te.data)}else if(T.isDataArrayTexture)if(ot){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,be,ge.width,ge.height,ge.depth),H)if(T.layerUpdates.size>0){const he=bx(ge.width,ge.height,T.format,T.type);for(const ke of T.layerUpdates){const Re=ge.data.subarray(ke*he/ge.data.BYTES_PER_ELEMENT,(ke+1)*he/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,ge.width,ge.height,1,Oe,Ve,Re)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Oe,Ve,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ge.width,ge.height,ge.depth,0,Oe,Ve,ge.data);else if(T.isData3DTexture)ot?(mt&&t.texStorage3D(n.TEXTURE_3D,Ae,be,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Oe,Ve,ge.data)):t.texImage3D(n.TEXTURE_3D,0,be,ge.width,ge.height,ge.depth,0,Oe,Ve,ge.data);else if(T.isFramebufferTexture){if(mt)if(ot)t.texStorage2D(n.TEXTURE_2D,Ae,be,ge.width,ge.height);else{let he=ge.width,ke=ge.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(n.TEXTURE_2D,Re,be,he,ke,0,Oe,Ve,null),he>>=1,ke>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ge.parentNode!==he){he.appendChild(ge),v.add(T),he.onpaint=at=>{const Ut=at.changedElements;for(const At of v)Ut.includes(At.image)&&(At.needsUpdate=!0)},he.requestPaint();return}const ke=0,Re=n.RGBA,_e=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ke,Re,_e,Ye,ge),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(it.length>0){if(ot&&mt){const he=Ht(it[0]);t.texStorage2D(n.TEXTURE_2D,Ae,be,he.width,he.height)}for(let he=0,ke=it.length;he<ke;he++)Te=it[he],ot?H&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Oe,Ve,Te):t.texImage2D(n.TEXTURE_2D,he,be,Oe,Ve,Te);T.generateMipmaps=!1}else if(ot){if(mt){const he=Ht(ge);t.texStorage2D(n.TEXTURE_2D,Ae,be,he.width,he.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Ve,ge)}else t.texImage2D(n.TEXTURE_2D,0,be,Oe,Ve,ge);S(T)&&b(pe),De.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function je(I,T,Z){if(T.image.length!==6)return;const pe=le(I,T),xe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Z);const Ee=r.get(xe);if(xe.version!==Ee.__version||pe===!0){t.activeTexture(n.TEXTURE0+Z);const De=_t.getPrimaries(_t.workingColorSpace),fe=T.colorSpace===Qr?null:_t.getPrimaries(T.colorSpace),ge=T.colorSpace===Qr||De===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ve=T.image[0]&&T.image[0].isDataTexture,be=[];for(let _e=0;_e<6;_e++)!Oe&&!Ve?be[_e]=y(T.image[_e],!0,o.maxCubemapSize):be[_e]=Ve?T.image[_e].image:T.image[_e],be[_e]=Ue(T,be[_e]);const Te=be[0],it=a.convert(T.format,T.colorSpace),ot=a.convert(T.type),mt=P(T.internalFormat,it,ot,T.normalized,T.colorSpace),H=T.isVideoTexture!==!0,Ae=Ee.__version===void 0||pe===!0,he=xe.dataReady;let ke=L(T,Te);Ie(n.TEXTURE_CUBE_MAP,T);let Re;if(Oe){H&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,mt,Te.width,Te.height);for(let _e=0;_e<6;_e++){Re=be[_e].mipmaps;for(let Ye=0;Ye<Re.length;Ye++){const at=Re[Ye];T.format!==Li?it!==null?H?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,0,0,at.width,at.height,it,at.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,mt,at.width,at.height,0,at.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,0,0,at.width,at.height,it,ot,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,mt,at.width,at.height,0,it,ot,at.data)}}}else{if(Re=T.mipmaps,H&&Ae){Re.length>0&&ke++;const _e=Ht(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,mt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ve){H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,be[_e].width,be[_e].height,it,ot,be[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,mt,be[_e].width,be[_e].height,0,it,ot,be[_e].data);for(let Ye=0;Ye<Re.length;Ye++){const Ut=Re[Ye].image[_e].image;H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,0,0,Ut.width,Ut.height,it,ot,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,mt,Ut.width,Ut.height,0,it,ot,Ut.data)}}else{H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,it,ot,be[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,mt,it,ot,be[_e]);for(let Ye=0;Ye<Re.length;Ye++){const at=Re[Ye];H?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,0,0,it,ot,at.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,mt,it,ot,at.image[_e])}}}S(T)&&b(n.TEXTURE_CUBE_MAP),Ee.__version=xe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function et(I,T,Z,pe,xe,Ee){const De=a.convert(Z.format,Z.colorSpace),fe=a.convert(Z.type),ge=P(Z.internalFormat,De,fe,Z.normalized,Z.colorSpace),Oe=r.get(T),Ve=r.get(Z);if(Ve.__renderTarget=T,!Oe.__hasExternalTextures){const be=Math.max(1,T.width>>Ee),Te=Math.max(1,T.height>>Ee);xe===n.TEXTURE_3D||xe===n.TEXTURE_2D_ARRAY?t.texImage3D(xe,Ee,ge,be,Te,T.depth,0,De,fe,null):t.texImage2D(xe,Ee,ge,be,Te,0,De,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),ht(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,xe,Ve.__webglTexture,0,Vt(T)):(xe===n.TEXTURE_2D||xe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,xe,Ve.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(I,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),T.depthBuffer){const pe=T.depthTexture,xe=pe&&pe.isDepthTexture?pe.type:null,Ee=O(T.stencilBuffer,xe),De=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ht(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(T),Ee,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(T),Ee,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,I)}else{const pe=T.textures;for(let xe=0;xe<pe.length;xe++){const Ee=pe[xe],De=a.convert(Ee.format,Ee.colorSpace),fe=a.convert(Ee.type),ge=P(Ee.internalFormat,De,fe,Ee.normalized,Ee.colorSpace);ht(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(T),ge,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(T),ge,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ge,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(I,T,Z){const pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(T.depthTexture);if(xe.__renderTarget=T,(!xe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,T.depthTexture.addEventListener("dispose",U)),xe.__webglTexture===void 0){xe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,xe.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,T.depthTexture);const Oe=a.convert(T.depthTexture.format),Ve=a.convert(T.depthTexture.type);let be;T.depthTexture.format===Tr?be=n.DEPTH_COMPONENT24:T.depthTexture.format===Ls&&(be=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,be,T.width,T.height,0,Oe,Ve,null)}}else X(T.depthTexture,0);const Ee=xe.__webglTexture,De=Vt(T),fe=pe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,ge=T.depthTexture.format===Ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Tr)ht(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,fe,Ee,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,ge,fe,Ee,0);else if(T.depthTexture.format===Ls)ht(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,fe,Ee,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,ge,fe,Ee,0);else throw new Error("Unknown depthTexture format")}function wt(I){const T=r.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const pe=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",xe)};pe.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=pe}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let pe=0;pe<6;pe++)dt(T.__webglFramebuffer[pe],I,pe);else{const pe=I.texture.mipmaps;pe&&pe.length>0?dt(T.__webglFramebuffer[0],I,0):dt(T.__webglFramebuffer,I,0)}else if(Z){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=n.createRenderbuffer(),kt(T.__webglDepthbuffer[pe],I,!1);else{const xe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,Ee)}}else{const pe=I.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),kt(T.__webglDepthbuffer,I,!1);else{const xe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(I,T,Z){const pe=r.get(I);T!==void 0&&et(pe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&wt(I)}function ft(I){const T=I.texture,Z=r.get(I),pe=r.get(T);I.addEventListener("dispose",M);const xe=I.textures,Ee=I.isWebGLCubeRenderTarget===!0,De=xe.length>1;if(De||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=T.version,c.memory.textures++),Ee){Z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[fe]=[];for(let ge=0;ge<T.mipmaps.length;ge++)Z.__webglFramebuffer[fe][ge]=n.createFramebuffer()}else Z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)Z.__webglFramebuffer[fe]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(De)for(let fe=0,ge=xe.length;fe<ge;fe++){const Oe=r.get(xe[fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),c.memory.textures++)}if(I.samples>0&&ht(I)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let fe=0;fe<xe.length;fe++){const ge=xe[fe];Z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[fe]);const Oe=a.convert(ge.format,ge.colorSpace),Ve=a.convert(ge.type),be=P(ge.internalFormat,Oe,Ve,ge.normalized,ge.colorSpace,I.isXRRenderTarget===!0),Te=Vt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,be,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),kt(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)et(Z.__webglFramebuffer[fe][ge],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else et(Z.__webglFramebuffer[fe],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(T)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let fe=0,ge=xe.length;fe<ge;fe++){const Oe=xe[fe],Ve=r.get(Oe);let be=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,Ve.__webglTexture),Ie(be,Oe),et(Z.__webglFramebuffer,I,Oe,n.COLOR_ATTACHMENT0+fe,be,0),S(Oe)&&b(be)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,pe.__webglTexture),Ie(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)et(Z.__webglFramebuffer[ge],I,T,n.COLOR_ATTACHMENT0,fe,ge);else et(Z.__webglFramebuffer,I,T,n.COLOR_ATTACHMENT0,fe,0);S(T)&&b(fe),t.unbindTexture()}I.depthBuffer&&wt(I)}function $t(I){const T=I.textures;for(let Z=0,pe=T.length;Z<pe;Z++){const xe=T[Z];if(S(xe)){const Ee=D(I),De=r.get(xe).__webglTexture;t.bindTexture(Ee,De),b(Ee),t.unbindTexture()}}}const Bt=[],xn=[];function q(I){if(I.samples>0){if(ht(I)===!1){const T=I.textures,Z=I.width,pe=I.height;let xe=n.COLOR_BUFFER_BIT;const Ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=r.get(I),fe=T.length>1;if(fe)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const ge=I.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xe|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Oe]);const Ve=r.get(T[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,xe,n.NEAREST),h===!0&&(Bt.length=0,xn.length=0,Bt.push(n.COLOR_ATTACHMENT0+Oe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Bt.push(Ee),xn.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,xn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,De.__webglColorRenderbuffer[Oe]);const Ve=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const T=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Vt(I){return Math.min(o.maxSamples,I.samples)}function ht(I){const T=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(I){const T=c.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Ue(I,T){const Z=I.colorSpace,pe=I.format,xe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==ou&&Z!==Qr&&(_t.getTransfer(Z)===Lt?(pe!==Li||xe!==pi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",Z)),T}function Ht(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.getTextureUnits=se,this.setTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=te,this.setTexture3D=oe,this.setTextureCube=V,this.rebindTextures=Nt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HD(n,e){function t(r,o=Qr){let a;const c=_t.getTransfer(o);if(r===pi)return n.UNSIGNED_BYTE;if(r===Yp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Jy)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===eS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Zy)return n.BYTE;if(r===Qy)return n.SHORT;if(r===Xa)return n.UNSIGNED_SHORT;if(r===qp)return n.INT;if(r===Ji)return n.UNSIGNED_INT;if(r===Xi)return n.FLOAT;if(r===Er)return n.HALF_FLOAT;if(r===tS)return n.ALPHA;if(r===nS)return n.RGB;if(r===Li)return n.RGBA;if(r===Tr)return n.DEPTH_COMPONENT;if(r===Ls)return n.DEPTH_STENCIL;if(r===iS)return n.RED;if(r===Kp)return n.RED_INTEGER;if(r===Fs)return n.RG;if(r===Zp)return n.RG_INTEGER;if(r===Qp)return n.RGBA_INTEGER;if(r===Hc||r===Wc||r===jc||r===Xc)if(c===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Hc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Hc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fh||r===Oh||r===kh||r===Bh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Fh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vh||r===zh||r===Gh||r===Hh||r===Wh||r===ru||r===jh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vh||r===zh)return c===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Gh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hh)return a.COMPRESSED_R11_EAC;if(r===Wh)return a.COMPRESSED_SIGNED_R11_EAC;if(r===ru)return a.COMPRESSED_RG11_EAC;if(r===jh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Xh||r===qh||r===Yh||r===$h||r===Kh||r===Zh||r===Qh||r===Jh||r===ep||r===tp||r===np||r===ip||r===rp||r===sp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$h)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ep)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tp)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===np)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ip)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rp)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sp)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===op||r===ap||r===lp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===op)return c===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ap)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cp||r===up||r===su||r===dp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===cp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===up)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===su)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qa?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const WD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new hS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ii({vertexShader:WD,fragmentShader:jD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new er(new tl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qD extends ks{constructor(e,t){super();const r=this;let o=null,a=1,c=null,d="local-floor",h=1,f=null,g=null,v=null,m=null,_=null,E=null;const w=typeof XRWebGLBinding<"u",y=new XD,S={},b=t.getContextAttributes();let D=null,P=null;const O=[],L=[],U=new Mt;let M=null;const N=new Pi;N.viewport=new nn;const B=new Pi;B.viewport=new nn;const F=[N,B],W=new nR;let J=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let me=O[le];return me===void 0&&(me=new Rf,O[le]=me),me.getTargetRaySpace()},this.getControllerGrip=function(le){let me=O[le];return me===void 0&&(me=new Rf,O[le]=me),me.getGripSpace()},this.getHand=function(le){let me=O[le];return me===void 0&&(me=new Rf,O[le]=me),me.getHandSpace()};function z(le){const me=L.indexOf(le.inputSource);if(me===-1)return;const de=O[me];de!==void 0&&(de.update(le.inputSource,le.frame,f||c),de.dispatchEvent({type:le.type,data:le.inputSource}))}function $(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",j);for(let le=0;le<O.length;le++){const me=L[le];me!==null&&(L[le]=null,O[le].disconnect(me))}J=null,se=null,y.reset();for(const le in S)delete S[le];e.setRenderTarget(D),_=null,m=null,v=null,o=null,P=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){a=le,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){d=le,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(le){f=le},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",$),o.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(U),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ne=null,je=null;b.depth&&(je=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?Ls:Tr,Ne=b.stencil?qa:Ji);const et={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:a};v=this.getBinding(),m=v.createProjectionLayer(et),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new Ki(m.textureWidth,m.textureHeight,{format:Li,type:pi,depthTexture:new Uo(m.textureWidth,m.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new Ki(_.framebufferWidth,_.framebufferHeight,{format:Li,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await o.requestReferenceSpace(d),Ie.setContext(o),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(le){for(let me=0;me<le.removed.length;me++){const de=le.removed[me],Ne=L.indexOf(de);Ne>=0&&(L[Ne]=null,O[Ne].disconnect(de))}for(let me=0;me<le.added.length;me++){const de=le.added[me];let Ne=L.indexOf(de);if(Ne===-1){for(let et=0;et<O.length;et++)if(et>=L.length){L.push(de),Ne=et;break}else if(L[et]===null){L[et]=de,Ne=et;break}if(Ne===-1)break}const je=O[Ne];je&&je.connect(de)}}const X=new ae,te=new ae;function oe(le,me,de){X.setFromMatrixPosition(me.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const Ne=X.distanceTo(te),je=me.projectionMatrix.elements,et=de.projectionMatrix.elements,kt=je[14]/(je[10]-1),dt=je[14]/(je[10]+1),wt=(je[9]+1)/je[5],Nt=(je[9]-1)/je[5],ft=(je[8]-1)/je[0],$t=(et[8]+1)/et[0],Bt=kt*ft,xn=kt*$t,q=Ne/(-ft+$t),Vt=q*-ft;if(me.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Vt),le.translateZ(q),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),je[10]===-1)le.projectionMatrix.copy(me.projectionMatrix),le.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const ht=kt+q,Rt=dt+q,Ue=Bt-Vt,Ht=xn+(Ne-Vt),I=wt*dt/Rt*ht,T=Nt*dt/Rt*ht;le.projectionMatrix.makePerspective(Ue,Ht,I,T,ht,Rt),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function V(le,me){me===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(me.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let me=le.near,de=le.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(de=y.depthFar)),W.near=B.near=N.near=me,W.far=B.far=N.far=de,(J!==W.near||se!==W.far)&&(o.updateRenderState({depthNear:W.near,depthFar:W.far}),J=W.near,se=W.far),W.layers.mask=le.layers.mask|6,N.layers.mask=W.layers.mask&-5,B.layers.mask=W.layers.mask&-3;const Ne=le.parent,je=W.cameras;V(W,Ne);for(let et=0;et<je.length;et++)V(je[et],Ne);je.length===2?oe(W,N,B):W.projectionMatrix.copy(N.projectionMatrix),Q(le,W,Ne)};function Q(le,me,de){de===null?le.matrix.copy(me.matrixWorld):(le.matrix.copy(de.matrixWorld),le.matrix.invert(),le.matrix.multiply(me.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(me.projectionMatrix),le.projectionMatrixInverse.copy(me.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=hp*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(m===null&&_===null))return h},this.setFoveation=function(le){h=le,m!==null&&(m.fixedFoveation=le),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=le)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(le){return S[le]};let Le=null;function Be(le,me){if(g=me.getViewerPose(f||c),E=me,g!==null){const de=g.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let Ne=!1;de.length!==W.cameras.length&&(W.cameras.length=0,Ne=!0);for(let dt=0;dt<de.length;dt++){const wt=de[dt];let Nt=null;if(_!==null)Nt=_.getViewport(wt);else{const $t=v.getViewSubImage(m,wt);Nt=$t.viewport,dt===0&&(e.setRenderTargetTextures(P,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(P))}let ft=F[dt];ft===void 0&&(ft=new Pi,ft.layers.enable(dt),ft.viewport=new nn,F[dt]=ft),ft.matrix.fromArray(wt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(wt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),dt===0&&(W.matrix.copy(ft.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ne===!0&&W.cameras.push(ft)}const je=o.enabledFeatures;if(je&&je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const dt=v.getDepthInformation(de[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,o.renderState)}if(je&&je.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<de.length;dt++){const wt=de[dt].camera;if(wt){let Nt=S[wt];Nt||(Nt=new hS,S[wt]=Nt);const ft=v.getCameraImage(wt);Nt.sourceTexture=ft}}}}for(let de=0;de<O.length;de++){const Ne=L[de],je=O[de];Ne!==null&&je!==void 0&&je.update(Ne,me,f||c)}Le&&Le(le,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Ie=new gS;Ie.setAnimationLoop(Be),this.setAnimationLoop=function(le){Le=le},this.dispose=function(){}}}const YD=new dn,ES=new ut;ES.set(-1,0,0,0,1,0,0,0,1);function $D(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,pS(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,b,D,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),v(y,S)):S.isMeshPhongMaterial?(a(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),m(y,S),S.isMeshPhysicalMaterial&&_(y,S,P)):S.isMeshMatcapMaterial?(a(y,S),E(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),w(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?h(y,S,b,D):S.isSpriteMaterial?f(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Yn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Yn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const b=e.get(S),D=b.envMap,P=b.envMapRotation;D&&(y.envMap.value=D,y.envMapRotation.value.setFromMatrix4(YD.makeRotationFromEuler(P)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(ES),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,b,D){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*b,y.scale.value=D*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,b){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Yn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const b=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function KD(n,e,t,r){let o={},a={},c=[];const d=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,D){const P=D.program;r.uniformBlockBinding(b,P)}function f(b,D){let P=o[b.id];P===void 0&&(E(b),P=g(b),o[b.id]=P,b.addEventListener("dispose",y));const O=D.program;r.updateUBOMapping(b,O);const L=e.render.frame;a[b.id]!==L&&(m(b),a[b.id]=L)}function g(b){const D=v();b.__bindingPointIndex=D;const P=n.createBuffer(),O=b.__size,L=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,O,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,P),P}function v(){for(let b=0;b<d;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const D=o[b.id],P=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let L=0,U=P.length;L<U;L++){const M=Array.isArray(P[L])?P[L]:[P[L]];for(let N=0,B=M.length;N<B;N++){const F=M[N];if(_(F,L,N,O)===!0){const W=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let se=0;for(let z=0;z<J.length;z++){const $=J[z],j=w($);typeof $=="number"||typeof $=="boolean"?(F.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,W+se,F.__data)):$.isMatrix3?(F.__data[0]=$.elements[0],F.__data[1]=$.elements[1],F.__data[2]=$.elements[2],F.__data[3]=0,F.__data[4]=$.elements[3],F.__data[5]=$.elements[4],F.__data[6]=$.elements[5],F.__data[7]=0,F.__data[8]=$.elements[6],F.__data[9]=$.elements[7],F.__data[10]=$.elements[8],F.__data[11]=0):ArrayBuffer.isView($)?F.__data.set(new $.constructor($.buffer,$.byteOffset,F.__data.length)):($.toArray(F.__data,se),se+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(b,D,P,O){const L=b.value,U=D+"_"+P;if(O[U]===void 0)return typeof L=="number"||typeof L=="boolean"?O[U]=L:ArrayBuffer.isView(L)?O[U]=L.slice():O[U]=L.clone(),!0;{const M=O[U];if(typeof L=="number"||typeof L=="boolean"){if(M!==L)return O[U]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(M.equals(L)===!1)return M.copy(L),!0}}return!1}function E(b){const D=b.uniforms;let P=0;const O=16;for(let U=0,M=D.length;U<M;U++){const N=Array.isArray(D[U])?D[U]:[D[U]];for(let B=0,F=N.length;B<F;B++){const W=N[B],J=Array.isArray(W.value)?W.value:[W.value];for(let se=0,z=J.length;se<z;se++){const $=J[se],j=w($),X=P%O,te=X%j.boundary,oe=X+te;P+=te,oe!==0&&O-oe<j.storage&&(P+=O-oe),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=P,P+=j.storage}}}const L=P%O;return L>0&&(P+=O-L),b.__size=P,b.__cache={},this}function w(b){const D={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(D.boundary=4,D.storage=4):b.isVector2?(D.boundary=8,D.storage=8):b.isVector3||b.isColor?(D.boundary=16,D.storage=12):b.isVector4?(D.boundary=16,D.storage=16):b.isMatrix3?(D.boundary=48,D.storage=48):b.isMatrix4?(D.boundary=64,D.storage=64):b.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(D.boundary=16,D.storage=b.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",b),D}function y(b){const D=b.target;D.removeEventListener("dispose",y);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),n.deleteBuffer(o[D.id]),delete o[D.id],delete a[D.id]}function S(){for(const b in o)n.deleteBuffer(o[b]);c=[],o={},a={}}return{bind:h,update:f,dispose:S}}const ZD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function QD(){return Gi===null&&(Gi=new HC(ZD,16,16,Fs,Er),Gi.name="DFG_LUT",Gi.minFilter=Dn,Gi.magFilter=Dn,Gi.wrapS=_r,Gi.wrapT=_r,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class JD{constructor(e={}){const{canvas:t=_C(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:_=pi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const w=_,y=new Set([Qp,Zp,Kp]),S=new Set([pi,Ji,Xa,qa,Yp,$p]),b=new Uint32Array(4),D=new Int32Array(4),P=new ae;let O=null,L=null;const U=[],M=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let F=!1,W=null;this._outputColorSpace=hi;let J=0,se=0,z=null,$=-1,j=null;const X=new nn,te=new nn;let oe=null;const V=new It(0);let Q=0,Le=t.width,Be=t.height,Ie=1,le=null,me=null;const de=new nn(0,0,Le,Be),Ne=new nn(0,0,Le,Be);let je=!1;const et=new dS;let kt=!1,dt=!1;const wt=new dn,Nt=new ae,ft=new nn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function xn(){return z===null?Ie:1}let q=r;function Vt(R,K){return t.getContext(R,K)}try{const R={alpha:!0,depth:o,stencil:a,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xp}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",at,!1),q===null){const K="webgl2";if(q=Vt(K,R),q===null)throw Vt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Tt("WebGLRenderer: "+R.message),R}let ht,Rt,Ue,Ht,I,T,Z,pe,xe,Ee,De,fe,ge,Oe,Ve,be,Te,it,ot,mt,H,Ae,he;function ke(){ht=new QP(q),ht.init(),H=new HD(q,ht),Rt=new WP(q,ht,e,H),Ue=new zD(q,ht),Rt.reversedDepthBuffer&&m&&Ue.buffers.depth.setReversed(!0),Ht=new t3(q),I=new bD,T=new GD(q,ht,Ue,I,Rt,H,Ht),Z=new ZP(B),pe=new sR(q),Ae=new GP(q,pe),xe=new JP(q,pe,Ht,Ae),Ee=new i3(q,xe,pe,Ae,Ht),it=new n3(q,Rt,T),Ve=new jP(I),De=new AD(B,Z,ht,Rt,Ae,Ve),fe=new $D(B,I),ge=new RD,Oe=new UD(ht),Te=new zP(B,Z,Ue,Ee,E,h),be=new VD(B,Ee,Rt),he=new KD(q,Ht,Rt,Ue),ot=new HP(q,ht,Ht),mt=new e3(q,ht,Ht),Ht.programs=De.programs,B.capabilities=Rt,B.extensions=ht,B.properties=I,B.renderLists=ge,B.shadowMap=be,B.state=Ue,B.info=Ht}ke(),w!==pi&&(N=new s3(w,t.width,t.height,o,a));const Re=new qD(B,q);this.xr=Re,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(R){R!==void 0&&(Ie=R,this.setSize(Le,Be,!1))},this.getSize=function(R){return R.set(Le,Be)},this.setSize=function(R,K,ce=!0){if(Re.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=R,Be=K,t.width=Math.floor(R*Ie),t.height=Math.floor(K*Ie),ce===!0&&(t.style.width=R+"px",t.style.height=K+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(Le*Ie,Be*Ie).floor()},this.setDrawingBufferSize=function(R,K,ce){Le=R,Be=K,Ie=ce,t.width=Math.floor(R*ce),t.height=Math.floor(K*ce),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(w===pi){Tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(de)},this.setViewport=function(R,K,ce,ie){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,K,ce,ie),Ue.viewport(X.copy(de).multiplyScalar(Ie).round())},this.getScissor=function(R){return R.copy(Ne)},this.setScissor=function(R,K,ce,ie){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,K,ce,ie),Ue.scissor(te.copy(Ne).multiplyScalar(Ie).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(R){Ue.setScissorTest(je=R)},this.setOpaqueSort=function(R){le=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ce=!0){let ie=0;if(R){let ne=!1;if(z!==null){const Pe=z.texture.format;ne=y.has(Pe)}if(ne){const Pe=z.texture.type,He=S.has(Pe),Ce=Te.getClearColor(),$e=Te.getClearAlpha(),Je=Ce.r,lt=Ce.g,ct=Ce.b;He?(b[0]=Je,b[1]=lt,b[2]=ct,b[3]=$e,q.clearBufferuiv(q.COLOR,0,b)):(D[0]=Je,D[1]=lt,D[2]=ct,D[3]=$e,q.clearBufferiv(q.COLOR,0,D))}else ie|=q.COLOR_BUFFER_BIT}K&&(ie|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),W=R},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Te.dispose(),ge.dispose(),Oe.dispose(),I.dispose(),Z.dispose(),Ee.dispose(),Ae.dispose(),he.dispose(),De.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ss),Re.removeEventListener("sessionend",Vs),nr.stop()};function _e(R){R.preventDefault(),lx("WebGLRenderer: Context Lost."),F=!0}function Ye(){lx("WebGLRenderer: Context Restored."),F=!1;const R=Ht.autoReset,K=be.enabled,ce=be.autoUpdate,ie=be.needsUpdate,ne=be.type;ke(),Ht.autoReset=R,be.enabled=K,be.autoUpdate=ce,be.needsUpdate=ie,be.type=ne}function at(R){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ut(R){const K=R.target;K.removeEventListener("dispose",Ut),At(K)}function At(R){Ln(R),I.remove(R)}function Ln(R){const K=I.get(R).programs;K!==void 0&&(K.forEach(function(ce){De.releaseProgram(ce)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ce,ie,ne,Pe){K===null&&(K=$t);const He=ne.isMesh&&ne.matrixWorld.determinant()<0,Ce=rl(R,K,ce,ie,ne);Ue.setMaterial(ie,He);let $e=ce.index,Je=1;if(ie.wireframe===!0){if($e=xe.getWireframeAttribute(ce),$e===void 0)return;Je=2}const lt=ce.drawRange,ct=ce.attributes.position;let Ze=lt.start*Je,St=(lt.start+lt.count)*Je;Pe!==null&&(Ze=Math.max(Ze,Pe.start*Je),St=Math.min(St,(Pe.start+Pe.count)*Je)),$e!==null?(Ze=Math.max(Ze,0),St=Math.min(St,$e.count)):ct!=null&&(Ze=Math.max(Ze,0),St=Math.min(St,ct.count));const zt=St-Ze;if(zt<0||zt===1/0)return;Ae.setup(ne,ie,Ce,ce,$e);let qt,Pt=ot;if($e!==null&&(qt=pe.get($e),Pt=mt,Pt.setIndex(qt)),ne.isMesh)ie.wireframe===!0?(Ue.setLineWidth(ie.wireframeLinewidth*xn()),Pt.setMode(q.LINES)):Pt.setMode(q.TRIANGLES);else if(ne.isLine){let rn=ie.linewidth;rn===void 0&&(rn=1),Ue.setLineWidth(rn*xn()),ne.isLineSegments?Pt.setMode(q.LINES):ne.isLineLoop?Pt.setMode(q.LINE_LOOP):Pt.setMode(q.LINE_STRIP)}else ne.isPoints?Pt.setMode(q.POINTS):ne.isSprite&&Pt.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const rn=ne._multiDrawStarts,ze=ne._multiDrawCounts,_n=ne._multiDrawCount,gt=$e?pe.get($e).bytesPerElement:1,Bn=I.get(ie).currentProgram.getUniforms();for(let Vn=0;Vn<_n;Vn++)Bn.setValue(q,"_gl_DrawID",Vn),Pt.render(rn[Vn]/gt,ze[Vn])}else if(ne.isInstancedMesh)Pt.renderInstances(Ze,zt,ne.count);else if(ce.isInstancedBufferGeometry){const rn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ze=Math.min(ce.instanceCount,rn);Pt.renderInstances(Ze,zt,ze)}else Pt.render(Ze,zt)};function si(R,K,ce){R.transparent===!0&&R.side===xr&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,zs(R,K,ce),R.side=is,R.needsUpdate=!0,zs(R,K,ce),R.side=xr):zs(R,K,ce)}this.compile=function(R,K,ce=null){ce===null&&(ce=R),L=Oe.get(ce),L.init(K),M.push(L),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),R!==ce&&R.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const ie=new Set;return R.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Pe=ne.material;if(Pe)if(Array.isArray(Pe))for(let He=0;He<Pe.length;He++){const Ce=Pe[He];si(Ce,ce,ne),ie.add(Ce)}else si(Pe,ce,ne),ie.add(Pe)}),L=M.pop(),ie},this.compileAsync=function(R,K,ce=null){const ie=this.compile(R,K,ce);return new Promise(ne=>{function Pe(){if(ie.forEach(function(He){I.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){ne(R);return}setTimeout(Pe,10)}ht.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let tr=null;function Bs(R){tr&&tr(R)}function ss(){nr.stop()}function Vs(){nr.start()}const nr=new gS;nr.setAnimationLoop(Bs),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(R){tr=R,Re.setAnimationLoop(R),R===null?nr.stop():nr.start()},Re.addEventListener("sessionstart",ss),Re.addEventListener("sessionend",Vs),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;W!==null&&W.renderStart(R,K);const ce=Re.enabled===!0&&Re.isPresenting===!0,ie=N!==null&&(z===null||ce)&&N.begin(B,z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(K),K=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(B,R,K,z),L=Oe.get(R,M.length),L.init(K),L.state.textureUnits=T.getTextureUnits(),M.push(L),wt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),et.setFromProjectionMatrix(wt,qi,K.reversedDepth),dt=this.localClippingEnabled,kt=Ve.init(this.clippingPlanes,dt),O=ge.get(R,U.length),O.init(),U.push(O),Re.enabled===!0&&Re.isPresenting===!0){const He=B.xr.getDepthSensingMesh();He!==null&&Ho(He,K,-1/0,B.sortObjects)}Ho(R,K,0,B.sortObjects),O.finish(),B.sortObjects===!0&&O.sort(le,me),Bt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Bt&&Te.addToRenderList(O,R),this.info.render.frame++,kt===!0&&Ve.beginShadows();const ne=L.state.shadowsArray;if(be.render(ne,R,K),kt===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&N.hasRenderPass())===!1){const He=O.opaque,Ce=O.transmissive;if(L.setupLights(),K.isArrayCamera){const $e=K.cameras;if(Ce.length>0)for(let Je=0,lt=$e.length;Je<lt;Je++){const ct=$e[Je];Ui(He,Ce,R,ct)}Bt&&Te.render(R);for(let Je=0,lt=$e.length;Je<lt;Je++){const ct=$e[Je];nl(O,R,ct,ct.viewport)}}else Ce.length>0&&Ui(He,Ce,R,K),Bt&&Te.render(R),nl(O,R,K)}z!==null&&se===0&&(T.updateMultisampleRenderTarget(z),T.updateRenderTargetMipmap(z)),ie&&N.end(B),R.isScene===!0&&R.onAfterRender(B,R,K),Ae.resetDefaultState(),$=-1,j=null,M.pop(),M.length>0?(L=M[M.length-1],T.setTextureUnits(L.state.textureUnits),kt===!0&&Ve.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,U.pop(),U.length>0?O=U[U.length-1]:O=null,W!==null&&W.renderEnd()};function Ho(R,K,ce,ie){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||et.intersectsSprite(R)){ie&&ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const He=Ee.update(R),Ce=R.material;Ce.visible&&O.push(R,He,Ce,ce,ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||et.intersectsObject(R))){const He=Ee.update(R),Ce=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ft.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ft.copy(He.boundingSphere.center)),ft.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(Ce)){const $e=He.groups;for(let Je=0,lt=$e.length;Je<lt;Je++){const ct=$e[Je],Ze=Ce[ct.materialIndex];Ze&&Ze.visible&&O.push(R,He,Ze,ce,ft.z,ct)}}else Ce.visible&&O.push(R,He,Ce,ce,ft.z,null)}}const Pe=R.children;for(let He=0,Ce=Pe.length;He<Ce;He++)Ho(Pe[He],K,ce,ie)}function nl(R,K,ce,ie){const{opaque:ne,transmissive:Pe,transparent:He}=R;L.setupLightsView(ce),kt===!0&&Ve.setGlobalState(B.clippingPlanes,ce),ie&&Ue.viewport(X.copy(ie)),ne.length>0&&os(ne,K,ce),Pe.length>0&&os(Pe,K,ce),He.length>0&&os(He,K,ce),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Ui(R,K,ce,ie){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const Ze=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new Ki(1,1,{generateMipmaps:!0,type:Ze?Er:pi,minFilter:Ds,samples:Math.max(4,Rt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const Pe=L.state.transmissionRenderTarget[ie.id],He=ie.viewport||X;Pe.setSize(He.z*B.transmissionResolutionScale,He.w*B.transmissionResolutionScale);const Ce=B.getRenderTarget(),$e=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(Pe),B.getClearColor(V),Q=B.getClearAlpha(),Q<1&&B.setClearColor(16777215,.5),B.clear(),Bt&&Te.render(ce);const lt=B.toneMapping;B.toneMapping=$i;const ct=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),kt===!0&&Ve.setGlobalState(B.clippingPlanes,ie),os(R,ce,ie),T.updateMultisampleRenderTarget(Pe),T.updateRenderTargetMipmap(Pe),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let St=0,zt=K.length;St<zt;St++){const qt=K[St],{object:Pt,geometry:rn,material:ze,group:_n}=qt;if(ze.side===xr&&Pt.layers.test(ie.layers)){const gt=ze.side;ze.side=Yn,ze.needsUpdate=!0,Wo(Pt,ce,ie,rn,ze,_n),ze.side=gt,ze.needsUpdate=!0,Ze=!0}}Ze===!0&&(T.updateMultisampleRenderTarget(Pe),T.updateRenderTargetMipmap(Pe))}B.setRenderTarget(Ce,$e,Je),B.setClearColor(V,Q),ct!==void 0&&(ie.viewport=ct),B.toneMapping=lt}function os(R,K,ce){const ie=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,Pe=R.length;ne<Pe;ne++){const He=R[ne],{object:Ce,geometry:$e,group:Je}=He;let lt=He.material;lt.allowOverride===!0&&ie!==null&&(lt=ie),Ce.layers.test(ce.layers)&&Wo(Ce,K,ce,$e,lt,Je)}}function Wo(R,K,ce,ie,ne,Pe){R.onBeforeRender(B,K,ce,ie,ne,Pe),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(B,K,ce,ie,R,Pe),ne.transparent===!0&&ne.side===xr&&ne.forceSinglePass===!1?(ne.side=Yn,ne.needsUpdate=!0,B.renderBufferDirect(ce,K,ie,ne,R,Pe),ne.side=is,ne.needsUpdate=!0,B.renderBufferDirect(ce,K,ie,ne,R,Pe),ne.side=xr):B.renderBufferDirect(ce,K,ie,ne,R,Pe),R.onAfterRender(B,K,ce,ie,ne,Pe)}function zs(R,K,ce){K.isScene!==!0&&(K=$t);const ie=I.get(R),ne=L.state.lights,Pe=L.state.shadowsArray,He=ne.state.version,Ce=De.getParameters(R,ne.state,Pe,K,ce,L.state.lightProbeGridArray),$e=De.getProgramCacheKey(Ce);let Je=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?K.environment:null,ie.fog=K.fog;const lt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=Z.get(R.envMap||ie.environment,lt),ie.envMapRotation=ie.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",Ut),Je=new Map,ie.programs=Je);let ct=Je.get($e);if(ct!==void 0){if(ie.currentProgram===ct&&ie.lightsStateVersion===He)return Xo(R,Ce),ct}else Ce.uniforms=De.getUniforms(R),W!==null&&R.isNodeMaterial&&W.build(R,ce,Ce),R.onBeforeCompile(Ce,B),ct=De.acquireProgram(Ce,$e),Je.set($e,ct),ie.uniforms=Ce.uniforms;const Ze=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Ve.uniform),Xo(R,Ce),ie.needsLights=Su(R),ie.lightsStateVersion=He,ie.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=ct,ie.uniformsList=null,ct}function jo(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Xo(R,K){const ce=I.get(R);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function il(R,K){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;P.setFromMatrixPosition(K.matrixWorld);for(let ce=0,ie=R.length;ce<ie;ce++){const ne=R[ce];if(ne.texture!==null&&ne.boundingBox.containsPoint(P))return ne}return null}function rl(R,K,ce,ie,ne){K.isScene!==!0&&(K=$t),T.resetTextureUnits();const Pe=K.fog,He=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?K.environment:null,Ce=z===null?B.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:_t.workingColorSpace,$e=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Je=Z.get(ie.envMap||He,$e),lt=ie.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ct=!!ce.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!ce.morphAttributes.position,St=!!ce.morphAttributes.normal,zt=!!ce.morphAttributes.color;let qt=$i;ie.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(qt=B.toneMapping);const Pt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,rn=Pt!==void 0?Pt.length:0,ze=I.get(ie),_n=L.state.lights;if(kt===!0&&(dt===!0||R!==j)){const Dt=R===j&&ie.id===$;Ve.setState(ie,R,Dt)}let gt=!1;ie.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==_n.state.version||ze.outputColorSpace!==Ce||ne.isBatchedMesh&&ze.batching===!1||!ne.isBatchedMesh&&ze.batching===!0||ne.isBatchedMesh&&ze.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&ze.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&ze.instancing===!1||!ne.isInstancedMesh&&ze.instancing===!0||ne.isSkinnedMesh&&ze.skinning===!1||!ne.isSkinnedMesh&&ze.skinning===!0||ne.isInstancedMesh&&ze.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ze.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ze.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ze.instancingMorph===!1&&ne.morphTexture!==null||ze.envMap!==Je||ie.fog===!0&&ze.fog!==Pe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ve.numPlanes||ze.numIntersection!==Ve.numIntersection)||ze.vertexAlphas!==lt||ze.vertexTangents!==ct||ze.morphTargets!==Ze||ze.morphNormals!==St||ze.morphColors!==zt||ze.toneMapping!==qt||ze.morphTargetsCount!==rn||!!ze.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,ze.__version=ie.version);let Bn=ze.currentProgram;gt===!0&&(Bn=zs(ie,K,ne),W&&ie.isNodeMaterial&&W.onUpdateProgram(ie,Bn,ze));let Vn=!1,vt=!1,ir=!1;const Ct=Bn.getUniforms(),Wt=ze.uniforms;if(Ue.useProgram(Bn.program)&&(Vn=!0,vt=!0,ir=!0),ie.id!==$&&($=ie.id,vt=!0),ze.needsLights){const Dt=il(L.state.lightProbeGridArray,ne);ze.lightProbeGrid!==Dt&&(ze.lightProbeGrid=Dt,vt=!0)}if(Vn||j!==R){Ue.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ct.setValue(q,"projectionMatrix",R.projectionMatrix),Ct.setValue(q,"viewMatrix",R.matrixWorldInverse);const xi=Ct.map.cameraPosition;xi!==void 0&&xi.setValue(q,Nt.setFromMatrixPosition(R.matrixWorld)),Rt.logarithmicDepthBuffer&&Ct.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ct.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),j!==R&&(j=R,vt=!0,ir=!0)}if(ze.needsLights&&(_n.state.directionalShadowMap.length>0&&Ct.setValue(q,"directionalShadowMap",_n.state.directionalShadowMap,T),_n.state.spotShadowMap.length>0&&Ct.setValue(q,"spotShadowMap",_n.state.spotShadowMap,T),_n.state.pointShadowMap.length>0&&Ct.setValue(q,"pointShadowMap",_n.state.pointShadowMap,T)),ne.isSkinnedMesh){Ct.setOptional(q,ne,"bindMatrix"),Ct.setOptional(q,ne,"bindMatrixInverse");const Dt=ne.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Ct.setValue(q,"boneTexture",Dt.boneTexture,T))}ne.isBatchedMesh&&(Ct.setOptional(q,ne,"batchingTexture"),Ct.setValue(q,"batchingTexture",ne._matricesTexture,T),Ct.setOptional(q,ne,"batchingIdTexture"),Ct.setValue(q,"batchingIdTexture",ne._indirectTexture,T),Ct.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ct.setValue(q,"batchingColorTexture",ne._colorsTexture,T));const vi=ce.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&it.update(ne,ce,Bn),(vt||ze.receiveShadow!==ne.receiveShadow)&&(ze.receiveShadow=ne.receiveShadow,Ct.setValue(q,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&K.environment!==null&&(Wt.envMapIntensity.value=K.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=QD()),vt){if(Ct.setValue(q,"toneMappingExposure",B.toneMappingExposure),ze.needsLights&&yu(Wt,ir),Pe&&ie.fog===!0&&fe.refreshFogUniforms(Wt,Pe),fe.refreshMaterialUniforms(Wt,ie,Ie,Be,L.state.transmissionRenderTarget[R.id]),ze.needsLights&&ze.lightProbeGrid){const Dt=ze.lightProbeGrid;Wt.probesSH.value=Dt.texture,Wt.probesMin.value.copy(Dt.boundingBox.min),Wt.probesMax.value.copy(Dt.boundingBox.max),Wt.probesResolution.value.copy(Dt.resolution)}qc.upload(q,jo(ze),Wt,T)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(qc.upload(q,jo(ze),Wt,T),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ct.setValue(q,"center",ne.center),Ct.setValue(q,"modelViewMatrix",ne.modelViewMatrix),Ct.setValue(q,"normalMatrix",ne.normalMatrix),Ct.setValue(q,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const Dt=ie.uniformsGroups;for(let xi=0,Fi=Dt.length;xi<Fi;xi++){const as=Dt[xi];he.update(as,Bn),he.bind(as,Bn)}}return Bn}function yu(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Su(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,K,ce){const ie=I.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),I.get(R.texture).__webglTexture=K,I.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ce,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ce=I.get(R);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0};const Kt=q.createFramebuffer();this.setRenderTarget=function(R,K=0,ce=0){z=R,J=K,se=ce;let ie=null,ne=!1,Pe=!1;if(R){const Ce=I.get(R);if(Ce.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(q.FRAMEBUFFER,Ce.__webglFramebuffer),X.copy(R.viewport),te.copy(R.scissor),oe=R.scissorTest,Ue.viewport(X),Ue.scissor(te),Ue.setScissorTest(oe),$=-1;return}else if(Ce.__webglFramebuffer===void 0)T.setupRenderTarget(R);else if(Ce.__hasExternalTextures)T.rebindTextures(R,I.get(R.texture).__webglTexture,I.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const lt=R.depthTexture;if(Ce.__boundDepthTexture!==lt){if(lt!==null&&I.has(lt)&&(R.width!==lt.image.width||R.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Pe=!0);const Je=I.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[K])?ie=Je[K][ce]:ie=Je[K],ne=!0):R.samples>0&&T.useMultisampledRTT(R)===!1?ie=I.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?ie=Je[ce]:ie=Je,X.copy(R.viewport),te.copy(R.scissor),oe=R.scissorTest}else X.copy(de).multiplyScalar(Ie).floor(),te.copy(Ne).multiplyScalar(Ie).floor(),oe=je;if(ce!==0&&(ie=Kt),Ue.bindFramebuffer(q.FRAMEBUFFER,ie)&&Ue.drawBuffers(R,ie),Ue.viewport(X),Ue.scissor(te),Ue.setScissorTest(oe),ne){const Ce=I.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce.__webglTexture,ce)}else if(Pe){const Ce=K;for(let $e=0;$e<R.textures.length;$e++){const Je=I.get(R.textures[$e]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+$e,Je.__webglTexture,ce,Ce)}}else if(R!==null&&ce!==0){const Ce=I.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ce.__webglTexture,ce)}$=-1},this.readRenderTargetPixels=function(R,K,ce,ie,ne,Pe,He,Ce=0){if(!(R&&R.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=I.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){Ue.bindFramebuffer(q.FRAMEBUFFER,$e);try{const Je=R.textures[Ce],lt=Je.format,ct=Je.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ce),!Rt.textureFormatReadable(lt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(ct)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ie&&ce>=0&&ce<=R.height-ne&&q.readPixels(K,ce,ie,ne,H.convert(lt),H.convert(ct),Pe)}finally{const Je=z!==null?I.get(z).__webglFramebuffer:null;Ue.bindFramebuffer(q.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,K,ce,ie,ne,Pe,He,Ce=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=I.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e)if(K>=0&&K<=R.width-ie&&ce>=0&&ce<=R.height-ne){Ue.bindFramebuffer(q.FRAMEBUFFER,$e);const Je=R.textures[Ce],lt=Je.format,ct=Je.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ce),!Rt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.bufferData(q.PIXEL_PACK_BUFFER,Pe.byteLength,q.STREAM_READ),q.readPixels(K,ce,ie,ne,H.convert(lt),H.convert(ct),0);const St=z!==null?I.get(z).__webglFramebuffer:null;Ue.bindFramebuffer(q.FRAMEBUFFER,St);const zt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await yC(q,zt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Pe),q.deleteBuffer(Ze),q.deleteSync(zt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ce=0){const ie=Math.pow(2,-ce),ne=Math.floor(R.image.width*ie),Pe=Math.floor(R.image.height*ie),He=K!==null?K.x:0,Ce=K!==null?K.y:0;T.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,ce,0,0,He,Ce,ne,Pe),Ue.unbindTexture()};const Mu=q.createFramebuffer(),qo=q.createFramebuffer();this.copyTextureToTexture=function(R,K,ce=null,ie=null,ne=0,Pe=0){let He,Ce,$e,Je,lt,ct,Ze,St,zt;const qt=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(ce!==null)He=ce.max.x-ce.min.x,Ce=ce.max.y-ce.min.y,$e=ce.isBox3?ce.max.z-ce.min.z:1,Je=ce.min.x,lt=ce.min.y,ct=ce.isBox3?ce.min.z:0;else{const Wt=Math.pow(2,-ne);He=Math.floor(qt.width*Wt),Ce=Math.floor(qt.height*Wt),R.isDataArrayTexture?$e=qt.depth:R.isData3DTexture?$e=Math.floor(qt.depth*Wt):$e=1,Je=0,lt=0,ct=0}ie!==null?(Ze=ie.x,St=ie.y,zt=ie.z):(Ze=0,St=0,zt=0);const Pt=H.convert(K.format),rn=H.convert(K.type);let ze;K.isData3DTexture?(T.setTexture3D(K,0),ze=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(T.setTexture2DArray(K,0),ze=q.TEXTURE_2D_ARRAY):(T.setTexture2D(K,0),ze=q.TEXTURE_2D),Ue.activeTexture(q.TEXTURE0),Ue.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),Ue.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Ue.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const _n=Ue.getParameter(q.UNPACK_ROW_LENGTH),gt=Ue.getParameter(q.UNPACK_IMAGE_HEIGHT),Bn=Ue.getParameter(q.UNPACK_SKIP_PIXELS),Vn=Ue.getParameter(q.UNPACK_SKIP_ROWS),vt=Ue.getParameter(q.UNPACK_SKIP_IMAGES);Ue.pixelStorei(q.UNPACK_ROW_LENGTH,qt.width),Ue.pixelStorei(q.UNPACK_IMAGE_HEIGHT,qt.height),Ue.pixelStorei(q.UNPACK_SKIP_PIXELS,Je),Ue.pixelStorei(q.UNPACK_SKIP_ROWS,lt),Ue.pixelStorei(q.UNPACK_SKIP_IMAGES,ct);const ir=R.isDataArrayTexture||R.isData3DTexture,Ct=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const Wt=I.get(R),vi=I.get(K),Dt=I.get(Wt.__renderTarget),xi=I.get(vi.__renderTarget);Ue.bindFramebuffer(q.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Ue.bindFramebuffer(q.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Fi=0;Fi<$e;Fi++)ir&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,I.get(R).__webglTexture,ne,ct+Fi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,I.get(K).__webglTexture,Pe,zt+Fi)),q.blitFramebuffer(Je,lt,He,Ce,Ze,St,He,Ce,q.DEPTH_BUFFER_BIT,q.NEAREST);Ue.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||R.isRenderTargetTexture||I.has(R)){const Wt=I.get(R),vi=I.get(K);Ue.bindFramebuffer(q.READ_FRAMEBUFFER,Mu),Ue.bindFramebuffer(q.DRAW_FRAMEBUFFER,qo);for(let Dt=0;Dt<$e;Dt++)ir?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Wt.__webglTexture,ne,ct+Dt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Wt.__webglTexture,ne),Ct?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,vi.__webglTexture,Pe,zt+Dt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,vi.__webglTexture,Pe),ne!==0?q.blitFramebuffer(Je,lt,He,Ce,Ze,St,He,Ce,q.COLOR_BUFFER_BIT,q.NEAREST):Ct?q.copyTexSubImage3D(ze,Pe,Ze,St,zt+Dt,Je,lt,He,Ce):q.copyTexSubImage2D(ze,Pe,Ze,St,Je,lt,He,Ce);Ue.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ct?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(ze,Pe,Ze,St,zt,He,Ce,$e,Pt,rn,qt.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(ze,Pe,Ze,St,zt,He,Ce,$e,Pt,qt.data):q.texSubImage3D(ze,Pe,Ze,St,zt,He,Ce,$e,Pt,rn,qt):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Pe,Ze,St,He,Ce,Pt,rn,qt.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Pe,Ze,St,qt.width,qt.height,Pt,qt.data):q.texSubImage2D(q.TEXTURE_2D,Pe,Ze,St,He,Ce,Pt,rn,qt);Ue.pixelStorei(q.UNPACK_ROW_LENGTH,_n),Ue.pixelStorei(q.UNPACK_IMAGE_HEIGHT,gt),Ue.pixelStorei(q.UNPACK_SKIP_PIXELS,Bn),Ue.pixelStorei(q.UNPACK_SKIP_ROWS,Vn),Ue.pixelStorei(q.UNPACK_SKIP_IMAGES,vt),Pe===0&&K.generateMipmaps&&q.generateMipmap(ze),Ue.unbindTexture()},this.initRenderTarget=function(R){I.get(R).__webglFramebuffer===void 0&&T.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),Ue.unbindTexture()},this.resetState=function(){J=0,se=0,z=null,Ue.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const eL=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,tL=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2  iMouse;
uniform bool  interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool  parallax;
uniform float parallaxStrength;
uniform vec2  parallaxOffset;

uniform vec3 lineGradient[8];
uniform int  lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 TEAL  = vec3(14.0,  165.0, 164.0) / 255.0;
const vec3 BLUE  = vec3(100.0, 245.0, 210.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;
  vec3 col = mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col     += mix(TEAL, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

/* Safe gradient lookup — no variable array indexing */
vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) return baseColor;
  if (lineGradientCount == 1) return lineGradient[0] * 0.8;

  float ct = clamp(t, 0.0, 0.9999);
  float s  = ct * float(lineGradientCount - 1);
  int   i  = int(floor(s));
  float f  = fract(s);

  vec3 c1 = lineGradient[0];
  vec3 c2 = lineGradient[1];
  if      (i == 1) { c1 = lineGradient[1]; c2 = lineGradient[2]; }
  else if (i == 2) { c1 = lineGradient[2]; c2 = lineGradient[3]; }
  else if (i == 3) { c1 = lineGradient[3]; c2 = lineGradient[4]; }
  else if (i == 4) { c1 = lineGradient[4]; c2 = lineGradient[5]; }
  else if (i == 5) { c1 = lineGradient[5]; c2 = lineGradient[6]; }
  else if (i >= 6) { c1 = lineGradient[6]; c2 = lineGradient[7]; }

  return mix(c1, c2, f) * 0.85;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float t   = iTime * animationSpeed;
  float amp = sin(offset + t * 0.2) * 0.3;
  float y   = sin(uv.x + offset + t * 0.1) * amp;

  if (shouldBend) {
    vec2  d   = screenUv - mouseUv;
    float infl = exp(-dot(d, d) * (bendRadius * 0.45));
    y += (mouseUv.y - screenUv.y) * infl * bendStrength * bendInfluence * 1.6;
  }

  float m = uv.y - y;
  float core = 0.0016 / (abs(m) + 0.0003);
  float glow = 0.005 / (abs(m) + 0.009);
  return core * 1.0 + glow * 0.25;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  uv.y *= -1.0;
  if (parallax) uv += parallaxOffset;

  vec3 b  = lineGradientCount > 0 ? vec3(0.0) : background_color(uv);
  vec3 col = vec3(0.0);

  vec2 mUv = vec2(0.0);
  if (interactive) {
    mUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mUv.y *= -1.0;
  }

  /* ---- BOTTOM ---- */
  if (enableBottom) {
    for (int i = 0; i < 30; ++i) {
      if (i >= bottomLineCount) break;
      float fi  = float(i);
      float t   = fi / max(float(bottomLineCount - 1), 1.0);
      vec3  lc  = getLineColor(t, b);
      float ang = bottomWavePosition.z * log(length(uv) + 1.0);
      vec2  ruv = uv * rotate(ang);
      col += lc * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi, uv, mUv, interactive
      ) * 0.22;
    }
  }

  /* ---- MIDDLE ---- */
  if (enableMiddle) {
    for (int i = 0; i < 30; ++i) {
      if (i >= middleLineCount) break;
      float fi  = float(i);
      float t   = fi / max(float(middleLineCount - 1), 1.0);
      vec3  lc  = getLineColor(t, b);
      float ang = middleWavePosition.z * log(length(uv) + 1.0);
      vec2  ruv = uv * rotate(ang);
      col += lc * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi, uv, mUv, interactive
      );
    }
  }

  /* ---- TOP ---- */
  if (enableTop) {
    for (int i = 0; i < 30; ++i) {
      if (i >= topLineCount) break;
      float fi  = float(i);
      float t   = fi / max(float(topLineCount - 1), 1.0);
      vec3  lc  = getLineColor(t, b);
      float ang = topWavePosition.z * log(length(uv) + 1.0);
      vec2  ruv = uv * rotate(ang);
      ruv.x    *= -1.0;
      col += lc * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi, uv, mUv, interactive
      ) * 0.12;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 c = vec4(0.0);
  mainImage(c, gl_FragCoord.xy);
  float alpha = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);
  gl_FragColor = vec4(c.rgb, alpha);
}
`,Zx=8;function nL(n){let e=n.trim().replace(/^#/,"");return e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),new ae(parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255)}function Qx({linesGradient:n,enabledWaves:e=["top","middle","bottom"],lineCount:t=[6],lineDistance:r=[5],topWavePosition:o,middleWavePosition:a,bottomWavePosition:c={x:2,y:-.7,rotate:-1},animationSpeed:d=1,interactive:h=!0,bendRadius:f=5,bendStrength:g=-.5,mouseDamping:v=.05,parallax:m=!0,parallaxStrength:_=.2,mixBlendMode:E="screen"}){const w=ve.useRef(null),y=ve.useRef(new Mt(-1e4,-1e4)),S=ve.useRef(new Mt(-1e4,-1e4)),b=ve.useRef(0),D=ve.useRef(0),P=ve.useRef(new Mt(0,0)),O=ve.useRef(new Mt(0,0));return ve.useEffect(()=>{const L=w.current;if(!L)return;const U=me=>{if(typeof t=="number")return t;const de=e.indexOf(me);return de>=0?t[de]??6:0},M=me=>{if(typeof r=="number")return r;const de=e.indexOf(me);return de>=0?r[de]??5:5},N=e.includes("top"),B=e.includes("middle"),F=e.includes("bottom");let W=!0;const J=new FC,se=new im(-1,1,1,-1,0,1);se.position.z=1;let z;try{z=new JD({antialias:!0,alpha:!0})}catch(me){console.warn("[FloatingLines] WebGL unavailable:",me);return}z.setPixelRatio(Math.min(window.devicePixelRatio,2));const $=z.domElement;$.style.position="absolute",$.style.top="0",$.style.left="0",$.style.width="100%",$.style.height="100%",$.style.display="block",L.appendChild($);const j={iTime:{value:0},iResolution:{value:new ae(1,1,1)},animationSpeed:{value:d},enableTop:{value:N},enableMiddle:{value:B},enableBottom:{value:F},topLineCount:{value:N?U("top"):0},middleLineCount:{value:B?U("middle"):0},bottomLineCount:{value:F?U("bottom"):0},topLineDistance:{value:N?M("top")*.01:.01},middleLineDistance:{value:B?M("middle")*.01:.01},bottomLineDistance:{value:F?M("bottom")*.01:.01},topWavePosition:{value:new ae((o==null?void 0:o.x)??10,(o==null?void 0:o.y)??.5,(o==null?void 0:o.rotate)??-.4)},middleWavePosition:{value:new ae((a==null?void 0:a.x)??5,(a==null?void 0:a.y)??0,(a==null?void 0:a.rotate)??.2)},bottomWavePosition:{value:new ae((c==null?void 0:c.x)??2,(c==null?void 0:c.y)??-.7,(c==null?void 0:c.rotate)??.4)},iMouse:{value:new Mt(-1e4,-1e4)},interactive:{value:h},bendRadius:{value:f},bendStrength:{value:g},bendInfluence:{value:0},parallax:{value:m},parallaxStrength:{value:_},parallaxOffset:{value:new Mt(0,0)},lineGradient:{value:Array.from({length:Zx},()=>new ae(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const me=n.slice(0,Zx);j.lineGradientCount.value=me.length,me.forEach((de,Ne)=>{const je=nL(de);j.lineGradient.value[Ne].set(je.x,je.y,je.z)})}const X=new Ii({uniforms:j,vertexShader:eL,fragmentShader:tL}),te=new tl(2,2);J.add(new er(te,X));const oe=new iR,V=()=>{if(!W)return;const me=L.clientWidth||window.innerWidth,de=L.clientHeight||window.innerHeight;z.setSize(me,de,!1),j.iResolution.value.set($.width,$.height,1)};V();const Q=typeof ResizeObserver<"u"?new ResizeObserver(V):null;Q&&Q.observe(L),window.addEventListener("resize",V);const Le=me=>{const de=$.getBoundingClientRect(),Ne=me.clientX-de.left,je=me.clientY-de.top,et=z.getPixelRatio();y.current.set(Ne*et,(de.height-je)*et),b.current=1,m&&P.current.set((Ne-de.width/2)/de.width*_,-((je-de.height/2)/de.height)*_)},Be=()=>{b.current=0};h&&(window.addEventListener("mousemove",Le),window.addEventListener("mouseleave",Be));let Ie=0;const le=()=>{W&&(j.iTime.value=oe.getElapsedTime(),h&&(S.current.lerp(y.current,v),j.iMouse.value.copy(S.current),D.current+=(b.current-D.current)*v,j.bendInfluence.value=D.current),m&&(O.current.lerp(P.current,v),j.parallaxOffset.value.copy(O.current)),z.render(J,se),Ie=requestAnimationFrame(le))};return le(),()=>{W=!1,cancelAnimationFrame(Ie),Q&&Q.disconnect(),window.removeEventListener("resize",V),h&&(window.removeEventListener("mousemove",Le),window.removeEventListener("mouseleave",Be)),te.dispose(),X.dispose(),z.dispose();try{z.forceContextLoss()}catch{}$.parentElement&&$.parentElement.removeChild($)}},[JSON.stringify(n),JSON.stringify(e),JSON.stringify(t),JSON.stringify(r),JSON.stringify(o),JSON.stringify(a),JSON.stringify(c),d,h,f,g,v,m,_]),C.jsx("div",{ref:w,className:"floating-lines-container",style:{mixBlendMode:E}})}function iL({theme:n="dark"}){const[e,t]=ve.useState({x:0,y:0}),r=c=>{const{clientX:d,clientY:h}=c,f=d/window.innerWidth-.5,g=h/window.innerHeight-.5;t({x:f,y:g}),document.querySelectorAll(".enterprise-outcome-card").forEach(m=>{const _=m.getBoundingClientRect(),E=d-_.left,w=h-_.top;m.style.setProperty("--mouse-x",`${E}px`),m.style.setProperty("--mouse-y",`${w}px`)})},o={initial:{filter:"blur(10px)",opacity:0,y:20},animate:{filter:"blur(0px)",opacity:1,y:0}},a=["WhatsApp","Gmail","Razorpay","Stripe","Google"];return C.jsxs("section",{id:"home",className:"relative min-h-screen bg-background text-foreground transition-colors flex flex-col justify-center items-center px-4 pt-24 pb-16",onMouseMove:r,style:{isolation:"isolate",background:n==="dark"?void 0:"radial-gradient(circle at top, rgba(56,178,172,0.08), transparent 45%), linear-gradient(180deg, #F7F8FA 0%, #EEF2F3 100%)"},children:[C.jsx("div",{style:{position:"absolute",inset:0,width:"100%",height:"120%",overflow:"visible",pointerEvents:"none",userSelect:"none",WebkitUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserDrag:"none",touchAction:"none",zIndex:0,opacity:.85,filter:n==="dark"?void 0:"drop-shadow(0 0 2px rgba(44,122,123,0.15)) drop-shadow(0 0 12px rgba(56,178,172,0.08))",maskImage:"radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 70%, transparent 100%)",WebkitMaskImage:"radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 70%, transparent 100%)"},children:n==="dark"?C.jsx(Qx,{linesGradient:["#0f766e","#14b8a6","#2dd4bf","#10b981","#042f2e"],enabledWaves:["top","middle","bottom"],lineCount:[14,18,22],lineDistance:[7,5,4],animationSpeed:.35,bendRadius:12,bendStrength:-.55,mouseDamping:.08,interactive:!0,parallax:!0,parallaxStrength:.18,mixBlendMode:"screen"}):C.jsx(Qx,{linesGradient:["#4FD1C5","#38B2AC","#319795","#2C7A7B","#285E61"],enabledWaves:["top","middle","bottom"],lineCount:[10,14,18],lineDistance:[8,6,5],animationSpeed:.28,bendRadius:10,bendStrength:-.45,mouseDamping:.08,interactive:!0,parallax:!0,parallaxStrength:.14,mixBlendMode:"normal"})}),C.jsx("div",{className:"hero-cinematic-spotlight",style:{opacity:n==="dark"?.4:.25}}),C.jsx("div",{className:"cinematic-vignette",style:{opacity:.4}}),C.jsx("div",{className:"cinematic-light-beam",style:{top:"-10%",left:"15%",opacity:.08}}),C.jsx("div",{className:"vertical-fluid-glass-refraction",style:{transform:`translate3d(${e.x*-12}px, 0, 0)`}}),C.jsxs("div",{className:"relative z-[2] flex flex-col items-center text-center max-w-4xl px-8 py-10 rounded-[2rem]",style:{background:n==="dark"?"radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)":"radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)"},children:[C.jsxs(ni.div,{initial:o.initial,animate:o.animate,transition:{duration:.6,delay:.4,ease:"easeOut"},className:"liquid-glass rounded-full flex items-center gap-2 px-1.5 py-1.5 mb-6",children:[C.jsx("span",{className:"bg-foreground text-background px-3 py-1 text-xs font-bold rounded-full transition-colors duration-500",style:{letterSpacing:"0.04em"},children:"NEW"}),C.jsx("span",{className:"text-sm text-foreground/85 pr-3 font-body transition-colors duration-500 font-medium",children:"AI Autopilot — Your Operations on Intelligent Cruise Control"})]}),C.jsxs("div",{className:"mb-4",style:{letterSpacing:"-4px"},children:[C.jsx(Bb,{text:"Your AI-Powered Business Autopilot",className:"text-5xl md:text-6xl lg:text-7xl font-heading text-foreground leading-[0.85] mb-2 transition-colors duration-500"}),C.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-heading leading-tight mt-6",style:{color:"rgba(99,200,180,0.9)",letterSpacing:"-1.5px"},children:"Centralized CRM & Intelligent Workflows for High-Growth Enterprises"})]}),C.jsx(ni.p,{initial:o.initial,animate:o.animate,transition:{duration:.6,delay:.8,ease:"easeOut"},className:"text-sm md:text-base text-foreground/65 max-w-2xl font-body font-light leading-relaxed mb-8 transition-colors duration-500",children:"One unified AI operating system replacing 12 disconnected platforms to capture leads, orchestrate WhatsApp engagement, and automate your entire customer journey."}),C.jsxs(ni.div,{initial:o.initial,animate:o.animate,transition:{duration:.6,delay:1,ease:"easeOut"},className:"flex flex-wrap items-center gap-5 justify-center mb-6",children:[C.jsxs("a",{href:"https://calendly.com/sanyam-chhoriya/automate-flow-ai-demo?month=2026-05",target:"_blank",rel:"noopener noreferrer",className:"liquid-glass-strong shimmer-hover rounded-full px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2 transition-colors duration-500",style:{textDecoration:"none"},children:["Start Free Trial",C.jsx(za,{className:"h-4 w-4 text-slate-900 dark:text-white transition-colors duration-500"})]}),C.jsxs("a",{href:"https://calendly.com/sanyam-chhoriya/automate-flow-ai-demo?month=2026-05",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground transition-colors duration-500 font-body liquid-glass px-5 py-3 rounded-full",children:[C.jsx(I1,{className:"h-3.5 w-3.5 fill-current text-foreground transition-colors duration-500"}),"Book Live Demo"]})]}),C.jsx(ni.div,{initial:o.initial,animate:o.animate,transition:{duration:.6,delay:1.1,ease:"easeOut"},className:"flex flex-wrap items-center gap-2.5 justify-center mb-8 max-w-4xl",children:["No Credit Card Required","7-Day Free Trial","AI-Powered Workflows","WhatsApp Integrated API"].map(c=>C.jsxs("span",{className:"liquid-glass rounded-full px-3.5 py-1.5 text-[11px] text-foreground/60 font-body transition-colors duration-500 font-medium",children:[C.jsx("span",{style:{color:"rgba(99,200,180,0.9)"},children:"✦"})," ",c]},c))}),C.jsxs(ni.div,{initial:o.initial,animate:o.animate,transition:{duration:.6,delay:1.3,ease:"easeOut"},className:"flex flex-wrap items-stretch gap-6 justify-center mt-5 mb-8 max-w-6xl w-full",children:[C.jsxs("div",{className:"enterprise-outcome-card",children:[C.jsx("div",{className:"p-2 rounded-lg bg-[rgba(99,200,180,0.1)] border border-[rgba(99,200,180,0.15)] mb-6 z-10 transition-colors",children:C.jsx(k1,{className:"h-5 w-5 text-[#63ffd7]"})}),C.jsx("div",{className:"font-heading text-foreground text-2xl md:text-3xl tracking-tight leading-snug mb-3 z-10 transition-colors duration-500 text-left",children:"Save ₹1Lakh+/Month"})]}),C.jsxs("div",{className:"enterprise-outcome-card",children:[C.jsx("div",{className:"p-2 rounded-lg bg-[rgba(99,200,180,0.1)] border border-[rgba(99,200,180,0.15)] mb-6 z-10 transition-colors",children:C.jsx(_1,{className:"h-5 w-5 text-[#63ffd7]"})}),C.jsx("div",{className:"font-heading text-foreground text-2xl md:text-3xl tracking-tight leading-snug mb-3 z-10 transition-colors duration-500 text-left",children:"Serving Businesses & Government Teams"})]}),C.jsxs("div",{className:"enterprise-outcome-card",children:[C.jsx("div",{className:"p-2 rounded-lg bg-[rgba(99,200,180,0.1)] border border-[rgba(99,200,180,0.15)] mb-6 z-10 transition-colors",children:C.jsx(T1,{className:"h-5 w-5 text-[#63ffd7]"})}),C.jsx("div",{className:"font-heading text-foreground text-2xl md:text-3xl tracking-tight leading-snug mb-3 z-10 transition-colors duration-500 text-left",children:"Save Time. Do More. Generate More Revenue."})]})]}),C.jsxs(ni.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:1.4,ease:"easeOut"},className:"flex flex-col items-center gap-3",children:[C.jsx("div",{className:"liquid-glass rounded-full px-3.5 py-1 text-[11px] font-semibold text-foreground/55 uppercase transition-colors",style:{letterSpacing:"0.06em"},children:"INTEGRATED SYSTEM CAPABILITIES"}),C.jsx("div",{className:"flex flex-wrap items-center gap-8 md:gap-12 justify-center",children:a.map(c=>C.jsx("span",{className:"font-heading text-xl md:text-2xl text-foreground/35 transition-colors duration-500",style:{letterSpacing:"-1px"},children:c},c))})]})]})]})}function Oo({children:n,className:e="",edgeSensitivity:t=55,glowRadius:r=30,glowIntensity:o=.7,coneSpread:a=18,animated:c=!1,colors:d=["#00ffd0","#00c8ff","#7df9ff"],style:h}){const f=ve.useRef(null),[g,v]=ve.useState({x:0,y:0}),m=S=>{if(!f.current)return;const b=f.current.getBoundingClientRect(),D=S.clientX-b.left,P=S.clientY-b.top;v({x:D,y:P})},_=d[0]||"#00ffd0",E=d[1]||"#00c8ff",w=d[2]||"#7df9ff",y=`radial-gradient(
    ${r}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    ${_} 0%,
    ${E} 50%,
    ${w} 80%,
    transparent 100%
  )`;return C.jsxs("div",{ref:f,onMouseMove:m,className:`border-glow-wrapper ${e}`,style:{...h,"--mouse-x":`${g.x}px`,"--mouse-y":`${g.y}px`,"--glow-radius":`${r}px`,"--glow-intensity":o},children:[C.jsx("div",{className:"border-glow-element",style:{background:y,opacity:void 0}}),C.jsx("div",{className:"relative z-10 w-full h-full",children:n})]})}function rL(){const n=[{num:"01",title:"Missed Leads & Slow Responses",body:"Without automated routing, reply times lag and high-value opportunities slip straight to your competition.",isFeatured:!0},{num:"02",title:"Scattered Conversations",body:"WhatsApp, email, and social DMs are spread out, forcing teams to lose hours switching platforms.",isFeatured:!1},{num:"03",title:"Manual Operational Work",body:"Relying on staff to manually nurture prospects leads to broken workflows and cold follow-ups.",isFeatured:!0},{num:"04",title:"Zero Conversion Tracking",body:"Operating without centralized attribution makes managing your sales pipeline conversion sheer guesswork.",isFeatured:!1},{num:"05",title:"Disconnected Software Silos",body:"Your CRM, call scheduler, email campaigns, and billing systems refuse to communicate with one another.",isFeatured:!0},{num:"06",title:"Restricted Automation",body:"Your growth remains bottlenecked by human head count, causing higher overhead and mistakes.",isFeatured:!1},{num:"07",title:"Low Pipeline Conversion",body:"Valuable prospects drop off in the massive friction gap between initial booking and closing.",isFeatured:!0},{num:"08",title:"Wasted Rep Productivity",body:"High-salary sales reps waste hours draft-building invoices instead of closing enterprise deals.",isFeatured:!1}];return C.jsxs("section",{className:"relative py-32 px-4 md:px-8 grid-pattern overflow-hidden transition-colors duration-500",style:{background:"var(--section-bg-problem)"},children:[C.jsx("div",{className:"problem-shadow-glow"}),C.jsx("div",{className:"problem-underglow"}),C.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[C.jsx("p",{className:"font-body font-semibold text-xs uppercase mb-6",style:{color:"rgba(99,200,180,0.7)",letterSpacing:"0.14em"},children:"// The Problem"}),C.jsxs("h2",{className:"font-heading text-5xl md:text-7xl lg:text-8xl max-w-4xl mb-8",style:{letterSpacing:"-3px",lineHeight:"0.9"},children:[C.jsx("span",{className:"text-foreground transition-colors duration-500",children:"Growing Businesses"}),C.jsx("br",{}),C.jsx("span",{className:"text-foreground/25 transition-colors duration-500",children:"Shouldn’t Run"}),C.jsx("br",{}),C.jsx("span",{className:"text-foreground transition-colors duration-500",children:"on Chaos."})]}),C.jsx("p",{className:"text-base md:text-lg text-foreground/75 max-w-3xl font-body font-light leading-relaxed mb-16",children:"Disconnected tools, manual follow-ups, and scattered inbox channels silently degrade customer trust and hold back scalable revenue operations."}),C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-xs md:text-sm text-foreground/50 leading-relaxed font-body font-light border-b border-border/10 pb-16",children:[C.jsx("div",{children:"Most businesses operate across fragmented silos—CRMs, spreadsheets, WhatsApp messages, email campaign platforms, calendar schedulers, and payment trackers. Teams waste crucial operational hours context-switching."}),C.jsx("div",{children:"Without cohesive automation, businesses suffer from delayed reply times, lost prospect visibility, inefficient outreach cycles, and expensive drop-off rates across key marketing funnels."}),C.jsx("div",{children:"Automate Flow AI centralizes these core functions into one elegant, unified operating platform—infusing intelligent automations, conversational routing, and deep analytics straight into your daily workflow."})]}),C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24",children:n.map((e,t)=>{const r=t%2===1;return C.jsx("div",{className:`transition-all duration-500 ${r?"lg:mt-6":"lg:mt-0"}`,children:C.jsx(Oo,{edgeSensitivity:55,glowRadius:30,glowIntensity:e.isFeatured?.85:.6,coneSpread:18,animated:!1,colors:["#00ffd0","#00c8ff","#7df9ff"],className:"rounded-[1.5rem] h-full",children:C.jsx("div",{className:`fluid-problem-card p-8 rounded-[1.5rem] h-full min-h-[280px] flex flex-col justify-between ${e.isFeatured?"focus-card":""}`,children:C.jsxs("div",{children:[C.jsx("div",{className:"problem-serif-number mb-6",children:e.num}),C.jsx("h3",{className:"font-body font-semibold text-sm text-foreground mb-3 transition-colors duration-500",children:e.title}),C.jsx("p",{className:"font-body font-light text-xs text-foreground/60 leading-relaxed transition-colors duration-500",children:e.body})]})})})},t)})}),C.jsx("div",{className:"text-center mt-28",children:C.jsx("a",{href:"#features",className:"cta-shimmer-link",children:"There is a better way →"})})]})]})}function sL(){const n=[{Icon:v1,tags:["AI Chat Agents","Auto Follow-ups","24/7 Qualifiers"],title:"AI Autopilot",description:"AI agents handle customer queries, qualify prospects, and coordinate bookings 24/7."},{Icon:P1,tags:["WhatsApp Business","Multi-channel","Shared Inbox"],title:"Unified Inbox",description:"Centralize WhatsApp, email, and social DMs in one unified interactive inbox."},{Icon:A1,tags:["Smart Invoicing","Auto Reminders","Recovery Flows"],title:"Revenue Recovery",description:"Automatic invoice generation, overdue reminders, and payment recovery systems."}];return C.jsxs("section",{className:"relative py-24 px-4 md:px-8 bg-background text-foreground transition-colors duration-500 overflow-hidden",children:[C.jsx("div",{className:"capabilities-bloom-1"}),C.jsx("div",{className:"capabilities-bloom-2"}),C.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[C.jsx("p",{className:"font-body font-semibold text-xs uppercase mb-6",style:{color:"rgba(99,200,180,0.7)",letterSpacing:"0.14em"},children:"// Capabilities"}),C.jsxs("h2",{className:"font-heading text-5xl md:text-7xl lg:text-8xl max-w-3xl mb-16",style:{letterSpacing:"-3px",lineHeight:"0.9"},children:[C.jsx("span",{className:"text-foreground transition-colors duration-500",children:"Automation"}),C.jsx("br",{}),C.jsx("span",{className:"text-foreground/30 transition-colors duration-500",children:"evolved."})]}),C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 mt-16",children:n.map((e,t)=>{const r=e.Icon;return C.jsx(Oo,{edgeSensitivity:55,glowRadius:30,glowIntensity:.7,coneSpread:18,animated:!1,colors:["#00ffd0","#00c8ff","#7df9ff"],className:"rounded-[1.25rem] min-h-[360px] flex",children:C.jsxs("div",{className:"w-full p-6 rounded-[1.25rem] min-h-[360px] flex flex-col transition-all duration-500 bg-[var(--card)] backdrop-blur-[20px]",style:{border:"1px solid var(--border)"},children:[C.jsxs("div",{className:"flex items-start justify-between gap-4 mb-auto",children:[C.jsx("div",{className:"liquid-glass rounded-xl w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-500",children:C.jsx(r,{className:"h-6 w-6 text-foreground transition-colors duration-500"})}),C.jsx("div",{className:"flex flex-wrap justify-end gap-1.5 max-w-[70%]",children:e.tags.map((o,a)=>C.jsx("span",{className:"liquid-glass rounded-full px-2.5 py-1 text-[10px] text-foreground/90 font-body whitespace-nowrap transition-colors duration-500",children:o},a))})]}),C.jsxs("div",{className:"mt-6",children:[C.jsx("h3",{className:"font-heading text-4xl text-foreground leading-none mb-3 transition-colors duration-500",style:{letterSpacing:"-1px"},children:e.title}),C.jsx("p",{className:"font-body font-light text-sm text-foreground/65 leading-snug max-w-[32ch] transition-colors duration-500",children:e.description})]})]})},t)})})]})]})}const Qf=[{id:"crm",icon:"◈",label:"CRM & Contacts",description:"Centralize client information, deal history, and pipeline milestones.",features:["Unlimited contact profiles","Advanced segmentation tags","Unified activity timeline","Native iOS & Android app"]},{id:"communication",icon:"◉",label:"Communication",description:"Engage clients across WhatsApp, SMS, email, and social DMs.",features:["Official WhatsApp API","Unified Shared Inbox","Bulk email & SMS campaigns","Missed-call auto text-back"]},{id:"website",icon:"◇",label:"Website & Funnels",description:"Launch high-converting landing pages, funnels, and client portals.",features:["Drag-and-drop page builder","High-converting sales funnels","Secure surveys & lead forms","Premium hosting included"]},{id:"automation",icon:"⚡",label:"Automation",description:"Orchestrate custom engagement workflows and follow-up rules.",features:["Visual trigger-flow builder","Multi-channel sequence drip","Auto lead assignment rules","Pipeline status auto-updates"]},{id:"appointments",icon:"◻",label:"Appointments",description:"Synchronize client bookings, meeting links, and buffers.",features:["Unlimited custom calendars","Google & Outlook 2-way sync","SMS & WhatsApp reminders","Paid calendar slot bookings"]},{id:"pipeline",icon:"▦",label:"Pipeline & Sales",description:"Track pipeline deal velocity, opportunity health, and rep quotas.",features:["Unlimited visual pipelines","Drag-and-drop opportunity cards","Custom lead scoring matrix","Automated deal progression"]},{id:"payments",icon:"₹",label:"Payments",description:"Invoicing, subscription billing, and automated payment recoveries.",features:["Automated invoices & quotes","Stripe & Razorpay portals","Recurring subscription layers","Smart payment recovery loops"]},{id:"courses",icon:"◎",label:"Courses",description:"Host learning programs, community channels, and gated products.",features:["Gated digital course portal","Client membership profiles","Interactive group feeds","Secure file distribution"]},{id:"reputation",icon:"★",label:"Reputation",description:"Generate Google Reviews automatically to boost map rankings.",features:["Auto Google review triggers","Review collection widgets","Performance feedback metrics","Central review tracking"]},{id:"ai",icon:"✦",label:"AI Features",description:"Infuse conversational AI agents to book meetings and resolve queries.",features:["24/7 AI chat answering","Interactive booking bots","Smart lead scoring logic","Autonomous client nurturing"]},{id:"analytics",icon:"◆",label:"Analytics",description:"Track campaign ROI, pipeline conversions, and team efficiency.",features:["Interactive reporting boards","Marketing ROI attribution","Deal conversion reports","Live team metrics feed"]},{id:"integrations",icon:"⊕",label:"Integrations",description:"Connect payment nodes, CRM APIs, and marketing networks.",features:["Stripe, Razorpay, Zapier","Meta & Google pixel tools","Webhooks & developer APIs","Global infrastructure nodes"]}];function oL({theme:n="dark"}){const[e,t]=ve.useState(Qf[0].id),[r,o]=ve.useState(null),a=ve.useRef(null),c=ve.useRef(null),d=f=>{o(f),a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{t(f)},120)},h=()=>{o(null),a.current&&clearTimeout(a.current)};return ve.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),C.jsxs("section",{id:"features",ref:c,className:"relative py-24 px-4 md:px-8 grid-pattern overflow-hidden transition-colors duration-500",style:{background:n==="dark"?"var(--section-bg-features)":"radial-gradient(circle at top, rgba(56,178,172,0.08), transparent 45%), linear-gradient(180deg, #F7F8FA 0%, #EEF2F3 100%)"},children:[C.jsx("div",{className:"features-holo-backdrop",style:{opacity:n==="dark"?1:.4}}),C.jsx("div",{className:"features-holo-scanner",style:{opacity:n==="dark"?.45:.2}}),C.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[C.jsx("p",{className:"font-body font-semibold text-xs uppercase mb-6",style:{color:n==="dark"?"rgba(99,200,180,0.7)":"rgba(44,122,123,0.9)",letterSpacing:"0.14em"},children:"// Everything You Need"}),C.jsxs("h2",{className:"font-heading text-5xl md:text-7xl max-w-3xl mb-16",style:{letterSpacing:"-3px",lineHeight:"0.9"},children:[C.jsx("span",{className:"text-foreground transition-colors duration-500",children:"12 tools."}),C.jsx("br",{}),C.jsx("span",{className:"text-foreground/25 transition-colors duration-500",children:"One platform."})]}),C.jsx(Oo,{edgeSensitivity:55,glowRadius:30,glowIntensity:.7,coneSpread:18,animated:!1,colors:["#00ffd0","#00c8ff","#7df9ff"],className:"hidden lg:flex rounded-[2.5rem]",children:C.jsx("div",{className:"flex flex-row h-[620px] w-full border border-border/80 rounded-[2.5rem] overflow-hidden bg-[var(--card)] backdrop-blur-[20px] shadow-2xl relative",children:Qf.map((f,g)=>{const v=e===f.id;return C.jsxs(ni.div,{onMouseEnter:()=>d(f.id),onMouseLeave:h,className:"relative h-full flex flex-col justify-between overflow-hidden cursor-pointer",style:{borderRight:"1px solid rgba(255, 255, 255, 0.05)"},animate:{width:v?"580px":"65px",backgroundColor:v?n==="dark"?"rgba(99, 200, 180, 0.03)":"rgba(56, 178, 172, 0.03)":"transparent"},transition:{type:"spring",stiffness:220,damping:28},children:[C.jsx(zc,{children:!v&&C.jsxs(ni.div,{className:"absolute inset-0 flex flex-col items-center py-8 z-10",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[C.jsx("span",{className:"font-heading text-2xl text-foreground/30 mb-8 select-none",children:String(g+1).padStart(2,"0")}),C.jsx("div",{className:"font-body text-xs tracking-[0.15em] font-semibold text-foreground/45 uppercase whitespace-nowrap",style:{writingMode:"vertical-rl",transform:"rotate(180deg)"},children:f.label}),C.jsx("span",{className:"text-foreground/30 text-lg mt-auto select-none",children:f.icon})]})}),C.jsx(zc,{children:v&&C.jsxs(ni.div,{className:"w-full h-full flex flex-col p-8 select-none",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3,delay:.1},children:[C.jsx("div",{className:"flex justify-between items-start mb-6",children:C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsx("div",{className:"text-4xl text-[rgba(99,200,180,0.95)] dark:text-foreground",children:f.icon}),C.jsxs("div",{children:[C.jsxs("span",{className:"font-heading text-xl text-foreground/35 select-none block leading-none mb-1",children:["TOOL ",String(g+1).padStart(2,"0")]}),C.jsx("h3",{className:"font-heading text-3xl md:text-4xl text-foreground tracking-tight leading-none",children:f.label})]})]})}),C.jsx("p",{className:"font-body text-xs text-foreground/60 leading-relaxed mb-6",children:f.description}),C.jsx(Oo,{edgeSensitivity:55,glowRadius:30,glowIntensity:.7,coneSpread:18,animated:!1,colors:["#00ffd0","#00c8ff","#7df9ff"],className:"flex-1 rounded-2xl",children:C.jsx("div",{className:"p-6 rounded-2xl flex flex-col justify-center h-full bg-[var(--card)] backdrop-blur-[20px]",style:{border:"1px solid var(--border)"},children:C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:f.features.map((m,_)=>C.jsxs("div",{className:"water-glass p-3 rounded-xl flex items-center gap-3 transition-all duration-300 hover:translate-y-[-1px]",style:{background:n==="dark"?"rgba(255, 255, 255, 0.02)":"rgba(0, 0, 0, 0.02)",border:`1px solid ${n==="dark"?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)"}`,boxShadow:n==="dark"?"none":"0 2px 6px rgba(44,122,123,0.03)"},children:[C.jsx(Jf,{className:"h-3.5 w-3.5 flex-shrink-0",style:{color:n==="dark"?"rgba(99,200,180,0.9)":"rgba(44,122,123,0.9)"}}),C.jsx("span",{className:"font-body text-[11px] text-foreground/80 leading-normal",children:m})]},_))})})})]})})]},f.id)})})}),C.jsx("div",{className:"lg:hidden space-y-3",children:Qf.map((f,g)=>{const v=e===f.id;return C.jsxs("div",{className:"border border-border/80 rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5",children:[C.jsxs("button",{onClick:()=>t(v?"":f.id),className:"w-full flex items-center justify-between p-5 text-left",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("span",{className:"text-xl text-[rgba(99,200,180,0.9)]",children:f.icon}),C.jsxs("span",{className:"font-body text-xs font-semibold",children:[String(g+1).padStart(2,"0"),". ",f.label]})]}),C.jsx("span",{className:"text-xs text-foreground/40",children:v?"−":"+"})]}),C.jsx(zc,{children:v&&C.jsxs(ni.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"px-5 pb-5 border-t border-border/40",children:[C.jsx("p",{className:"font-body text-xs text-foreground/60 leading-relaxed py-3",children:f.description}),C.jsx("div",{className:"space-y-2 mt-2",children:f.features.map((m,_)=>C.jsxs("div",{className:"p-3 rounded-xl flex items-center gap-3 bg-black/5 dark:bg-white/5 border border-border/20",children:[C.jsx(Jf,{className:"h-3.5 w-3.5 flex-shrink-0",style:{color:"rgba(99,200,180,0.9)"}}),C.jsx("span",{className:"font-body text-[11px] text-foreground/80",children:m})]},_))})]})})]},f.id)})})]})]})}function gp({children:n,className:e="",variant:t="normal",spotlightColor:r="rgba(99, 200, 180, 0.15)",interactive:o=!0,style:a}){const c=ve.useRef(null),d=f=>{if(!o||!c.current)return;const g=c.current.getBoundingClientRect(),v=f.clientX-g.left,m=f.clientY-g.top;c.current.style.setProperty("--mouse-x",`${v}px`),c.current.style.setProperty("--mouse-y",`${m}px`),c.current.style.setProperty("--spotlight-color",r)},h=t==="strong"?"fluid-glass-strong":t==="water"?"fluid-glass-water":"fluid-glass-normal";return C.jsxs("div",{ref:c,onMouseMove:d,className:`fluid-glass-panel ${h} ${e}`,style:a,children:[C.jsx("div",{className:"fluid-glass-glare"}),C.jsx("div",{className:"relative z-10 w-full h-full",children:n})]})}function aL(){const n=[{quote:"We reduced no-shows by 60% in the first month with automated appointment reminders.",name:"Ravi K.",role:"Clinic Owner Pune"},{quote:"Our payment recovery rate went from 20% to 78%. AF AI pays for itself 10× over.",name:"Priya S.",role:"E-commerce Founder"},{quote:"Managing 40 client WhatsApp accounts from one inbox changed everything for our team.",name:"Anil M.",role:"Digital Agency Mumbai"},{quote:"The AI chat agent handles 80% of inquiries before I even see them. Insane leverage.",name:"Sneha D.",role:"Coaching Business"},{quote:"Lead scoring and pipeline automation turned our sales team into a machine.",name:"Kiran T.",role:"Real Estate Bangalore"},{quote:"5 clinics, one dashboard. We finally have visibility across the entire business.",name:"Meera P.",role:"Healthcare Chain"}],e=[{kicker:"ROI Management",number:"4× ROI",description:"Average return across 500+ businesses using AF AI automation."},{kicker:"Customer Tracking",number:"92%",description:"Lead follow-up rate when using AI-powered automated sequences."},{kicker:"Advanced Reporting",number:"3 min",description:"Time to your full business health report — live, always up to date."}];return C.jsxs("section",{className:"relative py-24 px-4 md:px-8 overflow-hidden transition-colors duration-500",style:{background:"var(--section-bg-social)"},children:[C.jsx("div",{className:"social-proof-diffuser"}),C.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[C.jsx("p",{className:"font-body font-semibold text-xs uppercase mb-6",style:{color:"rgba(99,200,180,0.7)",letterSpacing:"0.14em"},children:"// Social Proof"}),C.jsxs("h2",{className:"font-heading text-5xl md:text-7xl max-w-3xl mb-16",style:{letterSpacing:"-3px",lineHeight:"0.9"},children:[C.jsx("span",{className:"text-foreground transition-colors duration-500",children:"Smart solutions."}),C.jsx("br",{}),C.jsx("span",{className:"text-foreground/25 transition-colors duration-500",children:"Real results."})]}),C.jsxs("div",{className:"relative overflow-hidden mb-20",children:[C.jsx("div",{className:"marquee-fade-left"}),C.jsx("div",{className:"marquee-fade-right"}),C.jsx("div",{className:"flex gap-4 animate-scroll",children:[...n,...n].map((t,r)=>C.jsxs(gp,{variant:"water",className:"p-6 rounded-[1.25rem] w-[320px] flex-shrink-0 transition-all duration-500",children:[C.jsxs("p",{className:"font-body font-light text-sm text-foreground/75 leading-relaxed mb-4 transition-colors duration-500",children:['"',t.quote,'"']}),C.jsxs("div",{children:[C.jsx("p",{className:"font-body font-semibold text-sm text-foreground transition-colors duration-500",children:t.name}),C.jsx("p",{className:"font-body text-xs text-foreground/45 transition-colors duration-500",children:t.role})]})]},r))})]}),C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto",children:e.map((t,r)=>C.jsxs(gp,{variant:"water",className:"p-8 rounded-[1.25rem] transition-all duration-500",children:[C.jsx("p",{className:"font-body font-semibold text-[10px] uppercase mb-3",style:{color:"rgba(99,200,180,0.6)",letterSpacing:"0.12em"},children:t.kicker}),C.jsx("div",{className:"font-heading text-5xl text-foreground mb-3 transition-colors duration-500",style:{letterSpacing:"-2px",lineHeight:"1"},children:t.number}),C.jsx("p",{className:"font-body font-light text-sm text-foreground/50 leading-snug transition-colors duration-500",children:t.description})]},r))})]}),C.jsx("style",{jsx:!0,children:`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 28s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `})]})}function lL({theme:n="dark"}){const e=[{id:"starter",name:"Starter",price:"$99",description:"For startups and growing businesses beginning their automation journey.",features:["Centralized CRM inbox","Official WhatsApp integration","Smart email campaign loops","Visual drag-and-drop funnel builder","Unified calendar slot scheduler","Automated pipeline deal updates","Standard customer support desk"],featured:!1},{id:"pro",name:"Pro",price:"$199",description:"For scaling businesses that need advanced automation and intelligent workflows.",features:["Everything in Starter plan","Advanced AI conversational bots","Multi-channel sequence campaigns","Autonomous lead qualifiers","Overdue payment recovery workflows","Custom developer integrations","Priority onboarding sessions"],featured:!0},{id:"enterprise",name:"Enterprise",price:"$299",description:"For advanced operations, agencies, and enterprise-level growth systems.",features:["Everything in Pro plan","Unlimited active automation agents","White-label portal domains","Advanced webhooks & REST API","Custom business intelligence suite","24/7 dedicated success manager","Strategic systems consulting"],featured:!1}];return C.jsxs("section",{id:"pricing",className:"relative py-24 px-4 md:px-8 overflow-hidden transition-colors duration-500",style:{background:"var(--section-bg-pricing)"},children:[C.jsx("div",{className:"pricing-showcase-light"}),C.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[C.jsx("p",{className:"font-body font-semibold text-xs uppercase text-center mb-6",style:{color:"rgba(99,200,180,0.7)",letterSpacing:"0.14em"},children:"// Choose a Plan"}),C.jsxs("h2",{className:"font-heading text-5xl md:text-7xl text-center max-w-2xl mx-auto mb-6",style:{letterSpacing:"-3px",lineHeight:"0.9"},children:[C.jsx("span",{className:"text-foreground transition-colors duration-500",children:"Simple Pricing."}),C.jsx("br",{}),C.jsx("span",{className:"text-foreground/30 transition-colors duration-500",children:"Enterprise Automation."})]}),C.jsx("p",{className:"font-body font-light text-base text-foreground/45 text-center mb-16 transition-colors duration-500",children:"No credit card required · Cancel anytime · Setup in 15 minutes · 7-Day Free Trial"}),C.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto",children:e.map(t=>C.jsxs("div",{className:"relative flex flex-col h-full transition-all duration-500",children:[t.featured&&C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"pricing-growth-underglow"}),C.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-slate-900 z-20",style:{background:"rgba(99,200,180,0.9)"},children:"Most Popular"})]}),C.jsx(Oo,{edgeSensitivity:55,glowRadius:30,glowIntensity:.7,coneSpread:18,animated:!1,colors:["#00ffd0","#00c8ff","#7df9ff"],className:"flex-1 rounded-[1.75rem] flex flex-col h-full relative",children:C.jsxs("div",{className:"flex-1 p-8 rounded-[1.75rem] flex flex-col h-full transition-all duration-500 relative bg-[var(--card)] backdrop-blur-[20px]",style:{border:t.featured?"1px solid rgba(99,200,180,0.35)":"1px solid var(--border)",boxShadow:t.featured?n==="dark"?"0 20px 45px rgba(99,200,180,0.1)":"0 20px 45px rgba(44,122,123,0.08)":"none"},children:[C.jsx("p",{className:"font-body font-semibold text-xs uppercase mb-4 transition-colors duration-500",style:{color:t.featured?"rgba(99,200,180,0.9)":"var(--text-heading-muted)",letterSpacing:"0.08em"},children:t.name}),C.jsxs("div",{className:"flex items-end gap-2 mb-2",children:[C.jsx("span",{className:"font-heading text-5xl text-foreground transition-colors duration-500",style:{letterSpacing:"-2px"},children:t.price}),C.jsx("span",{className:"font-body text-sm text-foreground/40 pb-2 transition-colors duration-500",children:"/mo"})]}),C.jsx("p",{className:"font-body font-light text-xs text-foreground/50 mb-6 min-h-[32px] transition-colors duration-500",children:t.description}),C.jsxs("a",{href:"https://calendly.com/sanyam-chhoriya/automate-flow-ai-demo?month=2026-05",target:"_blank",rel:"noopener noreferrer",className:`w-full rounded-full px-5 py-3 text-sm font-semibold flex items-center justify-center gap-2 mb-8 transition-all duration-500 ${t.featured?"bg-[rgba(99,200,180,0.18)] border border-[rgba(99,200,180,0.35)] text-slate-900 dark:text-white shimmer-hover":"liquid-glass text-slate-900 dark:text-white hover:bg-white/5"}`,style:{textDecoration:"none"},children:["Start Free Trial",C.jsx(za,{className:"h-4 w-4 text-slate-900 dark:text-white transition-colors duration-500"})]}),C.jsx("ul",{className:"space-y-3.5 mt-auto",children:t.features.map((r,o)=>C.jsxs("li",{className:"flex items-start gap-2.5",children:[C.jsx(Jf,{className:"h-4 w-4 flex-shrink-0 mt-0.5",style:{color:"rgba(99,200,180,0.9)"}}),C.jsx("span",{className:"font-body text-[13px] text-foreground/70 transition-colors duration-500 leading-normal",children:r})]},o))})]})})]},t.id))})]})]})}const cL=[{question:"How do your conversational AI agents work?",answer:"Our AI agents analyze inbound client queries to qualify prospects, trigger workflows, and coordinate calendar bookings autonomously 24/7."},{question:"Is the official WhatsApp Business API included?",answer:"Yes. We provision official WhatsApp Business API channels to support high-volume automated campaigns and shared templates."},{question:"Can I manage complex deal pipelines inside the CRM?",answer:"Absolutely. Centralize contact tags, custom fields, conversation histories, and visual deal pipelines inside our unified CRM."},{question:"What professional onboarding assistance is provided?",answer:"Every plan includes hands-on setup support, personalized onboarding runs, and strategic sequence configuration assistance."},{question:"Which third-party services connect to the platform?",answer:"Connect Stripe, Razorpay, Gmail, Google Calendar, Meta Pixel, and 1,000+ custom applications natively or via secure webhooks."},{question:"How are automated invoices and payments processed?",answer:"Generate professional bills, direct payment links, recurring subscriptions, and outstanding payment recovery workflows automatically."},{question:"Does the calendar coordinate round-robin bookings?",answer:"Yes. Distribute incoming client meetings across team members dynamically, sending auto-reminders to slash no-show rates."},{question:"What performance metrics can I monitor in real-time?",answer:"Track ad campaigns ROI, deal conversion speeds, conversation velocities, and team response productivity on unified dashboards."},{question:"How complex can our visual workflow sequences be?",answer:"Build multi-step automation branch chains triggered by customer actions, message keywords, page visits, or deal movements."},{question:"Is there a functional mobile application available?",answer:"Yes. Access our fully featured mobile CRM app on iOS and Android to manage leads and respond to chats on the go."},{question:"How does team communication collaboration work?",answer:"Utilize a unified shared inbox to compile multi-channel threads, allocate conversation owners, and drop internal context notes."},{question:"Is customer data protected under security regulations?",answer:"We enforce bank-grade SSL encryption, daily secure database backups, and GDPR-compliant server environments to protect client data."}];function uL(){const[n,e]=ve.useState(null);return C.jsx("section",{className:"relative py-24 px-4 md:px-8 transition-colors duration-500",style:{background:"var(--section-bg-faq)"},children:C.jsxs("div",{className:"max-w-4xl mx-auto",children:[C.jsx("p",{className:"font-body font-semibold text-xs uppercase mb-6",style:{color:"rgba(99,200,180,0.7)",letterSpacing:"0.14em"},children:"// FAQs"}),C.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12",children:[C.jsxs("h2",{className:"font-heading text-5xl md:text-6xl",style:{letterSpacing:"-3px",lineHeight:"0.9"},children:[C.jsx("span",{className:"text-foreground transition-colors duration-500",children:"Frequently"}),C.jsx("br",{}),C.jsx("span",{className:"text-foreground/30 transition-colors duration-500",children:"asked questions."})]}),C.jsx("a",{href:"#contact",className:"font-body text-sm whitespace-nowrap self-start md:self-auto mt-2 transition-colors duration-300",style:{color:"rgba(99,200,180,0.9)"},children:"View more questions →"})]}),C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5",children:cL.map((t,r)=>C.jsxs("button",{onClick:()=>e(n===r?null:r),className:"water-glass rounded-2xl text-left transition-all overflow-hidden",children:[C.jsxs("div",{className:"px-5 py-5 flex items-start justify-between gap-3",children:[C.jsx("span",{className:"font-body font-medium text-sm text-foreground transition-colors duration-500",children:t.question}),C.jsx(M1,{className:`h-4 w-4 text-foreground/40 flex-shrink-0 mt-0.5 transition-transform duration-300 ${n===r?"rotate-180":""}`})]}),C.jsx("div",{className:`overflow-hidden transition-all duration-300 ${n===r?"max-h-96":"max-h-0"}`,children:C.jsx("p",{className:"px-5 pb-5 font-body font-light text-sm text-foreground/50 leading-relaxed transition-colors duration-500",children:t.answer})})]},r))})]})})}function dL(){return C.jsxs("section",{id:"contact",className:"relative py-20 px-4 md:px-8 overflow-hidden transition-colors duration-500",style:{background:"var(--section-bg-cta)"},children:[C.jsx("div",{className:"cta-climax-spotlight"}),C.jsx("div",{className:"max-w-4xl mx-auto relative z-10",children:C.jsx(Oo,{edgeSensitivity:55,glowRadius:30,glowIntensity:.7,coneSpread:18,animated:!1,colors:["#00ffd0","#00c8ff","#7df9ff"],className:"rounded-[2rem]",children:C.jsxs("div",{className:"p-12 md:p-16 rounded-[2rem] text-center transition-all duration-500 bg-[var(--card)] backdrop-blur-[20px]",style:{border:"1px solid rgba(99,200,180,0.2)"},children:[C.jsx("p",{className:"font-body font-semibold text-xs uppercase mb-6",style:{color:"rgba(99,200,180,0.7)",letterSpacing:"0.14em"},children:"// Get Started Today"}),C.jsxs("h2",{className:"font-heading text-5xl md:text-6xl mb-6",style:{letterSpacing:"-3px",lineHeight:"0.9"},children:[C.jsx("span",{className:"text-foreground transition-colors duration-500",children:"Always within reach"}),C.jsx("br",{}),C.jsx("span",{style:{color:"rgba(99,200,180,0.8)"},children:"to support your growth."})]}),C.jsx("p",{className:"font-body font-light text-base text-foreground/50 max-w-md mx-auto mb-8 transition-colors duration-500",children:"Join 500+ businesses running on autopilot. Start your free trial — no credit card required."}),C.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-6",children:[C.jsxs("a",{href:"https://calendly.com/sanyam-chhoriya/automate-flow-ai-demo?month=2026-05",target:"_blank",rel:"noopener noreferrer",className:"liquid-glass-strong shimmer-hover rounded-full px-6 py-3.5 text-base font-semibold text-slate-900 dark:text-white flex items-center justify-center gap-2 transition-colors duration-500",style:{background:"rgba(99,200,180,0.18)",border:"1px solid rgba(99,200,180,0.35)",textDecoration:"none"},children:["Start Free Trial",C.jsx(za,{className:"h-4 w-4 text-slate-900 dark:text-white transition-colors duration-500"})]}),C.jsxs("a",{href:"https://wa.me/919307783836",target:"_blank",rel:"noopener noreferrer",className:"rounded-full px-6 py-3.5 text-base font-body text-foreground/75 flex items-center gap-2 hover:text-foreground transition-colors duration-500",style:{background:"rgba(37,211,102,0.08)",border:"1px solid rgba(37,211,102,0.2)"},children:[C.jsx("svg",{className:"w-5 h-5",fill:"#25D366",viewBox:"0 0 24 24",children:C.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"Chat on WhatsApp"]})]}),C.jsx("p",{className:"font-body text-xs text-foreground/40 transition-colors duration-500",children:"Talk with our automation specialists to explore enterprise workflows · ceo@automateflow.tech"})]})})})]})}function fL({onOpenModal:n,theme:e="dark"}){return C.jsxs("footer",{className:"bg-background border-t border-border/10 py-16 px-4 md:px-8 transition-colors duration-500 relative overflow-hidden",children:[C.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"}),C.jsx("div",{className:"max-w-7xl mx-auto",children:C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 items-start",children:[C.jsxs("div",{className:"md:col-span-2",children:[C.jsx("div",{className:"flex items-center gap-3 mb-4",children:C.jsx("a",{href:"#home","aria-label":"Automate Flow AI — Home",style:{textDecoration:"none"},children:C.jsx("div",{className:"logo-only",children:C.jsx("img",{src:e==="dark"?n_:t_,alt:"Automate Flow AI",className:"logo-icon"})})})}),C.jsx("p",{className:"font-body font-light text-xs text-foreground/40 max-w-sm leading-relaxed mb-4 transition-colors duration-500",children:"A centralized AI-powered business operating system replacing 12 disconnected platforms to capture leads, orchestrate WhatsApp engagement, and automate workflows."}),C.jsxs("p",{className:"font-body text-[11px] text-foreground/30 leading-snug transition-colors duration-500",children:["Fremont Office: 45128 Warm Springs Blvd #319, Fremont, CA 94539, USA",C.jsx("br",{}),"Contact: ceo@automateflow.tech"]})]}),C.jsxs("div",{className:"flex flex-col gap-2.5",children:[C.jsx("div",{className:"font-body font-semibold text-xs text-foreground/80 tracking-wider uppercase mb-2",children:"Platform"}),C.jsx("a",{href:"#home",className:"font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300",children:"Home Autopilot"}),C.jsx("a",{href:"#features",className:"font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300",children:"System Features"}),C.jsx("a",{href:"#pricing",className:"font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300",children:"Pricing Model"})]}),C.jsxs("div",{className:"flex flex-col gap-2.5",children:[C.jsx("div",{className:"font-body font-semibold text-xs text-foreground/80 tracking-wider uppercase mb-2",children:"Legal Operations"}),n&&C.jsxs(C.Fragment,{children:[C.jsx("button",{onClick:()=>n("privacy"),className:"text-left font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300 bg-transparent border-none cursor-pointer p-0",children:"Privacy Policy"}),C.jsx("button",{onClick:()=>n("terms"),className:"text-left font-body text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-300 bg-transparent border-none cursor-pointer p-0",children:"Terms & Conditions"})]}),C.jsx("p",{className:"font-body text-[11px] text-foreground/20 mt-4 transition-colors duration-500",children:"© 2026 Automate Flow AI. All rights reserved."})]})]})})]})}function hL({theme:n}){const e=ve.useRef(null),t=ve.useRef({x:-1e3,y:-1e3,tx:-1e3,ty:-1e3});return ve.useEffect(()=>{const r=e.current;if(!r)return;const o=r.getContext("2d");if(!o)return;let a,c=r.width=window.innerWidth,d=r.height=window.innerHeight;const h=c<768,f=h?28:68,g=h?100:135,v=160,m=[];for(let D=0;D<f;D++){const P=Math.random()*1.2+.4,O=(Math.random()*1.8+.8)*(P>1?1.25:.8);m.push({x:Math.random()*c,y:Math.random()*d,vx:(Math.random()-.5)*.12*(1/P),vy:(Math.random()-.5)*.12*(1/P),baseRadius:O,depth:P,pulseSpeed:.003+Math.random()*.012,pulsePhase:Math.random()*Math.PI*2,baseAlpha:Math.random()*.22+.12,alpha:0})}const _=()=>{r&&(c=r.width=window.innerWidth,d=r.height=window.innerHeight)};window.addEventListener("resize",_);const E=D=>{t.current.tx=D.clientX,t.current.ty=D.clientY},w=()=>{t.current.tx=-1e3,t.current.ty=-1e3};window.addEventListener("mousemove",E),document.addEventListener("mouseleave",w);let y=-1e3,S=-1e3;const b=()=>{o.clearRect(0,0,c,d);const D=t.current;D.tx===-1e3?(y=-1e3,S=-1e3):y===-1e3?(y=D.tx,S=D.ty):(y+=(D.tx-y)*.06,S+=(D.ty-S)*.06);const P=c/2,O=d/2,L=Math.max(c,d)*.42;for(let U=0;U<m.length;U++){const M=m[U],N=M.x-P,B=M.y-O,F=Math.sqrt(N*N+B*B),W=Math.min(1,Math.pow(F/L,1.8));for(let J=U+1;J<m.length;J++){const se=m[J],z=se.x-M.x,$=se.y-M.y,j=Math.sqrt(z*z+$*$);if(j<g){const X=se.x-P,te=se.y-O,oe=Math.sqrt(X*X+te*te),V=Math.min(1,Math.pow(oe/L,1.8)),Q=(W+V)/2;let Le=(1-j/g)*.14*Q;if(y!==-1e3){const Be=(M.x+se.x)/2,Ie=(M.y+se.y)/2,le=y-Be,me=S-Ie,de=Math.sqrt(le*le+me*me);if(de<v){const Ne=(1-de/v)*.22;Le+=Ne}}Le>.005&&(o.beginPath(),o.moveTo(M.x,M.y),o.lineTo(se.x,se.y),n==="dark"?o.strokeStyle=`rgba(99, 200, 180, ${Le})`:o.strokeStyle=`rgba(44, 95, 138, ${Le*.7})`,o.lineWidth=(.4+(1-j/g)*.6)*((M.depth+se.depth)/2.5),o.stroke())}}}for(let U=0;U<m.length;U++){const M=m[U];M.pulsePhase+=M.pulseSpeed;const N=Math.sin(M.pulsePhase)*.06;M.alpha=Math.max(.04,M.baseAlpha+N);const B=M.x-P,F=M.y-O,W=Math.sqrt(B*B+F*F),J=Math.min(1,Math.pow(W/L,1.8));let se=M.alpha*J,z=M.depth;if(y!==-1e3){const j=y-M.x,X=S-M.y,te=Math.sqrt(j*j+X*X);if(te<v){const oe=(1-te/v)*.35;M.x+=(y-M.x)*oe*.012,M.y+=(S-M.y)*oe*.012,se+=(1-te/v)*.42,z+=(1-te/v)*.35}}M.x+=M.vx,M.y+=M.vy;const $=15;if(M.x<-$&&(M.x=c+$),M.x>c+$&&(M.x=-$),M.y<-$&&(M.y=d+$),M.y>d+$&&(M.y=-$),se>.01){o.beginPath();const j=M.baseRadius*z;o.arc(M.x,M.y,j,0,Math.PI*2),n==="dark"?(o.fillStyle=`rgba(99, 200, 180, ${se})`,o.shadowBlur=j*3.5,o.shadowColor=`rgba(99, 200, 180, ${se*.85})`):(o.fillStyle=`rgba(44, 95, 138, ${se*.85})`,o.shadowBlur=j*2.2,o.shadowColor=`rgba(44, 95, 138, ${se*.5})`),o.fill(),o.shadowBlur=0}}a=requestAnimationFrame(b)};return b(),()=>{window.removeEventListener("resize",_),window.removeEventListener("mousemove",E),document.removeEventListener("mouseleave",w),cancelAnimationFrame(a)}},[n]),C.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000",style:{mixBlendMode:n==="dark"?"screen":"multiply",opacity:n==="dark"?.72:.4}})}function pL({isOpen:n,type:e,onClose:t}){return C.jsx(zc,{children:n&&e&&C.jsx(ni.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md",children:C.jsx(ni.div,{initial:{scale:.95,y:20},animate:{scale:1,y:0},exit:{scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:30},className:"w-full max-w-4xl max-h-[85vh] flex flex-col",children:C.jsxs(gp,{variant:"strong",className:"flex flex-col h-full overflow-hidden",interactive:!1,children:[C.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-border/10 bg-background/30 backdrop-blur-md",children:[C.jsx("h3",{className:"font-heading text-3xl md:text-4xl text-foreground",children:e==="privacy"?"Privacy Policy":"Terms & Conditions"}),C.jsx("button",{onClick:t,className:"p-2 rounded-full hover:bg-foreground/5 text-foreground/60 hover:text-foreground transition-colors duration-200",children:C.jsx(e_,{className:"h-5 w-5"})})]}),C.jsx("div",{className:"overflow-y-auto px-8 py-8 font-body font-light text-sm text-foreground/75 leading-relaxed space-y-6 max-h-[65vh]",children:e==="privacy"?C.jsxs(C.Fragment,{children:[C.jsx("p",{className:"text-foreground/90 font-medium",children:"Last Updated: May 28, 2026"}),C.jsx("p",{children:'Automate Flow AI ("we," "our," or "us") is dedicated to protecting your privacy and ensuring compliance with global data protection frameworks. This Privacy Policy outlines how we gather, process, retain, and distribute personal information and messaging metadata within our AI-powered business operating platform.'}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"1. Information Gathered"}),C.jsx("p",{children:"We collect information directly provided by you, including your name, enterprise details, billing address, WhatsApp Business API metadata, and connected credentials (such as Google API nodes and payment keys). Additionally, our AI engines ingest customer conversation history across active channels to execute response automation."}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"2. Conversational & Messaging Data Compliance"}),C.jsx("p",{children:"All customer conversations routed through official WhatsApp, SMS, and Instagram DM gateways are processed using secure TLS 1.3 encryption layers. We capture messaging meta logs to generate visual analytics and response performance trends. Customer data is strictly owned by you and is never sold, traded, or shared with external database compilers."}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"3. Artificial Intelligence Disclaimer & Training"}),C.jsx("p",{children:"Our system employs proprietary large language models and machine learning pipelines. We do not use customer CRM directories or private client dialogue logs to train base foundation models without explicit corporate authorization. Custom AI agent parameters and data vectors are isolated in separate enterprise cloud containers."}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"4. Global Jurisdictional Standards (CCPA & GDPR)"}),C.jsx("p",{children:"We comply fully with the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR). Users retain the right to download, audit, or request permanent deletion of their CRM directories and conversation logs from our global cloud servers in Fremont, California, and integrated regional data centers."}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"5. Data Retention Schedules"}),C.jsx("p",{children:"Active conversation timelines, activity maps, and billing logs are kept for the lifetime of your business subscription. Upon cancellation or termination of services, Automate Flow AI will purge all contact profiles and client chats within sixty (60) days, unless legally required to retain transaction nodes."})]}):C.jsxs(C.Fragment,{children:[C.jsx("p",{className:"text-foreground/90 font-medium",children:"Last Updated: May 28, 2026"}),C.jsx("p",{children:"Welcome to Automate Flow AI. By accessing or provisioning our AI automation services, visual workflow triggers, WhatsApp messaging gateways, or billing dashboards, you agree to comply with the following Terms and Conditions of service."}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"1. Messaging Compliance & Acceptable Use Policy"}),C.jsx("p",{children:"Users must comply with regional cellular carrier guidelines, TCPA regulations, and official WhatsApp Business API policies. Automated spamming, mass non-consensual outbound messaging, or broadcasting prohibited content is strictly forbidden. We reserve the right to suspend or block rate-limited API profiles violating messaging guidelines."}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"2. CRM Service Level Agreements (SLA)"}),C.jsx("p",{children:'While we target a 99.9% uptime rate for our cloud core, Automate Flow AI is not liable for downstream failures caused by WhatsApp API outages, carrier-side delivery blockages, or third-party webhooks failures. Services are delivered on an "as is" and "as available" basis.'}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"3. Subscription, Cancellation & Billing Policies"}),C.jsx("p",{children:"Automate Flow AI bills monthly or annually according to your selected plan (Starter, Pro, or Enterprise). All fees are non-refundable after the completion of your initial 7-Day Free Trial. Account cancellations must be submitted directly through your active billing dashboard at least 24 hours prior to your monthly renewal date."}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"4. AI Disclaimers & Operational Liability Limits"}),C.jsx("p",{children:"Our artificial intelligence modules deliver text content, follow-ups, and calendar schedules based on custom guidelines. All AI outputs are advisory. The client assumes 100% operational liability for agreements made, conversations held, and appointments booked by autonomous agents. Our maximum aggregate liability is limited to the fees paid to us in the prior three months."}),C.jsx("h4",{className:"font-semibold text-foreground text-base mt-6",children:"5. Intellectual Property & California Jurisdiction"}),C.jsx("p",{children:"All platform components, visual builders, and underlying automation engines remain the exclusive property of Automate Flow AI. These terms are governed under the laws of the State of California, United States, and any disputes shall be resolved in courts located in Alameda County, California."})]})})]})})})})}function mL(){const[n,e]=ve.useState(()=>{const a=localStorage.getItem("automateflow-theme");return a||"dark"}),[t,r]=ve.useState(null);ve.useEffect(()=>{localStorage.setItem("automateflow-theme",n);const a=document.documentElement;n==="dark"?a.classList.add("dark"):a.classList.remove("dark")},[n]);const o=()=>{e(a=>a==="dark"?"light":"dark")};return C.jsxs("div",{className:"bg-background min-h-screen text-foreground transition-colors duration-500 relative",children:[C.jsx("div",{className:"noise-overlay"}),C.jsxs("div",{className:"fixed inset-0 pointer-events-none overflow-hidden z-0",children:[C.jsx("div",{className:"cinematic-fog-layer"}),C.jsx("div",{className:"cinematic-light-beam"}),C.jsx(hL,{theme:n}),C.jsxs("div",{className:"cinematic-particle-field",children:[C.jsx("div",{className:"cinematic-particle cinematic-particle-1"}),C.jsx("div",{className:"cinematic-particle cinematic-particle-2"}),C.jsx("div",{className:"cinematic-particle cinematic-particle-3"}),C.jsx("div",{className:"cinematic-particle cinematic-particle-4"}),C.jsx("div",{className:"cinematic-particle cinematic-particle-5"}),C.jsx("div",{className:"cinematic-particle cinematic-particle-6"})]})]}),C.jsx(z1,{theme:n,toggleTheme:o}),C.jsx(iL,{theme:n}),C.jsx(rL,{}),C.jsx(sL,{}),C.jsx(oL,{theme:n}),C.jsx(aL,{}),C.jsx(lL,{theme:n}),C.jsx(uL,{}),C.jsx(dL,{}),C.jsx(fL,{theme:n,onOpenModal:a=>r(a)}),C.jsx(pL,{isOpen:t!==null,type:t,onClose:()=>r(null)})]})}u1.createRoot(document.getElementById("root")).render(C.jsx(mL,{}));
