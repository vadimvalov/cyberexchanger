/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // content: ["./node_modules/flowbite/**/*.js"] По документации.
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
    fontFamily: {
      "mont-regular": ["Montserrat-Regular", "sans-serif"],
      "mont-bold": ["Montserrat-Bold", "sans-serif"],
      "mont-semibold": ["Montserrat-SemiBold", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
