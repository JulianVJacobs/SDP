import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/config/auth-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    personNumber: '',
    password: ''
  }

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private storageService: StorageService,
    private toastService: ToastService
    ) { }

  ngOnInit() {
  }

  validateInputs() {
    let personNumber = this.postData.personNumber.trim();
    let password = this.postData.password.trim();

    return ( 
      this.postData.personNumber && 
      this.postData.password && 
      personNumber.length > 0 && 
      password.length > 0)
  }

  mainAction() {
    if (this.validateInputs()) {
      this.authService.login_student(this.postData).subscribe(
        (res: any) => {
          this.storageService.store(AuthConstants.AUTH, res);
          this.router.navigate(['home']);
        },
        (error: any) => {
          if (error.status != 401){
            this.toastService.presentToast("Network error.");
          }
          else {
            this.toastService.presentToast(error.error);
          }
      });
    }
    else {
      if (this.postData.personNumber.trim().length == 0 && this.postData.password.trim().length == 0) {
        this.toastService.presentToast("Please enter your person number and password.");
      }
      else {
        if (this.postData.password.trim().length == 0) {
          this.toastService.presentToast("Please enter a password.");
        }
        if (this.postData.personNumber.trim().length == 0) {
          this.toastService.presentToast("Please enter your person number.");
        }
      }
    }
  }
}
