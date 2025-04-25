# 環境変数の設定と利用方法

開発環境を整えている際に、API の URL と API キーを環境変数に設定したくなりました。  
そこで Vite で環境変数を設定してみようと思います。環境変数を設定するにあたって調べたことも踏まえて手順のおさらいをしましょう！

## 環境変数とは

プログラミングの学習をしていると「変数」という言葉は必ずできますよね。それに、「変数は値を入れておく箱のようなもの」として紹介されていることが多いかと思います。  
環境変数も同様に、「箱」としてイメージするのが分かりやすいです。  
肝心な「箱」の中身は、**アプリの設定情報や外部に公開したくない**ものを代入します。
例えば・・・

- API のキー
- 機能の切り替え(開発用と本番用の機能)
  などです。

もう少し具体的な例を挙げるとすれば、
開発用にコンポーネントを用意しているけど、本番用では公開したくないコンポーネントがある。
という場合に、デプロイ時にいちいちコメントアウトするのも面倒ですよね。
そんな時に環境変数としてフラグを 1 つ用意しておけば「開発用では表示する、本番用用では表示しない」という設定がフラグだけで完了できます！

## Vite での環境変数を設定する

まずはディレクトリ構成です。

```
/
├─ node_modules
├─ public
├─ src
│  ├─ components
│  └─ ・・・
├─ package.json
├─ package.lock.json
├─ tsconfig.json
├─ README.md
├─ .gitignore
└─ vite.confgi.ts
```

プロジェクト作成後に一番外側のルートディレクトリで、`.env`ファイルを作成します。`tsconfig.json`などと同じ階層です。

```diff
 /
 ├─ node_modules
 ├─ public
 ├─ src
 │  ├─ components
 │  └─ ・・・
+├─ .env
 ├─ package.json
 ├─ package.lock.json
 ├─ tsconfig.json
 ├─ README.md
 ├─ .gitignore
 └─ vite.confgi.ts
```

この`.env`ファイルに環境変数を記述していきます。
今回は例として環境変数を追加します。

```ts: .env
VITE_SAMPLE_1 = "環境変数です！"
```

Vite で環境変数を利用する場合は**頭文字を`VITE`にしないと読み込まれません**

## 環境変数を読み込む

では設定した環境変数を読み込んで見ましょう。

```ts: App.tsx
function App() {
  return (
    <h1>{import.meta.env.VITE_SAMPLE_1}</h1>
      );
}

export default App;
```

![alt text](image.png)

ブラウザ上で設定した環境変数の中身`"環境変数です！"`が表示されていますね。

これで環境変数の設定が出来ました！

## おまけ

冒頭では、「開発用にコンポーネントを用意しているけど、本番用では公開したくないコンポーネントがある」という例を使って環境変数を紹介しました。  
Vite では`mode`というオプションを付与することによって、開発用環境、本番用環境と切り替えることができます。
オプションの切り替えはファイル名で行います。
では、例として`.env.development`ファイルを用意します。

```ts: .env.development
VITE_SAMPLE_DEV = "developmentの環境変数です！"
```

`mode`の切り替えはコマンド実行時のスクリプトで変更できます。

```diff:package.json
  "scripts": {
    "dev": "vite",
+   "build-test": "vite build --mode development",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```

この状態で`build-test`を実行すると、開発用の環境変数でビルドされ`VITE_SAMPLE_DEV`に代入されている`"developmentの環境変数です！"`が確認できるようになります。

:::message
`.env`ファイルはすべての場合に読み込まれます。
隠したいものがある場合は`mode`オプションを付与しているファイルに書く必要があります。
:::

環境変数をうまく利用してテストなどの環境切り替えを楽にしていきましょう・・・！
