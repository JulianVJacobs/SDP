import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighfeildMealsPageRoutingModule } from './highfeild-meals-routing.module';

import { HighfeildMealsPage } from './highfeild-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighfeildMealsPageRoutingModule
  ],
  declarations: [HighfeildMealsPage]
})
export class HighfeildMealsPageModule {}
