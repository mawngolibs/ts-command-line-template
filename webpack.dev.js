const config = require("./webpack.config");

module.exports = {
  ...config,
  mode: "development",
  output: {
    filename: `index.js`
  }
};
