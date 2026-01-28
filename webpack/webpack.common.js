const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry point to the main react file (index.tsx)
  entry: "./src/index.tsx",

  // Tell webpack where to place the bundled source code
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "./build"),
  },
  module: {
    // Specifies webpack should use the babel loader for all
    // ts, js, tsx, jsx files
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/resource",
      },
    ],
  },

  // Allows to leave out extensions when importing
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  // Auto inject bundle.js into the index.html file and place the file
  // in the build folder
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
