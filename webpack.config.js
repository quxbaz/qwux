var path = require('path')
var abs = (...args) => path.resolve(__dirname, ...args)

modue.exports = (env='production') => ({

  entry: abs('index.js'),

  output:{
    filename: 'qwux.js',
    library: 'qwux',
    path: abs('lib/'),
    libraryTarget: 'umd',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        include: [abs('src')],
      },
    ],
  },

  resolve: {
    alias: {
      'qwux': resolve(__dirname)
    },
  },

})
