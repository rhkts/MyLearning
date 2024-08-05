//undefinde型とnull型
// 3-42 厳格なnullチェックによるエラー
const person = {
    age: 25,
    firstName: Math.random() > 0.5 ? "Alice" : null,
};

console.log(person.firstName.toUpperCase());
// 'person.firstName' は 'null' の可能性があります。

// -- zenn --
//## undefinde型とnull型
//### undefined
//変数が初期化されていないか、意図的に値が未設定であることを示す。
//### null
//値が意図的に「何もない」状態=「から」であることを示す。
//オブジェクトのプロパティが設定されていない状況や値をリセットしたときに使われることが多い

//次の例では、`person`オブジェクトの`firstName`プロパティは`string`と`null`のユニオン型であると定義。
//`firstName`は`null`である可能性があるため、`toUpperCase`メソッドを呼び出そうとするとコンパイルエラーになる。
const person = {
    age: 25,
    firstName: Math.random() > 0.5 ? "Alice" : null,
};
console.log(person.firstName.toUpperCase());
//オプショナル演算子`?.`を使用すると、`null`出ない場合は`toUpperCase`メソッドを呼び出すことができる。
//`firstName`が`null`の場合は`toUpperCase`は呼び出されず、`null`以外であらばそのメソッドを実行する。
const person2 = {
    age: 25,
    firstName: Math.random() > 0.5 ? "Alice" : null,
};
console.log(person.firstName?.toUpperCase());