//型の絞り込み(type narrowing)

//5-4-1 代入による型の絞り込み
// let x = Math.random() > 0.5 ? 1 : "Hello TypeScript"; //string | number として型推論される

//x.toUpperCase(); //プロパティ 'toUpperCase' は型 'string | number' に存在しません。プロパティ 'toUpperCase' は型 'number' に存在しません。
//x はnumber型の可能性があるため、`toUppserCase`メソッドを呼び出すことは許可されない。

// x = "abcdefg"; //xの型をstring型に絞り込み
// console.log(x.toUpperCase()); //string型に絞り込みができているため、`toUpperCase`メソッドを呼び出すことができる。

// x = 12345.6789; //xの型をnumber型に絞り込み
// console.log(x.toFixed()); //number型に絞り込みができているため、`toFiexed`メソッドを呼び出すことができる。

//5-4-2 型ガード
//TypeScirptは開発者がコードを読むときと同じように、制御フロー分や演算子を理解して型を絞り込むことができる(は？？？)
//制御構文を使用した課の何千を保証することを型ガード(Type guard)と呼ぶ

//等価性による絞り込み(`===`,`!==`,`==`,`!=`)

// const test1 = "HELLO";
// console.log(test1);
// console.log(typeof test1);
// console.log(test1 === "HELLO" ? true : false);
// if (test1 === "HELLO") {
//   console.log(test1.toLowerCase());
//   console.log(test1.substring(3));
// }

//パターン2
// function testFunction(strOrNum: string | number, strOrBool: string | boolean) {
//   if (strOrNum === strOrBool) {
//     //どちらもstring型(かつ引数の値が一致している)の場合に真となる
//     console.log(strOrNum.toLowerCase());
//     console.log(strOrBool.toLowerCase());
//   } else {
//     //どちらかがstring型以外の場合に偽となる
//     console.log("どちらかがfalseの場合");
//     console.log(strOrNum);
//     console.log(strOrBool);
//   }
// }

// //strOrNum = Japan,strOrBool = "日本"
// testFunction("JAPAN", "CHINA");
// testFunction("JAPAN", true);

//typeof演算子による絞り込み
// function checkValueType(value: string | number) {
//   if (typeof value === "string") {
//     console.log("string型です。");
//     console.log(value.toLowerCase());
//   } else {
//     console.log(value.toFixed());
//   }
// }

// checkValueType("MOJIRETSUDAYO");
// → mojiretsudayo
// checkValueType(3.141592653589);
// → 3

//in演算子による絞り込み
// interface Circle {
//   radius: number;
// }

// interface Square {
//   width: number;
//   height: number;
// }

// const pi = 3.14;

// function getArea(shape: Square | Circle) {
//   if ("radius" in shape) {
//     console.log("円の面積は・・・");
//     console.log(shape.radius * shape.radius * pi);
//   } else {
//     console.log("四角形の面積は・・・");
//     console.log(shape.width * shape.height);
//   }
// }

// const circleObject: Circle = { radius: 2 };
// const squareObject: Square = { width: 3, height: 5 };
// getArea(circleObject);
// getArea(squareObject);

// class Bird {
//   fly() {
//     console.log("飛ぶ");
//   }
// }

// class Fish {
//   swim() {
//     console.log("泳ぐ");
//   }
// }

// function move(animal: Bird | Fish) {
//   if (animal instanceof Bird) {
//     animal.fly();
//   } else {
//     animal.swim();
//   }
// }

// const suzume = new Bird();
// const ayu = new Fish();
// move(suzume);
// → 飛ぶ
// move(ayu);
// → 泳ぐ

interface Circle {
  type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  width: number;
  height: number;
}

const pi = 3.14;

interface Triangle {
  type: "triangle";
  triangleBase: number; //底辺の長さ
  height: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.type) {
    case "triangle":
      console.log("三角形の面積は・・・");
      console.log((shape.triangleBase * shape.height) / 2);
      break;
    case "circle":
      console.log("円の面積は・・・");
      console.log(shape.radius * shape.radius * pi);
      break;
    case "square":
      console.log("四角形の面積は・・・");
      console.log(shape.width * shape.height);
      break;
  }
  // if ("height" in shape) {
  //   console.log("三角形の面積は・・・");
  //   console.log((shape.triangleBase * shape.height) / 2);
  // }
  // if ("radius" in shape) {
  //   console.log("円の面積は・・・");
  //   console.log(shape.radius * shape.radius * pi);
  // } else {
  //   console.log("四角形の面積は・・・");
  //   console.log(shape.width * shape.height);
  // }
}

const circleObject: Circle = { type: "circle", radius: 2 };
const squareObject: Square = { type: "square", width: 3, height: 5 };
const triangleObject: Triangle = {
  type: "triangle",
  triangleBase: 3,
  height: 4,
};
getArea(circleObject);
getArea(squareObject);
getArea(triangleObject);

// 5-4-3
// type RGB = [red: number, green: number, red: number];

// interface Color {
//   red: RGB | string;
//   green: RGB | string;
//   blue: RGB | string;
// }

// const color: Color = {
//   red: [255, 0, 0],
//   green: "#00FF00",
//   blue: [0, 0, 255],
// };
// console.log(color)
// console.log(color.green.toLowerCase());

//satishes演算子を使った例
type RGB = [red: number, green: number, red: number];
interface Color {
  red: RGB | string;
  green: RGB | string;
  blue: RGB | string;
}

const color = {
  red: [255, 0, 0],
  green: "#00FF00",
  blue: [0, 0, 255],
} satisfies Color;

console.log(color.green.toLowerCase());

const wrongColor1 = {
  red: [255, 0, 0],
  green: "#00FF00",
  bl: [0, 0, 255],
  → オブジェクト リテラルは既知のプロパティのみ指定できます。'bl' は型 'Color' に存在しません。
} satisfies Color;

const wrongColor2 = {
  red: [255, 0, 0],
  green: "#00FF00",
  blue: true,
  → 型 'boolean' を型 'string | RGB' に割り当てることはできません。ts(2322)
  5-4.ts(199, 3): 予期された型は、型 'Color' に対してここで宣言されたプロパティ 'blue' から取得されています
} satisfies Color;

