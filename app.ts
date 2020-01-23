interface NamedPerson {
  name: string;
  age?: number;
  [prepName: string]: any;
  greet(lastName: string): void;
}


function greet(person: NamedPerson): void {
  console.log("こんにちは、" + person.name + "！");
}
const person: NamedPerson = {
  name: "太郎",
  age: 30,
  hobbies: ["game", "sports"],
  greet(lastName: string){
    console.log("こんにちは、" + lastName + this.name + "!");
  }
};
function changeName(person: NamedPerson){
  person.name = "権兵衛";
}
// greet({name: "太郎", age: 30});
changeName(person);
greet(person);
person.greet("名無しの");
