let chalk   = require('chalk');
let pkgInfo = require('../package.json');

console.log('');
console.log(chalk.white.bold('==> ') + chalk.magenta.bold(`Preparing ${pkgInfo.name} Tests...`));
