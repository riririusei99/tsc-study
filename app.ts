// 文字列を返す関数を書く
let myName = "太郎"
// 文字列のみの返り値を許可する
function returnMyName(): string{
  return myName;
}
console.log(returnMyName());

// void 戻り値を許可しない
function sayHello(): void{
  console.log("Hello!");
}
