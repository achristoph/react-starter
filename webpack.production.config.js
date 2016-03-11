var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve('app'),
  entry: ['./app'],
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: [/\.jsx?$/, /\.js$/],
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/templates/index.production.tmpl.html"
    }),
    new ExtractTextPlugin("style.css")
  ],
  devServer: {
    contentBase: './build',
    colors: true,
    historyApiFallback: true
  },
  devtool: 'eval-source-map'
};