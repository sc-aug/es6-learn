var path = require('path')

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'stage-3']
      }
    }]
  },
  devServer: {
    host: '0.0.0.0',
    port: '4000',
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  }
}