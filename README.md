<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# tand

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Computes the [tangent][trigonometric-functions] of an angle measured in degrees.

<section class="intro">

</section>



<section class="usage">

## Usage

```javascript
import tand from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-tand@esm/index.mjs';
```

#### tand( x )

Evaluates the [tangent][trigonometric-functions] of `x` (in degrees).

```javascript
var v = tand( 0.0 );
// returns 0

v = tand( 60.0 );
// returns ~1.73

v = tand( 90.0 );
// returns Infinity

v = tand( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import tand from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-tand@esm/index.mjs';

var x = linspace( -180, 180, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( tand( x[ i ] ) );
}

</script>
</body>
</html>
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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-tand.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-tand

[test-image]: https://github.com/stdlib-js/math-base-special-tand/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-tand/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-tand/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-tand?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-tand.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-tand/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-tand/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-tand/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-tand/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-tand/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-tand/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-tand/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-tand/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-tand/main/LICENSE

[trigonometric-functions]: https://en.wikipedia.org/wiki/Trigonometric_functions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
