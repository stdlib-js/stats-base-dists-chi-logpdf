"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var N=n(function(A,o){
var v=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-gammaln/dist'),p=require('@stdlib/math-base-special-ln/dist'),q=require('@stdlib/constants-float64-ninf/dist'),f=require('@stdlib/constants-float64-pinf/dist'),y=require('@stdlib/constants-float64-ln-two/dist');function F(r,e){var a,i;return v(r)||v(e)||e<0?NaN:e===0?r===0?f:q:r<0||r===f?q:(i=e/2,a=(1-i)*y+(e-1)*p(r)-r*r/2,a-=g(i),a)}o.exports=F
});var l=n(function(B,c){
var d=require('@stdlib/utils-constant-function/dist'),I=require('@stdlib/stats-base-dists-degenerate-logpdf/dist').factory,s=require('@stdlib/math-base-assert-is-nan/dist'),h=require('@stdlib/math-base-special-gammaln/dist'),L=require('@stdlib/math-base-special-ln/dist'),P=require('@stdlib/constants-float64-ninf/dist'),O=require('@stdlib/constants-float64-pinf/dist'),R=require('@stdlib/constants-float64-ln-two/dist');function b(r){var e,a;if(s(r)||r<0)return d(NaN);if(r===0)return I(0);return a=r/2,e=r-1,i;function i(u){var t;return s(u)?NaN:u<0||u===O?P:(t=(1-a)*R+e*L(u)-u*u/2,t-=h(a),t)}}c.exports=b
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=N(),w=l();j(m,"factory",w);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
