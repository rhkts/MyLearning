//Partila<T>型
interface User {
  name: string;
  email: string;
  age?: number;
  address?: string;
}

let user_1: User = {
  name: "○○",
  email: "abc_123@email.com",
  age: 20,
  address: "",
};

function updateUserInfo(user: User, updateField: Partial<User>) {
  return { ...user, ...updateField };
}

console.log(user_1);

//emailだけ
user_1 = updateUserInfo(user_1, {
  email: "ABC_DEF@email.com",
});

console.log(user_1);

//addressだけ
user_1 = updateUserInfo(user_1, {
  address: "xx県",
});

console.log(user_1);

// function updateUserInfo2(user: User, updateField: User) {
//   return { ...user, ...updateField };
// }

// //emailだけ
// user_1 = updateUserInfo2(user_1, {
//   name: "○○",
//   email: "abc_123@email.com",
//   age: 20,
//   address: "ABC_DEF@email.com",
// });

// //Recrod<K,T>型
// type RGB = [red: number, green: number, blue: number];

// interface Color {
//   red: RGB | string;
//   green: RGB | string;
//   blue: RGB | string;
// }

// let color: Color;

type primaryColors = "red" | "green" | "blue";

let color: Record<primaryColors, string>;

color = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
  //   purple: "a260bf",
};

//Pick<T,Keys>型
interface User2 {
  name: string;
  email: string;
  age: number;
  address: string;
  birthdate: Date;
}

type Person = Pick<User2, "name" | "age" | "birthdate">;

const teacher: Person = {
  name: "A先生",
  age: 30,
  birthdate: new Date("1995/10/10"),
  //   email:"xxxxxx"
};

console.log(teacher);
