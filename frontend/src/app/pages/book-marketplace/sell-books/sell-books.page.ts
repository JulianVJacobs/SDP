import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-books',
  templateUrl: './sell-books.page.html',
  styleUrls: ['./sell-books.page.scss'],
})
export class SellBooksPage implements OnInit {
  public data = {
      Description: '',
      'Image-URL': [],
      'Image-REF': [],
      Owner: '',
      Price: '',
      Title: '',
      id: ''
  }
  public images: FileList
  

  constructor(
    private firestore: AngularFirestore, 
    private storage: AngularFireStorage, 
    private toast: ToastService,
    private auth: AngularFireAuth,
    private router: Router
    ) { }

  addBook(){
    this.auth.currentUser.then((res) => {
      this.data.Owner = res.uid;
      for (var i =0; i < this.images.length; ++i){
        this.storage.storage.ref().child('book_pic/'+this.images.item(i).name).put(this.images.item(i))
            .then((res) => {
              this.data["Image-REF"].push(res.ref.toString())

              this.firestore.firestore.collection('Books').add(this.data)
                .then(() => {
                  this.toast.presentToast("Successful upload");
                  this.data = {
                    Description: '',
                    'Image-URL': [],
                    'Image-REF': [],
                    Owner: '',
                    Price: '',
                    Title: '',
                    id: ''
                  }
                  this.router.navigate(['sell-books']);
                })
                .catch((err) => {
                  console.dir(err);
                });
            })
            .catch((err) => {
              console.log('Failure');
              console.dir(err);
            });
      }
    })
  }

  remove(item){
    console.log(item);
    if(item.imageUrl) {
      this.storage.ref(`book_pic/${item.id}`).delete()
    }
    // this.itemsRef.doc(item.id).delete()
  }

  ngOnInit() {
  }

}
