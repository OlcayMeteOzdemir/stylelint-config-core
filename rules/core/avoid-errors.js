module.exports = {
	rules: {
		'no-descending-specificity': [
			true,
			{
				ignore: [],
			},
		],
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-values'],
				ignoreProperties: [],
			},
		],
		'font-family-no-duplicate-names': [
			true,
			{
				ignoreFontFamilyNames: [],
			},
		],
		'keyframe-block-no-duplicate-selectors': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': [
			true,
			{
				disallowInList: false,
			},
		],
		'block-no-empty': [
			true,
			{
				ignore: [],
			},
		],
		'comment-no-empty': true,
		'no-empty-source': true,
		'color-no-invalid-hex': true,
		'function-calc-no-unspaced-operator': true,
		'keyframe-declaration-no-important': true,
		'named-grid-areas-no-invalid': true,
		'no-invalid-double-slash-comments': true,
		'no-invalid-position-at-import-rule': [
			true,
			{
				ignoreAtRules: [],
				message:
					'@import rule should be at the top of the document (no-invalid-position-at-import-rule)',
			},
		],
		'string-no-newline': true,
		'no-irregular-whitespace': true,
		'custom-property-no-missing-var-function': true,
		'font-family-no-missing-generic-family-keyword': [
			true,
			{
				ignoreFontFamilies: [],
			},
		],
		'function-linear-gradient-no-nonstandard-direction': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'annotation-no-unknown': [
			true,
			{
				ignoreAnnotations: [],
			},
		],
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [],
			},
		],
		'function-no-unknown': [
			true,
			{
				ignoreFunctions: [],
			},
		],
		'media-feature-name-no-unknown': [
			true,
			{
				ignoreMediaFeatureNames: [],
			},
		],
		'no-unknown-animations': null,
		'property-no-unknown': [
			true,
			{
				ignoreProperties: [],
				ignoreSelectors: [],
				ignoreAtRules: [],
				checkPrefixed: false,
			},
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: [],
			},
		],
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: [],
			},
		],
		'selector-type-no-unknown': [
			true,
			{
				ignore: ['custom-elements'],
				ignoreNamespaces: [],
				ignoreTypes: [],
			},
		],
		'unit-no-unknown': [
			true,
			{
				ignoreUnits: [],
				ignoreFunctions: [],
			},
		],
	},
};
