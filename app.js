"use strict";
function greet(person) {
    console.log("こんにちは、" + person.name + "！");
}
var person = {
    firstName: "太郎",
    age: 30
};
greet(person);
