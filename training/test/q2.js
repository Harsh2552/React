"use strict";
/*What is the difference between forEach() and map()? Explain with
suitable Example?
 Answer:- We can't return anything using forEach() method,but using map() helper
          we can return a new array by applying function on each element.

*/
exports.__esModule = true;
var students = ["harsh", "shivam", "shubhi", "manshi", "sakshi"];
students.forEach(display);
function display(item) {
    console.log(item);
}
/* map() */
var num = [1, 2, 3, 4, 5, 6, 7, 8];
num = num.map(function (items) {
    return items * 100;
});
console.log(num);
