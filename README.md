<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the [probability density function][pdf] (PDF) for a [chi][chi-distribution] distribution .

<section class="intro">

The [probability density function][pdf] (PDF) for a [chi][chi-distribution] random variable is

<!-- <equation class="equation" label="eq:chi_pdf" align="center" raw="f(x;\,k) = \frac{2^{{1-k/2}}x^{{k-1}}e^{{-x^{2}/2}}}{\Gamma(k/2)}" alt="Probability density function (PDF) for a chi distribution."> -->

```math
f(x;\,k) = \frac{2^{{1-k/2}}x^{{k-1}}e^{{-x^{2}/2}}}{\Gamma(k/2)}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\,k) = \frac{2^{{1-k/2}}x^{{k-1}}e^{{-x^{2}/2}}}{\Gamma(k/2)}" data-equation="eq:chi_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chi/logpdf/docs/img/equation_chi_pdf.svg" alt="Probability density function (PDF) for a chi distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the degrees of freedom and `Γ` denotes the [gamma][gamma-function] function. 

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-chi-logpdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats-base-dists-chi-logpdf' );
```

#### logpdf( x, k )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var y = logpdf( 0.1, 1.0 );
// returns ~-0.231

y = logpdf( 0.5, 2.0 );
// returns ~-0.818

y = logpdf( -1.0, 4.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -2.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the natural logarithm of the [PDF][pdf] for a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logpdf( 2.0, 0.0 );
// returns -Infinity

y = logpdf( 0.0, 0.0 );
// returns Infinity
```

#### logpdf.factory( k )

Returns a `function` for evaluating the natural logarithm of the [PDF][pdf] for a [chi][chi-distribution] distribution with degrees of freedom `k`.

```javascript
var mylogPDF = logpdf.factory( 6.0 );

var y = mylogPDF( 3.0 );
// returns ~-1.086

y = mylogPDF( 1.0 );
// returns ~-2.579
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var logpdf = require( '@stdlib/stats-base-dists-chi-logpdf' );

var k;
var x;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    x = randu() * 10.0;
    k = randu() * 10.0;
    y = logpdf( x, k );
    console.log( 'x: %d, k: %d, ln(f(x;k)): %d', x.toFixed( 4 ), k.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-chi-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-chi-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-chi-logpdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-chi-logpdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-chi-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-chi-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-chi-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-chi-logpdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-chi-logpdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-chi-logpdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-chi-logpdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-chi-logpdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-chi-logpdf/main/LICENSE

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
