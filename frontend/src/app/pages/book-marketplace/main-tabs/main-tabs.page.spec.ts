import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { MainTabsPage } from './main-tabs.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MainTabsPage', () => {
  let component: MainTabsPage;
  let fixture: ComponentFixture<MainTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MainTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('should have at least one <ion-content>', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });
  
  it('should have at least one <ion-tab-button>', () => {
    expect(fixture.nativeElement.querySelector('ion-tab-button')).toBeTruthy();
  });
  
  it('should have at least one <ion-tabs>', () => {
    expect(fixture.nativeElement.querySelector('ion-tabs')).toBeTruthy();
  });
});
