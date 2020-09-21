import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookMessagePage } from './book-message.page';

const routes: Routes = [
  {
    path: '',
    component: BookMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookMessagePageRoutingModule {}
