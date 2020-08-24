import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnocksMealsPage } from './knocks-meals.page';

const routes: Routes = [
  {
    path: '',
    component: KnocksMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnocksMealsPageRoutingModule {}
