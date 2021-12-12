var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    // need for highlight.js, see https://github.com/isagalaev/highlight.js/issues/895
    noParse: [/autoit.js/],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: "style-loader?insertAt=top!css-loader"
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.less$/,
        loader: "style?insertAt=top!css!less"
      },
      { test: /\.png$/, loader: "url-loader?limit=10000" },
      { test: /\.(jpg|svg)$/, loader: "file-loader" }
    ]
  }
};
