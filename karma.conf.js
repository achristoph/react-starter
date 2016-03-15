module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/index.js'
    ],
    exclude: [],
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    preprocessors: {
      'test/index.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          {
            test: [/\.jsx$/, /\.js$/],
            exclude: /node_modules/,
            loader: 'babel',
            query: {presets: ['es2015', 'react']}
          }
        ],
        postLoaders: [
          {
            test: [/\.jsx$/, /\.js$/],
            exclude: [/node_modules/, /test/],
            loader: 'istanbul-instrumenter'
          }
        ]
      },
      watch: true
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
