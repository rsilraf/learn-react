var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src/'),
  pub: path.join(__dirname, 'pub/')
};

var config = {
  target:  'web',
  cache:   true,
  entry:   { app: PATHS.src },
  resolve: { extensions: ['', '.js', '.jsx'] },
  output: {
    path: PATHS.pub,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
                // CSS - Styles
                {
                  test: /\.css$/,
                  loader: ExtractTextPlugin.extract('style', 'css?modules'),
                  include: PATHS.src,
                  exclude: /node_modules/
                },

                // JSX
                {
                  test: /\.jsx?$/,
                  loaders: ['babel?cacheDirectory'],
                  include: PATHS.src,
                  exclude: /node_modules/
                }
    ]
  },
  plugins: [
              // Html Index
              new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(PATHS.src, 'index.html')
              }),
              // Banner
              new webpack.BannerPlugin("Daniel Stanzani"),
              // Uglify + Extract CSS + Order
              new webpack.optimize.OccurenceOrderPlugin(),
              new webpack.optimize.UglifyJsPlugin(),
              new ExtractTextPlugin("style.css"),
              //new ExtractTextPlugin("[name]-[hash].css")
  ]
};

module.exports = config;
