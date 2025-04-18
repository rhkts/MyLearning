import _ from "lodash";
import isOdd from "is-odd";

const list = [1, 2, 3, 4, 5];
const strList = ["あ", "い", "う"];

const shuffled = _.shuffle(strList);

console.log(shuffled);

console.log(isOdd(2));
console.log(isOdd(3));
