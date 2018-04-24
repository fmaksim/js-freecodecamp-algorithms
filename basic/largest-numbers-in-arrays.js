function largestOfFour(arr) {
    var countOfArrays = arr.length;
    var largestNumbers = [];

    for (var i = 0; i < countOfArrays; ++i) {
        var maxValue = findMaxInArray(arr[i]);
        largestNumbers.push(maxValue);
    }
    return largestNumbers;
}

function findMaxInArray(arr) {
    var count = arr.length;
    var maxValue = null;

    for (var i = 0; i < count; ++i) {
        if (arr[i] > maxValue)
            maxValue = arr[i];
    }

    return maxValue;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));