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
  public user: {}; public item: any;
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
    private auth: AngularFireAuth,
    private storage: AngularFireStorage, 
    private storageService: StorageService,
    private firestore: AngularFirestore
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
    this.item = history.state.item;
    this.auth.currentUser.then((res) => {
      this.firestore.firestore.collection('users/' + res.uid + '/Chats').doc(this.item.Owner).get()
        .then((res) => {
          this.messages = res.data().Messages;
        })
        .catch((err) => {
          console.dir(err);
        });
      this.storageService.get(res.uid)
        .then((res) => {
          this.user = res;
        })
        .catch((err) => {
          console.dir(err);
        });
    })    
  }

  sendMessage(){
    var today = new Date;
    this.reply.metadata.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.reply.metadata.time = today.getTime();
    this.reply.metadata.type = "sent";
    this.auth.currentUser.then((res) => {
      var uid = res.uid;
      this.messages.push(this.reply);
      this.firestore.firestore.collection('users/' + res.uid + '/Chats').doc(this.item.Owner)
        .update({ 
            Messages: this.messages
        })
        .then(() => {
          this.reply.metadata.type = "received"
          this.messages[-1] = this.reply;
          this.firestore.firestore.collection('users/' + this.item.Owner + '/Chats').doc(uid)
            .update({ 
                Messages: this.messages
            })
            .then(() => {
              this.reply.content = '';
            })
            .catch((err) => {
              console.dir(err);
            });    
        })
        .catch((err) => {
          console.dir(err);
        });          
    })
  }
  
}
