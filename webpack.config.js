//const mode = process.env.NODE_ENV || "development";
let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  // entry: './src/index.js',
  // output: {
  //   filename: 'myBundle.js',
  //   path: path.resolve(__dirname, 'dist')
  // },

  // entry not required if using `src/index.js` default
  // output not required if using `dist/main.js` default

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [       
          MiniCssExtractPlugin.loader, 
          "css-loader",   
          "postcss-loader", 
          "sass-loader",
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

  plugins: [new MiniCssExtractPlugin()],

  target: target, //"web" delete this once done building to make browserslist work. 
  devtool: "source-map",

  // required if using webpack-dev-server
  devServer: {
    port: 8080,
    contentBase:'dist',
    hot: true,
  },
};
