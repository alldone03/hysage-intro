// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#ffff00",
          200: "#888883",
        },
      },
    },
    fontFamily: {
      roboto: ["Roboto Flex", "sans-serif"],
    },
  },
  plugins: [
    "prettier",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-style-order",
  ],
};
