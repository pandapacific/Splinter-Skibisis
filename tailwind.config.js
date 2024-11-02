/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'Md': '901px',
      'lg': '1024px',
      'xl': '1280px',
      '1.5xl':'1400px',
      '2xl': '1440px',
      '3xl': '1536px',
      '4xl': '2560px',
    },
    extend: {
      borderRadius: {
        'Lg': '10px;'
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        '4-auto': 'repeat(4, minmax(0, auto))',
      },

      fontFamily:{
        'Inknut-Antiqua': ['Inknut Antiqua', 'sans-serif'],
        'Aoboshi-One': ['Aoboshi One', 'serif'],
        'Inter': ['Inter', 'sans-serif'],
      },

    },

  },

  plugins: [],

}