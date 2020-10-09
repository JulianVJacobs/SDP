import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexPage } from './index.page';
import { routes } from './index-routing.module';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('IndexPage', () => {
  let component: IndexPage;
  let fixture: ComponentFixture<IndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPage ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one <ion-content> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });

  it('should have at least one <router-outlet> tag', () => {
    expect(fixture.nativeElement.querySelector('router-outlet')).toBeTruthy();
  });
});

describe('IndexRoutingModule', () => {
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexPage],
      imports: [RouterTestingModule.withRoutes(routes)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  it('should have 4 routes', () => {
    expect(router.config[0].children.length).toBe(4);
  });

  it('should have a /landing route', () => {
    expect(router.config[0].children[0].path).toBe('landing');
  });

  it('should have a /login route', () => {
    expect(router.config[0].children[1].path).toBe('login');
  });

  it('should have a /signup path', () => {
    expect(router.config[0].children[2].path).toBe('signup');
  });

  it('should have a / path', () => {
    expect(router.config[0].children[3].path).toBe('');
  });

  describe('/landing route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[0].loadChildren()).toBeDefined();
    });
  });

  describe('/login route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[1].loadChildren()).toBeDefined();
    });
  });

  describe('/signup route', () => {
    it('should have a loadChildren() function', () => {
      expect(router.config[0].children[2].loadChildren()).toBeDefined();
    });
  });

  describe('/ route', () => {
    it('should have a redirectTo property', () => {
      debugger;
      expect(router.config[0].children[3].hasOwnProperty('redirectTo')).toBeTruthy();
    });

    it('should redirect to sign in', () => {
      expect(router.config[0].children[3].redirectTo).toBe("landing");
    });
  });
});
