const path = require("path");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;

const shared = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        // to minify js file
        target: "es2015",
      }),
    ],
  },
  plugins: [
    new StatoscopeWebpackPlugin({})
  ],
};

const commonJsBuild = {
  ...shared,
  output: {
    library: {
      type: "commonjs",
    },
    filename: "index.cjs.js",
    publicPath: path.resolve(__dirname, `./dist/`),
  },
};

const umdBuild = {
  ...shared,
  output: {
    library: {
      type: "umd",
      name: "umd",
      umdNamedDefine: true,
    },
    filename: "bundle.umd.js",
    publicPath: path.resolve(__dirname, `./dist/`),
  },
};

const configs = [commonJsBuild, umdBuild];

module.exports = configs.map((config) => merge(commonConfig, config));
