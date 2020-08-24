import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EohMealsPageRoutingModule } from './eoh-meals-routing.module';

import { EohMealsPage } from './eoh-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EohMealsPageRoutingModule
  ],
  declarations: [EohMealsPage]
})
export class EohMealsPageModule {}
