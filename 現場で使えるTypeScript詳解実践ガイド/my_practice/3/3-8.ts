//3-8 any型
//3-38 any型の変数の挙動
let value1: any = 1; //any型
value1 = "noTypeCheck"; //any型
value1.oncheck(); //型チェックが行われないのでエラーにならない

let value2: any = [1, 2, 3]; //any型
let value3 = value1 + value2;

// -- zenn --
//## any型
//型の制約なしに任意の値を受け入れる型。
//`any`型の変数には型チェックが適用されない。

let anyValue1: any = 1; //any型
anyValue1 = "noTypeCheck"; //any型
anyValue1.oncheck(); //型チェックが行われないのでエラーにならない

let anyValue2: any = [1, 2, 3]; //any型
let anyValue3 = value1 + value2;

//コンパイル自体は問題なく通るが、実際にこのコードが処理されるタイミングでエラーとなる。

// value1.oncheck();
//        ^
// TypeError: value1.oncheck is not a function

//極力使わない方がよいが、外部ライブラリやAPIから返却されるデータ型が不明な場合に利用することがある。
