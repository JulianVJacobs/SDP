import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router, 
    private toastService: ToastService
    ) {}

  async addDH(dh: string){
    //TODO: update respective DH databases    
    this.toastService.presentToast('You have booked your meal at ' + dh + '.');
  }

  ngOnInit() {
  }

}
