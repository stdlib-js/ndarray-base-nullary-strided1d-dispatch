<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# NullaryStrided1dDispatch

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Constructor for applying a strided function to an ndarray.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import NullaryStrided1dDispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-strided1d-dispatch@v0.1.0-esm/index.mjs';
```

#### NullaryStrided1dDispatch( table, idtypes, odtypes\[, options] )

Returns an interface for applying a strided function to an ndarray.

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-gsorthp@esm/index.mjs';

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];

var nullary = new NullaryStrided1dDispatch( table, [ dtypes ], dtypes );
```

The constructor has the following parameters:

-   **table**: strided function dispatch table. Must have the following properties:

    -   **default**: default strided function which should be invoked when provided ndarrays have data types which do not have a corresponding specialized implementation.

    A dispatch table may have the following additional properties:

    -   **types**: one-dimensional list of ndarray data types describing specialized output ndarray argument signatures. Only the output ndarray argument data types should be specified. Additional ndarray argument data types should be omitted and are not considered during dispatch. The length of `types` must equal the number of strided functions specified by `fcns`.
    -   **fcns**: list of strided functions which are specific to specialized output ndarray argument signatures.

-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.

-   **odtypes**: list of supported output data types.

-   **options**: function options (_optional_).

The constructor supports the following options:

-   **strictTraversalOrder**: boolean specifying whether the order of element traversal must match the memory layout order of an output ndarray. Default: `false`.

#### NullaryStrided1dDispatch.prototype.assign( out\[, ...args]\[, options] )

Applies a strided function and assigns results to a provided output ndarray.

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-gsorthp@esm/index.mjs';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@esm/index.mjs';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs';
import NullaryStrided1dDispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-strided1d-dispatch@v0.1.0-esm/index.mjs';

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'all' );

var table = {
    'default': base
};
var nullary = new NullaryStrided1dDispatch( table, [ idt ], odt );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});

var out = nullary.assign( x, order, {
    'dims': [ 0 ]
});
// returns <ndarray>

var arr = ndarray2array( x );
// returns [ -3.0, -1.0, 2.0 ]

var bool = ( out === x );
// returns true
```

The method has the following parameters:

-   **out**: output ndarray.
-   **args**: additional input ndarray arguments (_optional_).
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform an operation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A strided function should have the following signature:

    ```text
    f( arrays )
    ```

    where

    -   **arrays**: array containing an output ndarray, followed by any additional ndarray arguments.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable array-element-newline -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import dsorthp from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-dsorthp@esm/index.mjs';
import ssorthp from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-ssorthp@esm/index.mjs';
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-gsorthp@esm/index.mjs';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@esm/index.mjs';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs';
import NullaryStrided1dDispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-strided1d-dispatch@v0.1.0-esm/index.mjs';

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'all' );

// Define a dispatch table:
var table = {
    'types': [
        'float64', // input/output
        'float32'  // input/output
    ],
    'fcns': [
        dsorthp,
        ssorthp
    ],
    'default': base
};

// Create an interface for performing operation:
var sorthp = new NullaryStrided1dDispatch( table, [ idt ], odt );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, -10, 10, {
    'dtype': 'float64'
});

// Wrap in an ndarray:
var x = new ndarray( 'float64', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Specify the sort order:
var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});

// Perform operation:
sorthp.assign( x, order, {
    'dims': [ 0, 1 ]
});

// Print the results:
console.log( ndarray2array( x ) );

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-nullary-strided1d-dispatch.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-nullary-strided1d-dispatch

[test-image]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-nullary-strided1d-dispatch/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-nullary-strided1d-dispatch?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-nullary-strided1d-dispatch.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-nullary-strided1d-dispatch/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-nullary-strided1d-dispatch/main/LICENSE

</section>

<!-- /.links -->
