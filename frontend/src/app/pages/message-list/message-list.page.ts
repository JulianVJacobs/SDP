import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { snapshotChanges } from '@angular/fire/database';
import { AngularFirestore, DocumentData, DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.page.html',
  styleUrls: ['./message-list.page.scss'],
})
export class MessageListPage implements OnInit {
  public conversations = []; public users = {}; public messages: any;

  constructor(
    private firestore: AngularFirestore, 
    private auth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.auth.currentUser
      .then((res) => {
        this.firestore.firestore.collection('users/'+res.uid+'/Chats').get()
          .then((snap) => {
            snap.forEach((doc) => {
              doc.ref.onSnapshot((snap) => {
                var user = {
                  name: '',
                  'Most Recent Message': ''
                };
                user["Most Recent Message"] = snap.data().Messages[snap.data().Messages.length - 1]
                this.firestore.firestore.doc('users/'+doc.id).get()
                  .then((res) => {
                    user.name = res.data().Name + ' ' + res.data().Surname;
                    if(user["Most Recent Message"] != undefined){
                      this.users[doc.id] = user
                      this.conversations = Object.values(this.users);
                    }
                  })
                  .catch((err) => {
                    console.dir(err);
                  })
              })
            })
          })
          .catch((err) => {
            console.dir(err);
          })
      })
      .catch((err) => {
        console.dir(err);
      })
  }

}
