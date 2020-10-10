import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { firebase } from '@firebase/app';
import { routes } from './home-routing.module';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        HomeGuard
      ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('IndexRoutingModule', () => {
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [RouterTestingModule.withRoutes(routes)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  it('should have 4 routes', () => {
    expect(router.config[0].children.length).toBe(4);
  });

  it('should have a /landing route', () => {
    expect(router.config[0].children[0].path).toBe('main');
  });

  it('should have a /login route', () => {
    expect(router.config[0].children[1].path).toBe('meals');
  });

  it('should have a /signup path', () => {
    expect(router.config[0].children[2].path).toBe('dh-staff-main');
  });

  it('should have a / path', () => {
    expect(router.config[0].children[3].path).toBe('message');
  });

  describe('/main route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[0].loadChildren()).toBeDefined();
    });
  });

  describe('/meals route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[1].loadChildren()).toBeDefined();
    });
  });

  describe('/dh-staff-main route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[2].loadChildren()).toBeDefined();
    });
  });

  describe('/message route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[3].loadChildren()).toBeDefined();
    });
  });
});
