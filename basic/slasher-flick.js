//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
    var result = [];

    if (howMany >= arr.length)
        return result;

    result = arr.slice(howMany);

    return result;
}

console.log(slasher([1, 2, 3], 2));