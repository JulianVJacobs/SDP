import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { JubsMealsPage } from './jubs-meals.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('JubsMealsPage', () => {
  let component: JubsMealsPage;
  let fixture: ComponentFixture<JubsMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JubsMealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(JubsMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
