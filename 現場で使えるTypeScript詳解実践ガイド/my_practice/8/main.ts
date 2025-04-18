//まとめてインポート
import { PI, square, Rectangle } from "./calc.js";
//型だけをまとめてインポート
import type { Point, LengthUnit } from "./calc";

console.log(PI);

const result = square(3);
console.log(result);

const rect = new Rectangle(5, 10);
console.log(rect.getArea());
