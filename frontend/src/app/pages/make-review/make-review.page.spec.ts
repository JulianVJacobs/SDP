import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';

import { MakeReviewPage } from './make-review.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

describe('MakeReviewPage', () => {
  let component: MakeReviewPage;
  let fixture: ComponentFixture<MakeReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeReviewPage ],
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

    fixture = TestBed.createComponent(MakeReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have an setRating() function', () => {
    expect(component.setRating).toBeTruthy();
  });
  
  it('should have an submitReview() function', () => {
    expect(component.submitReview).toBeTruthy();
  });
  
  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
  
  it('should have at least one <ion-list>', () => {
    expect(fixture.nativeElement.querySelector('ion-list')).toBeTruthy();
  });
  
  it('should have at least one <ion-item>', () => {
    expect(fixture.nativeElement.querySelector('ion-item')).toBeTruthy();
  });
  
  it('should have at least one <ion-button>', () => {
    expect(fixture.nativeElement.querySelector('ion-button')).toBeTruthy();
  });
  
  describe('<h1>', () => {
    it('should have the text "Review Past Meal" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Review Past Meal");
    });
  });
});
