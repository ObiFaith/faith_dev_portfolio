/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				lg: '3.5rem',
			},
		},
		colors: {
			white: colors.white,
			dark: 'var(--dark)',
			primary: 'var(--primary)',
			background: 'var(--background)',
			foreground: 'var(--foreground)',
		},
		extend: {},
	},
	plugins: [],
};
