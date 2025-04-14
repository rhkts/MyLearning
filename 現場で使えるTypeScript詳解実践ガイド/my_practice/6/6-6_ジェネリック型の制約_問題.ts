console.log("-- 練習問題1 --");

class LimitedStorage<T extends string | number> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }
}

let testData = new LimitedStorage<string>();
testData.add("a");
// testData.add(2);
console.log(testData.getAll());

console.log("-- 練習問題2 --");
type Product = {
  id: number;
  name: string;
  price: number;
};

const item: Product = {
  id: 1,
  name: "Keyboard",
  price: 3000,
};

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const result = getProp(item, "name");
const result2 = getProp(item, "price");
console.log(result);
console.log(result2);

console.log("-- 練習問題3 --");
function average<T extends number[]>(values: T): number {
  let result: number = 0;
  values.forEach((element) => (result += element));
  result = result / values.length;
  return result;
}

const nums = [10, 20, 30];
const avg = average(nums); // 20
console.log(avg);
