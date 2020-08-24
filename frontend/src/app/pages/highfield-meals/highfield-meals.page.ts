import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highfield-meals',
  templateUrl: './highfield-meals.page.html',
  styleUrls: ['./highfield-meals.page.scss'],
})
export class HighfieldMealsPage implements OnInit {

  constructor(private router: Router, public toastController: ToastController) {}

  ngOnInit() {
  }

  async orderAction(num: string){
    //backend

    if(num == "1"){//
      
    }

    if(num == "2"){//
      
    }

    if(num == "3"){//
      
    }

    const toast = await this.toastController.create({
      message: 'Order Placed',
      duration: 2000
    });
    toast.present();
  }

  reviewAction(){
    this.router.navigate(['make-review']);
  }

}
