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
			return res.status(200).json({'personNumber':result[0].person_number,
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

// places order
app.post('/main:place_order', function(req,res){ 
	let diningHall = JSON.parse(req.body).diningHall;
    let personNumber =  JSON.parse(req.body).personNumber;
	let order =  JSON.parse(req.body).order;
		
	var sql = "INSERT INTO " + diningHall + " (Ordered_by, Date, Food_order) values(?,CURDATE(),?)";
	
	con.query(sql,[personNumber,order],function (err, result) {				
		if (err) return err;	
		return res.status(200).json(result);
	});
});

app.post('/dh-staff-main', function(req, res){
	let personNumber = JSON.parse(req.body).personNumber;
		
	var sql = "SELECT dh_name FROM owners WHERE staff_no = ?"
	
	con.query(sql,[personNumber],function (err, result) {				
		if (err) return err;	
		con.query('SELECT COUNT(*) FROM ' + result[0].dh_name + ' WHERE date = CURDATE()',function(err,result){
			if (err) return err;
			console.log(result)
			return res.status(200).json(result);
		})
	});
});

app.listen(backendPort, function() {
    console.log('Express server listening on port ' + backendPort);
});