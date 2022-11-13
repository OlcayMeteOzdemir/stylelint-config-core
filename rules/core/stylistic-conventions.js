module.exports = {
	rules: {
		// ! These rules will deprecate and remove in future StyleLint releases
		// ? https://stylelint.io/user-guide/rules/#enforce-stylistic-conventions

		// Not Handled by Prettier
		'value-keyword-case': [
			'lower',
			{
				ignoreKeywords: [],
				ignoreProperties: [],
				ignoreFunctions: [],
				camelCaseSvgKeywords: false,
			},
		],
		'function-name-case': [
			'lower',
			{
				ignoreFunctions: [],
			},
		],
		'custom-property-empty-line-before': [
			'always',
			{
				except: ['first-nested', 'after-custom-property'],
				ignore: ['after-comment', 'inside-single-line-block'],
			},
		],
		'selector-type-case': [
			'lower',
			{
				ignoreTypes: [],
			},
		],
		'rule-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['after-comment'],
			},
		],
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['first-nested', 'blockless-after-same-name-blockless'],
				ignore: ['after-comment'],
				ignoreAtRules: [],
			},
		],
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['stylelint-commands'],
				ignoreComments: [],
			},
		],
		'comment-whitespace-inside': 'always',

		// Handled by Prettier
		'color-hex-case': 'lower',
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-newline-before': null,
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-max-empty-lines': 0,
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		'function-whitespace-after': 'always',
		'number-leading-zero': 'always',
		'number-no-trailing-zeros': true,
		'string-quotes': [
			'double',
			{
				avoidEscape: true,
			},
		],
		'unit-case': 'lower',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': null,
		'value-list-comma-space-after': 'always',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,
		'property-case': [
			'lower',
			{
				ignoreSelectors: [],
			},
		],
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': [
			'always',
			{
				except: ['first-nested', 'after-declaration'],
				ignore: ['after-comment', 'inside-single-line-block'],
			},
		],
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-trailing-semicolon': [
			'always',
			{
				ignore: [],
			},
		],
		'block-closing-brace-empty-line-before': [
			'never',
			{
				except: [],
			},
		],
		'block-closing-brace-newline-after': [
			'always',
			{
				ignoreAtRules: [],
			},
		],
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-space-after': null,
		'block-closing-brace-space-before': 'always-single-line',
		'block-opening-brace-newline-after': [
			'always-multi-line',
			{
				ignore: [],
			},
		],
		'block-opening-brace-newline-before': null,
		'block-opening-brace-space-after': [
			'always-single-line',
			{
				ignore: [],
			},
		],
		'block-opening-brace-space-before': [
			'always',
			{
				ignoreAtRules: [],
				ignoreSelectors: [],
			},
		],
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-max-empty-lines': 0,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-newline-before': null,
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-case': 'lower',
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': null,
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',
		'at-rule-name-case': 'lower',
		'at-rule-name-newline-after': null,
		'at-rule-name-space-after': 'always',
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		'indentation': [
			'tab',
			{
				baseIndentLevel: 1,
				indentInsideParens: 'once-at-root-twice-in-block',
				indentClosingBrace: false,
				except: [],
				ignore: [],
			},
		],
		'linebreaks': 'unix',
		'max-empty-lines': [
			1,
			{
				ignore: [],
			},
		],
		'max-line-length': [
			100,
			{
				ignore: [],
				ignorePattern: [],
			},
		],
		'no-empty-first-line': true,
		'no-eol-whitespace': [
			true,
			{
				ignore: [],
			},
		],
		'no-extra-semicolons': true,
		'no-missing-end-of-source-newline': true,
		'unicode-bom': 'never',
	},
};
