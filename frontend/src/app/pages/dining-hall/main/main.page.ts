import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    ) {}

  message(num: string){
    //do something with num to get which dining hall it is
    this.router.navigate(['message']);
  }

  goto(num: string){
    console.log(num)
    if(num == "1"){//convo
      this.router.navigateByUrl('/home/meals', { state : {
        'Dining Hall' : 'Convocation'
      }});
    }
    if(num == "2"){//eoh
      this.router.navigateByUrl('/home/meals', { state : {
        'Dining Hall' : 'Ernest Oppenheimer'
      }});
    }

    if(num == "3"){//highfeild
      this.router.navigateByUrl('/home/meals', { state : {
        'Dining Hall' : 'Highfield'
      }});
    }

    if(num == "4"){//jubs
      this.router.navigateByUrl('/home/meals', { state : {
        'Dining Hall' : 'Jubilee'
      }});
    }

    if(num == "5"){//knocks
      this.router.navigateByUrl('/home/meals', { state : {
        'Dining Hall' : 'Knockando'
      }});
    }

    if(num == "6"){//main
      this.router.navigateByUrl('/home/meals', { state : {
        'Dining Hall' : 'Main'
      }});
    }
  }

  ngOnInit() {
  }

}
