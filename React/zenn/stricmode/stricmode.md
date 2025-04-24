## StrictMode が On だと処理が 2 回走るのか

React の公式ドキュメントを振り返っていると、自分の想定とは違う挙動をしていることに気が付きました。  
公式ドキュメントなので間違いはほぼないとは思いつつ、気になったのでまとめました。

## どんなコードだったか

[この記事](https://ja.react.dev/learn/keeping-components-pure)にあるコードです。

```ts
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

結果はこの通りになります。

```ts
Tea cup for guest #2
Tea cup for guest #4
Tea cup for guest #6
```

ここで私は「`1`→`2`→`3`では！？」となりました。開発に慣れている方はもう分かるでしょう・・・この原因は`StrictMode`にありました。

## StrictMode って？

公式ドキュメント[^1]の言葉を引用すると

> `StrictMode`は、開発環境においてコンポーネントの一般的なバグを早期に見つけるのに役立ちます。

とのこと。しかもこれは開発環境のみで実行される機能のようです。

### ではなぜ 2 回実行されるの？

`StrictMode`は主に以下のことをチェックするために、開発環境のみで**関数コンポーネントを仮実行 → 画面の描画を行い**ます。

1. コンポーネントが純関数であるか？
2. レンダリング中に副作用がないか？

### 本当に開発環境だけなのか？

今回のコードを公式ドキュメントからダウンロードしてきました。`script`部分だけ抜粋します。

```ts
<script type="text/babel" data-type="module">
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

let App = function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
</script>
```

`<StrictMode>`の記載がありますね。これをコメントアウトして実行してみましょう。

```diff ts
root.render(
-  <StrictMode>
    <App />
-  </StrictMode>
);
</script>
```

すると結果は・・・

```ts
Tea cup for guest #1
Tea cup for guest #2
Tea cup for guest #3
```

想定通りとなりました。
見出しでは「開発環境だけ」としましたが、それ以外にも`StrictMode`を外すことによって、関数コンポーネントは 1 回しか呼び出されません。

### どこがよくないのか

React の原則でもある、純関数で書くということが守られていないからです。
純関数とは「**同じ入力に対して、常に同じ結果を返す関数**」のことを指します。

今回のコードでは、`guest`がグローバル変数です。
今は関数`Cup`のみで値の読み書きを行っていますが、将来的には他の関数で書き換えられることも考えられます。さらに、このコンポーネントを複数回呼び出すと結果がことなる JSX がどんどん生成されてしまいます。  
これでは、純関数とは言えなくなってしまいますね。

### React 的に正しい書き方に修正

`props`を使って純関数にします！

```ts
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

`props`を使うことによって、関数`Cup`は JSX だけを返すだけの機能になります。
(関数`Cup`に渡す変数の値は親のコンポーネントの責任となります。)

### 最後に

余談です。  
改めて公式ドキュメントを振り返ってみると、今まで理解出来ていなかったことがすんなり理解できたり、逆に疑問点が出てくることが分かりました。  
自分が間違って覚えていないか？ということが確かめられるので、公式ドキュメントは定期的に見返すのが良いかもしれませんね！

[^1]: https://ja.react.dev/reference/react/StrictMode#strictmode
