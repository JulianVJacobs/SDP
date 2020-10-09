import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyBooksPageRoutingModule } from './buy-books-routing.module';

import { BuyBooksPage } from './buy-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyBooksPageRoutingModule
  ],
  declarations: [BuyBooksPage]
})
export class BuyBooksPageModule {}
