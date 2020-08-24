import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-eoh-meals',
  templateUrl: './eoh-meals.page.html',
  styleUrls: ['./eoh-meals.page.scss'],
})
export class EohMealsPage implements OnInit {

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
