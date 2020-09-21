import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookMessagePageRoutingModule } from './book-message-routing.module';

import { BookMessagePage } from './book-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookMessagePageRoutingModule
  ],
  declarations: [BookMessagePage]
})
export class BookMessagePageModule {}
