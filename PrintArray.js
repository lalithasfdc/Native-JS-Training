function Printarray(array){
var element= "";
for (var i = 0; i < array.length-1 ; i++) {
element+= array[i] + ",";
}
element+= array[array.length-1];
return element;
}
