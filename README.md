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

## 画像

`public/images/` にAI生成画像（Web用に圧縮済みJPEG）を配置済み。元の高解像度PNGは `source-images/`（gitignore対象・ローカルのみ）に保管しています。

| ファイル | 内容 |
|---|---|
| `hero.jpg` | トップのヒーロー |
| `concept.jpg` | コンセプトセクション |
| `room-private.jpg` / `room-open.jpg` | 個室ジム／オープンジム |
| `esthetic.jpg` / `shower.jpg` / `bodyscan.jpg` / `reception.jpg` | 施設各所 |
| `ba-1.jpg` / `ba-2.jpg` | ビフォーアフター（実際のお客様写真） |
| `radio-jacket.jpg` | ラジオ番組ジャケット |
| `blog-*.jpg` | ブログカテゴリ別アイキャッチ |
| `trial-bg.jpg` | 30日体験セクションの背景 |
| `ogp.jpg` | SNSシェア用OGP（1200×630） |
| `home-image01.jpg` | 実際の指導風景（未使用・予備） |

差し替える場合は同名ファイルを上書きするだけです（実写真への入れ替え推奨箇所: 施設写真・ヒーロー）。

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
