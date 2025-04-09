interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

type PersonKeys = keyof Person;
// name | age | hobbies 型

function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

// function getProperty2(obj: Person, key: any) {
//   return obj[key];
// }

const teacher: Person = {
  name: "○○先生",
  age: 35,
  hobbies: ["tennis", "game"],
};

console.log(`新任の先生の名前は、${getProperty(teacher, "name")} です。`);

// console.log(`新任の先生の名前は、${getProperty2(teacher, "name")} です。`);

// console.log(`住所は、${getProperty(teacher, "address")} です。`);

console.log("---- typeof演算子 ----");
//JavaScript
console.log(typeof true);
// → boolean
console.log(typeof 1);
// → number
console.log(typeof "こんにちは！");
// → string
console.log(typeof [1, 2, 3]);
// → object
console.log(typeof { a: 1, b: 2 });
// → object

//TypeScript
const book = {
  title: "○○の教科書",
  price: 1000,
  publicationForm: ["紙", "電子", "読み上げ"],
};

type BookType = typeof book;

function getBookInfo(info: BookType) {
  console.log(`本のタイトルは「${info.title}」です。`);
  console.log(`値段は「${info.price}」円です。`);
  console.log(`発行形態は「${info.publicationForm}」です。`);
}

getBookInfo(book);

getBookInfo({ title: "ｘｘの本", price: 500, publicationForm: ["紙", "電子"] });

const student = {
  no: 123456789,
  name: "テスト　太郎",
  club: "野球",
};

function getStudentDetail(key: keyof typeof student) {
  return student[key];
}

console.log(getStudentDetail("name"));

// getStudentDetail("gakunen")

type userType = {
  id: number;
  isAdmin: boolean;
};

function describeUser(user: userType): string;
