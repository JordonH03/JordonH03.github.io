import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				primary: 'hsl(var(--primary))',
				secondary: 'hsl(var(--secondary))',
				card: 'hsl(var(--card))',
				accent: 'hsl(var(--accent))',
				muted: 'hsl(var(--muted))',
				gradient: 'hsl(var(--gradient))',
			},
			height: {
				button: 'var(--button)',
			},
			width: {
				button: 'var(--button)',
			},
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("tailwindcss-animate")
	],
}
export default config
