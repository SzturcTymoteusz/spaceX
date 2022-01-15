import { Injectable } from '@angular/core';
import { Authentication } from './authentication';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserData } from '../user-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../login';

@Injectable()
export class AuthenticationService implements Authentication {
  private userSubject = new BehaviorSubject<UserData | null>(null);

  constructor(private router: Router, private http: HttpClient) {
    const user = localStorage.getItem('user') as string | null;
    if (user) {
      this.userSubject.next(JSON.parse(user) as UserData);
    }
  }

  get user(): UserData | null {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<Login> {
    return this.http.post<Login>('login', { email, password }).pipe(
      map((login) => {
        if (login.success) {
          localStorage.setItem('user', JSON.stringify({ email, authToken: login.authToken }));
          this.userSubject.next({ email, authToken: login.authToken });
          this.router.navigate(['/']);
        }
        return login;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}
