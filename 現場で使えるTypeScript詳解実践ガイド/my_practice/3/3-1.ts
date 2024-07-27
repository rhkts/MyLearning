//3-1-1 number型の使用例
let age: number = 22; //型注釈でnumber
let height = 180.5; //型推論でnumber
let hexadecimal: number = 0xff; //16進数もnumber
let notANumber = NaN; // 数字ではないが、number
let positiveInifility: number = Infinity; //無限大を表す

//3-1-2 string型の使用例
let firstName: string = "Alice"; //型注釈でstring
let greeting = "Hello TypeScript!"; //型推論でstring
let introduceMessage = `Hello, my name is ${firstName}`; //型推論でstring
let sample1 = `テンプレートリテラルに数値を埋め込むと・・・ ${age} 型推論でstring`;

//3-1-3 boolean型の使用例
let isCompleted: boolean = false; //型注釈でboolean
let isValid = true; //型推論でboolean

//3-1-4 異なる型の値を代入しようとした例
age = "22"; //number型にstring型代入しようとしている
firstName = 0; //string型にnumber型を代入しようとしている
isCompleted = 1; //boolean型にnumber型を代入しようとしている

//3-1-5
age.toUpperCase(); //number型には存在しない不正なメソッドの呼び出し
//.toUpperCase() 小文字を大文字に変換するメソッド

firstName.toFixed(); //string型には存在しない不正なメソッドの呼び出し
//.toFiexd() 数値を固定小数点表記に整形するメソッド

isCompleted + isCompleted; //boolean型には許可されていない +演算子を適用
isCompleted + 1; //boolean型には許可されていない +演算子を適用
//JavaScriptでは、True を 1 に暗黙的に変換して計算するが、TypeScriptでは暗黙的な型変換を推奨していないためエラーとなる
