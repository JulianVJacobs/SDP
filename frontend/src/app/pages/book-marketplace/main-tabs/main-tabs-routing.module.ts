import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTabsPage } from './main-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MainTabsPage,

    children:[
      {
        path: 'buy-books',
        loadChildren: () => import('../buy-books/buy-books.module').then(
          m => m.BuyBooksPageModule
        )
      },

      {
        path: 'sell-books',
        loadChildren: () => import('../sell-books/sell-books.module').then(
          m => m.SellBooksPageModule
        )
      },
      {
        path: '',
        redirectTo: '/main-tabs/buy-books',
        pathMatch: 'full'
      }
    ]

  },
  {
    path: '',
    redirectTo: '/main-tabs/buy-books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainTabsPageRoutingModule {}
