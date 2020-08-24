import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dh-staff-main',
  templateUrl: './dh-staff-main.page.html',
  styleUrls: ['./dh-staff-main.page.scss'],
})
export class DhStaffMainPage implements OnInit {
  postData = {
    personNumber: null
  }
    
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private storageService: StorageService
    ) { }

  ngOnInit() {
    this.storageService.get(AuthConstants.uid).then( res => {
      console.log(res);
      // this.postData.personNumber = res.personNumber;
      // this.authService.count(this.postData).subscribe(
      //   (res: any) => {
      //     console.log(res)
      //   },
      //   (error: any) => {
      //     if (error.status != 401){
      //       this.toastService.presentToast("Network error.");
      //     }
      //     else {
      //       this.toastService.presentToast(error.error);
      //     }
      // });
    });
    
  }

}
