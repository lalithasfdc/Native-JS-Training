'use strict';

function quickSort(input) {
if (Array.isArray(input) && input.length >= 0) {
   if (input.length == 0 || input.length == 1) {
    return input;

   } 
    else 
   {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = input.pop();
    var length = input.length;
   for (var i = 0; i < length; i++) {
      if (input[i] <= pivot) {
          left.push(input[i]);
            } 
       else {
        right.push(input[i]);
             }
        }
return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
 } 
    else {
if (!Array.isArray(input)) {
throw "error.";
          }
    }
}
module.exports = quickSort;
