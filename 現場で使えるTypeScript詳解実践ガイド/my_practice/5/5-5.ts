//ユーザー定義の型ガード関数を使わない場合
// function isNumber(value: unknown): boolean {
//   return typeof value === "number";
// }

// function outValue(inputValue: number | string) {
//   if (isNumber(inputValue)) {
//     console.log(inputValue.toFixed());
//   } else {
//     console.log(inputValue.toLowerCase());
//   }
// }

// ユーザー定義の型ガード関数を使う場合
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function outValue(inputValue: number | string) {
  if (isNumber(inputValue)) {
    console.log("number型です");
    console.log(inputValue.toFixed());
  } else {
    console.log("string型です");
    console.log(inputValue.toLowerCase());
  }
}

function isNumberWrong(value: unknown): boolean {
  return typeof value === "number";
}

function outValue2(inputValue: boolean | string) {
  if (isNumberWrong(inputValue)) {
    console.log("number型です");
    console.log(inputValue.toFixed());
  } else {
    console.log("string型です");
    console.log(inputValue.toLowerCase());
  }
}
