
var admin = require("firebase-admin");

var serviceAccount = require("./backend/gn.json/");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://greenpeace-33d5f.firebaseio.com"
});
/*const db = admin.firestore();
const docRef = db.collection('Owners').doc('alovelace');
const start = async function(a, b) {
await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});
}
console.log("vg");
start();*/