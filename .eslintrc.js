'use strict';

module.exports = {
	plugins: ['html', 'markdown'],
	extends: ['eslint:recommended'],
	env: {
		es6: true
	},
	parserOptions: {
		sourceType: 'module'
	},
	overrides: [
		{
			files: '.eslintrc.js',
			env: {
				node: true
			},
			parserOptions: {
				sourceType: 'script'
			},
			rules: {
				strict: ['error']
			}
		},
		{
			files: 'example/**',
			env: {
				browser: true
			},
			parserOptions: {
				sourceType: 'script'
			},
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
