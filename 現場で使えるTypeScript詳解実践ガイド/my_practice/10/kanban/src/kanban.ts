console.log("コンパイルと読み込み成功！");
const nowDate = new Date();
console.log("自動読み込みできてる？？_" + nowDate);

import { bound } from "./decorator/bindThis.js";

class TaskForm {
  element: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLTextAreaElement;

  constructor() {
    //form要素を取得
    this.element = document.querySelector("#task-form")!; //非nullアサーション

    //input要素を取得
    this.titleInputEl = document.querySelector("#form-title")!;
    this.descriptionInputEl = document.querySelector("form-description")!;

    //イベントリスナを設定
    this.bindEvents();
  }

  @bound
  private submitHandler(event: Event) {
    event.preventDefault(); //ブラウザのデフォルトの動作をキャンセル

    console.log(this.titleInputEl.value);
    console.log(this.descriptionInputEl.value);
  }

  private bindEvents() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }
}

new TaskForm();
