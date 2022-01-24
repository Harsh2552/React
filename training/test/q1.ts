/* What is Destructuring in Javascript? Explain in terms of Array and 
Object with Practical implementations?
  Answer:- Use to extract the data from an Array.We can do the same with Objects as well.

*/
export{};
var x,y;
[x,y]=[10,20,45,67,89,90];
console.log(x);

console.log(y);


let obj1={
    name:'Harsh',
    age:18,
    Degree:'B.Tech'
};
let{name}=obj1;
let{age}=obj1;
console.log(name);
console.log(age);


