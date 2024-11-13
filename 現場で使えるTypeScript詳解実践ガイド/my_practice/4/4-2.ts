//## クラス
//### 基本的な宣言
// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

//`Person`クラスは`name`と`age`プロパティを持ち、インスタンス化するときに初期化している。
//クラスのメンバーはトップクラスで明示的に宣言する必要がある。
//プロパティを宣言せずに、コンストラクタ内でプロパティを初期化しようとするとエラーになる。
// class errorPerson {
//     constructor(name: string, age: number) {
//         this.name = name; //プロパティ 'name' は型 'errorPerson' に存在しません。
//         this.age = age; //プロパティ 'age' は型 'errorPerson' に存在しません。
//     }
// }

//また、コンストラクタ内で初期値されていない場合もエラーになる。
// class errorPerson2 {
//     name: string;
//     age: number; //プロパティ 'age' に初期化子がなく、コンストラクターで明確に割り当てられていません。

//     constructor(name: string, age: number) {
//         this.name = name;
//     }
// }

//新しいオブジェクトの生成方法
//const taro = new Person("テスト　太郎", 20);

//### メソッドの追加
//`Person`クラスに`greet`メソッドを追加。
//`greet`メソッドはstring型のパラメータを持ち、戻り値なし、consoleを出力するメソッド。
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(greeting: string): void {
    console.log(
      `${greeting} 私の名前は ${this.name} 、年齢は ${this.age}です。`
    );
  }
}

const taro = new Person("テスト　太郎", 20);
// `greet`メソッドの呼び出し
taro.greet("こんにちは！");

// `greet`メソッドを引数無しで呼び出したり、違う型を引数として渡すとエラーとなる。
//taro.greet(); //1 個の引数が必要ですが、0 個指定されました。
//taro.greet(["こんにちは！"]); //型 'string[]' の引数を型 'string' のパラメーターに割り当てることはできません。

//### 読み取り専用プロパティ
// class Person {
//     readonly name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     greet(greeting: string): void {
//         console.log(`${greeting} 私の名前は ${this.name} 、年齢は ${this.age}です。`);
//     }
// }

// const taro = new Person("テスト　太郎", 20);
// taro.greet("こんにちは！");
// taro.name = "次郎"; //readonlyプロパティの`name`に上書きはできない。
