/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#3d0072",
      },
      fontFamily: {
        sans: ["Cabinet Grotesk"],
        mono: ["Ubuntu"],
        serif: ["Clash Display"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
