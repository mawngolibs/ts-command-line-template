const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const meta = require("./package.json");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src")
      }
    ]
  },
  resolve: {
    mainFields: ["main", "module"],
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  output: {
    filename: `${meta.name}.bundle.js`
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BUILD_DATE: new Date().toISOString(), META: {
        name: meta.name,
        description: meta.description,
        version: meta.version,
        author: meta.author,
        license: meta.license,
        homepage: meta.homepage
      }
    }),
    new ESLintPlugin({ extensions: ["tsx", "ts", "js"] })
  ]
};
