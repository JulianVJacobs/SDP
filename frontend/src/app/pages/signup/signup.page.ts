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
      'Phone number': '',
      'Amount Left': 0
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
      this.auth.createUserWithEmailAndPassword(this.data.user['Student Number'] + '@students.wits.ac.za',this.data.auth.Password)
        .then((res) => {
          this.data.auth.uid = res.user.uid;
          this.firestore.collection('users').doc(res.user.uid).set(this.data.user)
            .then(()=>{
              console.log(this.data.auth.uid);
              this.storageService.store(this.data.auth.uid, this.data.user);
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
