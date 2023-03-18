module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#134e4a',
              '&:hover': {
                color: '#0f766e',
              },
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};