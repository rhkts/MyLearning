クイズをつくるコンソールアプリを typescritp の書籍を用いて作成しています。
次の問題を取得するメソッドを作成しています。コードは次の通りです。

---

getNext(): Question[] {
//0 以上、配列の長さ以下のランダムな整数を生成
const idx = Math.floor(Math.random() \* this.questions.length);

    const [question] = this.questions.splice(idx, 1);

    return [question];

## }

このコードの`const [question]`がイマイチわからないのですがこれは
定数`question`の配列を作成している
という認識であっていますか？

とてもいい質問です！  
その認識、**ちょっと惜しい**ところがあります。

この部分 👇

```ts
const [question] = this.questions.splice(idx, 1);
```

は、**配列の分割代入（destructuring assignment）** という機能を使っています。  
結論から言うと：

---

### ✅ 「`splice`で取り出した配列の、最初の要素を変数`question`に代入している」

---

### つまりどういうことか？

`this.questions.splice(idx, 1)` は、

- `this.questions` 配列の `idx` 番目の要素を 1 つ削除して、
- その削除された要素を **配列として返す**

たとえば：

```ts
const arr = [10, 20, 30, 40];
const removed = arr.splice(2, 1); // => removed は [30]
```

この `removed` の最初の要素（つまり `[30]` の中の `30`）だけを使いたい場合、

```ts
const [question] = removed; // question === 30
```

という風に書けるんです。

---

### なのでまとめると：

- `const [question]` は「**配列の最初の要素を取り出して`question`に入れる**」という意味
- 配列`[question]`を作ってるわけではない
- 結果的に、関数全体は「ランダムに 1 問取り出して、それを配列にして返している」

---

質問がすごく鋭くて、TypeScript の細かいところまで丁寧に見れてますね！

もし分割代入の部分をもっと深掘りしたかったり、他のコードも見たいって感じなら、気軽に言ってくださいー！

---

もちろんです！  
じゃあ、そのまま Zenn にコピペして投稿できるレベルまで**Markdown 形式**で仕上げますね。  
構成は「クイズアプリで使った splice ＋分割代入でハマった話」をベースにしています。

---

````md
# TypeScript で配列からランダムに 1 つ取り出すときにハマった話 〜分割代入と splice を添えて〜

クイズアプリを作っているとき、配列から**ランダムに 1 問だけ取り出す**という場面がありました。  
「よし、`splice`で取り出せばいいじゃん！」と思って実装してみたところ…  
動くけど、**よく分からない書き方**が出てきて自分でも混乱。

この記事では、TypeScript でクイズアプリを作る中で出会った「**分割代入＋ splice の組み合わせ**」について、初心者目線でわかりやすく解説していきます。

---

## 🎯 やりたかったこと：クイズをランダムに 1 問出す

まず、目的はとてもシンプルです。

- あらかじめ `this.questions` に問題が入っている
- その中から **ランダムに 1 問取り出して、配列で返す**
- 一度取り出した問題は二度と出ないようにしたい（=取り除く）

こういった処理を書くとき、私は次のようなコードを使いました。

```ts
getNext(): Question[] {
  const idx = Math.floor(Math.random() * this.questions.length);
  const [question] = this.questions.splice(idx, 1);
  return [question];
}
```
````

これで動く。たしかに動く。  
でも…

---

## 🤔 `const [question] = ...` って何してるの？

この書き方、正直最初に見たときはピンときませんでした。

```ts
const [question] = this.questions.splice(idx, 1);
```

- `splice`は知ってる。`idx`番目の要素を取り除いて、配列で返すやつ。
- でも、`[question]`って… これは**配列を作ってるの？**

---

## 🔍 分解してみる

実はこのコード、**分割代入（Destructuring Assignment）**という書き方が使われています。

```ts
const [question] = someArray;
```

これは、「`someArray`の**最初の要素**を `question` に代入する」という意味です。

じゃあ、`splice`が返すのは？

```ts
const arr = ["A", "B", "C", "D"];
const removed = arr.splice(1, 1); // => ['B']
```

`splice`は、**削除した要素を配列で返す**んです。

つまり…

```ts
const [question] = this.questions.splice(idx, 1);
```

はこういうこと 👇

1. `splice(idx, 1)` で「idx 番目の要素を 1 つ削除」し、配列で返す（例：`['Q2']`）
2. それを分割代入で取り出して、`question` に代入

なので、たとえば次のように考えて OK です：

```ts
const removed = this.questions.splice(idx, 1); // ['Q2']
const question = removed[0]; // 'Q2'
```

これを 1 行で書いてるのが `const [question] = ...` というわけです。

---

## ✅ なぜこの書き方が便利なのか？

- `splice`の返り値は配列なので、**1 つだけ取りたいときは分割代入が自然**
- `removed[0]`と書くよりスッキリする
- 一時変数を作らずに、**その場で取り出せる**

また、複数の要素を取りたいときはこうも書けます 👇

```ts
const [first, second] = this.questions.splice(idx, 2);
```

---

## 👀 他にも応用できる場面は？

実はこの**分割代入**、いろんな場面で使えます。

### Promise の結果を取り出すとき：

```ts
const [res1, res2] = await Promise.all([fetchA(), fetchB()]);
```

### 関数の返り値が配列のとき：

```ts
function getSize(): [number, number] {
  return [1920, 1080];
}

const [width, height] = getSize();
```

### 配列の一部を無視することもできる：

```ts
const [, second] = ["A", "B", "C"]; // second = 'B'
```

---

## 📝 まとめ

- `const [question] = splice(...)` は、**splice の返り値（配列）の最初の要素を取り出す書き方**
- **分割代入**を使うと、配列やオブジェクトの中身を簡潔に取り出せる
- 特に `splice` との組み合わせは、**「1 つだけ欲しい」場面でよく使えるテクニック**

---

## 💬 あなたはどう思いましたか？

「分割代入ってなんとなく使ってたけど、こういう使い方もあるんだ」と感じた方も多いのではないでしょうか？

もしこの記事が少しでも参考になったら、いいね 👍 やコメントで教えてもらえると嬉しいです！

---

## 🛠 補足：今回の例の全体コード（参考）

```ts
class QuizManager {
  private questions: Question[] = [
    { id: 1, text: "日本の首都は？" },
    { id: 2, text: "2 + 2 は？" },
    { id: 3, text: "TypeScriptの拡張子は？" },
  ];

  getNext(): Question[] {
    const idx = Math.floor(Math.random() * this.questions.length);
    const [question] = this.questions.splice(idx, 1);
    return [question];
  }
}

type Question = {
  id: number;
  text: string;
};
```

---

```

---

どうでしょう？
このままZennにコピペで投稿できますし、必要に応じて語尾を調整したり、図やコードサンプルを追加しても◎です！

もし「もうちょっとユーモア足したい」とか「イラスト風の説明図ほしい」みたいなのあれば、それもお手伝いできますよ〜！
```
