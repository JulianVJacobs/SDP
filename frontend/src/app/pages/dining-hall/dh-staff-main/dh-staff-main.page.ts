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
    var today = new Date;
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dh= 'Convocation';
    this.auth.currentUser
      .then((res) => {
        this.storageService.get(res.uid)
          .then((res) => {
            dh = res['DH ID'];
            this.firestore.firestore.collection('Dining Halls').doc(dh).get()
              .then((res) => {
                for(var meal in res.data()){
                  this.firestore.firestore.collection("Dining Halls/"+dh+"/Meals/"+res.data()[meal]+'/Order').where('Date','==',date).get()
                    .then((snap) => {
                      this.bookings.push(snap.size);
                      this.total += snap.size;
                    });
                  }
              })
              .catch((error) => {
                console.dir(error);
              })
          })
          .catch((err) => {
            console.dir(err);
          });
        })
      .catch((err) => {
        console.dir(err);
      });
  }

  mainAction(){
    this.router.navigate(['message-list']);
  }

}
