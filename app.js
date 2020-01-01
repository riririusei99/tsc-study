"use strict";
// never エラーを含む処理結果をなくす
function noReturn() {
    throw new Error("エラーです！");
}
// never以外を受け付けない
var something;
something = 0;
