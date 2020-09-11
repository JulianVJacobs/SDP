import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhStaffMainPageRoutingModule } from './dh-staff-main-routing.module';

import { DhStaffMainPage } from './dh-staff-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhStaffMainPageRoutingModule
  ],
  declarations: [DhStaffMainPage]
})
export class DhStaffMainPageModule {}
