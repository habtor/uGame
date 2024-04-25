/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green2: "#b4e100",
        darkColor: "#0C0B11",
        lightGreen: "#C1C0AA",
      },
    },
  },
  plugins: [],
};
