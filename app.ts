// 列挙型 - enum

enum Colors {
  Gray, // 0
  Green = 100, // 100
  Blue // 101 指定しない限り値が１ずつ増加する
}
let myColor: Colors = Colors.Green;
console.log(myColor);
console.log(Colors.Blue);
