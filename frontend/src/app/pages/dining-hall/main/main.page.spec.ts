import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import { routes } from './main-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPage ],
      imports: [
        IonicModule.forRoot(), 
        HttpClientTestingModule,
        RouterTestingModule 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('should have a message() function', () => {
    expect(component.message).toBeTruthy();
  });

  it('should have a goto() function', () => {
    expect(component.goto).toBeTruthy();
  });
  
});

describe('MainRoutingModule', () => {
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPage],
      imports: [RouterTestingModule.withRoutes(routes)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  it('should have 2 routes', () => {
    expect(router.config[0].children.length).toBe(2);
  });

  it('should have a /meals route', () => {
    expect(router.config[0].children[0].path).toBe('meals');
  });

  it('should have a /message route', () => {
    expect(router.config[0].children[1].path).toBe('message');
  });

  describe('/meals route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[0].loadChildren()).toBeDefined();
    });
  });

  describe('/message route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[1].loadChildren()).toBeDefined();
    });
  });
});
