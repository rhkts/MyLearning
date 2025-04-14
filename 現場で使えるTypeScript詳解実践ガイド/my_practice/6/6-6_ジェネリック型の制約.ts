//extendsによる制約
class DataStorage<T extends number | string> {
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

//stringとnumber以外を渡そうとするとエラーになる
// let stringStorage = new DataStorage<boolean>();

//keyofとの組み合わせ

interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

const parson: Person = {
  name: "○○ 先生",
  age: 20,
  hobbies: ["スポーツ観戦", "散歩"],
};

//Personオブジェクトから動的に型を取得する関数
function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

//"name"型を取得する
console.log(getProperty(parson, "name"));

//keyofとextendsの組み合わせ
function getSpecificProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(getSpecificProperty(parson, "name"));
