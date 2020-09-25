import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseServicePage } from './choose-service.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ChooseServicePage', () => {
  let component: ChooseServicePage;
  let fixture: ComponentFixture<ChooseServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('should have at least one <ion-content>', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });
  
  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
  
  it('should have at least one <ion-card>', () => {
    expect(fixture.nativeElement.querySelector('ion-card')).toBeTruthy();
  });
  
  it('should have a foodAction() function', () => {
    expect(component.foodAction).toBeTruthy();
  });
  
  it('should have a bookAction() function', () => {
    expect(component.bookAction).toBeTruthy();
  });
  
  describe('Dining Hall <ion-card>', () => {

    it('should have the text "Dining Hall"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-card')[1].textContent).toBe("Dining Hall");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-card')[1].click).toBeTruthy();
    });

    it('should call foodAction() when clicked', () => {
      let spy = spyOn(component,'foodAction');
      fixture.nativeElement.getElementsByTagName('ion-card')[1].click();
      expect(component.foodAction).toHaveBeenCalled();
    });
  });
  
  describe('Text Books <ion-card>', () => {

    it('should have the text "Text Books"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-card')[0].textContent).toBe("Text Books");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-card')[0].click).toBeTruthy();
    });

    it('should call bookAction() when clicked', () => {
      let spy = spyOn(component,'bookAction');
      fixture.nativeElement.getElementsByTagName('ion-card')[0].click();
      expect(component.bookAction).toHaveBeenCalled();
    });
  });
});
