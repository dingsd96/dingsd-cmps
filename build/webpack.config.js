const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

// https://www.webpackjs.com/
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'build.js',
    chunkLoadTimeout: 120000 // default 120000
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
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

        test: /\.sass$/,
      
        loaders: ['style', 'css', 'sass']
      
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
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json'] // default ["", ".webpack.js", ".web.js", ".js"]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8006
  },
  performance: {
    maxEntrypointSize: 8 * 1024 * 1024 * 10, // default 250000. size:byte
    maxAssetSize: 8 * 1024 * 1024 * 10,
    hints: 'warning' // 资源超过 maxAssetSize 的时候给出的提示 options: false | "error" | "warning"
  },
  devtool: '#eval-source-map'
}
