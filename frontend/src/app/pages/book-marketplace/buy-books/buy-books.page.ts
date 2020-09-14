import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-buy-books',
  templateUrl: './buy-books.page.html',
  styleUrls: ['./buy-books.page.scss'],
})
export class BuyBooksPage implements OnInit {
 public items = []; public user: {};

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage, 
    private auth: AngularFireAuth,
    private toast: ToastService,
    private storageService: StorageService
    ) { }

  buy(item: any){
    if (this.user['Amount Left'] >= item.Price){
        this.auth.currentUser
          .then((res) => {
            this.user['Amount Left'] = parseFloat(this.user['Amount Left']) - parseFloat(item.Price);
            this.firestore.firestore.collection('users').doc(res.uid).update({'Amount Left': this.user['Amount Left'] })
              .then(() => {
                this.firestore.firestore.collection('Books').doc(item.id).delete();
                this.firestore.firestore.collection('users').doc(item.Owner).get()
                  .then((res) => {
                    var v = res.data();
                    v['Amount Left'] += parseFloat(item.Price);
                    this.firestore.firestore.collection('users').doc(item.Owner)
                      .update(
                        {
                          'Amount Left': v['Amount Left'] 
                      })
                        .then(() => {
                          this.firestore.firestore.collection('Books').doc(item.id).delete();
                          this.toast.presentToast("Successful purchase");
                          this.ngOnInit();
                        })
                  })              
                  .catch((err) => {
                    console.dir(err);
                  });
              })
              .catch((err) => {
                console.dir(err);
              });
            
          })
          .catch((err) => {
            console.dir(err);
          });
    }
    else{
      this.toast.presentToast("You don't have enough credits for that.");
    }
  }

  ngOnInit() {
    this.auth.currentUser.then((res) => {
      this.storageService.get(res.uid)
        .then((res) => {
          this.user = res;
      })
    })
    this.firestore.firestore.collection('Books').get()
      .then((res) => {
        res.docs.forEach((doc) => {
          var i = doc.data();
          i.id = doc.id;
          this.storage.storage.refFromURL(doc.data()['Image-REF'][0]).getDownloadURL()
            .then((url) => {
              i['Image-URL'] = url;
            })
            .then(() => {
              this.items.push(i);
            })
            .catch((err) => {
              console.dir(err);
            });
          })
      });
  }

}
