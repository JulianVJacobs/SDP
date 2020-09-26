import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { BuyBooksPage } from './buy-books.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

fdescribe('BuyBooksPage', () => {
  let component: BuyBooksPage;
  let fixture: ComponentFixture<BuyBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        IonicModule.forRoot(), 
        RouterTestingModule, 
        HttpClientTestingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        AngularFirestoreModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
