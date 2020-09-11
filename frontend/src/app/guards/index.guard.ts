import { Injectable, resolveForwardRef } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { firebase } from '@firebase/app';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.storageService.get(firebase.auth().currentUser.uid).then( res => {
        if (res) {
          this.router.navigate(['home']);
          resolve(false);
        }
        else {
          resolve(true);
        }
      }).catch(err => {
          resolve(false);
      });
    });
  }

  constructor(public storageService: StorageService, private router: Router) { }
}
