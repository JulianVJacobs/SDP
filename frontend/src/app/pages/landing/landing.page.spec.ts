import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
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
});
