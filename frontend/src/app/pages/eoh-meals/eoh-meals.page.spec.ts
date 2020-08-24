import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { EohMealsPage } from './eoh-meals.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EohMealsPage', () => {
  let component: EohMealsPage;
  let fixture: ComponentFixture<EohMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EohMealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EohMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
