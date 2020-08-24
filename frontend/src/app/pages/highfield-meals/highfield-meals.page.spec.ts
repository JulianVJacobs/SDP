import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { HighfieldMealsPage } from './highfield-meals.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HighfieldMealsPage', () => {
  let component: HighfieldMealsPage;
  let fixture: ComponentFixture<HighfieldMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighfieldMealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HighfieldMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
