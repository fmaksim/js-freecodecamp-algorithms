function confirmEnding(str, target) {
    var strLength = str.length; //28
    var targetLength = target.length; //4

    var endingStr = str.substring(strLength - targetLength);

    if (endingStr === target)
        return true;
    else
        return false;
}

confirmEnding("Bastian", "n");