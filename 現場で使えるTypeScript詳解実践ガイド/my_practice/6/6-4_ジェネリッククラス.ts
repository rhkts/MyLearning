//ジェネリッククラスの宣言
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

  deleteItem(item: T): T[] {
    const result = this.items.filter((data) => data !== item);
    return result;
  }
}

//ジェネリッククラスのインスタンス化
//型引数にnumber型を指定してインスタンス化
console.log("-- number --");
let numberStorage = new DataStorage<number>();
numberStorage.add(10);
// numberStorage.add("文字列は追加できない");
console.log(numberStorage.getItem(0));

numberStorage.add(11);
numberStorage.add(12);
numberStorage.add(13);
numberStorage.add(14);
numberStorage.add(15);
console.log(numberStorage.getAllItems());
console.log(numberStorage.deleteItem(11));

console.log("-- string --");
let greetStorage = new DataStorage<string>();
greetStorage.add("おはよう");
greetStorage.add("こんにちは");
greetStorage.add("こんばんは");

console.log(greetStorage.getAllItems());

console.log("-- コンストラクタの追加と型推論 --");
class DataStorageWithConstructor<T = number> {
  private items: T[] = [];

  //コンストラクタの追加と型推論
  constructor(initialItems?: T[]) {
    if (initialItems) {
      this.items.push(...initialItems);
    }
  }

  add(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getAllItems(): T[] {
    return [...this.items];
  }

  deleteItem(item: T): T[] {
    const result = this.items.filter((data) => data !== item);
    return result;
  }
}

let nameStorage = new DataStorageWithConstructor(["佐藤", "千葉"]);
console.log(nameStorage.getAllItems());

console.log("-- ジェネリッククラスの継承 --");
//DataStorage<T>クラスを継承
class DataStorageStrLogger extends DataStorage<string> {
  printAllItems(): void {
    const allItems = this.getAllItems();
    console.log(`保存しているデータ: ${allItems}`);
  }
}

let stringStorage2 = new DataStorageStrLogger();
stringStorage2.add("JavaScript");
stringStorage2.add("TypeScript");
stringStorage2.printAllItems();

class DataStorageNumLogger extends DataStorage<number> {
  printAllItems(): void {
    const allItems = this.getAllItems();
    console.log(`保存しているデータ: ${allItems}`);
  }
}

let stringStorage3 = new DataStorageNumLogger();
stringStorage3.add(1);
stringStorage3.add(2);
//stringStorage3.add("TypeScript"); //number型以外はエラーになる
stringStorage3.printAllItems();

//継承時に型引数を指定しなければエラーになる
// class ErrorStorage extends DataStorage{
// }

class DataStorageSample<T> extends DataStorage<T> {
  printAllItems(): void {
    const allItems = this.getAllItems();
    console.log(`保存しているデータ: ${allItems}`);
  }

  getFirstItem(): T {
    return this.getItem(0);
  }
}

let sampleStorage = new DataStorageSample<string>();
sampleStorage.add("a");
sampleStorage.add("b");
sampleStorage.add("c");
//sampleStorage.add(true);//string型ではないためエラーになる
console.log(sampleStorage.getFirstItem());

console.log("-- ジェネリックインターフェイスの拡張 --");
interface IStorage<T> {
  add(item: T): void;
  getItem(index: number): T;
  getAllItems(): T[];
  deleteItem(item: T): T[];
}

class StorageClass<T> implements IStorage<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getAllItems(): T[] {
    return [...this.items];
  }

  deleteItem(item: T): T[] {
    const result = this.items.filter((data) => data !== item);
    return result;
  }
}
