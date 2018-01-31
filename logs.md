## ES6 Env
[Youtube: Use Babel & Webpack To Compile ES2015 - ES2017](https://www.youtube.com/watch?v=iWUR04B42Hc)

```
# npm init
# npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-env
# npm install --save-dev babel-polyfill babel-preset-stage-3
```

`webpack.config.js`
```
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
```

`packge.json`
{
  ...
  "scripts": {
    ...
    "build": "webpack",
    "dev": "webpack-dev-server --output-public-path=/dist/"
  },
  ...
}

`.babelrc`
```
{
    "presets": [
        "env", "stage-3"
    ]
}
```