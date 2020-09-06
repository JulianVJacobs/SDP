import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-review',
  templateUrl: './make-review.page.html',
  styleUrls: ['./make-review.page.scss'],
})
export class MakeReviewPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
  }

  submitReview(numRating: string){
    //some back end connecting stuff
    console.log(numRating)
    this.router.navigate(['home/main']);
  }

}
