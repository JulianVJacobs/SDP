import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthConstants } from 'src/app/config/auth-constants';

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
    private router: Router
    // private toastService: ToastService
    ) { }

  ngOnInit() {
  }

  mainAction(){
    this.auth.signInWithEmailAndPassword(this.data.personNumber + '@students.wits.ac.za',this.data.password)
      .then((res) => {
        this.firestore.firestore.collection('users').doc(res.user.uid).get()
          .then((user) => {
            AuthConstants.uid = res.user.uid;
            this.storageService.store(AuthConstants.uid, user.data());
            this.router.navigate(['home']);
          })
          .catch((error) => {
            console.dir(error);
          });  
      })
      .catch((error) => {
        console.dir(error);
      });
  }

  // mainAction() {
  //   if (this.validateInputs()) {
  //     this.authService.login(this.postData).subscribe(
  //       (res: any) => {
  //         this.storageService.store(AuthConstants.AUTH, res);
  //       },
  //       (error: any) => {
  //         if (error.status != 401){
  //           this.toastService.presentToast("Network error.");
  //         }
  //         else {
  //           this.toastService.presentToast(error.error);
  //         }
  //     });
  //   }
  //   else {
  //     if (this.postData.personNumber.trim().length == 0 && this.postData.password.trim().length == 0) {
  //       this.toastService.presentToast("Please enter your person number and password.");
  //     }
  //     else {
  //       if (this.postData.password.trim().length == 0) {
  //         this.toastService.presentToast("Please enter a password.");
  //       }
  //       if (this.postData.personNumber.trim().length == 0) {
  //         this.toastService.presentToast("Please enter your person number.");
  //       }
  //     }
  //   }
  // }
}
