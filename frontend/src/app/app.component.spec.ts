import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';

describe('AppComponent', () => {

  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule, 
      ],
        providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

});

describe('AppRoutingModule', () => {
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  it('should have 12 routes', () => {
    expect(router.config.length).toBe(12);
  });

  it('should have a / route', () => {
    expect(router.config[0].path).toBe('');
  });

  describe('/ route', () => {
    it('should have a redirectTo property', () => {
      expect(router.config[0].redirectTo).toBeTruthy();
    });

    it('should have a pathMatch property', () => {
      expect(router.config[0].pathMatch).toBeTruthy();
    });
  });

  it('should have a /landing route', () => {
    expect(router.config[1].path).toBe('landing');
  });

  describe('/landing route', () => {
    it('should have a loadChildren() function', () => {
      router.config[1].loadChildren();
      expect(router.config[1].loadChildren()).toBeDefined();
      debugger;
    });
  });

  it('should have a /home path', () => {
    expect(router.config[2].path).toBe('home');
  });

  describe('/home route', () => {
    it('should have a loadChildren() function', () => {
      router.config[2].loadChildren();
      expect(router.config[2].loadChildren()).toBeDefined();
    });
  });

  it('should have a /login route', () => {
    expect(router.config[3].path).toBe('login');
  });

  describe('/login route', () => {
    it('should have a loadChildren() function', () => {
      router.config[3].loadChildren()
      expect(router.config[3].loadChildren()).toBeDefined();
    });
  });

  it('should have a /signup path', () => {
    expect(router.config[4].path).toBe('signup');
  });

  describe('/signup route', () => {
    it('should have a loadChildren() function', () => {
      router.config[4].loadChildren()
      expect(router.config[4].loadChildren()).toBeDefined();
    });
  });

  it('should have a /main route', () => {
    expect(router.config[5].path).toBe('main');
  });

  describe('/main route', () => {
    it('should have a loadChildren() function', () => {
      router.config[5].loadChildren()
      expect(router.config[5].loadChildren()).toBeDefined();
    });
  });

  it('should have a /choose-service path', () => {
    expect(router.config[6].path).toBe('choose-service');
  });

  describe('/choose-service route', () => {
    it('should have a loadChildren() function', () => {
      router.config[6].loadChildren()
      expect(router.config[6].loadChildren()).toBeDefined();
    });
  });

  it('should have a /main-tabs route', () => {
    expect(router.config[7].path).toBe('main-tabs');
  });

  describe('/main-tabs route', () => {
    it('should have a loadChildren() function', () => {
      router.config[7].loadChildren()
      expect(router.config[7].loadChildren()).toBeDefined();
    });
  });

  it('should have a /message path', () => {
    expect(router.config[8].path).toBe('message');
  });

  describe('/message route', () => {
    it('should have a loadChildren() function', () => {
      router.config[8].loadChildren()
      expect(router.config[8].loadChildren()).toBeDefined();
    });
  });

  it('should have a /edit-details path', () => {
    expect(router.config[9].path).toBe('edit-details');
  });

  describe('/edit-details route', () => {
    it('should have a loadChildren() function', () => {
      router.config[9].loadChildren()
      expect(router.config[9].loadChildren()).toBeDefined();
    });
  });

  it('should have a /message-list path', () => {
    expect(router.config[10].path).toBe('message-list');
  });

  describe('/message-list route', () => {
    it('should have a loadChildren() function', () => {
      router.config[10].loadChildren()
      expect(router.config[10].loadChildren()).toBeDefined();
    });
  });

  it('should have a /order-history path', () => {
    expect(router.config[11].path).toBe('order-history');
  });

  describe('/order-history route', () => {
    it('should have a loadChildren() function', () => {
      router.config[11].loadChildren()
      expect(router.config[11].loadChildren()).toBeDefined();
    });
  });
});
