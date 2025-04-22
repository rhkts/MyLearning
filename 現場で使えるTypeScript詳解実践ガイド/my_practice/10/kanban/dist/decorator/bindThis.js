export function bound(_originalMethod, context) {
    //addInitializerにフックしたい関数を渡す
    //動的なプロパティのアクセスを許可するためthisはany型にする
    context.addInitializer(function () {
        //thisはインスタンスを参照する。context.nameは対象のメソッド名
        this[context.name] = this[context.name].bind(this); //メソッド内のthisをインスタンスに束縛
    });
}
