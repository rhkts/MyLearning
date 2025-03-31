//## 関数型の互換性

//### 関数型とは
//関数の入力パラメータと戻り値を定義し、その関数構造を方として表現することです。
//基本的な構文
//```ts
let sampleFunction: (hikisu1: string, hikisu2: number) => boolean;
//```
//`sampleFunction`は「string型の引数`hikisu1`とnumber型の`hikisu2`を受け取り、boolean型の値を返却する関数」となります。

//### 戻り値の型
//関数型の変数`function1`と`function2`を用意(引数は指定しない)。
//それぞれ異なるオブジェクトを戻り値とする関数を代入します。
//```ts
let function1 = () => ({ name: "太郎" });
let function2 = () => ({ name: "次郎", age: 20 });
//```
//`function1`は`name`プロパティだけを持つオブジェクト、`function2`は`name`プロパティと`age`プロパティを持つオブジェクトを返却します。

//`function1`と`function2`を使って、関数の互換性を調査します。

//#### 互換性アリ
//```ts
function1 = function2;
console.log(function1());
// →{ name: '次郎', age: 20 }
//`function2`の戻り値のオブジェクト型は`function1`の戻り値のオブジェクト型に必要なプロパティ`name`を保持しています。
//そのため、**`fucntion2`の戻り値の方は`function1`の戻り値のオブジェクトのサブタイプ**となり、型の互換性の条件を満たすため`function1`にfunction2`を代入することができます。

//#### 互換性ナシ
//では、型の互換性がない場合はどうなるか確認してみます。
//```ts
// function2 = function1;
// → 型 '() => { name: string; }' を型 '() => { name: string; age: number; }' に割り当てることはできません。
// プロパティ 'age' は型 '{ name: string; }' にありませんが、型 '{ name: string; age: number; }' では必須です。
// ```

//エラーとなりました。
//`function2`の戻り値のオブジェクト型は`name`と`age`の2種類のプロパティを保持しています。
//しかし、`function1`の戻り値のオブジェクト型は`name`プロパティだけを保持しているため、`function2`の戻り値に必要な`age`プロパティが不足しています。
//そのため安全に型を置き換えることができないため**互換性がない**とみなされてエラーとなります。
