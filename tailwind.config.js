/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      background: ["#1E2125"],
      textcolor: ["#E9DFCE"],
      button: ["#FFFFFF"],
    },
    fontFamily: {
      primary: ["Dancing Script", "cursive"],
    },
    extend: {
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
