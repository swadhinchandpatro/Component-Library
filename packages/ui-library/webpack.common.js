const path = require("path");
const dependencies = require("./package.json");

module.exports = {
  entry: path.resolve(__dirname, "index.ts"),
  externals: Object.keys(dependencies),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], // to import files without extension
    alias: {
      '@images': path.resolve(__dirname, 'assets/images'),
      '@videos': path.resolve(__dirname, 'assets/videos'),
      '@fonts': path.resolve(__dirname, 'assets/fonts'),
      '@styles': path.resolve(__dirname, 'styles'),
      '@utils': path.resolve(__dirname, 'utils')
    }
  },
  externals: {
    // Use external version of React
    "react": {
      "commonjs": "react",
      "commonjs2": "react",
      "amd": "react",
      "root": "React"
    },
    "react-dom": {
      "commonjs": "react-dom",
      "commonjs2": "react-dom",
      "amd": "react-dom",
      "root": "ReactDOM"
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          "style-loader", // to inject css into DOM
          "css-loader", // to use import or require for css
          {
            loader: "esbuild-loader",
            options: {
              loader: "css",
              minify: true,
            },
          },
          "sass-loader", // to use import or require scss
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "esbuild-loader", // transpile js code
        options: {
          loader: "jsx",
          target: "es2015",
          jsx: "automatic",
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: "esbuild-loader", // transpile ts code
        options: {
          loader: "tsx",
          target: "es2015",
          jsx: "automatic",
        },
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|otf)$/i, // importing images
        type: "asset/inline",
      },
    ],
  },
};
