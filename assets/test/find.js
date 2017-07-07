var find = require('../find');
var chai = require('chai');
var expect = chai.expect;

describe('find()', function() {
  context('when the array is [1,2,3,4,5] ', function() {
    it ('returns index of 0 when the number is 1', function() {
      var array = [1,2,3,4,5];
      var number = 1;
      expect(find(array, number)).to.equal(0);
    })
  })
});
