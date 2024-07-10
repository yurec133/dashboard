/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "3xl": "20px",
      "4xl": "25px",
      "5xl": "30px",
      "6xl": "35px",
      "7xl": "55px",
      "8xl": "75px",
      "9xl": "100px",
    },
    extend: {
      borderRadius: {
        custom: '5px',
        '2xl': '20px',
      },
      fontFamily: {
        custom: ["Helvetica", "sans-serif"],
      },
      textColor: {
        slateCustom700: "#333333",
        slateCustom600: "#2D3748",
        slateCustom400: "#A0AEC0",
        slateCustom500: "#323232",
      },
      borderColor: {
        grayCustom400: "#C4C4C4",
        grayCustom500: "#CECECE",
        blackCustom300: "rgba(0, 0, 0, 0.3)",
        blueCustom300: "rgba(39, 135, 230, 0.56)",
        blueCustom400: "#257FD7",
        orangeCustom200: "rgba(255, 173, 173, 0.61)",
      },
      backgroundColor: {
        skyCustom200: "#EBF5FF",
        grayCustom200: "#F6F6F6",
        grayCustom300: "#F9F9F9",
        skyCustom400: "#2787E6",
        orangeCustom100: "#FFF6F7",
        blueCustom200: "#2684FF"
      },
    },
  },
  plugins: [],
};
