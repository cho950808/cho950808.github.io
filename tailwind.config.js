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
    fontSize: {},
    extend: {},
  },
  plugins: [],
}
