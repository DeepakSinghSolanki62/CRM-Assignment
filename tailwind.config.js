/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./public/**/*.html"],
  content: ["./public/**/*.{html,js}"], 

  theme: {
    extend: {

      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
      },
      colors: {
        primary: {
          dark: "#256A9E",
          light: "#EAF1F6",
        },
        secondary: {
          light: "#ECECFE",
          light2: "#E0F7FA",
          dark: "#E0F7FA",
        },
        gray: {
          light: "#A5A5A5",
          light2: "#4B5768",
          dark: "#9197B3",
        },
        red: {
          light: "#CC5F5F",
          dark: "#DA1414",
        },
        green: {
          light: "#E9FFEF",
          dark: "#409261",
        },
        orange: {
          light: "#FFF9EB",
          dark: "#FFB80F",
        
        },
        blue: {
          light: "#E9F0FF",
          dark: "#58A5DF",
        },
        purple: {
          light: "#E9EDFF",
          dark: "#0C2499",
        },
      },
    },
  },
  plugins: [],
};
