const webpack             = require('webpack');
const path                = require('path');
const chalk               = require('chalk');
const ProgressBarPlugin   = require('progress-bar-webpack-plugin');
const SemverPlugin        = require('semver-extended-webpack-plugin');
const BuildNotifierPlugin = require('webpack-build-notifier');
const CopyWebpackPlugin   = require('copy-webpack-plugin');

const libraryName         = 'messenger';
const outputFile          = libraryName + '.js';
const outputPath          = path.join(__dirname, 'lib');
const publicPath          = path.join(__dirname, 'examples');

var config = {
  entry: path.join(__dirname, 'index.js'),
  devtool: 'source-map',
  stats: {
    warnings: false
  },
  output: {
    path: outputPath,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {test: /(\.jsx|\.js)$/, loaders: ['babel', 'eslint-loader'], exclude: /(node_modules)/},
      {test: /\.json?$/, loaders: ['json-loader'], exclude: /node_modules/},
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: [
    new ProgressBarPlugin({
      format: chalk.yellow.bold('Building Development [:bar] ') + chalk.green.bold(':percent') + chalk.bold(' (:elapsed seconds)'),
      clear: true,
      summary: true
    }),
    new SemverPlugin({
      files: [path.resolve(__dirname, 'package.json')],
      incArgs: ['prerelease','build']
    }),
    new BuildNotifierPlugin({
      title: 'CD Messenger',
      logo: path.resolve(__dirname, 'src/assets/cd-logo.png'),
      suppressSuccess: true
    }),
    new CopyWebpackPlugin([
      {from: './lib/messenger.*', to: path.join(publicPath)},
    ]),

  ]

};

module.exports = config;
