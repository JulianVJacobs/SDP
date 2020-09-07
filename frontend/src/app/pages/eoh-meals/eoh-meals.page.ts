import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/config/auth-constants';

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
    var data = { 'Ordered By': AuthConstants.personNumber, Time: today.getTime(), Date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() };


    if (num == "1") { //
      this.firestore.firestore.collection('Dining Halls/Convocation/Meals/Rice and Chicken/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }

    if (num == "2") { //
      this.firestore.firestore.collection('Dining Halls/Convocation/Meals/Vegetarian Lasagna/Order').doc().set(data)
        .then(() => {
          this.toastService.presentToast('Order Placed');
        })
        .catch((error) => {
          console.dir(error);
        });
    }

    if (num == "3") { //
      this.firestore.firestore.collection('Dining Halls/Convocation/Meals/Steak and Wedges/Order').doc().set(data)
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
