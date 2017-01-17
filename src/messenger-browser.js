let logger  = require('pretty-web-logger');
let _       = require('lodash');

let bgColor = 'white';
let mgStyle = '';

function showMessasge(msg, bgColor, ...params) {
  let mgStyle = `background: ${bgColor}; color: white; display: block;`;
  params.length > 0
    ? console.log('%c%s', mgStyle, msg, params)
    : console.log('%c%s', mgStyle, msg);
}

class MessengerBrowser {
  constructor(pkgInfo = {}) {
    this.pkgInfo = pkgInfo;
  }
  version() {
    return this.pkgInfo.version;
  }
  name() {
    return this.pkgInfo.name;
  }
  log(msg, ...params) {
    logger.log(msg, ...params);
  }
  info(msg, ...params) {
    showMessasge(msg, 'blue', ...params);
  }
  note(msg, ...params) {
    showMessasge(msg, 'orange', ...params);
  }
  success(msg, ...params) {
    logger.info(msg, ...params);
    showMessasge(msg, 'green', ...params);
  }
  error(msg, ...params) {
    logger.error(...params);
    showMessasge(msg, 'red', ...params);
  }
  warning(msg, ...params) {
    logger.warning(msg, ...params);
    showMessasge(msg, 'yellow', ...params);
  }
  table(data) {
    console.table(data);
  }
  dir(...params) {
    console.dir(...params);
  }
  chalkline(char = '*') {
    if (char.length > 1) {
      char = char.substring(0,1);
    }
    console.log(_.repeat(char, 80));
  }
}
module.exports = MessengerBrowser;
