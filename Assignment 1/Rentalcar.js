function rentalCarCost(days) {
    var result;
    if (days >= 7) {
        result = (days * 40) - 50;
    } else if (days >= 3) {
        result = (days * 40) - 20;
    } else {
        result = days * 40;
    }
    return result;
}