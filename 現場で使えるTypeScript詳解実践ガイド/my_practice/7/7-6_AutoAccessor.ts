function loggedAccessor<This, V>(
  // 引数として、ゲッターとセッターが格納されたオブジェクトを受け取る
  target: {
    get: (this: This) => V;
    set: (this: This, value: V) => void;
  },
  context: ClassAccessorDecoratorContext<This, V>
) {
  // 戻り値のオブジェクトに、書き換えたいアクセサーを追加する。
  return {
    get: function (this: This) {
      console.log(`${context.name.toString()}を取得`);
      const result = target.get.call(this);
      return result;
    },
    set: function (this: This, value: V) {
      console.log(`${context.name.toString()}を${value}に設定`);
      target.set.call(this, value);
    },
    // 初期化をカスタマイズするための関数
    init: function (this: This, initialVal: V) {
      console.log(`${context.name.toString()}を${initialVal}に初期化`);
      return initialVal;
    },
  };
}

class Person7_6 {
  @loggedAccessor
  accessor age = 20;
}

const person7_6 = new Person7_6();
console.log(person7_6.age);
person7_6.age = 99;
