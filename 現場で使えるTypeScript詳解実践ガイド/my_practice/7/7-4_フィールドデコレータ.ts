function loggedField<This, V>(
  _target: undefined, //常にundefined
  context: ClassFieldDecoratorContext<This, V>
) {
  //初期化をカスタマイズするための関数を返す
  return function (this: This, initialValue: V) {
    console.log(
      `${context.name.toString()} フィールドを ${initialValue} で初期化`
    );

    return initialValue; //戻り値が初期値として置き換わる
  };
}

class Person7_4 {
  @loggedField
  private _name = "John";
}

const person7_4 = new Person7_4();
