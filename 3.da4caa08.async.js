(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{H0h1:function(n,r,e){var t=e("SKAX");function u(n,r){var e=!0;return t(n,(function(n,t,u){return e=!!r(n,t,u),e})),e}n.exports=u},Jlc5:function(n,r,e){var t=e("ZirO"),u=e("H0h1"),o=e("ut/Y"),c=e("Z0cm"),i=e("mv/X");function a(n,r,e){var a=c(n)?t:u;return e&&i(n,r,e)&&(r=void 0),a(n,o(r,3))}n.exports=a},ZirO:function(n,r){function e(n,r){var e=-1,t=null==n?0:n.length;while(++e<t)if(!r(n[e],e,n))return!1;return!0}n.exports=e},tCqT:function(n,r,e){"use strict";e.r(r);var t=e("Xdxp"),u=e.n(t),o=e("+UJD"),c=e.n(o),i=e("q1tI"),a=e.n(i);function f(n){var r=n.children;return r}f.propTypes={},f.defaultProps={};var l=a.a.memo(f),p=(e("Jlc5"),e("yWgo"));function s(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p["i"];var t=a.a.useRef(void 0);t.current&&e(r,t.current)||(t.current=r),a.a.useEffect(n,t.current)}function v(n){var r=n.location,e=n.children,t=a.a.useRef(r);s((function(){Object(p["i"])(t.current,r)||(t.current=r,window.scrollTo(0,0))}),[r]);var o=e,i=r.pathname,f="/"!==i?c()(i,"/"):i;return u()(f,"/user/")&&(o=a.a.createElement(l,null,e)),o}v.propTypes={},v.defaultProps={};r["default"]=a.a.memo(v)}}]);