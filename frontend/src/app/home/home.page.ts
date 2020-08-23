import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  toastService: any;

  constructor(
    private router: Router, 
    private storageService: StorageService
    ) { }

  ngOnInit() {
    this.storageService.get(AuthConstants.uid).then( res => {
      switch(res.Role){
        case 0:
          this.router.navigate(['home/main'])
        break;

        case 1:
          this.router.navigate(['home/dh-staff-main'])
        break;

      }
    });

  }

}
