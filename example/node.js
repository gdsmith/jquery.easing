'use strict';

const { JSDOM } = require('jsdom');
const JQuery = require('jquery');
const addJQueryEasing = require('../');

const { window } = new JSDOM('');
const jQuery = JQuery(window);
const $ = addJQueryEasing(jQuery);

$('#boxing')
	.animate({ marginLeft: '50px'	}, 1000, 'easeOutElastic')
	.animate({ marginTop:	'50px'	}, 1000, 'easeOutBounce')
	.animate({ marginLeft: '-150px' }, 1000, 'easeOutQuad')
	.animate({ marginTop:	'-150px' }, 1000, 'easeInOutBack');
