function loggedClass<This extends { new (...args: any[]): {} }>(
  target: This,
  context: ClassDecoratorContext<This>
) {
  //元の暮らすを継承した無名クラスを返す
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log(
        `${context.name} クラスに ${args.join(",")} を渡してインスタンス化`
      );
    }
  };
}

@loggedClass
class Person7_5 {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

const person7_5 = new Person7_5("Jhon");
