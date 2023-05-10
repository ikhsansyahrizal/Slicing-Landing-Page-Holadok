const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-Source_Sans_Pro)"],
        mono: ["var(--font-DM_Sans)"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".shadow-quote": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.3)",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
