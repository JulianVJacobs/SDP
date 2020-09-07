import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';

import { LandingPage } from './landing.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('LandingPage', () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an loginAction() function', () => {
    expect(component.loginAction).toBeTruthy();
  });

  it('should have an signupAction() function', () => {
    expect(component.signupAction).toBeTruthy();
  });

  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });

  it('should have at least one <ion-content>', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });
  
  it('should have at least one <ion-button>', () => {
    expect(fixture.nativeElement.querySelector('ion-button')).toBeTruthy();
  });

  describe('<h1>', () => {
    it('should have the text "Welcome." before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Welcome.");
    });
  });

  describe('Log In <ion-button>', () => {

    it('should have the text "Log In"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].textContent).toBe("Log In");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].click).toBeTruthy();
    });

    it('should call orderAction() when clicked', () => {
      let spy = spyOn(component,'loginAction');
      fixture.nativeElement.getElementsByTagName('ion-button')[0].click();
      expect(component.loginAction).toHaveBeenCalled();
    });
  });

  describe('Sign Up <ion-button>', () => {

    it('should have the text "Sign Up"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[1].textContent).toBe("Sign Up");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[1].click).toBeTruthy();
    });

    it('should call signupAction() when clicked', () => {
      let spy = spyOn(component,'signupAction');
      fixture.nativeElement.getElementsByTagName('ion-button')[1].click();
      expect(component.signupAction).toHaveBeenCalled();
    });
  });

});
