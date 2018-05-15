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
    array.content = 'This is Index Page!<br>' + '※メッセージを書いて送信して下さい。';
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
		array.content = 'This is Posted Page!<br>' +  'あなたは「<b>' + req.body.message +  '</b>」と送信しました。';  
		res.render('index', array)
	}
   );

});



//var server = express.listen(3020,() => {
//    console.log('Server is running!');
//})

//end of form




module.exports = router;