import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dh-staff-main',
  templateUrl: './dh-staff-main.page.html',
  styleUrls: ['./dh-staff-main.page.scss'],
})
export class DhStaffMainPage implements OnInit {
  public bookings = []
  public total = 0;
    
  constructor(
    private auth: AngularFireAuth,
    public storageService: StorageService,
    private firestore: AngularFirestore,
    private router: Router
    ) { }

  ngOnInit() {
    
  }

  mainAction(){
    
  }

}
