import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { HighfeildMealsPage } from './highfeild-meals.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HighfeildMealsPage', () => {
  let component: HighfeildMealsPage;
  let fixture: ComponentFixture<HighfeildMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighfeildMealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HighfeildMealsPage);
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
    it('should have the text "Highfield" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Highfield");
    });
  });

  describe('Order <ion-button>', () => {
    // it('should have an expand property', () => {
    //   expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBeTruthy();
    // });

    // it('should have an expand property set to block', () => {
    //   expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBe('block');
    // });

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
    // it('should have an expand property', () => {
    //   expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBeTruthy();
    // });

    // it('should have an expand property set to block', () => {
    //   expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBe('block');
    // });

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
