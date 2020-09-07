import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sell-books',
  templateUrl: './sell-books.page.html',
  styleUrls: ['./sell-books.page.scss'],
})
export class SellBooksPage implements OnInit {

  items: Observable<any[]>;

  bookName: string = '';
  bookPrice: string = '';
  itemsRef: AngularFirestoreCollection;

  selectedFile: any;
  loading: HTMLIonLoadingElement;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private loadingController: LoadingController) {
    this.itemsRef = db.collection('items')
    this.items = this.itemsRef.valueChanges();
  }

  chooseFile (event) {
    this.selectedFile = event.target.files
  }

  addBook(){
    this.itemsRef.add({
      title: this.bookName,
      price: this.bookPrice
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
        const task = await this.storage.ref('book_pic').child(id).put(file[0])
        this.loading.dismiss();
        return this.storage.ref(`book_pic/${id}`).getDownloadURL().toPromise();
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

  remove(item){
    console.log(item);
    if(item.imageUrl) {
      this.storage.ref(`book_pic/${item.id}`).delete()
    }
    this.itemsRef.doc(item.id).delete()
  }

  ngOnInit() {}

}
