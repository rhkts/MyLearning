"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const question_test_json_1 = __importDefault(require("./data/question.test.json"));
console.log("Game Start!");
const questions = question_test_json_1.default;
// console.log(questions);
class Quiz {
    questions;
    constructor(questions) {
        this.questions = questions;
    }
    //ランダムに質問を取得してその質問をリストから削除
    getNext() {
        //0以上、配列の長さ以下のランダムな整数を生成
        const idx = Math.floor(Math.random() * this.questions.length);
        const [question] = this.questions.splice(idx, 1);
        return [question];
    }
}
const quiz = new Quiz(questions);
console.log(quiz.getNext());
