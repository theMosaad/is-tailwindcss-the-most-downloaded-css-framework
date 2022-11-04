/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
	ignorePatterns: ['**/*.d.ts'],
	extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node', 'prettier'],
	plugins: ['tailwindcss', 'prettier', 'simple-import-sort'],
	rules: {
		// Enforce typesafety for Tailwind CSS classnames
		// https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-custom-classname.md
		'tailwindcss/no-custom-classname': 'error',

		// Avoid contradicting Tailwind CSS classnames
		// https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-contradicting-classname.md
		'tailwindcss/no-contradicting-classname': 'error',

		// Format with prettier before eslint
		// https://github.com/prettier/prettier-eslint
		'prettier/prettier': 'error',

		// Enforce sorting of imports and exports
		// https://github.com/lydell/eslint-plugin-simple-import-sort
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
	},
}
