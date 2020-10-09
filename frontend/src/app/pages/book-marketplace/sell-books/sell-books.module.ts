import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellBooksPageRoutingModule } from './sell-books-routing.module';

import { SellBooksPage } from './sell-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellBooksPageRoutingModule
  ],
  declarations: [SellBooksPage]
})
export class SellBooksPageModule {}
