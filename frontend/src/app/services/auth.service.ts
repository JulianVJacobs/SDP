import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$ = new BehaviorSubject<any>('');

  constructor(
    private httpService: HttpService, 
    private storageService: StorageService, 
    private router: Router
    ) { }

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      this.userData$.next(res);
    })
  }

  login (postData: any): Observable<any> {
    return this.httpService.post('login', postData)
  }

  signup (postData: any): Observable<any> {
    return this.httpService.post('signup', postData)
  }

  order_inc (postData: any): Observable<any> {
    return this.httpService.post('order:inc', postData)
  }

  order_place (postData: any): Observable<any> {
    return this.httpService.post('order:place', postData)
  }

  count (): Observable<any> {
    return this.httpService.get('dh-staff-main:count')
  }

  signout () {
    this.storageService.removeItem(AuthConstants.AUTH).then(res => {
      this.userData$.next('');
      this.router.navigate(['signin']);
    })
  }
}
