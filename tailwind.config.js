/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        "primary-color-dark": "#21c189",
        "secondary-color": "#ff8900",
      },
    },
  },
  plugins: [require("daisyui")],
};
