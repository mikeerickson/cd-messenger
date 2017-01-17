import chai    from 'chai';
import msg     from '../index.js';
import pkgInfo from '../package.json';

const expect = chai.expect;

describe('Given an instance of my messenger', () => {
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(msg.name()).to.be.equal(pkgInfo.name);
    });
  });
  describe('when I need the version', () => {
    it('should return the version', () => {
      expect(msg.version()).to.be.equal(pkgInfo.version);
    });
  });
});
