## 分割代入と splice

TypeScirpt の学習を進めている際に、分割代入と`splice`を使って「配列からランダムに 1 つだけデータを取り出す」というサンプルコードがありました。  
分割代入と`splice`の組み合わせに躓いたので、調べたことをまとめました。

### やりたかったこと

やりたかったこととしてはシンプルです。

- あらかじめ`questions`という配列にデータが入っている
- `questions`からランダムに 1 つ取り出して配列で返す
- 一度取り出した問題は`questions`から取り除く

サンプルコードは次のようなコードでした。

```ts
const questions = ["Q1", "Q2", "Q3"];

function getNext(datas: string[]): string[] {
  const idx = Math.floor(Math.random() * datas.length);

  const [question] = datas.splice(idx, 1);

  return [question];
}

console.log(getNext(questions));
```

(おそらくですが)このコードは難しいことはしていないのかなと思います・・・。  
ただ、`const [question] = datas.splice(idx, 1);`の部分がピント来ませんでした。

### `const [question] = ...`は何をしているのか

改めて気になった所を抜粋します。

```ts
const [question] = datas.splice(idx, 1);
```

このコードを分解してみましょう。
まずは`datas.splice(idx, 1)`です。
ここでは次の 2 つのことが行われています。

1. 配列`data`から`idx`番目の要素を削除
2. 削除された用をを配列として返す

順番にコンソールを出力してみると分かりやすいですね。

```ts
  const remove = datas.splice(idx, 1);
  console.log(remove);
  → [ 'Q3' ]

  const question = remove[0];
  console.log(question);
  → Q3
```

では次に`const [question] = datas`部分です。  
ここでは**分割代入**という書き方が使用されています。  
簡略化したコードで確認してみましょう。

```ts
const questions = ["Q1", "Q2", "Q3"];

const [a, b] = questions;
```

上記のコードでは、配列`questions`の 1 番目の要素と 2 番の目の要素を取り出して、変数`a`と変数`b`にそれぞれ代入している。というコードです。変数`a`と変数`b`の中身をコンソールで確認してみます。

```ts
console.log(a);
→ Q1
console.log(b);
→ Q2
```

変数`a`には`Q1`が、変数`b`には`Q2`が代入されていることが分かりました。　　
では躓いた部分のコードに戻ります。  
`const [question] = datas`
でしたね。これを日本語で表すと
配列`datas`の 1 番目の要素を変数`question`に代入している  
ということになります。

つまり

```ts
const [question] = datas.splice(idx, 1);
```

はどういうことをしていうのかというと・・・

1. 配列`data`で「`idx`番目のデータを削除」し、配列で返却(例:`[Q2]`)
2. 受け取った配列を分割代入で取り出して、変数`questtion`に代入

ということになります！  
省略せずに書くと次のようになります

```ts
const remove = datas.splice(idx, 1); //["Q2"]

const question = remove[0]; //"Q2"
```

これを 1 行で書いているのが

```ts
const [question] = datas.splice(idx, 1);
```

になるわけですね。

### なぜこの書き方になるのか？

ここまでを考えると次の 3 つのことが理由になるからだと考えます！

- splice の返り値は配列なので、1 つだけ取りたいときは分割代入が楽
- removed[0]と書くよりスッキリする
- 一時変数を作らずに、その場で取り出せる

### まとめ

- const [question] = splice(...) は、splice の返り値（配列）の最初の要素を取り出す書き方

- 分割代入を使うと、配列やオブジェクトの中身を簡潔に取り出せる

- 特に splice との組み合わせは、「1 つだけ欲しい」場面で利用できる

### 最後に

たった 1 行にこれだけのことが詰まっているとは思ってもみなかったです。
まだまだ学ぶことは沢山あると実感しました。この TypeScritp の本はいつ読み終わるのだろうか・・・。
