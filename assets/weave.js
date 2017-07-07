function weave(word, xth, replaceWith){

    var splitWord = word.split('');

    for (var i = xth-1; i < splitWord.length-1; i+=xth) {
        splitWord[i] = replaceWith;
    }

    return splitWord.join('');

}

module.exports = weave;
