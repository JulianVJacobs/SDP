import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMealsPage } from './main-meals.page';

const routes: Routes = [
  {
    path: '',
    component: MainMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMealsPageRoutingModule {}
