const path = require("path");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool:"eval-cheap-source-map",
  output: {
    library: {
      type: "commonjs",
    },
    filename: "index.cjs.js",
    publicPath: path.resolve(__dirname, `./dist/`),
  },
});
