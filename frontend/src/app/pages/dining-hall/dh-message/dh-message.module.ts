import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhMessagePageRoutingModule } from './dh-message-routing.module';

import { DhMessagePage } from './dh-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhMessagePageRoutingModule
  ],
  declarations: [DhMessagePage]
})
export class DhMessagePageModule {}
