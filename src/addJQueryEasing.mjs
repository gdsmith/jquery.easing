/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery.easing/master/LICENSE
*/

export default function ($) {
	// Preserve the original jQuery "swing" easing as "jswing"
	if (typeof $.easing !== 'undefined') {
		$.easing['jswing'] = $.easing['swing'];
	}

	const { pow, sqrt, sin, cos, PI } = Math,
		c1 = 1.70158,
		c2 = c1 * 1.525,
		c3 = c1 + 1,
		c4 = ( 2 * PI ) / 3,
		c5 = ( 2 * PI ) / 4.5;

	// x is the fraction of animation progress, in the range 0..1
	function bounceOut(x) {
		const n1 = 7.5625,
			d1 = 2.75;
		if ( x < 1/d1 ) {
			return n1*x*x;
		}
		if ( x < 2/d1 ) {
			return n1*(x-=(1.5/d1))*x + .75;
		}
		if ( x < 2.5/d1 ) {
			return n1*(x-=(2.25/d1))*x + .9375;
		}
		return n1*(x-=(2.625/d1))*x + .984375;
	}

	$.extend( $.easing, {
		def: 'easeOutQuad',
		swing (x) {
			return $.easing[$.easing.def](x);
		},
		easeInQuad (x) {
			return x * x;
		},
		easeOutQuad (x) {
			return 1 - ( 1 - x ) * ( 1 - x );
		},
		easeInOutQuad (x) {
			return x < 0.5 ?
				2 * x * x :
				1 - pow( -2 * x + 2, 2 ) / 2;
		},
		easeInCubic (x) {
			return x * x * x;
		},
		easeOutCubic (x) {
			return 1 - pow( 1 - x, 3 );
		},
		easeInOutCubic (x) {
			return x < 0.5 ?
				4 * x * x * x :
				1 - pow( -2 * x + 2, 3 ) / 2;
		},
		easeInQuart (x) {
			return x * x * x * x;
		},
		easeOutQuart (x) {
			return 1 - pow( 1 - x, 4 );
		},
		easeInOutQuart (x) {
			return x < 0.5 ?
				8 * x * x * x * x :
				1 - pow( -2 * x + 2, 4 ) / 2;
		},
		easeInQuint (x) {
			return x * x * x * x * x;
		},
		easeOutQuint (x) {
			return 1 - pow( 1 - x, 5 );
		},
		easeInOutQuint (x) {
			return x < 0.5 ?
				16 * x * x * x * x * x :
				1 - pow( -2 * x + 2, 5 ) / 2;
		},
		easeInSine (x) {
			return 1 - cos( x * PI/2 );
		},
		easeOutSine (x) {
			return sin( x * PI/2 );
		},
		easeInOutSine (x) {
			return -( cos( PI * x ) - 1 ) / 2;
		},
		easeInExpo (x) {
			return x === 0 ? 0 : pow( 2, 10 * x - 10 );
		},
		easeOutExpo (x) {
			return x === 1 ? 1 : 1 - pow( 2, -10 * x );
		},
		easeInOutExpo (x) {
			return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
				pow( 2, 20 * x - 10 ) / 2 :
				( 2 - pow( 2, -20 * x + 10 ) ) / 2;
		},
		easeInCirc (x) {
			return 1 - sqrt( 1 - pow( x, 2 ) );
		},
		easeOutCirc (x) {
			return sqrt( 1 - pow( x - 1, 2 ) );
		},
		easeInOutCirc (x) {
			return x < 0.5 ?
				( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
				( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
		},
		easeInElastic (x) {
			return x === 0 ? 0 : x === 1 ? 1 :
				-pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
		},
		easeOutElastic (x) {
			return x === 0 ? 0 : x === 1 ? 1 :
				pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
		},
		easeInOutElastic (x) {
			return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
				-( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
				pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
		},
		easeInBack (x) {
			return c3 * x * x * x - c1 * x * x;
		},
		easeOutBack (x) {
			return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
		},
		easeInOutBack (x) {
			return x < 0.5 ?
				( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
				( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
		},
		easeInBounce (x) {
			return 1 - bounceOut( 1 - x );
		},
		easeOutBounce: bounceOut,
		easeInOutBounce (x) {
			return x < 0.5 ?
				( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
				( 1 + bounceOut( 2 * x - 1 ) ) / 2;
		}
	});
	return $;
}
