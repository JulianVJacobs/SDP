import { RouterTestingModule } from "@angular/router/testing";
import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { IndexGuard } from './index.guard';
import { StorageService } from '../services/storage.service';
import { throwError } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

describe('IndexGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        RouterTestingModule
      ],
      providers: [
        IndexGuard,
        StorageService,
        AngularFireAuth
      ]
    });
  });

  it('should exist', inject([IndexGuard], (guard: IndexGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should have a canActivate() function', inject([IndexGuard], (guard: IndexGuard) => {
    expect(guard.canActivate).toBeDefined();
  }));  

  describe('canActivate():', () => {
    let guard: IndexGuard;
    let storageService: StorageService;
    let auth: AngularFireAuth;
    let authSpy: any;
    let storageServiceSpy: any;
    let router: Router;
    let routerSpy: any;

    it('should return true and not redirect to \\signin if storage service returns false', (done) =>  {
      storageService = new StorageService;
      storageServiceSpy = spyOn(storageService,'get');
      router = TestBed.get(Router);
      routerSpy = spyOn(router,'navigate');
      auth = TestBed.get(AngularFireAuth);
      authSpy = spyOn(auth,'signInWithEmailAndPassword').and.stub();
      authSpy
      
      storageServiceSpy.and.returnValue(Promise.resolve(false));
      router.initialNavigation();
      guard = new IndexGuard(storageService,auth,router); 
      
      guard.canActivate()
        .then((resolve) => {
          authSpy.currentUser
            .then((res) => {
              expect(resolve).toBeTruthy();
              expect(routerSpy).not.toHaveBeenCalled();
              done();
            })
      });
    });

    it('should return false and redirect to \\home if storage service returns true', (done) =>  {
      storageService = new StorageService;
      storageServiceSpy = spyOn(storageService,'get');
      router = TestBed.get(Router);
      routerSpy = spyOn(router,'navigate');
      
      storageServiceSpy.and.returnValue(Promise.resolve(true));
      router.initialNavigation();
      guard = new IndexGuard(storageService,auth,router); 
      
      guard.canActivate()
        .then((resolve) => {
          expect(resolve).toBeFalsy();
          expect(routerSpy).toHaveBeenCalledWith(['home']);
          done();
      });
    });

    it('should return true and not redirect to \\signin if storage service is unresolved', (done) =>  {
      storageService = new StorageService;
      storageServiceSpy = spyOn(storageService,'get');
      router = TestBed.get(Router);
      routerSpy = spyOn(router,'navigate');
      
      storageServiceSpy.and.returnValue(Promise.resolve(throwError({})));
      router.initialNavigation();
      guard = new IndexGuard(storageService,auth,router); 
      
      guard.canActivate();
      done();
      expect(routerSpy).not.toHaveBeenCalled();
    });
  });
});