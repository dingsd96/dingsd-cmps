var path = require('path')

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader', // loader: '' or loaders: []
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {},
    extensions: ['*', '.js', '.vue', '.json'] // 默认为["", ".webpack.js", ".web.js", ".js"]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8006
  },
  performance: { // 性能  // https://www.webpackjs.com/configuration/performance/
    hints: 'warning' // 资源超过 250kb 的时候给出的提示 options: false | "error" | "warning"
  },
  devtool: '#eval-source-map' // https://www.webpackjs.com/configuration/devtool/
}
