var tallestMountain = require('../tallestMountain');
var chai = require('chai');
var expect = chai.expect;


describe('tallestMountain()', function() {
  context('returns the tallest mountain in the array', function() {
    it('returns 29029 for the tallest mountain', function() {
      var mountainHeight = tallestMountain(['28169',
                            '27940',
                            '27838',
                            '26864',
                            '26795',
                            '26781',
                            '26660',
                            '26545',
                            '29029',
                            '26509',
                            '26414',
                            '26362']);
      expect(mountainHeight).to.equal(29029);
      expect(mountainHeight).to.not.equal(26545);
    });
  });
});
