function pairElement(str) {

    var letters = str.split("");
    var result = [];

    for (var i = 0; i < letters.length; ++i) {
        var pairElement = getPairElement(letters[i]);
        result.push([letters[i], pairElement]);
    }

    return result;
}

function getPairElement(symbol) {
    var pairs = {
        "C": "G",
        "G": "C",
        "A": "T",
        "T": "A"
    };

    return pairs[symbol];
}

console.log(pairElement("GCG"));