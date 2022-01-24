/*What is the difference between forEach() and map()? Explain with 
suitable Example?
 Answer:- We can't return anything using forEach() method,but using map() helper 
          we can return a new array by applying function on each element.

*/

/* forEach()*/
export{};
let students=["harsh","shivam","shubhi","manshi","sakshi"];
students.forEach(display);
function display(item)
{
    console.log(item);
}

/* map() */

let num=[1,2,3,4,5,6,7,8];
num=num.map((items)=>
{
    return items*100;
});
console.log(num);