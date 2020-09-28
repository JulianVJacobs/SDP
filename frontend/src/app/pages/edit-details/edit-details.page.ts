import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.page.html',
  styleUrls: ['./edit-details.page.scss'],
})
export class EditDetailsPage implements OnInit {
  public data = {
    auth: {
      uid: '',
      Password: ''
    },
    user: {
      'Student Number' : '',
      Name: '',
      Surname: '',
      Role: 0,
      Campus: '',
      Res: '',
      'Res Number': '',
      'Phone number': '',
      'Amount Left': 0
    }
  };

  constructor(
      private auth: AngularFireAuth,
      private firestore: AngularFirestore,
      private router: Router
    ) { }

  ngOnInit() {
  }

  doneAction(){
    this.auth.currentUser
      .then((res) => {
        this.data.auth.uid = res.uid;
        if (this.data.user.Res != ''){
          this.firestore.firestore.collection('users').doc(res.uid)
            .update({
              Res: this.data.user.Res
            })
            .catch((err) => {
              console.dir(err);
            })
        }
        if (this.data.user['Res Number'] != ''){
          this.firestore.firestore.collection('users').doc(res.uid)
            .update({
              'Res Number': this.data.user['Res Number']
            })
            .catch((err) => {
              console.dir(err);
            })
        }
        if (this.data.user['Phone number'] != ''){
          this.firestore.firestore.collection('users').doc(res.uid)
            .update({
              'Phone number': this.data.user['Phone number']
            })
            .catch((err) => {
              console.dir(err);
            })
        }  
        if (this.data.user.Campus != ''){
          this.firestore.firestore.collection('users').doc(res.uid)
            .update({
              Campus: this.data.user.Campus
            })
            .catch((err) => {
              console.dir(err);
            })
        }    
      })
      .then(() => {
        this.router.navigate(['main-tabs'])
      })
      .catch((err) => {
        console.dir(err);
      })
  }

}
