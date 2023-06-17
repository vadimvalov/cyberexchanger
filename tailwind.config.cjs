/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // content: ["./node_modules/flowbite/**/*.js"] По документации.
  theme: {
    extend: {
      fontFamily: {
        "mont-regular": ["Mont-Regular", "sans-serif"],
        "mont-bold": ["Mont-Bold", "sans-serif"],
        "mont-semibold": ["Mont-SemiBold", "sans-serif"],
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
