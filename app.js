"use strict";
// union型 - 共同体型、合併型
var thisYear = "2019";
thisYear = 2019;
function checkLength(str) {
    if (str != null) {
        return str.length;
    }
    else {
        return 0;
    }
}
// 使用していないパラメータに対してerrorを出す。
function controlMe(isTrue) {
    var result = 12;
    return result;
}
