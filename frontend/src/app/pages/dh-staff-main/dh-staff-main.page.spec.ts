import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { DhStaffMainPage } from './dh-staff-main.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DhStaffMainPage', () => {
  let component: DhStaffMainPage;
  let fixture: ComponentFixture<DhStaffMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhStaffMainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DhStaffMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
