/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif']
    },
    extend: {
      colors: {
        'main-blue': {
          50: '#F4FAFF',
          100: '#E9F5FF',
          200: '#DBE9F4',
          300: '#C0D9E8',
          400: '#ADD8E6',
          500: '#8BB8CC',
          600: '#6E98B2',
          700: '#557699',
          800: '#3A517E',
          900: '#21376E',
          950: '#1A2B5C',
        },
        'main-gold': {
          50: '#FFF9E5',
          100: '#FFF5D8',
          200: '#FEEFC4',
          300: '#FDE89C',
          400: '#FCD16A',
          500: '#FBB831',
          600: '#F9A924',
          700: '#F69219',
          800: '#E97717',
          900: '#D65F14',
          950: '#B44810',
        },
      }
    },
  },
  plugins: [],
}
