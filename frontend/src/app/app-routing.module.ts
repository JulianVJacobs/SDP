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
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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
    loadChildren: () => import('./pages/dining-hall/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'make-review',
    loadChildren: () => import('./pages/dining-hall/make-review/make-review.module').then( m => m.MakeReviewPageModule)
  },
  {
    path: 'choose-service',
    loadChildren: () => import('./pages/choose-service/choose-service.module').then( m => m.ChooseServicePageModule)
  },
  {
    path: 'main-tabs',
    loadChildren: () => import('./pages/book-marketplace/main-tabs/main-tabs.module').then( m => m.MainTabsPageModule)
  },   {
    path: 'book-delivery',
    loadChildren: () => import('./pages/book-marketpalce/book-delivery/book-delivery.module').then( m => m.BookDeliveryPageModule)
  },
  {
    path: 'book-delivery',
    loadChildren: () => import('./pages/book-marketpalce/book-delivery/book-delivery.module').then( m => m.BookDeliveryPageModule)
  },
  {
    path: 'book-delivery',
    loadChildren: () => import('./pages/book-marketplace/book-delivery/book-delivery.module').then( m => m.BookDeliveryPageModule)
  }
 
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
