import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { ConvoMealsPage } from './convo-meals.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ConvoMealsPage', () => {
  let component: ConvoMealsPage;
  let fixture: ComponentFixture<ConvoMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvoMealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvoMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
