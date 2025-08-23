/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        museo: ['"MuseoModerno"', "cursive"],
        inter: ['"Inter"', "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(70px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(70px) rotate(-360deg)",
          },
        },

        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        scroll: "scroll 130s linear infinite",
        orbit: "orbit 5s linear infinite",
        "spin-slow": "spinSlow 10s linear infinite",
      },
      screens: {
        xs: { max: "419px" },
        hidebuttons: { max: "958px" },
        custom: "1196px",
       
      },
    },
  },
  plugins: [],
};
