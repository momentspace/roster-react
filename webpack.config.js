var webpack = require('webpack')

module.exports = {
  entry: 'index.js',
  output: {
    path: './',
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel',
          'react-hot'
        ],
        include: 'index.js',
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss'
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    port: 4000,
    inline: true,
    historyApiFallback: true
  }
}
