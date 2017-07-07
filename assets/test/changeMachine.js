var changeMachine = require('../changeMachine');
var chai = require('chai');
var expect = chai.expect;

describe('changeMachine()', function() {
  context('when amount is equal to 50 dollars', function() {
    it ('the changeMachine returns [2,1,0,0]', function() {
      var amount = changeMachine(50);
      expect(amount).to.deep.equal([2,1,0,0]);
    })
  })
});
