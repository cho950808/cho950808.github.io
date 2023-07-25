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
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1800px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {},
    extend: {
      lineHeight: {
        none: '1',
        tight: ['25px'],
        snug: ['30px'],
        normal: ['35px'],
        relaxed: ['40px'],
        loose: ['50px'],
      },
      fontFamily: {
        orb: ['Orbitron', 'sans-serif'],
      },
      spacing: {
        '5px': '5px',
        '15rem': '15rem',
      },
      gradientColorStops: {
        'center-gradient': 'rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%',
      },
    },
  },
  plugins: [],
}
