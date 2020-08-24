import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/user-data.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver,
    },
    children: [
      {
        path: 'main',
        loadChildren: () => import('../pages/main/main.module').then(
          m => m.MainPageModule
        )
      },
      {
        path: 'dh-staff-main',
        loadChildren: () => import('../pages/dh-staff-main/dh-staff-main.module').then(
          m => m.DhStaffMainPageModule
        )
      },
      {
        path: 'convo-meals',
        loadChildren: () => import('../pages/convo-meals/convo-meals.module').then( 
          m => m.ConvoMealsPageModule)
      },
      {
        path: 'eoh-meals',
        loadChildren: () => import('../pages/eoh-meals/eoh-meals.module').then( 
          m => m.EohMealsPageModule)
      },
      {
        path: 'main-meals',
        loadChildren: () => import('../pages/main-meals/main-meals.module').then( 
          m => m.MainMealsPageModule)
      },
      {
        path: 'knocks-meals',
        loadChildren: () => import('../pages/knocks-meals/knocks-meals.module').then( 
          m => m.KnocksMealsPageModule)
      },
      {
        path: 'jubs-meals',
        loadChildren: () => import('../pages/jubs-meals/jubs-meals.module').then( 
          m => m.JubsMealsPageModule)
      },
      {
        path: 'highfeild-meals',
        loadChildren: () => import('../pages/highfeild-meals/highfeild-meals.module').then( 
          m => m.HighfeildMealsPageModule)
      },
      {
        path: 'make-review',
        loadChildren: () => import('../pages/make-review/make-review.module').then( 
          m => m.MakeReviewPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}