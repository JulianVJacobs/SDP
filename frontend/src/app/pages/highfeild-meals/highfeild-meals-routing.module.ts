import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighfeildMealsPage } from './highfeild-meals.page';

const routes: Routes = [
  {
    path: '',
    component: HighfeildMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighfeildMealsPageRoutingModule {}
