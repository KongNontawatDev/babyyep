import type { Config } from "tailwindcss";
const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		container: {
			padding: "1rem",
			center:true,
		},
		// 	extend: {
		// 		fontFamily: {
		// 			serif: ['var(--body)'],
		// 			sans: ['var(--display)'],
		// 		},
		// 	},
	},
	plugins: [
	],
};
export default config;
