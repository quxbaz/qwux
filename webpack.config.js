require('es6-promise').polyfill()
var path = require('path')
var resolve = path.resolve

var config = {

  cache: true,
  devtool: 'source-map',
  entry: resolve(__dirname, 'index'),

  output: {
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          resolve(__dirname, 'index'),
          resolve(__dirname, 'lib'),
          resolve(__dirname, 'tests')
        ],
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },

  resolve: {
    root: resolve(__dirname),
    extensions: ['', '.js'],
    alias: {
      'qux': resolve(__dirname)
    }
  }

}

module.exports = config
