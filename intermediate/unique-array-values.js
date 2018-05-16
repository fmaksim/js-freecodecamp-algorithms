function uniteUnique(arr) {

    var mergedArray = [];
    var uniqueValues = [];
    for (var i = 0; i < arguments.length; ++i) {
        mergedArray = mergedArray.concat(arguments[i]);
    }

    uniqueValues = mergedArray.filter(function (item, position) {
        return mergedArray.indexOf(item) === position;
    });

    return uniqueValues;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));