
// union型 - 共同体型、合併型

let thisYear: number | string = "2019";
thisYear = 2019;

function checkLength(str: string | null): number{
  if (str != null){
    return str.length;
  } else {
    return 0;
  }
}

// 使用していないパラメータに対してerrorを出す。
function controlMe(isTrue: boolean){
  let result: number = 12;
  return result;
}
