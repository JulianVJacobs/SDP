
var admin = require("firebase-admin");

var serviceAccount = require();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://greenpeace-33d5f.firebaseio.com"
});
const db = admin.firestore();
const docRef = db.collection('Owners').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});