# 補助金まとめサイト

## Frontend Apps

### firebase config の設定方法

1. 前提条件 firebase CLI をインストールする
   `npm install -g firebase-tools`
   プロジェクトに依らずに使用するためグローバルインストールとする

2. Google アカウントで Firebase にログインする
   `firebase login`

3. 自身が確認できるプロジェクトを確認する
   `firebase projects:list`
   自身のアカウントで有効なプロジェクトのリストが表示される

4. 使用するプロジェクトを設定する
   `firebase use [alias_or_project_id]`
   上記で確認したプロジェクト ID を設定する

5. firebase config を確認する
   ※クラウド側の firebase の WEB app の設定が完了していること

以下のコマンドを実行し設定を確認する
`firebase apps:sdkconfig`
以下の記述が表示される。この設定値を利用する

```
firebase.initializeApp({
  "projectId"
```

6. 環境変数に config の値をセットする
   .env.sample ファイルをコピーし、.env ファイルを作成する
   各変数に対応する値を上記のコマンドの結果を参照し、設定する
