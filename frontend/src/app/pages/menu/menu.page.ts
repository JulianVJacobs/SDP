import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  postData = {
    personNumber: null,
    order: null,
    diningHall: null,
    meal : null
  }

  review: any;

  constructor(private router: Router, 
    private toastService: ToastService,
    private authService: AuthService,
    private storageService: StorageService
    ) {}

  async addMeal(meal: string){
    //TODO: update respective meal database
    this.storageService.get(AuthConstants.AUTH).then( res => {
    this.postData.personNumber = res.personNumber;
    this.postData.meal = meal;
    //this.postData.order = 1;
    this.authService.place_order(this.postData).subscribe(
      (res: any) => {
        this.toastService.presentToast('You have ordered ' + meal + '.');
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

  ionViewWillEnter() {
    setTimeout(() => {
      this.review = {
        'person': 'Thandeka Mtshali',
        'review' : 'Needs a whole lot of sugar'
      };
    },5000);
  }

  ngOnInit() {
  }

}
