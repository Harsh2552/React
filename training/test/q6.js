"use strict";
/*Can we use Interface in Typescript?If yes,then Why? And Create a
suitable code with Explaination?
Answer:- Yes, we can use Interface in Typescript.
        We use interface to implements in a class.Interface's functions have empty body.
        that body will be defined in the class.

*/
/* Interface*/
exports.__esModule = true;
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.add = function (a, b) {
        return a + b;
    };
    return A;
}());
var obj = new A;
var result = obj.add(5, 8);
console.log(result);
