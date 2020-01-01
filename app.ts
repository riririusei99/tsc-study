
// デフォルトの引数を定義する
const countDown = (start: number = 15): void => {
  while(start > 0){
    console.log(start);
    start--;
  }
  console.log("終了");
};
countDown();
