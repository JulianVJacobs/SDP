import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyBooksPage } from './buy-books.page';

const routes: Routes = [
  {
    path: '',
    component: BuyBooksPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyBooksPageRoutingModule {}
