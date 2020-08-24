import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { KnocksMealsPage } from './knocks-meals.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('KnocksMealsPage', () => {
  let component: KnocksMealsPage;
  let fixture: ComponentFixture<KnocksMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnocksMealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(KnocksMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
