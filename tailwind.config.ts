import type { Config } from "tailwindcss"
import daisyui from "daisyui"

const config: Config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  		},
  	}
  },
  plugins: [
    daisyui,
],
  daisyui: {
    themes: [
      {
        "ascension": {
          "primary": "#e6eed8",
          "secondary": "#ccd48f",
          "accent": "#f2de79",
          "neutral": "#eeeeee",
          "base-100": "#191303",
        }
      },
      {
        "escaper": {
          "primary": "#040402",
          "secondary": "#03265d",
          "accent": "#501c83",
          "neutral": "#eeeeee",
          "base-100": "#c9ddff",
        }
      }
    ]
  }
}
export default config
