console.log("自動読み込みできてる？？_" + nowDate);

import { bound } from "./decorator/bindThis.js";

const TASK_STATUS = ["todo", "working", "done"] as const;
type TaskStatus = (typeof TASK_STATUS)[number];

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
    event.preventDefault();

    const task = this.makeNewTask();

    //新規で追加
    //TaskItemクラスのインスタンス化
    const item = new TaskItem("#task-item-template", task);
    item.mount("#todo");

    this.crearInputs();
  }

  private bindEvents() {
    this.element.addEventListener("submit", this.submitHandler);
  }
}

class TaskList {
  templateEl: HTMLTemplateElement;
  element: HTMLDivElement;
  private taskStatus: TaskStatus;

  constructor(templateId: string, _taskStatus: TaskStatus) {
    //ターゲットのtemplate要素を取得
    this.templateEl = document.querySelector(templateId)!;

    //template要素のコンテンツ(子要素)を複製、tureを渡すことですべての階層でクローンする
    const clone = this.templateEl.content.cloneNode(true) as DocumentFragment;

    //クローンした子要素から１つ目を取得
    this.element = clone.firstElementChild as HTMLDivElement;
    //taskStatusプロパティを初期化
    this.taskStatus = _taskStatus;

    this.setup();
  }

  mount(selector: string) {
    const targetEl = document.querySelector(selector)!;
    targetEl.insertAdjacentElement("beforeend", this.element);
  }

  //クローンした要素に情報を追加
  setup() {
    //カラムに表示する、タスクの進捗状況を示すラベルを設定
    this.element.querySelector("h2")!.textContent = `${this.taskStatus}`;
    //ul要素にid属性を設定
    this.element.querySelector("ul")!.id = `${this.taskStatus}`;
  }
}

function isTaskStatus(value: any): value is TaskStatus {
  return TASK_STATUS.includes(value);
}

class TaskItem {
  templateEL: HTMLTemplateElement;
  element: HTMLLIElement;
  task: Task;

  constructor(templateId: string, _task: Task) {
    this.templateEL = document.querySelector(templateId)!;
    const clone = this.templateEL.content.cloneNode(true) as DocumentFragment;
    this.element = clone.firstElementChild as HTMLLIElement;

    //taskプロパティを初期化
    this.task = _task;

    this.setup();

    this.bindEvents();
  }

  mount(selector: string) {
    const targetEl = document.querySelector(selector)!;
    targetEl.insertAdjacentElement("beforeend", this.element);
  }

  setup() {
    //挿入した要素の子要素のリストにidを設定
    this.element.querySelector("h2")!.textContent = `${this.task.title}`;
    this.element.querySelector("p")!.textContent = `${this.task.description}`;
  }

  @bound
  clickHandler() {
    if (!this.element.parentElement) return;

    //1.自信が所属しているul要素のidを見に行く
    const currentListId = this.element.parentElement.id as TaskStatus;
    const taskStatusIdx = TASK_STATUS.indexOf(currentListId);

    //idがTASK_STATUSに見つからないとき
    if (taskStatusIdx === -1) {
      throw new Error(`タスクステータスが不正です`);
    }

    //idによって隣カラムのidを決定
    const nextListId = TASK_STATUS[taskStatusIdx + 1];

    if (nextListId) {
      // 隣カラムのidにli要素を挿入
      const nextListEl = document.getElementById(
        nextListId
      ) as HTMLUListElement;

      nextListEl.appendChild(this.element);

      return;
    }

    //もし現在のリストが"done"なら要素を削除して終了
    this.element.remove();
  }

  bindEvents() {
    //nextボタンtaskの状態を変化させる
    this.element.addEventListener("click", this.clickHandler);
  }
}

// 入力フォームの生成
new TaskForm();

TASK_STATUS.forEach((status) => {
  const list = new TaskList("#task-list-template", status);
  list.mount("#container");
});
