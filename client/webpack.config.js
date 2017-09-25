var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        include: __dirname + '/app',
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('!css!sass')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('public/styles.css', {
      allChunks: true
    })
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true
  },
}