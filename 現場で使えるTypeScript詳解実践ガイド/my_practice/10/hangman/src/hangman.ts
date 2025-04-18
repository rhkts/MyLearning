import rawData from "./data/question.test.json";

console.log("Game Start!");

interface Question {
  word: string;
  hint: string;
}

const questions: Question[] = rawData;

console.log(questions);
