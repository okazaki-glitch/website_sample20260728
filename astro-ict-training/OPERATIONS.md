# Astro運用練習メモ

このフォルダは、本番サイトではなくAstroの運用を学ぶための練習環境です。

## 起動

PowerShellでは `npm` が実行ポリシーで止まる場合があるため、ここでは `npm.cmd` を使います。

```powershell
cd C:\Users\rental\.gemini\antigravity-ide\scratch\website_sample20260728\astro-ict-training
npm.cmd run dev
```

ブラウザで表示されたURLを開きます。通常は以下です。

```text
http://localhost:4321/
```

## お知らせを追加する

`src/content/news/` にMarkdownファイルを追加します。

例:

```text
src/content/news/2026-08-01-network.md
```

中身:

```md
---
title: 学内ネットワークメンテナンスのお知らせ
date: 2026-08-01
summary: 学内ネットワークメンテナンスの予定をお知らせします。
---

学内ネットワークのメンテナンスを実施します。
```

保存すると、開発サーバ起動中であればブラウザに反映されます。

この練習環境では、記事URLはMarkdownファイル名から作られます。例えば `2026-08-01-network.md` は `/news/2026-08-01-network/` になります。

## FAQを追加する

`src/content/faq/` にMarkdownファイルを追加します。

```text
src/content/faq/zoom.md
```

中身:

```md
---
title: Zoomに大学アカウントでサインインできません。
---

一度サインアウトし、大学指定のサインイン方法を選択してください。
```

## 障害情報を変更する

`src/data/status.json` を編集します。

```json
{
  "status": "maintenance",
  "summary": "VPNメンテナンスを予定しています。",
  "body": "2026-08-10 18:00-20:00 の間、VPNが利用できません。",
  "updated": "2026-08-01"
}
```

`status` は `ok`、`maintenance`、`incident` のいずれかにします。

## 公開用HTMLを作る

```powershell
npm.cmd run build
```

成功すると `dist/` が作成されます。この中身が公開用の静的HTMLです。

## 公開前の確認

```powershell
npm.cmd run preview
```

`dist/` の内容をローカルで確認できます。
