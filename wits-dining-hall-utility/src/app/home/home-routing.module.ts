import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    children: [
      {
        path: 'main',
        loadChildren: () => import('../pages/main/main.module').then(
          m => m.MainPageModule
        )
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}