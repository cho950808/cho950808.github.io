const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './tmp/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      puradak: ['PuradakGentleGothicR', 'sans-serif'],
      maruRegular: ['MaruBuri', 'sans-serif'],
      maruSemiBold: ['MaruBuriSemiBold', 'sans-serif'],
      maruBold: ['MaruBuriBold', 'sans-serif'],
      maruLight: ['MaruBuriLight', 'sans-serif'],
      maruExtraLight: ['MaruBuriExtraLight', 'sans-serif'],
    },
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
      'red-rgba': 'rgba(170, 12, 12, 0.90)',
      'pink-rgba': 'rgba(255, 18, 92, 0.9)',
      'blue-rgba': 'rgba(56, 67, 168, 0.9)',
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
    extend: {
      animation: {
        parallaxZoom: 'parallaxZoom 40s infinite alternate ease-in-out',
      },
      keyframes: {
        parallaxZoom: {
          '0%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.05) translateY(-10px)' },
          '100%': { transform: 'scale(1.1) translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
