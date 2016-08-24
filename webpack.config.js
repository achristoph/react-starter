var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve('app'),
  entry: ['./app'],
  output: {
    path: path.resolve('build/'),
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
          presets: ['es2015', 'react'],
          env: {
            'development': {
              'plugins': [['react-transform', {
                'transforms': [{
                  'transform': 'react-transform-hmr',
                  'imports': ['react'],
                  'locals': ['module']
                }]
              }]]
            }
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=7000'
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/templates/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  devtool: 'cheap-module-eval-source-map'
};