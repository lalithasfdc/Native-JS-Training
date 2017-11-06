function createFunctions(n) {
    var callbacks = [];

    for (var i = 0; i < n; i++) {
        (function() {
            var index = i;
            callbacks.push(function() {
                return index;
            });
        }());
    }

    return callbacks;
}