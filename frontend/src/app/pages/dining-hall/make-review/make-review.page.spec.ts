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
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
  
  it('should have at least one <ion-item>', () => {
    expect(fixture.nativeElement.querySelector('ion-item')).toBeTruthy();
  });
  
  it('should have at least one <ion-content>', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });
  
  it('should have at least one <ion-button>', () => {
    expect(fixture.nativeElement.querySelector('ion-button')).toBeTruthy();
  });
  
  it('should have a setRating() function', () => {
    expect(component.setRating).toBeTruthy();
  });
  
  it('should have a submitReview() function', () => {
    expect(component.submitReview).toBeTruthy();
  });
  
  describe('<h1>', () => {
    it('should have the text "Review Past Meal" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Review Past Meal");
    });
  });
  
  describe('Submit Review <ion-button>', () => {
    it('should have an expand property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button').expand).toBeTruthy();
    });

    it('should have an expand property set to block', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button').expand).toBe('block');
    });

    it('should have the text "Order"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button').textContent).toBe("Submit Review");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button').click).toBeTruthy();
    });

    it('should call submitReview() when clicked', () => {
      let spy = spyOn(component,'submitReview');
      fixture.nativeElement.getElementsByTagName('ion-button').click();
      expect(component.submitReview).toHaveBeenCalled();
    });
  });
});
