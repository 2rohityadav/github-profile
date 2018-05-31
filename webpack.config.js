// entry --> output
const path = require("path");

// console.log("my dirname path",__dirname)

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  //module rule
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader", // load the style into the DOM
          "css-loader", // take the css & convert to js
          "sass-loader" // load the sass file & also have node-sass which converts scss -> css file
        ]
      }
    ]
  },
  performance: { hints: false },
  devtool: "cheap-module-eval-source-map",
  // using this devtool get the exeact location of error occured,
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
