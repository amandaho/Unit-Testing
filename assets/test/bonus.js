var bonus = require('../bonus');
var chai = require('chai');
var expect = chai.expect;

describe('bonus()', function() {
  context('when the bill is equal to 52 dollars', function() {
    it ('return tip of 63', function() {
      var costOfMeal = bonus(52);
      expect(costOfMeal).to.equal(63);
    })
  })
});
