import rawData from "./data/question.test.json";

console.log("Game Start!");

interface Question {
  word: string;
  hint: string;
}

const questions: Question[] = rawData;
// console.log(questions);

class Quiz {
  questions: Question[];
  constructor(questions: Question[]) {
    this.questions = questions;
  }

  //ランダムに質問を取得してその質問をリストから削除
  getNext(): Question[] {
    //0以上、配列の長さ以下のランダムな整数を生成
    const idx = Math.floor(Math.random() * this.questions.length);

    const [question] = this.questions.splice(idx, 1);

    return [question];
  }
}

const quiz = new Quiz(questions);
console.log(quiz.getNext());
