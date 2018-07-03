/*global module */

import path from 'path';

module.exports = {
  module: {

  },
  entry: {
    index: './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'messenger.js',
    library: 'messenger'
  }
};
