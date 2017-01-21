import webpack             from 'webpack';
import path                from 'path';
import chalk               from 'chalk';

import BuildNotifierPlugin from 'webpack-build-notifier';
import HtmlWebpackPlugin   from 'html-webpack-plugin';
import ProgressBarPlugin   from 'progress-bar-webpack-plugin';
import WebpackShellPlugin  from '@slightlytyler/webpack-shell-plugin';
import BabiliPlugin        from 'babili-webpack-plugin';

const isProd      = (process.env.ENV === 'production') || (process.env.NODE_ENV === 'production');
const isDev       = !isProd;

const libraryName = 'messenger';
const outputFile  = isProd ? libraryName + '.min.js' : libraryName + '.js';
const outputPath  = path.join(__dirname, 'lib');
const publicPath  = path.join(__dirname, 'examples');

webpackConfig = {
  entry: path.join(__dirname, 'index.js'),
  stats: {
    warnings: false,
    silent: true
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
      format: chalk.yellow.bold('Building [:bar] ') + chalk.green.bold(':percent') + chalk.bold(' (:elapsed seconds)'),
      clear: true,
      summary: true
    }),
    new BuildNotifierPlugin({
      title: 'CD Messenger',
      logo: path.resolve(__dirname, 'src/assets/cd-logo.png'),
      suppressSuccess: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src/index.ejs'),
      inject: false,
      title: 'CD Messenger',
      script: outputFile
    })
  ]

};

if (isDev) {
  webpackConfig.devtool = 'source-map';
  webpackConfig.plugins.push(new WebpackShellPlugin({
    onBuildStart: ['./node_modules/.bin/bump prerelease'], // need to bump version first before files copied etc
    onBuildExit: []
  }));
}

if (isProd) {
  webpackConfig.plugins.push(new BabiliPlugin({}));
}

export default webpackConfig;
