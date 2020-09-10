import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import firebase from '@firebase/app';
import '@firebase/auth';

@Component({
  selector: 'app-eoh-meals',
  templateUrl: './eoh-meals.page.html',
  styleUrls: ['./eoh-meals.page.scss'],
})
export class EohMealsPage implements OnInit {
  public menu = []

  constructor(
    private router: Router,
    private firestore: AngularFirestore, 
    public toastService: ToastService
    ) {}

  ngOnInit() {
    this.firestore.firestore.collection('Dining Halls').doc('Ernest Oppenheimer').get()
    .then((res) => {
      res.data()['lunch menu'].forEach((meal) => {
        this.firestore.firestore.collection("Dining Halls/Ernest Oppenheimer/Meals").doc(meal).get()
          .then((res) => {
            this.menu.push(res.data());
          })
          .catch((error) => {
            console.dir(error);
          });
      })
    })
    .catch((error) => {
      console.dir(error);
    });
  }

  async orderAction(num: string){
    var today = new Date;
    var uid = firebase.auth().currentUser.uid;
    var data = {uid: uid, Time: today.getTime(), Date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() };



    if (num == "1") { //
      this.firestore.firestore.collection('Dining Halls/Ernest Oppenheimer/Meals/Rice and chicken/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }

    if (num == "2") { //
      this.firestore.firestore.collection('Dining Halls/Ernest Oppenheimer/Meals/Vegetarian Lasagna/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }

    if (num == "3") { //
      this.firestore.firestore.collection('Dining Halls/Ernest Oppenheimer/Meals/Wedges and Steak/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }
  }

  reviewAction(num: string){
    this.router.navigate(['make-review']);
  }

}
