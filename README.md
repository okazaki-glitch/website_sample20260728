# 大学ICTサポートサイト サンプル

WordPressを使わずに運用できる、大学ICTサポートサイトの静的HTMLサンプルです。

## 構成

- `index.html`: トップページ
- `services.html`: 利用案内
- `faq.html`: FAQ
- `status.html`: 障害情報
- `contact.html`: お問い合わせ
- `data/news.json`: お知らせデータ
- `data/status.json`: 障害情報データ
- `assets/css/styles.css`: デザイン
- `assets/js/main.js`: 表示制御

## ローカル確認

JSONを読み込むため、ファイルを直接開くのではなく簡易サーバで確認します。

```bash
npx serve .
```

または Node.js だけで確認する場合:

```bash
node --watch-path=. server.js
```

## 運用案

初期提案では、この静的HTMLサンプルで上長確認を行い、承認後にAstroへ移行するのが現実的です。

Astro移行後は以下の形にすると、更新担当者がCSSを触らずに管理できます。

- お知らせ: MarkdownまたはGoogleスプレッドシート
- FAQ: Markdown
- 利用案内: YAMLまたはJSON
- 障害情報: JSON
- 検索: Pagefind
- 公開: GitHub Pages
