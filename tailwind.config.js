/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#21c189",
        "secondary-color": "#ff8900",
        "custom-color-1": "#D3E0DC",
      },
    },
  },
  plugins: [require("daisyui")],
};
