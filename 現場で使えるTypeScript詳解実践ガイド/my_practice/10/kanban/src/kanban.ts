console.log("コンパイルと読み込み成功！");
const nowDate = new Date();
console.log("自動読み込みできてる？？_" + nowDate);

import { bound } from "./decorator/bindThis.js";

interface Task {
  title: string;
  description?: string;
}

class TaskForm {
  element: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLInputElement;

  constructor() {
    //form要素を取得
    this.element = document.querySelector("#task-form")!; //非nullアサーション

    //input要素を取得
    this.titleInputEl = document.querySelector("#form-title")!;
    this.descriptionInputEl = document.querySelector("#form-description")!;

    //イベントリスナを設定
    this.bindEvents();
  }

  private makeNewTask(): Task {
    return {
      title: this.titleInputEl.value,
      description: this.descriptionInputEl.value,
    };
  }

  private crearInputs(): void {
    this.titleInputEl.value = "";
    this.descriptionInputEl.value = "";
  }

  @bound
  private submitHandler(event: Event) {
    event.preventDefault(); //ブラウザのデフォルトの動作をキャンセル

    //Taskオブジェクトの生成
    const task = this.makeNewTask();
    console.log(task);

    this.crearInputs();
  }

  private bindEvents() {
    this.element.addEventListener("submit", this.submitHandler);
  }
}

new TaskForm();
