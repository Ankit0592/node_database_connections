'use strict';
	// mysql connection
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  user     : '*****',
	  password : '*****',
	  database : 'test'
	});
	connection.connect( function(err){
		if (err){ 
		    console.log('Error',err);
		}
	});
	connection.query(
		'SELECT "foo" AS first_field, "bar" AS second_field',
		function (err, results, fields) {
		console.log(results);
		connection.end();
	}
);