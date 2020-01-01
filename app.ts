
// alias - エイリアス
// 頭文字を大文字にする
type Complex = {
  data: number[],
  output: (all: boolean) => number[]
};

let complex2: Complex = {
  data: [123, 8686868, 1,9],
  output: function(flag: boolean): number[]{
      return this.data;
  }
};
