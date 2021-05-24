const purgecssWordpress = require("purgecss-with-wordpress")

module.exports = {
  theme: {
    extend: {},

    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "4.5xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
  },
  purge: {
    content: ["./src/**/*.html", "./src/**/*.twig", "./src/**/*.js"],
    options: {
      safelist: [
        ...purgecssWordpress.safelist,
      ],
    },
  },
  plugins: [],
}
