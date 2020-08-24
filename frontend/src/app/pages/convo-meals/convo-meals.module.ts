import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvoMealsPageRoutingModule } from './convo-meals-routing.module';

import { ConvoMealsPage } from './convo-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvoMealsPageRoutingModule
  ],
  declarations: [ConvoMealsPage]
})
export class ConvoMealsPageModule {}
