//3-15 オブジェクトリテラルによるオブジェクトの生成
const person = {
  name: "alice",
  age: 30,
};

//型推論の結果
// {
//     name:string; nameプロパティはsting型
//     age:number; ageプロパティはnumber型
// }

console.log(person.address); //プロパティ 'address' は型 '{ name: string; age: number; }' に存在しません。
person.age = "30"; //型 'string' を型 'number' に割り当てることはできません。

//3-18 型注釈によるオブジェクト型の指定
let book: {
  title: string;
  author: string;
  publishedIn: number;
} = {
  title: "こころ",
  author: "夏目漱石",
  publishedIn: 1914,
};

//3-19 型エイリアスを用いたオブジェクト型の定義
type Book = {
  title: string;
  author: string;
  publishedIn: number;
};

const book2: Book = {
  title: "こころ",
  author: "夏目漱石",
  //   publishedIn: 1934,
};

//3-20 プロパティの不足
const book3: Book = {
  title: "銀河鉄道の夜",
  author: "宮沢賢治",
  publishedIn: 1914,
};

//3-21 ネストされたオブジェクト型
type Employee = {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
};

//3-22 ネストされたオブジェクト型の型エイリアスで書き換え
type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type Employee2 = {
  id: number;
  name: string;
  address: Address;
};

//3-23 過剰プロパティチェック
type Person = {
  name: string;
  age: number;
};
const john: Person = {
  name: "john",
  age: 22,
};
// NG
const alice: Person = {
  name: "Alice",
  age: 30,
  gender: "female",
};

//3-24 過剰プロパティチェックが行われない例
const alice2 = {
  name: "Alice",
  age: 30,
  gender: "female",
};

const alicePerson: Person = alice2;

//3-25 オプショナルプロパティの宣言
type PersonWithOpional = {
  name: string;
  age?: number;
};

//OK
const alice3: PersonWithOpional = {
  name: "Alice",
  age: 29,
};

//OK オプショナルなageプロパティが存在しなくてもよい
const bob: PersonWithOpional = {
  name: "Bob",
};

//3-26 読み取り専用プロパティの宣言
type ImmutablePerson = {
  readonly name: string;
  age: number;
};

const alice4: ImmutablePerson = {
  name: "Alice",
  age: 30,
};

// OK 値の変更が可能
alice4.age = 31;
//NG 読み取り専用のプロパティは変更できない
// 読み取り専用プロパティであるため、'name' に代入することはできません。
alice4.name = "Jane";

// -- zenn --
const seito = {
  name: "alice",
  seitoNo: 99,
};

console.log(seito.address); //
seito.seitoNo = "30";

//型注釈によるオブジェクトの生成
// let notebook: {
//   title: string;
//   owner: string;
//   editionNumber: number;
// } = {
//   title: "国語",
//   owner: "太郎",
//   editionNumber: 5,
// };

//型エイリアスによるオブジェクト生成
type notebook = {
  title: string;
  owner: string;
  editionNumber: number;
};

const JapaneseNote: notebook = {
  title: "国語",
  owner: "太郎",
  editionNumber: 5,
};

const physicsNote: notebook = {
  title: "物理",
  owner: "次郎",
  // editionNumber: 2,
};

type Shcool = {
  gakunen: number;
  kousha: string;
  floor: number;
  classroom: {
    classCode: number;
    tannin: string;
    ninzu: number;
  };
};

type Classroom = {
  classCode: number;
  tannin: string;
  ninzu: number;
};

type Shcool2 = {
  gakunen: number;
  kousha: string;
  floor: number;
  classroom: Classroom; //型エイリアスを指定
};

let KinjonoGkko: Shcool2 = {
  gakunen: 999,
  kousha: "第○○校舎",
  floor: 99,
  classroom: {
    classCode: 1,
    tannin: "xx先生",
    ninzu: 999,
  },
};

let KinjonoGkko2: Shcool2 = {
  gakunen: 999,
  kousha: "第○○校舎",
  floor: 99,
  classroom: {
    classCode: 1,
    tannin: "xx先生",
    // ninzu:999
  },
};

type Kyoshi = {
  name: string;
  age: number;
};

const japaneseTeacher: Kyoshi = {
  name: "国語の先生",
  age: 999,
};

const mathTeacher: Kyoshi = {
  name: "数学の先生",
  age: 999,
  seibetsu: "female",
};

const physicsTeacher = {
  name: "物理の先生",
  age: 999,
  seibetsu: "female",
};

const physicsTeacherKoshi: Kyoshi = physicsTeacher;

type Yakushoku = {
  yakuName: string;
  teatcherNmae: string;
  gakunen?: number;
};

const sensei: Yakushoku = {
  yakuName: "一般",
  teatcherNmae: "先生",
  gakunen: 2,
};

const kocho: Yakushoku = {
  yakuName: "校長",
  teatcherNmae: "なまえだよ",
  //gakuen は存在しないがエラーにはならない
};

type Yakushoku2 = {
  yakuName: string;
  teatcherNmae: string;
  gakunen: number | undefined;
};

const sensei2: Yakushoku2 = {
  yakuName: "校長",
  teatcherNmae: "なまえだよ",
  //gakuen: 1
};

type rekidaiSchoolName = {
  readonly name: string;
  year: number;
};

const schoolName: rekidaiSchoolName = {
  name: "初代の名前",
  year: 2000,
};

//yearの変更が可能
schoolName.year = 1998;

//nameは読み取り専用のため変更不可
schoolName.name = "間違えた名前を上書き";
