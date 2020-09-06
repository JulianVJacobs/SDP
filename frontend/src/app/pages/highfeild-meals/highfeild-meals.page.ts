
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthConstants } from 'src/app/config/auth-constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-highfeild-meals',
  templateUrl: './highfeild-meals.page.html',
  styleUrls: ['./highfeild-meals.page.scss'],
})
export class HighfeildMealsPage implements OnInit {
  public menu = []

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    public toastService: ToastService) { }

  ngOnInit() {
    this.firestore.firestore.collection('Dining Halls').doc('Highfield').get()
    .then((res) => {
      res.data()['lunch menu'].forEach((meal) => {
        this.firestore.firestore.collection("Dining Halls/Highfield/Meals").doc(meal).get()
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


  async orderAction(num: string) {
    //backend
    var today = new Date;
    var data = { 'Ordered By': AuthConstants.personNumber, Time: today.getTime(), Date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() };


    if (num == "1") { //
      this.firestore.firestore.collection('Dining Halls/Convocation/Meals/Chicken Pizza/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }

    if (num == "2") { //
      this.firestore.firestore.collection('Dining Halls/Convocation/Meals/Beef Lasagna/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }

    if (num == "3") { //
      this.firestore.firestore.collection('Dining Halls/Convocation/Meals/Coucous and Chicken/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }
  }

  reviewAction() {
    this.router.navigate(['make-review']);
  }

}

