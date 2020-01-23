"use strict";
function greet(person) {
    console.log("こんにちは、" + person.name + "！");
}
var person = {
    name: "太郎",
    age: 30
};
function changeName(person) {
    person.name = "権兵衛";
}
greet(person);
changeName(person);
greet(person);
