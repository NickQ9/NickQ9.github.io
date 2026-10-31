# Shunichi Nakai — Portfolio

Nuxt 3 + TypeScript で作った静的ポートフォリオサイトです。名刺と同じ VS Code 風のダークテーマで統一しています。

## 動かし方

```bash
npm install
npm run dev        # http://localhost:3000 で確認
npm run generate   # .output/public に静的ファイルを出力
```

## 内容の編集

表示する文言はすべて `data/profile.ts` にまとめています。

- **プロフィール・連絡先** … `profile`
- **スキル** … `skills`
- **実績** … `works`
  - `draft: true` の項目は `npm run dev` では表示され、本番ビルド（`generate`）では非表示になります。
  - 実績を書き終えたら `draft` を消すと公開されます。
  - 公開できる実績が 0 件のときは「準備中」の一文が表示されます。

## GitHub Pages で公開する

公開先: https://nickq9.github.io/ （リポジトリ `NickQ9/NickQ9.github.io`）

1. GitHub に `NickQ9.github.io` という名前でリポジトリを作る
2. このフォルダをそのリポジトリに push する
3. リポジトリの **Settings → Pages → Source** を **GitHub Actions** にする
4. 以降は `main` に push するたびに `.github/workflows/deploy.yml` が自動でデプロイします

別名のリポジトリ（例: `portfolio`）にする場合は、`deploy.yml` の `NUXT_APP_BASE_URL` を `/portfolio/` に変更してください。
