const path = require("path");
const meta = require("./package.json");

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
  }
};
