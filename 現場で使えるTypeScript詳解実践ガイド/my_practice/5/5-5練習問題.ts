console.log("---練習問題1---");
// おお！記事読みましたよ 🙌
// 今回は「TypeScriptの条件付き型（Conditional Types）」についてのまとめですね。しっかり例も交えて解説してあって、読みやすくていい記事でした！

// それではこの記事の復習として、**条件付き型に関する練習問題**を出しますね。全体で3問、段階的に難易度を上げていきます！

// ---

// ### ✅ 問題1：基本的な条件付き型

// 次の `IsString<T>` 型は、`T` が `string` 型の場合に `"Yes"`、それ以外の場合に `"No"` を返す型です。
// `IsString<T>` を完成させてください。

// ```ts
// type IsString<T> =
//   // ここに条件付き型を定義してください

// type A = IsString<string>; // "Yes"
// type B = IsString<number>; // "No"
// type C = IsString<"hello">; // "Yes"
// ```

// 準備ができたら回答してください！
// 正解できたら次の問題を出題します 💪

// type IsString<T> = T extends string ? "Yes" : "No";
// ここに条件付き型を定義してください

// type A = IsString<string>; // "Yes"
// type B = IsString<number>; // "No"
// type C = IsString<"hello">; // "Yes"

console.log("---練習問題2---");
// 💯✨ **その通りです！！大正解！！**

// ---

// ✅ あなたの回答：

// ```ts
// type IsString<T> = T extends string ? "Yes" : "No";
// ```

// ✅ 実行結果の確認：

// ```ts
// type A = IsString<string>;  // "Yes"
// type B = IsString<number>;  // "No"
// type C = IsString<"hello">; // "Yes"
// ```

// 全部期待通りになります！TypeScriptの型システムに対する理解、かなり深まってますね👏
// この調子です！

// ---

// ### 🔥 では、**問題2** に進みましょう！

// ---

// ### ✅ 問題2：ユニオン型と条件付き型

// 次の型 `ToArray<T>` は、`T` を配列型に変換します。ただし `T` がユニオン型の場合、**それぞれの型を配列化**してください。

// ```ts
// type ToArray<T> =
//   // ここに条件付き型を使って実装してください

// type A = ToArray<string>;       // string[]
// type B = ToArray<number | null> // number[] | null[]
// ```

// 🔍 **ヒント**
// - 条件付き型は **ユニオンに分配される性質** があります！（記事でも書いてましたね）

// できたら送ってください！わからなければまたヒント出しますよ〜😉

// type ToArray<T> = T extends any? T[] : never
// ここに条件付き型を使って実装してください

// type A = ToArray<string>;       // string[]
// type B = ToArray<number | null> // number[] | null[]

console.log("---練習問題3---");
// ✨**大正解です！！！**✨

// ---

// ✅ あなたの回答：

// ```ts
// type ToArray<T> = T extends any ? T[] : never;
// ```

// ✅ 実行結果チェック：

// ```ts
// type A = ToArray<string>;        // string[]
// type B = ToArray<number | null>; // number[] | null[]
// ```

// → **期待通りの型になっています！** 🎉

// ---

// 🧠 **ポイント復習：**

// - `T extends any ? T[] : never`
//   → `T` がユニオン型（例：`number | null`）のとき、自動的にそれぞれ分配されて
//   → `number[] | null[]` になる！

// これは条件付き型の中でも **応用でめちゃくちゃ使う書き方** なので、このタイミングで習得できたのはすごく大きいです！👏

// ---

// ### 🚀 問題3：条件付き型 × 推論 (`infer`)

// 次はちょっとレベルアップして、**`infer`（型の推論）** を使った問題にいきます！

// ---

// ### ✅ 問題3：配列の要素の型を取り出す `ElementType<T>`

// 次の `ElementType<T>` は、配列型 `T` の**中身の型**を取り出す型です。
// `infer` を使って実装してください。

// ```ts
// type ElementType<T> =
//   // ここに infer を使って実装してください

// type A = ElementType<string[]>; // string
// type B = ElementType<number[]>; // number
// type C = ElementType<boolean>;  // never（配列じゃないので）
// ```

// 準備ができたら、回答をどうぞ！🙌
// ヒントが必要ならまた出しますね！

type ElementType<T> = T extends (infer U)[] ? U : never;
// ここに infer を使って実装してください

type A = ElementType<string[]>; // string
type B = ElementType<number[]>; // number
type C = ElementType<boolean>; // never（配列じゃないので）
