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
});
