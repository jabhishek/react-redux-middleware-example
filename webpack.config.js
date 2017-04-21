const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel'
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css-loader?modules&camelCase&localIdentName=[local]--[hash:base64:5]&sourceMap!less-loader?sourceMap')
      },
      {
        test: /\.json$/, loader: 'json'
      }
    ],
    noParse: [ /sinon\.js/ ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tmpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('css/app.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })

  ],
  watch: true
};
