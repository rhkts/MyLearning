## インデックスアクセス型

学習中にインデックスアクセス型で躓いたので、調べたことをまとめました。

今回、躓いたコードは次のようなコードです。

```ts
const STATUS = ["todo", "working", "done"] as const;
type Status = (typeof STATUS)[number];
```

普段から TypeScript を触れている型であれば、このコードの`type Status = (typeof STATUS)[number];`部分はどんなことをしているコードがパッと判断できる方が多いと思います。  
もし判断が付かなくてもこの記事で学習しましょう！！！

### `type xxx = (typeof ○○○)[number]`は何をしているのか

結論からいうとこれは**「配列内の要素の型を取り出す」**ということをやっています。

少しずつ確認してみましょう。

#### as const

本題に入る前に一か所だけ確認します。  
これは`const`アサーションと呼ばれ、変数が読み取り専用であることを示します。  
これにより、配列を読み取り専用のタプルとして扱います。
[const アサーションの記事](https://zenn.dev/o0rororo0o/articles/f5c2651a3455f5#const-%E3%82%A2%E3%82%B5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)

#### typeof arr[]

`typeof`演算子は JavaScirpt と TypeScript でそれぞれ違いがあります。
JavaScript は**指定した値の型を絞り込む**、**TypeScript では変数から型を抽出し、型情報を返却する**という違いです。[以前の記事で紹介しました](https://zenn.dev/o0rororo0o/articles/1d08fa38d01615#typeof)

今回は TypeScript の`typeof`演算子が使われています。  
分かりやすいように`[number]`部分を取り除いて、型情報が返却されているか見てみます。

```diff ts
const STATUS = ["todo", "working", "done"] as const;
+ type Status_1 = typeof STATUS;
+ type Status_2 = (typeof STATUS)[number];
- type Status = (typeof STATUS)[number];
```

では、型`Status_1`の中身はどうなっているのかというと・・・

```ts
type Status_1 = readonly ["todo", "working", "done"];
```

となり、`STATUS`配列全体の型を取得しています。  
では`Status_2`はどうなっているでしょうか。

```ts
type Status_2 = "todo" | "working" | "done";
```

ユニオン型となっています。

初めに書いたように、`type xxx = (typeof ○○○)[number]`では**「配列内の要素の型を取り出す」**ということをやっています。
つまり分解してみると

```ts
STATUS[0] → "todo"型
STATUS[1] → "working"型
STATUS[2] → "done"型
```

となります。
これらをすべて集める・・・

```ts
"todo" | "working" | "done";
```

というユニオン型になります。`Status_2`の中身と一致していますね！

### まとめ

あらためて最初のコードを見てみましょう。

```ts
const STATUS = ["todo", "working", "done"] as const;
type Status = (typeof STATUS)[number];
```

ここまできたらこのコードでどんなことをやっているか理解できますね！

| 構文               | 意味                  |
| ------------------ | --------------------- |
| typeof arr         | 配列全体の型          |
| typeof arr[number] | 配列の要素型（Union） |

- [number] は配列の要素型を取り出すためのインデックスアクセス型
- as const を使うことで、文字列リテラル型として扱える

### おまけ

インデックスアクセス型を利用することによって、将来的に新たなステータスの型を追加した場合、`STATUS`にその要素を追加するだけで型`Status`に反映されるようになります！
例) `review`を追加

```ts
const STATUS = ["todo", "working", "done", "review"] as const;
type Status = (typeof STATUS)[number];
// → "todo" | "working" | "done" | "review"
```
