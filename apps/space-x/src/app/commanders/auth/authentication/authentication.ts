import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { UserData } from '../user-data';
import { Login } from '../login';

@Injectable({
  providedIn: 'root',
  useClass: AuthenticationService,
})
export abstract class Authentication {
  abstract get user(): UserData | null;

  abstract login(email: string, password: string): Observable<Login>;

  abstract logout(): void;
}
