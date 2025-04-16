//メソッドデコレータを定義
// function logged(originalMethod: any, context: any) {
//   //新たに関数を定義
//   function loggedMethod(this: any, ...args: any[]) {
//     //contextオブジェクトから対象のnameを取得して表示
//     console.log(`${context.name}メソッド呼び出し`);
//     const result = originalMethod.call(this, ...args); //元のメソッドの呼び出し
//     console.log(`${context.name}メソッド終了！`);
//     return result;
//   }

//   return loggedMethod;
// }

// function bound(_originalMethod: any, context: any) {
//   // addInitializeにフックしたい関数を渡す
//   context.addInitializer(function (this: any) {
//     //thisはインスタンスを参照する。context.name は対象のメソッド名
//     this[context.name] = this[context.name].bind(this); //メソッド内のthisをインスタンスに束縛
//   });
// }

function logged_1(headMessage = "[LOG]: ") {
  //メソッドデコレータを定義して返却
  return function actualDecorator(originalMethod: any, context: any) {
    function loggedMethod(this: any, ...args: any[]) {
      //contextオブジェクトから対象のnameを取得して表示
      console.log(`${headMessage} ${context.name}メソッド呼び出し`);
      const result = originalMethod.call(this, ...args); //元のメソッドの呼び出し
      console.log(`${headMessage} ${context.name}メソッド終了！`);
      return result;
    }

    return loggedMethod;
  };
}

function bound(_originalMethod: any, context: any) {
  // addInitializeにフックしたい関数を渡す
  context.addInitializer(function (this: any) {
    //thisはインスタンスを参照する。context.name は対象のメソッド名
    this[context.name] = this[context.name].bind(this); //メソッド内のthisをインスタンスに束縛
  });
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @bound //boundデコレータの適用
  @logged_1("[INFO]: ") //デコレータファクトリに引数を渡して実行
  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const person = new Person("John");

setTimeout(person.greet, 1000);
