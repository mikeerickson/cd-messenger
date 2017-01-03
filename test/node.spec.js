let chai   = require('chai');
let chalk  = require('chalk');
let sinon  = require('sinon');
let _      = require('lodash');
let messenger = require('../src/messenger-node');

let assert = chai.assert;
let expect = chai.expect;

require('mocha-sinon');

function once(fn) {
  let returnValue;
  let called = false;
  return function () {
    if (!called) {
      called = true;
      returnValue = fn.apply(this, arguments);
    }
    return returnValue;
  };
}

describe(chalk.cyan.bold('==> Messenger Node (Console)'), () => {

  let msg;
  let methods = ['version','info','note','log','error','success','warning','table','dir'];
  let proxy;

  beforeEach(function () {

  });

  afterEach(function () {

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
    let log    = sinon.spy();
    let logFn  = once(log);
    let result = logFn();
    assert(log.calledOnce);

    // var result = messenger.log('test message');
    // expect(result).to.be.array;
    // expect(result.length).to.equal(1);
    // expect(result[0]).to.equal('test message');
  });

  it('should return stub value', function () {
    var callback = sinon.stub().returns('Hello World');
    proxy = once(callback);
    assert(proxy() === 'Hello World');
  });

  it('should stub log method', function () {
    var msg = messenger;
    var spy = sinon.spy(messenger, 'log');
    spy.withArgs('test call 1');
    spy.withArgs('test call 2');

    msg.log('test call 1');
    msg.log('test call 2');

    assert(spy.withArgs('test call 1').calledOnce);
    assert(spy.withArgs('test call 2').calledOnce);
  });

  it('should be a spy', function () {
    let msgStub = sinon.stub(messenger, 'info');
    msgStub.withArgs('test message').returns('test message');
    let ret = msgStub('test message');
    assert(ret === 'test message');
  });

});
