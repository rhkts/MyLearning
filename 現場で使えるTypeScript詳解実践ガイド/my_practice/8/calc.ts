//方法①: 型宣言の前にexportを置く
// export interface Point {
//   x: number;
//   y: number;
// }
interface Point {
  x: number;
  y: number;
}

type LengthUnit = "m" | "cm" | "mm";
// export type LengthUnit = "m" | "cm" | "mm";

//方法②: 型だけをまとめてエクスポート
export type { Rectangle, Point, LengthUnit };

//方法③: 型名の前にtypeを明記してエクスポート
// export { PI, square, Rectangle, type Point, type LengthUnit };

const PI = 3.14;

function square(x: number) {
  return x ** 2;
}

class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

//名前付きエクスポート
export { PI, square };
