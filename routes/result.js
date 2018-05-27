var express = require('express');
var app = require('../db.js');


var router = express.Router();



router.get('/', function(req, res, next) {
    res.send(req.body.message);
    res.send(req.body.optradio);
         res.render('result', array);
 });







    


module.exports = router;

