import { Injectable } from '@angular/core';
import { Login } from './login';
import { LoginForm } from '../login-form/login-form';
import { Authentication } from '../../../../../commanders/auth/authentication/authentication';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class LoginService implements Login {
  constructor(private loginForm: LoginForm, private authentication: Authentication) {}

  login() {
    this.loginForm.password.updateValueAndValidity();

    if (this.loginForm.form.valid) {
      this.authentication
        .login(this.loginForm.email.value, this.loginForm.password.value)
        .pipe(
          catchError((err) => {
            if (err.status === 401) {
              this.loginForm.password.setErrors({ invalidCredentials: true });
            }
            return throwError(err);
          })
        )
        .subscribe();
      return;
    }

    this.loginForm.form.markAllAsTouched();
  }
}
