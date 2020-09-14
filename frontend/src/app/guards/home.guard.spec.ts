import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';
import { TestBed, inject } from '@angular/core/testing';

import { HomeGuard } from './home.guard';
import { StorageService } from '../services/storage.service';
import { routes } from '../home/home-routing.module';
import { HomePageModule } from '../home/home.module';
import { throwError } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

describe('HomeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HomePageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      providers: [
        HomeGuard, 
        StorageService,
        AngularFireAuth
      ]
    });
  });

  it('should exist', inject([HomeGuard], (guard: HomeGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should have a canActivate() function', inject([HomeGuard], (guard: HomeGuard) => {
    expect(guard.canActivate).toBeDefined();
  }));  

  xdescribe('canActivate():', () => {
    let guard: HomeGuard;
    let storageService: StorageService;
    let storageServiceSpy: any;
    let auth: AngularFireAuth;
    let router: Router;
    let routerSpy: any;

    it('should return false and redirect to \\landing if storage service returns false', (done) =>  {
      storageService = new StorageService;
      storageServiceSpy = spyOn(storageService,'get');
      router = TestBed.get(Router);
      routerSpy = spyOn(router,'navigate');

      storageServiceSpy.and.returnValue(Promise.resolve(false));
      router.initialNavigation();
      guard = new HomeGuard(storageService,auth,router); 
      
      guard.canActivate()
        .then((resolve) => {
          expect(resolve).toBeFalsy();
          expect(routerSpy).toHaveBeenCalledWith(['landing']);
      done();
      });
    });

    it('should return true and not redirect to \\landing if storage service returns true', (done) =>  {
      storageService = new StorageService;
      storageServiceSpy = spyOn(storageService,'get');
      router = TestBed.get(Router);
      routerSpy = spyOn(router,'navigate');
      
      storageServiceSpy.and.returnValue(Promise.resolve(true));
      router.initialNavigation();
      guard = new HomeGuard(storageService,auth,router); 
      
      guard.canActivate()
        .then((resolve) => {
          expect(resolve).toBeTruthy();
          expect(routerSpy).not.toHaveBeenCalled();
      done();
      });
    });

    it('should return true and not redirect to \\landing if storage service is unresolved', (done) =>  {
      storageService = new StorageService;
      storageServiceSpy = spyOn(storageService,'get');
      router = TestBed.get(Router);
      routerSpy = spyOn(router,'navigate');
      
      storageServiceSpy.and.returnValue(Promise.resolve(throwError({})));
      router.initialNavigation();
      guard = new HomeGuard(storageService,auth,router); 
      
      guard.canActivate();
      done();
      expect(routerSpy).not.toHaveBeenCalled();
    });
  });
});