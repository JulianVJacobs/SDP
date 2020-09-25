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

describe('BuyBooksPage', () => {
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
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
  
  it('should have at least one <h2> tag', () => {
    expect(fixture.nativeElement.querySelector('h2')).toBeTruthy();
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
  
  it('should have a message() function', () => {
    expect(component.message).toBeTruthy();
  });
  
  it('should have a buy() function', () => {
    expect(component.buy).toBeTruthy();
  });
  
  describe('<h1>', () => {
    it('should have the text "Buy Books" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Buy Books");
    });
  });
  
  describe('Buy <ion-button>', () => {
    it('should have an expand property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBeTruthy();
    });

    it('should have an expand property set to block', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBe('block');
    });

    it('should have the text "Buy"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].textContent).toBe("Buy");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].click).toBeTruthy();
    });

    it('should call buy() when clicked', () => {
      let spy = spyOn(component,'buy');
      fixture.nativeElement.getElementsByTagName('ion-button')[0].click();
      expect(component.buy).toHaveBeenCalled();
    });
  });
  
  describe('Contact Seller <ion-button>', () => {
    it('should have an expand property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBeTruthy();
    });

    it('should have an expand property set to block', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBe('block');
    });

    it('should have the text "Contact Seller"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].textContent).toBe("Contact Seller");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].click).toBeTruthy();
    });

    it('should call message() when clicked', () => {
      let spy = spyOn(component,'message');
      fixture.nativeElement.getElementsByTagName('ion-button')[0].click();
      expect(component.message).toHaveBeenCalled();
    });
  });
});
