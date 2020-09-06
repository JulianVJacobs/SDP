import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { AuthConstants } from 'src/app/config/auth-constants';

@Component({
  selector: 'app-convo-meals',
  templateUrl: './convo-meals.page.html',
  styleUrls: ['./convo-meals.page.scss'],
})
export class ConvoMealsPage implements OnInit {
  public menu = []

  constructor(
    private router: Router,
    private firestore: AngularFirestore, 
    public toastService: ToastService,
    public storageService: StorageService
    ) {}

  ngOnInit() {
    this.firestore.firestore.collection('Dining Halls').doc('Convocation').get()
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

  orderAction(item: string){
    var today = new Date;
    var data = {'Ordered By': AuthConstants.personNumber, Time: today.getTime(), Date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()};
    this.firestore.firestore.collection('Dining Halls/Convocation/Meals/'+item+'/Order').doc().set(data)
      .then(() => {
        this.toastService.presentToast('Order Placed');
      })
      .catch((error) => {
        console.dir(error);
      })
  }

  reviewAction(){
    this.router.navigate(['make-review']);
  }

}
