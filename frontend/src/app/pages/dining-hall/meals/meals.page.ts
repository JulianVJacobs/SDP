import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  public menu = [];
  public review = false; 
  public data = {
      uid: '',
      Rating: 3,
      Date: '',
      'Posted By': '',
      'Time': new Number,
      Comment: ''
  }
  public dh = '';
  public average: Number;

  constructor(
    private router: Router,
    private firestore: AngularFirestore, 
    private auth: AngularFireAuth,
    public toastService: ToastService,
    public storageService: StorageService
    ) { }

  // it seems that ngOnInit isn't called everytime there's a reroute
  ngOnInit() {
  }

  orderAction(){
    this.toastService.presentToast('Order Placed');
  }

  submit(){
    this.toastService.presentToast('Review submitted.');
  }

}
