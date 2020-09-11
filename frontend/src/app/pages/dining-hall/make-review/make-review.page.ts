import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-make-review',
  templateUrl: './make-review.page.html',
  styleUrls: ['./make-review.page.scss'],
})
export class MakeReviewPage implements OnInit {
  public data = {
    meta: {
      'Dining Hall': '',
      Meal: ''
    },
    content: {
      uid: '',
      Rating: '',
      Date: '',
      'Posted By': '',
      'Time': new Number,
      Comment: ''
    }
  }

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
    ) {}

  ngOnInit() {
    
  }

  setRating(rating: string){
    console.log("changed rating: ",rating);
    // do your stuff
    
  }

  submitReview(numRating: string){
    //some back end connecting stuff
    var today = new Date;

    // this.review.content.Rating = numRating;
    this.data.content.Time = today.getTime();
    this.data.content.Date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // this.review.content['Posted By'] = AuthConstants.personNumber;
    // console.log(this.auth.currentUser)

    this.auth.currentUser.then((res) => {
      this.data.content.uid = res.uid;
      this.firestore.firestore.collection("Dining Halls/"+this.data.meta['Dining Hall']+"/Meals/"+this.data.meta.Meal+"/Comments").doc().set(this.data.content)
        .catch((error) => {
          console.dir('error',error);
        })
    });

    console.log(numRating)
    this.router.navigate(['main']);
  }

}
