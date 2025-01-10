/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "login-bg": "#FBFBEA",
        "login-button": "#56F188",
        "drop-shadow": "rgba(102, 96, 92, 0.12)",
        "button-font":"#171A1B"
      },
      fontFamily: {
        Pretendard: ["Pretendard", "sans-serif"],
      },
      dropShadow: {
        custom: "0 6px 12px rgba(102, 96, 92, 0.12)",
      },
    },
  },
  plugins: [],
};
