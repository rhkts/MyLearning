"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const question_test_json_1 = __importDefault(require("./data/question.test.json"));
const promises_1 = __importDefault(require("readline/promises"));
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
console.log("Game Start!");
class Quiz {
    questions;
    constructor(questions) {
        this.questions = questions;
    }
    //次の問題が存在するか確認
    hasNext() {
        return this.questions.length > 0;
    }
    //ランダムに質問を取得してその質問をリストから削除
    getNext() {
        //0以上、配列の長さ以下のランダムな整数を生成
        const idx = Math.floor(Math.random() * this.questions.length);
        //ランダムなidxを使って、quwstionsから1つの問題を削除し変数questionに代入
        const [question] = this.questions.splice(idx, 1);
        return question;
    }
    //残りの問題数を取得
    lefts() {
        return this.questions.length;
    }
}
class Stage {
    answer; //解答の状態
    leftAttempt = 5; //施工回数
    question; //出題中の問題
    constructor(question) {
        this.question = question;
        //answerにブランクの文字列を設定
        this.answer = new Array(question.word.length).fill("_").join("");
        console.log(this.answer);
    }
}
//readlinePromisesインターフェイスのインスタンス(実体)を生成
const rl = promises_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const CLI = {
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
    output(message, color = "white") {
        console.log(chalk_1.default[color](message), "\n");
    },
    //文字をアスキーアートで表示
    outputAnswer(message) {
        console.log(figlet_1.default.textSync(message, { font: "Big" }), "\n");
    },
};
//動作確認用
async function testQuestion() {
    CLI.clear(); //画面をクリア
    const userInput = await CLI.input(); //入力を受け付けて返す。
    console.log(userInput);
    console.log(CLI.outputAnswer(userInput));
    CLI.destroy(); //セッション終了
}
const questions = question_test_json_1.default;
const testStage = new Stage(questions[0]);
testQuestion();
testStage;
