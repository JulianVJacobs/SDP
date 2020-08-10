var mysql = require('mysql'), express = require('express'), bodyParser = require('body-parser'), 
logger = require('morgan'), methodOverride = require('method-override'), cors = require('cors'), 
app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cors());

let backendPort = 8084;

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qwerty",
	database: "sdp"
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );
    next();
});

// i think creating a universal table for users will make 2 queries unnecessary here
// same as above
app.post('/login', function(req, res){ 
    let personNumber =  JSON.parse(req.body).personNumber;
	let password =  JSON.parse(req.body).password;
		
	var sql = "SELECT person_number,password,position FROM users WHERE person_number = ?";
	
	con.query(sql,[personNumber],function (err, result) {	
		if (err) return err;
		if (result[0].password == password){
			return res.status(200).json({'person_number':result[0].personNumber,
										'position':result[0].position});
		}
		else {
			return res.status(401);
		}
	});
});

app.post('/signup', function(req, res){ 
    let personNumber =  JSON.parse(req.body).personNumber;
    let password =  JSON.parse(req.body).password;
    let fName =  JSON.parse(req.body).fName;
    let lName =  JSON.parse(req.body).lName;
	// let password =  JSON.parse(req.body).password;
		
	var sql = "INSERT INTO Student(Stu_No, Password, First_Name, Last_Name) values(?,?,?,?)";
	
	con.query(sql,[personNumber,password,fName,lName],function (err, result) {				
		if (err) return err;	
		return res.status(200).json(result);
	});
});

// i don't understand why the order increment is happening besides the order being placed
// increments order count
app.post('/order:inc', function(req, res){ 
    let personNumber =  JSON.parse(req.body).personNumber;
	// let password =  JSON.parse(req.body).password;
		
	var sql = "UPDATE Owners SET order_size = order_size + 1 WHERE Staff_No = ?";
	
	con.query(sql,personNumber,function (err, result) {				
		if (err) return err;	
		return res.status(200).json(result);
	});
});

// places order
app.post('/order:place', function(req, res){ 
    let personNumber =  JSON.parse(req.body).personNumber;
	let order =  JSON.parse(req.body).order;
		
	var sql = "INSERT INTO ErnestOppenheimer(Ordered_by, Date, Food_order) values(?,CURDATE(),?)";
	
	con.query(sql,[personNumber,order],function (err, result) {				
		if (err) return err;	
		return res.status(200).json(result);
	});
});

app.post('/dh-staff-main:count', function(req, res){
		
	var sql = "SELECT COUNT(*) FROM ErnestOppenheimer WHERE Date = CURDATE()";
	
	con.query(sql,function (err, result) {				
		if (err) return err;	
		return res.status(200).json(result);
	});
});	

// 	con.query(sql,personNumber,function (err, result) {				
// 		if (err) return err;		
// 		if (result.length > 0){
// 			if (result[0].PASSWORD == password){
// 				con.query(sql[1],[values],function (err, result) {	
// 					if (err) return err;
// 					data['user'] = result[0]; // gets the staff member
// 					next();
// 				});
// 			}
// 			else {
// 				return res.status(401).send('Password entered does not match password on record.');
// 			}
// 		}
// 		else {
// 			return res.status(401).send('No such user in database.');
// 		}
// 	});	
// },function(req,res){
// 	var sql = "SELECT FLAG, STU_NUMBER, STUDENT_FNAME, STUDENT_LNAME FROM (SELECT * FROM STUDENT LIMIT 10) AS STU_LIST"
// 	con.query(sql,function (err, result) {	
// 		if (err) return err;
// 		data['students'] = result;    // gets the first 10 students in the Student table
// 		return res.status(200).json(data);
// 	});			

// app.post('/home/course-management:task', function(req, res){
// 	let task = req.params.task
// 	switch (task) {
// 		case ':get': // select the mark data of the specified student
// 			var values = [JSON.parse(req.body)]
// 			var sql = "SELECT TUT_TEST1, TUT_TEST2, TEST_1, TEST_2, ASSIGNMENT, EXAM FROM MARKS WHERE STU_NUMBER = ?";
// 			con.query(sql,values,function (err, result) {
// 				if (err) return err;
// 				return res.status(200).json(result);
// 			});
// 		break;

// 		case ':update': // change the mark data for the specified student
// 			var values = Object.values(JSON.parse(req.body).data);
// 			values.push(JSON.parse(req.body).student[0].STU_NUMBER);
// 			var sql = "UPDATE MARKS SET TUT_TEST1 = ?, TUT_TEST2 = ?, TEST_1 = ?, TEST_2 = ?, ASSIGNMENT = ?, EXAM = ? WHERE STU_NUMBER = ?";
// 			con.query(sql,values,function (err, result) {
// 				if (err) return err;
// 				return res.status(200).json(result);
// 			});
// 		break;
// 	}
// });
    
app.listen(backendPort, function() {
    console.log('Express server listening on port ' + backendPort);
});