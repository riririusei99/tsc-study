
function greet(person: {name: string}): void {
    console.log("こんにちは、" + person.name + "！");
}
const person = {
  firstName: "太郎",
  age: 30
};
greet(person);
