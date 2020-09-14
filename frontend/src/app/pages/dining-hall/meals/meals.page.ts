import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  public menu = [];
  public review = false; 
  public data = {
      uid: '',
      Rating: 3,
      Date: '',
      'Posted By': '',
      'Time': new Number,
      Comment: ''
  }
  public dh = '';
  public average: Number;

  constructor(
    private router: Router,
    private firestore: AngularFirestore, 
    private auth: AngularFireAuth,
    public toastService: ToastService,
    public storageService: StorageService
    ) { }

  ngOnInit() {
    this.dh = history.state['Dining Hall'];
    this.firestore.firestore.collection('Dining Halls').doc(this.dh).get()
      .then((res) => {
        for(var meal in res.data()){
          this.firestore.firestore.collection("Dining Halls/"+this.dh+"/Meals").doc(res.data()[meal]).get()
            .then((res) => {
              this.menu.push(res.data());
              })
            .catch((error) => {
              console.dir(error);
            });
        }
      })
      .catch((error) => {
        console.dir(error);
      });
  }

  orderAction(item: string){
    var today = new Date;
    var data = {Time: today.getTime(), Date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(), uid: firebase.auth().currentUser.uid};
      this.firestore.firestore.collection('Dining Halls/'+this.dh+'/Meals/'+item+'/Order').doc().set(data)
      .then(() => {
        this.toastService.presentToast('Order Placed');
      })
      .catch((error) => {
        console.dir(error);
      })
  }

  submit(meal: string){
    var today = new Date;
    // this.data.meta
    this.data.Time = today.getTime();
    this.data.Date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.auth.currentUser.then((res) => {
      this.data.uid = res.uid;
      this.storageService.get(res.uid)
        .then((res) => {
          this.data["Posted By"] = res['Student Number']
          this.firestore.firestore.collection("Dining Halls/"+this.dh+"/Meals/"+meal+"/Comments").doc().set(this.data)
          this.firestore.firestore.collection("Dining Halls/"+this.dh+"/Meals/").doc(meal).get()
            .then((res) => {
              var u = res.data();
              u.ratings.push(this.data.Rating);
              u['Average Rating'] = 0;
              u.ratings.forEach((v) => {
                u['Average Rating'] += v;
              });
              u['Average Rating'] /= u.ratings.length;
              u.uid = this.data['Posted By']
              this.firestore.firestore.collection("Dining Halls/"+this.dh+"/Meals/").doc(meal)
                .update({
                  uid: u.uid,
                  ratings: u.ratings,
                  'Average Rating': u['Average Rating']
                })
                .catch((err) => {
                  console.dir(err);
                });
                this.toastService.presentToast('Review submitted.');
                this.router.navigate(['main']);
            })
            .catch((error) => {
              console.dir('error',error);
            });
        })
        .catch((error) => {
          console.dir('error',error);
        })
    })
    .catch((error) => {
      console.dir('error',error);
    });
  }
}
