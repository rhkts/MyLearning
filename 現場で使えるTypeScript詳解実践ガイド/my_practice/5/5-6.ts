let input: unknown;

//ユーザーの操作やAPI処理など

//変数inputの型をstring型にアサーション
let result: string;
result = input as string;

//型アサーションができない例
let stringValue: string;

//string型をnumber型に型アサーションしようとすると・・・
let numberValue: number;
// numberValue = stringValue as number;
// → 型 'string' から型 'number' への変換は、互いに十分に重複できないため間違っている可能性があります。意図的にそうする場合は、まず式を 'unknown' に変換してください。

//dom操作を利用した例
const elementA = document.querySelector(".someClass");
//Element | null のユニオン型

//型アサーションによる型の変更
const elementB = document.querySelector(".someClass") as HTMLInputElement;

const elementC = document.querySelector<HTMLInputElement>(".someClass");

const elementD = document.getElementById(".someId") as HTMLInputElement;

//非アサーション
function fetchData() {
  const resultData = Math.random() > 0.5 ? "結果だよ！" : null;
  return resultData;
}

let data: string | null = fetchData();

const resultData: string = data!;

//constアサーション
let obj = {
  x: 10,
  y: "こんにちは",
} as const;

let arr = [1, 2, 3] as const; //readonly [1, 2, 3]型
