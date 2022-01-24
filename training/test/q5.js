"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/*. Difference between Function and Constructor ? Explain with
Example?
Answer:-We use Function to perform any particular task but we use Constructor to initialize variables and objects.

 */
/* Function */
function sub(a, b) {
    return b - a;
}
var result = sub(5, 8);
console.log(result);
var a = /** @class */ (function () {
    function a() {
        this.n1 = 100;
    }
    a.prototype.show = function () {
        console.log(this.n1);
    };
    a.prototype.add = function () {
        this.n1 = this.n1 + 100;
    };
    return a;
}());
var b = /** @class */ (function (_super) {
    __extends(b, _super);
    function b() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    b.prototype.sub = function () {
        this.n1 = this.n1 - 50;
    };
    return b;
}(a));
var obj = new b;
obj.show();
obj.add();
obj.show();
