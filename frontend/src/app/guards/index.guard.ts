import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
          resolve(true);
    });
  }

  constructor(
    public storageService: StorageService, 
    ) { }
}
