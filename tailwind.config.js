/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {

          "primary": "#05AF5D",

          "secondary": "#00BB9D",

          "accent": "#0094A3",

          "neutral": "#2F4858",

          "base-100": "#fcfcfd",

          "info": "#00B4E7",

          "success": "#17975b",

          "warning": "#fcd331",

          "error": "#ef6b8a",
        },
      },
      "business"
    ],
  },
  plugins: [require("daisyui")],
}

