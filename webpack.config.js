const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 9527
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$ /,
        loader:ExtractTextPlugin.extract(['css'])
      },
      {
        test: /\.(sass|scss)$ /,
        loader:ExtractTextPlugin.extract(['css','sass'])
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin('css/app.css')
  ]
}