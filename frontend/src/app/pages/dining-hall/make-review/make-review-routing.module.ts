import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeReviewPage } from './make-review.page';

import { StarRatingModule } from 'ionic5-star-rating';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MakeReviewPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StarRatingModule
  ],
  exports: [RouterModule],
})
export class MakeReviewPageRoutingModule {}
