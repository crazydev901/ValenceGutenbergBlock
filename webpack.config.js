const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

const isProd = process.env.NODE_ENV === "production"

const devOnlyEntry = ["./scripts/live-reload.js"]

const prodOnlyEntry = []

const entry = ["./styles/index.css", "./scripts/index.js", ...(isProd ? prodOnlyEntry : devOnlyEntry)]

module.exports = {
  mode: isProd ? "production" : "development",
  context: path.join(__dirname, "src"),
  entry,
  output: {
    path: path.resolve(__dirname, "src/wp-content/themes/test-theme/dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // modules: true,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: "file-loader",
        options: { outputPath: "images" },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: { outputPath: "fonts" },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
}
