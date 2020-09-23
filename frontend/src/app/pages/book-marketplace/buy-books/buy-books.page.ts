import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-books',
  templateUrl: './buy-books.page.html',
  styleUrls: ['./buy-books.page.scss'],
})
export class BuyBooksPage implements OnInit {
 public items = [];
 public user: {
    'Student Number' : '',
    Name: '',
    Surname: '',
    Role: 0,
    Campus: '',
    Res: '',
    'Res Number': '',
    'Phone number': '',
    'Amount Left': number
 }; 

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage, 
    private auth: AngularFireAuth,
    private toast: ToastService,
    private storageService: StorageService,
    private router: Router
    ) { }

  message(item: any){
    this.router.navigateByUrl('message', { state : {
      recipient : item.Owner
    }});
  }

  buy(item: any){
    if (this.user['Amount Left'] >= item.Price){
        this.auth.currentUser
          .then((res) => {
            this.user['Amount Left'] = this.user['Amount Left'] - parseFloat(item.Price);
            this.firestore.firestore.collection('users').doc(res.uid).update({'Amount Left': this.user['Amount Left'] })
              .then(() => {
                this.firestore.firestore.collection('Books').doc(item.id).get()
                  .then((res) =>{
                    this.firestore.firestore.collection('Books').doc(item.id).delete()
                      .then(() => {
                      })
                      .catch((err) => {
                        console.dir(err);
                      });          
                  })
                  .catch((err) => {
                    console.dir(err);
                  });
            this.firestore.firestore.collection('users').doc(item.Owner).get()
              .then((res) => {
                var v = res.data();
                v['Amount Left'] += parseFloat(item.Price);
                this.firestore.firestore.collection('users').doc(item.Owner).update({ 'Amount Left': v['Amount Left'] })
                    .then(() => {
                      this.toast.presentToast("Successful purchase");
                      this.ngOnInit();
                    })
                    .catch((err) => {
                      console.dir(err);
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
          this.items = [];
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
                    this.auth.currentUser.then((res) => {
                      if (i.Owner != res.uid){
                        this.items.push(i);
                      }
                    });
                  })
                  .catch((err) => {
                    console.dir(err);
                  });
                })
            });
      })
    })
    
  }

}
