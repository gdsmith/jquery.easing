/*
 * Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery/easing
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

/* globals jQuery */
(function($){
	$.extend( $.easing, {
		easeIn (x, t, b, c, d) {
			return $.easing.easeInQuad(x, t, b, c, d);
		},
		easeOut (x, t, b, c, d) {
			return $.easing.easeOutQuad(x, t, b, c, d);
		},
		easeInOut (x, t, b, c, d) {
			return $.easing.easeInOutQuad(x, t, b, c, d);
		},
		expoin(x, t, b, c, d) {
			return $.easing.easeInExpo(x, t, b, c, d);
		},
		expoout(x, t, b, c, d) {
			return $.easing.easeOutExpo(x, t, b, c, d);
		},
		expoinout(x, t, b, c, d) {
			return $.easing.easeInOutExpo(x, t, b, c, d);
		},
		bouncein(x, t, b, c, d) {
			return $.easing.easeInBounce(x, t, b, c, d);
		},
		bounceout(x, t, b, c, d) {
			return $.easing.easeOutBounce(x, t, b, c, d);
		},
		bounceinout(x, t, b, c, d) {
			return $.easing.easeInOutBounce(x, t, b, c, d);
		},
		elasin(x, t, b, c, d) {
			return $.easing.easeInElastic(x, t, b, c, d);
		},
		elasout(x, t, b, c, d) {
			return $.easing.easeOutElastic(x, t, b, c, d);
		},
		elasinout(x, t, b, c, d) {
			return $.easing.easeInOutElastic(x, t, b, c, d);
		},
		backin(x, t, b, c, d) {
			return $.easing.easeInBack(x, t, b, c, d);
		},
		backout(x, t, b, c, d) {
			return $.easing.easeOutBack(x, t, b, c, d);
		},
		backinout(x, t, b, c, d) {
			return $.easing.easeInOutBack(x, t, b, c, d);
		}
	});
})(jQuery);
