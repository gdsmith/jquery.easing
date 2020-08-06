'use strict';

module.exports = {
	plugins: ['html', 'markdown'],
	extends: ['eslint:recommended'],
	env: {
		es6: true
	},
	overrides: [
		{
			files: '.eslintrc.js',
			env: {
				node: true
			},
			rules: {
				strict: ['error']
			}
		},
		{
			files: 'example/**',
			env: {
				browser: true
			}
		},
		{
			files: '*.md',
			globals: {
				require: 'readonly',
				define: 'readonly'
			}
		}
	],
	rules: {
		indent: ['error', 'tab'],
		semi: ['error']
	}
};
