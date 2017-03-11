import path    from 'path';
import merge   from 'webpack-merge';
import config  from './config';
import pkgInfo from './package.json';

import WebpackShellPlugin  from '@slightlytyler/webpack-shell-plugin';
import HtmlWebpackPlugin   from 'html-webpack-plugin';
import WatchIgnorePlugin   from 'watch-ignore-webpack-plugin';

import webpackConfigBase from './webpack.config.base';

const webpackConfigDev = {
  devtool: 'source-map',
  plugins: [
    new WebpackShellPlugin({
    onBuildStart: ['./node_modules/.bin/bump prerelease'], // need to bump version first before files copied etc
    onBuildExit: []}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src/index.ejs'),
      inject: false,
      title: pkgInfo.name,
      script: config.output.library + '.js'
    }),
    new WatchIgnorePlugin([
      path.join(__dirname, 'package.json'),
      path.join(__dirname, 'test/**/*.spec.js'),
      path.join(__dirname, 'sandbox/**/*')
    ])
  ]
};

export default merge(webpackConfigBase, webpackConfigDev);
