import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular'

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router, public toastController: ToastController) {}

  async addDH(num: string){

    //TODO: update respective DH databases

    if(num == "1"){//convo
      //this.router.navigate(['dh-staff-main']);

      const toast = await this.toastController.create({
        message: 'You have booked your meal at the Convocation dining hall.',
        duration: 2000
      });
      toast.present();
    }
    if(num == "2"){//eoh

      const toast = await this.toastController.create({
        message: 'You have booked your meal at the EOH dining hall.',
        duration: 2000
      });
      toast.present();
    }
    if(num == "3"){//highfeild

      const toast = await this.toastController.create({
        message: 'You have booked your meal at the Highfeild dining hall.',
        duration: 2000
      });
      toast.present();
    }
    if(num == "4"){//jubs

      const toast = await this.toastController.create({
        message: 'You have booked your meal at the Jubilee dining hall.',
        duration: 2000
      });
      toast.present();
    }
    if(num == "5"){//knocks

      const toast = await this.toastController.create({
        message: 'You have booked your meal at the Knockando dining hall.',
        duration: 2000
      });
      toast.present();
    }
    if(num == "6"){//main
      

      const toast = await this.toastController.create({
        message: 'You have booked your meal at the Main dining hall.',
        duration: 2000
      });
      toast.present();
    }
    
  }

  ngOnInit() {
  }

}
