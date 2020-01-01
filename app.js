"use strict";
function multiply(value1, value2) {
    return value1 * value2;
}
function sayHello() {
    console.log("Hello!");
}
var myFunctionType;
myFunctionType = multiply;
console.log(myFunctionType(23, 89));
