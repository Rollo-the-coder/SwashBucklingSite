const mode = process.env.NODE_ENV || "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  plugins: [new MiniCssExtractPlugin()],

  // entry not required if using `src/index.js` default
  // output not required if using `dist/main.js` default

  module: {
    rules: [
      

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [       
          MiniCssExtractPlugin.loader, 
          "css-loader",    
          "sass-loader",
          "postcss-loader",
        ],
      },


      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
        },
      },
      
    ],
  },

  devtool: "source-map",

  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
  },
};
