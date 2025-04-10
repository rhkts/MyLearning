//特定の型には依存せずに、多様な型に対応するジェネリック関数の定義方法を学ぶ
//型パラメータと型引数の概念を理解する！

//6-2-4 型パラメータ(型変数)と型引数

console.log("--- 型変数 ---");
const hensu = "変数です！";
console.log(hensu);
console.log(hensu.length);

function sampleFunction<KataHensu>(value: KataHensu): KataHensu {
  console.log(value);
  return value;
}

//関数sampleFunctionのスコープ外なので呼び出すことはできない
// let errorVarlue: KataHensu;

console.log("--- 型引数 ---");
const sampleValue = sampleFunction<string>("サンプルコードです");

const sampleValue2 = sampleFunction("サンプルコードです");

function createPairSample<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const numAndStrSample = createPairSample(123, "あいう");
const strPairSample = createPairSample("苗字", "名前");

console.log(numAndStrSample);
console.log(strPairSample);

//関数のデフォルト値
function createPair<T = number, U = string>(first: T, second: U): [T, U] {
  return [first, second];
}

const numAndStr = createPairSample(123, "あいう");
const strPair = createPairSample("苗字", "名前");

console.log(numAndStr);
console.log(strPair);
