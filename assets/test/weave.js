var weave = require('../weave');
var chai = require('chai');
var expect = chai.expect;

describe('weave()', function() {
  context('when the word is Mississippi', function() {
    it ('returns Misxissxppi', function() {
      var word = "Mississippi";
      var xth = 4;
      var replaceWith = "x";
      expect(weave(word, xth, replaceWith)).to.equal('Misxissxppi');
    })
  })
});
