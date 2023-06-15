/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    container: {
      padding: { DEFAULT: "1.5em" },
    },
    screens: {
      sm: { min: "640px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      max_sm: { max: "640px" },
    },
    extend: {
      dropShadow: {
        feature: " 4px 4px 8px 0px #62626240",
      },
      colors: {
        ash: "#f5f5f5",
        blue: "#02378B",
        grey: "#808080",
      },
    },
  },
  plugins: [],
};
