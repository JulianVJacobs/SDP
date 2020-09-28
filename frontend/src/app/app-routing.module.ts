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
    path: 'choose-service',
    loadChildren: () => import('./pages/choose-service/choose-service.module').then( m => m.ChooseServicePageModule)
  },
  {
    path: 'main-tabs',
    loadChildren: () => import('./pages/book-marketplace/main-tabs/main-tabs.module').then( m => m.MainTabsPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'edit-details',
    loadChildren: () => import('./pages/edit-details/edit-details.module').then( m => m.EditDetailsPageModule)
  },
  {
    path: 'message-list',
    loadChildren: () => import('./pages/message-list/message-list.module').then( m => m.MessageListPageModule)
  }
  

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
