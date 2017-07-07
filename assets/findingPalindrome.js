function findingPalindrome(palindrome) {

  var splitPalindrome = palindrome.split("");
  var reversePalindrome = splitPalindrome.reverse();
  var joinPalindrome = reversePalindrome.join("");

  if (palindrome == joinPalindrome) {
    return true
  } else {
    return false
  }
}

module.exports = findingPalindrome;
