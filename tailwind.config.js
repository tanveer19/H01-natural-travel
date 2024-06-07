/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    colors: {
      "primary-color": "#059669",
      "secondary-color": "#f97316",
      "custom-color-1": "#D3E0DC",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
