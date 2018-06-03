const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Extract Plugin Rules
const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

// Config Settings
module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, './src/dist'),
    filename: 'bundle.js',
    publicPath: './src/dist'
  },
  module: {
    rules: [

      // JS Rules
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },

      // SASS Rules
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    extractPlugin
  ],
  devServer: {
    publicPath: "/",
    contentBase: "./src",
    hot: true
  },
};