//P108 型の拡大

//型注釈による型の拡大の防止
const PI: 3.14 = 3.14; //リテラル型(3.14)
let num = PI; //リテラル型(3.14)

//配列型の拡大
const fruits = ["apple", "grape", "peach"]; //string[]
const primitives = [1, "hello", true]; //(number | string | boolean)[] → typescriptはすべての型と互換性のある型を推論する。
//↑の場合は`number`、`string`、`boolean`型をメンバーにもつユニオン型になる。

//any型と変数のスコープ
function fn1() {
  let x; //any型
  x = 123;
  x = "abc";

  return x;
}

// let x = fn1();
// x = 1;

//xはany型に拡大されるが、関数の戻り値としては`fn1`関数を離れると`string`型になる。
//このコードを実行すると`error TS2322: Type 'number' is not assignable to type 'string'.`となる。
//TypeScriptによって関数`fn1`の戻り値が`string`型であると推論されたから、変数`x`に`number`型の`1`を代入しようとすると型の不一致でエラーになる。

function fn2() {
  let list = []; //any[]
  list.push(1);
  list.push("Jane");
  return list;
}

const list = fn2(); //(number | string)[]として扱われる
list.push(true); //型 'boolean' の引数を型 'string | number' のパラメーターに割り当てることはできません。
