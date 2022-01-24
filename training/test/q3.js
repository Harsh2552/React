"use strict";
/*What is Arrow Function? How it is different from function Explain
with suitable Examples??
Answer:-The working of Arrow function is same as 'function' but it is compact than normal function.

*/
/* Arrow Function(=>)*/
exports.__esModule = true;
var array = [2, 4, 6, 8, 10];
array = array.map(function (items) {
    return items * 2;
});
console.log(array);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var result = numbers.filter(function (ele) { return ele % 3 !== 0; });
console.log(result);
