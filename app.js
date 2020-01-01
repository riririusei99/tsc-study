"use strict";
// arrow関数では引数が1つだけの時丸括弧を省略できる
// TypeScriptを使う場合はエラーになるので丸括弧をつける方が良さそう
var mulNum = function (value) { return value * 2; };
console.log(mulNum(3));
var outputString = function (text) {
    console.log(text);
};
console.log("こんにちは！");
