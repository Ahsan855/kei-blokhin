/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      screens: {
        md: "361px",

        lg: "769px",
      },
      backgroundImage: {
        "bgImage": "url('/src/Assets/Images/bgImage.png')",
      },
    },
  },
  plugins: [],
};
