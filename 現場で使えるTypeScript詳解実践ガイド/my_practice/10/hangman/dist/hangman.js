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
    }
    //試行回数を1減らす
    decrementAttempts() {
        return --this.leftAttempt;
    }
    updateAnswer(userInput = "") {
        if (!userInput)
            return; //空文字列の場合は、以降の処理を行わない
        const regex = new RegExp(userInput, "g"); //入力を正規表現のパターンとして使用
        const answerArray = this.answer.split(""); //文字列を配列に変換
        let matches; //正規表現での検索結果を格納する変数
        //入力と一致する個所が無くなるまで繰り返す
        while ((matches = regex.exec(this.question.word))) {
            const foundIndx = matches.index;
            //対象のインデックスから、一致した箇所を入力された文字と入れ替え
            answerArray.splice(foundIndx, userInput.length, ...userInput);
            this.answer = answerArray.join(""); //配列を文字列に変換
        }
    }
    isTooLong(userInput) {
        return userInput.length > this.question.word.length;
    }
    //単語に回答者の入力が含まれるか判定
    isIncludes(userInput) {
        return this.question.word.includes(userInput);
    }
    //解答がすべての文字列と一致したか判定
    isCorrect() {
        return this.answer === this.question.word;
    }
    //試行回数が0か判定
    isGameOver() {
        return this.leftAttempt === 0;
    }
}
const CLI = {
    //プロパティとメソッドを追加する
    async input() {
        const input = await rl.question("文字または単語を推測してください：");
        return input.replaceAll(" ", "").toLowerCase();
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
        console.log(`2---------------------------${message}`);
        console.log(figlet_1.default.textSync(message, { font: "Big" }), "\n");
    },
};
class Message {
    ui;
    constructor(ui) {
        this.ui = ui;
    }
    //問題を解答者に表示
    askQuestion(stage) {
        this.ui.output(`Hint: ${stage.question.hint}`, "yellow");
        this.ui.output(`1---------------------------${stage.answer}`, "yellow");
        this.ui.outputAnswer(stage.answer.replaceAll("", " ").trim());
        this.ui.output(`残りの試行回数: ${stage.leftAttempt}`);
    }
    leftQuestion(quiz) {
        this.ui.output(`残り${quiz.lefts() + 1}問`);
    }
    start() {
        this.ui.output(`\nGame Start!!`);
    }
    enterSomething() {
        this.ui.output(`なにか文字を入力してください`, "red");
    }
    noInclue(input) {
        this.ui.output(`"${input}" は単語に含まれていません`, "red");
    }
    notCorrect(input) {
        this.ui.output(`残念！"${input} は正解ではありません"`, "red");
    }
    hit(input) {
        this.ui.output(`"${input}" が Hit!`, "green");
    }
    correct(question) {
        this.ui.output(`正解！ 単語は ${question.word} でした`, "green");
    }
    gameover(question) {
        this.ui.output(`正解は ${question.word} でした`);
    }
    end() {
        this.ui.output("ゲーム終了です！お疲れ様でした！");
    }
}
class Game {
    quiz; //ゲーム内のクイズの情報管理を担当
    message; //ゲーム内のメッセージ管理を担当
    stage; //現在のゲームステージの情報管理を担当
    ui; //ゲームのUIとインタラクション機能を提供
    constructor(quiz, message, ui) {
        this.quiz = quiz;
        this.message = message;
        this.ui = ui;
        this.stage = new Stage(this.quiz.getNext());
    }
    shouldEnd() {
        //失敗できる回数の上限を超えた場合
        if (this.stage.isGameOver()) {
            return true;
        }
        //最終問題(次の問題がない)かつ、正解した場合
        if (!this.quiz.hasNext() && this.stage.isCorrect()) {
            return true;
        }
        return false;
    }
    next(isCorrect) {
        if (!isCorrect) {
            //推論を間違えた場合
            this.stage.decrementAttempts();
        }
        if (this.shouldEnd()) {
            //ゲームを終了すると判断するとき
            return { stage: this.stage, done: true }; //ゲーム終了のためにdoneをtrueに設定する
        }
        if (isCorrect) {
            //推論が完全に一致した場合
            this.stage = new Stage(this.quiz.getNext()); //次のstageの情報を設定
        }
        return { stage: this.stage, done: false };
    }
    async start() {
        this.ui.clear();
        this.message.start();
        //GmaseStateの初期値を設定
        let state = {
            stage: this.stage,
            done: false,
        };
        //ゲームオーバーになるか、すべての問題を正解するまでループ
        while (!state.done) {
            if (state.stage === undefined)
                break;
            const { stage } = state; //stageオブジェクトを分割代入で取得
            this.message.leftQuestion(this.quiz); //残りの問題数を表示
            this.message.askQuestion(stage); //問題を表示
            //回答者の入力を待機
            const userInput = await this.ui.input();
            //入力値チェック
            this.ui.output(`3---------------------------${userInput}`, "yellow");
            if (!userInput) {
                //入力がない場合はメッセージを表示
                this.message.enterSomething();
                //不正解として、falseを渡し、GamseStateを更新
                state = this.next(false);
                continue;
            }
            //回答状況を最新の状態に更新
            this.ui.output(`-----------------${userInput}`, "yellow");
            stage.updateAnswer(userInput);
            //入力が正解と完全一致するか判定
            if (stage.isCorrect()) {
                this.message.correct(stage.question); //完全に一致
                state = this.next(true);
                continue; //以降の処理を中断し、次のループ処理へ
            }
            //入力の文字列数が正解より長いか判定
            if (stage.isTooLong(userInput)) {
                this.message.notCorrect(userInput);
                //不正解のため、falseを渡してnextを呼び出す
                state = this.next(false);
                continue;
            }
            //入力部分が正解に一致するか判定
            if (stage.isIncludes(userInput)) {
                this.message.hit(userInput);
                continue;
            }
            //入力がどの文字にも一致しない場合
            this.message.noInclue(userInput);
            state = this.next(false);
        }
        //施工回数が0か判定
        if (state.stage.isGameOver()) {
            this.message.gameover(this.stage.question);
        }
        this.message.end();
        this.ui.destroy();
    }
}
const questions = question_test_json_1.default;
//readlinePromisesインターフェイスのインスタンス(実体)を生成
const rl = promises_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const quiz = new Quiz(questions);
const message = new Message(CLI);
const game = new Game(quiz, message, CLI);
game.start();
