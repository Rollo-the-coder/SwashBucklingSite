const mode = process.env.NODE_ENV || "development";

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  // entry not required if using `src/index.js` default
  // output not required if using `dist/main.js` default

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
        },
        test: /\.scss$/i,
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader",
        ],
      },
    ],
  },

  devtool: "source-map",

  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
  },
};