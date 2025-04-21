import rawData from "./data/question.test.json";
import readlinePromise from "readline/promises";
import chalk from "chalk";
import figlet from "figlet";

console.log("Game Start!");

interface Question {
  word: string;
  hint: string;
}

interface UserIntarfase {
  input(): Promise<string>;
  clear(): void;
  destroy(): void;
  output(message: string, color?: Color): void;
  outputAnswer(message: string): void;
}

type Color = "red" | "green" | "yellow" | "white";

class Quiz {
  questions: Question[];
  constructor(questions: Question[]) {
    this.questions = questions;
  }

  //次の問題が存在するか確認
  hasNext(): boolean {
    return this.questions.length > 0;
  }

  //ランダムに質問を取得してその質問をリストから削除
  getNext(): Question {
    //0以上、配列の長さ以下のランダムな整数を生成
    const idx = Math.floor(Math.random() * this.questions.length);
    //ランダムなidxを使って、quwstionsから1つの問題を削除し変数questionに代入
    const [question] = this.questions.splice(idx, 1);

    return question;
  }

  //残りの問題数を取得
  lefts(): number {
    return this.questions.length;
  }
}

const questions: Question[] = rawData;
const quiz = new Quiz(questions);

//readlinePromisesインターフェイスのインスタンス(実体)を生成
const rl = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const CLI: UserIntarfase = {
  //プロパティとメソッドを追加する
  async input() {
    const input = await rl.question("文字または単語を推測してください：");
    return input.replaceAll(" ", "").toLocaleLowerCase();
  },

  clear() {
    console.clear();
  },

  destroy() {
    rl.close();
  },

  //色付きでメッセージを表示
  output(message: string, color: Color = "white") {
    console.log(chalk[color](message), "\n");
  },

  //文字をアスキーアートで表示
  outputAnswer(message: string) {
    console.log(figlet.textSync(message, { font: "Big" }), "\n");
  },
};

console.log(quiz.getNext());

//動作確認用
async function testQuestion() {
  CLI.clear(); //画面をクリア
  const userInput = await CLI.input(); //入力を受け付けて返す。
  console.log(userInput);
  console.log(CLI.outputAnswer(userInput));
  CLI.destroy(); //セッション終了
}

testQuestion();
