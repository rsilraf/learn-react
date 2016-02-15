var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

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
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
                // CSS - Styles
                {
                  test: /\.css$/,
                  loaders: ['style', 'css?modules'],
                  include: PATHS.src
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
              // Hot Module Replacement
              new webpack.HotModuleReplacementPlugin()
  ],
  debug: true,
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./pub",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};

module.exports = config;
