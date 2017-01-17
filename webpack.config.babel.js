import webpack             from 'webpack';
import path                from 'path';
import chalk               from 'chalk';

import ProgressBarPlugin   from 'progress-bar-webpack-plugin';
import SemverPlugin        from 'semver-extended-webpack-plugin';
import BuildNotifierPlugin from 'webpack-build-notifier';
import CopyWebpackPlugin   from 'copy-webpack-plugin';

const libraryName = 'messenger';
const outputFile  = libraryName + '.js';
const outputPath  = path.join(__dirname, 'lib');
const publicPath  = path.join(__dirname, 'examples');

webpackConfig = {
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
    rules: [
      {test: /(\.jsx|\.js)$/, loaders: ['babel-loader', 'eslint-loader'], exclude: /(node_modules)/}
    ]
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
export default webpackConfig;
