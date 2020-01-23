interface NamedPerson {
  name: string;
  age?: number;
  [prepName: string]: any;
}


function greet(person: NamedPerson): void {
  console.log("こんにちは、" + person.name + "！");
}
const person = {
  name: "太郎",
  age: 30,
  hobbies: ["game", "sports"]
};
function changeName(person: NamedPerson){
  person.name = "権兵衛";
}
greet({name: "太郎", age: 30});
changeName(person);
greet(person);
