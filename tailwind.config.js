/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"]
      },
      colors: {
        skill: "#F7F7FB",
        yellow: {
          50: "#FFFDEB",
          100: "#FEFAD7",
          200: "#FEF5AA",
          300: "#FDF181",
          400: "#FDEC59",
          500: "#FCE72D",
          600: "#ECD503",
          700: "#B09F02",
          800: "#746802",
          900: "#3C3601"
        }
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }){
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat" : "no-repeat"
        },
        ".shadow-skill": {
          "filter": "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        }
      };

      addUtilities(utilities)
    })
  ],
}
