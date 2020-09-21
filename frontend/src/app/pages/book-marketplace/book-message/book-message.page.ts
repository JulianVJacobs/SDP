import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-book-message',
  templateUrl: './book-message.page.html',
  styleUrls: ['./book-message.page.scss'],
})
export class BookMessagePage implements OnInit {

  public data = {
    username: '',
    messages: Object[],
    Owner: '',
    message: ''
}

 ;
  
  _chatSubscription;
  

  constructor(
    
    private firestore: AngularFirestore, 
    private storage: AngularFireStorage, 
    private toast: ToastService,
    private auth: AngularFireAuth,
    private router: Router
    ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    sendMessage() {
      
      this.storage.storage.ref().child('chats/').put
        username: this.username,
        message: this.message
      }).then( () => {
        // message is sent
      }).catch( () => {
        // some error. maybe firebase is unreachable
      });
      this.message = '';
    }

    ionViewDidLoad() {
      this.db.list('/chat').push({
        specialMessage: true,
        message: `${this.username} has joined the room`
      });
    }

    ionViewWillLeave(){
      this._chatSubscription.unsubscribe();
      this.db.list('/chat').push({
        specialMessage: true,
        message: `${this.username} has left the room`
      });
    }
  }

  ngOnInit() {
  }

}

