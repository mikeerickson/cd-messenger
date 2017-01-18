
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
  name: function () {
    return pkgInfo.name;
  },
  log: function (...params) {
    console.log(...params);
    return params;
  },
  info: function (...params) {
    console.log(chalk.cyan(...params));
    return params;
  },
  note: function (msg, ...params) {
    console.log(chalk.keyword('orange')(msg, ...params));
    return params;
  },
  success: function (...params) {
    console.log(chalk.green(...params));
    return params;
  },
  warning: function (...params) {
    console.log(chalk.yellow(...params));
    return params;
  },
  error: function (...params) {
    console.log(chalk.red(...params));
    return params;
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
    return data;
  }
};

module.exports = messenger;
