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
  
  
});
