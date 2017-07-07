var findingPalindrome = require('../findingPalindrome');
var chai = require('chai');
var expect = chai.expect;

describe('findingPalindrome()', function() {
  context('when palindrome is bob', function() {
    it ('returns true', function() {
      var palindrome = findingPalindrome('bob');
      expect(palindrome).to.equal(true);
    })
  })
});

describe('findingPalindrome()', function() {
  context('when palindrome is amanda', function() {
    it ('returns false ', function() {
      var palindrome = findingPalindrome('amanda');
      expect(palindrome).to.equal(false);
    })
  })
});
