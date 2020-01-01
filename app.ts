let userData: {
  name: string,
  age: number
} = {
  name: "太郎",
  age: 30
};
// TypeScriptでは追加もできない
userData["place"] = "東京"; // error
console.log(userData["place"]);
