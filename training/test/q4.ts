/*What is spread operator ? Why we use spread operator? Explain 
with practical implementation?
Answer:-The spread Operator is used when we have numbers of item available in the array and we want to destruct them.
         It is denoted by (...).

 */
/*Spread Operator */
var a,b,next;
[a,b,...next]=[1,2,3,4,5,6,7,8,9,10];
console.log(a);
console.log(b);
console.log(...next);


/*Example 2 */
var a,b,restof;
[a,b,...restof]=["mango","harsh","done","apple","banana","pineapple"];
console.log(a);
console.log(b);
console.log(...restof);