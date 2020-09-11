import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-buy-books',
  templateUrl: './buy-books.page.html',
  styleUrls: ['./buy-books.page.scss'],
})
export class BuyBooksPage implements OnInit {
 public items = [];

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage, 
    ) { }

  buy(item){
    console.log(item);
    if(item.imageUrl) {
      //do what required
      //this.storage.ref(`images/${item.id}`).delete()
    }
    //this.itemsRef.doc(item.id).delete()
  }

  ngOnInit() {
    this.firestore.firestore.collection('Books').get()
      .then((res) => {
        res.docs.forEach((doc) => {
          var i = doc.data();
          this.storage.storage.refFromURL(doc.data()['Image-REF']).getDownloadURL()
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
