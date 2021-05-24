const { borwserlist: browsers } = require("./package.json")

module.exports = {
  plugins: [
    require("postcss-preset-env")({
      browsers,
    }),
    require("tailwindcss")("./tailwind.config.js"),
    require("cssnano")({
      preset: "default",
    }),
  ],
}
