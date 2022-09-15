/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Nunito, sans-serif",
        mono: "Great Vibes, sans-serif"
      },
      colors: {
        white: {
          100: "#FFFFFF",
          200: "#eff2f1"
        },
        rose: {
          300: "#F7F0F2",
          400: "#D1C6C6",
          450: "rgba(271, 240, 242, 1)",
          500: "#D3B7BD",
          800: "#C898BD",
        },
        yellow: {
          800: "#A67D61",
        },
        black: {
          100: "rgb(49, 46, 56)",
          750: "rgba(0,0,0, 0.5)",
          800: "#000000",
        },
      },
    },
  },
  plugins: [],
};
