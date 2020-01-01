
// arrow関数では引数が1つだけの時丸括弧を省略できる
// TypeScriptを使う場合はエラーになるので丸括弧をつける方が良さそう
const mulNum = (value: number) => value * 2;
console.log(mulNum(3));

const outputString = (text: string): void => {
  console.log(text);
}
console.log("こんにちは！")
