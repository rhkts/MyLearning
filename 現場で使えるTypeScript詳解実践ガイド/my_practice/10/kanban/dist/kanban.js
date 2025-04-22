var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
console.log("コンパイルと読み込み成功！");
const nowDate = new Date();
console.log("自動読み込みできてる？？_" + nowDate);
import { bound } from "./decorator/bindThis.js";
const TASK_STATUS = ["todo", "working", "done"];
let TaskForm = (() => {
    let _instanceExtraInitializers = [];
    let _submitHandler_decorators;
    return class TaskForm {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _submitHandler_decorators = [bound];
            __esDecorate(this, null, _submitHandler_decorators, { kind: "method", name: "submitHandler", static: false, private: false, access: { has: obj => "submitHandler" in obj, get: obj => obj.submitHandler }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        element = (__runInitializers(this, _instanceExtraInitializers), void 0);
        titleInputEl;
        descriptionInputEl;
        constructor() {
            //form要素を取得
            this.element = document.querySelector("#task-form"); //非nullアサーション
            //input要素を取得
            this.titleInputEl = document.querySelector("#form-title");
            this.descriptionInputEl = document.querySelector("#form-description");
            //イベントリスナを設定
            this.bindEvents();
        }
        makeNewTask() {
            return {
                title: this.titleInputEl.value,
                description: this.descriptionInputEl.value,
            };
        }
        crearInputs() {
            this.titleInputEl.value = "";
            this.descriptionInputEl.value = "";
        }
        submitHandler(event) {
            event.preventDefault();
            const task = this.makeNewTask();
            //新規で追加
            //TaskItemクラスのインスタンス化
            const item = new TaskItem("#task-item-template", task);
            item.mount("#todo");
            this.crearInputs();
        }
        bindEvents() {
            this.element.addEventListener("submit", this.submitHandler);
        }
    };
})();
class TaskList {
    templateEl;
    element;
    taskStatus;
    constructor(templateId, _taskStatus) {
        //ターゲットのtemplate要素を取得
        this.templateEl = document.querySelector(templateId);
        //template要素のコンテンツ(子要素)を複製、tureを渡すことですべての階層でクローンする
        const clone = this.templateEl.content.cloneNode(true);
        //クローンした子要素から１つ目を取得
        this.element = clone.firstElementChild;
        console.log("---");
        console.log(this.element);
        //taskStatusプロパティを初期化
        this.taskStatus = _taskStatus;
        this.setup();
    }
    mount(selector) {
        const targetEl = document.querySelector(selector);
        targetEl.insertAdjacentElement("beforeend", this.element);
    }
    //クローンした要素に情報を追加
    setup() {
        //カラムに表示する、タスクの進捗状況を示すラベルを設定
        this.element.querySelector("h2").textContent = `${this.taskStatus}`;
        //ul要素にid属性を設定
        this.element.querySelector("ul").id = `${this.taskStatus}`;
    }
}
function isTaskStatus(value) {
    return TASK_STATUS.includes(value);
}
let TaskItem = (() => {
    let _instanceExtraInitializers = [];
    let _clickHandler_decorators;
    return class TaskItem {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _clickHandler_decorators = [bound];
            __esDecorate(this, null, _clickHandler_decorators, { kind: "method", name: "clickHandler", static: false, private: false, access: { has: obj => "clickHandler" in obj, get: obj => obj.clickHandler }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        templateEL = (__runInitializers(this, _instanceExtraInitializers), void 0);
        element;
        task;
        constructor(templateId, _task) {
            this.templateEL = document.querySelector(templateId);
            const clone = this.templateEL.content.cloneNode(true);
            this.element = clone.firstElementChild;
            //taskプロパティを初期化
            this.task = _task;
            this.setup();
            this.bindEvents();
        }
        mount(selector) {
            const targetEl = document.querySelector(selector);
            targetEl.insertAdjacentElement("beforeend", this.element);
        }
        setup() {
            //挿入した要素の子要素のリストにidを設定
            this.element.querySelector("h2").textContent = `${this.task.title}`;
            this.element.querySelector("p").textContent = `${this.task.description}`;
        }
        clickHandler() {
            if (!this.element.parentElement)
                return;
            //1.自信が所属しているul要素のidを見に行く
            const currentListId = this.element.parentElement.id;
            const taskStatusIdx = TASK_STATUS.indexOf(currentListId);
            //idがTASK_STATUSに見つからないとき
            if (taskStatusIdx === -1) {
                throw new Error(`タスクステータスが不正です`);
            }
            //idによって隣カラムのidを決定
            const nextListId = TASK_STATUS[taskStatusIdx + 1];
            if (nextListId) {
                // 隣カラムのidにli要素を挿入
                const nextListEl = document.getElementById(nextListId);
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
    };
})();
// 入力フォームの生成
new TaskForm();
TASK_STATUS.forEach((status) => {
    const list = new TaskList("#task-list-template", status);
    list.mount("#container");
});
