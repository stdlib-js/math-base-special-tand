"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=a(function(c,t){
var u=require('@stdlib/math-base-special-tan/dist'),i=require('@stdlib/math-base-assert-is-integer/dist'),s=require('@stdlib/math-base-special-deg2rad/dist'),f=require('@stdlib/assert-is-infinite/dist');function v(e){var r;return f(e)?NaN:i((e/90-1)/2)?1/0:i(e/90/2)?0:(r=s(e),u(r))}t.exports=v
});var q=n();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
