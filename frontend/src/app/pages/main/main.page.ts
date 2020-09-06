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
  // postData = {
  //   personNumber: null,
  //   order: null,
  //   diningHall: null
  // }

  constructor(private router: Router
    ) {}

  goto(num: string){
    if(num == "1"){//convo
      this.router.navigate(['convo-meals']);
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
