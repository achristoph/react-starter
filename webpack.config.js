var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/main.jsx",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',

        query: {
          presets: ['es2015', 'react'],
          "env": {
            "development": {
              "plugins": [["react-transform", {
                "transforms": [{
                  "transform": "react-transform-hmr",
                  "imports": ["react"],
                  "locals": ["module"]
                }]
              }]]
            }
          }
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};