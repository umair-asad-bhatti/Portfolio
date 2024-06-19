/** @type {import('tailwindcss').Config} */
import { THEMES } from './src/constants/theme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [THEMES.light, THEMES.dark],
  },
  darkMode: ['class', `[data-theme=${THEMES.dark}]`]
}

