const questions = ["Q1", "Q2", "Q3"];

// function getNext(datas: string[]): string[] {
//   const idx = Math.floor(Math.random() * datas.length);

//   const [question] = datas.splice(idx, 1);

//   return [question];
// }

// console.log(getNext(questions));

// console.log("----");

// function getNext2(datas: string[]): void {
//   const idx = Math.floor(Math.random() * datas.length);

//   const remove = datas.splice(idx, 1);
//   console.log(remove);
//   const question = remove[0];
//   console.log(question);
// }

// getNext2(questions);

// console.log("----");

// const [a, b] = questions;

// console.log(a);
// console.log(b);

function getMatome(datas: string[]): string[] {
  const idx = Math.floor(Math.random() * datas.length);

  const remove = datas.splice(idx, 1); //["Q2"]
  console.log(remove[0]);

  const question = remove[0]; //"Q2"
  console.log(question);

  return [question];
}

console.log(getMatome(questions));
