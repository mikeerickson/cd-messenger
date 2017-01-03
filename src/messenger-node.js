
var _         = require('lodash');
var chalk     = require('chalk');
var cl        = require('chalkline');
var Table     = require('cli-table2');
var pkgInfo   = require('../package.json');

// const COLOR_ORANGE = '\033[38;5;214m';
// const COLOR_RESET  = '\033[m';

var messenger = {
  version: function () {
    return pkgInfo.version;
  },
  log: function (...params) {
    console.log(...params);
    return params;
  },
  info: function (...params) {
    console.log(chalk.cyan(...params));
  },
  note: function (msg, ...params) {
    // msg = COLOR_ORANGE + msg + COLOR_RESET;
    console.log(msg, ...params);
  },
  success: function (...params) {
    console.log(chalk.green(...params));
  },
  warning: function (...params) {
    console.log(chalk.yellow(...params));
  },
  error: function (...params) {
    console.log(chalk.red(...params));
  },
  table: function (data) {
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
  },
  chalkline: function (color) {
    if (color.length > 0) {
      try {
        eval(`cl.${color}()`); // eslint-disable-line
      }
      catch (e) {
        console.error(chalk.bgRed.bold(`Invalid Color: ${color}`));
      }
    }
  },
  dir: function (data) {
    console.dir(data);
  }
};

module.exports = messenger;
