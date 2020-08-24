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
      //the below is temporary
      this.router.navigate(['dh-staff-main']);
      //this.router.navigate(['convo-meals']);
    }
    if(num == "2"){//eoh
      this.router.navigate(['eoh-meals']);
    }

    if(num == "3"){//highfeild
      this.router.navigate(['highfeild-meals']);
    }

    if(num == "4"){//jubs
      this.router.navigate(['jubs-meals']);
    }

    if(num == "5"){//knocks
      this.router.navigate(['knocks-meals']);
    }

    if(num == "6"){//main
      this.router.navigate(['main-meals']);
    }
    
  }
  
  ngOnInit() {
  }

}
