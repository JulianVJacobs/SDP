import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';
import { IndexGuard } from '../guards/index.guard';

export const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    canActivate: [IndexGuard],
    children: [
      {
        path: 'landing',
        loadChildren: () => import('../pages/landing/landing.module').then(
          m => m.LandingPageModule
        )
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(
          m => m.LoginPageModule
        )
      },
      {
        path: 'signup',
        loadChildren: () => import('../pages/signup/signup.module').then(
          m => m.SignupPageModule
        )
      },
      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
