WordFes 2014 - WordPress の最新動向

# 自己紹介

* GrowGroup合同会社
* 熊本県天草市出身

# アジェンダ

1. WordPress の開発動向
2. 3.9、4.0 での変化点のおさらい
3. 4.1 で追加・変更予定
4. 今後の開発動向

# WordPress の開発動向

* どのように開発が進んでいるのか。
	* Make WordPress Core
		* http://make.wordpress.org/core/
  * Varying-Vagrant-Vagrants の紹介 : https://github.com/Varying-Vagrant-Vagrants/VVV

* 小さなことでも参加できます
	* Vote などの紹介

# What happened 3.9 & 4.0

## 3.9 で変化した点
!["http://i.gyazo.com/5bcd32b30e93b920f7078b5987409271.gif](http://i.gyazo.com/5bcd32b30e93b920f7078b5987409271.gif)
* ビジュアルエディターの改善
	* TinyMCE のアップデート
  * 写真をドラッグ&ドロップ
	* oEmbed の拡張
		* 動画のURLを貼り付けるとエディタ内で表示される
  * 画像を簡単に編集
* ギャラリーのHTML5対応
* 美しい新テーマブラウザ
  * Masonry の追加
* テーマカスタマイザー
  * ウィジェットとヘッダーのライブプレビュー
	* 画像の編集をテーマカスタマイザーでできるように
* WP_Query の追加
	* $query->set( 'post_password', TRUE ).
	* query_var にデフォルトを設定可能に
* 開発者向けの更新内容
  * .editorconfig の追加 : https://core.trac.wordpress.org/browser/trunk/.editorconfig?rev=27198
  * mysqli に変更
  * プラグインをシンボリックリンクから参照可能に
  	* http://torquemag.io/important-updates-for-plugin-developers-in-wordpress-3-9/
* 追加されたアクションフック

## 4.0 で変化した点

* language packs : 翻訳インストーラー
* Media Grid : メディアグリッド
	* メディアライブラリーのUIも改善
* Customizer Panels : カスタマイザーパネル
	* http://make.wordpress.org/core/2014/07/08/customizer-improvements-in-4-0/
* Plugin Install Experience : プラグインページの変更
	* お気に入り機能からプラグインをインストール可能に
* アクションフックの追加

# 今後の開発動向

* マット・マレンウェッグ氏
	* http://gigazine.net/news/20140607-wordpress-matt-mullenweg-speech/
	* http://internet.watch.impress.co.jp/docs/interview/20140616_653521.html
		* PHPからJavaScriptへのシフトを進める
		* 1つ目はより高速で応答性が高く、パワフルなツールなるようWordPressを見た目も根幹も再構築すること。2つ目はモバイル対応です。ほとんどのユーザーがこの先5年間で期待するのは、もっぱらモバイル向けのWebサイトを利用できること、モバイル向けのWebサイトを作ることだと考えています。そのためにモバイルバージョンのWordPressを準備していきます。3つ目はJetpackです。Jetpackは、WordPressを自身でホスティングして利用する際に便利な機能を詰め込んでいて、分析・検索機能や、ページ内に関連する投稿を表示する機能、通常は難しいビデオコンテンツの投稿機能など、さまざまな機能を実現するツールです。モバイル版のJetpackも準備しています。

* Web Component などの 次世代Web技術との組み合わせ
	* http://thejackalofjavascript.com/a-hybrid-app-for-your-blog/

* JSON REST API, Frontend Editor の紹介
  * JSON REST API のデモ

* WP Metadata API
* Editor Experience

* GSoC Menu Customizerなど、テーマカスタマイザーが活発化

# まとめ

1. WordPress の開発情報は公開されています。
2. 今までのアップデートで、目に見えない部分も多く改善・追加されています。
3. WordPress は進化を続けています。
4. ご静聴ありがとうございました。
