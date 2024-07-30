//3-27 Array型
const nums = [1, 2, 3, 4, 5]; //number[]型(型推論)
const personNames = ["Alice", "Bob", "Charlice"] //string[]型(型推論)

//3-28 配列への異なる型の値の追加
//.oush版列の末尾に要素を追加するメソッド
nums.push("six"); //number[]型の配列にstring型の値を追加することはできない

//3-29 複数種類の型の値を用いて配列を初期化した場合
const sums2 = [1, 2, 3, 4, 5, "six"]; //(number | strig)[]型(配列要素に含まれるすべてのデータ型をカバーするユニオン型を型推論)

//3-30 型注釈によるArray型の指定
let fruits: string[] //型注釈によるArray型の指定
fruits = ["Apple", "Grape", "Banana", "Peach", "pear"];
console.log(fruits[0].toUpperCase()); // → APPLE

//3-31 型注釈によるTuple型の指定s
//[string, number]型
let person: [string, number] = ["Alice", 30];

//3-32 Tuple型に長さの異なる配列を代入
person = ["Alice", 30, 1993];

//3-33 タプルの不正なインデックスにアクセス
console.log(person[4]);

//3-34 ラベル付きTuple型
type RGB = [red: number, green: number, blue: number];

//3-35 タプル要素のオプション化
type Foo = [fruit: number, second?: string, ...rest: any[]];
let a: Foo = [1]; //first要素のみの配列を代入
let b: Foo = [1, "hello"]; //firstとsecond要素のみを代入
let c: Foo = [1, "hello", true, 10, "world"]; //first,second要素の他に、...restに複数の要素を割り当て


// --- zen ---
const suuti = [1, 2, 3, 4, 5];//number[]型(型推論)
const kojinNames = ["太郎", "次郎", "三郎"];//string[]型(型推論)

// number[]にstring型をpush(配列の末尾に追加)はできない
suuti.push("6"); // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。

const suuti2 = [1, 2, 3, 4, 5, "six"]; //(number | strig)[]型(配列要素に含まれるすべてのデータ型をカバーするユニオン型を型推論)

//Tuple型
//TypeScriptには、JavaScriptには存在しない`Tuple(タプル)'という型が存在する。
//固定された長さを持ち、各要素に対して特定の型が指定されているという点がJavaScriptとは異なる。
//JavaScriptには`Tuple`が存在しないため、コンパイルされるとJavaScriptの配列(Array)に変換される。
//変換後は`Tuple`で指定された型の要素をもつが、JavaScriptでは実行時に型の強制をすることはない。
//[string,boolean]型
let loginStatus: [string, boolean] = ["ログイン名", true];;

//Tuple型に長さの異なる配列えお代入しようとすると、型エラーになる
loginStatus = ["次郎", false, 999]
// 型 '[string, false, number]' を型 '[string, boolean]' に割り当てることはできません。
// ソースには 3 個の要素がありますが、ターゲットで使用できるのは 2 個のみです。

//変数`loginStatus`は`Tuple`型で定義されていて、２つの要素を持つことが指定されている。
//ここでは、3つ目の要素としてログイン回数の数値を代入しようとすると型の不一致によるエラーとなる。

//タプルの存在しないインデックスにアクセスをしようとするとエラーとなる
console.log(loginStatus[5]);
//長さ '2' のタプル型 '[string, boolean]' にインデックス '5' の要素がありません。
//JavaScriptでは、エラーにならず`undefined`が返却される。

//ラベル付きのTuple型
//タプルにラベルを付与することによって、各要素がどんなデータを表しているかを直接確認できるようになる。
//もちろん、指定している型と異なる型を代入しようとするとエラーになる。
type ShingoColor = [red: number, green: number, blue: string];
const shingo: ShingoColor = [1, 2, 'three'];
const shingo2: ShingoColor = [1, 2, 3]; //型 'number' を型 'string' に割り当てることはできません。

//ラベル末尾に`?`を付けることによって、該当の要素をオプショナル(任意)として宣言可能
//さらに、スプレッド構文`...`を使って、複数の要素を含むことが可能
type TupleSample = [first: number, second?: string, ...rest: any[]];
let data1: Foo = [1]; //first要素のみの配列を代入
let data2: Foo = [1, "hello"]; //firstとsecond要素のみを代入
let data3: Foo = [1, "hello", true, 10, "world"]; //first,second要素の他に、...restに複数の要素を割り当て