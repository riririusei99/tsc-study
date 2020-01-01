"use strict";
// デフォルトの引数を定義する
var countDown = function (start) {
    if (start === void 0) { start = 15; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log("終了");
};
countDown();
