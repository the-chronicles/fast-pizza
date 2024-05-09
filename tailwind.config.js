/** @type {import('tailwindcss').Config} */
/* eslint-disable */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      colors: {
        pizza: "#123456",
      },
    },
  },
  utilities: {
    'focus:ring-gradient': ['responsive'],
  },
  plugins: [],
};
