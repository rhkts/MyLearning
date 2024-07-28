//3-12 型エイリアス
type Role = number | string; //number型とstring型のユニオン型にRoleという名前をつける
type EventType = "click" | "hover" | "keydown"; //リテラル型のユニオン型にEventTypeという名前をつける

//3-13 型注釈による型エイリアスの利用
let firstRole: Role; //Roleを指定
let lastRole: Role; //Role型を使いまわす

//3-14 型エイリアスのユニオン型
type Animal = Cat | Dog; //Animalエイリアスに、Cat型とDog型を指定

//後から Cat型 と Dog型 を指定してもOK
type Cat = "mike" | "dora" | "pug";
type Dog = "shiba" | "poodle" | "pug";

let pet: Animal = "shiba";

type Pc = Windows | Mac;

type Windows = "note" | "desktop";
type Mac = "MackBook" | "iMac" | "Mac Stuio";

let myPc: Pc = "desktop";

type Pc2 = Pc | "jisaku";
let yourPc: Pc2 = "jisaku";
