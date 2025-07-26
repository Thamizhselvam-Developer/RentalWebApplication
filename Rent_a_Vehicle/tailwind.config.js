// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         montserrat: ["Montserrat", 'sans-serif'],
//         syncopate: ['"Syncopate"', 'sans-serif'o
// ],
//         boldonse:["Boldonse",'sans-serif']
//       },
//     },
//   },
//   plugins: [],
// }







/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // Centers the container
      padding: {
        DEFAULT: "1rem", // Default padding for smaller screens
        sm: "2rem",
        lg: "2rem", // Increased padding on laptop screens
        xl: "3rem", // Further increase on extra-large screens
        "2xl": "4rcem", // Maximum padding for very large screens
      },
    },
    extend: {
      colors: {
        primary: "#FF4545",
        secondary: "#fe019a",
        background:"#F5F5F5",
        main: "#F5EEDC",
        backgroundLight: "#f3f4f6", // Light mode background
        backgroundDark: "#1d222a", // Dark mode background
        textLight: "#1a1a1a", // Light mode text
        textDark: "#e0e0e0", // Dark mode text
      },
      // animation: {
      //   'slide-left-right': 'slide-left-right 17s ease-in-out infinite  ', // Adjust duration and timing as needed
      // },
      // keyframes: {
      //   'slide-left-right': {
      //     '0%, 100%': { transform: 'rotate(5deg)' },
      //     '50%': { transform: 'rotate(2deg)' }, // Adjust distance as needed
      //   },
      // },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
        display:["Rosario"],
        main:["Geologica"],
        Caveat : ["Caveat"],// Clean and modern sans-serif fonts
        serif: ["Merriweather", "serif"], // Serif for formal text
        mono: ["Fira Code", "monospace"], // Monospace for code snippets
      },
      fontSize: {
        xs: "0.75rem", // Extra small (12px)
        sm: "0.875rem", // Small (14px)
        base: "1rem", // Base (16px)
        lg: "1.125rem", // Large (18px)
        xl: "1.25rem", // Extra large (20px)
        "2xl": "1.5rem", // 2x large (24px)
        "3xl": "1.875rem", // 3x large (30px)
        "4xl": "2.25rem", // 4x large (36px)
        "5xl": "3rem", // 5x large (48px)
        "6xl": "3.75rem", // 6x large (60px)
      },
      spacing: {
        128: "32rem", // Custom spacing (512px)
        144: "36rem", // Custom spacing (576px)
      },
      borderRadius: {
        sm: "0.125rem", // Small radius
        DEFAULT: "0.25rem", // Default radius
        md: "0.375rem", // Medium radius
        lg: "0.5rem", // Large radius
        xl: "0.75rem", // Extra large radius
        "2xl": "1rem", // 2x large radius
        full: "9999px", // Fully rounded
      },
      screens: {
        xs: "480px", // Extra small screens
      },
    },
  },
  plugins: [],
};