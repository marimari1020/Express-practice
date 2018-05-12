var express = require('express');
var router = express.Router();
var app = require('../db.js');




/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
router.get('/', function (req, res) {
	  app.connection.query('select * from employees', function (err, rows) {

	    res.render('index', { title: 'Express Users', users: rows, content: '人間'});


	  });
	});

module.exports = router;