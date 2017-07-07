var multiples = require('../multiples');
var chai = require('chai');
var expect = chai.expect;

describe('multiples()', function() {
  context('when numOne is 3 and numTwo is 5', function() {
    it ('returns an array [15,30,45,60,75,90]', function() {
      var numOne = 3;
      var numTwo = 5;
      expect(multiples(numOne, numTwo)).to.deep.equal([15,30,45,60,75,90]);
    })
  })
});
