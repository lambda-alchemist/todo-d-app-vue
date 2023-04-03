/* eslint-disable no-undef */
/** @type {import('@types/prettier').Config} */
module.exports = {
	semi: false,
	singleQuote: true,
	printWidth: 100,
	trailingComma: "all",
	arrowParens: "avoid",
	editorconfig: true,
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindConfig: "./tailwind.config.js"
}
