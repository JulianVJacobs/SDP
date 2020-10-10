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
    it('can call canActivate() function', inject([IndexGuard], (guard: IndexGuard) => {
      guard.canActivate();
      expect(guard.canActivate).toBeDefined();
    }));
  });
});