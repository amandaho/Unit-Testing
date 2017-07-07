var cherokeeHare = require('../cherokeeHare');
var chai = require('chai');
var expect = chai.expect;

describe('cherokeeHare()', function() {
  context('when startingPopulation is 200, birthRate is 1, and numberOfWeeks is 5', function() {
    it ('returns 6400 for Cherokee Hares', function() {
      var startingPopulation = 200;
      var birthRate = 1;
      var numberOfWeeks = 5;
      expect(cherokeeHare(startingPopulation, birthRate, numberOfWeeks)).to.equal(6400);
    })
  })
});
