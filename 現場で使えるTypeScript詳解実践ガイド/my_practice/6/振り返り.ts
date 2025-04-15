class ColorStorage<T> {
  private colos: T[] = [];

  addColor(color: T): void {
    this.colos.push(color);
  }

  getAllColors(): T[] {
    return [...this.colos];
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
  getAllItems(): T[] {
    return [...this.items];
  }
}

class NumberStorageWithSum extends DataStorage<number> {
  sum(): number {
    return this.getAllItems().reduce((acc, cur) => acc + cur);
  }
}

let testData = new NumberStorageWithSum();
testData.add(5);
testData.add(10);
testData.add(15);
console.log(testData.sum());

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
  remove(item: T) {
    this.items = this.items.filter((element) => element !== item);
  }
}

const hs = new HistoryStorage<string>();
hs.add("A");
hs.add("B");
hs.remove("A");
hs.add("C");

console.log(hs.getAllItems()); // ["B", "C"]
console.log(hs.getHistory());

interface Pair<T> {
  first: T;
  second: T;
}

function swap<T>(pair: Pair<T>): Pair<T> {
  return { first: pair.second, second: pair.first };
}

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

interface ApiResponse<T> {
  status: string;
  data: T;
}

class ApiWrapper<T> {
  private response: ApiResponse<T>;
  constructor(response: ApiResponse<T>) {
    this.response = response;
  }

  getDate(): T {
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
console.log();
