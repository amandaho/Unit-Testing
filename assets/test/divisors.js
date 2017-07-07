var divisors = require('../divisors');
var chai = require('chai');
var expect = chai.expect;

describe('divisors()', function() {
  context('when numOne 25', function() {
    it ('returns an array [1,5,25]', function() {
      var numOne = 25;
      expect(divisors(numOne)).to.deep.equal([1,5,25]);
    })
  })
});
