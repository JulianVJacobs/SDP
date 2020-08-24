import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JubsMealsPageRoutingModule } from './jubs-meals-routing.module';

import { JubsMealsPage } from './jubs-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JubsMealsPageRoutingModule
  ],
  declarations: [JubsMealsPage]
})
export class JubsMealsPageModule {}
