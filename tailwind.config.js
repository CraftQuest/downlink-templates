module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'stars-bg': "url('/images/background-stars.svg')"
      }),
      fontFamily: {
        logo: ['"Rubik Mono One"', "sans-serif"],
        tagline: ['"Space Mono"', "sans-serif"],
        title: ['"PT Sans Narrow"', "sans-serif"],
        copy: ["Raleway", "sans-serif"]

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
