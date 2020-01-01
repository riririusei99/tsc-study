
let complex: {
    data: number[],
    output: (all: boolean) => number[]
} = {
  data: [100, 3.14, -3],
  output: function(all: boolean): number[]{
    return this.data;
  }
};
