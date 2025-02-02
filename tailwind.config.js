/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "login-bg": "#FBFBEA",
        "gray-03": "#F5F4F2",
        "drop-shadow": "rgba(102, 96, 92, 0.12)",
        "gray-01": "#171A1B",
        gray: "#DCDCDD",
        green: "#11B182",
        "gray-button": "#BEC1C3",
        "agree-black": "#2C2C2E",
        "agree-gray": "#3A3A3C",
        "gray-04": "#8A8A8E",
        "button-color": "#D9E7DD",
        "Mono-Navy": "#505D65",
        "gray-05": "#E7E7E7",
      },
      fontFamily: {
        Pretendard: ["Pretendard", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      dropShadow: {
        custom: "0 6px 12px rgba(102, 96, 92, 0.12)",
      },
      borderRadius: {
        "60px": "60px",
      },
    },
  },
  plugins: [],
};
