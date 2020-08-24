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

  goto(dh: string){
    this.router.navigate(['home/main/'+dh]);
  }

  ngOnInit() {
  }

}
