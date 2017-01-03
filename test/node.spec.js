let assert = require('chai').assert;
let expect = require('chai').expect;

let _      = require('lodash');

describe('==> Messenger Node (Console)', () => {
  let messenger;
  let methods = ['version','info','note','log','error','success','warning','table','dir']
  beforeEach(function () {
    messenger = require('../src/messenger-node');
  });

  it('should be instance of messenger-node', function () {
    assert(_.isObject(messenger));
  });

  it('should contain log method', function () {
    assert(messenger.hasOwnProperty('log'));
  });

  it('should contain all methods', function () {
    methods.forEach((item) => {
      assert(messenger.hasOwnProperty(item));
    });
  });
  it('should return supplied message', function () {
    var result = messenger.log('test message');
    expect(result).to.be.array;
    expect(result.length).to.equal(1);
    expect(result[0]).to.equal('test message');
  });
});
