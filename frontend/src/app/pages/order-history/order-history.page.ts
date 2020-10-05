import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  public items = []; public uid: string; public delivered: boolean = false;
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

  constructor(
    private auth: AngularFireAuth,
    private storage: AngularFireStorage, 
    private storageService: StorageService,
    private firestore: AngularFirestore,
    private router: Router
    ) { }

  ngOnInit() {
    this.auth.currentUser.then((res) => {
      this.uid = res.uid;
      this.storageService.get(res.uid)
        .then((res) => {
          this.user = res;
          this.items = this.user.Orders;
        });
    })
    
  }

  message(item: any){
    this.router.navigateByUrl('message', { state : {
      recipient : item.Owner
    }});
  }

  delivery(item: any){
    item.Status = "Delivered"
    this.user.Orders[this.user.Orders.indexOf(item)] = item;
    this.firestore.firestore.collection('users').doc(this.uid).update({Orders: this.user.Orders})
    this.firestore.firestore.collection('users').doc(item.Owner).update({Orders: this.user.Orders})
    this.storageService.store(this.uid,this.user)
  }

  // setDate(item: any){
  //   this.auth.currentUser.then((res) => {
  //   });
  // }

}
