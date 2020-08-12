import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  postData = {
    personNumber: null,
    order: null,
    diningHall: null
  }

  constructor(private router: Router, 
    private toastService: ToastService,
    private authService: AuthService,
    private storageService: StorageService
    ) {}

  async addDH(dh: string){
    //TODO: update respective DH databases
    this.storageService.get(AuthConstants.AUTH).then( res => {
    this.postData.personNumber = res.personNumber;
    this.postData.diningHall = dh;
    this.postData.order = 1;
    this.authService.place_order(this.postData).subscribe(
      (res: any) => {
        this.toastService.presentToast('You have booked your meal at ' + dh + '.');
      },
      (error: any) => {
        if (error.status != 401){
          this.toastService.presentToast("Network error.");
        }
        else {
          this.toastService.presentToast(error.error);
        }
      });
    })
    
  }

  ngOnInit() {
  }

}
