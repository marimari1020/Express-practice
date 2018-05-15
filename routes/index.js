var express = require('express');
var router = express.Router();
var app = require('../db.js');
var ejs = require("ejs");
var array = { title: null , users: null, content: null};


/* GET home page. */


router.get('/', function (req, res) {

  app.connection.query('select * from employees', function (err, rows) {
    array.users = rows;
    array.title = 'Express Users';
    array.content = 'データを検索したい方の名前を入力してください。';
   res.render('index', array);

  tablerows= rows;

	  });
	});


//form




// ※POST送信の処理
router.post('/',(req, res) => {

  app.connection.query(
	'select * from employees where name = ?', [req.body.message], 
	function (err, rows) { 
		array.users = rows; 
		array.content = '「<b>' + req.body.message +  '</b>」さんについての情報を表示します。';  
		res.render('index', array)
	}
   );

});



//var server = express.listen(3020,() => {
//    console.log('Server is running!');
//})

//end of form




module.exports = router;