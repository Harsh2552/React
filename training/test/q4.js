var _a, _b;
/*What is spread operator ? Why we use spread operator? Explain
with practical implementation?
Answer:-The spread Operator is used when we have numbers of item available in the array and we want to destruct them.
         It is denoted by (...).

 */
/*Spread Operator */
var a, b, next;
_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], a = _a[0], b = _a[1], next = _a.slice(2);
console.log(a);
console.log(b);
console.log.apply(console, next);
/*Example 2 */
var a, b, restof;
_b = ["mango", "harsh", "done", "apple", "banana", "pineapple"], a = _b[0], b = _b[1], restof = _b.slice(2);
console.log(a);
console.log(b);
console.log.apply(console, restof);
