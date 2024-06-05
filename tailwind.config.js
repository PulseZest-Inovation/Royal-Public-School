/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',  // Custom primary color
        secondary: '#2d3748',  // Custom secondary color
        accent: '#38b2ac',  // Custom accent color
      },
      spacing: {
        '128': '32rem',  // Custom spacing
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],  // Custom font family
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

