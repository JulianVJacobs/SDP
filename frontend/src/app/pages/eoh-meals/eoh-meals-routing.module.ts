import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EohMealsPage } from './eoh-meals.page';

const routes: Routes = [
  {
    path: '',
    component: EohMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EohMealsPageRoutingModule {}
