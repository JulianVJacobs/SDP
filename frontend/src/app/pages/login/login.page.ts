import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public data = {
    uid: '',
    personNumber: '',
    password: ''
  }

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private storageService: StorageService,
    private router: Router,
    private toastService: ToastService
    ) { }

  ngOnInit() {
  }

  mainAction(){
    
  }

  signupAction(){
    
  }
}
