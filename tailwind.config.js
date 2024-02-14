/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      test: "#F28585",
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
        worksans: ["Work Sans"],
      },
    },
  },
  plugins: [],
};
