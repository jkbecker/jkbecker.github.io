module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/"],
  theme: {
    fontFamily: {
      display: ['IBM Plex Mono', 'Menlo', 'monospace'],
      body: ['IBM Plex Mono', 'Menlo', 'monospace'],
    },
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};