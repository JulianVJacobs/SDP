import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhStaffMainPage } from './dh-staff-main.page';

const routes: Routes = [
  {
    path: '',
    component: DhStaffMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhStaffMainPageRoutingModule {}
