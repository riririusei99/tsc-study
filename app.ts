
function multiply(value1: number, value2: number): number{
  return value1 * value2;
}

function sayHello(): void{
  console.log("Hello!");
}

let myFunctionType: (val1: number, val2: number) => number;
myFunctionType = multiply;
console.log(myFunctionType(23, 89));
