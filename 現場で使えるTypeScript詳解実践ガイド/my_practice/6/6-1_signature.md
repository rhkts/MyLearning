学習を進めるにあたって、シグネチャというものか？ということをあまり理解出来ていませんでした。
[この記事](https://zenn.dev/o0rororo0o/articles/074129387c31fe)でも少し触れていますが、練習問題などを使ってもう少し踏み込んで学習しましょう。

## シグネチャ(signature)とは

おさらいにもなりますがシグネチャとは簡単にいうと、関数の「引数の数と型・順番」と「戻り値」を定義したものです。  
シグネチャを定義することによって、「関数がどのように呼ばれ、どのような値を戻り値とするのか」が明確になります。

実際のコードで確認してみましょう。

### 関数シグネチャ

以下の情報を持った関数の型のこと。

- どのような引数をとるか
- どのような戻り値を返すか

次のような関数があったとします。

```ts
function greet(name: string): string {
  return `こんにちは！ ${name}さん`;
}
```

この関数のシグネチャは

```ts
(name: string) => string;
```

となります。  
引数は`name`で`string`型、戻り値は`string`型であることをが分かります。

関数の型だけを定義したい場合は次のように書きます。

```ts
type GreetFunction = (name: string) => string;
```

定義した型を使用する場合

```ts
const greet2: GreetFunction = (name) => {
  return `こんにちは！ ${name}さん`;
};
```

### オーバーロードで使用する場合

TypeScript では、関数のオーバーロードをすることができます。

#### オーバーロードとは

関数名と戻り値が同じで、引数の型、並び順が違う関数を定義することです。

次の例では、どれも同じ関数名の関数`toStr`を定義しています。  
引数の`value`は`number`型、`boolean`型、`any`型とそれぞれ異なりますが、戻り値はどれも`string`型です。

```ts
function toStr(value: number): string;
function toStr(value: boolean): string;
function toStr(value: any): string {
  return String(value);
}
```

### 練習問題

ここからは練習問題を使って、学習した内容の使用例などを確認してみましょう。
問題はすべて chatGPT に作ってもらいました。

#### 問題 1：関数のシグネチャを答えよう（初級）

次の関数のシグネチャはどうなりますか？

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

この関数のシグネチャを (引数) => 戻り値の型 形式で書いてください。

:::details 回答

```ts
(a: number, b: number) => number;
```

---

`(a: number, b: number) => number`のシグネチャは

- `a: number`：第 1 引数は数値
- `b: number`：第 2 引数も数値
- `=> number`：戻り値も数値

です。

---

:::

#### 問題 2：関数シグネチャを型として定義しよう（中級）

以下の条件に合う 型エイリアス を type を使って作ってください。

- 引数は `id: number` と `isAdmin: boolean`
- 戻り値は `string`

そのあと、それを使って `describeUser` 関数を定義してください。

:::details 回答

```ts
//関数のシグネチャを使って、型を定義
type DescribeUser = (id: number, isAdmin: boolean) => string;

//定義した型を使って関数を実装
const describeUser: DescribeUser = (id: number, isAdmin: boolean) => {
  return `ID:${id}は管理ですか？ ${isAdmin ? "はい" : "いいえ"}`;
};
```

:::

#### 問題 3：関数のオーバーロードを使って定義しよう（上級）

以下のような関数 `format` を作成したいです

- 数値を渡すと `"数値です: 123"` のように返す

- 文字列を渡すと `"文字列です: abc"` のように返す

この format 関数を 関数のオーバーロード（複数のシグネチャ） を使って実装してください。

:::details 回答

```ts
//オーバーロードのシグネチャ
function checkType(value: number): string;
function checkType(value: string): string;

//関数本体
function checkType(value: number | string) {
  if (typeof value === "number") {
    return `数値です: ${value}`;
  } else {
    return `文字列です: ${value}`;
  }
}

console.log(checkType(123));
console.log(checkType("abc"));
```

:::
