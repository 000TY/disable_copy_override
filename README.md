# Disable Copy Override

この拡張機能は、Webサイト上でコピーや選択を禁止するスタイルやスクリプトを無効化します。  
主に `user-select: none` や、選択・コピー・右クリックなどを妨げるイベントリスナーを解除します。

## 主な機能

- `user-select: none` を含むすべてのCSSスタイルを `user-select: text !important` に上書き
- インラインスタイルでも選択不可にされている要素を復元
- `contextmenu`、`selectstart`、`copy` などの妨害イベントを無効化
- DOMに動的に追加された要素にも対応（MutationObserver使用）

## インストール方法（Chrome）

1. このリポジトリをダウンロードまたはクローン
2. Chromeで `chrome://extensions/` にアクセス
3. 右上の「デベロッパーモード」を有効化
4. 「パッケージ化されていない拡張機能を読み込む」からこのフォルダを選択

## ディレクトリ構成

```
disable-copy-override/
├── manifest.json # 拡張機能の定義ファイル（Manifest v3）
├── content.js # コピー禁止を解除するメインスクリプト
├── README.md # このファイル
```

## 使い方

拡張機能を有効化するだけで、自動的にすべてのWebページに対して動作します。  
特別な操作や設定は不要です。

- すべてのテキストを選択可能にします
- コピーや貼り付けを妨害するスクリプトを無効にします
- 右クリックメニューが制限されている場合も解除します

## 対応ブラウザ

- ✅ Google Chrome
- ⚠️ Firefox（Manifest v2 または MV3 Polyfill が必要）

## ライセンス

MIT License
