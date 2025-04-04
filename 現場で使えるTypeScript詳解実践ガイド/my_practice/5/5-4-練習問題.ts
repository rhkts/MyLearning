// 問題1: 型ガードの基本
// 以下の関数 isString は、引数が文字列かどうかを判定する型ガードです。
// isString を使って、checkValue 関数が文字列の場合にのみ処理を実行するように修正してください。
// function isString(value: unknown): value is string {
//     return typeof value === "string";
//   }

//   function checkValue(value: unknown) {
//     if (/** ここを修正 **/) {
//       console.log("文字列の長さ:", value.length);
//     } else {
//       console.log("文字列ではありません");
//     }
//   }

//   checkValue("Hello");
//   checkValue(42);
console.log("---- 問題1 ----");
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function checkValue(value: unknown) {
  if (isString(value)) {
    console.log("文字列の長さ:", value.length);
  } else {
    console.log("文字列ではありません");
  }
}

checkValue("Hello");
checkValue(42);

console.log("---- 問題2 ----");
// 問題2: ユニオン型の型ガード
// 以下の関数 printValue では、value の型に応じて異なる処理を行いたいです。
// 適切な型ガードを使って、string の場合は toUpperCase()、number の場合は toFixed(2) を実行してください。

// ts
// コピーする
// 編集する
// function printValue(value: string | number) {
//   // ここに型ガードを追加
//   console.log(value.toUpperCase()); // string の場合
//   console.log(value.toFixed(2)); // number の場合
// }

// printValue("hello");
// printValue(3.1415);

function printValue(value: string | number) {
  // ここに型ガードを追加
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string の場合
  } else {
    console.log(value.toFixed(2)); // number の場合
  }
}

console.log("---- 問題3 ----");
// 問題3: in 演算子を使った型ガード
// 以下の Animal 型と isDog 型ガード関数を完成させてください。
// isDog は Dog 型のオブジェクトかどうかを判定します。

// ts
// コピーする
// 編集する
// type Dog = { bark: () => void };
// type Cat = { meow: () => void };
// type Animal = Dog | Cat;

// function isDog(animal: Animal): animal is Dog {
//   // ここに型ガードを追加
// }

// const dog: Animal = { bark: () => console.log("Woof!") };
// const cat: Animal = { meow: () => console.log("Meow!") };

// if (isDog(dog)) {
//   dog.bark();
// }
// if (isDog(cat)) {
//   cat.bark(); // これは実行されないはず
// }
// ヒント

// オブジェクトのプロパティの存在チェックには in を使えます！

// 準備ができたら、解答を送ってください！

type Dog = { bark: () => void };
type Cat = { meow: () => void };
type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return "bark" in animal;
}

function isCat(animal: Animal): animal is Cat {
  return "meow" in animal;
}

const dog: Animal = { bark: () => console.log("Woof!") };
const cat: Animal = { meow: () => console.log("Meow!") };

if (isDog(dog)) {
  dog.bark();
}
if (isDog(cat)) {
  cat.bark(); // これは実行されないはず
}

if (isCat(dog)) {
  dog.meow(); // これは実行されないはず
}
if (isCat(cat)) {
  cat.meow();
}

console.log("---- 問題4 ----");
// 問題4: instanceof を使った型ガード
// 以下の getArea 関数は Square または Circle のインスタンスを受け取り、それぞれの面積を計算する関数です。
// 適切な型ガードを使って getArea を完成させてください。

// ts
// コピーする
// 編集する
// class Square {
//   constructor(public side: number) {}
// }

// class Circle {
//   constructor(public radius: number) {}
// }

// function getArea(shape: Square | Circle): number {
//   // ここに型ガードを追加
// }

// console.log(getArea(new Square(5))); // 25
// console.log(getArea(new Circle(3))); // 28.27（円の面積: πr^2）
// ヒント

// クラスのインスタンスチェックには instanceof が使えます！

// Math.PI * r * r で円の面積を求められます

// 解けたら送ってください！応援してます🔥

class Square {
  constructor(public side: number) {}
}

class Circle {
  constructor(public radius: number) {}
}

function getArea(shape: Square | Circle): number {
  if (shape instanceof Square) {
    return shape.side * shape.side;
  } else {
    return shape.radius * shape.radius * 3.14;
  }
}

console.log(getArea(new Square(5))); // 25
console.log(getArea(new Circle(3))); // 28.27（円の面積: πr^2）

console.log("---- 問題5 ----");
// 問題5: 型ガードを使って unknown 型を処理する
// 以下の handleInput 関数では、value の型が unknown です。
// この値が 配列（Array）かどうか を判定し、配列であれば要素数を出力してください。
// そうでなければ "配列ではありません" と出力してください。

// ts
// コピーする
// 編集する
// function handleInput(value: unknown) {
//   // 型ガードを使って配列かどうかをチェックしてください
// }

// handleInput([1, 2, 3]); // => 要素数: 3
// handleInput("hello");   // => 配列ではありません
// ヒント

// 配列かどうかは Array.isArray() を使います！

// がんばってください、応援してます！🔥
function handleInput(value: unknown) {
  // 型ガードを使って配列かどうかをチェックしてください
  if (Array.isArray(value)) {
    console.log(value.length);
  } else {
    console.log("配列ではありません。");
  }
}

handleInput([1, 2, 3]); // => 要素数: 3
handleInput("hello"); // => 配列ではありません
