import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'dh-staff-main',
    loadChildren: () => import('./dh-staff-main/dh-staff-main.module').then( m => m.DhStaffMainPageModule)
  },
  {
    path: 'convo-meals',
    loadChildren: () => import('./convo-meals/convo-meals.module').then( m => m.ConvoMealsPageModule)
  },
  {
    path: 'eoh-meals',
    loadChildren: () => import('./eoh-meals/eoh-meals.module').then( m => m.EohMealsPageModule)
  },
  {
    path: 'main-meals',
    loadChildren: () => import('./main-meals/main-meals.module').then( m => m.MainMealsPageModule)
  },
  {
    path: 'knocks-meals',
    loadChildren: () => import('./knocks-meals/knocks-meals.module').then( m => m.KnocksMealsPageModule)
  },
  {
    path: 'jubs-meals',
    loadChildren: () => import('./jubs-meals/jubs-meals.module').then( m => m.JubsMealsPageModule)
  },
  {
    path: 'highfeild-meals',
    loadChildren: () => import('./highfeild-meals/highfeild-meals.module').then( m => m.HighfeildMealsPageModule)
  },
  {
    path: 'make-review',
    loadChildren: () => import('./make-review/make-review.module').then( m => m.MakeReviewPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
