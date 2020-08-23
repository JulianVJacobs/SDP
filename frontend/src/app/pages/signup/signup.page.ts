import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
// import { ToastService } from 'src/app/services/toast.service';
// import { StorageService } from 'src/app/services/storage.service';
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
      PersonNumber : '123456',
      Password: '123456'
    },
    user: {
      Name: 'Graina',
      Surname: 'Salt',
      Role: 0,
      'Phone number': '060441112',
      'Amount Left': '500'
    }
  };

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    // private router: Router, 
    // private authService: AuthService, 
    // private storageService: StorageService,
    // private toastService: ToastService
    ) { }

  ngOnInit() {
  }
// sign up
  mainAction(){
      this.auth.createUserWithEmailAndPassword(this.data.auth.PersonNumber + '@students.wits.ac.za',this.data.auth.Password)
        .then((res) => {
          this.firestore.collection('users').doc(res.user.uid).set(this.data.user)
            .catch((error) => {
              console.dir(error);
            });
        })
        .catch((error) => {
          console.dir(error);
      });
  }

  // validateInputs() {
  //   let personNumber = this.postData.personNumber.trim();
  //   let password = this.postData.password.trim();

  //   return ( 
  //     this.postData.personNumber && 
  //     this.postData.password && 
  //     personNumber.length > 0 && 
  //     password.length > 0)
  // }

  // mainAction() {
  //   if (this.validateInputs()) {
  //     this.authService.login(this.postData).subscribe(
  //       (res: any) => {
  //         this.storageService.store(AuthConstants.AUTH, res);
  //         this.router.navigate(['main']);
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
