# Life Design ViXer 公式サイト

高知市筆山町のパーソナルジム＆24時間ジム「Life Design ViXer」の公式サイト。

- フレームワーク: [Astro](https://astro.build/)
- ホスティング: Cloudflare Pages（GitHub連携で自動デプロイ）
- 記事管理: `src/content/blog/` 内の Markdown ファイル

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイルを出力
```

## ブログ記事の追加

`src/content/blog/` に Markdown ファイルを追加するだけで記事が公開されます。

```markdown
---
title: 記事タイトル
description: 記事の説明（検索結果・OGPに使用）
category: sleep   # sleep / diet / backpain / meal / stress
date: 2026-08-25
image: /images/blog-sleep.svg   # 任意
---

本文をここに書く。
```

## 画像の差し替え

`public/images/` のプレースホルダSVGを、実写真またはAI生成画像（Codex等）に差し替えてください。
差し替え後は各ファイルの参照パス（拡張子）を更新します。主な参照箇所: `src/pages/*.astro`、`src/data/site.ts`、ブログ記事frontmatter。

| ファイル | 内容 | 推奨サイズ |
|---|---|---|
| `hero.svg` | トップのヒーロー（外観・トレーニング風景） | 1920×1080 |
| `concept.svg` | コンセプトセクション | 1200×800 |
| `room-private.svg` | 個室ジム | 900×600 |
| `room-open.svg` | オープンジムエリア | 900×600 |
| `esthetic.svg` | セルフエステ | 900×600 |
| `shower.svg` | シャワールーム | 900×600 |
| `bodyscan.svg` | 3Dボディスキャン | 900×600 |
| `reception.svg` | 受付 | 900×600 |
| `ba-1.svg` / `ba-2.svg` | ビフォーアフター | 900×700 |
| `radio-jacket.svg` | ラジオ番組ジャケット | 800×800 |
| `blog-*.svg` | ブログカテゴリ別アイキャッチ | 900×600 |

OGP用に `public/images/ogp.png`（1200×630）も用意し、`src/layouts/Base.astro` の `ogImage` 既定値を差し替えると理想的です。

## 公開前チェックリスト

- [ ] Google口コミの★値・レビュー本文を実データに差し替え（`src/data/reviews.ts`）
- [ ] Before/After・施設写真を実画像に差し替え
- [ ] お問い合わせフォームのURLを設定（`src/data/site.ts` の `contactForm`）
- [ ] 特商法表記の「（要記入）」を正式情報に（`src/pages/legal.astro`）
- [ ] ラジオアーカイブの実データ反映（`src/data/radio.ts`）

## デプロイ（Cloudflare Pages）

1. GitHubにリポジトリを作成して push
2. Cloudflare ダッシュボード → Workers & Pages → Create → Pages → リポジトリを接続
3. Framework preset: **Astro**（Build command: `npm run build` / Output: `dist`）
4. `*.pages.dev` で確認後、カスタムドメイン `vixer.jp` を設定
