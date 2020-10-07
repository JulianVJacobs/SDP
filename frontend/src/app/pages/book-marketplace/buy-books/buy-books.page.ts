import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-books',
  templateUrl: './buy-books.page.html',
  styleUrls: ['./buy-books.page.scss'],
})
export class BuyBooksPage implements OnInit {
 public items = []; public uid: string;
 public user: {
    'Student Number' : '',
    Name: '',
    Surname: '',
    Role: 0,
    Campus: '',
    Res: '',
    Orders: any[],
    'Res Number': '',
    'Phone number': '',
    'Amount Left': number
 }; 
  toastService: any;

  constructor(
    public firestore: AngularFirestore,
    public storage: AngularFireStorage, 
    public auth: AngularFireAuth,
    public toast: ToastService,
    public storageService: StorageService,
    public router: Router
    ) { }

  message(item: any){
    this.router.navigateByUrl('message', { state : {
      recipient : item.Owner
    }});
  }

  buy(item: any){
    item.Status = "Pending Delivery";
    if (this.user['Amount Left'] >= item.Price){
      this.toast.presentToast("Successful purchase.");
    }
    else{
      this.toast.presentToast("You don't have enough credits for that.");
    }
  }

  ngOnInit() {
  }

}
