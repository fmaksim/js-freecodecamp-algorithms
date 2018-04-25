function chunkArrayInGroups(arr, size) {
    var arrayLength = arr.length;
    var groups = [];
    var countOfGroups = Math.ceil(arrayLength / size);

    for (var i = 1; i <= countOfGroups; ++i) {
        groups.push(arr.slice((i - 1) * size, (i - 1) * size + size));
    }

    return groups;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));