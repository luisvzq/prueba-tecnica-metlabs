/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      screens: {
        sm: "540px",
      },
      colors: {
        background: "#0D0D12",
        card: "#1D1B24",
        primary: {
          DEFAULT: "#7B61FF",
          hover: "#6B51EF",
        },
        secondary: {
          DEFAULT: "#00DAD9",
          hover: "#00C4C3",
        },
      },
    },
  },
  plugins: [],
};
