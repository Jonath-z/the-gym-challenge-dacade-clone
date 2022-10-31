/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(63 66 70)",
        "gradient-violet": "#9092fb",
        "gradient-sky-blue": "#86b5ef",
        "gradient-magnatat": "#7bdde2",
        "hero-paragraph-color": "#676767",
      },
      fontFamily: {
        primary: "GraphikRegular",
        "primary-semi-bold": "GraphikSemibold",
        "primary-medium": "GraphikMedium",
      },
      backgroundImage: {
        "hero-bg":
          "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%);",
        "gradien-logo":
          "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%);",
        "gradient-logo-right":
          "radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(123,221,226,0) 100%);",
        "developement-bg":
          "radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(127,208,231,0) 100%);",
      },
    },
  },
  plugins: [],
};
