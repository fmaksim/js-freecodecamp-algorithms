function destroyer(arr) {

    if (arguments.length == 1)
        return arr;

    var removedValues = [];
    for (var i = 1; i < arguments.length; ++i) {
        removedValues.push(arguments[i]);
    }

    return arr.filter(function (value) {
        var needRemove = false;
        for (var i = 0; i < removedValues.length; ++i) {
            if (value === removedValues[i])
                needRemove = true;
        }

        if (!needRemove)
            return value;
    });

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
