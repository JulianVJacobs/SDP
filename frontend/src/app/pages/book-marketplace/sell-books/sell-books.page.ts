import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-books',
  templateUrl: './sell-books.page.html',
  styleUrls: ['./sell-books.page.scss'],
})
export class SellBooksPage implements OnInit {
  public data = {
      Description: '',
      'Image-URL': [],
      'Image-REF': [],
      Owner: '',
      Price: '',
      Title: '',
      id: ''
  }
  public images: FileList
  

  constructor(
    private firestore: AngularFirestore, 
    private storage: AngularFireStorage, 
    private toast: ToastService,
    private auth: AngularFireAuth
    ) { }

  addBook(){
    this.toast.presentToast("Successful upload");               
  }

  remove(item){
    
  }

  ngOnInit() {
  }

}
