interface NamedPerson {
  name: string;
}


function greet(person: NamedPerson): void {
  console.log("こんにちは、" + person.name + "！");
}
const person = {
  name: "太郎",
  age: 30
};
function changeName(person: NamedPerson){
  person.name = "権兵衛";
}
greet(person);
changeName(person);
greet(person);
