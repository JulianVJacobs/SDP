import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { ConvoMealsPage } from './convo-meals.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

describe('ConvoMealsPage', () => {
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

  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });

  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should have at least one <ion-content>', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });

  it('should have at least one <ion-card>', () => {
    expect(fixture.nativeElement.querySelector('ion-card')).toBeTruthy();
  });

  it('should have at least one <ion-button>', () => {
    expect(fixture.nativeElement.querySelector('ion-button')).toBeTruthy();
  });

  it('should have a orderAction() function', () => {
    expect(component.orderAction).toBeTruthy();
  });

  it('should have a reviewAction() function', () => {
    expect(component.reviewAction).toBeTruthy();
  });

  describe('<h1>', () => {
    it('should have the text "Convocation" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Convocation");
    });
  });

  describe('Order <ion-button>', () => {

    it('should have the text "Order"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].textContent).toBe("Order");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].click).toBeTruthy();
    });

    it('should call orderAction() when clicked', () => {
      let spy = spyOn(component,'orderAction');
      fixture.nativeElement.getElementsByTagName('ion-button')[0].click();
      expect(component.orderAction).toHaveBeenCalled();
    });
  });

  describe('Make Review <ion-button>', () => {

    it('should have the text "Make Review"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[1].textContent).toBe("Make Review");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[1].click).toBeTruthy();
    });

    it('should call reviewAction() when clicked', () => {
      let spy = spyOn(component,'reviewAction');
      fixture.nativeElement.getElementsByTagName('ion-button')[1].click();
      expect(component.reviewAction).toHaveBeenCalled();
    });
  });
});

