function findElement(arr, func) {
    var filteredValues = arr.filter(func);
    return filteredValues[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));