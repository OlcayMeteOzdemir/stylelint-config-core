module.exports = {
	rules: {
		'at-rule-allowed-list': null,
		'at-rule-disallowed-list': [
			['charset'],
			{
				message:
					"Encoding shouldn't specify in stylesheet, should specify in HTML via <meta charset='utf-8'> (at-rule-disallowed-list)",
			},
		],
		'at-rule-no-vendor-prefix': true,
		'at-rule-property-required-list': null,
		'color-hex-alpha': 'never',
		'color-named': [
			'never',
			{
				ignore: [],
				ignoreProperties: [],
			},
		],
		'color-no-hex': null,
		'comment-word-disallowed-list': null,
		'declaration-no-important': true,
		'declaration-property-unit-allowed-list': [
			null,
			{
				ignore: [],
			},
		],
		'declaration-property-unit-disallowed-list': null,
		'declaration-property-value-allowed-list': null,
		'declaration-property-value-disallowed-list': [
			{
				'border': ['none'],
				'border-top': ['none'],
				'border-right': ['none'],
				'border-bottom': ['none'],
				'border-left': ['none'],
				'outline': ['none'],
			},
			{
				message:
					"Should use '0' value, instead of 'none' value for border and outline properties (declaration-property-value-disallowed-list)",
			},
		],
		'function-allowed-list': null,
		'function-disallowed-list': null,
		'function-url-no-scheme-relative': true,
		'function-url-scheme-allowed-list': null,
		'function-url-scheme-disallowed-list': null,
		'length-zero-no-unit': [
			true,
			{
				ignore: [],
				ignoreFunctions: [],
			},
		],
		'media-feature-name-allowed-list': null,
		'media-feature-name-disallowed-list': null,
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-value-allowed-list': null,
		'property-allowed-list': null,
		'property-disallowed-list': null,
		'property-no-vendor-prefix': [
			true,
			{
				ignoreProperties: [],
			},
		],
		'rule-selector-property-disallowed-list': null,
		'selector-attribute-name-disallowed-list': null,
		'selector-attribute-operator-allowed-list': null,
		'selector-attribute-operator-disallowed-list': null,
		'selector-combinator-allowed-list': null,
		'selector-combinator-disallowed-list': null,
		'selector-disallowed-list': [
			null,
			{
				splitList: true,
				ignore: [],
			},
		],
		'selector-no-qualifying-type': [
			true,
			{
				ignore: [],
			},
		],
		'selector-no-vendor-prefix': [
			true,
			{
				ignoreSelectors: [],
			},
		],
		'selector-pseudo-class-allowed-list': null,
		'selector-pseudo-class-disallowed-list': null,
		'selector-pseudo-element-allowed-list': null,
		'selector-pseudo-element-disallowed-list': null,
		'unit-allowed-list': [
			null,
			{
				ignoreProperties: {},
				ignoreFunctions: [],
			},
		],
		'unit-disallowed-list': [
			null,
			{
				ignoreProperties: {},
				ignoreMediaFeatureNames: [],
			},
		],
		'value-no-vendor-prefix': [
			true,
			{
				ignoreValues: [],
			},
		],
		'declaration-block-single-line-max-declarations': 1,
		'declaration-property-max-values': null,
		'max-nesting-depth': [
			null,
			{
				ignore: [],
				ignoreAtRules: [],
				ignorePseudoClasses: [],
			},
		],
		'number-max-precision': [
			10,
			{
				ignoreProperties: [],
				ignoreUnits: [],
			},
		],
		'selector-max-attribute': [
			2,
			{
				ignoreAttributes: [],
			},
		],
		'selector-max-class': 4,
		'selector-max-combinators': 4,
		'selector-max-compound-selectors': 4,
		'selector-max-id': [
			0,
			{
				ignoreContextFunctionalPseudoClasses: [],
				message: "Should specify and use 'class' to instead of 'ID' (selector-max-id)",
			},
		],
		'selector-max-pseudo-class': null,
		'selector-max-specificity': [
			null,
			{
				ignoreSelectors: [],
			},
		],
		'selector-max-type': [
			2,
			{
				ignore: [],
				ignoreTypes: [],
			},
		],
		'selector-max-universal': [
			1,
			{
				ignoreAfterCombinators: [],
			},
		],
		'time-min-milliseconds': [
			null,
			{
				ignore: [],
			},
		],
		'alpha-value-notation': [
			'number',
			{
				exceptProperties: [],
			},
		],
		'color-function-notation': 'modern',
		'color-hex-length': 'long',
		'font-weight-notation': [
			'numeric',
			{
				ignore: ['relative'],
			},
		],
		'hue-degree-notation': 'angle',
		'import-notation': 'string',
		'keyframe-selector-notation': 'percentage',
		'media-feature-range-notation': null,
		'selector-not-notation': 'complex',
		'selector-pseudo-element-colon-notation': 'double',
		'comment-pattern': null,
		'custom-media-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message:
					'Custom media name should be lowercase and can contain only lowercase letters [ a-z ], numbers [ 0-9 ] and hypen [ - ] (custom-media-pattern)',
			},
		],
		'custom-property-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message:
					'Custom property name should be lowercase and can contain only lowercase letters [ a-z ], numbers [ 0-9 ] and hypen [ - ] (custom-property-pattern)',
			},
		],
		'keyframes-name-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message:
					'Keyframe name should be lowercase and can contain only lowercase letters [ a-z ], numbers [ 0-9 ] and hypen [ - ] (keyframes-name-pattern)',
			},
		],
		'selector-class-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				resolveNestedSelectors: true,
				message:
					'Class name should be lowercase and can contain only lowercase letters [ a-z ], numbers [ 0-9 ] and hypen [ - ] (selector-class-pattern)',
			},
		],
		'selector-id-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message:
					'ID name should be lowercase and can contain only lowercase letters [ a-z ], numbers [ 0-9 ] and hypen [ - ] (selector-id-pattern)',
			},
		],
		'selector-nested-pattern': null,
		'font-family-name-quotes': 'always-where-recommended',
		'function-url-quotes': [
			'always',
			{
				except: [],
			},
		],
		'selector-attribute-quotes': 'always',
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{
				ignoreShorthands: [],
			},
		],
		'shorthand-property-no-redundant-values': true,
	},
};
