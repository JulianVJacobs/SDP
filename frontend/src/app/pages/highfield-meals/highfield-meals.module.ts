import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighfieldMealsPageRoutingModule } from './highfield-meals-routing.module';

import { HighfieldMealsPage } from './highfield-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighfieldMealsPageRoutingModule
  ],
  declarations: [HighfieldMealsPage]
})
export class HighfieldMealsPageModule {}
