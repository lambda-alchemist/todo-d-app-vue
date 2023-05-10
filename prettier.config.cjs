/* eslint-disable no-undef */
/** @type {import('@types/prettier').Config} */
module.exports = {
	endOfLine: 'lf',
	tabWidth: 4,
	useTabs: true,
	printWidth: 100,
	singleAttributePerLine: true,
	trailingComma: 'all',
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'always',
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindConfig: './tailwind.config.cjs',
}
