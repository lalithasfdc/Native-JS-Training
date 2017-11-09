function rentalCarCost(days) {
    var result;
    var temp = days * 40;
    if (days >= 7) {
        result = (temp) - 50;
    } else if (days >= 3) {
        result = (temp) - 20;
    } else {
        result = temp;
    }
    return result;
}
