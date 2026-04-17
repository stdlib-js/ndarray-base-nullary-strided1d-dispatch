/** @license Apache-2.0 */

'use strict';

/**
* Constructor for applying a strided function to an ndarray.
*
* @module @stdlib/ndarray-base-nullary-strided1d-dispatch
*
* @example
* var base = require( '@stdlib/blas-ext-base-ndarray-gsorthp' );
* var dtypes = require( '@stdlib/ndarray-dtypes' );
* var ndarray2array = require( '@stdlib/ndarray-to-array' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var NullaryStrided1dDispatch = require( '@stdlib/ndarray-base-nullary-strided1d-dispatch' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'all' );
*
* var table = {
*     'default': base
* };
* var sorthp = new NullaryStrided1dDispatch( table, [ idt ], odt );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var order = scalar2ndarray( 1.0, {
*     'dtype': 'generic'
* });
*
* var out = sorthp.assign( x, order );
* // returns <ndarray>
*
* var arr = ndarray2array( x );
* // returns [ -3.0, -1.0, 2.0 ]
*
* var bool = ( out === x );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
