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

class DataStorage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getAllItems(): T[] {
    return [...this.items];
  }
}

class NumberStorageWithSum extends DataStorage<number> {
  sum(): number {
    let result = 0;
    this.getAllItems().forEach((element) => {
      result += element;
    });
    return result;
  }
}

let data = new NumberStorageWithSum();
data.add(5);
data.add(10);
data.add(15);

console.log(data.sum());

class HistoryStorage<T> {
  private items: T[] = [];
  private history: T[] = [];

  add(item: T): void {
    this.items.push(item);
    this.history.push(item);
  }

  getAllItems(): T[] {
    return [...this.items];
  }

  getHistory(): T[] {
    return [...this.history];
  }

  remove(item: T): void {
    this.items = this.items.filter((element) => element !== item);
  }
}

const hs = new HistoryStorage<string>();
hs.add("A");
hs.add("B");
hs.remove("A");
hs.add("C");
console.log(hs.getAllItems()); // ["B", "C"]
console.log(hs.getHistory()); // ["A", "B", "C"]

interface Pair<T> {
  first: T;
  second: T;
}

function swap<T>(pair: Pair<T>): Pair<T> {
  const result: Pair<T> = {
    first: pair.second,
    second: pair.first,
  };

  return result;
}

const input = { first: "apple", second: "banana" };
const result = swap(input);
console.log(result); // { first: "banana", second: "apple" }

interface Container<T> {
  addItem(item: T): void;
  getItem(): T;
}

class Box<T> implements Container<T> {
  private item!: T;
  addItem(item: T): void {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}

const numberBox = new Box<number>();
numberBox.addItem(5);
console.log(numberBox.getItem()); // 5

const stringBox = new Box<string>();
stringBox.addItem("hello");
console.log(stringBox.getItem()); // "hello"

interface ApiResponse<T> {
  status: string;
  data: T;
}

class ApiWrapper<T> {
  private response: ApiResponse<T>;
  constructor(response: ApiResponse<T>) {
    this.response = response;
  }

  getData(): T {
    return this.response.data;
  }

  isSuccess(): boolean {
    return this.response.status === "success";
  }
}
const response: ApiResponse<string> = {
  status: "success",
  data: "Hello from API",
};

const wrapper = new ApiWrapper(response);
console.log(wrapper.isSuccess()); // true
console.log(wrapper.getData()); // "Hello from API"
