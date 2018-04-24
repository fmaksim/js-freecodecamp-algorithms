function palindrome(str) {
    str = (str.toLowerCase(str)).replace(/[^a-z0-9+]/g, '');
    var reversedStr = reverse(str);

    if (reversedStr === str)
        return true;

    return false;
}

function reverse(str) {

    var lastIndex = str.length - 1;
    var halfIndex = Math.round(lastIndex / 2);
    var lettersArray = str.split("");

    for (var i = 0; i < halfIndex; ++i) {
        var current = lettersArray[i];
        lettersArray[i] = lettersArray[lastIndex - i];
        lettersArray[lastIndex - i] = current;
    }

    return lettersArray.join("");

}


console.log(palindrome("_eye"));