"use strict";
function greet(person) {
    console.log("こんにちは、" + person.name + "！");
}
var person = {
    name: "太郎",
    age: 30,
    hobbies: ["game", "sports"],
    greet: function (lastName) {
        console.log("こんにちは、" + lastName + this.name + "!");
    }
};
function changeName(person) {
    person.name = "権兵衛";
}
// greet({name: "太郎", age: 30});
changeName(person);
greet(person);
person.greet("名無しの");
