import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvoMealsPage } from './convo-meals.page';

const routes: Routes = [
  {
    path: '',
    component: ConvoMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvoMealsPageRoutingModule {}
