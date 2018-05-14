function translatePigLatin(str) {
    var vowelPosition = firstVowelPosition(str);
    if (vowelPosition === 0)
        return str.concat("way");

    var firstLetters = str.slice(0, vowelPosition);
    var endOfStr = str.slice(vowelPosition);

    return endOfStr.concat(firstLetters).concat("ay");
}

function firstVowelPosition(str) {
    var letters = str.toLowerCase().split("");
    var vowelLetters = ["a", "e", "o", "y", "u", "i"];
    for (var i = 0; i < letters.length; ++i) {
        if (vowelLetters.indexOf(letters[i]) >= 0)
            return i;
    }

    return -1;
}

console.log(translatePigLatin("algorithm"));