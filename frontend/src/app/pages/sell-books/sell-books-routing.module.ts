import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellBooksPage } from './sell-books.page';

const routes: Routes = [
  {
    path: '',
    component: SellBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellBooksPageRoutingModule {}
