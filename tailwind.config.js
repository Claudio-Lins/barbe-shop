module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: '376px',
      // => @media (min-width: 375px) { ... }

      i8: '414px',
      // => @media (min-width: 414px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'barber-shop-orange': '#FCA92C',
        'barber-shop-darkGray': '#242424',
        'barber-shop-mediumGray': '#313131',
        'barber-shop-lightGray': '#565058',
      },
    },
  },
  plugins: [],
}
