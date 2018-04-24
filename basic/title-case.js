function titleCase(str) {
    var wordsArray = (str.toLowerCase()).split(" ");
    var wordsArrayCount = wordsArray.length;

    for (var i = 0; i < wordsArrayCount; ++i) {
        wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    }

    return wordsArray.join(" ");
}

console.log(titleCase("I'm a little tea pot"));