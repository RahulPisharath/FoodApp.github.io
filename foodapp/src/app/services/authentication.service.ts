import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(private router: Router) {}

  login() {
    this.isAuthenticated = true;
    this.router.navigateByUrl('/home');
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigateByUrl('/');
  }
}
