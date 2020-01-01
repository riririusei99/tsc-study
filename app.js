"use strict";
var userData = {
    name: "太郎",
    age: 30
};
// TypeScriptでは追加もできない
userData["place"] = "東京"; // javascriptではOK
console.log(userData["place"]);
