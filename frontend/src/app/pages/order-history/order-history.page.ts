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
    ) { }

  ngOnInit() {
  }

  message(){
  }

  delivery(){
  }

  // setDate(item: any){
  //   this.auth.currentUser.then((res) => {
  //   });
  // }

}
