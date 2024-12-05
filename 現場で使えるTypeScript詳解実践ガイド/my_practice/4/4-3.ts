//### アクセス修飾子
//クラス内のプロパティやメソッドのメンバーがどの範囲からアクセス可能か制御することができる。

//#### public
//`public`修飾子を持つメンバー(プロパティ、メソッド)はクラスの内側、外側問わずにアクセス可能。
//アクセス修飾子を指定していなければ、常に`public`になる。
// class PersonClass {
//   public name: string; //明示的に指定
//   age: number; //デフォルトでpublic

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   public greet() {
//     console.log(
//       //Person内で name と age にアクセス
//       `こんにちは！　私の名前は ${this.name} です。年齢は ${this.age}です！`
//     );
//   }
// }

// const taro = new PersonClass("太郎", 20); //taroというインスタンス(実体)を生成。

//Personの外側からアクセス
// console.log(taro.name);
// console.log(taro.age);
// taro.greet();

//#### private
//`private`修飾子を持つメンバーはクラス内部のみアクセス可能。
class PersonClass {
  public name: string;
  age: number;
  private country: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.country = address;
  }

  public greet() {
    console.log(
      `こんにちは！　私の名前は ${this.name} です。年齢は ${this.age}です！`
    );
  }

  public introduceMyCountry() {
    //PersonClass内で address にアクセス可能。
    console.log(`出身国は ${this.country} です！`);
  }
}

const taro = new PersonClass("太郎", 20, "日本"); //taroというインスタンス(実体)を生成。

//PersonClassの外側からはアクセスできない。
//console.log(taro.country); //プロパティ 'country' はプライベートで、クラス 'PersonClass' 内でのみアクセスできます。ts(2341)

taro.introduceMyCountry();
