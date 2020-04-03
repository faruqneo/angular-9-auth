import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public signIn(userData: User) {
    localStorage.setItem('ACCESS_TOKEN', userData.email);
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null
    /*
     const token = localStorage.getItem('ACCESS_TOKEN');
     return this.jwtHelper.isTokenExpired(token) !== true
     */
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN')
  }
}
