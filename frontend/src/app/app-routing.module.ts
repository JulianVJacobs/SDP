import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'landing', 
    pathMatch: 'full'
  },

  {
    //This might cause bugs, was originally called home
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'dh-staff-main',
    loadChildren: () => import('./pages/dh-staff-main/dh-staff-main.module').then( m => m.DhStaffMainPageModule)
  },
  {
    path: 'convo-meals',
    loadChildren: () => import('./pages/convo-meals/convo-meals.module').then( m => m.ConvoMealsPageModule)
  },
  {
    path: 'eoh-meals',
    loadChildren: () => import('./pages/eoh-meals/eoh-meals.module').then( m => m.EohMealsPageModule)
  },
  {
    path: 'main-meals',
    loadChildren: () => import('./pages/main-meals/main-meals.module').then( m => m.MainMealsPageModule)
  },
  {
    path: 'knocks-meals',
    loadChildren: () => import('./pages/knocks-meals/knocks-meals.module').then( m => m.KnocksMealsPageModule)
  },
  {
    path: 'jubs-meals',
    loadChildren: () => import('./pages/jubs-meals/jubs-meals.module').then( m => m.JubsMealsPageModule)
  },
  {
    path: 'highfeild-meals',
    loadChildren: () => import('./pages/highfeild-meals/highfeild-meals.module').then( m => m.HighfeildMealsPageModule)
  },
  {
    path: 'make-review',
    loadChildren: () => import('./pages/make-review/make-review.module').then( m => m.MakeReviewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
