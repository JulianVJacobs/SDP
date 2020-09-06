import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthConstants } from 'src/app/config/auth-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public data = {
    auth: {
      PersonNumber : '',
      Password: ''
    },
    user: {
      Name: '',
      Surname: '',
      Role: 0,
      'Phone number': '',
      'Amount Left': ''
    }
  };

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router, 
    private storageService: StorageService,
    private toastService: ToastService
    ) { }

  ngOnInit() {
  }
// sign up
  mainAction(){
      this.auth.createUserWithEmailAndPassword(this.data.auth.PersonNumber + '@students.wits.ac.za',this.data.auth.Password)
        .then((res) => {
          this.firestore.collection('users').doc(res.user.uid).set(this.data.user)
            .then(()=>{
              AuthConstants.personNumber = this.data.auth.PersonNumber;
              this.storageService.store(AuthConstants.personNumber, this.data.user);
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

  loginAction(){
    this.router.navigate(['login']);
  }
}
