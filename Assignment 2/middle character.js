function getMiddle(s) {
    var numberOfChars,
        middleIndex = Math.ceil((s.length / 2) - 1);
    if (s.length % 2 == 0) {
        numberOfChars = 2;
    } else {
        numberOfChars = 1;
    }
    return s.substr(middleIndex, numberOfChars);
}
