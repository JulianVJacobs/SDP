import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMealsPageRoutingModule } from './main-meals-routing.module';

import { MainMealsPage } from './main-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMealsPageRoutingModule
  ],
  declarations: [MainMealsPage]
})
export class MainMealsPageModule {}
