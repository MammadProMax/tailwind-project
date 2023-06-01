/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-def": "rgb(17 24 39)",
        "light-md": "rgb(156 163 175)",
      },
    },
  },
  plugins: [],
};
