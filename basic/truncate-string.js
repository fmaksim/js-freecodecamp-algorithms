function truncateString(str, num) {
    if (str.length > num) {
        var offset = num <= 3 ? 0 : 3;
        var truncatedString = str.slice(0, num - offset);
        return truncatedString + "...";
    }
    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));