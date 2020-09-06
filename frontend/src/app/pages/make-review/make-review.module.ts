import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeReviewPageRoutingModule } from './make-review-routing.module';

import { MakeReviewPage } from './make-review.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeReviewPageRoutingModule,
    NgbModule
  ],
  declarations: [MakeReviewPage]
})
export class MakeReviewPageModule {}
