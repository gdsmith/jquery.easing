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
			files: ['.eslintrc.js', 'example/node.js'],
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
			},
			rules: {
				'no-unused-vars': ['error', {
					varsIgnorePattern: '$'
				}]
			}
		}
	],
	rules: {
		indent: ['error', 'tab'],
		semi: ['error'],

		'prefer-const': ['error'],
		'no-var': ['error'],
		'prefer-destructuring': ['error'],
		'object-shorthand': ['error'],
		'object-curly-spacing': ['error', 'always'],
		quotes: ['error', 'single'],
		'quote-props': ['error', 'as-needed'],
		'brace-style': ['error', '1tbs'],
		'prefer-template': ['error']
	}
};
