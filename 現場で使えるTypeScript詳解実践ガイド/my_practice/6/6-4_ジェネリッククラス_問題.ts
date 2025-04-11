console.log("-- 練習問題1 --");
class ColorStorage<T> {
  private colors: T[] = [];

  addColor(color: T): void {
    this.colors.push(color);
  }

  getAllColors(): T[] {
    return [...this.colors];
  }
}

let stringColorStorage = new ColorStorage<string>();
stringColorStorage.addColor("red");
stringColorStorage.addColor("green");
stringColorStorage.addColor("blue");

console.log(stringColorStorage.getAllColors());

console.log("-- 練習問題2 --");
class DataStorage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }
  getAllItems(): T[] {
    return [...this.items];
  }
}

class NumberStorageWithSum<T> extends DataStorage<T> {
  sum(items: number[]): number {
    let result = 0;
    items.forEach((value) => (result += value));
    return result;
  }
}

let numberData = new NumberStorageWithSum<number>();
numberData.add(5);
numberData.add(10);
numberData.add(15);

console.log(numberData.sum(numberData.getAllItems()));

console.log("-- 練習問題2.5 --");
class HistoryStorage<T> {
  private items: T[] = [];
  private histroy: T[] = [];

  add(item: T): void {
    this.items.push(item);
    this.histroy.push(item);
  }

  getAllItems(): T[] {
    return [...this.items];
  }

  remove(value: T): void {
    this.items = this.items.filter((item) => item !== value);
  }

  getHistory(): T[] {
    return this.histroy;
  }

  riset(): void {
    this.items = [];
    this.histroy = [];
  }
}

const hs = new HistoryStorage<string>();
hs.add("A");
hs.add("B");
hs.remove("A");
hs.add("C");

console.log(hs.getAllItems());
console.log(hs.getHistory());

console.log("-- 練習問題3 --");
interface Pair<T> {
  first: T;
  second: T;
}

function swap<T>(pair: Pair<T>): Pair<T> {
  return { first: pair.second, second: pair.first };
}

const input = { first: "apple", second: "banana" };
const result = swap(input);
console.log(result);

console.log("-- 練習問題4 --");
interface Container<T> {
  addItem(item: T): void;
  getItem(): T;
}

//回答１
class Box<T> implements Container<T> {
  //あとで絶対に初期化されるということをコンパイラに伝える
  private item!: T;
  addItem(item: T): void {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}

//回答2
class Box2<T> implements Container<T> {
  //null許容する
  private item?: T;
  addItem(item: T): void {
    this.item = item;
  }

  getItem(): T {
    if (this.item === undefined) {
      throw new Error("値がセットされていません");
    } else {
      return this.item;
    }
  }
}

const numberBox = new Box<number>();
numberBox.addItem(5);
console.log(numberBox.getItem());

const stringBox = new Box<string>();
stringBox.addItem("hello");
console.log(stringBox.getItem());

console.log("-- 実務っぽい問題 --");
type ApiResponse<T> = {
  status: string;
  data: T;
};

class ApiWrapper<T> {
  private response: ApiResponse<T>;
  constructor(response: ApiResponse<T>) {
    this.response = response;
  }

  getData(): T {
    return this.response.data;
  }

  isSuccess(): boolean {
    if (this.response.status === "success") {
      return true;
    } else {
      return false;
    }
  }
}

const response: ApiResponse<string> = {
  status: "success",
  data: "Hello from API",
};

const wrapper = new ApiWrapper(response);

console.log(wrapper.isSuccess());
console.log(wrapper.getData());
