import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [HomeGuard],
    children: [
      {
        path: 'main',
        loadChildren: () => import('../pages/dining-hall/main/main.module').then(
          m => m.MainPageModule
        )
      },
      {
        path: 'meals',
        loadChildren: () => import('../pages/dining-hall/meals/meals.module').then(
          m => m.MealsPageModule
        )
      },
      {
        path: 'dh-staff-main',
        loadChildren: () => import('../pages/dining-hall/dh-staff-main/dh-staff-main.module').then(
          m => m.DhStaffMainPageModule
        )
      },
      {
        path: 'message',
        loadChildren: () => import('../pages/message/message.module').then( 
          m => m.MessagePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}