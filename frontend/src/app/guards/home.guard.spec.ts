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

  describe('canActivate():', () => {
    it('can call canActivate() function', inject([HomeGuard], (guard: HomeGuard) => {
      guard.canActivate();
      expect(guard.canActivate).toBeDefined();
    }));
  });
});