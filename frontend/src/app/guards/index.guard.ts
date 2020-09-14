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
      this.auth.currentUser
        .then((res) => {
          this.storageService.get(res.uid).then( res => {
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
    })
    });
  }

  constructor(
    public storageService: StorageService, 
    private auth: AngularFireAuth,
    private router: Router
    ) { }
}
