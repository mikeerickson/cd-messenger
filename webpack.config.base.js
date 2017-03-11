import path       from 'path';
import config     from './config';
import pkgInfo    from './package.json';
import chalk      from 'chalk';
import webpack    from 'webpack';
import dateFormat from 'dateformat';

import BuildNotifierPlugin from 'webpack-build-notifier';
import ProgressBarPlugin   from 'progress-bar-webpack-plugin';

const isProd = (process.env.ENV === 'production') || (process.env.NODE_ENV === 'production');

console.log('');
console.log(chalk.bold('==> ') + chalk.magenta.bold(`Preparing ${pkgInfo.name} ${isProd ? 'Production' : 'Development'} Build...`));
console.log('');

const webpackConfigBase = {
  entry: config.entry.index,
  stats: {warnings: false, slient: true},
  output: {
    path: config.output.path,
    filename: (isProd) ? config.output.library + '.min.js' : config.output.library + '.js',
    library: config.output.library,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {test: /(\.jsx|\.js)$/, loaders: ['babel-loader'], exclude: /(node_modules)/}
    ]
  },
  plugins: [
    new BuildNotifierPlugin({
      title: (isProd) ? pkgInfo.name + ' (Production) ' : pkgInfo.name + ' (Development)',
      logo: path.resolve(__dirname, 'src/assets/cd-logo.png'),
      suppressSuccess: true
    }),
    new ProgressBarPlugin({
      format: chalk.yellow.bold('Building [:bar] ') + chalk.green.bold(':percent') + chalk.bold(' (:elapsed seconds)'),
      clear: true,
      summary: true
    }),
    new webpack.BannerPlugin(`${pkgInfo.name} - ${pkgInfo.homepage} - ${dateFormat()}`)
  ]
};

export default webpackConfigBase;
