"use strict";
function greet(person) {
    console.log("こんにちは、" + person.name + "！");
}
var person = {
    name: "太郎",
    age: 30
};
greet(person);
