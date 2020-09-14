import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.auth.currentUser
        .then((res) => {
          this.storageService.get(res.uid).then( res => {
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
        })      
    });
  }

  constructor(
    public storageService: StorageService, 
    private auth: AngularFireAuth,
    private router: Router
    ) { }
}
