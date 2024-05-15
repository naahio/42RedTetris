/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontSize: {
          ss: '0.5rem',
          sm: '0.8rem',
          base: '1rem',
          xl: '1.25rem',
          '2xl': '1.563rem',
          '3xl': '1.953rem',
          '4xl': '2.441rem',
          '5xl': '3.052rem',
      },
      screens: {
          'sx': '380px',
          'sm': '640px',
          'md': '768px',
          'tx': '800px',
          'lg': '1024px',
          'hl': '1141px',
          'xl': '1280px',
          '2xl': '1536px',
          '3xl': '2000px',
      },
      extend: {
        colors:{
          white: '#FFFFFF',
          darkBlue0: '#0F1621',
          darkBlue1: '#121C2D',
          darkBlue2: '#17243B',
          darkBlue3: '#1F304C',
          darkBlue4: '394762',
          darkYellow: '#F2BE5A',
          lightRed: '#F3465A',
          lightGreen: '#6ADDB2',
          lightBlue: '51A9E3',
          lightGray: '#CCCCCC',
          lightOrange: '#FF7A00',
          lightGray: '#eef2ff',
          sidebar:'#606B85',
          joinBlue: '#51A9E3',
        }
      }
  },
  plugins: [],
}