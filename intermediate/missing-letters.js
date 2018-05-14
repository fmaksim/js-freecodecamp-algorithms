function fearNotLetter(str) {

    var missingCharCode = getMissingCharCode(str);
    return missingCharCode ? String.fromCharCode(missingCharCode) : missingCharCode;

}

function getMissingCharCode(str) {
    for (var i = 0; i < str.length; ++i) {
        var currentCharCode = str.charCodeAt(i);
        var nextCharCode = str.charCodeAt(i + 1);

        if (nextCharCode - currentCharCode > 1)
            return currentCharCode + 1;

    }

    return undefined;
}

console.log(fearNotLetter("abce"));