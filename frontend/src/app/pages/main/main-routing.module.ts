import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
    {
      path: 'convo-meals',
      loadChildren: () => import('../convo-meals/convo-meals.module').then( 
        m => m.ConvoMealsPageModule)
    },
    {
      path: 'eoh-meals',
      loadChildren: () => import('../eoh-meals/eoh-meals.module').then( 
        m => m.EohMealsPageModule)
    },
    {
      path: 'main-meals',
      loadChildren: () => import('../main-meals/main-meals.module').then( 
        m => m.MainMealsPageModule)
    },
    {
      path: 'knocks-meals',
      loadChildren: () => import('../knocks-meals/knocks-meals.module').then( 
        m => m.KnocksMealsPageModule)
    },
    {
      path: 'jubs-meals',
      loadChildren: () => import('../jubs-meals/jubs-meals.module').then( 
        m => m.JubsMealsPageModule)
    },
    {
      path: 'highfield-meals',
      loadChildren: () => import('../highfield-meals/highfield-meals.module').then( 
        m => m.HighfieldMealsPageModule)
    },
    {
      path: 'make-review',
      loadChildren: () => import('../make-review/make-review.module').then( 
        m => m.MakeReviewPageModule)
    }]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
