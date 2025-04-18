## JSON ファイルをインポートする方法

TypeScirpt では、`import`を用いて JSON ファイルを直接インポートすることができます。  
取り込んだデータは配列やオブジェクトとして利用できます。

### オプション設定

tsconfig.json にオプション`resolveJsonModule`を追加します。

```json: tsconfig.json
{
  //他のオプションは省略
  "compilerOptions": {
    // JSONファイルのインポートを有効に設定
    "resolveJsonModule": true
  }
}
```

### 読み取る JSON ファイル

サンプルデータとして[JSONPlaceholder](https://jsonplaceholder.typicode.com/)から JSON データを借ります。
ファイル名は`jsonData.json`とします。

```json:
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

### JSON ファイルをインポートする ts ファイル

JSON ファイルをインポートするするファイルを用意します。ファイル名は`getJson.ts`とします。

ここまで準備が出来たらすぐに取込みができます。  
インポートしたい JSON ファイルを`import`キーワードを使ってインポートするだけです。

```ts: getJson.ts
import jsonData from "./jsonData.json";

console.log(jsonData);
```

コンソールの結果を確認してみましょう！

```
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
```

コンソールの結果と JSON ファイルの内容が一致していますね。  
これで JOSN ファイルから直接データをインポートできるようになりました。

### ついでに
