module.exports = {
	extends: [`eslint:recommended`, `plugin:import/recommended`, `next/core-web-vitals`],
	plugins: [`import`],
	env: {
		es6: true,
		node: true,
	},
	settings: {
		react: {
			version: `detect`,
		},
	},
	rules: {
		"import/no-duplicates": `error`,
		"import/no-named-as-default": `off`,
		"import/no-unresolved": `off`,
		"import/order": [
			`warn`,
			{
				groups: [
					[`builtin`, `external`],
					[`object`, `unknown`, `type`],
					[`internal`, `parent`, `index`, `sibling`],
				],
				pathGroups: [{pattern: `~/**`, group: `internal`}],
				pathGroupsExcludedImportTypes: [`type`],
				"newlines-between": `always`,
				alphabetize: {order: `asc`, caseInsensitive: true},
				warnOnUnassignedImports: true,
			},
		],
		"prefer-const": `off`,
		"no-console": [`warn`, {allow: [`info`, `warn`, `error`]}],
		"no-constant-condition": [`error`, {checkLoops: false}],
		"no-control-regex": `off`,
		"no-empty": [`warn`, {allowEmptyCatch: true}],
		"no-mixed-spaces-and-tabs": [`warn`, `smart-tabs`],
		"no-unused-vars": [`warn`, {ignoreRestSiblings: true}],
		quotes: [`warn`, `backtick`],
	},
	overrides: [
		{
			files: [`**/*.ts`, `**/*.tsx`],
			parser: `@typescript-eslint/parser`,
			parserOptions: {
				project: `./tsconfig.json`,
			},
			plugins: [`@typescript-eslint`],
			extends: `plugin:@typescript-eslint/recommended`,
			rules: {
				"@typescript-eslint/ban-ts-comment": `warn`,
				"@typescript-eslint/consistent-type-imports": `warn`,
				"@typescript-eslint/explicit-module-boundary-types": `off`,
				"@typescript-eslint/no-empty-function": `off`,
				"@typescript-eslint/no-explicit-any": `off`,
				"@typescript-eslint/no-extra-semi": `off`,
				"@typescript-eslint/no-non-null-assertion": `off`,
				"@typescript-eslint/no-unnecessary-condition": `warn`,
				"@typescript-eslint/no-unused-vars": [`warn`, {ignoreRestSiblings: true}],
				"@typescript-eslint/no-var-requires": `off`,
				"@typescript-eslint/quotes": [`warn`, `backtick`],
				"prefer-const": `off`,
				quotes: `off`,
			},
		},
		{
			files: [`**/*.jsx`, `**/*.tsx`],
			plugins: [`react`],
			extends: [`plugin:react/recommended`, `plugin:react/jsx-runtime`],
			rules: {
				"react/button-has-type": `warn`,
				"react/display-name": `warn`,
				"react/jsx-boolean-value": `warn`,
				"react/jsx-curly-brace-presence": `warn`,
				"react/jsx-no-useless-fragment": [`warn`, {allowExpressions: true}],
				"react/no-unused-prop-types": `warn`,
				"react/no-unknown-property": `off`,
				"react/prop-types": `off`,
				"react/self-closing-comp": `off`,
			},
		},
		{
			files: [`**/*.ts`],
			rules: {
				"@typescript-eslint/explicit-module-boundary-types": `warn`,
			},
		},
	],
}
