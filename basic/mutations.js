/**
 * Return true if the string in the first element of the array contains all of the letters
 * of the string in the second element of the array.
 * @param arr
 * @returns boolean
 */
function mutation(arr) {
    var firstString = arr[0].toLowerCase();
    var secondString = arr[1].toLowerCase();

    var secondStringLetters = secondString.split("");
    var countOfLetters = secondStringLetters.length;

    for (var i = 0; i < countOfLetters; ++i) {
        if (firstString.indexOf(secondStringLetters[i]) < 0)
            return false;

    }

    return true;
}

console.log(mutation(["hello", "hey"]));