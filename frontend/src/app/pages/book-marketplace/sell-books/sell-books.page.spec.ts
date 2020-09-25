import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { SellBooksPage } from './sell-books.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

describe('SellBooksPage', () => {
  let component: SellBooksPage;
  let fixture: ComponentFixture<SellBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellBooksPage ],
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

    fixture = TestBed.createComponent(SellBooksPage);
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
  
  it('should have at least one <ion-content>', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });
  
  it('should have at least one <ion-item>', () => {
    expect(fixture.nativeElement.querySelector('ion-item')).toBeTruthy();
  });
  
  it('should have at least one <ion-list>', () => {
    expect(fixture.nativeElement.querySelector('ion-list')).toBeTruthy();
  });
  
  it('should have at least one <ion-button>', () => {
    expect(fixture.nativeElement.querySelector('ion-button')).toBeTruthy();
  });
  
  it('should have a addBook() function', () => {
    expect(component.addBook).toBeTruthy();
  });
  
  it('should have a remove() function', () => {
    expect(component.remove).toBeTruthy();
  });
  
  describe('<h1>', () => {
    it('should have the text "Sell Books" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Sell Books");
    });
  });
  
  describe('Add <ion-button>', () => {

    it('should have the text "Add"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].textContent).toBe("Add");
    });
    
  });
});
