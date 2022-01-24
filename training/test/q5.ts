/*. Difference between Function and Constructor ? Explain with 
Example?
Answer:-We use Function to perform any particular task but we use Constructor to initialize variables and objects.

 */
/* Function */
function sub(a:number,b:number){
    return b-a;
}
let result:number=sub(5,8);
console.log(result);

/*Constructor */
export{};
class a{
    n1:number;
    constructor(){
        this.n1=100;
    }
    show(){
        console.log(this.n1);
        
    }
    add(){
        this.n1=this.n1+100;
    }
}
class b extends a{
    sub(){
        this.n1=this.n1-50;
    }
}
let obj=new b;
obj.show();
obj.add();
obj.show();