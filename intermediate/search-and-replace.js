function myReplace(str, before, after) {
    var wordsArray = str.split(" ");

    return wordsArray.map(function (word) {
        if (word === before) {
            if (/[A-Z]/.test(before[0]))
                after = firstLetterToUpperCase(after);

            return after;
        } else {
            return word;
        }
    }).join(" ");
}

function firstLetterToUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(myReplace("A quick brown fox jumped over the lazy Dog", "Dog", "cat"));