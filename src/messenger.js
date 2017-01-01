const pkgInfo = require('../package.json');
const chalk   = require('chalk');
const cl      = require('chalkline');
const _       = require('lodash');
let Table     = require('cli-table2');

class MessengerNode {
  construtor(pkgInfo = pkgInfo) {
    this.pkgInfo = pkgInfo;
  }
  version() {
    return this.pkgInfo.version;
  }
  log(...params) {
    console.log(...params);
  }
  info(...params) {
    console.log(...params);
  }
  error(...params) {
    console.log(chalk.red(...params));
  }
  success(...params) {
    console.log(chalk.green(...params));
  }
  warning(...params) {
    console.log(chalk.yellow(...params));
  }
  note(...params) {
    console.log(...params);
  }
  table(data) {
    var table = new Table({});

    if (data.length > 0) {
      if (!_.isArray(data[0])) {
        table.push(Object.keys(data[0]));
      }
    }

    data.map(function (item){
      table.push(_.values(item));
    });
    console.log(table.toString());
  }
  chalkline(color) {
    if (color.length > 0) {
      try {
        eval(`cl.${color}()`); // eslint-disable-line
      }
      catch (e) {
        console.error(chalk.bgRed.bold(`Invalid Color: ${color}`));
      }
    }
  }
  dir(data) {
    console.dir(data);
  }
}

module.exports = MessengerNode;
