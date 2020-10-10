import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
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
    ) { }

  ngOnInit() {
  }
// sign up
  mainAction(){
  }

  loginAction(){
  }
}
