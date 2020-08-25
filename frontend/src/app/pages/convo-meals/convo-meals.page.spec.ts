import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { ConvoMealsPage } from './convo-meals.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

xdescribe('ConvoMealsPage', () => {
  let component: ConvoMealsPage;
  let fixture: ComponentFixture<ConvoMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvoMealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        IonicModule.forRoot(), 
        RouterTestingModule, 
        HttpClientTestingModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvoMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
