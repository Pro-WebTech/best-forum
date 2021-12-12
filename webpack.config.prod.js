var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("styles.css")
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
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!less'
        )
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      { test: /\.png$/, loader: "url-loader?limit=10000" },
      { test: /\.(jpg|svg)$/, loader: "file-loader" }
    ]
  }
};
