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

class Stage {
  answer: string; //解答の状態
  leftAttempt: number = 5; //施工回数
  question: Question; //出題中の問題

  constructor(question: Question) {
    this.question = question;

    //answerにブランクの文字列を設定
    this.answer = new Array(question.word.length).fill("_").join("");
  }

  //試行回数を1減らす
  decrementAttempts(): number {
    return --this.leftAttempt;
  }

  updateAnswer(userInput: string = ""): void {
    if (userInput) return; //空文字列の場合は、以降の処理を行わない

    const regex = new RegExp(userInput, "g"); //入力を正規表現のパターンとして使用
    const answerArray = this.answer.split(""); //文字列を配列に変換

    let matches: RegExpExecArray | null; //正規表現での検索結果を格納する変数

    //入力と一致する個所が無くなるまで繰り返す
    while ((matches = regex.exec(this.question.word))) {
      const foundIndx = matches.index;
      //対象のインデックスから、一致した箇所を入力された文字と入れ替え
      answerArray.splice(foundIndx, userInput.length, ...userInput);

      this.answer = answerArray.join(""); //配列を文字列に変換
    }
  }

  isTooLong(userInput: string): boolean {
    return userInput.length > this.question.word.length;
  }

  //単語に回答者の入力が含まれるか判定
  isIncludes(userInput: string): boolean {
    return this.question.word.includes(userInput);
  }

  //解答がすべての文字列と一致したか判定
  isCorrect(): boolean {
    return this.answer === this.question.word;
  }

  //試行回数が0か判定
  isGameOver(): boolean {
    return this.leftAttempt === 0;
  }
}

class Message {
  ui: UserIntarfase;

  constructor(ui: UserIntarfase) {
    this.ui = ui;
  }

  //問題を解答者に表示
  askQuestion(stage: Stage): void {
    this.ui.output(`Hint: ${stage.question.hint}`, "yellow");
    this.ui.outputAnswer(stage.answer.replaceAll("", " ").trim());
    this.ui.output(`残りの試行回数: ${stage.leftAttempt}`);
  }

  leftQuestion(quiz: Quiz) {
    this.ui.output(`残り${quiz.lefts() + 1}問`);
  }

  start() {
    this.ui.output(`\nGame Start!!`);
  }

  enterSomething() {
    this.ui.output(`なにか文字を入力してください`, "red");
  }

  noInclue(input: string) {
    this.ui.output(`"${input}" は単語に含まれていません`, "red");
  }

  hit(input: string) {
    this.ui.output(`"${input}" が Hit!`, "green");
  }

  correct(question: Question) {
    this.ui.output(`正解！ 単語は ${question.word} でした`, "green");
  }

  gameover(question: Question) {
    this.ui.output(`正解は ${question.word} でした`);
  }

  end() {
    this.ui.output("ゲーム終了です！お疲れ様でした！");
  }
}

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

const message = new Message(CLI);

//動作確認用
async function testQuestion() {
  CLI.clear(); //画面をクリア
  const userInput = await CLI.input(); //入力を受け付けて返す。
  console.log(userInput);
  console.log(CLI.outputAnswer(userInput));
  CLI.destroy(); //セッション終了
}

const questions: Question[] = rawData;

testQuestion();
