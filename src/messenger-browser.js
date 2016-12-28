let logger = require('pretty-web-logger');
let _      = require('lodash');

let bgColor = 'white';
let mgStyle = '';

let messenger = {
  log: function (msg, ...params) {
    logger.log(msg, ...params);
  },
  info: function (msg, ...params) {
    logger.info(msg, ...params);
    showMessasge(msg, 'blue', ...params);
  },
  success: function (msg, ...params) {
    logger.info(msg, ...params);
    showMessasge(msg, 'green', ...params);
  },
  error: function (msg, ...params) {
    logger.error(...params);
    showMessasge(msg, 'red', ...params);
  },
  warning: function (msg, ...params) {
    logger.warning(msg, ...params);
    showMessasge(msg, 'yellow', ...params);
  },
  table: function (data) {
    console.table(data);
  },
  dir: function (...params) {
    console.dir(...params);
  },
  chalkline: function (char = '*') {
    if (char.length > 1) {
      char = char.substring(0,1);
    }
    console.log(_.repeat(char, 80));
  }
};

function showMessasge(msg, bgColor, ...params) {
  let mgStyle = `background: ${bgColor}; color: white; display: block;`;
  params.length > 0
    ? console.log('%c%s', mgStyle, msg, params)
    : console.log('%c%s', mgStyle, msg);
}
module.exports = messenger;
