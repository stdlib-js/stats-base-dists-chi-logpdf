// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import{factory as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logpdf@v0.2.0-esm/index.mjs";function a(t,m){var o,a;return s(t)||s(m)||m<0?NaN:0===m?0===t?r:i:t<0||t===r?i:(o=(1-(a=m/2))*d+(m-1)*e(t)-t*t/2,o-=n(a))}function l(t){var a,l;return s(t)||t<0?m(NaN):0===t?o(0):(l=t/2,a=t-1,function(t){var m;if(s(t))return NaN;if(t<0||t===r)return i;return m=(1-l)*d+a*e(t)-t*t/2,m-=n(l)})}t(a,"factory",l);export{a as default,l as factory};
//# sourceMappingURL=index.mjs.map
