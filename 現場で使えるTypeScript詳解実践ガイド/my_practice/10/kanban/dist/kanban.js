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
            event.preventDefault(); //ブラウザのデフォルトの動作をキャンセル
            //Taskオブジェクトの生成
            const task = this.makeNewTask();
            console.log(task);
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
    constructor(templateId, _taskStatus) { }
}
// 入力フォームの生成
new TaskForm();
