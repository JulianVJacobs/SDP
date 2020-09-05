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
          loadChildren: '.../buy-books/buy-books.module#buy-booksPageModule' 
          }
        ]
      },

      {
        path: 'sell-books',
        children:[
          {
          path: '',
          loadChildren: '.../sell-books/sell-books.module#sell-booksPageModule' 
          }
        ]
      },
      {
        path: '',
        redirectTo: '/main-tabs/buy-books',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainTabsPageRoutingModule {}
