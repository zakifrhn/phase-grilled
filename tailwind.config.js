/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        borderWidth:{
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
          },
          screens: {
            xs: '320px',
            sm: '560px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
    
            // => @media (min-width: 576px) { ... }
        }
      },
    },
    plugins: [],
  }