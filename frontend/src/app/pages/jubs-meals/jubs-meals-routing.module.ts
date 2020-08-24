import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JubsMealsPage } from './jubs-meals.page';

const routes: Routes = [
  {
    path: '',
    component: JubsMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JubsMealsPageRoutingModule {}
