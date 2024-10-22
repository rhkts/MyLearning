//インターフェイス

//zenn
//## インターフェイス
//オブジェクトの構造を定義するのに特化した機能。
//インターフェイスの宣言
interface Pet {
  name: string;
  age: number;
}

//実際にインターフェイスを用いた型指定
//変数`pochi`に`Pet`インターフェイスを指定
let pochi: Pet = {
  name: "pochi",
  age: 3,
};

//次の書き方はエラーになる
//型 'string' を型 'Pet' に割り当てることはできません。
// pochi = "tama";
//型 'string' を型 'number' に割り当てることはできません。
// pochi = {
//     name: "pochi",
//     age: "3"
// }

//(余談)シグネチャって？
//関数やメソッドの**型情報を定義**するときに使われる。
//例えば関数シグネチャとは・・・
//その関数が受け取る引数の型や戻り値の型を示す。
//```js
//function greet(name:string):string;
//```
//このシグネチャは、`greet`という関数が`string`型の`name`を受け取り、`string`型を返却することを示す。

//インターフェイスとメソッド
//インターフェイスを使うと、オブジェクトが実装すべきメソッドも定義できる。
//プロパティ名の末尾に`?`を付けることによって、オプショナルプロパティ=省略可能なプロパティを設定できる。
//さらに、`readonrly`をプロパティ名の前につけることによって、読み取り専用のプロパティを設定できる。
interface PetWithMethod {
  name: string;
  age: number;
  cry(word: string): void;
  favorite(word: string): void;
  //オプショナルプロパティ
  hair_color?: string;
  readonly coat: string;
}

const tama: PetWithMethod = {
  name: "tama",
  age: 3,
  cry(word) {
    console.log(word);
  },
  favorite(word) {
    console.log(word);
  },
  //hair_color は省略
  coat: "茶色",
};

tama.cry("にゃんにゃん");
tama.favorite("好きなことは寝ること");
//tama.coat = "白"; //読み取り専用プロパティであるため、'owner' に代入することはできません。
