# 変更内容

1.  ルーティング導入

- src/main.tsx:3 で BrowserRouter を適用。
- src/App.tsx:7 で以下ルートを定義。
  - / → Home
  - /component/:componentId → Layout
  - - → / にリダイレクト

2. Home 画面の新規追加

- src/components/Home.tsx:4 を新規作成。
- header + カードグリッド 構成に変更。
- 各カードを logo + title の 1 ボタンにし、クリックで詳細画面へ遷移（src/components/Home.tsx:19）。

3. コンポーネント定義の共通化

- src/components/componentRegistry.tsx:8 を新規作成。
- components 定義を集約し、path からファイル名を title として生成（src/components/componentRegistry.tsx:59）。
- ロゴマップを追加し、現時点では レイアウト案/シャープアイコン 1.svg をカテゴリ共通で利用（src/components/
  componentRegistry.tsx:72）。

4. Layout の改修

- src/components/Layout.tsx:13 で componentId を URL から取得。
- src/components/Layout.tsx:29 に logo + title ボタンヘッダーを追加し、/ に戻れるように変更。
- デモ/コードタブ表示は維持（src/components/Layout.tsx:51）。

5. 型・依存更新

- src/components/type.ts:3 に ComponentCategory と category を追加。
- package.json:20 に react-router-dom を追加（インストールで ^7.13.0 に確定）。
- package-lock.json も更新済み。

# 全体像

1. Layout（選択コンポーネントの詳細表示）
   の 2 画面構成に分け、logo + title を導線に使えるレイアウトへ変更することでした。

2. ルーティング導入（画面を分離）
3. src/main.tsx:3

- BrowserRouter を追加し、アプリ全体をルーター配下にしました。
- これで URL ベースで Home と詳細画面を切り替えられるようになりました。

2. src/App.tsx:7

- Routes / Route / Navigate を使ってルートを定義しました。
- 想定外 URL は \* で "/" へリダイレクトするようにしました（壊れた導線防止）。
  ———

2. Home 画面の新規作成（レイアウト案ベース）

- header + グリッドカード の構成を新規実装しました。

- 各カードを 1 つの button として実装しました。

- カードクリック時に navigate('/component/:componentId') する導線を追加しました。

3. コンポーネント情報の共通化（重複削減）
1. src/components/componentRegistry.tsx（新規）

- 以前 Layout.tsx にベタ書きされていたコンポーネント一覧を切り出しました。
- Home と Layout が同じ定義を参照する構成に変更しています。

2. src/components/componentRegistry.tsx:8

- id / path / component / category を持つ配列を定義しました。
- 画面間で同じ ID やパス定義を使うため、整合性が崩れにくくなっています。

3. src/components/componentRegistry.tsx:59

- path からファイル名を抽出して name にする処理を実装しました。
- 要件の「title には components 配下のファイル名を利用」を満たします。

4. src/components/componentRegistry.tsx:72

- categoryLogoMap を用意し、カテゴリ → ロゴ画像を解決できるようにしました。
- 現在は全カテゴリで レイアウト案/シャープアイコン 1.svg を使用しています。

4. Layout 画面の再設計（URL パラメータ駆動）
1. src/components/Layout.tsx:13

- useParams() で componentId を受け取り、getComponentById で対象コンポーネントを解決する方式に変更しました。

- 既存の import.meta.glob を維持しつつ、選択対象の path からソースコードを読み込む処理を継続しました。

- ヘッダーに logo + title ボタンを配置。

- 不正な componentId の場合はエラーメッセージと Home へ戻る ボタンを表示するようにしました。

- console.log(sourceCode) のデバッグ用副作用も削除しました。

1. src/components/type.ts:3

- "mui" | "ReactHookForm" | "TailwindCSS" | "Tools" を型として固定しています。

2. src/components/type.ts:5

- ComponentType に category を追加しました。

3. src/components/type.ts:1

- JSX の import 元を @emotion/react/jsx-runtime から react に変更しました。

5. 依存関係の更新

1. package.json:20

- react-router-dom を追加しました。
- 実インストール結果として ^7.13.0 が設定されています。

2. package-lock.json

- 依存追加に伴いロックファイルが更新されています。

7. 動作確認

1. npm run build

- TypeScript ビルド + Vite ビルド成功。
- ルーティング追加後のコンパイル整合性を確認済みです。

2. npm run lint

- ESLint 成功。
- 構文/ルール違反なしを確認済みです。

———

最終的に実現した挙動

1. アプリ起動時は常に Home（毎回表示）。
2. Home のカード（logo + title ボタン）を押すと詳細へ遷移。
3. 詳細画面では デモ/コード タブを維持。
4. 詳細画面の logo + title ヘッダー押下で Home に戻れる。
5. 不正 URL は Home に戻す、または戻る導線を提供。

---

• ルーティング構成図

src/main.tsx
└─ <BrowserRouter>
└─ <App />

src/App.tsx
└─ <Routes>
├─ "/" → <Home />
├─ "/component/:componentId" → <Layout />
└─ "\*" → <Navigate to="/" replace />

画面遷移フロー

Home（/）
└─ カードクリック
└─ /component/:componentId へ遷移

Layout（/component/:componentId）
└─ ヘッダーのロゴ+タイトルクリック
└─ / へ戻る

ポイント

- BrowserRouter が URL 管理の土台です（src/main.tsx）。
- ルート定義は src/App.tsx に集約。
- 不正な URL は \* で / にリダイレクト。
