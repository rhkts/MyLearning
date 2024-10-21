// 3-11-6 関数オーバーロード

//引数を加算して返す関数
// function addNumbers(a, b) {
//   return a + b;
// }

// let resultAdd_1 = addNumbers(1, 2);
// let resultAdd_2 = addNumbers("1", "2");
// let resultAdd_3 = addNumbers(1, "2");

//TypeScriptの型推論
// function addNumbers(a: number | string, b: number | string) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else {
//     return a.toString() + b.toString();
//   }
// }

// let resultAdd_4 = addNumbers("1", "2");
// console.log(resultAdd_4.includes("1"));

//呼び出しシグネチャを使った例
//オーバーロードシグネチャ
function addNumbers(a: number, b: number): number;
function addNumbers(a: string, b: string): string;
function addNumbers(a: number, b: string): string;
function addNumbers(a: string, b: number): string;

//関数本体
function addNumbers(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

let resultAdd_5 = addNumbers("1", "2");
console.log(resultAdd_5.includes("1"));
