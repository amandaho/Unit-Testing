function hangmanLite(letter, word) {
  var count = word.split(letter).length - 1;

    return count;
}

module.exports = hangmanLite;
