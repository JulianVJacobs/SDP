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
        children:[
          {
          path: '',
          loadChildren: '../buy-books/buy-books.module#BuyBooksPageModule' 
          }
        ]
      },

      {
        path: 'sell-books',
        children:[
          {
          path: '',
          loadChildren: '../sell-books/sell-books.module#SellBooksPageModule' 
          }
        ]
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
