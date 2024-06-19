/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '3.75rem', 
      screens: {
        sm: '100%', 
        md: '100%', 
        xl: '1440px', 
      },
    },
    screens: {
      'phone': '500px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontSize: {
      sm: ['14px'],
      base: ['16px'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: ' hsl(0, 0%, 100%)',
      // Light theme
      light: {
        'very-dark-blue': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      },
      // Dark theme
      dark: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
      }
    },
    extend: {
      boxShadow: {
        'shadow': '0px 0px 5px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
}