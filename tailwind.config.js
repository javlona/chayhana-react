/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        main: "#3100A2",
        main1: "#284A9E",
        secondary: "#FFD700",
      },
      height: {
        screen: "100svh",
      },
    },
  },
  plugins: [],
};
