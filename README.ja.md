# InputCJK Extension
[Click here for an explanation in English.](https://github.com/PANDAKO-GitHub/InputCJK_Extension/)

これはマルチバイト文字（日本語、中国語、韓国語など）を入力できるようにする GDevelop 用の拡張機能です。

最新版は [Releases](https://github.com/PANDAKO-GitHub/InputCJK_Extension/releases) ページからダウンロードしてください。

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img01.png)

[動作サンプル](https://pandako-github.github.io/InputCJK_Extension/)

MIT License

**注意点**
- 「テキストの入力」オブジェクトとの併用はできません。
- モバイルアプリでも動作しますが少し問題があります。（後記）
- 改善の余地はありますが実用は可能です。
- これはモーダルウィンドウではありません。つまり背後にあるゲームは操作できます。
- この拡張機能が追加されたインスタンスを1つのシーンに複数配置しないでください。（後記）

## 使い方
1. 拡張機能（.jsonファイル）をダウンロードします。
2. ゲームにインポートします。  
![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img09.png)
3. 任意のオブジェクトに InputCJK ビヘイビアを追加します。
4. そのオブジェクトをシーンに配置します。
5. 拡張機能により追加された「条件」「アクション」「式」を使用してイベントを作成します。

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img04.png)

## Reference

### 条件

#### Is Close
入力欄は閉じている。

#### Is Finished
入力欄が閉じた直後。

#### Is Open
入力欄は開いている。

### アクション

#### Close Input Field
入力欄を閉じる。

#### Open Input Field
入力欄の文字列を変更した上で開く。

#### Set String
入力欄の文字列を変更する。

### 文字列式

#### String
入力欄の文字列を取得する。

## 複数の入力フィールドが必要な場合は
この拡張機能が追加されたインスタンスを、1つのシーンに複数配置しないでください。  
Is Finished の条件が機能しなくなります。  
（この拡張機能で生成される入力欄は1つだけです）

次の画像のように変数を使い、ひとつのインスタンスで入力欄を管理してください。  
「リンクされたオブジェクト」機能を利用するのも良いかもしれません。

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img07.png)

## デザインのカスタマイズ（むずい）
入力欄の見た目を変更したい場合は、拡張機能を編集する必要があります。  
また、この拡張機能は色々な解像度で動作するように作られていますが、より最適化したい場合も同様です。

ビヘイビア関数の onCreated 内に書かれているスタイルシートを編集してください。

![](https://github.com/PANDAKO-GitHub/InputCJK_Extension/blob/main/images/img05.png)

### HTML
入力欄の HTML 構造はこんな感じ。
```
<div id="InputCJK_Extension_div" style="display: none;">
  <input type="text">
  <button type="button">OK</button>
</div>
```

## 既知の問題点
- この拡張機能をAndroidアプリ(.apk)で使用すると、ステータスバーとナビゲーションバーが表示されたままになり、ゲーム画面の一部を隠してしまいます。
