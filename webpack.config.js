var path = require('path')
var abs = (...args) => path.resolve(__dirname, ...args)

module.exports = (env='production') => ({

  // mode: env,
  entry: abs('src/index.ts'),
  devtool: 'source-map',

  output: env === 'production' ? {
    filename: 'qwux.js',
    path: abs('lib/'),
    library: 'qwux',
    libraryTarget: 'umd',
  } : {},

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [abs('src')],
      },
    ],
  },

  resolve: {
    alias: {
      'qwux': abs(__dirname),
    },
  },

})
