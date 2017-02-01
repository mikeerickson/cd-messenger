
const chalk   = require('chalk');
const cl      = require('chalkline');
const Table   = require('cli-table');
const pkgInfo = require('../package.json');

const CLI_ICON_FAIL = '✘';
const CLI_ICON_PASS = '✓';
const CLI_ICON_WARN = '♺';
const CLI_ICON_NOTE = '✏︎';

const messenger = {
  version: () => {
    return pkgInfo.version;
  },
  name: () => {
    return pkgInfo.name;
  },
  log: (...params) => {
    console.log(...params);
    return params;
  },
  info: (...params) => {
    console.log(chalk.cyan.bold(CLI_ICON_NOTE, ...params));
    return params;
  },
  note: (msg, ...params) => {
    // console.log(chalk.keyword('orange')(msg, ...params));
    console.log(msg, ...params);
    return params;
  },
  success: (...params) => {
    console.log(chalk.green.bold(CLI_ICON_PASS, ...params));
    return params;
  },
  warning: (...params) => {
    console.log(chalk.yellow.bold(CLI_ICON_WARN, ...params));
    return params;
  },
  error: (...params) => {
    console.log(chalk.red.bold(CLI_ICON_FAIL, ...params));
    return params;
  },
  table: (data) => {
    let table;
    let head = [];
    if (data.length > 0) {
      if (Array.isArray(data[0])) {
        header = data[0];
        data.splice(0,1);
      }
      else {
        header = Object.keys(data[0]);
      }
      header = header.map(function (item){
        return chalk.cyan.bold(item);
      });
      table = new Table({head: header});

      data.map((item) => {
        let values = Object.keys(item).map(key => item[key]);
        table.push(values);
      });
      console.log(table.toString());
    }
  },
  line: (color) => {
    if (color.length > 0) {
      try {
        eval(`cl.${color}()`); // eslint-disable-line
      }
      catch (e) {
        console.error(chalk.bgRed.bold(`Invalid Color: ${color}`));
      }
    }
  },
  dir: (data) => {
    console.dir(data);
    return data;
  }
};

module.exports = messenger;
