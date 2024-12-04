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
// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     greet(greeting: string): void {
//         console.log(`${greeting} 私の名前は ${this.name} 、年齢は ${this.age}です。`);
//     }
// }

//const taro = new Person("テスト　太郎", 20);
//`greet`メソッドの呼び出し
//taro.greet("こんにちは！");

//`greet`メソッドを引数無しで呼び出したり、違う型を引数として渡すとエラーとなる。
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

//###型としてのクラス
class Person {
  readonly name: string;
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

//変数`father`の型として`Person`クラスを指定。
let father: Person;
father = new Person("father Name", 55);

//`faher`は`Person`型であるため、`string`型はエラー。
//father = "fater Name2" //型 'string' を型 'Person' に割り当てることはできません。

//余談
//オブジェクトリテラルって？
//まず、リテラルとは **ソースコード内で直接表現される固定の値**のことを指す。
//たとえば`文字リテラル`、`数値リテラル`、`nullリテラル`など。
//https://jsprimer.net/basic/data-type/
//#### 文字リテラル
//`"`と`"`で囲まれた範囲が文字リテラルで、**文字列型のデータ**であることを示す。
//次のコードだと、"日本語"が文字リテラルに該当する。
const language = "日本語";
//#### オブジェクトリテラル
//プロパティ名とプロパティに関連付けされたオブジェクトの値のペアを集めたリストのことを指す。
//`{`と`}`で囲まれる。
const objSapmple = {
  key1: "value1",
  key2: "value2",
};
//`objSample`のプロパティを参照する方法は次の２種類がある。
//ドット`.`で参照
console.log(objSapmple.key1);
//ブラケット`[]`で参照
console.log(objSapmple["key2"]);

let mother: Person;
mother = {
  name: "mother Name",
  age: 53,
  greet(greeting: string): void {
    console.log(
      `${greeting} 私の名前は ${this.name} 、年齢は ${this.age}です。`
    );
  },
};
mother.greet("yeah");

//### クラスの継承
//`extends`キーワードを使って継承する。
class ParentClass {
  parentProperty: string = "これは親クラスのプロパティ";

  parentMethod() {
    console.log("これは親クラスのconsole");
  }
}

class ChildClass extends ParentClass {
  childProperty: string = "これは子クラスのプロパティ";

  childMethod() {
    console.log("これは子クラスのconsole");
  }
}

//`ParentClass`を継承した`ChildClass`は`ParentClass`内のプロパティとメソッドをすべて受け継いでいる。
//それに新たにプロパティやメソッドを追加することも可能。
//次の例は、`ParentClass`を継承した`ChildClass`を使ってインスタンス`childObj`を作成。
//`childObj`から、`ParentClass`のメソッドと`ChildClass`のメソッドをそれぞれ呼び出している例。
const childObj = new ChildClass();
childObj.parentMethod();
childObj.childMethod();
//それぞれのプロパティを呼び出すには次の通り。
console.log(childObj.parentProperty);
console.log(childObj.childProperty);

//### オーバーライド
//親クラスのメソッドを子クラスで再定義すること。

class ParentClass2 {
  parentProperty: string = "これは親クラスのプロパティ";

  parentMethod() {
    console.log("これは親クラスのconsole");
  }
}

class ChildClass2 extends ParentClass2 {
  parentProperty: string = "親プロパティを上書き(オーバーライド)";

  parentMethod() {
    console.log("親メソッドを上書き(オーバーライド)");
  }

  childProperty: string = "これは子クラスのプロパティ";

  childMethod() {
    console.log("これは子クラスのconsole");
  }
}
console.log("----------");
const objSample2 = new ChildClass2();
console.log(objSample2.parentProperty);
objSample2.parentMethod();
console.log(objSample2.childProperty);
objSample2.childMethod();
console.log("----------");

//#### コンストラクタのオーバーライド
//##### コンストラクタとは
//クラスの中で使うことができる、プロパティの設定や初期化を行うメソッド。
//親クラスのコンストラクタをオーバーライドする場合は、`super`キーワードを使って親クラスのコンストラクタを
//呼び出す必要がある。
class ParentClass3 {
  constructor(name: string) {
    console.log(`Parent: ${name}`);
  }
}

class ChildClass3 extends ParentClass3 {
  constructor(name: string, age: number) {
    //派生クラスのコンストラクターには 'super' の呼び出しを含める必要があります。
    super(name);
    console.log(`Child: name → ${name}, age → ${age}`);
  }
}
const childObj3 = new ChildClass3("Child", 10);

//コンストラクタのオーバーライドを行わない場合
class ChildClass4 extends ParentClass3 {}
const childObj4 = new ChildClass4("Child");
