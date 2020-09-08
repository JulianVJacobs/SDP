import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import firebase from '@firebase/app';
import '@firebase/auth';

@Component({
  selector: 'app-jubs-meals',
  templateUrl: './jubs-meals.page.html',
  styleUrls: ['./jubs-meals.page.scss'],
})
export class JubsMealsPage implements OnInit {
  public menu = []

  constructor(
    private router: Router,
    private firestore: AngularFirestore, 
    public toastService: ToastService) {}

  ngOnInit() {
    this.firestore.firestore.collection('Dining Halls').doc('Jubilee').get()
    .then((res) => {
      res.data()['lunch menu'].forEach((meal) => {
        this.firestore.firestore.collection("Dining Halls/Convocation/Meals").doc(meal).get()
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
    var data = {Time: today.getTime(), Date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(), uid: uid};

    if (num == "1") { //
      this.firestore.firestore.collection('Dining Halls/Jubilee/Meals/Russian roll/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }

    if (num == "2") { //
      this.firestore.firestore.collection('Dining Halls/Jubilee/Meals/Beef Burger/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }

    if (num == "3") { //
      this.firestore.firestore.collection('Dining Halls/Jubilee/Meals/Chicken wrap/Order').doc().set(data)
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
