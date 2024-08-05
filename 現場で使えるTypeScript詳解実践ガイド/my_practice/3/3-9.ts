//3-9 unknown型
//3-39 unknown型の変数への代入
let value3_39_1: unknown = 1; //unknown型なのでどんな値も代入可能

let value3_39_2: number = value1; //number型にunknown型を代入することはできない

//3-40 unknown型の変数の演算
console.log(value3_39_1 + 3); //unknown型は算術演算が許可されていない

//3-41 unknown型の変数を他の型へ特定
let value3_39_3: unknown = 10; //unknown型
if (typeof value3_39_3 === "number") {
  console.log(value3_39_3 + 3); //OK
}

// -- zenn --
//## unknown型
//型の安全性を維持しながら未知の型の値を扱うことができる型
//`any`型と同じように、どんな値でも代入できるようになるが、`unknown`型は変数の型チェックを無視するわけではない。

let unknownValue1: unknown = 1; //unknown型

let unknownValue2: number = unknownValue1; //number型にunknown型を代入することはできない //型 'unknown' を型 'number' に割り当てることはできません。
let unknownValue3: unknown = unknownValue1; //unknown型にunknown型を代入することはできる(同一の型だから)

//`unknown型`は算術演算が許可されていない
let sumValue1 = unknownValue1 + 5;
//'unknownValue1''は 'unknown' 型です。
let sumValue2 = unknownValue1 * 5;
//'unknownValue1''は 'unknown' 型です。

//`unknown`型の変数の操作は限られているが、比較演算子は許可されている。(`==`,`!=`,`===`,`!==`,`>`,`<`,`>=`,`<=`,)
let unknownValue4: unknown = "a";
let unknownValue5: unknown = "a";
if (unknownValue4 === unknownValue5) {
  console.log("OK");
} else {
  console.log("NG");
}

//`unknown`型の変数が「一体何の型なのか」を確認し、確認がとれたらその変数を`確認した型`として扱うことができる。
