function sumAll(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    var numbers = [];

    for (var i = min; i <= max; ++i) {
        numbers.push(i);
    }

    var sum = numbers.reduce(function (previus, current) {
        return previus + current;
    }, 0);

    return sum;
}

sumAll([1, 4]);
