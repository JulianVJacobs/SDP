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
    
  }

}
