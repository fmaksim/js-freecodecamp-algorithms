
function whatIsInAName(collection, source) {

    var sourceKeys = Object.keys(source);

    return collection.filter(function (item) {
        for (var i = 0; i < sourceKeys.length; ++i) {
            if (!item.hasOwnProperty(sourceKeys[i])
                || item[sourceKeys[i]] !== source[sourceKeys[i]])
                return false;
        }
        return true;
    });
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));