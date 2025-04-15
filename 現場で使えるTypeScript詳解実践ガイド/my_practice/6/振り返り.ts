class LimitedStorage<T extends string | number> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }
}

type Product = {
  id: number;
  name: string;
  price: number;
};

function getProp<T, K extends keyof T>(item: T, key: K) {
  return item[key];
}
const item: Product = {
  id: 1,
  name: "Keyboard",
  price: 3000,
};

const result = getProp(item, "name");

function average<T extends number[]>(values: T): number {
  // let result = 0;
  // values.forEach((value) => (result += value));
  // result = result / values.length;
  // return result;

  const sum = values.reduce((acc, val) => acc + val, 0);

  return sum / values.length;
}
