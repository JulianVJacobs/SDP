import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { snapshotChanges } from '@angular/fire/database';
import { AngularFirestore, DocumentData, DocumentSnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.page.html',
  styleUrls: ['./message-list.page.scss'],
})
export class MessageListPage implements OnInit {
  public conversations = []; public users = {}; public messages: any;

  constructor(
  ) { }

  ngOnInit() {
  }

  mainAction(){
    
  }

}
