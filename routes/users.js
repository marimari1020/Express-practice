var express = require('express');

     /* expressを取得し変数expressへ代入 */

var router = express.Router();


     /* express.Router=モジュール式のルートハンドラーを作成する */
     /* ルーティング用「ミニアプリケーション」 */
     /* ミニアプリRouterを変数routerに代入している？？？*/



router.get('/', function(req, res, next) {
     /* express.Routerによりルート（app.jsへ？）アクセスしたらfunction実行*/

	res.send('respond with a resource');
     /* 要求オブジェクト (req)、応答オブジェクト (res)、次のミドルウェア関数next */
     /* req、res、nextいずれかから反応（res)があればsendメッセージを送る。*/
     /*respond with a resourceは文字列に決まりのない文字列？のようですが、*/
     /*他のソースから引用されているようでもなく用途が不明です*/

});


module.exports = router;


     /*module.exports＝オブジェクト（内部構造をもつデータ）にrouter(express.Router)を代入している。*/
