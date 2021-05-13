# jQuery Easing Plugin

What is it? A jQuery plugin from GSGD to give advanced easing options. More info [here](http://gsgd.co.uk/sandbox/jquery/easing)

For CDN please use CloudFlare [`https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js`](https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js) to help my host. Thank you.

## ESM usage (bundlers)

```js
import $ from 'jquery.easing';
```

## ESM usage (browser)

```js
import $ from './node_modules/jquery.easing/src/jquery.easing.mjs';
```

OR, to pass your own non-global `jQuery` instance:

```js
/* globals someJQueryInstance */
import addJQueryEasing from './node_modules/jquery.easing/src/addJQueryEasing.mjs';

const $ = addJQueryEasing(someJQueryInstance);
```

## UMD usage

```html
<script src="node_modules/jquery.easing/jquery.easing.min.js"></script>
```

## CommonJS or AMD usage

```js
// CommonJS
const { JSDOM } = require('jsdom');
const JQuery = require('jquery');
const addJQueryEasing = require('jquery.easing');

const { window } = new JSDOM('');
const jQuery = JQuery(window);
const $ = addJQueryEasing(jQuery);

// AMD
define(['jquery', 'jquery.easing'], function (jQuery, easing) {
	return easing(jQuery);
});
```

## Building and testing

- Clone the repo
- `npm install`
- Make changes
- Test against files in `/examples`
- Build minified version with `npm run build`
