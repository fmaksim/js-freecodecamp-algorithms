function repeatStringNumTimes(str, num) {
    var repeatedStr = "";

    for (var i = 1; i <= num; ++i) {
        repeatedStr += str;
    }

    return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));