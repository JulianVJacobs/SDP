import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dh-staff-main',
  templateUrl: './dh-staff-main.page.html',
  styleUrls: ['./dh-staff-main.page.scss'],
})
export class DhStaffMainPage implements OnInit {
  public bookings = {
    '1st Meal': 1,
    '2nd Meal': 0,
    '3rd Meal': 0
  }
  public total = 0;
    
  constructor(
    public storageService: StorageService,
    private firestore: AngularFirestore
    ) { }

  ngOnInit() {
    var today = new Date;
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dh= 'Cpnvocation';
    this.storageService.get(AuthConstants.personNumber)
      .then((res) => {
        dh = res['DH ID'];
        this.firestore.firestore.collection('Dining Halls').doc(dh).get()
          .then((res) => {
            for(var meal in res.data()){
              this.firestore.firestore.collection("Dining Halls/"+dh+"/Meals/"+res.data()[meal]+'/Order').where('Date','==',date).get()
                .then((snap) => {
                    this.bookings[meal] = snap.size;
                    this.total += this.bookings[meal]; 
                });
            }
          })
          .catch((error) => {
            console.dir(error);
          });
      });
  }

}
