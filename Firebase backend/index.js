const admin = require('firebase-admin');
const serviceAccount = require('./greenpeace-33d5f-firebase-adminsdk-zodtx-8a611510ea.json');
const firebase = require("firebase");
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	apiKey: "AIzaSyCB6z6CafNLZqBMs_SH2ZSNfcJPYHXKBuM",
	authDomain: "greenpeace-33d5f.firebaseapp.com",
	projectId: "greenpeace-33d5f",
	databaseURL: "https://greenpeace-33d5f.firebaseio.com/"
});
const db = admin.firestore();
defaultDatabase = admin.database();
const defaultAuth = admin.auth();
db.settings({timestampsInSnapshots: true});



//the below is for creating users
/*const data = {
  Name: 'Holly',	//should contain first name from sign up page
  Surname: 'Wood',		//should contain first name from sign up page
  Role: 0,				//default 0 for student
  'Phone Number': '0724656999',	//should hold phone number from sign up page
  'Amount Left': 500	//default 500
};

admin.auth().createUser({
  email: '123456@students.wits.ac.za',	//student email should be here
  password: '123456789'	//password should be here
}).then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
    db.collection('users').doc(userRecord.uid).set(data);
console.log("It works");
  })
  .catch(function(error) {
    console.log('Error creating new user:', error);
  });*/















let email = '123456@students.wits.ac.za';	//student email should be here
let password= '123456789';	//password should be here
// the below block of code is for signing up
/*firebase.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	apiKey: "AIzaSyCB6z6CafNLZqBMs_SH2ZSNfcJPYHXKBuM",
	authDomain: "greenpeace-33d5f.firebaseapp.com",
	projectId: "greenpeace-33d5f",
	databaseURL: "https://greenpeace-33d5f.firebaseio.com/"
});

firebase.auth().signInWithEmailAndPassword(email, password).then((user)=>{           
	var user = firebase.auth().currentUser;
	console.log(user.uid);
	db.collection('users').doc(user.uid).get().then((usrinfo)=>{	//for retrieving the info of a user

		console.log(usrinfo.get("Name"));		//retrieves first name
		console.log(usrinfo.get("Amount Left"));	//retreives how much they have left
	}).catch(function(error){
		console.log(errorMessage);
	})
	
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
});*/


















/*
var today = new Date;	//placing orders in dining hall
var n = today.getTime();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); //gets current date and puts it in right format

var dininghall = 'Convocation';		
var meal = 'Smoothie';
var stu_no = 123456;

const data = {
	'Ordered By': stu_no,	//student number of the person placin the order
	Time: n,			//gotten from above
	Date: date      //gotten from above
};

async function order(data, dininghall, meal){	//pass dininghall name and meal as values, check firestore for naming convention
return await db.collection('Dining Halls').doc(dininghall).collection('Meals').doc(meal).collection('Order').doc().set(data).then((data)=>{
	console.log("Your order has been placed");}).catch(function(error){
		console.log('error.message') ;
})
}
const order_food = order(data,dininghall, meal);*/














/*var dininghall = 'Convocation';	//retrieving orders from dining hall
var meal = 'Smoothie';
var today = new Date;
var n = today.getTime();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 function order_check(dininghall, meal){
db.collection('Dining Halls').doc(dininghall).collection('Meals').doc(meal).collection('Order').where('Date','==',date).get().then(snap => {
   var size = snap.size;
   console.log(size);
   snap.docs.forEach(doc => {
		console.log(doc.data());
	})
   return am;
}).catch(function(error){
	console.log(error.message);
});
}
const check_order = order_check(dininghall,meal);*/











//placing comments in dining hall on specific meal
/*var today = new Date;	
var n = today.getTime();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); //gets current date and puts it in right format

var dininghall = 'Convocation';		
var meal = 'Smoothie';
var stu_no = 123456;

const data = {
	Comment: 'The Smoothie is better today',
	'Posted By': stu_no,	//student number of the person placin the comment
	Time: n,			//gotten from above
	Date: date      //gotten from above
};

async function comment(data, dininghall, meal){	//pass dininghall name and meal as values, check firestore for naming convention
return await db.collection('Dining Halls').doc(dininghall).collection('Meals').doc(meal).collection('Comments').doc().set(data).then((data)=>{
	console.log("Comment Saved");}).catch(function(error){
		console.log('error.message') ;
})
}
const meal_comment = comment(data,dininghall, meal);*/









//To retrieve the comments
/*var dininghall = 'Convocation';	
var meal = 'Smoothie';
var today = new Date;
var n = today.getTime();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 function comment_check(dininghall, meal){
db.collection('Dining Halls').doc(dininghall).collection('Meals').doc(meal).collection('Comments').where('Date','==',date).get().then(snap => {
   
   snap.docs.forEach(doc => {
   	console.log(doc.data());
		console.log(doc.data().Comment);
	})
}).catch(function(error){
	console.log(error.message);
});
}
const check_comments = comment_check(dininghall,meal);*/