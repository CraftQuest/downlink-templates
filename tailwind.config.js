module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'stars': "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(/images/background-stars.gif)"
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
