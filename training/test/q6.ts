/*Can we use Interface in Typescript?If yes,then Why? And Create a 
suitable code with Explaination?
Answer:- Yes, we can use Interface in Typescript.
        We use interface to implements in a class.Interface's functions have empty body.
        that body will be defined in the class.

*/
/* Interface*/

export{};
interface details{
    add(a:number,b:number);
}
class A implements details{
    add(a:number,b:number) {
        return a+b;
        
    }
}
let obj=new A;
let result:number=obj.add(5,8);
console.log(result);
