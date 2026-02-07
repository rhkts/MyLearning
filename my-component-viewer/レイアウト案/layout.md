## 目的

my-component-viewer のレイアウトを変更する

## レイアウトの例

- my-component-viewer\レイアウト案\layout.md
- `logo`と`title`を 1 つのボタンとして扱う
  - ボタンをクリックした後は現在の`my-component-viewer\src\components\Layout.tsx`を表示する
- `Home`はこのサイトに初回起動時のみ表示する。(もしくはブラウザの戻るボタンをクリックされたとき)

### 各レイアウトについて

- header
  - 現状のヘッダーとする
- ロゴ
  - `my-component-viewer\src\components`配下のフォルダごとに適切なロゴを設定する
    - mui: マテリアル UI
    - ReactHookForm: ReactHookForm または React
    - TailwindCSS: TailwindCSS
    - Tools: JavaScript
  - 使用するロゴは各公式から配布されているものを利用する。特に内容であれば`my-component-viewer\レイアウト案\シャープアイコン1.svg`を利用する
- `title`には`components`フォルダ配下の各コンポーネントのファイル名を利用する
  - 例: 「ReactHookHormSampleInputs」というタイトルの場合、タイトル名は`my-component-viewer\src\components\ReactHookForm\ReactHookHormSampleInputs.tsx`のファイル名を使用する

### 色味について

- 現在の色味に合わせて背景色、各コンポーネントのボタンを設定する

### 禁止事項

- レイアウトに関する部分のみを修正すること
- 特に`D:\work\00_MyLearning\my-component-viewer\src\components`配下のファイルについてはリファクタリングなどは実行しないこと
  - ただし、Home 画面を実装するにあたって、色味の調整等が必要であれば修正を許可する
