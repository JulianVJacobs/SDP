import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  public user: {}; public recipient: any;
  public messages: any; 
  public reply = {
    content: '',
    metadata: {
      date: '',
      time: 0,
      type: ''
    }
  };

  constructor(
    ) { }

  /*
  sender is the user
  receiver
  messages = [
    {
      content: "",
      metadata: {
        date: "",
        time: number,
        type: "sent"/"received"
      }
    }
  ]
  */  

  ngOnInit() {
  }

  sendMessage(){
  }
  
}
