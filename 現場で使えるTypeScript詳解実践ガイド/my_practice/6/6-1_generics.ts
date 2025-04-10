//ジェネリクスってなに？を学習する
//ジェネリクスの基本的な考え方と使い方を学習する

console.log("any型による実装");
//パラメータの型にany型の配列を指定
// function getLastItem(array: any[]) {
//   return array[array.length - 1];
// }

const arrayStrings = ["あ", "い", "う", "え", "お"];
let lastString = getLastItem(arrayStrings);

console.log(lastString); //lastStringはany型になる

const arrayNumbers = [1, 2, 3, 4, 5];
let lastNumber = getLastItem(arrayNumbers);

console.log(lastNumber); //lastNumberはany型になる

//関数オーバーロードを使ってみる
function getLastItem(array: string[]): string;
function getLastItem(array: number[]): number;
//必要に応じて型のオーバーロードを追加しなければならない

//getLastItem本体
function getLastItem(array: string[] | number[]): any {
  return array[array.length - 1];
}

//ジェネリクスによる実装
function sampleGetLastItem<T>(array: T[]): T {
  return array[array.length - 1];
}

const sampleNumbers = [1, 2, 3, 4, 5];
let sampleLastNumber = sampleGetLastItem(sampleNumbers);

console.log(sampleLastNumber);
