interface Pair<T> {
  first: T;
  second: T;
}

//型引数をstring型に設定→インターフェイスPairの型変数Tがstringに決定される
let stringPair: Pair<string> = {
  first: "苗字",
  second: "名前",
};

//型引数をnumber型に設定
//→インターフェイスPairの型変数Tがnumber型に決定される
let numberPair: Pair<number> = {
  first: 1,
  second: 2,
};

//型引数に何も指定していない
//インターフェイスPairの型変数Tが決定されないためにエラー
let dataPair: Pair;
