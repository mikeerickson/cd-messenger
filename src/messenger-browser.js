let logger = require('pretty-web-logger');

function showColorMessage(msg, bgColor = 'white', ...params) {
  let mgStyle = `background: ${bgColor}; color: white; display: block;`;
  if (bgColor === 'yellow') { // different `color` as white / yellow dont look good
    mgStyle = `background: ${bgColor}; color: black; display: block;`;
  }
  params.length > 0 ?
    console.log('%c%s', mgStyle, msg, params) :
    console.log('%c%s', mgStyle, msg);
}

class MessengerBrowser {
  constructor(pkgInfo = {}) {
    this.options = {
      logger: false
    };
    this.pkgInfo = pkgInfo;
  }
  setOptions(opts = {}) {
    this.options = Object.assign(this.options, opts);
  }
  version() {
    return this.pkgInfo.version;
  }
  name() {
    return this.pkgInfo.name;
  }
  log(msg, ...params) {
    this.options.logger ? logger.log(msg, ...params) : console.log(msg, ...params);
    console.log(msg, ...params);
  }
  info(msg, ...params) {
    this.options.logger ? logger.info(msg, ...params) : showColorMessage(msg, 'blue', ...params);
  }
  note(msg, ...params) {
    this.options.logger ? logger.info(msg, ...params) : showColorMessage(msg, 'orange', ...params);
  }
  success(msg, ...params) {
    this.options.logger ? logger.info(msg, ...params) : showColorMessage(msg, 'green', ...params);
  }
  error(msg, ...params) {
    this.options.logger ? logger.error(msg, ...params) : showColorMessage(msg, 'red', ...params);
  }
  warning(msg, ...params) {
    this.options.logger ? logger.warning(msg, ...params) : showColorMessage(msg, 'yellow', ...params);
  }
  table(data) {
    console.table(data);
  }
  dir(...params) {
    console.dir(...params);
  }
  chalkline(char = '', fgColor = 'white', width = 80) {
    char = (char.length > 0) ? char.substring(0, 1) : '\u2584'; // '\u2584' <-- bigger box
    console.log('%c%s', `color: ${fgColor}; display: block`, char.repeat(width));
  }
}
module.exports = MessengerBrowser;
