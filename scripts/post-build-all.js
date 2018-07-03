const chalk   = require('chalk');
const pkgInfo = require('../package.json');

console.log('');
console.log(chalk.green.yellow(` [ •• ] ${pkgInfo.name} Cleaning Up...`));
// cleanup code goes here
console.log(chalk.green.bold(` [ ok ] ${pkgInfo.name} Build Process Completed Successfully`));
