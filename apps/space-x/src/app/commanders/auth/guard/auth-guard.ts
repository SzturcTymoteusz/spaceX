import { Injectable } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
  useClass: AuthGuardService,
})
export abstract class AuthGuard implements CanActivate {
  abstract canActivate(): boolean;
}
