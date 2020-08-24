import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighfieldMealsPage } from './highfield-meals.page';

const routes: Routes = [
  {
    path: '',
    component: HighfieldMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighfieldMealsPageRoutingModule {}
