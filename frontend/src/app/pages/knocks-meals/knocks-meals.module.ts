import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnocksMealsPageRoutingModule } from './knocks-meals-routing.module';

import { KnocksMealsPage } from './knocks-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnocksMealsPageRoutingModule
  ],
  declarations: [KnocksMealsPage]
})
export class KnocksMealsPageModule {}
