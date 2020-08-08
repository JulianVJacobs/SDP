var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());




var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qwerty",
	database: "SDP",
});

/*con.connect(function(err) {
	if (err) throw err;
	console.log("connected!");
	var sql = "SELECT Stu_No, Password,First_Name FROM Student WHERE Stu_No = ?"; //this queries the db to get the students number
	var values = 138931;									 //and password which you compare (in the
  	con.query(sql,values,function (err, result) {						 //front end) to the given one. 
    	if (err) throw err;	
    	console.log(result);
  	});
	con.end(function (){
	});

});*/


/*con.connect(function(err) {
	if (err) throw err;
	console.log("connected!");
	var sql = "SELECT Staff_No, Password,First_Name FROM Owners WHERE Staff_No = ?"; //this queries the db to get the Owners number
	var values = 138931;									 //and password which you compare (in the
  	con.query(sql,values,function (err, result) {						 //front end) to the given one. 
    	if (err) throw err;	
    	console.log(result);
  	});
	con.end(function (){
	});

});



	con.connect(function(err) {
	if (err) throw err;
	console.log("connected!");
	var sql =  "INSERT INTO Student(Stu_No, Password, First_Name, Last_Name) values(?,?,?,?)";
	var values = [568410, "kabzfromrome", "Karabo", "Dlamini"];									 //This one is for to regiser the students
  	con.query(sql,values,function (err, result) {						 						//takes in student_no, password, firstname and lastname
    	if (err) throw err;	
    	console.log(result);
  	});
	con.end(function (){
});
});*/

con.connect(function(err) {
	if (err) throw err;
	console.log("connected!");
	var sql =  "UPDATE Owners SET order_size = order_size + 1 WHERE Staff_No = ?";
	var values = 138931;									 //This should happen when a dining hall is clickd and the values should be
  	con.query(sql,values,function (err, result) {			//staff number of the owner of the dining hall					
    	if (err) throw err;	
    	console.log(result);
  	});
	con.end(function (){
});
});








