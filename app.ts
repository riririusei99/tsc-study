
// never エラーを含む処理結果をなくす
function noReturn(): never{
  throw new Error("エラーです！");
}

// never以外を受け付けない
let something: never;
something = 0;
