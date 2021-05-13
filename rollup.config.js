import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

export default [
	{
		input: 'src/addJQueryEasing.mjs',
		output: {
			format: 'cjs',
			sourcemap: true,
			exports: 'default',
			file: 'addJQueryEasing.js'
		},
		plugins: [
			babel({
				babelHelpers: 'bundled'
			})
		]
	},
	{
		input: 'src/jquery.easing.mjs',
		output: {
			name: 'jQueryEasing',
			format: 'umd',
			sourcemap: true,
			file: 'jquery.easing.js'
		},
		plugins: [
			babel({
				babelHelpers: 'bundled'
			})
		]
	},
	{
		input: 'src/jquery.easing.mjs',
		output: {
			name: 'jQueryEasing',
			format: 'umd',
			sourcemap: true,
			file: 'jquery.easing.min.js'
		},
		plugins: [
			babel({
				babelHelpers: 'bundled'
			}),
			terser()
		]
	}
];
