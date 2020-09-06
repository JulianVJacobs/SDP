import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-buy-books',
  templateUrl: './buy-books.page.html',
  styleUrls: ['./buy-books.page.scss'],
})
export class BuyBooksPage implements OnInit {

  items: Observable<any[]>;

  newTodo: string = '';
  itemsRef: AngularFirestoreCollection;

  selectedFile: any;
  loading: HTMLIonLoadingElement;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private loadingController: LoadingController) {
    this.itemsRef = db.collection('items')
    this.items = this.itemsRef.valueChanges();
  }

  addTodo(){
    this.itemsRef.add({
       title: this.newTodo
    })
    .then(async resp => {

      const imageUrl = await this.uploadFile(resp.id, this.selectedFile)

      this.itemsRef.doc(resp.id).update({
        id: resp.id,
        imageUrl: imageUrl || null
      })
    }).catch(error => {
      console.log(error);
    })
  }

  async uploadFile(id, file): Promise<any> {
    if(file && file.length) {
      try {
        await this.presentLoading();
        const task = await this.storage.ref('images').child(id).put(file[0])
        this.loading.dismiss();
        return this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    return this.loading.present();
  }



  buy(item){
    console.log(item);
    if(item.imageUrl) {
      //do what required
      //this.storage.ref(`images/${item.id}`).delete()
    }
    this.itemsRef.doc(item.id).delete()
  }

  ngOnInit() {
  }

}
