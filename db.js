/**
 * http://usejsdoc.org/
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
	  host: 'localhost',
	 port : 3306,
	  user: 'root',
	  password: 'mari5038',
	 database: 'expressdb',
insecureAuth:true


	});



exports.connection = connection;

console.log(connection);




connection.connect((err) => {
	  if(err){
	    console.log('Error connecting to Db');
        console.error(err);
//	    return;
	  }
else{
	  console.log('Connection established');
}
	});



//connection.query('SELECT * FROM employees', (err,rows) => {
//	  if(err) throw err;
//
//	  console.log('Data received from Db:\n');
//	  console.log(rows);
//	});