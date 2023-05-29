const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: {
    main: ["./src/index.js"],
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
            filename: './assets/fonts/[name][ext]',
        },
    },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              helperDirs: [path.join(__dirname, "../src/views/helpers")],
              partialDirs: [
                path.join(
                  __dirname,
                  "./src/views/page-blocks",
                  "./src/views/layouts"
                ),
              ],
            },
          },
          {
            loader: "string-replace-loader",
            options: {
              search: "@img",
              replace: "./assets/images",
              flags: "g",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /swiper\.esm\.js/,
        sideEffects: false,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../src/views/pages/index.hbs"),
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
      templateParameters: require("../src/data/data.json"),
      inject: true,
    }),
    new BeautifyHtmlWebpackPlugin(),

    new CopyPlugin({
      patterns: [{ from: "src/images", to: "assets/images" }],
    }),
  ],
};

module.exports = config;
