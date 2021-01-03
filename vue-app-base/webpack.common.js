const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name]-[contenthash:8]-bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 10 * 1024,
              name: "images/[name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Vue Webpack",
      template: "public/index.html"
    }),
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify("/")
    }),
    new VueLoaderPlugin()
  ]
};
