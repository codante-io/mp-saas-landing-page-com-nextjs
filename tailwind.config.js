/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: "Ubuntu",
    },
    extend: {
      keyframes: {
        blur: {
          "0%": { filter: "blur(0px)" },
          "100%": { filter: "blur(4px)" },
        },
      },
      animation: {
        blur: "blur 0.5s linear forwards",
      },
    },
  },
  plugins: [],
};
