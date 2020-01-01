"use strict";
// 列挙型 - enum
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue"; // 101 指定しない限り値が１ずつ増加する
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log(myColor);
console.log(Colors.Blue);
