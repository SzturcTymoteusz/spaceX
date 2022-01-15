import { Injectable } from '@angular/core';
import { AuthGuard } from './auth-guard';
import { Router } from '@angular/router';
import { Authentication } from '../authentication/authentication';

@Injectable()
export class AuthGuardService implements AuthGuard {
  constructor(private authentication: Authentication, private router: Router) {}

  canActivate(): boolean {
    const user = this.authentication.user;
    if (user) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
