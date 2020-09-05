import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.storageService.get(AuthConstants.personNumber).then( res => {
        if (res) {
          resolve(true);
        }
        else {
          this.router.navigate(['landing']);
          resolve(false);
        }
      }).catch(err => {
        resolve(false);
      });
    });
  }

  constructor(public storageService: StorageService, private router: Router) { }
}
