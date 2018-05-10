function diffArray(arr1, arr2) {
    var onlyInFirst = [];
    var onlyInSecond = [];

    onlyInFirst = existOnlyInFirst(arr1, arr2);
    onlyInSecond = existOnlyInFirst(arr2, arr1);

    return onlyInFirst.concat(onlyInSecond);
}

function existOnlyInFirst(arr1, arr2) {
    var arrayLength = arr1.length;
    var newArr = [];
    for (var i = 0; i < arrayLength; ++i) {
        if (!inArray(arr1[i], arr2))
            newArr.push(arr1[i]);
    }
    return newArr;
}

function inArray(item, array) {
    return array.indexOf(item) >= 0;
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));