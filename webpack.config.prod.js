import merge   from 'webpack-merge';
import chalk   from 'chalk';
import pkgInfo from './package.json';

import BabiliPlugin       from 'babili-webpack-plugin';
import WebpackShellPlugin from '@slightlytyler/webpack-shell-plugin';

import webpackConfigBase from './webpack.config.base';

const webpackConfigProd = {
  plugins: [
    new BabiliPlugin({}),
    new WebpackShellPlugin({
    onBuildStart: [], // need to bump version first before files copied etc
    onBuildExit: ['bash scripts/clean-production.sh']})
  ]
};

export default merge(webpackConfigBase, webpackConfigProd);
