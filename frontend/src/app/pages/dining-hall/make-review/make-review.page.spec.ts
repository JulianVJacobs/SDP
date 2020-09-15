import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { MakeReviewPage } from './make-review.page';

describe('MakeReviewPage', () => {
  let component: MakeReviewPage;
  let fixture: ComponentFixture<MakeReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeReviewPage ],
      imports: [
        IonicModule.forRoot(), 
        RouterTestingModule, 
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        AngularFirestoreModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
