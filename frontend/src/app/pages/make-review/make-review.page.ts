import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-make-review',
  templateUrl: './make-review.page.html',
  styleUrls: ['./make-review.page.scss'],
})
export class MakeReviewPage implements OnInit {
  public review = {
    meta: {
      'Dining Hall': '',
      Meal: ''
    },
    content: {
      Rating: '',
      Date: '',
      'Posted By': '',
      'Time': new Number,
      Comment: ''
    }
  }

  constructor(
    private router: Router,
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

    this.review.content.Rating = numRating;
    this.review.content.Time = today.getTime();
    this.review.content.Date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.review.content['Posted By'] = AuthConstants.personNumber;

    this.firestore.firestore.collection("Dining Halls/"+this.review.meta['Dining Hall']+"/Meals/"+this.review.meta.Meal+"/Comments").doc().set(this.review.content)
      .catch((error) => {
        console.dir(error);
      });

    console.log(numRating)
    this.router.navigate(['main']);
  }

}
