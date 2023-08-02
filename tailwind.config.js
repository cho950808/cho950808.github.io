const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#00C2FF',
      secondary: '#FEC007',
      accent: '#FF7201',
      info: '',
      warning: '',
      danger: '',
      light: '',
      dark: '',
      'black-rgba': 'rgba(17, 24, 39, 0.95)',
    },
    screens: {
      xs: '501px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1800px',
    },
    fontSize: {
      sm: ['13px'],
      tiny: ['14px'],
      base: ['15px'],
      lg: ['16px'],
      xl: ['17px'],
      '1xl': ['20px'],
      '2xl': ['24px'],
      '3xl': ['30px'],
      '4xl': ['40px'],
      '5xl': ['52px'],
    },
    extend: {},
  },
  plugins: [],
}
