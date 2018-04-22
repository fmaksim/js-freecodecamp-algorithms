function findLongestWord(str) {
    var wordsArray = str.split(" ");
    var lastIndex = wordsArray.length - 1;
    var longestWordIndex;
    var longestWordLength = 0;

    for (var i = 0; i <= lastIndex; ++i) {
        if (wordsArray[i].length > longestWordLength) {
            longestWordIndex = i;
            longestWordLength = wordsArray[i].length;
        }
    }
    console.log(longestWordLength);
    return longestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");