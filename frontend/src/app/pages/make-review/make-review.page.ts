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

  submitReview(numRating: string){
    //some back end connecting stuff
    this.router.navigate(['main']);
  }

}
