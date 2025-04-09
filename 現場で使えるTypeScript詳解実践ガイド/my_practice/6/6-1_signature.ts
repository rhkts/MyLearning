//シグネチャ

//関数greetのシグネチャ (name: string) => string
function greet(name: string): string {
  return `こんにちは！ ${name}さん`;
}

// 関数の型だけを定義したい場合
type GreetFunction = (name: string) => string;

const greet2: GreetFunction = (name) => {
  return `こんにちは！ ${name}さん`;
};

//オーバーロード
function toStr(value: number): string;
function toStr(value: boolean): string;
function toStr(value: any): string {
  return String(value);
}

//練習問題2
type DescribeUser = (id: number, isAdmin: boolean) => string;

const describeUser: DescribeUser = (id, isAdmin) => {
  return `ID:${id}は管理ですか？ ${isAdmin ? "はい" : "いいえ"}`;
};

console.log(describeUser(1, true));
console.log(describeUser(2, false));

//練習問題3
//オーバーロードのシグネチャ
function checkType(value: number): string;
function checkType(value: string): string;

//関数本体
function checkType(value: number | string) {
  if (typeof value === "number") {
    return `数値です: ${value}`;
  } else {
    return `文字列です: ${value}`;
  }
}

console.log(checkType(123));
console.log(checkType("abc"));
