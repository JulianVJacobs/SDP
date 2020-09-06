import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthConstants } from 'src/app/config/auth-constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public data = {
    personNumber: '',
    password: ''
  }

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private storageService: StorageService,
    private router: Router,
    private toastService: ToastService
    ) { }

  ngOnInit() {
  }

  mainAction(){
    this.auth.signInWithEmailAndPassword(this.data.personNumber + '@students.wits.ac.za',this.data.password)
      .then((res) => {
        this.firestore.firestore.collection('users').doc(res.user.uid).get()
          .then((user) => {
            AuthConstants.personNumber = this.data.personNumber;
            this.storageService.store(AuthConstants.personNumber, user.data());
            this.router.navigate(['home']);
          })
          .catch((error) => {
          this.toastService.presentToast(error.message);
          console.dir(error);
          });  
      })
      .catch((error) => {
          this.toastService.presentToast(error.message);
          console.dir(error);
      });
  }

  signupAction(){
    this.router.navigate(['signup']);
  }
}
