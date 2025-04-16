//デコレータに型パラメータを導入
function logged<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  //型パラメータを指定してany型から置き換える
  context: ClassMethodDecoratorContext
) {
  //Tshi,Args,Returnを指定して共通化
  function loggedMethod(this: any, ...args: any[]) {
    //contextオブジェクトから対象のnameを取得して表示
    console.log(`${context.name.toString()}メソッド呼び出し`);
    const result = originalMethod.call(this, ...args); //元のメソッドの呼び出し
    console.log(`${context.name.toString()}メソッド終了！`);
    return result;
  }

  return loggedMethod;
}

interface ClassMethodDecoratorContext<
  This = unknown, //メソッドが定義されるクラスの型
  //デコレート対象メソッドの型
  Value extends (this: This, ...args: any) => any = (
    this: This,
    ...args: any
  ) => any
> {
  readonly kind: "method"; //デコレータされたクラスメンバーの種類
  readonly name: string | symbol; //デコレートされたメンバーの名前
  readonly static: boolean; //静的なメンバーかどうか
  readonly private: boolean; //プライベートなメンバーかどうか
  readonly access: {
    has(object: This): boolean; //オブジェクトのプロパティにデコレート対象と同じ名前の物が存在するか
    get(object: This): Value; //デコレータが適用されたメンバーの現在いの値を取得するために使用
  };
  addInitializer(initializer: (this: This) => void): void;
}
