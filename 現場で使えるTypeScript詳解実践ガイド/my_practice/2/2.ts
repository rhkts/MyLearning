//2-1 型を明示的に指定
let firstName: string = "BIll";
let age: number = 22;

//2-2 型推論
//マウスオーバーすると型を確認できるよ
let firstName2 = "Myouji"; //初期値から、string型であることを推論
let age2 = 100; //初期値から、number型であることを推論
let testBoolean = true;
let testArray = ["a", "b", "c"]; //string型の配列であることを推論(すごい)
let testArray2 = ["a", 2]; //(string | number)の配列であることを推論
let testArray3 = ["a", 2, true]; //(string | number | boolean)の配列であることを推論

//2-3 異なる型の値を代入
age = "23"; //number に string を代入
//型 'string' を型 'number' に割り当てることはできません。のエラーになる

//2-4 パラメータに型を指定しない場合
function greet(firstName) {
  console.log("Hello, " + firstName);
}
//パラメーター 'firstName' の型は暗黙的に 'any' になります。のエラー
//any の "どんな型でも受け付ける" という性質が、引数:firstName に誤った値を代入してしまう恐れがある
//↑をさけるために、型推論できないときはエラーとして表示してくれる
//正しくは・・・
function greet2(firstName: string) {
  console.log("Hello, " + firstName);
}

//2-5 型に許されていない操作をした場合
console.log(2 + true);
//演算子 '+' を型 'number' および 'boolean' に適用することはできません。のエラー
