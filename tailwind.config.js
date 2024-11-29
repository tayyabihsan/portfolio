/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#F87E07',
        dark: '#191B21',
        light: '#E4E4E4'
      },
      fontSize: {
        '2xl': 'clamp(50px, 5vw, 65px)',
        xl: 'clamp(45px, 5vw, 56px)',
        lg: '30px',
        md: 'clamp(24px, 5vw, 28px)',
        sm: '20px',
        xs: '18px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        futura: ['Futura Bk BT'],
        opensans: [ 'Open Sans, sans-serif'],
        
      }
    },
  },
  plugins: [],
}

