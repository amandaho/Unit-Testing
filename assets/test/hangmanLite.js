var hangmanLite = require('../hangmanLite');
var chai = require('chai');
var expect = chai.expect;

describe('hangmanLite()', function() {
  context('when letter is equal to n and word is tyrannosaurus', function() {
    it ('returns 2 letter n', function() {
      var letter = 'n'
      var word = 'tyrannosaurus'
      expect(hangmanLite(letter, word)).to.equal(1);
    })
  })
})

describe('hangmanLite()', function() {
  context('when letter is equal to q and word is tyrannosaurus', function() {
    it ('returns 0 letter q', function() {
      var letter = 'q'
      var word = 'tyrannosaurus'
      expect(hangmanLite(letter, word)).to.equal(0);
    })
  })
})
